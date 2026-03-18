## ADDED Requirements

### Requirement: Epoch zone below axis
The ticker SVG SHALL reserve a zone below the axis line for epoch bars. The zone height SHALL equal the number of configured epochs multiplied by a fixed lane height constant (`EPOCH_LANE_HEIGHT = 14px`). The axis `y` position SHALL shift upward by the total epoch zone height so that all existing ticker elements (ticks, labels, center marker) remain visually unaffected.

#### Scenario: Axis shifts up when epochs are configured
- **WHEN** two epochs are configured
- **THEN** the axis line SHALL be positioned at `svgHeight - 14 - (2 * 14)` instead of `svgHeight - 14`

#### Scenario: No axis shift when no epochs configured
- **WHEN** no epochs are configured
- **THEN** the axis line SHALL remain at `svgHeight - 14`, identical to current behavior

#### Scenario: Epoch zone height scales with lane count
- **WHEN** three epochs are configured
- **THEN** the epoch zone SHALL occupy `3 * 14 = 42px` below the axis line

---

### Requirement: Epoch bars rendered as colored rectangles
The plugin SHALL render each epoch as a filled `<rect>` element in a `.tl-epochs` SVG group, positioned at the correct lane y-coordinate and spanning from the epoch's start x-position to its end x-position in the current viewport. The fill color SHALL be taken from the epoch's `color` config value.

#### Scenario: Epoch bar spans correct x range
- **WHEN** an epoch's start timestamp maps to x=100 and end timestamp maps to x=700 in the current viewport
- **THEN** the `<rect>` SHALL have `x=100`, `width=600`

#### Scenario: Epoch bar clipped to viewport
- **WHEN** an epoch's start x is off-screen to the left (negative)
- **THEN** the rendered `<rect>` SHALL be clipped to `x=0`, with width adjusted accordingly, so no bar renders outside the SVG bounds

#### Scenario: Epoch entirely off-screen is not rendered
- **WHEN** an epoch's end x is less than 0 or start x is greater than svgWidth
- **THEN** no `<rect>` SHALL be rendered for that epoch in that frame

#### Scenario: Epoch bar uses configured color
- **WHEN** an epoch declares `color: "rgba(100,180,255,0.35)"`
- **THEN** the `<rect>` fill SHALL be `rgba(100,180,255,0.35)`

#### Scenario: Epoch bars appear below all other ticker elements
- **WHEN** epoch bars and tick marks occupy the same x range
- **THEN** epoch bars SHALL render below tick marks, axis line, dot markers, and center marker in z-order

---

### Requirement: Epoch labels pinned to visible left edge
The plugin SHALL render a text label for each visible epoch bar. The label SHALL be positioned at the left edge of the visible portion of the bar — not the absolute start of the epoch — so that the label remains readable as the viewport scrolls through a long epoch.

#### Scenario: Label pins to left edge when epoch starts off-screen
- **WHEN** an epoch's start x is negative (off-screen to the left)
- **THEN** the label text SHALL be positioned at `x = leftPadding` (e.g., 6px from the left SVG edge)

#### Scenario: Label tracks epoch start when fully visible
- **WHEN** an epoch's start x is within the viewport
- **THEN** the label text SHALL be positioned at `x = epochStartX + leftPadding`

#### Scenario: Label suppressed when visible bar is too narrow
- **WHEN** the visible portion of an epoch bar is narrower than the label text would require
- **THEN** no label SHALL be rendered for that epoch in that frame

#### Scenario: Label color contrasts with bar
- **WHEN** an epoch bar is rendered
- **THEN** the label text SHALL use a configurable CSS custom property `--tl-epoch-label-color` (defaulting to `rgba(255,255,255,0.9)`)

---

### Requirement: Epoch rendering updates every frame
The plugin SHALL re-render epoch bars and labels on every render frame (during animation and at rest), recomputing x-positions from the current `centerTimestamp` and `spanMs` so that epoch bars animate smoothly during slide transitions.

#### Scenario: Epoch bars animate during span/position transitions
- **WHEN** the timeline animates between two slides with different timestamps or spans
- **THEN** epoch bar x-positions SHALL update on every animation frame, moving fluidly

#### Scenario: Epoch bars correct at rest
- **WHEN** animation completes and the ticker renders at rest
- **THEN** epoch bar positions SHALL match the final centerTimestamp and spanMs exactly
