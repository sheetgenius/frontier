---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-agent-zero-agent-zero-v2-0-major-release-ships-responses-api-become
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/releases/tag/v2.0
    precision: github_release
---
# 2026-07-01-agent-zero-agent-zero-v2-0-major-release-ships-responses-api-become

Agent Zero v2.0 (major release) ships: Responses API becomes the default LLM transport (with chat-completions fallback), MCP config overhaul with project-scoped settings and per-tool enable/disable, a new pre-import Skills security scanner, and CVE/dependency security bumps. (channel: tagged-release, 2026-06-24). Operator consequence: Upgrade and re-audit. This is a 1.x->2.x major bump. The default transport switches to the OpenAI Responses API (fallback to chat-completions for unsupported providers), so operators on non-Responses providers should verify the fallback path holds. MCP servers now carry project-scoped config with global/project merge semantics and per-tool enable/disable toggles plus a scanner modal -- a governance-relevant change to how MCP tools are exposed. A new Settings > Skills scanner runs security checks on skill zips before import, and a new 'protocol' prompt region is injected before message history (project instructions/skills now delivered via protocol instead of extras), which changes prompt-assembly behavior operators may have relied on. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/agent0ai/agent-zero/releases/tag/v2.0
