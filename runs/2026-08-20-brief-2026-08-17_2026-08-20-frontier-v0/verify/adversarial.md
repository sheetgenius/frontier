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
- compare v2.9...v2.10 ahead_by=20. Blob SHA 26bf2a69 is identical at v2.9 and v2.10. The tests were not newly written in v2.10.
- Verdict: CONFIRMED that tests exist and survived. REFUTED that v2.10 added them. Carry-forward YES (present, not dropped). Public prose corrected.

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

- Harvest pin: v0.84.2...main ahead_by=83. main...dev ahead_by=264. v0.84.2...dev ahead_by=336. dev SHA a17323e5 dated 2026-08-20T21:09:41Z.
- Live HEAD on 2026-08-21 observation: 84 and 266. That is post-window drift. Keep the window pin.
- Verdict: use the pair you name, at the pin. Do not say 264 unreleased commits on main.

## 11. Paperclip canary is not dead

- Hunt specimen: this publication once reported the canary lane abandoned because a flat tag listing omitted slash-prefixed names.
- matching-refs this window: canary/v2026.818.0-canary.*, 819, 820; nightly 818, 819, 820. Stable still v2026.817.0. 821 tags are 2026-08-21 OUT.
- Verdict: CONFIRMED train still running. REFUTED any remaining "abandoned" profile sentence. Profile section rewritten.

## 12. Guardian fail-closed is not in 0.148.0

- rust-v0.148.0 extension.rs: scoring errors emit_warning and return (fail open). Confirmed by reading the file at the tag.
- PR #39307 merged 2026-08-18T22:50:13Z, 24 minutes after 0.148.0 published_at 2026-08-18T22:26:03Z. Merge SHA c97bd2dc.
- FeatureSpec GuardianV2 remains UnderDevelopment default_enabled false at both 0.148.0 and 0.149.0.
- compare rust-v0.148.0...c97bd2dc: ahead_by=158 (not in 0.148.0). compare c97bd2dc...rust-v0.149.0: ahead_by=84, behind_by=0 (in 0.149.0).
- Verdict: CONFIRMED off-by-default at both stables. CONFIRMED fail-open at 0.148.0. CONFIRMED fail-closed is an ancestor of 0.149.0. Do not say 0.148.0 fail-closes.

## 13. eve turnPolicy queue silent-fallback

- Hunt: parent finding told operators to set queue after 0.33.0. Leftover harvest claimed 0.39.3 restores it.
- Re-fetched: eve@0.39.3 published 2026-08-19T22:41:34Z, prerelease=false. Body names 542c380. PR #2173 merged_at 2026-08-19T22:23:07Z, merge SHA 542c380eec. compare eve@0.39.3...542c380eec status=behind, ahead_by=0. compare eve@0.42.0...542c380eec status=behind, ahead_by=0. npm latest already 0.44.0 (2026-08-21 OUT); 0.42.0 time 2026-08-20T21:06:02Z.
- Verdict: CONFIRMED as tagged-release in 0.39.3. Do not upgrade-instruct to unpinned npm.

## 14. omnigent v0.10.0 parent gates

- cost.py blob SHA 5b4ca596 at v0.9.0 and v0.10.0 (identical). types.py blob 1c4a0862 identical. qwen_executor.py at v0.10.0: _fs_result_policy_denies returns False on eval error (line 774). feature_flags.py resolve_feature_flags: unset or empty means every release feature is off. CHANGELOG at v0.10.0 starts at v0.9.0.
- Verdict: CONFIRMED Usage page is opt-in. CONFIRMED spend cap and ACP result-phase fail-open did not move. Do not treat v0.10.0 as a governance repair.

## 15. Hermes leftover tagged extras and main-unreleased holes

- steer/stop b95ec1cb and update honesty 0bb23999: compare vs v2026.8.18 status=behind, ahead_by=0. CONFIRMED in tag.
- execute_code f0ffcbc7 ahead_by=334; yolo b0350365 ahead_by=432; bot cards 1179f148 ahead_by=610. CONFIRMED not in v2026.8.18. Do not upgrade-instruct to v2026.8.19 (08-21).
- delegation.md at tag still 50/3; config_defaults 250/10. CONFIRMED stale docs.
- smart_policy bd1db546 vs v2026.8.18 and vs v2026.8.3: status=behind, ahead_by=0. Profile "in no tag" REFUTED. Corrected.

## 16. Gemini leftover enableAgents and git-env

- registry.ts at v0.56.0: loadBuiltInAgents line 163, isAgentsEnabled line 168. At preview: check first. CONFIRMED hole on latest, fix on preview.
- gitUtils.ts: getSafeGitEnv false at v0.56.0, true at preview. CONFIRMED.
- ba4296c6c vs preview diverged. CONFIRMED main-unreleased. Do not treat .geminiignore as symlink-safe on in-window tags.
- docs/changelogs/latest.md at v0.56.0 still headed v0.54.0. CONFIRMED.
