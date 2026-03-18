## Context

The plugin currently renders a timeline ticker as a fixed SVG with layers for axis, ticks, labels, dots, and a center marker. Vertical layout is computed relative to a fixed `axisY = svgHeight - 14`. The plugin has no concept of named time periods — authors manage era labels manually with custom CSS classes.

Epochs are named, colored time ranges declared globally in config. They will be rendered as horizontal bars in a new zone below the axis. Because `axisY` is currently hardcoded, introducing a dynamic epoch zone requires making axis position a computed value throughout the renderer.

## Goals / Non-Goals

**Goals:**
- Render epoch bars as colored horizontal bands in a dedicated zone below the axis
- Stack multiple epochs in fixed lanes determined by config array order
- Pin epoch labels to the visible left edge of their bar
- Inject epoch membership into slides as styled `.tl-epoch` placeholder elements
- Parse epoch `start`/`end` timestamps using the existing `parseTimestamp` function
- Keep the axis, ticks, labels, and center marker rendering unchanged in behavior

**Non-Goals:**
- Auto-sizing the ticker height based on epoch count
- Animating epoch bar transitions
- Dynamically packing overlapping epochs into minimal lanes
- Rendering epoch bars in the SVG layers above the axis
- Keyboard accessibility for epoch bars

## Decisions

### Decision: `axisY` becomes a computed value passed through the render pipeline

**Choice**: Compute `axisY` once in `renderTicker` as `svgHeight - AXIS_BOTTOM_MARGIN - epochZoneHeight`, where `epochZoneHeight = epochs.length * EPOCH_LANE_HEIGHT`. Pass it as a parameter to all sub-renderers that currently recompute it independently.

**Rationale**: Six render functions currently each hardcode `axisY = svgHeight - 14`. Centralizing the computation avoids drift when epoch count changes the zone height, and makes the relationship between epochs and axis position explicit.

**Alternative considered**: Keep `axisY` hardcoded in each function and add separate epoch-zone coordinates. Rejected — too many callsites to keep in sync, and the relationship between epoch zone and axis would be implicit.

---

### Decision: Epoch model built in `buildTimelineModel`, returned alongside slide entries

**Choice**: `buildTimelineModel` reads `config.epochs`, calls `parseTimestamp` on each epoch's `start` and `end`, and returns an `epochs` array on the model object alongside the existing `entries` and `temporalEntries`.

**Rationale**: The model-building phase already scans all slides and has access to config. Epoch parsing is the same kind of one-time init work. Keeping it here means `index.js` gets one enriched model object and doesn't need to manage epoch state separately.

**Alternative considered**: Build epoch model in `index.js` at init. Rejected — spreads model concerns across two files and makes testing harder.

---

### Decision: Slide `data-epoch` is read during model build; epoch membership stored on entries

**Choice**: During `buildTimelineModel`, read `slideEl.dataset.epoch` (space-separated), split into an array of epoch IDs, and store as `entry.epochIds`. The slide API uses this at navigation time to inject `.tl-epoch` placeholders.

**Rationale**: Consistent with how `data-timestamp` and `data-span` are read at model-build time. Membership resolution (which epoch config objects correspond to a slide's IDs) happens at injection time, not model-build time, keeping the model pure.

---

### Decision: Epoch bars rendered in a new `.tl-epochs` SVG group, below axis

**Choice**: Add a `.tl-epochs` group as the lowest z-order layer in the SVG. Each epoch bar is a `<rect>` from `epochStartX` to `epochEndX` at the lane's y position. The epoch label is a `<text>` with x pinned to `max(epochStartX, leftPadding)`, clipped to not exceed `epochEndX - rightPadding`. If the visible bar width is narrower than the label, suppress the label.

**Rationale**: Placing epochs below everything else means the axis line, dot markers, and center marker all render visibly on top of the epoch bars. This gives a clear visual hierarchy — the epoch coloring is background context, not foreground information.

**Alternative considered**: Render epoch bars above the axis but below the tick marks. Rejected — the axis line would then be obscured by the bars, and the visual layering would be confusing.

---

### Decision: Lane height is a fixed constant; user controls total height via `config.height`

**Choice**: `EPOCH_LANE_HEIGHT = 14` (px). Users are expected to increase `config.height` to accommodate their epoch count. No auto-sizing.

**Rationale**: Auto-sizing would require the ticker SVG to resize dynamically, which interacts with Reveal.js layout in unpredictable ways. The user already manages ticker height manually.

---

### Decision: `.tl-epoch` injection mirrors `.tl-timestamp` pattern

**Choice**: `populatePlaceholders` finds all `.tl-epoch` elements on the current slide and replaces them with one `<span class="tl-epoch tl-epoch-<id>">Label</span>` per epoch the slide belongs to. The original `.tl-epoch` element is replaced (not filled), so authors can place an empty sentinel element anywhere and get styled epoch badges back.

**Rationale**: Mirrors the existing `.tl-timestamp` / `.tl-label` pattern. Authors already understand the placeholder contract. Per-epoch CSS classes enable independent styling of each epoch without JavaScript.

**Alternative considered**: Fill a single `.tl-epoch` element with comma-separated labels. Rejected — prevents per-epoch styling and makes multi-epoch slides awkward to style.

## Risks / Trade-offs

**`axisY` refactor touches many render functions** → All callers are in `ticker-renderer.js` and covered by the same render pipeline. The change is mechanical but broad. Mitigation: make `axisY` the first parameter added, run existing tests after each function is updated.

**Epoch bars with no visible portion still attempt label pinning** → If both `epochStartX` and `epochEndX` are off-screen, the bar is not drawn at all; the label-pinning path is never reached. Mitigation: guard with an early `continue` when the bar is entirely outside `[0, svgWidth]`.

**`data-epoch` with an unknown ID** → If a slide references an epoch ID not present in `config.epochs`, it is silently ignored. No bar renders, no placeholder injects. Mitigation: warn in the console at model-build time when an unrecognized epoch ID is encountered.

**Label text overflow within narrow visible bars** → When the visible portion of an epoch bar is too narrow to show its label, the label is suppressed entirely. This is correct behavior but may surprise authors who zoom in tightly. No mitigation needed — suppression is the right UX.

## Open Questions

- Should `EPOCH_LANE_HEIGHT` be a config option (e.g., `epochLaneHeight`)? Starting as a constant; promote to config if authors request it.
- Should epoch bars show a tooltip or ARIA label for accessibility? Out of scope for now.
