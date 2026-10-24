---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-the-responses-api-proxy-can-exchange-github-actions-oidc-credentials
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/57560e9d53f89c7737c7b2069ba2eb8fddbf0687
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/responses-api-proxy/README.md
    precision: tagged_commit_file
---
# 2026-10-24-codex-the-responses-api-proxy-can-exchange-github-actions-oidc-credentials

The Responses API proxy can exchange GitHub Actions OIDC credentials. The [proxy offers optional GitHub Actions OIDC federation and renewable short-lived OpenAI credentials](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/responses-api-proxy/README.md), keeping API-key mode as default. OIDC mode restricts the upstream Responses endpoint. It requires HTTPS and rejects redirects for the supplied GitHub request URL, but does not establish that GitHub owns that destination. The caller supplies trusted identity mapping and request credentials.

Channel: tagged-release. Half: capability. Date: 2026-10-23.

Operator consequence: Evaluate this component before retaining long-lived CI API secrets. Protect the runner request credential and destination URL, scope repository/ref/workflow identity, and test renewal failure. This is not a universal new CLI sign-in method.

## Receipt
- https://github.com/openai/codex/commit/57560e9d53f89c7737c7b2069ba2eb8fddbf0687
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/responses-api-proxy/README.md
