---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-2-0-documents-an-approval-gate-pattern-and-states-that-flue-has-no-built-in-approval-api
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/commit/cc7b9ca4e4a7e72a2444d9e0e594b8b874f8e778
    precision: commit
  - url: https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L228-L433
    precision: tagged_commit_file
---
# 2026-10-13-flue-2-2-0-documents-an-approval-gate-pattern-and-states-that-flue-has-no-built-in-approval-api

2.2.0 documents an approval-gate pattern and states that Flue has no built-in approval API. The guide states that Flue has no built-in approval API, then documents a gate built from existing primitives. A tool persists its exact arguments under toolCallId, returns pending_approval with terminate: true, and ends the response. An authenticated route dispatches a decision with an approval idempotency key; the first decision wins and a conflicting second one receives 409. A useAgentStart hook executes the stored arguments. The route, expiry policy and idempotent execution remain application responsibilities.

Channel: tagged-release (bundled docs). Half: capability. Date: 2026-09-25 (docs commit), shipped 2026-09-28 (2.2.0).

Operator consequence: Copy this gate for any Flue agent that can refund, publish or delete. It is the documented answer to "allowed-tools restricts nothing". Decide what unattended runs (schedules, webhooks) do with gated calls, add an expiry job, and pass the approval id downstream as an idempotency key. The gate lives in your code, so it is only as strong as the route that authenticates the approver. Flue's pattern ends the response while the human decides, which fits a server that answers every prompt with 202.

## Receipt
- https://github.com/withastro/flue/commit/cc7b9ca4e4a7e72a2444d9e0e594b8b874f8e778
- https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L228-L433
