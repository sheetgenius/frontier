---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-binary-distribution-moved-to-stencil-in-18-9-0-while-installer-integrity-improved
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/4585b144ff86b9d3dd6d9d17263cbd541a4ba8aa
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/scripts/install.sh#L15-L21
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/cli/build-service.ts#L1-L27
    precision: tagged_commit_file
  - url: https://github.com/can1357/homebrew-tap/blob/22d4f9b973c504af44c1c54907dcc8c5c6729caf/Formula/omp.rb
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/releases/download/v18.10.4/SHA256SUMS.txt
    precision: official_docs
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.9.0
    precision: github_release
---
# 2026-10-13-omp-binary-distribution-moved-to-stencil-in-18-9-0-while-installer-integrity-improved

Binary distribution moved to Stencil in 18.9.0, while installer integrity improved. Homebrew, the installer binary path and binary self-update now use build.stencil.so; npm and Bun still use the registry. The script verifies SHA-256 before replacement, unlike through v18.8.9, and self-update supports binary deltas. Hashes returned by the same service detect corruption but do not independently authenticate a compromised service. GitHub releases still carry binaries and checksums. Compiled-binary startup checks send the installed version to the service, whose client documentation says it counts update checks; startup.checkUpdate defaults true.

Channel: tagged-release. Half: both. Date: 2026-10-09 (v18.8.7); 2026-10-11 (v18.9.0).

Operator consequence: Install the 18.10.4 registry package or compare a binary with the matching GitHub checksum. Pin the documented binary installer ref to v18.10.4 or pin Nix to that tag. Set startup.checkUpdate: false if version reporting is unwelcome. Canary answered the stable build during the dated crosscheck, so it is not a separately verified preview.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/4585b144ff86b9d3dd6d9d17263cbd541a4ba8aa
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/scripts/install.sh#L15-L21
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/cli/build-service.ts#L1-L27
- https://github.com/can1357/homebrew-tap/blob/22d4f9b973c504af44c1c54907dcc8c5c6729caf/Formula/omp.rb
- https://github.com/can1357/oh-my-pi/releases/download/v18.10.4/SHA256SUMS.txt
- https://github.com/can1357/oh-my-pi/releases/tag/v18.9.0
