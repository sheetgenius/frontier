---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-the-new-stable-train-no-longer-enables-the-profile-s-native-compaction-defaults
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/compare/v2026.10.4...v2026.10.5
    precision: git_compare
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/anthropic-payload-policy.ts#L67-L107
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/anthropic/stream-wrappers.ts#L324-L331
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/openai-responses-payload-policy.ts#L204-L225
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/openai/advanced.md#L353-L362
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/anthropic.md#L906-L969
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-the-new-stable-train-no-longer-enables-the-profile-s-native-compaction-defaults

The new stable train no longer enables the profile's native compaction defaults. Anthropic server compaction now requires `params.anthropicServerCompaction: true`, direct Anthropic API routing, and non-OAuth authentication. The stream wrapper also explicitly requires `true`. Public OpenAI Responses still defaults to the separate compact endpoint for budget-triggered compaction, but manual compaction requires `params.responsesCompactEndpoint: true`. Focused requests, overflow, and endpoint failure retain the client fallback. This is a verified difference in shipped behavior; this read did not establish why the earlier defaults were not retained.

Channel: tagged-release. Half: both. Date: 2026-10-18.

Operator consequence: Recheck explicit model parameters after upgrading to 10.7. Operators relying on native manual OpenAI or automatic Anthropic summaries must opt in again if the setting was previously omitted. Operators who explicitly opted out remain explicit. The profile must stop promising default provider-side summary work on these paths; route selection and summary quality remain operator decisions.

## Receipt
- https://github.com/openclaw/openclaw/compare/v2026.10.4...v2026.10.5
- https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/anthropic-payload-policy.ts#L67-L107
- https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/anthropic/stream-wrappers.ts#L324-L331
- https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/openai-responses-payload-policy.ts#L204-L225
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/openai/advanced.md#L353-L362
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/anthropic.md#L906-L969
