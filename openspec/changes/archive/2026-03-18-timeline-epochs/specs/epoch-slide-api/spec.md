## ADDED Requirements

### Requirement: Slide epoch membership declaration
Authors SHALL be able to declare that a slide belongs to one or more epochs by setting a `data-epoch` attribute on the slide element containing a space-separated list of epoch IDs.

#### Scenario: Single epoch membership
- **WHEN** a slide has `data-epoch="deep-learning"`
- **THEN** the plugin SHALL associate that slide with the `deep-learning` epoch

#### Scenario: Multiple epoch membership
- **WHEN** a slide has `data-epoch="symbolic-ai deep-learning"`
- **THEN** the plugin SHALL associate that slide with both the `symbolic-ai` and `deep-learning` epochs

#### Scenario: Unknown epoch ID is ignored with warning
- **WHEN** a slide has `data-epoch="unknown-id"` and no epoch with that id exists in config
- **THEN** the plugin SHALL log a console warning and ignore that ID for placeholder injection

#### Scenario: Slides without data-epoch have no epoch membership
- **WHEN** a slide has no `data-epoch` attribute
- **THEN** the plugin SHALL treat that slide as belonging to no epochs, and no `.tl-epoch` elements SHALL be injected

---

### Requirement: Epoch placeholder injection on slide navigation
The plugin SHALL inject epoch label elements into each slide when it becomes the current slide, following the same placeholder pattern as `.tl-timestamp`. For each `.tl-epoch` sentinel element found in the slide, the plugin SHALL replace it with one `<span>` per epoch the slide belongs to, each carrying a per-epoch CSS class.

#### Scenario: Single epoch placeholder injection
- **WHEN** a slide with `data-epoch="deep-learning"` becomes current and contains a `.tl-epoch` sentinel
- **THEN** the sentinel SHALL be replaced with `<span class="tl-epoch tl-epoch-deep-learning">Deep Learning</span>`

#### Scenario: Multiple epoch placeholder injection
- **WHEN** a slide with `data-epoch="symbolic-ai deep-learning"` becomes current and contains a `.tl-epoch` sentinel
- **THEN** the sentinel SHALL be replaced with two `<span>` elements: one with class `tl-epoch tl-epoch-symbolic-ai` and one with class `tl-epoch tl-epoch-deep-learning`, in config array order

#### Scenario: Label text matches config
- **WHEN** the epoch config declares `{ id: "deep-learning", label: "Deep Learning" }`
- **THEN** the injected span text content SHALL be `"Deep Learning"`

#### Scenario: Placeholder cleared on non-epoch slide
- **WHEN** a slide with no `data-epoch` becomes current
- **THEN** any previously injected `.tl-epoch` elements SHALL be cleared (or the sentinel restored to empty)

#### Scenario: No sentinel, no injection
- **WHEN** a slide has `data-epoch="deep-learning"` but contains no `.tl-epoch` sentinel element
- **THEN** the plugin SHALL not modify the slide's DOM for epoch placeholders
