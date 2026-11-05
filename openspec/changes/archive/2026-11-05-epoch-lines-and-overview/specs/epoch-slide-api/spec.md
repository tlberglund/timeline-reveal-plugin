## REMOVED Requirements

### Requirement: Slide epoch membership declaration
**Reason**: Epochs already declare their start and end, so a slide's membership can be derived from its timestamp. Declaring it again on each slide was redundant and could contradict the epoch dates.
**Migration**: Remove `data-epoch` attributes from slides. Membership is now derived automatically (see "Derived slide epoch membership"). If a slide should not be shown inside an epoch, adjust that epoch's `start`/`end` in config.

## ADDED Requirements

### Requirement: Derived slide epoch membership
A temporal slide SHALL belong to every epoch whose start is at or before the slide's timestamp and whose effective (exclusive) end is after it. An overview slide SHALL belong to all epochs. A non-temporal slide SHALL belong to no epochs.

#### Scenario: Timestamp inside an epoch
- **WHEN** an epoch has `start: "1914"`, `end: "1945"` and a slide has `data-timestamp="1945-05-08"`
- **THEN** the slide SHALL belong to that epoch

#### Scenario: Timestamp at the inclusive start
- **WHEN** an epoch has `start: "1914-07-28"` and a slide has `data-timestamp="1914-07-28"`
- **THEN** the slide SHALL belong to that epoch

#### Scenario: Timestamp at the exclusive end
- **WHEN** an epoch has `end: "1945"` (effective end 1946-01-01) and a slide has `data-timestamp="1946-01-01"`
- **THEN** the slide SHALL NOT belong to that epoch

#### Scenario: Overlapping epochs
- **WHEN** a slide's timestamp falls inside two configured epochs
- **THEN** the slide SHALL belong to both, in config array order

#### Scenario: Overview slide belongs to all epochs
- **WHEN** the slide is an overview slide
- **THEN** it SHALL belong to every configured epoch

---

### Requirement: Legacy data-epoch attribute warning
The plugin SHALL ignore any `data-epoch` attribute. If one or more slides carry `data-epoch`, the plugin SHALL log exactly one console warning at init explaining that the attribute is no longer used and membership is derived from timestamps.

#### Scenario: Single warning for many slides
- **WHEN** five slides carry `data-epoch`
- **THEN** exactly one console warning SHALL be logged

#### Scenario: data-epoch does not affect membership
- **WHEN** a slide at 1800 carries `data-epoch="world-wars"` and `world-wars` is 1914–1945
- **THEN** the slide SHALL NOT belong to `world-wars`

## MODIFIED Requirements

### Requirement: Epoch placeholder injection on slide navigation
The plugin SHALL populate epoch label elements in each slide when it becomes the current slide, following the same placeholder pattern as `.tl-timestamp`. For each `.tl-epoch` container element found in the slide, the plugin SHALL replace its contents with one `<span>` per epoch the slide belongs to (per derived membership), in config array order, each carrying the classes `tl-epoch-item` and `tl-epoch-<id>`.

#### Scenario: Single epoch placeholder injection
- **WHEN** a slide whose timestamp falls only in the `deep-learning` epoch becomes current and contains a `.tl-epoch` element
- **THEN** that element's contents SHALL be `<span class="tl-epoch-item tl-epoch-deep-learning">Deep Learning</span>`

#### Scenario: Multiple epoch placeholder injection
- **WHEN** a slide whose timestamp falls in both `symbolic-ai` and `deep-learning` becomes current and contains a `.tl-epoch` element
- **THEN** that element SHALL contain two `<span>` elements: one with classes `tl-epoch-item tl-epoch-symbolic-ai` and one with classes `tl-epoch-item tl-epoch-deep-learning`, in config array order

#### Scenario: Overview slide lists all epochs
- **WHEN** an overview slide becomes current and contains a `.tl-epoch` element
- **THEN** that element SHALL contain one `<span>` for every configured epoch, in config array order

#### Scenario: Label text matches config
- **WHEN** the epoch config declares `{ id: "deep-learning", label: "Deep Learning" }`
- **THEN** the injected span text content SHALL be `"Deep Learning"`

#### Scenario: Placeholder cleared on non-epoch slide
- **WHEN** a slide that belongs to no epochs becomes current and contains a `.tl-epoch` element
- **THEN** that element SHALL be emptied

#### Scenario: No sentinel, no injection
- **WHEN** a slide belongs to an epoch but contains no `.tl-epoch` element
- **THEN** the plugin SHALL not modify the slide's DOM for epoch placeholders
