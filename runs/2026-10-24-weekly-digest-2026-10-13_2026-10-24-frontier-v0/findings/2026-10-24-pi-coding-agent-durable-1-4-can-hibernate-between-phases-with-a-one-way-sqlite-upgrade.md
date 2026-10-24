---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-durable-1-4-can-hibernate-between-phases-with-a-one-way-sqlite-upgrade
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/CHANGELOG.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L139-L220
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/storage/sqlite/migrations.ts
    precision: tagged_commit_file
  - url: https://developers.cloudflare.com/changelog/post/2026-10-22-pi-harness-pi-1-4/
    precision: official_docs
---
# 2026-10-24-pi-coding-agent-durable-1-4-can-hibernate-between-phases-with-a-one-way-sqlite-upgrade

Durable 1.4 can hibernate between phases, with a one-way SQLite upgrade. `runtime.sleep()` is removed. `sleepUntil()` ends a phase with a durable checkpoint and a `sleeping` task, allowing retry backoff, deferred polls and scheduled work to release their invocation. `wake()`/`onWake` tell a host whether work is active or the earliest time it must restart. This makes host alarms a real part of correctness: the host must arrange a durable wake and reopen/resume the harness; an in-memory timer alone cannot wake a dead process. SQLite automatically migrates to schema version 2, which 1.3.0 and earlier cannot open. JSONL needs no migration, but older code cannot resume the new sleeping task state. Every `defineDoc`/`defineDocFamily` must supply `checkpointWhen`; `() => false` deliberately retains delta-only behavior. Version 1.3 had already added SQLite namespacing and coordination for shared Durable Object storage, corrected the leading system baseline after compaction, and reduced image base64 memory pressure.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Back up persistent state and plan rollback before any 1.4 process opens the database. Split work after a wait into a new phase, update exhaustive state handlers and fakes, and verify that alarms survive a process dying around a commit. The gain is substantive: the host need not keep an invocation alive merely to wait. The scarce engineering attention moves to wake ownership, storage migration and replay-safe external effects, not another chat-loop wrapper. The dated Cloudflare announcement describes Agents SDK 0.30.0 adopting this host contract; it is not evidence that every hosted Pi front end has upgraded.

## Receipt
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/CHANGELOG.md
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L139-L220
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/storage/sqlite/migrations.ts
- https://developers.cloudflare.com/changelog/post/2026-10-22-pi-harness-pi-1-4/
