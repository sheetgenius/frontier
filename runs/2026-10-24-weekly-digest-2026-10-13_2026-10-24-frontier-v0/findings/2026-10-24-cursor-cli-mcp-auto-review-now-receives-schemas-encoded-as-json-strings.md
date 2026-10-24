---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-cli-mcp-auto-review-now-receives-schemas-encoded-as-json-strings
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/cli/changelog#oct-22-2026
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
---
# 2026-10-24-cursor-cli-mcp-auto-review-now-receives-schemas-encoded-as-json-strings

CLI MCP Auto-review now receives schemas encoded as JSON strings. Auto-review now sees a tool's input schema when an MCP server supplies it as a JSON string. The note identifies a missing review input, not a demonstrated arbitrary-execution path.

Channel: tagged-release. Half: defect. Date: 2026-10-22.

Operator consequence: Requalify approval decisions for affected servers with a harmless tool and inspect the schema the reviewer receives. This repair does not make model review a security boundary.

## Receipt
- https://cursor.com/docs/cli/changelog#oct-22-2026
- https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
