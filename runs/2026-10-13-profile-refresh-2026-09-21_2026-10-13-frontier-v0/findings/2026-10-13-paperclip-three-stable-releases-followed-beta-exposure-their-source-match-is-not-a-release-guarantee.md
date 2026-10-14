---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-three-stable-releases-followed-beta-exposure-their-source-match-is-not-a-release-guarantee
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0
    precision: github_release
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
    precision: github_release
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0
    precision: github_release
  - url: https://github.com/paperclipai/paperclip/compare/22a3ea3414e9039a538fbb0374b3cfa7fc4371eb...bba6a45f0d364cfd962ac59b3bdf2426a8222adb
    precision: git_compare
  - url: https://github.com/paperclipai/paperclip/compare/v2026.1012.0...e0f30a4c7186498b71b2637f253b3399997dac7d
    precision: git_compare
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/CHANNELS.md#L7-L18
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/paperclipai
    precision: official_docs
  - url: https://github.com/paperclipai/paperclip/compare/be3e614d61bda152812cb51d7b0c173569d3113d...e0f30a4c7186498b71b2637f253b3399997dac7d
    precision: git_compare
---
# 2026-10-13-paperclip-three-stable-releases-followed-beta-exposure-their-source-match-is-not-a-release-guarantee

Three stable releases followed beta exposure; their source match is not a release guarantee. Three stables were published after approximately 10, 4.5 and 6 days of beta exposure. The first two use the same source commit as their betas, not verified byte-identical independently built packages. The third changes releases/v2026.1012.0.md, scripts/run-vitest-stable.mjs and scripts/__tests__/run-vitest-stable-shard.test.mjs, leaving application source unchanged. The channel policy requires at least three beta days without promising a stable date. September 22 through October 13 version-day tag counts are 3 beta, 21 nightly and 264 canary; October 13 contributes 17 canaries. Those counts are not counts of publication timestamps. Nightly 2026.1013.0-nightly.0 ships the formerly main-only morning snapshot; canary.16 ships later changes. The later default-branch commits between canary.16 be3e614d and the end-of-window e0f30a4c snapshot remain outside those published previews at the cutoff. Three observed promotions establish neither a universal beta-to-stable identity nor a typical six-to-thirteen-day fix delivery rule.

Channel: tagged-release. Half: both. Date: 2026-10-02 to 2026-10-12; channel inventory through 2026-10-13.

Operator consequence: Pin fleet versions and read the actual stable diff and breaking changes. Beta provides an observable candidate, not a guarantee about the next release or its date. Keep package publication, source containment, observed dist-tags and moving container tags distinct when assigning channel status.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0
- https://github.com/paperclipai/paperclip/compare/22a3ea3414e9039a538fbb0374b3cfa7fc4371eb...bba6a45f0d364cfd962ac59b3bdf2426a8222adb
- https://github.com/paperclipai/paperclip/compare/v2026.1012.0...e0f30a4c7186498b71b2637f253b3399997dac7d
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/CHANNELS.md#L7-L18
- https://registry.npmjs.org/paperclipai
- https://github.com/paperclipai/paperclip/compare/be3e614d61bda152812cb51d7b0c173569d3113d...e0f30a4c7186498b71b2637f253b3399997dac7d
