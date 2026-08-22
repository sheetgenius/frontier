---
schema_version: bitter.frontier_harvest.v0
provider: openclaw
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/openclaw.yml
channels_present: [main-unreleased]
window_volume: 1 material change (carry-forward still unreleased)
lane: primary sources, coordinator ancestry on parent SHA
---

# Harvest -- openclaw (primary sources)

Punctuation is ASCII.

## 1. The approved-exec fix is still in no release

- **Date:** 2026-08-20 (observation of channel; merge was 2026-08-17)
- **Channel:** `main-unreleased`
- **Ancestry evidence:** Parent merge commit ab5611f0be610380fe48803fe4311896ca85806e ("fix(security): prevent approved scripts from changing before execution (#124858)", 2026-08-17T01:26:42Z). Latest GitHub release in or before window close: v2026.8.1-beta.2, prerelease=true, published 2026-08-15T05:36:23Z, tag SHA 8f382a202ff1e15833394b481615dcdda99b04d7. Latest non-prerelease: v2026.7.1-2 published 2026-08-04. `gh api repos/openclaw/openclaw/compare/v2026.8.1-beta.2...ab5611f0be610380fe48803fe4311896ca85806e` -> ahead_by=619, behind_by=22, status=diverged. The commit is not an ancestor of the newest beta tag. No newer release tag exists on the first 20 releases or first 15 tags through window close. Tags API tip is still v2026.8.1-beta.2.
- **Receipt:** https://github.com/openclaw/openclaw/commit/ab5611f0be610380fe48803fe4311896ca85806e
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Nothing an operator can install. The bytes-approved-versus-bytes-executed fix remains on the default branch. This window cut zero OpenClaw releases.

**Operator consequence.** Same as the parent brief: a stable or even beta-tagged install does not contain the approved-exec binding. Say that to anyone relying on the approval prompt. Evidence that would settle the residual is a non-prerelease (or at least any) tag whose `git merge-base --is-ancestor ab5611f0 <tag>` is true.

## 2. Main gained a Gateway-owned GitHub publish path an operator still cannot install

- **Date:** 2026-08-19 / 2026-08-20
- **Channel:** `main-unreleased`
- **Ancestry evidence:** PR #126306 squash 0606e31d, merged 2026-08-19. Gateway waits for workspace reconciliation, revalidates session/worktree/branch, pushes HTTPS, opens or reuses a draft PR. Workers never receive the forge credential. PR #126474 squash 0a867022, merged 2026-08-20: Settings device authorization for agent GitHub identities. Newest beta tag v2026.8.1-beta.2 predates both. npm dist-tags did not move. Window-close main tip 91b8a034 (2026-08-20T23:27:26Z); compare vs the beta is diverged, ahead_by=1743.
- **Receipt:** https://github.com/openclaw/openclaw/commit/0606e31d0e623f010a96f0efe7d6434324cb6467
- **Half:** capability | security-relevant | **Confidence:** high on merge and channel; medium on live GitHub-write behaviour (PR records no disposable live publish)

**What changed.** A cloud/managed-worktree agent can finish repo work without a standing forge credential, on main only. That is the capability half of a window with zero releases.

**Operator consequence.** Do not plan a workflow around "the agent opens the PR from the cloud worker" on latest or beta. Watch for a tag that contains 0606e31d and 0a867022.

## Researcher lane notes

Carry-forward answer: no. Versioned GitHub Releases in-window: zero. Atom feed has CI `release-publish/*` snapshots; do not count those as the product channel. Social: Crabbox+E2B is a sandbox-provider claim, not a substitute for this channel fact.

## Surfaces checked

- gh api repos/openclaw/openclaw/releases (20)
- gh api repos/openclaw/openclaw/tags (15)
- gh api commit ab5611f0
- gh compare v2026.8.1-beta.2...ab5611f0
