---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-antigravity-in-window-release-train
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases
    precision: github_release
---
# 2026-07-01-antigravity-in-window-release-train

Antigravity CLI shipped three tagged releases inside the window -- 1.0.12
(2026-06-24), 1.0.13 (2026-06-27), and 1.0.14 (2026-06-30) -- a rapid stable
cadence for the closed-source successor in its second month. The window's
substantive movement is in approvals/permissions and subagent auto-approval
(carried as separate findings). Channel: tagged-release.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases
