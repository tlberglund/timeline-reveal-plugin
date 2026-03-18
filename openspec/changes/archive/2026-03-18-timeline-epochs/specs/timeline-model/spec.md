## ADDED Requirements

### Requirement: Epoch model built at init
The plugin SHALL build an epoch model at initialization time by parsing each entry in `config.epochs`. The epoch model SHALL be an array of resolved epoch objects (with parsed start/end timestamps and lane index) returned on the `TimelineModel` alongside the existing `entries` array.

#### Scenario: Epoch model present on TimelineModel
- **WHEN** the plugin initializes with `config.epochs` containing two entries
- **THEN** `TimelineModel.epochs` SHALL be an array of two resolved epoch objects with parsed `startTimestamp`, `endTimestamp`, `id`, `label`, `color`, and `lane` fields

#### Scenario: Empty epochs config produces empty array
- **WHEN** `config.epochs` is absent or empty
- **THEN** `TimelineModel.epochs` SHALL be an empty array

#### Scenario: Lane index matches config array position
- **WHEN** `config.epochs` has entries at index 0, 1, and 2
- **THEN** the resolved epoch objects SHALL have `lane: 0`, `lane: 1`, and `lane: 2` respectively

---

### Requirement: Slide epoch membership stored on model entries
The plugin SHALL read the `data-epoch` attribute from each slide during model build and store the resolved array of epoch IDs on the slide's model entry.

#### Scenario: Epoch IDs stored on entry
- **WHEN** a slide has `data-epoch="symbolic-ai deep-learning"`
- **THEN** the model entry for that slide SHALL have `epochIds: ["symbolic-ai", "deep-learning"]`

#### Scenario: No data-epoch produces empty array
- **WHEN** a slide has no `data-epoch` attribute
- **THEN** the model entry SHALL have `epochIds: []`

#### Scenario: Unknown epoch ID logged at model build
- **WHEN** a slide references an epoch ID not present in `config.epochs`
- **THEN** the plugin SHALL log a console warning at model-build time identifying the unrecognized ID and the slide index
