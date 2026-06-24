---
schema_version: bitter.frontier_profile.v0
profile_id: paperclip
label: Paperclip
owner: Paperclip
source_contract: sources/paperclip.yml
homepage: https://paperclip.ing/
docs: https://docs.paperclip.ing/
tagline: "Agent labor as governed operating state: roles, budgets, and review gates that bind."
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
last_updated: 2026-06-23
last_full_review: 2026-06-03
claims:
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
  use_for: "Teams treating agents as governed labor -- Paperclip's own framing is now 'the open source app people use to manage AI agents for work', and the controls match: roles, issues, budgets, review gates, hire approvals, and a per-company tenant boundary as first-class objects. Operations centralizing secrets across multiple agent adapters in one vault layer. Shared/cloud-tenant pools that need per-company isolation (v2026.618.0)."
  avoid_for: "Solo developers with a single agent: Paperclip's model assumes there are several agents to coordinate. Anyone running a shared or cloud-tenant pool below v2026.618.0 should upgrade -- earlier versions made every cloud tenant an instance admin (provision a separate non-cloud-tenant admin identity first, since the deprivileging purges stale instance-admin rows). Anyone running v2026.511.0 or earlier with SSH adapters should upgrade -- the prior version forwarded host env (including API keys) to remote targets."
  watch_next: "Which tag carries the master-unreleased control wave (preflight budget-cap enforcement, the task watchdog, centralized CEO-agent authz), and whether Paperclip's review-gate state machine generalizes past its own workflow model."
---

# Paperclip

## Operator Read

Paperclip models agent work as a company: agents have roles, work items are
issues, work happens in workspaces, progress moves through a board. The bet
is that multi-agent operations should look like operating a team -- issues,
budgets, reviewers, audit trails -- not like running a chat session. The
research question Paperclip raises: can agent labor be governed as operating
state, with auditable credentials and enforced review gates, rather than a
dashboard built on top of an honor system?

The product's self-description has consolidated around a human-in-the-loop
framing: "the open source app people use to **manage AI agents for work**" is
now pervasive boilerplate across this window's PRs, a continuation of the move
*away from* the earlier "zero-human companies" positioning. The company
metaphor persists -- companies, CEO agents, hiring, a board -- but is
consistently subordinated to operator approval, budget, and authority controls
rather than to autonomy.
*Findings: 2026-06-23-paperclip-same-company-ceo-authz-centralization.*

## Coordination and Adapter Surface

