---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-projects-reaches-enterprise-in-documentation-but-per-project-controls-remain-unspecified
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20260922133501/https://cursor.com/docs/agent/projects
    precision: official_docs
  - url: https://cursor.com/docs/agent/projects
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/web#sep-14-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/agents-window#sep-17-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/cloud-agents#sep-21-2026
    precision: official_docs
---
# 2026-10-13-cursor-projects-reaches-enterprise-in-documentation-but-per-project-controls-remain-unspecified

Projects reaches Enterprise in documentation but per-Project controls remain unspecified. The Projects page now includes Enterprise, and a team Enable Projects switch can hide the feature. The coordinator starts parallel agents and can move a worker to another model. The inspected Projects documentation names no per-Project budget, approval gate or concurrency setting. That does not mean no general spend controls exist; service-account limits are in section 21.

Channel: docs-only. Half: both. Date: docs changed after 2026-09-22T13:35Z; team-switch note labeled week of 2026-09-14.

Operator consequence: Check Team Settings > Chat > Enable Projects and actual Enterprise availability instead of guessing from the opt-in wording. Monitor Project usage and model changes. Determine whether any chosen billing control caps this Project; the receipts do not establish that service-account limits do. A documented Project budget or approval setting would settle the narrower open question.

## Receipt
- https://web.archive.org/web/20260922133501/https://cursor.com/docs/agent/projects
- https://cursor.com/docs/agent/projects
- https://cursor.com/docs/release-notes/web#sep-14-2026
- https://cursor.com/docs/release-notes/agents-window#sep-17-2026
- https://cursor.com/docs/release-notes/cloud-agents#sep-21-2026
