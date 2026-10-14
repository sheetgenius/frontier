---
schema_version: bitter.frontier_profile.v0
profile_id: openhands
label: OpenHands
owner: OpenHands
source_contract: sources/openhands.yml
homepage: https://openhands.dev/
docs: https://docs.openhands.dev/
tagline: "Canvas prepares unattended work for approval; its default local runtime leaves terminal agents a path around profile secret limits."
compared_with: []
x:
  project: OpenHandsDev
  maintainers:
    - handle: rbren_dev
      name: Robert Brennan
    - handle: xingyaow_
      name: Xingyao Wang
repo: https://github.com/OpenHands/OpenHands
surface_class: mixed_official_docs
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: docker-runtime-ignored
    finding_id: 2026-09-21-openhands-docker-conversation-runtime-settings-reach-the-bundled-agent-server-v1-20-0-docker-executi
    last_verified: 2026-10-13
    status: retired
  - id: profiles-scopes
    finding_id: 2026-09-21-openhands-profiles-become-enforceable-scopes-mcp-servers-v1-19-0-and-secrets-v1-20-0-with-a-skill
    last_verified: 2026-09-23
    status: retired
  - id: wrong-profile-fix-unreleased-at-2026-08-20
    finding_id: 2026-08-20-openhands-wrong-profile-fix-still-unreleased-at-window-close
    last_verified: 2026-08-20
    status: retired
  - id: git-sync-404-on-v1-14-0
    finding_id: 2026-08-20-openhands-v1-14-0-git-sync-page-404s-against-bundled-automation
    last_verified: 2026-08-20
    status: retired
  - id: release-channel-lag
    finding_id: 2026-06-23-openhands-channel-posture
    last_verified: 2026-06-23
    status: retired
  - id: api-key-redaction
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: retired
  - id: secret-injection-subprocess
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-10-13
    status: retired
  - id: sandbox-grouping-ui
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: retired
  - id: self-hosted-gitlab
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: retired
  - id: subagent-delegation-opt-in
    finding_id: 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    last_verified: 2026-10-13
    status: retired
  - id: critic-result-gui
    finding_id: 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    last_verified: 2026-05-12
    status: retired
  - id: acp-agent-settings-ui
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-05-27
    status: retired
  - id: org-level-llm-profiles
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-06-23
    status: retired
  - id: mcp-acp-env-per-org-member
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-05-27
    status: retired
  - id: frontend-cve-cluster-and-acp-secrets
    finding_id: 2026-06-03-openhands-cve-2026-44492-axios
    last_verified: 2026-06-03
    status: retired
  - id: apikey-keycloak-decouple
    finding_id: 2026-06-23-openhands-apikey-keycloak-decouple
    last_verified: 2026-06-23
    status: retired
  - id: conversation-secret-enricher
    finding_id: 2026-06-23-openhands-conversation-secret-enricher
    last_verified: 2026-06-23
    status: retired
  - id: dynamic-sandbox-spec-service
    finding_id: 2026-06-23-openhands-dynamic-sandbox-spec-service
    last_verified: 2026-06-23
    status: retired
  - id: concurrency-limits-reverted
    finding_id: 2026-06-23-openhands-concurrency-limit-revert
    last_verified: 2026-06-23
    status: retired
  - id: acp-env-broadcast-closed
    finding_id: 2026-06-23-openhands-acp-env-leak-closed
    last_verified: 2026-06-23
    status: retired
  - id: hide-personal-workspaces-ui-only
    finding_id: 2026-06-23-openhands-hide-personal-workspaces-ui-only
    last_verified: 2026-06-23
    status: retired
  - id: wrong-profile-fix-v1-15-and-model-override
    finding_id: 2026-09-21-openhands-carry-forward-v1-15-0-is-the-in-window-tag-with-the-wrong-profile-fix-and-it-ships-the-opp
    last_verified: 2026-09-23
    status: retired
  - id: automation-permissions-run-as
    finding_id: 2026-09-21-openhands-automations-get-view-manage-permissions-creator-only-re-enable-a-visible-run-as-identity
    last_verified: 2026-10-13
    status: active
  - id: security-fixes-without-advisories
    finding_id: 2026-09-21-openhands-four-security-fixes-shipped-as-plain-prs-electron-link-origin-bypass-runtime-config-xss
    last_verified: 2026-10-13
    status: retired
  - id: pdf-preview-unsandboxed
    finding_id: 2026-09-21-openhands-v1-15-0-removes-the-pdf-preview-sandbox-tagged
    last_verified: 2026-09-23
    status: retired
  - id: acp-harness-list-explicit
    finding_id: 2026-09-21-openhands-acp-harness-surfacing-becomes-an-explicit-per-harness-decision-the-acp-registry-pin-now
    last_verified: 2026-10-13
    status: retired
  - id: ui-ahead-of-server-pin
    finding_id: 2026-09-21-openhands-provider-connections-ui-shipped-in-v1-15-0-ahead-of-the-server-api-it-works-from-v1-16-0
    last_verified: 2026-09-23
    status: retired
  - id: lan-key-policy
    finding_id: 2026-10-13-openhands-v1-25-0-stops-serving-the-session-key-to-the-network-npm-desktop-and-docker-installs-befor
    last_verified: 2026-10-13
    status: active
  - id: docker-auth-env-gap
    finding_id: 2026-10-13-openhands-docker-image-setting-local-backend-api-key-leaves-the-agent-server-with-no-key-at-all-open
    last_verified: 2026-10-13
    status: active
  - id: docker-package-repair
    finding_id: 2026-10-13-openhands-the-v1-27-0-docker-image-crash-loops-v1-27-1-fixes-it-and-adds-a-boot-test-before-tags-mov
    last_verified: 2026-10-13
    status: active
  - id: local-terminal-secret-path
    finding_id: 2026-10-13-openhands-profile-secret-scopes-do-not-bind-the-agent-s-own-terminal-the-stack-s-session-key-is-in
    last_verified: 2026-10-13
    status: active
  - id: whole-conversation-docker
    finding_id: 2026-10-13-openhands-per-conversation-docker-containers-ship-through-oh-conversation-runtime-the-execution-only
    last_verified: 2026-10-13
    status: active
  - id: conditional-profile-fallback
    finding_id: 2026-10-13-openhands-agent-profiles-gain-server-catalog-tools-and-a-persona-v1-25-0-global-settings-fallback
    last_verified: 2026-10-13
    status: active
  - id: remote-server-floor
    finding_id: 2026-10-13-openhands-canvas-v1-25-0-refuses-agent-servers-older-than-1-51
    last_verified: 2026-10-13
    status: active
  - id: credential-telemetry-repairs
    finding_id: 2026-10-13-openhands-credential-telemetry-and-approval-repairs-ship-as-ordinary-pull-requests
    last_verified: 2026-10-13
    status: active
  - id: acp-engines-and-models
    finding_id: 2026-10-13-openhands-acp-pi-and-opencode-join-the-built-in-agents-on-local-backends-and-model-lists-come-from
    last_verified: 2026-10-13
    status: active
  - id: automation-assistant-and-transcripts
    finding_id: 2026-10-13-openhands-automations-the-agent-fills-the-setup-form-v1-27-0-and-enterprise-transcripts-become-org
    last_verified: 2026-10-13
    status: active
  - id: router-prompt-and-toggle
    finding_id: 2026-10-13-openhands-model-router-lets-a-classifier-pick-the-model-for-each-task-and-first-router-creation-atte
    last_verified: 2026-10-13
    status: active
  - id: digitalocean-stable-backend
    finding_id: 2026-10-13-openhands-digitalocean-managed-agents-becomes-a-canvas-backend-v1-27
    last_verified: 2026-10-13
    status: retired
  - id: qa-recipes-and-evidence
    finding_id: 2026-10-13-openhands-openhands-ships-its-own-agent-driven-qa-harness-and-recipes-for-27-feature-families-and
    last_verified: 2026-10-13
    status: retired
  - id: delegated-tool-mcp-limits
    finding_id: 2026-10-13-openhands-delegated-agents-inherit-profile-tool-and-mcp-limits-from-sdk-v1-51
    last_verified: 2026-10-13
    status: active
  - id: anyio-remediation
    finding_id: 2026-10-13-openhands-anyio-tls-certificate-spoofing-remediation-reaches-the-canvas-v1-25-0-backends
    last_verified: 2026-10-13
    status: retired
  - id: residual-dependency-version-alerts
    finding_id: 2026-10-13-openhands-dependency-repairs-leave-pyjwt-and-fsspec-version-alerts-in-the-newest-sdk-lock
    last_verified: 2026-10-13
    status: active
  - id: run-capacity-storage-and-security-events
    finding_id: 2026-10-13-openhands-capacity-enforcement-and-optional-storage-policies-change-unattended-docker-runs
    last_verified: 2026-10-13
    status: retired
  - id: enterprise-key-export-and-proxy-switch
    finding_id: 2026-10-13-openhands-enterprise-1-71-0-repairs-llm-key-export-and-adds-an-opt-out-from-the-managed-proxy
    last_verified: 2026-10-13
    status: active
  - id: member-create-and-cloud-compatibility
    finding_id: 2026-10-13-openhands-automation-members-can-create-work-and-cloud-profile-and-cookie-compatibility-improve
    last_verified: 2026-10-13
    status: active
  - id: sync-encryption-and-webhook-dedup
    finding_id: 2026-10-13-openhands-git-sync-encryption-re-export-and-configured-webhook-deduplication-reach-stable
    last_verified: 2026-10-13
    status: retired
  - id: gemini-model-correctness
    finding_id: 2026-10-13-openhands-sdk-v1-54-0-restores-gemini-requested-model-handling
    last_verified: 2026-10-13
    status: active
  - id: unreleased-web-bridge-default
    finding_id: 2026-10-13-openhands-digitalocean-web-bridge-defaults-on-only-in-the-closing-main-ancestry
    last_verified: 2026-10-13
    status: retired
  - id: unreleased-secret-requests
    finding_id: 2026-10-13-openhands-in-conversation-secret-requests-are-merged-but-absent-from-canvas-v1-27
    last_verified: 2026-10-13
    status: active
  - id: cloud-conversation-org-scope
    finding_id: 2026-10-13-openhands-canvas-v1-26-0-adds-explicit-organization-scope-to-cloud-conversation-requests
    last_verified: 2026-10-13
    status: retired
  - id: install-channel-at-cutoff
    finding_id: 2026-10-13-openhands-install-snapshot-at-cutoff-is-canvas-v1-27-1-with-separately-pinned-services
    last_verified: 2026-10-13
    status: active
  - id: gemini-request-remapping
    finding_id: 2026-10-13-gemini-cli-stable-v0-61-0-rewrites-explicit-flash-model-ids
    last_verified: 2026-10-13
    status: retired
