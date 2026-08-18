---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-paperclip-the-audit-page-and-the-activity-list-merged-into-one-attributed
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/10838
    precision: merged_pr
---
# 2026-08-10-paperclip-the-audit-page-and-the-activity-list-merged-into-one-attributed

The Audit page and the Activity list merged into one attributed feed.

The separate basic Activity list and Audit page became a single Activity page built on the audit feed: full history, filters, a scope toggle for all actors versus agent actions only, and a per-agent audit tab on agent detail. Privileged controls are hidden from members without the audit permission. #10843 makes cross-task agent writes carry attribution, audit receipts, and denial messages that say what to do about them.

Channel: tagged-release. Ancestry: PR #10838 merge commit 8142e54150f263815100e52cc3db43b16d630122; compare -> ahead, ahead_by=70, behind_by=0. PR #10831 merge commit 68ddd6a7a -> ahead. PR #10843 merge commit e8ae5286e -> ahead. All base master, all contained in v2026.817.0.

Operator consequence: This is the read surface for the question the 2026-07-27 harvest carried forward -- whether Paperclip's audit trails are queryable by an operator or only written. They are queryable now. Pair it with the default-open issue-write change above: broader agent write authority landed in the same release as the page that lets you see who used it.

## Receipt
- https://github.com/paperclipai/paperclip/pull/10838
