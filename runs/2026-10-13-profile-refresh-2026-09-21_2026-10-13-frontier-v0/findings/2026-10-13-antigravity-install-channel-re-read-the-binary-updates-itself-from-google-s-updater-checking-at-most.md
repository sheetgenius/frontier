---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-install-channel-re-read-the-binary-updates-itself-from-google-s-updater-checking-at-most
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20260918134151/https://antigravity.google/docs/cli/troubleshooting
    precision: official_docs
  - url: https://antigravity.google/cli/install.sh
    precision: official_docs
  - url: https://antigravity.google/cli/install.ps1
    precision: official_docs
  - url: https://antigravity.google/docs/cli/install.md
    precision: official_docs
  - url: https://web.archive.org/web/20261007031302/https://antigravity.google/docs/cli/install
    precision: official_docs
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.1.6/CHANGELOG.md?plain=1#L21
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/releases/tag/1.3.4
    precision: github_release
  - url: https://antigravity.google/docs/changelog
    precision: official_docs
---
# 2026-10-13-antigravity-install-channel-re-read-the-binary-updates-itself-from-google-s-updater-checking-at-most

Install-channel re-read: the binary updates itself from Google's updater, checking at most every 15 minutes, unless AGY_CLI_DISABLE_AUTO_UPDATE is set. Nothing about the updater changed in the window; the profile's channel advice did not account for it. A default `agy` checks Google's updater (`antigravity-cli-auto-updater-974169037036.us-central1.run.app`, the host the installer also reads) at most every 15 minutes and replaces itself in the background, and `agy update` updates on demand according to the install page. That instruction is a docs-only addition between the 2026-10-07 install-page capture and the 2026-10-13 retrieval, not a newly released updater. The only documented off switch is `AGY_CLI_DISABLE_AUTO_UPDATE=true`. The installer checks SHA-512 against a manifest served by that same updater, which catches corruption, not a compromised server, and it strips the macOS quarantine attribute; `install.ps1` similarly calls `Unblock-File` on Windows. For the Linux and macOS archives the updater's bytes equal GitHub's (linux_x64 and mac_arm64 checked directly, mac_x64 and linux_arm64 by Homebrew's sha256), so a GitHub digest pins what the installer delivers; on Windows the installer fetches a raw .exe that no GitHub digest covers. The Homebrew cask declares `auto_updates true`, so installing through it also leaves the self-updater active (section 14). The verifier checked all 65 release objects: no prereleases; main equaled the 1.3.4 tag at 9eebbedf051ffd75adb15e468f48b7b75be4b15b, with no public main-only work. Two vendor surfaces disagree about "latest": GitHub and the updater said 1.3.4 on 13 October, while the docs changelog still marked 1.3.1 and says rollouts take days. In the window the asset set grew to eight with unannounced musl Linux builds from 1.2.12, and the Termux build announced in 1.2.15 exists only on the updater.

Channel: tagged-release (the updater ships in every in-window binary; assets); opt-out and rollout text docs-only. Half: both. Date: 2026-10-13 (re-read); the updater predates the window (named in 1.1.6; opt-out documented by 2026-09-18). In-window channel facts: 2026-09-27 (musl assets, 1.2.12), 2026-10-02 (Android build, 1.2.15).

Operator consequence: "Pin the release asset by sha256" holds only after `AGY_CLI_DISABLE_AUTO_UPDATE=true` is set for every interactive and CI user; otherwise the binary you audited is replaced on a later run, and with fifteen cuts in 22 days that includes default flips (sections 4 and 9). For fleets: install from the GitHub asset, check its digest, set the variable, and upgrade on purpose. Do not read the docs changelog's "Latest" label as what your machines run.

## Receipt
- https://web.archive.org/web/20260918134151/https://antigravity.google/docs/cli/troubleshooting
- https://antigravity.google/cli/install.sh
- https://antigravity.google/cli/install.ps1
- https://antigravity.google/docs/cli/install.md
- https://web.archive.org/web/20261007031302/https://antigravity.google/docs/cli/install
- https://github.com/google-antigravity/antigravity-cli/blob/1.1.6/CHANGELOG.md?plain=1#L21
- https://github.com/google-antigravity/antigravity-cli/releases/tag/1.3.4
- https://antigravity.google/docs/changelog
