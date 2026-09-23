---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-eve-approval-integrity-three-ways-an-approval-could-authorize-the-wrong-thing-closed-in-window
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/pull/2923
    precision: merged_pr
---
# 2026-09-21-eve-approval-integrity-three-ways-an-approval-could-authorize-the-wrong-thing-closed-in-window

Approval integrity: three ways an approval could authorize the wrong thing, closed in-window. Before 0.50.0, a human approving one of several visible
`once()` prompts could silently approve the rest. Before 0.44.1, a redeploy
with edited source could run a different tool under a parked approval. Before
0.52.2, input-scoped keys on dynamic tools degraded to tool-wide keys on
replay.

Channel: tagged-release. Half: defect. Date: 2026-08-22 to 2026-09-06.

Operator consequence: Upgrade to at least 0.52.2 if any tool uses `once()`
or input-scoped keys. If you ran 0.43 to 0.49 with `once()` gates and
concurrent approvals, review tool logs for calls that executed while their
card was still open.

## Receipt
- https://github.com/vercel/eve/pull/2923
