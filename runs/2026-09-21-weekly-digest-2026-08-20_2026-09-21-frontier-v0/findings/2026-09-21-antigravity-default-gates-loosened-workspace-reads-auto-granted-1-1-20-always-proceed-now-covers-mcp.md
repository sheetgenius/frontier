---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-antigravity-default-gates-loosened-workspace-reads-auto-granted-1-1-20-always-proceed-now-covers-mcp
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.1.21/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-antigravity-default-gates-loosened-workspace-reads-auto-granted-1-1-20-always-proceed-now-covers-mcp

Default gates loosened: workspace reads auto-granted (1.1.20), always-proceed now covers MCP and page reads (1.1.21), headless runs auto-pass plan review (1.1.28). Three human gates were removed by default change, not by opt-in. The largest is MCP: before 1.1.21, `always-proceed` still stopped on MCP tool calls; after, any configured MCP server's tools run unprompted in that mode. Headless plan review, previously a hang, is now auto-approval.

Channel: tagged-release. Half: both. Date: 2026-08-25, 2026-08-26, 2026-09-09.

Operator consequence: If you run `always-proceed`, re-audit `mcp_config.json` and plugin-bundled MCP servers as if every tool on them is pre-approved, because on >= 1.1.21 it is. If you relied on the implementation-plan approval as a checkpoint in `-p` runs, it no longer exists on >= 1.1.28. Workspace reads under default review no longer prompt; nothing to do unless your workspace root holds secrets.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.1.21/CHANGELOG.md
