## 1. Update package.json metadata

- [x] 1.1 Add `description` field: "An animated temporal timeline plugin for Reveal.js presentations"
- [x] 1.2 Add `keywords` array: `["reveal.js", "plugin", "timeline", "presentation", "history"]`
- [x] 1.3 Add `author` field with name (and optionally email/URL)
- [x] 1.4 Add `license` field: `"MIT"`
- [x] 1.5 Add `repository` field with type and URL pointing to the git repository
- [x] 1.6 Add `homepage` field

## 2. Add entry points and files config

- [x] 2.1 Add `exports` field with `"."` → `{ "import": "./dist/reveal-timeline-plugin.js", "default": "./dist/reveal-timeline-plugin.iife.js" }`
- [x] 2.2 Add `files` array: `["dist", "README.md", "LICENSE"]`
- [x] 2.3 Add `peerDependencies`: `{ "reveal.js": ">=4" }`
- [x] 2.4 Add `prepublishOnly` script that chains all three build commands

## 3. Verify package contents

- [x] 3.1 Run `npm pack --dry-run` and confirm only `dist/`, `README.md`, and `LICENSE` are listed
- [x] 3.2 Confirm `src/`, `demo/`, `openspec/`, and test files are absent from the pack output

## 4. Local link workflow verification

- [x] 4.1 Run `npm link` in this repo to register the package locally
- [x] 4.2 In a test presentation directory, run `npm link reveal-timeline-plugin` and confirm the plugin resolves correctly
