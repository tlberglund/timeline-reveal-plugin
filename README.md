# Timeline Reveal

**A temporal compass for Reveal.js — animate your audience through time.**

![version](https://img.shields.io/badge/version-0.1.0-blue) ![license](https://img.shields.io/badge/license-MIT-green)

## What it does

Timeline Reveal adds an animated SVG ticker to the bottom (or top) of your Reveal.js presentation. As you navigate between slides, the ticker smoothly pans and zooms across a the timeline, anchoring your audience in where they are in your timeline-based story. You can jump forward and backward in time, and define timestamps at the level of years, seconds, or anything in between.

## Show me

Open `demo/index.html` in a browser (no build step needed — it loads the plugin from `dist/`).

## Installation

### From npm

```sh
npm install reveal-timeline-plugin
```

Then import in your JavaScript:

```js
import RevealTimeline from 'reveal-timeline-plugin';

Reveal.initialize({
  plugins: [RevealTimeline],
  timeline: { /* ... */ },
});
```

Or, for a plain `<script>` setup, reference the IIFE build from `node_modules`:

```html
<script src="node_modules/reveal-timeline-plugin/dist/reveal-timeline-plugin.iife.js"></script>
```

### From a CDN

```html
<script src="https://cdn.jsdelivr.net/npm/reveal-timeline-plugin/dist/reveal-timeline-plugin.iife.js"></script>
```

### Manual

Copy the built bundle into your project and include it after Reveal.js:

```html
<script src="dist/reveal-timeline-plugin.iife.js"></script>
```

The plugin bundles its own copy of the [Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) API via `@js-temporal/polyfill`. If your project already uses `@js-temporal/polyfill` you can build from source (see below) to share one instance; otherwise the bundled copy is self-contained.

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
| `.tl-epoch` | One `<span class="tl-epoch-item tl-epoch-<id>">` per epoch containing the slide (see [Epochs](#epochs)) |

```html
<section data-timestamp="1969-07-20T20:17:40" data-span="3 days">
  <h2>Moon Landing</h2>
  <p>Exact moment: <span class="tl-timestamp"></span></p>
  <p>Date: <span class="tl-label"></span></p>
</section>
```

### Overview Slides

An overview slide zooms out to show a stretch of time, with every epoch displayed, instead of focusing on a single moment. There are two ways to make one:

```html
<!-- Explicit range -->
<section data-timestamp-start="1900" data-timestamp-end="1999">

<!-- Fit automatically to the extent of every configured epoch (with 5% padding) -->
<section data-overview>
```

The end of a range includes the whole unit you wrote, so `data-timestamp-end="1999"` runs through December 31, 1999. If both forms are present, the explicit range wins.

On an overview slide:

- The ticker stays visible regardless of `noTimestamp`.
- All epochs are shown.
- The center marker and center label fade out, and the range's start and end appear at the left and right edges.
- The slide gets no dot on the ticker and doesn't count toward the timeline's extents.
- `.tl-timestamp` shows the range (e.g. `1900 – 1999`), and `.tl-epoch` lists every epoch.
- `timeline:change` reports `timestamp: null` and a `range` (see below).

A range with a missing, unparseable or inverted bound logs a console warning, and the slide is treated as an ordinary non-temporal slide.

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
  timestamp: Temporal.PlainDateTime | null,  // null for non-temporal and overview slides
  timestampISO: string | null,               // ISO 8601 form of timestamp
  span: number | null,                       // visible span in milliseconds
  spanString: string | null,                 // e.g. "3 days", null for non-temporal
  isTemporal: boolean,                       // true only for slides with a data-timestamp
  range: { start, end } | null,              // overview slides only: Temporal.PlainDateTime
                                             // bounds, start inclusive and end exclusive
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
      bc: 'BCE',
      ad: 'CE',
    },
    epochStyle: 'line',
    epochs: [ /* see Epochs below */ ],
  },
});
```

| Option | Type | Default | Description |
|---|---|---|---|
| `defaultSpan` | `string` | `'10 years'` | Visible time window used when a slide has no `data-span` attribute. Accepts the same natural-language format as `data-span`. |
| `position` | `'bottom'` \| `'top'` | `'bottom'` | Whether the ticker is pinned to the bottom or top of the presentation viewport. |
| `height` | `number` | `56` | Height of the ticker SVG in pixels, not counting epochs. Each configured epoch adds a 14px lane. |
| `centerLabel` | `boolean` | `true` | When `true`, the center marker shows the current timestamp as a text label below the axis. |
| `noTimestamp` | `'fade'` \| `'hide'` \| `'freeze'` | `'fade'` | Behaviour when navigating to a non-temporal slide. `'fade'` reduces ticker opacity; `'hide'` removes it from the DOM; `'freeze'` leaves it visible at the last position. |
| `animation.duration` | `number` | `600` | Duration of the pan/zoom animation in milliseconds. |
| `animation.easing` | `string` | `'ease-in-out'` | CSS easing name used to drive the animation curve. |
| `eraSuffix.bc` | `string` | `'BC'` | Text appended to negative-year tick labels and center labels. |
| `eraSuffix.ad` | `string` | `'AD'` | Text appended to positive-year tick labels when the era is shown explicitly. |
| `epochs` | `array` | `[]` | Named spans of time drawn on the ticker. See [Epochs](#epochs). |
| `epochStyle` | `'bar'` \| `'line'` | `'bar'` | `'bar'` draws filled bars below the axis with the name inside. `'line'` draws thin lines above the ticker with the name just before the line's start. |

## Epochs

Epochs are named spans of time (eras) drawn as bars or lines on the ticker. They can overlap.

```js
timeline: {
  epochStyle: 'line',
  epochs: [
    { id: 'world-wars', label: 'The World Wars', start: '1914-07-28', end: '1945-09-02', color: '#ef6f6f' },
    { id: 'cold-war',   label: 'Cold War',       start: '1947-03-12', end: '1991-12-26' },
    { id: 'space-race', label: 'Space Race',     start: '1957-10-04', end: '1975-07-17' },
  ],
}
```

| Field | Required | Description |
|---|---|---|
| `id` | yes | Unique identifier, also used in the `tl-epoch-<id>` CSS class. |
| `label` | yes | Display name. |
| `start` | yes | Timestamp in the same formats as `data-timestamp`. The epoch starts at the beginning of that unit. |
| `end` | yes | Timestamp; the epoch runs **through the end of the unit written**. `"1945"` covers all of 1945, `"1945-08"` all of August, `"1945-09-02"` that whole day. |
| `color` | no | Any CSS color. Without one, the epoch uses `--tl-epoch-color`. |

**Lanes.** Each epoch has its own lane, in array order with the first at the top. Lanes never move or collapse, so an epoch is always at the same height. Each epoch adds 14px to the ticker.

**Which epochs are shown.** A slide belongs to every epoch whose `start ≤ data-timestamp < end`, and only those epochs are shown on that slide. The others fade out in place as you navigate. Overview slides show every epoch.

**Styling.** Every epoch bar or line has the classes `tl-epoch-bar` or `tl-epoch-line`, plus `tl-epoch-<id>`. A configured `color` is applied as the `--tl-epoch-color` custom property, not as an inline fill, so epochs without a `color` can be colored from CSS. The same `tl-epoch-<id>` class is on the `.tl-epoch` placeholder spans, so one rule colors an era in both the ticker and the slide text:

```css
.tl-epoch-cold-war { --tl-epoch-color: #7fd8ff; }
.tl-epoch-item     { color: var(--tl-epoch-color); }
```

An epoch with an unparseable or inverted `start`/`end` logs a console warning and is skipped.

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
| `--tl-epoch-color` | `rgba(255,255,255,0.35)` | Colour of epoch bars and lines without a configured `color`. |
| `--tl-epoch-line-width` | `3px` | Thickness of epoch lines in the `'line'` style. |
| `--tl-epoch-label-color` | `rgba(255,255,255,0.9)` | Colour of epoch names on the ticker. |

## BC Dates

The plugin uses **astronomical year numbering**, which is the convention used by the Temporal API and ISO 8601. In this system:

- Year `1` = 1 AD
- Year `0` = 1 BC
- Year `-1` = 2 BC
- Year `-43` = 44 BC

So the ISO string for the Ides of March (44 BC) is `-000043-03-15`. The plugin automatically converts these to conventional BC display in tick labels and center labels (e.g. `44 BC`).

## Upgrading from 0.1

- **`data-epoch` is gone.** Epoch membership is now derived from each slide's timestamp. Remove the attribute; the plugin logs one warning if it finds any.
- **Epoch ends include the whole unit written.** `end: "1945"` used to mean January 1, 1945; it now runs through December 31, 1945. Re-check end dates.
- **The ticker grows to fit epochs** rather than squeezing them into `height`. Undo any `height` increase you added only to make room for epochs.
- **Epoch `color` is optional** and is applied via `--tl-epoch-color` rather than an inline `fill`.

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

## Releasing

Releases are published to npm from a clean `main`. `dist/` is not committed: the `prepublishOnly` script runs all three builds (`build`, `build:iife`, `build:iife:min`) during `npm publish`, so the published bundles always match the source.

### 1. Pick the version

Follow [semver](https://semver.org/). While the package is on `0.x`, a breaking change bumps the minor version (`0.1.0` → `0.2.0`), and anything else bumps the patch version (`0.2.0` → `0.2.1`). If the release breaks anything, add an "Upgrading from …" section to this README.

### 2. Check that `main` is ready

```sh
git switch main
git pull
npm ci
npm test
```

Open `demo/index.html` after `npm run build:iife` and click through the deck.

### 3. Bump the version and commit

```sh
npm version 0.2.0 --no-git-tag-version   # updates package.json and package-lock.json
```

Update the version badge at the top of this README to match, then commit and tag:

```sh
git commit -am "Release 0.2.0"
git tag v0.2.0
```

### 4. Check the package contents

```sh
npm pack --dry-run
```

The list should contain only `dist/` files, `README.md`, `LICENSE` and `package.json`, with the new version number.

### 5. Publish

```sh
npm whoami        # confirm you're logged in as a maintainer (otherwise: npm login)
npm publish
```

`npm publish` builds `dist/` first. If your npm account uses two-factor authentication, it prompts for a one-time code.

### 6. Push the commit and tag

```sh
git push origin main
git push origin v0.2.0
```

### 7. Verify

```sh
npm view reveal-timeline-plugin version
```

It should print the new version. The jsDelivr URL in [From a CDN](#from-a-cdn) points at the latest version, which jsDelivr may cache for a while before serving the new release. To test right away, use a pinned URL such as `https://cdn.jsdelivr.net/npm/reveal-timeline-plugin@0.2.0/dist/reveal-timeline-plugin.iife.js`.

Optionally, create a GitHub release from the tag:

```sh
gh release create v0.2.0 --generate-notes
```
