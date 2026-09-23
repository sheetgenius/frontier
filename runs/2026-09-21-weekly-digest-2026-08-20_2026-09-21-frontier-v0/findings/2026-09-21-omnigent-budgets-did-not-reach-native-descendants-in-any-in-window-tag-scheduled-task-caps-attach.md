---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omnigent-budgets-did-not-reach-native-descendants-in-any-in-window-tag-scheduled-task-caps-attach
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/7369
    precision: merged_pr
---
# 2026-09-21-omnigent-budgets-did-not-reach-native-descendants-in-any-in-window-tag-scheduled-task-caps-attach

Budgets did not reach native descendants in any in-window tag; scheduled-task caps attach fail-open. #7369 says a native descendant with no locally attached policies could skip policy evaluation even when its root session had a cost budget; the fix routes descendants through the engine to inherit root policies and read shared tree spend. It also states it applies to stored root-session policies generally. Separately, v0.11.0 lets scheduled tasks set `max_cost_usd`, which auto-attaches a `cost_budget` on each firing; per #4791 the attachment is non-fatal: if the policy store is unavailable or create fails, "the session proceeds uncapped."

Channel: tagged-release (#4791); main-unreleased at window close (#7369). Half: defect. Date: #4791 in v0.11.0 (2026-08-25); #7369 merged 2026-09-18.

Operator consequence: On every installable tag in the window (v0.10.0 through v0.14.0), a root-session budget or stored policy did not bind native child sessions that had no policies of their own. Treat root caps as covering the root only until you run v0.15.0 or later (out of window, needs its own check). For scheduled tasks, verify the policy row exists on each fired session rather than trusting the task field.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/7369
