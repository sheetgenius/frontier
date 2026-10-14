---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-mcp-1-2-0-stops-dispatching-calls-abandoned-during-oauth-refresh
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/da0eadf0433d29516287c7e3d7b3db325a446281
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/mcp/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-mcp-1-2-0-stops-dispatching-calls-abandoned-during-oauth-refresh

MCP 1.2.0 stops dispatching calls abandoned during OAuth refresh. An HTTP tool call canceled or timed out while waiting for a shared OAuth refresh could still be dispatched after refresh completed, letting the server perform an operation the caller abandoned. A per-request signal now checks cancellation before dispatch. Shared credential refresh continues for other callers. No Pi-repository advisory was found for this repair.

Channel: tagged-release. Half: defect. Date: 2026-10-12.

Operator consequence: Upgrade HTTP MCP clients to 1.2.0 before relying on cancellation while authorization recovers. The fix does not undo an operation already dispatched to a server.

## Receipt
- https://github.com/earendil-works/pi/commit/da0eadf0433d29516287c7e3d7b3db325a446281
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/mcp/CHANGELOG.md
