---
schema_version: bitter.frontier_harvest.v0
provider: omp
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/omp.yml
channels_present: [tagged-release]
window_volume: 4 material changes, write-fallback released, tokenizer break, install paths converged
lane: primary sources, coordinator applied researcher file-at-tag + Homebrew/Bun/script probe; fork can1357/oh-my-pi not earendil-works/pi
---

# Harvest -- omp (primary sources)

Punctuation is ASCII. This is Oh My Pi, the fork. Not Pi Coding Agent.

## 1. v17.3.7 gained a GitHub release and an npm publish; v17.3.6 still has neither

- **Date:** 2026-08-18
- **Channel:** `tagged-release` for 17.3.7; v17.3.6 remains tag-without-release
- **Ancestry evidence:** GitHub releases/tags/v17.3.6 -> HTTP 404. v17.3.7 prerelease=false, published_at=2026-08-18T08:47:33Z. Tag v17.3.6 SHA 54e1a8c9 still exists. Tag v17.3.7 currently 85000922 (parent harvest pinned 644ad30; the tag moved when the release was cut). npm 17.3.6 MISSING. 17.3.7 published 2026-08-18T08:51:09Z. Observation npm latest=17.4.2 is 2026-08-21 OUT. Window-close npm tip is 17.4.0 (2026-08-20T06:42:13Z).
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.3.7
- **Half:** neither | **Confidence:** high

**What changed.** Parent asked whether v17.3.6 and v17.3.7 would gain releases. 17.3.7 did, including npm. 17.3.6 did not. Tag-ahead-of-release happened once and was not cleaned up.

**Operator consequence.** Name the install path. `npm i @oh-my-pi/pi-coding-agent@17.3.7` works. There is no npm 17.3.6. Do not report a version from `git tag` without checking the release, the current tag SHA, and the registry.

## 2. registerFileWriteFallback is in the v17.3.7 tag an operator can install

- **Date:** 2026-08-18
- **Channel:** `tagged-release`
- **Ancestry evidence:** Opened the file at the tag: packages/coding-agent/src/extensibility/extensions/types.ts at v17.3.7 defines ExtensionAPI.registerFileWriteFallback and registerFileDeleteFallback. CHANGELOG at the same tag still carries the 17.3.6 Added entry for those hooks; 17.3.7 itself only changes the xAI User-Agent. GitHub v17.3.7 release body repeats the hook.
- **Receipt:** https://github.com/can1357/oh-my-pi/blob/v17.3.7/packages/coding-agent/src/extensibility/extensions/types.ts
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** An extension can service a filesystem write or delete after the native path refused it. That is now on a GitHub-released, npm-published 17.3.7, not only a dangling 17.3.6 tag.

**Operator consequence.** If you run OMP 17.3.7+, inspect installed extensions for registerFileWriteFallback. The OS denial is no longer the last word when an extension is loaded.

## 3. v17.3.8 cut in-window; last tag before the tokenizer break

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release v17.3.8, tag 858f7dd9, published 2026-08-19T11:11:02Z. Homebrew tap commit 0b1fe17f "omp v17.3.8" at 2026-08-19T11:11:44Z.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.3.8
- **Half:** both | **Confidence:** high on the tag; medium on which of the long tail an operator should act on without a named incident

**What changed.** One more 17.3 patch between the write-fallback release and the 17.4 tokenizer break. Compaction after /clear no longer resurrects pre-clear turns (prepareCompaction honors reset_boundary). Compaction summaries mark conversation history untrusted and neutralize embedded boundary tags (#8727). `rm` critical-pattern classification now covers `rm -rf -- /` and `--no-preserve-root`. Docs state a hole that was already behaviour: `bash.patterns` gates the bash tool only; `eval` can spawn a shell via subprocess and, under yolo, that exec resolves to allow. `omp --smoke-test` reclaim is confined to the daemons container.

**Operator consequence.** If you only wanted the write-fallback hook, 17.3.7 is enough. Upgrade to 17.3.8 if you `/clear` then `/compact`, or if you deny destructive commands in `bash.patterns`. Do not treat `bash.patterns` as a shell policy. Pair it with `tools.approval.eval`. 17.3.8 is the last in-window tag before the tokenizer API break.

## 4. v17.4.0 breaks the tokenizer API; window-close default install is this cut

- **Date:** 2026-08-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release v17.4.0, tag 72000acf, published 2026-08-20T06:37:51Z. Body: breaking change replacing global countTokens / countTokensConservatively / setTokenizerModel / estimateTokens with model-scoped Tokenizer instances. npm 17.4.0 2026-08-20T06:42:13Z.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.4.0
- **Half:** both | **Confidence:** high

**What changed.** 17.4.0 is the window-close install tip on npm, Homebrew, Bun, and the GitHub latest binary. Tokenizer API is breaking for anyone calling the old globals. `/handoff` now compacts in place, replacing session context instead of forking. `eval` cells can run async and auto-background like `bash`, which widens the still-open `bash.patterns` hole rather than closing it. Same release also fixes lossy union-schema tool-argument repair.

**Operator consequence.** If you call countTokens as a global, 17.4.0 breaks you. Pin 17.3.7 (or 17.3.8) if you only wanted the write-fallback hook without the tokenizer break. Anything that treated `/handoff` as a branch you could keep alongside the original session now overwrites that session's context.

## 5. Homebrew, Bun, and omp.sh/install now follow released tags; they still cannot see 17.3.6

- **Date:** 2026-08-18 through 2026-08-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** Homebrew can1357/homebrew-tap Formula/omp.rb: 17.3.7 at d4984cf8 2026-08-18T08:48:06Z; 17.3.8 at 0b1fe17f 2026-08-19T11:11:44Z; 17.4.0 at 550474ba 2026-08-20T06:38:29Z. Observation HEAD 17.4.2 is OUT. No 17.3.6 formula commit. Bun `bun install -g @oh-my-pi/pi-coding-agent` follows npm latest (window-close 17.4.0). https://omp.sh/install redirects to scripts/install.sh: bun path -> npm latest; else GitHub releases/latest binary (window-close v17.4.0). Nix flake at a tag builds that ref; unpinned `nix run github:can1357/oh-my-pi` is HEAD.
- **Receipt:** https://github.com/can1357/homebrew-tap/blob/550474bacc606922c59927760e4c5b4252402a9a/Formula/omp.rb
- **Half:** neither | **Confidence:** high on formula/npm/script source; versions not from a local brew/bun/nix run

**What changed.** Parent "only Nix reached 17.3.6/7" is no longer the channel picture. After 17.3.7 published, Homebrew/Bun/script reached 17.3.7 on 2026-08-18 and 17.4.0 on 2026-08-20. They still cannot reach 17.3.6.

**Operator consequence.** Name the path. Window-close defaults: Homebrew 17.4.0, npm/Bun 17.4.0, omp.sh/install 17.4.0. That is the tokenizer-break cut, not the write-fallback cut. Observation 17.4.1/17.4.2 are the next day.

## Researcher lane notes

v17.4.1 and v17.4.2 are 2026-08-21, out of window. Did not run brew/bun/nix locally.

## Surfaces checked

- GitHub releases tags v17.3.6 (404), v17.3.7, v17.3.8, v17.4.0, v17.4.1, v17.4.2
- types.ts at v17.3.7
- npm time and dist-tags
- omp.sh/install -> scripts/install.sh
- can1357/homebrew-tap Formula/omp.rb history
