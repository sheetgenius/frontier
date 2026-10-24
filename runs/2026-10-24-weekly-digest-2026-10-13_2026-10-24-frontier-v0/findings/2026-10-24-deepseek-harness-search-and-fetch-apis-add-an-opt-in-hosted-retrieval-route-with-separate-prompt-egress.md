---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-search-and-fetch-apis-add-an-opt-in-hosted-retrieval-route-with-separate-prompt-egress
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.2
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-deepseek-api/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-deepseek-api/src/search.ts
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-search-and-fetch-apis-add-an-opt-in-hosted-retrieval-route-with-separate-prompt-egress

Search and Fetch APIs add an opt-in hosted retrieval route with separate prompt egress. Web Search settings can select DeepSeek Search and Fetch APIs together. The route is off by default; existing Messages search and local HTTP fetch remain the default. API mode sends queries or requested URLs to the hosted service and, with default `sendOriginalQuestion=true`, up to 128 Unicode characters of the latest human question as `ori_question`. Retrieval billing is separate from model-token billing. Provider failures do not silently retry through another route. Fetch's successful Markdown result does not certify the original website's HTTP status.

Channel: preview-or-beta. Half: both. Date: 2026-10-17.

Operator consequence: Try rc.2 or rc.3 when hosted retrieval removes local extraction work, but review the extra question fragment and destination before enabling it. Disable `sendOriginalQuestion` if the query alone is the intended disclosure. Handle failures explicitly and avoid treating the provider's success status as an origin-server receipt. Intel Desktop's observed rc.1 feed does not contain this integration.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.2
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-deepseek-api/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-deepseek-api/src/search.ts
