import { Temporal } from '@js-temporal/polyfill';

// ─── Constants ────────────────────────────────────────────────────────────────

const SVG_NS = 'http://www.w3.org/2000/svg';
const STYLES_INJECTED_ATTR = 'data-tl-styles-injected';

const TICK_INTERVAL_TABLE = [
   { maxSpan: 120_000,           unit: 'second', value: 10  },
   { maxSpan: 3_600_000,         unit: 'minute', value: 5   },
   { maxSpan: 43_200_000,        unit: 'hour',   value: 1   },
   { maxSpan: 604_800_000,       unit: 'hour',   value: 12  },
   { maxSpan: 7_776_000_000,     unit: 'week',   value: 1   },
   { maxSpan: 47_336_400_000,    unit: 'month',  value: 1   },
   { maxSpan: 315_569_520_000,   unit: 'year',   value: 1   },
   { maxSpan: 3_155_695_200_000, unit: 'year',   value: 10  },
   { maxSpan: 31_556_952_000_000,unit: 'year',   value: 100 },
];

const DEFAULT_TICK_INTERVAL = { unit: 'year', value: 500 };

const EPOCH_LANE_HEIGHT = 14;
const AXIS_BOTTOM_MARGIN = 14;

const CSS = `
@layer reveal-timeline {
  :root {
    --tl-tick-color: rgba(255,255,255,0.6);
    --tl-label-color: rgba(255,255,255,0.8);
    --tl-marker-color: #fff;
    --tl-center-color: #4af;
    --tl-dot-visited: rgba(255,255,255,0.7);
    --tl-dot-unvisited: rgba(255,255,255,0.25);
    --tl-dot-current: #4af;
    --tl-font-size: 11px;
    --tl-line-width: 1;
    --tl-center-line-width: 2;
    --tl-epoch-label-color: rgba(255,255,255,0.9);
  }
  .tl-ticker {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 100;
    font-family: inherit;
  }
  .tl-ticker.tl-position-bottom { bottom: 0; }
  .tl-ticker.tl-position-top { top: 0; }
}
`;

// ─── Utilities ────────────────────────────────────────────────────────────────

function svgEl(tag, attrs) {
   const el = document.createElementNS(SVG_NS, tag);
   for(const [k, v] of Object.entries(attrs)) {
      el.setAttribute(k, v);
   }
   return el;
}

function clearGroup(group) {
   while(group.firstChild) {
      group.removeChild(group.firstChild);
   }
}

/**
 * Returns an approximate millisecond offset from a reference epoch.
 * Uses a year-based approximation suitable for tick positioning.
 * Handles BCE years (year <= 0 in Temporal's astronomical year notation).
 */
function plainDateTimeToMs(pdt) {
   const year = pdt.year;
   const dayOfYear = getDayOfYear(pdt);
   const msInDay = (pdt.hour * 3600 + pdt.minute * 60 + pdt.second) * 1000 + pdt.millisecond;
   return (year * 365.2425 * 86400000) + ((dayOfYear - 1) * 86400000) + msInDay;
}

function getDayOfYear(pdt) {
   const daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   const year = pdt.year;
   const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
   if(isLeap) {
      daysInMonths[2] = 29;
   }
   let day = 0;
   for(let m = 1; m < pdt.month; m++) {
      day += daysInMonths[m];
   }
   day += pdt.day;
   return day;
}

function padTwo(n) {
   return String(n).padStart(2, '0');
}

const MONTH_ABBREVS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAY_ABBREVS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

// ─── Style Injection ──────────────────────────────────────────────────────────

/**
 * Injects the default CSS into document.head (only once).
 */
export function injectStyles() {
   if(document.head.hasAttribute(STYLES_INJECTED_ATTR)) {
      return;
   }
   const style = document.createElement('style');
   style.textContent = CSS;
   document.head.appendChild(style);
   document.head.setAttribute(STYLES_INJECTED_ATTR, 'true');
}

// ─── Ticker Construction ──────────────────────────────────────────────────────

/**
 * Creates the SVG ticker element and appends it to revealEl.
 * Returns the SVG element.
 */
