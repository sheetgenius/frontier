---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-approved-calls-ran-with-the-approver-s-identity-and-credentials-until-0-78
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/9559de83b65e89c24172c2b9c1a80382033556aa
    precision: commit
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/docs/tools/human-in-the-loop.md?plain=1#L257
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/releases/tag/eve%400.78.0
    precision: github_release
  - url: https://github.com/vercel/eve/pull/4515
    precision: merged_pr
  - url: https://github.com/vercel/eve/blob/eve%400.77.0/packages/eve/src/execution/coordination-dispatch-step.ts#L62-L64
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/docs/tools/human-in-the-loop.md?plain=1#L235
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/pull/4364
    precision: merged_pr
---
# 2026-10-13-eve-approved-calls-ran-with-the-approver-s-identity-and-credentials-until-0-78

Approved calls ran with the approver's identity and credentials until 0.78.0. When someone other than the requester approved a tool call, eve ran it with the approver's identity, connections and credentials. #4515 calls this "a privilege escalation": "a requester without release access can obtain that access when an authorized responder approves." From 0.70.0 through 0.71.2 it was worse: per #4363/#4364, once Bob approved a call in Alice's turn, the rest of Alice's turn ran as Bob, so Alice could steer later tool calls onto Bob's credentials and later approvals were "requested" by Bob. 0.71.3 confined the lending to the approved call and documented that as the rule. 0.72.0 made requester-only the default for approvals without an `approval.response` policy, which left lending live for every tool whose policy admits other approvers (designated approvers, four-eyes) and for calls requested by anonymous callers, which anyone may approve. 0.78.0 runs every approved call as the requester and rechecks approved workflow and agent calls before dispatch; the PR's new tests fail on the pre-fix base "because a task is dispatched despite policy denial". The consent record keeps who approved (`approval.settled.responderPrincipalId`). Before 0.70.0 an approval click started a fresh turn (#4135); whose identity that turn ran under was not verified in code, though the 0.63.0 auth guide describes follow-ups replacing `auth.current` with the new caller, which points to the clicker.

Channel: tagged-release. Half: defect. Date: 2026-10-13 (eve@0.78.0; fix merged 2026-10-12T15:58:56Z).

Operator consequence: Install current stable 0.79.0 (this particular fix first shipped in 0.78.0) on any channel where more than one person can answer approvals and tools use user-scoped connections. Re-audit 0.70.0 to 0.77.0 history: list `approval.settled` events whose `responderPrincipalId` differs from the requesting principal and check what each call (and, on 0.70.0 to 0.71.2, every later call in that turn) did with the approver's credentials. If a flow depended on an approver lending access (an IT approver granting someone else access), it stops working at 0.78.0; the explicit replacement, `ctx.approval.getToken` in #4604, is an open draft in no channel. The queued-text defect in section 14 remains in 0.79.0; this is not a blanket approval guarantee. Attention moves from "who clicked" to "what the tool checks": approval is now consent only, so the access check must live in the tool or its policy.

## Receipt
- https://github.com/vercel/eve/commit/9559de83b65e89c24172c2b9c1a80382033556aa
- https://github.com/vercel/eve/blob/eve%400.79.0/docs/tools/human-in-the-loop.md?plain=1#L257
- https://github.com/vercel/eve/releases/tag/eve%400.78.0
- https://github.com/vercel/eve/pull/4515
- https://github.com/vercel/eve/blob/eve%400.77.0/packages/eve/src/execution/coordination-dispatch-step.ts#L62-L64
- https://github.com/vercel/eve/blob/eve%400.78.0/docs/tools/human-in-the-loop.md?plain=1#L235
- https://github.com/vercel/eve/pull/4364
