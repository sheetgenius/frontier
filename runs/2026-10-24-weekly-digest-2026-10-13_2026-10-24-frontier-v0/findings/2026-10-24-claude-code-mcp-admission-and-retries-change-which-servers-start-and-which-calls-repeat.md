---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-mcp-admission-and-retries-change-which-servers-start-and-which-calls-repeat
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.299
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.302
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.305
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.307
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.309
    precision: github_release
---
# 2026-10-24-claude-code-mcp-admission-and-retries-change-which-servers-start-and-which-calls-repeat

MCP admission and retries change which servers start and which calls repeat. Version 299 checks policy before dynamically added headless/SDK servers connect and before list/get or subagent paths start blocked servers. It also extends the 2026-07-28 protocol default to cloud/Remote Control connectors without flags. Version 302 tolerates missing `resultType`, `ttlMs` or `cacheScope` from peers negotiating that protocol. Version 305 stops `allowedMcpServers` filtering managed stdio definitions whose variable substitution occurs only in `env`: a previously omitted server can start after upgrade. Version 307 retries interrupted HTTP tool calls only when marked read-only or idempotent; 309 prevents a disabled server reconnecting through a prompt.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Re-audit managed MCP inventories at 305+, using `deniedMcpServers` for explicit prohibitions instead of depending on an allowlist exclusion that no longer applies. Server authors must state retry safety correctly. The client can remove some reconnection glue, but a transport failure still does not prove that a mutating action did nothing. Test protocol fallback and record remote action IDs before retrying consequential work.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.299
- https://github.com/anthropics/claude-code/releases/tag/v2.1.302
- https://github.com/anthropics/claude-code/releases/tag/v2.1.305
- https://github.com/anthropics/claude-code/releases/tag/v2.1.307
- https://github.com/anthropics/claude-code/releases/tag/v2.1.309
