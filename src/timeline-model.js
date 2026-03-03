import { Temporal } from '@js-temporal/polyfill';
import { parseSpan, spanToMilliseconds } from './span-parser.js';

// Regex patterns for ISO 8601 timestamp variants
const RE_YEAR_ONLY = /^(-?\d{4,6})$/;
const RE_YEAR_MONTH = /^(-?\d{4,6})-(\d{2})$/;
const RE_DATE_ONLY = /^(-?\d{4,6})-(\d{2})-(\d{2})$/;
const RE_DATETIME = /^(-?\d{4,6})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?$/;

export function parseTimestamp(str) {
   if(typeof str !== 'string' || str.trim() === '') {
      return null;
   }

   const s = str.trim();

   try {
      if(RE_YEAR_ONLY.test(s)) {
         const year = parseInt(s, 10);
         return Temporal.PlainDateTime.from({ year, month: 1, day: 1, hour: 0, minute: 0, second: 0 });
      }

      if(RE_YEAR_MONTH.test(s)) {
         const m = s.match(RE_YEAR_MONTH);
         const year = parseInt(m[1], 10);
         const month = parseInt(m[2], 10);
         return Temporal.PlainDateTime.from({ year, month, day: 1, hour: 0, minute: 0, second: 0 });
      }

      if(RE_DATE_ONLY.test(s)) {
         const m = s.match(RE_DATE_ONLY);
         const year = parseInt(m[1], 10);
         const month = parseInt(m[2], 10);
         const day = parseInt(m[3], 10);
         return Temporal.PlainDateTime.from({ year, month, day, hour: 0, minute: 0, second: 0 });
      }

      if(RE_DATETIME.test(s)) {
         return Temporal.PlainDateTime.from(s);
      }

      console.warn('parseTimestamp: unrecognized timestamp format:', str);
      return null;
   }
   catch(e) {
      console.warn('parseTimestamp: failed to parse timestamp:', str, e.message);
      return null;
   }
}

export function buildTimelineModel(slides, config) {
   const entries = slides.map((slideEl, slideIndex) => {
      const rawTimestamp = slideEl.dataset ? slideEl.dataset.timestamp : undefined;
      const rawSpan = slideEl.dataset ? slideEl.dataset.span : undefined;

      // Parse timestamp
      let timestamp = null;
      let temporal = false;

      if(rawTimestamp != null && rawTimestamp !== '') {
         timestamp = parseTimestamp(rawTimestamp);
         if(timestamp !== null) {
            temporal = true;
         }
      }

      // Resolve span: slide-level overrides config default
      let parsedSpan = null;
      let spanMs = null;

      if(rawSpan != null && rawSpan !== '') {
         parsedSpan = parseSpan(rawSpan);
      }
      else {
         parsedSpan = parseSpan(config.defaultSpan);
      }

      if(parsedSpan === null) {
         if(temporal) {
            console.warn('buildTimelineModel: slide', slideIndex, 'has a valid timestamp but an invalid span; marking as non-temporal');
            temporal = false;
         }
      }
      else {
         spanMs = spanToMilliseconds(parsedSpan);
      }

      return {
         slideIndex,
         slideEl,
         temporal,
         timestamp,
         parsedSpan,
         spanMs,
         visited: false,
      };
   });

   const temporalEntries = entries.filter(e => e.temporal);

   let minTimestamp = null;
   let maxTimestamp = null;

   for(const entry of temporalEntries) {
      if(minTimestamp === null || Temporal.PlainDateTime.compare(entry.timestamp, minTimestamp) < 0) {
         minTimestamp = entry.timestamp;
      }
      if(maxTimestamp === null || Temporal.PlainDateTime.compare(entry.timestamp, maxTimestamp) > 0) {
         maxTimestamp = entry.timestamp;
      }
   }

   return {
      entries,
      temporalEntries,
      minTimestamp,
      maxTimestamp,
   };
}
