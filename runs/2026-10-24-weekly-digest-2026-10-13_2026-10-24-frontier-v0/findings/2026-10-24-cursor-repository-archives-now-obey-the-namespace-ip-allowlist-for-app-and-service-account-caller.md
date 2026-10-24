---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-repository-archives-now-obey-the-namespace-ip-allowlist-for-app-and-service-account-caller
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog#oct-22-2026
    precision: official_docs
  - url: https://web.archive.org/web/20261024093747id_/https://cursor.com/docs/api/origin/reference/inbound-ip-allowlist.md
    precision: official_docs
  - url: https://web.archive.org/web/20261024093815id_/https://cursor.com/docs/api/origin/reference/get-repo-tarball.md
    precision: official_docs
  - url: https://web.archive.org/web/20261014204255id_/https://cursor.com/docs/api/origin/llms-full.txt
    precision: official_docs
  - url: https://web.archive.org/web/20261024093701id_/https://cursor.com/docs/api/origin/llms-full.txt
    precision: official_docs
---
# 2026-10-24-cursor-repository-archives-now-obey-the-namespace-ip-allowlist-for-app-and-service-account-caller

Repository archives now obey the namespace IP allowlist for app and service-account callers; their git and API access still does not. The inbound IP allowlist, which Origin applies to people's credentials since the week of 28 September, gained one exception for machine credentials: repository archives. The API checks installation credentials against the installation namespace's list, and service accounts against their owning team's list. Signed downloads check the repository namespace's enforced list and, for service accounts, the owning team's list too. Before 22 October, the first archive request for a commit streamed the whole tree inline, and an installation user token could do that from anywhere. Everything else stays as it was: git over HTTPS and the API accept app and service-account credentials from any address.

Channel: docs-only. Half: both. Date: 2026-10-22, 2026-10-23.

Operator consequence: Check the applicable installation-namespace or service-account team list at the API request, then the repository namespace and any service-account team list at the signed download. An archive integration can fail at either step; qualify its actual egress addresses before changing an allowlist or choosing git fetch. Do not read the change as the allowlist now covering apps: classify each integration by credential, because a machine credential still reaches git and the API from any address. The pre-22-October archive gap is closed for archives only.

## Receipt
- https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog#oct-22-2026
- https://web.archive.org/web/20261024093747id_/https://cursor.com/docs/api/origin/reference/inbound-ip-allowlist.md
- https://web.archive.org/web/20261024093815id_/https://cursor.com/docs/api/origin/reference/get-repo-tarball.md
- https://web.archive.org/web/20261014204255id_/https://cursor.com/docs/api/origin/llms-full.txt
- https://web.archive.org/web/20261024093701id_/https://cursor.com/docs/api/origin/llms-full.txt