Configure Paperclip when you want one control plane in front of multiple
coding agents. Adapters declare a
[runtime command spec](https://github.com/paperclipai/paperclip/commit/90631b09b36fa028ad24ca5375bfa50e3602799c)
that carries its own install recipe for remote provisioning -- operators do
not hand-write provisioning scripts per CLI. Remote execution targets reach
the host through a
[scoped sandbox callback bridge](https://github.com/paperclipai/paperclip/commit/a4ac6ff133fbe8bdb82f4046fda85f7cb372b6a9)
with serialization against concurrent heartbeats and env sanitization at the
boundary. The bridge is the only documented path; remote targets cannot
reach arbitrary host state.

Sandbox providers are pluggable -- [E2B](https://github.com/paperclipai/paperclip/commit/4ef969f0840810527333aa6ee44fed89f4551f7c),
[Daytona](https://github.com/paperclipai/paperclip/pull/5580),
[Cloudflare](https://github.com/paperclipai/paperclip/pull/5687),
[exe.dev](https://github.com/paperclipai/paperclip/pull/5688) -- and the
[`cursor_cloud` adapter](https://github.com/paperclipai/paperclip/pull/5664)
routes work to Cursor's hosted-agent platform through `@cursor/sdk`, mapping
Paperclip heartbeats to Cursor's durable-agent and per-run model with session
reuse, streaming, and cancellation.

## Governance Made Mechanical

The thesis Paperclip is testing: governance should be enforced, not
documented. Agents cannot self-transition an issue to `in_review` by
[asserting it in output](https://github.com/paperclipai/paperclip/pull/5292)
 -- the state change requires the configured review workflow. The shared
principle with Hermes' Kanban gate is "no evidence, no state change," enforced
at different layers: Paperclip at the issue state machine, Hermes at the
multi-worker Kanban task.

Operators get budget surfacing as a control-plane primitive.
[Per-issue cost summaries](https://github.com/paperclipai/paperclip/commit/c4269bab59fff7a73ff31797578cc97ece7f160f)
roll up token and runtime spend; agents can be
[paused and resumed from the sidebar](https://github.com/paperclipai/paperclip/pull/4616);
budget-paused agents are surfaced explicitly and require a non-sidebar resume
path -- budget exhaustion is not silently ignored.

Budget is now moving from *surfacing* to *enforcement* -- though on master, not
yet in a tag (see the master-unreleased section below).

Issues carry a
[`standard` / `planning` work mode](https://github.com/paperclipai/paperclip/pull/5353)
through the full stack -- database, validators, server, plugin protocol,
heartbeats, board UI -- and the mode is preserved through suggested follow-up
issues. Routines keep an
[append-only revision log](https://github.com/paperclipai/paperclip/pull/5285)
so operators can preview prior revisions, see structured change summaries,
restore older definitions, and recover webhook secrets after restore.

## Structural Governance Generalizes (v2026.517-v2026.525)

The 2026-05-13 → 2026-05-27 window extends the structural-not-asserted
thesis from `in_review` issue transitions to two new surfaces.

**Scoped agent permissions with protected assignments**
([PR #6386](https://github.com/paperclipai/paperclip/pull/6386),
v2026.525.0) routes issue and agent-assignment mutations through a
real authorization service with protected-assignment enforcement.
Assignment is no longer "agent declared, server believed." Plugin
SDK and host APIs gain company-settings slots and policy/grant
management. Blocked issues get retry-now affordances; an incremental
principal-access compatibility backfill runs against pre-existing
data.

**Routine env secrets with documented precedence**
([PR #6212](https://github.com/paperclipai/paperclip/pull/6212),
v2026.525.0) make routine env flow through the runtime contract
with persisted revisions and `agent < project < routine` precedence.
Safe secret metadata surfaces in routine UI/history without exposing
secret values in logs or `secret_access_events`. The precedence is
named in release notes -- it is meant to be an operator concept.

**Board-managed document locks**
([PR #6009](https://github.com/paperclipai/paperclip/pull/6009),
v2026.517.0) preserve approved snapshots, route agent writes to
derived documents, expose lock state in UI and API, and record lock
activity. Approved documents cannot be overwritten by an agent
in-place; agent writes are diverted to a derived document.

Together: governance is enforced at the structural layer, not
asserted by the agent. Assignment goes through authz; secrets layer
with documented precedence; documents lock at approval.

**Modal as a first-party sandbox plugin and ACPX-Claude settings
deference.** Modal joins E2B, Cloudflare, Daytona, and exe.dev as a
first-party sandbox plugin
([PR #6245](https://github.com/paperclipai/paperclip/pull/6245)),
with cold-start-friendly probe timeouts. The ACPX-Claude adapter
now resolves bare Claude model IDs, surfaces real diagnostic detail
instead of opaque "Internal error", and **respects user
`~/.claude/settings.json` permissions**
([PR #6590](https://github.com/paperclipai/paperclip/pull/6590)) -- the control plane defers to the agent-owned permission file rather
than owning permissions top-down. This composition pattern is the
shape captured in proposed amendment-006 (composition findings).

## Multi-Tenant Authority, Now Tagged (v2026.618.0)

The default branch is `master`; channel matters here, so PRs are cited with
ancestry. The multi-tenant authority cluster that sat master-only last window
has **landed in tagged release v2026.618.0** (June 18). Every PR below is an
ancestor of `v2026.618.0` and is absent from the prior tag `v2026.609.0`. For
shared or cloud-tenant operators this is the mandatory upgrade target.

Cloud tenants are now
[strictly company-scoped, never instance-admin](https://github.com/paperclipai/paperclip/pull/7525),
closing a privilege-escalation class where every tenant on a shared pool was
an instance admin. The fix **purges stale instance-admin rows on apply**, so
provision a separate non-cloud-tenant admin identity before upgrading. Each
company gets its own
[per-company JWT signing keys](https://github.com/paperclipai/paperclip/pull/5864),
and
[plugin tables carry a `company_id` foreign key](https://github.com/paperclipai/paperclip/pull/5865)
so plugin data is isolated per tenant. A
[negated-phrasing review fix](https://github.com/paperclipai/paperclip/pull/5839)
makes approved review comments auto-complete (a comment reading "NOT APPROVED"
could previously auto-complete an issue), and
[HTTP error log lines now redact passwords and tokens](https://github.com/paperclipai/paperclip/pull/8013)
so credentials don't leak into logs.
*Findings: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged.*

## Master-Unreleased Controls (ahead of v2026.618.0)

The sharpest new controls this window are **on master and in no tag** as of
2026-06-23 -- each is proven `ahead` of `v2026.618.0` by compare. Operators
auditing `master` see protections an operator running the binary does not yet
have. Treat these as not-yet-shipped.

**Budget enforcement at the heartbeat preflight.**
[Preflight budget caps](https://github.com/paperclipai/paperclip/pull/8347)
move budget from *surfacing* to *enforcement*: per-agent daily run-count and
daily cost caps are checked at the heartbeat preflight boundary -- **before an
adapter starts** -- not only after model usage is recorded. A run queued before
a cap was hit is cancelled cleanly at claim time rather than invoking the
adapter; an opt-in timer no-work fast-exit keeps routine schedules from paying
for no-op model turns. This is the realization of the profile's standing
"budget governance expansion" watch-item (cost summaries → enforced caps).
*Findings: 2026-06-23-paperclip-heartbeat-preflight-budget-caps.*

**A task watchdog whose recovery actors cannot mutate approvals.**
[A first-class per-task watchdog control plane](https://github.com/paperclipai/paperclip/pull/8339)
inspects stopped or stalled work and creates scoped follow-ups without
bypassing task ownership. The structural boundary is the point: recovery and
status-only runs **cannot mutate approvals or perform deliverable work**,
preserving the single-assignee and governance invariants. This extends the
structural-not-asserted pattern to recovery -- a review/recovery actor with
permissions strictly narrower than a work actor, enforced by a scoped mutation
guard rather than by convention.
*Findings: 2026-06-23-paperclip-task-watchdog-control-plane.*

**Centralized same-company CEO-agent authorization.**
[A shared `assertSameCompanyCeoAgentOrBoard` route guard](https://github.com/paperclipai/paperclip/pull/8276)
centralizes same-company CEO-or-board authorization across company-settings,
branding, and portability (export/import) routes that previously did per-route
checks prone to drift. Regression coverage proves a CEO agent from one company
cannot read, mutate, archive, delete, export, or import against another
company. This hardens the agent-as-principal authority model one layer above
the v2026.618.0 cloud-tenant fix -- a CEO agent is a first-class authority role
with bounded, tested cross-tenant denial.
*Findings: 2026-06-23-paperclip-same-company-ceo-authz-centralization.*

## Credential Trust Boundaries

Treat the SSH host-env isolation fix as a security advisory if you are below
v2026.511.0. SSH remote execution prior to
[that fix](https://github.com/paperclipai/paperclip/pull/5142) forwarded host
API keys, tokens, and paths to remote execution targets -- the host
environment was not a safe passthrough to remote workers. After the fix, env
is stripped at the boundary.

Centralize credentials in the new
[provider-vault configuration](https://github.com/paperclipai/paperclip/pull/5429)
when you have multiple agents needing the same secret. AWS Secrets Manager is
the first remote-import backend; operators import credentials, preview changes
before committing, track binding usage, record `secret_access_events`, and
configure rotation guards. Rotation is tracked with fingerprints and
timestamps per secret version.

## Deployment Reality

Paperclip is not a two-minute install. It requires Postgres, a running server,
and a configured set of adapter environments. The cloud deployment path
addresses this; local deployment assumes the operator already runs that kind
of infrastructure. Treat Paperclip as a system you adopt deliberately, not a
tool you bolt on.

*Findings: 2026-05-07-paperclip-agent-company-control-plane,
2026-05-12-paperclip-secrets-vaults-and-cursor-cloud,
2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets,
2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged,
2026-06-23-paperclip-heartbeat-preflight-budget-caps,
2026-06-23-paperclip-task-watchdog-control-plane,
2026-06-23-paperclip-same-company-ceo-authz-centralization.*

## Open Questions

- The principal-access compatibility backfill (PR #6386) suggests
  pre-existing data without principal-access metadata. What was the
  pre-backfill governance baseline, and what should operators on
  older versions do to be safe? Possible security-advisory shape.
- How does Paperclip's authz service compose with the agent-owned
  permission file (`~/.claude/settings.json` via ACPX-Claude)?
  Disjoint surfaces or composing layers? Resolution rule not in
  release notes. Linked to proposed amendment-006.
- Modal cold-start probe timeout at 120s: sandbox-class characteristic
  or Modal-specific quirk? Affects timeout settings for other
  cold-start providers.
- What constitutes a "real review path" for the `in_review` restriction? Does it
  require a human reviewer, a configured approval workflow, or just a non-agent
  state transition? The enforcement criteria are not documented outside the PR.
  *Advanced this window:* the task watchdog (PR #8339, master-unreleased) supplies
  one concrete answer to the dual question of *who may move state* -- recovery and
  status-only actors structurally cannot mutate approvals -- even though the
  human-vs-workflow criteria for `in_review` itself remain undocumented.
- The secrets rotation guard is visible in the database schema. What triggers a
  rotation pull from AWS Secrets Manager -- polling, webhook, or manual import?
- Planning mode carries a `work_mode` flag through the stack. Does the flag
  change agent behavior during execution (tool restrictions, output format), or
  is it purely a classification signal for the UI and workflow?
- The `cursor_cloud` adapter maps Paperclip heartbeats to Cursor's durable-agent
  model. What is Cursor's durable-agent model, and how does its cancellation
  semantics compare to Paperclip's local agent pause/resume?
- The plugin host surface now allows plugins to declare managed agents and
  routines. How does plugin-managed agent lifecycle interact with the control
  plane's heartbeat and recovery systems?

## What To Watch Next

- Whether the `in_review` enforcement criteria get documented in the main docs
  or remain implicit in the PR.
- Secrets rotation automation: whether the AWS Secrets Manager integration gains
  an automatic pull path (webhook, scheduled import) vs. remaining manual.
- The planning mode flag's behavioral impact: whether it affects agent execution
  or is purely a classification layer.
- Budget governance expansion (**advanced -- enforcement now on master**):
  per-issue cost summaries have evolved into enforced preflight budget caps that
  stop capped agents before an adapter starts and cancel queued work at claim time
  (PR #8347). What remains to watch is *which tag* carries it off master, and
  whether budget-pause automation follows.
- Whether multi-user access control (v2026.427.0, company memberships, invites)
  integrates with the review and approval workflow to enable role-based
  governance of agent authority.
- Which tag carries the master-unreleased control wave (preflight budget caps
  #8347, task watchdog #8339, centralized CEO-agent authz #8276). As of
  2026-06-23 all three are `ahead` of v2026.618.0 with no carrying tag -- the
  release-channel gap to track for shared/cloud operators.

## Profile Hygiene

This profile follows the discipline in `RESEARCH_CONTRACT.md#profile`: every
concrete claim in the prose has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite finding IDs
when naming a specific feature, behavior change, or cross-provider comparison.

Earlier claims are seeded from prior findings (control-plane, secrets/vaults,
scoped permissions/routine env). This window adds eight claims, channel-tagged:
five **tagged-release** claims for the v2026.618.0 multi-tenant authority cluster
(`2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged`, evidence
precision: `release_note`, corroborated by per-PR ancestry) and three
**main-unreleased** claims for the post-tag master controls (preflight budget
caps, task watchdog, centralized CEO authz -- each a `merged_pr` proven `ahead`
of v2026.618.0 by compare). The `channel` field on each new claim separates
what an operator running the binary has (tagged) from what only exists on
master. All evidence is at or above the `release_note` floor.
