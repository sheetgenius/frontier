---
schema_version: bitter.frontier_harvest.v0
provider: pi-coding-agent
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/pi-coding-agent.yml
channels_present: [tagged-release, main-unreleased, docs-only]
window_volume: 6 material changes, 3 capability-bearing, 2 defect-bearing, 2 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- pi-coding-agent (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. `defaultTools` makes the built-in tool set configurable per project -- the closest thing Pi has to a permission boundary

- **Date:** 2026-08-12 | **Version:** 0.84.2
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Commit 4d9aa837c2ec6e0ebc7599f7e724c7c19c06441e ("feat(coding-agent): add configurable default tools", authored 2026-08-12T13:26:42Z). `gh api repos/earendil-works/pi/compare/v0.84.2...4d9aa837` returned status=behind, behind_by=24 -- ancestor of the v0.84.2 tag. `gh api repos/earendil-works/pi/compare/v0.84.1...4d9aa837` returned status=ahead, ahead_by=113 -- not in v0.84.1. v0.84.2 is stable: prerelease=false, draft=false, published 2026-08-14T10:14:32Z; npm publish 2026-08-14T10:09:06Z as `latest`.
- **Receipt:** https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/settings.md
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** A new `defaultTools` setting selects which built-in tools are enabled at startup, globally or per project. From docs/settings.md at v0.84.2: "`defaultTools` selects the built-in tools enabled at startup. Extension and SDK custom tools remain enabled... An empty array starts with no built-in tools while preserving extension and SDK custom tools. A project `defaultTools` array replaces the global array." It composes with the existing flags: `--tools` imposes a strict allowlist across all tools, `--no-tools` disables everything, `--no-builtin-tools` drops the built-in defaults, `--exclude-tools` filters the result. The same release fixed a first-cut bug where `defaultTools` dropped extension and SDK custom tools when selecting built-in defaults (commit 541045ae, 2026-08-12).

**Operator consequence.** Try it, and reach for it deliberately if you run Pi over repositories you do not control. Pi ships no sandbox and no permission prompts by design -- docs/security.md at v0.84.2 states plainly that "Built-in tools can read files, write files, edit files, and run shell commands with the permissions of the pi process." Until now, narrowing that surface meant remembering a CLI flag on every invocation. `defaultTools` moves it into `settings.json`, including per-project, so a repo where the agent should read and edit but never spawn a shell can be configured once with `["read", "edit", "write"]`. This is the single most useful new lever in the window for anyone who has been asking Pi for a permission model.

## 2. Experimental strict JSON-schema constrained sampling for the default read, bash, edit, and write tools

- **Date:** 2026-08-11 | **Version:** 0.84.2
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Commit 7915cdac64abdb5fe8674d017e69f8c4f3bf6ff9 ("feat(ai): add strict tool schema conversion", authored 2026-08-11T09:32:32Z). `gh api repos/earendil-works/pi/compare/v0.84.2...7915cdac` returned status=behind, behind_by=53 -- ancestor of the stable v0.84.2 tag (prerelease=false). Listed under Added in the v0.84.2 release body and in packages/coding-agent/CHANGELOG.md at that tag.
- **Receipt:** https://github.com/earendil-works/pi/releases/tag/v0.84.2
- **Half:** capability | **Confidence:** high

**What changed.** v0.84.2 adds "experimental strict JSON-schema constrained sampling for the default `read`, `bash`, `edit`, and `write` tools under `PI_EXPERIMENTAL=1`." Related in the same release: `createGatewayBindingFetch()` for routing Cloudflare AI Gateway requests through a Workers AI binding without an API token (PR #7901, @Maximo-Guk), and a change to OpenAI Responses deferred tool loading to prefer message-anchored `additional_tools` where the provider supports it, retaining tool-search and top-level fallbacks (#7709).

**Operator consequence.** Watch, and test behind the flag if malformed tool arguments are costing you turns. Constrained decoding on the four tools an agent uses most is the direct attack on the failure mode where a model emits an `edit` call that will not parse and burns a round trip. It is gated behind `PI_EXPERIMENTAL=1` and labelled experimental, so it is not a production recommendation this week -- but it is the thing to re-test at the next release if your loop wastes calls on schema violations. Provider support varies, which is why it is opt-in.

## 3. The v0.84.0 streaming rewrite dropped cumulative usage from JSON and RPC events for eight days

- **Date:** 2026-08-14 | **Version:** 0.84.2
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Listed under Fixed in the v0.84.2 release body, referencing PR #7982 by @christianklotz. v0.84.2 is a stable tag at sha 914cf1472e715297caa30db4b9535d534a9eb718 (gh api repos/earendil-works/pi/tags), prerelease=false and draft=false per gh api repos/earendil-works/pi/releases, published 2026-08-14T10:14:32Z. The regression it repairs was introduced by the v0.84.0 `message_update` change (a4475344, ancestor of v0.84.0 per the compare above).
- **Receipt:** https://github.com/earendil-works/pi/pull/7982
- **Half:** defect | **Confidence:** high

**What changed.** "Fixed JSON and RPC `message_update` events dropping cumulative usage during streaming." When v0.84.0 stripped the cumulative `message` and `assistantMessageEvent.partial` fields to kill the quadratic output problem, it also took running usage figures with them. From v0.84.0 (2026-08-06) through v0.84.1 to the v0.84.2 fix (2026-08-14), clients reading token usage off the streaming event feed saw nothing until the turn completed. The same release also fixed `pi.sendMessage(..., { triggerTurn: false })` steering an active run instead of only recording the custom message (PR #8022, @cristinaponcela), and custom system prompts concatenating the working directory with later appended prompt content (PR #7887, @distributedlock).

**Operator consequence.** Upgrade to 0.84.2 and skip 0.84.0/0.84.1 if you meter tokens off the stream. This is the honest shape of the breaking change above: a fix for a real OOM shipped with a collateral gap in the same event, caught by an outside contributor eight days later. If you built cost dashboards or budget cutoffs on streaming usage and upgraded to 0.84.0 or 0.84.1, your numbers were blank mid-turn, not wrong -- but a budget guard that reads zero does not fire.

## 4. Transitive nanoid dev dependency bumped for a high-severity DoS -- build-time only, not shipped

- **Date:** 2026-08-14 | **Version:** 0.84.2
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Commit 6633618350a9d9ea91fdc11668442e771869a56f ("fix(coding-agent): update vulnerable nanoid dependency", authored 2026-08-14T08:09:35Z). `gh api repos/earendil-works/pi/compare/v0.84.2...66336183` returned status=behind, behind_by=12 -- ancestor of the stable v0.84.2 tag. The commit's own diff touches only package-lock.json (nanoid 3.3.17 to 3.3.18, entry marked `"dev": true`) and CHANGELOG.md.
- **Receipt:** https://github.com/earendil-works/pi/commit/6633618350a9d9ea91fdc11668442e771869a56f
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** v0.84.2 notes "Updated the transitive `nanoid` development dependency to address a denial-of-service vulnerability." The two matching advisories in the GitHub advisory database, both published 2026-07-29 and both rated high, are GHSA-28wg-ghj8-5hjv (nanoid non-secure generators can loop indefinitely with negative size) and GHSA-2v37-7h3g-55p8 (nanoid custom generators can loop indefinitely when size is zero). The vulnerability class is denial of service: an unbounded loop, reachable only if attacker-influenced values reach nanoid's size argument. Pi's lockfile entry for nanoid is marked `"dev": true`, so the package is not part of the published runtime tree. An earlier bump to 3.3.17 landed on 2026-08-08 (commit 5ac91336) and this commit takes it to 3.3.18. Pi's own repository security advisories -- GHSA-7v5m-pr3q-6453, GHSA-r95r-rj6r-c39x, GHSA-jfgx-wxx8-mp94, GHSA-mqxh-6gq7-558m -- were all published 2026-06-08 and none was updated in this window.

**Operator consequence.** Ignore for runtime purposes; note it for supply-chain hygiene. nanoid is a development dependency in Pi's lockfile, so an operator running `@earendil-works/pi-coding-agent` does not ship it and is not exposed. This matters only if you build Pi from source in CI and your scanner flags the lockfile. It is worth saying plainly rather than dressing up: the only security-labelled line in three releases is a dev-tree bump, and Pi published no new advisory of its own this window.

## 5. Compaction failures now raise an extension event -- on main, in no tag

- **Date:** 2026-08-17 | **Version:** unreleased (post-0.84.2)
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** Commit a6b1dbceb1af5bf8a21da0b437ef756ce9fe85e6 ("fix(extensions): emit compaction failed for extensions (#8241)", authored 2026-08-17T11:10:08Z). `gh api repos/earendil-works/pi/compare/v0.84.2...a6b1dbce` returned status=ahead, ahead_by=22 -- the commit is AHEAD of the newest tag, therefore in no tag. It is reachable from the default branch: `gh api repos/earendil-works/pi -q .default_branch` returns `main`, and the commit appears in `gh api repos/earendil-works/pi/compare/v0.84.2...main`. The CHANGELOG at main sha 9117326b lists it under [Unreleased], not under any released version.
- **Receipt:** https://github.com/earendil-works/pi/commit/a6b1dbceb1af5bf8a21da0b437ef756ce9fe85e6
- **Half:** capability | **Confidence:** high

**What changed.** The [Unreleased] section of packages/coding-agent/CHANGELOG.md at main sha 9117326b records: "Added `session_compact_failed` extension events so compaction failures and aborts expose their reason, retry state, source, and error message to handlers (#8175)." Alongside it on main and in no tag: `pi update` no longer treats older registry versions as available updates, which had let it downgrade an already-newer installed package (#8226, commit 080932e53cb6f82076b111efc424845e4d5c1902); root-level `README.md` and `AGENTS.md` in a skill directory are no longer misread as broken skills and no longer emit warnings (#8012, commit 8c2529daebe0eac5aecb54424b607b4c88d55e15); `pi.registerFlag()` no longer accepts default values that mismatch the declared flag type (#8064); and compaction routing sessions landed as commit 58302d34e703e0453ea13bdd10c7e423589ce177 without a changelog line at time of writing.

**Operator consequence.** Watch; do not plan around it yet. None of this is installable -- `npm dist-tags` for @earendil-works/pi-coding-agent still points `latest` at 0.84.2, published 2026-08-14. The `session_compact_failed` event is the one to track if you build extensions: today a compaction failure is silent to your handlers, so an extension that maintains its own view of session state has no way to know the context was not compacted and why. When it ships, that becomes observable. The `pi update` downgrade bug is the practical one -- if you installed a version newer than the registry's and ran `pi update`, it moved you backwards.

## 6. `AI_AGENT=pi` documented as a process marker distinct from `PI_CODING_AGENT=true`

- **Date:** 2026-08-14 | **Version:** 0.84.2
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** The change is a documentation edit with no code channel: issue #7747 asks only to "Add a short AI_AGENT=pi entry to the Process Marker section," noting the variable itself was added earlier by #7493 and was already documented in the coding-agent README. Listed under Changed in the v0.84.2 release body as "Documented the generic `AI_AGENT=pi` process marker." The resulting text is visible in docs/environment-variables.md at the stable v0.84.2 tag.
- **Receipt:** https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/environment-variables.md
- **Half:** neither | **Confidence:** high

**What changed.** docs/environment-variables.md at v0.84.2 now reads: "`AI_AGENT=pi` is a generic marker that lets tooling identify Pi as the agent that launched the process. `PI_CODING_AGENT=true` is Pi-specific and lets child processes detect that they run inside Pi. Child processes inherit both markers. They are not session-specific and are not set automatically when Pi is embedded through the SDK."

**Operator consequence.** Observe, and use it if you gate CI or shell behaviour on whether an agent is driving. Two facts in that paragraph are worth extracting because they are easy to get wrong: both markers are inherited by child processes, so anything Pi spawns can see them and so can anything that spawns from there; and neither is set when Pi is embedded via the SDK, so a guard written as `if [ -n "$PI_CODING_AGENT" ]` silently fails open in SDK-embedded runs. These are markers for cooperative tooling, not a trust signal -- nothing prevents a process from setting them itself.

## Researcher lane notes

SOURCE MOVED HARD. Three stable releases landed in the window: v0.84.0 (2026-08-06, w1), v0.84.1 (2026-08-07, w1), v0.84.2 (2026-08-14, w2). All three are non-prerelease and non-draft per the releases API, all three are on npm, and `latest` is 0.84.2 published 2026-08-14T10:09:06Z. The default branch is 36 commits ahead of v0.84.2 as of 2026-08-17, so a fourth release is clearly in flight but nothing in it is installable.

ANCESTRY METHOD. Every tagged-release claim was resolved with `gh api repos/earendil-works/pi/compare/<tag>...<sha>` and reported by status/ahead_by/behind_by, not by date. status=behind means the sha is an ancestor of the tag; status=ahead means it is not in that tag. Where I could only anchor a claim to a release body, I said so in channel_evidence rather than implying a commit-level proof. The one main-unreleased entry is proven by ahead_by=22 against v0.84.2 plus presence in the v0.84.2...main compare, with the default branch confirmed as `main`.

BOTH HALVES PRESENT. Capabilities: AGENTS.override.md, `defaultTools`, `pi auth check`, tool_call `terminate`, strict-schema constrained sampling, fullscreen TUI, two new providers, `expandPromptTemplates`. Defects: the JSON-mode OOM, the Cloudflare gateway egress bug, the bunfig preload crash, the mid-run `Agent.reset()` corruption, the usage-dropping regression, the nanoid dev bump. Two entries are marked "both" because the same commit fixed a defect by breaking an interface.

ONE ARC WORTH THE EDITOR'S ATTENTION. The `message_update` story runs across the whole window and is unusually clean: a user files #7290 with measurements showing `--mode json` emits 165 MB for a 19 KB file and OOM-kills the agent around 99 KB; the fix (a4475344, 2026-08-03) strips the cumulative fields and ships in v0.84.0 as a breaking change; the same strip silently drops cumulative usage from the event feed; an outside contributor catches it and PR #7982 lands in v0.84.2 eight days later. Fix, collateral, repair -- all receipted, all in one two-week window.

WHAT I COULD NOT DO. The carry-forward answer is a source-and-docs reading, not a reproducible local probe. I am read-only and did not install Pi or run `pi auth print-api-key` from inside an agent session. The evidence is the absence of gating code in auth-command.ts, main.ts, and core/tools/bash.ts at the v0.84.2 tag, plus Pi's own security.md disclaiming any sandbox. That is strong but it is negative evidence about code, and a live probe would be better. Flagging it rather than papering over it.

TWO SMALLER GAPS. (1) The compaction-routing commit 58302d34 (2026-08-17, main) changes src/core/compaction/compaction.ts but carries no CHANGELOG line at the shas I checked, so I could not characterise its operator-facing behaviour from a primary source and did not guess at it -- I noted its existence only. (2) pi.dev renders no version number, so the site could be checked for positioning (still "minimal agent harness... Adapt Pi to your workflows, not the other way around", four modes, 15+ providers) but not used to corroborate any release claim. Marketing-versus-substance separation held: nothing in this report stands on the landing page.

NO NEW ADVISORIES. Pi's four published GHSAs all date to 2026-06-08 and none was updated in the window. The only security-labelled release line is the transitive nanoid dev-dependency bump, and its lockfile entry is marked `"dev": true` -- so it is a build-tree issue, not a runtime exposure, and I graded the operator consequence as ignore rather than inflating it.

FORK BOUNDARY RESPECTED. can1357/oh-my-pi and @oh-my-pi/pi-coding-agent were never fetched or read. No omp behaviour is attributed to Pi anywhere in this report.

## Surfaces checked

- GitHub releases: https://github.com/earendil-works/pi/releases (all releases enumerated via gh api repos/earendil-works/pi/releases --paginate)
- GitHub tags: gh api repos/earendil-works/pi/tags --paginate
- Default-branch commits: gh api repos/earendil-works/pi/compare/v0.83.0...v0.84.2 and v0.84.2...main
- CHANGELOG (packages/coding-agent/CHANGELOG.md) pinned at v0.84.2 and at main sha 9117326b
- Docs at v0.84.2: security.md, usage.md, settings.md, providers.md, extensions.md, environment-variables.md, tui.md
- Docs diff v0.83.0 vs v0.84.2: security.md, usage.md
- Source at v0.84.2: src/cli/auth-command.ts, src/main.ts, src/core/tools/bash.ts, test/credential-print.test.ts
- GitHub security advisories: gh api repos/earendil-works/pi/security-advisories (4 advisories, all published 2026-06-08, none in window)
- GitHub advisory DB for nanoid: gh api /advisories?ecosystem=npm&affects=nanoid
- npm registry: https://registry.npmjs.org/@earendil-works/pi-coding-agent (dist-tags + publish times)
- Official site: https://pi.dev/
- Issues/PRs read: #7030, #7290, #7681, #7747, #8012, #7152
