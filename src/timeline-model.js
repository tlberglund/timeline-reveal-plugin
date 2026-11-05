import { Temporal } from '@js-temporal/polyfill';
import { parseSpan, spanToMilliseconds } from './span-parser.js';
import { plainDateTimeToMs, msToPlainDateTime } from './animation.js';

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
         return {
            timestamp: Temporal.PlainDateTime.from({ year, month: 1, day: 1, hour: 0, minute: 0, second: 0 }),
            precision: 'year',
         };
      }

      if(RE_YEAR_MONTH.test(s)) {
         const m = s.match(RE_YEAR_MONTH);
         const year = parseInt(m[1], 10);
         const month = parseInt(m[2], 10);
         return {
            timestamp: Temporal.PlainDateTime.from({ year, month, day: 1, hour: 0, minute: 0, second: 0 }),
            precision: 'month',
         };
      }

      if(RE_DATE_ONLY.test(s)) {
         const m = s.match(RE_DATE_ONLY);
         const year = parseInt(m[1], 10);
         const month = parseInt(m[2], 10);
         const day = parseInt(m[3], 10);
         return {
            timestamp: Temporal.PlainDateTime.from({ year, month, day, hour: 0, minute: 0, second: 0 }),
            precision: 'day',
         };
      }

      if(RE_DATETIME.test(s)) {
         return {
            timestamp: Temporal.PlainDateTime.from(s),
            precision: 'datetime',
         };
      }

      console.warn('parseTimestamp: unrecognized timestamp format:', str);
      return null;
   }
   catch(e) {
      console.warn('parseTimestamp: failed to parse timestamp:', str, e.message);
      return null;
   }
}

/**
 * Returns the exclusive bound one precision-unit after a parsed timestamp,
 * so that an authored end like "1945" means "through the end of 1945".
 */
export function resolveRangeEnd(parsed) {
   const units = {
      year: { years: 1 },
      month: { months: 1 },
      day: { days: 1 },
      datetime: { seconds: 1 },
   };
   return parsed.timestamp.add(units[parsed.precision] || { seconds: 1 });
}

export function buildEpochModel(config) {
   const epochs = config.epochs || [];
   const result = [];

   for(const e of epochs) {
      const startParsed = parseTimestamp(e.start);
      if(startParsed === null) {
         console.warn('buildEpochModel: invalid start timestamp for epoch', e.id, ':', e.start);
         continue;
      }
      const endParsed = parseTimestamp(e.end);
      if(endParsed === null) {
         console.warn('buildEpochModel: invalid end timestamp for epoch', e.id, ':', e.end);
         continue;
      }
      const endTimestamp = resolveRangeEnd(endParsed);
      if(Temporal.PlainDateTime.compare(endTimestamp, startParsed.timestamp) <= 0) {
         console.warn('buildEpochModel: epoch', e.id, 'ends before it starts; omitting it');
         continue;
      }
      result.push({
         id: e.id,
         label: e.label,
         color: e.color != null && e.color !== '' ? e.color : null,
         lane: result.length,
         startTimestamp: startParsed.timestamp,
         startPrecision: startParsed.precision,
         endTimestamp,
         endAuthored: endParsed.timestamp,
         endPrecision: endParsed.precision,
      });
   }

   return result;
}

/**
 * Returns the ids of the epochs containing a timestamp (start <= t < end), in config order.
 */
export function epochIdsContaining(epochs, timestamp) {
   return epochs
      .filter(e => Temporal.PlainDateTime.compare(e.startTimestamp, timestamp) <= 0
         && Temporal.PlainDateTime.compare(timestamp, e.endTimestamp) < 0)
      .map(e => e.id);
}

const AUTO_FIT_PADDING = 0.05;

function makeRange(start, startPrecision, end, endAuthored, endPrecision, padding) {
   const startMs = plainDateTimeToMs(start);
   const endMs = plainDateTimeToMs(end);
   const rangeMs = endMs - startMs;
   return {
      rangeStart: start,
      rangeStartPrecision: startPrecision,
      rangeEnd: end,
      rangeEndAuthored: endAuthored,
      rangeEndPrecision: endPrecision,
      center: msToPlainDateTime(startMs + rangeMs / 2),
      spanMs: rangeMs * (1 + 2 * padding),
   };
}

