---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-gateway-restart-recovery-and-service-ownership-receive-separate-repairs
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/79b3b7243535d02c785a4ffac6ae1cb9fa54f47b
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/gateway/host_rendezvous.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/commit/f02efc45397ba27a66db28066b536fa55f77f8a8
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/gateway_service_owner.py
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-gateway-restart-recovery-and-service-ownership-receive-separate-repairs

Gateway restart recovery and service ownership receive separate repairs. Gateway host identity distinguishes a previous boot's recycled PID from the live owner. An unreadable boot epoch is unprovable and leaves the owner check to decide, repairing supervised restart refusal from v0.22.2. Separately, v0.22.3 prevents a scratch HOME/HERMES_HOME from stopping, restarting or adopting another install's systemd gateway.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: On a shared bot host, test supervised reboot recovery and verify the service's pinned home before running scratch installations or test gateways. A throwaway home is not itself a service-isolation boundary. These repairs remove restart and ownership chores without certifying deployment recovery.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/79b3b7243535d02c785a4ffac6ae1cb9fa54f47b
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/gateway/host_rendezvous.py
- https://github.com/NousResearch/hermes-agent/commit/f02efc45397ba27a66db28066b536fa55f77f8a8
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/gateway_service_owner.py
