---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-bugbot-fixes-new-branch-writes-and-moves-team-billing-to-the-team-limit
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/bugbot#sep-28-2026
    precision: official_docs
---
# 2026-10-13-cursor-bugbot-fixes-new-branch-writes-and-moves-team-billing-to-the-team-limit

Bugbot fixes New Branch writes and moves team billing to the team limit. Bugbot reports fixing Autofix writing to the pull request's own branch despite New Branch mode. Token-billed team runs are governed by the team's spend limit instead of the installing user's personal limit.

Channel: docs-only (hosted Bugbot notes). Half: both. Date: week of 2026-09-28.

Operator consequence: Inspect earlier Autofix commits if branch separation mattered. Set and monitor the team budget; a personal limit is not the governing control for these team runs. This is distinct from an unverified per-Project budget.

## Receipt
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://cursor.com/docs/release-notes/bugbot#sep-28-2026
