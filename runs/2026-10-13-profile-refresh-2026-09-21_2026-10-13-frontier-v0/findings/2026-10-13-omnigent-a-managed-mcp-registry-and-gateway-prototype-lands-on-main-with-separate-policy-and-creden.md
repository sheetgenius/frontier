---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-a-managed-mcp-registry-and-gateway-prototype-lands-on-main-with-separate-policy-and-creden
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/commit/03beb88c01a966b04c6c762e723e8b4463dc16e0
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/blob/03beb88c01a966b04c6c762e723e8b4463dc16e0/omnigent/server/mcp_policy_adapter.py#L45-L129
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/03beb88c01a966b04c6c762e723e8b4463dc16e0/designs/MCP_REGISTRY_GATEWAY.md#L175-L244
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/03beb88c01a966b04c6c762e723e8b4463dc16e0/examples/mcp-registry/README.md
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/commit/5ba977020ce1f2b0a447405cfa1806ac77f21f5a
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/blob/5ba977020ce1f2b0a447405cfa1806ac77f21f5a/examples/mcp-registry/README.md#L103-L112
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-a-managed-mcp-registry-and-gateway-prototype-lands-on-main-with-separate-policy-and-creden

A managed MCP registry and gateway prototype lands on main with separate policy and credential actors. An opt-in main-only prototype adds an admin-configured MCP registry, encrypted server-held grants, per-session service selections and a gateway. The adapter authenticates the caller and requires Edit access; a session header supplies context, not authentication. Verified runner calls separate the policy actor from the credential owner, so an editor-triggered turn can use the owner's connection subject to the actor's policies. Direct calls use the caller for both. Queued multi-editor turn attribution remains a documented limitation. A same-evening follow-up lets users remove saved selections and launch without MCP services during registry outages.

Channel: main-unreleased. Half: both. Date: 2026-10-13T22:29:44Z merged; follow-up 23:13:40Z.

Operator consequence: Wait for a containing stable release for ordinary deployment. A prototype trial needs the same compatible commit on server and execution hosts, explicit registry configuration and a review of whose account each actor uses. Examine shared-session attribution and result-review limits; moving credentials to the server does not remove the need to authorize their use.

## Receipt
- https://github.com/omnigent-ai/omnigent/commit/03beb88c01a966b04c6c762e723e8b4463dc16e0
- https://github.com/omnigent-ai/omnigent/blob/03beb88c01a966b04c6c762e723e8b4463dc16e0/omnigent/server/mcp_policy_adapter.py#L45-L129
- https://github.com/omnigent-ai/omnigent/blob/03beb88c01a966b04c6c762e723e8b4463dc16e0/designs/MCP_REGISTRY_GATEWAY.md#L175-L244
- https://github.com/omnigent-ai/omnigent/blob/03beb88c01a966b04c6c762e723e8b4463dc16e0/examples/mcp-registry/README.md
- https://github.com/omnigent-ai/omnigent/commit/5ba977020ce1f2b0a447405cfa1806ac77f21f5a
- https://github.com/omnigent-ai/omnigent/blob/5ba977020ce1f2b0a447405cfa1806ac77f21f5a/examples/mcp-registry/README.md#L103-L112
