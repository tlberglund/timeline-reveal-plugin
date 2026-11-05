## MODIFIED Requirements

### Requirement: DOM placeholder population
The plugin SHALL populate DOM placeholder elements within slide content with formatted timestamp data on each slide change.

#### Scenario: .tl-timestamp placeholder filled
- **WHEN** the current slide contains an element with class `tl-timestamp` and the slide has a `data-timestamp`
- **THEN** the plugin SHALL set that element's text content to the slide's timestamp formatted in a human-readable form appropriate to its precision

#### Scenario: .tl-timestamp on an overview slide shows the range
- **WHEN** the current slide is an overview slide with range 1700 – 1999 and contains an element with class `tl-timestamp`
- **THEN** the plugin SHALL set that element's text content to `"1700 – 1999"`, each bound formatted at its authored precision and joined by a spaced en dash

#### Scenario: .tl-timestamp on an auto-fit overview slide
- **WHEN** the current slide is a `data-overview` slide and contains an element with class `tl-timestamp`
- **THEN** the plugin SHALL set that element's text content to the earliest epoch start and the latest epoch end, as authored in config, joined by a spaced en dash

#### Scenario: .tl-label placeholder filled
- **WHEN** the current slide contains an element with class `tl-label` and the slide has a `data-span`
- **THEN** the plugin SHALL set that element's text content to a human-readable description of the visible time span (e.g., "3 months", "10 years")

#### Scenario: Placeholders on non-temporal slides are cleared
- **WHEN** the current slide has no `data-timestamp`, is not an overview slide, and contains `.tl-timestamp` or `.tl-label` elements
- **THEN** the plugin SHALL set those elements' text content to an empty string

#### Scenario: Multiple placeholders of same class
- **WHEN** a slide contains more than one element with class `tl-timestamp`
- **THEN** all matching elements SHALL be populated

---

### Requirement: timeline:change custom event
The plugin SHALL dispatch a `timeline:change` custom event on the Reveal.js deck element each time the current slide changes.

#### Scenario: Event dispatched on temporal slide change
- **WHEN** the user navigates to a slide with a `data-timestamp`
- **THEN** a `timeline:change` event SHALL be dispatched with `detail.timestamp` (the `Temporal.PlainDateTime` instance), `detail.timestampISO` (the ISO 8601 string), `detail.span` (the resolved span duration), `detail.spanString` (the human-readable span string), and `detail.range` set to `null`

#### Scenario: Event dispatched on overview slide
- **WHEN** the user navigates to an overview slide
- **THEN** a `timeline:change` event SHALL be dispatched with `detail.timestamp` set to `null`, `detail.isTemporal` set to `false`, and `detail.range` set to `{ start, end }` where `start` is the inclusive range start and `end` the exclusive effective range end, both `Temporal.PlainDateTime` instances

#### Scenario: Event dispatched on non-temporal slide
- **WHEN** the user navigates to a slide without `data-timestamp` that is not an overview slide
- **THEN** a `timeline:change` event SHALL be dispatched with `detail.timestamp`, `detail.span`, and `detail.range` all set to `null`

#### Scenario: Event is listenable by slide authors
- **WHEN** an author adds `Reveal.on('timeline:change', handler)` in their presentation JS
- **THEN** the handler SHALL receive the event with the correct `detail` payload