export function injectTicker(revealEl, config) {
   injectStyles();

   const svg = document.createElementNS(SVG_NS, 'svg');
   svg.setAttribute('class', 'tl-ticker');
   svg.setAttribute('xmlns', SVG_NS);

   // Epoch bars layer (lowest z-order)
   const epochsGroup = document.createElementNS(SVG_NS, 'g');
   epochsGroup.setAttribute('class', 'tl-epochs');
   svg.appendChild(epochsGroup);

   // Axis layer
   const axisGroup = document.createElementNS(SVG_NS, 'g');
   axisGroup.setAttribute('class', 'tl-axis');
   svg.appendChild(axisGroup);

   // Tick layer
   const ticksGroup = document.createElementNS(SVG_NS, 'g');
   ticksGroup.setAttribute('class', 'tl-ticks');
   svg.appendChild(ticksGroup);

   // Label layer A
   const labelsA = document.createElementNS(SVG_NS, 'g');
   labelsA.setAttribute('class', 'tl-labels-a tl-labels');
   svg.appendChild(labelsA);

   // Label layer B
   const labelsB = document.createElementNS(SVG_NS, 'g');
   labelsB.setAttribute('class', 'tl-labels-b tl-labels');
   svg.appendChild(labelsB);

   // Dots layer
   const dotsGroup = document.createElementNS(SVG_NS, 'g');
   dotsGroup.setAttribute('class', 'tl-dots');
   svg.appendChild(dotsGroup);

   // Center marker layer
   const centerGroup = document.createElementNS(SVG_NS, 'g');
   centerGroup.setAttribute('class', 'tl-center');
   svg.appendChild(centerGroup);

   revealEl.appendChild(svg);

   positionTicker(svg, config);

   return svg;
}

// ─── Positioning ──────────────────────────────────────────────────────────────

/**
 * Applies height and position classes to the SVG ticker.
 */
export function positionTicker(svg, config) {
   svg.style.height = config.height + 'px';
   svg.classList.remove('tl-position-top', 'tl-position-bottom');
   if(config.position === 'top') {
      svg.classList.add('tl-position-top');
   }
   else {
      svg.classList.add('tl-position-bottom');
   }
}

// ─── Tick Computation ─────────────────────────────────────────────────────────

/**
 * Determines tick interval from span table.
 */
function resolveTickInterval(spanMs) {
   for(const entry of TICK_INTERVAL_TABLE) {
      if(spanMs < entry.maxSpan) {
         return { unit: entry.unit, value: entry.value };
      }
   }
   return { ...DEFAULT_TICK_INTERVAL };
}

/**
 * Snaps a PlainDateTime to the nearest calendar boundary for the given unit+value.
 * Returns the snapped timestamp (always at or before the original).
 */
function snapToFloor(pdt, unit, value) {
   switch(unit) {
      case 'second': {
         const snappedSecond = Math.floor(pdt.second / value) * value;
         return Temporal.PlainDateTime.from({
            year: pdt.year, month: pdt.month, day: pdt.day,
            hour: pdt.hour, minute: pdt.minute, second: snappedSecond,
         });
      }
      case 'minute': {
         const snappedMinute = Math.floor(pdt.minute / value) * value;
         return Temporal.PlainDateTime.from({
            year: pdt.year, month: pdt.month, day: pdt.day,
            hour: pdt.hour, minute: snappedMinute, second: 0,
         });
      }
      case 'hour': {
         const snappedHour = Math.floor(pdt.hour / value) * value;
         return Temporal.PlainDateTime.from({
            year: pdt.year, month: pdt.month, day: pdt.day,
            hour: snappedHour, minute: 0, second: 0,
         });
      }
      case 'day': {
         return Temporal.PlainDateTime.from({
            year: pdt.year, month: pdt.month, day: pdt.day,
            hour: 0, minute: 0, second: 0,
         });
      }
      case 'week': {
         // Snap to nearest Sunday (dayOfWeek: 1=Mon...7=Sun in Temporal)
         const dow = pdt.dayOfWeek; // 1 = Monday, 7 = Sunday
         const daysToSubtract = dow % 7; // Sunday = 0 offset
         return Temporal.PlainDateTime.from({
            year: pdt.year, month: pdt.month, day: pdt.day,
            hour: 0, minute: 0, second: 0,
         }).subtract({ days: daysToSubtract });
      }
      case 'month': {
         return Temporal.PlainDateTime.from({
            year: pdt.year, month: pdt.month, day: 1,
            hour: 0, minute: 0, second: 0,
         });
      }
      case 'year': {
         const snappedYear = Math.floor(pdt.year / value) * value;
         // Temporal does not allow year 0; shift to -1 (1 BCE) when snapping lands on 0
         const safeYear = snappedYear === 0 ? -1 : snappedYear;
         return Temporal.PlainDateTime.from({
            year: safeYear,
            month: 1, day: 1, hour: 0, minute: 0, second: 0,
         });
      }
      default:
         return pdt;
   }
}

