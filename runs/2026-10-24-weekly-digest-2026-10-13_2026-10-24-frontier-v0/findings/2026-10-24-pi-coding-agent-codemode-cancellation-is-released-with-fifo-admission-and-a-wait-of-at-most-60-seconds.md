---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-codemode-cancellation-is-released-with-fifo-admission-and-a-wait-of-at-most-60-seconds
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/3daa20280f6a7c7cbe0935680c9a38fdc3863005
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/885a564b3b22dc6eefd55a78a8f6bb757ddfbc69
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-codemode-cancellation-is-released-with-fifo-admission-and-a-wait-of-at-most-60-seconds

Codemode cancellation is released with FIFO admission and a wait of at most 60 seconds. The CLI's script call can return after cancellation or deadline even when a Bun worker is inside a non-interruptible built-in. Such a worker still occupies its slot until it actually exits. The default is two live workers across sessions in the process; `PI_CODEMODE_MAX_WORKERS` can override it. At saturation, 1.4 waits FIFO for up to 60 seconds rather than immediately failing. Queue time counts against a script's own timeout. The pending-waiter array has no explicit length cap; this bounds waiting time and live workers, not pending-request memory. Source review covered admission, reservation transfer, timeout and actual worker-exit release, not just the changelog.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Upgrade hosts running concurrent or interruptible scripts to 1.4.0. Size concurrency against process memory and queue latency, and retain external containment for hostile work. A returned cancellation is not proof the worker or an already dispatched side effect stopped. This removes some homegrown admission control, but it does not fix codemode-only enforcement or create separate approval hooks for classifier/image calls.

## Receipt
- https://github.com/earendil-works/pi/commit/3daa20280f6a7c7cbe0935680c9a38fdc3863005
- https://github.com/earendil-works/pi/commit/885a564b3b22dc6eefd55a78a8f6bb757ddfbc69
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts
