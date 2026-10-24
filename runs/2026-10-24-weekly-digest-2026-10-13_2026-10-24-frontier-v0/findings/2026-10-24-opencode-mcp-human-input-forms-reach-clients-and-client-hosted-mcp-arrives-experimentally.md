---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-mcp-human-input-forms-reach-clients-and-client-hosted-mcp-arrives-experimentally
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/889abb4657e9a944a6ddcaaf5bc41eab5cd9a4c6
    precision: commit
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/mcp/client.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/commit/8482dbf1e7eba18d6c5d0de6f02f8242112bcf06
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/453514613974ae54cbd6ae0ab878be1b0aff7a1e
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/4a6dacec5e4afb69f211458e08be5233c57dd307
    precision: commit
---
# 2026-10-24-opencode-mcp-human-input-forms-reach-clients-and-client-hosted-mcp-arrives-experimentally

MCP human-input forms reach clients, and client-hosted MCP arrives experimentally. 2.1.4 repairs MCP elicitation forms that never appeared: the server-side client now retains the Effect context for SDK callbacks, so form events retain their Location rather than disappearing from the receiving clients. A corresponding UI change renders the forms in desktop and web. The same release adds `connectClientMcp` and a client MCP WebSocket endpoint, explicitly experimental. This can attach client-hosted tools to a remote server session, but it does not make every client-hosted integration stable or remove server/client compatibility requirements. Tagged MCP docs still default to the legacy protocol and document explicit configuration for the newer 2026-07-28 protocol.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Upgrade the server and affected desktop/web client together before retesting a stalled human-input MCP workflow. Exercise a real form round trip and rejection, not just tool discovery. For client-hosted MCP, pin the 2.1.4 client library and keep the pilot bounded until disconnect, reconnection and authorization behavior are verified. The attention benefit is making an actual human decision visible; a faster tool loop is irrelevant when the required approval never reaches the person.

## Receipt
- https://github.com/anomalyco/opencode/commit/889abb4657e9a944a6ddcaaf5bc41eab5cd9a4c6
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/mcp/client.ts
- https://github.com/anomalyco/opencode/commit/8482dbf1e7eba18d6c5d0de6f02f8242112bcf06
- https://github.com/anomalyco/opencode/commit/453514613974ae54cbd6ae0ab878be1b0aff7a1e
- https://github.com/anomalyco/opencode/commit/4a6dacec5e4afb69f211458e08be5233c57dd307
