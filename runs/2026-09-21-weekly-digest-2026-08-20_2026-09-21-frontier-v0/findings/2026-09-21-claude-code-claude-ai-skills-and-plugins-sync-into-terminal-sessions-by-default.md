---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-claude-ai-skills-and-plugins-sync-into-terminal-sessions-by-default
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.275
    precision: github_release
---
# 2026-09-21-claude-code-claude-ai-skills-and-plugins-sync-into-terminal-sessions-by-default

2.1.275 (2026-09-17) syncs the skills and plugins enabled on a claude.ai account into terminal sessions signed in with it, opt-out with syncClaudeAiSkills false or syncClaudeAiPlugins false. It also makes Claude in Chrome in auto mode skip the extension's per-site check for classifier-approved calls, as bypass mode does. 2.1.273 fixed skills synced from claude.ai staying available after an organization turned Skills off.

Channel: tagged-release (2.1.275; latest only). Half: both.

Operator consequence: An admin-installed plugin on claude.ai becomes code that runs on every signed-in developer machine. Set syncClaudeAiPlugins false in managed settings if plugin provenance is reviewed elsewhere, and inventory ~/.claude for @synced entries after upgrade.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.275
