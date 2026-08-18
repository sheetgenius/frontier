---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-paperclip-the-stable-that-shipped-on-2026-08-17-contains-no-code-merged-after
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/compare/v2026.722.0...v2026.817.0
    precision: ancestry_compare
---
# 2026-08-17-paperclip-the-stable-that-shipped-on-2026-08-17-contains-no-code-merged-after

The stable that shipped on 2026-08-17 contains no code merged after 2026-08-10.

The new soak policy has a visible consequence the release name hides. v2026.817.0 is the promotion of beta/v2026.811.0-beta.0, whose commit is 8f7b8b3f from 2026-08-10T23:52:59Z. Everything merged between 2026-08-11 and 2026-08-17 -- 176 commits, including two security-class fixes -- is not in it. The only things the release branch added on top of the soaked beta are one CI test-sharding refactor and three edits to the release-notes file, so the release body's claim that this is 'this exact build' holds for shipped code.

Channel: tagged-release. Ancestry: gh api repos/paperclipai/paperclip/compare/master...v2026.817.0 -> merge_base_commit 8f7b8b3fdab2c6940f5d712134d9f62e42c7a293, committed 2026-08-10T23:52:59Z ('feat(release): add human-gated beta channel with stable soak enforcement (#11008)'), with exactly 4 commits in the tag and not on master. Those 4 are 820fa9ee0 (.github/workflows/pr.yml, release-verify.yml, scripts/run-vitest-stable.mjs), b792a4594, 67fedf8c4 and 213dabab4 (all releases/v2026.817.0.md only) -- CI and release notes, no shipped runtime code. Spot-checked containment: every PR merged at or before 2026-08-10T23:53Z tested returns status=ahead against the tag; every PR merged after returns diverged with behind_by>0 (e.g. #11101 at 815e49bb7 -> diverged, behind=12).

Operator consequence: Do not read the version number as a date. v2026.817.0 is a 2026-08-10 build wearing a 2026-08-17 name, which is exactly what a 3-day soak gate is supposed to produce. Resolve any fix you care about by ancestry against 8f7b8b3f, not by comparing its merge date to the release date.

## Receipt
- https://github.com/paperclipai/paperclip/compare/v2026.722.0...v2026.817.0
