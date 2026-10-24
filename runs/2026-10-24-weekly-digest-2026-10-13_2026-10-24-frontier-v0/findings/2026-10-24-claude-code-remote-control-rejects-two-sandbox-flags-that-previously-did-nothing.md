---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-remote-control-rejects-two-sandbox-flags-that-previously-did-nothing
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.300
    precision: github_release
---
# 2026-10-24-claude-code-remote-control-rejects-two-sandbox-flags-that-previously-did-nothing

Remote Control rejects two sandbox flags that previously did nothing. claude remote-control removes --sandbox and --no-sandbox. Either now exits with an error; neither previously enabled or disabled containment. sandbox.enabled in settings is the supported control.

Channel: tagged-release. Half: both. Date: 2026-10-14.

Operator consequence: Remove those flags from launch wrappers and verify sandbox.enabled on the executing machine. A formerly accepted flag can now stop startup, while removing it does not itself change effective containment.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.300
