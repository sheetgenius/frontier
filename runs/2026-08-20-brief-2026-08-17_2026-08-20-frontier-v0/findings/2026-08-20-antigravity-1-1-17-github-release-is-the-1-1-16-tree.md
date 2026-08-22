---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-antigravity-1-1-17-github-release-is-the-1-1-16-tree
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.17
    precision: github_release
  - url: https://github.com/google-antigravity/antigravity-cli/compare/1.1.16...1.1.17
    precision: git_compare
---
# 2026-08-20-antigravity-1-1-17-github-release-is-the-1-1-16-tree

GitHub release 1.1.17 published 2026-08-20T22:13:58Z. The git tag object is SHA efa16f09, identical to 1.1.16. compare 1.1.16...1.1.17 is status=identical, ahead_by=0, files=[]. CHANGELOG.md at refs/tags/1.1.17 tops at ## 1.1.16. The GitHub body ("single execution path") matches untagged SHA adfa9eb8 (2026-08-20T22:14:00Z), not the tag. The binaries differ: 1.1.16 linux_x64 sha256 7742953b... size 55572718; 1.1.17 linux_x64 sha256 15443966... size 55607296. Lightweight tags on this repo have moved since the parent harvest. Parent-style tag/changelog collision, one cut later.

Channel: tagged-release as a GitHub Release object and binary; git ancestry is the 1.1.16 tree. Half: neither as a git-backed claim.

Operator consequence: do not treat `gh compare 1.1.16...1.1.17` as proof the tarballs are the same. Stay on 1.1.16 if you need the last git-backed changelog. Pin the GitHub asset digest, not the git tag. Do not pin receipts to a lightweight tag ref; they move.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.17
- https://github.com/google-antigravity/antigravity-cli/compare/1.1.16...1.1.17
