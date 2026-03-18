import { describe, it, expect, jest, beforeEach, afterEach } from '@jest/globals';
import { parseTimestamp, buildTimelineModel, buildEpochModel } from '../timeline-model.js';
import { DEFAULT_CONFIG } from '../config.js';

const makeSlide = (timestamp, span) => ({ dataset: { timestamp, span } });

describe('parseTimestamp', () => {
   let warnSpy;

   beforeEach(() => {
      warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
   });

   afterEach(() => {
      warnSpy.mockRestore();
   });

   it('parses a year-only timestamp to Jan 1 midnight with year precision', () => {
      const { timestamp: dt, precision } = parseTimestamp('1969');
      expect(dt.year).toBe(1969);
      expect(dt.month).toBe(1);
      expect(dt.day).toBe(1);
      expect(dt.hour).toBe(0);
      expect(dt.minute).toBe(0);
      expect(dt.second).toBe(0);
      expect(precision).toBe('year');
   });

   it('parses a year-month timestamp to 1st of month, midnight with month precision', () => {
      const { timestamp: dt, precision } = parseTimestamp('1969-07');
      expect(dt.year).toBe(1969);
      expect(dt.month).toBe(7);
      expect(dt.day).toBe(1);
      expect(dt.hour).toBe(0);
      expect(precision).toBe('month');
   });

   it('parses a date-only timestamp to midnight with day precision', () => {
      const { timestamp: dt, precision } = parseTimestamp('1969-07-20');
      expect(dt.year).toBe(1969);
      expect(dt.month).toBe(7);
      expect(dt.day).toBe(20);
      expect(dt.hour).toBe(0);
      expect(dt.minute).toBe(0);
      expect(dt.second).toBe(0);
      expect(precision).toBe('day');
   });

   it('parses a full datetime timestamp with datetime precision', () => {
      const { timestamp: dt, precision } = parseTimestamp('1969-07-20T20:17:40');
      expect(dt.year).toBe(1969);
      expect(dt.month).toBe(7);
      expect(dt.day).toBe(20);
      expect(dt.hour).toBe(20);
      expect(dt.minute).toBe(17);
      expect(dt.second).toBe(40);
      expect(precision).toBe('datetime');
   });

   it('parses a datetime with fractional seconds', () => {
      const { timestamp: dt, precision } = parseTimestamp('1969-07-20T20:17:40.123');
      expect(dt.year).toBe(1969);
      expect(dt.hour).toBe(20);
      expect(dt.millisecond).toBe(123);
      expect(precision).toBe('datetime');
   });

   it('parses a BCE timestamp with negative year', () => {
      const { timestamp: dt, precision } = parseTimestamp('-000043-03-15');
      expect(dt.year).toBe(-43);
      expect(dt.month).toBe(3);
      expect(dt.day).toBe(15);
      expect(precision).toBe('day');
   });

   it('returns null for an invalid timestamp and warns', () => {
      const result = parseTimestamp('not-a-date');
      expect(result).toBeNull();
      expect(warnSpy).toHaveBeenCalled();
   });

   it('returns null for an empty string', () => {
      const result = parseTimestamp('');
      expect(result).toBeNull();
   });

   it('returns null for a non-string argument', () => {
      const result = parseTimestamp(null);
      expect(result).toBeNull();
   });
});

