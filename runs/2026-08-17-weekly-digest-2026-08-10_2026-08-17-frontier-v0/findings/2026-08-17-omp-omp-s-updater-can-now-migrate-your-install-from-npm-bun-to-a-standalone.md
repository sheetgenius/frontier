---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omp-omp-s-updater-can-now-migrate-your-install-from-npm-bun-to-a-standalone
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v17.2.13
    precision: github_release
---
# 2026-08-17-omp-omp-s-updater-can-now-migrate-your-install-from-npm-bun-to-a-standalone

OMP's updater can now migrate your install from npm/Bun to a standalone binary in place.

`omp update` now honors an `omp.dist` distribution field published in the release's npm manifest, and treats a major-version bump without one as binary-only: a bun- or npm-managed install is migrated to the standalone GitHub release binary in place rather than running a package-manager install. On Windows, npm's script shims (`omp.cmd` / `omp.ps1`) are taken over by installing `omp.exe` beside them and retiring the shims. Separately, v17.3.0 added `omp update` and startup version-check support for an `omp.rename` pointer in the published manifest, described as preparation for an upcoming npm package rename. I checked the live manifest for @oh-my-pi/pi-coding-agent 17.3.5 and no `omp` or `omp.rename` key is present yet, so the client can follow a rename that has not been published.

Channel: tagged-release. Ancestry: Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.2.13, published_at 2026-08-11T14:41:52Z, prerelease=false; npm published 17.2.13 at 2026-08-11T14:45:07Z. Changelog entry pinned at https://github.com/can1357/oh-my-pi/blob/v17.2.13/packages/coding-agent/CHANGELOG.md.

Operator consequence: Watch this one closely if you manage OMP through a package manager. Two things are now true: the tool can change its own distribution method underneath you, so a machine you believe is npm-managed can silently become a standalone binary that npm no longer tracks; and the maintainer has pre-wired the client to follow a package rename that has not happened. Given that @oh-my-pi/pi-coding-agent and upstream Pi's @earendil-works/pi-coding-agent already share a basename under different scopes, a rename is the moment where an operator most needs to know exactly which package their machine is following. Pin explicitly if you cannot tolerate that.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v17.2.13
