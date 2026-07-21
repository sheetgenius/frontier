---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-antigravity-subagent-auto-approve
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
# 2026-07-01-antigravity-subagent-auto-approve

Antigravity 1.0.14 (2026-06-30) enabled an "always proceeds" mode for subagents
that auto-approves their artifacts. In the same release train that tightened
top-level approve-rule matching (1.0.13), this loosens the gate for delegated
subagents -- artifacts a subagent produces proceed without the human confirmation
the parent flow may require. A governance loosening, on the stable (tagged-release)
channel; the operator question is whether subagent auto-approval removes a gate
the parent agent was subject to. Detail in harvest/watchlist.md.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/main/CHANGELOG.md
