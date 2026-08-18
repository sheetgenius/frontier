---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-delegated-subagents-can-each-get-their-own-git
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/84942
    precision: merged_pr
---
# 2026-08-17-hermes-agent-delegated-subagents-can-each-get-their-own-git

Delegated subagents can each get their own git worktree.

`delegation.worktree_isolation: true` (default false) gives each delegated child a worktree at `<repo>/.worktrees/subagent-<id>` on branch `hermes-subagent/subagent-<id>`, branched from HEAD, so parallel children stop contending for one working copy and the parent's checkout stays untouched. Children commit in their own worktree and the lead reviews and merges each branch. Worktrees with no commits and a clean tree are auto-pruned; anything holding work is kept. Scope guards are tight: git repos and the local terminal backend only  --  non-git dirs, docker/ssh/modal backends, unborn HEAD or any git failure fall back silently to today's shared workspace rather than erroring. Result entries gain a `worktree` field only when isolation engaged, so the default-off wire shape is byte-identical. The PR documents it as a clean-room implementation from Meta Muse Code's published behaviour (dev.meta.ai docs), with no code referenced.

Channel: tagged-release. Ancestry: merge_commit_sha 6ee58f4088e70798b51e001ab79adaec3b34fa4a; compare/6ee58f40...v2026.8.13 -> status=ahead, ahead_by=274, behind_by=0 (ancestor of stable tag v2026.8.13).

Operator consequence: Turn it on if you fan out edit-capable children across one repo  --  this is the difference between parallel subagents and parallel corruption. Note the silent degradation: on a docker or SSH backend you get shared-workspace behaviour with no error and no `worktree` field, so verify the field is present before you assume isolation held.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/84942
