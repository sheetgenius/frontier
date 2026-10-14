---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-the-git-config-floor-moves-to-v0-21-6-a-repository-s-own-clean-smudge-process-filters-stil
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6
    precision: github_release
  - url: https://github.com/NousResearch/hermes-agent/commit/6c5107592900aac96ed76bb13bbcc7358d50124e
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/_subprocess_compat.py#L492-L530
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/coding_context.py#L531-L536
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v2026.9.24/hermes_cli/_subprocess_compat.py#L34-L41
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-the-git-config-floor-moves-to-v0-21-6-a-repository-s-own-clean-smudge-process-filters-stil

The git-config floor moves to v0.21.6: a repository's own clean/smudge/process filters still ran before the first prompt. The v2026.9.7 fix for the GitSpawn class (f6234d00) pinned fixed git config keys such as core.fsmonitor, core.hooksPath, pager, editor and credential helper. It could not pin filter drivers, because a repository names those itself in .gitattributes. A `filter.<name>.clean`, `smudge` or `process` command in the repository's own .git/config, or in a file it includes, therefore still ran whenever Hermes read or checked out the index on its own: the session-start workspace snapshot (`git status`), kanban and subagent worktrees, worktree cleanup, delegation recovery hints, `hermes -w` and the TUI file picker. The v0.21.6 notes say this could happen before the first prompt. v0.21.6 discovers the repository's filter keys with one bounded probe, overrides each to a no-op, reads includeIf targets directly, and skips the automatic git call when discovery cannot be trusted (nested includes, unreadable targets, more than 256 filter keys). The precondition matches GitSpawn: a directory delivered with its .git intact (an archive, a synced folder), since `git clone` does not copy a remote's .git/config. The bug was public from 2026-09-28, fixed on main 2026-10-01, and first tagged 2026-10-08.

Channel: tagged-release. Half: defect. Date: 2026-10-08.

Operator consequence: The floor for opening Hermes in any directory you did not create or clone yourself is v0.21.6, not v2026.9.7; v2026.9.21 and v2026.9.24 are exposed. Upgrade before using the CLI, a Desktop project, `hermes -w` or kanban in an archive-delivered checkout, and isolate the entire Hermes process when opening untrusted checkouts. A terminal container setting alone does not establish that host-side startup Git runs in that container. Expect some repositories to lose automatic snapshots and worktrees on v0.21.6+, by design, when filter discovery fails closed. This is the second fix for the same class in five weeks; the durable rule is that a directory's .git/config is code.

## Receipt
- https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6
- https://github.com/NousResearch/hermes-agent/commit/6c5107592900aac96ed76bb13bbcc7358d50124e
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/_subprocess_compat.py#L492-L530
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/coding_context.py#L531-L536
- https://github.com/NousResearch/hermes-agent/blob/v2026.9.24/hermes_cli/_subprocess_compat.py#L34-L41
