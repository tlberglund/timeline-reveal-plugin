# reveal-timeline-plugin

**A temporal compass for Reveal.js — animate your audience through time.**

![version](https://img.shields.io/badge/version-0.1.0-blue) ![license](https://img.shields.io/badge/license-MIT-green)

## What it does

reveal-timeline-plugin adds an animated SVG ticker to the bottom (or top) of your Reveal.js presentation. As you navigate between slides, the ticker smoothly pans and zooms across a temporal axis, acting as a compass that shows exactly where in time each slide lives. It fully supports nonlinear storytelling — slides can jump backward or forward in time and the ticker will follow — and handles dates from deep antiquity (BC) through the present and beyond.

## Demo

Open `demo/index.html` in a browser (no build step needed — it loads the plugin from `dist/`).

## Installation

Copy the built bundle into your project and include it after Reveal.js:

```html
<script src="dist/reveal-timeline-plugin.iife.js"></script>
```

The plugin bundles its own copy of the Temporal API via `@js-temporal/polyfill`. If your project already uses `@js-temporal/polyfill` you can build from source (see below) to share one instance; otherwise the bundled copy is self-contained.

## Quick Start

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/theme/black.css" />
</head>
<body>
  <div class="reveal">
    <div class="slides">

      <section>
        <h1>My Presentation</h1>
      </section>

      <section data-timestamp="1969-07-20T20:17:40" data-span="3 days">
        <h2>Moon Landing</h2>
        <p>Exact moment: <span class="tl-timestamp"></span></p>
      </section>

      <section data-timestamp="1989-11-09" data-span="2 years">
        <h2>Berlin Wall Falls</h2>
      </section>

    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.js"></script>
  <script src="dist/reveal-timeline-plugin.iife.js"></script>
  <script>
    Reveal.initialize({
      hash: true,
      plugins: [RevealTimeline],
      timeline: {
        defaultSpan: '10 years',
        centerLabel: true,
      },
    });
  </script>
</body>
</html>
```

## Slide Authoring

### `data-timestamp`

Place an ISO 8601 extended date or datetime on any `<section>`:

```html
<!-- Date only -->
<section data-timestamp="1687-07-05">

<!-- Date + time -->
<section data-timestamp="1969-07-20T20:17:40">

<!-- BCE date (astronomical year numbering — see BCE Dates below) -->
<section data-timestamp="-000043-03-15">

<!-- Year only -->
<section data-timestamp="1776">
```

Slides without `data-timestamp` are treated as non-temporal. The plugin respects the `noTimestamp` config option for these slides.

### `data-span`

Controls the width of the visible temporal window centered on the slide's timestamp. Accepts a natural-language string of the form `"<number> <unit>"`:

```html
<section data-timestamp="1944-06-06" data-span="2 weeks">
<section data-timestamp="1969-07-20" data-span="3 days">
<section data-timestamp="1687-07-05" data-span="2 years">
```

Supported units (singular and plural both accepted):

- `second` / `seconds`
- `minute` / `minutes`
- `hour` / `hours`
- `day` / `days`
- `week` / `weeks`
- `month` / `months`
- `year` / `years`
- `century` / `centuries`

If `data-span` is omitted, the `defaultSpan` config option is used.

### DOM Placeholders

Add elements with these classes anywhere inside a slide and the plugin will populate them automatically on navigation:

| Class | Content |
|---|---|
| `.tl-timestamp` | Full human-readable date-time string (e.g. `Jul 20, 1969 20:17`) |
| `.tl-label` | Human-readable date without time component (e.g. `Jul 20, 1969`) |

```html
<section data-timestamp="1969-07-20T20:17:40" data-span="3 days">
  <h2>Moon Landing</h2>
  <p>Exact moment: <span class="tl-timestamp"></span></p>
  <p>Date: <span class="tl-label"></span></p>
</section>
```

### `timeline:change` Event

The plugin dispatches a `CustomEvent` named `timeline:change` on the `.reveal` element every time the active slide changes:

```js
document.querySelector('.reveal').addEventListener('timeline:change', (e) => {
  console.log(e.detail);
});
```

The `detail` object shape:

```js
{
  timestamp: Temporal.PlainDateTime | null,  // null for non-temporal slides
  span: Temporal.Duration | null,            // null for non-temporal slides
  spanString: string | null,                 // e.g. "3 days", null for non-temporal
  slideIndex: number,                        // zero-based index in the flat slide list
  isTemporal: boolean,                       // false for slides without data-timestamp
}
```

## Configuration

Pass options under the `timeline` key in `Reveal.initialize()`:

```js
Reveal.initialize({
  plugins: [RevealTimeline],
  timeline: {
    defaultSpan: '10 years',
    position: 'bottom',
    height: 56,
    centerLabel: true,
    noTimestamp: 'fade',
    animation: {
      duration: 600,
      easing: 'ease-in-out',
    },
    eraSuffix: {
      bce: 'BCE',
      ce: 'CE',
    },
  },
});
```

| Option | Type | Default | Description |
|---|---|---|---|
| `defaultSpan` | `string` | `'10 years'` | Visible time window used when a slide has no `data-span` attribute. Accepts the same natural-language format as `data-span`. |
| `position` | `'bottom'` \| `'top'` | `'bottom'` | Whether the ticker is pinned to the bottom or top of the presentation viewport. |
| `height` | `number` | `56` | Height of the ticker SVG in pixels. |
| `centerLabel` | `boolean` | `true` | When `true`, the center marker shows the current timestamp as a text label below the axis. |
| `noTimestamp` | `'fade'` \| `'hide'` \| `'freeze'` | `'fade'` | Behaviour when navigating to a non-temporal slide. `'fade'` reduces ticker opacity; `'hide'` removes it from the DOM; `'freeze'` leaves it visible at the last position. |
| `animation.duration` | `number` | `600` | Duration of the pan/zoom animation in milliseconds. |
| `animation.easing` | `string` | `'ease-in-out'` | CSS easing name used to drive the animation curve. |
| `eraSuffix.bce` | `string` | `'BCE'` | Text appended to negative-year tick labels and center labels. |
| `eraSuffix.ce` | `string` | `'CE'` | Text appended to positive-year tick labels when the era is shown explicitly. |

## CSS Custom Properties

All ticker colours, sizes, and fonts are controlled by CSS custom properties set on the `.tl-ticker` element. Override them anywhere in your stylesheet:

```css
.tl-ticker {
  --tl-center-color: #f90;
  --tl-font-size: 12px;
}
```

| Property | Default | Description |
|---|---|---|
| `--tl-tick-color` | `rgba(255,255,255,0.6)` | Colour of the axis line and tick marks. |
| `--tl-label-color` | `rgba(255,255,255,0.8)` | Colour of the tick text labels. |
| `--tl-marker-color` | `#fff` | Colour of auxiliary marker elements. |
| `--tl-center-color` | `#4af` | Colour of the center-position vertical line, diamond, and label. |
| `--tl-dot-visited` | `rgba(255,255,255,0.7)` | Fill colour of dots representing previously visited temporal slides. |
| `--tl-dot-unvisited` | `rgba(255,255,255,0.25)` | Fill colour of dots representing not-yet-visited temporal slides. |
| `--tl-dot-current` | `#4af` | Fill colour of the dot representing the currently active slide. |
| `--tl-font-size` | `11px` | Font size for all ticker text elements. |

## BC Dates

The plugin uses **astronomical year numbering**, which is the convention used by the Temporal API and ISO 8601. In this system:

- Year `1` = 1 AD
- Year `0` = 1 BC
- Year `-1` = 2 BC
- Year `-43` = 44 BC

So the ISO string for the Ides of March (44 BC) is `-000043-03-15`. The plugin automatically converts these to conventional BC display in tick labels and center labels (e.g. `44 BC`).

## Building from Source

```sh
npm install
npm run build
```

The ESM bundle is written to `dist/reveal-timeline-plugin.js`.

To build the IIFE bundle (for direct `<script>` inclusion):

```sh
npm run build:iife
```

Output goes to `dist/reveal-timeline-plugin.iife.js` with `RevealTimeline` as the global name.
