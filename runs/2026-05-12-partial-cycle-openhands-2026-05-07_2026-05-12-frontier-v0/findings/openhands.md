---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-05-07
  end: 2026-05-12
versions_covered: "v1.7.0..main (2026-05-07 to 2026-05-12)"
status: accepted_signal
confidence: medium
accessibility_impact: medium
operator_relevance: high
actionability: test
evidence:
  - label: "Add sub-agent task tool set (PR #14122)"
    url: https://github.com/OpenHands/OpenHands/pull/14122
    precision: merged_pr
  - label: "Add CriticResult display in GUI (PR #14133)"
    url: https://github.com/OpenHands/OpenHands/pull/14133
    precision: merged_pr
  - label: "OpenHands v1.7.0 release notes"
    url: https://github.com/OpenHands/OpenHands/releases/tag/1.7.0
    precision: release_note
---

# OpenHands: Sub-Agent Delegation and Critic Evaluation Surface

## What Changed

OpenHands shipped two operator-visible additions in the May 7--12 window: opt-in
sub-agent delegation and a critic evaluation display in the GUI.

**Sub-agent delegation** (`enable_sub_agents` user setting, default: `False`):
PR #14122 adds a `TaskToolSet` to the app server that routes tasks to built-in
sub-agents. Four sub-agents ship in-box: `bash-runner`, `code-explorer`,
`general-purpose`, and `web-researcher`. Custom sub-agents can be defined as
Markdown files under `.agents/agents/*.md` in the working directory. Sub-agents
inherit the parent agent's LLM configuration, with streaming disabled during
delegation. The feature is user-setting-gated: operators must enable it
explicitly. The default remains single-agent operation.

**Critic evaluation GUI** (PR #14133): `CriticResult` objects are now
surfaced in the GUI as a score (0--1) with a star rating (0--5) and color-coded
threshold bands: green at ≥60%, yellow at ≥40%, red below 40%. Categories
shown: `agent_behavioral_issues`, `user_followup_patterns`,
`infrastructure_issues`. The critic display is deployment-controlled via
`OH_ENABLE_CRITIC_BY_DEFAULT`; disabled by default unless explicitly enabled in
the deployment. Operators can also toggle it per-deployment via
`verification.critic_enabled = false` in config.
`CRITIC_API_KEY` allows centralized cost routing for the critic endpoint
separately from the primary model key.

**v1.7.0 baseline context**: the May 1 stable release (within this profile
window) shipped KVM sandbox acceleration (`SANDBOX_KVM_ENABLED` flag for
lower-latency container startup), exposed the SDK settings schema, moved
Tavily search to MCP settings, and patched several CVEs. These are noted
here as baseline context; the primary signals are the delegation and critic
additions above.

## Operator Consequence

Sub-agent delegation is meaningful for operators running long-horizon or
multi-task sessions: a single invocation can now spawn scoped sub-agents for
bash execution, code exploration, web research, and general-purpose tasks. The
opt-in gate (default off) is correct for a feature this consequential -- an
operator choosing to enable it should understand what sub-agent delegation means
for session scope, cost, and authority surface before enabling.

The critic GUI makes evaluation state visible to operators and users without
requiring separate tooling. A score display in the interface is a different
operator posture than evaluation that lives only in logs: it invites feedback
loops and surfaces degraded sessions in real time. Whether deployments enable it
is operator-controlled via `OH_ENABLE_CRITIC_BY_DEFAULT`.

## Frontier Implication

Sub-agent delegation at the platform level (not the LLM level) is a direction
worth studying, not just noting. OpenHands is building a routing layer where
the orchestrator assigns work to specialized sub-agents with constrained tool
surfaces. The `bash-runner` sub-agent doesn't need web access; the
`web-researcher` doesn't need bash. This is authority surface reduction as a
product pattern.

The critic evaluation surface belongs in the same category as OpenClaw's
per-agent message restrictions: explicit, operator-configurable, and visible.
A durable loop should ask whether its own evaluation posture is visible to
operators in the same way -- or whether evaluation state is opaque by default.

## Signal

Sub-agent delegation and critic evaluation are both action-bearing:
- Operators running multi-task sessions should test `enable_sub_agents` and
  evaluate whether built-in sub-agents reduce session length or improve task
  routing.
- Operators managing cost should configure `CRITIC_API_KEY` to separate critic
  spend from primary model spend.
- Deployments that want to enable the critic display should set
  `OH_ENABLE_CRITIC_BY_DEFAULT`; operators can also toggle per-deployment via
  `verification.critic_enabled`.
