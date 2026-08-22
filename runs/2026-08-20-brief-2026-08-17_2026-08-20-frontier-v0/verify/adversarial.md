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

Independent re-fetch of PR #39307: title "Fail closed on Guardian V2 risk scoring errors", merged_at 2026-08-18T22:50:13Z, merge_commit_sha c97bd2dcb52a8120d96086fac49665452af3161b. Body: treat configuration/serialization/thread/classification errors as elevated risk instead of retaining a prior low-risk result. Do not confuse with core/src/guardian/mod.rs "fail closed" comments on moving main; that is the older guardian module, not Guardian V2. CONFIRMED.

Ancestry re-fetch: compare rust-v0.148.0...c97bd2dc ahead_by=158, behind_by=1, diverged (not in 0.148.0). compare c97bd2dc...rust-v0.149.0 ahead_by=84, behind_by=0, ahead (in 0.149.0). CONFIRMED.

Paperclip matching-refs recount: canary 818=17, 819=10, 820=7; nightly 818=2, 819=1, 820=1. 817 overlap: canary 16, nightly 1. CONFIRMED in-window canary/nightly lengths.

Unauthenticated curl of contents/codex-rs/ext?ref=rust-v0.149.0 returned HTTP 403. Authenticated gh api of the same path lists guardian-v2 among 13 entries. Do not treat a 403 as the tree missing. CONFIRMED present at the tag.

Unauthenticated curl of earendil-works/pi commits?sha=main&until=2026-08-21T00:00:00Z also 403. Authenticated gh api first row: 5cd93f688aaa 2026-08-20T13:59:38Z "feat(coding-agent): add development pi wrapper". Matches the harvest window-close pin. CONFIRMED. Do not substitute live HEAD.

Independent FeatureSpec dump at both tags (raw lib.rs, 2026-08-21 observation of the pinned refs): GuardianApproval Stable default_enabled true; GuardianV2 UnderDevelopment default_enabled false. Three additional Guardian* specs exist at both tags and are also UnderDevelopment default_enabled false: GuardianReuseParentCompaction, GuardianEnhancedNodeReplTranscripts, GuardianNodeReplTranscriptImages. They do not change the AND-gate (GuardianV2 AND GuardianApproval). Not promoted.

Independent recount (gh api, 2026-08-22 observation of the same tags): rust-v0.148.0 prerelease=false published_at 2026-08-18T22:26:03Z. compare rust-v0.147.0...rust-v0.148.0 ahead_by=381, behind_by=1, status=diverged, total_commits=381. compare rust-v0.148.0...rust-v0.149.0 ahead_by=242, behind_by=1, status=diverged, total_commits=242. rust-v0.149.0 published_at 2026-08-20T21:04:55Z. compare rust-v0.148.0...rust-v0.148.0-alpha.23 ahead_by=139, behind_by=1, diverged. npm latest=0.149.0; alpha dist-tag 0.150.0-alpha.6 is OUT. developers.openai.com/codex/changelog still HTTP 308 to learn.chatgpt.com/docs/changelog. CONFIRMED. Do not reuse 422.

Carry-forward recount (same observation): OpenClaw first 20 releases still tip v2026.8.1-beta.2 2026-08-15. compare beta...ab5611f0 ahead_by=619, behind_by=22, diverged. Public "619 commits short" is the ahead_by; harvest already records divergence. OMP v17.3.6 GitHub 404, npm MISSING; v17.3.7 GitHub 2026-08-18T08:47:33Z, npm 2026-08-18T08:51:09Z. 17.4.1/2 OUT. Agent Zero v2.9...v2.10 ahead_by=20. Gemini v0.55.1...v0.56.0 two commits diverged. Hermes 6e22d265 in v2026.8.18 (behind_by=0), not in v2026.8.16.2 (behind_by=21). Pi live HEAD 84 / 266; keep window pin 79 / 264. CONFIRMED. Do not substitute live Pi HEAD.

Channel recount (gh api 2026-08-22): DSH first 8 still all prerelease; rc.8 2026-08-19 in window; 0.1.1-rc.1/rc.2 08-21 OUT. OpenHands v1.14.0 2026-08-17T21:41:36Z; v1.15.0 2026-08-21T14:01:34Z OUT. Paperclip stable still v2026.817.0 published 2026-08-18T03:17:29Z; canary 819=10 and 820=7; 821 OUT. Codex 0.148.0-alpha GitHub releases listed: 1,2,4,5,6,7,8,9,11-23 = 21. alpha.3 and alpha.10 absent from the releases list. CONFIRMED 21 not 23. Do not count suffixes.

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

## 17. omnigent deny_tag_push reached v0.10.0

- github.py deny_tag_push_count 0 at v0.9.0, 5 at v0.10.0. Default True at line 949.
- compare v0.10.0...5798d74e status=behind, ahead_by=0. compare v0.9.0...5798d74e diverged.
- Verdict: CONFIRMED tagged-release. Closes 2026-08-10 nightly-only finding. Do not call it nightly-only at v0.10.0.
