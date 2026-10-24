---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-mcp-startup-stops-blocking-whole-sessions-and-tool-caches-cross-worktrees
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.100
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.101
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.103
    precision: github_release
---
# 2026-10-24-github-copilot-cli-mcp-startup-stops-blocking-whole-sessions-and-tool-caches-cross-worktrees

MCP startup stops blocking whole sessions and tool caches cross worktrees. A server hung while loading tools no longer stalls a session for minutes. Sandboxed MCP startup avoids unnecessary restarts, unchanged inventory reads stop failing, and registered worktrees in one repository reuse local MCP tool snapshots. Headless/SDK sessions without an OAuth handler skip connections needing renewed interactive sign-in, while renewable grants still connect. Entra sign-in recovers from rejected cached tokens. Optional managed plugin preparation stops holding up chat in 1.0.100 and 1.0.102.

Channel: tagged-release. Half: both. Date: 2026-10-22.

Operator consequence: Retest a slow server, an expired grant, and two registered worktrees on 1.0.103 before keeping custom startup watchdogs or duplicate cache layers. Confirm which tools actually connected in headless jobs: skipping an unusable connection preserves progress but can remove a required capability. Snapshot reuse is a latency feature, not evidence that permissions or credentials should be shared between sessions.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.100
- https://github.com/github/copilot-cli/releases/tag/v1.0.101
- https://github.com/github/copilot-cli/releases/tag/v1.0.103
