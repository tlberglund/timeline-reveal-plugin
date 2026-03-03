import { describe, it, expect, jest, beforeEach, afterEach } from '@jest/globals';
import { parseSpan, spanToMilliseconds, spanToString } from '../span-parser.js';

describe('parseSpan', () => {
   let warnSpy;

   beforeEach(() => {
      warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
   });

   afterEach(() => {
      warnSpy.mockRestore();
   });

   it('parses "3 months"', () => {
      expect(parseSpan('3 months')).toEqual({ unit: 'months', value: 3 });
   });

   it('parses "1 month" (singular)', () => {
      expect(parseSpan('1 month')).toEqual({ unit: 'months', value: 1 });
   });

   it('parses "10 years"', () => {
      expect(parseSpan('10 years')).toEqual({ unit: 'years', value: 10 });
   });

   it('parses "1 year" (singular)', () => {
      expect(parseSpan('1 year')).toEqual({ unit: 'years', value: 1 });
   });

   it('parses "2 centuries"', () => {
      expect(parseSpan('2 centuries')).toEqual({ unit: 'centuries', value: 2 });
   });

   it('parses "1 century" (singular)', () => {
      expect(parseSpan('1 century')).toEqual({ unit: 'centuries', value: 1 });
   });

   it('parses "2 weeks"', () => {
      expect(parseSpan('2 weeks')).toEqual({ unit: 'weeks', value: 2 });
   });

   it('parses "3 hours"', () => {
      expect(parseSpan('3 hours')).toEqual({ unit: 'hours', value: 3 });
   });

   it('returns null for an invalid string', () => {
      const result = parseSpan('not a span');
      expect(result).toBeNull();
   });

   it('logs a console.warn for an invalid string', () => {
      parseSpan('not a span');
      expect(warnSpy).toHaveBeenCalled();
   });
});
