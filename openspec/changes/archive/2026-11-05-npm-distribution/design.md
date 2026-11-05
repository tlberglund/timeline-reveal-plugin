## Context

The plugin currently ships only as raw build artifacts checked into the repository. Users include it by copying `dist/reveal-timeline-plugin.iife.js` into their own project trees. There is no versioning mechanism, so users can't easily upgrade or pin to a specific release.

The existing `package.json` already has the core structure (`name`, `version`, `type`, `main`, `module`, `scripts`) but is missing fields required for a well-formed, publishable npm package.

## Goals / Non-Goals

**Goals:**
- Make the package installable via `npm install` from a local path or public registry
- Ensure the published package contains exactly the right files (dist, README, LICENSE) and nothing else
- Provide a local linking workflow for iterative development before publishing
- Document the path to public registry publishing

**Non-Goals:**
- Changing the build pipeline or output formats
- Adding TypeScript declarations (separate future concern)
- Scoped package naming (e.g., `@org/reveal-timeline-plugin`) — can be revisited at publish time
- Automated release CI (manual publish is fine for v1)

## Decisions

### Use `files` field over `.npmignore`

**Decision**: Specify `files: ["dist", "README.md", "LICENSE"]` in `package.json` rather than maintaining an `.npmignore`.

**Rationale**: Allowlist (`files`) is safer than blocklist (`.npmignore`) — new directories added to the repo are excluded by default. `.npmignore` requires discipline to keep updated as the project grows.

**Alternative**: `.npmignore` is more familiar to some developers but risks accidentally shipping `src/`, `openspec/`, `demo/`, etc., if the file falls out of sync.

---

### Use `exports` for dual ESM/IIFE entry points

**Decision**: Add an `exports` map alongside the existing `main`/`module` fields:
```json
"exports": {
  ".": {
    "import": "./dist/reveal-timeline-plugin.js",
    "default": "./dist/reveal-timeline-plugin.iife.js"
  }
}
```

**Rationale**: `exports` is the modern standard for package entry points and supports conditional resolution. Keeping `main`/`module` provides backwards compatibility with older bundlers.

---

### `peerDependencies` for reveal.js

**Decision**: Declare `reveal.js >= 4` as a peer dependency (not a regular dependency).

**Rationale**: Reveal.js is provided by the host presentation — bundling it would double the payload and cause version conflicts. Peer declaration documents the requirement without forcing a duplicate install.

---

### `prepublishOnly` script

**Decision**: Add `"prepublishOnly": "npm run build && npm run build:iife && npm run build:iife:min"` to ensure dist is always rebuilt fresh before publish.

**Rationale**: Prevents accidentally publishing stale build artifacts. `prepublishOnly` runs only on `npm publish`, not on `npm install`, so it doesn't impact consumers.

## Risks / Trade-offs

- **Package name collision**: `reveal-timeline-plugin` may already be taken on the public registry. → Check with `npm view reveal-timeline-plugin` before publishing; have fallback names ready.
- **Stale dist in repo**: Contributors may commit dist without rebuilding all targets. → `prepublishOnly` catches this at publish time; consider adding a CI check.
- **Peer dependency version range**: Declaring `>= 4` assumes API stability. → Start conservative; widen range after testing.

## Migration Plan

1. Update `package.json` with all metadata, `exports`, `files`, `peerDependencies`, `prepublishOnly`
2. Verify `npm pack --dry-run` includes only intended files
3. Test locally with `npm link` in a consumer presentation
4. (Future) `npm publish --access public` when ready to go public

## Open Questions

- What author name/email and repository URL should be used in `package.json`?
- Should the package name be scoped (e.g., `@tlberglund/reveal-timeline-plugin`)?
