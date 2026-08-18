---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omnigent-shell-gate-parser-failed-open-on-option-taking-command-wrappers-fixed
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/3559
    precision: merged_pr
---
# 2026-08-17-omnigent-shell-gate-parser-failed-open-on-option-taking-command-wrappers-fixed

Shell-gate parser failed open on option-taking command wrappers; fixed on main in w1, released in v0.9.0.

`sudo`, `env`, `command`, `time` and `exec` were classified as skip-one-word wrappers rather than flag-taking wrappers, so `sudo -u root git push ...` left `-u` where the command should be: the classifier saw no `git`, the policy abstained, and the shell gate returned ALLOW. The same hole existed one level down for bundled short options (`sudo -nu root git push`, `env -iu FOO git push`, and pre-existing `nice -qn 10 git push` against the wrappers fixed by the June advisory GHSA-7mqg-cx4g-x2rf). The fix moves the wrappers into the flag-aware table, scans option bundles character by character, and adds `is_unresolved_invocation()` as a fail-safe so an unmodelled wrapper routes to each policy's existing can't-parse path (ASK in github.py, the configured action in working_dir.py) instead of abstaining.

Channel: tagged-release. Ancestry: PR #3559 merge commit a4a924ae7582a11ecd4a809dbc5c38e7a18088d8, merged 2026-08-05T05:24:31Z. gh api repos/omnigent-ai/omnigent/compare/v0.9.0...a4a924ae7582a11ecd4a809dbc5c38e7a18088d8 -> status "behind", ahead_by 0. The same compare against v0.8.2 -> status "diverged", ahead_by 83, so the v0.8.x line released 2026-08-11 does NOT carry it. Confirmed in the generated CHANGELOG under [v0.9.0].

Operator consequence: Upgrade to v0.9.0. This is the same failure class as the June guardrail-bypass advisory, reached through a different wrapper table, and it defeats both the GitHub Repo & Branch Access policy and the Block Working Directory policy. Anyone pinned to the v0.8.x line, including v0.8.2 released the same day as v0.9.0, is still exposed. No advisory was published for it.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/3559
