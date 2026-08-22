# JOURNAL -- 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0

## NOW

Window: 2026-08-17 to 2026-08-20 (three-day Brief; 2026-08-17 overlap only).
run_id: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
parent: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0 ("The Gate Is a Plugin")
AUTHORIZE_PUSH: no

Next: none. Saturation checklist is true. AUTHORIZE_PUSH is no, so no push.

Leftover omnigent v0.10.0 pin re-fetch CONFIRMED all seven leftover claims (cost.py identical, ACP fail-open, Devin on generic ACP, Usage off, deny_tag_push in tag, #2150 open, CHANGELOG still v0.9.0). J26 verify-only.

Leftover eve 0.39.x ancestry CONFIRMED; self-mod gate is EVE_DEV === "1" at the tag, not notes-only. Harvest confidence raised. J25 SHA 620da7e. No public rewrite.

Leftover Antigravity 1.1.14-17 re-fetch CONFIRMED; full linux tarball sha256s recorded; 1.1.18 exists post-window and did not move 1.1.16/17. J24 SHA 272bf61. Verify-only.

Leftover 39307 ancestry and Paperclip canary lengths CONFIRMED (158/84; 818=17 819=10 820=7). J23 SHA 4bcad5d. Verify-only.

Leftover Pi until=2026-08-21 curl was 403. gh api first row is 5cd93f68, the harvest pin. J22 SHA 06fa1c4. Verify-only.

Leftover unauthenticated curl of Codex ext at 0.149.0 was 403. gh api lists guardian-v2. Do not treat 403 as missing. J21 SHA 1b7aea4. Verify-only.

Leftover #39307 re-fetch CONFIRMED merged_at 2026-08-18T22:50:13Z SHA c97bd2dc. J20 SHA b1dcb13. Verify-only.

Leftover channel recount CONFIRMED: Codex 21 alpha GitHub releases not 23; DSH still prerelease; OpenHands 1.15.0 OUT; Paperclip stable unmoved. J19 SHA f4587fc. Verify-only.

Leftover carry-forward recount CONFIRMED (OpenClaw 619/22 diverged, OMP 17.3.6 still 404, AZ 20, Gemini 2 chore, Hermes in 8.18 not 8.16.2, Pi live 84/266 keep pin). J18 SHA 02bcb52. Verify-only.

Leftover Codex recount CONFIRMED: 381 / 242 / 139, npm latest 0.149.0, changelog still 308. J17 SHA 0706274. Verify-only.

Leftover Codex FeatureSpec dump (lib.rs at rust-v0.148.0 and rust-v0.149.0) CONFIRMED GuardianV2 off / GuardianApproval on at both. Three extra Guardian* flags also UnderDevelopment/false; they do not change the AND-gate. Archived in verify/; no public rewrite. J16 SHA 40c9c8b.

J15 SHA 536d082. leftover remaining-seven unused item deny_tag_push reached v0.10.0. Independently confirmed (0 hits at v0.9.0, 5 at v0.10.0, default true; 5798d74e ancestor of v0.10.0). Closes 2026-08-10 nightly-only finding. Findings 32, signals 6. Foreground rebuild BUILD_EXIT=0 INTEGRITY_EXIT=0 LINKS_EXIT=0 (559 findings).

J14 SHA 912020b. Leftover Gemini harvest applied after independent file reads at both tags. Findings 31, signals 6. enableAgents false still loads built-ins on latest. Git-env is preview-only. Foreground rebuild BUILD_EXIT=0 INTEGRITY_EXIT=0 LINKS_EXIT=0 (558 findings).

J13 SHA 7531781. Leftover Hermes harvest applied after independent compare. Findings 29, signals 6. Foreground rebuild BUILD_EXIT=0 INTEGRITY_EXIT=0 LINKS_EXIT=0 (1413 pages, 556 findings, 184 accepted signals).

J12 SHA 0643a1e. Foreground rebuild BUILD_EXIT=0 INTEGRITY_EXIT=0 LINKS_EXIT=0 (1407 pages, 553 findings, 184 accepted signals).

J12 applied leftover Lane A facts the first cycle skipped:
- eve 0.39.1 (duplicate pending approvals), 0.39.2 (durable tool rebuild), 0.39.3 (turnPolicy queue binds again after silent steer from 0.34.0). Signal 6. Window-close pin eve@0.42.0; npm latest already 0.44.0 OUT.
- omnigent v0.10.0: cost.py blob 5b4ca596 identical to v0.9.0; ACP result-phase still fails open; Usage page off unless OMNIGENT_FEATURES. Finding 26. Profile "where it stands" rewritten; spend-cap last_verified 2026-08-20.
- flue/heypi harvests now pin compare-identical and npm.
- antigravity 1.1.15 named rules that always apply added to harvest.
- eve profile Status no longer claims 0.27.6 as current.

Findings 26, signals 6, cards 5. AUTHORIZE_PUSH is no.

Latest applied commit before this apply: 9b92bdd (J11).

Leftover Pi harvest applied: live compaction docs describe session_compact_failed; npm is still 0.84.2. Finding 23. Rebuild BUILD/INTEGRITY/LINKS 0. Then J11.

Leftover OpenClaw harvest applied: Codex sandbox stop can return success while children keep running; fix is main-only. Finding 22. Rebuild BUILD/INTEGRITY/LINKS 0. Then J10.

Leftover OMP harvest applied: `bash.patterns` does not gate `eval`; 17.4.0 `/handoff` overwrites the session. Finding 21. Rebuild BUILD/INTEGRITY/LINKS 0. Then J9.

Leftover Paperclip harvest applied: ACPX thought-text can land in issue comments on every in-window channel; fix c2cfd55e missed the last canary. Finding 20. Rebuild BUILD/INTEGRITY/LINKS 0. Then J8.

Leftover Antigravity harvest applied: 1.1.16/1.1.17 same git object, different linux tarball digests; lightweight tags move. Rebuild BUILD/INTEGRITY/LINKS 0. Then J7.

Leftover OpenHands harvest applied: v1.14.0 Git Sync page 404s against automation 1.7.1. Finding 19. Rebuild BUILD/INTEGRITY/LINKS 0. Then J6.

Leftover DeepSeek harvest applied: library npm latest still 0.0.1-rc.1; SQLite schema 17 has no migration; `never` is pre-dispatch. Finding 18. Rebuild BUILD/INTEGRITY/LINKS 0. Then J5.

Foreground rebuild of current tree: BUILD_EXIT=0 INTEGRITY_EXIT=0 LINKS_EXIT=0 (1388 pages, 544 findings). Then J4.

Blocked: nothing.

Deepening applied:
- Agent Zero SSRF tests present at v2.9 and v2.10, identical blob 26bf2a69; not newly written in v2.10.
- Paperclip canary 818=17, 819=10, 820=7; parent security pair in beta.1 and nightly 820, not in v2026.817.0. Profile "canary is dead" section rewritten.
- Codex GuardianV2 off at both stables. Fail-open at 0.148.0; #39307 ancestor of 0.149.0 not 0.148.0. AND-gate both flags.
- OpenClaw zero versioned releases; ab5611f0 still 619 ahead of v2026.8.1-beta.2.
- OMP Homebrew/Bun/script land 17.4.0 at window close; 17.3.6 still missing.
- Antigravity 1.1.17 is the 1.1.16 tree.
- Gemini v0.56.0 dropped a v0.55.1 OAuth fix; retry/TTL is in preview.0.
- Pi window-close pins 5cd93f68 / a17323e5 (79 / 264 / 336).
- Findings 17, signals 5, cards 5, capture 10/10.

Commits this run:
- a452c26 phase 0 scaffold (J0)
- 9a618e5 Lane B feeds (J1)
- 641950f Lane A harvests (J2)
- f306edc findings, signals, brief, wire, profiles (J3)
- b7a51bd deepening, Agent Zero test-acquisition correction (J4)
- a959984 JOURNAL NOW records J4 SHA (J4b)
- 310a7c5 DeepSeek library-latest / SQLite 17 (J5)
- e61a13c OpenHands Git Sync 404 (J6)
- 424394c Antigravity 1.1.17 same git different tarball (J7)
- 63c4a39 Paperclip ACPX thought-text (J8)
- 7b8439d OMP bash.patterns vs eval (J9)
- ed337f9 OpenClaw sandbox stop (J10)
- 9b92bdd Pi live docs compaction event (J11)
- 0643a1e eve turnPolicy queue / omnigent gates (J12)
- 1affa57 JOURNAL NOW records J12 SHA (J12b)
- 7531781 Hermes leftover tagged extras and profile correction (J13)
- ce0b2fe JOURNAL NOW records J13 SHA (J13b)
- 912020b Gemini enableAgents / git-env leftover (J14)
- c1cfd4a JOURNAL NOW records J14 SHA (J14b)
- 536d082 omnigent deny_tag_push reached v0.10.0 (J15)
- 378b696 JOURNAL NOW records J15 SHA (J15b)
- 40c9c8b Codex FeatureSpec dump confirms GuardianV2 off (J16)
- d508286 JOURNAL NOW records J16 SHA (J16b)
- 0706274 Codex recount 381/242/139 confirmed (J17)
- 65eb31c JOURNAL NOW records J17 SHA (J17b)
- 02bcb52 carry-forward recount confirmed (J18)
- 05f40e8 JOURNAL NOW records J18 SHA (J18b)
- f4587fc channel recount 21 alphas / DSH still rc (J19)
- 399f4e5 JOURNAL NOW records J19 SHA (J19b)
- b1dcb13 PR 39307 re-fetch confirmed (J20)
- 02abb3e JOURNAL NOW records J20 SHA (J20b)
- 1b7aea4 0.149.0 ext listing confirms guardian-v2 (J21)
- 78eb839 JOURNAL NOW records J21 SHA (J21b)
- 06fa1c4 Pi window-close pin 5cd93f68 confirmed (J22)
- 9d0b96b JOURNAL NOW records J22 SHA (J22b)
- 4bcad5d 39307 ancestry and Paperclip canary lengths (J23)
- f8d73ea JOURNAL NOW records J23 SHA (J23b)
- 272bf61 Antigravity 1.1.14-17 re-fetch (J24)
- 8f45d37 JOURNAL NOW records J24 SHA (J24b)
- 620da7e eve 0.39.x ancestry and EVE_DEV gate (J25)
- d5098ad JOURNAL NOW records J25 SHA (J25b)
- (pending) omnigent v0.10.0 pin re-fetch (J26)

Working thesis (locked in the brief): shipped is not on. Classifier in the 0.148.0 tag, flag still off. OpenClaw approved-exec still unreleased. DeepSeek gate still a plugin.

Carry-forwards (proofs in harvest/ + verify/adversarial.md):
- DSH: no non-prerelease tag. rc.8 SHA 141eb6fe still plugin waterfall; UI still not an auth layer.
- OpenClaw: ab5611f0 still 619 ahead of v2026.8.1-beta.2. Zero in-window releases.
- OMP: v17.3.7 GitHub+npm 2026-08-18. v17.3.6 still 404 / npm MISSING.
- Agent Zero SSRF tests: present at v2.9 and v2.10, identical blob 26bf2a69. Carry-forward YES (present, not newly written this window). ACP/browser tagged in v2.10.

## 2026-08-20 15:03 -- phase 0 scaffold

Read, in order: THESIS.md, METHOD.md, EDITORIAL.md, AGENTS.md, CONTRIBUTING.md,
frontier-cycle SKILL.md, exemplar-pass SKILL.md, humanizer SKILL.md,
docs/x-social-harvest-workflow.md, ops/grok/x-sweep.sh, ops/grok/capture.sh,
sources/index.yml, sources/writing-roster.yml, parent digest, parent manifest,
parent harvest/codex.primary.md (depth specimen), parent thread-check.md,
parent qa.md (arithmetic failure specimens: 11 not 13, 19 not 21,
tagged-but-unreleased OpenClaw), parent signals.yml, one finding schema
specimen.

Decided:
- Public series is Bitter Frontier Brief, not the weekly.
- Lane C uses native X tools and/or ops/grok/x-sweep.sh; Hermes is a watched
  source, not the harvest wrapper.
- Children return harvest text; coordinator applies it.
- Carry-forward five questions from parent manifest stay open until Lane A
  plus explicit ancestry proofs.

Created:
- runs/2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0/{harvest,findings,signals,social,social-cards,verify,feeds}
- NORTHSTAR.md (full assignment)
- JOURNAL.md (this file)
- stub manifest.yml, audit.md, qa.md, thread-check.md

Next: first local commit, then Lane B.

## 2026-08-20 -- Lane B complete (J1)

Command: `node ops/wire/harvest-feeds.mjs --since 2026-08-17 --out runs/2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0`
15/15 feeds live, 58 items, zero FAIL lines. pillar-security has no feed. Archive: writing.json + feeds/*.json + feeds/LANE-B.md.
08-21 items in the dump are out of window.

## 2026-08-20 -- Lane A launched + coordinator primary checks

13 read-only researchers spawned. Coordinator independently confirmed:

Carry-forwards (provisional, still need harvest pins):
- DeepSeek: no non-prerelease tag. dsh-v0.1.0-rc.8 2026-08-19 prerelease=true SHA 141eb6fe. rc.8 api-request-trust.ts still says the fence is not an auth layer; trustedHosts exists for LAN authorities. 0.1.1-rc.1/rc.2 are 08-21 OUT.
- OpenClaw: no new release in window. Latest still v2026.8.1-beta.2 (08-15). compare v2026.8.1-beta.2...ab5611f0 ahead_by 619. Approved-exec still unreleased.
- OMP: v17.3.7 GitHub release 2026-08-18 (gained). v17.3.6 still 404. v17.3.8 08-19, v17.4.0 08-20. v17.4.1/2 are 08-21 OUT.
- Agent Zero: v2.10 2026-08-19. tests/test_document_query_plugin.py contains test_fetch_http_blocks_non_public_destinations raising ValueError "Blocked non-public address". Carry-forward YES unless verifier refutes. ACP + interactive browser in v2.10 release body.

Other in-window tagged movement:
- Codex rust-v0.148.0 2026-08-18 and rust-v0.149.0 2026-08-20, both prerelease=false. npm latest=0.149.0. 0.150 alphas are 08-21 OUT.
- Claude Code npm: 2.1.235 (08-18), 236 (08-19), 237 (08-19), 238 (08-20) in window. 2.1.239 is 08-21 OUT. stable dist-tag currently 2.1.231.
- Gemini CLI v0.56.0 08-19 stable; compare v0.55.1...v0.56.0 is two chore(release) commits. npm latest=0.56.0, preview=0.57.0-preview.0 (preview now ahead).
- Antigravity 1.1.14-1.1.17 all in window.
- Hermes v2026.8.16.2 overlap, v2026.8.18 08-18. v2026.8.19 is 08-21 OUT.
- Pi: no new tag. main 83 ahead of v0.84.2. `dev` 264 ahead of main, 336 ahead of v0.84.2. mitsuhiko 2026-08-20: new harness is on the dev branch.
- Paperclip: v2026.817.0 published_at 08-18 (parent already harvested the tag).
- OpenHands: v1.14.0 08-17 overlap; v1.15.0 08-21 OUT.
- heypi: last commit 2026-07-22. flue: last commit 2026-08-05 v2.0.3.
- eve 0.40/0.41/0.42 on 08-20. 0.43/0.44 08-21 OUT.
- omnigent v0.10.0 08-19; breaking note still reverts shared-session owner-only approval.
- flywheel: in-window commits exist on default branch (install/postgres/checksums); last tag still v0.7.0 2026-06-26.

Lane C started with native X. Candidate card URLs (discovery only, not captured yet):
- https://x.com/mitsuhiko/status/2090368103972479324
- https://x.com/acsmif/status/2090470326824280234 (parent) and 2090477764109533376
- https://x.com/OpenAIDevs/status/2090230646497251387
- https://x.com/antigravity/status/2090497270370230625
- https://x.com/ClaudeDevs/status/2089471692762673408
- https://x.com/simonw/status/2090299859693695283
- https://x.com/cnzhihao/status/2089718723607445739
- https://x.com/jungianboi/status/2090584150524756396
- https://x.com/KEisuke62350514/status/2090578350628884505

Do not quote any of these until capture.sh.
