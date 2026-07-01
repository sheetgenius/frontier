---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-agent-zero-agent-zero-v2-1-hardens-the-new-responses-api-path-fallb
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/releases/tag/v2.1
    precision: github_release
---
# 2026-07-01-agent-zero-agent-zero-v2-1-hardens-the-new-responses-api-path-fallb

Agent Zero v2.1 hardens the new Responses API path (fallback handling for API rejections, normalized tool schemas, JSON-string parallel tool calls) and materializes MCP image attachments as real artifact files instead of inline data URLs. (channel: tagged-release, 2026-06-26). Operator consequence: Watch / patch upgrade. This is the stabilization follow-up to the v2.0 transport switch: fallback handling for Responses API rejections, normalized Responses tool schemas for stricter validators, and acceptance of JSON-string parallel tool calls from certain providers. If v2.0's Responses default caused provider incompatibilities, v2.1 is the fix. MCP image attachments now land as artifact files with real paths (relevant to the workcell filesystem/artifact model) rather than inline data URLs. Release notes state no security, sandbox/permission, or breaking changes. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/agent0ai/agent-zero/releases/tag/v2.1
