---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-auto-routing-now-follows-team-model-blocks-in-the-hosted-web-notes
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/web#sep-21-2026
    precision: official_docs
  - url: https://cursor.com/docs/cursor-router
    precision: official_docs
---
# 2026-10-13-cursor-auto-routing-now-follows-team-model-blocks-in-the-hosted-web-notes

Auto routing now follows team model blocks in the hosted web notes. Vendor notes say Auto no longer routes to a team's blocked Cursor-served model or one still under release delay. Before this correction, requests may have reached those models. Hidden underlying-model attribution in Router's Balance and Intelligence modes is a separate display behavior, not evidence of explicit CLI model substitution.

Channel: docs-only (hosted routing correction). Half: defect. Date: week of 2026-09-21.

Operator consequence: Inspect relevant usage exports rather than assuming every blocked model received data. Enable underlying-model display where Router attribution matters. This hosted correction establishes no agent-CLI fixed-build guarantee.

## Receipt
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://cursor.com/docs/release-notes/web#sep-21-2026
- https://cursor.com/docs/cursor-router
