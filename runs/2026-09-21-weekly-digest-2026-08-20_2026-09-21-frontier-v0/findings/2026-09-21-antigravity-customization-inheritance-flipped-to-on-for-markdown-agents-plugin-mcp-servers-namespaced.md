---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-antigravity-customization-inheritance-flipped-to-on-for-markdown-agents-plugin-mcp-servers-namespaced
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.2/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-antigravity-customization-inheritance-flipped-to-on-for-markdown-agents-plugin-mcp-servers-namespaced

Customization inheritance flipped to on for Markdown agents; plugin MCP servers namespaced; cross-session customization leak fixed. A Markdown agent written before 1.1.25 under the 1.1.14 `inheritCustomizations` switch now gets ambient rules, skills and subagents unless it opts out. Before 1.2.2 a plugin MCP server could shadow a user-configured server of the same name. Before 1.2.3 `/hooks` hid plugin hooks, and before 1.2.4 hooks could be dropped entirely, so the audit tool and the running hook set disagreed.

Channel: tagged-release. Half: both. Date: 2026-09-03 to 2026-09-12.

Operator consequence: Re-read every Markdown custom agent for an explicit `inheritCustomizations` (or `excludeDefaultComponents`, new in 1.2.1) if you meant it to be isolated. After upgrading to >= 1.2.2, MCP server names from plugins change; update any allow rules keyed on server name. Re-run `/hooks` on >= 1.2.4 to see the real hook set.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.2/CHANGELOG.md
