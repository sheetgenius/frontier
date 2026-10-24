---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-new-merge-gates-and-refusals-group-approvals-maximum-file-size-per-branch-merge-methods
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog#oct-14-2026
    precision: official_docs
  - url: https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog#oct-15-2026
    precision: official_docs
  - url: https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md
    precision: official_docs
  - url: https://web.archive.org/web/20261024093830id_/https://cursor.com/docs/api/origin/reference/merge-pull-request.md
    precision: official_docs
  - url: https://web.archive.org/web/20261024092622/https://cursor.com/docs/release-notes/origin#oct-12-2026
    precision: official_docs
---
# 2026-10-24-cursor-new-merge-gates-and-refusals-group-approvals-maximum-file-size-per-branch-merge-methods

New merge gates and refusals: group approvals, maximum file size, per-branch merge methods and stale-stack merges. A ruleset can now require approvals from specific organization groups, each with its own minimum (1 to 50); only members' approvals count, and a group that later stops resolving blocks every merge the rule covers, which is fail-closed. A repository ruleset can cap file size per push up to 100 MiB and rejects the whole push when a file exceeds it. A pull-request rule can restrict merge methods per branch. One refusal prevents landing on an obsolete stack branch; the other reports an existing linear-history failure earlier.

Channel: docs-only. Half: both. Date: 2026-10-13 (vendor label, first pinned this window), 2026-10-14, 2026-10-15, 2026-10-17; week of 2026-10-12 notes.

Operator consequence: Use group approvals where a specific team must sign off, and remember that a group that no longer resolves blocks covered merges; a display-name change is not documented to do so. Set a file-size ceiling well below 100 MiB on repositories where agents push generated artifacts. Expect some stacked pull requests that used to look mergeable to show `needs_restack`; restack rather than reaching for a bypass. These are the gates that let a team delegate more pushing to agents without widening what reaches the protected branch.

## Receipt
- https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog#oct-14-2026
- https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog#oct-15-2026
- https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md
- https://web.archive.org/web/20261024093830id_/https://cursor.com/docs/api/origin/reference/merge-pull-request.md
- https://web.archive.org/web/20261024092622/https://cursor.com/docs/release-notes/origin#oct-12-2026
