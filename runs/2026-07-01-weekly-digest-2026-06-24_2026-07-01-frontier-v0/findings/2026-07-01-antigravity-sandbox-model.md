---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-antigravity-sandbox-model
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: medium
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/main/CHANGELOG.md
    precision: official_changelog
---
# 2026-07-01-antigravity-sandbox-model

Current-state posture (baseline for the new profile, not an in-window change):
Antigravity ships a `proceed-in-sandbox` permission mode that auto-approves
terminal commands run inside its secure sandbox (added 1.0.1), with `.git` on the
core list of dangerous paths (hardened 1.0.9), plus launch flags `--sandbox` and
`--dangerously-skip-permissions`. Recorded to seed the profile's sandbox claim;
confidence medium because the code is closed and the isolation guarantee rests on
the changelog/docs, not readable enforcement. Detail in harvest/watchlist.md.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/main/CHANGELOG.md
