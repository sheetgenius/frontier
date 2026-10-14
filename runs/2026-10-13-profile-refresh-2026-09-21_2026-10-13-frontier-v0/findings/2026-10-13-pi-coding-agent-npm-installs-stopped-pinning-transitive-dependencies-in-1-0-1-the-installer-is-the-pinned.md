---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-npm-installs-stopped-pinning-transitive-dependencies-in-1-0-1-the-installer-is-the-pinned
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v1.0.1
    precision: github_release
  - url: https://github.com/earendil-works/pi/commit/581e7ba78141a4d8b61cc9d11b8b22ae7e59195e
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/quickstart.md#L7-L30
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/.github/workflows/nix.yml#L11-L13
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/commit/0a8cfff4cbcbbdb0071ebe056f1fcb5710e7fcf0
    precision: commit
  - url: https://github.com/earendil-works/pi/releases/tag/v1.2.0
    precision: github_release
  - url: https://registry.npmjs.org/@earendil-works/pi-coding-agent
    precision: official_docs
  - url: https://registry.npmjs.org/@mariozechner/pi-coding-agent
    precision: official_docs
  - url: https://pi.dev/api/installer/releases/latest
    precision: official_docs
  - url: https://github.com/earendil-works/pi/actions/runs/38318646655
    precision: official_docs
  - url: https://api.github.com/repos/earendil-works/pi/git/ref/heads/stable
    precision: official_docs
---
# 2026-10-13-pi-coding-agent-npm-installs-stopped-pinning-transitive-dependencies-in-1-0-1-the-installer-is-the-pinned

npm installs stopped pinning transitive dependencies in 1.0.1; the installer is the pinned path, and the Nix channel is stuck on 1.1.0. At the 13 October observation, newest stable is v1.2.0 (GitHub 2026-10-12T23:03:53Z; npm 2026-10-12T23:03:25Z), Node >=22.19.0, npm latest=1.2.0 and legacy-node20=0.74.2, with no prerelease dist-tag or release in the window. The old @mariozechner/pi-coding-agent remains at 0.73.1 and is deprecated in favor of @earendil-works/pi-coding-agent. Registry/API checks on 14 October corroborate this, without establishing an archived 13 October dist-tag history. Through 1.0.0 the npm tarball carried `npm-shrinkwrap.json`, so `npm install -g` got the transitive tree the maintainers tested. 1.0.1 removed it so that library consumers can override dependencies (#5653). `pi update` on a global npm install now recommends moving to the managed installer. The quickstart now leads with `curl -fsSL https://pi.dev/install.sh | sh`, which runs `npm ci --ignore-scripts` against a lockfile served by pi.dev. npm comes second, with `--ignore-scripts` and the note that it "does not pin transitive dependencies". Nix arrived as a third channel the same day. Its `stable` ref did not advance to 1.2.0 because the tag build failed everywhere. So on 13 October, `nix profile add github:earendil-works/pi/stable` installs 1.1.0, while the live docs say it installs "the latest release". The same release pins `brace-expansion` 5.0.12 as a direct dependency (section 10), so that fix survives the shrinkwrap removal.

Channel: tagged-release. The Nix packaging fix is main-unreleased.. Half: both. Date: 2026-10-03.

Operator consequence: For reproducible fleets, use the pi.dev installer or maintain your own lockfile; a bare `npm install -g` now floats its dependency tree. Keep `--ignore-scripts`. Nix catches up only after a successful tagged build and advancement of stable; the main repair is not a released fix. Check `pi --version`. Main also pins internal Pi versions (section 12), without pinning every external transitive dependency. Pinning `github:earendil-works/pi/v1.2.0` targets the same build that failed in the vendor's own CI.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v1.0.1
- https://github.com/earendil-works/pi/commit/581e7ba78141a4d8b61cc9d11b8b22ae7e59195e
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/quickstart.md#L7-L30
- https://github.com/earendil-works/pi/blob/v1.2.0/.github/workflows/nix.yml#L11-L13
- https://github.com/earendil-works/pi/commit/0a8cfff4cbcbbdb0071ebe056f1fcb5710e7fcf0
- https://github.com/earendil-works/pi/releases/tag/v1.2.0
- https://registry.npmjs.org/@earendil-works/pi-coding-agent
- https://registry.npmjs.org/@mariozechner/pi-coding-agent
- https://pi.dev/api/installer/releases/latest
- https://github.com/earendil-works/pi/actions/runs/38318646655
- https://api.github.com/repos/earendil-works/pi/git/ref/heads/stable
