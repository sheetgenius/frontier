---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-omnigent-spend-cap-is-a-downgrade-gate-not-a-ceiling
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.7.0/omnigent/policies/builtins/cost.py
    precision: source_file_at_tag
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.7.0
    precision: github_release
---
# 2026-08-03-omnigent-spend-cap-is-a-downgrade-gate-not-a-ceiling

The source contract asks, as its second operator question: are spend caps
enforced before a call is made, or reconciled after it, on the grounds that a cap
which reconciles is a report rather than a control. Read at the v0.7.0 tag, the
answer is that Omnigent enforces before -- and that the hard cap is not a ceiling.

**Enforced before, at two phases.** `cost_budget` gates a session on cumulative
LLM spend at the request phase, described in the module as "before the LLM turn,
so text-only turns are budgeted too", and at the tool-call phase, "the point a
native PreToolUse hook can block before the action runs". A DENY at the request
phase blocks the whole turn before the model runs; at the tool-call phase it
blocks that specific call rather than ending the session. This is a control, not
a report.

**But `max_cost_usd` forces a model downgrade rather than stopping.** In the
module's own words: "once spend reaches this, the policy forces a model
downgrade. Rather than stopping the session, it DENYs while the session is still
on an expensive model (`expensive_models`) -- the whole turn at the request
phase, or each tool call -- telling the user to switch to a cheaper model with
/model. Once the session has switched off an expensive model it is allowed again
-- the budget becomes a 'downgrade gate,' not a hard stop."

An operator who writes `max_cost_usd: 5.0` expecting spend to stop at five
dollars has not configured that. Spend continues past the cap on a model outside
the configured `expensive_models` list. The behaviour is documented plainly; the
gap is between the parameter's name and what it does.

**It fails closed where it would otherwise fail silently.** When a model has no
catalog pricing, `total_cost_usd` is never written to the session, so the policy
would score the session at zero and never enforce. The module states the
mitigation: "To prevent unpriced spend silently bypassing the cap, the gate fails
closed when token usage is present but total_cost_usd is absent: it returns DENY
with a message asking the user to switch to a priced model." That failure mode
was anticipated and closed, which is more than most spend controls on this
watchlist can show.

**It can still overshoot.** "Cost is refreshed at turn boundaries, so a single
very expensive turn can still overshoot before the next check."

**Open, not asserted:** `expensive_models` is operator-supplied. What the gate
does when that list is empty or does not match the running model is not
established here and should be read from the implementation before any claim.

Channel: tagged-release. The file is present at `?ref=v0.7.0`, so this is
behaviour in the release an operator installs, not on main.
Confidence high on the quoted behaviour, which is read directly from the module
docstring at the tag.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.7.0/omnigent/policies/builtins/cost.py
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.7.0
