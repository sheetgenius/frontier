---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omp-omp-s-always-ask-approval-prompt-opened-before-the-diff-rendered-fixed
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/issues/7957
    precision: issue
---
# 2026-08-17-omp-omp-s-always-ask-approval-prompt-opened-before-the-diff-rendered-fixed

OMP's always-ask approval prompt opened before the diff rendered  --  fixed twice in six days.

Issue #7957, filed 2026-08-07 and titled "Large/Moderate proposed edits by agent do not show before permission is asked to proceed", reported that under `always-ask` the approval dialog opened before large edit previews finished rendering. The operator was asked to approve a diff they could not see. The fix makes the prompt wait on preview readiness.

Channel: tagged-release. Ancestry: Fix commit ee2f10764c0ac64460dacea3907b4ff7d05785d6, "fix(tui): waited for edit previews before approval", authored 2026-08-07T22:58:16Z. gh api repos/can1357/oh-my-pi/compare/v17.2.13...ee2f10764c0a -> status "behind", ahead_by 0; against v17.2.12 -> status "ahead", ahead_by 1 (not in the prior tag). GitHub release v17.2.13 published 2026-08-11T14:41:52Z and npm published 17.2.13 at 2026-08-11T14:45:07Z, so every install channel carries it.

Operator consequence: Upgrade past v17.2.13 if you rely on always-ask as your review gate. Until then the gate was real but the evidence behind it was not  --  the prompt fired first and the diff arrived after, which on a large edit means the approval was blind. If you ran OMP in always-ask during this window, the approvals you gave on large edits are worth revisiting.

## Receipt
- https://github.com/can1357/oh-my-pi/issues/7957
