---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-assistant-mcp-can-configure-work-as-well-as-delegate
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/2d0c138122b5977c4e8add39cc917de1fbaabae4
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/public-mcp.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/shared/src/feature-catalog.ts#L116-L122
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-assistant-mcp-can-configure-work-as-well-as-delegate

Assistant MCP can configure work as well as delegate it. The opt-in personal assistant endpoint adds task edits/status changes, documents and revisions, deliverables, expiring upload tickets and configuration of agents, instructions, projects, repositories and skills. Configuration requires `paperclip:configure` in addition to ordinary write authority and current user permissions. It is a distinct scope, but the consent UI's one write-access checkbox approves the requested mutation scopes together, rather than giving configuration its own separate checkbox. Scope expansion needs new consent. Mutations use UUID request IDs with durable receipts tied to the person, company and operation. The endpoint still requires authenticated real-user membership and HTTPS except loopback; implicit local-board authority and agent keys cannot authorize personal OAuth connections.

Channel: tagged-release. Half: capability. Date: 2026-10-24.

Operator consequence: Test v2026.1023.0 with a dedicated company and inspect the exact requested scopes before consenting. An assistant can now perform setup previously requiring another UI session, so human attention moves from relaying edits to reviewing authority and results. Read-only consent cannot delegate. Inspect a mutation receipt after an unknown response instead of retrying with a fresh request ID. Revoking the connection blocks future calls; it does not undo work already delegated or cancel every in-flight operation.

## Receipt
- https://github.com/paperclipai/paperclip/commit/2d0c138122b5977c4e8add39cc917de1fbaabae4
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/public-mcp.md
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/shared/src/feature-catalog.ts#L116-L122
