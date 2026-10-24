---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-durable-adds-crash-loop-parking-inspectable-telemetry-and-browser-storage
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/scheduler.ts
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/agent.ts
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md
    precision: tagged_commit_file
  - url: https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/src/server/app.ts#L1083-L1100
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/scheduler.ts#L1395-L1407
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-durable-adds-crash-loop-parking-inspectable-telemetry-and-browser-storage

Durable adds crash-loop parking, inspectable telemetry and browser storage. A task interrupted five times without committing new state is parked with `restart_limit`; it no longer counts as active work and stays parked at the current limit; `retryTask()` clears its restart count, and raising `restartLimit` can also make it runnable. A clean close does not count, and a new committed state resets the counter. Every task running at process death is counted, not only the task that caused the crash. Structured reports identify parked, faulted and migration-failed work. Optional telemetry records control metadata and IDs instead of conversation/tool payloads; diagnostic error strings are capped, so this is not a claim that arbitrary diagnostics cannot contain sensitive text. `afterFailedRun` can continue or withdraw queued inputs, while `keep` remains the default. IndexedDB adds a browser storage backend, and function-valued models/settings let a host replace configuration without reopening the harness.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Surface parked work and the retry action in the host UI, and distinguish a stopped crash loop from a completed job. Hosts can remove some restart and tracing scaffolding, but still own failure policy and credential handling. Check the host's override: released Pi Pocket 0.21.0 pins Durable 1.4.0 yet explicitly sets `restartLimit: Infinity`, citing long phases that may be killed repeatedly. Upgrading the library alone therefore does not establish the default guard in a product. IndexedDB is a useful embedding primitive, not a complete browser execution or isolation product.

## Receipt
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/scheduler.ts
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/agent.ts
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md
- https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/src/server/app.ts#L1083-L1100
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/scheduler.ts#L1395-L1407
