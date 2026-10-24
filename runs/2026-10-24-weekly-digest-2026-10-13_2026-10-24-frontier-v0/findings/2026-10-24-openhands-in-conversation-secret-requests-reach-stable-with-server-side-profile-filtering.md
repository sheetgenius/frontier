---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-in-conversation-secret-requests-reach-stable-with-server-side-profile-filtering
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/services/secret-request.ts
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/conversation-mutation-utils.ts
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/event_service.py
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/routers.py
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/commit/04f6dd5fcc428b816803b040943a2b7bbc9d14b8
    precision: commit
---
# 2026-10-24-openhands-in-conversation-secret-requests-reach-stable-with-server-side-profile-filtering

In-conversation secret requests reach stable, with server-side profile filtering. An agent can ask for a named credential in the conversation. The UI reuses an existing saved secret when found or presents an inline entry card; v1.33.0 masks secret input. For local backends it sends a lookup reference to update the conversation. Both local `update_secrets` and Docker's corresponding route filter names through the launched profile's `allows_secret` before materialization. The UI's saved-secret discovery is unscoped, however, and a successful update response can follow server filtering that removed the requested name. The Cloud update helper takes a separate no-op path. A displayed success is not evidence that the credential became effective.

Channel: tagged-release. Half: capability. Date: 2026-10-19 (Canvas v1.28.0); 2026-10-23 (masking in v1.33.0).

Operator consequence: Retire the profile's claim that the request UI is unreleased. On the matched bundle, test a saved-but-excluded secret and inspect effective credentials on both local and Docker conversations before treating this as an approval boundary. Source inspection supports filtering, not a bypass through this request endpoint; the terminal alias in section 3 is a different path. The useful capability is asking for missing access at the point of need, reducing trips through Settings without silently changing the profile's intended scope.

## Receipt
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/services/secret-request.ts
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/conversation-mutation-utils.ts
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/event_service.py
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/routers.py
- https://github.com/OpenHands/OpenHands/commit/04f6dd5fcc428b816803b040943a2b7bbc9d14b8
