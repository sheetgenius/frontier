---
schema_version: bitter.frontier_harvest.v0
provider: omp
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/omp.yml
channels_present: [tagged-release]
window_volume: 45 GitHub releases after v17.4.0 (v17.4.1 through v18.2.8, none prerelease), 3 tags without a release, 1 release without npm, 7 material changes, 0 published advisories
lane: primary sources, Lane A researcher; fork can1357/oh-my-pi, not earendil-works/pi
---

# Harvest -- omp (primary sources)

Punctuation is ASCII. This is Oh My Pi, the fork. Not Pi Coding Agent. Nothing
here is a fact about upstream Pi unless a Pi file is cited. Identity check:
`gh api repos/can1357/oh-my-pi` -> full_name can1357/oh-my-pi, homepage
https://omp.sh, fork=false (GitHub does not record it as a fork; the README
at every in-window tag still says "Fork of Pi by @mariozechner" and links
badlogic/pi-mono).

Window-close pin: main 4addbb1ec83e92a213bc823d1e2db81ceb5f679a
(2026-09-21T23:57:53Z); compare v18.2.8...4addbb1e -> ahead_by=9, behind_by=0;
packages/coding-agent/package.json at that pin says 18.2.8.

## 1. v18.2.1 closes a cluster of approval bypasses, including one where a missing context resolved to `yolo`

- **Date:** 2026-09-15 (merged and released)
- **Channel:** `tagged-release`
- **Ancestry evidence:** v18.2.1 published 2026-09-15T23:32:15Z, prerelease=false; compare v18.2.0...v18.2.1 ahead_by=1294 (the largest single step in the window). PR #11400 "fail closed when execute-time approval context is missing" merge SHA 75512322 (2026-09-15T11:18:20Z): compare 75512322...v18.2.0 -> behind_by=934 (not in 18.2.0); 75512322...v18.2.1 -> ahead_by=360, behind_by=0. PR #11044 "do not inject hub tool into read-only subagents" merge SHA 812f738d: not in v18.2.0 (behind_by=428), in v18.2.1 (ahead_by=866, behind_by=0). The advisor and Cursor-bridge items are stated in the v18.2.1 release body; I did not isolate their commits. `gh api repos/can1357/oh-my-pi/security-advisories` returns an empty list: no GHSA for any of these.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v18.2.1 and https://github.com/can1357/oh-my-pi/pull/11400
- **Half:** defect | security | **Confidence:** high on channel; medium on each bypass's reach, taken from release notes, not reproduced

