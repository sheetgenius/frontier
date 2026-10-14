---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-bun-codemode-cancellation-and-a-two-worker-limit-are-repaired-only-on-main
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/3daa20280f6a7c7cbe0935680c9a38fdc3863005
    precision: commit
---
# 2026-10-13-pi-coding-agent-bun-codemode-cancellation-and-a-two-worker-limit-are-repaired-only-on-main

Bun codemode cancellation and a two-worker limit are repaired only on main. On Bun, stopping codemode or reaching a deadline could wait for a non-interruptible built-in to return. Main makes the caller return promptly and limits live workers to two across sessions, counting canceled workers until they actually exit. It does not make every built-in interruptible.

Channel: main-unreleased. Half: defect. Date: 2026-10-13.

Operator consequence: Treat repeated codemode aborts/timeouts as a responsiveness and resource concern on 1.2.0, especially standalone Bun builds. Watch for a containing release; distinguish a returned cancellation from the worker actually stopping.

## Receipt
- https://github.com/earendil-works/pi/commit/3daa20280f6a7c7cbe0935680c9a38fdc3863005
