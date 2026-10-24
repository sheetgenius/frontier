---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-apps-can-now-create-repositories-and-request-bot-reviewers
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
  - url: https://web.archive.org/web/20261024094211id_/https://cursor.com/docs/api/origin/reference/create-repo.md
    precision: official_docs
  - url: https://web.archive.org/web/20261024093800id_/https://cursor.com/docs/api/origin/reference/scopes.md
    precision: official_docs
  - url: https://web.archive.org/web/20261014073947id_/https://cursor.com/docs/api/origin/openapi.yaml
    precision: official_docs
  - url: https://web.archive.org/web/20261024093646id_/https://cursor.com/docs/api/origin/openapi.yaml
    precision: official_docs
  - url: https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog#oct-23-2026
    precision: official_docs
---
# 2026-10-24-cursor-apps-can-now-create-repositories-and-request-bot-reviewers

Apps can now create repositories and request bot reviewers. An installed app can now create repositories in its namespace, and an app's installation token can request reviews, including from bots, where it previously could not name anyone. Combined with section 16, an app can now create a repository, push to it, request a bot reviewer and, where `ORIGIN_CODEOWNERS` names it, approve the paths it owns; whether Origin discounts an app's approval on a pull request the same app authored is not documented. Read back and qualify the new repository's effective protections before permitting writes; inherited or implicit defaults were not established.

Channel: docs-only. Half: capability. Date: 2026-10-20, 2026-10-22, 2026-10-23 (API); week of 2026-10-12 (MCP `create_repository`).

Operator consequence: Approving `namespace:repositories:create` also means granting the app every repository in the namespace, because only `all`-mode installations can use it; weigh that, not just the create ability. Read back and qualify effective protections in every app-created repository before permitting writes; add the required rules where that check finds a gap. Integrations should move to the `reviewers` list. For agent-review pipelines this removes a workaround: bots can be requested and tracked like people, and webhooks now report them.

## Receipt
- https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog#oct-22-2026
- https://web.archive.org/web/20261024094211id_/https://cursor.com/docs/api/origin/reference/create-repo.md
- https://web.archive.org/web/20261024093800id_/https://cursor.com/docs/api/origin/reference/scopes.md
- https://web.archive.org/web/20261014073947id_/https://cursor.com/docs/api/origin/openapi.yaml
- https://web.archive.org/web/20261024093646id_/https://cursor.com/docs/api/origin/openapi.yaml
- https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog#oct-23-2026
