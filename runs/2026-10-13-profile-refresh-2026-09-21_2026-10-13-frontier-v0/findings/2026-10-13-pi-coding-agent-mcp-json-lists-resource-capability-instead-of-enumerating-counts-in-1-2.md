---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-mcp-json-lists-resource-capability-instead-of-enumerating-counts-in-1-2
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/f4cca2dc22ee4ce05ad75e185a025f6c664829c8
    precision: commit
---
# 2026-10-13-pi-coding-agent-mcp-json-lists-resource-capability-instead-of-enumerating-counts-in-1-2

MCP JSON lists resource capability instead of enumerating counts in 1.2.0. pi mcp list --json replaces resources/resourceTemplates counts with resources: true for capable servers. Connection no longer enumerates resources before registering tools; resource tools list/read on demand. Slow resource listing previously kept a server's tools out of the first prompt.

Channel: tagged-release. Half: both. Date: 2026-10-12.

Operator consequence: Update JSON consumers to accept a capability flag instead of counts. For actual resource inventories call the listing tools explicitly; do not read true as a count.

## Receipt
- https://github.com/earendil-works/pi/commit/f4cca2dc22ee4ce05ad75e185a025f6c664829c8
