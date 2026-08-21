---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-claude-code-2-1-236-macos-read-deny-wildcards-bind-2-1-238-trust-gates-mcp-headershelper
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog
    precision: official_changelog
---
# 2026-08-20-claude-code-2-1-236-macos-read-deny-wildcards-bind-2-1-238-trust-gates-mcp-headershelper

npm times year-confirmed: 2.1.235 2026-08-18, 2.1.236 2026-08-19, 2.1.238 2026-08-20. 2.1.239 is 2026-08-21, out of window. Changelog 2.1.235: Shift+Tab in the permission comment field approved the edit and granted session-wide edit. 2.1.236: macOS wildcard read-deny (e.g. **/.env) takes precedence inside allowed read regions and cannot be bypassed by renaming the denied file; auto mode git status can no longer be fooled by status.showUntrackedFiles=no. 2.1.238: project MCP headersHelper requires folder trust and runs without inherited credential env vars. stable dist-tag remains 2.1.231. In-window latest is 2.1.238. Countable versions between 2.1.231 and 2.1.238: 232, 233, 234, 235, 236, 237, 238 (seven). 2.1.230 is absent from npm time.

Channel: tagged-release (npm). Half: both.

Operator consequence: upgrade to 2.1.238 if you run latest. The stable channel still does not have these fixes. Inspect /permissions if you used the comment field on 2.1.234.

## Receipt
- https://code.claude.com/docs/en/changelog
