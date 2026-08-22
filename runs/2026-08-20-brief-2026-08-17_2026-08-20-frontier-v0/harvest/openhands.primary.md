---
schema_version: bitter.frontier_harvest.v0
provider: openhands
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/openhands.yml
channels_present: [main-unreleased]
window_volume: 2 material changes, both unreleased at window close
lane: primary sources, coordinator; v1.14.0 is parent overlap
---

# Harvest -- openhands (primary sources)

Punctuation is ASCII. v1.14.0 published 2026-08-17T21:41:36Z was already harvested by the parent. Not re-litigated.

## 1. The wrong-profile launch fix is still in no in-window tag

- **Date:** 2026-08-20 (observation; merge 2026-08-17)
- **Channel:** `main-unreleased` at window close
- **Ancestry evidence:** Parent merge e9ca71d138a658ea15d930b2be3a5b28c251a7f2 (PR #16523). `gh api .../compare/e9ca71d138a658ea15d930b2be3a5b28c251a7f2...v1.14.0` -> status=behind, behind_by=1: the tag does not contain the commit. `gh api .../compare/e9ca71d138a658ea15d930b2be3a5b28c251a7f2...v1.15.0` -> status=ahead, ahead_by=37, behind_by=0: v1.15.0 contains it. v1.15.0 published_at=2026-08-21T14:01:34Z, which is out of this window. At 2026-08-20 close the operator's newest tag is still v1.14.0.
- **Receipt:** https://github.com/OpenHands/OpenHands/commit/e9ca71d138a658ea15d930b2be3a5b28c251a7f2
- **Half:** defect | **Confidence:** high

**What changed.** Channel only: the parent main-unreleased fix did not reach an in-window release. It is in v1.15.0, which is a day after the window.

**Operator consequence.** Through 2026-08-20, `v1.14.0` still has the silent wrong-profile fallback. Do not tell an operator they are protected because v1.15.0 exists on GitHub after the window. The next cycle can record the tagged-release.

## 2. A related ACP model-pick persist fix landed on main on 2026-08-20, also unreleased

- **Date:** 2026-08-20
- **Channel:** `main-unreleased`
- **Ancestry evidence:** commit 28be38adac "fix: do not silently persist ACP model picks to agent_settings when profile discovery fails (#16701)" dated 2026-08-20T13:12:32Z. `gh api .../compare/v1.14.0...28be38adac` -> ahead_by=30, behind_by=0, status=ahead. Not in v1.14.0. v1.15.0 is out of window.
- **Receipt:** https://github.com/OpenHands/OpenHands/commit/28be38adac
- **Half:** defect | **Confidence:** high

**What changed.** When profile discovery fails, ACP model picks are no longer silently written into agent_settings. Same class as the parent launch fallback: a discovery error must not mutate the durable agent identity.

**Operator consequence.** Same as (1): wait for a tag that contains #16701, or verify the running agent rather than the saved settings.

## 3. v1.14.0 ships a Git Sync page whose bundled automation backend 404s

- **Date:** 2026-08-19 (backend 1.8.0 published; Canvas pin still unreleased)
- **Channel:** UI is `tagged-release` in overlap v1.14.0; working backend pin is `main-unreleased`
- **Ancestry evidence:** Canvas PR #16521 merge 475a7316 is in v1.14.0 (compare ahead, behind_by=0). v1.14.0 config/defaults.json pins versions.automation=1.7.1. Automation PR #327 (git-sync endpoints) is not in 1.7.1 (compare behind_by=3) and is in 1.8.0 (ahead, behind_by=0). Automation 1.8.0 published 2026-08-19T12:03:03Z, prerelease=false. Canvas PR #16712 (pin 1.7.1 -> 1.8.0) merge 61c18c9a is not in v1.14.0 (behind_by=22). Window-close SHA 4a8cabc5 still has automation 1.8.0. v1.14.0 `use-git-sync.ts` treats 404 as unsupported and renders a no-op button.
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/16712
- **Half:** defect | **Confidence:** high

**What changed.** The Git Sync page is in the tag an operator can install. The four endpoints it calls are not in the automation version that tag pins. In-window automation 1.8.0 has the backend; the Canvas pin that installs it is not in v1.14.0.

**Operator consequence.** Do not test Git Sync on v1.14.0 and conclude the product cannot do it. The page is in the tag; the service is not. Wait for a Canvas release that pins openhands-automation 1.8.0 (post-window: v1.15.0 does).

## 4. Home LLM dropdown vs named Agent Profile, provider-connections UI, and PDF sandbox removal are main-only

- **Date:** 2026-08-18 through 2026-08-20
- **Channel:** `main-unreleased`
- **Ancestry evidence:** PR #16671 (be584ade, 2026-08-18) clears effectiveAgentProfileId when the home LLM pill disagrees with the profile pin -- the named profile's non-LLM config does not apply to that launch. Not in v1.14.0. PR #16616 (f2dd3309, 2026-08-19) is a Provider Connections panel; agentServer pin at v1.14.0 and at window-close is still 1.42.1, which does not contain SDK #4492 (`/api/llm/provider-connections`). First SDK tag with that API is v1.43.0, 2026-08-21 OUT. PR #16702 (4c3bb824, 2026-08-20) removes iframe `sandbox="allow-same-origin"` on PDF preview so Chromium's viewer will render. Not in v1.14.0.
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/16671
- **Half:** both | security-relevant (PDF sandbox) | **Confidence:** high on channel; medium on the PDF sniffing rationale (no test in the PR)

**What changed.** Three more control-plane moves on main, none installable. The dropdown-vs-profile change is the opposite of #16523 (profile as a hard gate). Provider connections is the Git Sync shape again: a Canvas surface in front of an API the pinned server does not serve. PDF sandbox removal is a threat-model change, not a tagged hardening.

**Operator consequence.** Ignore for any v1.14.0 install. If you run main, do not treat the home LLM pill as model-only if you used named profiles as tool or permission boundaries, and do not treat PDF preview as sandboxed.

## Researcher lane notes

v1.14.0 GitHub 2026-08-17T21:41:36Z, npm 2026-08-17T21:49:14Z, gitHead matches; the parent's four-day npm hole did not recur. Window-close main is 32 commits ahead of v1.14.0 (tip 4a8cabc5). Overlap coverage gap vs parent: Git Sync UI-without-backend, plus LLM pre-flight #16417 which is in v1.14.0. Capability on main not elevated: catalog script bundles #16680 (needs automation 1.8.0). Enterprise notes exist as docs-only; OpenHands/enterprise 404. No new GHSA.

## Surfaces checked

- GitHub releases v1.14.0 / v1.15.0 (OUT)
- gh compare e9ca71d13 vs v1.14.0 and v1.15.0
- defaults.json at v1.14.0 (automation 1.7.1, agentServer 1.42.1)
- OpenHands/automation 1.7.1 vs 1.8.0 vs PR #327
- PRs #16712, #16671, #16616, #16702, #16523, #16701
- npm @openhands/agent-canvas time and gitHead for 1.14.0
