---
schema_version: bitter.frontier_profile.v0
profile_id: openhands
label: OpenHands
owner: OpenHands
source_contract: sources/openhands.yml
homepage: https://openhands.dev/
docs: https://docs.openhands.dev/
tagline: "The platform that fronts other harnesses, where merged and shipped are different words."
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
last_updated: 2026-06-23
last_full_review: 2026-06-23
claims:
  - id: release-channel-lag
    finding_id: 2026-06-23-openhands-channel-posture
    last_verified: 2026-06-23
    status: active
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
  use_for: "Teams that want the platform to own sandboxing, evaluation, and sub-agent posture, and are willing to take the platform's defaults rather than build their own. Ops shops needing parity across GUI, CLI, and SDK from a single tool."
  avoid_for: "Operators who want governance to live in their own codebase -- OpenHands ships sub-agent delegation, critic scoring, and sandbox grouping as platform decisions, not knobs you bolt on."
  watch_next: "Whether the critic score correlates with operational outcomes anyone actually measures, and whether sub-agent delegation gets adopted enough to justify the new orchestration surface."
---

# OpenHands

## Operator Read

OpenHands is an operating environment, not a harness -- and as of the
2026-05-13 → 2026-05-27 window, an environment that explicitly fronts
*other harnesses*. The Settings → Agent ACP page lets an operator point
OpenHands at Claude Code, Codex, Gemini CLI, or a custom command as the
actual agent doing the work, with LLM/Condenser/MCP settings greyed out
because the back-end agent owns those. Org-level LLM profiles add the
policy substrate that positioning requires. Adopting OpenHands now means
choosing between owning the agent surface yourself (built-in agent) or
shelling out to a third-party agent under OpenHands' RBAC, sandboxing,
and integrations.

But the load-bearing fact for any operator deciding *what to run* is the
channel gap below: OpenHands' entire enterprise/security cluster -- the
identity-plane work, the credential-passthrough framework, the sandbox
control plane -- has now gone **two consecutive windows on `main` with no
tagged release containing any of it**. What you read about OpenHands and
what you can install are, right now, two different products.

## Channel Posture (read this before anything else)

