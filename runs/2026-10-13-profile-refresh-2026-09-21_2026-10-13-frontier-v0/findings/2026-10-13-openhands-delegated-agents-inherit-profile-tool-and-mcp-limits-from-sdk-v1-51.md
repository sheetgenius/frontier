---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-delegated-agents-inherit-profile-tool-and-mcp-limits-from-sdk-v1-51
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/9b66ae79c39751fdaf637de8852461467a518b45
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/compare/v1.50.1...v1.51.0
    precision: git_compare
  - url: https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.51.0
    precision: github_release
  - url: https://github.com/OpenHands/OpenHands/blob/v1.25.0/config/defaults.json
    precision: tagged_commit_file
---
# 2026-10-13-openhands-delegated-agents-inherit-profile-tool-and-mcp-limits-from-sdk-v1-51

Delegated agents inherit profile tool and MCP limits from SDK v1.51.0. A profile restricted to selected tools or MCP servers could delegate to a child with more authority. The resolver now supplies SubAgentScope to delegation tools; offered definitions are filtered, the built child is checked, constraints propagate through nested task/workflow delegation, and uncheckable agent kinds are rejected when constrained. This is an authority repair in released source, separate from secret filtering and the local-terminal key alias.

Channel: tagged-release. Half: defect. Date: 2026-10-03 (SDK v1.51.0); 2026-10-06 (Canvas v1.25.0 bundle).

Operator consequence: Upgrade a server that delegates constrained profiles to SDK/agent-server 1.51.0 or later; Canvas first includes the fix at v1.25.0. Expect incompatible children to disappear or fail instead of silently gaining authority. A live test should attempt an extra-tool child, an extra-MCP child and nested delegation; do not infer secret containment from this tool/MCP repair.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/9b66ae79c39751fdaf637de8852461467a518b45
- https://github.com/OpenHands/software-agent-sdk/compare/v1.50.1...v1.51.0
- https://github.com/OpenHands/software-agent-sdk/releases/tag/v1.51.0
- https://github.com/OpenHands/OpenHands/blob/v1.25.0/config/defaults.json
