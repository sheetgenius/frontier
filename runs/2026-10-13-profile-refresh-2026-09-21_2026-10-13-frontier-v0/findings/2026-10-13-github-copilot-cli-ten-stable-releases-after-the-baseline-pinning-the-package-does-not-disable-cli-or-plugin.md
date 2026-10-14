---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-ten-stable-releases-after-the-baseline-pinning-the-package-does-not-disable-cli-or-plugin
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.97
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.98-0
    precision: github_release
  - url: https://registry.npmjs.org/@github/copilot/1.0.97
    precision: official_docs
  - url: https://registry.npmjs.org/@github/copilot/1.0.97-unstable.r38449241139.g37ffbf5
    precision: official_docs
  - url: https://github.com/github/copilot-cli/tree/v1.0.97
    precision: official_docs
  - url: https://github.com/github/copilot-cli/blob/v1.0.97/LICENSE.md
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/install.sh#L91-L118
    precision: tagged_commit_file
  - url: https://github.com/Homebrew/homebrew-cask/blob/d75c8d2ec6d755a794e396d7fece52cd104416e0/Casks/c/copilot-cli.rb
    precision: tagged_commit_file
  - url: https://github.com/Homebrew/homebrew-cask/blob/22b585f5f0c3f75a0f266fb5ba2dfd4be7951d51/Casks/c/copilot-cli@prerelease.rb
    precision: tagged_commit_file
  - url: https://github.com/microsoft/winget-pkgs/blob/97347a244127a78a30f57182c83503b6c9a1077e/manifests/g/GitHub/Copilot/v1.0.97/GitHub.Copilot.yaml
    precision: tagged_commit_file
  - url: https://github.com/microsoft/winget-pkgs/tree/97347a244127a78a30f57182c83503b6c9a1077e/manifests/g/GitHub/Copilot/Prerelease
    precision: official_docs
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L452-L453
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-plugin-reference.md?plain=1#L92-L97
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L46
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L144
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-ten-stable-releases-after-the-baseline-pinning-the-package-does-not-disable-cli-or-plugin

Ten stable releases after the baseline; pinning the package does not disable CLI or plugin self-update. Stable 1.0.97 closes this window; ten stables and 49 prereleases followed the baseline, with no npm-only stable and one extra npm unstable publication. Install the loader with npm install -g @github/copilot@1.0.97; Homebrew stable and WinGet stable also published 1.0.97 before cutoff. Homebrew's prerelease cask stopped at 1.0.97-3 and WinGet's at 1.0.78-3, while GitHub/npm had published 1.0.98-0. CLI autoUpdate defaults to true and its channel to stable. Built-in awesome-copilot marketplace plugins update at session start only in trusted folders and outside the CI skip; other marketplaces require opt-in, and SDK/server sessions do not use that session-start updater. A 2026-10-07 docs edit removes copilot-plugins from the built-in defaults while migrating existing installs with autoUpdate true. The proprietary CLI implementation remains outside the public repository; that tree holds notes, license, README and installer. SHA256SUMS.txt exists on the inspected stable releases, correcting the old profile. The installer aborts on a checked mismatch, silently skips checking if checksum download fails, and warns then skips if neither hash utility exists. The docs describe fleet but give no introduction version and exclude ACP server mode.

Channel: tagged-release (stable 1.0.97); preview-or-beta (newest published preview 1.0.98-0); docs-only (update defaults and marketplace rules). Half: both. Date: 2026-09-22 to 2026-10-13.

Operator consequence: Pin 1.0.97 and set COPILOT_AUTO_UPDATE=false in CI or fleet images, then inspect copilot --version. Pinning npm alone does not pin the running agent. That setting also suppresses documented session-start marketplace updates; it does not establish a checkout-verification repair. Review marketplace migration and the separate opt-ins. Do not treat package publish times as a historical dist-tag archive or assume package-manager previews agree. The 1.0.89 and 1.0.92 Homebrew updates arrived more than two hours after release; 1.0.93 npm lag was 182.114 seconds. The public main-versus-tag gap is a changelog gap, not readable unreleased agent code.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.97
- https://github.com/github/copilot-cli/releases/tag/v1.0.98-0
- https://registry.npmjs.org/@github/copilot/1.0.97
- https://registry.npmjs.org/@github/copilot/1.0.97-unstable.r38449241139.g37ffbf5
- https://github.com/github/copilot-cli/tree/v1.0.97
- https://github.com/github/copilot-cli/blob/v1.0.97/LICENSE.md
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/install.sh#L91-L118
- https://github.com/Homebrew/homebrew-cask/blob/d75c8d2ec6d755a794e396d7fece52cd104416e0/Casks/c/copilot-cli.rb
- https://github.com/Homebrew/homebrew-cask/blob/22b585f5f0c3f75a0f266fb5ba2dfd4be7951d51/Casks/c/copilot-cli@prerelease.rb
- https://github.com/microsoft/winget-pkgs/blob/97347a244127a78a30f57182c83503b6c9a1077e/manifests/g/GitHub/Copilot/v1.0.97/GitHub.Copilot.yaml
- https://github.com/microsoft/winget-pkgs/tree/97347a244127a78a30f57182c83503b6c9a1077e/manifests/g/GitHub/Copilot/Prerelease
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L452-L453
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-plugin-reference.md?plain=1#L92-L97
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L46
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L144
