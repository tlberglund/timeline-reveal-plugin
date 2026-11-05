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

   const EPOCHS = [
      { id: 'ai', label: 'AI', start: '1950', end: '2000' },
      { id: 'ml', label: 'ML', start: '1980', end: '2020' },
   ];

   it('derives epochIds from the slide timestamp in config order', () => {
      const config = { ...DEFAULT_CONFIG, epochs: EPOCHS };
      const model = buildTimelineModel([makeSlide('1990', undefined)], config);
      expect(model.entries[0].epochIds).toEqual(['ai', 'ml']);
   });

   it('treats the epoch end year as inclusive', () => {
      const config = { ...DEFAULT_CONFIG, epochs: EPOCHS };
      const model = buildTimelineModel([makeSlide('2000-12-31', undefined)], config);
      expect(model.entries[0].epochIds).toEqual(['ai', 'ml']);
   });

   it('excludes a slide at the exclusive end bound', () => {
      const config = { ...DEFAULT_CONFIG, epochs: EPOCHS };
      const model = buildTimelineModel([makeSlide('2001-01-01', undefined)], config);
      expect(model.entries[0].epochIds).toEqual(['ml']);
   });

   it('includes a slide at the inclusive start bound', () => {
      const config = { ...DEFAULT_CONFIG, epochs: [{ id: 'ww1', label: 'WW1', start: '1914-07-28', end: '1918-11-11' }] };
      const model = buildTimelineModel([makeSlide('1914-07-28', undefined)], config);
      expect(model.entries[0].epochIds).toEqual(['ww1']);
   });

   it('stores empty epochIds for slides outside all epochs and non-temporal slides', () => {
      const config = { ...DEFAULT_CONFIG, epochs: EPOCHS };
      const model = buildTimelineModel([makeSlide('1800', undefined), makeSlide(undefined, undefined)], config);
      expect(model.entries[0].epochIds).toEqual([]);
      expect(model.entries[1].epochIds).toEqual([]);
   });

   it('ignores data-epoch and warns exactly once', () => {
      const config = { ...DEFAULT_CONFIG, epochs: EPOCHS };
      const slides = [
         { dataset: { timestamp: '1800', epoch: 'ai' } },
         { dataset: { timestamp: '1990', epoch: 'ai' } },
         { dataset: { timestamp: '1995', epoch: 'ml' } },
      ];
      const model = buildTimelineModel(slides, config);
      expect(model.entries[0].epochIds).toEqual([]);
      const dataEpochWarnings = warnSpy.mock.calls.filter(c => String(c[0]).includes('data-epoch'));
      expect(dataEpochWarnings).toHaveLength(1);
   });
});

