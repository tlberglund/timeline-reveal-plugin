## MODIFIED Requirements

### Requirement: Center marker
The plugin SHALL render a visually distinct center marker in the SVG ticker indicating the current slide's timestamp, positioned at the horizontal center of the ticker. On overview slides the center marker and center label SHALL NOT be displayed.

#### Scenario: Center marker present on temporal slide
- **WHEN** the current slide has a `data-timestamp`
- **THEN** the SVG SHALL contain a center marker element at the horizontal midpoint

#### Scenario: Center timestamp label
- **WHEN** `centerLabel: true` is configured (the default) and the current slide is not an overview slide
- **THEN** a formatted timestamp label SHALL appear at or near the center marker showing the current slide's timestamp in a human-readable form appropriate to its precision

#### Scenario: Center marker hidden on overview slide
- **WHEN** the current slide is an overview slide and the ticker is at rest
- **THEN** the center marker and center label SHALL have opacity 0

---

### Requirement: Slide dot markers
The plugin SHALL render a small dot marker on the ticker at the position corresponding to each temporal slide's timestamp, indicating visited and unvisited states distinctly. Overview slides SHALL NOT have dot markers.

#### Scenario: All temporal slides have dot markers
- **WHEN** the ticker renders
- **THEN** a dot marker SHALL appear within the currently visible span for each temporal (non-overview) slide whose timestamp falls within that span

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
The plugin SHALL fade the ticker to invisible when the current slide has no `data-timestamp` and is not an overview slide, and fade it back in when navigating to a slide that has a `data-timestamp` or is an overview slide.

#### Scenario: Fade out on non-temporal slide
- **WHEN** the user navigates to a slide without `data-timestamp` that is not an overview slide
- **THEN** the ticker SHALL animate to opacity 0

#### Scenario: Fade in on temporal slide
- **WHEN** the user navigates from a non-temporal slide to a slide with `data-timestamp`
- **THEN** the ticker SHALL animate from opacity 0 to opacity 1

#### Scenario: Fade in on overview slide
- **WHEN** the user navigates from a non-temporal slide to an overview slide
- **THEN** the ticker SHALL animate from opacity 0 to opacity 1

## ADDED Requirements

### Requirement: Range edge labels
On an overview slide the ticker SHALL display the range start and range end as text labels at the left and right edges of the ticker, using `--tl-center-color`. These labels SHALL fade in and out together with the center marker's fade out and in.

#### Scenario: Edge labels on overview slide
- **WHEN** an overview slide with range 1700 – 1999 is displayed at rest
- **THEN** a label `1700` SHALL appear at the left edge and `1999` at the right edge

#### Scenario: No edge labels on temporal slides
- **WHEN** a temporal slide is displayed at rest
- **THEN** no range edge labels SHALL be visible
