---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-repairs-stop-recovery-and-finally-distinguishes-soft-budget-warnings
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/6dda8cc2b75e211dc62af264bfd0994f602099d1
    precision: commit
  - url: https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/ui/src/components/BudgetIncidentCard.tsx
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-repairs-stop-recovery-and-finally-distinguishes-soft-budget-warnings

Beta repairs Stop recovery and finally distinguishes soft budget warnings. Native Stop can wake accounting reconciliation after a complete receipt, and only a later user message can promote queued input from before Stop into resumed work. The repair record distinguishes database regressions and bounded local API journeys from remaining Slack, warm/subscription, deployed-staging and remote-crash qualification. Separately, soft incidents become warnings rather than paused-work cards in beta. Stable v2026.1023.0 still renders the misleading wording.

Channel: preview-or-beta. Half: defect. Date: 2026-10-23.

Operator consequence: On stable, check the incident threshold and actual run before raising a cap or resuming. Trial the beta for the repaired stop/resume path with the exact provider and lifecycle you use; a passing local path is not evidence for all remote recoveries. Correct state labels can avoid unnecessary human intervention, while preserving pre-stop input and requiring a new human turn prevents a repair from silently reviving cancelled work.

## Receipt
- https://github.com/paperclipai/paperclip/commit/6dda8cc2b75e211dc62af264bfd0994f602099d1
- https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/ui/src/components/BudgetIncidentCard.tsx