The only mainline GitHub release is
[`1.8.0`](https://github.com/OpenHands/OpenHands/releases/tag/1.8.0)
(commit `bc26df351`, 2026-06-10), and it predates the entire enterprise
build-out described in the rest of this profile. There is no `1.9.0`; the
latest `cloud-*` tag (`cloud-1.38.0`, 2026-06-09) is also pre-window. Every
capability below -- API-key/Keycloak decoupling, the conversation secret
enricher, the dynamic sandbox-spec service, the org-level LLM profile UI,
the `acp_env` isolation fix, and two unreleased CVE/credential fixes -- lives
only on `main`. Ancestry, not date, is the proof: each merge commit compared
`...1.8.0` returns `diverged, behind_by>0`, i.e. the commit is not an
ancestor of the release.

**Operators on 1.8.0 have none of it.** That includes the moderate postcss
XSS (CVE-2026-41305) and the `PluginSpec.source` git-token-at-rest redaction
from the prior window. If you run a build from `main`, you have the features
but should rotate any token embedded in a repo source URL; if you run the
tagged binary, you are not patched and not enrolled in any of the platform
direction below. State which channel you are on before you reason about any
single feature here -- "merged" and "shipped" are not the same word for this
provider, and have not been for a month.

*Findings: `2026-06-23-openhands-channel-posture`.*

## The ACP Front-End Move

[PR #14401](https://github.com/OpenHands/OpenHands/pull/14401) (merged
2026-05-15) ships a Settings → Agent page that wires OpenHands to
external Agent Client Protocol agents -- Claude Code, Codex, Gemini
CLI, or a custom command. While ACP is active, LLM / Condenser / MCP
settings grey out and route loaders redirect to `/settings/agent`. The
SDK bumps to v1.22.1 with a unified `/api/conversations` endpoint
across built-in and ACP agents. Feature flag `ENABLE_ACP` defaults
`false`; turn it on to evaluate. This is the cleanest evidence that
OpenHands is positioning as the enterprise GUI shell around third-party
agents, not just as a harness in its own right.

[PR #14406](https://github.com/OpenHands/OpenHands/pull/14406) (merged
2026-05-27) adds organization-level LLM profile storage in SaaS mode.
Migration 116 adds an encrypted `llm_profiles` JSON column on the org
table; six CRUD endpoints under `/api/organizations/{org_id}/profiles`
expose them with two-tier permissions (`VIEW_ORG_SETTINGS` to read,
`EDIT_ORG_SETTINGS` to create/update/delete/rename/activate). Activate
is the load-bearing operation -- the same transaction updates the org's
active profile and the acting member's settings diff with
`SELECT ... FOR UPDATE` serializing concurrent writes. Team-org UI is
gated on a follow-up PR not in window.

Multi-tenant SaaS operators should also note
[PR #14528](https://github.com/OpenHands/OpenHands/pull/14528) (merged
2026-05-22): a quiet but security-grade fix. Pre-fix, MCP server and
`acp_env` configurations were broadcast to every org member's row. The
fix splits agent settings into shared and private halves and strips
legacy leaked values on read. Operators on pre-2026-05-22 deployments
should rotate MCP credentials added by individual org members.

That `acp_env` cross-member broadcast vector is now
[structurally closed](https://github.com/OpenHands/OpenHands/pull/14921)
(merged 2026-06-22). An in-window investigation confirmed the leak vector -- the `acp_env` agent-settings field eligible to ride
`shared_agent_settings_diff` / `update_all_members_settings_async` -- was
*already* dead because SDK 1.29.0 (pinned via
[#14889](https://github.com/OpenHands/OpenHands/pull/14889)) removed the
field entirely. ACP provider credentials now ride the per-user Secrets panel
(`custom_secrets`), stored per-user, never org-broadcast. The standing open
question on `acp_env` cross-contamination is resolved: the field is gone, the
class is closed.

*Findings: `2026-05-27-openhands-acp-ui-and-org-llm-profiles`,
`2026-06-23-openhands-acp-env-leak-closed`.*

## Identity, Credential, and Sandbox Control Planes

This is the net-new state, and all of it is `main`-unreleased. Three
directions stand out.

**Machine identity split from human SSO.**
[PR #14867](https://github.com/OpenHands/OpenHands/pull/14867) (merged
2026-06-17) decouples API-key (Bearer) auth from Keycloak offline sessions -- "API-key authentication performs zero Keycloak round-trips." A revoked or
expired Keycloak offline session no longer invalidates an `sk-oh-...` key.
This removes a class of opaque 401 lockouts for webhooks, crons, and headless
clients, but it **changes the revocation contract**: Keycloak session
revocation is no longer a kill switch for machine keys. Operators who relied
on IdP session revocation as a deauth path for API keys must now revoke at
the key store. Read this as OpenHands separating its machine-identity plane
from the human-SSO plane to support headless/automation tenancy.

**A generalized per-user conversation secret enricher.**
[PR #14697](https://github.com/OpenHands/OpenHands/pull/14697) (merged
2026-06-16, stacked on
[#14650](https://github.com/OpenHands/OpenHands/pull/14650)) establishes a
reusable enricher that injects a user's linked third-party OAuth token into
the sandbox at conversation start -- and not only from the originating
integration. It "makes the linked Jira Data Center OAuth token available to
eligible web, Slack, and API-started conversations, not only Jira-triggered
resolver jobs." Jira DC is the first consumer (token persistence + at-rest
storage land in #14650, migration 122); the primitive is architectural, not a
one-off. The cost is blast radius: any conversation a user starts can now
carry that user's linked identity into the sandbox, and sandbox-side actions
inherit those permissions. Jira-triggered conversations stay strict
(validated before launch); web/Slack/API paths are best-effort, with no
bot/service-account fallback yet. Operators must reason explicitly about which
start path leaks which linked credential.

**Sandbox-spec authority moved to a runtime-api control plane.**
[PR #14849](https://github.com/OpenHands/OpenHands/pull/14849) (merged
2026-06-16, merge `56034afe10`) adds a `DynamicRemoteSandboxSpecService` that
fetches available sandbox specs from runtime-api's
`GET /api/warm-runtime-configs` "rather than relying on a hardcoded preset
list," with the default selected by config name
(`OH_SANDBOX_SPEC_DEFAULT_SPEC_NAME`, e.g. `v1_current`) and a 60s cache.
The control plane for *what image agents execute in* leaves code-pinned
presets and becomes a runtime-api concern; trust now flows from its warm
configs. A companion guardrail
([#14883](https://github.com/OpenHands/OpenHands/pull/14883)) refuses a custom
image whose agent-server SDK version does not match the app's pinned
`openhands-sdk`. This is the foundation for first-class custom / per-tenant
execution images (part 2 of the program; part 1 was runtime-api PR #538).

*Findings: `2026-06-23-openhands-apikey-keycloak-decouple`,
`2026-06-23-openhands-conversation-secret-enricher`,
`2026-06-23-openhands-dynamic-sandbox-spec-service`.*

## Concurrency Limits: Withdrawn, Not Enforced

The prior window's per-org/per-user concurrency limits (PR #14168, which
also added HTTP 429 enforcement) were
[REVERTED in-window](https://github.com/OpenHands/OpenHands/pull/14877)
(merged 2026-06-17, migration 124 drops the columns migration 120 added).
The DB-backed quota feature is gone from `main` and was never tagged. Any
expectation of 429-based per-org/per-user concurrency quotas in the next 1.x
should be retired -- they are not coming. The surviving concurrency-control
path is the runtime
[`/list`-based count](https://github.com/OpenHands/OpenHands/pull/14834)
(only sandboxes the runtime confirms running count against the limit),
which replaced the buggy `is_paused` DB-flag count -- but that is sandbox
cleanup behavior, not a per-tenant policy quota.

*Findings: `2026-06-23-openhands-concurrency-limit-revert`.*

## Platform Ownership Surfaces

Sub-agent delegation is OpenHands' clearest "platform owns the routing"
move. Behind
[`enable_sub_agents`](https://github.com/OpenHands/OpenHands/pull/14122)
(default off), work is routed to specialized built-in agents -- `bash-runner`,
`code-explorer`, `general-purpose`, `web-researcher` -- each with tool surfaces
defined by `TaskToolSet` in its config. Custom sub-agents live in
`.agents/agents/*.md`. Whether tool restrictions are runtime-enforced or
instruction-level is not yet confirmed by public evidence and remains an open
question to investigate before relying on the boundary.

Treat critic scoring as an opt-in evaluation surface, not a verdict. The
[`CriticResult`](https://github.com/OpenHands/OpenHands/pull/14133) GUI
displays a 0-1 score, 0-5 stars, and color-coded bands (green ≥60%, yellow
≥40%, red <40%) across `agent_behavioral_issues`, `user_followup_patterns`,
and `infrastructure_issues`. Turn it on only if you can route the extra
model spend separately (`CRITIC_API_KEY`) and test whether the score
predicts outcomes your team already cares about. Whether it shows at all
is deployment-controlled -- `OH_ENABLE_CRITIC_BY_DEFAULT` defaults disabled;
per-instance disable is `verification.critic_enabled = false`.

The sandbox grouping strategy is now a
[user-configurable UI option](https://github.com/OpenHands/OpenHands/commit/90cf5f8003c247597481bcbef9a5aa73eb899e10);
operators select grouping policy without editing config files. KVM
acceleration via `SANDBOX_KVM_ENABLED` (v1.7.0) cuts sandbox startup latency
on hosts that support it -- opt-in flag.

## Security Posture

Credential handling shows active maintenance, not assumed defaults. The
[log redaction commit](https://github.com/OpenHands/OpenHands/commit/61e3dc2cadbefd4e0649b7c141ac2335c021ad2b)
scrubs credential patterns from logs before write. ACP subprocesses
[receive injected secrets](https://github.com/OpenHands/OpenHands/commit/cf156b0073350ca8e93067bc2f4ae18b90537a0a)
without the primary agent context carrying those secrets -- useful for tools
that need credentials the agent itself should not see. Debug logging of hook
configuration secrets has been
[removed](https://github.com/OpenHands/OpenHands/commit/0c6c461555f8651347ed140f1c555ff8a88ddf56).
Track these in commit history rather than docs; the pattern is fixes-as-they-
ship rather than a published security policy.

## Integration Reach

OpenHands runs on
[self-hosted GitLab](https://github.com/OpenHands/OpenHands/commit/4e63531fa6595ec55102f08ef129845931fcd8ff),
not just cloud -- operators on private GitLab can connect without a
cloud-GitLab account. The platform ships GUI, CLI, SDK, and a hosted cloud
deployment path with built-in Slack, Jira, Linear, and GitHub integrations.
The reach is real; so is the deployment dependency: Docker and container
support are required for the sandbox model.

## What You're Trading

Adopt OpenHands when you want the platform to own sandboxing, evaluation, and
sub-agent posture, and when feature parity across GUI / CLI / SDK matters
more than building your own thin layer. Skip it when you want governance to
live in your own codebase -- OpenHands ships those decisions as platform
defaults, not knobs you bolt on. The trade is real and intentional: less
ownership of the agent surface in exchange for less integration work.

*Posture basis: `2026-05-07-openhands-platform-hardening`,
`2026-05-12-openhands-subagent-delegation-and-critic-evaluation`,
`2026-05-27-openhands-acp-ui-and-org-llm-profiles`,
`2026-06-23-openhands-apikey-keycloak-decouple`,
`2026-06-23-openhands-conversation-secret-enricher`,
`2026-06-23-openhands-dynamic-sandbox-spec-service`,
`2026-06-23-openhands-concurrency-limit-revert`,
`2026-06-23-openhands-channel-posture`.*

## Open Questions

- `hide_personal_workspaces` (PR #14741) is
  [confirmed STILL UI-only](https://github.com/OpenHands/OpenHands/pull/14741)
  / NOT an access-control boundary. The flag filters the org list/selector
  and nudges members into the default org on login; no in-window PR added a
  server-side access boundary, and a refutation search for in-window
  enforcement returned zero. Resolved-as "no enforcement boundary added" -- the orgs API still returns personal orgs. Operators must not treat it as an
  access boundary. *Findings:
  `2026-06-23-openhands-hide-personal-workspaces-ui-only`.*
- When OpenHands is fronting Claude Code, Codex, or Gemini CLI via ACP,
  how do the org-level LLM profile model and the back-end agent's own
  policy surfaces compose? OpenHands greys out LLM/Condenser/MCP
  because the back-end owns those, but the org-level profile still
  declares preferences. Resolution rule is not documented.
- The team-org UI for org-level LLM profiles is a follow-up PR not
  yet in window. When does team-org adoption become usable? (The
  org-LLM-profile surface is still actively maintained on `main` -- [#14893](https://github.com/OpenHands/OpenHands/pull/14893) fixed a
  duplicate `auth_type` render this window -- but still untagged.)
- For the conversation secret enricher: which of the best-effort
  (web/Slack/API) start paths leak which linked credential into a sandbox,
  and when does the bot/service-account fallback land? The blast radius is
  per-user and per-path; there is no consolidated matrix yet.
- The dynamic sandbox-spec service moves image-selection authority to a
  runtime-api control plane. Does that change the sandbox *security* boundary,
  or only its provisioning path? Trust now flows from runtime-api warm
  configs; the boundary semantics are not yet documented.
- API-key auth no longer round-trips Keycloak (#14867). With key validity
  decoupled from IdP session lifecycle, what is the authoritative key-store
  revocation path and its propagation latency? The deauth contract moved; the
  operator-facing revocation runbook has not been published.
- No tagged release across two windows -- when does the next 1.x consolidate
  the ACP UI, org-level LLM profiles, the identity-plane split, the
  conversation secret enricher, the sandbox control plane, MCP/ACP env
  scoping, and enterprise DC integrations? Operators on the release channel
  see none of this until then.
- Is `enable_sub_agents` a user-level or operator-level setting in multi-user
  deployments? Can an operator force sub-agents off platform-wide, or must each
  user opt in individually?
- What constraints govern custom sub-agents defined in `.agents/agents/*.md`?
  Which tools can a custom sub-agent access, and how is its tool surface declared
  or restricted?
- How is the critic score (0--1) calibrated across session types? What separates
  `agent_behavioral_issues` from `user_followup_patterns` in practice?
- Does the KVM sandbox acceleration path (`SANDBOX_KVM_ENABLED`) change the
  security boundary of the sandbox, or only its startup latency?

## What To Watch Next

- **The channel gap itself.** OpenHands has gone two consecutive windows
  with its entire enterprise/security/sandbox build-out on `main` and in no
  tag. Watch whether the next 1.x finally consolidates the identity-plane
  split, the conversation secret enricher, the dynamic sandbox-spec control
  plane, the org-level LLM profile UI, MCP/ACP env scoping, and enterprise DC
  integrations -- or whether "merged" and "shipped" keep diverging.
- Whether the per-user conversation secret enricher grows the missing
  bot/service-account fallback, and which start paths get tightened from
  best-effort to validated.
- The custom-sandbox-image program: how the runtime-api warm-config control
  plane composes with per-tenant trust, after #14849/#14883 and the lockstep
  SDK 1.29.0 pin (#14889).
- Whether OpenHands re-introduces any per-tenant concurrency quota after
  reverting #14168 -- and if so, whether it is policy-backed or merely
  runtime-`/list` cleanup.
- Team-org UI for org-level LLM profiles (follow-up PR still not tagged;
  surface remains actively maintained on main per #14893).
- The composition question: when OpenHands fronts Claude Code via
  ACP, which side's policy wins? OpenHands org-level LLM profile, or
  Claude Code's `~/.claude/settings.json`? This is the schema-shape
  question recorded in amendment-006 (composition findings).
- The `acp_providers` registry: which back-end agents land first
  and which take longer to integrate. The choice is a signal about
  OpenHands' positioning relative to each provider.
- Runtime enforcement of custom sub-agent tool lists: does the registry/parser
  construct agents with fixed tool lists that cannot be bypassed, or is
  `TaskToolSet` an instruction-level restriction? Code or runtime-probe evidence
  would resolve this. See PR #14122 and SDK PR #2948.
- Deployment/org-level controls for sub-agents and critic: whether an operator
  can set platform-wide policy on both surfaces, or must manage per-user settings.
- Critic calibration and cost routing: what does a score of 0.4 mean across
  session types, and what does `CRITIC_API_KEY` routing look like in multi-user
  deployments?
- Whether OpenHands' RBAC, usage reporting, and budgeting surfaces extend to
  cover sub-agent delegation and critic evaluation spend.
- Sub-agent delegation documentation: currently available via PR #14122 but
  not in main docs. Watch for official docs coverage.

## Profile Hygiene

This profile follows the discipline in `RESEARCH_CONTRACT.md#profile`: every
concrete claim in the prose has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite finding IDs
when naming a specific feature, behavior change, or cross-project comparison.

The 2026-06-16 → 2026-06-23 window adds seven claims, all from
`main`-unreleased PRs verified by git ancestry (each merge commit is
`diverged, behind_by>0` against 1.8.0): the API-key/Keycloak decoupling
(#14867), the conversation secret enricher (#14697/#14650), the dynamic
sandbox-spec service (#14849, merge `56034afe10`), the `acp_env` broadcast
closure (#14921), the channel-posture register, plus the retired
concurrency-limit claim (#14168 reverted by #14877) and the
`hide_personal_workspaces` open_question resolved as "no enforcement added"
(#14741). Per `evidence_floor: release_note`, these PRs cite below the floor
in precision but are admitted as channel evidence with ancestry proof: the
profile's load-bearing posture claim this window *is* the channel gap, and
the ancestry receipt (merge SHA + `...1.8.0` divergence) is the primary
support for it. Where a PR underpins a capability claim rather than a channel
claim, its diff was reviewed (enricher service files, dynamic sandbox-spec
service, auth/token-manager).

Four claims remain seeded from `2026-05-07-openhands-platform-hardening`
(`commit_diff_reviewed`/`commit`); the subagent/critic and ACP/org-LLM-profile
claims carry forward unchanged in behavior.
