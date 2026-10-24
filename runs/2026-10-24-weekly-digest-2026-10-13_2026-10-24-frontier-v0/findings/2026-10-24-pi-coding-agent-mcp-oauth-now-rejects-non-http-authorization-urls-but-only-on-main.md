---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-mcp-oauth-now-rejects-non-http-authorization-urls-but-only-on-main
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/9ffd27cfaaeed5c1ecf9369f393c3222975729b4
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/mcp/src/oauth/types.ts
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/mcp/src/oauth/flow.ts
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-mcp-oauth-now-rejects-non-http-authorization-urls-but-only-on-main

MCP OAuth now rejects non-HTTP authorization URLs, but only on main. The old URL filter rejected selected script schemes but still accepted `file:` and custom protocols. A malicious MCP server could put one in its authorization endpoint and have sign-in pass it to the platform URL handler. The fix accepts only `http:` and `https:` metadata URLs and validates again when starting authorization. That is a concrete scheme-validation repair, not evidence of arbitrary remote code execution on every platform. No Pi-specific October security advisory was found in the repository advisory list.

Channel: main-unreleased. Half: defect. Date: 2026-10-23.

Operator consequence: Do not count 1.4.0 as containing this fix. Review an unfamiliar MCP server's authorization target before signing in, and watch for a non-prerelease tag containing this commit. Teams already maintaining a source build can evaluate that exact patch; this harvest does not claim a tested patched binary or recommend an unverified preview. The remaining attention belongs at the browser/platform handoff, even when project startup trust was granted.

## Receipt
- https://github.com/earendil-works/pi/commit/9ffd27cfaaeed5c1ecf9369f393c3222975729b4
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/mcp/src/oauth/types.ts
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/mcp/src/oauth/flow.ts