/**
 * Resolves a slide's overview range, or returns null if the slide is not a (valid) overview.
 */
function resolveOverview(dataset, slideIndex, epochs) {
   const rawStart = dataset.timestampStart;
   const rawEnd = dataset.timestampEnd;
   const hasStart = rawStart != null && rawStart !== '';
   const hasEnd = rawEnd != null && rawEnd !== '';

   if(hasStart || hasEnd) {
      if(!hasStart || !hasEnd) {
         console.warn('buildTimelineModel: slide', slideIndex, 'needs both data-timestamp-start and data-timestamp-end; treating as non-temporal');
         return { invalid: true };
      }
      const startParsed = parseTimestamp(rawStart);
      const endParsed = parseTimestamp(rawEnd);
      if(startParsed === null || endParsed === null) {
         console.warn('buildTimelineModel: slide', slideIndex, 'has an unparseable overview range; treating as non-temporal');
         return { invalid: true };
      }
      const end = resolveRangeEnd(endParsed);
      if(Temporal.PlainDateTime.compare(end, startParsed.timestamp) <= 0) {
         console.warn('buildTimelineModel: slide', slideIndex, 'has an overview range that ends before it starts; treating as non-temporal');
         return { invalid: true };
      }
      return makeRange(startParsed.timestamp, startParsed.precision, end, endParsed.timestamp, endParsed.precision, 0);
   }

   if(dataset.overview !== undefined) {
      if(epochs.length === 0) {
         console.warn('buildTimelineModel: slide', slideIndex, 'has data-overview but no valid epochs are configured; treating as non-temporal');
         return { invalid: true };
      }
      let first = epochs[0];
      let last = epochs[0];
      for(const e of epochs) {
         if(Temporal.PlainDateTime.compare(e.startTimestamp, first.startTimestamp) < 0) first = e;
         if(Temporal.PlainDateTime.compare(e.endTimestamp, last.endTimestamp) > 0) last = e;
      }
      return makeRange(first.startTimestamp, first.startPrecision, last.endTimestamp, last.endAuthored, last.endPrecision, AUTO_FIT_PADDING);
   }

   return null;
}

export function buildTimelineModel(slides, config) {
   const epochs = buildEpochModel(config);
   const allEpochIds = epochs.map(e => e.id);
   let sawDataEpoch = false;

   const entries = slides.map((slideEl, slideIndex) => {
      const dataset = slideEl.dataset || {};
      const rawTimestamp = dataset.timestamp;
      const rawSpan = dataset.span;

      if(dataset.epoch !== undefined) {
         sawDataEpoch = true;
      }

      const overviewRange = resolveOverview(dataset, slideIndex, epochs);

      if(overviewRange && !overviewRange.invalid) {
         if(rawTimestamp != null && rawTimestamp !== '') {
            console.warn('buildTimelineModel: slide', slideIndex, 'is an overview slide; ignoring its data-timestamp');
         }
         return {
            slideIndex,
            slideEl,
            temporal: false,
            overview: true,
            timestamp: null,
            precision: null,
            parsedSpan: null,
            ...overviewRange,
            epochIds: allEpochIds.slice(),
            visited: false,
         };
      }

      // Parse timestamp
      let timestamp = null;
      let temporal = false;

      let precision = null;

      if(!overviewRange && rawTimestamp != null && rawTimestamp !== '') {
         const parsed = parseTimestamp(rawTimestamp);
         if(parsed !== null) {
            timestamp = parsed.timestamp;
            precision = parsed.precision;
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
         overview: false,
         timestamp,
         precision,
         parsedSpan,
         spanMs,
         epochIds: temporal ? epochIdsContaining(epochs, timestamp) : [],
         visited: false,
      };
   });

   if(sawDataEpoch) {
      console.warn('buildTimelineModel: data-epoch is no longer used and will be ignored; epoch membership is now derived from each slide\'s timestamp and the epoch start/end dates');
   }

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
      epochs,
   };
}
