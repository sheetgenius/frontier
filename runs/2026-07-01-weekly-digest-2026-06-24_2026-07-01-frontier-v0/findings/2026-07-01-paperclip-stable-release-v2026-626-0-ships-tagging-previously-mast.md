---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-paperclip-stable-release-v2026-626-0-ships-tagging-previously-mast
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.626.0
    precision: github_release
---
# 2026-07-01-paperclip-stable-release-v2026-626-0-ships-tagging-previously-mast

Stable release v2026.626.0 ships, tagging previously master-only control-plane work (128 commits since v2026.618.0) (channel: tagged-release, 2026-06-27). Operator consequence: Upgrade from v2026.618.0. This stable cut converts a batch of master-only coordination/governance primitives (budget caps, watchdogs, permission gates, authz hardening) into a supported release; re-audit any deployment pinned to v2026.618.0. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.626.0
