---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-plan-mode-refuses-mcp-resource-downloads-and-headless-runs-honor-no-subagents
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
    precision: official_docs
---
# 2026-10-13-grok-build-plan-mode-refuses-mcp-resource-downloads-and-headless-runs-honor-no-subagents

Plan mode refuses MCP resource downloads and headless runs honor no-subagents. Planning and unattended sessions gain documented limits that previously did not hold on these paths: plan mode rejects MCP resource downloads, and headless no-subagents is honored.

Channel: tagged-release (included in stable 1.0.52 notes). Half: defect. Date: 2026-10-09 (1.0.51 note).

Operator consequence: Re-test CI commands using --no-subagents and plans that fetch resources on 1.0.52. Move needed downloads to an explicitly authorized execution step. Treat these as specific corrected routes rather than a certification of every plan-mode action.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
