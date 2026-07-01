---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-gemini-cli-v0-50-0-preview-channel-opened-v0-50-0-preview-1
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0-preview.1
    precision: github_release
---
# 2026-07-01-gemini-cli-v0-50-0-preview-channel-opened-v0-50-0-preview-1

v0.50.0 preview channel opened (v0.50.0-preview.1) (channel: preview-or-beta, 2026-06-25). Operator consequence: A new preview line for the 0.50 series is available for canary testing. Its headline item is internal (tool-registry discovery for eval reporting, PR #28113 — not operator-facing tool/MCP discovery) plus CI/release-verification hardening. Low operator value now; useful mainly as an adapter-probe canary ahead of a 0.50 stable. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0-preview.1
