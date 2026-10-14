---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-v2026-1005-0-defers-optional-personal-app-consent-until-the-tool-is-used
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/GENERIC-REMOTE-MCP.md#L65-L80
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/2de43fc9094c94f3f85a5f5429bcd77a7bb8e005
    precision: commit
---
# 2026-10-13-paperclip-v2026-1005-0-defers-optional-personal-app-consent-until-the-tool-is-used

v2026.1005.0 defers optional personal-app consent until the tool is used. Optional personal apps on shared agents no longer trigger run-start connection warnings for unrelated work. Cached installed tools stay discoverable, but invocation uses the run responsible user and cannot substitute another person personal grant. Missing consent returns user_authorization_required and an inline connection request; unrelated work can continue. Disabled or uninstalled apps remain unavailable.

Channel: tagged-release. Half: capability. Date: 2026-10-06.

Operator consequence: Keep consent at the point the app is needed instead of making every user connect every optional app before a task starts. Review the inline request as that user authority boundary. This removes an unnecessary serial interruption while retaining identity checks at actual use.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/GENERIC-REMOTE-MCP.md#L65-L80
- https://github.com/paperclipai/paperclip/commit/2de43fc9094c94f3f85a5f5429bcd77a7bb8e005
