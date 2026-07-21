---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-codex-codex-0-142-2-stable-remote-plugin-mcp-and-image-input-h
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.142.2
    precision: github_release
---
# 2026-07-01-codex-codex-0-142-2-stable-remote-plugin-mcp-and-image-input-h

Codex 0.142.2 stable: remote plugin/MCP and image-input handling fixes plus Bedrock credential UX, dark-mode plugin logos, richer safety-buffering UI (channel: tagged-release, 2026-06-25). Operator consequence: Bundle of reliability/UX fixes: remote stdio MCP servers now accept foreign absolute cwd paths (#29493); remote HTTP(S) image inputs return clear model-visible validation errors (#29417,#29419); expired Amazon Bedrock credentials give actionable recovery guidance (#28992); remote plugin catalogs return curated featured rankings (#29485); plugins can supply dark-mode logos (#29488); apps can show richer safety-buffering UI (#29473). Mostly observe; upgrade if you hit remote-MCP path or Bedrock-auth friction. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.142.2
