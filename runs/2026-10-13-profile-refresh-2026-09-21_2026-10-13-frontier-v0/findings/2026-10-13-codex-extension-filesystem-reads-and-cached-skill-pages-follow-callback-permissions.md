---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-extension-filesystem-reads-and-cached-skill-pages-follow-callback-permissions
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/da2e174a66a6572204a91373321b7d22d87fb12e
    precision: commit
---
# 2026-10-13-codex-extension-filesystem-reads-and-cached-skill-pages-follow-callback-permissions

Extension filesystem reads and cached skill pages follow callback permissions. Extension tools and turn-input contributors receive environment access captured for the current step, including session and originating-turn grants. Executor skill reads use that access. Continuation pages bind to filesystem identity and callback permissions; image-generation filesystem operations use the same accessor.

Channel: tagged-release. Half: both. Date: 2026-10-07 (0.161.0).

Operator consequence: Custom extension authors should run 0.161.0 or later and exercise grant changes, environment switching and pagination. Cached pages from one permission context must not be treated as current access in another.

## Receipt
- https://github.com/openai/codex/commit/da2e174a66a6572204a91373321b7d22d87fb12e
