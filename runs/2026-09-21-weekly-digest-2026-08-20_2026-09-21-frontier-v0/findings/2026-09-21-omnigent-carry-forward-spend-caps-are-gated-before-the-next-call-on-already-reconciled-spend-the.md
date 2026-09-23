---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omnigent-carry-forward-spend-caps-are-gated-before-the-next-call-on-already-reconciled-spend-the
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/policies/builtins/cost.py
    precision: tagged_commit_file
---
# 2026-09-21-omnigent-carry-forward-spend-caps-are-gated-before-the-next-call-on-already-reconciled-spend-the

Carry-forward: spend caps are gated before the next call on already-reconciled spend; the orchestrator-attached sub-agent cap became approvable. Answer to the contract question: the check runs before a call, but it compares against spend already incurred and reconciled at turn boundaries. It can refuse the next turn or tool call; it cannot stop the turn that crosses the cap. The top-level `cost_budget` is unchanged since July. The sub-agent budget (usually attached by the orchestrating model at spawn, per #6505 a budget the user never set blocked at 12.6x its cap with no warning) no longer hard-stops: a human approval lifts it. Approvals in a shared session are resolvable by any editor (item 4).

Channel: tagged-release. Half: both. Date: cost.py changed in v0.13.0 (2026-09-09); unchanged into v0.14.0.

Operator consequence: Size `max_cost_usd` with one turn of headroom; it is a gate on the next call, not a meter. If you relied on a model-attached sub-agent cap as a hard stop, it is now an approval prompt on v0.13.0+; put a top-level `cost_budget` with empty `expensive_models` on the root if you need a stop that does not ask.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/policies/builtins/cost.py
