## ADDED Requirements

### Requirement: Package metadata fields
The `package.json` SHALL include `description`, `keywords`, `author`, `license`, and `repository` fields with accurate values.

#### Scenario: Package is inspectable on registry
- **WHEN** a user runs `npm view reveal-timeline-plugin`
- **THEN** the registry shows a description, keywords, author, license, and repository link

---

### Requirement: Exports map for dual entry points
The `package.json` SHALL include an `exports` field mapping `"."` to both an ESM (`import`) and a default (IIFE) entry point, alongside existing `main` and `module` fields.

#### Scenario: ESM bundler resolves correct entry
- **WHEN** a bundler that supports package `exports` imports `reveal-timeline-plugin`
- **THEN** it resolves to `dist/reveal-timeline-plugin.js` (ESM build)

#### Scenario: Non-exports-aware tool resolves entry
- **WHEN** a tool that does not support `exports` imports `reveal-timeline-plugin`
- **THEN** it resolves via `main` or `module` to the ESM build

---

### Requirement: Files allowlist
The `package.json` SHALL include a `files` array limiting published content to `["dist", "README.md", "LICENSE"]`.

#### Scenario: Pack excludes dev artifacts
- **WHEN** `npm pack --dry-run` is run
- **THEN** the output lists only files under `dist/`, `README.md`, and `LICENSE` — no `src/`, `demo/`, `openspec/`, or test files

---

### Requirement: Peer dependency on reveal.js
The `package.json` SHALL declare `reveal.js >= 4` as a peer dependency.

#### Scenario: Peer dep warning on missing reveal.js
- **WHEN** a consumer installs `reveal-timeline-plugin` without reveal.js present
- **THEN** npm warns that the peer dependency is unmet

---

### Requirement: Pre-publish build script
The `package.json` SHALL include a `prepublishOnly` script that runs all three build targets before the package is published.

#### Scenario: Publish triggers fresh build
- **WHEN** `npm publish` is executed
- **THEN** `npm run build`, `npm run build:iife`, and `npm run build:iife:min` all run before the package is uploaded