describe('buildTimelineModel overview slides', () => {
   let warnSpy;

   beforeEach(() => {
      warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
   });

   afterEach(() => {
      warnSpy.mockRestore();
   });

   const EPOCHS = [
      { id: 'modern', label: 'Modern', start: '1750', end: '2010' },
      { id: 'wars', label: 'Wars', start: '1914', end: '1945' },
   ];

   it('resolves an explicit range to center and span', () => {
      const slide = { dataset: { timestampStart: '1700', timestampEnd: '1999' } };
      const model = buildTimelineModel([slide], { ...DEFAULT_CONFIG, epochs: EPOCHS });
      const entry = model.entries[0];
      expect(entry.overview).toBe(true);
      expect(entry.temporal).toBe(false);
      expect(entry.timestamp).toBeNull();
      expect(entry.rangeStart.toString()).toBe('1700-01-01T00:00:00');
      expect(entry.rangeEnd.toString()).toBe('2000-01-01T00:00:00');
      expect(entry.rangeEndAuthored.year).toBe(1999);
      expect(entry.center.year).toBe(1850);
      expect(entry.spanMs).toBeCloseTo(300 * 365.2425 * 86400000, -10);
      expect(entry.epochIds).toEqual(['modern', 'wars']);
   });

   it('auto-fits data-overview to all epochs with 5% padding', () => {
      const slide = { dataset: { overview: '' } };
      const model = buildTimelineModel([slide], { ...DEFAULT_CONFIG, epochs: EPOCHS });
      const entry = model.entries[0];
      expect(entry.overview).toBe(true);
      expect(entry.rangeStart.year).toBe(1750);
      expect(entry.rangeEnd.year).toBe(2011);
      expect(entry.rangeEndAuthored.year).toBe(2010);
      expect(entry.spanMs).toBeCloseTo(261 * 365.2425 * 86400000 * 1.1, -10);
   });

   it('prefers an explicit range over data-overview', () => {
      const slide = { dataset: { overview: '', timestampStart: '1900', timestampEnd: '1999' } };
      const model = buildTimelineModel([slide], { ...DEFAULT_CONFIG, epochs: EPOCHS });
      expect(model.entries[0].rangeStart.year).toBe(1900);
   });

   it('treats data-overview with no epochs as non-temporal and warns', () => {
      const slide = { dataset: { overview: '' } };
      const model = buildTimelineModel([slide], DEFAULT_CONFIG);
      expect(model.entries[0].overview).toBe(false);
      expect(model.entries[0].temporal).toBe(false);
      expect(warnSpy).toHaveBeenCalled();
   });

   it.each([
      ['missing end', { timestampStart: '1700' }],
      ['missing start', { timestampEnd: '1700' }],
      ['unparseable', { timestampStart: 'soon', timestampEnd: '1999' }],
      ['inverted', { timestampStart: '1999', timestampEnd: '1700' }],
   ])('treats a %s range as non-temporal and warns', (_, dataset) => {
      const model = buildTimelineModel([{ dataset }], { ...DEFAULT_CONFIG, epochs: EPOCHS });
      expect(model.entries[0].overview).toBe(false);
      expect(model.entries[0].temporal).toBe(false);
      expect(warnSpy).toHaveBeenCalled();
   });

   it('ignores data-timestamp on an overview slide with a warning', () => {
      const slide = { dataset: { timestamp: '1500', timestampStart: '1700', timestampEnd: '1999' } };
      const model = buildTimelineModel([slide], { ...DEFAULT_CONFIG, epochs: EPOCHS });
      expect(model.entries[0].overview).toBe(true);
      expect(model.entries[0].timestamp).toBeNull();
      expect(warnSpy).toHaveBeenCalled();
   });

   it('excludes overview slides from temporalEntries and extents', () => {
      const slides = [
         { dataset: { timestampStart: '1700', timestampEnd: '1999' } },
         makeSlide('1800', undefined),
         makeSlide('1900', undefined),
         makeSlide('1950', undefined),
      ];
      const model = buildTimelineModel(slides, { ...DEFAULT_CONFIG, epochs: EPOCHS });
      expect(model.temporalEntries).toHaveLength(3);
      expect(model.minTimestamp.year).toBe(1800);
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
      expect(epochs[0].endTimestamp.toString()).toBe('2031-01-01T00:00:00');
      expect(epochs[0].endAuthored.year).toBe(2030);
   });

   it.each([
      ['1945', '1946-01-01T00:00:00'],
      ['1945-08', '1945-09-01T00:00:00'],
      ['1945-09-02', '1945-09-03T00:00:00'],
      ['1969-07-20T20:17:40', '1969-07-20T20:17:41'],
      ['-000044', '-000043-01-01T00:00:00'],
   ])('resolves end %s to exclusive bound %s', (end, expected) => {
      const epochs = buildEpochModel({ epochs: [{ id: 'x', label: 'X', start: '-000100', end }] });
      expect(epochs[0].endTimestamp.toString()).toBe(expected);
   });

   it('stores null color when none is configured', () => {
      const epochs = buildEpochModel({ epochs: [{ id: 'x', label: 'X', start: '1900', end: '1950' }] });
      expect(epochs[0].color).toBeNull();
   });

   it('skips and warns on inverted bounds', () => {
      const epochs = buildEpochModel({ epochs: [{ id: 'x', label: 'X', start: '1950', end: '1900' }] });
      expect(epochs).toHaveLength(0);
      expect(warnSpy).toHaveBeenCalled();
   });

   it('assigns contiguous lanes when an invalid epoch is dropped', () => {
      const epochs = buildEpochModel({ epochs: [
         { id: 'a', label: 'A', start: '1900', end: '1950' },
         { id: 'bad', label: 'Bad', start: 'nope', end: '1950' },
         { id: 'c', label: 'C', start: '1900', end: '1950' },
      ] });
      expect(epochs.map(e => [e.id, e.lane])).toEqual([['a', 0], ['c', 1]]);
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
