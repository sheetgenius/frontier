---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-stable-soft-budget-warnings-look-like-stopped-work-the-wording-fix-is-canary-only
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/ui/src/components/BudgetIncidentCard.tsx
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/reference/changelog.md
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
    precision: official_docs
---
# 2026-10-13-paperclip-stable-soft-budget-warnings-look-like-stopped-work-the-wording-fix-is-canary-only

Stable soft-budget warnings look like stopped work; the wording fix is canary-only. BudgetIncidentCard at stable uses hard-stop/paused wording and resume/keep-paused actions for soft warning incidents too. The canary fix checks thresholdType and renders soft incidents as warnings with work continuing; hard incidents retain stopped-work wording. This is a UI defect, not evidence that a soft threshold stops spending. October 13 documentation screenshots use this extra patch and do not establish unpatched stable UI behavior.

Channel: preview-or-beta (fix in 2026.1013.0-canary.16; defect present in v2026.1012.0). Half: defect. Date: 2026-10-13.

Operator consequence: Check the incident threshold type and actual agent/project execution state before treating a stable card as evidence that work stopped. A soft warning does not require raising the cap to resume a paused scope. Watch for this commit in a later stable rather than assuming current screenshots mean it already shipped there.

## Receipt
- https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/ui/src/components/BudgetIncidentCard.tsx
- https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/reference/changelog.md
- https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
