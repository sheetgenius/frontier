---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-export-and-copy-refuse-destinations-that-already-exist
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
    precision: official_docs
---
# 2026-10-13-grok-build-export-and-copy-refuse-destinations-that-already-exist

Export and copy refuse destinations that already exist. Export/copy commands stop replacing an existing destination. The correction protects prior files but changes workflows that intentionally reused names.

Channel: tagged-release (stable 1.0.52). Half: defect. Date: 2026-10-11 (1.0.52 note).

Operator consequence: Use 1.0.52 and handle destination refusal in export automation. Choose a new destination or deliberately resolve the existing file rather than assuming overwrite is part of the command.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
