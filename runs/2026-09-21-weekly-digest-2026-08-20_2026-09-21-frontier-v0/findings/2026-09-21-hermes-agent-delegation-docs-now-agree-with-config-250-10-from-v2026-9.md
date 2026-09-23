---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-hermes-agent-delegation-docs-now-agree-with-config-250-10-from-v2026-9
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/website/docs/user-guide/features/delegation.md#L344
    precision: tagged_commit_file
---
# 2026-09-21-hermes-agent-delegation-docs-now-agree-with-config-250-10-from-v2026-9

Delegation docs now agree with config (250 / 10), from v2026.9.11. The mismatch the parent reported against v2026.8.16.2 and v2026.8.18 is closed at v2026.9.11. The page also now says max_iterations is config-only, not a per-call delegate_task parameter. Residual: the cost-warning example at line 550 still multiplies with `max_concurrent_children: 3` (an illustration, not a stated default). v2026.9.21 adds `delegation.oneshot_max_children` (default 2) for `-q` runs only (a79d1d3a71).

Channel: tagged-release (docs in tag); deployed docs agree. Half: defect (closed). Date: commit 2026-09-08; tagged 2026-09-11.

Operator consequence: Retire the "do not size spend from the docs" caution for tags v2026.9.11 and later. With item 2, a default parent is unbounded while each of up to 10 concurrent children gets 250 iterations; size budgets from that.

## Receipt
- https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/website/docs/user-guide/features/delegation.md#L344
