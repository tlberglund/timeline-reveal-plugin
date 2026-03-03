## ADDED Requirements

### Requirement: SVG ticker injected at init
The plugin SHALL inject a single SVG element as a child of the Reveal.js `.reveal` container at initialization time, positioned across the full width of the presentation at the configured edge (top or bottom).

#### Scenario: Ticker appears at bottom by default
- **WHEN** the plugin initializes with no `position` config
- **THEN** the SVG ticker SHALL be positioned at the bottom of the `.reveal` container

#### Scenario: Ticker position is configurable
- **WHEN** the config specifies `position: "top"`
- **THEN** the SVG ticker SHALL be positioned at the top of the `.reveal` container

---

### Requirement: Tick mark calculation
The plugin SHALL calculate tick mark positions and intervals based on the current visible span, snapping to natural calendar boundaries and targeting a density of 5–12 visible ticks.

#### Scenario: Tick interval is appropriate for span
- **WHEN** the visible span is 6 months
- **THEN** tick marks SHALL be placed at month boundaries (1st of each month)

#### Scenario: Tick interval scales with span
- **WHEN** the visible span is 50 years
- **THEN** tick marks SHALL be placed at decade boundaries

#### Scenario: Tick interval table coverage
- **WHEN** the visible span falls within a given range
- **THEN** the tick interval SHALL be chosen from the nearest entry in the interval table:
  spans < 2 minutes → 10-second ticks;
  spans 2–60 minutes → 5-minute ticks;
  spans 1–12 hours → 1-hour ticks;
  spans 1–7 days → 12-hour ticks;
  spans 1 week–3 months → 1-week ticks;
  spans 3–18 months → 1-month ticks;
  spans 1–10 years → 1-year ticks;
  spans 10–100 years → 10-year ticks;
  spans 100–1000 years → 100-year ticks;
  spans > 1000 years → 500-year ticks

#### Scenario: Ticks snap to calendar boundaries, not center
- **WHEN** the visible span is 6 months centered on July 20
- **THEN** month ticks SHALL land on July 1, August 1, etc., not on July 20 ± 30 days

---

### Requirement: Tick label formatting
The plugin SHALL render human-readable labels on tick marks, formatted appropriately for the current tick interval and calendar position, with BCE dates displayed using conventional era notation.

#### Scenario: Year-level labels
- **WHEN** the tick interval is 1 year or greater
- **THEN** tick labels SHALL show the year number (e.g., "1969", "1200")

#### Scenario: Month-level labels
- **WHEN** the tick interval is 1 month
- **THEN** tick labels SHALL show abbreviated month and year (e.g., "Jul 1969")

#### Scenario: Day-level labels
- **WHEN** the tick interval is 1 day or 1 week
- **THEN** tick labels SHALL show abbreviated month and day (e.g., "Jul 20")

#### Scenario: Hour-level labels
- **WHEN** the tick interval is 1 hour or 12 hours
- **THEN** tick labels SHALL show day and hour (e.g., "Jul 20 8pm")

#### Scenario: BCE date label
- **WHEN** a tick mark falls in a year before year 1
- **THEN** the label SHALL display the conventional BCE year (e.g., year -43 → "44 BCE")

---

### Requirement: Center marker
The plugin SHALL render a visually distinct center marker in the SVG ticker indicating the current slide's timestamp, positioned at the horizontal center of the ticker.

#### Scenario: Center marker present on temporal slide
- **WHEN** the current slide has a `data-timestamp`
- **THEN** the SVG SHALL contain a center marker element at the horizontal midpoint

#### Scenario: Center timestamp label
- **WHEN** `centerLabel: true` is configured (the default)
- **THEN** a formatted timestamp label SHALL appear at or near the center marker showing the current slide's timestamp in a human-readable form appropriate to its precision

---

### Requirement: Slide dot markers
The plugin SHALL render a small dot marker on the ticker at the position corresponding to each temporal slide's timestamp, indicating visited and unvisited states distinctly.

#### Scenario: All temporal slides have dot markers
- **WHEN** the ticker renders
- **THEN** a dot marker SHALL appear within the currently visible span for each temporal slide whose timestamp falls within that span

#### Scenario: Visited dots are visually distinct
- **WHEN** a slide has been navigated to at least once
- **THEN** its dot marker SHALL use the visited style (filled)

#### Scenario: Current slide dot is distinct from visited
- **WHEN** a slide is the current slide
- **THEN** its dot marker SHALL use the current style (coincides with center marker)

#### Scenario: Unvisited dots are visually distinct from visited
- **WHEN** a slide has not yet been visited
- **THEN** its dot marker SHALL use the unvisited style (unfilled/outline)

---

### Requirement: Ticker fades on non-temporal slides
The plugin SHALL fade the ticker to invisible when the current slide has no `data-timestamp`, and fade it back in when navigating to a slide that does.

#### Scenario: Fade out on non-temporal slide
- **WHEN** the user navigates to a slide without `data-timestamp`
- **THEN** the ticker SHALL animate to opacity 0

#### Scenario: Fade in on temporal slide
- **WHEN** the user navigates from a non-temporal slide to a slide with `data-timestamp`
- **THEN** the ticker SHALL animate from opacity 0 to opacity 1

---

### Requirement: CSS custom property theming
The plugin SHALL expose CSS custom properties on the ticker SVG element for all visual attributes so that authors and themes can style the ticker without modifying plugin code.

#### Scenario: Color properties are overridable
- **WHEN** an author sets `--tl-tick-color`, `--tl-label-color`, `--tl-marker-color`, or `--tl-center-color` on `.reveal`
- **THEN** the ticker SHALL render using those colors
