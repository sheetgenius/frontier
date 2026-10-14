---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-experimental-dynamic-schedules-activate-immediately-and-payload-edits-transfer-creator-ide
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/bc101b508c2ac7af8239690e1ce8aa4697c6a6e8
    precision: commit
  - url: https://github.com/vercel/eve/commit/84793edce6d9f99b4bfbded59a170b3c98c2fcc5
    precision: commit
  - url: https://github.com/vercel/eve/commit/14f2af0f993af050b4b3bd8b0cc6476701829574
    precision: commit
  - url: https://github.com/vercel/eve/releases/tag/eve%400.74.0
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.75.0
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.76.0
    precision: github_release
---
# 2026-10-13-eve-experimental-dynamic-schedules-activate-immediately-and-payload-edits-transfer-creator-ide

Experimental dynamic schedules activate immediately and payload edits transfer creator identity. The opt-in eve/experimental/schedules export supplies model-callable operations with per-operation approval, prepared-payload checking and creator-bound execution; production scheduling uses Vercel. From 0.75.0 creation accepts no initial disabled state: schedules are active, or completed if a one-time occurrence is past. From 0.76.0 timing and complete payload can be updated; replacing payload makes the updater the creator, and custom providers must implement update.

Channel: tagged-release. Half: both. Date: 2026-10-08 (eve@0.74.0 and 0.75.0), 2026-10-09 (eve@0.76.0).

Operator consequence: Try autonomous scheduling with explicit creation authority and inspect owner changes on payload updates. Do not assume a staged-disabled creation flow; disable is an operation after creation. Treat the export as released experimental capability despite missing dedicated docs, and migrate custom providers.

## Receipt
- https://github.com/vercel/eve/commit/bc101b508c2ac7af8239690e1ce8aa4697c6a6e8
- https://github.com/vercel/eve/commit/84793edce6d9f99b4bfbded59a170b3c98c2fcc5
- https://github.com/vercel/eve/commit/14f2af0f993af050b4b3bd8b0cc6476701829574
- https://github.com/vercel/eve/releases/tag/eve%400.74.0
- https://github.com/vercel/eve/releases/tag/eve%400.75.0
- https://github.com/vercel/eve/releases/tag/eve%400.76.0
