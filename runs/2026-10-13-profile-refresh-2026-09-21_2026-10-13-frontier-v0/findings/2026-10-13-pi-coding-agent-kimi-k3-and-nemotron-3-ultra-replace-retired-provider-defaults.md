---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-kimi-k3-and-nemotron-3-ultra-replace-retired-provider-defaults
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/6f7551516b84278eb9da1c340c8e7bc66be1a6ba
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/28fd59086880aa6622c0ca2dfdfca31e879dab99
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/e1787702d32e0a7fd7387840c918faa4d1286187
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/49b9df48952b155937e62fed11f03ad2e15ff3c1
    precision: commit
---
# 2026-10-13-pi-coding-agent-kimi-k3-and-nemotron-3-ultra-replace-retired-provider-defaults

Kimi K3 and Nemotron 3 Ultra replace retired provider defaults. Fireworks, Together, and OpenCode Go defaults move to Kimi K3 in 0.99.0 on 29 September as older models disappear. NVIDIA moves to nvidia/nemotron-3-ultra-550b-a55b in 1.0.1 on 3 October after its prior model retires. These are additional to the recorded Codex/xAI changes.

Channel: tagged-release. Half: both. Date: 2026-10-03.

Operator consequence: Pin the provider and model in repeatable work, and rebaseline costs/evaluations when intentionally changing them. A harness patch or minor update can change an unpinned model choice.

## Receipt
- https://github.com/earendil-works/pi/commit/6f7551516b84278eb9da1c340c8e7bc66be1a6ba
- https://github.com/earendil-works/pi/commit/28fd59086880aa6622c0ca2dfdfca31e879dab99
- https://github.com/earendil-works/pi/commit/e1787702d32e0a7fd7387840c918faa4d1286187
- https://github.com/earendil-works/pi/commit/49b9df48952b155937e62fed11f03ad2e15ff3c1
