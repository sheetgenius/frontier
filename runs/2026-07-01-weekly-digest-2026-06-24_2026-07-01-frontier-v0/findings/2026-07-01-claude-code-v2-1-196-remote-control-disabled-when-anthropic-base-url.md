---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-claude-code-v2-1-196-remote-control-disabled-when-anthropic-base-url
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.196
    precision: github_release
---
# 2026-07-01-claude-code-v2-1-196-remote-control-disabled-when-anthropic-base-url

v2.1.196: Remote Control disabled when ANTHROPIC_BASE_URL points at a non-Anthropic host; org-configured default models surfaced in /model. (channel: tagged-release, 2026-06-29). Operator consequence: Enterprise/governance: teams routing through a proxy or gateway (non-Anthropic ANTHROPIC_BASE_URL) will find Remote Control disabled - verify no automation depended on it. Org admins can now set a default model shown as 'Org default'/'Role default'; audit interaction with the Sonnet 5 default flip. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.196
