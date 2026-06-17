---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-openhands-cascade-delete-org
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted_signal
change_type: reliability
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Commit 82744a0 (2026-06-03T18:20:13Z): 'Cascade-delete sole-org requester on DELETE /api/organizations (#14617)' - Modifies org_store.py, org_service.py with preflight orphan detection, foreign key cl"
    url: https://github.com/OpenHands/OpenHands/commit/82744a0
    precision: commit
---
# Operational: Cascade-delete sole-org requester on DELETE /api/organizations

## What Changed

Organization deletion now cascade-deletes user when requester is sole-org member (personal org), enabling re-onboarding on next login. Safeguards against orphaning multi-org users by rejecting deletion if other members would lose all org affiliations.

## Operator Implication

Operators should understand that DELETE /api/organizations now deletes the requesting user if they only belong to that organization (personal org). Database cascade logic requires careful backup before org deletion. Multi-org users remain protected from accidental data loss.

## Receipt

- [Commit 82744a0 (2026-06-03T18:20:13Z): 'Cascade-delete sole-org requester on DELETE /api/organizations (#14617)' - Modifies org_store.py, org_service.py with pr](https://github.com/OpenHands/OpenHands/commit/82744a0)
