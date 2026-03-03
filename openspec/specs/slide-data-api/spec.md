## ADDED Requirements

### Requirement: DOM placeholder population
The plugin SHALL populate DOM placeholder elements within slide content with formatted timestamp data on each slide change.

#### Scenario: .tl-timestamp placeholder filled
- **WHEN** the current slide contains an element with class `tl-timestamp` and the slide has a `data-timestamp`
- **THEN** the plugin SHALL set that element's text content to the slide's timestamp formatted in a human-readable form appropriate to its precision

#### Scenario: .tl-label placeholder filled
- **WHEN** the current slide contains an element with class `tl-label` and the slide has a `data-span`
- **THEN** the plugin SHALL set that element's text content to a human-readable description of the visible time span (e.g., "3 months", "10 years")

#### Scenario: Placeholders on non-temporal slides are cleared
- **WHEN** the current slide has no `data-timestamp` and contains `.tl-timestamp` or `.tl-label` elements
- **THEN** the plugin SHALL set those elements' text content to an empty string

#### Scenario: Multiple placeholders of same class
- **WHEN** a slide contains more than one element with class `tl-timestamp`
- **THEN** all matching elements SHALL be populated

---

### Requirement: timeline:change custom event
The plugin SHALL dispatch a `timeline:change` custom event on the Reveal.js deck element each time the current slide changes.

#### Scenario: Event dispatched on temporal slide change
- **WHEN** the user navigates to a slide with a `data-timestamp`
- **THEN** a `timeline:change` event SHALL be dispatched with `detail.timestamp` (the `Temporal.PlainDateTime` instance), `detail.timestampISO` (the ISO 8601 string), `detail.span` (the resolved span duration), and `detail.spanString` (the human-readable span string)

#### Scenario: Event dispatched on non-temporal slide
- **WHEN** the user navigates to a slide without `data-timestamp`
- **THEN** a `timeline:change` event SHALL be dispatched with `detail.timestamp` and `detail.span` both set to `null`

#### Scenario: Event is listenable by slide authors
- **WHEN** an author adds `Reveal.on('timeline:change', handler)` in their presentation JS
- **THEN** the handler SHALL receive the event with the correct `detail` payload

---

### Requirement: Timestamp display formatting
The plugin SHALL format timestamps for human display with precision appropriate to the timestamp's specificity and the current visible span.

#### Scenario: Date-only timestamp formatted as date
- **WHEN** a slide's `data-timestamp` is `"1969-07-20"` (no time component)
- **THEN** displayed labels SHALL show "July 20, 1969" or equivalent locale-appropriate form

#### Scenario: Date-time timestamp formatted with time
- **WHEN** a slide's `data-timestamp` is `"1969-07-20T20:17:40"`
- **THEN** displayed labels SHALL include the time component, e.g., "July 20, 1969, 8:17 PM"

#### Scenario: BCE timestamp formatted conventionally
- **WHEN** a slide's `data-timestamp` represents a BCE year (negative astronomical year)
- **THEN** displayed labels SHALL use the form "44 BCE" rather than "-43" or "−43 CE"

#### Scenario: Era suffix is configurable
- **WHEN** `eraSuffix` config options are provided (e.g., `{ bce: "BC", ce: "AD" }`)
- **THEN** labels SHALL use those suffixes instead of the defaults "BCE" and "CE"
