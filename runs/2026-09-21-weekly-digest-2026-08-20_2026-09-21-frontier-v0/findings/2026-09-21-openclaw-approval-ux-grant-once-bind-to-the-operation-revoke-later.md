---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openclaw-approval-ux-grant-once-bind-to-the-operation-revoke-later
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.1
    precision: github_release
---
# 2026-09-21-openclaw-approval-ux-grant-once-bind-to-the-operation-revoke-later

Approval UX: grant once, bind to the operation, revoke later. 8.1 adds automation permissions for an exact operation that can be inspected and revoked, and that re-prompt when the job changes. It adds team operator roles, explicitly "collaboration controls, not hostile-tenant isolation". In 8.2, a permission change applies to runs already in flight and survives moving a session to a cloud worker. 9.1 makes Allow Always durable for MCP tools. 9.3 makes Claude-native Bash respect the agent exec allowlist under on-miss prompting.

Channel: tagged-release. Half: capability. Date: 2026-08-31 to 2026-09-08.

Operator consequence: Try standing grants for cron jobs in place of blanket allowlists. They are bound to the operation, which the pre-8.1 path-only grants (GHSA-74gc) were not. Do not treat operator roles as a tenant boundary.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.1
