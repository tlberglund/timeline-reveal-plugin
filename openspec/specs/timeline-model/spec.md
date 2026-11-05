## Purpose

Defines the timeline model built at init from slide attributes and config, including timestamp parsing, spans, extents, and epochs.

## Requirements

### Requirement: Slide scanning at init
The plugin SHALL scan all slides in the deck at initialization time by calling `deck.getSlides()` and reading `data-timestamp` and `data-span` attributes from each slide element, building an internal `TimelineModel` before any slide is displayed.

#### Scenario: Slides with timestamps are included in the model
- **WHEN** the plugin initializes with a deck containing slides with `data-timestamp` attributes
- **THEN** each such slide SHALL be represented in the `TimelineModel` with its parsed timestamp, resolved span, and slide index

#### Scenario: Slides without timestamps are tracked but excluded from temporal model
- **WHEN** the plugin initializes and encounters slides without `data-timestamp`
- **THEN** those slides SHALL be recorded in the model as non-temporal entries so the plugin knows to fade the ticker on those slides

#### Scenario: Model is built before first slide renders
- **WHEN** the plugin's `init(deck)` function is called
- **THEN** the full `TimelineModel` SHALL be available synchronously before the first `slidechanged` event fires

---

### Requirement: Timestamp parsing
The plugin SHALL parse `data-timestamp` values as ISO 8601 extended format strings into `Temporal.PlainDateTime` instances.

#### Scenario: Full date-time string parses correctly
- **WHEN** a slide has `data-timestamp="1969-07-20T20:17:40"`
- **THEN** the model entry SHALL have a `Temporal.PlainDateTime` with year 1969, month 7, day 20, hour 20, minute 17, second 40

#### Scenario: Date-only string parses correctly
- **WHEN** a slide has `data-timestamp="1969-07-20"`
- **THEN** the model entry SHALL have a `Temporal.PlainDateTime` with year 1969, month 7, day 20, and time components defaulting to midnight

#### Scenario: Year-only string parses correctly
- **WHEN** a slide has `data-timestamp="1969"`
- **THEN** the model entry SHALL have a `Temporal.PlainDateTime` representing January 1, 1969 at midnight

#### Scenario: BCE date parses correctly
- **WHEN** a slide has `data-timestamp="-000043-03-15"` (44 BCE in astronomical year numbering)
- **THEN** the model entry SHALL have a `Temporal.PlainDateTime` with year -43 (44 BCE)

#### Scenario: Invalid timestamp logs a warning
- **WHEN** a slide has a `data-timestamp` value that cannot be parsed as ISO 8601
- **THEN** the plugin SHALL log a console warning identifying the slide and the invalid value, and SHALL treat the slide as non-temporal

---

### Requirement: Span resolution
The plugin SHALL resolve the visible span for each slide, using the slide's `data-span` attribute if present, otherwise falling back to the presentation-wide `defaultSpan` configuration value.

#### Scenario: Per-slide span overrides default
- **WHEN** a slide has `data-span="3 months"` and the config sets `defaultSpan: "10 years"`
- **THEN** the model entry for that slide SHALL use a span of 3 months

#### Scenario: Missing span uses default
- **WHEN** a slide has no `data-span` attribute and the config sets `defaultSpan: "10 years"`
- **THEN** the model entry for that slide SHALL use a span of 10 years

#### Scenario: Span string parsed to duration
- **WHEN** a span string like `"3 months"` is resolved
- **THEN** it SHALL be converted to a numeric duration in milliseconds (or an equivalent `Temporal.Duration`) for use in interpolation calculations

#### Scenario: Invalid span string logs a warning
- **WHEN** a slide has a `data-span` value that cannot be parsed
- **THEN** the plugin SHALL log a console warning and SHALL fall back to `defaultSpan`

---

### Requirement: Overall timeline extents
The plugin SHALL compute and expose the minimum and maximum timestamps across all temporal slides in the deck.

#### Scenario: Extents reflect full slide set
- **WHEN** the deck contains slides spanning 1944 to 1972
- **THEN** `TimelineModel.minTimestamp` SHALL be the earliest timestamp and `TimelineModel.maxTimestamp` SHALL be the latest

#### Scenario: Single temporal slide
- **WHEN** the deck contains only one slide with a timestamp
- **THEN** `minTimestamp` and `maxTimestamp` SHALL both equal that slide's timestamp

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
