import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import { buildTimelineModel } from '../timeline-model.js';
import { DEFAULT_CONFIG } from '../config.js';
import {
   populatePlaceholders,
   populateOverviewPlaceholders,
   dispatchTimelineChange,
} from '../slide-data-api.js';

// Minimal DOM stand-ins: the test environment is node, without jsdom.
class FakeElement {
   constructor(className = '') {
      this.className = className;
      this.textContent = '';
      this.children = [];
   }
   get firstChild() { return this.children[0] || null; }
   appendChild(child) { this.children.push(child); return child; }
   removeChild(child) { this.children = this.children.filter(c => c !== child); return child; }
}

function makeSlideEl(dataset, classNames) {
   const els = classNames.map(c => new FakeElement(c));
   return {
      dataset,
      els,
      querySelectorAll(selector) {
         const cls = selector.replace(/^\./, '');
         return els.filter(e => e.className === cls);
      },
   };
}

const ERA = { bc: 'BC', ad: 'AD' };
const EPOCHS = [
   { id: 'modern', label: 'Modern Era', start: '1750', end: '2010' },
   { id: 'wars', label: 'World Wars', start: '1914', end: '1945' },
   { id: 'digital', label: 'Digital Age', start: '1969', end: '2010' },
];

let savedDocument;

beforeAll(() => {
   savedDocument = globalThis.document;
   globalThis.document = { createElement: () => new FakeElement() };
});

afterAll(() => {
   globalThis.document = savedDocument;
});

function epochSpans(slideEl) {
   const container = slideEl.els.find(e => e.className === 'tl-epoch');
   return container.children.map(c => [c.className, c.textContent]);
}

describe('epoch placeholders', () => {
   it('lists the derived epochs for a temporal slide in config order', () => {
      const slideEl = makeSlideEl({ timestamp: '1942' }, ['tl-epoch']);
      const model = buildTimelineModel([slideEl], { ...DEFAULT_CONFIG, epochs: EPOCHS });
      const entry = model.entries[0];
      populatePlaceholders(slideEl, entry.timestamp, entry.precision, '10 years', ERA, model.epochs, entry.epochIds);
      expect(epochSpans(slideEl)).toEqual([
         ['tl-epoch-item tl-epoch-modern', 'Modern Era'],
         ['tl-epoch-item tl-epoch-wars', 'World Wars'],
      ]);
   });

   it('empties the container for a slide in no epochs', () => {
      const slideEl = makeSlideEl({ timestamp: '1600' }, ['tl-epoch']);
      const model = buildTimelineModel([slideEl], { ...DEFAULT_CONFIG, epochs: EPOCHS });
      const entry = model.entries[0];
      populatePlaceholders(slideEl, entry.timestamp, entry.precision, '10 years', ERA, model.epochs, entry.epochIds);
      expect(epochSpans(slideEl)).toEqual([]);
   });
});

describe('overview placeholders', () => {
   it('shows an explicit range in .tl-timestamp and all epochs in .tl-epoch', () => {
      const slideEl = makeSlideEl({ timestampStart: '1700', timestampEnd: '1999' }, ['tl-timestamp', 'tl-label', 'tl-epoch']);
      const model = buildTimelineModel([slideEl], { ...DEFAULT_CONFIG, epochs: EPOCHS });
      populateOverviewPlaceholders(slideEl, model.entries[0], ERA, model.epochs);
      expect(slideEl.els[0].textContent).toBe('1700 – 1999');
      expect(slideEl.els[1].textContent).toBe('');
      expect(epochSpans(slideEl).map(s => s[1])).toEqual(['Modern Era', 'World Wars', 'Digital Age']);
   });

   it('shows the authored epoch extent for an auto-fit overview', () => {
      const slideEl = makeSlideEl({ overview: '' }, ['tl-timestamp']);
      const model = buildTimelineModel([slideEl], { ...DEFAULT_CONFIG, epochs: EPOCHS });
      populateOverviewPlaceholders(slideEl, model.entries[0], ERA, model.epochs);
      expect(slideEl.els[0].textContent).toBe('1750 – 2010');
   });

   it('formats BC and day-precision bounds', () => {
      const slideEl = makeSlideEl({ timestampStart: '-000043-03-15', timestampEnd: '0014-08-19' }, ['tl-timestamp']);
      const model = buildTimelineModel([slideEl], DEFAULT_CONFIG);
      populateOverviewPlaceholders(slideEl, model.entries[0], ERA, model.epochs);
      expect(slideEl.els[0].textContent).toBe('March 15, 44 BC – August 19, 14');
   });
});

describe('timeline:change range', () => {
   function capture(fn) {
      let detail = null;
      const target = new EventTarget();
      target.addEventListener('timeline:change', e => detail = e.detail);
      fn(target);
      return detail;
   }

   it('reports a range and null timestamp on an overview slide', () => {
      const slideEl = makeSlideEl({ timestampStart: '1700', timestampEnd: '1999' }, []);
      const entry = buildTimelineModel([slideEl], DEFAULT_CONFIG).entries[0];
      const detail = capture(t => dispatchTimelineChange(t, null, null, null, { start: entry.rangeStart, end: entry.rangeEnd }));
      expect(detail.timestamp).toBeNull();
      expect(detail.isTemporal).toBe(false);
      expect(detail.range.start.year).toBe(1700);
      expect(detail.range.end.year).toBe(2000);
   });

   it('reports a null range on a temporal slide', () => {
      const entry = buildTimelineModel([makeSlideEl({ timestamp: '1969' }, [])], DEFAULT_CONFIG).entries[0];
      const detail = capture(t => dispatchTimelineChange(t, entry.timestamp, entry.spanMs, '10 years'));
      expect(detail.isTemporal).toBe(true);
      expect(detail.range).toBeNull();
   });
});
