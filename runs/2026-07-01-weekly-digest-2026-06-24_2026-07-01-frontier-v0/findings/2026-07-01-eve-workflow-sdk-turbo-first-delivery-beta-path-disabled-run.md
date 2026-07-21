---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-eve-workflow-sdk-turbo-first-delivery-beta-path-disabled-run
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve@0.16.2
    precision: github_release
---
# 2026-07-01-eve-workflow-sdk-turbo-first-delivery-beta-path-disabled-run

Workflow SDK "turbo first-delivery" beta path disabled; runs revert to the fully-ordered durable runtime path (channel: tagged-release, 2026-06-27). Operator consequence: Durability posture shifted toward stability over speed. Operators who observed out-of-order or fast-first delivery on the beta turbo path in prior 0.1x releases will now see fully-ordered execution; behavior/latency of durable runs changes on upgrade. Worth noting as a retreat that confirms the runtime is still churning. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve@0.16.2
