---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-remote-control-adds-phone-direction-of-local-agents-while-two-vendor-descriptions-disagree
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/changelog/remote-control-local-agents
    precision: official_docs
  - url: https://cursor.com/docs/cloud-agent/mobile#remote-control
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/cloud-agents#sep-21-2026
    precision: official_docs
---
# 2026-10-13-cursor-remote-control-adds-phone-direction-of-local-agents-while-two-vendor-descriptions-disagree

Remote Control adds phone direction of local agents while two vendor descriptions disagree. Cursor's October 6 announcement lets the iOS app view and reply to desktop-local agents after pairing approval. It says the new path does not require Cloud Agents and defaults on outside Enterprise. The same-name documentation describes an older cloud-loop flow with different opt-in rules. The texts disagree on loop placement, defaults and the Teams admin gate; client behavior was not probed.

Channel: docs-only (dated announcement; no client version established for this path). Half: both. Date: 2026-10-06.

Operator consequence: Review paired devices and local run modes. Enterprise admins have a named Remote Control setting; a Teams-wide off switch for the new path is not established. Test whether the documented Self-Hosted switch affects it before treating that switch as a control. Phone pairing expands who can direct local work without proving any new tool containment.

## Receipt
- https://cursor.com/changelog/remote-control-local-agents
- https://cursor.com/docs/cloud-agent/mobile#remote-control
- https://cursor.com/docs/release-notes/cloud-agents#sep-21-2026
