---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-further-cancellation-and-child-approval-lifecycle-defects-are-repaired
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/20c1317b388febc95f160c777873e30ee968a055
    precision: commit
  - url: https://github.com/vercel/eve/commit/6ab30a50b446b71e18a2aa51fd2f4eae5b9f1392
    precision: commit
  - url: https://github.com/vercel/eve/commit/caf61ffb9b9977c7d1bc058fa227e894ec7304e7
    precision: commit
  - url: https://github.com/vercel/eve/releases/tag/eve%400.75.0
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.77.0
    precision: github_release
---
# 2026-10-13-eve-further-cancellation-and-child-approval-lifecycle-defects-are-repaired

Further cancellation and child-approval lifecycle defects are repaired. 0.75.0 stops restoring an already answered approval after a cancelled response and reports interrupted approved calls instead of rerunning them. Child approvals stay visible on the parent until the child settles them, so a refused responder does not strand the prompt. 0.77.0 restores cancellation requests from clients/stores after input resumes a held turn.

Channel: tagged-release. Half: defect. Date: 2026-10-08 (eve@0.75.0), 2026-10-11 (eve@0.77.0).

Operator consequence: Add cancelled responses, refused child responders and cancellation after resume to regression coverage. Earlier fixes were real, but 0.70.0 was not a universal integrity floor; none of these repairs closes section 14 in stable.

## Receipt
- https://github.com/vercel/eve/commit/20c1317b388febc95f160c777873e30ee968a055
- https://github.com/vercel/eve/commit/6ab30a50b446b71e18a2aa51fd2f4eae5b9f1392
- https://github.com/vercel/eve/commit/caf61ffb9b9977c7d1bc058fa227e894ec7304e7
- https://github.com/vercel/eve/releases/tag/eve%400.75.0
- https://github.com/vercel/eve/releases/tag/eve%400.77.0