posture_basis:
  capability:
    - 2026-10-13-openhands-per-conversation-docker-containers-ship-through-oh-conversation-runtime-the-execution-only
    - 2026-10-13-openhands-agent-profiles-gain-server-catalog-tools-and-a-persona-v1-25-0-global-settings-fallback
    - 2026-10-13-openhands-acp-pi-and-opencode-join-the-built-in-agents-on-local-backends-and-model-lists-come-from
    - 2026-10-13-openhands-automations-the-agent-fills-the-setup-form-v1-27-0-and-enterprise-transcripts-become-org
    - 2026-10-13-openhands-sdk-v1-54-0-restores-gemini-requested-model-handling
    - 2026-10-13-openhands-in-conversation-secret-requests-are-merged-but-absent-from-canvas-v1-27
  accessibility:
    - 2026-10-13-openhands-the-v1-27-0-docker-image-crash-loops-v1-27-1-fixes-it-and-adds-a-boot-test-before-tags-mov
    - 2026-10-13-openhands-canvas-v1-25-0-refuses-agent-servers-older-than-1-51
    - 2026-10-13-openhands-install-snapshot-at-cutoff-is-canvas-v1-27-1-with-separately-pinned-services
  governance:
    - 2026-10-13-openhands-v1-25-0-stops-serving-the-session-key-to-the-network-npm-desktop-and-docker-installs-befor
    - 2026-10-13-openhands-docker-image-setting-local-backend-api-key-leaves-the-agent-server-with-no-key-at-all-open
    - 2026-10-13-openhands-profile-secret-scopes-do-not-bind-the-agent-s-own-terminal-the-stack-s-session-key-is-in
    - 2026-10-13-openhands-credential-telemetry-and-approval-repairs-ship-as-ordinary-pull-requests
    - 2026-10-13-openhands-model-router-lets-a-classifier-pick-the-model-for-each-task-and-first-router-creation-atte
    - 2026-10-13-openhands-delegated-agents-inherit-profile-tool-and-mcp-limits-from-sdk-v1-51
    - 2026-10-13-openhands-dependency-repairs-leave-pyjwt-and-fsspec-version-alerts-in-the-newest-sdk-lock
    - 2026-10-13-openhands-enterprise-1-71-0-repairs-llm-key-export-and-adds-an-opt-out-from-the-managed-proxy
    - 2026-10-13-openhands-automation-members-can-create-work-and-cloud-profile-and-cookie-compatibility-improve
