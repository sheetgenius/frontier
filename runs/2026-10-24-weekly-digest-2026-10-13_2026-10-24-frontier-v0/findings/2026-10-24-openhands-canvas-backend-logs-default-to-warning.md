---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-canvas-backend-logs-default-to-warning
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/commit/39891795e0bb31494fcdbe15cfe47cec0a76f00f
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh
    precision: tagged_commit_file
---
# 2026-10-24-openhands-canvas-backend-logs-default-to-warning

Canvas backend logs default to WARNING. The launcher and Docker path choose WARNING for backend logs unless explicit settings override it. Ordinary startup output becomes quieter, including fewer INFO/access records.

Channel: tagged-release. Half: both. Date: 2026-10-23 (Canvas v1.32.0).

Operator consequence: Set the log detail required for debugging and operational collection explicitly. Reduced startup chatter saves attention, while missing routine records can increase diagnosis work if a collector silently relied on the old default.

## Receipt
- https://github.com/OpenHands/OpenHands/commit/39891795e0bb31494fcdbe15cfe47cec0a76f00f
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh
