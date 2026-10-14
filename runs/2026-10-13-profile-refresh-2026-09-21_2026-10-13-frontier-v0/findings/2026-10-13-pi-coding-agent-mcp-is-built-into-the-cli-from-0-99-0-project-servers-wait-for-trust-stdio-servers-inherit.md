---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-mcp-is-built-into-the-cli-from-0-99-0-project-servers-wait-for-trust-stdio-servers-inherit
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.99.0
    precision: github_release
  - url: https://github.com/earendil-works/pi/commit/8562bcf66a8eeefdf75ddd231ca9d7aa7d64f86e
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/config.ts#L134-L148
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/runtime.ts#L98-L121
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/mcp/src/transports/stdio.ts#L94
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/releases/tag/v0.99.2
    precision: github_release
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/config.ts#L4-L12
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/mcp.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L13-L17
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-mcp-is-built-into-the-cli-from-0-99-0-project-servers-wait-for-trust-stdio-servers-inherit

MCP is built into the CLI from 0.99.0: project servers wait for trust, stdio servers inherit Pi's full environment and run beside the harness. The profile's "Pi ships ... no MCP" stopped being true on 29 September. MCP is now a built-in extension that speaks stdio and streamable HTTP with OAuth. Servers come from `~/.pi/agent/mcp.json`, a project `.pi/mcp.json`, or `pi.registerMcpServer()`, and are managed with `/mcp` and `pi mcp add|remove|list|login|logout`. The project file is read only when the project is trusted (config.ts L145-L148), and a `.pi/mcp.json` on its own now triggers the trust decision. `"auth": {"provider": ...}` sends a `/login` token as a bearer; project mcp.json cannot specify provider auth; global mcp.json and extension registrations can (config.ts L134; v0.99.2 release) and needs https except on loopback (v0.99.2). Every enabled server connects in the background when a session starts (mcp.md L100), and the CLI loads the built-ins in every mode, headless ones included (main.ts L577). The Pi process spawns stdio servers itself with `{...process.env, ...entry.env}`, because the coding agent never passes `inheritEnv: false` (runtime.ts L111-L121, stdio.ts L94). Each server therefore gets every variable Pi has, including provider keys exported in your shell. `env` and `headers` values can run a command with `!command` (mcp.md L81). The vendor's explanation is Earendil's post "You Said No MCP!" (2026-09-29): the changes MCP needed were "generally useful". Ronacher's "What is Codemode" (2026-10-06) says that with a tool sandbox such as Gondolin "your bash stuff will be sandboxed just fine, but the harness itself will not be." pi.dev's "What we didn't build" list now reads "No MCP / Now with MCP+Codemode" (retrieved 2026-10-13). The 1.0 line hardened it further: issuer checks and per-server credentials in 1.0.0, project overrides that can change a global server's `enabled`, `exposure`, and `toolExposure` in 1.0.1, `--no-mcp` in 1.0.4, and issuer rejection without metadata in 1.2.0.

Channel: tagged-release. Half: both. Date: 2026-09-29.

Operator consequence: On 0.99.0+, saying yes to the trust prompt also lets the repo's `.pi/mcp.json` stdio commands and `!command` values run at session start, so read that file before trusting a checkout. If you keep Pi on the host and route only the built-in tools into a VM (the third option on the v1.2.0 security page), MCP stdio servers and codemode stay on the host with your full environment. Put the whole `pi` process inside the container, or start Pi with a scrubbed environment. Three switches turn MCP off: `--no-mcp` for one run, `"extensions": ["-builtin:mcp"]` in settings, or `--no-extensions`, which now drops the built-ins too. SDK sessions load no built-ins (mcp.md L272), so embedders are untouched unless they opt in. The review question moves from "which MCP adapter extension did I install" to "which servers does my global mcp.json start in every session, including CI".

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.99.0
- https://github.com/earendil-works/pi/commit/8562bcf66a8eeefdf75ddd231ca9d7aa7d64f86e
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/config.ts#L134-L148
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/runtime.ts#L98-L121
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/mcp/src/transports/stdio.ts#L94
- https://github.com/earendil-works/pi/releases/tag/v0.99.2
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/config.ts#L4-L12
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/mcp.md
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L13-L17