/**
 * Advances a snapped tick timestamp by one interval.
 */
function advanceTick(pdt, unit, value) {
   switch(unit) {
      case 'second':
         return pdt.add({ seconds: value });
      case 'minute':
         return pdt.add({ minutes: value });
      case 'hour':
         return pdt.add({ hours: value });
      case 'day':
         return pdt.add({ days: value });
      case 'week':
         return pdt.add({ weeks: value });
      case 'month':
         return pdt.add({ months: value });
      case 'year':
         return pdt.add({ years: value });
      default:
         return pdt.add({ years: value });
   }
}

/**
 * Computes visible ticks for the current viewport.
 *
 * @param {Temporal.PlainDateTime} centerTimestamp
 * @param {number} spanMs - visible span in milliseconds
 * @param {number} width  - SVG width in pixels
 * @returns {Array<{ timestamp: Temporal.PlainDateTime, x: number, label: string }>}
 */
export function computeTicks(centerTimestamp, spanMs, width, eraSuffix) {
   const { unit, value } = resolveTickInterval(spanMs);

   const centerMs = plainDateTimeToMs(centerTimestamp);
   const halfSpan = spanMs / 2;
   const startMs = centerMs - halfSpan;
   const endMs = centerMs + halfSpan;
   const centerX = width / 2;

   // Compute approximate start PlainDateTime
   // Walk backward from centerTimestamp by half the span duration
   let startPdt;
   try {
      startPdt = centerTimestamp.subtract(durationFromMs(halfSpan + spanMs * 0.1));
   }
   catch(e) {
      startPdt = centerTimestamp.subtract({ years: 1 });
   }

   // Snap startPdt to calendar floor
   let current = snapToFloor(startPdt, unit, value);

   const ticks = [];
   let safetyLimit = 2000;

   while(safetyLimit-- > 0) {
      const tickMs = plainDateTimeToMs(current);

      if(tickMs > endMs + (spanMs * 0.1)) {
         break;
      }

      const x = centerX + (tickMs - centerMs) / spanMs * width;

      if(x >= -20 && x <= width + 20) {
         const label = formatTickLabel(current, unit, value, eraSuffix);
         ticks.push({ timestamp: current, x, label });
      }

      const next = advanceTick(current, unit, value);
      // Guard against infinite loops if advanceTick doesn't actually advance
      if(plainDateTimeToMs(next) <= tickMs) {
         break;
      }
      current = next;
   }

   return ticks;
}

/**
 * Creates a rough Duration from a millisecond value for use with Temporal subtraction.
 */
function durationFromMs(ms) {
   const HOUR_MS = 3_600_000;
   const DAY_MS = 86_400_000;
   const YEAR_MS = 31_556_952_000;

   if(ms >= YEAR_MS) {
      const years = Math.floor(ms / YEAR_MS);
      return { years: Math.max(years, 1) };
   }
   if(ms >= DAY_MS) {
      const days = Math.floor(ms / DAY_MS);
      return { days: Math.max(days, 1) };
   }
   const hours = Math.floor(ms / HOUR_MS);
   return { hours: Math.max(hours, 1) };
}

// ─── Label Formatting ─────────────────────────────────────────────────────────

/**
 * Formats a tick label based on interval unit and value.
 *
 * @param {Temporal.PlainDateTime} timestamp
 * @param {string} intervalUnit
 * @param {number} intervalValue
 * @param {{ bce: string, ce: string }} eraSuffix
 * @returns {string}
 */
