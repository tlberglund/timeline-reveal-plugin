## Context

See proposal.md for motivation. Current state relevant to the approach:

- `buildEpochModel` (`src/timeline-model.js`) parses `start`/`end` with `parseTimestamp`, which already returns `{ timestamp, precision }`. The precision is currently discarded for epochs.
- `buildTimelineModel` reads `data-epoch` into `entry.epochIds`. Navigation (`src/index.js`, `slidechanged`) branches only on `entry.temporal`.
- `renderTicker` (`src/ticker-renderer.js`) computes `axisY = height - AXIS_BOTTOM_MARGIN - epochZoneHeight` inside a **fixed** SVG height, so adding epochs squeezes the ticker. The demo works around this by setting `height: 100`.
- `renderEpochBars` draws every epoch on every frame, with an inline `fill` attribute.
- Animation interpolates `centerTimestamp` and `spanMs` (log-lerp) per frame and cross-fades tick-label layers. There is no per-element opacity state other than the label layers and the whole-ticker fade.

## Goals / Non-Goals

**Goals:**
- One membership rule (`start ≤ t < effectiveEnd`) shared by the renderer, the placeholder, and the model.
- Overview slides reuse the existing center/span animation path unchanged.
- Epoch styling is reachable entirely from CSS.

**Non-Goals:**
- Lane packing or any per-slide lane reassignment.
- Per-epoch style (`'bar'` vs `'line'` per entry). The style is global.
- Point events, or epochs without an end ("ongoing").
- Overriding derived membership per slide.

## Decisions

### D1. Effective end computed once at model build
`buildEpochModel` stores `endTimestamp` as the exclusive bound: the parsed end plus one unit of its precision (`year` → `+P1Y`, `month` → `+P1M`, `day` → `+P1D`, `datetime` → `+PT1S`, since datetimes always carry seconds). Everything downstream (rendering, membership, auto-fit) only ever sees the exclusive bound. The authored strings are also kept (`startLabel`/`endLabel`, formatted at their own precision) for the auto-fit `.tl-timestamp` text.
*Alternative*: compute the inclusive end at each use site. Rejected because it is easy to get wrong in one of three places.

A shared helper `resolveRangeEnd(parsed)` is used for both epoch ends and `data-timestamp-end`, so the two follow the same rule.

### D2. Membership is computed at model build, not per frame
`entry.epochIds` keeps its shape and is now derived. Since timestamps and epochs are static, computing it once is enough. Overview entries get every epoch ID. `data-epoch` is detected only to emit the single warning.

### D3. Overview entries are `temporal: false, overview: true`
Keeping `temporal: false` means `temporalEntries`, extents and dot rendering exclude overviews with no changes. Navigation gains an explicit `entry.overview` branch *before* the non-temporal branch. That branch calls the same animation start as `handleTemporal`, with `{ center, spanMs }` taken from the entry, plus a `mode: 'overview'` flag.
*Alternative*: `temporal: true` with a flag. Rejected because every existing `temporal` check would then need to exclude overviews.

The center is `start + (end − start) / 2`, computed in milliseconds via `plainDateTimeToMs`/`msToPlainDateTime` (already in `animation.js`), so BCE ranges work. Auto-fit padding is 5% of the range on each side, added to `spanMs` only. The *displayed* range (edge labels, `.tl-timestamp`, event) stays unpadded.

### D4. Render state grows a visibility map and a mode
The animation state passed to `renderTicker` gains:
- `epochOpacity: Map<id, number>`, interpolated linearly from the source slide's membership (0/1 per epoch) to the destination's, using the same eased `t` as pan/zoom.
- `overviewOpacity: number`, which goes from 0 to 1 when entering an overview and the reverse when leaving. The center marker and label render at `1 − overviewOpacity`, and the edge labels at `overviewOpacity`.

If an animation is interrupted, it starts from the *current* interpolated values, the same way the existing center/span interruption works, so fades never jump. The initial render and `duration: 0` set the values directly.

An epoch with opacity 0 is skipped entirely (no DOM). An epoch that is hidden at rest therefore costs nothing.

### D5. Layout: SVG height = `config.height + zoneHeight`
`applyTickerLayout` sets the SVG height to `config.height + validEpochCount × EPOCH_LANE_HEIGHT`. The base layout (labels, axis, center label) is computed inside a `config.height` band that is offset by the zone:

