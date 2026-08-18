---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-omnigent-tag-push-protection-exists-only-on-the-nightly-channel-no-stable-tag
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/3620
    precision: merged_pr
---
# 2026-08-10-omnigent-tag-push-protection-exists-only-on-the-nightly-channel-no-stable-tag

Tag-push protection exists only on the nightly channel; no stable tag carries it.

A `deny_tag_push` parameter, default `true`, blocks `git push --tags`, `git push --follow-tags` and explicit `refs/tags/` refspecs, and filters tag refspecs out of the branch set so they cannot pollute `write_branches` checks. The stated motivation is that an agent pushing a tag can trigger releases and deployments. It merged three days after its force-push sibling (#3570) but missed the v0.9.0 cut, which was branched before 2026-08-07 and only backported six named fixes.

Channel: preview-or-beta. Ancestry: PR #3620 merge commit 5798d74e5b8a64d9215591c7f5914ea8c2979621, merged 2026-08-07T17:36:53Z. gh api repos/omnigent-ai/omnigent/compare/v0.9.0...5798d74e5b8a64d9215591c7f5914ea8c2979621 -> status "diverged", ahead_by 37 (NOT in the newest stable tag, which was cut four days later). Against the nightly prerelease tags v0.10.0.dev20260812, v0.10.0.dev20260813 and v0.10.0.dev20260817 -> status "behind", ahead_by 0 in each case. No GitHub release exists for any .dev tag, and PyPI carries zero .dev versions across all 28 published versions of the `omnigent` project.

Operator consequence: Watch, do not plan around it. If your release pipeline fires on tag push and you assumed the GitHub policy covers it because force-push protection shipped, it does not: on v0.9.0 an agent can still push a tag. Reaching it today means riding `omni upgrade --nightly` or pinning a git ref, both of which put you on an untagged, unreleased build. This is the cleanest illustration this window of why release channel has to be resolved by ancestry rather than by merge date: two sibling PRs three days apart, one released, one not.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/3620
