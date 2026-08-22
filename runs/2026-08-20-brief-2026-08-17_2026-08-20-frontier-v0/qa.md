# QA -- 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0

## Coverage (computed from the run tree)

- Harvest files: 17 primary + x-banter.md
- Findings: 29
- Signals: 6
- Cards: 5, all with placement markers in the brief
- Capture: 10/10 blocks, 0 unavailable
- Lane B: 15/15 feeds HTTP 200, 0 FAIL

## Dates

Year confirmed 2026 on every in-window event. 2026-08-21 events excluded.

## Channel

Inspectable changes used gh compare or tag contents. Closed source (Claude Code) used npm time + official changelog. OpenClaw approved-exec not stamped tagged-release.

## Numbers recounted

- Codex 0.147.0...0.148.0 ahead_by=381 (not 422)
- Codex 0.148.0...0.149.0 ahead_by=242
- Claude versions between 2.1.231 and 2.1.238: 232,233,234,235,236,237,238 = seven
- Agent Zero v2.9...v2.10 ahead_by=20
- OpenClaw beta...ab5611f0 ahead_by=619
- Gemini v0.55.1...v0.56.0 = two chore commits, diverged. fa2f27aee (retry/TTL) not an ancestor of v0.56.0. v0.57.0-preview.0 ahead_by=24 of that merge-base and contains it.
- Antigravity 1.1.16...1.1.17 identical (SHA efa16f09). CHANGELOG at 1.1.17 tops at 1.1.16.
- Pi main...dev ahead_by=264 at harvest pin (dev SHA a17323e5, 2026-08-20T21:09:41Z). Live HEAD on 2026-08-21 observation had drifted to 84 / 266. Do not substitute live HEAD for the window pin.
- OMP 17.3.6 GitHub 404, npm MISSING; 17.3.7 both present
- OpenClaw first 20 GitHub releases: newest still v2026.8.1-beta.2 on 2026-08-15. Zero in-window.
- Paperclip matching-refs lengths: canary 818=17, 819=10, 820=7 (34); nightly 818=2, 819=1, 820=1. Stable still v2026.817.0. 821 OUT.
- GuardianV2 FeatureSpec at rust-v0.148.0 and rust-v0.149.0: UnderDevelopment, default_enabled false (raw lib.rs)
- PR #39307 fail-closed merged 2026-08-18T22:50:13Z, after 0.148.0 published_at 2026-08-18T22:26:03Z. Ancestor of rust-v0.149.0 (compare behind_by=0), not of rust-v0.148.0.
- eve 0.39.0...0.39.1 ahead_by=24; 0.39.1...0.39.2 ahead_by=6; 0.39.2...0.39.3 ahead_by=7; 0.39.3...0.42.0 ahead_by=16. 542c380eec ancestor of 0.39.3 and 0.42.0 (compare status=behind, ahead_by=0).
- omnigent cost.py blob 5b4ca596 identical at v0.9.0 and v0.10.0. types.py blob 1c4a0862 identical. feature_flags.py at v0.10.0: unset OMNIGENT_FEATURES means every release feature is off.
- Hermes v2026.8.18...b95ec1cb and ...0bb23999 status=behind, ahead_by=0 (in tag). ...f0ffcbc7 ahead_by=334, ...b0350365 ahead_by=432, ...1179f148 ahead_by=610 (not in tag). delegation.md at tag still 50/3; config_defaults 250/10. smart_policy bd1db546 ancestor of v2026.8.3 and v2026.8.18.

## Capture rule 4

Nothing quoted from harvest. capture.sh given URLs only. Inline fragments sliced with slice-quote.mjs.

## Public surface

Series is Bitter Frontier Brief. No pipeline words intended. Exemplar and humanizer applied by the coordinator on the brief.

## Corrections inside this run

Agent Zero SSRF tests were described as added in v2.10. Independent researcher pass showed the blob is identical at v2.9 and v2.10. The brief, signal, finding, thread-check, and harvest were corrected before push (AUTHORIZE_PUSH is no). Shared Chromium sign-ins and ACP always_enabled defaults were added to the operator brief.

## Gaps

OMP Homebrew/Bun/script paths not re-probed in this coordinator pass; parent said only Nix reached 17.3.6/7, and npm now reaches 17.3.7 and 17.4.0. Paperclip canary bodies not line-audited. Parent Paperclip main-unreleased security items not re-diffed against a canary SHA. Pi `dev` plugin-architecture sample still with the researcher. Live npm alpha is 0.150.0-alpha.6 (out of window). eve self-mod subagent gated to eve dev by release notes, not a line-range audit in this pass. omnigent worktree_guard path at v0.10.0 not re-found at the v0.7.0 filename.
