## REMOVED Requirements

### Requirement: Epoch zone below axis
**Reason**: The ticker now grows by the epoch zone height instead of shifting its axis upward inside a fixed height, and the zone's position depends on `epochStyle`.
**Migration**: See "Epoch zone sizing and placement". Remove any `height` increase that was added only to make room for epochs.

## MODIFIED Requirements

### Requirement: Epoch bars rendered as colored rectangles
In the `'bar'` style the plugin SHALL render each visible epoch as a filled `<rect>` element in a `.tl-epochs` SVG group, positioned at its lane y-coordinate and spanning from the epoch's start x-position to its effective end x-position in the current viewport. Each rect SHALL carry the classes `tl-epoch-bar` and `tl-epoch-<id>`. Its fill SHALL come from the `--tl-epoch-color` CSS custom property; when the epoch config declares `color`, that value SHALL be set as `--tl-epoch-color` on the element rather than as an inline `fill` attribute.

#### Scenario: Epoch bar spans correct x range
- **WHEN** an epoch's start maps to x=100 and its effective end maps to x=700 in the current viewport
- **THEN** the `<rect>` SHALL have `x=100`, `width=600`

#### Scenario: Epoch bar clipped to viewport
- **WHEN** an epoch's start x is off-screen to the left (negative)
- **THEN** the rendered `<rect>` SHALL be clipped to `x=0`, with width adjusted accordingly, so no bar renders outside the SVG bounds

#### Scenario: Epoch entirely off-screen is not rendered
- **WHEN** an epoch's end x is less than 0 or start x is greater than svgWidth
- **THEN** no `<rect>` SHALL be rendered for that epoch in that frame

#### Scenario: Epoch bar uses configured color
- **WHEN** an epoch declares `color: "rgba(100,180,255,0.35)"`
- **THEN** the `<rect>` SHALL have `--tl-epoch-color: rgba(100,180,255,0.35)` set on it and SHALL NOT have an inline `fill` attribute

#### Scenario: CSS can style an epoch by id
- **WHEN** an author's stylesheet contains `.tl-epoch-world-wars { --tl-epoch-color: red; }` and the `world-wars` epoch has no configured `color`
- **THEN** the `world-wars` bar SHALL render red

#### Scenario: Default color when none configured
- **WHEN** an epoch has no configured `color` and no author CSS targets it
- **THEN** the bar SHALL use the default value of `--tl-epoch-color` defined by the plugin

#### Scenario: Epoch bars appear below all other ticker elements
- **WHEN** epoch bars and tick marks occupy the same x range
- **THEN** epoch bars SHALL render below tick marks, axis line, dot markers, and center marker in z-order

---

### Requirement: Epoch labels pinned to visible left edge
In the `'bar'` style the plugin SHALL render a text label for each visible epoch bar, inside the bar. The label SHALL be positioned at the left edge of the visible portion of the bar — not the absolute start of the epoch — so that the label remains readable as the viewport scrolls through a long epoch.

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
The plugin SHALL re-render epochs (bars or lines) and their labels on every render frame (during animation and at rest), recomputing x-positions from the current `centerTimestamp` and `spanMs` and applying each epoch's current visibility opacity, so that epochs animate smoothly during slide transitions.

#### Scenario: Epoch bars animate during span/position transitions
- **WHEN** the timeline animates between two slides with different timestamps or spans
- **THEN** epoch x-positions SHALL update on every animation frame, moving fluidly

#### Scenario: Epoch bars correct at rest
- **WHEN** animation completes and the ticker renders at rest
- **THEN** epoch positions and opacities SHALL match the final centerTimestamp, spanMs, and visible epoch set exactly

## ADDED Requirements

### Requirement: Epoch zone sizing and placement
The ticker SHALL reserve a zone for epochs whose height equals the number of valid configured epochs multiplied by a fixed lane height constant (`EPOCH_LANE_HEIGHT = 14px`). The zone height SHALL be computed once at init from the configured epoch count and SHALL NOT change between slides, regardless of how many epochs are visible. The ticker's rendered height SHALL be the configured `height` plus the epoch zone height, so that all existing ticker elements (ticks, labels, center marker) keep the same size and spacing they have with no epochs configured. In the `'bar'` style the zone SHALL sit below the axis; in the `'line'` style the zone SHALL sit at the top of the ticker, above the tick labels.

#### Scenario: Ticker grows by zone height
- **WHEN** `height: 56` is configured and two epochs are configured
- **THEN** the ticker SHALL render 56 + 2 × 14 = 84px tall

#### Scenario: No growth when no epochs configured
- **WHEN** no epochs are configured
- **THEN** the ticker SHALL render at exactly the configured `height`, identical to current behavior

#### Scenario: Zone height scales with lane count
- **WHEN** three epochs are configured
- **THEN** the epoch zone SHALL occupy `3 * 14 = 42px`

