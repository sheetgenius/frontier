---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-strict-plugin-preflight-resolves-a-revision-without-enabling-the-plugin
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/db9c54b71c8c9ed46a2454fc65eee804d3c1e8aa
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/plugin/strict_fetch.py
    precision: tagged_commit_file
---
# 2026-10-24-openhands-strict-plugin-preflight-resolves-a-revision-without-enabling-the-plugin

Strict plugin preflight resolves a revision without enabling the plugin. The released preflight API resolves remote plugin sources to a full commit SHA, validates paths/manifests and reports structured fetch errors without enabling the plugin. Explicitly allowed local sources do not have a remote resolved SHA.

Channel: tagged-release. Half: capability. Date: 2026-10-16 (SDK v1.55.1).

Operator consequence: Review and retain the resolved remote revision before enabling executable extensions. This gives plugin review a concrete object and avoids custom fetch/error glue, while successful parsing does not approve executable content. No fetched plugin was run here.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/db9c54b71c8c9ed46a2454fc65eee804d3c1e8aa
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/plugin/strict_fetch.py
