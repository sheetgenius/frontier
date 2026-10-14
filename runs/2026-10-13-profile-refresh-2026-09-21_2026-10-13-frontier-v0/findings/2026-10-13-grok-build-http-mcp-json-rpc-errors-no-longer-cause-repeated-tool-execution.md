---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-http-mcp-json-rpc-errors-no-longer-cause-repeated-tool-execution
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
    precision: official_docs
---
# 2026-10-13-grok-build-http-mcp-json-rpc-errors-no-longer-cause-repeated-tool-execution

HTTP MCP JSON-RPC errors no longer cause repeated tool execution. The vendor documents a duplicate-execution correction on the HTTP MCP error path. A reported error in an older affected build was not assurance that a side-effecting tool ran zero or one times.

Channel: tagged-release (stable 1.0.52). Half: defect. Date: 2026-10-11 (1.0.52 note).

Operator consequence: Upgrade side-effecting HTTP MCP workflows to 1.0.52 and test an error-after-action case. Keep service-side idempotency keys and an action ledger where repeats are costly; this narrow client correction does not establish exactly-once delivery across disconnects or other retries.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