#### Scenario: Zone height fixed across slides
- **WHEN** the user navigates from a slide inside two epochs to a slide inside none
- **THEN** the epoch zone height and the axis position SHALL be unchanged

#### Scenario: Bar zone below axis
- **WHEN** `epochStyle` is `'bar'`
- **THEN** lane 0 SHALL begin directly below the axis area and subsequent lanes SHALL stack downward

#### Scenario: Line zone above tick labels
- **WHEN** `epochStyle` is `'line'`
- **THEN** lane 0 SHALL be at the top of the ticker and subsequent lanes SHALL stack downward, ending above the tick labels

---

### Requirement: Epoch lines rendered in line style
In the `'line'` style the plugin SHALL render each visible epoch as a solid horizontal line in the `.tl-epochs` SVG group, vertically centered in its lane, spanning from the epoch's start x-position to its effective end x-position, clipped to the viewport. Each line SHALL carry the classes `tl-epoch-line` and `tl-epoch-<id>`. Its stroke color SHALL come from `--tl-epoch-color` (set from config `color` when given, as in the bar style) and its thickness from `--tl-epoch-line-width` (default `3px`).

#### Scenario: Line spans correct x range
- **WHEN** an epoch's start maps to x=300 and its effective end maps to x=700, and there is room for its label to the left of x=300
- **THEN** the line SHALL run from x=300 to x=700

#### Scenario: Line clipped to viewport
- **WHEN** an epoch extends past the right edge of the ticker
- **THEN** the line SHALL end at the right edge of the ticker

#### Scenario: Line uses configured color via custom property
- **WHEN** an epoch declares `color: "#f55"`
- **THEN** the line element SHALL have `--tl-epoch-color: #f55` set on it and no inline `stroke` color

#### Scenario: Line thickness themable
- **WHEN** an author sets `.tl-ticker { --tl-epoch-line-width: 5px; }`
- **THEN** epoch lines SHALL render 5px thick

---

### Requirement: Line-style labels inline before the line
In the `'line'` style the plugin SHALL render each visible epoch's label on the same lane, immediately to the left of the line's start, so that the line begins exactly at the epoch's start date. When there is not enough room to the left of the start within the ticker, the label SHALL be pinned to the left edge of the ticker and the line SHALL be drawn starting just after the label's right end. When the visible portion of the line to the right of a pinned label would be shorter than a minimum width, the label SHALL be omitted and the line drawn alone. Labels SHALL use `--tl-epoch-label-color`.

#### Scenario: Label before a fully visible line
- **WHEN** an epoch starts at x=300 and its label is 70px wide
- **THEN** the label SHALL end just left of x=300 (with a small gap) and the line SHALL start at x=300

#### Scenario: Label pinned when epoch starts off-screen
- **WHEN** an epoch starts at x=-200 and continues to x=600
- **THEN** the label SHALL begin at the left padding of the ticker, and the line SHALL start just after the label's right end and run to x=600

#### Scenario: Label pinned when epoch starts too close to the left edge
- **WHEN** an epoch starts at x=20 and its label is 70px wide
- **THEN** the label SHALL be pinned to the left padding of the ticker and the line SHALL start just after the label's right end

#### Scenario: Label omitted when too little line would remain
- **WHEN** an epoch's visible portion is so narrow that, after a pinned label, less than the minimum line width would remain
- **THEN** no label SHALL be rendered and the line SHALL be drawn over its full visible extent

---

### Requirement: Epoch visibility follows slide membership
On a temporal slide the plugin SHALL show only the epochs the slide belongs to (per derived membership). On an overview slide the plugin SHALL show all epochs. On a non-temporal slide the epochs SHALL follow the ticker's `noTimestamp` behavior. Every epoch SHALL keep its config-order lane whether or not other epochs are visible; hidden epochs leave their lane empty.

#### Scenario: Only containing epochs shown
- **WHEN** the current slide's timestamp is 1942 and epochs `modern-era` (1750–2010), `world-wars` (1914–1945), and `digital-age` (1969–2010) are configured
- **THEN** `modern-era` and `world-wars` SHALL be visible and `digital-age` SHALL NOT be visible, even if its extent intersects the visible span

#### Scenario: Stable lanes
- **WHEN** only the epoch in lane 2 is visible
- **THEN** it SHALL render in lane 2, with lanes 0 and 1 empty

#### Scenario: Epochs fade on transition
- **WHEN** the user navigates from a slide in `world-wars` to a slide in `digital-age` but not `world-wars`
- **THEN** `world-wars` SHALL fade from opacity 1 to 0 and `digital-age` from 0 to 1 over the slide transition animation duration

#### Scenario: Instant visibility without animation
- **WHEN** the initial slide renders, or the animation duration is 0
- **THEN** epoch visibility SHALL be applied immediately without a fade
