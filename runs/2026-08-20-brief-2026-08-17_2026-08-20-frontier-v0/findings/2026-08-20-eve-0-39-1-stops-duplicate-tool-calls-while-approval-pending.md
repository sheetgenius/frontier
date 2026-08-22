---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-eve-0-39-1-stops-duplicate-tool-calls-while-approval-pending
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.39.1
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.39.2
    precision: github_release
---
# 2026-08-20-eve-0-39-1-stops-duplicate-tool-calls-while-approval-pending

eve@0.39.1 published 2026-08-19T04:30:45Z, prerelease=false. compare eve@0.39.0...eve@0.39.1 ahead_by=24. Body names f02bc3d (keep pending tool approvals visible so follow-up turns cannot re-issue the gated call) and c9d3e25 (Slack approval cards wait for settlement; rejected responses leave the shared card open). eve@0.39.2 published 2026-08-19T18:12:24Z, ahead_by=6, names 2c01eab: rebuild untransformed session-scoped dynamic tool executors and approval policies on durable continuations.

Channel: tagged-release. Half: both.

Operator consequence: upgrade past 0.39.0 if a channel keeps chatting while a tool is parked, or if tools and approval policies come from a package rather than authored agent/tools.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.39.1
- https://github.com/vercel/eve/releases/tag/eve%400.39.2
