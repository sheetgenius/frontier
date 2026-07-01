---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-antigravity-strict-approve-matching
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/main/CHANGELOG.md
    precision: official_changelog
---
# 2026-07-01-antigravity-strict-approve-matching

Antigravity 1.0.13 (2026-06-27) hardened command-permission handling: "Always
Approve" rule matching is now strict (non-regex) by default, with regex matching
opt-in behind a `regex:` rule prefix. This closes a class of over-broad approve
rules that a permissive matcher could satisfy. A governance tightening, on the
stable (tagged-release) channel. Detail in harvest/watchlist.md.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/main/CHANGELOG.md
