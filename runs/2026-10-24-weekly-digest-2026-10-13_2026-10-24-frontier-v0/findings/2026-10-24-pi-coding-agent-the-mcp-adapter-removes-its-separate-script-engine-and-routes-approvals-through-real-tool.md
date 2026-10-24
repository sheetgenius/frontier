---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-the-mcp-adapter-removes-its-separate-script-engine-and-routes-approvals-through-real-tool
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/nicobailon/pi-mcp-adapter/releases/tag/v6.0.0
    precision: github_release
  - url: https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md
    precision: tagged_commit_file
  - url: https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/codemode-bridge.ts
    precision: tagged_commit_file
  - url: https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/tool-approval.ts
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-the-mcp-adapter-removes-its-separate-script-engine-and-routes-approvals-through-real-tool

The MCP adapter removes its separate script engine and routes approvals through real tool calls. Version 6 removes `mcpScript`, `jev.evaluate`, associated script settings, the bundled scripting skill and its QuickJS dependency. It uses Pi's codemode factory instead. Reachable cached MCP tools become deferred `mcp__<server>__<tool>` tools; nested calls expose their real identities to Pi permission hooks rather than appearing only as a proxy call. Reusable `scriptTools` supply names and input schemas. Executor approval pauses now go to Pi dialogs: model-issued resume is refused and a headless session fails instead of letting the model approve itself. Earlier in-window releases repair GitHub CLI authentication, project approval persistence, frozen-host themes and MCP UI behavior. The adapter remains optional; native MCP already existed before this window.

Channel: tagged-release. Half: both. Date: 2026-10-22.

Operator consequence: Adapt old script settings and hook matchers before moving to 6.0.0. This is a concrete case where an upstream primitive deletes a downstream workaround. It does not eliminate policy work: a `--tools` declaration list is not an MCP deny rule, project script approval covers the configuration entry rather than immutable script contents, and the adapter's [documented takeover of native MCP](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/README.md) needs reversal when removing it. Test intended calls and forbidden calls through proxy, deferred and script paths. Treat the author's context-saving benchmark as configuration-specific, not a universal 10,000-token saving on current Pi.

## Receipt
- https://github.com/nicobailon/pi-mcp-adapter/releases/tag/v6.0.0
- https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md
- https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/codemode-bridge.ts
- https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/tool-approval.ts
