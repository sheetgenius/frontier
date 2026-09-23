---
schema_version: bitter.frontier_profile.v0
profile_id: openhands
label: OpenHands
owner: OpenHands
source_contract: sources/openhands.yml
homepage: https://openhands.dev/
docs: https://docs.openhands.dev/
tagline: "An agent workspace whose profiles now fence MCP servers and secrets on the server. Until v1.20.0 its Docker setting was not passed through, and conversations ran on the host."
compared_with:
  - claude-code
  - codex
  - gemini-cli
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
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: docker-runtime-ignored
    finding_id: 2026-09-21-openhands-docker-conversation-runtime-settings-reach-the-bundled-agent-server-v1-20-0-docker-executi
    last_verified: 2026-09-23
    status: active
  - id: profiles-scopes
    finding_id: 2026-09-21-openhands-profiles-become-enforceable-scopes-mcp-servers-v1-19-0-and-secrets-v1-20-0-with-a-skill
    last_verified: 2026-09-23
    status: active
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
    status: active
  - id: secret-injection-subprocess
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: active
  - id: sandbox-grouping-ui
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: active
  - id: self-hosted-gitlab
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: active
  - id: subagent-delegation-opt-in
    finding_id: 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    last_verified: 2026-05-12
    status: active
  - id: critic-result-gui
    finding_id: 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    last_verified: 2026-05-12
    status: active
  - id: acp-agent-settings-ui
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-05-27
    status: active
  - id: org-level-llm-profiles
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-06-23
    status: active
  - id: mcp-acp-env-per-org-member
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-05-27
    status: active
  - id: frontend-cve-cluster-and-acp-secrets
    finding_id: 2026-06-03-openhands-cve-2026-44492-axios
    last_verified: 2026-06-03
    status: active
  - id: apikey-keycloak-decouple
    finding_id: 2026-06-23-openhands-apikey-keycloak-decouple
    last_verified: 2026-06-23
    status: active
  - id: conversation-secret-enricher
    finding_id: 2026-06-23-openhands-conversation-secret-enricher
    last_verified: 2026-06-23
    status: active
  - id: dynamic-sandbox-spec-service
    finding_id: 2026-06-23-openhands-dynamic-sandbox-spec-service
    last_verified: 2026-06-23
    status: active
  - id: concurrency-limits-reverted
    finding_id: 2026-06-23-openhands-concurrency-limit-revert
    last_verified: 2026-06-23
    status: retired
  - id: acp-env-broadcast-closed
    finding_id: 2026-06-23-openhands-acp-env-leak-closed
    last_verified: 2026-06-23
    status: active
  - id: hide-personal-workspaces-ui-only
    finding_id: 2026-06-23-openhands-hide-personal-workspaces-ui-only
    last_verified: 2026-06-23
    status: open_question
  - id: wrong-profile-fix-v1-15-and-model-override
    finding_id: 2026-09-21-openhands-carry-forward-v1-15-0-is-the-in-window-tag-with-the-wrong-profile-fix-and-it-ships-the-opp
    last_verified: 2026-09-23
    status: active
  - id: automation-permissions-run-as
    finding_id: 2026-09-21-openhands-automations-get-view-manage-permissions-creator-only-re-enable-a-visible-run-as-identity
    last_verified: 2026-09-23
    status: active
  - id: security-fixes-without-advisories
    finding_id: 2026-09-21-openhands-four-security-fixes-shipped-as-plain-prs-electron-link-origin-bypass-runtime-config-xss
    last_verified: 2026-09-23
    status: active
  - id: pdf-preview-unsandboxed
    finding_id: 2026-09-21-openhands-v1-15-0-removes-the-pdf-preview-sandbox-tagged
    last_verified: 2026-09-23
    status: active
  - id: acp-harness-list-explicit
    finding_id: 2026-09-21-openhands-acp-harness-surfacing-becomes-an-explicit-per-harness-decision-the-acp-registry-pin-now
    last_verified: 2026-09-23
    status: active
  - id: ui-ahead-of-server-pin
    finding_id: 2026-09-21-openhands-provider-connections-ui-shipped-in-v1-15-0-ahead-of-the-server-api-it-works-from-v1-16-0
    last_verified: 2026-09-23
    status: active