export function formatTickLabel(timestamp, intervalUnit, intervalValue, eraSuffix) {
   const eras = eraSuffix || { bc: 'BC', ad: 'AD' };

   if(intervalUnit === 'second' || intervalUnit === 'minute') {
      return `${padTwo(timestamp.hour)}:${padTwo(timestamp.minute)}`;
   }

   if(intervalUnit === 'hour') {
      if(intervalValue === 1) {
         // "2pm" / "14:00" style — use 12-hour with am/pm
         const h = timestamp.hour;
         const ampm = h < 12 ? 'am' : 'pm';
         const h12 = h % 12 === 0 ? 12 : h % 12;
         return `${h12}${ampm}`;
      }
      else {
         // 12hr interval: "Mon 14:00"
         const dow = DAY_ABBREVS[timestamp.dayOfWeek % 7]; // dayOfWeek 1=Mon...7=Sun
         return `${dow} ${padTwo(timestamp.hour)}:00`;
      }
   }

   if(intervalUnit === 'week' || intervalUnit === 'day') {
      const mon = MONTH_ABBREVS[timestamp.month - 1];
      return `${mon} ${timestamp.day}`;
   }

   if(intervalUnit === 'month') {
      if(timestamp.year <= 0) {
         const bceYear = 1 - timestamp.year;
         return `${MONTH_ABBREVS[timestamp.month - 1]} ${bceYear} ${eras.bc}`;
      }
      return `${MONTH_ABBREVS[timestamp.month - 1]} ${timestamp.year}`;
   }

   if(intervalUnit === 'year') {
      if(intervalValue === 1) {
         if(timestamp.year <= 0) {
            return `${1 - timestamp.year} ${eras.bc}`;
         }
         return `${timestamp.year}`;
      }

      if(intervalValue === 10) {
         // "1960s"
         if(timestamp.year <= 0) {
            const bceYear = 1 - timestamp.year;
            const decadeBase = Math.floor(bceYear / 10) * 10;
            return `${decadeBase}s ${eras.bc}`;
         }
         const decade = Math.floor(timestamp.year / 10) * 10;
         return `${decade}s`;
      }

      if(intervalValue === 100) {
         // "1900s"
         if(timestamp.year <= 0) {
            const bceYear = 1 - timestamp.year;
            const centuryBase = Math.floor(bceYear / 100) * 100;
            return `${centuryBase}s ${eras.bc}`;
         }
         const century = Math.floor(timestamp.year / 100) * 100;
         return `${century}s`;
      }

      // 500yr or other large intervals — just display the year
      if(timestamp.year <= 0) {
         return `${1 - timestamp.year} ${eras.bc}`;
      }
      return `${timestamp.year}`;
   }

   // Fallback
   return `${timestamp.year}`;
}

// ─── Main Render Function ─────────────────────────────────────────────────────

/**
 * Main render function. Called every frame during animation and on initial render.
 *
 * @param {SVGSVGElement} svgEl
 * @param {{ centerTimestamp: Temporal.PlainDateTime, spanMs: number,
 *           activeLayer: 'a'|'b', layerOpacity: { a: number, b: number } }} state
 * @param {object} model - TimelineModel from buildTimelineModel
 * @param {object} config - resolved config
 */
export function renderTicker(svgElement, state, model, config) {
   const rect = svgElement.getBoundingClientRect();
   const width = rect.width || svgElement.clientWidth || 800;
   const height = config.height;

   const { centerTimestamp, precision, spanMs, activeLayer, layerOpacity } = state;

   const epochs = model.epochs || [];
   const epochZoneHeight = epochs.length * EPOCH_LANE_HEIGHT;
   const axisY = height - AXIS_BOTTOM_MARGIN - epochZoneHeight;

   const ticks = computeTicks(centerTimestamp, spanMs, width, config.eraSuffix);

   // ── Epoch bars ─────────────────────────────────────────────────────────────
   const epochsGroup = svgElement.querySelector('.tl-epochs');
   if(epochsGroup) {
      renderEpochBars(epochsGroup, epochs, centerTimestamp, spanMs, width, axisY);
   }

   // ── Axis line ──────────────────────────────────────────────────────────────
   const axisGroup = svgElement.querySelector('.tl-axis');
   if(axisGroup) {
      clearGroup(axisGroup);
      const line = svgEl('line', {
         class: 'tl-axis-line',
         x1: '0', y1: axisY,
         x2: '100%', y2: axisY,
         stroke: 'var(--tl-tick-color)',
         'stroke-width': 'var(--tl-line-width)',
      });
      axisGroup.appendChild(line);
   }

   // ── Tick lines ─────────────────────────────────────────────────────────────
   const ticksGroup = svgElement.querySelector('.tl-ticks');
   if(ticksGroup) {
      renderTickLines(ticksGroup, ticks, axisY);
   }

   // ── Labels (crossfade layers) ──────────────────────────────────────────────
   const labelsA = svgElement.querySelector('.tl-labels-a');
   const labelsB = svgElement.querySelector('.tl-labels-b');

   if(labelsA && labelsB) {
      const opA = layerOpacity ? (layerOpacity.a != null ? layerOpacity.a : 1) : 1;
      const opB = layerOpacity ? (layerOpacity.b != null ? layerOpacity.b : 0) : 0;

      // Render ticks into the active layer; the inactive layer retains previous content
      const centerX = width / 2;
      if(activeLayer === 'a') {
         renderTickLabels(labelsA, ticks, axisY, opA, centerX);
         labelsB.setAttribute('opacity', String(opB));
      }
      else {
         renderTickLabels(labelsB, ticks, axisY, opB, centerX);
         labelsA.setAttribute('opacity', String(opA));
      }
   }

   // ── Dot markers ───────────────────────────────────────────────────────────
   const dotsGroup = svgElement.querySelector('.tl-dots');
   if(dotsGroup) {
      updateDotMarkers(dotsGroup, model, centerTimestamp, spanMs, width, axisY, config);
   }

   // ── Center marker ─────────────────────────────────────────────────────────
   const centerGroup = svgElement.querySelector('.tl-center');
   if(centerGroup) {
      renderCenterMarker(centerGroup, width, axisY, centerTimestamp, precision, config);
   }
}

