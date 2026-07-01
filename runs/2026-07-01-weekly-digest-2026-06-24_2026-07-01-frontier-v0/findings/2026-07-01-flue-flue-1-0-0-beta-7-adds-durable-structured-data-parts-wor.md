---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-flue-flue-1-0-0-beta-7-adds-durable-structured-data-parts-wor
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: medium
evidence:
  - url: https://github.com/withastro/flue/blob/v1.0.0-beta.7/CHANGELOG.md
    precision: official_changelog
---
# 2026-07-01-flue-flue-1-0-0-beta-7-adds-durable-structured-data-parts-wor

flue 1.0.0-beta.7 adds durable structured data parts: workflows and tools can emit validated JSON activity via emitData(), surfaced to React as AI SDK-compatible data-* message parts. (channel: preview-or-beta, 2026-06-25). Operator consequence: New API surface for the harness: tools/workflows can now emit validated, persisted structured data (emitData()) that flows to clients as typed data-* parts. Operators evaluating Flue's tool/skill primitives should study this as a stabilizing pattern for structured agent output, but it is still beta and paired with the beta.8 conversation-model rework, so treat as direction, not settled API. Tag commit 54f95e7. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/withastro/flue/blob/v1.0.0-beta.7/CHANGELOG.md
