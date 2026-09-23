---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openhands-provider-connections-ui-shipped-in-v1-15-0-ahead-of-the-server-api-it-works-from-v1-16-0
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: medium
evidence:
  - url: https://github.com/OpenHands/OpenHands/blob/v1.15.0/config/defaults.json
    precision: tagged_commit_file
---
# 2026-09-21-openhands-provider-connections-ui-shipped-in-v1-15-0-ahead-of-the-server-api-it-works-from-v1-16-0

Provider-connections UI shipped in v1.15.0 ahead of the server API; it works from v1.16.0 locally and v1.17.0 on cloud. v1.14.0 had the same shape with Git Sync: UI in the tag, backend not in the pinned server. It shipped that way for six days.

Channel: tagged-release. Half: capability. Date: 2026-08-21 / 2026-08-27 / 2026-09-09.

Operator consequence: Test provider connections on v1.16.0 or later only.

## Receipt
- https://github.com/OpenHands/OpenHands/blob/v1.15.0/config/defaults.json
