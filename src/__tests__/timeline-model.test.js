import { describe, it, expect, jest, beforeEach, afterEach } from '@jest/globals';
import { parseTimestamp, buildTimelineModel } from '../timeline-model.js';
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

   it('parses a year-only timestamp to Jan 1 midnight', () => {
      const dt = parseTimestamp('1969');
      expect(dt.year).toBe(1969);
      expect(dt.month).toBe(1);
      expect(dt.day).toBe(1);
      expect(dt.hour).toBe(0);
      expect(dt.minute).toBe(0);
      expect(dt.second).toBe(0);
   });

   it('parses a year-month timestamp to 1st of month, midnight', () => {
      const dt = parseTimestamp('1969-07');
      expect(dt.year).toBe(1969);
      expect(dt.month).toBe(7);
      expect(dt.day).toBe(1);
      expect(dt.hour).toBe(0);
   });

   it('parses a date-only timestamp to midnight', () => {
      const dt = parseTimestamp('1969-07-20');
      expect(dt.year).toBe(1969);
      expect(dt.month).toBe(7);
      expect(dt.day).toBe(20);
      expect(dt.hour).toBe(0);
      expect(dt.minute).toBe(0);
      expect(dt.second).toBe(0);
   });

   it('parses a full datetime timestamp', () => {
      const dt = parseTimestamp('1969-07-20T20:17:40');
      expect(dt.year).toBe(1969);
      expect(dt.month).toBe(7);
      expect(dt.day).toBe(20);
      expect(dt.hour).toBe(20);
      expect(dt.minute).toBe(17);
      expect(dt.second).toBe(40);
   });

   it('parses a datetime with fractional seconds', () => {
      const dt = parseTimestamp('1969-07-20T20:17:40.123');
      expect(dt.year).toBe(1969);
      expect(dt.hour).toBe(20);
      expect(dt.millisecond).toBe(123);
   });

   it('parses a BCE timestamp with negative year', () => {
      const dt = parseTimestamp('-000043-03-15');
      expect(dt.year).toBe(-43);
      expect(dt.month).toBe(3);
      expect(dt.day).toBe(15);
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
});
