---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-the-gap-reopened-the-day-the-release-shipped-master-is-176-commits-past
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/compare/v2026.817.0...master
    precision: ancestry_compare
---
# 2026-08-17-paperclip-the-gap-reopened-the-day-the-release-shipped-master-is-176-commits-past

The gap reopened the day the release shipped: master is 176 commits past the stable.

Tagging v2026.817.0 did not close Paperclip's merged-versus-released gap; the release froze on 2026-08-10 and 176 commits accumulated behind it before it was even published. Among them: chat-style tasks became the default experience rather than an experiment (#11101, merged 2026-08-11T16:06:22Z, merge commit 815e49bb7, diverged from the tag with behind=12), the Decision Training UI was removed (#11225, 2026-08-11T18:23:57Z), a sandbox provider capability contract with fail-closed effective resolution landed (#11463, 2026-08-17T17:55:41Z), and #11557 (2026-08-17T20:25:31Z, merge commit 3061ce690, diverged with behind=154) made the verified capability snapshot the only streaming decision and dropped three operator configuration flags, rendering removed keys inert in saved configs.

Channel: main-unreleased. Ancestry: gh api repos/paperclipai/paperclip/compare/8f7b8b3fdab2c6940f5d712134d9f62e42c7a293...master -> status=ahead, ahead_by=176, behind_by=0, where 8f7b8b3f is the content freeze of v2026.817.0. gh api repos/paperclipai/paperclip/compare/v2026.817.0...master -> diverged, ahead_by=176, behind_by=4 (the 4 being the release-branch CI and notes commits). 268 PRs merged into master between 2026-08-03 and 2026-08-17 per the search API.

Operator consequence: Keep resolving Paperclip by ancestry, not by release date. The new soak gate means the stable you install is always about a week behind master by construction, and the beta channel -- not the stable tag -- is where the current week's work is visible. If you configured the three dropped sandbox streaming flags, they become inert whenever #11557 reaches a channel you run.

## Receipt
- https://github.com/paperclipai/paperclip/compare/v2026.817.0...master
