---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-hermes-agent-skills-read-before-write-guard-added-for-background-revi
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/55906
    precision: merged_pr
---
# 2026-07-01-hermes-agent-skills-read-before-write-guard-added-for-background-revi

Skills read-before-write guard added for background-review forks to stop silent skill corruption (channel: main-unreleased, 2026-06-30). Operator consequence: Governance fix for self-improving-agent surface. A background-review fork had silently shrunk an 807-line skill module to 186 lines (issue #55647). skill_manage mutations (patch/edit/write_file/remove_file) are now refused unless the file was first loaded via skill_view in that review session, tracked per-fork via ContextVar and reset on fork termination. Applies only to background-review sessions. Operators relying on Hermes skill self-improvement / auto-review should watch this and upgrade to protect skill integrity (merge SHA 86200e7). Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/55906
