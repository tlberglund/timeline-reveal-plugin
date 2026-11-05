import { Temporal } from '@js-temporal/polyfill';
import { resolveConfig } from './config.js';
import { parseSpan, spanToMilliseconds, spanToString } from './span-parser.js';
import { buildTimelineModel } from './timeline-model.js';
import {
   injectTicker,
   renderTicker,
   resetEpochLabelCache,
} from './ticker-renderer.js';
import {
   AnimationController,
   plainDateTimeToMs,
   logLerp,
   computeLabelCrossfade,
} from './animation.js';
import {
   populatePlaceholders,
   populateOverviewPlaceholders,
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

      // Reveal may not have marked vertical-stack parents with .stack yet when
      // plugins initialize, so getSlides() can still include them. Keep only
      // real slides (sections without child sections).
      const slides = deck.getSlides().filter(s => !s.querySelector(':scope > section'));
      const model = buildTimelineModel(slides, config);

      function entryForSlide(slideEl) {
         return model.entries.find(e => e.slideEl === slideEl) || null;
      }

      const revealEl = deck.getRevealElement();
      const svgEl = injectTicker(revealEl, config, model.epochs.length);

      // Animation state
      // activeLayer tracks which label layer (a or b) is the "live" one
      let activeLayer = 'a';
      let layerOpacity = { a: 1, b: 0 };
      let currentTimestamp = null;
      let currentSpanMs = null;
      let currentPrecision = null;
      // Named opacities: 'overview' plus one 'epoch:<id>' per epoch
      let currentFades = {};
      // Range of the most recent overview slide, kept while its edge labels fade out
      let currentRange = null;

      function targetFades(entry) {
         const fades = { overview: entry.overview ? 1 : 0 };
         for(const epoch of model.epochs) {
            fades['epoch:' + epoch.id] = entry.epochIds.includes(epoch.id) ? 1 : 0;
         }
         return fades;
      }

      function fadesEqual(a, b) {
         const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
         for(const key of keys) {
            if((a[key] || 0) !== (b[key] || 0)) return false;
         }
         return true;
      }

      // Where the viewport goes for an entry: its timestamp, or an overview's center
      function viewFor(entry) {
         return entry.overview
            ? { timestamp: entry.center, spanMs: entry.spanMs, precision: currentPrecision }
            : { timestamp: entry.timestamp, spanMs: entry.spanMs, precision: entry.precision };
      }

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

      function renderFrame(timestamp, spanMs, animT, precision, fades) {
         if(fades) {
            currentFades = fades;
         }

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
            precision: precision != null ? precision : currentPrecision,
            spanMs,
            activeLayer,
            layerOpacity,
            fades: currentFades,
            range: currentRange,
         };

         renderTicker(svgEl, state, model, config);
      }

      function renderInitial(entry) {
         const view = viewFor(entry);
         if(entry.overview) {
            currentRange = rangeFor(entry);
         }
         currentTimestamp = view.timestamp;
         currentSpanMs = view.spanMs;
         currentPrecision = view.precision;
         currentIntervalKey = getIntervalKey(currentSpanMs);
         layerOpacity = { a: 1, b: 0 };
         activeLayer = 'a';
         renderFrame(currentTimestamp, currentSpanMs, null, currentPrecision, targetFades(entry));
      }

      function rangeFor(entry) {
         return {
            start: entry.rangeStart,
            startPrecision: entry.rangeStartPrecision,
            end: entry.rangeEndAuthored,
            endPrecision: entry.rangeEndPrecision,
         };
      }

      function publishEntry(entry) {
         if(entry.overview) {
            populateOverviewPlaceholders(entry.slideEl, entry, config.eraSuffix, model.epochs);
            dispatchTimelineChange(revealEl, null, null, null, { start: entry.rangeStart, end: entry.rangeEnd });
         }
         else {
            populatePlaceholders(entry.slideEl, entry.timestamp, entry.precision, spanToString(entry.parsedSpan), config.eraSuffix, model.epochs, entry.epochIds);
            dispatchTimelineChange(revealEl, entry.timestamp, entry.spanMs, spanToString(entry.parsedSpan));
         }
      }

      // --- Task 7.2: Render initial state ---
      const initialSlide = deck.getCurrentSlide ? deck.getCurrentSlide() : null;
      const initialEntry = (initialSlide && entryForSlide(initialSlide)) || model.entries[0];

      if(initialEntry && (initialEntry.temporal || initialEntry.overview)) {
         initialEntry.visited = true;
         renderInitial(initialEntry);
         publishEntry(initialEntry);
      }
      else {
         // Non-temporal first slide: fade out ticker
         handleNonTemporal(revealEl);
      }

      // --- AnimationController setup ---
      const animController = new AnimationController(
         config,
         // onFrame: called each rAF
         ({ timestamp, spanMs, t, fades }) => {
            renderFrame(timestamp, spanMs, t, null, fades);
         },
         // onComplete: called when animation finishes
         ({ timestamp, spanMs, fades }) => {
            currentTimestamp = timestamp;
            currentSpanMs = spanMs;
            renderFrame(timestamp, spanMs, null, null, fades);
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

         const view = viewFor(entry);
         if(entry.overview) {
            currentRange = rangeFor(entry);
         }

         const from = currentTimestamp
            ? { timestamp: currentTimestamp, spanMs: currentSpanMs, fades: currentFades }
            : null;

         const to = { timestamp: view.timestamp, spanMs: view.spanMs, fades: targetFades(entry) };

         // Always record the destination as current so the next transition has a valid from
         currentTimestamp = view.timestamp;
         currentSpanMs = view.spanMs;
         currentPrecision = view.precision;

         // No previous position — snap directly to the destination
         if(!from) {
            renderFrame(to.timestamp, to.spanMs, null, null, to.fades);
            return;
         }

         // Already at the same position with nothing to fade — re-render in place
         if(Temporal.PlainDateTime.compare(from.timestamp, to.timestamp) === 0 && from.spanMs === to.spanMs && fadesEqual(from.fades, to.fades)) {
            renderFrame(to.timestamp, to.spanMs, null, null, to.fades);
            return;
         }

         animController.start(from, to);
      }

      // --- Task 7.3: slidechanged event handler ---
      deck.on('slidechanged', ({ currentSlide }) => {
         // Find the model entry by slide element; indices can disagree with
         // getSlides() when vertical stacks are present.
         const entry = entryForSlide(currentSlide || deck.getCurrentSlide());

         if(!entry || !(entry.temporal || entry.overview)) {
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

         // Overview slides take the same animated path as temporal ones, which
         // also keeps the ticker visible regardless of noTimestamp.
         handleTemporal(entry);
         publishEntry(entry);
      });

      // --- Task 7.6: resize handler ---
      deck.on('resize', () => {
         // Font size may have changed with the viewport; re-measure epoch labels.
         resetEpochLabelCache();
         if(currentTimestamp && currentSpanMs) {
            renderFrame(currentTimestamp, currentSpanMs, null);
         }
      });
   }
};

export default RevealTimeline;
