---
schema_version: bitter.frontier_profile.v0
profile_id: openhands
label: OpenHands
owner: OpenHands
source_contract: sources/openhands.yml
homepage: https://openhands.dev/
docs: https://docs.openhands.dev/
repo: https://github.com/OpenHands/OpenHands
surface_class: mixed_official_docs
evidence_floor: release_note
status: active_watch
last_updated: 2026-06-16
last_full_review: 2026-06-03
claims:
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
    last_verified: 2026-05-27
    status: active
  - id: mcp-acp-env-per-org-member
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-05-27
    status: active
  - id: frontend-cve-cluster-and-acp-secrets
    finding_id: 2026-06-03-openhands-cve-2026-44492-axios
    last_verified: 2026-06-03
    status: active
  - id: ohe-default-org-bootstrap
    finding_id: 2026-06-10-openhands-ohe-default-org-bootstrap
    last_verified: 2026-06-16
    status: active
  - id: byok-model-access-gating
    finding_id: 2026-06-14-openhands-ohe-multimodel-discovery-byok-gating
    last_verified: 2026-06-16
    status: active
  - id: conversation-concurrency-limits
    finding_id: 2026-06-15-openhands-conversation-concurrency-limits
    last_verified: 2026-06-16
    status: active
  - id: hide-personal-workspaces-ui-only
    finding_id: 2026-06-10-openhands-hide-personal-workspaces
    last_verified: 2026-06-16
    status: active
  - id: pluginspec-source-credential-redaction
    finding_id: 2026-06-13-openhands-pluginspec-source-credential-redaction
    last_verified: 2026-06-16
    status: active
  - id: mcp-for-acp-agents
    finding_id: 2026-06-15-openhands-mcp-for-acp-agents
    last_verified: 2026-06-16
    status: active
posture_basis:
  capability:
    - 2026-05-07-openhands-platform-hardening
    - 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    - 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    - 2026-06-10-openhands-ohe-default-org-bootstrap
    - 2026-06-15-openhands-mcp-for-acp-agents
  accessibility:
    - 2026-05-07-openhands-platform-hardening
    - 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    - 2026-05-27-openhands-acp-ui-and-org-llm-profiles
  governance:
    - 2026-05-07-openhands-platform-hardening
    - 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    - 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    - 2026-06-10-openhands-ohe-default-org-bootstrap
    - 2026-06-14-openhands-ohe-multimodel-discovery-byok-gating
    - 2026-06-15-openhands-conversation-concurrency-limits
    - 2026-06-10-openhands-hide-personal-workspaces
stance:
  use_for: "Teams that want the platform to own sandboxing, evaluation, and sub-agent posture, and are willing to take the platform's defaults rather than build their own. Ops shops needing parity across GUI, CLI, and SDK from a single tool."
  avoid_for: "Operators who want governance to live in their own codebase: OpenHands ships sub-agent delegation, critic scoring, and sandbox grouping as platform decisions, not knobs you bolt on."
  watch_next: "Whether the critic score correlates with operational outcomes anyone actually measures, and whether sub-agent delegation gets adopted enough to justify the new orchestration surface."
---

# OpenHands

## Recent activity (2026-06-04 to 2026-06-16)

