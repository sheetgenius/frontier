---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-moves-installs-to-an-unsigned-homebrew-cask-that-strips-macos-quarantine-v0-3-0-is
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/.goreleaser.yaml#L28-L87
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/homebrew-tap/blob/3d844f21a9417c719c9de225bee74415e9409ef6/Casks/unreal-agent.rb
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/actions/runs/37487295997
    precision: official_docs
  - url: https://hub.docker.com/v2/repositories/unrea1labs/unreal-agent/tags
    precision: official_docs
  - url: https://hub.docker.com/v2/users/unreallabs/
    precision: official_docs
  - url: https://github.com/unreallabsai/unreal-agent/releases/tag/v0.3.1
    precision: github_release
  - url: https://proxy.golang.org/github.com/unreallabsai/unreal-agent/@latest
    precision: official_docs
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/Dockerfile.release
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-runner/README.md
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/compare/v0.3.1...a5f3fd13032737142916523ae4344c392292f9d5
    precision: git_compare
---
# 2026-10-13-unreal-agent-v0-3-1-moves-installs-to-an-unsigned-homebrew-cask-that-strips-macos-quarantine-v0-3-0-is

v0.3.1 moves installs to an unsigned Homebrew cask that strips macOS quarantine; v0.3.0 is a tag with no release or image. GoReleaser v2.18.2 now builds and publishes everything in one job (release.yml L46-L53 at v0.3.1). Archives are renamed `unreal-agent_<ver>_<os>_<arch>.tar.gz` and contain both binaries. The new cask `unreallabsai/tap/unreal-agent` installs the runner and the TUI and aliases the TUI as `unreal-agent` and `uat`. On macOS it runs a postflight step, `xattr -dr com.apple.quarantine`, which the config explains as clearing quarantine "only for this unsigned package" (.goreleaser.yaml L67 and L73). The release configuration describes the package as unsigned, and the cask removes the macOS quarantine attribute; the per-archive sha256 pins are the integrity check. No installed-binary signing, notarization or Gatekeeper behavior was tested. The Docker image keeps the `unrea1labs/unreal-agent` name (L43). It holds only the runner (Dockerfile.release copies `unreal-agent-runner`) and is tagged v0.3.1 and latest. v0.3.0 has a tag and a Go proxy entry, but no release object and no image. No release body describes the v0.3.0 work. One correction belongs here: the profile said the look-alike `unreallabs` namespace "was unclaimed on 23 September". The registry shows `unreallabs` has been a Docker Hub user account since 2026-07-21, with an empty profile and no public repositories; what returns 404 is the repository `unreallabs/unreal-agent`. The vendor's own organization, `unrea1labs`, was created on 2026-09-22.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: Install with `brew install unreallabsai/tap/unreal-agent`, which pins 0.3.1 by sha256, or download the archive and check SHA256SUMS yourself. On macOS, the cask removes the quarantine attribute from the package described as unsigned, so review your trust in the tap repository (pushed by the release job's deploy key) and the GitHub release. If your fleet requires notarized or allowlisted binaries, use the archive and your own signing. Scripts that fetch `unreal-agent-runner_<ver>_*` break at 0.3.1. Pin the image by digest. For archives or Docker, use v0.3.1: v0.3.0 is a Go tag without a GitHub release or image. Read the compare, not the release body, to learn what changed. The look-alike name is held by an account that nothing on the record ties to the vendor, and that account could publish `unreallabs/unreal-agent` at any time. Copy the image name from the README, or use the cask and avoid the image name altogether.

## Receipt
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/.goreleaser.yaml#L28-L87
- https://github.com/unreallabsai/homebrew-tap/blob/3d844f21a9417c719c9de225bee74415e9409ef6/Casks/unreal-agent.rb
- https://github.com/unreallabsai/unreal-agent/actions/runs/37487295997
- https://hub.docker.com/v2/repositories/unrea1labs/unreal-agent/tags
- https://hub.docker.com/v2/users/unreallabs/
- https://github.com/unreallabsai/unreal-agent/releases/tag/v0.3.1
- https://proxy.golang.org/github.com/unreallabsai/unreal-agent/@latest
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/Dockerfile.release
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-runner/README.md
- https://github.com/unreallabsai/unreal-agent/compare/v0.3.1...a5f3fd13032737142916523ae4344c392292f9d5
