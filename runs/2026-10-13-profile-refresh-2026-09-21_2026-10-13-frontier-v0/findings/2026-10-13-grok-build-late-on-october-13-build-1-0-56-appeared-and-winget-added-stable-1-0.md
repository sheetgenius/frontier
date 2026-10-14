---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-late-on-october-13-build-1-0-56-appeared-and-winget-added-stable-1-0
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.56.external.md?generation=1791924973862411
    precision: official_docs
  - url: https://storage.googleapis.com/storage/v1/b/grok-build-public-artifacts/o/cli%2Fgrok-1.0.56-linux-x86_64?generation=1791925057041067
    precision: official_docs
  - url: https://registry.npmjs.org/@xai-official%2Fgrok
    precision: official_docs
  - url: https://github.com/microsoft/winget-pkgs/commit/b057f0992015764a607c7e6f9c07eaa1de8a98d0
    precision: commit
  - url: https://github.com/microsoft/winget-pkgs/blob/b057f0992015764a607c7e6f9c07eaa1de8a98d0/manifests/x/xAI/GrokBuild/1.0.52/xAI.GrokBuild.installer.yaml
    precision: tagged_commit_file
---
# 2026-10-13-grok-build-late-on-october-13-build-1-0-56-appeared-and-winget-added-stable-1-0

Late on October 13, build 1.0.56 appeared and WinGet added stable 1.0.52. The full-day inventory is 16 builds, 1.0.41 through 1.0.56. WinGet no longer stops at 1.0.50 in the repository. Neither a generic minor-fixes note nor non-stable availability establishes a security fix or alpha-pointer value.

Channel: tagged-release (WinGet stable 1.0.52 manifest); preview-or-beta (available non-stable 1.0.56, pointer promotion unobserved). Half: capability. Date: 2026-10-13.

Operator consequence: Windows users can check for the merged xAI.GrokBuild 1.0.52 package and verify the version their client offers; repository merge is not proof of propagation to every client index. Keep stable 1.0.52 as the recommendation. Do not bring October 14 builds 1.0.57/1.0.58 into this dated posture.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.56.external.md?generation=1791924973862411
- https://storage.googleapis.com/storage/v1/b/grok-build-public-artifacts/o/cli%2Fgrok-1.0.56-linux-x86_64?generation=1791925057041067
- https://registry.npmjs.org/@xai-official%2Fgrok
- https://github.com/microsoft/winget-pkgs/commit/b057f0992015764a607c7e6f9c07eaa1de8a98d0
- https://github.com/microsoft/winget-pkgs/blob/b057f0992015764a607c7e6f9c07eaa1de8a98d0/manifests/x/xAI/GrokBuild/1.0.52/xAI.GrokBuild.installer.yaml
