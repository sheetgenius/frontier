---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-mcp-tasks-introduces-server-owned-jobs-with-session-and-cancellation-limits
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp
    precision: official_docs
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.304
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.310
    precision: github_release
---
# 2026-10-24-claude-code-mcp-tasks-introduces-server-owned-jobs-with-session-and-cancellation-limits

MCP Tasks introduces server-owned jobs, with session and cancellation limits. Eligible main-conversation calls can return a server task handle while Claude continues working. Remote tasks survive client exit and can be followed by resuming the same session. This differs from a long ordinary tool call merely moved to the client's background. The beta requires flag fetching, a supporting server on protocol 2026-07-28 and supported CLI/SDK/GitHub Actions sessions; legacy negotiation rules it out, and third-party providers, telemetry-off sessions, Desktop and VS Code are excluded by the captured guide. Streaming headless sessions need the documented background settings and open input; a one-shot `claude -p "<prompt>"` does not get MCP Tasks.

Channel: docs-only. Half: capability. Date: 2026-10-24.

Operator consequence: A server-owned export or build can replace a client polling wrapper. Preserve server identity, connection settings and session identity for recovery. Stdio processes ordinarily stop at client exit; cancellation requests do not guarantee stopped side effects. An expired unknown task outcome needs server-side reconciliation before retry. Noninteractive task elicitation cancels without running Elicitation hooks or the SDK callback. The wider social announcement does not make ordinary URL-mode elicitation new: it was already recorded in 281.

## Receipt
- https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp
- https://github.com/anthropics/claude-code/releases/tag/v2.1.304
- https://github.com/anthropics/claude-code/releases/tag/v2.1.310
