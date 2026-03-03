import { Temporal } from '@js-temporal/polyfill';
import { resolveConfig } from './config.js';
import { parseSpan, spanToMilliseconds, spanToString } from './span-parser.js';
import { buildTimelineModel } from './timeline-model.js';
import {
   injectTicker,
   renderTicker,
   renderCenterMarker,
   updateDotMarkers,
   computeTicks,
} from './ticker-renderer.js';
import {
   AnimationController,
   plainDateTimeToMs,
   logLerp,
   computeLabelCrossfade,
} from './animation.js';
import {
   populatePlaceholders,
   clearPlaceholders,
   formatTimestampForDisplay,
   dispatchTimelineChange,
} from './slide-data-api.js';

const RevealTimeline = {
   id: 'timeline',
   init(deck) {
      // --- Task 7.1/7.2: Build model, inject ticker, render initial state ---

      const userConfig = (deck.getConfig && deck.getConfig().timeline) || {};
      const config = resolveConfig(userConfig);

      const slides = deck.getSlides();
      const model = buildTimelineModel(slides, config);

      const revealEl = deck.getRevealElement();
      const svgEl = injectTicker(revealEl, config);

      // Animation state
      // activeLayer tracks which label layer (a or b) is the "live" one
      let activeLayer = 'a';
      let layerOpacity = { a: 1, b: 0 };
      let currentTimestamp = null;
      let currentSpanMs = null;

      // For label crossfade: track the interval key of the current render
      let currentIntervalKey = null;

      function getIntervalKey(spanMs) {
         // Reproduce the interval table logic — return a string key
         if(spanMs < 120000) return 'second-10';
         if(spanMs < 3600000) return 'minute-5';
         if(spanMs < 43200000) return 'hour-1';
         if(spanMs < 604800000) return 'hour-12';
         if(spanMs < 7776000000) return 'week-1';
         if(spanMs < 47336400000) return 'month-1';
         if(spanMs < 315569520000) return 'year-1';
         if(spanMs < 3155695200000) return 'year-10';
         if(spanMs < 31556952000000) return 'year-100';
         return 'year-500';
      }

      function renderFrame(timestamp, spanMs, animT) {
         // Determine if label crossfade is needed
         const newKey = getIntervalKey(spanMs);
         const formatChanged = newKey !== currentIntervalKey;

         const crossfade = computeLabelCrossfade(formatChanged, animT != null ? animT : 1, activeLayer);

         if(crossfade.activeLayer !== activeLayer) {
            activeLayer = crossfade.activeLayer;
            currentIntervalKey = newKey;
         }
         else if(formatChanged && animT === null) {
            // Instant change (no animation) — swap layers immediately
            activeLayer = activeLayer === 'a' ? 'b' : 'a';
            currentIntervalKey = newKey;
         }

         layerOpacity = crossfade.opacities;

         const state = {
            centerTimestamp: timestamp,
            spanMs,
            activeLayer,
            layerOpacity,
         };

         renderTicker(svgEl, state, model, config);
      }

      function renderInitial(entry) {
         if(!entry || !entry.temporal) return;
         currentTimestamp = entry.timestamp;
         currentSpanMs = entry.spanMs;
         currentIntervalKey = getIntervalKey(currentSpanMs);
         layerOpacity = { a: 1, b: 0 };
         activeLayer = 'a';
         renderFrame(currentTimestamp, currentSpanMs, null);
      }

      // --- Task 7.2: Render initial state ---
      const initialState = deck.getState();
      const initialIndex = initialState ? (initialState.indexh || 0) : 0;
      const initialEntry = model.entries[initialIndex] || model.entries[0];

      if(initialEntry && initialEntry.temporal) {
         initialEntry.visited = true;
         renderInitial(initialEntry);
         populatePlaceholders(initialEntry.slideEl, initialEntry.timestamp, spanToString(initialEntry.parsedSpan), config.eraSuffix);
         dispatchTimelineChange(revealEl, initialEntry.timestamp, initialEntry.spanMs, spanToString(initialEntry.parsedSpan));
      }
      else {
         // Non-temporal first slide: fade out ticker
         handleNonTemporal(revealEl);
      }

      // --- AnimationController setup ---
      const animController = new AnimationController(
         config,
         // onFrame: called each rAF
         ({ timestamp, spanMs, t }) => {
            renderFrame(timestamp, spanMs, t);
         },
         // onComplete: called when animation finishes
         ({ timestamp, spanMs }) => {
            currentTimestamp = timestamp;
            currentSpanMs = spanMs;
            renderFrame(timestamp, spanMs, null);
         }
      );

      function handleNonTemporal(deckEl) {
         // Task 7.4: fade/hide/freeze based on config
         if(config.noTimestamp === 'hide') {
            svgEl.style.opacity = '0';
            svgEl.style.display = 'none';
         }
         else if(config.noTimestamp === 'freeze') {
            // Do nothing — leave ticker visible at current position
         }
         else {
            // 'fade' (default)
            svgEl.style.transition = `opacity ${config.animation.duration}ms ease`;
            svgEl.style.opacity = '0';
         }
      }

      function handleTemporal(entry) {
         // Show ticker
         svgEl.style.display = '';
         svgEl.style.transition = `opacity ${config.animation.duration}ms ease`;
         svgEl.style.opacity = '1';

         const from = currentTimestamp
            ? { timestamp: currentTimestamp, spanMs: currentSpanMs }
            : null;

         const to = { timestamp: entry.timestamp, spanMs: entry.spanMs };

         // Always record the destination as current so the next transition has a valid from
         currentTimestamp = entry.timestamp;
         currentSpanMs = entry.spanMs;

         // No previous position — snap directly to the destination
         if(!from) {
            renderFrame(to.timestamp, to.spanMs, null);
            return;
         }

         // Already at same position — re-render in place
         if(Temporal.PlainDateTime.compare(from.timestamp, to.timestamp) === 0 && from.spanMs === to.spanMs) {
            renderFrame(to.timestamp, to.spanMs, null);
            return;
         }

         animController.start(from, to);
      }

      // --- Task 7.3: slidechanged event handler ---
      deck.on('slidechanged', ({ indexh, indexv }) => {
         // Find model entry by slide index
         // deck.getSlides() returns a flat list
         const flatSlides = deck.getSlides();
         const idx = flatSlides.indexOf(deck.getCurrentSlide ? deck.getCurrentSlide() : flatSlides[indexh]);
         const entry = model.entries[idx] || model.entries[indexh] || null;

         if(!entry || !entry.temporal) {
            // Task 7.4: non-temporal slide
            const currentSlideEl = deck.getCurrentSlide ? deck.getCurrentSlide() : null;
            if(currentSlideEl) clearPlaceholders(currentSlideEl, config.eraSuffix);
            dispatchTimelineChange(revealEl, null, null, null);
            handleNonTemporal(revealEl);
            return;
         }

         // Task 7.5: Mark as visited
         if(!entry.visited) {
            entry.visited = true;
         }

         handleTemporal(entry);

         // Task 7.3: populate placeholders and dispatch event
         populatePlaceholders(entry.slideEl, entry.timestamp, spanToString(entry.parsedSpan), config.eraSuffix);
         dispatchTimelineChange(revealEl, entry.timestamp, entry.spanMs, spanToString(entry.parsedSpan));
      });

      // --- Task 7.6: resize handler ---
      deck.on('resize', () => {
         if(currentTimestamp && currentSpanMs) {
            renderFrame(currentTimestamp, currentSpanMs, null);
         }
      });
   }
};

export default RevealTimeline;