describe('buildTimelineModel', () => {
   let warnSpy;

   beforeEach(() => {
      warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
   });

   afterEach(() => {
      warnSpy.mockRestore();
   });

   it('produces a temporal entry with correct fields for a full datetime', () => {
      const slides = [makeSlide('1969-07-20T20:17:40', undefined)];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      const entry = model.entries[0];
      expect(entry.temporal).toBe(true);
      expect(entry.timestamp.year).toBe(1969);
      expect(entry.timestamp.month).toBe(7);
      expect(entry.timestamp.day).toBe(20);
      expect(entry.timestamp.hour).toBe(20);
      expect(entry.slideIndex).toBe(0);
      expect(entry.visited).toBe(false);
   });

   it('produces midnight time for a date-only timestamp', () => {
      const slides = [makeSlide('1969-07-20', undefined)];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      const entry = model.entries[0];
      expect(entry.temporal).toBe(true);
      expect(entry.timestamp.hour).toBe(0);
      expect(entry.timestamp.minute).toBe(0);
      expect(entry.timestamp.second).toBe(0);
   });

   it('produces Jan 1 midnight for a year-only timestamp', () => {
      const slides = [makeSlide('1969', undefined)];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      const entry = model.entries[0];
      expect(entry.temporal).toBe(true);
      expect(entry.timestamp.month).toBe(1);
      expect(entry.timestamp.day).toBe(1);
      expect(entry.timestamp.hour).toBe(0);
   });

   it('produces year -43 for a BCE timestamp', () => {
      const slides = [makeSlide('-000043-03-15', undefined)];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      const entry = model.entries[0];
      expect(entry.temporal).toBe(true);
      expect(entry.timestamp.year).toBe(-43);
      expect(entry.timestamp.month).toBe(3);
      expect(entry.timestamp.day).toBe(15);
   });

   it('produces a non-temporal entry when no timestamp is provided', () => {
      const slides = [makeSlide(undefined, undefined)];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      const entry = model.entries[0];
      expect(entry.temporal).toBe(false);
      expect(entry.timestamp).toBeNull();
   });

   it('produces a non-temporal entry and warns for an invalid timestamp', () => {
      const slides = [makeSlide('not-a-date', undefined)];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      const entry = model.entries[0];
      expect(entry.temporal).toBe(false);
      expect(entry.timestamp).toBeNull();
      expect(warnSpy).toHaveBeenCalled();
   });

   it('computes correct minTimestamp and maxTimestamp from multiple slides', () => {
      const slides = [
         makeSlide('2000-01-01', undefined),
         makeSlide('1969-07-20', undefined),
         makeSlide('2023-12-31', undefined),
      ];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      expect(model.minTimestamp.year).toBe(1969);
      expect(model.maxTimestamp.year).toBe(2023);
   });

   it('uses per-slide span override over config default', () => {
      const slides = [makeSlide('2000-01-01', '5 years')];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      const entry = model.entries[0];
      expect(entry.parsedSpan).toEqual({ unit: 'years', value: 5 });
   });

   it('falls back to config defaultSpan when no per-slide span is given', () => {
      const slides = [makeSlide('2000-01-01', undefined)];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      const entry = model.entries[0];
      // DEFAULT_CONFIG.defaultSpan is '10 years'
      expect(entry.parsedSpan).toEqual({ unit: 'years', value: 10 });
   });

   it('puts only temporal entries in temporalEntries', () => {
      const slides = [
         makeSlide('2000-01-01', undefined),
         makeSlide(undefined, undefined),
         makeSlide('1999-06-15', undefined),
      ];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      expect(model.temporalEntries.length).toBe(2);
      expect(model.entries.length).toBe(3);
   });

   it('returns null minTimestamp and maxTimestamp when no temporal entries exist', () => {
      const slides = [makeSlide(undefined, undefined)];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      expect(model.minTimestamp).toBeNull();
      expect(model.maxTimestamp).toBeNull();
   });

   it('stores epochIds on each entry from data-epoch attribute', () => {
      const slide = { dataset: { timestamp: '2000', span: undefined, epoch: 'ai ml' } };
      const config = { ...DEFAULT_CONFIG, epochs: [{ id: 'ai', label: 'AI', color: '#f00', start: '1950', end: '2000' }, { id: 'ml', label: 'ML', color: '#0f0', start: '1980', end: '2020' }] };
      const model = buildTimelineModel([slide], config);
      expect(model.entries[0].epochIds).toEqual(['ai', 'ml']);
   });

   it('stores empty epochIds when data-epoch is absent', () => {
      const slides = [makeSlide('2000', undefined)];
      const model = buildTimelineModel(slides, DEFAULT_CONFIG);
      expect(model.entries[0].epochIds).toEqual([]);
   });

   it('warns and excludes unknown epoch ids from epochIds', () => {
      const slide = { dataset: { timestamp: '2000', span: undefined, epoch: 'unknown' } };
      const model = buildTimelineModel([slide], DEFAULT_CONFIG);
      expect(model.entries[0].epochIds).toEqual([]);
      expect(warnSpy).toHaveBeenCalled();
   });
});

describe('buildEpochModel', () => {
   let warnSpy;

   beforeEach(() => {
      warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
   });

   afterEach(() => {
      warnSpy.mockRestore();
   });

   it('returns empty array when no epochs configured', () => {
      expect(buildEpochModel({ epochs: [] })).toEqual([]);
      expect(buildEpochModel({})).toEqual([]);
   });

   it('parses epoch start and end timestamps', () => {
      const config = { epochs: [{ id: 'ai', label: 'AI Era', color: '#f00', start: '1956', end: '2030' }] };
      const epochs = buildEpochModel(config);
      expect(epochs).toHaveLength(1);
      expect(epochs[0].startTimestamp.year).toBe(1956);
      expect(epochs[0].endTimestamp.year).toBe(2030);
   });

   it('assigns lane index matching config array order', () => {
      const config = {
         epochs: [
            { id: 'a', label: 'A', color: '#f00', start: '1900', end: '1950' },
            { id: 'b', label: 'B', color: '#0f0', start: '1940', end: '1990' },
            { id: 'c', label: 'C', color: '#00f', start: '1980', end: '2020' },
         ],
      };
      const epochs = buildEpochModel(config);
      expect(epochs[0].lane).toBe(0);
      expect(epochs[1].lane).toBe(1);
      expect(epochs[2].lane).toBe(2);
   });

   it('preserves id, label, and color from config', () => {
      const config = { epochs: [{ id: 'ai', label: 'AI Era', color: 'rgba(100,180,255,0.35)', start: '1956', end: '2030' }] };
      const epochs = buildEpochModel(config);
      expect(epochs[0].id).toBe('ai');
      expect(epochs[0].label).toBe('AI Era');
      expect(epochs[0].color).toBe('rgba(100,180,255,0.35)');
   });

   it('skips and warns on invalid start timestamp', () => {
      const config = { epochs: [{ id: 'bad', label: 'Bad', color: '#f00', start: 'not-a-date', end: '2000' }] };
      const epochs = buildEpochModel(config);
      expect(epochs).toHaveLength(0);
      expect(warnSpy).toHaveBeenCalled();
   });

   it('skips and warns on invalid end timestamp', () => {
      const config = { epochs: [{ id: 'bad', label: 'Bad', color: '#f00', start: '1950', end: 'not-a-date' }] };
      const epochs = buildEpochModel(config);
      expect(epochs).toHaveLength(0);
      expect(warnSpy).toHaveBeenCalled();
   });
});
