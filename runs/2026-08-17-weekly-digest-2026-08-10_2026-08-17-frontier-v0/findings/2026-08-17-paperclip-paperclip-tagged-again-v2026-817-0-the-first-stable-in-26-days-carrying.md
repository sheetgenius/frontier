---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-paperclip-tagged-again-v2026-817-0-the-first-stable-in-26-days-carrying
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
    precision: github_release
---
# 2026-08-17-paperclip-paperclip-tagged-again-v2026-817-0-the-first-stable-in-26-days-carrying

Paperclip tagged again: v2026.817.0, the first stable in 26 days, carrying 315 commits.

After 26 days in which Paperclip put hundreds of commits on master and tagged nothing, it published a stable release: v2026.817.0, 315 commits past v2026.722.0, 311 of them from 17 contributors per the release's own contributor line. It carries a first-class Decisions propose/decide workflow, full-fidelity company Import/Export, a managed CLI install and service lifecycle, a merged Activity/audit page, and four stated breaking changes. Note the boundary honestly: the version string and the release header say 2026-08-17, GitHub's publish timestamp says 2026-08-18T03:17:29Z.

Channel: tagged-release. Ancestry: gh api repos/paperclipai/paperclip/releases -> v2026.817.0, prerelease=false, draft=false, target_commitish=master, created_at 2026-08-18T02:27:30Z, published_at 2026-08-18T03:17:29Z, author github-actions[bot]. Tag object resolves to commit 213dabab4f8e1f3bb1803a2924c0fea1289fcd4c (committed 2026-08-18T02:27:30Z). gh api repos/paperclipai/paperclip/compare/v2026.722.0...v2026.817.0 -> status=ahead, ahead_by=315, behind_by=0. The release body's own header line reads '> Released: 2026-08-17'; the UTC publish stamp falls ~3h past the window edge, which is 2026-08-17 19:17 US Pacific.

Operator consequence: Upgrade, but read the Upgrade Guide first: 28 migrations (0184-0211) run automatically on startup and migration 0196 drops the tables belonging to the removed experimental Cloud Sync transport. Anyone who has been tracking master because there was no stable to track can now stop.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
