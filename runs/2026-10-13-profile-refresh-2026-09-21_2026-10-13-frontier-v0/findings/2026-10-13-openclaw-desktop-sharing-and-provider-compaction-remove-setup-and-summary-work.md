---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-desktop-sharing-and-provider-compaction-remove-setup-and-summary-work
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-browser-ui-desktop.md#L336-L355
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/pull/153359
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/tool-search.md#L80-L100
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/pull/156151
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/commit/6015e98d907837b45058f04f01694eaa7eab3ce4
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/openai/advanced.md#L337-L341
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/anthropic.md#L889-L913
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-tools/sessions-and-subagents.md#L24-L38
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/subagents/nesting.md#L13
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-gateway.md#L195
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/tool-permissions.md#L33-L57
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md
    precision: tagged_commit_file
---
# 2026-10-13-openclaw-desktop-sharing-and-provider-compaction-remove-setup-and-summary-work

Desktop sharing and provider compaction remove setup and summary work. 9.6 enables structured Tool Search when unset for embedded and Copilot runs and enables desktop sharing for paired macOS, Windows and Linux nodes without a separate Gateway allow entry. Sharing still requires an existing node-local RFB server on 127.0.0.1 and does not enable macOS Screen Sharing. 9.7 lets voice consultations run specified read-only pipelines without spoken confirmation and changes bare opus/new Anthropic setup to Opus 5.5. 10.2 extends OpenAI's already available budget-triggered native compaction to manual /compact without focus text. Focused compaction, confirmed overflow and failures retain client summaries. Anthropic server compaction defaults on only for supported models on direct api.anthropic.com API-key routes. Current 10.3 docs retain older reach defaults: agent-to-agent enabled, session visibility all, Swarm enabled, delegation depth five, CLI agents enabled, and within/across-provider messaging enabled.

Channel: tagged-release. Half: both. Date: 2026-09-23 (9.6), 2026-09-30 (9.7), 2026-10-12 (10.2); rechecked at 10.3.

Operator consequence: Review which paired nodes should offer an existing desktop and which routes may use provider-side compaction. The opt-outs are params.responsesCompactEndpoint false and params.anthropicServerCompaction false; tools.toolSearch false restores direct schemas. Use an explicit model id if the opus alias change affects cost. On shared Gateways, choose session visibility agent or self and deliberate messaging/delegation limits. Do not turn the PR's checkpoint description into a provider-retention guarantee.

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-browser-ui-desktop.md#L336-L355
- https://github.com/openclaw/openclaw/pull/153359
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/tool-search.md#L80-L100
- https://github.com/openclaw/openclaw/pull/156151
- https://github.com/openclaw/openclaw/commit/6015e98d907837b45058f04f01694eaa7eab3ce4
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/openai/advanced.md#L337-L341
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/anthropic.md#L889-L913
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-tools/sessions-and-subagents.md#L24-L38
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/subagents/nesting.md#L13
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-gateway.md#L195
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/tool-permissions.md#L33-L57
- https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md
