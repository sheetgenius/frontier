---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-eve-eve-0-33-0-makes-channel-messages-interrupt-the-running-turn-by
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.33.0
    precision: github_release
---
# 2026-08-17-eve-eve-0-33-0-makes-channel-messages-interrupt-the-running-turn-by

eve 0.33.0 makes channel messages interrupt the running turn by default.

Channel message sends now default to `turnPolicy: "steer"`, so an accepted message replaces the active turn through cancellation-backed steering without a separate cancel request. The previous wait-for-completion behaviour is still available by setting `turnPolicy: "queue"` on a channel or on an individual send. The same release makes dynamic models and subagents resolve without compiled fallbacks or placeholder configs: `defineDynamic` accepts only `events`, and dynamic model handlers must return a concrete selection.

Channel: tagged-release. Ancestry: `gh api repos/vercel/eve/releases` lists eve@0.33.0 published 2026-08-11T19:55:46Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.32.0...eve%400.33.0'` returned 4ded514 1ee27be 1bacd9a ac31852 2dd193b f29b782 672c054 ccaa596 2d9a794, containing the change commit 2dd193b  --  in the history of the stable tag eve@0.33.0.

Operator consequence: This is a default flip that changes what your agent does to work already in flight, and it arrived on a minor version. Before upgrading past 0.33.0, decide per channel whether an inbound message should kill the running turn. For a Slack or GitHub agent doing long tool work, steering is usually right  --  a follow-up message means the human changed their mind. For anything transactional, or anything where a half-finished turn leaves external side effects, set `turnPolicy: "queue"` explicitly rather than inheriting the new default. Do not rely on the old behaviour surviving silently.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.33.0
