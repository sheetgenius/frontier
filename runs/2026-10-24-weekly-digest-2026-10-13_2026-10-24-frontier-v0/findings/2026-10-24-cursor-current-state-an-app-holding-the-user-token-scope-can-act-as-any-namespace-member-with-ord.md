---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-current-state-an-app-holding-the-user-token-scope-can-act-as-any-namespace-member-with-ord
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261024092907/https://cursor.com/docs/api/origin/acting-as-users
    precision: official_docs
  - url: https://web.archive.org/web/20261024093800id_/https://cursor.com/docs/api/origin/reference/scopes.md
    precision: official_docs
  - url: https://web.archive.org/web/20261024093747id_/https://cursor.com/docs/api/origin/reference/inbound-ip-allowlist.md
    precision: official_docs
  - url: https://web.archive.org/web/20261024094116id_/https://cursor.com/docs/api/origin/reference/create-installation-user-token.md
    precision: official_docs
---
# 2026-10-24-cursor-current-state-an-app-holding-the-user-token-scope-can-act-as-any-namespace-member-with-ord

Current state: an app holding the user-token scope can act as any namespace member, with ordinary git/API access exempt from the IP allowlist except repository archives, with tokens that cannot be revoked one by one. Nothing new this window except the bypass narrowing; this is the authority map the profile needs. One admin approval lets an app act as any member, the member need not be asked, and the result is attributed to the member, with the app named in `performedVia` only when Origin has the delegation data. The app's approved scopes intersect the member's permissions and repository selection; other authorization and ruleset checks still apply. Uninstalling or deleting the app and account closure invalidate tokens; scope removal or installation suspension stops new mints, while grant changes apply no later than expiry.

Channel: docs-only. Half: both. Date: 2026-09-25 (introduced, per the API changelog); posture read 2026-10-24.

Operator consequence: Treat approving `namespace:user_tokens:write` as delegating every member's Origin authority up to the app's scopes; prefer selected-repository installations and narrow scopes, and ask vendors to mint with explicit `scopes` and `repositoryIds`. Uninstalling or deleting the app and account closure invalidate tokens immediately; scope removal or suspension stops new mints, and grant changes apply no later than token expiry, at most 15 minutes. Alert on actions where `performedVia.app` is present, because the human named as actor did not necessarily act.

## Receipt
- https://web.archive.org/web/20261024092907/https://cursor.com/docs/api/origin/acting-as-users
- https://web.archive.org/web/20261024093800id_/https://cursor.com/docs/api/origin/reference/scopes.md
- https://web.archive.org/web/20261024093747id_/https://cursor.com/docs/api/origin/reference/inbound-ip-allowlist.md
- https://web.archive.org/web/20261024094116id_/https://cursor.com/docs/api/origin/reference/create-installation-user-token.md
