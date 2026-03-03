const UNIT_MAP = {
   second: 'seconds',
   seconds: 'seconds',
   minute: 'minutes',
   minutes: 'minutes',
   hour: 'hours',
   hours: 'hours',
   day: 'days',
   days: 'days',
   week: 'weeks',
   weeks: 'weeks',
   month: 'months',
   months: 'months',
   year: 'years',
   years: 'years',
   century: 'centuries',
   centuries: 'centuries',
};

const MS_PER_UNIT = {
   seconds: 1000,
   minutes: 60000,
   hours: 3600000,
   days: 86400000,
   weeks: 604800000,
   months: 2629746000,
   years: 31556952000,
   centuries: 3155695200000,
};

export function parseSpan(spanString) {
   if(typeof spanString !== 'string') {
      console.warn('parseSpan: expected a string, got', typeof spanString);
      return null;
   }

   const trimmed = spanString.trim();
   const match = trimmed.match(/^(\d+(?:\.\d+)?)\s+([a-zA-Z]+)$/);

   if(!match) {
      console.warn('parseSpan: could not parse span string:', spanString);
      return null;
   }

   const value = parseFloat(match[1]);
   const rawUnit = match[2].toLowerCase();
   const unit = UNIT_MAP[rawUnit];

   if(!unit) {
      console.warn('parseSpan: unrecognized unit:', match[2]);
      return null;
   }

   return { unit, value };
}

export function spanToMilliseconds(parsedSpan) {
   if(!parsedSpan || !parsedSpan.unit || parsedSpan.value == null) {
      return null;
   }

   const multiplier = MS_PER_UNIT[parsedSpan.unit];

   if(multiplier == null) {
      return null;
   }

   return parsedSpan.value * multiplier;
}

export function spanToString(parsedSpan) {
   if(!parsedSpan || !parsedSpan.unit || parsedSpan.value == null) {
      return '';
   }

   const value = parsedSpan.value;
   const unit = parsedSpan.unit;

   if(value === 1) {
      return `${value} ${unit.replace(/s$/, '')}`;
   }

   return `${value} ${unit}`;
}
