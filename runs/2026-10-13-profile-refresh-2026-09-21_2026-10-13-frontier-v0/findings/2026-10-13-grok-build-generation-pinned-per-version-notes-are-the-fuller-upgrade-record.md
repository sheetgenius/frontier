---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-generation-pinned-per-version-notes-are-the-fuller-upgrade-record
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.41.external.md?generation=1790112725279394
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
    precision: official_docs
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell-base/src/util/changelog.rs#L1-L13
    precision: tagged_commit_file
  - url: https://x.ai/changelog/build
    precision: official_docs
---
# 2026-10-13-grok-build-generation-pinned-per-version-notes-are-the-fuller-upgrade-record

Generation-pinned per-version notes are the fuller upgrade record. The per-version external Markdown is the fuller readable record for current builds. The old instruction to read in-tree notes no longer reaches stable 1.0.52. The live page read on 2026-10-14 corroborates the reported omissions; its exact 2026-10-13 state was not independently recovered. That later observation does not establish a new in-window catch-up event.

Channel: docs-only (moving web page) and versioned notes for shipped builds. Half: defect. Date: 2026-10-13 researcher observation; live-page corroboration 2026-10-14, exact historical page unrecovered.

Operator consequence: Read each versioned note between your installed version and the target, including cumulative blocks, or use /release-notes. Record generation pins for historical comparisons. Do not use the curated web page alone for security triage.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.41.external.md?generation=1790112725279394
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell-base/src/util/changelog.rs#L1-L13
- https://x.ai/changelog/build
