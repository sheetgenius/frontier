---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-per-conversation-docker-containers-ship-through-oh-conversation-runtime-the-execution-only
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/17177
    precision: merged_pr
  - url: https://github.com/OpenHands/software-agent-sdk/pull/4883
    precision: merged_pr
  - url: https://github.com/OpenHands/software-agent-sdk/pull/3403
    precision: merged_pr
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/docker_runtime/registry.py#L462-L490
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/config.py#L72
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/docs/blob/9fef03741ae32e8ef44bf45148ebbe6aad8583f8/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx#L8-L21
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/docs/commit/f39a24e7ef6591c2eb9bc64160542f5724b0ed55
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L107-L122
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/conversation-workspace.ts#L18-L22
    precision: tagged_commit_file
---
# 2026-10-13-openhands-per-conversation-docker-containers-ship-through-oh-conversation-runtime-the-execution-only

Per-conversation Docker containers ship through OH_CONVERSATION_RUNTIME; the execution-only design in v1.21.0's headline and the docs never shipped. Carry-forward answer: the Docker work reached a tag, but not in the form its headline described. v1.21.0's "request Docker execution workspaces" (#17177) was built for an SDK design (#4883) that ran only tools in a container and kept LLM calls and credentials outside. That PR closed unmerged, no released agent server advertises the `execution_runtime` field Canvas checks, and Canvas never sends that workspace kind. What works is the SDK's per-conversation container mode (#3403, SDK 1.49.0), reachable through the `OH_CONVERSATION_RUNTIME=docker` forwarding Canvas has had since v1.20.0. The outer agent server starts one container per conversation running a full agent server, so the agent loop, its LLM calls and the secrets its profile allows all run inside. Containers run as the host UID and GID with `--cap-drop ALL`, `no-new-privileges`, a loopback-only port and a read-write bind mount of the conversation's workspace. v1.21.0 lets them reach host services through host.docker.internal (#17518 with SDK #5164). v1.25.0 stops offering host folders on such backends ("This backend uses isolated workspaces") and documents the mode as README Option 3. The container image defaults to the floating `ghcr.io/openhands/agent-server:latest-python`, and switching LLM or profile mid-conversation, forking and credential bindings return 501 in this mode (routers.py L339-L345). From 2026-09-06 to 2026-10-04 the docs page told operators to set `OH_EXECUTION_RUNTIME`, `OH_EXECUTION_IMAGE` and `OH_EXECUTION_PLATFORM`, which nothing reads, so a stack started that way ran conversations on the host.

Channel: tagged-release (runtime, host services, isolated-workspace UI); docs-only (docs page named variables nothing reads, 2026-09-06 to 2026-10-04). Half: both. Date: 2026-09-22 (v1.21.0); 2026-10-04 (docs corrected); 2026-10-06 (v1.25.0 UI and README).

Operator consequence: For per-conversation isolation on v1.21.0 or later, set `OH_CONVERSATION_RUNTIME=docker`, not `OH_EXECUTION_*`, and pin `OH_CONVERSATION_IMAGE` to the agent-server version Canvas pins (`ghcr.io/openhands/agent-server:1.54.0-python` at v1.27.1) so the inner and outer servers match. If you set it up from the docs before 2026-10-04, run `docker ps --filter name=agent-server-conversation-` during a conversation; no container means it ran on the host, the same failure the profile recorded for tags before v1.20.0. Know the trust model that shipped: allowed credentials live inside the container, so the profile's secret allow-list is what limits them (the outer alias is not copied wholesale in this mode; live scope enforcement remains untested, section 4). Expect the Canvas port to listen on all interfaces in this mode (section 1).

## Receipt
- https://github.com/OpenHands/OpenHands/pull/17177
- https://github.com/OpenHands/software-agent-sdk/pull/4883
- https://github.com/OpenHands/software-agent-sdk/pull/3403
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/docker_runtime/registry.py#L462-L490
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/config.py#L72
- https://github.com/OpenHands/docs/blob/9fef03741ae32e8ef44bf45148ebbe6aad8583f8/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx#L8-L21
- https://github.com/OpenHands/docs/commit/f39a24e7ef6591c2eb9bc64160542f5724b0ed55
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L107-L122
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/conversation-workspace.ts#L18-L22
