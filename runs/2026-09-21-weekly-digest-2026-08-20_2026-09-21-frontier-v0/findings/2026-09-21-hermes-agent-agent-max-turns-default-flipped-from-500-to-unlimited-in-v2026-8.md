---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-hermes-agent-agent-max-turns-default-flipped-from-500-to-unlimited-in-v2026-8
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L53-L60
    precision: tagged_commit_file
---
# 2026-09-21-hermes-agent-agent-max-turns-default-flipped-from-500-to-unlimited-in-v2026-8

agent.max_turns default flipped from 500 to unlimited in v2026.8.19. The parent agent no longer has a turn ceiling by default. Subagents keep their own 250-iteration cap (item 7). The only default bound on a runaway parent is now gateway_timeout (inactivity, 1800s) and spend.

Channel: tagged-release. Half: both. Date: commit 2026-08-20; tagged 2026-08-21.

Operator consequence: Upgrading from v2026.8.18 or earlier removes a cap you may have been relying on without knowing it. If you run Hermes unattended, set `agent.max_turns` or `agent.run_budget_seconds` explicitly. This saves attention on long tasks (no more silent truncation at 500) and creates a spend-watching obligation.

## Receipt
- https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L53-L60
