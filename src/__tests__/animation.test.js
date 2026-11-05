import { lerp, logLerp, lerpFades, plainDateTimeToMs, msToPlainDateTime, AnimationController } from '../animation.js';
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

// ─── Fades ───────────────────────────────────────────────────────────────────

describe('lerpFades', () => {
   test('interpolates each key and treats missing keys as 0', () => {
      expect(lerpFades({ a: 1, b: 0 }, { a: 0, c: 1 }, 0.25)).toEqual({ a: 0.75, b: 0, c: 0.25 });
   });
});

describe('AnimationController fades', () => {
   let frames;
   let savedRaf;
   let savedCancel;

   // Manual clock: each call to step(ms) runs the pending frame at that time.
   let pending;
   function step(now) {
      const cb = pending;
      pending = null;
      cb(now);
   }

   beforeEach(() => {
      frames = [];
      pending = null;
      savedRaf = globalThis.requestAnimationFrame;
      savedCancel = globalThis.cancelAnimationFrame;
      globalThis.requestAnimationFrame = (cb) => { pending = cb; return 1; };
      globalThis.cancelAnimationFrame = () => { pending = null; };
   });

   afterEach(() => {
      globalThis.requestAnimationFrame = savedRaf;
      globalThis.cancelAnimationFrame = savedCancel;
   });

   const ts = Temporal.PlainDateTime.from('1940-01-01T00:00:00');
   const config = { animation: { duration: 100, easing: 'linear' } };

   function makeController(onComplete = () => {}) {
      return new AnimationController(config, f => frames.push(f), onComplete);
   }

   test('fades in and out over the animation', () => {
      let done = null;
      const ctl = makeController(c => done = c);
      ctl.start({ timestamp: ts, spanMs: 1e10, fades: { wars: 1, digital: 0 } },
                { timestamp: ts, spanMs: 1e10, fades: { wars: 0, digital: 1 } });
      step(0);
      step(50);
      expect(frames[1].fades.wars).toBeCloseTo(0.5);
      expect(frames[1].fades.digital).toBeCloseTo(0.5);
      step(100);
      expect(done.fades).toEqual({ wars: 0, digital: 1 });
   });

   test('an interrupted fade continues from its current value', () => {
      const ctl = makeController();
      ctl.start({ timestamp: ts, spanMs: 1e10, fades: { wars: 0 } },
                { timestamp: ts, spanMs: 1e10, fades: { wars: 1 } });
      step(0);
      step(40);
      expect(frames[1].fades.wars).toBeCloseTo(0.4);
      ctl.start({ timestamp: ts, spanMs: 1e10, fades: { wars: 1 } },
                { timestamp: ts, spanMs: 1e10, fades: { wars: 0 } });
      step(1000);
      expect(frames[2].fades.wars).toBeCloseTo(0.4);
   });

   test('zero duration completes on the first frame', () => {
      let done = null;
      const ctl = new AnimationController({ animation: { duration: 0 } }, f => frames.push(f), c => done = c);
      ctl.start({ timestamp: ts, spanMs: 1e10, fades: { wars: 0 } },
                { timestamp: ts, spanMs: 1e10, fades: { wars: 1 } });
      step(0);
      expect(frames[0].fades.wars).toBe(1);
      expect(done).not.toBeNull();
   });
});
