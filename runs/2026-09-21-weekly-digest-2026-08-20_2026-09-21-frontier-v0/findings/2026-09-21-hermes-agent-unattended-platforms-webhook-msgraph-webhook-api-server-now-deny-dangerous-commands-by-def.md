---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-hermes-agent-unattended-platforms-webhook-msgraph-webhook-api-server-now-deny-dangerous-commands-by-def
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/ef71f2cad8b43628594a34f24755e726cc316432
    precision: commit
---
# 2026-09-21-hermes-agent-unattended-platforms-webhook-msgraph-webhook-api-server-now-deny-dangerous-commands-by-def

Unattended platforms (webhook, msgraph_webhook, api_server) now deny dangerous commands by default. Before v2026.8.31, a webhook session hitting a dangerous command sat for the full approvals.timeout with nobody able to answer (#37284). Now webhook, msgraph_webhook, and api_server resolve instantly through `unattended_mode` (deny | approve), mirroring `cron_mode`.

Channel: tagged-release. Half: defect. Date: commit 2026-08-30; tagged 2026-08-31.

Operator consequence: Webhook and API-server automations that previously stalled will now fail fast with a BLOCKED result. Do not set `unattended_mode: approve` to make them pass; that auto-approves every flagged command from a caller who authenticated only with a webhook secret. Use `command_allowlist` pattern keys instead (honored when unattended as of v2026.9.21).

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/ef71f2cad8b43628594a34f24755e726cc316432
