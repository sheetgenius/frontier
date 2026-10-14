---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-the-rc-upgrade-rejects-protocol-configs-and-migrates-settings-presets-logs-and-plugin-apis
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/config.ts#L206-L207
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/models.ts#L8-L9
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-the-rc-upgrade-rejects-protocol-configs-and-migrates-settings-presets-logs-and-plugin-apis

The rc upgrade rejects protocol configs and migrates settings, presets, logs and plugin APIs. Former alpha migrations reach the default rc. The official DeepSeek adapter is Messages-only and refuses a protocol key. Settings move into profile plugin configuration, presets become bundles, logs become V4 and plugin-facing APIs change. The default model remains deepseek-flash, labeled DeepSeek-V41-Flash; protocol compatibility did not remain unchanged.

Channel: preview-or-beta. Half: defect. Date: 2026-09-23 through 2026-09-29.

Operator consequence: Back up DSH_HOME, remove protocol and obsolete Chat Completions baseURL overrides, migrate custom settings/presets and plugin APIs, and reselect removed catalog model IDs. Use --dump-config and --dump-config-schema for the composition review. Compatibility checks require reviewing old plugins, not assuming every old plugin necessarily fails. Pin the model as well as the dependency tree for comparisons.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/config.ts#L206-L207
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/models.ts#L8-L9
