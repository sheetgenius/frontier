---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-session-sharing-has-an-explicit-destination-setting
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/cea257439d5666ad6a987c065eb3ab0e230a135d
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/settings.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/sessions.md
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-session-sharing-has-an-explicit-destination-setting

Session sharing has an explicit destination setting. `sessionShareDestination` selects `auto`, `gist` or `radius`. The default remains `auto`: an existing Radius session determines that route; otherwise sharing uses a GitHub gist. An explicit gist selection bypasses Radius, and an explicit Radius selection without authentication fails instead of silently falling back. This was pending in the dated profile and is now released.

Channel: tagged-release. Half: both. Date: 2026-10-15.

Operator consequence: Set a destination deliberately for a team workflow instead of letting login state choose the upload service. Review the exported transcript before upload; selecting a destination is routing control, not redaction or a new permission boundary. The setting removes wrapper logic for destination selection while leaving disclosure judgment with the operator.

## Receipt
- https://github.com/earendil-works/pi/commit/cea257439d5666ad6a987c065eb3ab0e230a135d
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/settings.md
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/sessions.md
