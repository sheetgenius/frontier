---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-the-cli-notes-report-a-model-id-fix-without-naming-the-first-fixed-artifact
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
  - url: https://cursor.com/docs/cli/changelog#sep-28-2026
    precision: official_docs
---
# 2026-10-13-cursor-the-cli-notes-report-a-model-id-fix-without-naming-the-first-fixed-artifact

The CLI notes report a model-ID fix without naming the first fixed artifact. Cursor's v2026.09.28 notes report that --model and /model now select the requested model when its ID starts with another model's ID. They describe earlier silent selection of the shorter base model. The first fixed downloadable CLI build has not been established.

Channel: docs-only (fixed downloadable build not established). Half: defect. Date: 2026-09-28 note.

Operator consequence: Verify the actual model in an affected evaluation before accepting an upgrade as the fix. A note that names the artifact or a traced artifact comparison would settle the build mapping. Do not recommend 2026.09.28-64d2043 as a proven fixed version from this evidence.

## Receipt
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://cursor.com/docs/cli/changelog#sep-28-2026
