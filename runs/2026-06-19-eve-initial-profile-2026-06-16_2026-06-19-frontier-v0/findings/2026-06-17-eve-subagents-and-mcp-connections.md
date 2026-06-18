---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-17-eve-subagents-and-mcp-connections
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-16
  end: 2026-06-19
status: accepted
confidence: high
accessibility_impact: low
operator_relevance: medium
actionability: observe
evidence:
  - label: "Eve docs: project layout (subagents, connections)"
    url: https://eve.dev/docs/reference/project-layout
    precision: official_docs
---
# Eve subagents and MCP connections

## What this is

Eve's [project layout](https://eve.dev/docs/reference/project-layout) defines two
composition primitives as directories:

- `subagents/` -- specialist agents for delegation. The primary agent can hand
  work to a narrower agent rather than carrying every task itself.
- `connections/` -- tools from external MCP servers, brought into the agent's
  callable tool surface alongside its own `tools/`.

## Why it matters

Together these define how an Eve agent grows beyond its own files: it delegates
to subagents and it pulls in external capability over MCP. Both are file-backed,
so the delegation graph and the external tool surface are part of the reviewable
directory. The MCP `connections/` surface is also the one the 0.11.2 approval-gate
fix touched (dynamic connection tools), which ties this composition surface to
the authority finding: external tools entering the model still pass through the
gate.

## Operator consequence

- Delegation and external MCP tools are declared as files, so the agent's full
  reach (its own tools, its subagents, its external connections) is inspectable.
- Where external tools enter, the approval gate is the relevant control surface;
  see `2026-06-17-eve-hitl-approval-gates`.
