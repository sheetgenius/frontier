---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-queued-approval-text-can-settle-a-prompt-that-did-not-exist-when-it-was-sent-the-fix-is
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/0dea0ded869be7db30ae90ed8072d29e6e57df61
    precision: commit
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/pull/4749
    precision: merged_pr
---
# 2026-10-13-eve-queued-approval-text-can-settle-a-prompt-that-did-not-exist-when-it-was-sent-the-fix-is

Queued approval text can settle a prompt that did not exist when it was sent; the fix is only on main. At 0.79.0 the held-on-person queue override has no admission-time cutoff. A requester can send approve with turnPolicy queue before a later prompt exists; the held turn can then consume it as an answer. The patch records when the hold began and excludes earlier queued messages. The regression test constructs this sequence and expects no approval settlement or tool execution until a later answer. The test was read, not run.

Channel: main-unreleased. Half: defect. Date: 2026-10-13 (merge 22:38:36Z).

Operator consequence: Do not call 0.78.0 or 0.79.0 a complete consent repair. Include pre-prompt typed replies in application authority tests and watch for a tag containing this exact commit. Preserve a deliberate gate for consequential effects until the relevant timing path is checked. This is a consent-timing defect, not renewed approver-credential lending; the patch does not establish closure of every steer timing case.

## Receipt
- https://github.com/vercel/eve/commit/0dea0ded869be7db30ae90ed8072d29e6e57df61
- https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244
- https://github.com/vercel/eve/pull/4749
