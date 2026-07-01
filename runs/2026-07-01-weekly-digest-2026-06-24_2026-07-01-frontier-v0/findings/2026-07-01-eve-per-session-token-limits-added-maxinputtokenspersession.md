---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-eve-per-session-token-limits-added-maxinputtokenspersession
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/pull/424
    precision: merged_pr
---
# 2026-07-01-eve-per-session-token-limits-added-maxinputtokenspersession

Per-session token limits added: maxInputTokensPerSession / maxOutputTokensPerSession under defineAgent({ limits }); durable session stops when budget exhausted (channel: main-unreleased, 2026-06-30). Operator consequence: New governance/budget control over agent runs — an operator can cap token spend per session and have the durable session hard-stop rather than run unbounded. Not yet in a stable tag as of 2026-07-01; watch for the release that ships it before relying on it. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/vercel/eve/pull/424
