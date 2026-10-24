---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-worktree-exit-cleanup-is-repaired-where-it-could-discard-commits
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.301
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.304
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.309
    precision: github_release
---
# 2026-10-24-claude-code-worktree-exit-cleanup-is-repaired-where-it-could-discard-commits

Worktree exit cleanup is repaired where it could discard commits. 301 repairs unprompted exit removal of WorktreeCreate-hook worktrees that might contain unpushed commits. 304 repairs exit cleanup removing a worktree and its branch after detached HEAD or branch changes, potentially losing commits. 309 makes harness-created worktrees and branch checkouts ignore git replace refs.

Channel: tagged-release. Half: defect. Date: 2026-10-22.

Operator consequence: Re-test retention using the team's actual creation hook, detached HEAD and branch-switch workflow before delegating cleanup. Keep an independent record of important commits. Worktree isolation must include ownership of what survives session exit.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.301
- https://github.com/anthropics/claude-code/releases/tag/v2.1.304
- https://github.com/anthropics/claude-code/releases/tag/v2.1.309
