---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-preview-managed-hooks-execute-under-the-environment-that-owns-them
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/75a4146411d22e4c487ba86f026201594cdbaa85
    precision: commit
  - url: https://github.com/openai/codex/commit/4610b573e59b211bf9430cf6ffb97cfb84623090
    precision: commit
---
# 2026-10-24-codex-preview-managed-hooks-execute-under-the-environment-that-owns-them

Preview managed hooks execute under the environment that owns them. Alpha.1 [discovers required environment-owned hooks](https://github.com/openai/codex/commit/75a4146411d22e4c487ba86f026201594cdbaa85) and [executes them using each owner's shell, directory, environment and managed network policy](https://github.com/openai/codex/commit/4610b573e59b211bf9430cf6ffb97cfb84623090). With hooks enabled, unloadable required hooks reject environment configuration. Rewrites cannot switch selected target environments, and environment hooks cannot grant permission requests.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Trial two environments with different policy and verify ownership through rewrites and configuration failure. Stable plugin content hashing does not imply stable availability of this environment delivery path.

## Receipt
- https://github.com/openai/codex/commit/75a4146411d22e4c487ba86f026201594cdbaa85
- https://github.com/openai/codex/commit/4610b573e59b211bf9430cf6ffb97cfb84623090
