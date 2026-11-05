## Why

Users currently distribute the plugin by manually copying build artifacts between projects, which is error-prone and makes updates difficult. Publishing to npm enables standard dependency management and version control for consumers.

## What Changes

- Add missing `package.json` metadata: `description`, `keywords`, `author`, `license`, `repository`, `homepage`
- Add `exports` field for modern package resolution (ESM + IIFE entry points)
- Add `files` array to control what's included in the published package
- Add `peerDependencies` declaring reveal.js as a peer
- Add `prepublishOnly` build script to ensure dist is fresh before publish
- Add `.npmignore` to exclude dev files (openspec, demo, test, source) from the package
- Document local linking workflow (`npm link`) for testing before publish
- Document public registry publishing workflow with versioning guidance

## Capabilities

### New Capabilities

- `npm-package-config`: Package metadata, entry points, files list, and peer dependencies required for a well-formed npm package

### Modified Capabilities

<!-- No existing requirement changes -->

## Impact

- `package.json`: Multiple fields added/updated
- New `.npmignore` file
- No changes to plugin source code or build pipeline
- Consumers gain ability to install via `npm install reveal-timeline-plugin` (or local link during dev)
