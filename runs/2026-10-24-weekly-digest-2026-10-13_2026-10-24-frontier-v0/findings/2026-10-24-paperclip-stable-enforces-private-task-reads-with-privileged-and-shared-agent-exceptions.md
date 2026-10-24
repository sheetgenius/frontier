---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-stable-enforces-private-task-reads-with-privileged-and-shared-agent-exceptions
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/ISSUE-PRIVACY.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/authorization.ts#L538-L658
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/authorization.ts#L2634-L2671
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/CUSTOMER-SUCCESS-INSPECTION.md
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-stable-enforces-private-task-reads-with-privileged-and-shared-agent-exceptions

Stable enforces private-task reads, with privileged and shared-agent exceptions. Tasks/projects remain open by default; private content uses explicit participation and inherited access across reads, search, lists, run details, documents and plugin surfaces. Agent authority is intersected with the responsible user's current access. Sharing a child does not expose its ancestors or siblings, and revoking one grant does not remove independently valid access. Ordinary company owners/admins need an audited break-glass read with a task notice. The release headline needs qualification: the code bypasses privacy for local implicit authority and instance administrators; optional Cloud customer-success inspection is a separate permitted path without a task break-glass notice. Company aggregate totals and restricted run metadata remain visible for oversight. `PAPERCLIP_ISSUE_PRIVACY_MODE` defaults to enforcement but accepts shadow/off.

Channel: tagged-release. Half: both. Date: 2026-10-24.

Operator consequence: Use private tasks for control-plane read boundaries on v2026.1023.0, and test the actual user, agent, plugin and administrator principals you deploy. Check the privacy mode and inspection setting. Do not interpret a private task as isolation from a trusted agent that can copy learned content into shared memory, home directories or external tools; the tagged design explicitly excludes that guarantee. This supplies an enforceable primitive beyond a private-looking dashboard, while leaving execution trust and administrator access as separate decisions.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/ISSUE-PRIVACY.md
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/authorization.ts#L538-L658
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/authorization.ts#L2634-L2671
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/CUSTOMER-SUCCESS-INSPECTION.md
