## ADDED Requirements

### Requirement: Simultaneous position and span interpolation
On every slide change between two temporal slides, the plugin SHALL animate the ticker by simultaneously interpolating the center timestamp (linear) and the visible span (logarithmic) from the outgoing slide's values to the incoming slide's values.

#### Scenario: Position interpolates linearly
- **WHEN** animating from timestamp A to timestamp B
- **THEN** at animation progress `t`, the center timestamp SHALL equal `lerp(A, B, ease(t))` in elapsed-time units

#### Scenario: Span interpolates logarithmically
- **WHEN** animating from span S1 to span S2
- **THEN** at animation progress `t`, the visible span SHALL equal `exp(lerp(log(S1), log(S2), ease(t)))`

#### Scenario: Same-span slides only pan
- **WHEN** the outgoing and incoming slides have identical spans
- **THEN** only the position changes; span remains constant throughout the animation

#### Scenario: Same-timestamp slides only zoom
- **WHEN** two temporal slides share the same timestamp but different spans
- **THEN** the center position is constant; only the span animates

#### Scenario: Animation runs every frame via requestAnimationFrame
- **WHEN** an animation is in progress
- **THEN** the ticker SHALL be redrawn on every animation frame using `requestAnimationFrame` until the animation completes

---

### Requirement: Easing function
The plugin SHALL apply a configurable easing function to the animation progress `t` before it is applied to both position and span interpolation.

#### Scenario: Default easing is ease-in-out
- **WHEN** no `animation.easing` is configured
- **THEN** the animation SHALL use an ease-in-out curve

#### Scenario: Custom easing is applied
- **WHEN** `animation.easing` is configured with a named easing or cubic-bezier values
- **THEN** that easing SHALL be applied to both position and span interpolation

---

### Requirement: Animation duration
The plugin SHALL animate slide transitions using the configured duration, clamped to a sensible maximum.

#### Scenario: Default duration is used
- **WHEN** no `animation.duration` is configured
- **THEN** the animation SHALL complete in 600 milliseconds

#### Scenario: Configured duration is used
- **WHEN** `animation.duration` is set to a value in milliseconds
- **THEN** the animation SHALL use that duration

---

### Requirement: Temporal direction drives pan direction
The plugin SHALL pan the ticker in the direction of temporal change, independent of deck navigation direction.

#### Scenario: Forward in time pans right
- **WHEN** the incoming slide's timestamp is later than the outgoing slide's timestamp
- **THEN** the ticker SHALL pan to the right

#### Scenario: Backward in time pans left
- **WHEN** the incoming slide's timestamp is earlier than the outgoing slide's timestamp
- **THEN** the ticker SHALL pan to the left

#### Scenario: Nonlinear deck navigation respected
- **WHEN** the user presses "next slide" in the deck but the incoming timestamp is earlier
- **THEN** the ticker SHALL still pan left (temporal direction), regardless of deck navigation direction

---

### Requirement: Tick label cross-fade on format change
When the tick interval or label format changes during animation, the plugin SHALL cross-fade between the outgoing and incoming label sets.

#### Scenario: Labels cross-fade when format changes
- **WHEN** the span interpolation crosses a threshold that changes the tick interval or label format
- **THEN** the outgoing label layer SHALL fade to opacity 0 while the incoming label layer fades to opacity 1 simultaneously

#### Scenario: Labels do not snap during cross-fade
- **WHEN** a label cross-fade is in progress
- **THEN** at no point SHALL both the outgoing and incoming labels be invisible simultaneously

#### Scenario: Only one label layer active at rest
- **WHEN** no animation is in progress
- **THEN** exactly one label layer SHALL be present in the SVG at full opacity

---

### Requirement: Animation interrupted by new navigation
If the user navigates to a new slide before the current animation completes, the plugin SHALL immediately start the new animation from the current interpolated state.

#### Scenario: Interrupted animation starts from current state
- **WHEN** an animation is at 60% completion and the user navigates to another slide
- **THEN** the new animation SHALL begin from the ticker's current visual position and span, not from the previous slide's values
