---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-temporal-agent-harness-main-after-0-4-0-in-window-137-deletes-the-operator-command-channel-and-the-packaged-slash
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/commit/e62c778b4abbde588204c0ac294f35d4d46bfa33
    precision: commit
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/d7a55f8855c31eb1a3281d2502f626c8a153aa44/temporal_agent_harness/web/app.py#L219-L229
    precision: tagged_commit_file
---
# 2026-09-21-temporal-agent-harness-main-after-0-4-0-in-window-137-deletes-the-operator-command-channel-and-the-packaged-slash

Main after 0.4.0 in window: #137 deletes the operator-command channel and the packaged slash commands, and makes messages first-class. Per the commit body: one inbound path. Everything goes through `send_agent_message` into `@agent.accepts` handlers. Each handler declares `mid_turn` (ENQUEUE / REJECT / ACCEPT; REJECT is the default), replacing `AgentConfig.is_message_queuing_enabled`, which is removed from AgentConfig on main. `expected_turn` is dropped from the send. `message_id` joins `turn_id` on every event. `MessageQueued`, `reply` and `error` events are deleted in favour of `message_accepted` / `message_handler_start` / `message_handler_end|error`. For approvals, the packaged `/approvals strict|safe|skip` and `/allow-tools` defaults, which let any operator-command caller reach layer zero (item 3), no longer exist. The runtime `set_approval_policy` and the `remember` cascade are unchanged (M agent_workflow.py lines 1697-1699, 1715, 1747-1767). The shim's "always" mapping is unchanged (M harness_backend.py line 301).

Channel: main-unreleased. Half: both. Date: 2026-09-17T20:22:13Z.

Operator consequence: This is a breaking wire and API change that is not in the wheel. Code written against the main README will not run on 0.4.0, and 0.4.0 clients that send `expected_turn`, read `reply` events or set `is_message_queuing_enabled` will break on the next tag. The approval surface gets narrower when it ships, which is the capability half: less to lock down. Do not write against it until a tag carries it.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/commit/e62c778b4abbde588204c0ac294f35d4d46bfa33
- https://github.com/temporal-community/temporal-agent-harness/blob/d7a55f8855c31eb1a3281d2502f626c8a153aa44/temporal_agent_harness/web/app.py#L219-L229
