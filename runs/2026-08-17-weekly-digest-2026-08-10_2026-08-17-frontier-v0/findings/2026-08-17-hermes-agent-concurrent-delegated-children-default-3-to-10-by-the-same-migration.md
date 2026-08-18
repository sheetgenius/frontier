---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-concurrent-delegated-children-default-3-to-10-by-the-same-migration
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/86745
    precision: merged_pr
---
# 2026-08-17-hermes-agent-concurrent-delegated-children-default-3-to-10-by-the-same-migration

Concurrent delegated children default 3 to 10, by the same migration mechanism.

`delegation.max_concurrent_children` default 3 -> 10 (`_config_version` 36 -> 37), with `_migrate_to_37` lifting configs pinned at exactly 3 on update and preserving deliberate non-3 values  --  the same pattern as #86506 one day earlier. The chosen value is explicitly tuned to sit at or below the existing high-cost advisory threshold (`>10`) so the new default never trips the project's own cost warning. Floor stays 1; there is no ceiling. The PR concedes the trade directly: each child consumes API tokens independently, so this is a throughput and latency win paid for in parallel spend.

Channel: tagged-release. Ancestry: merge_commit_sha ce996d40577c242dc04cc6d66e827dcdf8daa569; compare/ce996d40...v2026.8.16 -> status=ahead, ahead_by=502, behind_by=0 (ancestor of stable tag v2026.8.16).

Operator consequence: Read this together with the iteration raise: within 24 hours the shipped delegation envelope widened roughly 16x, and both changes reach existing installs through a config migration rather than waiting for anyone to opt in. If you run Hermes on a metered key, set explicit values for both keys before your next update and watch your first fan-out bill. Note also the deliberate design of picking 10 so the default stays under the warning threshold  --  the guardrail was moved to fit the default, not the other way round.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/86745
