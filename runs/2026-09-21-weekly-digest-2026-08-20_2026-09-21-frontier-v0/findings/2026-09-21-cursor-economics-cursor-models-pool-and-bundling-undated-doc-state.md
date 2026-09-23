---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-cursor-economics-cursor-models-pool-and-bundling-undated-doc-state
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: medium
evidence:
  - url: https://cursor.com/docs/models-and-pricing.md
    precision: official_docs
---
# 2026-09-21-cursor-economics-cursor-models-pool-and-bundling-undated-doc-state

Economics: Cursor Models pool and bundling (undated doc state). No dated in-window pricing entry exists on the changelog. Lane C holds claims that OpenAI announced ending Cursor's model access with a proposed 12 November cutoff (https://x.com/mntruell/status/2093532254006063557, 2026-08-29) and that a SuperGrok Heavy bundle allowance was cut. Neither appears on a Cursor primary surface I could read; the models page still lists OpenAI models with no end date.

Channel: docs-only. Half: both. Date: not datable from primary surfaces.

Operator consequence: Watch: a models-page end date or changelog line for OpenAI models settles the cutoff. If your Cursor workflows depend on GPT-family models, inventory them now; the only primary signal is that the vendor's included-usage pool favors its own and SpaceXAI models.

## Receipt
- https://cursor.com/docs/models-and-pricing.md
