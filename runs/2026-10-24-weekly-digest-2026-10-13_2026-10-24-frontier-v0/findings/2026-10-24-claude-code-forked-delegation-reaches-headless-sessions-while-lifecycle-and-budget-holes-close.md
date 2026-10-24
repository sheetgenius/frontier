---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-forked-delegation-reaches-headless-sessions-while-lifecycle-and-budget-holes-close
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.302
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.299
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.304
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.305
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.309
    precision: github_release
---
# 2026-10-24-claude-code-forked-delegation-reaches-headless-sessions-while-lifecycle-and-budget-holes-close

Forked delegation reaches headless sessions while lifecycle and budget holes close. Fork subagents become default in `-p`, Agent SDK, Desktop and VS Code; `CLAUDE_CODE_FORK_SUBAGENT=0` disables them and `claude mcp serve` never offers them. Desktop/VS Code main-conversation subagents always run in the background; nested Agent calls default to foreground on the named surfaces. Version 299 stops end-of-turn mod prompts extending runs beyond max turns, budget, interruption or ended input. Version 304 closes spawn/resume routes past max turns, Stop or ended input. Version 305 resumes completed workflow `pipeline()` and `parallel()` agents from the journal rather than rerunning them.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: Try native context-sharing delegation before maintaining custom prompt-copy and resume scaffolding. Re-test cost/turn limits with mods and child agents, and keep external spend controls where those are required. A recorded completed workflow step can now avoid duplicate execution, but this does not make arbitrary side effects exactly once. Version 309's inherited tool restrictions make 310 the more complete target for delegated jobs.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.302
- https://github.com/anthropics/claude-code/releases/tag/v2.1.299
- https://github.com/anthropics/claude-code/releases/tag/v2.1.304
- https://github.com/anthropics/claude-code/releases/tag/v2.1.305
- https://github.com/anthropics/claude-code/releases/tag/v2.1.309
