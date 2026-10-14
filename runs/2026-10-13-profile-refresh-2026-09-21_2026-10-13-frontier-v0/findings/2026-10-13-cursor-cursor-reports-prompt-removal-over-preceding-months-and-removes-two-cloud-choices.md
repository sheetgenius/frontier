---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-cursor-reports-prompt-removal-over-preceding-months-and-removes-two-cloud-choices
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: medium
evidence:
  - url: https://cursor.com/blog/improved-token-efficiency
    precision: official_docs
  - url: https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/cloud-agents#sep-21-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026
    precision: official_docs
---
# 2026-10-13-cursor-cursor-reports-prompt-removal-over-preceding-months-and-removes-two-cloud-choices

Cursor reports prompt removal over preceding months and removes two cloud choices. Cursor attributes prompt and subagent-exploration instruction removal to improving models, while reporting lower token costs without reduced quality. These are vendor measurements published this window, not proof every implementation changed this window. Separately, cloud notes remove Long-running mode and the ability to turn environment builds off. Failure to find a client string does not locate implementation on a server.

Channel: docs-only. Half: capability. Date: 2026-09-23 engineering post; cloud notes weeks of 2026-09-21 and 2026-09-28.

Operator consequence: Run a bounded removal test on generic exploration instructions, measuring task completion and review work as well as tokens. Do not turn vendor percentages into a local savings forecast. Cloud users lose choices: update workflows expecting Long-running mode or disabled builds, and account for automatic builds and recurring build failures. This is not a section with nothing to configure.

## Receipt
- https://cursor.com/blog/improved-token-efficiency
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://cursor.com/docs/release-notes/cloud-agents#sep-21-2026
- https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026
