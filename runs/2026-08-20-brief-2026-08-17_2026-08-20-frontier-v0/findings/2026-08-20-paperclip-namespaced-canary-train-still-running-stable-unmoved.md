---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-paperclip-namespaced-canary-train-still-running-stable-unmoved
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
    precision: github_release
  - url: https://github.com/paperclipai/paperclip/releases
    precision: github_release
---
# 2026-08-20-paperclip-namespaced-canary-train-still-running-stable-unmoved

Stable did not move. GitHub releases tip remains v2026.817.0, published_at=2026-08-18T03:17:29Z, prerelease=false. Next listed GitHub release is v2026.722.0.

The namespaced prerelease train kept moving. matching-refs lengths: canary 818=17, 819=10, 820=7; nightly 818=2, 819=1, 820=1; beta gained `v2026.818.0-beta.1` (SHA 664052f8). Parent main-unreleased security pair (review-policy 57edb26db, CWE-78 fdb9a4880) is an ancestor of that beta and of nightly/v2026.820.0-nightly.0 (5a1ce7ae), and is still not an ancestor of v2026.817.0. Tags dated 2026.821.* are 2026-08-21, out of window. The flat `/tags` listing still does not surface slash-prefixed names.

Channel: preview-or-beta for the namespaced tags; tagged-release unchanged for stable. Half: both (security pair reachable on beta/nightly; no new stable capability).

Operator consequence: do not read "no newer GitHub release" as "nothing shipped." Default install is still v2026.817.0. Pin `@beta` or `@nightly` if you need the review-policy lock or the inert-argv CLI guidance.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
- matching-refs under refs/tags/canary/ and refs/tags/nightly/ (query the git namespace, not the flat tag list)
