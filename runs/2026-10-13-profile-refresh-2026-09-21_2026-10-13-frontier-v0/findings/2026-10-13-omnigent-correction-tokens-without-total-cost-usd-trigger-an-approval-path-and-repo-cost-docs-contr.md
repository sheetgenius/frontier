---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-correction-tokens-without-total-cost-usd-trigger-an-approval-path-and-repo-cost-docs-contr
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L84-L135
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L498-L531
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/engine.py#L563-L583
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.7.0/omnigent/policies/builtins/cost.py#L96-L108
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L380-L413
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/builder.py#L325-L354
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/POLICIES.md#L305-L313
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent-site/blob/20bcbd3abd9876a3d23686a036959a9679accad6/app/docs/policies/builtin/page.mdx#L250
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-correction-tokens-without-total-cost-usd-trigger-an-approval-path-and-repo-cost-docs-contr

Correction: tokens without total_cost_usd trigger an approval path, and repo cost docs contradict code. This corrects an older claim rather than announcing a new default. When reported usage has nonzero tokens but no `total_cost_usd` key, the gate asks; approval permits subsequent calls while that condition holds, with the approval state rooted at the parent for the spawn tree. The untracked spend counts against neither cap nor warning thresholds. The predicate is false when `total_cost_usd` is present, so this does not promise a prompt for every mixed priced/unpriced history or permanent exemption after priced usage resumes. The module's own docstring still promises a DENY, which is where the earlier reading came from. Separately, the repository's docs/POLICIES.md contradicts the code on `expensive_models`: it says omitting the list applies a Fable, Opus and GPT-5 default and that `[]` "disables the hard limit", while the code (and the website docs) treat both omission and `[]` as a hard stop on every model. The `user_period_cost_budget` added in v0.17.0 abstains whenever the period cost is 0.0, which its docstring says covers no owner (single-user mode) and unavailable pricing.

Channel: tagged-release. Half: defect. Date: 2026-10-13 (re-read at v0.18.0; behavior present since at least v0.7.0).

Operator consequence: If a budget must hold, do not approve the unpriced-model prompt and pin models that have catalog pricing, because one approval applies across the tree while the missing-cost predicate holds; budget evaluation resumes when usage is priced. Trust the code and the website over the repository's POLICIES.md: omit `expensive_models` or pass `[]` for a hard stop, name tiers only for a downgrade gate. Per-user period budgets cannot load costs for ownerless single-user conversations.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L84-L135
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L498-L531
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/engine.py#L563-L583
- https://github.com/omnigent-ai/omnigent/blob/v0.7.0/omnigent/policies/builtins/cost.py#L96-L108
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L380-L413
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/builder.py#L325-L354
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/POLICIES.md#L305-L313
- https://github.com/omnigent-ai/omnigent-site/blob/20bcbd3abd9876a3d23686a036959a9679accad6/app/docs/policies/builtin/page.mdx#L250
