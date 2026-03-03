## Why

Reveal.js has no native way to orient an audience chronologically — especially in nonlinear or historically-themed presentations where the narrative jumps through time. An animated timeline ticker gives audiences a persistent temporal compass, showing exactly when each slide's moment falls in history and how far the narrative has traveled.

## What Changes

- New standalone Reveal.js plugin (`RevealTimeline`) distributed as a single JS module
- Authors add `data-timestamp` and `data-span` attributes to slides; the plugin scans them at init to build a full timeline model
- An SVG ticker bar renders across the bottom of every slide, with auto-calculated tick marks and labels appropriate to the visible time span
- On each slide transition, the ticker simultaneously pans (linear interpolation) and zooms (logarithmic interpolation) to the new timestamp and span
- Tick labels cross-fade when the tick interval or format changes during animation
- Small dot markers appear on the ticker at every slide's timestamp, indicating visited/unvisited state
- Slides without timestamps cause the ticker to fade out gracefully
- DOM placeholder elements (`.tl-timestamp`, `.tl-label`) and a `timeline:change` custom event expose timestamp data to slide content
- All date handling uses the Temporal API; ISO 8601 extended format supports BCE dates
- Configurable via `Reveal.initialize()` options with presentation-wide defaults that individual slides can override

## Capabilities

### New Capabilities

- `timeline-model`: Scanning slides at init, building the internal data model, resolving timestamps and spans, and providing the authoritative timeline state to all other subsystems
- `ticker-rendering`: SVG-based ticker bar: tick marks, labels, center marker, slide dot markers, visited/unvisited states, and fade behavior for timestampless slides
- `ticker-animation`: Simultaneous linear position + logarithmic span interpolation on slide change, with cross-fading labels during format transitions
- `slide-data-api`: DOM placeholder population and `timeline:change` event — the authoring-facing API for accessing timestamp data within slide content
- `plugin-config`: Reveal.initialize() options schema, defaults, and per-slide override resolution

### Modified Capabilities

## Impact

- **New dependency**: Temporal API (TC39 Stage 3, natively available in modern browsers; polyfill needed for broader support)
- **No changes to existing Reveal.js APIs** — plugin registers via the standard plugin interface
- **Authoring impact**: Slide authors add `data-timestamp` / `data-span` attributes and optionally reference `.tl-timestamp` / `.tl-label` placeholders in slide HTML
- **Styling**: The SVG ticker is themeable via CSS custom properties; no conflict with existing Reveal.js themes
