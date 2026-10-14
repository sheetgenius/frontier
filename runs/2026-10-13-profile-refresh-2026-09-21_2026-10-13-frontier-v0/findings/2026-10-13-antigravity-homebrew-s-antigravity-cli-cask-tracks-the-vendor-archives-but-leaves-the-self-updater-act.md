---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-homebrew-s-antigravity-cli-cask-tracks-the-vendor-archives-but-leaves-the-self-updater-act
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Homebrew/homebrew-cask/blob/1bfd02a192f7ae793522978018d0c1dfdaabe556/Casks/a/antigravity-cli.rb
    precision: tagged_commit_file
  - url: https://github.com/Homebrew/homebrew-cask/commit/1bfd02a192f7ae793522978018d0c1dfdaabe556
    precision: commit
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.3.4
    precision: github_release
  - url: https://web.archive.org/web/20260918134151/https://antigravity.google/docs/cli/troubleshooting
    precision: official_docs
---
# 2026-10-13-antigravity-homebrew-s-antigravity-cli-cask-tracks-the-vendor-archives-but-leaves-the-self-updater-act

Homebrew's antigravity-cli cask tracks the vendor archives but leaves the self-updater active. A live Homebrew install channel was missing from the original inventory. The community cask at the pinned commit installs vendor-hosted archives as `agy`, with four SHA-256 values matching GitHub's assets, and declares that the application updates itself. The verifier found this cask has tracked every in-window cut within hours. It is a packaging route to Google's binary, not a separately built harness or an independent update policy.

Channel: third-party-registry; community-maintained Homebrew cask tracking tagged releases. Half: both. Date: 2026-10-13T07:01:43Z (1.3.4 cask bump; channel predates window).

Operator consequence: `brew install --cask antigravity-cli` is an available route to 1.3.4 as of 13 October, but a brew installation still needs `AGY_CLI_DISABLE_AUTO_UPDATE=true` if its audited version must persist. Record both the cask version and the running `agy` version; do not infer the latter from a package-manager pin. The cask's hashes also corroborate the mac_x64 and linux_arm64 archive identity used in section 8.

## Receipt
- https://github.com/Homebrew/homebrew-cask/blob/1bfd02a192f7ae793522978018d0c1dfdaabe556/Casks/a/antigravity-cli.rb
- https://github.com/Homebrew/homebrew-cask/commit/1bfd02a192f7ae793522978018d0c1dfdaabe556
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.3.4
- https://web.archive.org/web/20260918134151/https://antigravity.google/docs/cli/troubleshooting
