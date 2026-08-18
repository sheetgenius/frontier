---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-openhands-openhands-enterprise-shipped-0-36-1-to-0-41-0-with-a-changelog-whose
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/docs/pull/699
    precision: merged_pr
---
# 2026-08-10-openhands-openhands-enterprise-shipped-0-36-1-to-0-41-0-with-a-changelog-whose

OpenHands Enterprise shipped 0.36.1 to 0.41.0 with a changelog whose every receipt 404s.

Enterprise release notes jumped from 0.36.1 (added 2026-08-03) to 0.41.0 (added 2026-08-07)  --  four days, and no notes for anything between. The 0.41.0 entry covers the Agent Canvas rollout into Enterprise (homepage banner, chart image bumped to Agent Canvas 1.9.0 then 1.10.0), GLM 5.2 as the SaaS default, Codex credential pre-flight and validation, a serialized-writes fix for a lost-write race on secrets (OHE-3052), pod security context propagation from runtime-api warm configs to sandbox start, and an idempotency fix on POST /api/organizations/provision-user (OHE-2980). Every one of those items is cited as a pull request in OpenHands/enterprise or OpenHands/runtime-api. Both repositories are private; all of those links return 404 to the public. The only cited repository a reader can open is OpenHands/OpenHands-Cloud.

Channel: docs-only. Ancestry: OpenHands/docs PR #699, merge commit 67a568a3ced444d6517477ff5bab23f619025ed9, merged 2026-08-07T20:35:17Z, single file enterprise/release-notes.mdx, +70 lines. Channel is docs-only by construction: the code repositories it describes are not public, so no ancestry can be established for any item in it. Link resolution: gh api repos/OpenHands/enterprise -> 404; gh api repos/OpenHands/runtime-api -> 404; unauthenticated curl of https://github.com/OpenHands/enterprise/pull/89 -> HTTP 404; curl of https://github.com/OpenHands/runtime-api/pull/685 -> HTTP 404.

Operator consequence: Study, but do not treat it as a record. For Enterprise customers this is now a vendor assertion with the shape of a changelog: it names fixes to secrets handling and sandbox pod security context  --  exactly the items you would want to verify  --  and hands you links that resolve to nothing. If you run Enterprise, ask your account team for the diff or the advisory behind OHE-3052 and OHE-2980 rather than accepting the summary, and note that going private is what made the release notes unverifiable, not a decision anyone announced.

## Receipt
- https://github.com/OpenHands/docs/pull/699
