---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omp-the-four-install-paths-agree-on-18-2-8-at-window-close-nix-unpinned-builds-9-commits-past
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/homebrew-tap/blob/d87d8fd178dee56003281181ac25aa4312bdcfa9/Formula/omp.rb
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.2.8/scripts/install.sh
    precision: tagged_commit_file
---
# 2026-09-21-omp-the-four-install-paths-agree-on-18-2-8-at-window-close-nix-unpinned-builds-9-commits-past

The four install paths agree on 18.2.8 at window close; Nix unpinned builds 9 commits past it under the same version string. At window close all four paths name 18.2.8. The only divergences are the ten minutes between release and npm publish, the 18.1.7 gap, and Nix-from-main reporting a released version for unreleased code.

Channel: tagged-release. Half: neither. Date: 2026-09-21.

Operator consequence: Pin Nix to `github:can1357/oh-my-pi/v18.2.8`, not the bare flake. If you use the script without Bun, its binary path has no integrity check; prefer Homebrew (sha256-pinned) or npm.

## Receipt
- https://github.com/can1357/homebrew-tap/blob/d87d8fd178dee56003281181ac25aa4312bdcfa9/Formula/omp.rb
- https://github.com/can1357/oh-my-pi/blob/v18.2.8/scripts/install.sh
