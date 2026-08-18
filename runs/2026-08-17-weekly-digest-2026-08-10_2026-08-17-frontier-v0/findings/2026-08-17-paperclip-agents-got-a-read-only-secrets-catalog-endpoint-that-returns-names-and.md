---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-agents-got-a-read-only-secrets-catalog-endpoint-that-returns-names-and
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/9530
    precision: merged_pr
---
# 2026-08-17-paperclip-agents-got-a-read-only-secrets-catalog-endpoint-that-returns-names-and

Agents got a read-only secrets catalog endpoint that returns names and UUIDs without board access.

A new GET /companies/:companyId/secrets/catalog returns id, name, key and status for every active company secret, guarded by assertBoardOrAgent plus assertCompanyAccess -- so an agent, not only a board member, can resolve a secret name like HOMEBOX_API_KEY to the UUID that adapterConfig.env requires. No values, no provider configuration, no version history. The existing board-only full-detail list endpoint is unchanged. The stated motivation is that operators were previously reading UUIDs out of browser network traffic.

Channel: main-unreleased. Ancestry: PR #9530 merge commit 0819cac4c, merged 2026-08-13T22:43:43Z, base master. compare 0819cac4c...master -> status=ahead. compare 0819cac4c...v2026.817.0 -> diverged, ahead=4, behind=98 -- not in the stable.

Operator consequence: Watch, then re-audit when it tags. This is real friction removed, but it also hands every agent in a company a complete inventory of that company's secret names -- useful reconnaissance if an agent is compromised or prompt-injected, and a new consideration for how you name secrets. It is on master only; the current stable does not have it.

## Receipt
- https://github.com/paperclipai/paperclip/pull/9530
