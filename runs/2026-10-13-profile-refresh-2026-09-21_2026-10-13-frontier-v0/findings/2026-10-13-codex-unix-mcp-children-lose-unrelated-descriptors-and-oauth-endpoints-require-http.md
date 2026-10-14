---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-unix-mcp-children-lose-unrelated-descriptors-and-oauth-endpoints-require-http
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/afe4249cfe6bdf218ce8807a670fad122d2b60ed
    precision: commit
  - url: https://github.com/openai/codex/commit/2c2a42e65de077c5518ea5b4c3999633ef6a12fc
    precision: commit
---
# 2026-10-13-codex-unix-mcp-children-lose-unrelated-descriptors-and-oauth-endpoints-require-http

Unix MCP children lose unrelated descriptors and OAuth endpoints require HTTP(S). Unix local stdio MCP servers and descendants now launch with StdioOnly descriptor policy; Windows is not covered. MCP OAuth also rejects authorization endpoint schemes other than http or https before client registration or authorization URL return.

Channel: tagged-release. Half: both. Date: 2026-09-25 (0.157.0).

Operator consequence: Run 0.157.0 or later and check integrations relying on unrelated inherited descriptors or custom authorization URI schemes. Explicit transport stdio remains; do not infer this descriptor isolation on Windows.

## Receipt
- https://github.com/openai/codex/commit/afe4249cfe6bdf218ce8807a670fad122d2b60ed
- https://github.com/openai/codex/commit/2c2a42e65de077c5518ea5b4c3999633ef6a12fc
