---
schema_version: bitter.frontier_harvest.v0
provider: codex
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/codex.yml
channels_present: [tagged-release, preview-or-beta]
window_volume: 3 material changes, 2 capability-bearing, 1 channel
lane: primary sources, coordinator; researcher deepening Guardian defaults
---

# Harvest -- codex (primary sources)

Punctuation is ASCII. Pin tags, not main.

## 1. 0.148.0 cut stable on 2026-08-18 after the alpha drought

- **Date:** 2026-08-18
- **Channel:** `tagged-release`
- **Ancestry evidence:** `gh api repos/openai/codex/releases/tags/rust-v0.148.0` -> prerelease=false, published_at=2026-08-18T22:26:03Z, name=0.148.0. `gh api .../compare/rust-v0.147.0...rust-v0.148.0` -> ahead_by=381, behind_by=1, status=diverged. Alpha tags rust-v0.148.0-alpha.1 through alpha.23 exist. First-page GitHub releases include alpha.6 through alpha.23 plus the stable; parent already showed some early alphas lacked GitHub release objects. Do not count suffixes as a release count.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.148.0
- **Half:** capability | **Confidence:** high

**What changed.** The default install path moved. Parent window froze npm latest at 0.147.0 for ten days. 0.148.0 is a non-prerelease tag with a New Features list (TUI /export, exec fork, Bedrock Runtime, async hooks including MCP tools) and a changelog that lists Guardian V2 PRs (#38336, #38569, and the rest of the parent alpha wave). The marketed New Features section does not name Guardian V2.

**Operator consequence.** `npm i -g @openai/codex` no longer lands 0.147.0 after this tag. Treat 0.148.0 as a large upgrade (381 commits vs 0.147.0), not a point release. Config lockfile support is gone (`#38011`). `#38635` deletes three in-repo skills; repo-scoped skill loading still resolves `.codex/skills` and `.agents/skills` at 0.148.0. rust-v0.148.0 is 139 commits behind rust-v0.148.0-alpha.23, so some alpha.21 contents missed this cut. Between 0.147.0 and 0.148.0 there were 21 published 0.148.0-alpha GitHub releases (19 through alpha.21 plus alpha.22 and alpha.23); alpha.3 and alpha.10 are tags without releases.

## 2. 0.149.0 cut stable two days later; npm latest is 0.149.0

- **Date:** 2026-08-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** rust-v0.149.0 prerelease=false, published_at=2026-08-20T21:04:55Z. `gh api .../compare/rust-v0.148.0...rust-v0.149.0` -> ahead_by=242, behind_by=1. npm dist-tags latest=0.149.0, alpha=0.150.0-alpha.5 (0.150 alphas from 08-20 night and 08-21 are mostly OUT; rust-v0.150.0-alpha.1 published 2026-08-20T22:06:34Z is in-window preview).
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.149.0
- **Half:** capability | **Confidence:** high

**What changed.** New Features: interactive `codex agents` dashboard, `/cd` `/pwd` `/cwd`, `codex queue`, Vim motions, doctor diagnostics. Bug fix: resumed and forked threads restore their active permission profile instead of silently falling back to current defaults (#39153). Docs: DNS exfiltration risks for secure devcontainers (#39283).

**Operator consequence.** Default install is 0.149.0. If you jumped from 0.147.0, you skipped two stables in 48 hours. The permission-profile restore on resume is the defect half. If you enable Guardian V2, prefer 0.149.0: scoring errors fail open in 0.148.0 and fail closed in 0.149.0 (`#39307`). Search fleet configs for `untrusted` before 0.149.0; that policy is removed (`#39630`).

## 3. Official posture: the app owns approvals; the harness owns the loop

- **Date:** 2026-08-20
- **Channel:** `docs-only`
- **Ancestry evidence:** OpenAI Developers post https://x.com/OpenAIDevs/status/2090230646497251387 pointing at https://developers.openai.com/blog/codex-as-a-platform. Discovery only until capture. Complements the 0.148/0.149 tags rather than replacing them.
- **Receipt:** https://developers.openai.com/blog/codex-as-a-platform
- **Half:** capability | **Confidence:** medium pending capture of the post and a read of the blog at a pin

**What changed.** The vendor's public claim is that embedding teams keep interface, context, tools, and approvals while Codex runs the loop.

**Operator consequence.** If you embed the SDK, the approval seat is yours to implement. That is the opposite of Guardian V2 as an invisible in-harness reviewer, which is why both claims need the same week in the record.

## Researcher lane notes

Guardian V2 on-by-default, inspectability, and analytics visibility are not settled by the release body. Operator @acsmif claims guardian-v2 is invisible in usage analytics; that is social until a primary surface says so.

0.150.0-alpha.5 is 08-21 OUT as a default-install fact. Alpha dist-tag movement after 08-20 22:06 is mixed; do not put 0.150 in the operator brief as a stable.

Config lockfile deletion shipped in 0.148.0. Repo-local skill loading did not. Untrusted policy retired in 0.149.0. Guardian V2 scoring fail-open in 0.148.0, fail-closed in 0.149.0. Confirmed against tag files and PR lists.

## Surfaces checked

- gh api releases/tags rust-v0.148.0 and rust-v0.149.0
- gh compare 0.147.0...0.148.0 (381) and 0.148.0...0.149.0 (242)
- matching-refs tags/rust-v0.148.0 (alpha.1-23 plus stable)
- npm dist-tags
- official changelog URL still 308 from developers.openai.com/codex/changelog (parent)
