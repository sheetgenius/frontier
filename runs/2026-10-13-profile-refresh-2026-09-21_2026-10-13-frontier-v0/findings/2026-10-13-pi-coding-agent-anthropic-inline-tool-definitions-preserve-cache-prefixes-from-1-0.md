---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-anthropic-inline-tool-definitions-preserve-cache-prefixes-from-1-0
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/b271b0a524b29e13c0c9e748aea0d34e1597f2db
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.0.1/packages/ai/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-anthropic-inline-tool-definitions-preserve-cache-prefixes-from-1-0

Anthropic inline tool definitions preserve cache prefixes from 1.0.1. Supported native Anthropic mid-conversation tool changes use the inline-tools-2026-09-15 beta. Later tools are defined in tool_addition blocks, keeping the top-level list fixed; same-name redefinitions no longer resend the entire list and invalidate its cached prefix. hasToolRedefinitions is deprecated and the Anthropic SDK moves to 0.129.0.

Channel: tagged-release. Half: both. Date: 2026-10-03.

Operator consequence: Use the supported native path rather than recreating a full tool-list resend for every same-name update. Recheck adapters that use hasToolRedefinitions; cache preservation here is a concrete implementation change, not a measured end-to-end savings claim.

## Receipt
- https://github.com/earendil-works/pi/commit/b271b0a524b29e13c0c9e748aea0d34e1597f2db
- https://github.com/earendil-works/pi/blob/v1.0.1/packages/ai/CHANGELOG.md
