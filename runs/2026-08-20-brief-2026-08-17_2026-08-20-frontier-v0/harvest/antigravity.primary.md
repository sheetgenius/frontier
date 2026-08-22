---
schema_version: bitter.frontier_harvest.v0
provider: antigravity
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/antigravity.yml
channels_present: [tagged-release]
window_volume: 4 tagged cuts, 3 defect-bearing, 2 capability-bearing
lane: primary sources, coordinator from release bodies; researcher may check tag/changelog collision
---

# Harvest -- antigravity (primary sources)

Punctuation is ASCII. Repo google-antigravity/antigravity-cli. Parent ended at 1.1.13.

## 1. 1.1.14: outside-workspace writes no longer come with the read grant; malformed MCP no longer takes down every server

- **Date:** 2026-08-18
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release 1.1.14 published 2026-08-18T04:10:43Z, prerelease=false. Body: workspace-outside access now grants only read; writes auto-approved according to cycle mode. One malformed MCP config entry is logged and skipped instead of bringing down every other server. Artifact list no longer marks every earlier artifact approved when reopened. inheritCustomizations switch for markdown agents. LSP failure now prints and exits non-zero instead of silent success.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.14
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** The setting that lets the agent out of the workspace is now a read grant. Writes follow the cycle mode, not a bundled write approval. MCP isolation: one bad server no longer disables the rest.

**Operator consequence.** Upgrade to 1.1.14 if you use outside-workspace access or MCP. Re-read that setting: it is not "full access outside the repo" anymore.

## 2. 1.1.15: print-mode stream-json driver; keyring restore was dropping billing project and license tier

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1.1.15 published 2026-08-19T04:11:33Z. Adds `--input-format stream-json`. Fixes billing project and license tier lost when restoring credentials from the keyring; personal accounts hitting resource-exhausted at startup on keyring restore; LD_PRELOAD abort on Cloud TPU VMs; non-ASCII stream corruption.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.15
- **Half:** both | **Confidence:** high

**What changed.** A driver can keep a print-mode session open with newline-delimited JSON. Auth restore bugs that dropped enterprise billing/license are closed.

**Operator consequence.** Upgrade if you sign in via keyring on 1.1.14 or earlier. Try stream-json if you orchestrate headless turns.

## 3. 1.1.16: settings.json parse failure no longer overwrites the file with defaults; MCP toggle no longer drops unknown fields

- **Date:** 2026-08-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1.1.16 published 2026-08-20T04:14:18Z. Body: a refused save now leaves settings.json byte-identical so you can repair it; previously a parse failure caused the CLI to overwrite with defaults and silently revert every setting. `/mcp` panel preserve-unknown-fields. MCP `read_resource` no longer discards non-image binary. WIF sign-in was signing out hourly. mcp add/remove/list/enable/disable subcommands.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/releases/tag/1.1.16
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** A corrupted settings.json used to become a silent policy reset. That is the class of failure that makes managed sandbox and MCP config a suggestion.

**Operator consequence.** Upgrade to 1.1.16 before the next settings edit. If you are on 1.1.15 or older and the CLI has been crashing on settings, inspect the file before letting it save.

## 4. 1.1.17: GitHub release exists; git tag and CHANGELOG are the 1.1.16 tree

- **Date:** 2026-08-20
- **Channel:** `tagged-release` as a GitHub Release object and binary. Git ancestry is identical to 1.1.16.
- **Ancestry evidence:** 1.1.17 published 2026-08-20T22:13:58Z, tag object SHA efa16f09 (same commit as 1.1.16). compare 1.1.16...1.1.17: status=identical, ahead_by=0, files=[]. CHANGELOG.md at refs/tags/1.1.17 tops at ## 1.1.16; no ## 1.1.17 section. GitHub body ("single execution path") is not in git. 1.1.14-1.1.16 GitHub bodies match CHANGELOG at those tags.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/compare/1.1.16...1.1.17
- **Half:** neither as a git-backed claim | **Confidence:** high that git/CHANGELOG do not carry 1.1.17

**What changed.** A GitHub Release and assets exist for 1.1.17. The git tag is a rename of 1.1.16. Parent-style collision, one cut later.

**Operator consequence.** Do not treat 1.1.17 as a documented harness change. Stay on 1.1.16 if you need the last git-backed changelog. Regression-test the 1.1.17 binary if you install it.

## Researcher lane notes

Parent 1.1.13 collision recurred at 1.1.17. Official @antigravity post 2026-08-20 announces IDE extensions; that is a docs/product surface, not this CLI tag.

## Surfaces checked

- GitHub releases 1.1.14, 1.1.15, 1.1.16, 1.1.17
- git refs/tags/1.1.16 and 1.1.17
- compare 1.1.16...1.1.17
- CHANGELOG.md at tag 1.1.17
