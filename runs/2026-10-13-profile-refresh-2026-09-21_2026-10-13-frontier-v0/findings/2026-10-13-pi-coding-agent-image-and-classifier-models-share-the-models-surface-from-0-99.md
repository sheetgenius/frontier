---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-image-and-classifier-models-share-the-models-surface-from-0-99
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/a328aa89ad6e6dc5c5628ff896769532ed3d29df
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v0.99.0/packages/ai/CHANGELOG.md#L5-L9
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-image-and-classifier-models-share-the-models-surface-from-0-99

Image and classifier models share the Models surface from 0.99.0. pi-ai unifies image models with Provider/Models, adds provider-neutral classifier operations, removes the separate ImagesModels collection and factories and old plural image types, requires type: image on image models, and moves generated model data to version 6. Existing unqualified reads remain chat-only.

Channel: tagged-release. Half: both. Date: 2026-09-29.

Operator consequence: SDK consumers must migrate to unified Models/Provider operations and regenerate compatible model data. Do not treat the coding-agent release body as a complete SDK migration guide.

## Receipt
- https://github.com/earendil-works/pi/commit/a328aa89ad6e6dc5c5628ff896769532ed3d29df
- https://github.com/earendil-works/pi/blob/v0.99.0/packages/ai/CHANGELOG.md#L5-L9
