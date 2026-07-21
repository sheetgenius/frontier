---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-claude-code-v2-1-196-security-fix-claude-mcp-list-get-no-longer-spaw
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.196
    precision: github_release
---
# 2026-07-01-claude-code-v2-1-196-security-fix-claude-mcp-list-get-no-longer-spaw

v2.1.196: Security fix - `claude mcp list`/`get` no longer spawn `.mcp.json` servers that a repo self-approved via a committed `.claude/settings.json`; untrusted workspaces now show 'Pending approval'. (channel: tagged-release, 2026-06-29). Operator consequence: Advisory-shape fix: a committed settings file could previously cause read-only MCP listing commands to spawn attacker-chosen MCP servers in an untrusted clone. Re-audit any workflow that runs `claude mcp list`/`get` against untrusted repos; upgrade to >= 2.1.196. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.196
