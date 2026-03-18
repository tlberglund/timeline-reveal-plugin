## Why

Presentations that span large historical periods often contain slides belonging to distinct named epochs (e.g., "The Industrial Revolution", "The Deep Learning Era"). Today, authors must manually manage epoch labels on each slide with custom CSS and no connection to the timeline visualization. Epochs should be a first-class concept in the plugin — defined once, rendered automatically on the timeline, and injected into slides as styled placeholders.

## What Changes

- Add an `epochs` array to the plugin config, where each epoch declares an `id`, `label`, `color`, and explicit `start`/`end` timestamps
- Parse epoch `start`/`end` using the same timestamp parser already used for slides (supports year-only through full datetime)
- Render epoch bars as colored horizontal bands in a new zone at the bottom of the ticker SVG, below the axis line, stacked in fixed lanes by config order
- Pin epoch labels to the visible left edge of each bar so they remain readable when an epoch extends off-screen
- Slides declare epoch membership via `data-epoch` (space-separated for multiple epochs)
- Inject `.tl-epoch` placeholder elements into slides on navigation, one per epoch the slide belongs to, each with a per-epoch CSS class (`tl-epoch-<id>`) so authors can style them independently

## Capabilities

### New Capabilities

- `epoch-config`: Parsing and validation of the `epochs` array in plugin config, including `start`/`end` timestamp parsing
- `epoch-rendering`: SVG rendering of epoch bars in a dedicated zone below the axis, with pinned labels and correct lane stacking
- `epoch-slide-api`: Slide-level epoch membership declaration (`data-epoch`) and `.tl-epoch` placeholder injection

### Modified Capabilities

- `timeline-model`: The timeline model build must now also read `data-epoch` from each slide and associate slide entries with epoch IDs for placeholder injection

## Impact

- `src/config.js`: New `epochs` array in `DEFAULT_CONFIG` and `resolveConfig`
- `src/timeline-model.js`: `buildTimelineModel` reads `data-epoch` per slide; epoch objects built separately from slide entries
- `src/ticker-renderer.js`: New SVG layer group `.tl-epochs`; `axisY` becomes dynamic based on epoch lane count; new render function for epoch bars
- `src/slide-data-api.js`: `populatePlaceholders` injects `.tl-epoch` elements
- `src/index.js`: Passes epoch model through to renderer and slide API
- No new dependencies; no breaking changes to existing config keys or slide data attributes
