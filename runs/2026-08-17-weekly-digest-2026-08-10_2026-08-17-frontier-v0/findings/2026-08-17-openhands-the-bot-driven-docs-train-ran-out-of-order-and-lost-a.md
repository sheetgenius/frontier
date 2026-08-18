---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openhands-the-bot-driven-docs-train-ran-out-of-order-and-lost-a
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/docs/pull/712
    precision: merged_pr
---
# 2026-08-17-openhands-the-bot-driven-docs-train-ran-out-of-order-and-lost-a

The bot-driven docs train ran out of order and lost a version.

Documentation for this release line is produced by an agent (all-hands-bot) opening one PR per release, and in this window the train desynchronized from the releases it describes. v1.13.0's docs merged at 00:35 on 2026-08-14; v1.10.0's and v1.11.0's merged twelve hours later the same day, nine and seven days after their releases. v1.12.0's docs PR (#712, opened 2026-08-10, with a duplicate #707 also open) was never merged and was still open when the window closed. v1.14.0, the release GitHub currently marks Latest, has no docs PR at all. v1.7.0's docs landed five days after the release. So docs.openhands.dev describes v1.13.0 features while omitting v1.12.0's and v1.14.0's, and it acquired v1.13.0's documentation before v1.10.0's.

Channel: docs-only. Ancestry: gh api search/issues over repo:OpenHands/docs for 'update documentation for OpenHands' in title: #722 (v1.13.0) merged 2026-08-14T00:35:58Z; #714 (v1.11.0) merged 2026-08-14T12:51:14Z; #693 (v1.10.0) merged 2026-08-14T12:50:55Z; #712 (v1.12.0) state=open, draft=false, created 2026-08-10T13:38:21Z, still open at window close; #684 (v1.9.0) merged 2026-08-04T17:57:52Z; #675 (v1.7.0) merged 2026-08-03T17:38:23Z for a release published 2026-07-29. A search for v1.14.0 across repo:OpenHands/docs returns zero results. All authored by all-hands-bot.

Operator consequence: Do not use the docs as the version-of-record. If you are evaluating whether a feature exists in the build you run, check the release notes and the code at the tag, not docs.openhands.dev  --  the docs can be up to nine days behind, can describe a newer release before an older one, and can skip a version entirely. The deeper lesson for anyone automating their own docs: a per-release bot PR gives you the appearance of a synchronized changelog with none of the ordering guarantees, because nothing merges the queue in sequence.

## Receipt
- https://github.com/OpenHands/docs/pull/712
