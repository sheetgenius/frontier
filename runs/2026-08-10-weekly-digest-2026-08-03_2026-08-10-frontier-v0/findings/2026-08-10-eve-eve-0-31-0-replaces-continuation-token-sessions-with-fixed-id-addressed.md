---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-eve-eve-0-31-0-replaces-continuation-token-sessions-with-fixed-id-addressed
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.31.0
    precision: github_release
---
# 2026-08-10-eve-eve-0-31-0-replaces-continuation-token-sessions-with-fixed-id-addressed

eve 0.31.0 replaces continuation-token sessions with fixed, ID-addressed handles across every public surface.

A breaking migration across the whole public session surface. TypeScript clients use `client.sessions.create(input)` and `client.sessions.attach(sessionId)`; `client.session(...)` and continuation-token client state are removed. Message delivery moves to positional `send(message, options)`, with human-in-the-loop replies split onto a separate `respond(inputResponses, options)` method that is mutually exclusive with `message`. Custom channels get `from(address)`, top-level `resolveSession(address)`, `attachSession(sessionId)`, and `to(channel, target)`. Slack hooks expose `ctx.send`, `ctx.respond`, `ctx.cancel`, `ctx.compact`, `ctx.clear`, `ctx.reset`, and `ctx.resolveSession`, while `ctx.receive` and `resolveActiveSession` are removed. Schedule handlers replace `receive(channel, {...})` with `to(channel, target).send(...)`. On the HTTP API, clear/compact/reset move from continuation-token body routes to `POST /eve/v1/session/:sessionId/{clear,compact,reset}`; accepted async work returns HTTP 202 and inactive follow-ups return HTTP 409 with `code: "session_not_active"`, exposed as `ClientError.code`. Canonical `onMessage` hooks can no longer drop an otherwise authorized delivery by returning `null`.

Channel: tagged-release. Ancestry: `gh api repos/vercel/eve/releases` lists eve@0.31.0 published 2026-08-06T13:40:26Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.30.8...eve%400.31.0'` returned b7a2a14 a53a91e 40b09e6 3cfe8f8 2054b9f 84c3dfc cb15af6, containing the breaking-change commit 40b09e6  --  in the history of the stable tag eve@0.31.0.

Operator consequence: Every integration you wrote against eve before 0.31.0 breaks, including your HTTP clients  --  this is not a type-level rename you can absorb with a codemod. Two consequences outlive the migration. First, `onMessage` returning `null` no longer silently drops an authorized delivery, so if you were using that as an admission gate, your gate is gone and you must move the decision to a real auth or approval surface. Second, the split of `send` from `respond` makes the human-in-the-loop reply a distinct call rather than an overloaded message  --  that is the shape to copy if you are designing your own approval surface. Note the compatibility work in 0.31.1: sessions pinned to 0.30.3 -- 0.30.8 get a transitional payload mirror, which is a deliberate, dated promise about resumability across an upgrade rather than a silent break.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.31.0
