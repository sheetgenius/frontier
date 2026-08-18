---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-openhands-per-run-llm-cost-is-now-visible-in-the-activity-log-and-leaves-the
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/16351
    precision: merged_pr
---
# 2026-08-10-openhands-per-run-llm-cost-is-now-visible-in-the-activity-log-and-leaves-the

Per-run LLM cost is now visible in the Activity Log and leaves the product in an export.

Activity log export landed in v1.10.0 (PR #16234) and per-run LLM cost was added to both the Activity Log and those exports in v1.11.0 (PR #16351). Together they mean a run's cost is attributable to that run and the record can be taken out of the product as a file rather than read off a dashboard. On the Enterprise side the same window wired Export CSV buttons on the Usage & Monitoring Overview and Models tabs (Enterprise 0.41.0, OpenHands/enterprise PR #78, a link the public cannot open  --  see the Enterprise receipts finding).

Channel: tagged-release. Ancestry: PR #16351 merge commit 82bdd88269afaa5298f79a6c1f282221126d807e, merged 2026-08-06T11:25:27Z; gh api compare/82bdd88269afaa5298f79a6c1f282221126d807e...v1.11.0 returns status ahead, ahead_by 10, behind_by 0. Companion PR #16234 (activity log export) merge commit 877e56a15399822a46e62d894f362b155d220b80, merged 2026-08-03T22:13:04Z; compare/877e56a15...v1.10.0 returns status ahead, ahead_by 20, behind_by 0. Both tags are non-prerelease releases.

Operator consequence: Try it if you are trying to answer 'what did this agent cost us' with something better than a monthly invoice. Per-run cost plus export is the minimum viable evidence trail for agent spend: it survives the vendor, it can be diffed, and it can be joined to your own ticket IDs. Adopt the shape even if you do not adopt the platform  --  a harness that cannot tell you the cost of one run cannot be governed.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/16351
