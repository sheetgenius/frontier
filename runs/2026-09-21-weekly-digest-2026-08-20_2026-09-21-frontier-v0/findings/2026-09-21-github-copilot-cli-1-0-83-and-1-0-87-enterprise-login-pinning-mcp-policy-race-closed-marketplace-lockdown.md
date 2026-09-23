---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-github-copilot-cli-1-0-83-and-1-0-87-enterprise-login-pinning-mcp-policy-race-closed-marketplace-lockdown
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L161
    precision: tagged_commit_file
---
# 2026-09-21-github-copilot-cli-1-0-83-and-1-0-87-enterprise-login-pinning-mcp-policy-race-closed-marketplace-lockdown

1.0.83 and 1.0.87: enterprise login pinning, MCP policy race closed, marketplace lockdown. 1.0.83: `forceLoginOrgs` managed setting pins sign-in to approved GitHub orgs (L161); enterprise-denied MCP servers could previously start before the managed allow/deny policy resolved, and startup now waits for the fetch (L175). 1.0.87: an empty `strictKnownMarketplaces` allowlist now hides and blocks built-in plugin marketplaces (L12); secrets exported in the launching shell are no longer written to debug logs on session create or resume (L21); `--yolo` stays enabled after startup policy checks for authenticated unmanaged sessions (L11); Auto routing tier gains managed startup defaults (L3).

Channel: tagged-release. Half: both. Date: 2026-09-04 and 2026-09-21.

Operator consequence: The MCP race means a denied server could run briefly on versions before 1.0.83; treat that as a gap in the enterprise MCP deny list for older clients. Anyone who collected debug logs (`--collect-debug-logs`, now available to all users in 1.0.85, L138) before 1.0.87 should treat those bundles as possibly containing shell secrets and rotate or scrub before sharing.

## Receipt
- https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L161
