---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-temporal-agent-harness-the-caller-s-agentconfig-approval-policy-wins-over-the-agent-s-default-dangerously-skip
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1282-L1289
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L71-L114
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1601-L1611
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/slash_commands.py#L20
    precision: tagged_commit_file
---
# 2026-09-21-temporal-agent-harness-the-caller-s-agentconfig-approval-policy-wins-over-the-agent-s-default-dangerously-skip

The caller's `AgentConfig.approval_policy` wins over the agent's default; `dangerously_skip_all_approvals` is layer zero; relaxing the live policy releases already-parked calls. Answers operator questions 2 and 3. Anyone who can start the workflow with a Temporal client can pass `AgentConfig(approval_policy=ToolApprovalPolicy.dangerously_skip_all())` and the agent author's default is ignored; the runner has no floor the author can set. The packaged web app does not expose this: `POST /api/sessions` at 0.4.0 builds `AgentConfig(is_message_queuing_enabled=...)` only (T/temporal_agent_harness/web/app.py#L224-L236), so a caller who reaches the agent through the HTTP API cannot choose the startup policy. But at 0.4.0 the same caller can `POST /api/operator-commands` (app.py#L304-L309) with `/approvals skip`, a packaged default command, which swaps the live policy to layer zero and releases every parked call. The operator who relaxes the policy is told only "Approvals set to **skip**." (slash_commands.py#L319); the released calls appear afterward on the event stream as `tool_approval_resolved` with the updated-policy reason. There is no preview of what is about to run. The capability half: the policy is a small serializable object with an honest name for the dangerous layer, a caller who wants more gating than the author chose can get it, and approvals are deliberately kept off the agent-to-agent channel (agent_workflow.py#L1486-L1500) so a parent agent cannot approve its child's gated calls.

Channel: preview-or-beta (library, in the 0.4.0 wheel). Half: both. Date: present at 0.4.0; unchanged at d7a55f8855.

Operator consequence: On 0.4.0, treat Temporal namespace access and HTTP reachability of the packaged server as approval authority: either can turn gating off for a live session. Before relaxing a policy, read `pending_approvals` on `/api/status/{id}` (or `/status`) because every one the new policy allows runs immediately. On main (item 5) the packaged `/approvals` and `/allow-tools` commands are deleted, which removes the HTTP route to layer zero unless an agent author writes a handler that calls `set_approval_policy`. The startup override by a Temporal client is unchanged there.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1282-L1289
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L71-L114
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1601-L1611
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/slash_commands.py#L20
