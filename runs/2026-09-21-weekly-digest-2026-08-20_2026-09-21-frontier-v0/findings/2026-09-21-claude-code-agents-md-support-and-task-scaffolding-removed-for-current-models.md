---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-agents-md-support-and-task-scaffolding-removed-for-current-models
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.277
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.268
    precision: github_release
---
# 2026-09-21-claude-code-agents-md-support-and-task-scaffolding-removed-for-current-models

2.1.277 (2026-09-18) reads AGENTS.md as project instructions when a project has no CLAUDE.md (not yet on Bedrock, Vertex or Foundry), removes the deprecated TaskOutput tool, and fixes a sandbox.excludedCommands glob that exempted an entire compound command from the sandbox when only one part matched. 2.1.268 (2026-09-10) offers the TaskCreate/Get/Update/List and TodoWrite tools only on older models (Claude 3.x, Opus 4.0 to 4.7, Sonnet 4.0 to 4.6, Haiku 4.5) unless CLAUDE_CODE_ENABLE_TODO_TOOLS=1. 2.1.260 removed the one-hour cap on subagent background commands. 2.1.274 stops /code-review fanning out review subagents on models without tuned settings.

Channel: tagged-release (2.1.268, 2.1.277; latest only). Half: both.

Operator consequence: Delete CLAUDE.md shims that only point at AGENTS.md once past 2.1.277 off the three clouds. Hooks or transcript parsers keyed on TodoWrite or TaskOutput lose their signal on current models. Re-read every excludedCommands entry as exempting the whole line on builds before 2.1.277.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.277
- https://github.com/anthropics/claude-code/releases/tag/v2.1.268