posture_basis:
  capability:
    - 2026-05-07-openhands-platform-hardening
    - 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    - 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    - 2026-06-23-openhands-conversation-secret-enricher
    - 2026-06-23-openhands-dynamic-sandbox-spec-service
  accessibility:
    - 2026-05-07-openhands-platform-hardening
    - 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    - 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    - 2026-06-23-openhands-channel-posture
  governance:
    - 2026-05-07-openhands-platform-hardening
    - 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    - 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    - 2026-06-23-openhands-apikey-keycloak-decouple
    - 2026-06-23-openhands-acp-env-leak-closed
    - 2026-06-23-openhands-concurrency-limit-revert
    - 2026-06-23-openhands-channel-posture
stance:
  use_for: "Teams that want agent profiles as server-enforced scopes: which MCP servers (v1.19.0) and which saved secrets (v1.20.0) a launch can reach, plus a skill allow-list. One workspace that can put another harness behind it over ACP, with a surfaced harness list that matches the pinned agent server from v1.19.0."
  avoid_for: "Any Canvas older than v1.20.0 where you set the Docker runtime: conversations ran on the host. Using the home model picker to override a profile you treat as a boundary. Previewing untrusted files in Canvas on v1.15.0 and later, where the PDF frame is unsandboxed. Relying on GitHub advisories to learn about OpenHands security fixes."
  watch_next: "Docker execution workspaces reaching a tag (main-only at window close); whether security fixes start getting advisories; whether Canvas tags keep shipping pages before the pinned server can serve them; a live check that profile scopes hold in the running agent."
---

# OpenHands

OpenHands is on this watchlist as the workspace that fronts other agents. Its
Agent Canvas can run OpenHands' own agent or hand the work to another harness
over ACP, and around that it provides profiles, automations and team
permissions. The question it raises for operators is whether a setting in the
UI actually reaches the process doing the work. In this window, twice, it did
not.

## Where it stands, 2026-09-21

**Channel.** The repository now ships Agent Canvas, published on GitHub and to
npm as `@openhands/agent-canvas`, which stayed within about twelve minutes of
each GitHub tag. Six stables shipped in the window, v1.15.0 (21 August) through
[v1.20.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.20.0) (17
September), and each one fast-forwards the last. Main was 17 commits ahead at
window close. Always cite the `v` prefix. The repository has two tags named
1.11.0 from two different histories, and a tool that orders versions will get
them wrong.

