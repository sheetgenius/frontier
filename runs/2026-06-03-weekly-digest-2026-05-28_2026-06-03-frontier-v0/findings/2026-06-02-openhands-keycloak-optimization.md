---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-openhands-keycloak-optimization
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: reliability
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Commit 8fdf41d (2026-06-02T22:04:19Z): 'Avoid Keycloak full scan in Resend sync (#14560)' - Authentication service performance optimization"
    url: https://github.com/OpenHands/OpenHands/commit/8fdf41d
    precision: commit
---
# Performance: Avoid Keycloak full scan in Resend sync

## What Changed

Optimized authentication sync operation to avoid full Keycloak scan during Resend sync, improving performance of authentication service operations.

## Operator Implication

Operators may see improved authentication sync performance after this change, as full Keycloak scans are now avoided during Resend sync operations.

## Receipt

- [Commit 8fdf41d (2026-06-02T22:04:19Z): 'Avoid Keycloak full scan in Resend sync (#14560)' - Authentication service performance optimization](https://github.com/OpenHands/OpenHands/commit/8fdf41d)
