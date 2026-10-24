---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-main-separates-openrouter-reported-total-cost-from-catalog-estimates
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/7c22a93d0ed02092142fa63823e63d76aa4e2406
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/cae8d69e572e038d584c881efd1818e40571fb7c
    precision: commit
---
# 2026-10-24-pi-coding-agent-main-separates-openrouter-reported-total-cost-from-catalog-estimates

Main separates OpenRouter reported total cost from catalog estimates. `usage.cost.totalFromProvider` identifies reported billing totals. OpenRouter Chat Completions and Anthropic Messages can use valid provider accounting for the total, including OpenRouter charges and upstream inference charges for bring-your-own-key requests. Cost components remain catalog estimates and need not sum to the total; absent or invalid accounting falls back to estimates. Missing provenance fields mean estimated, and an aggregate is provider-reported only when both parts are.

Channel: main-unreleased. Half: capability. Date: 2026-10-22.

Operator consequence: Preserve the supplied total and its provenance in dashboards and exports instead of rebuilding it from estimated components. Treat this as a pending accounting-contract improvement, not a reduction in workload cost or a 1.4.0 feature.

## Receipt
- https://github.com/earendil-works/pi/commit/7c22a93d0ed02092142fa63823e63d76aa4e2406
- https://github.com/earendil-works/pi/commit/cae8d69e572e038d584c881efd1818e40571fb7c
