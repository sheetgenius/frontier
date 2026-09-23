---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-paperclip-v2026-824-0-sandbox-capability-contract-resolves-fail-closed-managed-previews-default-to
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: medium
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0
    precision: github_release
---
# 2026-09-21-paperclip-v2026-824-0-sandbox-capability-contract-resolves-fail-closed-managed-previews-default-to

v2026.824.0: sandbox capability contract resolves fail-closed; managed previews default to Tailscale HTTPS. Providers declare capabilities, the live worker verifies them, and the server resolves the effective set as the intersection of declared, verified and configured, fail-closed. Three operator flags were deleted (`streamAgentSessionOutput`, Daytona `useSessions`, `useLogStream`); they load but are inert. Managed worktree runtimes now default to `tailscale_https` exposure when the host broker is present (`PAPERCLIP_MANAGED_RUNTIME_HTTPS=off` to opt out, `force` to fail closed). v2026.831.0 adds `PAPERCLIP_HIDDEN_SETTINGS` (hiding `company.import` also floors the API) and a managed-sandbox-only mode arrived in 824.0.

Channel: tagged-release. Half: both. Date: 2026-08-25.

Operator consequence: Delete the three inert keys; they no longer control anything and give a false reading on audit. If you run the Tailscale broker, agent branch previews are now reachable from the tailnet by default; set `off` if previews should stay loopback.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0
