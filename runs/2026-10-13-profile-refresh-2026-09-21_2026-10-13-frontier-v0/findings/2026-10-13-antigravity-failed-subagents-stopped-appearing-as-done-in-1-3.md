---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-failed-subagents-stopped-appearing-as-done-in-1-3
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.1/CHANGELOG.md?plain=1#L14
    precision: tagged_commit_file
---
# 2026-10-13-antigravity-failed-subagents-stopped-appearing-as-done-in-1-3

Failed subagents stopped appearing as Done in 1.3.1. Subagents halted by an error such as exhausted quota or model capacity had appeared as Done in `/agents` and the running-agent list. 1.3.1 shows Error with the cause; that error clears if the subagent makes further progress.

Channel: tagged-release. Half: defect. Date: 2026-10-07.

Operator consequence: Do not use a Done label from an earlier build as proof of completed delegated work. For quota- or capacity-limited fan-out, run 1.3.1 or later and inspect the result, not merely the status label. The note gives no starting version for the defect.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.1/CHANGELOG.md?plain=1#L14
