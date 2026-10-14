---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-mounted-device-docs-moved-out-of-the-system-prompt-by-default
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
  - url: https://github.com/can1357/oh-my-pi/blob/v18.2.11/packages/coding-agent/src/config/settings-schema.ts#L4783-L4786
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.3.0/packages/coding-agent/src/config/settings-schema.ts#L4767-L4770
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L617-L618
    precision: tagged_commit_file
---
# 2026-10-13-omp-mounted-device-docs-moved-out-of-the-system-prompt-by-default

Mounted device docs moved out of the system prompt by default. tools.xdevDocs now defaults to catalog, listing mounted devices while their docs are fetched on demand rather than inlining built-in device instructions. Integrations that depend on those instructions already being present no longer receive that default.

Channel: tagged-release. Half: both. Date: 2026-09-24 (v18.3.0).

Operator consequence: Set tools.xdevDocs explicitly to builtins or inline if the integration requires preloaded docs. Inspect the actual schema rather than relying on the mislabeled changelog sentence.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7
- https://github.com/can1357/oh-my-pi/blob/v18.2.11/packages/coding-agent/src/config/settings-schema.ts#L4783-L4786
- https://github.com/can1357/oh-my-pi/blob/v18.3.0/packages/coding-agent/src/config/settings-schema.ts#L4767-L4770
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L617-L618
