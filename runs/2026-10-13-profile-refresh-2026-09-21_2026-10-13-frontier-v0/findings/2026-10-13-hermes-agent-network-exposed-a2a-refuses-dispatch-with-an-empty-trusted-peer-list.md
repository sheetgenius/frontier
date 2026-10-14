---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-network-exposed-a2a-refuses-dispatch-with-an-empty-trusted-peer-list
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/a0cad39f5d55a2c7e2f0cbea2198358b5a3d55b0
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/a2a/security.py#L74-L115
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-network-exposed-a2a-refuses-dispatch-with-an-empty-trusted-peer-list

Network-exposed A2A refuses dispatch with an empty trusted-peer list. On a non-loopback bind, a token-authenticated A2A adapter with no trusted peers previously accepted peers after authentication. It now refuses dispatch unless peers are listed or allow-all is explicitly enabled. Loopback empty-list behavior remains compatible; bearer/peer-token authentication is still a precondition for network access.

Channel: tagged-release (first stable v0.21.6). Half: defect. Date: 2026-10-01.

Operator consequence: Populate A2A_TRUSTED_PEERS before upgrading exposed adapters to v0.21.6+. An empty list is no longer permission for every authenticated peer; intentional allow-all requires an explicit setting.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/a0cad39f5d55a2c7e2f0cbea2198358b5a3d55b0
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/a2a/security.py#L74-L115
