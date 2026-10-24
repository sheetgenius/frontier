---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-the-mcp-oauth-command-injection-report-maps-to-september-fixes-in-both-release-lines
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/29f07e0c69ad8668e0e15b0eb54f2fcb342af98c
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/29ce49db0f5da1bd31e2ea60841a1d837f4237e1
    precision: commit
  - url: https://github.com/anomalyco/opencode/releases/tag/v1.18.33
    precision: github_release
  - url: https://www.pillar.security/blog/open-and-shut-remote-code-execution-in-opencode-via-mcp-oauth
    precision: official_docs
  - url: https://github.com/anomalyco/opencode/security/advisories
    precision: official_docs
---
# 2026-10-24-opencode-the-mcp-oauth-command-injection-report-maps-to-september-fixes-in-both-release-lines

The MCP OAuth command-injection report maps to September fixes in both release lines. Retrospective fix, resurfaced by this week's X leads: Pillar reports that a malicious configured remote MCP server could return an OAuth authorization URL which reached the `open` dependency and a PowerShell command path on Windows/WSL. The affected range it gives is 1.0.137 through 1.18.32. The attack does not require persuading the model through prompt injection. The source fixes centralize browser opening, permit only HTTP(S) URLs and upgrade `open` from 10.1.2 to 11.0.4; scheme validation alone would not address an injected expression inside an otherwise HTTPS URL. V1 first ships this in 1.18.33 on September 28; the analogous V2 fix is already in 2.0.18 on September 25. The researcher page has an October 19 header but an October 4 publication entry in its timeline; those inconsistent disclosure dates are not silently reconciled. No corresponding public GHSA/CVE was found in the three-entry repository advisory response read at 2026-10-24T09:37:25.967974Z.

Channel: tagged-release. Half: defect. Date: 2026-09-28.

Operator consequence: Upgrade older Windows/WSL installations to the current supported line and inspect which remote MCP endpoints are configured to initiate OAuth. Use the fixed application binary, not a claim that HTTPS alone makes an authorization URL safe. The current stable tags contain the fixes; this is not evidence of an active 2.1.4 exploit or an all-platform compromise. The trust decision moves to the integration endpoint and the browser-launch boundary, a path outside ordinary model tool approval.

## Receipt
- https://github.com/anomalyco/opencode/commit/29f07e0c69ad8668e0e15b0eb54f2fcb342af98c
- https://github.com/anomalyco/opencode/commit/29ce49db0f5da1bd31e2ea60841a1d837f4237e1
- https://github.com/anomalyco/opencode/releases/tag/v1.18.33
- https://www.pillar.security/blog/open-and-shut-remote-code-execution-in-opencode-via-mcp-oauth
- https://github.com/anomalyco/opencode/security/advisories
