---
schema_version: bitter.frontier_profile.v0
profile_id: paperclip
label: Paperclip
owner: Paperclip
source_contract: sources/paperclip.yml
homepage: https://paperclip.ing/
docs: https://docs.paperclip.ing/
tagline: "Runs agent work as a company with roles, reviews and budgets. Until v2026.916.0 its agent API handed stored credentials back in plaintext, to the agent too."
compared_with:
  - hermes-agent
x:
  project: papercliping
  maintainers:
    - handle: dotta
      name: dotta
repo: https://github.com/paperclipai/paperclip
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: plaintext-credentials
    finding_id: 2026-09-21-paperclip-v2026-916-0-agent-apis-stopped-returning-plaintext-credentials-including-to-the-agent-itse
    last_verified: 2026-09-23
    status: active
  - id: thought-text-stable
    finding_id: 2026-09-21-paperclip-carry-forward-acpx-thought-text-containment-c2cfd55e-11801-first-reached-stable-in-v2026
    last_verified: 2026-09-23
    status: active
  - id: namespaced-canary-train-still-running
    finding_id: 2026-08-20-paperclip-namespaced-canary-train-still-running-stable-unmoved
    last_verified: 2026-08-20
    status: retired
  - id: acpx-thought-text-in-issue-comments
    finding_id: 2026-08-20-paperclip-acpx-thought-text-can-land-in-issue-comments
    last_verified: 2026-08-20
    status: retired
  - id: adapter-runtime-command-spec
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-05-07
    status: active
  - id: sandbox-callback-bridge
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-05-07
    status: active
  - id: e2b-sandbox-provider
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-05-07
    status: active
  - id: issue-cost-summaries
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-05-07
    status: active
  - id: secrets-provider-vaults
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-05-12
    status: active
  - id: cursor-cloud-adapter
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-05-12
    status: active
  - id: routine-revision-history
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-05-12
    status: active
  - id: planning-mode-issues
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-05-12
    status: active
  - id: host-env-isolation-remote-probes
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-05-12
    status: active
  - id: scoped-agent-permissions-and-protected-assignments
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: active
  - id: routine-env-secrets-precedence
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: active
  - id: board-managed-document-locks
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: active
  - id: modal-sandbox-plugin
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: active
  - id: acpx-claude-settings-respect
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: active
  - id: skills-cli-and-first-admin-claim
    finding_id: 2026-05-29-paperclip-v2026.529.0
    last_verified: 2026-06-03
    status: active
  # --- v2026.618.0 (June 18) tagged-release: multi-tenant authority cluster landed ---
  - id: cloud-tenant-deprivilege
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-06-23
    status: active
    channel: tagged-release
  - id: per-company-jwt-signing-keys
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-06-23
    status: active
    channel: tagged-release
  - id: plugin-tenant-isolation-fk
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-06-23
    status: active
    channel: tagged-release
  - id: negated-phrasing-review-fix
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-06-23
    status: active
    channel: tagged-release
  - id: http-log-credential-redaction
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-06-23
    status: active
    channel: tagged-release
  # --- master-unreleased (ahead of v2026.618.0 as of 2026-06-23) ---
  - id: preflight-budget-cap-enforcement
    finding_id: 2026-06-23-paperclip-heartbeat-preflight-budget-caps
    last_verified: 2026-06-23
    status: active
    channel: main-unreleased
  - id: task-watchdog-scoped-recovery
    finding_id: 2026-06-23-paperclip-task-watchdog-control-plane
    last_verified: 2026-06-23
    status: active
    channel: main-unreleased
  - id: same-company-ceo-authz-central
    finding_id: 2026-06-23-paperclip-same-company-ceo-authz-centralization
    last_verified: 2026-06-23
    status: active
    channel: main-unreleased
  - id: review-policy-lock-stable
    finding_id: 2026-09-21-paperclip-carry-forward-the-review-policy-lock-and-cwe-78-cli-guidance-reached-stable-in-v2026-824
    last_verified: 2026-09-23
    status: active
  - id: resolver-default-anyone
    finding_id: 2026-09-21-paperclip-v2026-824-0-new-interactions-default-to-resolver-policy-anyone
    last_verified: 2026-09-23
    status: active
  - id: sandbox-capabilities-fail-closed
    finding_id: 2026-09-21-paperclip-v2026-824-0-sandbox-capability-contract-resolves-fail-closed-managed-previews-default-to
    last_verified: 2026-09-23
    status: active
  - id: bad-bearer-token-401
    finding_id: 2026-09-21-paperclip-v2026-831-0-bad-agent-bearer-tokens-401-instead-of-silently-becoming-the-local-user
    last_verified: 2026-09-23
    status: active
  - id: grok-dontask-removed
    finding_id: 2026-09-21-paperclip-v2026-831-0-paperclip-stopped-setting-the-wrapped-grok-cli-s-permission-mode-to-dontask
    last_verified: 2026-09-23
    status: active
  - id: forwarded-host-trusted-proxy
    finding_id: 2026-09-21-paperclip-v2026-916-0-x-forwarded-host-is-honored-only-from-a-trusted-proxy
    last_verified: 2026-09-23
    status: active
  - id: authority-to-people-defaults-widened
    finding_id: 2026-09-21-paperclip-v2026-916-0-authority-moved-to-people-and-connections-some-defaults-widened
    last_verified: 2026-09-23
    status: active
  - id: install-guide-channels
    finding_id: 2026-09-21-paperclip-docs-and-site-caught-up-to-v2026-916-1-install-guide-still-does-not-name-the-lanes
    last_verified: 2026-09-23
    status: active
