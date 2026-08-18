---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-eve-eve-0-34-0-adds-request-and-response-approval-policies-that-can
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.34.0
    precision: github_release
---
# 2026-08-17-eve-eve-0-34-0-adds-request-and-response-approval-policies-that-can

eve 0.34.0 adds request and response approval policies that can authenticate the responder, plus a durable instrumentation layer that traces approval waits.

Tools and connections can now define optional `request` and `response` approval policies while preserving the existing function shorthand. Response policies can authenticate the responder and return a tagged allow or rejection decision, and authorization token results can expose a stable provider subject. Alongside it, an experimental `agent/instrumentation/` provider layout ships with durable lifecycle handlers: `agent.action` spans are reconstructed when runtime actions settle, including across worker replacement, recording each action's caller-accepted duration, kind, outcome, stable error code and subagent usage; human approval waits appear as durable `agent.approval` child spans; every lifecycle event carries a replay-stable `idempotencyKey` derived from durable eve identity so providers can upsert one record across retries and worker replays; and remote eve sessions join the caller action trace through W3C `traceparent`.

Channel: tagged-release. Ancestry: `gh api repos/vercel/eve/releases` lists eve@0.34.0 published 2026-08-12T22:57:52Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.33.3...eve%400.34.0'` returned a 24-commit list containing the minor-change commit 11908eb (approval policies) alongside the instrumentation commits c90a459, 29313be, 4138e64, d304544 and 1528fda  --  all in the history of the stable tag eve@0.34.0. The instrumentation provider layout is labelled experimental in its own release note; that is a maturity label inside a stable tag, not a prerelease channel.

Operator consequence: This is the answer to the open question the contract has carried since registration  --  who approves, and where is the pause recorded. Study it even if you never ship eve. A response policy that authenticates the responder means the gate finally distinguishes "someone clicked approve" from "the person authorized to approve clicked approve", which is the difference between an approval UI and an approval control. The durable `agent.approval` span with a replay-stable idempotency key is the other half: the pause becomes a record that survives worker replacement and does not double-count on replay. If you are building your own receipt layer for agent authority, these two properties  --  responder identity on the decision, replay-stable identity on the record  --  are the bar to clear.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.34.0
