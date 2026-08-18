---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-pi-coding-agent-extension-tool-call-handlers-can-terminate-a-blocked-batch-without
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/extensions.md
    precision: official_docs
---
# 2026-08-10-pi-coding-agent-extension-tool-call-handlers-can-terminate-a-blocked-batch-without

Extension `tool_call` handlers can terminate a blocked batch without paying for another model call.

`tool_call` handlers now return `{ block: true, reason?: string, terminate?: boolean }`. Per docs/extensions.md at v0.84.2: "`terminate` only applies to a blocked call; the agent stops early only when every finalized result in the batch is terminating." The doc's worked example is exactly the governance case  --  intercept `bash`, and if the command contains `rm -rf`, return `{ block: true, reason: "Dangerous command", terminate: true }`. The same release contributed by @muyiyr (PR #7715). A parallel `terminate: true` return from a custom tool's `execute()` carries the same semantics for structured-output tools that should end the turn.

Channel: tagged-release. Ancestry: Commit 1eb988cfe88fb0ff740ff62583d2f16359f7b6b0 ("feat(agent): allow blocked tool calls to terminate (#7715)", authored 2026-08-06T15:14:48Z). `gh api repos/earendil-works/pi/compare/v0.84.1...1eb988cf` returned status=behind, behind_by=22  --  ancestor of the stable v0.84.1 tag (prerelease=false).

Operator consequence: Try it if you are building the permission layer Pi deliberately omits. Pi ships no permission popups and no built-in sandbox; the `tool_call` interception hook is where operators have been implementing their own policy. Until 0.84.1, blocking a call still triggered an automatic follow-up model call  --  so a policy that refuses a whole batch burned a round trip explaining itself to the model. Now a wholly-refused batch stops. That makes an extension-layer command policy cheap enough to run on every turn.

## Receipt
- https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/extensions.md
