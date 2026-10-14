---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-optional-alpha-reasoning-translation-adds-a-separate-data-destination
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/cot-translation-bundle/README.md#L12
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/cot-translation-bundle/README.md#L28-L32
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2
    precision: github_release
---
# 2026-10-13-deepseek-harness-optional-alpha-reasoning-translation-adds-a-separate-data-destination

Optional alpha reasoning translation adds a separate data destination. An optional bundle can translate expanded reasoning into a selected language. Once enabled it defaults to Bing; the selected service receives text that may contain private code or conversation details. Native DeepSeek routes are explicit paid alternatives. Translations persist; provider failure does not automatically send text elsewhere.

Channel: preview-or-beta; alpha-only, disabled in shipped profiles. Half: both. Date: 2026-10-09 (alpha.2).

Operator consequence: Approve the destination and any billing before enabling translation. Session-log opt-out does not govern this separate feature. Keep it off where reasoning cannot leave for the selected service. Do not describe it as on by default.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/cot-translation-bundle/README.md#L12
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/cot-translation-bundle/README.md#L28-L32
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2
