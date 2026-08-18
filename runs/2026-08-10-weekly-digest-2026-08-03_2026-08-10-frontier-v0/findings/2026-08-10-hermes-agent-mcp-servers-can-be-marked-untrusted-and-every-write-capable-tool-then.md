---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-hermes-agent-mcp-servers-can-be-marked-untrusted-and-every-write-capable-tool-then
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/81151
    precision: merged_pr
---
# 2026-08-10-hermes-agent-mcp-servers-can-be-marked-untrusted-and-every-write-capable-tool-then

MCP servers can be marked untrusted, and every write-capable tool then asks.

Per-server `trust: full|untrusted` in MCP config. On an untrusted server every tool lacking a `readOnlyHint: true` annotation routes through the existing approval surface before the RPC fires  --  including the lazy first-use spawn, so a denial means the server is never contacted at all. Denials, cancellations, timeouts and approval-system errors all fail closed; missing or malformed annotations count as write-capable; unrecognised trust values normalise to untrusted. Default stays `full`, so existing configs are unchanged. The PR states the security model honestly: readOnlyHint is server-supplied and a hostile server can lie  --  the tiering is operator-side config precisely because the hint is not trustworthy.

Channel: tagged-release. Ancestry: merge_commit_sha c8369e37f49a5d3633f357abe9d01f6b4f2149df; compare/c8369e37...v2026.8.13 -> status=ahead, ahead_by=1158, behind_by=0 (ancestor of stable tag v2026.8.13).

Operator consequence: Set `trust: untrusted` on every MCP server you did not write, today. It costs approval prompts and buys you a gate a lying server can only use to skip approval on tools it claims are read-only  --  never to widen access. Note that the default is `full`, so nothing happens until you edit config.yaml.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/81151
