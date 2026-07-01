---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-claude-code-v2-1-195-hook-matchers-with-hyphenated-identifiers-e-g-c
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.195
    precision: github_release
---
# 2026-07-01-claude-code-v2-1-195-hook-matchers-with-hyphenated-identifiers-e-g-c

v2.1.195: Hook matchers with hyphenated identifiers (e.g. `code-reviewer`, `mcp__brave-search`) now exact-match instead of accidentally substring-matching; external plugins enabled only by project `.claude/settings.json` now require explicit install consent on every loader path. (channel: tagged-release, 2026-06-26). Operator consequence: Behavior-changing hook fix: teams using hyphenated hook matchers may see hooks stop matching things they previously (incorrectly) matched - use `mcp__brave-search__.*` to match all tools from a hyphenated MCP server. Plugin install-consent fix closes a path where a project settings file could enable an external plugin without consent - re-audit trust of project-scoped plugins. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.195
