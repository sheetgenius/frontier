---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omnigent-github-policy-denies-force-push-by-default-in-v0-9
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/3570
    precision: merged_pr
---
# 2026-08-17-omnigent-github-policy-denies-force-push-by-default-in-v0-9

GitHub policy denies force-push by default in v0.9.0.

A `deny_force_push` parameter, default `true`, blocks `git push` carrying `--force`, `-f`, `--force-with-lease` or `--force-if-includes` regardless of the repo and branch allowlists. The check fires before repo/branch gating, so a force push to an undeterminable remote alias is DENY rather than ASK, and it survives a `bash -c` wrapper. Operators opt out with `deny_force_push: false`.

Channel: tagged-release. Ancestry: PR #3570 merge commit 0af9ad141a541b13930f6e222fea15f35844cd44, merged 2026-08-04T13:24:08Z. gh api repos/omnigent-ai/omnigent/compare/v0.9.0...0af9ad141a541b13930f6e222fea15f35844cd44 -> status "behind", ahead_by 0; against v0.8.2 -> "diverged", ahead_by 42. Also listed in the generated CHANGELOG under [v0.9.0] (#3570).

Operator consequence: Test before upgrading if any of your agents legitimately force-push (rebase-and-push automation, release branch resets); the default flips to deny and the deny is unconditional. Otherwise this is a control you now get without writing it, and it is the first of the two push-shaped controls to actually reach a release.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/3570
