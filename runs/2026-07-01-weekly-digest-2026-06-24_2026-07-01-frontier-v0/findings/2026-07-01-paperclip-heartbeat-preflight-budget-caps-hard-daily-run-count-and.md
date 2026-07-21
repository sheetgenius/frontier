---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-paperclip-heartbeat-preflight-budget-caps-hard-daily-run-count-and
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/8347
    precision: merged_pr
---
# 2026-07-01-paperclip-heartbeat-preflight-budget-caps-hard-daily-run-count-and

Heartbeat preflight budget caps: hard daily run-count and daily cost ceilings enforced before adapter execution (channel: tagged-release, 2026-06-27). Operator consequence: Operators can now cap autonomous agent spend and run frequency per day; enforcement happens before queuing AND before claiming queued runs, so budget breaches are stopped before cost is incurred. Re-audit budget config after upgrade — a zero cap blocks execution. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/paperclipai/paperclip/pull/8347
