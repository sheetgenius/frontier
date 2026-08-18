---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-mcp-servers-with-no-handshake-now-connect-the-2026-07-28-stateless
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/88299
    precision: merged_pr
---
# 2026-08-17-hermes-agent-mcp-servers-with-no-handshake-now-connect-the-2026-07-28-stateless

MCP servers with no handshake now connect: the 2026-07-28 stateless protocol.

A `_negotiate_session()` choke point on all four transport call sites (stdio, SSE, new HTTP, legacy HTTP) implements a per-server `protocol` key: `auto` (default) tries the legacy handshake first and falls back to `server/discover` when the server rejects it as modern-only (-32022/-32601, classified structurally then by substring, deliberately not by isinstance on SDK exception types); `stateless` probes discover-first; `legacy` disables the fallback. Handshake-first auto means zero extra round-trips and zero behaviour change for the existing fleet. Alongside it: SEP-2549 `ttlMs`/`cacheScope` from tools/list are now bound to the lazy-startup schema cache, so TTL'd entries expire and force a live re-probe while hint-less pre-2026 entries keep never-expires; SEP-837 declares `application_type: native` in OAuth client metadata; RFC 9207 `iss` validation and issuer-keyed credentials were verified already native in SDK 2.0 rather than reimplemented. `SamplingHandler` is marked upstream-deprecated on a 12-month window  --  functional, but closed to new capability.

Channel: tagged-release. Ancestry: merge_commit_sha 382060f02277c6404d4f0f1ff4df1f5c974a26b8; compare/382060f0...v2026.8.16.2 -> status=ahead, ahead_by=57, behind_by=0 (ancestor of stable tag v2026.8.16.2).

Operator consequence: Nothing to do for existing servers  --  auto mode is handshake-first by design. Do act on two things: if you run an MCP server that caches tool lists, you can now publish ttlMs and Hermes will honour it, and if you built anything on MCP sampling, start planning off it inside twelve months.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/88299
