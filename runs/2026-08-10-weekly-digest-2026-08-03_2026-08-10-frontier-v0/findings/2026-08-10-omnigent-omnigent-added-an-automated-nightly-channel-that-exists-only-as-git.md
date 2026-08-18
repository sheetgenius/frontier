---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-omnigent-omnigent-added-an-automated-nightly-channel-that-exists-only-as-git
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/3475
    precision: merged_pr
---
# 2026-08-10-omnigent-omnigent-added-an-automated-nightly-channel-that-exists-only-as-git

Omnigent added an automated nightly channel that exists only as git tags.

A nightly workflow cuts a PEP 440 dev-datestamped tag (`0.9.0.dev0` on main becomes `v0.9.0.dev20260804`) from the newest fully-green commit on main, at 04:30 UTC, with no human in the loop. The nightly commit is detached and reachable only through its tag; main is never bumped. Consumption is `omni upgrade --nightly`, which resolves the newest nightly tag and reinstalls git-pinned with the detected installer, or `scripts/update_nightly.sh`. The PR is explicit that this is tag-only and does not go to the index: GitHub Releases, the changelog, Homebrew and `pip install omnigent` all ignore prerelease tags.

Channel: tagged-release. Ancestry: PR #3475 merge commit cfb431c20c6b, merged 2026-08-03T19:08:42Z; gh api repos/omnigent-ai/omnigent/compare/v0.8.0...cfb431c20c6b -> status "behind", ahead_by 0 (the workflow itself is in the v0.8.0 tag). The channel it creates is separately verified: git tags v0.9.0.dev20260804 through v0.9.0.dev20260811 and v0.10.0.dev20260812 through v0.10.0.dev20260817 exist, none of them has a GitHub release (the releases API returns 11 entries, all prerelease=false, newest v0.9.0), and the PyPI JSON API for `omnigent` lists 28 versions with zero containing "dev".

Operator consequence: Watch, and read it as a channel map rather than a feature. Omnigent now has four distinguishable channels  --  PyPI stable, PyPI rc, git nightly tag, and main  --  and only the first two are what `pip install omnigent` or `brew install omnigent` will ever hand you. Fourteen nightly tags accumulated in this window and none of them is installable through a package manager. If you read a merged PR and want the behaviour, the nightly tag is the only route short of a git pin, and it is an untested-by-release build.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/3475
