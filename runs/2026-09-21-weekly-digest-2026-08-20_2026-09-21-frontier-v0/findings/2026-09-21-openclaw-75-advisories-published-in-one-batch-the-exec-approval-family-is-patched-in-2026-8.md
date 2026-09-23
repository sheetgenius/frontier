---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openclaw-75-advisories-published-in-one-batch-the-exec-approval-family-is-patched-in-2026-8
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/security/advisories/GHSA-74gc-hg2m-79p9
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/security/advisories/GHSA-ghpx-6xwq-2w4w
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/security/advisories/GHSA-3mq7-q27j-mq7q
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/security/advisories/GHSA-wwcw-jfpp-gpxw
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/security/advisories/GHSA-rrxp-5mx8-mvhh
    precision: official_docs
---
# 2026-09-21-openclaw-75-advisories-published-in-one-batch-the-exec-approval-family-is-patched-in-2026-8

75 advisories published in one batch; the exec-approval family is patched in 2026.8.1. 75 advisories published in one batch; the exec-approval family is patched in 2026.8.1

Channel: tagged-release (patched versions named per advisory). Half: defect. Date: 2026-09-11 (all 75 published between 00:56 and 00:59 UTC).

Operator consequence: Upgrade to at least 2026.8.1. Then remove generated Allow Always entries created before the upgrade, because the advisories' own mitigation says the stored grant was broader than what you clicked. Extended-stable operators: 2026.7.35 sorts below 2026.8.1, so it falls inside the published vulnerable ranges. The advisories name only 2026.8.1 as patched. The 7.35 notes list no backport of the approval-scope PRs. Treat extended-stable as exposed unless a specific backport is named. This saves attention on one point: stable users get one upgrade target for the whole batch.

## Receipt
- https://github.com/openclaw/openclaw/security/advisories/GHSA-74gc-hg2m-79p9
- https://github.com/openclaw/openclaw/security/advisories/GHSA-ghpx-6xwq-2w4w
- https://github.com/openclaw/openclaw/security/advisories/GHSA-3mq7-q27j-mq7q
- https://github.com/openclaw/openclaw/security/advisories/GHSA-wwcw-jfpp-gpxw
- https://github.com/openclaw/openclaw/security/advisories/GHSA-rrxp-5mx8-mvhh
