---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-rc-3-discovers-official-api-key-models-dynamically-instead-of-relying-only-on-the-bundled
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/c48f8523f22a35a452c38db51ca1c21f572b2593
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/llm/llm-deepseek/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/llm/llm-deepseek-api-key/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/llm/llm-deepseek/src/index.ts
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.3
    precision: github_release
---
# 2026-10-24-deepseek-harness-rc-3-discovers-official-api-key-models-dynamically-instead-of-relying-only-on-the-bundled

Rc.3 discovers official API-key models dynamically instead of relying only on the bundled catalog. The API-key route can follow the official `/models` listing, as the account route already does. It applies only to the official origin with the unmodified built-in catalog, refreshes in the background, and retains a last usable or built-in fallback. A listed model marked unsupported by this client is refused before inference I/O; an unlisted custom ID is not automatically forbidden. Custom endpoints or explicit catalogs keep their own policy. Rc.2 separately introduced support for DeepSeek-V4.1-Flash-1017.

Channel: preview-or-beta. Half: capability. Date: 2026-10-23.

Operator consequence: Choose rc.3 explicitly if reducing manual catalog updates matters; staying on npm `latest` does not obtain this change. Keep explicit model and endpoint choices for reproducible trials. A newly visible model is an availability signal, not evidence of better coding performance or a silent model migration. Catalog maintenance becomes cheaper while task-level model evaluation remains necessary.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/c48f8523f22a35a452c38db51ca1c21f572b2593
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/llm/llm-deepseek/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/llm/llm-deepseek-api-key/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/llm/llm-deepseek/src/index.ts
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.3
