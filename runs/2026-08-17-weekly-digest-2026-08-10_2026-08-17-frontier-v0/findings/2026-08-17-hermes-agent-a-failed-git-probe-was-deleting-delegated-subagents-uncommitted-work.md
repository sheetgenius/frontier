---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-a-failed-git-probe-was-deleting-delegated-subagents-uncommitted-work
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/88419
    precision: merged_pr
---
# 2026-08-17-hermes-agent-a-failed-git-probe-was-deleting-delegated-subagents-uncommitted-work

A failed git probe was deleting delegated subagents' uncommitted work and reporting it as 'nothing produced'.

With `delegation.worktree_isolation: true`, `finalize_subagent_worktree()` pre-seeded its payload with `commits: 0, dirty: False`, then ran `git rev-list --count` and `git status --porcelain`, which only overwrote those values on a zero exit. A non-zero exit left the optimistic defaults in place and the prune condition read them as *proven* clean  --  running `git worktree remove --force` and `git branch -D`. Untracked and uncommitted child work was irrecoverable, and the entry even reported `pruned: true`. Worse, the failure case was byte-identical to 'the child did nothing', and the only failure signal was a `logger.warning` that the sole consumer  --  the parent agent reading the serialized delegate_task entry  --  cannot read. The fix fails closed on inspection uncertainty, stamps `inspection_failed: True` with a note naming the worktree and branch, aligns the caller's fallback payload to the same shape, and closes a second fail-open path where a missing `base_commit` meant the rev-list probe never ran at all. Validated by reproducing the destruction on main @ 979ca57a50 with real git repos and no mocks.

Channel: tagged-release. Ancestry: merge_commit_sha 4323c67dcc6048fc8e311cdff7600d3d6a17807f; compare/4323c67d...v2026.8.16.2 -> status=ahead, ahead_by=23, behind_by=0 (ancestor of stable tag v2026.8.16.2).

Operator consequence: If you enabled `worktree_isolation` between its arrival on 2026-08-13 and this fix on 2026-08-17, delegated work may have been destroyed while the run reported success. Check `<repo>/.worktrees/` and `git branch --list 'hermes-subagent/*'` for what survived, and upgrade to v0.20.3 before turning the flag on again. This is the sharpest example in the window of a capability and its data-loss defect shipping four days apart under the same minor version.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/88419
