---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omnigent-omnigent-s-max-cost-usd-is-still-a-downgrade-gate-not-a-hard-stop
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.9.0/omnigent/policies/builtins/cost.py
    precision: official_docs
---
# 2026-08-17-omnigent-omnigent-s-max-cost-usd-is-still-a-downgrade-gate-not-a-hard-stop

Omnigent's max_cost_usd is still a downgrade gate, not a hard stop, unless you write expensive_models: [].

Nothing, and that is the finding. Across v0.8.0, v0.8.1, v0.8.2 and v0.9.0 the semantics of `max_cost_usd` are unchanged. `_resolve_expensive_models` at v0.9.0 lines 380-414 returns `block_all_models=True` when `expensive_models` is `None` or `[]`  --  that path is a true hard stop, and it was established by #1631 on 2026-06-30, before this window. Supply a non-empty `expensive_models` list and you get the downgrade gate: over budget, tool calls are DENYed while the session sits on a listed model and ALLOWed again once it moves to a cheaper one. The cap is evaluated at the request phase as well as the tool-call phase, and it fails closed when the active model is undeterminable.

Channel: tagged-release. Ancestry: Read the policy source at https://raw.githubusercontent.com/omnigent-ai/omnigent/v0.9.0/omnigent/policies/builtins/cost.py and diffed it against the same file at v0.7.0: the only differences across the whole window are type-annotation and isinstance hardening from the pyrefly lint sweep (commit 1262652a039c, 2026-08-03, #3972). No semantic change. gh api "repos/omnigent-ai/omnigent/commits?path=omnigent/policies/builtins/cost.py&since=2026-08-01" returns exactly one commit, that lint sweep. The docstring at v0.9.0 lines 21-28 still reads: "once spend reaches this, the policy forces a model downgrade. Rather than stopping the session, it DENYs while the session is still on an expensive model ... the budget becomes a 'downgrade gate,' not a hard stop."

Operator consequence: Read your own config rather than the feature name. If you wrote `cost_budget` with an explicit `expensive_models` list expecting the number to stop the session, it does not  --  it forces a model switch and the session keeps spending on the cheaper arm. Omitting `expensive_models` entirely, or setting it to `[]`, is the hard stop. Nothing in this window changed that, so anyone who checked in July does not need to re-check.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.9.0/omnigent/policies/builtins/cost.py
