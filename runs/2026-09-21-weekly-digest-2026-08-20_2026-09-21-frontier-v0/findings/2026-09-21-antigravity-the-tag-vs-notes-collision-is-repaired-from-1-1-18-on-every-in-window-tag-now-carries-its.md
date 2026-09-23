---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-antigravity-the-tag-vs-notes-collision-is-repaired-from-1-1-18-on-every-in-window-tag-now-carries-its
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/compare/1.1.17...1.1.18
    precision: git_compare
---
# 2026-09-21-antigravity-the-tag-vs-notes-collision-is-repaired-from-1-1-18-on-every-in-window-tag-now-carries-its

The tag-vs-notes collision is repaired from 1.1.18 on; every in-window tag now carries its own notes and a unique binary. The failure parent recorded twice (a release object whose git tag is the previous tree) did not recur across 19 cuts. The repo's git record now tracks the release page one-to-one. It is still only a notes record: the tag cannot tell you what the binary does, and lightweight tag 1.1.13 still points at fbf22703, not the f7519c90 parent-of-parent recorded.

Channel: tagged-release (all 19 cuts prerelease=false). Half: capability (verifiability). Date: 2026-08-22 onward.

Operator consequence: An operator can now pin an Antigravity receipt to the tag (`/blob/<tag>/CHANGELOG.md`) and pin the install to the release asset's sha256. Keep pinning to digests: the tag proves the notes, not the binary. Stop treating the 1.1.17 anomaly as ongoing.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/compare/1.1.17...1.1.18
