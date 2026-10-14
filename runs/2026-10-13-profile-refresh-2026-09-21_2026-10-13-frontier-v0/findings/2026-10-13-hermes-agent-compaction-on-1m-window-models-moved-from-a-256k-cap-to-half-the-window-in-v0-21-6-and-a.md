---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-compaction-on-1m-window-models-moved-from-a-256k-cap-to-half-the-window-in-v0-21-6-and-a
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/98278833e29b167fe930e276eed7cb16bee68673
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L577-L594
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L553-L571
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-compaction-on-1m-window-models-moved-from-a-256k-cap-to-half-the-window-in-v0-21-6-and-a

Compaction on 1M-window models moved from a 256K cap to half the window in v0.21.6, and a seeded 256000 cap is migrated away. Since #115986 every context window above about 341K compacted at 256K tokens, so a 1M-window model compacted at a quarter of its window and a `compression.threshold` above that was ignored. v0.21.6 makes the absolute cap opt-in again and lets the ratio decide, which at the default 0.50 means compaction near 500K tokens on a 1M model. Config v47 deletes `threshold_tokens` from config.yaml only when it equals exactly 256000, the value the seeder and `hermes doctor --fix` wrote; any other value survives.

Channel: tagged-release. Half: both. Date: 2026-10-08.

Operator consequence: Long sessions on 1M-window models carry up to about twice as many input tokens per request before compaction on v0.21.6+, on top of an unlimited default turn count. If spend matters, set `compression.threshold_tokens` to an explicit value other than 256000 (250000 keeps the old behavior) so the migration leaves it alone, or lower `compression.threshold`, and re-baseline cost comparisons made on earlier tags.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/98278833e29b167fe930e276eed7cb16bee68673
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L577-L594
- https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L553-L571
