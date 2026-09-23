---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openhands-profiles-become-enforceable-scopes-mcp-servers-v1-19-0-and-secrets-v1-20-0-with-a-skill
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/17289
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17237
    precision: merged_pr
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.49.1/openhands-agent-server/openhands/agent_server/server_details_router.py
    precision: tagged_commit_file
---
# 2026-09-21-openhands-profiles-become-enforceable-scopes-mcp-servers-v1-19-0-and-secrets-v1-20-0-with-a-skill

Profiles become enforceable scopes: MCP servers (v1.19.0) and secrets (v1.20.0), with a skill allow-list since v1.16.0. Before v1.19.0, every profile could reach every configured MCP server, including ones that make changes. The PR says the editor never wrote `mcp_server_refs`. Now a profile can list the MCP servers it may use. On v1.20.0, a profile can also be limited to all, none, or chosen saved secrets. The agent server enforces this; Canvas does no client-side filtering. Deleted references are kept, so an unrelated edit cannot silently widen or narrow access. Separately, v1.16.0 turned the built-in skill catalog from all-on with a deny list into an allow-list. Per the PR, 11 of 59 skills are on by default.

Channel: tagged-release. Half: capability. Date: 2026-08-27 (skills), 2026-09-16 (MCP), 2026-09-17 (secrets).

Operator consequence: On v1.20.0 you can build a read-only exploration profile with no write-capable MCP servers and no deploy secrets. Before 2026-09-16 that was not possible. Test it by launching the profile and checking which MCP tools and secrets the running agent actually has. The item 1 override still applies. After upgrading to v1.16.0, re-check your skill set; skills you relied on may be off now.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/17289
- https://github.com/OpenHands/OpenHands/pull/17237
- https://github.com/OpenHands/software-agent-sdk/blob/v1.49.1/openhands-agent-server/openhands/agent_server/server_details_router.py
