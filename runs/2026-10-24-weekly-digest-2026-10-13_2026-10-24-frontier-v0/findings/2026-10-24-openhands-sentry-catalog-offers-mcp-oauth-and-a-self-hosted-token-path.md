---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-sentry-catalog-offers-mcp-oauth-and-a-self-hosted-token-path
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/extensions/commit/afb59307703c68162a61cea088620b75f6221a45
    precision: commit
  - url: https://github.com/OpenHands/extensions/blob/v0.35.0/integrations/catalog/sentry.json
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json
    precision: tagged_commit_file
---
# 2026-10-24-openhands-sentry-catalog-offers-mcp-oauth-and-a-self-hosted-token-path

Sentry catalog offers MCP OAuth and a self-hosted token path. The catalog adds a hosted MCP OAuth choice without client authentication and a local stdio MCP path using a personal token with optional `SENTRY_HOST` for a self-hosted server. Other existing connection choices remain.

Channel: tagged-release. Half: capability. Date: 2026-10-22 (extensions v0.34.0); 2026-10-23 (Canvas v1.32.0 bundle).

Operator consequence: Choose the intended host, transport and token scopes, then test a real Sentry operation. Catalog support can replace integration setup glue, but does not prove compatibility with a particular self-hosted deployment.

## Receipt
- https://github.com/OpenHands/extensions/commit/afb59307703c68162a61cea088620b75f6221a45
- https://github.com/OpenHands/extensions/blob/v0.35.0/integrations/catalog/sentry.json
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json
