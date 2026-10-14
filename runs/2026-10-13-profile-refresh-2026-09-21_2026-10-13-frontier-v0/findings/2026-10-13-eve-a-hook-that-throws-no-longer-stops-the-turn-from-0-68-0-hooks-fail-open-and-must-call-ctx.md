---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-a-hook-that-throws-no-longer-stops-the-turn-from-0-68-0-hooks-fail-open-and-must-call-ctx
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/2cfcecc3965185c5df31130366de4cb292d85859
    precision: commit
  - url: https://github.com/vercel/eve/pull/3718
    precision: merged_pr
  - url: https://github.com/vercel/eve/releases/tag/eve%400.68.0
    precision: github_release
  - url: https://github.com/vercel/eve/blob/eve%400.63.0/docs/guides/hooks.md?plain=1#L177-L179
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/docs/guides/hooks.md?plain=1#L189-L191
    precision: tagged_commit_file
---
# 2026-10-13-eve-a-hook-that-throws-no-longer-stops-the-turn-from-0-68-0-hooks-fail-open-and-must-call-ctx

A hook that throws no longer stops the turn: from 0.68.0 hooks fail open and must call ctx.cancel(). Before 0.68.0, a `turn.started` or `step.started` hook that threw ended the turn with `EVENT_HANDLER_FAILED`, and the PR notes that #3091 "used that throw as the only way to reject a turn." From 0.68.0, eve logs the failure, runs the remaining subscribers and lets the turn continue; the changeset is a minor "because throwing no longer vetoes a turn." Hooks gain `ctx.cancel()`, which settles like `session.cancel()` before the next model call. Side effects a hook made before throwing are not rolled back.

Channel: tagged-release. Half: both. Date: 2026-09-28 (eve@0.68.0).

Operator consequence: Before upgrading past 0.67.2, grep `agent/hooks/` for handlers that throw to block work (credential loads, tenancy or entitlement checks). On 0.68.0 and later they log an error and let the model run without the guard. Replace each throw-to-veto with `ctx.cancel()` and add a test that the turn ends with `turn.cancelled`. The capability half: an audit or metrics hook with a dead sink no longer takes the agent down. The cost: a guard that throws is now a guard that silently stops guarding.

## Receipt
- https://github.com/vercel/eve/commit/2cfcecc3965185c5df31130366de4cb292d85859
- https://github.com/vercel/eve/pull/3718
- https://github.com/vercel/eve/releases/tag/eve%400.68.0
- https://github.com/vercel/eve/blob/eve%400.63.0/docs/guides/hooks.md?plain=1#L177-L179
- https://github.com/vercel/eve/blob/eve%400.78.0/docs/guides/hooks.md?plain=1#L189-L191
