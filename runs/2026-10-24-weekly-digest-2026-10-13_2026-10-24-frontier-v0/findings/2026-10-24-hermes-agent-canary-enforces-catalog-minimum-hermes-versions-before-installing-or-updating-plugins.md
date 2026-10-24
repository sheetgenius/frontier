---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-canary-enforces-catalog-minimum-hermes-versions-before-installing-or-updating-plugins
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/0255dedd1a445a0b300d1ef2b767da84e52a5af2
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/hermes_cli/plugins_cmd_catalog.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/hermes_cli/plugins_updates.py
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-canary-enforces-catalog-minimum-hermes-versions-before-installing-or-updating-plugins

Canary enforces catalog minimum Hermes versions before installing or updating plugins. A catalog entry's `requires_hermes` was display-only at the install/update seam; the plugin's own manifest floor was separately checked at load. Canary refuses an incompatible catalog install before cloning and holds an incompatible update at the existing pin, with an explanation to update Hermes first. It also covers portable packages whose catalog entry is their only version floor. Search/info can still show an incompatible entry with a warning; there is no override flag in this change.

Channel: preview-or-beta. Half: defect. Date: 2026-10-23.

Operator consequence: On stable v0.22.5, manually compare catalog requirements with the running core before bulk plugin updates. The canary gate is a useful compatibility primitive but should not be described as protection already shipped in stable. It avoids one class of broken update, not all API, dependency, or external-service incompatibility.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/0255dedd1a445a0b300d1ef2b767da84e52a5af2
- https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/hermes_cli/plugins_cmd_catalog.py
- https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/hermes_cli/plugins_updates.py
