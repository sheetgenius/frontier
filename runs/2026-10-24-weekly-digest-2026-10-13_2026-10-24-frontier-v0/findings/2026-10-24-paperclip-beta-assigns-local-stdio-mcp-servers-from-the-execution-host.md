---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-assigns-local-stdio-mcp-servers-from-the-execution-host
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/6f8ad3d77bc9032d7a6d518eb0a9580fc607c23d
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/agent-access-map/gateways-profiles.md#L195-L217
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-assigns-local-stdio-mcp-servers-from-the-execution-host

Beta assigns local stdio MCP servers from the execution host. The 2026-10-16 change registers verified session-local stdio MCP assignments with native Codex and compatible ACPX clients. Each binding uses a private Unix socket and serialized shared-resource calls. Tasks cannot set reserved binding inputs and read-only sessions omit them. Native Codex host-assigned tools add no new per-call prompt; explicit deny/prompt rules remain effective. This is a separate transport, not HTTP gateway administration authority.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: On 2026.1023.0-beta.0, inspect execution-host assignments and exercise the actual client and approval path before removing local transport scaffolding. Do not copy HTTP gateway revocation or administration guarantees onto this binding without checking its lifecycle. Host assignment is itself a trust decision; broader adapter compatibility remains a qualification task.

## Receipt
- https://github.com/paperclipai/paperclip/commit/6f8ad3d77bc9032d7a6d518eb0a9580fc607c23d
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/agent-access-map/gateways-profiles.md#L195-L217