posture_basis:
  capability:
    - 2026-05-07-paperclip-agent-company-control-plane
    - 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    - 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    - 2026-06-23-paperclip-heartbeat-preflight-budget-caps
  accessibility:
    - 2026-05-07-paperclip-agent-company-control-plane
    - 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    - 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
  governance:
    - 2026-05-07-paperclip-agent-company-control-plane
    - 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    - 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    - 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    - 2026-06-23-paperclip-heartbeat-preflight-budget-caps
    - 2026-06-23-paperclip-task-watchdog-control-plane
    - 2026-06-23-paperclip-same-company-ceo-authz-centralization
stance:
  use_for: "Teams coordinating several agents who want the work held as operating state: issues, roles, review gates, budgets and per-person credentials. The floor is v2026.916.x on npm latest. Shared AI subscriptions, where Connections now ties who paid and who authorized to the responsible person rather than the agent config."
  avoid_for: "Any stable before v2026.916.0 where agents or less-trusted board users can read the agents API: plain env credentials came back verbatim. Solo developers with one agent. Relying on the default resolver policy to stop an agent answering its own confirmation. Relying on the advisory feed to tell you when to upgrade."
  watch_next: "Whether the plaintext-credential fix gets an advisory; whether hire-by-default for standard-trust agents holds; whether the install guide names the beta, nightly and canary channels; whether budget enforcement is re-verified at a current tag."
---

# Paperclip

Paperclip runs agent work as a company. Agents have roles, work items are
issues, reviews and budgets are first-class objects, and a board moves the work
along. It is on this watchlist because it treats approval and credentials as
operating state you can audit, not as prompts in a chat. That makes the
defaults the story: whoever a default lets act is the org chart.

## Where it stands, 2026-09-21

