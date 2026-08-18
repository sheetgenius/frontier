---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-pi-coding-agent-the-session-and-harness-api-is-replaced-wholesale-with-the-v4-lane
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.84.0
    precision: github_release
---
# 2026-08-10-pi-coding-agent-the-session-and-harness-api-is-replaced-wholesale-with-the-v4-lane

The session and harness API is replaced wholesale with the v4 lane-based model; legacy repositories removed.

v0.84.0 replaces the inherited pi-agent-core harness session model with the v4 lane-based `Session`, `SessionStorage`, and `SessionRepo` APIs, adding durable operation records, global facts, shared sequence numbers, and tree-scoped lane views. The v2 session and `AgentHarness` API was promoted from pi-agent-core's experimental entrypoint to its default export and the experimental subpaths were removed. The legacy JSONL and in-memory repository APIs are gone; callers must move to v4 `JsonlSessionRepo` or `InMemorySessionRepo`, both implementing the new `SessionRepo` contract. Also breaking in the same release: `ModelRegistry.refresh()` now takes `ModelsRefreshOptions` and returns `ModelsRefreshResult` instead of discarding cancellation and provider errors; `ModelRuntime.setRuntimeApiKey()` takes auth cancellation options rather than catalog refresh options; config-form extension OAuth `refreshToken(credentials, signal)` callbacks must honor a concrete abort signal; and dynamic provider refresh store access is replaced by the read-only `context.stored` snapshot plus a generation-checked `context.publish()` transaction.

Channel: tagged-release. Ancestry: Documented in the body of the v0.84.0 release under Breaking Changes. v0.84.0 is a stable tag at sha a5f43bf8aff3c55752432655f7334e3dafd1e256 (gh api repos/earendil-works/pi/tags), published 2026-08-06T11:07:05Z with prerelease=false and draft=false per gh api repos/earendil-works/pi/releases. The supporting work is visible as a run of harness-v2 commits in gh api repos/earendil-works/pi/compare/v0.83.0...v0.84.2 dated 2026-08-05 and 2026-08-06 (e.g. 651d5d6a "partial harness v2/json backend (#7611)", 2bb7ba49 "feat: harness v2 r2 (#7669)", a838c069 "harness-v2 jsonl session atomic writes for forks & torn-tail truncation (#7707)").

Operator consequence: Adapt before upgrading, and pin if you embed. If you have wrapped Pi as an agent adapter or built on its SDK, 0.84.0 is not a drop-in minor  --  session storage, model-registry refresh, and provider registration contracts all moved at once. The release notes carry before/after migration snippets for the provider refresh path; providers built with `createProvider({ fetchModels })` need no change, but handwritten `Provider.refreshModels()` implementations that touched `context.store` directly must be rewritten around `context.publish()`. Budget a migration pass rather than a version bump.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.84.0
