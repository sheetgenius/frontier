---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-shareable-task-packets-retained-raw-data-beside-sanitized-briefs
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/ae06b55cab0f0862776e5cbbe30b3a6e6f75dc97
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/swarm_packet.sh#L615-L650
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-shareable-task-packets-retained-raw-data-beside-sanitized-briefs

Shareable task packets retained raw data beside sanitized briefs. A sanitized task brief coexisted with a duplicate raw Bead object in packet JSON, so credentials in task fields could still reach packet recipients. The October 10 patch removes that duplication, sanitizes titles and labels and extends service-key/webhook masking in packet and support artifacts. The fix remains untagged. This establishes conditional exposure through the export path, not that any particular secret leaked.

Channel: main-unreleased. Half: defect. Date: 2026-10-10.

Operator consequence: Inspect every field of retained packet JSON and support artifacts before sharing them, including raw source, titles and labels. Sanitized Markdown alone is insufficient evidence that the exported object is safe.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/ae06b55cab0f0862776e5cbbe30b3a6e6f75dc97
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/swarm_packet.sh#L615-L650