OpenHands spent the window becoming a tenant-provisioning system, mostly on
main rather than in a release. A
[default-organization bootstrap](https://github.com/OpenHands/OpenHands/pull/14752)
makes the first user to sign in after enabling the flag the org owner
(owner-email lists removed); on top of it sit
[per-org and per-user concurrency limits](https://github.com/OpenHands/OpenHands/pull/14168)
enforced with HTTP 429 (Personal 3, commercial 10) and a
[BYOK gate](https://github.com/OpenHands/OpenHands/pull/14773)
(`allow_user_llm_configuration`) that locks an org to a curated,
proxy-served model set and hides the custom-key inputs. The new
[hide-personal-workspaces flag](https://github.com/OpenHands/OpenHands/pull/14741)
is, the docs say explicitly, UI-only and not an access-control boundary;
do not treat it as one. On security, the react-router
[CVE-2026-42342](https://github.com/OpenHands/OpenHands/pull/14684)
shipped in release 1.8.0, but the postcss XSS
[CVE-2026-41305](https://github.com/OpenHands/OpenHands/pull/14770)
and a fix that stops persisting
[git OAuth tokens embedded in `PluginSpec.source` as plaintext in the database](https://github.com/OpenHands/OpenHands/pull/14795)
are on main, unreleased; rebuild the frontend and rotate any token embedded
in a repo source URL. The ACP front-end thread also continued:
[MCP config is now attachable to ACP agents](https://github.com/OpenHands/OpenHands/pull/14613),
which also fixed a plaintext leak where remote MCP API keys were serialized
as bare `auth:<key>`. The 1.8.0 release itself mostly consolidated May work;
the enterprise cluster lands later.

## Operator read

OpenHands is an operating environment, not a harness, and as of the
2026-05-13 → 2026-05-27 window, an environment that explicitly fronts
*other harnesses*. The Settings → Agent ACP page lets an operator point
OpenHands at Claude Code, Codex, Gemini CLI, or a custom command as the
actual agent doing the work, with LLM/Condenser/MCP settings greyed out
because the back-end agent owns those. Org-level LLM profiles add the
policy substrate that positioning requires. Adopting OpenHands now means
choosing between owning the agent surface yourself (built-in agent) or
shelling out to a third-party agent under OpenHands' RBAC, sandboxing,
and integrations.

## The ACP front-end move

[PR #14401](https://github.com/OpenHands/OpenHands/pull/14401) (merged
2026-05-15) ships a Settings → Agent page that wires OpenHands to
external Agent Client Protocol agents: Claude Code, Codex, Gemini
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
is the load-bearing operation: the same transaction updates the org's
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

## Platform ownership surfaces

Sub-agent delegation is OpenHands' clearest "platform owns the routing"
move. Behind
[`enable_sub_agents`](https://github.com/OpenHands/OpenHands/pull/14122)
(default off), work is routed to specialized built-in agents (`bash-runner`,
`code-explorer`, `general-purpose`, `web-researcher`), each with tool surfaces
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
is deployment-controlled: `OH_ENABLE_CRITIC_BY_DEFAULT` defaults disabled;
per-instance disable is `verification.critic_enabled = false`.

The sandbox grouping strategy is now a
[user-configurable UI option](https://github.com/OpenHands/OpenHands/commit/90cf5f8003c247597481bcbef9a5aa73eb899e10);
operators select grouping policy without editing config files. KVM
acceleration via `SANDBOX_KVM_ENABLED` (v1.7.0) cuts sandbox startup latency
on hosts that support it: opt-in flag.

## Security posture

Credential handling shows active maintenance, not assumed defaults. The
[log redaction commit](https://github.com/OpenHands/OpenHands/commit/61e3dc2cadbefd4e0649b7c141ac2335c021ad2b)
scrubs credential patterns from logs before write. ACP subprocesses
[receive injected secrets](https://github.com/OpenHands/OpenHands/commit/cf156b0073350ca8e93067bc2f4ae18b90537a0a)
without the primary agent context carrying those secrets: useful for tools
that need credentials the agent itself should not see. Debug logging of hook
configuration secrets has been
[removed](https://github.com/OpenHands/OpenHands/commit/0c6c461555f8651347ed140f1c555ff8a88ddf56).
Track these in commit history rather than docs; the pattern is fixes-as-they-
ship rather than a published security policy.

## Integration reach

OpenHands runs on
[self-hosted GitLab](https://github.com/OpenHands/OpenHands/commit/4e63531fa6595ec55102f08ef129845931fcd8ff),
not just cloud: operators on private GitLab can connect without a
cloud-GitLab account. The platform ships GUI, CLI, SDK, and a hosted cloud
deployment path with built-in Slack, Jira, Linear, and GitHub integrations.
The reach is real; so is the deployment dependency: Docker and container
support are required for the sandbox model.

## What you're trading

Adopt OpenHands when you want the platform to own sandboxing, evaluation, and
sub-agent posture, and when feature parity across GUI / CLI / SDK matters
more than building your own thin layer. Skip it when you want governance to
live in your own codebase: OpenHands ships those decisions as platform
defaults, not knobs you bolt on. The trade is real and intentional: less
ownership of the agent surface in exchange for less integration work.

*Posture basis: `2026-05-07-openhands-platform-hardening`,
`2026-05-12-openhands-subagent-delegation-and-critic-evaluation`,
`2026-05-27-openhands-acp-ui-and-org-llm-profiles`.*

## Open questions

- When OpenHands is fronting Claude Code, Codex, or Gemini CLI via ACP,
  how do the org-level LLM profile model and the back-end agent's own
  policy surfaces compose? OpenHands greys out LLM/Condenser/MCP
  because the back-end owns those, but the org-level profile still
  declares preferences. Resolution rule is not documented.
- The team-org UI for org-level LLM profiles is a follow-up PR not
  yet in window. When does team-org adoption become usable?
- Have multi-tenant operators rotated MCP credentials that may have
  been cross-contaminated pre-2026-05-22? There is no advisory page;
  the leak is fixed but the audit step is operator-owned.
- No tagged release in window: when does the next 1.x consolidate
  the ACP UI, org-level LLM profiles, MCP/ACP env scoping, and
  enterprise DC integrations? Operators on the release channel see
  none of this until then.
- Is `enable_sub_agents` a user-level or operator-level setting in multi-user
  deployments? Can an operator force sub-agents off platform-wide, or must each
  user opt in individually?
- What constraints govern custom sub-agents defined in `.agents/agents/*.md`?
  Which tools can a custom sub-agent access, and how is its tool surface declared
  or restricted?
- How is the critic score (0-1) calibrated across session types? What separates
  `agent_behavioral_issues` from `user_followup_patterns` in practice?
- Does the KVM sandbox acceleration path (`SANDBOX_KVM_ENABLED`) change the
  security boundary of the sandbox, or only its startup latency?

## What to watch next

- The next 1.x release consolidating the in-window work: ACP UI,
  org-level LLM profiles, MCP/ACP env scoping, Azure DevOps via Entra
  ID, Bitbucket DC + Jira DC integrations with KOTS-managed service
  accounts. The work has shipped on main; the operator-visible
  consolidation has not.
- Team-org UI for org-level LLM profiles (follow-up PR not in window).
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

## Profile hygiene

This profile follows the discipline in `METHOD.md`: every
concrete claim in the prose has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite finding IDs
when naming a specific feature, behavior change, or cross-provider comparison.

Four claims are seeded from the prior finding (`2026-05-07-openhands-platform-hardening`,
evidence precision: `commit_diff_reviewed` and `commit`). Two claims are from the
current window (`2026-05-12-openhands-subagent-delegation-and-critic-evaluation`,
evidence precision: `merged_pr` and `release_note`). All evidence is above the
`release_note` floor.
