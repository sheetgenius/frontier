---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-edits-agent-connections-and-default-models-in-bulk
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/9bf7dc0c8f794120ebf2ccce4fd9c92510715715
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/feature-map/agents.md#L44-L57
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-edits-agent-connections-and-default-models-in-bulk

Beta edits agent connections and default models in bulk. The 2026-10-22 roster editor applies harness-scoped connection/model changes with value previews and per-agent results. Existing authorized configuration writes recheck expected settings, connection/model compatibility and current authority; retries touch remaining failures. Pools and externally managed agents are excluded. Running work retains its settings, and model/connection changes can require fresh sessions. This is a management change, not a provider-performance gain.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Trial 2026.1023.0-beta.0 to remove repeated roster edits, but inspect the selected agents and each saved result. A wrong shared model or connection now reaches a group more conveniently too. Record session resets and actual model/connection selection before attributing a workload difference to the harness.

## Receipt
- https://github.com/paperclipai/paperclip/commit/9bf7dc0c8f794120ebf2ccce4fd9c92510715715
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/feature-map/agents.md#L44-L57
