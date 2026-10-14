---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-the-close-is-18-10-4-44-releases-two-tag-only-versions-and-one-package-without-a-tag
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4
    precision: github_release
  - url: https://www.npmjs.com/package/@oh-my-pi/pi-coding-agent/v/18.10.4
    precision: package_registry
  - url: https://www.npmjs.com/package/@oh-my-pi/pi-coding-agent/v/18.2.9
    precision: package_registry
  - url: https://github.com/can1357/homebrew-tap/blob/a0f144b0d1cd75fa9429281279aa665d73a15498/Formula/omp.rb
    precision: tagged_commit_file
  - url: https://github.com/can1357/homebrew-tap/blob/22d4f9b973c504af44c1c54907dcc8c5c6729caf/Formula/omp.rb
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/tree/v18.4.7
    precision: official_docs
  - url: https://github.com/can1357/oh-my-pi/tree/v18.6.2
    precision: official_docs
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/nix/package.nix#L114-L117
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/compare/v18.10.4...b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c
    precision: git_compare
---
# 2026-10-13-omp-the-close-is-18-10-4-44-releases-two-tag-only-versions-and-one-package-without-a-tag

The close is 18.10.4: 44 releases, two tag-only versions, and one package without a tag. At the complete 13 October close, stable is v18.10.4, published 19:38:04Z; npm followed at 19:54:08.077Z with latest as its sole dist-tag. Homebrew and the binary service also resolve 18.10.4. The window has 44 non-prerelease GitHub releases after v18.2.8. 18.2.9 reached npm and Homebrew without a current tag or release; v18.4.7 and v18.6.2 have tags but no release/npm version. Current 18.2.9 binary URLs return 404, which cannot prove the historical formula was broken for the entire interval. A bare Nix flake follows main while using package.json for its version label. The reconstructed in-window main pin is b91db66e, 13 commits beyond stable. No separately published beta, preview or nightly was found in the dated channel checks; canary returned the stable build.

Channel: tagged-release. Half: defect. Date: 2026-09-22 through 2026-10-13.

Operator consequence: Install bun install -g @oh-my-pi/pi-coding-agent@18.10.4 or use the dated Homebrew formula; pin Nix to github:can1357/oh-my-pi/v18.10.4. Report the package scope and installed version rather than inferring availability from a tag. Read both Removed and Breaking Changes across skipped releases. Do not include 14 October main changes in this posture.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4
- https://www.npmjs.com/package/@oh-my-pi/pi-coding-agent/v/18.10.4
- https://www.npmjs.com/package/@oh-my-pi/pi-coding-agent/v/18.2.9
- https://github.com/can1357/homebrew-tap/blob/a0f144b0d1cd75fa9429281279aa665d73a15498/Formula/omp.rb
- https://github.com/can1357/homebrew-tap/blob/22d4f9b973c504af44c1c54907dcc8c5c6729caf/Formula/omp.rb
- https://github.com/can1357/oh-my-pi/tree/v18.4.7
- https://github.com/can1357/oh-my-pi/tree/v18.6.2
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/nix/package.nix#L114-L117
- https://github.com/can1357/oh-my-pi/compare/v18.10.4...b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c
