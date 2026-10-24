---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-children-inherit-exactly-the-parent-s-mcp-set-and-policy-rails-parse-shell-structure
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/0bd5cc2d322d61f785816a29ef1f2e4c86db2460
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/d97eb76f60829a4250dd313f5a9d4d03e2951de8
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/security/defense_in_depth/policy_rails.py
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/tool/defaults.py
    precision: tagged_commit_file
---
# 2026-10-24-openhands-children-inherit-exactly-the-parent-s-mcp-set-and-policy-rails-parse-shell-structure

Children inherit exactly the parent's MCP set, and policy rails parse shell structure. Delegated children receive exactly the resolved parent MCP configuration; child-declared MCP entries and plugin merging cannot enlarge it. Tools retain their separate scope checks. Policy rails move from regexes to shell AST analysis for composed fetch-to-execute, raw-disk and catastrophic-delete patterns. A matched rail yields HIGH risk and unresolved relevant shell structure yields UNKNOWN. The confirmation policy decides whether to prompt; a LOW result is not a general authorization decision.

Channel: tagged-release. Half: both. Date: 2026-10-15.

Operator consequence: Recheck custom child configurations that relied on adding MCP servers, and test extra-tool, extra-MCP and nested delegation attempts against SDK 1.58.1. Keep `task_tool_set` an intentional opt-in. The durable improvement is carrying authority through delegation and examining composed commands; the human bottleneck moves to the parent grant and confirmation policy. Neither code change establishes universal isolation or repairs the separate session-key path.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/0bd5cc2d322d61f785816a29ef1f2e4c86db2460
- https://github.com/OpenHands/software-agent-sdk/commit/d97eb76f60829a4250dd313f5a9d4d03e2951de8
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/security/defense_in_depth/policy_rails.py
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/tool/defaults.py
