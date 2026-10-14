---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-same-host-mcp-and-openapi-connection-result-identities-are-repaired-only-on-main
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/57d4272b7a39c6a179c7b88aff3111bafaf99b2c
    precision: commit
  - url: https://github.com/vercel/eve/pull/4745
    precision: merged_pr
---
# 2026-10-13-eve-same-host-mcp-and-openapi-connection-result-identities-are-repaired-only-on-main

Same-host MCP and OpenAPI connection result identities are repaired only on main. Fallback toolResultFrom identity now includes both URL and description, keeping same-host connections such as Jira and Confluence distinct across separately loaded definition copies. The helper also accepts OpenAPI connections, including those without baseUrl. Identical URL and description remain ambiguous.

Channel: main-unreleased. Half: defect. Date: 2026-10-13 (merge 22:06:24Z).

Operator consequence: For integrations sharing a host, check hook/result matching and watch for a tag containing this exact commit. 0.79.0 lacks the fix. This is routing correctness, not a demonstrated cross-user credential disclosure.

## Receipt
- https://github.com/vercel/eve/commit/57d4272b7a39c6a179c7b88aff3111bafaf99b2c
- https://github.com/vercel/eve/pull/4745
