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

GitHub release 1.1.17 published 2026-08-20T22:13:58Z. The git tag object is SHA efa16f09, identical to 1.1.16. compare 1.1.16...1.1.17 is status=identical, ahead_by=0, files=[]. CHANGELOG.md at refs/tags/1.1.17 tops at ## 1.1.16; there is no ## 1.1.17 section. The GitHub body ("single execution path") is not in git. Parent-style tag/changelog collision, one cut later. 1.1.14 through 1.1.16 GitHub bodies match CHANGELOG at those tags.

Channel: tagged-release as a GitHub Release object and binary; git ancestry is the 1.1.16 tree. Half: neither as a git-backed claim.

Operator consequence: do not treat 1.1.17 as a documented harness change. Stay on 1.1.16 if you need the last git-backed changelog. Regression-test the 1.1.17 binary if you install it.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.17
- https://github.com/google-antigravity/antigravity-cli/compare/1.1.16...1.1.17
