## 1. Config

- [x] 1.1 In `src/config.js`, make epoch `color` optional and add `epochStyle` (default `'bar'`, warn and fall back on invalid values); verify with new tests in `src/__tests__/` for default, `'line'`, and invalid values
- [x] 1.2 Add `--tl-epoch-color` and `--tl-epoch-line-width` defaults to the plugin CSS in `@layer reveal-timeline`; verify by inspecting the injected `<style>` in the demo

## 2. Model: epochs and membership

- [x] 2.1 Add a shared `resolveRangeEnd(parsed)` helper that returns the exclusive bound one precision-unit after the parsed value (year/month/day/minute/second, BCE-safe); verify with unit tests covering every precision and a BCE year
- [x] 2.2 Update `buildEpochModel` to store the effective exclusive `endTimestamp`, `color` (or `null`), authored-precision labels for start/end, warn on and drop inverted epochs, and assign lanes contiguously over valid epochs only; verify with updated `timeline-model.test.js` cases (`end: "1945"` → 1946-01-01, invalid middle entry → lanes 0 and 1)
- [x] 2.3 Replace `data-epoch` parsing with derived membership (`start ≤ t < end`, config order) on `entry.epochIds`, and emit exactly one console warning if any slide has `data-epoch`; verify with tests for inclusive start, exclusive end, overlap ordering, and single warning across several slides

## 3. Model: overview slides

- [x] 3.1 Parse `data-timestamp-start`/`data-timestamp-end` into `overview: true` entries with `rangeStart`, `rangeEnd` (via `resolveRangeEnd`), center, `spanMs`, and range labels; warn and treat as non-temporal on missing, unparseable, or inverted bounds; warn when `data-timestamp` is also present; verify with model tests for each case
- [x] 3.2 Support `data-overview` auto-fit (earliest epoch start to latest effective end, `spanMs` padded 5% each side, displayed range unpadded); explicit range wins; warn and treat as non-temporal when no epochs exist; verify with model tests
- [x] 3.3 Give overview entries `temporal: false` and all epoch IDs, and confirm they are excluded from `temporalEntries` and min/max extents; verify with a model test on a mixed deck

## 4. Slide data API

- [x] 4.1 Update `populatePlaceholders` so `.tl-timestamp` shows `"start – end"` on overview slides (authored precision for explicit ranges, epoch config strings for auto-fit) and `.tl-epoch` lists derived membership (all epochs on overview); verify with jsdom tests in `src/__tests__/`
- [x] 4.2 Add `detail.range` to `timeline:change` (`{start, end}` on overview, `null` otherwise, with `timestamp: null` and `isTemporal: false` on overview); verify with a test listening for the event

## 5. Animation state

- [x] 5.1 Extend the animation state with `epochOpacity` (per-id, linear on eased `t`, from source membership to destination membership) and `overviewOpacity`; interruptions continue from current values; initial render and `duration: 0` set values directly; verify with `animation.test.js` cases for fade-in, fade-out, interruption mid-fade, and zero duration
- [x] 5.2 In `src/index.js`, add an `entry.overview` navigation branch before the non-temporal branch that animates to the overview center/span, keeps the ticker visible regardless of `noTimestamp`, and dispatches the overview event/placeholders; verify manually in the demo that navigating to and from an overview pans and zooms smoothly and that `noTimestamp: 'hide'` doesn't hide it

## 6. Rendering

- [x] 6.1 Set SVG height to `config.height + validEpochCount × EPOCH_LANE_HEIGHT` and lay out the base band below (line) or above (bar) the zone; verify in the demo that the tick/axis/center spacing is identical with and without epochs, for both `position: 'top'` and `'bottom'`
- [x] 6.2 Update bar rendering: classes `tl-epoch-bar tl-epoch-<id>`, `--tl-epoch-color` style instead of `fill`, effective end, per-epoch opacity (skip at 0); verify in the browser that an unlayered `.tl-epoch-<id> { --tl-epoch-color: red }` rule recolors an epoch without a configured color
- [x] 6.3 Implement line rendering: `tl-epoch-line tl-epoch-<id>` lines centered in their lanes, stroke from `--tl-epoch-color`, width from `--tl-epoch-line-width`, clipped to the viewport, per-epoch opacity; verify visually in the demo with `epochStyle: 'line'`
- [x] 6.4 Implement the line-style inline-before label layout (cached text width, pin to left padding with the line starting after the label, drop the label below the minimum line width, lazy measurement when the width is 0); verify in the demo by panning so an era starts on screen, near the left edge, off screen, and is barely visible
- [x] 6.5 Fade the center marker and label by `1 − overviewOpacity`, render range edge labels in `.tl-center` at `overviewOpacity`, and suppress dots for overview entries; verify in the demo that an overview at rest shows edge labels, no ◆, no center label, and no dot

## 7. Demo deck

- [x] 7.1 Replace the demo epochs with a set of meaningful, overlapping historical eras that cover the existing slides (for example Roman Republic, Middle Ages, Scientific Revolution, Enlightenment, Industrial Revolution, World Wars, Cold War, Space Age, Information Age), chosen so most slides fall in at least one era and several fall in two or more; switch the demo to `epochStyle: 'line'`; remove all `data-epoch` attributes and the `height: 100` workaround; verify in the browser that each slide shows the expected eras and no `data-epoch` warning appears
- [x] 7.2 Add a `data-overview` slide early in the deck that shows all eras together, and an explicit-range overview (e.g. `data-timestamp-start="1900" data-timestamp-end="1999"`) before the World War vertical stack; include `.tl-timestamp` and `.tl-epoch` placeholders on both; verify in the browser that both render the range, the edge labels, and the expected eras
- [x] 7.3 Add a short demo note or slide showing one era recolored purely through CSS via `.tl-epoch-<id>`; verify that the color appears both on the ticker and in the `.tl-epoch` placeholder text

## 8. Docs and release

- [x] 8.1 Document in `README.md`: the `epochs` config and precision-aware end, `epochStyle`, derived membership, the `.tl-epoch` placeholder, the overview slide attributes, `detail.range`, the new CSS custom properties and `.tl-epoch-<id>` class, plus an "Upgrading from 0.1" section; verify by reading the rendered README against the specs
- [x] 8.2 Run the full test suite and both builds (`npm test`, `npm run build`, `npm run build:iife`, `npm run build:iife:min`); verify all tests pass and that `demo/index.html` works against the rebuilt `dist/` IIFE bundle
