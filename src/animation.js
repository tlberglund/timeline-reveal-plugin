import { Temporal } from '@js-temporal/polyfill';

// ─── Date/Time Conversion ─────────────────────────────────────────────────────

function getDayOfYear(pdt) {
   const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   const year = pdt.year;
   const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
   if(isLeap) monthDays[1] = 29;
   let day = 0;
   for(let i = 0; i < pdt.month - 1; i++) day += monthDays[i];
   return day + pdt.day;
}

export function plainDateTimeToMs(pdt) {
   const dayOfYear = getDayOfYear(pdt);
   const msInDay = (pdt.hour * 3600 + pdt.minute * 60 + pdt.second) * 1000 + pdt.millisecond;
   return (pdt.year * 365.2425 * 86400000) + ((dayOfYear - 1) * 86400000) + msInDay;
}

export function msToPlainDateTime(ms) {
   const msPerYear = 365.2425 * 86400000;
   let year = Math.floor(ms / msPerYear);
   let remainder = ms - year * msPerYear;
   if(remainder < 0) {
      year -= 1;
      remainder += msPerYear;
   }
   const msPerDay = 86400000;
   const dayOfYear = Math.floor(remainder / msPerDay); // 0-based
   const msInDay = remainder - dayOfYear * msPerDay;
   const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
   if(isLeap) monthDays[1] = 29;
   let month = 1;
   let remaining = dayOfYear;
   for(let i = 0; i < 12; i++) {
      if(remaining < monthDays[i]) { month = i + 1; break; }
      remaining -= monthDays[i];
   }
   const day = Math.max(1, remaining + 1);
   const hour = Math.floor(msInDay / 3600000);
   const minute = Math.floor((msInDay % 3600000) / 60000);
   const second = Math.floor((msInDay % 60000) / 1000);
   const millisecond = Math.floor(msInDay % 1000);
   const safeYear = year === 0 ? -1 : year;
   try {
      return Temporal.PlainDateTime.from({ year: safeYear, month, day, hour, minute, second, millisecond });
   }
   catch(e) {
      return Temporal.PlainDateTime.from({ year: safeYear, month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 });
   }
}

// ─── Interpolation ────────────────────────────────────────────────────────────

export function lerp(a, b, t) { return a + (b - a) * t; }

export function logLerp(a, b, t) {
   return Math.exp(lerp(Math.log(a), Math.log(b), t));
}

// ─── Easing ───────────────────────────────────────────────────────────────────

export function resolveEasing(easingConfig) {
   const name = easingConfig || 'ease-in-out';
   switch(name) {
      case 'ease-in-out':
         return (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      case 'ease-in':
         return (t) => t * t;
      case 'ease-out':
         return (t) => t * (2 - t);
      case 'linear':
         return (t) => t;
      default:
         console.warn(`[timeline] Unknown easing "${name}", falling back to ease-in-out`);
         return (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
   }
}

// ─── Animation Controller ─────────────────────────────────────────────────────

export class AnimationController {
   constructor(config, onFrame, onComplete) {
      this._config = config;
      this._onFrame = onFrame;
      this._onComplete = onComplete;
      this._rafId = null;
      this._startTime = null;
      this._fromMs = null;
      this._toMs = null;
      this._fromSpanMs = null;
      this._toSpanMs = null;
      this._toState = null;
      this._duration = null;
      this._easing = null;
      this._currentMs = null;
      this._currentSpanMs = null;
   }

   start(from, to) {
      if(this.isRunning()) {
         this.cancel();
         const current = this.getCurrentState();
         if(current) {
            from = current;
         }
      }

      const animConfig = (this._config && this._config.animation) || {};
      const durationMs = (animConfig.duration != null) ? animConfig.duration : 800;
      const easingName = animConfig.easing || 'ease-in-out';

      this._fromMs = plainDateTimeToMs(from.timestamp);
      this._toMs = plainDateTimeToMs(to.timestamp);
      this._fromSpanMs = from.spanMs;
      this._toSpanMs = to.spanMs;
      this._toState = to;
      this._duration = durationMs;
      this._easing = resolveEasing(easingName);
      this._startTime = null;
      this._currentMs = this._fromMs;
      this._currentSpanMs = this._fromSpanMs;

      const tick = (now) => {
         if(this._startTime === null) {
            this._startTime = now;
         }
         const elapsed = now - this._startTime;
         const t = Math.min(1, elapsed / this._duration);
         const easedT = this._easing(t);

         this._currentMs = lerp(this._fromMs, this._toMs, easedT);
         this._currentSpanMs = logLerp(this._fromSpanMs, this._toSpanMs, easedT);

         const timestamp = msToPlainDateTime(this._currentMs);
         this._onFrame({ timestamp, spanMs: this._currentSpanMs, t: easedT });

         if(t >= 1) {
            this._rafId = null;
            this._onComplete({ timestamp: this._toState.timestamp, spanMs: this._toState.spanMs });
            return;
         }

         this._rafId = requestAnimationFrame(tick);
      };

      this._rafId = requestAnimationFrame(tick);
   }

   getCurrentState() {
      if(this._currentMs === null || this._currentSpanMs === null) {
         return null;
      }
      return {
         timestamp: msToPlainDateTime(this._currentMs),
         spanMs: this._currentSpanMs,
      };
   }

   cancel() {
      if(this._rafId !== null) {
         cancelAnimationFrame(this._rafId);
         this._rafId = null;
      }
   }

   isRunning() {
      return this._rafId !== null;
   }
}

// ─── Label Crossfade ──────────────────────────────────────────────────────────

export function computeLabelCrossfade(formatChanged, t, currentActive) {
   if(!formatChanged) {
      return {
         activeLayer: currentActive,
         opacities: {
            a: currentActive === 'a' ? 1 : 0,
            b: currentActive === 'b' ? 1 : 0,
         },
      };
   }
   const progress = Math.max(0, Math.min(1, (t - 0.2) / 0.6));
   const incoming = currentActive === 'a' ? 'b' : 'a';
   const opacities = {};
   opacities[currentActive] = 1 - progress;
   opacities[incoming] = progress;
   return { activeLayer: progress >= 1 ? incoming : currentActive, opacities };
}
