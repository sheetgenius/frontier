---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-skill-grants-now-depend-more-closely-on-admitted-hooks-and-managed-settings
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.304
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.305
    precision: github_release
---
# 2026-10-24-claude-code-skill-grants-now-depend-more-closely-on-admitted-hooks-and-managed-settings

Skill grants now depend more closely on admitted hooks and managed settings. 304 gives settings.read hooks each settings layer and a rewrite of the merged result. A skill source can register at most 1,024 hooks and 16,384 matcher characters per session. A main-conversation skill loses allowed-tools when plugin-only hook policy excludes its hooks. 305 also removes allowed-tools from Desktop path-mounted plugins under allowManagedPermissionRulesOnly.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: Re-test settings-rewriting mods and skills whose tool grants assumed their hooks would run. Hook admission and pre-approval must be reviewed together. The new ceilings support organization policy but can change effective retention settings and break oversized skill sources.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.304
- https://github.com/anthropics/claude-code/releases/tag/v2.1.305
