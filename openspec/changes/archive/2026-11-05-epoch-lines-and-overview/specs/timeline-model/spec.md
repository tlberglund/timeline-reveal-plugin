## REMOVED Requirements

### Requirement: Slide epoch membership stored on model entries
**Reason**: Membership was read from `data-epoch`; it is now derived from the slide's timestamp and the epoch bounds.
**Migration**: See "Derived epoch membership stored on model entries". Remove `data-epoch` attributes from slides.

## MODIFIED Requirements

### Requirement: Epoch model built at init
The plugin SHALL build an epoch model at initialization time by parsing each entry in `config.epochs`. The epoch model SHALL be an array of resolved epoch objects returned on the `TimelineModel` alongside the existing `entries` array. Each resolved epoch SHALL carry its parsed inclusive start, its precision-aware effective (exclusive) end, its `id`, `label`, optional `color`, and its lane index.

#### Scenario: Epoch model present on TimelineModel
- **WHEN** the plugin initializes with `config.epochs` containing two valid entries
- **THEN** `TimelineModel.epochs` SHALL be an array of two resolved epoch objects with `startTimestamp`, `endTimestamp` (the effective exclusive end), `id`, `label`, `color` (or `null` if not configured), and `lane` fields

#### Scenario: Effective end stored
- **WHEN** an epoch declares `end: "1945"`
- **THEN** its resolved `endTimestamp` SHALL be 1946-01-01T00:00

#### Scenario: Empty epochs config produces empty array
- **WHEN** `config.epochs` is absent or empty
- **THEN** `TimelineModel.epochs` SHALL be an empty array

#### Scenario: Lane index matches config array position
- **WHEN** `config.epochs` has three valid entries at index 0, 1, and 2
- **THEN** the resolved epoch objects SHALL have `lane: 0`, `lane: 1`, and `lane: 2` respectively

#### Scenario: Invalid epochs do not leave empty lanes
- **WHEN** the entry at index 1 of three is invalid and omitted
- **THEN** the remaining epochs SHALL have `lane: 0` and `lane: 1`

## ADDED Requirements

### Requirement: Derived epoch membership stored on model entries
The plugin SHALL compute each slide's epoch membership during model build from the slide's timestamp (or overview status) and the resolved epoch model, and store the resulting array of epoch IDs, in config order, on the slide's model entry.

#### Scenario: Epoch IDs stored on entry
- **WHEN** a slide's timestamp falls inside `symbolic-ai` and `deep-learning`
- **THEN** the model entry for that slide SHALL have `epochIds: ["symbolic-ai", "deep-learning"]`

#### Scenario: Slide outside all epochs
- **WHEN** a slide's timestamp falls inside no epoch
- **THEN** the model entry SHALL have `epochIds: []`

#### Scenario: Non-temporal slide
- **WHEN** a slide has no valid timestamp and is not an overview slide
- **THEN** the model entry SHALL have `epochIds: []`

#### Scenario: Overview slide
- **WHEN** a slide is an overview slide
- **THEN** the model entry SHALL have `epochIds` listing every resolved epoch in config order

---

### Requirement: Overview information stored on model entries
The plugin SHALL record on each model entry whether the slide is an overview slide and, if so, its resolved range start, range end, and the center and span used to display it. Overview entries SHALL NOT be counted among temporal entries for dots or overall extents.

#### Scenario: Overview entry fields
- **WHEN** a slide has `data-timestamp-start="1700"` and `data-timestamp-end="1999"`
- **THEN** its model entry SHALL have `overview: true`, `rangeStart` 1700-01-01T00:00, `rangeEnd` 2000-01-01T00:00, a center at their midpoint, and a span equal to their difference

#### Scenario: Ordinary entries are not overviews
- **WHEN** a slide has only `data-timestamp`
- **THEN** its model entry SHALL have `overview: false` and no range fields

#### Scenario: Overview excluded from temporal entries
- **WHEN** the model is built for a deck containing one overview slide and three ordinary temporal slides
- **THEN** `temporalEntries` SHALL contain only the three ordinary slides
