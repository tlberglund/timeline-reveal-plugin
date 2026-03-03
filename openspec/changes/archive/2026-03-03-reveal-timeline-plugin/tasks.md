## 1. Project Setup

- [x] 1.1 Initialize package.json with name, version, module entry point, and build script
- [x] 1.2 Add Temporal API polyfill (`@js-temporal/polyfill`) as a dependency
- [x] 1.3 Set up a bundler (e.g., Rollup or esbuild) to produce a single distributable JS file
- [x] 1.4 Create a minimal demo `index.html` with Reveal.js and the plugin wired up for manual testing

## 2. Plugin Config (`plugin-config`)

- [x] 2.1 Define the config schema with all options: `defaultSpan`, `position`, `height`, `centerLabel`, `noTimestamp`, `animation`, `eraSuffix`
- [x] 2.2 Implement config resolution: merge user-provided config with defaults
- [x] 2.3 Implement the span string parser (e.g., `"3 months"` → `Temporal.Duration`) supporting seconds, minutes, hours, days, weeks, months, years, centuries
- [x] 2.4 Write tests for span string parser covering singular/plural forms and invalid input warnings

## 3. Timeline Model (`timeline-model`)

- [x] 3.1 Implement `buildTimelineModel(deck, config)`: scan `deck.getSlides()`, read `data-timestamp` and `data-span`, return a `TimelineModel` array
- [x] 3.2 Implement ISO 8601 timestamp parsing to `Temporal.PlainDateTime`, handling date-only, year-only, datetime, and BCE (negative year) formats
- [x] 3.3 Implement per-slide span resolution (per-slide attribute → config default)
- [x] 3.4 Implement `TimelineModel` properties: `minTimestamp`, `maxTimestamp`, list of all temporal entries with slide index and visited state
- [x] 3.5 Log console warnings for invalid timestamps and invalid span strings; mark affected slides as non-temporal
- [x] 3.6 Write tests for timestamp parsing covering all formats and the BCE edge case

## 4. Ticker DOM & SVG Structure (`ticker-rendering`)

- [x] 4.1 Implement `injectTicker(revealEl, config)`: create the SVG element, inject default styles and CSS custom properties, append to `.reveal`
- [x] 4.2 Implement `positionTicker(svgEl, config)`: apply top/bottom positioning and height
- [x] 4.3 Define the SVG layer structure: axis line, tick group, two label layers (A and B for crossfade), center marker group, dot marker group
- [x] 4.4 Implement `computeTicks(centerTimestamp, span)`: determine tick interval from the interval table, enumerate calendar-boundary ticks within the visible range
- [x] 4.5 Implement `formatTickLabel(timestamp, interval, eraSuffix)`: produce human-readable labels for all tick intervals, including BCE display
- [x] 4.6 Implement `renderTicks(svgEl, ticks, activeLayer)`: update tick line and label elements in the active SVG label layer
- [x] 4.7 Implement center marker rendering: vertical line + optional timestamp label at horizontal midpoint
- [x] 4.8 Implement dot marker rendering: place dots for all temporal slides at their timeline positions, applying visited/unvisited/current styles

## 5. Animation Engine (`ticker-animation`)

- [x] 5.1 Implement `timestampToMs(plainDateTime)`: convert a `Temporal.PlainDateTime` to a numeric offset (milliseconds from an internal epoch) suitable for linear interpolation
- [x] 5.2 Implement `lerp(a, b, t)` and `logLerp(a, b, t)` interpolation utilities
- [x] 5.3 Implement the easing function resolver: built-in ease-in-out and support for cubic-bezier config values
- [x] 5.4 Implement `AnimationController`: tracks current animation state (startTimestamp, startSpan, targetTimestamp, targetSpan, startTime, duration); supports interruption by capturing current interpolated values as new start
- [x] 5.5 Implement the `requestAnimationFrame` render loop: drive interpolation, call `renderTicker` each frame, stop when complete
- [x] 5.6 Implement label crossfade: detect tick interval/format changes during animation; fade out active label layer, fade in inactive layer, swap roles when fade completes
- [x] 5.7 Implement temporal direction detection (`Δtimestamp` sign) and correct pan direction in tick position calculations
- [x] 5.8 Write tests for `logLerp` verifying the midpoint of a log interpolation from 1 hour to 10 years is approximately 3 months

## 6. Slide Data API (`slide-data-api`)

- [x] 6.1 Implement `populatePlaceholders(slideEl, timestamp, spanString)`: find `.tl-timestamp` and `.tl-label` elements in the slide and set their text content
- [x] 6.2 Implement `formatTimestampForDisplay(plainDateTime, eraSuffix)`: full human-readable format for DOM placeholders, respecting timestamp precision (date-only vs date-time)
- [x] 6.3 Implement `dispatchTimelineChange(deckEl, timestamp, span, spanString)`: construct and dispatch the `timeline:change` CustomEvent with the correct `detail` payload
- [x] 6.4 Handle non-temporal slides: clear placeholders, dispatch event with null values

## 7. Plugin Integration & Lifecycle

- [x] 7.1 Implement the top-level plugin object `{ id: 'timeline', init(deck) { ... } }` wiring all subsystems together
- [x] 7.2 On init: build `TimelineModel`, inject ticker, render initial state for the first slide
- [x] 7.3 On `slidechanged` event: start `AnimationController` for the new slide, populate placeholders, dispatch event
- [x] 7.4 On navigation to non-temporal slide: fade ticker (or hide/freeze per config), clear placeholders, dispatch event
- [x] 7.5 Mark slides as visited in `TimelineModel` on first navigation; update dot marker styles accordingly
- [x] 7.6 Handle `resize` event: recompute ticker dimensions and rerender at new size without animation

## 8. Demo & Documentation

- [x] 8.1 Build a demo presentation with at least 8 slides spanning multiple time scales, including BCE dates, nonlinear ordering, and slides without timestamps
- [x] 8.2 Add a second demo section showing Nolan-style nonlinear navigation
- [x] 8.3 Write a README covering installation, Reveal.initialize() config options, slide authoring (data attributes, DOM placeholders, event API), and the Temporal polyfill requirement
- [x] 8.4 Document all CSS custom properties for theming
