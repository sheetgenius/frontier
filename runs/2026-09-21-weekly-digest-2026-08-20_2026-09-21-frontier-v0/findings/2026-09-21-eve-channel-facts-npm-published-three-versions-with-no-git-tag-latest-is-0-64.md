---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-eve-channel-facts-npm-published-three-versions-with-no-git-tag-latest-is-0-64
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://www.npmjs.com/package/eve?activeTab=versions
    precision: package_registry
---
# 2026-09-21-eve-channel-facts-npm-published-three-versions-with-no-git-tag-latest-is-0-64

Channel facts: npm published three versions with no git tag; latest is 0.64.1. For three published versions there is no tag to audit
against. The minor 0.52.0 has no release notes; 0.52.2's notes cover the gap
(ahead_by=56 vs 0.51.0).

Channel: npm (no tag). Half: defect (provenance). Date: 2026-09-04.

Operator consequence: Do not pin 0.51.1, 0.52.0, or 0.52.1; there is no
tagged source to review. Do not install `eve@beta`.

## Receipt
- https://www.npmjs.com/package/eve?activeTab=versions
