---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-flue-flue-1-0-0-beta-8-replaces-the-session-store-model-with
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/v1.0.0-beta.8/CHANGELOG.md
    precision: official_changelog
---
# 2026-07-01-flue-flue-1-0-0-beta-8-replaces-the-session-store-model-with

flue 1.0.0-beta.8 replaces the session-store model with a single append-only canonical conversation stream per instance; requires a persistence storage reset (breaking). (channel: preview-or-beta, 2026-06-29). Operator consequence: This is the most consequential in-window change. Anyone tracking Flue as harness-architecture reference should re-audit: the durable conversation model was reworked to one append-only canonical stream per instance behind a single client-facing protocol, with a persistence schema v4 reset (existing persisted state must be wiped), materialized projections, removal of free-floating conversation data events, and a new agent-abort capability. Breaking; do not treat prior conversation/session primitives as stable. Tag commit 8bed938. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/withastro/flue/blob/v1.0.0-beta.8/CHANGELOG.md
