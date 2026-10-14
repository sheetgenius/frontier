---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-process-control-moved-to-urls-and-per-call-subagent-model-overrides-disappeared-in-a-patch
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.3.0
    precision: github_release
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.5.0
    precision: github_release
  - url: https://github.com/can1357/oh-my-pi/commit/31876ff53eeb81b1624fabdbf1306d31e30f34af
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.8.2
    precision: github_release
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L49
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/tools/write.ts#L788-L804
    precision: tagged_commit_file
---
# 2026-10-13-omp-process-control-moved-to-urls-and-per-call-subagent-model-overrides-disappeared-in-a-patch

Process control moved to URLs, and per-call subagent model overrides disappeared in a patch release. hub is removed, despite release wording calling it deprecated. Process control uses wait, write and proc://; peers use agent://, settings cfg:// and mounted devices xd://. Per-call model fields on task items, eval agent() and workpool() existed from v18.5.0 to their removal in v18.8.2. A device write consults the device policyKey before tools.approval.write. A device-only write still permits peer coordination and local:// scratch while rejecting other filesystem writes.

Channel: tagged-release. Half: both. Date: 2026-09-24 (v18.3.0); 2026-10-03 (v18.5.0); 2026-10-07 (v18.8.2).

Operator consequence: Migrate hub callers to wait and write proc://<id>/kill, remove obsolete model fields, and check device-specific approval keys. Read Removed as well as Breaking Changes. Task result defaults and other input breaks are separately recorded in sections 16 and 20.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7
- https://github.com/can1357/oh-my-pi/releases/tag/v18.3.0
- https://github.com/can1357/oh-my-pi/releases/tag/v18.5.0
- https://github.com/can1357/oh-my-pi/commit/31876ff53eeb81b1624fabdbf1306d31e30f34af
- https://github.com/can1357/oh-my-pi/releases/tag/v18.8.2
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L49
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/tools/write.ts#L788-L804
