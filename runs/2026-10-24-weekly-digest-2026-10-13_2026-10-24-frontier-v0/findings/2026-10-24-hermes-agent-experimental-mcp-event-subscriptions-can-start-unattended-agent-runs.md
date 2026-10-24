---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-experimental-mcp-event-subscriptions-can-start-unattended-agent-runs
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/01b6651bcf53233e5ebe4bafa1c94d821073caa0
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/features/mcp.md#L1027-L1081
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/gateway/platforms/webhook_mcp_events.py
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-experimental-mcp-event-subscriptions-can-start-unattended-agent-runs

Experimental MCP event subscriptions can start unattended agent runs. Opt-in `events: true` adds `list_event_types`, `subscribe_event` and `unsubscribe_event`. Each approved subscription creates a separately signed dynamic webhook route; event occurrences start unattended runs while the gateway is running. The experimental contract includes HTTPS callbacks, event-ID deduplication, renewal and lapse handling. Poll/push delivery and secondary multiplexed-profile subscriptions are unsupported. This implements a working-group draft, not a finalized general MCP standard.

Channel: tagged-release. Half: capability. Date: 2026-10-23.

Operator consequence: Review the full unattended instructions and delivery destination at subscription time. Test duplicate events, revocation and reconnect/lapse behavior before relying on it. Event delivery can replace a polling wrapper, while the durable human choice is which incoming events may trigger which effects.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/01b6651bcf53233e5ebe4bafa1c94d821073caa0
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/features/mcp.md#L1027-L1081
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/gateway/platforms/webhook_mcp_events.py
