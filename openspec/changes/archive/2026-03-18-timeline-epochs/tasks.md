## 1. Config

- [x] 1.1 Add `epochs` array (default `[]`) to `DEFAULT_CONFIG` in `config.js`
- [x] 1.2 Add epoch merging logic to `resolveConfig` so each epoch entry is shallow-merged and the array reference is not shared
- [x] 1.3 Add `--tl-epoch-label-color` CSS custom property (default `rgba(255,255,255,0.9)`) to the injected CSS in `ticker-renderer.js`

## 2. Epoch Model

- [x] 2.1 Add `buildEpochModel(config)` function in `timeline-model.js` that iterates `config.epochs`, calls `parseTimestamp` on `start` and `end`, logs a warning and skips entries with invalid timestamps, and returns an array of resolved epoch objects with `{ id, label, color, lane, startTimestamp, endTimestamp }`
- [x] 2.2 Update `buildTimelineModel` to read `slideEl.dataset.epoch`, split by whitespace, store as `entry.epochIds` (empty array if absent), and log a console warning for any ID not found in `config.epochs`
- [x] 2.3 Call `buildEpochModel` from `buildTimelineModel` and attach the result as `model.epochs`
- [x] 2.4 Add unit tests for `buildEpochModel`: valid entries, invalid timestamp warning, empty config, lane assignment

## 3. Dynamic axisY

- [x] 3.1 Add `EPOCH_LANE_HEIGHT = 14` constant to `ticker-renderer.js`
- [x] 3.2 In `renderTicker`, compute `epochZoneHeight = model.epochs.length * EPOCH_LANE_HEIGHT` and `axisY = height - 14 - epochZoneHeight`
- [x] 3.3 Pass computed `axisY` as a parameter to `renderTickLines`, `renderTickLabels`, `renderCenterMarker`, and `updateDotMarkers`, replacing each function's internal `svgHeight - 14` hardcode
- [x] 3.4 Verify existing visual layout is unchanged when `config.epochs` is empty (axisY should equal `svgHeight - 14` as before)

## 4. Epoch Bar Rendering

- [x] 4.1 Add `.tl-epochs` SVG group in `injectTicker`, inserted as the first child of the SVG (lowest z-order)
- [x] 4.2 Write `renderEpochBars(epochsGroup, epochs, centerTimestamp, spanMs, svgWidth, axisY, config)` in `ticker-renderer.js`
- [x] 4.3 In `renderEpochBars`, for each epoch compute `startX` and `endX` from `centerTimestamp`/`spanMs` using the existing `plainDateTimeToMs` arithmetic; skip epochs entirely off-screen
- [x] 4.4 Clip bar rect to viewport: `rectX = max(startX, 0)`, `rectWidth = min(endX, svgWidth) - rectX`; skip if `rectWidth <= 0`
- [x] 4.5 Render each bar as a `<rect>` with `y = axisY + 14 + lane * EPOCH_LANE_HEIGHT`, `height = EPOCH_LANE_HEIGHT`, `fill = epoch.color`
- [x] 4.6 Render pinned label: `labelX = max(startX, 0) + 6`; suppress label if `min(endX, svgWidth) - labelX < minLabelWidth` (use 40px as minimum); text `y` centered in lane, `fill = var(--tl-epoch-label-color)`, `font-size = var(--tl-font-size)`
- [x] 4.7 Call `renderEpochBars` from `renderTicker` after computing `axisY`, passing `model.epochs`

## 5. Slide API

- [x] 5.1 Update `populatePlaceholders` in `slide-data-api.js` to accept an `epochs` parameter (array of resolved epoch objects) and `epochIds` (array of IDs for the current slide)
- [x] 5.2 In `populatePlaceholders`, find all `.tl-epoch` sentinel elements in the slide; for each, replace it with a `<span class="tl-epoch tl-epoch-<id>">Label</span>` for each matched epoch (in lane order), or remove content if the slide has no epoch membership
- [x] 5.3 Update all `populatePlaceholders` call sites in `index.js` to pass `model.epochs` and `entry.epochIds`
- [x] 5.4 Update `clearPlaceholders` to also clear `.tl-epoch` injected content

## 6. Wiring in index.js

- [x] 6.1 Pass `model.epochs` into the render state object so `renderTicker` has access to it
- [x] 6.2 Confirm epoch bars animate correctly during `AnimationController` frames (no extra wiring needed if `renderTicker` is called each frame with current state)

## 7. Build and Verification

- [x] 7.1 Run `npm test` — all existing tests must pass
- [x] 7.2 Run `npm run build:iife` and `npm run build` — both must succeed
- [ ] 7.3 Manually verify: epoch bars appear, animate during slide transitions, label pins at left edge when epoch extends off-screen, stacking is correct with 2+ epochs
- [ ] 7.4 Manually verify: existing presentations with no `epochs` config are visually unchanged
