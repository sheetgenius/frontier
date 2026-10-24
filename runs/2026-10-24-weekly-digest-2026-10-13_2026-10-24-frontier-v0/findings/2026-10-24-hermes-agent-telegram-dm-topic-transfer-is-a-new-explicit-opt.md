---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-telegram-dm-topic-transfer-is-a-new-explicit-opt
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/3cdd75ba5806633aac22bd26ac15f1b8ad762414
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/gateway/run_topics.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/config_defaults.py#L1650-L1655
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-telegram-dm-topic-transfer-is-a-new-explicit-opt

Telegram DM topic transfer is a new explicit opt-in. Telegram can move a root direct message into a fresh topic when topic mode and `telegram.extra.dm_topic_auto_transfer` are enabled. The setting defaults to false and is checked for the receiving bot, including multiplexed configurations.

Channel: tagged-release. Half: capability. Date: 2026-10-21.

Operator consequence: Run a bounded routing test with the intended bot, root DM and topic destination before enabling it. Existing conversations do not all migrate by default; keep the opt-in and result destination explicit.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/3cdd75ba5806633aac22bd26ac15f1b8ad762414
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/gateway/run_topics.py
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/config_defaults.py#L1650-L1655