// ─── Epoch Bars ───────────────────────────────────────────────────────────────

const EPOCH_LABEL_MIN_WIDTH = 40;
const EPOCH_LABEL_PADDING = 6;

function renderEpochBars(group, epochs, centerTimestamp, spanMs, svgWidth, axisY) {
   clearGroup(group);

   if(!epochs || epochs.length === 0) {
      return;
   }

   const centerMs = plainDateTimeToMs(centerTimestamp);
   const centerX = svgWidth / 2;

   for(const epoch of epochs) {
      const startMs = plainDateTimeToMs(epoch.startTimestamp);
      const endMs = plainDateTimeToMs(epoch.endTimestamp);

      const startX = centerX + (startMs - centerMs) / spanMs * svgWidth;
      const endX = centerX + (endMs - centerMs) / spanMs * svgWidth;

      // Skip if entirely off-screen
      if(endX <= 0 || startX >= svgWidth) {
         continue;
      }

      const rectX = Math.max(startX, 0);
      const rectWidth = Math.min(endX, svgWidth) - rectX;

      if(rectWidth <= 0) {
         continue;
      }

      const barY = axisY + AXIS_BOTTOM_MARGIN + epoch.lane * EPOCH_LANE_HEIGHT;

      const rect = svgEl('rect', {
         class: 'tl-epoch-bar',
         x: rectX,
         y: barY,
         width: rectWidth,
         height: EPOCH_LANE_HEIGHT,
         fill: epoch.color,
      });
      group.appendChild(rect);

      // Pinned label
      const labelX = Math.max(startX, 0) + EPOCH_LABEL_PADDING;
      const visibleRight = Math.min(endX, svgWidth) - EPOCH_LABEL_PADDING;

      if(visibleRight - labelX >= EPOCH_LABEL_MIN_WIDTH) {
         const labelY = barY + EPOCH_LANE_HEIGHT / 2;
         const text = svgEl('text', {
            class: 'tl-epoch-label',
            x: labelX,
            y: labelY,
            'dominant-baseline': 'middle',
            fill: 'var(--tl-epoch-label-color)',
            'font-size': 'var(--tl-font-size)',
         });
         text.textContent = epoch.label;
         group.appendChild(text);
      }
   }
}

// ─── Tick Lines ───────────────────────────────────────────────────────────────

function renderTickLines(group, ticks, axisY) {
   clearGroup(group);

   for(const tick of ticks) {
      const isMajor = tick.label !== '';
      const tickHeight = isMajor ? 8 : 4;
      const line = svgEl('line', {
         class: 'tl-tick',
         x1: tick.x, y1: axisY - tickHeight,
         x2: tick.x, y2: axisY,
         stroke: 'var(--tl-tick-color)',
         'stroke-width': isMajor ? 'calc(var(--tl-line-width) * 1.5)' : 'var(--tl-line-width)',
      });
      group.appendChild(line);
   }
}

// ─── Tick Labels ──────────────────────────────────────────────────────────────

const CENTER_LABEL_SUPPRESS_RADIUS = 20;

