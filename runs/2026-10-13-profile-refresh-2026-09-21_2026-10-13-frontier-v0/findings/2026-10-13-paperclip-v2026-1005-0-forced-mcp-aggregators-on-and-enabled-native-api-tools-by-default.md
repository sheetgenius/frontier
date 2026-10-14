---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-v2026-1005-0-forced-mcp-aggregators-on-and-enabled-native-api-tools-by-default
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/instance-settings.ts#L232-L236
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/native-runtime/runner-api-rollout.ts#L1-L13
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/runner-api-tools.md#L54-L80
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/connections/CONNECTION-INSTRUCTIONS.md#L54-L75
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
    precision: github_release
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0
    precision: github_release
---
# 2026-10-13-paperclip-v2026-1005-0-forced-mcp-aggregators-on-and-enabled-native-api-tools-by-default

v2026.1005.0 forced MCP aggregators on and enabled native API tools by default. Zapier, Arcade, Composio Connect and Executor aggregators are available in the catalog and agent search on every instance; stored or Cloud-managed enableMcpAggregators=false cannot disable them. Availability does not connect accounts or grant credentials. Native search_api and call_api default on when PAPERCLIP_RUNNER_API_TOOLS_ENABLED is absent; explicitly setting a value other than true disables them. A company allowlist and run binding narrow availability. Response capture defaults to 1 GiB per call and 20 GiB per company. v2026.1012.0 discovers already-connected aggregator accounts and carries editable connection instructions to currently authorized agent turns, with revocation checked each turn.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: If API tools must stay off, set PAPERCLIP_RUNNER_API_TOOLS_ENABLED=false. For aggregators, use connection access and tool policies rather than the now-ignored availability setting. Review connection editors as instruction authors. New standard agents receive tools:manage_connections in section 3, so the ability to configure a connection and its usage text also widened.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/instance-settings.ts#L232-L236
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/native-runtime/runner-api-rollout.ts#L1-L13
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/runner-api-tools.md#L54-L80
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/connections/CONNECTION-INSTRUCTIONS.md#L54-L75
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0
