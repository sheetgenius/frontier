# Adversarial verify -- mandated to refute

Hunt specimens from parent: 11 not 13, 19 not 21, tagged-but-unreleased OpenClaw.

## 1. Codex 0.148.0 is stable and contains Guardian V2 off by default

- Receipts re-fetched: gh api releases/tags/rust-v0.148.0 (prerelease=false, 2026-08-18T22:26:03Z). Tree at tag contains codex-rs/ext/guardian-v2. lib.rs FeatureSpec GuardianV2 default_enabled false, stage UnderDevelopment. GuardianApproval default_enabled true, Stable.
- Compare 0.147.0...0.148.0 ahead_by=381, not 422 (422 was parent alpha.21 vs 0.147.0). Do not reuse 422.
- Alpha suffix count is not a release count. Tags alpha.1-23 exist. Some early alphas lacked GitHub releases in the parent recount.
- Verdict: CONFIRMED for "in the tag, off by default, 381 commits vs 0.147.0". Do not say Guardian is on.

## 2. Codex 0.149.0 npm latest

- gh api releases/tags/rust-v0.149.0 prerelease=false 2026-08-20T21:04:55Z. npm latest=0.149.0. Compare 0.148.0...0.149.0 ahead_by=242.
- 0.150.0-alpha.5 is 2026-08-21 OUT as a default-install fact. rust-v0.150.0-alpha.1 is 2026-08-20T22:06:34Z preview-or-beta.
- Verdict: CONFIRMED.

## 3. Agent Zero SSRF tests in v2.10

- tests/test_document_query_plugin.py at v2.10 contains test_fetch_http_blocks_non_public_destinations against 127.0.0.1 and a redirect test. fetch.py imports fetch_public_http_resource.
- compare v2.9...v2.10 ahead_by=20, not a larger guessed number.
- Verdict: CONFIRMED. Carry-forward YES.

## 4. OpenClaw approved-exec still unreleased

- ab5611f0 vs v2026.8.1-beta.2 ahead_by=619. No newer release in the first 20.
- Do not stamp tagged-release.
- Verdict: CONFIRMED as main-unreleased.

## 5. DeepSeek still prerelease; architecture still plugin-everything

- rc.8 prerelease=true. architecture.md at 141eb6fe still has the plugin sentences. api-request-trust.ts still says not an auth layer.
- 0.1.1-rc.1/rc.2 are 08-21 OUT.
- Verdict: CONFIRMED.

## 6. OMP 17.3.6 vs 17.3.7

- v17.3.6 GitHub release 404, npm time MISSING. v17.3.7 GitHub 2026-08-18, npm 2026-08-18T08:51:09Z.
- Do not say both tags gained releases.
- Current npm latest 17.4.2 is 08-21. Window-close npm tip is 17.4.0.
- Verdict: CONFIRMED as split.

## 7. Claude version arithmetic

- List 232,233,234,235,236,237,238 between stable 2.1.231 and in-window latest 2.1.238. Seven. 2.1.230 absent. 2.1.239 is 08-21.
- Changelog 2.1.237 label says August 20; npm time is 2026-08-19T23:57:54Z. Prefer npm for channel date.
- Verdict: CONFIRMED seven. Do not say eight.

## 8. Gemini 0.56.0 is not a large diff

- compare v0.55.1...v0.56.0 is two chore(release) commits.
- Verdict: CONFIRMED. Do not inflate.

## 9. OpenHands v1.15.0 is out of window

- published 2026-08-21T14:01:34Z. The profile fix is in that tag and not in v1.14.0. At window close the operator's newest tag is v1.14.0.
- Verdict: CONFIRMED. Do not upgrade-instruct to v1.15.0 in this brief.

## 10. Pi 264 is main...dev, not v0.84.2...main

- v0.84.2...main ahead_by=83. main...dev ahead_by=264. v0.84.2...dev ahead_by=336.
- Verdict: use the pair you name. Do not say 264 unreleased commits on main.