```
bar style                         line style
┌──────────────────────┐ 0        ┌──────────────────────┐ 0
│ tick labels          │          │ lane 0  Label ━━━━━━ │
│ ─┴───┴──◆──┴───┴──── │ axis     │ lane 1      Lbl ━━━━ │
│ center label         │          ├──────────────────────┤ zone
├──────────────────────┤ height   │ tick labels          │
│ ▓▓ lane 0 ▓▓▓▓▓▓▓▓▓▓ │          │ ─┴───┴──◆──┴───┴──── │ axis
│ ▓▓ lane 1 ▓▓▓▓       │          │ center label         │
└──────────────────────┘ +zone    └──────────────────────┘ height+zone
```

For `'bar'`, this changes today's behavior: the ticker grows instead of squeezing. This is intentional, and the demo's `height: 100` workaround goes away. The `position: 'top'|'bottom'` pinning is unaffected, because it anchors the SVG box rather than its contents.

### D6. Color via custom property, class per epoch
Each epoch element gets `class="tl-epoch-bar|tl-epoch-line tl-epoch-<id>"`. When `color` is configured, the plugin sets `style="--tl-epoch-color: <color>"` on the element. The plugin CSS (inside the existing `@layer reveal-timeline`) uses `fill: var(--tl-epoch-color)` / `stroke: var(--tl-epoch-color)`, with a default `--tl-epoch-color` on `.tl-ticker`. Because the plugin CSS is layered, unlayered author CSS such as `.tl-epoch-world-wars { --tl-epoch-color: … }` wins without any specificity tricks. When a config `color` is present, the inline custom property still takes precedence over that author CSS. That is acceptable: config is the more specific statement of intent.

The `.tl-epoch-<id>` class deliberately matches the class on the HTML placeholder spans, so one author rule can style an era in both places.

New custom properties: `--tl-epoch-color` (default `rgba(255,255,255,0.35)`) and `--tl-epoch-line-width` (default `3px`).

### D7. Line-style label geometry
Label width is measured once per epoch with `getComputedTextLength()` on first render and cached by id. Text and font size are static, so the cache is invalidated only when the font size changes, which is checked on `resize`. Layout per frame, with `pad = 6`, `gap = 4` and `minLine = 12`:

```
wantLabelX = startX − gap − w
if wantLabelX ≥ pad:   label at wantLabelX,  line from startX
else:                  label at pad,          line from pad + w + gap
                       if visibleEnd − lineStart < minLine: drop label, line from max(startX,0)
```

### D8. Range edge labels share the center-label formatter
The edge labels use `formatTimestampForDisplay` with the authored precision of each bound. For the right edge, that is the authored end (`1999`), not the exclusive bound (`2000-01-01`). They are drawn in their own `.tl-range` group, which uses the center color but fades at `overviewOpacity` (the opposite direction from `.tl-center`).

### D9. Entries are looked up by slide element
Found during implementation: when plugins initialize, Reveal hasn't yet marked vertical-stack parents with `.stack`, so `deck.getSlides()` included them. Model entries for every slide after a vertical stack were therefore off by one (an existing bug). The model is now built only from sections without child sections, and `slidechanged` looks up the entry by `currentSlide` element instead of by index.

## Risks / Trade-offs

- **Bar-style epochs now draw one unit longer and the ticker is taller** → Visible change for 0.1.0 users. Called out as BREAKING in the proposal and noted in the README.
- **`data-epoch` users silently lose editorial control** → The single console warning names the replacement behavior. The README documents the change.
- **Long-running era is invisible on slides outside it, even when its line would be on screen** → This is the requested behavior. The overview slide is the place to compare.
- **Many epochs make the ticker tall** (10 epochs = 140px extra) → Acceptable for now. A later change could make `EPOCH_LANE_HEIGHT` configurable.
- **`getComputedTextLength` returns 0 if the ticker is hidden (`display:none`) at first render** → Measure lazily on the first frame where the result is > 0. Until then, treat the label as not fitting (line only).

## Migration Plan

Ship as 0.2.0. The README gets a "Upgrading from 0.1" note: remove `data-epoch`, re-check epoch end dates (end years are now inclusive), and remove any `height` increase that was added only to make room for epochs. There is nothing to roll back beyond reverting the version.
