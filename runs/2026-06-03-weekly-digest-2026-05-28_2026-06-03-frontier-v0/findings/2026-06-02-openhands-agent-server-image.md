---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-openhands-agent-server-image
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "1.23.1"
status: accepted
change_type: runtime
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Commit ba775c9 (2026-06-02T12:42:51Z): 'Update default agent server image to 1.23.1 (#14612)' - Container image version bump for agent runtime"
    url: https://github.com/OpenHands/OpenHands/commit/ba775c9
    precision: commit
---
# Infrastructure: Update default agent server image to 1.23.1

## What Changed

Updated default agent server container image version to 1.23.1 in agent execution infrastructure.

## Operator Implication

Operators deploying OpenHands should update their agent server container image to 1.23.1 if using default image configuration. Check release notes for this image tag for bug fixes and improvements.

## Receipt

- [Commit ba775c9 (2026-06-02T12:42:51Z): 'Update default agent server image to 1.23.1 (#14612)' - Container image version bump for agent runtime](https://github.com/OpenHands/OpenHands/commit/ba775c9)
