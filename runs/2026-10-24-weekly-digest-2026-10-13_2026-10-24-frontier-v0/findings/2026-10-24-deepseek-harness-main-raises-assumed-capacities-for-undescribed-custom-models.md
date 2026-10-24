---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-main-raises-assumed-capacities-for-undescribed-custom-models
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/f2e0d7db1b3e85cb4b094ca35e8eef4127a7c484
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/9ab971fde551167d21f25683ae5e225aca01ec4e
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/upgrade-guide/v0.2.1-rc.2/pi-ai-default-capacities/guide.md
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-main-raises-assumed-capacities-for-undescribed-custom-models

Main raises assumed capacities for undescribed custom models. For `llm-pi-ai` models whose configuration and installed catalog omit capacities, assumed context rises from 262,144 to 1,000,000 tokens and output capacity from 32,768 to 128,000. Explicit configuration and catalog values retain precedence. A larger assumed context can delay compaction; the output-capacity fallback does not itself set the Harness request-level `maxTokens` default. This is DeepSeek adapter policy, not proof of endpoint capacity or a Pi coding-agent release.

Channel: main-unreleased. Half: both. Date: 2026-10-19.

Operator consequence: Set actual context and output limits for custom endpoints before trying main. Otherwise an optimistic assumption can replace timely compaction with a request the endpoint cannot accept. No benchmark or endpoint call established additional usable model capacity here.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/f2e0d7db1b3e85cb4b094ca35e8eef4127a7c484
- https://github.com/deepseek-ai/deepseek-harness/commit/9ab971fde551167d21f25683ae5e225aca01ec4e
- https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/upgrade-guide/v0.2.1-rc.2/pi-ai-default-capacities/guide.md
