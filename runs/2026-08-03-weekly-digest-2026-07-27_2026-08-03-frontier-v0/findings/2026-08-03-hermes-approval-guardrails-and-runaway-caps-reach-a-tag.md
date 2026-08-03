---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-hermes-approval-guardrails-and-runaway-caps-reach-a-tag
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.3
    precision: github_release
  - url: https://github.com/NousResearch/hermes-agent/pull/66600
    precision: merged_pr
  - url: https://github.com/NousResearch/hermes-agent/pull/72203
    precision: merged_pr
---
# 2026-08-03-hermes-approval-guardrails-and-runaway-caps-reach-a-tag

Hermes v0.20.0 (tag v2026.8.3, 2026-08-03) puts last window's approval guardrails into a tagged release: 'hermes approvals suggest' mines approval history into allowlist proposals, an operator-customisable approvals.smart_policy, a consecutive-denial circuit breaker that 'stops a misbehaving loop cold', profile-correct desktop pairing approvals, and a new approval gate for docker/podman daemon-redirect commands (#72259, #72186, #72203, #74446, #71092). It also adds session-wide runaway-loop caps for web_search and delegate_task (#66600), credited in the notes as Claude Code-inspired -- which repairs the gap this publication recorded in the 2026-06-04..06-16 issue, where Hermes removed its default 600-second subagent wall-clock timeout the same week it shipped fire-and-forget background subagents, leaving runaway detection to heartbeat staleness alone. Channel: tagged-release. Resolves a carry-forward check.

## Receipt
- https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.3
- https://github.com/NousResearch/hermes-agent/pull/66600
- https://github.com/NousResearch/hermes-agent/pull/72203
