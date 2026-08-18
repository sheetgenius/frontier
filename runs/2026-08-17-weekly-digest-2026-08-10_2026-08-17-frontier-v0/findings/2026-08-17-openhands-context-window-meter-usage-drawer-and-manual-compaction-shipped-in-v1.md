---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openhands-context-window-meter-usage-drawer-and-manual-compaction-shipped-in-v1
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/16311
    precision: merged_pr
---
# 2026-08-17-openhands-context-window-meter-usage-drawer-and-manual-compaction-shipped-in-v1

Context window meter, usage drawer, and manual compaction shipped in v1.13.0.

Agent Canvas gained a context-window usage meter, a usage drawer, and an operator-triggered manual compaction, contributed by @georgeglarson and merged 2026-08-10. The PR body records verification against a live agent-server 1.39.1 with compaction exercised across multiple models, and a follow-up fix in the same release (#16534) corrects how the meter ring is drawn. Documentation for it merged in OpenHands/docs #722 on 2026-08-14.

Channel: tagged-release. Ancestry: PR #16311 merge commit be636f7141095e7b45e33bead116f070a2446a6e, merged 2026-08-10T16:04:30Z. gh api repos/OpenHands/OpenHands/compare/be636f7141095e7b45e33bead116f070a2446a6e...v1.13.0 returns {"status":"ahead","ahead_by":10,"behind_by":0}. v1.13.0 is a non-prerelease GitHub release published 2026-08-13T01:57:00Z.

Operator consequence: Try it if you run long conversations. Until now compaction was something that happened to you at a threshold you could not see; the meter makes context consumption legible and the manual trigger lets you compact at a point you choose  --  before a handoff, before a long tool run  --  rather than mid-reasoning. This is the kind of instrumentation that turns an opaque budget into an operator decision, and it is worth copying in any harness you maintain yourself.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/16311