stance:
  use_for: "Reviewed automation drafts and local coding work on <a href='https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json#L3-L10'>Canvas v1.27.1 with coordinated services</a>."
  avoid_for: "<ul><li>Production secrets in <a href='https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522'>the default local runtime</a>.</li><li>Reachable Docker with <a href='https://github.com/OpenHands/OpenHands/blob/v1.27.1/docker/entrypoint.sh#L208-L219'>only LOCAL_BACKEND_API_KEY configured</a>.</li></ul>"
  watch_next: "A released credential repair passing the local and Docker credential tests."
---

# OpenHands

OpenHands' Agent Canvas [v1.27.1 was released on 12 October 2026](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1)
with [an agent-filled automation form](https://github.com/OpenHands/OpenHands/pull/17201)
and [drafts you can test before creation](https://github.com/OpenHands/OpenHands/pull/17242).
The human now judges the job instead of filling its fields. Its default local
runtime still has a [code path from terminal access to profile-excluded secrets](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522),
so unattended work requires a tested credential boundary.

## Where it stands, 2026-10-13

<strong id="install-channel">Pin the install and coordinate its services.</strong>
[Canvas v1.27.1 is the newest non-prerelease as of 2026-10-13](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1). Use
[`npm install -g @openhands/agent-canvas@1.27.1`, then `agent-canvas`](https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L63-L73),
with [Node 24 or later](https://github.com/OpenHands/OpenHands/blob/v1.27.1/package.json#L16-L27)
and [uv](https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L63-L73),
or the [desktop installers](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1).
For Docker, pin [`ghcr.io/openhands/agent-canvas:1.27.1`](https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L89-L100);
skip [1.27.0, whose crash loop OpenHands reports repaired here](https://github.com/OpenHands/OpenHands/pull/18343),
and avoid floating image tags. Coordinate separately managed services:
[agent-server 1.51.0 is the minimum; 1.54.0 matches the bundle, with automation 1.19.3](https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json#L3-L10).
The [product still calls itself beta](https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L14).

<strong id="local-secret-boundary">Keep production secrets off the default local runtime.</strong> The
npm/desktop launcher
[exports the stack key as `OPENHANDS_AUTOMATION_API_KEY`](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L906-L915),
and [the Docker entrypoint does the same by default](https://github.com/OpenHands/OpenHands/blob/v1.27.1/docker/entrypoint.sh#L221-L232).
[Terminal sanitization leaves that alias intact](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-sdk/openhands/sdk/utils/command.py#L16-L30),
and the key [opens saved-secret values without a profile check](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522).
The code implies a [route to excluded secrets for terminal-enabled
local agents](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522). For an agent reading untrusted repositories, do not rely on profile selection as
the credential boundary. Require the
live isolation checks below.

<strong id="docker-auth">Give the Docker image its server key before exposing the port.</strong> In the all-in-one
Canvas image,
[setting only `LOCAL_BACKEND_API_KEY` skips export of `OH_SESSION_API_KEYS_0`](https://github.com/OpenHands/OpenHands/blob/v1.27.1/docker/entrypoint.sh#L208-L219).
Without another key, [the agent server accepts unauthenticated requests](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/dependencies.py#L25-L37).
[Set both to the same value, or leave both unset and use the generated key](https://github.com/OpenHands/OpenHands/blob/v1.27.1/docker/entrypoint.sh#L208-L232).
From another machine, require HTTP 401 from protected
[`GET /api/conversations/search`](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/api.py#L456-L523)
without `X-Session-API-Key`. Do not enable
`AGENT_CANVAS_ALLOW_LAN_SESSION_KEY=true` when another machine can reach the
service; [it allows the session key into the served HTML](https://github.com/OpenHands/OpenHands/blob/v1.27.1/docker/entrypoint.sh#L413-L416).
The test is the rejection, not the UI's key prompt.

**Use whole-conversation containers when separation matters.** Set
[`OH_CONVERSATION_RUNTIME=docker`](https://github.com/OpenHands/OpenHands/blob/v1.27.1/README.md#L107-L122)
and pin `OH_CONVERSATION_IMAGE` to
[`ghcr.io/openhands/agent-server:1.54.0-python`, matching the bundle](https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json#L3-L13).
This runs [a full agent server per conversation](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/docker_runtime/registry.py#L462-L490),
with [no wholesale copy of the outer key alias](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/docker_runtime/registry.py#L411-L452)
and [profile-filtered secret updates](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/docker_runtime/routers.py#L349-L365).

Exclude `OPENHANDS_AUTOMATION_API_KEY` from the profile; expect to lose
[automation API access through that key](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L1262-L1265).
The [old `OH_EXECUTION_*` settings do nothing](https://github.com/OpenHands/docs/commit/f39a24e7ef6591c2eb9bc64160542f5724b0ed55).
If you used them, check `docker ps --filter name=agent-server-conversation-`
during a conversation.

Firewall port 8000: this mode
[binds the outer stack on every interface by default](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L494-L498).

**Review older reachable installs for credential exposure.** Through v1.24.0,
[network-reachable HTML carried the stack key](https://github.com/OpenHands/OpenHands/blob/v1.24.0/docker/entrypoint.sh#L395-L398).
[v1.25.0, released 6 October 2026](https://github.com/OpenHands/OpenHands/releases/tag/v1.25.0),
added [loopback defaults and blocked off-loopback key injection unless explicitly allowed](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/bind-host.mjs#L8-L77).

Upgrade [network-reachable installs running v1.24.0 or earlier](https://github.com/OpenHands/OpenHands/blob/v1.24.0/docker/entrypoint.sh#L395-L398)
to [v1.27.1](https://github.com/OpenHands/OpenHands/releases/tag/v1.27.1); treat their stack key as exposed and follow the credential review below.

Review saved secrets, automations and recent conversations for activity
you did not start. Plan [key rotation together with migration of encrypted automation key-value data](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L1070-L1080).

**Verify the profile before enabling delegation.** For local OpenHands agents,
[an explicit secret allow-list, including empty, preserves the profile launch](https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/hooks/mutation/use-create-conversation.ts#L247-L280).
Without an explicit secret allow-list, [some launches can replace the profile's tool and MCP choices with global settings](https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/hooks/mutation/use-create-conversation.ts#L223-L280).
Check the conversation's effective profile and use its
[skill deny-list rather than global Skills selection](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/skills_service.py#L435-L459).

Opt into delegation through
[`task_tool_set`, outside Standard tools](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-sdk/openhands/sdk/tool/defaults.py#L27-L55).
[SDK 1.51.0 adds code to propagate parent tool/MCP limits through nested delegation and reject incompatible children](https://github.com/OpenHands/software-agent-sdk/commit/9b66ae79c39751fdaf637de8852461467a518b45),
first bundled in [Canvas v1.25.0](https://github.com/OpenHands/OpenHands/blob/v1.25.0/config/defaults.json).

**Approve future work under the right identity.** Review the trigger, schedule,
profile and test run before creating the automation: it
[executes as its creator](https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/components/features/automations/detail/configuration-section.tsx#L21-L28).
[Automation 1.14.0 lets ordinary org members create work and manage it as creators](https://github.com/OpenHands/automation/commit/b2d0ce49cd717b3b687dca861a86c86fc5cac59b).
A human still decides what deserves unattended execution.

**Keep shared run output free of credentials.** In separately released
[Enterprise 1.71.0](https://github.com/OpenHands/enterprise/releases/tag/1.71.0),
[authenticated org members can read non-deleted V1 automation conversations in their org](https://github.com/OpenHands/enterprise/blob/1.71.0/server/sharing/sql_shared_conversation_info_service.py#L73-L106),
including [messages and tool output](https://github.com/OpenHands/enterprise/blob/1.71.0/server/sharing/shared_event_router.py).
For archives from other coding engines,
[agent-server 1.54.0 excludes the top-level `acp/` credential directory](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/file_router.py#L159-L168),
first bundled in [Canvas v1.27.0](https://github.com/OpenHands/OpenHands/blob/v1.27.0/config/defaults.json).
If you shared an [older trajectory archive](https://github.com/OpenHands/software-agent-sdk/pull/5551),
inspect its `acp/` contents and rotate any provider credentials it carried.

**Upgrade Enterprise separately and revoke unwanted key exports.** On non-billing
deployments, [Enterprise 1.71.0 requires `ENABLE_BYOR_EXPORT` before exporting managed LLM keys](https://github.com/OpenHands/enterprise/commit/e136d565f223e5261ca400912988e4e98fd64bb8).
[Previously minted keys remain valid until removed at the proxy](https://github.com/OpenHands/enterprise/pull/742);
remove exports your deployment did not authorize. This
[source-available backend uses PolyForm Free Trial 1.0.0](https://github.com/OpenHands/enterprise/blob/1.71.0/LICENSE).

**Verify model identity before trusting a cost baseline.** Canvas v1.27.1 [offers Pi and OpenCode in its local coding-engine menu](https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/constants/acp-providers.ts#L129-L190).
[SDK 1.54.0 repairs OpenHands' Gemini ACP model-selection transport](https://github.com/OpenHands/software-agent-sdk/commit/6d51e7262fc234586ff5e8e519ce5a658d334cdf).

Record the installed engine version, selected model, requested ID and
runtime-reported model where available. The Gemini transport repair still needs
that live-session check. With OpenHands routing,
[first-router creation attempts to enable Run on first message](https://github.com/OpenHands/OpenHands/pull/17840),
but [classifier calls depend on agent compliance](https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/agent-server-adapter.ts#L380-L394).
[Named-profile launches do not inherit that inline setup](https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/agent-server-adapter.ts#L1313-L1318).
Inspect the toggle and actual calls before using routing to govern spend.

## What is unresolved

- **Require live tests before trusting credential limits.** A released alias
  removal, sanitization repair or automation-only key, plus a test confirming that
  an agent cannot retrieve a saved secret excluded by its profile, on both local
  and Docker launches, would settle the local-key question. Inspect
  the terminal environment and effective credentials too; container construction
  alone does not prove universal isolation.
- **Test delegated authority at runtime.** Rejecting excess authority in
  extra-tool, extra-MCP and nested-delegation attempts would establish the
  tool/MCP boundary independently of secret access.
- **Accept a Docker auth repair only after a release and rejection test.** A tag
  fixing [#17763](https://github.com/OpenHands/OpenHands/issues/17763) and passing
  the protected-route check above would close the image's configuration gap.
- **Wait for a tested secret-request release.** The
  [in-conversation secret-request change](https://github.com/OpenHands/OpenHands/commit/da4c7564dcf460f80d1889fee1c951802c448c56)
  sits among [the unreleased commits after v1.27.1](https://github.com/OpenHands/OpenHands/compare/v1.27.1...0e9ce191390f535347ff17055038c45eeef3fedf).
  Test the first tag containing it with a saved-but-excluded secret on local and
  Docker profiles, checking effective credentials after the request.
- **Check Cloud's serving version before assuming who can read transcripts.**
  Require a dated serving-version record and a cross-member read test before
  applying the released Enterprise rule above to Cloud.
- **Trace installed dependencies before judging endpoint impact.** SDK locks
  select [PyJWT 2.14.0 and fsspec 2025.9.0](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/uv.lock);
  automation locks [fsspec 2026.3.0](https://github.com/OpenHands/automation/blob/1.19.3/uv.lock).
  They match advisory ranges for
  [an uncaught recursive JWT parse exception](https://github.com/advisories/GHSA-42vr-xj54-vc7v)
  and [Python execution through attacker-controlled reference templates](https://github.com/advisories/GHSA-27vj-qcqg-25rc).
  Resolved package versions and traced JWT pre-verification/ReferenceFileSystem
  consumers would settle exposure. Do not infer a reachable OpenHands exploit
  from a lockfile.

## Profile hygiene

### Review date and sources

This profile covers OpenHands as of 2026-10-13. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md)
for the evidence contract.
