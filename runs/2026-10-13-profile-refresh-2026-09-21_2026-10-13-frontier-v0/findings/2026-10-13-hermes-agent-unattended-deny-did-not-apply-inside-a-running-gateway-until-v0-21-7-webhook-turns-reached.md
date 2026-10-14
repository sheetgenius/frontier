---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-unattended-deny-did-not-apply-inside-a-running-gateway-until-v0-21-7-webhook-turns-reached
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/8918717b1ad2b52d1389756a3581a9860b98397b
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/71ff5238ec4643ddc6bddcfbc8be4b1cdd400684
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.6/tools/approval.py#L827-L880
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L1128-L1169
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval_smart.py#L116-L131
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1665-L1700
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-unattended-deny-did-not-apply-inside-a-running-gateway-until-v0-21-7-webhook-turns-reached

Unattended deny did not apply inside a running gateway until v0.21.7: webhook turns reached the guardian model and no-notifier API requests could return unanswerable pending results. A running gateway sets HERMES_EXEC_ASK=1 process-wide, while the command gate consulted approvals.unattended_mode only when that ask flag was off. For webhook and msgraph_webhook turns, and api_server sessions with no approval notifier (non-streaming /v1/chat/completions), default smart mode therefore let the guardian judge commands that should have followed unattended policy; an APPROVE could execute them. Notifier-backed requests can wait for an approval timeout. With no notifier, the old API path returns a pending result for a request that the client cannot answer; that path does not itself wait 300 seconds. From v0.21.7 those no-notifier turns use unattended_mode before the guardian. /v1/runs and streaming chat completions with a notifier retain the API approval bridge. Interactive approvals still default to smart model review; guardian errors and empty decisions log at WARNING and escalate, without guaranteeing human approval for every tool.

Channel: tagged-release. Half: defect. Date: 2026-10-12.

Operator consequence: The prior profile overstated unattended denial in running gateways through v0.21.6. Review webhook-originated sessions on those tags for flagged commands that ran. On v0.21.7, automations formerly approved by the guardian may be blocked; add only intended command_allowlist patterns. Check config.yaml for approvals.unattended_mode: approve before upgrading. It approves commands that reach the unattended-policy branch after earlier guard checks. User denies and applicable hard floors still take precedence; isolated-container, YOLO, disabled-approval, prepared-batch, and allowlist paths are separate.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/8918717b1ad2b52d1389756a3581a9860b98397b
- https://github.com/NousResearch/hermes-agent/commit/71ff5238ec4643ddc6bddcfbc8be4b1cdd400684
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942
- https://github.com/NousResearch/hermes-agent/blob/v0.21.6/tools/approval.py#L827-L880
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L1128-L1169
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval_smart.py#L116-L131
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1665-L1700
