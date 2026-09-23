---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openhands-docker-conversation-runtime-settings-reach-the-bundled-agent-server-v1-20-0-docker-executi
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/17462
    precision: merged_pr
---
# 2026-09-21-openhands-docker-conversation-runtime-settings-reach-the-bundled-agent-server-v1-20-0-docker-executi

Docker conversation runtime settings reach the bundled agent server (v1.20.0); Docker execution workspaces are main-only. Before v1.20.0, Canvas dropped `OH_CONVERSATION_RUNTIME=docker` and started the bundled agent server in local mode, running on the host. Six settings are now forwarded when set: runtime, image, memory, CPU, PID limits and startup timeout. Unset values leave Agent Server defaults in charge.

Channel: #17462 tagged-release; #17177 and #17518 main-unreleased at window close. Half: capability. Date: 2026-09-17 (tag); 2026-09-21 (main).

Operator consequence: If you set `OH_CONVERSATION_RUNTIME=docker` on a Canvas older than v1.20.0, your conversations ran locally, not in Docker. Check `ps` or the container list from a v1.19.0 session. Upgrade, then confirm the conversation's process is inside a container. Treat Docker execution workspaces as not shipped for this window.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/17462
