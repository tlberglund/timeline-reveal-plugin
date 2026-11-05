## MODIFIED Requirements

### Requirement: Epoch array in plugin config
The plugin SHALL accept an optional `epochs` array in the `timeline` config block. Each entry SHALL declare an `id`, `label`, `start`, and `end` field, and MAY declare a `color` field. The array order determines lane assignment — index 0 is the topmost lane.

#### Scenario: Epochs array is optional
- **WHEN** no `epochs` key is present in the config
- **THEN** the plugin SHALL initialize normally with no epoch bars rendered

#### Scenario: Epoch entry structure
- **WHEN** a valid epoch entry is provided
- **THEN** it SHALL contain: `id` (string, unique identifier), `label` (string, display name), `start` (timestamp string), and `end` (timestamp string), and MAY contain `color` (CSS color string)

#### Scenario: Color is optional
- **WHEN** an epoch entry omits `color`
- **THEN** the plugin SHALL accept the entry and render it using the default epoch color from CSS

#### Scenario: Lane order matches config array order
- **WHEN** `epochs` contains three entries in order `[symbolic-ai, deep-learning, llm-era]`
- **THEN** `symbolic-ai` SHALL render in lane 0 (topmost), `deep-learning` in lane 1, and `llm-era` in lane 2

---

### Requirement: Epoch timestamp parsing
The plugin SHALL parse each epoch's `start` and `end` values using the same `parseTimestamp` function used for slide timestamps, supporting the full range from year-only to full datetime precision. The `start` value SHALL be an inclusive bound at the beginning of the unit written. The `end` value SHALL be precision-aware: the epoch extends through the end of the unit written, so the effective end is an exclusive bound one unit after the parsed value.

#### Scenario: Year-only epoch bounds
- **WHEN** an epoch declares `start: "1956"` and `end: "1980"`
- **THEN** the epoch SHALL begin at January 1, 1956 at midnight (inclusive) and its effective end SHALL be January 1, 1981 at midnight (exclusive)

#### Scenario: Month-precision end bound
- **WHEN** an epoch declares `end: "1945-08"`
- **THEN** its effective end SHALL be September 1, 1945 at midnight (exclusive)

#### Scenario: Day-precision end bound
- **WHEN** an epoch declares `end: "1945-09-02"`
- **THEN** its effective end SHALL be September 3, 1945 at midnight (exclusive)

#### Scenario: Full datetime epoch bounds
- **WHEN** an epoch declares `start: "1969-07-20T20:17:40"`
- **THEN** `start` SHALL parse to that exact datetime

#### Scenario: Datetime end bound
- **WHEN** an epoch declares `end: "1969-07-20T20:17:40"`
- **THEN** its effective end SHALL be 1969-07-20T20:17:41 (exclusive)

#### Scenario: Invalid epoch timestamp logs a warning
- **WHEN** an epoch entry has a `start` or `end` value that cannot be parsed
- **THEN** the plugin SHALL log a console warning identifying the epoch id and the invalid field, and SHALL omit that epoch from rendering

#### Scenario: Inverted epoch bounds log a warning
- **WHEN** an epoch's effective end is not later than its start
- **THEN** the plugin SHALL log a console warning identifying the epoch id and SHALL omit that epoch from rendering

#### Scenario: BCE epoch bounds
- **WHEN** an epoch declares `start: "-000043-03-15"`
- **THEN** `start` SHALL parse to March 15, 44 BCE (year -43 in astronomical numbering)

## ADDED Requirements

### Requirement: Epoch style configuration
The plugin SHALL accept an optional `epochStyle` option in the `timeline` config block with value `'bar'` or `'line'`. The default SHALL be `'bar'`.

#### Scenario: Default style is bar
- **WHEN** `epochStyle` is not specified
- **THEN** epochs SHALL render in the bar style

#### Scenario: Line style selected
- **WHEN** `epochStyle: 'line'` is configured
- **THEN** epochs SHALL render in the line style

#### Scenario: Invalid style value
- **WHEN** `epochStyle` is set to any value other than `'bar'` or `'line'`
- **THEN** the plugin SHALL log a console warning and use `'bar'`
