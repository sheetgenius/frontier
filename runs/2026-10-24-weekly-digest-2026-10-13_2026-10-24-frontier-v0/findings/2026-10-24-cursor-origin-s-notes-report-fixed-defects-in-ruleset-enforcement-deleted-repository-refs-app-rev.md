---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-origin-s-notes-report-fixed-defects-in-ruleset-enforcement-deleted-repository-refs-app-rev
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: medium
evidence:
  - url: https://web.archive.org/web/20261024092622/https://cursor.com/docs/release-notes/origin#oct-12-2026
    precision: official_docs
  - url: https://web.archive.org/web/20261024093701id_/https://cursor.com/docs/api/origin/llms-full.txt
    precision: official_docs
  - url: https://web.archive.org/web/20261014073947id_/https://cursor.com/docs/api/origin/openapi.yaml
    precision: official_docs
  - url: https://web.archive.org/web/20261024093646id_/https://cursor.com/docs/api/origin/openapi.yaml
    precision: official_docs
  - url: https://github.com/cursor/cursor/security/advisories
    precision: official_docs
---
# 2026-10-24-cursor-origin-s-notes-report-fixed-defects-in-ruleset-enforcement-deleted-repository-refs-app-rev

Origin's notes report fixed defects in ruleset enforcement, deleted-repository refs, app revocation and merged-team privacy, with no newly identified advisory. Cursor's own notes describe controls that silently did less than configured. Some active rulesets were not enforced in repositories with many disabled ones. A repository recreated under a deleted repository's name served the deleted repository's refs, which fits the newly documented fact that deletion keeps Git data. Paused or revoked apps kept receiving installation webhooks for some time. Merged teams with members but no seats were treated as inactive, so among other effects their team privacy mode did not apply. Pull request pages could show checks from a different base, the evidence a reviewer glances at before approving. The notes give no affected period, scope or count. No advisory or CVE covering these defects was identified in the vendor advisory lists and the bounded NVD searches recorded in the crosscheck.

Channel: docs-only. Half: defect. Date: week of 2026-10-12 (vendor label; no capture of the notes page before 2026-10-24); reference addition observed between 2026-10-14T20:42Z and 2026-10-24.

Operator consequence: In repositories with many disabled rulesets, list merges and pushes since adoption that an active ruleset should have blocked. If any repository was deleted and recreated under the same name, check who could read the new one and treat the old refs as exposed to them; deletion is soft, and no hard-delete path is documented. Rotate the webhook endpoint or secret of any app you paused or revoked expecting deliveries to stop. Confirm privacy mode on merged teams, and recheck required checks on merges approved from the checks panel. Advisory silence is not a safety signal for Origin; its repair record lives in weekly release notes labeled by the week's Monday, with no advisory, affected window or fixed date attached.

## Receipt
- https://web.archive.org/web/20261024092622/https://cursor.com/docs/release-notes/origin#oct-12-2026
- https://web.archive.org/web/20261024093701id_/https://cursor.com/docs/api/origin/llms-full.txt
- https://web.archive.org/web/20261014073947id_/https://cursor.com/docs/api/origin/openapi.yaml
- https://web.archive.org/web/20261024093646id_/https://cursor.com/docs/api/origin/openapi.yaml
- https://github.com/cursor/cursor/security/advisories
