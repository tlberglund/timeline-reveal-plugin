## ADDED Requirements

### Requirement: Plugin registered via standard Reveal.js plugin interface
The plugin SHALL be registered and configured through `Reveal.initialize()` using the standard Reveal.js plugin mechanism.

#### Scenario: Plugin activates when included in plugins array
- **WHEN** `RevealTimeline` is included in the `plugins` array passed to `Reveal.initialize()`
- **THEN** the plugin SHALL initialize and the ticker SHALL render

#### Scenario: Config object is optional
- **WHEN** `Reveal.initialize()` is called with no `timeline` config key
- **THEN** the plugin SHALL initialize with all default values and no error SHALL be thrown

---

### Requirement: Presentation-wide default span
The plugin config SHALL accept a `defaultSpan` string that specifies the visible time span used for any temporal slide that does not have a `data-span` attribute.

#### Scenario: Default span applied when slide has no data-span
- **WHEN** `timeline.defaultSpan` is set to `"5 years"` and a slide has no `data-span`
- **THEN** that slide's visible span SHALL be 5 years

#### Scenario: Default span value when not configured
- **WHEN** no `timeline.defaultSpan` is configured
- **THEN** the effective default span SHALL be `"10 years"`

---

### Requirement: Ticker position configuration
The plugin SHALL accept a `position` config option controlling whether the ticker appears at the top or bottom of the presentation.

#### Scenario: Bottom position is the default
- **WHEN** `position` is not configured
- **THEN** the ticker SHALL appear at the bottom edge of the `.reveal` container

#### Scenario: Top position places ticker at top
- **WHEN** `position: "top"` is configured
- **THEN** the ticker SHALL appear at the top edge of the `.reveal` container

---

### Requirement: Ticker height configuration
The plugin SHALL accept a `height` config option (in pixels) controlling the height of the SVG ticker bar.

#### Scenario: Default height is applied when not configured
- **WHEN** `height` is not configured
- **THEN** the ticker height SHALL default to 56 pixels

#### Scenario: Custom height is applied
- **WHEN** `height: 80` is configured
- **THEN** the ticker SVG element SHALL have a height of 80 pixels

---

### Requirement: Center label configuration
The plugin SHALL accept a `centerLabel` boolean config option controlling whether the current slide's formatted timestamp is displayed at the center marker.

#### Scenario: Center label shown by default
- **WHEN** `centerLabel` is not configured
- **THEN** the formatted timestamp SHALL appear at the center of the ticker

#### Scenario: Center label hidden when disabled
- **WHEN** `centerLabel: false` is configured
- **THEN** no timestamp label SHALL appear at the center marker position

---

### Requirement: Non-temporal slide behavior configuration
The plugin SHALL accept a `noTimestamp` config option controlling ticker behavior on slides without a timestamp.

#### Scenario: Ticker fades by default
- **WHEN** `noTimestamp` is not configured and the current slide has no timestamp
- **THEN** the ticker SHALL fade to invisible

#### Scenario: Ticker can be hidden instantly
- **WHEN** `noTimestamp: "hide"` is configured
- **THEN** the ticker SHALL immediately become invisible (no fade) on non-temporal slides

#### Scenario: Ticker can freeze at last position
- **WHEN** `noTimestamp: "freeze"` is configured
- **THEN** the ticker SHALL remain visible at its last temporal position with no animation

---

### Requirement: Animation configuration
The plugin SHALL accept an `animation` config object with `duration` (milliseconds) and `easing` sub-options.

#### Scenario: Duration default
- **WHEN** `animation.duration` is not configured
- **THEN** transitions SHALL animate over 600 milliseconds

#### Scenario: Duration override
- **WHEN** `animation.duration: 1000` is configured
- **THEN** transitions SHALL animate over 1000 milliseconds

#### Scenario: Easing default
- **WHEN** `animation.easing` is not configured
- **THEN** the animation SHALL use an ease-in-out curve

---

### Requirement: Era suffix configuration
The plugin SHALL accept an `eraSuffix` config object with `bce` and `ce` string options for customizing era labels.

#### Scenario: Default suffixes
- **WHEN** `eraSuffix` is not configured
- **THEN** BCE years SHALL display with "BCE" and CE years requiring an era suffix SHALL display with "CE"

#### Scenario: Custom suffixes applied
- **WHEN** `eraSuffix: { bce: "BC", ce: "AD" }` is configured
- **THEN** date labels SHALL use "BC" and "AD" respectively
