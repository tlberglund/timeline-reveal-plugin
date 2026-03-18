## ADDED Requirements

### Requirement: Epoch array in plugin config
The plugin SHALL accept an optional `epochs` array in the `timeline` config block. Each entry SHALL declare an `id`, `label`, `color`, `start`, and `end` field. The array order determines lane assignment — index 0 is the topmost lane.

#### Scenario: Epochs array is optional
- **WHEN** no `epochs` key is present in the config
- **THEN** the plugin SHALL initialize normally with no epoch bars rendered

#### Scenario: Epoch entry structure
- **WHEN** a valid epoch entry is provided
- **THEN** it SHALL contain: `id` (string, unique identifier), `label` (string, display name), `color` (CSS color string), `start` (timestamp string), and `end` (timestamp string)

#### Scenario: Lane order matches config array order
- **WHEN** `epochs` contains three entries in order `[symbolic-ai, deep-learning, llm-era]`
- **THEN** `symbolic-ai` SHALL render in lane 0 (topmost), `deep-learning` in lane 1, and `llm-era` in lane 2

---

### Requirement: Epoch timestamp parsing
The plugin SHALL parse each epoch's `start` and `end` values using the same `parseTimestamp` function used for slide timestamps, supporting the full range from year-only to full datetime precision.

#### Scenario: Year-only epoch bounds
- **WHEN** an epoch declares `start: "1956"` and `end: "1980"`
- **THEN** `start` SHALL parse to January 1, 1956 at midnight and `end` to January 1, 1980 at midnight

#### Scenario: Full datetime epoch bounds
- **WHEN** an epoch declares `start: "1969-07-20T20:17:40"`
- **THEN** `start` SHALL parse to that exact datetime

#### Scenario: Invalid epoch timestamp logs a warning
- **WHEN** an epoch entry has a `start` or `end` value that cannot be parsed
- **THEN** the plugin SHALL log a console warning identifying the epoch id and the invalid field, and SHALL omit that epoch from rendering

#### Scenario: BCE epoch bounds
- **WHEN** an epoch declares `start: "-000043-03-15"`
- **THEN** `start` SHALL parse to March 15, 44 BCE (year -43 in astronomical numbering)
