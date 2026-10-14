---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-a-pending-approval-holds-the-turn-authenticated-requesters-answer-by-default-with-an-anony
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/harness/hitl/coordinator.ts#L158-L176
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/pull/4135
    precision: merged_pr
  - url: https://github.com/vercel/eve/blob/eve%400.63.0/docs/tools/human-in-the-loop.md?plain=1#L179
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/docs/tools/human-in-the-loop.md?plain=1#L235-L237
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/execution/session/input-queue.ts#L229-L244
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/pull/4368
    precision: merged_pr
---
# 2026-10-13-eve-a-pending-approval-holds-the-turn-authenticated-requesters-answer-by-default-with-an-anony

A pending approval holds the turn; authenticated requesters answer by default, with an anonymous exception. The 0.45.0 behavior the profile warned about is gone. From 0.70.0 a tool approval or connection sign-in holds the same turn open (`turn.waiting` with `on: "input"`), with no prompt-wait timeout; surrounding sessions and resources may still have lifetime limits. A message from the requester that does not match an option steers the turn and cancels the pending approval (`input.resolved` outcome `ignored`; the call does not run), even when sent with `turnPolicy: "queue"`; messages from anyone else wait until the turn ends. From 0.69.0 only the turn's own principal can steer a running turn at all, so other people's messages queue even under the default `steer` policy. From 0.72.0, without an `approval.response` policy, only an authenticated requester can answer their own request; anonymous or unidentified requesters allow any responder. A custom response policy replaces that default (0.79.0 coordinator L158-L176). 0.70.0 also resumes a completed sign-in as the user who started it; before, in a shared thread, it ran as the last speaker. Discord button presses answered anonymously until 0.73.0, so response policies did not work there, and apps with a custom `onCommand` must now set `onInputResponse` or presses are dropped.

Channel: tagged-release. Half: both. Date: 2026-10-01 (eve@0.69.0) to 2026-10-07 (eve@0.73.0).

Operator consequence: The old follow-up-turn workaround is superseded by held turns from 0.70.0. However, a held turn alone does not establish consent to its particular prompt: 0.79.0 can consume approval-shaped text queued before the prompt existed (section 14), and the fix was only on main at window close. Include that timing case before removing application-level protections. An unrelated requester message cancels their pending approval; other speakers wait while the turn is held. Choose an explicit response policy for designated approvers and an operational cancellation path for abandoned requests.

## Receipt
- https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/harness/hitl/coordinator.ts#L158-L176
- https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244
- https://github.com/vercel/eve/pull/4135
- https://github.com/vercel/eve/blob/eve%400.63.0/docs/tools/human-in-the-loop.md?plain=1#L179
- https://github.com/vercel/eve/blob/eve%400.78.0/docs/tools/human-in-the-loop.md?plain=1#L235-L237
- https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/execution/session/input-queue.ts#L229-L244
- https://github.com/vercel/eve/pull/4368
