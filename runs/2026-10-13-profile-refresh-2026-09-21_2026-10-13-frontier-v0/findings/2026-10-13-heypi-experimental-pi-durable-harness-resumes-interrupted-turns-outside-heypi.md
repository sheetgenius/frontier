---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-experimental-pi-durable-harness-resumes-interrupted-turns-outside-heypi
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v1.0.0/packages/durable/README.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3-L7
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L181
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/%40earendil-works%2Fpi-durable/1.2.0
    precision: official_docs
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L54-L63
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64
    precision: tagged_commit_file
---
# 2026-10-13-heypi-experimental-pi-durable-harness-resumes-interrupted-turns-outside-heypi

Experimental Pi durable harness resumes interrupted turns outside heypi. Pi's separately published durable harness persists conversations, turns and tool-call state before displaying them and resumes from storage after interruption. Tools declared replay-safe can rerun; other interrupted tools return an interrupted result to the model. Its API is explicitly experimental. heypi persists queued work and approval state but explicitly does not replay arbitrary in-flight model execution. The upstream capability is not a heypi feature, and a pi-coding-agent version bump alone would not integrate the separate harness.

Channel: tagged-release upstream package, explicitly experimental; no heypi integration. Half: capability. Date: 2026-10-01 (pi-durable 1.0.0); package first publication 2026-09-19; 1.2.0 2026-10-12.

Operator consequence: heypi operators still need supervised restarts, stable message IDs and reconciliation of interrupted work. Evaluate pi-durable as an upstream architecture direction, not a drop-in fix. It makes bespoke turn-recovery scaffolding less defensible if its contract matures, but does not replace heypi's chat identity, policy or routing records. A tested integration and a stable upstream recovery contract would change the work operators own.

## Receipt
- https://github.com/earendil-works/pi/blob/v1.0.0/packages/durable/README.md
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3-L7
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L181
- https://registry.npmjs.org/%40earendil-works%2Fpi-durable/1.2.0
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L54-L63
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64
