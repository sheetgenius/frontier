---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-hermes-agent-mcp-reload-could-freeze-the-cli-process-loop-plus-voice
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/55964
    precision: merged_pr
---
# 2026-07-01-hermes-agent-mcp-reload-could-freeze-the-cli-process-loop-plus-voice

MCP reload could freeze the CLI process loop (plus voice-flag leak) (channel: main-unreleased, 2026-07-01). Operator consequence: Reliability fix continuing the post-v2026.6.19 MCP-persistence wave. A join during MCP reload could freeze process_loop, and a voice flag leaked across state. Operators hot-reloading MCP servers in long-running Hermes sessions should be aware; main-only (SHA 972aa33), not yet in a tag. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/55964
