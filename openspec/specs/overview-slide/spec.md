# overview-slide Specification

## Purpose
Lets authors add a zoomed-out slide that covers a span of time instead of a single moment, so the audience can see how all configured epochs overlap.

## Requirements

### Requirement: Explicit range overview slide
Authors SHALL be able to declare an overview slide by setting both `data-timestamp-start` and `data-timestamp-end` on a slide element. Both values SHALL be parsed with the same timestamp parser used for `data-timestamp`. The end value SHALL be precision-aware in the same way as epoch end bounds: the range extends through the end of the unit written (e.g. `"2020"` covers all of 2020).

#### Scenario: Explicit range resolves to a viewport
- **WHEN** a slide has `data-timestamp-start="1700"` and `data-timestamp-end="1999"`
- **THEN** the ticker SHALL center on the midpoint between 1700-01-01 and 2000-01-01 and the visible span SHALL equal the distance between them

#### Scenario: Missing end bound
- **WHEN** a slide has `data-timestamp-start` but no `data-timestamp-end` (or the reverse)
- **THEN** the plugin SHALL log a console warning identifying the slide index and SHALL treat the slide as an ordinary non-temporal slide

#### Scenario: Unparseable or inverted range
- **WHEN** either bound cannot be parsed, or the effective end is not later than the start
- **THEN** the plugin SHALL log a console warning identifying the slide index and SHALL treat the slide as an ordinary non-temporal slide

#### Scenario: Range attributes take precedence over data-timestamp
- **WHEN** a slide has a valid `data-timestamp-start`/`data-timestamp-end` pair and also a `data-timestamp`
- **THEN** the plugin SHALL treat the slide as an overview slide, ignore `data-timestamp`, and log a console warning

---

### Requirement: Auto-fit overview slide
Authors SHALL be able to declare an overview slide with the boolean attribute `data-overview`. The range of an auto-fit overview SHALL run from the earliest epoch start to the latest effective epoch end across all configured epochs, with 5% of that range added as padding on each side.

#### Scenario: Auto-fit covers all epochs
- **WHEN** epochs span from 1750 to the end of 2010 and a slide has `data-overview`
- **THEN** the resolved range SHALL be 1750-01-01 to 2011-01-01, and the visible span SHALL be that range plus 5% padding on each side

#### Scenario: Auto-fit with no epochs configured
- **WHEN** a slide has `data-overview` and no valid epochs are configured
- **THEN** the plugin SHALL log a console warning and SHALL treat the slide as an ordinary non-temporal slide

#### Scenario: Explicit range wins over data-overview
- **WHEN** a slide has both `data-overview` and a valid `data-timestamp-start`/`data-timestamp-end` pair
- **THEN** the explicit range SHALL be used

---

### Requirement: Overview slide display
On an overview slide the ticker SHALL remain visible regardless of the `noTimestamp` setting, SHALL show every configured epoch, and SHALL display the range start and end as labels at the left and right edges of the ticker. The center marker, center label, and any slide dot for the overview slide itself SHALL NOT be displayed.

#### Scenario: Ticker visible on overview slide
- **WHEN** `noTimestamp` is `'fade'` or `'hide'` and the user navigates to an overview slide
- **THEN** the ticker SHALL be fully visible

#### Scenario: All epochs shown
- **WHEN** the current slide is an overview slide
- **THEN** every configured epoch whose extent intersects the visible span SHALL be rendered, regardless of slide membership

#### Scenario: Range edge labels
- **WHEN** an overview slide with range 1700 – 1999 is displayed at rest
- **THEN** the ticker SHALL show a label reading `1700` at its left edge and `1999` at its right edge, formatted at the precision of the authored bounds

#### Scenario: No center marker
- **WHEN** an overview slide is displayed at rest
- **THEN** no center marker and no center label SHALL be visible

#### Scenario: Animated transition to and from overview
- **WHEN** the user navigates between a temporal slide and an overview slide
- **THEN** the ticker SHALL pan and zoom using the normal animation, and the center marker and label SHALL fade out (to overview) or in (from overview) over the same duration

---

### Requirement: Overview slide is non-temporal for slide data
An overview slide SHALL NOT represent a single point in time. It SHALL NOT contribute to overall timeline extents and SHALL NOT appear as a dot marker on the ticker.

#### Scenario: No dot for overview slides
- **WHEN** the ticker renders at any position
- **THEN** no dot marker SHALL appear for any overview slide

#### Scenario: Overview slides excluded from extents
- **WHEN** the deck's only slide with a date earlier than 1800 is an overview slide starting at 1700
- **THEN** the overall timeline minimum SHALL NOT be 1700
