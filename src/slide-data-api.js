import { Temporal } from '@js-temporal/polyfill';

// Task 6.1
export function populatePlaceholders(slideEl, timestamp, precision, spanString, eraSuffix, epochs, epochIds) {
   const tsEls = slideEl.querySelectorAll('.tl-timestamp');
   const labelEls = slideEl.querySelectorAll('.tl-label');
   const tsText = timestamp ? formatTimestampForDisplay(timestamp, precision, eraSuffix || { bc: 'BC', ad: 'AD' }) : '';
   const labelText = spanString || '';
   tsEls.forEach(el => el.textContent = tsText);
   labelEls.forEach(el => el.textContent = labelText);

   const epochEls = slideEl.querySelectorAll('.tl-epoch');
   const matchedEpochs = epochs && epochIds
      ? epochs.filter(e => epochIds.includes(e.id))
      : [];

   epochEls.forEach(container => {
      // Clear previously injected content
      while(container.firstChild) container.removeChild(container.firstChild);

      for(const epoch of matchedEpochs) {
         const span = document.createElement('span');
         span.className = `tl-epoch-item tl-epoch-${epoch.id}`;
         span.textContent = epoch.label;
         container.appendChild(span);
      }
   });
}

// Task 6.2
export function formatTimestampForDisplay(pdt, precision, eraSuffix) {
   const year = pdt.year;
   const displayYear = year <= 0 ? `${1 - year} ${eraSuffix.bc}` : `${year}`;

   if(precision === 'year') {
      return displayYear;
   }

   const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   const month = MONTHS[pdt.month - 1];

   if(precision === 'month') {
      return `${month} ${displayYear}`;
   }

   const day = pdt.day;
   if(precision === 'datetime') {
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
   populatePlaceholders(slideEl, null, null, null, eraSuffix, [], []);
}
