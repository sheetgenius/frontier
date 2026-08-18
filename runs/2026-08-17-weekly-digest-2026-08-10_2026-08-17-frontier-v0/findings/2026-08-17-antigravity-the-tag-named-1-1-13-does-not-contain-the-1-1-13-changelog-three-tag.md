---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-antigravity-the-tag-named-1-1-13-does-not-contain-the-1-1-13-changelog-three-tag
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
    precision: github_release
---
# 2026-08-17-antigravity-the-tag-named-1-1-13-does-not-contain-the-1-1-13-changelog-three-tag

The tag named 1.1.13 does not contain the 1.1.13 changelog -- three tag pairs in the 1.1.x line collide.

Antigravity's git tags do not identify the versions they name. The tag `1.1.13` and the tag `1.1.12` are the same commit; https://github.com/google-antigravity/antigravity-cli/blob/1.1.13/CHANGELOG.md shows 1.1.12's notes. The same collision has occurred twice before in this minor line (1.1.8/1.1.9, 1.1.2/1.1.3). Release *bodies* are correct and match the changelog verbatim -- the defect is in the tag refs, which is precisely the surface a receipt-keeping operator is told to pin to. Note also that this repository has no code: the tree at fbf22703 is `.github`, `CHANGELOG.md`, `README.md`, a demo gif and `examples`, /languages returns {} and /license 404s. So even a correct tag would establish only when a markdown file landed.

Channel: docs-only. Ancestry: gh api .../git/ref/tags/1.1.12 and .../git/ref/tags/1.1.13 both return commit f7519c9084190ed421e89dd81c63970b5177c9ef. curl of raw.githubusercontent.com/.../1.1.13/CHANGELOG.md returns a file whose top section is '## 1.1.12'. The full tag listing shows the same collision at 1.1.8 == 1.1.9 (03e095ac3619, top section '## 1.1.8') and 1.1.2 == 1.1.3 (b27d51dbe52b, top section '## 1.1.2'). The commit that does carry the 1.1.13 changelog, fbf22703a9c4bda0758b5bace0ab3142746780a9, is the commit the 1.1.14 tag points to. Release created_at vs published_at explains the mechanism: the 1.1.13 release object was created 2026-08-11T01:26:06Z (the 1.1.12 commit's timestamp) and published 2026-08-14T02:26:19Z, so the tag was cut against the then-current main.

Operator consequence: Do not pin an Antigravity receipt to a tag ref or to a `/blob/<tag>/` URL -- for three versions in this line it resolves to the previous release's notes. Pin to the release page (`/releases/tag/1.1.13`), whose body is correct, or to a `/blob/<sha>/CHANGELOG.md` URL you resolved yourself. And do not run `git tag --contains` against this repository expecting it to mean anything about shipped code: there is none. For a publication whose central rule is released-is-not-merged, this is the boundary case where the vendor has made the question unanswerable from the outside -- the honest statement is 'the vendor published these notes under this version number on this date', not 'this commit shipped'.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.13