**If you set the Docker runtime, upgrade to v1.20.0.** Before
[#17462](https://github.com/OpenHands/OpenHands/pull/17462), Canvas dropped
`OH_CONVERSATION_RUNTIME=docker` and started the bundled agent server in local
mode. The box you configured was not there, and conversations ran on the host.
v1.20.0 passes through runtime, image, memory, CPU, PID limits and startup
timeout when they are set. After upgrading, confirm from the container list that
the conversation process is inside a container. Docker execution workspaces
were still main-only at window close.

**Profiles became scopes.** Before
[#17289](https://github.com/OpenHands/OpenHands/pull/17289) (v1.19.0), every
profile could reach every configured MCP server, including ones that make
changes. Now a profile lists the servers it may use.
[#17237](https://github.com/OpenHands/OpenHands/pull/17237) (v1.20.0) limits a
profile to all, none or chosen saved secrets. The agent server
[advertises that capability](https://github.com/OpenHands/software-agent-sdk/blob/v1.49.1/openhands-agent-server/openhands/agent_server/server_details_router.py#L66)
and enforces it, and Canvas does no filtering of its own. v1.16.0 already
turned the skill catalog into an allow-list, with 11 of 59 skills on by default.
So on v1.20.0 a read-only exploration profile, with no write-capable MCP
servers and no deploy secrets, is finally something you can build. It has not
been probed live. Launch the profile and check what the running agent actually
holds.

**Launch from the profile, not the model picker.** v1.15.0 fixed the silent
fallback to a different profile, and in the
[same tag](https://github.com/OpenHands/OpenHands/releases/tag/v1.15.0) made
the home model dropdown win over a profile's pinned model. When the two
disagree, the profile's non-LLM configuration is dropped for that launch. If
you use profiles as MCP or secret boundaries, do not override the model.

**Security fixes arrive as ordinary pull requests.** The repo's advisory list
has one entry, from March. Four fixes in the window got none.
[#16961](https://github.com/OpenHands/OpenHands/pull/16961) (v1.17.0): the
desktop app treated `http://localhost.evil.com` as its own URL, so an
agent-written link could open an attacker's page inside an app window.
[#17175](https://github.com/OpenHands/OpenHands/pull/17175) (v1.19.0): the
static server injected runtime config unescaped, which allowed XSS, and let
browsers cache pages that carried `sessionApiKey`.
[#17060](https://github.com/OpenHands/OpenHands/pull/17060) (v1.17.0) bumps
DOMPurify past a sanitization bypass.
[#17134](https://github.com/OpenHands/OpenHands/pull/17134) (v1.17.0) is the
approval-surface fix: a pending confirmation could render inside a collapsed
event group, so the agent sat waiting on a person who could not see the
prompt. Upgrade desktop installs to v1.17.0 and static-server installs to
v1.19.0. If a proxy or shared browser may have cached a session key, rotate it.

**The preview frame lost its sandbox.**
[#16702](https://github.com/OpenHands/OpenHands/pull/16702) (v1.15.0) removed
`sandbox="allow-same-origin"` from the file preview iframe so that PDFs render.
Opening an agent-produced file in preview is now opening it in your browser.
For untrusted repositories, download and inspect instead.

**Automations run as their creator.** v1.17.0 splits viewing automations from
managing them and makes automations visible across the org.
[v1.18.0](https://github.com/OpenHands/OpenHands/pull/17138) lets only the
creator re-enable one, and shows "Automation Runs As", which is the creator's
email. On team deployments, audit who created each automation. Git Sync works
from v1.15.0, the first tag whose
[pinned automation service](https://github.com/OpenHands/OpenHands/blob/v1.15.0/config/defaults.json)
serves its endpoints.

**A pattern worth one habit.** Twice now a Canvas tag has shipped a page before
its pinned server could answer it: Git Sync in v1.14.0 and provider connections
in v1.15.0, which work from v1.16.0. Before you test a new page, read the
`agentServer` and `automation` pins in `config/defaults.json` at the tag.

**ACP fronting got more honest.** Before
[#17228](https://github.com/OpenHands/OpenHands/pull/17228) (v1.18.0), the
credential form offered fields for harnesses Canvas never listed, because it
read the SDK registry directly.
[#17423](https://github.com/OpenHands/OpenHands/pull/17423) (v1.19.0) ties the
UI's ACP registry to the agent server that launches the adapters, after it had
drifted seven minor versions behind. On earlier tags, do not enter credentials
for a harness that appears only in the credential form.

## What is unresolved

- Whether profile MCP and secret scopes hold in a running agent. The evidence
  so far is PR text and a capability flag. A launch that shows the denied tools
  and secrets are missing would settle it.
- Docker execution workspaces were on main, in no tag, at window close.
- Whether enterprise surfaces this profile tracked before the Agent Canvas
  consolidation, such as organization LLM profiles and API keys decoupled from
  Keycloak, carry into the v1.x line unchanged. We did not recheck them
  against v1.20.0.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
