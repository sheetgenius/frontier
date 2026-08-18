---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-the-delegation-docs-still-document-the-defaults-that-were-replaced
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/blob/v2026.8.16.2/website/docs/user-guide/features/delegation.md#L445
    precision: official_docs
---
# 2026-08-17-hermes-agent-the-delegation-docs-still-document-the-defaults-that-were-replaced

The delegation docs still document the defaults that were replaced three days earlier.

Both delegation default raises updated `config_defaults.py`, `delegate_tool.py`, `config_migrations.py` and `cli-config.yaml.example`, but not the delegation feature page. At the newest stable tag the docs  --  in-tree and deployed  --  tell an operator that each child gets 50 turns and three run at once, and the page's own cost warning multiplies out to 27 concurrent leaf agents at max_spawn_depth 3. The real figures at that tag are 250 turns, 10 concurrent children, and 1,000 leaf agents at the same depth. The same page correctly documents worktree isolation and live steering, so this is a partial miss rather than a stale page.

Channel: docs-only. Ancestry: Read at the pinned tag: website/docs/user-guide/features/delegation.md @ v2026.8.16.2 line 445 reads `max_iterations: 50  # Max turns per child (default: 50)` and line 446 `# max_concurrent_children: 3  # Parallel children per batch (default: 3)`; line 120 states 'Maximum concurrency: 3 tasks by default'; line 361's cost warning is computed as 3x3x3=27. Confirmed live on the deployed docs at https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation (HTTP 200, same figures). The shipped defaults at that same tag are 250 and 10 per PRs #86506 and #86745.

Operator consequence: Do not size your delegation budget from the docs. Read `config_defaults.py` at the tag you are running, or dump your effective config after upgrading  --  the numbers the documentation gives you are off by 5x and 3.3x, and the cost warning it prints is off by a factor of 37.

## Receipt
- https://github.com/NousResearch/hermes-agent/blob/v2026.8.16.2/website/docs/user-guide/features/delegation.md#L445
