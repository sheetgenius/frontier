---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-profile-secret-scopes-do-not-bind-the-agent-s-own-terminal-the-stack-s-session-key-is-in
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L906-L915
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-sdk/openhands/sdk/utils/command.py#L16-L30
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/agent-server-adapter.ts#L274-L359
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/pull/17279
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/issues/16492
    precision: official_docs
---
# 2026-10-13-openhands-profile-secret-scopes-do-not-bind-the-agent-s-own-terminal-the-stack-s-session-key-is-in

Profile secret scopes do not bind the agent's own terminal: the stack's session key is in its environment. Profiles limit which saved secrets the agent server hands a conversation (section 6). But the npm and desktop launcher, and the Docker entrypoint, also export the stack's single session API key into the agent server's own environment as `OPENHANDS_AUTOMATION_API_KEY`, on purpose, so agents can call the automation service. The SDK strips the session key from terminal subprocesses only under its own names, and its source says that key must stay inside the SDK process because it unlocks user secrets. The alias passes through, so a terminal-enabled conversation on the default local runtime inherits a key the agent server accepts on every route, including the one that lists saved secrets and the one that returns any secret's raw value. v1.25.0 (#17279) also puts the runtime-services block, which names the agent-server URL and the `X-Session-API-Key: $OPENHANDS_AUTOMATION_API_KEY` header, into named-profile launches. A second path stays open: [#16492](https://github.com/OpenHands/OpenHands/issues/16492) (labeled security-related, priority:high, open since 2026-08-10) says the browser keeps every backend's key in origin-readable localStorage, and [SELF_HOSTING.md L95-L104](https://github.com/OpenHands/OpenHands/blob/v1.27.1/docs/SELF_HOSTING.md#L95-L104) warns that the bundled VS Code editor shares that origin. v1.26.0 merged a removal of the bundled editor ([#17660](https://github.com/OpenHands/OpenHands/pull/17660)) and reverted it 12 hours later for enterprise compatibility ([#18048](https://github.com/OpenHands/OpenHands/pull/18048)). The per-conversation Docker runtime passes only named variables into a container ([registry.py L411-L446](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/docker_runtime/registry.py#L411-L446)) and filters secrets by the launched profile ([routers.py L349-L362](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/docker_runtime/routers.py#L349-L362)), so that construction does not copy the outer alias wholesale. This verifies the specific difference, not universal container isolation.

Channel: tagged-release. Half: defect. Date: 2026-10-06.

Operator consequence: On terminal-enabled conversations using the default local runtime in npm, desktop and Docker-image installs, treat a profile's secret allow-list as a default, not a boundary: an agent that reads its environment, or one steered by injected instructions, can fetch secrets its profile excludes. Keep production and deploy credentials out of Canvas's secret store on any host where agents touch untrusted repositories. Where the scope has to hold, run conversations with `OH_CONVERSATION_RUNTIME=docker` and give the profile a secret allow-list that leaves out `OPENHANDS_AUTOMATION_API_KEY`; the cost is that the agent can no longer create automations. To settle it on your own stack, launch a scoped profile and check whether `OPENHANDS_AUTOMATION_API_KEY` is set in its terminal. Watch for Canvas to stop exporting the key, the SDK to strip the alias, or a separate automation-only key.

## Receipt
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L906-L915
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-sdk/openhands/sdk/utils/command.py#L16-L30
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/agent-server-adapter.ts#L274-L359
- https://github.com/OpenHands/OpenHands/pull/17279
- https://github.com/OpenHands/OpenHands/issues/16492
