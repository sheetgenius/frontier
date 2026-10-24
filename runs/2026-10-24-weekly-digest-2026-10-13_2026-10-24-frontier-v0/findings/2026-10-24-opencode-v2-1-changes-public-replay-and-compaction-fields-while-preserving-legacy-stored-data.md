---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-v2-1-changes-public-replay-and-compaction-fields-while-preserving-legacy-stored-data
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/commit/acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd
    precision: commit
---
# 2026-10-24-opencode-v2-1-changes-public-replay-and-compaction-fields-while-preserving-legacy-stored-data

V2.1 changes public replay and compaction fields while preserving legacy stored data. Public SDK, HTTP/event and plugin contracts consolidate provider replay fields under `native`. Tool execution `state` is unchanged; call and result replay blobs shallow-merge into `tool.native`, with result keys winning. Key credential setup answers move from `configuration` to `metadata`. New summary compactions reference retained messages through `metadata.keepID`; native provider windows use `native.messages`; the unused `session.compacted` event is removed. Storage/import decoders still read older shapes, so the release states that no database migration is required. Native compaction replay now matches provider ID and model ID, not endpoint provenance; switching either falls back to original messages. Tool replay has finer distinctions: provider-run results can survive a same-provider model switch, while calls and successful local results require the same provider and model.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: Adapt integrations to 2.1 fields and lifecycle events before upgrading a server behind old clients. Verify a saved session, a tool call/result, a compaction, and a provider switch using the exact adapter pair. Do not confuse backward-readable storage with a backward-compatible public API or assume every opaque reasoning/replay token is portable. Provider choice remains valuable, but changing it can increase context replay cost and verification work; routing freedom alone does not establish cheaper completed work.

## Receipt
- https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes
- https://github.com/anomalyco/opencode/commit/acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd
