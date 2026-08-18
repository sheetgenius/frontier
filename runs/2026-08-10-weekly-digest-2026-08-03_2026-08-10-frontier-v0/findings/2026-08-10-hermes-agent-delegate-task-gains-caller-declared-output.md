---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-hermes-agent-delegate-task-gains-caller-declared-output
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/81144
    precision: merged_pr
---
# 2026-08-10-hermes-agent-delegate-task-gains-caller-declared-output

delegate_task gains caller-declared output contracts.

An optional `output_schema` (JSON Schema) per task item and on the single-goal form. The child receives it as an explicit OUTPUT CONTRACT block; the parent validates the final answer with jsonschema and, on failure, sends exactly one bounded retry turn carrying the validation errors verbatim. Result entries gain `schema_valid`, plus `schema_errors` and `schema_retries` when relevant  --  only when a schema was requested, so schema-less delegations keep a byte-identical result shape. Malformed schemas fail loudly at dispatch before any child spawns.

Channel: tagged-release. Ancestry: merge_commit_sha 0ebaa490b515cc0a1cdaa6f8df7b20d94cf990b9; compare/0ebaa490...v2026.8.13 -> status=ahead, ahead_by=1154, behind_by=0 (ancestor of stable tag v2026.8.13).

Operator consequence: Try it wherever you currently parse subagent prose with regex. It converts 'the child returned something' into a checkable assertion with a bounded repair loop, and the wire shape for existing callers is unchanged, so adoption is per-call rather than a migration.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/81144
