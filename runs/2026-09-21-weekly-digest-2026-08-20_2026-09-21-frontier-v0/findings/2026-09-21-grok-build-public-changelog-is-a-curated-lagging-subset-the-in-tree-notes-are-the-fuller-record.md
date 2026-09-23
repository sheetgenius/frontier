---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-grok-build-public-changelog-is-a-curated-lagging-subset-the-in-tree-notes-are-the-fuller-record
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20260906084923/https://x.ai/build/changelog
    precision: official_docs
  - url: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/changelogs/1.0.9.md
    precision: tagged_commit_file
---
# 2026-09-21-grok-build-public-changelog-is-a-curated-lagging-subset-the-in-tree-notes-are-the-fuller-record

Public changelog is a curated, lagging subset; the in-tree notes are the fuller record. The contract names x.ai/build/changelog as the dated operator channel. In this window it trailed builds by at least 9 days and dropped a permission-default line.

Channel: docs-only. Half: defect. Date: window.

Operator consequence: Read `crates/codegen/xai-grok-shell/changelogs/<version>.md` at a pinned sync for what a version changed, not the web page. For 1.0.9 specifically, the default mode flip to auto and back happened inside one release; if you installed 1.0.9, check that new sessions start in ask. 1.0.11 made the default mode configurable ("Default permission mode for new interactive sessions is now configurable").

## Receipt
- https://web.archive.org/web/20260906084923/https://x.ai/build/changelog
- https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/changelogs/1.0.9.md
