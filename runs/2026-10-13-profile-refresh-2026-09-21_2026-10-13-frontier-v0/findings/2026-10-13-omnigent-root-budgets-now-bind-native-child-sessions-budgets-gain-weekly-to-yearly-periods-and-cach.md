---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-root-budgets-now-bind-native-child-sessions-budgets-gain-weekly-to-yearly-periods-and-cach
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/7369
    precision: merged_pr
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/builder.py#L437-L444
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/builder.py#L117-L176
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/builder.py#L792-L801
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L1070-L1093
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L974-L1050
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.17.0
    precision: github_release
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/schema.py#L195-L201
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/policies/schema.py#L165-L169
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/scheduled/fire.py#L886-L910
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-root-budgets-now-bind-native-child-sessions-budgets-gain-weekly-to-yearly-periods-and-cach

Root budgets now bind native child sessions, budgets gain weekly to yearly periods, and cached tokens are priced lower. On every tag through v0.14.0 a root-session budget, or any stored session policy, skipped native child sessions that had no policies of their own; from v0.15.0 the fast path no longer skips children, so stored root-session policies reach native children and read shared spend; this does not establish inheritance of every agent-spec restriction. v0.17.0 adds per-user budgets for a day, week, month, quarter or year (UTC), with the same hard-stop or downgrade-gate rules as the daily budget. The builder can collect multiple periods and seeds the oldest range; the evaluator sums shared records. Correct independent accounting for stacked periods was not established, so do not infer an enforced one-period limit from the stale docstring or recommend stacking caps. v0.17.0 also prices cached prompt tokens at the cache-read rate for openai-agents and Codex-native sessions ("stop billing cached prompt tokens at the full input rate"), so the same work records less spend. Unannounced in the notes, v0.17.0 turns `event["context"]["user_daily_cost"]` from one record into a list of daily records, so a custom policy written against the old single-record shape needs updating. Scheduled-task caps still attach non-fatally: "an uncapped session is better than a dead run".

Channel: tagged-release. Half: both. Date: 2026-09-22 (v0.15.0); 2026-10-06 (v0.17.0).

Operator consequence: On v0.15.0 or later a root `cost_budget` covers child sessions; if you sized root caps assuming children were free, expect earlier trips. Monthly or quarterly caps no longer need external tooling, subject to the ownerless single-user limitation (section 7); use a single chosen period until stacked-period accounting is established. Re-baseline caps for Codex-native and openai-agents sessions after v0.17.0, since caps set against the old, inflated numbers now allow more real spend. Fix custom policies that read `user_daily_cost` before upgrading past v0.16.0, and keep checking that each scheduled firing actually got its cap.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/7369
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/builder.py#L437-L444
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/builder.py#L117-L176
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/builder.py#L792-L801
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L1070-L1093
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L974-L1050
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.17.0
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/schema.py#L195-L201
- https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/policies/schema.py#L165-L169
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/scheduled/fire.py#L886-L910
