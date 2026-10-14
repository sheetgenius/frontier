---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-brenner-installation-could-overwrite-coordination-tools-acfs-had-just-installed
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/070af7b326b01000436b09262f0767f99b8fe49d
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs.manifest.yaml#L2804-L2818
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-brenner-installation-could-overwrite-coordination-tools-acfs-had-just-installed

Brenner installation could overwrite coordination tools ACFS had just installed. The maintainer reports Brenner Bot's pinned NTM 1.8.0 and CM 0.2.3 replacing newer versions installed earlier by ACFS. The diff confirms that stable fresh-install arguments omit those skip flags while the post-stable patch supplies them. This source-level protection is in the mirror tree, not a stable ACFS upgrade; the overwrite was not reproduced locally.

Channel: preview-or-beta. Half: defect. Date: 2026-10-08.

Operator consequence: After a stable fresh install, inspect actual NTM and CM versions before swarm acceptance. A tagged ACFS source does not prove later installers preserved the assembled tool versions.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/070af7b326b01000436b09262f0767f99b8fe49d
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs.manifest.yaml#L2804-L2818