**What changed.** Through v18.2.0, per the v18.2.1 notes: (a) a tool executed without an execute-time context resolved as `yolo` with empty policies instead of prompting; four call paths (`ExtensionToolWrapper.execute`, Cursor `refuseByWritePolicy`, `mcpApprovalPreflight`, eval prelude host calls) had their own copies and now share one helper that fails closed to `always-ask`; (b) advisor tools were built outside the loop that wraps every registry tool, so an advisor granted `write` or `bash` ran them regardless of configured approval; (c) Cursor bridge frames bypassed approval: `pi_grep` with `context`/`limit` skipped `tools.approval.grep`, and the native `delete` frame removed files with no approval wrapper; (d) read-only subagents could be given the process-executing `hub` tool (#11044).

**Operator consequence.** If you run OMP with any `tools.approval.*` policy, or use advisors or the Cursor provider, upgrade to 18.2.1 or later and assume policies were partly advisory on earlier 18.x. Re-audit sessions that used advisors with write/bash, or Cursor with a delete deny. This is the release to pin at minimum, not 18.2.0.

## 2. Collab (relay sessions): a view-only link could steer the session after a host reconnect; fixed in 18.2.1. Auto-hosting arrived in 18.1.20

- **Date:** 2026-09-09 (fix commit), 2026-09-15 (released); 2026-09-13 (autoStart)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Commit 156093b9 "fix(collab): reset peer identity and tombstone ordering on rejoin" (authored 2026-09-09): compare 156093b9...v18.2.0 -> diverged, behind_by=3 (not in 18.2.0); 156093b9...v18.2.1 -> ahead_by=2070, behind_by=0. Its message: on host reconnect the relay reissues guest ids from 1; the host's peer map is the permission registry and was not cleared, so a client holding only the view link could take an id a writable guest had held, and a `prompt`, `abort`, `agent-cmd` or `ui-response` "ran with no authentication at all." `collab.autoStart` (`off` | `view` | `control`) added in v18.1.20 (#11908); docs/collab.md differs from v18.1.0 (blob 8e001e34, unchanged since before v17.4.2) only in the autoStart text. docs/collab.md at v18.2.8: default relay `wss://my.omp.sh`; payloads AES-256-GCM sealed, key and 16-byte write token in the URL fragment; "Possession of the link is the trust boundary"; "The production relay is not currently distributed for self-hosting: its Go source and standalone binaries are not published"; relay "keeps no state beyond live connections"; `/share` blobs go to `https://my.omp.sh/s`.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/156093b9a1de550a553625f16517d180a330be4b and https://github.com/can1357/oh-my-pi/blob/v18.2.8/docs/collab.md
- **Half:** both | security | **Confidence:** high on the fix and docs; the relay's no-retention claim is a doc statement about a closed service

**What changed.** Answers the contract's relay question from the docs: the relay is maintainer-operated at my.omp.sh, not self-hostable in production, content-blind by design, and the link is the credential. The defect meant a view link was not reliably read-only before 18.2.1. The capability: with `collab.autoStart` every interactive session can host itself at start, and `omp collab list` / `omp collab link` hand out URLs from a local Unix-socket registry, so a phone or dashboard reaches any running session.

**Operator consequence.** Treat every view link issued on OMP before 18.2.1 as a control link and stop those rooms. Leave `collab.autoStart` at `off` unless you want every session reachable by link; `control` makes each session steerable by anyone holding its URL. Guests can prompt the host's agent, which runs the host's tools under the host's approval mode.

## 3. A repository under review can write OMP's policy: project-local config and extensions load unconditionally, and `isProjectTrusted()` always returns `true`

- **Date:** 2026-08-21 (shim added, v17.4.1); 2026-09-09 (fixed to load, v18.1.16); docs read at v18.2.8
- **Channel:** `tagged-release`
- **Ancestry evidence:** packages/coding-agent/src/extensibility/extensions/types.ts at v18.2.8 lines 461-468 and 508-520: "OMP performs no project-trust gating -- project-level settings and extensions load unconditionally -- so this always returns `true`"; `.omp/extensions`, `.omp/config.yml` "are already discovered and loaded unconditionally." Test packages/coding-agent/test/issue-7955-extension-project-trusted.test.ts asserts `toBe(true)`. v17.4.1 notes add the shim "for extensions targeting upstream per-directory trust gates"; v18.1.16 fixes legacy Pi extensions failing to load when calling it (#7955). docs/approval-mode.md at v18.2.8 line 22: `yolo` is the default mode; line 154: runtime flags override `--config` overlays, "which override project config, which overrides global config." docs/extension-loading.md at v18.2.8 line 231: a Bun `onLoad` hook rewrites `@mariozechner/*` and `@earendil-works/*` imports onto OMP's host-bundled copies. Upstream contrast, Pi file not OMP: earendil-works/pi at v0.87.0 has packages/coding-agent/src/core/project-trust.ts and trust-manager.ts.
- **Receipt:** https://github.com/can1357/oh-my-pi/blob/v18.2.8/packages/coding-agent/src/extensibility/extensions/types.ts#L508-L520
- **Half:** defect | security | **Confidence:** high on the source text; the takeover path (repo config setting approval policy) is a reading of documented precedence, not a probe

**What changed.** This answers the contract's stored-state question for config and extensions: yes, the workspace writes it. A cloned repo's `.omp/config.yml` sits above the user's global config in precedence, and its `.omp/extensions` load without a prompt. Those extensions can register `registerFileWriteFallback` (still present at v18.2.8 types.ts line 1298) and, from v18.2.1, `tool_call` handlers can rewrite a tool's arguments rather than only block them. A Pi extension written to consult Pi's trust gate, imported as `@earendil-works/pi-coding-agent`, runs against OMP's shim and is told the project is trusted. That answers operator question 1: the scope confusion is deliberate at the extension layer, where OMP answers for the upstream package name.

**Operator consequence.** Do not open an untrusted repository in OMP. Before running `omp` in any clone, inspect `.omp/config.yml`, `.omp/extensions`, `.omp/settings.json`, and `package.json` `omp.extensions` / `pi.extensions`. Do not reuse a Pi extension's trust check as a guard under OMP; it always passes. This is a fact about OMP only. Pi has had a per-directory trust prompt since the 2026-06-08 advisory GHSA-mqxh-6gq7-558m.

## 4. `eval` became the orchestration surface; `bash.patterns` still does not gate it

- **Date:** 2026-08-21 (v17.4.1), 2026-09-03 (v18.1.7), 2026-09-04 (v18.1.9); doc re-read at v18.2.8
- **Channel:** `tagged-release`
- **Ancestry evidence:** v17.4.1 notes: "Eval-bridge nested `tool.<name>()` calls now enforce ACP permission gates and tool allowlists identically to direct tool calls." v18.1.7 Breaking: Ruby and Julia eval backends removed; `parallel()`/`pipeline()` removed; async agent/completion handles, eval workpools, Python/JS-defined eval tools exposed to subagents. v18.1.9 Breaking: "Browser and computer automation now use JavaScript/Python evaluation preludes ... replacing the previous standalone tool schemas." v18.2.4/v18.2.7: `judge()` and `judge_batch()` evaluation helpers. docs/approval-mode.md at v18.2.8 line 72 keeps the parent's hole: a `bash.patterns` deny does not apply to the same command run through `eval`, and under `yolo` that `exec` call resolves to `allow`. Lines 76-81: the computer API inside eval picks `read` or `exec` tier per call; `computer.run` `read_only` is "a trust declaration enforced by the approval tier, not static analysis." docs/tools/debug.md is unchanged on approval at v17.4.0 and v18.2.8 (line 114: non-read DAP actions request `exec`), so under the default `yolo` a debugger `evaluate` is allowed.
- **Receipt:** https://github.com/can1357/oh-my-pi/blob/v18.2.8/docs/approval-mode.md#L72
- **Half:** both | **Confidence:** high

**What changed.** Capability: an operator can now fan work out to pooled subagents, define tools in Python or JS and hand them to subagents, and drive browser and desktop, all from one eval cell. Defect: the tool that now concentrates the most authority is the one the parent flagged as outside `bash.patterns`, and the default approval mode is still `yolo`. The window adds no eval-specific pattern gate. It does add opt-in `bash.allowCompoundCommands` (v18.1.11) for `&&` chains, and removes the bash tool's `env` parameter (v18.2.7).

**Operator consequence.** If you rely on `bash.patterns`, set `tools.approval.eval: prompt` (or `deny`) now; the pattern policy covers even less of the agent's reach than on 2026-08-20. Scripts using eval `parallel()`/`pipeline()`, Ruby/Julia cells, or the old browser/computer tool schemas break on 18.1.7/18.1.9. Pin 18.1.6 if you need them.

## 5. Channel: tag-ahead-of-release recurred three times, and one release never reached npm

- **Date:** 2026-08-21 through 2026-09-04
- **Channel:** `tagged-release` for 45 releases; three tags with no release; one release with no npm version
- **Ancestry evidence:** v17.3.6: `releases/tags/v17.3.6` HTTP 404; `npm view @oh-my-pi/pi-coding-agent@17.3.6` E404; tag still 54e1a8c9. New tags without a GitHub release or npm version: v17.4.3 (028c0a4a, 2026-08-21T21:23:26Z), v17.4.4 (a7e19be8, 2026-08-22T00:43:51Z), v18.0.2 (b214f5a1, 2026-08-23T05:45:14Z). Their contents are not stranded: v17.4.4...v18.0.0 ahead_by=63, behind_by=0; v18.0.2...v18.0.3 ahead_by=12, behind_by=0. Inverse: v18.1.7 has a GitHub release (2026-09-03T16:37:17Z, carrying the eval breaking changes in item 4) and a Homebrew formula commit a82bd80d (2026-09-03T16:37:59Z) but no npm version; npm went 18.1.6 (2026-09-03T11:58:30Z) to 18.1.8 (2026-09-04T00:31:13Z). For about 5.5 hours Homebrew served 18.1.7 while npm/Bun served 18.1.6, until the tap moved to 18.1.8 at 2026-09-03T22:08:22Z.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v18.1.7
- **Half:** neither | **Confidence:** high

**What changed.** Carry-forward 2: v17.3.6 never gained a release or npm publish. Tag-ahead-of-release recurred (three tags). New shape: a GitHub release with no npm counterpart, so on 2026-09-03 the four install paths gave different versions.

**Operator consequence.** Do not report an OMP version from `git tag`. For 17.4.3, 17.4.4, 18.0.2, and 18.1.7 there is no npm artifact. Pin 17.4.2, 18.0.1/18.0.3, or 18.1.8 instead.

## 6. The four install paths agree on 18.2.8 at window close; Nix unpinned builds 9 commits past it under the same version string

- **Date:** 2026-09-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub releases/latest at close: v18.2.8 (2026-09-21T17:31:56Z). npm 18.2.8 published 2026-09-21T17:42:15Z; the next npm version, 18.2.9, is 2026-09-22 and OUT, so latest at close was 18.2.8 (inferred from publish times; dist-tag history not available). Homebrew can1357/homebrew-tap Formula/omp.rb at d87d8fd1 (2026-09-21T17:32:35Z, last formula commit before close) `version "18.2.8"`, downloading release binaries with per-platform sha256. `https://omp.sh/install` redirects to raw `main/scripts/install.sh`, a moving file. At v18.2.8 it runs `bun install -g @oh-my-pi/pi-coding-agent` (npm latest) when Bun is present; otherwise it fetches `releases/latest` and downloads the binary, then checks only that the binary starts; no checksum or signature check. `--ref` installs from source. Nix: flake.nix at v18.2.8 builds ./nix/package.nix from source, version from package.json. Unpinned `github:can1357/oh-my-pi` is main, at close 4addbb1e, 9 commits ahead of v18.2.8 with package.json still "18.2.8". Homebrew tap commits in window follow every GitHub release, including 18.1.7, and none of the three release-less tags.
- **Receipt:** https://github.com/can1357/homebrew-tap/blob/d87d8fd178dee56003281181ac25aa4312bdcfa9/Formula/omp.rb and https://github.com/can1357/oh-my-pi/blob/v18.2.8/scripts/install.sh
- **Half:** neither | **Confidence:** high on sources read; no local brew/bun/nix run

**What changed.** At window close all four paths name 18.2.8. The only divergences are the ten minutes between release and npm publish, the 18.1.7 gap, and Nix-from-main reporting a released version for unreleased code.

**Operator consequence.** Pin Nix to `github:can1357/oh-my-pi/v18.2.8`, not the bare flake. If you use the script without Bun, its binary path has no integrity check; prefer Homebrew (sha256-pinned) or npm.

## 7. Stored-state fixes: cross-project Hindsight recall on `/move`, config.yml erasure, dotenv leakage

- **Date:** 2026-09-15 (v18.2.0, v18.2.1)
- **Channel:** `tagged-release`
- **Ancestry evidence:** v18.2.1 notes: `/move` or cross-project resume could complete before memory was rebound, so the next prompt "could recall and retain against the previous project's Hindsight bank"; destination `memory.backend` and Hindsight server were ignored; a failed rebind reported success. Hindsight mental-model refresh no longer rewrites the active session's cached system-prompt prefix mid-session. Sticky `RULES.md` and discovered rules re-read from disk on `/clear` and `/new`. Malformed or unreadable `config.yml` was treated as empty and overwritten by the next setting change, "which could permanently erase broker tokens, model roles, and provider configuration." v18.2.0: dotenv parsing fixed, "preventing project values from leaking into child-shell environments." v18.1.6: agent-scoped rules via `agents` frontmatter globs. v18.1.22: 400-request debug dumps now redact any key/token/secret header (#12007).
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v18.2.1
- **Half:** defect | **Confidence:** high on notes; not reproduced

**What changed.** Stored state behaves more predictably: memory stays with its project, rules reload on reset instead of on restart, and a bad config no longer wipes credentials. Rules are still read from workspace files (`RULES.md`), which item 3 says load unconditionally.

**Operator consequence.** If you `/move` between client projects with Hindsight on, upgrade to 18.2.1. Before that, a prompt after a move could write to or recall from the wrong client's memory bank. Check for `.broken-*` config backups after upgrading.

## omp2 and the 2026-08-23 feature's "what would settle it"

- **Tag or release containing the omp2 tree:** No. `compare v18.2.8...omp2` returns "No common ancestor". Root at omp2 has `crates/` with 49 crates (agent, collab, envd, rpc, sandbox, secrets, ...) and no `packages/`. The root at v18.2.8 has `packages/` and `crates/` holding only pi-* crates plus vendor. scripts/install.sh at v18.2.8 installs `packages/coding-agent` (TypeScript) or release binaries. No release in the window is off omp2.
- **omp2 activity:** branch tip 2f92f3b5 (2026-09-04T10:23:01Z, "feat(envd): normalized control availability handling..."), the same at the window-close pin. Commits per day since 2026-08-20: 31, 16, 166 (08-22), 26, 44, 18, 83, 47, 69 (08-28), 125 (09-03), 36 (09-04), then none through 2026-09-21. Meanwhile the TypeScript line shipped 45 releases, including v18.2.1 at 1294 commits.
- **stencil-hq/omp public:** No. `repos/stencil-hq/omp` 404. The org (created 2026-06-05, blog stencil.so) has two public repos, vibemon and slab. On the shipping line, README gains "(c) 2026 Stencil Labs, Inc." at v18.0.0 (absent at v17.4.0), and packages/coding-agent/package.json at v18.2.8 has author "Stencil Labs, Inc."; LICENSE is unchanged (MIT, Zechner 2025, Boluk 2025-2026).
- **Promised essays:** Not found. blog.can.ac RSS newest item is "The Minutiae of Tool-calling", 2026-08-03; no "How to design a harness 101". pi.dev/news.xml carries only release entries through 2026-09-21; no Pi 2 design post (Pi side; see pi-coding-agent harvest).
- **v18.0.0 major bump:** release body lists no coding-agent breaking change. The three Breaking bullets are pi-tui signature changes. It does not correspond to omp2.

## Carry-forward answers

1. **v17.3.6:** still no GitHub release (404) and no npm (E404).
2. **Tags vs releases vs npm in window (after v17.4.0):** 48 new tags v17.4.1 through v18.2.8; 45 GitHub releases (all prerelease=false); 44 npm versions. Tags without release: v17.4.3, v17.4.4, v18.0.2. Release without npm: v18.1.7. Tag-ahead-of-release recurred: yes, three times, all within 2026-08-21..23. None after 18.0.3.
3. **Install paths at close:** script, Homebrew, Bun, and Nix-at-tag resolve 18.2.8; unpinned Nix builds main (9 ahead, labelled 18.2.8). Item 6.
4. **Approvals, patterns, eval gating:** items 1, 4. **LSP/DAP confinement:** no approval change; DAP non-read actions stay `exec`, allowed under default `yolo`. v18.2.1 LSP and debugger connections now reject oversized or invalid frames. **Relay sessions:** item 2. **Extensions brokering denied writes:** `registerFileWriteFallback` and `registerFileDeleteFallback` still in the ExtensionAPI at v18.2.8 (types.ts 1298, 1323). New `tool_call` input rewriting (v18.2.1). Project-local extensions load unconditionally (item 3). **Hindsight/rules from stored state:** items 3, 7. **Security fixes:** items 1, 2, 7. No published GHSA.
5. **Vouch trial:** README and CONTRIBUTING at v18.2.8 still say PRs are "temporarily open to everyone as a trial." CONTRIBUTING asks contributors to review every changed file before submitting agent-written code. The 1294-commit v18.2.1 merged many external PRs (for example #11400 by PeterPonyu, #11044 by 865x44). The trial has not ended.

## Release ledger

All prerelease=false; every consecutive compare status=ahead, behind_by=0.

| Tag | GitHub release (UTC) | prerelease | ahead_by from previous release |
|---|---|---|---|
| v17.4.1 | 2026-08-21T14:53:59Z | false | 220 (vs v17.4.0) |
| v17.4.2 | 2026-08-21T20:34:50Z | false | 82 |
| (v17.4.3 tag only) | 2026-08-21T21:23:26Z commit | n/a | 3 vs v17.4.2 |
| (v17.4.4 tag only) | 2026-08-22T00:43:51Z commit | n/a | 7 vs v17.4.3 |
| v18.0.0 | 2026-08-22T11:00:46Z | false | 73 (vs v17.4.2) |
| v18.0.1 | 2026-08-23T03:22:07Z | false | 311 |
| (v18.0.2 tag only) | 2026-08-23T05:45:14Z commit | n/a | 31 vs v18.0.1 |
| v18.0.3 | 2026-08-23T09:16:16Z | false | 43 (vs v18.0.1) |
| v18.0.4 | 2026-08-24T04:05:24Z | false | 191 |
| v18.0.5 | 2026-08-25T16:41:38Z | false | 263 |
| v18.0.6 | 2026-08-26T08:23:43Z | false | 17 |
| v18.0.7 | 2026-08-27T11:06:17Z | false | 209 |
| v18.0.8 | 2026-08-27T17:48:34Z | false | 152 |
| v18.0.9 | 2026-08-28T06:14:00Z | false | 115 |
| v18.0.10 | 2026-08-28T18:58:46Z | false | 41 |
| v18.0.11 | 2026-08-29T18:30:50Z | false | 137 |
| v18.1.0 | 2026-09-01T14:00:00Z | false | 311 |
| v18.1.1 | 2026-09-01T16:20:48Z | false | 2 |
| v18.1.2 | 2026-09-01T20:25:24Z | false | 33 |
| v18.1.3 | 2026-09-02T14:06:10Z | false | 118 |
| v18.1.4 | 2026-09-02T17:23:29Z | false | 3 |
| v18.1.5 | 2026-09-03T02:20:35Z | false | 53 |
| v18.1.6 | 2026-09-03T11:54:23Z | false | 86 |
| v18.1.7 | 2026-09-03T16:37:17Z | false | 21 (no npm) |
| v18.1.8 | 2026-09-03T22:07:47Z | false | 24 |
| v18.1.9 | 2026-09-04T06:53:08Z | false | 61 |
| v18.1.10 | 2026-09-04T10:08:03Z | false | 8 |
| v18.1.11 | 2026-09-05T16:01:51Z | false | 49 |
| v18.1.12 | 2026-09-06T14:25:44Z | false | 95 |
| v18.1.13 | 2026-09-07T00:45:11Z | false | 10 |
| v18.1.14 | 2026-09-07T18:42:26Z | false | 88 |
| v18.1.15 | 2026-09-08T22:40:03Z | false | 96 |
| v18.1.16 | 2026-09-09T19:05:50Z | false | 120 |
| v18.1.17 | 2026-09-10T19:33:46Z | false | 148 |
| v18.1.18 | 2026-09-11T21:43:45Z | false | 199 |
| v18.1.19 | 2026-09-12T23:57:09Z | false | 172 |
| v18.1.20 | 2026-09-13T20:21:44Z | false | 97 |
| v18.1.21 | 2026-09-14T05:30:35Z | false | 9 |
| v18.1.22 | 2026-09-14T19:29:59Z | false | 27 |
| v18.2.0 | 2026-09-15T04:39:58Z | false | 68 |
| v18.2.1 | 2026-09-15T23:32:15Z | false | 1294 |
| v18.2.2 | 2026-09-16T16:29:05Z | false | 128 |
| v18.2.3 | 2026-09-17T01:14:30Z | false | 43 |
| v18.2.4 | 2026-09-17T09:10:49Z | false | 6 |
| v18.2.5 | 2026-09-17T23:07:03Z | false | 48 |
| v18.2.6 | 2026-09-18T18:10:25Z | false | 19 |
| v18.2.7 | 2026-09-21T02:13:02Z | false | 65 |
| v18.2.8 | 2026-09-21T17:31:56Z | false | 23 |

npm publish lags each GitHub release by roughly 3 to 15 minutes across the window (for example 18.2.8: release 17:31:56Z, npm 17:42:15Z).

## Researcher lane notes

Marketing vs substance: omp.sh is a JS-rendered landing page with no readable content for curl; omp.sh/blog returns the same shell. Every fact above comes from tags, release bodies, source, and docs at v18.2.8. Release bodies are per-package changelogs and very long (4,941 lines for 44 bodies); I filtered them for approval, permission, eval, collab, relay, trust, memory, rules, LSP/DAP, and breaking sections. Items I did not isolate to a commit (advisor and Cursor-bridge bypasses in item 1) rest on the release body only. Other notes, not promoted: 18.2.0 "Debugger support now loads only when SIGUSR1 requests it" concerns omp's own runtime debugger, not DAP. 18.1.3 rewind now branches within a session instead of forking a child session. 18.0.5 adds a Yolo-Auto provider (a model vendor name, not an approval mode).

## Surfaces checked

- gh api repos/can1357/oh-my-pi (identity), releases (all since 2026-08-19), tags (100), releases/tags/v17.3.6 (404), branches/omp2, commits on omp2 since 2026-08-20
- gh compare for every consecutive in-window release; tag-only tags against neighbours; v18.2.8...omp2 (no common ancestor); v18.2.8...window-close main
- PR #11400, #11044 merge SHAs and ancestry vs v18.2.0 and v18.2.1; commit 156093b9 message and ancestry
- repos/can1357/oh-my-pi/security-advisories (empty)
- npm view @oh-my-pi/pi-coding-agent time, dist-tags, @17.3.6
- Files at v18.2.8: docs/approval-mode.md (diffed vs v17.4.0), docs/collab.md (diffed vs v18.1.0), docs/tools/debug.md (vs v17.4.0), docs/extension-loading.md, extensions/types.ts, test issue-7955, scripts/install.sh, flake.nix, nix/package.nix, README.md (also v17.4.0, v18.0.0), CONTRIBUTING.md, LICENSE, packages/coding-agent/package.json
- can1357/homebrew-tap Formula/omp.rb history in window and content at d87d8fd1
- https://omp.sh/install redirect; https://omp.sh/, /blog; https://blog.can.ac RSS
- repos/stencil-hq/omp (404), orgs/stencil-hq and its public repos
- earendil-works/pi v0.87.0 tree for project-trust files (contrast only)

## Not reached

- Local brew, bun, or nix install; versions come from sources, not binaries.
- Commit-level receipts for the advisor and Cursor-bridge approval bypasses.
- docs/memory.md and the Hindsight write path in code. The stored-state answer rests on types.ts, approval-mode.md precedence, and release notes.
- The my.omp.sh relay's actual retention (closed service).

## Observed after window close

- v18.2.9 on npm 2026-09-22T18:52:27Z with no tag and no GitHub release at observation.
- v18.2.10 release 2026-09-22T23:42:53Z, npm 23:51:17Z; npm latest=18.2.10.
- Tag v18.2.11 (e4151593) with no release at observation.
