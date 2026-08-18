---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-experimental-cloud-sync-removed-company-import-export-is-the-only
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/10507
    precision: merged_pr
---
# 2026-08-17-paperclip-experimental-cloud-sync-removed-company-import-export-is-the-only

Experimental Cloud Sync removed; company Import/Export is the only supported data-movement path.

The flag-gated host-to-host Cloud Sync transport is gone and migration 0196 drops its state tables. Import/Export takes over as the single way to move a company between instances, with no reachability or cross-instance auth requirement: bundles at schemaVersion 6 carry labels, blockers, issue documents, work products, monitors, and every attachment as content-addressed sha256 blobs verified before a single row is written; imports run as durable async jobs with an integrity guard; the upload cap is 1 GB, configurable via the new PAPERCLIP_IMPORT_ZIP_MAX_BYTES. Company data is stated as untouched -- only the experimental transport's own bookkeeping is dropped.

Channel: tagged-release. Ancestry: PR #10507 merge commit 916c13501f80c7d1d659b89e4a06dc47366aa80f, merged 2026-07-30T18:37:00Z, base master. gh api repos/paperclipai/paperclip/compare/916c1350...v2026.817.0 -> status=ahead. Not contained in any earlier stable: the previous stable v2026.722.0 was published 2026-07-22T23:05:41Z, eight days before the merge. Listed under 'Breaking Changes' in the v2026.817.0 release body.

Operator consequence: If you enabled experimental Cloud Sync, stop depending on it before upgrading; the tables go away on startup with migration 0196 and there is no in-place replacement, only export-then-import. This is also a clean illustration of the rule: the code merged on 2026-07-30 and stopped being a merge-only fact only on 2026-08-17.

## Receipt
- https://github.com/paperclipai/paperclip/pull/10507
