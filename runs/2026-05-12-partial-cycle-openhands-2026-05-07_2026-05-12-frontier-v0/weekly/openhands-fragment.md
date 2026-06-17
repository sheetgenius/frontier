---
schema_version: bitter.frontier_digest_fragment.v0
fragment_id: 2026-05-12-openhands-fragment
window:
  start: 2026-05-07
  end: 2026-05-12
parent_run: 2026-05-12-partial-cycle-openhands-2026-05-07_2026-05-12-frontier-v0
status: not_published
note: >
  Digest fragment from a partial cycle. Not itself a weekly digest.
  Exists to test the digest-then-profile sequencing on OpenHands,
  the productized platform calibration source.
---

# OpenHands Fragment (Partial Cycle, 2026-05-07 -- 2026-05-12)

Two additions from OpenHands this window fit the same theme: making previously
invisible platform state visible and operator-configurable.

The first is sub-agent delegation. Behind the `enable_sub_agents` user setting
(default off), OpenHands now routes tasks to four built-in sub-agents:
`bash-runner`, `code-explorer`, `general-purpose`, and `web-researcher`. Custom
sub-agents can be defined as Markdown files under `.agents/agents/*.md`. Each
sub-agent inherits the parent LLM config but runs with a narrower tool surface
-- a bash-runner doesn't need web access; a web-researcher doesn't need a
terminal. The feature is gated by default, which is the right call: sub-agent
delegation changes session scope, cost, and authority in ways that require
deliberate operator choice.

The design pattern is worth noting. OpenHands isn't giving every agent access to
everything and trusting the model to self-limit. It is building a routing layer
that assigns work to specialized agents whose capabilities are structurally
constrained. Bash work goes to the bash agent, not to an agent that also happens
to have bash access. This is authority surface reduction as product architecture.

The second addition is the critic evaluation display. `CriticResult` objects
now appear in the GUI with a score (0--1), a star rating (0--5), and color-coded
bands: green ≥60%, yellow ≥40%, red <40%. The categories shown are
`agent_behavioral_issues`, `user_followup_patterns`, and
`infrastructure_issues`. It is on by default for new users. Operators can
disable it via `verification.critic_enabled`. A separate `CRITIC_API_KEY` routes
critic spend independently of the primary model key.

The default-on choice matters. A score display in the UI creates a feedback loop
that doesn't exist when evaluation lives in logs: users see when sessions are
degrading, operators see behavioral patterns across users, and the platform
communicates confidence rather than hiding it. Whether this is net positive
depends on whether the critic scores are calibrated -- but the posture of
surfacing evaluation state rather than suppressing it is worth modeling.

Taken together: OpenHands is productizing the parts of agentic software
development that other tools leave to the operator's imagination -- evaluation,
sub-task routing, authority scoping, sandbox policy. The question for anyone
building on or adjacent to it is which of those parts you want the platform to
own and which you want to own yourself.

## What To Try

- Enable `enable_sub_agents` in a multi-task session and observe how the
  orchestrator routes work across `bash-runner`, `code-explorer`, and
  `web-researcher`. Note whether sub-agent scoping reduces total session cost
  or context accumulation.
- Review the critic display in a session that completes cleanly versus one that
  hits errors. Check whether `agent_behavioral_issues` vs. `infrastructure_issues`
  categorization matches your read of what went wrong.
- If you run OpenHands in a resource-constrained environment, test
  `SANDBOX_KVM_ENABLED` (v1.7.0) for sandbox startup latency improvement.

## What Remains Uncertain

- Sub-agent delegation is user-setting-gated (not operator-setting-gated). The
  distinction matters for multi-user deployments: does an operator have a
  platform-level switch, or must each user opt in independently?
- The custom sub-agent format (`.agents/agents/*.md` Markdown files) is not yet
  documented in the main OpenHands docs. What constraints apply -- which tools
  can a custom sub-agent access, and how is its tool surface declared?
- Critic score calibration is not documented: what does a score of 0.4 mean
  operationally, and under what conditions does the critic's `agent_behavioral_issues`
  category fire versus `user_followup_patterns`?
