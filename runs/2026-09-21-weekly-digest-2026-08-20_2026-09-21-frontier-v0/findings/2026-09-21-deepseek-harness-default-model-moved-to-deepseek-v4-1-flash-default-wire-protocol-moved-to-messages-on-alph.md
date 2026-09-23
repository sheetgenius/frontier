---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-deepseek-harness-default-model-moved-to-deepseek-v4-1-flash-default-wire-protocol-moved-to-messages-on-alph
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/fb2c4b9e698e30edb738bca4cf0618587db7d203/packages/bundle/base/cordis.patch.yml
    precision: tagged_commit_file
---
# 2026-09-21-deepseek-harness-default-model-moved-to-deepseek-v4-1-flash-default-wire-protocol-moved-to-messages-on-alph

Default model moved to DeepSeek-V4.1-Flash; default wire protocol moved to Messages on alpha. For the Writing lane's model-launch item: the harness's default model did change, in 0.1.5-rc.1 (2026-09-10), from `deepseek-v4-flash` to the `deepseek-flash` alias for DeepSeek-V4.1-Flash. Provider stayed `deepseek-official`. On alpha, the adapter now speaks the Anthropic-style Messages protocol to DeepSeek by default.

Channel: preview-or-beta. Half: capability. Date: 2026-09-10 (rc.1 model), 2026-09-15 (alpha protocol), 2026-09-17 (alpha catalog).

Operator consequence: New sessions change model on upgrade unless your profile pins one. Pin `model` in your patch if you compare runs across versions. On alpha, remove any hard-coded official root `baseURL` override or requests fail.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/fb2c4b9e698e30edb738bca4cf0618587db7d203/packages/bundle/base/cordis.patch.yml
