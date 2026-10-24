---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-current-distribution-separates-v2-stable-from-v1-and-independent-previews
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/@opencode%2fcli/2.1.4
    precision: official_docs
  - url: https://registry.npmjs.org/opencode-ai/1.19.4
    precision: official_docs
  - url: https://registry.npmjs.org/@opencode%2fcli
    precision: official_docs
  - url: https://github.com/anomalyco/opencode/releases/tag/v1.19.4
    precision: github_release
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/README.md
    precision: tagged_commit_file
  - url: https://update.opencode.ai/api/latest/desktop/opencode
    precision: official_docs
  - url: https://update.opencode.ai/api/beta
    precision: official_docs
  - url: https://registry.npmjs.org/@opencode%2fcli/0.0.0-dev-21769
    precision: official_docs
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/desktop/package.json
    precision: tagged_commit_file
---
# 2026-10-24-opencode-current-distribution-separates-v2-stable-from-v1-and-independent-previews

Current distribution separates V2 stable from V1 and independent previews. Intake standing distribution contract for Anomaly's TypeScript/Bun OpenCode: newest stable is @opencode/cli@2.1.4, published 2026-10-23T10:13:53.203Z, installed with `npm install -g @opencode/cli@2.1.4`. V1 remains opencode-ai@1.19.4, published 2026-10-22T13:03:43.704Z; both provide opencode. GitHub Latest resolves to V1.19.4, while V2 has a tag/npm publication without a matching GitHub Release object. At 2026-10-24T10:38:11.873913Z the V2 registry still selected latest 2.1.4, dev 0.0.0-dev-21769 and beta 0.0.0-beta-19507. The crosscheck's 10:21:33 UTC updater snapshot advertises desktop latest 2.1.4 and desktop beta 0.0.0-beta-21770; desktop remains a BETA product built with Electron. The full platform artifact/hash inventory is recorded in Install today; binaries were not independently verified. The old @opencode-ai/cli coordinate remains an obsolete preview rather than the current stable CLI.

Channel: tagged-release. Half: both. Date: 2026-10-24.

Operator consequence: Pin the intended major, executable and server; resolve desktop channel independently and keep its beta product status visible. Use V1 only as a deliberate compatibility hold. A familiar package name or GitHub Latest badge is insufficient to choose the newest major. No install command was run.

## Receipt
- https://registry.npmjs.org/@opencode%2fcli/2.1.4
- https://registry.npmjs.org/opencode-ai/1.19.4
- https://registry.npmjs.org/@opencode%2fcli
- https://github.com/anomalyco/opencode/releases/tag/v1.19.4
- https://github.com/anomalyco/opencode/blob/v2.1.4/README.md
- https://update.opencode.ai/api/latest/desktop/opencode
- https://update.opencode.ai/api/beta
- https://registry.npmjs.org/@opencode%2fcli/0.0.0-dev-21769
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/desktop/package.json
