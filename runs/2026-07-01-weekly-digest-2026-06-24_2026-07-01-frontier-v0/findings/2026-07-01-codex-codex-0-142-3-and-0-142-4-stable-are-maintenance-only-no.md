---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-codex-codex-0-142-3-and-0-142-4-stable-are-maintenance-only-no
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.142.4
    precision: github_release
---
# 2026-07-01-codex-codex-0-142-3-and-0-142-4-stable-are-maintenance-only-no

Codex 0.142.3 and 0.142.4 stable are maintenance-only / no user-facing changes (channel: tagged-release, 2026-06-29). Operator consequence: No operator action. 0.142.3 (2026-06-26) release body: 'Maintenance-only patch release with no user-facing changes since 0.142.2.' 0.142.4 (2026-06-29): 'No user-facing changes were identified.' Both confirmed prerelease=false. Recorded to close out the in-window stable patch count. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.142.4
