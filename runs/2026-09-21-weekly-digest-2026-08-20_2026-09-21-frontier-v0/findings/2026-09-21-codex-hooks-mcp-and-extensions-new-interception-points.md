---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-codex-hooks-mcp-and-extensions-new-interception-points
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.151.0
    precision: github_release
  - url: https://github.com/openai/codex/releases/tag/rust-v0.155.0
    precision: github_release
---
# 2026-09-21-codex-hooks-mcp-and-extensions-new-interception-points

Hooks, MCP, and extensions: new interception points. 0.150.0 adds `Interrupt` hooks, which run commands or MCP handlers when a top-level turn is interrupted. 0.151.0 lets extensions inspect or replace MCP tool results before the model sees them. 0.152.0 adds per-tool `output_token_limit`. 0.153.0 scopes remembered MCP tool approvals to the selected app account. 0.154.0 hot-reloads plugin tools, skills, and hooks in existing sessions after plugin upgrades. MCP OAuth refresh failures surface a login challenge "without automatically replaying rejected tool calls". 0.155.0 adds Touch ID verification for MCP requests in local TUI on supported Macs.

Channel: tagged-release. Half: capability. Date: 2026-08-26..2026-09-17.

Operator consequence: You can now filter or redact MCP output at the harness layer instead of in each server. Because plugins hot-reload, a session's skills and hooks can change mid-run. Re-audit anything that assumed the skill and hook set was fixed at session start.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.151.0
- https://github.com/openai/codex/releases/tag/rust-v0.155.0
