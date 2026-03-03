## Context

Reveal.js plugins follow a standard interface: a plain object with an `id` string and an `init(deck)` function. The plugin receives the Reveal deck instance and can call its API (`deck.getSlides()`, `deck.on()`, `deck.getState()`, etc.) and manipulate the DOM. There is no existing timeline or temporal navigation capability in Reveal.js core.

The plugin must be a single distributable JS module with no required build step on the consumer side, though it will be authored with modern JS and bundled. CSS for the ticker is either injected by the plugin or provided as a companion file.

## Goals / Non-Goals

**Goals:**
- Render a temporally accurate, animated SVG ticker for Reveal.js presentations
- Support arbitrary timestamp precision from BCE centuries to sub-second instants
- Support nonlinear (non-chronological) slide ordering
- Give authors a simple data-attribute authoring API and a JS event API
- Produce smooth, visually coherent animations on every slide transition

**Non-Goals:**
- Server-side rendering or static export of ticker frames
- Integration with Reveal.js speaker notes or PDF export
- Editing or reordering slides via the timeline
- Support for non-Gregorian calendars
- Internet Explorer or legacy browser support

## Decisions

### Decision: Data attributes on slides, not a central JSON config

**Choice**: Plugin scans `Reveal.getSlides()` at init and reads `data-timestamp` / `data-span` from each slide element to build the timeline model.

**Rationale**: Keeps slides as the single source of truth. Authors write one thing, not two. The plugin still gets the full global view it needs (all timestamps, all spans) because it scans everything at startup — the same information a JSON file would provide.

**Alternative considered**: A central JSON config file mapping slide IDs to timestamps. Rejected because it creates a maintenance burden (two things to keep in sync) and is non-idiomatic for Reveal.js plugins.

---

### Decision: Temporal.PlainDateTime as the internal date type

**Choice**: Parse all `data-timestamp` values into `Temporal.PlainDateTime`. Represent all internal timestamps as `PlainDateTime`.

**Rationale**: Historical timestamps rarely carry meaningful timezone information. `PlainDateTime` supports sub-day precision, snaps naturally to calendar boundaries (month starts, year starts), and handles the full proleptic Gregorian calendar including BCE dates. `Temporal.Instant` would require inventing timezone conventions for ancient history; `Temporal.PlainDate` loses sub-day precision.

**BCE handling**: ISO 8601 extended format uses negative years (astronomical numbering: 44 BCE = year `-43`). `Temporal.PlainDateTime` uses the same convention. The display layer converts to conventional BCE notation for labels.

**Alternative considered**: Native `Date`. Rejected — unreliable for years 0–99, no BCE support, no sub-day calendar arithmetic.

---

### Decision: SVG for ticker rendering

**Choice**: The ticker bar is an inline SVG element injected into the Reveal.js `.reveal` container.

**Rationale**: SVG provides declarative, resolution-independent rendering. Tick positions are simple coordinate arithmetic. CSS custom properties can theme stroke colors, fonts, and sizes without JavaScript. The SVG DOM is easy to diff and update on each animation frame without a full re-render.

**Alternative considered**: Canvas. Better raw performance, but theming requires JS (no CSS variables), hit-testing is manual, and accessibility is harder. Not needed at this scale.

**Alternative considered**: DOM (divs + absolute positioning). Familiar but requires managing many positioned elements, which is less efficient than a single SVG with updated `<text>` and `<line>` nodes.

---

### Decision: Simultaneous linear position + logarithmic span interpolation

**Choice**: On slide change, animate `centerTimestamp` with linear interpolation and `visibleSpan` with logarithmic interpolation, driven by a single `requestAnimationFrame` loop.

**Rationale**: Time position is perceptually linear — the midpoint in time should be at the visual midpoint. Zoom level is perceptually logarithmic — going from 1 hour to 10 years feels like a multiplicative change, not an additive one. Separating the interpolation curves (linear for pan, log for zoom) matches human perception of both dimensions. This is the same approach used by Mapbox and Google Maps for zoom+pan transitions.

```
position(t) = lerp(timestampA, timestampB, ease(t))
span(t)     = exp(lerp(log(spanA), log(spanB), ease(t)))
```

---

### Decision: Cross-fading tick labels on format change

**Choice**: Two SVG `<g>` layers of labels are maintained. When the tick interval or label format changes during animation, the outgoing layer fades to opacity 0 while the incoming layer fades to opacity 1. At rest, only one layer is live.

**Rationale**: Tick labels change format as span interpolates (e.g., "Jun 5" → "Jun" → "1969"). Without a crossfade, labels visually snap, which looks like a bug. A fade reads as intentional and polished.

**Alternative considered**: Fade all labels out at animation start, fade in at end. Simpler, but the ticker looks blank during the transition. Rejected for visual quality.

---

### Decision: Tick snapping to natural calendar boundaries

**Choice**: Tick marks are placed at natural calendar boundaries (midnight, month starts, year starts, decade starts) rather than at equidistant intervals from the center timestamp.

**Rationale**: Audiences read ticks relative to the calendar ("January", "1970"), not relative to the current slide's moment. Calendar-aligned ticks are immediately legible. Equidistant ticks would show, e.g., "July 20", "Aug 20", "Sep 20" — confusing and arbitrary-looking.

---

### Decision: Plugin injects ticker DOM; no separate CSS file required

**Choice**: The plugin injects the SVG ticker element and a `<style>` block with default styles and CSS custom property declarations at init. A companion CSS file is optional for theme overrides.

**Rationale**: Zero-config authoring. The plugin works without any additional setup beyond including it. Authors can override via CSS custom properties on `.reveal` or on individual slides.

---

### Decision: Nonlinear navigation is first-class, not a special case

**Choice**: The plugin makes no assumption about temporal ordering of slides. `Δtimestamp = targetTimestamp - currentTimestamp` may be negative (panning left) or positive (panning right) regardless of deck navigation direction.

**Rationale**: Nonlinear storytelling is a legitimate use case. Warns or corrects nothing. The temporal direction of the ticker animation is always driven by `Δtimestamp`, never by slide index delta.

## Risks / Trade-offs

**Temporal API browser support** → Mitigation: Document the polyfill (`@js-temporal/polyfill`) in the README; consider bundling it as an optional import.

**Performance on large decks** → Scanning 500 slides at init is fast (synchronous DOM reads), but building the marker set and initial SVG could be slow. Mitigation: Defer non-critical SVG work (marker dots) to `requestIdleCallback` after init completes.

**BCE date display conventions** → "44 BCE" vs "44 BC" vs "-43" — no universal standard. Mitigation: Make the era suffix configurable; default to "BCE"/"CE".

**Tick label crossfade complexity** → Two live label layers adds SVG node count and requires careful layer management. Mitigation: Only allocate the second layer when an animation is in progress; tear it down afterward.

**Span string parsing** → Natural language spans ("3 months", "10 years") require a parser. Edge cases (plural/singular, abbreviations) could fail silently. Mitigation: Validate at init and warn in the console for unrecognized span strings.

## Open Questions

- Should the ticker be keyboard-accessible (ARIA roles, focusable tick marks)? Initial version likely skips this; worth a follow-up.
- What is the polyfill strategy for Temporal? Bundle it, recommend it, or require it?
- Should the animation duration scale with temporal distance, or always use the configured fixed duration? (Discussed in exploration — leaning toward fixed duration with a cap.)
