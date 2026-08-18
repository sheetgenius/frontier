---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openhands-enterprise-conversations-are-force-paused-at-12-hours-and-the-cap-is
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/docs/pull/718
    precision: merged_pr
---
# 2026-08-17-openhands-enterprise-conversations-are-force-paused-at-12-hours-and-the-cap-is

Enterprise conversations are force-paused at 12 hours, and the cap is not configurable.

Prompted by customer questions about running conversations indefinitely, the Enterprise docs now document three limits that were previously only alluded to as 'cleaned up due to idle timeout'. Idle Time pauses an idle conversation's sandbox and is reset by activity; Deletion Time permanently deletes a paused conversation and its storage. Both are admin-console settings. Separately, and verbatim: 'a single running session is capped at a maximum of 12 hours. This cap applies even to a continuously-active conversation: once a session has been running for 12 hours it is force-paused. Resuming the conversation starts a new 12-hour window. This maximum session duration is not currently configurable.' The docs also state these limits are deployment-wide and cannot be set per conversation or per Agent Profile  --  Agent Profiles configure model, tools, and behavior, not sandbox lifetime.

Channel: docs-only. Ancestry: OpenHands/docs PR #718, merge commit 30d3bf45e31897db395e8c5c43b4b326512be887, merged 2026-08-13T18:51:54Z, +26 lines in enterprise/conversations-and-sandboxes.mdx and +8 in enterprise/vm-install/admin-console-configuration.mdx. Docs-only: the PR body states it 'clarifies the behavior without exposing any new configuration', i.e. no code channel accompanies it and the underlying code is in the now-private Enterprise repositories.

Operator consequence: Adapt if you run long jobs on Enterprise. Any agent task that could exceed twelve hours must checkpoint its state somewhere that survives a force-pause and be resumable, because the pause will happen mid-work and there is no setting to raise the ceiling. This also closes off a design many teams reach for: you cannot give a heavyweight profile a longer lifetime than a lightweight one, because lifetime is a deployment property and profiles do not touch it.

## Receipt
- https://github.com/OpenHands/docs/pull/718
