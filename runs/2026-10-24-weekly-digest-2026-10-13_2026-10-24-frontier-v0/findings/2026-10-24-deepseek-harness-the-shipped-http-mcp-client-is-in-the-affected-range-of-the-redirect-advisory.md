---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-the-shipped-http-mcp-client-is-in-the-affected-range-of-the-redirect-advisory
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/modelcontextprotocol/typescript-sdk/security/advisories/GHSA-6prh-2h8m-c8cw
    precision: official_docs
  - url: https://github.com/advisories/GHSA-6prh-2h8m-c8cw
    precision: official_docs
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/mcp/mcp-client/package.json
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/@deepseek-ai%2Fdsh-mcp-client/0.2.1-rc.3
    precision: official_docs
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/mcp/mcp-client/src/transport.ts
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/mcp/mcp-client/package.json
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-the-shipped-http-mcp-client-is-in-the-affected-range-of-the-redirect-advisory

The shipped HTTP MCP client is in the affected range of the redirect advisory. The upstream advisory was published 2026-10-02T20:42:34Z and updated 2026-10-19T20:07:25Z; the global Advisory Database record was published 2026-10-20T18:26:30Z. These timestamps do not reconstruct the initial advisory text. The current record says affected HTTP clients follow cross-origin redirects and forward custom headers and MCP session IDs; 307/308 redirects also preserve bodies. Standard Authorization stripping on current fetch runtimes does not protect arbitrary custom headers. The affected 2.x range is `>=2.0.0,<2.3.0`; 2.3.0 is fixed. DSH exposes the affected Streamable HTTP construction. The advisory also covers upstream OAuth flows, but this harvest does not establish that DSH exercises those flows. Stdio MCP clients are outside this advisory.

Channel: preview-or-beta. Half: defect. Date: 2026-10-20.

Operator consequence: Inspect remote HTTP MCP endpoints and custom credential headers before using either current rc. The upstream repair must reach the actual dependency graph, or an explicitly reviewed redirect-rejecting transport must enforce the boundary. Do not call rc.3 fixed merely because its release is later than the disclosure. This is a source-supported affected path, not a reproduced credential leak; no malicious redirect or credential transmission was attempted.

## Receipt
- https://github.com/modelcontextprotocol/typescript-sdk/security/advisories/GHSA-6prh-2h8m-c8cw
- https://github.com/advisories/GHSA-6prh-2h8m-c8cw
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/mcp/mcp-client/package.json
- https://registry.npmjs.org/@deepseek-ai%2Fdsh-mcp-client/0.2.1-rc.3
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/mcp/mcp-client/src/transport.ts
- https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/mcp/mcp-client/package.json
