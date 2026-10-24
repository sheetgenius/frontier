---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-dirty-worktrees-can-be-archived-and-deleted-by-default
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/3882113085a9abd73f11344c8a3d3d89900c01e1
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/06671b70756452c9bb45c0e7297835f7728143fc
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/config_defaults.py#L495-L508
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/git-worktrees.md#L201-L260
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-dirty-worktrees-can-be-archived-and-deleted-by-default

Dirty worktrees can be archived and deleted by default. `worktrees.archive_dirty` defaults to true and archive retention to 30 days. At worktree startup and on the six-hour sweep, idle dirty or unpushed trees past their tier can be archived into Git refs then removed. Ignored files are not archived and are deleted with the tree. Live trees, Kanban task trees, submodules, embedded repositories and other documented exclusions remain protected; failure to archive keeps the tree. This default is separate from session deletion returning to opt-in.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Inspect `hermes worktree prune --dry-run`, preserve ignored state separately, and set `worktrees.archive_dirty: false` if dirty or unpushed trees must never be removed. Check archive retention before treating restore as indefinite recovery. Automatic cleanup reduces manual disk work by transferring the preservation decision to policy.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/3882113085a9abd73f11344c8a3d3d89900c01e1
- https://github.com/NousResearch/hermes-agent/commit/06671b70756452c9bb45c0e7297835f7728143fc
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/config_defaults.py#L495-L508
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/git-worktrees.md#L201-L260
