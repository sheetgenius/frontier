---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-antigravity-1-1-16-no-longer-overwrites-unreadable-settings-json-with-defaults
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.16
    precision: github_release
---
# 2026-08-20-antigravity-1-1-16-no-longer-overwrites-unreadable-settings-json-with-defaults

1.1.14 (2026-08-18): outside-workspace access is read-only; writes follow cycle mode; one malformed MCP entry no longer takes down every server. 1.1.15 (2026-08-19): --input-format stream-json; keyring restore no longer drops billing project and license tier. 1.1.16 (2026-08-20T04:14:18Z): a settings.json parse failure used to overwrite the file with defaults and silently revert every setting; a refused save now leaves the file byte-identical. 1.1.17 (2026-08-20T22:13:58Z): execution harness consolidated onto one path.

Channel: tagged-release. Half: both.

Operator consequence: upgrade to 1.1.16 before the next settings save if you are on 1.1.15 or older. Re-read outside-workspace access on 1.1.14+.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.16
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.14
