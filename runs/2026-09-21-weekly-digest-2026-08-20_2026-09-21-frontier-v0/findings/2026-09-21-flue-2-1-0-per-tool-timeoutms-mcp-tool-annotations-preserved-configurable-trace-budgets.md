---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-flue-2-1-0-per-tool-timeoutms-mcp-tool-annotations-preserved-configurable-trace-budgets
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.0
    precision: github_release
---
# 2026-09-21-flue-2-1-0-per-tool-timeoutms-mcp-tool-annotations-preserved-configurable-trace-budgets

2.1.0: per-tool `timeoutMs`, MCP tool annotations preserved, configurable trace budgets. A tool can declare `timeoutMs`; on expiry the harness aborts
the tool's signal and settles a `ToolTimeoutError` the model sees, so one hung
call no longer eats the submission's durability budget. Tools from
`createMcpConnection()` now carry server-sent `annotations` (for example
`destructiveHint`); the release notes state Flue does not change behavior based
on them and the docs call them not a security boundary. Trace content budget
per span is settable.

Channel: tagged-release (preceded by 2.1.0-next.0 and next.1 preview-or-beta). Half: capability. Date: 2026-09-18.

Operator consequence: Try `timeoutMs` on every network-bound tool; it
removes a hand-rolled AbortController wrapper. MCP annotations let your own
approval gate read `destructiveHint`, but they are server-asserted: gate on them
only for servers you trust. If you run Workers AI dynamic models, 2.0.8's warning
is the first signal that your cost dashboards showed $0 for unknown, not free.

## Receipt
- https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.0
