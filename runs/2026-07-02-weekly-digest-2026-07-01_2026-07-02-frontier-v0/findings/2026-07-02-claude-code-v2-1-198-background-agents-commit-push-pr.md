---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-claude-code-v2-1-198-background-agents-commit-push-pr
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.198
    precision: github_release
---
# 2026-07-02-claude-code-v2-1-198-background-agents-commit-push-pr

Claude Code `v2.1.198` makes subagents run in the background by default, adds
background-agent notifications, and says background agents launched from
`claude agents` now commit, push, and open a draft PR when they finish code work
in a worktree instead of stopping to ask. Channel: tagged-release. Operator
consequence: background agents now cross into repository mutation and remote
branch/PR automation; re-audit worktree rules, branch protection, and
Notification hooks.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.198
