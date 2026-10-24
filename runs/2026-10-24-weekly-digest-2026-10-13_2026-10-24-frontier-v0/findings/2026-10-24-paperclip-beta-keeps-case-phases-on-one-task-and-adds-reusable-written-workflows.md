---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-keeps-case-phases-on-one-task-and-adds-reusable-written-workflows
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/feature-map/cases.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/plans/2026-10-21-reusable-case-workflows.md
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-keeps-case-phases-on-one-task-and-adds-reusable-written-workflows

Beta keeps case phases on one task and adds reusable written workflows. Opt-in Cases can advance phases by reassigning one primary task, preserving its conversation, workspace and task identity instead of manufacturing a new task for every phase. Advancement waits for provider/workspace release and rechecks the original caller's current assignment authority. Reusable definitions consist of a name and Markdown copied into a revisioned workflow document; edits apply to future adoption, with conflicting pending changes held for resolution. This is written guidance plus durable state, not a graph interpreter that independently authorizes every phase. Upstream records four real Codex API runs and nine durable checks for its bounded workflow acceptance, with earlier failures and incomplete dollar accounting retained.

Channel: preview-or-beta. Half: capability. Date: 2026-10-23.

Operator consequence: In `2026.1023.0-beta.0`, try a small recurring workflow where preserving one task reduces cross-task bookkeeping. Inspect phase ownership, original authority and the adopted document revision. The mechanism addresses a source of coordination overhead, but does not prove the separate social claim that agent-generated subtask overload is fixed. No matched live workload or reproduction of that complaint was supplied or run here.

## Receipt
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/feature-map/cases.md
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/plans/2026-10-21-reusable-case-workflows.md
