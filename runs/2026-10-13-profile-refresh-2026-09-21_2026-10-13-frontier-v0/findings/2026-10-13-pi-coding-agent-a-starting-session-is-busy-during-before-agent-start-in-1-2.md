---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-a-starting-session-is-busy-during-before-agent-start-in-1-2
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/a447ba11f3e7760fcff91e924bda8c20033953ea
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-a-starting-session-is-busy-during-before-agent-start-in-1-2

A starting session is busy during before_agent_start in 1.2.0. During before_agent_start, isIdle is now false, sendMessage queues into the starting run, sendUserMessage requires deliverAs, and an abort during startup is honored when the run starts. Custom-message runs also retain handler-added prompt sections rather than removing them after their first tool call and breaking the prompt cache.

Channel: tagged-release. Half: both. Date: 2026-10-12.

Operator consequence: Migrate extensions that send messages during startup, not only their user/custom event typing. Test explicit delivery choices rather than attempting a second run while startup handlers are active.

## Receipt
- https://github.com/earendil-works/pi/commit/a447ba11f3e7760fcff91e924bda8c20033953ea
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/CHANGELOG.md
