import { lerp, logLerp, plainDateTimeToMs, msToPlainDateTime } from '../animation.js';
import { Temporal } from '@js-temporal/polyfill';

describe('lerp', () => {
   test('midpoint', () => expect(lerp(0, 100, 0.5)).toBe(50));
   test('at t=0 returns a', () => expect(lerp(10, 20, 0)).toBe(10));
   test('at t=1 returns b', () => expect(lerp(10, 20, 1)).toBe(20));
});

describe('logLerp', () => {
   test('midpoint of 1 hour to 10 years is the geometric mean (approximately 12 days)', () => {
      const oneHour = 3600000;
      const tenYears = 10 * 365.2425 * 86400000;
      // Geometric mean of 1hr and 10yrs is sqrt(1hr * 10yrs) ≈ 12.3 days
      const geometricMean = Math.sqrt(oneHour * tenYears);
      const midpoint = logLerp(oneHour, tenYears, 0.5);
      // Should be within 1% of the geometric mean
      expect(midpoint).toBeGreaterThan(geometricMean * 0.99);
      expect(midpoint).toBeLessThan(geometricMean * 1.01);
   });
   test('at t=0 returns a', () => expect(logLerp(100, 1000, 0)).toBeCloseTo(100));
   test('at t=1 returns b', () => expect(logLerp(100, 1000, 1)).toBeCloseTo(1000));
});

describe('plainDateTimeToMs round-trip', () => {
   test('1969-07-20 round-trips approximately', () => {
      const pdt = Temporal.PlainDateTime.from('1969-07-20T00:00:00');
      const ms = plainDateTimeToMs(pdt);
      const back = msToPlainDateTime(ms);
      expect(back.year).toBe(1969);
      expect(back.month).toBe(7);
      expect(back.day).toBe(20);
   });
   test('BCE year round-trips approximately', () => {
      const pdt = Temporal.PlainDateTime.from({ year: -43, month: 3, day: 15, hour: 0, minute: 0, second: 0 });
      const ms = plainDateTimeToMs(pdt);
      const back = msToPlainDateTime(ms);
      expect(back.year).toBe(-43);
   });
});
