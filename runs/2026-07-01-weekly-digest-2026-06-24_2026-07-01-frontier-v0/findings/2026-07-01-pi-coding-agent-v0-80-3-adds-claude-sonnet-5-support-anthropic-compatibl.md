---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-pi-coding-agent-v0-80-3-adds-claude-sonnet-5-support-anthropic-compatibl
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.80.3
    precision: github_release
---
# 2026-07-01-pi-coding-agent-v0-80-3-adds-claude-sonnet-5-support-anthropic-compatibl

v0.80.3 adds Claude Sonnet 5 support (Anthropic-compatible + Bedrock, adaptive thinking) and switches the default OpenAI model to gpt-5.5 (channel: tagged-release, 2026-06-30). Operator consequence: Observe: model-catalog change. Operators on OpenAI defaults will silently move to gpt-5.5 on upgrade to v0.80.3; those wanting Claude Sonnet 5 now get it through inherited Anthropic-compatible and Bedrock catalogs with adaptive thinking enabled. Re-check /model defaults and any pinned model config after upgrading. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.80.3
