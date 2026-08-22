---
schema_version: bitter.frontier_harvest.v0
provider: paperclip
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/paperclip.yml
channels_present: [preview-or-beta]
window_volume: 2 material changes, 0 new stable, parent security pair now in beta/nightly
lane: primary sources, coordinator applied researcher matching-refs + compare; paperclipai/paperclip
---

# Harvest -- paperclip (primary sources)

Punctuation is ASCII. Repo paperclipai/paperclip. Parent taught slash-prefixed canary tags. The flat GitHub tags listing is structurally incapable of showing them.

## 1. Stable still v2026.817.0; parent security pair reached beta and nightly, not a new stable

- **Date:** 2026-08-18 (stable publish, parent overlap); prerelease containment in-window
- **Channel:** `preview-or-beta` for the security pair; no new `tagged-release` stable
- **Ancestry evidence:** GitHub releases tip is still v2026.817.0, published_at=2026-08-18T03:17:29Z, prerelease=false, SHA 213dabab. Next listed release is v2026.722.0. npm dist-tags at observation: latest=2026.817.0, beta=2026.818.0-beta.1, nightly=2026.820.0-nightly.0; canary=2026.821.0-canary.12 is 2026-08-21 OUT. `beta/v2026.818.0-beta.1` SHA 664052f8. `nightly/v2026.820.0-nightly.0` SHA 5a1ce7ae. compare 57edb26db...beta/v2026.818.0-beta.1 ahead_by=52 behind_by=0 (review-policy #11405 contained). compare fdb9a4880...beta/v2026.818.0-beta.1 ahead_by=50 behind_by=0 (CWE-78 #11400 contained). Same pair vs nightly/v2026.820.0-nightly.0: 57edb26db ahead_by=103 behind_by=0; fdb9a4880 ahead_by=101 behind_by=0. Parent already showed both diverged from v2026.817.0.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Operator-installable stable did not move. The two parent main-unreleased security-class merges did reach tags: they are in beta 2026.818.0-beta.1 and nightly 2026.820.0-nightly.0. They are still not in v2026.817.0.

**Operator consequence.** `npx paperclipai@latest` is still v2026.817.0. If you need the review-policy verdict lock or the inert-argv CLI guidance, pin `@beta` (2026.818.0-beta.1 / 664052f) or `@nightly` (2026.820.0-nightly.0 / 5a1ce7ae), not latest.

## 2. Namespaced canary and nightly tags kept publishing on 18, 19, and 20 August

- **Date:** 2026-08-18 through 2026-08-20
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** matching-refs lengths, computed: canary 817=16 (parent overlap), 818=17 (parent last was canary.7; nine new after that), 819=10, 820=7. Nightly: 817=1, 818=2, 819=1, 820=1. In-window new canary tags are the 818/819/820 set (34). Nightly 818-820 add 4. matching-refs/tags/beta/ now 3 refs (parent had 2): new `beta/v2026.818.0-beta.1`. Tags under 821 are 2026-08-21, OUT. The flat `repos/.../tags` listing still omits slash-prefixed names.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
- **Half:** neither | **Confidence:** high that the train ran

**What changed.** The four-channel train parent recorded did not go quiet. Canary, nightly, and a second 818 beta kept moving. Stable did not.

**Operator consequence.** Do not re-report the canary lane as dead. Query `refs/tags/canary/`, `refs/tags/nightly/`, `refs/tags/beta/` or npm dist-tags. A GitHub Releases page that shows only v2026.817.0 is working as designed, not as a complete channel map. Do not install canary as if it were stable. Observation npm canary=2026.821.0-canary.12 is the next day.

## 3. Site and docs now name v2026.817.0; the install guide still omits the lanes

- **Date:** observed 2026-08-21; parent 2026-08-18 fetch still showed v2026.722.0. Deploy timestamp of the catch-up is not independently receipted.
- **Channel:** `docs-only`
- **Ancestry evidence:** https://paperclip.ing/ now says "Latest release v2026.817.0 is live (August 17, 2026)". https://docs.paperclip.ing/reference/changelog/ leads with docs for v2026.817.0. https://docs.paperclip.ing/guides/getting-started/installation/ still teaches bare `npx paperclipai` with no @beta/@nightly/@canary.
- **Receipt:** https://docs.paperclip.ing/reference/changelog/
- **Half:** neither | **Confidence:** high that the pages now say 817.0; medium that the move landed inside this window rather than on 2026-08-21

**What changed.** Parent finding that both public surfaces still sold 722.0 is no longer true on the version number. The install guide still does not describe the four-channel contract.

**Operator consequence.** Site/docs are current on the stable version string. They are still not canonical for which lane you are on. npm dist-tags remain the channel source.

## Researcher lane notes

Parent correction finding (canary never dormant) remains the handling rule. This window is the first subsequent check: the lane was still there, and the parent security pair reached named prerelease tags. 821 canaries OUT.

## Surfaces checked

- GitHub releases (tip v2026.817.0)
- git/matching-refs tags/canary/v2026.817-821, nightly/, beta/, v2026.8
- gh compare 57edb26db and fdb9a4880 vs beta/v2026.818.0-beta.1 and nightly/v2026.820.0-nightly.0
- npm dist-tags for paperclipai
- paperclip.ing homepage and docs changelog / install guide