**Channel.** Stable is
[v2026.916.1](https://github.com/paperclipai/paperclip/releases/tag/v2026.916.1),
and it is what npm `latest` and the install guide's bare `npx paperclipai`
give you. Six stables shipped in the window. Each feature stable is a
byte-identical promotion of a beta tag, so "in beta" now reliably means "in
the next stable". Behind stable run beta, nightly and canary. Canary produced
292 tags and published every day of the window. Those channels live under
namespaced tags (`canary/v*`), which a flat tag listing does not show, and the
only place they are documented is
[`doc/CHANNELS.md`](https://github.com/paperclipai/paperclip/blob/v2026.916.1/doc/CHANNELS.md)
in the repo. Node 24.11.0 is the floor from v2026.831.0.

**Upgrade to v2026.916.x and rotate keys.** Before
[#9860](https://github.com/paperclipai/paperclip/pull/9860), the agent detail
read, the company agent list and the create, update and lifecycle routes all
returned `adapterConfig.env` as stored. Every `plain` binding, meaning API keys
and tokens, came back verbatim to any caller that could read the agent. That
included the agent itself, through `GET /api/agents/me`. v2026.916.0 sends all
three through one redacting presenter. It shipped as a breaking-change line
with no advisory. If agents or less-trusted board users could call the agents
API, rotate every key stored as `plain`, then move credentials into secret
bindings or Connections.

**Check the new defaults after upgrading.** In v2026.916.0,
[new standard-trust agents can hire other agents](https://github.com/paperclipai/paperclip/blob/v2026.916.0/server/src/services/agent-permissions.ts)
unless you mark them low-trust or override `canCreateAgents`. In-app
announcements are on, and they fetch a vendor feed from `pages.paperclip.ing`.
Set `PAPERCLIP_ANNOUNCEMENTS_ENABLED=false` on air-gapped instances. The server
also loads a `.env` from its working directory unless you set
`PAPERCLIP_DISABLE_CWD_ENV_FILE=true`. Cheap model profiles are gone, so
recovery work that named one now runs on the normal model and costs more.

**An agent can answer its own confirmation by default.** Since
[v2026.824.0](https://github.com/paperclipai/paperclip/blob/v2026.824.0/packages/db/src/migrations/0218_mushy_jack_murdock.sql),
a new interaction created without an explicit resolver policy defaults to
`anyone`, and that includes the agent that raised it. Existing restrictions
migrated to `not_creator` and `human_only`, and pending rows were not widened.
The upside is provenance: every resolution records which rule allowed it. If
an agent must not approve itself, set `not_creator` or `human_only` explicitly,
or cap it at the company level.

**Credentials follow the responsible person.** In v2026.916.0, Claude and Codex
subscriptions and API keys move into Connections, with grants and ownership.
GitHub access becomes a per-person App identity. When several people steer one
agent, git resolves to the credentials of whoever gave the accepted
instruction, "with no fallback to a teammate's access." For shared
subscriptions, this is the first time who paid and who authorized follows a
human rather than an agent config.

**Four quieter fixes.**
[#11589](https://github.com/paperclipai/paperclip/pull/11589) (v2026.831.0):
an agent bearer token that failed verification (expired, from a terminated
agent, or for the wrong company) used to fall through to the local-user actor.
It now returns 401. Treat earlier "local user" actions in the audit log as
possibly agent-originated, and expect integrations that relied on the
fall-through to start failing.
[v2026.831.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0)
also stopped injecting `dontAsk` into the wrapped Grok CLI, so the harness's own
permission default now governs. Unattended Grok agents may stall until you set
`--always-approve` on purpose. The same release confines ACPX run summaries to
the final output segment, and no setting can re-enable full summaries, which
closes the path that put model thought text into issue comments.
[#12832](https://github.com/paperclipai/paperclip/pull/12832) (v2026.916.0)
honors `X-Forwarded-Host` only from a trusted proxy. Set `TRUST_PROXY` before
upgrading if you run one.

**Review and sandbox gates hold.**
[v2026.824.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0)
serializes review verdicts, so a verdict can no longer get around a policy by
downgrading. Sandbox capabilities now resolve fail-closed, to the intersection
of what the provider declares, what the worker verifies and what you
configure. Three flags that release removed (`streamAgentSessionOutput` and
Daytona's `useSessions` and `useLogStream`) still load but do nothing. Delete
them so an audit does not misread them. If you run the Tailscale broker, agent
branch previews are reachable from the tailnet by default. Set
`PAPERCLIP_MANAGED_RUNTIME_HTTPS=off` to keep them on loopback.

**Read the advisory feed with care.** No advisory was published in the window.
The last one,
[GHSA-x8hx-rhr2-9rf7](https://github.com/paperclipai/paperclip/security/advisories/GHSA-x8hx-rhr2-9rf7),
a Critical DNS-rebinding RCE disclosed on 22 July, described a hole that
[v2026.416.0](https://github.com/paperclipai/paperclip/blob/v2026.416.0/server/src/app.ts)
had closed 97 days earlier. Its range, `<0.3.1`, names a retired npm line that
no calendar-versioned build can be compared against. Resolve any Paperclip
advisory against your actual tag, and do not wait for one before rotating.

**Still standing.** Agents cannot move their own issue to `in_review`. Approved
documents lock. Secrets can be delivered as run-bound reads that are audited
per agent instead of injected into the environment (since v2026.722.0).
Paperclip still wants Postgres, a server and configured adapters. You adopt it
deliberately. You do not bolt it on.

## What is unresolved

- Budget pre-flight caps, the task watchdog and centralized CEO-agent
  authorization were last verified as main-only on 23 June. Several tags have
  shipped since, and whether each one is tagged has not been rechecked.
- The redaction presenter from #9860 and the Grok adapter change were read
  from pull request file lists and release notes. Neither was audited line by
  line at the tag.
- Whether the run-bound secret audit trail can be queried, or is only written.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
