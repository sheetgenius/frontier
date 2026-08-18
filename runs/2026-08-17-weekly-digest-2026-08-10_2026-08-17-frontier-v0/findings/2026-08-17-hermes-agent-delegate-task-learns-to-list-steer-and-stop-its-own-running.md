---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-delegate-task-learns-to-list-steer-and-stop-its-own-running
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/85232
    precision: merged_pr
---
# 2026-08-17-hermes-agent-delegate-task-learns-to-list-steer-and-stop-its-own-running

delegate_task learns to list, steer and stop its own running children.

Three new actions on the existing tool rather than three new tools: `action='list'` shows this conversation's children, `action='steer'` redirects one mid-run without stopping it, `action='stop'` ends one early. Ownership is enforced by a `_delegate_parent_ref` weakref chain so a conversation can only control its own spawn tree. Control actions never consume the per-turn subagent spawn cap and stay usable once the cap is hit  --  the PR notes that is exactly when `stop` matters most. Steering rides the existing `steer_subagent()` registry and is delivered at the child's next tool boundary, with missed steers surfacing as `missed_steer` in the completion entry; `stop` halts at the next iteration boundary and the partial result still re-enters as a normal completion. Live E2E shows a child echoing STEER-ACK mid-essay and switching topics. Documented the same day in #85462.

Channel: tagged-release. Ancestry: merge_commit_sha 2a26693e22f43f29319be15d12433c95a4eaf6a8; compare/2a26693e...v2026.8.13 -> status=ahead, ahead_by=160, behind_by=0 (ancestor of stable tag v2026.8.13).

Operator consequence: Try it: a running fan-out stops being fire-and-forget. The governance read is more interesting than the ergonomic one  --  a parent agent can now interrupt its own children, so your kill switch is no longer only a human at the TUI. Check that your audit trail captures `steer` and `stop` calls as decisions, because they are.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/85232
