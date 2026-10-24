---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-stable-sdk-updates-improve-background-work-and-failure-reporting-with-a-new-zod-dependency
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz
    precision: official_docs
  - url: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.37.tgz
    precision: official_docs
  - url: https://github.com/cursor/sdk-bridge/blob/1ba4fe546ea597c2f14b571b0ebe59ab1d20b70e/proto/sdk/v1/sdk_messages.proto
    precision: tagged_commit_file
  - url: https://cursor.com/docs/release-notes/sdk
    precision: official_docs
---
# 2026-10-24-cursor-stable-sdk-updates-improve-background-work-and-failure-reporting-with-a-new-zod-dependency

Stable SDK updates improve background work and failure reporting, with a new zod dependency obligation. SDK 1.0.38 fixes background children being cancelled when their launching tool returns, persists required Max Mode, honors configurable MCP startup time, and surfaces Computer Use events. It requires the consuming project to supply a compatible zod. Version 1.0.39 adds Python failure codes/messages and fixes per-send MCP additions dropping configured servers. Version 1.0.40 can preserve streamed output in memory after local-store failure, while warning that a checkpoint may be unavailable.

Channel: tagged-release. Half: both. Date: 2026-10-16 and 2026-10-20.

Operator consequence: Upgrade with an explicit zod dependency and check child completion, error fields and checkpoint warnings in the embedding. These changes can remove retries and lifecycle glue, but a returned answer after a store failure is not proof that a run can resume after process exit. Do not replay streaming runs merely because one-off SDK requests acquired a transient retry.

## Receipt
- https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz
- https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.37.tgz
- https://github.com/cursor/sdk-bridge/blob/1ba4fe546ea597c2f14b571b0ebe59ab1d20b70e/proto/sdk/v1/sdk_messages.proto
- https://cursor.com/docs/release-notes/sdk
