---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-hermes-cli-execute-code-approval-and-yolo-toggle-still-unreleased
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/90224
    precision: github_pr
  - url: https://github.com/NousResearch/hermes-agent/pull/90391
    precision: github_pr
  - url: https://github.com/NousResearch/hermes-agent/pull/90765
    precision: github_pr
---
# 2026-08-20-hermes-cli-execute-code-approval-and-yolo-toggle-still-unreleased

Three approval-surface holes merged after v2026.8.18 and before window close. They are main-unreleased as of 2026-08-20. They later became ancestors of v2026.8.19 (published 2026-08-21, out of window). Do not upgrade-instruct to that tag in this brief.

PR #90224 merge f0ffcbc7 (2026-08-19): check_execute_code_guard on the CLI queued pending_approval with no panel. compare v2026.8.18...f0ffcbc7 status=ahead, ahead_by=334. PR #90391 merge b0350365 (2026-08-20): /yolo OFF under --yolo printed that approvals were back while process-frozen YOLO still auto-approved. ahead_by=432. PR #90765 merge 1179f148 (2026-08-20): Bot Mode group-chat member approvals had no UI tile and timed out at 300s. ahead_by=610. Also unreleased in this tag: hub inspect/install mixing one registry's metadata with another's files (#89416, e88d8831, ahead_by=75).

Channel: main-unreleased. Half: defect.

Operator consequence: on v2026.8.18, a quiet CLI execute_code session is not evidence the script was safe; a /yolo OFF message under --yolo is not a stop; a 300s "thinking" hang in a bot group chat may be the approval you missed. Restart the process to leave YOLO. Wait for a tag that contains those SHAs.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/90224
- https://github.com/NousResearch/hermes-agent/pull/90391
- https://github.com/NousResearch/hermes-agent/pull/90765
- https://github.com/NousResearch/hermes-agent/pull/89416
