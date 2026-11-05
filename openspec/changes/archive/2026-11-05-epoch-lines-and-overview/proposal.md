## Why

Epochs (added in March) render as thick filled bars below the axis, one lane per epoch, all visible all the time, with membership declared redundantly on each slide via `data-epoch`. That gets noisy fast with more than a few eras, the inline `fill` can't be styled from CSS, and there is no way to step back and show how eras overlap across a long stretch of history. This change makes epochs lighter, derived from data rather than hand-declared, and adds a zoomed-out overview slide that displays every era at once.

## What Changes

- New `epochStyle` config option: `'bar'` (the current filled-rectangle look) or `'line'` (thin solid lines above the axis with the era name inline before the line's start).
- Epoch `color` becomes optional. Every epoch element always carries a `.tl-epoch-<id>` class; when `color` is given it is applied as the `--tl-epoch-color` custom property instead of an inline `fill`, so CSS can always style eras.
- Epoch end bounds become **precision-aware**: `end: "1945"` means "through the end of 1945" (exclusive bound 1946-01-01). This affects both membership and where bars/lines are drawn. **BREAKING** (visual: epochs drawn slightly longer than before).
- Epoch membership becomes **implicit**: a slide belongs to an epoch iff `start ≤ slide timestamp < effectiveEnd`.
- **BREAKING**: `data-epoch` is removed. If any slide uses it, the plugin logs a single console warning and ignores it.
- On normal temporal slides only the epochs containing the slide's timestamp are shown; others fade out in place.
- Lanes are stable, in config order. The epoch zone is sized once, to the configured epoch count, and does not change between slides. Epochs fade in and out during the existing pan/zoom animation.
- New **overview slide**: either an explicit range via `data-timestamp-start` / `data-timestamp-end`, or `data-overview` to fit automatically to the extent of all configured epochs. The overview slide is shown with all epochs, edge labels giving the range, and no center marker, center label, or slide dot. It counts as non-temporal for the event and placeholders: `timeline:change` reports `timestamp: null` plus `range: { start, end }`, `.tl-timestamp` shows `"start – end"`, and `.tl-epoch` lists all epochs.
- The demo deck is updated with a set of meaningful, overlapping eras (in line style) and at least one overview slide that shows them all together.
- The README gains documentation for epochs, `epochStyle`, the overview slide, and the related CSS custom properties.

## Capabilities

### New Capabilities
- `overview-slide`: Range-based slides (`data-timestamp-start`/`data-timestamp-end` or `data-overview`), how they resolve to a viewport, and how the ticker, placeholders and event behave on them.

### Modified Capabilities
- `epoch-config`: Optional `color`, new `epochStyle` option, precision-aware end bounds.
- `epoch-rendering`: Line style, inline-before labels with left-edge pinning, CSS class/custom-property styling instead of inline fill, membership-filtered visibility with fade, zone sized to config count for both styles.
- `epoch-slide-api`: Membership derived from timestamps; `data-epoch` removed with a warning; `.tl-epoch` placeholder content follows derived membership (all epochs on overview slides).
- `timeline-model`: Epoch model stores effective exclusive end; entries store derived epoch IDs; model entries gain range/overview information.
- `slide-data-api`: `timeline:change` gains `range` for overview slides; `.tl-timestamp` shows a range on overview slides.
- `ticker-rendering`: Center marker, center label and dot suppressed on overview slides; range edge labels; ticker stays visible on overview slides despite having no single timestamp.

## Impact

- **Code**: `src/config.js`, `src/timeline-model.js`, `src/ticker-renderer.js`, `src/slide-data-api.js`, `src/index.js`, `src/animation.js` (epoch fade alongside pan/zoom), and their tests in `src/__tests__/`.
- **Public API**: `data-epoch` removed (breaking for 0.1.0 users, mitigated by a console warning); new slide attributes `data-timestamp-start`, `data-timestamp-end`, `data-overview`; new config `epochStyle`; `timeline:change` detail gains `range`.
- **Demo**: `demo/index.html` epochs and slides reworked.
- **Docs**: `README.md`.
- **Build**: `dist/` bundles rebuilt.
- No new dependencies.
