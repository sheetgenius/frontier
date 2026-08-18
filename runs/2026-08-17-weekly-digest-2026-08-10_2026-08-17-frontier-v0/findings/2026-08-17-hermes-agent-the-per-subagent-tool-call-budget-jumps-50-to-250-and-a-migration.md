---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-the-per-subagent-tool-call-budget-jumps-50-to-250-and-a-migration
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/86506
    precision: merged_pr
---
# 2026-08-17-hermes-agent-the-per-subagent-tool-call-budget-jumps-50-to-250-and-a-migration

The per-subagent tool-call budget jumps 50 to 250, and a migration rewrites your config to match.

`delegation.max_iterations` default goes 50 -> 250 (`_config_version` 35 -> 36), with `DEFAULT_MAX_ITERATIONS` in delegate_tool.py kept in sync. The reasoning: leaf agents spend ~15-20 turns on reconnaissance before producing output, then ran out of budget mid-task and returned 'completed but unfinished' summaries (exit_reason=max_iterations while status=completed). The load-bearing part is `_migrate_to_36`, which on update lifts any config pinned at *exactly* the old default 50 to 250  --  because config values, once written, are not overwritten by default changes, so every existing install would otherwise sit at 50 forever. Deliberate overrides at any other value are preserved; an unset key inherits 250 at read time. The PR states its own risk: the cap is per child and children run concurrently, so this raises worst-case fan-out cost, with `delegation.child_timeout_seconds` (default 0 = off) as the only wall-clock backstop.

Channel: tagged-release. Ancestry: merge_commit_sha 50d98fc1f3d49d7a7b522eaa7f4553cd864a0218; compare/50d98fc1...v2026.8.16 -> status=ahead, ahead_by=743, behind_by=0 (ancestor of stable tag v2026.8.16).

Operator consequence: This is a spend change disguised as a default change, and it will apply to you on `hermes update` unless your config holds a non-50 value. If you deliberately inherited 50, write an explicit number down before upgrading  --  the migration cannot tell an inherited default from a considered one. Combined with the concurrency raise, worst-case per-batch tool calls go from 150 to 2,500.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/86506
