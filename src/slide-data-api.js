import { Temporal } from '@js-temporal/polyfill';

// Task 6.1
export function populatePlaceholders(slideEl, timestamp, spanString, eraSuffix) {
   const tsEls = slideEl.querySelectorAll('.tl-timestamp');
   const labelEls = slideEl.querySelectorAll('.tl-label');
   const tsText = timestamp ? formatTimestampForDisplay(timestamp, eraSuffix || { bc: 'BC', ad: 'AD' }) : '';
   const labelText = spanString || '';
   tsEls.forEach(el => el.textContent = tsText);
   labelEls.forEach(el => el.textContent = labelText);
}

// Task 6.2
export function formatTimestampForDisplay(pdt, eraSuffix) {
   const hasTime = pdt.hour !== 0 || pdt.minute !== 0 || pdt.second !== 0;
   const year = pdt.year;
   const displayYear = year <= 0 ? `${1 - year} ${eraSuffix.bc}` : `${year}`;
   const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   const month = MONTHS[pdt.month - 1];
   const day = pdt.day;
   if(hasTime) {
      const h = pdt.hour;
      const m = String(pdt.minute).padStart(2, '0');
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 || 12;
      return `${month} ${day}, ${displayYear}, ${h12}:${m} ${ampm}`;
   }
   return `${month} ${day}, ${displayYear}`;
}

// Task 6.3
export function dispatchTimelineChange(deckEl, timestamp, spanMs, spanString) {
   const event = new CustomEvent('timeline:change', {
      bubbles: true,
      detail: {
         timestamp: timestamp || null,
         timestampISO: timestamp ? timestamp.toString() : null,
         span: spanMs || null,
         spanString: spanString || null,
      },
   });
   deckEl.dispatchEvent(event);
}

// Task 6.4
export function clearPlaceholders(slideEl, eraSuffix) {
   populatePlaceholders(slideEl, null, null, eraSuffix);
}