function renderTickLabels(group, ticks, axisY, opacity, centerX) {
   clearGroup(group);
   group.setAttribute('opacity', String(opacity));

   // Major tick height = 8, so top of major tick = axisY - 8.
   // Place baseline 4px above the top of the tick for a comfortable gap.
   const labelY = axisY - 12;

   for(const tick of ticks) {
      if(!tick.label) {
         continue;
      }
      if(centerX != null && Math.abs(tick.x - centerX) < CENTER_LABEL_SUPPRESS_RADIUS) {
         continue;
      }
      const text = svgEl('text', {
         class: 'tl-tick-label',
         x: tick.x,
         y: labelY,
         'text-anchor': 'middle',
         fill: 'var(--tl-label-color)',
         'font-size': 'var(--tl-font-size)',
      });
      text.textContent = tick.label;
      group.appendChild(text);
   }
}

// ─── Center Marker ────────────────────────────────────────────────────────────

/**
 * Renders the center marker: a vertical line + optional label.
 */
export function renderCenterMarker(centerGroup, svgWidth, axisY, centerTimestamp, precision, config) {
   clearGroup(centerGroup);

   const cx = svgWidth / 2;
   const labelHeight = 16;

   // Label at top of center line (rendered first so line draws over its bottom edge)
   if(config.centerLabel && centerTimestamp) {
      const labelText = formatCenterLabel(centerTimestamp, precision, config.eraSuffix);
      const text = svgEl('text', {
         class: 'tl-center-label',
         x: cx,
         y: 3,
         'text-anchor': 'middle',
         'dominant-baseline': 'hanging',
         fill: 'var(--tl-center-color)',
         'font-size': 'var(--tl-font-size)',
         'font-weight': 'bold',
      });
      text.textContent = labelText;
      centerGroup.appendChild(text);
   }

   // Vertical line from below label to just above diamond
   const diamondSize = 5;
   const lineTop = config.centerLabel ? config.centerLineTop : 0;
   const line = svgEl('line', {
      class: 'tl-center-line',
      x1: cx, y1: lineTop,
      x2: cx, y2: axisY - diamondSize,
      stroke: 'var(--tl-center-color)',
      'stroke-width': 'var(--tl-center-line-width)',
   });
   centerGroup.appendChild(line);

   // Small diamond marker at axis level
   const dy = axisY;
   const diamond = svgEl('polygon', {
      class: 'tl-center-marker',
      points: `${cx},${dy - diamondSize} ${cx + diamondSize},${dy} ${cx},${dy + diamondSize} ${cx - diamondSize},${dy}`,
      fill: 'var(--tl-center-color)',
   });
   centerGroup.appendChild(diamond);
}

function formatCenterLabel(pdt, precision, eraSuffix) {
   const bc = (eraSuffix && eraSuffix.bc) || 'BC';
   const displayYear = pdt.year <= 0 ? `${1 - pdt.year} ${bc}` : `${pdt.year}`;

   if(precision === 'year') {
      return displayYear;
   }

   const month = MONTH_ABBREVS[pdt.month - 1];

   if(precision === 'month') {
      return `${month} ${displayYear}`;
   }

   if(precision === 'datetime') {
      return `${month} ${pdt.day}, ${displayYear} ${padTwo(pdt.hour)}:${padTwo(pdt.minute)}`;
   }

   return `${month} ${pdt.day}, ${displayYear}`;
}

// ─── Dot Markers ──────────────────────────────────────────────────────────────

/**
 * Renders dot markers for all temporal entries in the model.
 */
export function updateDotMarkers(dotsGroup, model, centerTimestamp, spanMs, svgWidth, axisY, config) {
   clearGroup(dotsGroup);

   if(!model || !model.temporalEntries) {
      return;
   }

   const centerMs = plainDateTimeToMs(centerTimestamp);
   const centerX = svgWidth / 2;
   const dotY = axisY; // on the axis line

   for(const entry of model.temporalEntries) {
      const entryMs = plainDateTimeToMs(entry.timestamp);
      const x = centerX + (entryMs - centerMs) / spanMs * svgWidth;

      if(x < 0 || x > svgWidth) {
         continue;
      }

      const isCurrent = Temporal.PlainDateTime.compare(entry.timestamp, centerTimestamp) === 0;
      const isVisited = entry.visited;

      let fill;
      let radius;

      if(isCurrent) {
         fill = 'var(--tl-dot-current)';
         radius = 5;
      }
      else if(isVisited) {
         fill = 'var(--tl-dot-visited)';
         radius = 4;
      }
      else {
         fill = 'var(--tl-dot-unvisited)';
         radius = 3;
      }

      const circle = svgEl('circle', {
         class: 'tl-dot',
         cx: x,
         cy: dotY,
         r: radius,
         fill,
      });
      dotsGroup.appendChild(circle);
   }
}
