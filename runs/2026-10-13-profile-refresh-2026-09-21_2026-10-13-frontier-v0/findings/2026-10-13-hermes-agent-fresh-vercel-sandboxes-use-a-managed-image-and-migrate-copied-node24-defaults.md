---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-fresh-vercel-sandboxes-use-a-managed-image-and-migrate-copied-node24-defaults
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/7c799a6565dca33ad8774cb01efb17f88a8c7c43
    precision: commit
---
# 2026-10-13-hermes-agent-fresh-vercel-sandboxes-use-a-managed-image-and-migrate-copied-node24-defaults

Fresh Vercel sandboxes use a managed image and migrate copied node24 defaults. terminal.vercel_image defaults to vercel/sandbox/universal:latest for fresh sandboxes. Migration 49 removes copied node24 settings in config and the mirrored environment variable while preserving other explicit runtime choices; a retained runtime overrides the image. Restored snapshots omit both runtime and image arguments, so existing snapshots do not become the new base.

Channel: tagged-release (first stable v0.21.6). Half: both. Date: 2026-09-28.

Operator consequence: Record the resolved image or an intentional runtime pin when comparing Vercel environments across v0.21.6. Test fresh sandboxes separately from restored snapshots; they have different migration behavior.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/7c799a6565dca33ad8774cb01efb17f88a8c7c43
