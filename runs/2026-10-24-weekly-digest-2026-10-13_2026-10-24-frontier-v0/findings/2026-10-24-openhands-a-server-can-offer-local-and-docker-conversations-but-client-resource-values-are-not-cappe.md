---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-a-server-can-offer-local-and-docker-conversations-but-client-resource-values-are-not-cappe
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/77c6ee584101b929fbb50b7b09a66d3a5a0a1053
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/5966c781ed014efc96c028a99bddd4ff78426741
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/c7225f7dc9e506a914e33fd0b95e3146c1fdea6a
    precision: commit
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/config.py#L190-L198
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L506-L511
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/docs/blob/339de53ec95a6b85b5b0f61973aa3ed2e013a91f/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx
    precision: tagged_commit_file
---
# 2026-10-24-openhands-a-server-can-offer-local-and-docker-conversations-but-client-resource-values-are-not-cappe

A server can offer local and Docker conversations, but client resource values are not capped. `OH_CONVERSATION_RUNTIME_SELECTABLE=1` lets requests choose local or Docker execution on the same server, while `OH_CONVERSATION_RUNTIME` remains the default. The feature requires the Docker setup and a configured secret key. Request `container.memory` and `container.cpus` replace the server defaults rather than being bounded by them. Separately, `start_child_conversation` gets a pluggable launcher, and the Enterprise backend contains support for children of Cloud parents. Enterprise 1.79.0 defaults `enable_child_conversation_launcher` to false; enabling it requires `OH_ENABLE_CHILD_CONVERSATION_LAUNCHER`, `web_url`, sandbox images containing the tool, and compatible Canvas handling. A source release alone does not enable hosted launching. These are distinct from the existing delegated-agent tool set. [Released SDK code also forwards configured OTEL/Laminar environment into conversation containers](https://github.com/OpenHands/software-agent-sdk/commit/4b8cb431a66c1f4b813d6c9c0181ce63a4e30d0a), so the container is not intended to contain no telemetry credentials.

Channel: tagged-release. Half: both. Date: 2026-10-19 (child launcher); 2026-10-21 (runtime choice).

Operator consequence: On Canvas v1.33.0 with SDK 1.58.1, select the runtime deliberately and pin the inner image. If multiple users can start work, enforce resource ceilings outside these request defaults; otherwise any authorized starter can request a larger container. Inspect the bind, container-to-host reachability and inner environment. The guide says selectable mode changes the bind automatically, but Canvas v1.33.0 only checks a Docker default in both bind and host-alias selection. Configure and verify those paths explicitly for selectable mode. Per-conversation isolation and hosted child orchestration delete useful custom glue, while resource authority and credential acceptance remain operator work. Cloud serving support was not established here.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/77c6ee584101b929fbb50b7b09a66d3a5a0a1053
- https://github.com/OpenHands/software-agent-sdk/commit/5966c781ed014efc96c028a99bddd4ff78426741
- https://github.com/OpenHands/enterprise/commit/c7225f7dc9e506a914e33fd0b95e3146c1fdea6a
- https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/config.py#L190-L198
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L506-L511
- https://github.com/OpenHands/docs/blob/339de53ec95a6b85b5b0f61973aa3ed2e013a91f/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx
