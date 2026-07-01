---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-paperclip-run-config-fingerprinting-prevents-stale-reuse-of-sessio
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/8797
    precision: merged_pr
---
# 2026-07-01-paperclip-run-config-fingerprinting-prevents-stale-reuse-of-sessio

Run-config fingerprinting prevents stale reuse of sessions/workspaces/sandbox leases (canary only, not yet stable-tagged) (channel: preview-or-beta, 2026-06-30). Operator consequence: Watch, do not deploy yet. When it tags, agent runs will stop inheriting outdated config from reused execution state (adapter sessions, worktrees, Daytona leases refresh/replace on fingerprint drift); UI surfaces freshness labels. Currently only in canary/v2026.630.0-canary.7, so no stable action required this window. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/paperclipai/paperclip/pull/8797
