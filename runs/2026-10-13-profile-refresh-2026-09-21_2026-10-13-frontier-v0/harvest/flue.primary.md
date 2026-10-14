---
schema_version: bitter.frontier_harvest.v0
provider: flue
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/flue.yml
channels_present: [tagged-release, preview-or-beta]
window_volume: 19 default-branch commits after the parent's close (2026-09-22..2026-10-12, 4 of them release-bot commits; main == v2.3.0, 0 ahead); 5 stable npm versions (2.1.1, 2.2.0, 2.2.1, 2.2.2, 2.3.0) and 2 prereleases (2.2.0-next.0, 2.2.0-next.1); 7 commits on unmerged branches; 17 numbered observations, 5 capability-bearing, 16 defect-bearing
lane: primary sources, profile-refresh researcher
---

# Flue primary-source harvest

Punctuation is ASCII. Pin tags and SHAs, not main. Identity: `gh api repos/withastro/flue` -> full_name withastro/flue, owner withastro, description "The sandbox agent framework.", default_branch main, license Apache-2.0, 8,455 stars (8,347 on 2026-09-23), 508 forks, pushed_at 2026-10-12T18:48:59Z. The npm packages `@flue/runtime`, `@flue/cli`, `@flue/sdk`, `@flue/vite` and the other 24 `@flue/*` packages declare homepage https://flueframework.com/ and are versioned from this repo. Read through a blobless clone and two read-only worktrees (v2.3.0 and @flue/runtime@2.2.2) in scratch; nothing was installed, built or executed. Published tarballs were downloaded and only listed or grepped. Baseline: the parent harvest ended at @flue/runtime@2.1.0 (2026-09-18) with main 7 ahead.

## Install today

- **Newest stable: 2.3.0, published to npm 2026-10-12T18:49:54Z** (`@flue/runtime`; the core packages landed between 18:46:54Z and 18:50:24Z). Install the set you use at one exact version, for example `npm install @flue/runtime@2.3.0 @flue/vite@2.3.0 @flue/cli@2.3.0` (add `@flue/sdk`, `@flue/react`, `@flue/opentelemetry` as needed). Git ref: lightweight tag `v2.3.0` on commit deee93b4. There is no GitHub Release object for it (`gh api repos/withastro/flue/releases/tags/v2.3.0` -> 404). The release note is the root CHANGELOG at the tag. Receipts: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L3-L16, https://www.npmjs.com/package/@flue/runtime/v/2.3.0, https://registry.npmjs.org/@flue%2Fruntime/2.3.0, https://github.com/withastro/flue/commit/deee93b40d275ecc9a50c50af2158f20089d54bc
- **npm dist-tags, observed 2026-10-13:** `latest=2.3.0`, `next=2.2.0-next.1` on `@flue/runtime`, `@flue/cli`, `@flue/sdk`, `@flue/vite`, `@flue/react`, `@flue/opentelemetry`. `next` is older than `latest` and sits on a dormant branch with its own prerelease tooling intact (section 7). No version in the 2.x line is deprecated on npm, including the uninstallable 2.0.4.
- **GitHub Latest marker:** GitHub's Latest release is still `@flue/cli@2.2.2` (2026-09-28); release watchers on GitHub see 2.2.2 as current (section 14). Receipt: https://github.com/withastro/flue/releases/tag/%40flue%2Fcli%402.2.2
- **Provenance:** 2.3.0 has no npm provenance attestation and was published from a maintainer's personal npm account. 2.2.2 is the newest attested version (section 2).
- **Main:** origin/main == v2.3.0. `gh api repos/withastro/flue/compare/v2.3.0...main` -> status identical, ahead_by 0. Nothing is main-unreleased. Receipt: https://github.com/withastro/flue/compare/v2.3.0...main
- **Preview:** 2.2.0-next.0 and 2.2.0-next.1 (GitHub Releases prerelease=true, 2026-09-25) live only on the `next` branch, which is not an ancestor of main. They carry Cloudflare Sandbox output streaming (`onOutput`) that no stable has; it also shipped in 2.1.0-next.0 and 2.1.0-next.1 before this window (section 7).
- **Branch-only, in no release and not on main:** `feat/cloudflare-streaming` (last commit 2026-09-23), `feat/cloudflare-coordinator-on-state-machine` (2026-09-21).
- **Unmerged branches superseded by released content:** `fix/754-docs-404s` (2026-09-23; its removal of the dangling smolvm entry from apps/ecosystem-catalog.ts shipped by content in deee93b4), and `florian-lefebvre/Pi-v1` (2026-10-09; superseded by 2.3.0). Receipt: https://github.com/withastro/flue/commit/deee93b40d275ecc9a50c50af2158f20089d54bc
- **Dependencies that move under you:** `@flue/runtime@2.3.0` depends on `@earendil-works/pi-ai` and `@earendil-works/pi-agent-core` at `^1.1.0`, which resolves to Pi 1.2.0 today (published 2026-10-12T23:01:40Z, about four hours after Flue 2.3.0) (section 3). `@flue/vite` pins the Cloudflare `agents` SDK at `^0.20.1` while that SDK's npm latest is 0.28.0 (2026-10-09). The Cloudflare Sandbox blueprint installs `@cloudflare/sandbox@^0.11.0` while that package's latest is 1.0.0, an incompatible API (section 8).
- **Defaults and opt-ins the profile discusses, at 2.3.0:** trace content is ON unless `content: false` (section 9). Anthropic prompt caching on the Cloudflare binding is opt-in (`cacheRetention`, default `'none'`, since 2.0.8). Skill `allowed-tools` is not enforced (section 10). MCP tool annotations are carried and never acted on. Approval is a documented pattern, not an API (section 11). An agent has no sandbox unless `useSandbox()` attaches one, and the virtual sandbox needs `just-bash` added by you. `flue init --target cloudflare` now writes the Workers AI binding commented out, because it reaches your Cloudflare account even in local dev (CHANGELOG L15).

## Release ledger

Stable = non-prerelease npm version. Each changesets cut from 2.0.7 to 2.2.2 created one GitHub Release per package (28 per cut). Count one cut, not 28 releases. 2.3.0 created no release objects and no per-package tags, only `v2.3.0`. ahead/behind from local `git rev-list --count`, cross-checked with `gh api compare` where noted.

| Tag | Published (UTC) | Prerelease | ahead_by / behind_by vs previous stable | npm publish @flue/runtime (UTC) |
|---|---|---|---|---|
| @flue/runtime@2.1.0 (baseline) | 2026-09-18T21:08:11Z | false | 8 / 0 vs 2.0.8 | 2026-09-18T21:09:29Z |
| @flue/runtime@2.1.1 | 2026-09-23T19:33:30Z | false | 9 / 0 vs 2.1.0 | 2026-09-23T19:35:18Z |
| @flue/runtime@2.2.0-next.0 | 2026-09-25T17:41:53Z | true | 15 / 0 vs 2.1.1; `next` branch only, not an ancestor of main | 2026-09-25T17:43:09Z |
| @flue/runtime@2.2.0-next.1 | 2026-09-25T19:16:48Z | true | 18 / 0 vs 2.1.1; `next` branch only | 2026-09-25T19:18:54Z |
| @flue/runtime@2.2.0 | 2026-09-28T17:42:31Z | false | 8 / 0 vs 2.1.1 | 2026-09-28T17:46:51Z |
| @flue/runtime@2.2.1 | 2026-09-28T20:01:41Z | false | 2 / 0 vs 2.2.0 | 2026-09-28T20:02:58Z |
| @flue/runtime@2.2.2 | 2026-09-28T20:37:27Z | false | 2 / 0 vs 2.2.1 | 2026-09-28T20:39:08Z |
| v2.3.0 (lightweight tag, no GitHub Release) | none; tag commit 2026-10-12T18:48:06Z | n/a (npm `latest`) | 2 / 0 vs 2.2.2 (API compare: ahead, 128 files); 23 / 0 vs 2.1.0 | 2026-10-12T18:49:54Z |

Three stables shipped within three hours on 2026-09-28 (2.2.0, 2.2.1, 2.2.2). After that, public main took no commit until 2026-10-12.

## 1. 2.3.0 returns Flue to export-style releases: squashed commits from a source tree not on GitHub, a plain v-tag, the root CHANGELOG, and no GitHub Release

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** Main gained exactly 2 commits after @flue/runtime@2.2.2 (`rev-list` 2/0; API compare status ahead): 95a8c862 "chore: remove Changesets release tooling" (2026-10-12T07:21:15Z, footer "Source: c07d4644...") and deee93b4 "v2.3.0" (2026-10-12T18:48:06Z, footer "Source: e2268410..."). Neither Source SHA exists in the public repo (`gh api repos/withastro/flue/commits/<sha>` -> 422 "No commit found"; `git fetch` -> "not our ref"). The same footer is on 6 earlier release commits from v2.0.0-nightly.202607240825 to v2.0.3, all pointing at SHAs absent from the public repo. v2.0.4's footer points at public commit 834fa880, and public PR development ran from there to 2.2.2. 95a8c862 removes `.changeset/`, `.github/workflows/release.yml`, all 28 `packages/*/CHANGELOG.md`, `scripts/build-docs.mjs`, `scripts/smoke-test-package-docs.mjs`, the CONTRIBUTING "Publishing" section and 27 test files (112 files, 7,851 deletions). `.gitignore` now names `scripts/prepare-publish.mjs`, which is not in the public tree. Public test files (`*.test.*`, `*.test-d.*` via `git ls-tree`): 147 at v1.0.0-beta.9, 0 at v2.0.0, v2.0.3, v2.0.4 and v2.0.6, 10 at 2.0.7, 29 at 2.2.2, 2 at v2.3.0 (both in packages/react). PR #832 "Update Pi to v1" was closed unmerged; the maintainer's closing comment (2026-10-12T07:41:59Z) says it "has been implemented, will release in the next minor release".
- **Receipt:** https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150, https://github.com/withastro/flue/commit/deee93b40d275ecc9a50c50af2158f20089d54bc, https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L3-L16, https://api.github.com/repos/withastro/flue/issues/832/comments, https://github.com/withastro/flue/issues/764, https://github.com/withastro/flue/discussions/855, https://github.com/withastro/flue/discussions/844, https://github.com/withastro/flue/discussions/840, https://github.com/withastro/flue/discussions/843, https://github.com/withastro/flue/discussions/842, https://github.com/withastro/flue/issues/602
- **Half:** defect | **Confidence:** high

**What changed.** Four weeks after adopting Changesets (2.0.7, 2026-09-15), Flue dropped it. 2.3.0 reached the public repo as two squashed commits generated elsewhere. It has no per-change history, no PR and no GitHub Release, and the root CHANGELOG.md is the only release note (it again carries 2.0.7 through 2.3.0). The CHANGELOG does not mention the process change. Two behavior fixes rode inside the commit titled "chore: remove Changesets release tooling": the finish-hook re-render in session.ts (section 6) and narrowed exports in document-attachments.ts. The public tree no longer holds the runtime, SDK, OpenTelemetry or Vite tests for the contracts the profile leans on: abort.test.ts, session-abort.test.ts, truncated-tool-call.test.ts, harness-tool-lineage.test.ts, tool-deadline.test.ts, mcp.test.ts, telemetry/content.test.ts and observe-bounded.test.ts are all gone. On 2026-10-12, between 06:59Z and 07:53Z, the lead maintainer closed 23 issues: 14 were converted to Discussions (feature requests, including conversation data deletion #764 -> discussion #855, submission retry #787 -> #844, bounded history in `@flue/react` #807 -> #840, LINE #798 -> #843 and WeChat #799 -> #842), 8 were fixed in 2.2.0 or 2.3.0, and 1 (#602) was closed as not reproducible. GitHub labels all 23 "completed". Two closed issues were re-filed the same day as new open issues (#744 as #851, #669 as #850); #744 also became discussion #847. Feature requests continue in Discussions, where #855 (deletion for retention or erasure) remains open. CONTRIBUTING.md at v2.3.0 (no-PR policy unchanged in the window) describes the project as an experiment in which agents implement and a small team decides.

**Operator consequence.** Track Flue by its `v` tags and the root CHANGELOG at each tag. GitHub Releases and per-package changelogs have stopped, and the per-package files no longer exist. An issue closed as "completed" is not evidence that anything shipped; feature requests now live in Discussions, including open deletion request #855. Per-change public commits and regression tests no longer cover the runtime contracts here, so inspect the release diff and run your own tests for the contracts you depend on: abort repair, tool timeouts, trace redaction, history windows. The verification work that public PRs and CI used to do now falls on you. Commit ancestry, which this watchlist uses to resolve channels, now resolves only to whole releases for Flue.

## 2. 2.3.0 carries no npm provenance: published from a maintainer account, not the CI trusted publisher that signed 2.0.7 to 2.2.2

- **Date:** 2026-10-12
- **Channel:** `tagged-release` (registry fact)
- **Ancestry evidence:** Registry document for @flue/runtime@2.2.2: `_npmUser` "GitHub Actions" with `trustedPublisher`, and `dist.attestations` present. The decoded SLSA v1 statement names workflow `.github/workflows/release.yml` on refs/heads/main and source commit 658325942b0f, the @flue/runtime@2.2.2 tag. The attestations endpoint returns 200 for 2.2.2 and 404 for 2.3.0. @flue/runtime@2.3.0: `_npmUser` is a personal account (fredkschott), no `trustedPublisher`, no `dist.attestations`. The same holds for @flue/cli, sdk, vite, react, opentelemetry, slack and postgres at 2.3.0 (runtime plus 7 other packages spot-checked). Earlier history: 2.0.0 and 2.0.3 (same personal account), 2.0.4 and 2.0.6 (another maintainer's account), all without provenance. Every @flue/runtime stable from 2.0.7 to 2.2.2 (2.0.7, 2.0.8, 2.1.0, 2.1.1, 2.2.0, 2.2.1, 2.2.2) was published by GitHub Actions with SLSA provenance, as were cli, sdk, vite, opentelemetry, react and slack at 2.2.2. The workflow that produced it (release.yml) was deleted from main in 95a8c862; the next branch retains its own workflow (section 7).
- **Receipt:** https://registry.npmjs.org/@flue%2Fruntime/2.3.0, https://registry.npmjs.org/-/npm/v1/attestations/@flue%2fruntime@2.2.2, https://github.com/withastro/flue/blob/658325942b0f4eecd888f9698ab0bebb3b749163/.github/workflows/release.yml
- **Half:** defect | **Confidence:** high

**What changed.** From 2.0.7 to 2.2.2, every `@flue` package checked carried a signed statement tying the tarball to a public commit and a public workflow. 2.3.0 does not. Spot checks found the 2.3.0 tarballs well-formed. There are no raw `workspace:` specifiers (the 2.0.4 failure). Bundled docs are present in cli, runtime and sdk, 95 files each as in 2.2.2 (the 2.0.5 failure). The runtime dist contains the finish-hook early return that the public v2.3.0 source adds and 2.2.2 lacks. That is a consistency check, not a reproducible build.

**Operator consequence.** If your install policy requires provenance, or your CI verifies attestations, 2.3.0 fails it, and the newest attested version is 2.2.2, which carries the regressions in section 6. Otherwise, pin 2.3.0 exactly and keep lockfile integrity hashes, and recognize that the registry supplies no signed linkage to the public build workflow for this release. The next release's registry document settles it: look for `trustedPublisher` and `dist.attestations`.

## 3. 2.3.0 moves Flue onto Pi 1.x: Azure provider id renamed, tool durations redefined, and the Pi dependency now floats across minors

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** packages/runtime/package.json at v2.3.0 L87-L88: `"@earendil-works/pi-agent-core": "^1.1.0"`, `"@earendil-works/pi-ai": "^1.1.0"` (at 2.2.2, L88-L89: `^0.87.1`). providers.ts at v2.3.0 L94 maps provider `azure` (was `azure-openai-responses`) to telemetry name azure.ai.openai. Published pi-ai tarballs: 0.99.0 and 1.0.0 ship `dist/providers/azure-openai-responses.js`; 1.1.0 and 1.2.0 ship `dist/providers/azure.js`. npm: pi-ai 1.0.0 on 2026-10-01T19:12:18Z, 1.1.0 on 2026-10-07T22:12:08Z, 1.2.0 on 2026-10-12T23:01:40Z (pi-agent-core 1.2.0 at 22:59:50Z); dist-tag latest=1.2.0. Pi's GitHub Release v1.0.0: 2026-10-01T19:20:55Z, prerelease false. session.ts at v2.3.0 L2201 and L2606 take turn and tool `durationMs` from Pi's events.
- **Receipt:** https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L5-L7, https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/package.json#L87-L88, https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/runtime/providers.ts#L90-L100, https://github.com/earendil-works/pi/releases/tag/v1.0.3, https://github.com/earendil-works/pi/releases/tag/v1.1.0, https://github.com/earendil-works/pi/releases/tag/v1.2.0
- **Half:** both | **Confidence:** high

**What changed.** Flue gets model resolution and its agent loop from Pi, which this watchlist profiles separately as `pi-coding-agent`. 2.3.0 sets the minimum Pi version to 1.1.0. Claude Sonnet 5.5, Claude Haiku 5.5 and GPT-6.1 Sol now resolve with no configuration. Pi renamed the Azure provider from `azure-openai-responses` to `azure` in its 1.0.3 patch (2026-10-05); Flue users meet it in 2.3.0, the first Flue release on Pi 1.x. It breaks old model specifiers and `providers` config entries; the `AZURE_OPENAI_*` variables are unchanged. Tool and turn `durationMs` now come from Pi's monotonic timing, so a tool's duration no longer includes Flue's hooks or result storage. The dependency range widened: `^0.87.1` admitted only 0.87.x patches, while `^1.1.0` admits any 1.x, so a fresh install at the window close can pair Flue 2.3.0 with Pi 1.2.0. That pair was not behaviorally tested in this research. Pi 1.2.0's Fixed list changes pi-ai behavior too: retry once with preferred tools non-strict when Anthropic rejects the strict tool set, retry an upstream-provider error as transient, and apply the Mistral timeout only while waiting for response headers. 2.3.0 also deletes Flue's own workaround for AI Gateway Claude ids because Pi fixed its catalog upstream (section 6). That is scaffolding removed once the layer underneath caught up.

**Operator consequence.** Azure users: rename specifiers and config entries to `azure` before upgrading, or the model will not resolve. Dashboards that track tool latency will show a step down at 2.3.0 that is a change of definition, not a speedup. Lock pi-ai and pi-agent-core at 1.1.0 through a lockfile or overrides if you want the declared minimum pair. A patch-only range would not guarantee compatibility either: Pi's Azure rename already broke provider ids in a patch. Fresh installs may pick up Pi's provider fixes without any new Flue release, so record and test the resolved pair. For this reason, 2.0.3 moved the Cloudflare `agents` range inside `@flue/vite`; Flue's core dependency now floats across a broader line.

## 4. 2.3.0 makes the local sandbox actually kill a timed-out command's whole process group

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** deee93b4 (v2.3.0) changes packages/runtime/src/node/local-env.ts. At 2.2.2, `onAbort` stored the SIGKILL timer and `settle()` cleared it (L96-L105 at 658325942b). At v2.3.0 the SIGKILL is scheduled unconditionally on abort (L95-L98) and `settle()` leaves it armed (L100-L107). KILL_GRACE_MS = 2000 (L20). Issue #809 (opened 2026-10-02 by an outside user, closed 2026-10-12) reproduced it on 2.2.2: a child that ignored SIGTERM and held no shell pipes wrote a file after `exec()` had returned exit 124. Same release: the E2B blueprint goes to version 2 and returns non-zero exits as results instead of throwing (blueprints/sandbox--e2b.md, CHANGELOG L16).
- **Receipt:** https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/node/local-env.ts#L95-L107, https://github.com/withastro/flue/blob/658325942b0f4eecd888f9698ab0bebb3b749163/packages/runtime/src/node/local-env.ts#L96-L105, https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L13-L16, https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/sandboxes.md#L115-L172, https://github.com/withastro/flue/issues/809
- **Half:** defect | **Confidence:** high

**What changed.** On an `exec()` timeout or abort, `local()` sends SIGTERM to the command's process group and schedules SIGKILL two seconds later. Until 2.3.0 that SIGKILL was cancelled whenever the shell exited first, so a group member that ignored SIGTERM survived. In the report, that process kept editing files after the agent had been told the command timed out. The SIGKILL now fires regardless. Unchanged at v2.3.0: the docs say `local()` has "no isolation, by design" (sandboxes.md L115), and most remote provider SDKs keep running a cancelled command in the background (L172).

**Operator consequence.** If agents run commands through `local()` with timeouts (coding agents, CI tasks), upgrade to 2.3.0. Before it, the files on disk after a timeout could differ from what the agent and your logs believed. The fix shipped as a changelog line with no advisory. It does not make `local()` a boundary, so keep it inside a container or VM you already trust. On remote sandboxes, assume a timed-out command may still be running unless the provider supports cancellation (the docs name Vercel and Mirage). E2B users should run `flue update sandbox e2b` so failing commands return an exit code instead of a bare rejection.

## 5. 2.3.0 gives execution interceptors the agent's name on every step, which per-agent policy interceptors needed

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** packages/runtime/src/client.ts at 2.2.2 L492: `executionContext: { instanceId: config.id }`. At v2.3.0 L492-L495 adds `agentName` (deee93b4). `Session.executionContext()` spreads this identity into every model, tool and shell interception (session.ts L4686-L4695). shell.ts L60-L61 wraps `env.exec` in a `tool` interception named `bash`. events.md at v2.3.0 L656 says that not calling `next` skips the wrapped work, so an interceptor can veto a step; L657 still lists session-scope `ctx` fields without `agentName`. Issue #785 (2026-09-27, outside reporter, closed 2026-10-12) describes an interceptor that authorizes every step and sent every step down its default branch.
- **Receipt:** https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/client.ts#L492-L495, https://github.com/withastro/flue/blob/658325942b0f4eecd888f9698ab0bebb3b749163/packages/runtime/src/client.ts#L492, https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/reference/events.md#L623-L659, https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L14, https://github.com/withastro/flue/issues/785
- **Half:** defect | **Confidence:** high

**What changed.** Interceptors registered through `instrument()` wrap agent, model, tool and task execution, and they can skip the wrapped work. Before 2.3.0 only the outer `agent` operation carried `ctx.agentName`; model, tool and shell steps did not. A rule keyed on agent identity therefore never fired at the step level and fell through to its default. In the reported case the default refused, so runs failed. A default that allowed would have passed every agent's steps without a sound.

**Operator consequence.** If you enforce per-agent rules in an interceptor (tool allowlists, model routing, audit tags), upgrade to 2.3.0 and test that each agent's steps now take their own branch. Make the default branch fail closed either way. For session-scope steps, the reference page still documents the old field list, so trust the 2.3.0 code over the docs. Like section 4, this shipped as a changelog line, not an advisory.

## 6. 2.2.0 to 2.2.2 carried two regressions: AI Gateway Claude ids (fixed the same afternoon) and stale finish-hook state (fixed only in 2.3.0)

- **Date:** 2026-09-28 (2.2.0, 2.2.1, 2.2.2) to 2026-10-12 (2.3.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 2.2.0 (6c76cc55) includes 89032c55 "bump pi to 0.87.1" (#771), an ancestor of 2.2.0 and not of 2.1.1. In pi-ai 0.87.1, `dist/providers/data/cloudflare-ai-gateway.json` lists 8 dotted Claude ids (`claude-sonnet-4.6` and others) and no dashed ones. In 1.1.0 and 1.2.0 it lists 10 and 11 dashed ids and no dotted ones. 2.2.1 (3922a350) adds 548937e7, a version-separator alias with a one-time warning (#791). 2.2.2 (65832594) adds 2cb57be1, which registers dashed ids (#793). v2.3.0 deletes that rewrite (`setProvider` at providers.ts L31-L33); the alias remains (L232, L247-L277). Finish hooks: CHANGELOG 2.3.0 L11 says the regression began in 2.2.0. The fix is in 95a8c862 (session.ts L1648-L1652: re-render before each finish-hook cycle). `MAX_AGENT_FINISH_CYCLES = 32` (L256), and each cycle that appends drives a model continuation until the ceiling throws (L1633-L1675). Issue #818 (outside reporter) was closed 2026-10-12. None of 2.2.0, 2.2.1 or 2.2.2 is deprecated on npm.
- **Receipt:** https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L11-L28, https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.1, https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.2, https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/session.ts#L1633-L1675
- **Half:** defect | **Confidence:** high

**What changed.** The Pi 0.87.1 bump brought in Pi's 0.84.3 rename of AI Gateway Claude ids to dotted versions. `cloudflare-ai-gateway/claude-sonnet-4-6` stopped resolving in 2.2.0, resolved but got a 404 from Anthropic in 2.2.1, and worked in 2.2.2: three stables in under three hours. Separately, from 2.2.0 a `useAgentFinish` callback saw agent state from before the response's final turn. The documented `usePersistentState` guard ("append a reminder once") therefore never saw its own write and re-appended on every cycle, each cycle a further model turn, until the 32-cycle ceiling failed the response.

**Operator consequence.** Skip 2.2.0 and 2.2.1 if you route Claude through `cloudflare-ai-gateway`. Skip all of 2.2.x if any agent has a finish hook with a persistent-state guard, because on those versions it can burn up to 32 extra model turns and then fail. 2.3.0 fixes both. npm will not warn you off any of these versions.

## 7. npm next is dormant at 2.2.0-next.1: older than latest, missing later stable fixes, with sandbox output streaming confined to prereleases

- **Date:** 2026-09-25 (prerelease) to 2026-10-12 (main's release tooling removed; the next branch's prerelease tooling untouched)
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** npm dist-tags on 2026-10-13: next=2.2.0-next.1 for runtime, cli, sdk, vite, react and opentelemetry. The 2.2.0-next.0 (cec3fc92) and next.1 (4420fcd5) tags are not ancestors of main; only origin/next contains them. `git cherry v2.3.0 origin/next` lists 4827d6ee and 4dfd6254 as absent from v2.3.0. The streaming commit 4827d6ee is also an ancestor of 2.1.0-next.0 and 2.1.0-next.1 (npm 2026-09-18). onOutput counts in sandbox.ts / sandbox-api.md are 9 / 8 at those prereleases and 2.2.0-next.0, and 0 / 0 at 2.2.0, 2.2.2 and v2.3.0. The next branch still holds .changeset/pre.json (mode pre, tag next, added by 68414567) and .github/workflows/release.yml (pushes to main and next). Its head remains 4420fcd540ac63f040b8b1d206c00054faa0df63, last committed 2026-09-25. The 2.2.0-next.1 publication was attested GitHub Actions output. Main's tooling deletion does not remove this branch's path.
- **Receipt:** https://registry.npmjs.org/@flue%2Fruntime/2.2.0-next.1, https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.0-next.1, https://github.com/withastro/flue/commit/4827d6ee8dd3c3de714059301887a3872c6ac7a6, https://github.com/withastro/flue/blob/4420fcd540ac63f040b8b1d206c00054faa0df63/.changeset/pre.json, https://github.com/withastro/flue/blob/4420fcd540ac63f040b8b1d206c00054faa0df63/.github/workflows/release.yml#L3-L5, https://github.com/withastro/flue/commit/68414567bb03c2b5ae0ee785d791aeeee81f0d63, https://registry.npmjs.org/@flue%2Fruntime/2.1.0-next.0
- **Half:** both | **Confidence:** high

**What changed.** The next line led 2.2.0 by three days. Sandbox `exec(..., { onOutput })` streams stdout and stderr chunks and still returns the buffered result, but this capability exists only on the next prerelease line (2.1.0-next.0 through 2.2.0-next.1) and the unmerged feat/cloudflare-streaming branch, not any stable. Changesets left main, but the next branch keeps its own prerelease config and workflow, and nothing has been pushed to it since 2026-09-25. Its published head is built on Pi 0.87.1 and predates 2.2.1, 2.2.2 and 2.3.0.

**Operator consequence.** Move anything that installs @flue/*@next to 2.3.0 unless the prerelease-only streaming feature is a deliberate requirement; next lacks the later stable sandbox kill, interceptor identity, gateway-id and finish-hook fixes. Moving to stable also gives up onOutput, so verify that trade in the command UI. Evidence that would settle the preview's future: a push to next, a new -next.N publication, removal of the branch or dist-tag, or onOutput in a stable's sandbox-api reference.

## 8. Flue's Cloudflare Sandbox adapter targets the 0.x SDK; Cloudflare's Sandbox SDK 1.0 dropped the API it wraps

- **Date:** 2026-09-30 (SDK 1.0.0 on npm); state re-read at 2.3.0 (2026-10-12)
- **Channel:** `tagged-release` (blueprint pin at v2.3.0; external registry release)
- **Ancestry evidence:** At v2.3.0, blueprints/sandbox--cloudflare.md L80 runs `npm install @cloudflare/sandbox@^0.11.0` and L91 has `export { Sandbox } from '@cloudflare/sandbox'`. packages/runtime/src/cloudflare/cf-sandbox.ts (L1-L11, L48-L53) wraps the stub returned by `getSandbox()`. npm `@cloudflare/sandbox` latest=1.0.0, published 2026-09-30T01:44:26Z. The 1.0.0 tarball's `dist/index.d.mts` exports DirectoryBackup, Files, S3Mount, gateways and error types, with 0 occurrences of `getSandbox` and no `Sandbox` class; 0.11.0's typings export both. Issue #829 (2026-10-07, outside reporter) is open. A local probe (reading the published typings) confirmed it independently.
- **Receipt:** https://github.com/withastro/flue/blob/v2.3.0/blueprints/sandbox--cloudflare.md#L77-L91, https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/cloudflare/cf-sandbox.ts#L1-L53, https://www.npmjs.com/package/@cloudflare/sandbox/v/1.0.0, https://registry.npmjs.org/@cloudflare%2Fsandbox/1.0.0
- **Half:** defect | **Confidence:** high

**What changed.** Nothing in Flue changed; its platform did. Cloudflare's 2026-09-30 Containers post (marketing) says the native `ctx.container` model, with no wrapper class in between, carries into Sandbox SDK 1.0. The 1.0 package no longer has the `Sandbox` Durable Object class or `getSandbox()` that Flue's adapter and blueprint use. The blueprint's `^0.11.0` range excludes 1.0 and the separately published 0.12.x line. Only 0.11.0 exists on the admitted 0.11.x line at the window close. This preserves the API the blueprint uses; no end-to-end setup was executed here.

**Operator consequence.** Keep `@cloudflare/sandbox` on the blueprint's 0.11 range, and stop dependency bots from taking it to 1.0. The rebuilt-container features cannot be reached through Flue's adapter at 2.3.0. A 1.x path in the blueprint or adapter, or a fix for #829, settles it.

## 9. Trace content is still on by default; the `@flue/opentelemetry` README said the opposite until 2.1.1, and tool payloads now land on standard attributes

- **Date:** 2026-09-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** packages/opentelemetry/README.md reads "Content capture is disabled by default" at v2.0.0, v2.0.3 and @flue/runtime@2.1.0 (L46 at 767e9a84). At 2.1.1 and v2.3.0 (L46) it reads "Content is enabled by default", with `instrument(...)` named as the consent. The published tarballs agree: the README in `@flue/opentelemetry@2.1.0` has the "disabled" sentence, and 2.1.1's has the "enabled" one. The change came in d9e2ac00 (#748), an ancestor of @flue/runtime@2.1.1 and not of 2.1.0. The docs site page already said "enabled" at 2.1.0. Code at v2.3.0: telemetry/content.ts L151 drops content only when the policy is `false`; opentelemetry/src/index.ts L63-L71 says "absent means content on"; cloudflare/tracing/index.ts L33-L41 says the same. CHANGELOG 2.1.1 L50: every tool payload shape is now recorded on `gen_ai.tool.call.arguments` / `.result`, and the vendor `flue.tool.call.*` keys are no longer emitted.
- **Receipt:** https://github.com/withastro/flue/blob/767e9a848b1ec0b53b6f637fefd2e0491a7e77f5/packages/opentelemetry/README.md#L46, https://github.com/withastro/flue/blob/v2.3.0/packages/opentelemetry/README.md#L46, https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/telemetry/content.ts#L151, https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.1.1
- **Half:** both | **Confidence:** high

**What changed.** The default did not move. Prompts, system instructions, tool arguments and results, and (for OpenTelemetry) exception messages and stacks all ship unless you pass `content: false` or a transform says otherwise. The documentation that ships inside the package changed: from 2.0.0 through 2.1.0 the npm README told readers content capture was off. And from 2.1.1, tool payloads of every shape go to the standard GenAI attributes that trace backends display, instead of vendor keys many backends ignore.

**Operator consequence.** If you enabled `@flue/opentelemetry` between 2026-07-31 (2.0.0) and 2026-09-23 (2.1.1) on the README's word, your trace backend has been receiving conversation content. Check retention and access there, then set `content: false` or a redacting transform. After 2.1.1 the same payloads are easier to see in standard trace UIs, so revisit who can read traces. The profile's advice to set `content: false` before pointing at a hosted backend still stands.

## 10. The `allowed-tools` correction shipped in 2.1.1; the field is still unenforced

- **Date:** 2026-09-23
- **Channel:** `tagged-release` (it was `main-unreleased` when the parent harvest closed)
- **Ancestry evidence:** c5a2a725 (#746, 2026-09-21) is an ancestor of @flue/runtime@2.1.1 and not of 2.1.0. At 2.1.1 and v2.3.0, types.ts (L214-L219 at v2.3.0) reads "Space-separated tool names the skill author prefers ... Flue does not enforce it", and "pre-approved" appears nowhere under packages/ or apps/docs at v2.3.0. skills.md L58-L60 says "accepted, not enforced", with a security note that links to approval gates. Every runtime reference to `allowedTools` is parsing or serialization (skill-frontmatter.ts L11-L15, L76, L142; skill-definition.ts L25, L82, L112, L144, L203-L204). The docs bundled in the runtime 2.2.2 and 2.3.0 tarballs carry the same line.
- **Receipt:** https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.1.1, https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/types.ts#L214-L219, https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/skills.md#L58-L60
- **Half:** defect | **Confidence:** high

**What changed.** The docs and the type comment now match the behavior: a skill's `allowed-tools` lists what its author expects to use and restricts nothing. The fix has left main and is in a release.

**Operator consequence.** Behavior did not change, so the earlier re-audit still applies. Any restriction a skill relied on has to live in tool code or an approval gate (section 11).

## 11. 2.2.0 documents an approval-gate pattern and states that Flue has no built-in approval API

- **Date:** 2026-09-25 (docs commit), shipped 2026-09-28 (2.2.0)
- **Channel:** `tagged-release` (bundled docs)
- **Ancestry evidence:** cc7b9ca4 "Document an approval-gate pattern for tool calls (#774)" (2026-09-25T17:02:50Z) is an ancestor of @flue/runtime@2.2.0 and not of 2.1.1. The "## Approval gates" section appears in the docs bundled in the runtime 2.2.2 and 2.3.0 tarballs and is absent from 2.1.0's. At v2.3.0 it is tools.md L228-L433.
- **Receipt:** https://github.com/withastro/flue/commit/cc7b9ca4e4a7e72a2444d9e0e594b8b874f8e778, https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L228-L433
- **Half:** capability | **Confidence:** high

**What changed.** The guide states that Flue has no built-in approval API, then documents a gate built from existing primitives. A tool persists its exact arguments under toolCallId, returns pending_approval with terminate: true, and ends the response. An authenticated route dispatches a decision with an approval idempotency key; the first decision wins and a conflicting second one receives 409. A useAgentStart hook executes the stored arguments. The route, expiry policy and idempotent execution remain application responsibilities.

- The tool's `run` stores the exact arguments in persistent state keyed by `toolCallId` and returns `pending_approval` with `terminate: true`. The response ends and nothing waits.
- A route you control authenticates the approver and `dispatch`es the decision as a signal with `idempotencyKey: approval:<id>`. The first decision wins, and a conflicting second one gets a 409.
- A `useAgentStart` hook then executes the stored arguments, not whatever the model sends next.

The page also warns:

- Do not make `run` wait for a person: the wait burns the durability timeout, and an interrupted call is not re-run.
- `useAgentStart` callbacks run at least once, so `execute` must be idempotent.
- Pending requests never expire on their own.
- MCP annotations may be used to require approval, never to skip it.

**Operator consequence.** Copy this gate for any Flue agent that can refund, publish or delete. It is the documented answer to "allowed-tools restricts nothing". Decide what unattended runs (schedules, webhooks) do with gated calls, add an expiry job, and pass the approval id downstream as an idempotency key. The gate lives in your code, so it is only as strong as the route that authenticates the approver. Flue's pattern ends the response while the human decides, which fits a server that answers every prompt with 202.

## 12. 2.2.0 adds bounded history reads, PDF attachments and server timestamps, and makes `readSubmissionReply()` require settlements

- **Date:** 2026-09-28
- **Channel:** `tagged-release`
- **Ancestry evidence:** 54cabb7a (#767), 2663e507 (#766) and 3b1adfde (#772) are ancestors of @flue/runtime@2.2.0 and not of 2.1.1; the 2.2.0 GitHub Release body lists all three. SDK at v2.3.0: `historyBefore` in client.ts (L102, L187-L204); public/reply.ts L51-L54 declares `settlements: FlueConversationSettlement[]`, which was optional (`settlements?`) at 2.1.1. document-attachments.ts L42-L46 lists the native document APIs: anthropic-messages, openai-responses, azure-openai-responses, google-generative-ai, google-vertex.
- **Receipt:** https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.0, https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L30-L42, https://github.com/withastro/flue/blob/v2.3.0/packages/sdk/src/public/reply.ts#L51-L54
- **Half:** both | **Confidence:** high

**What changed.** 2.2.0 adds bounded SDK history reads with generation-bound cursors and 410 after reset, native PDF attachments on supported model APIs with placeholders elsewhere, and server-authored timestamps on messages and settlements. It also makes settlements mandatory for readSubmissionReply(), a breaking TypeScript change. Unbounded reads remain available and @flue/react still observes the whole conversation.

- **Bounded history.** Long conversations no longer ship whole on every load. `client.history({ limit })`, `client.historyBefore(cursor, { limit })` and `client.observe({ limit })` read a window and page backward. Cursors are bound to one stream generation and return 410 `history_cursor_not_found` after a reset.
- **PDF attachments.** User messages accept PDFs, sent natively to Anthropic, OpenAI and Azure Responses, and Google. On any other model API the document is replaced in context with a text placeholder.
- **Server timestamps.** Messages and settlements carry a server-authored ISO 8601 `timestamp`.
- **Breaking type change.** `readSubmissionReply()` now requires `settlements`, so a history page cannot be mistaken for a full conversation. In TypeScript that is a breaking change in a minor release.

**Operator consequence.** Chat UIs with long transcripts should move to the bounded reads and handle the 410 by re-basing; `@flue/react` still observes the whole conversation. Before relying on PDFs, check that your provider is on the native list, because elsewhere the model gets only a placeholder. In audit trails, use the server timestamp rather than client time. Fix `readSubmissionReply()` call sites that pass only `messages`.

## 13. 2.1.1 fixes quadratic trace truncation that could reset Cloudflare Durable Objects

- **Date:** 2026-09-23 (2.1.1 publication; code committed 2026-09-21)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Independently re-fetched commit 756db7668b57dfa97076bbad92d5c26b2d81dc0d, its truncation diff, and CHANGELOG L51 at v2.3.0. GitHub compare from the commit to @flue/runtime@2.1.1 is ahead, behind_by 0, merge_base equal to the commit. Compare to 2.1.0 is behind by 3, so the prior profile's pin lacks it. The ordinary JSON-array path now measures each element once and uses suffix sums to select a fitting tail, preserving a compatibility path for exotic serialization. No cloned tests were executed.
- **Receipt:** https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L44-L53, https://github.com/withastro/flue/commit/756db7668b57dfa97076bbad92d5c26b2d81dc0d, https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.1, https://github.com/withastro/flue/issues/742
- **Half:** defect | **Confidence:** high

**What changed.** Fitting a long conversation to the trace attribute budget repeatedly serialized the remaining history, a quadratic path that the tagged changelog identifies as causing latency and Cloudflare Durable Object CPU-limit resets. 2.1.1 replaces that path with linear truncation for ordinary message arrays. The outside report's 27-30 seconds of CPU is a reported measurement, not an independently repeated benchmark; the mechanism and shipped fix are established by the diff and release note.

**Operator consequence.** Stop using the old 2.1.0 profile pin for long traced conversations, especially on Cloudflare. The fix begins in 2.1.1 and remains in 2.3.0. Verify that trace truncation stays within the CPU budget on your own large histories; keep content-policy decisions separate, since this fix does not turn content capture off.

## 14. GitHub Latest still points to 2.2.2 while npm latest is 2.3.0

- **Date:** 2026-10-13 (dated channel observation; GitHub release published 2026-09-28, npm 2.3.0 published 2026-10-12)
- **Channel:** `tagged-release` (different current markers on GitHub Releases and npm)
- **Ancestry evidence:** Independently re-fetched repos/withastro/flue/releases/latest: tag_name @flue/cli@2.2.2, published_at 2026-09-28T20:38:48Z, prerelease false. The crosscheck observed the same marker at 2026-10-13T10:00Z. v2.3.0 has a public tag and npm publication but no GitHub Release object. This is a channel-display observation, not a new source commit.
- **Receipt:** https://github.com/withastro/flue/releases/tag/%40flue%2Fcli%402.2.2, https://api.github.com/repos/withastro/flue/releases/latest, https://registry.npmjs.org/@flue%2Fruntime/2.3.0, https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L3-L16
- **Half:** defect | **Confidence:** high

**What changed.** npm published 2.3.0 without a matching GitHub Release. GitHub therefore still advertises @flue/cli@2.2.2 as its Latest release even though npm latest is 2.3.0. A watcher using only GitHub Releases receives no 2.3.0 release notice.

**Operator consequence.** Resolve the install version from npm and the root CHANGELOG at the version tag. GitHub's Latest badge alone leaves a reader on 2.2.2, which lacks the finish-hook, local process-group and interceptor-identity fixes. A GitHub Release for the new stable or an explicit documented channel policy would settle the mismatch.

## 15. 2.1.1 widens Hono dependencies so scaffolded projects can share one compatible installation

- **Date:** 2026-09-23 (2.1.1 publication; code committed 2026-09-21)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Independently re-fetched 7841ff899805dc708d589a8852cb8ad74cf93ba2, whose changeset and package diffs replace exact hono 4.12.32 with ^4.12.32. GitHub compare to @flue/runtime@2.1.1 is ahead, behind_by 0, merge_base equal to the commit. CHANGELOG L52 at v2.3.0 records the fix. Nothing was installed or typechecked in this pass.
- **Receipt:** https://github.com/withastro/flue/commit/7841ff899805dc708d589a8852cb8ad74cf93ba2, https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L52, https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.1
- **Half:** defect | **Confidence:** high

**What changed.** Flue packages and scaffolded apps can resolve a compatible Hono installation through ^4.12.32. The earlier exact runtime pin could coexist with a newer root Hono and cause fresh projects to fail typecheck. This is a dependency compatibility fix, not a new agent capability.

**Operator consequence.** For a new app failing typecheck because two Hono versions disagree, move the Flue package set to at least 2.1.1, preferably the current 2.3.0 pin, and inspect the resolved dependency tree. Keep the lockfile; the broadened range does not freeze Hono's future behavior.

## 16. 2.1.1 keeps useFlueAgent streaming after reload while an observed submission remains unsettled

- **Date:** 2026-09-23 (2.1.1 publication; code committed 2026-09-22)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Independently re-fetched 4685436f75fe0aea1fe661f47969d053742de221 and its React changeset. GitHub compare to @flue/react@2.1.1 is ahead, behind_by 0, merge_base equal to the commit. CHANGELOG L48-L49 at v2.3.0 documents both the fix and the residual admission-before-materialization window. This settles the parent harvest's after-window #756 lead as a release, without claiming that every reload can recover an admission.
- **Receipt:** https://github.com/withastro/flue/commit/4685436f75fe0aea1fe661f47969d053742de221, https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L48-L49, https://github.com/withastro/flue/releases/tag/%40flue%2Freact%402.1.1
- **Half:** defect | **Confidence:** high

**What changed.** After a reload, useFlueAgent derives active submission ids from observed messages minus settlements. A running tool or silent admitted prompt that has appeared in the conversation now stays streaming rather than looking idle until assistant text arrives. A submission admitted but not yet materialized into a message at reload time remains a documented residual window.

**Operator consequence.** Upgrade React chat clients from 2.1.0 to at least 2.1.1 so a reload does not invite a duplicate send merely because a tool is silent. Treat status as aggregate conversation activity, and preserve submission receipts if your UI must cover the residual pre-message window. The current 2.3.0 pin includes the fix.

## 17. 2.2.0 fixes Cloudflare-routed Anthropic tool requests by moving beta features to a header

- **Date:** 2026-09-28 (stable publication; code and next.1 publication 2026-09-25)
- **Channel:** `tagged-release` (also present in preview 2.2.0-next.1, absent from next.0)
- **Ancestry evidence:** Independently re-fetched 43d15d1a82851e8d891d938ca8d8df4a2b7d34ec, its binding request helper and provider diff. Compare to @flue/runtime@2.2.0 and 2.2.0-next.1 is ahead, behind_by 0, merge_base equal to the commit; compare to next.0 is diverged, behind_by 1. CHANGELOG L41 at v2.3.0 records the fix. The stable 2.2.0 Pi bump and this fix landed together; do not imply that the stable first shipped the request-body defect and only later repaired it.
- **Receipt:** https://github.com/withastro/flue/commit/43d15d1a82851e8d891d938ca8d8df4a2b7d34ec, https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L40-L41, https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.2.0
- **Half:** defect | **Confidence:** high

**What changed.** Pi 0.87's beta messages path puts feature names in params.betas. Flue's Cloudflare binding shim forwarded that field into the body, causing tooled cloudflare/anthropic requests to fail with betas: Extra inputs are not permitted. The helper now strips the field from the beta request body and sends anthropic-beta in the headers, matching the Anthropic SDK's wire behavior. Stable 2.2.0 includes the repair; preview 2.2.0-next.0 does not and next.1 does.

**Operator consequence.** Keep the Cloudflare binding shim and the resolved Pi packages compatible when updating dependencies. Move affected next.0 installations to stable 2.3.0, or to next.1 only when prerelease-only streaming is deliberately required. Test an Anthropic request with tools rather than relying on a no-tool smoke test; distinguish this cloudflare/anthropic path from section 6's cloudflare-ai-gateway model-id defect.

## Prior claims re-checked

Active claims in the profile frontmatter, re-read at v2.3.0 unless stated:

- **changesets-channel:** changed (see sections 1, 2, 7). Changesets, per-package GitHub Releases, `@flue/runtime@X` tags and per-package changelogs stopped at 2.2.2. The root CHANGELOG is the receipt again, and next is dormant with its own release tooling intact. https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150
- **broken-publishes-2-0-4-2-0-5:** holds at 2.3.0. The root CHANGELOG still records both failures (https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L125-L142). Neither version is deprecated on npm.
- **recursion-and-abort-fixes-2-0-7:** holds at 2.3.0 in code: harness tool lineage (https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/harness-tool-lineage.ts#L13-L23) and interrupted-batch repair (session.ts L2698, L2826, L2883). Their public regression tests were deleted in 95a8c862 (section 1).
- **tool-timeout-and-mcp-annotations-2-1-0:** holds at 2.3.0. `timeoutMs` and the deadline signal are in tool.ts L33 and L343, `ToolTimeoutError` in abort.ts L54-L59, and annotations are carried in mcp.ts L270-L276. The hints are only validated (tool.ts L73-L76) and never acted on. https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/mcp.ts#L270-L276
- **allowed-tools-not-enforced:** holds at 2.3.0 (behavior). The docs fix moved from main to release in 2.1.1 (section 10).
- **agent-behavior-reference:** holds at 2.3.0. read/bash truncation is 2000 lines or 50 KB, grep is capped at 100 matches, compaction keeps a reserve capped at 20,000 tokens with 8,000 kept verbatim, and delegation depth is capped at 4 (`delegation_depth_exceeded`). https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/reference/agent-behavior.md#L160-L178
- **prompt-cache-safe-tool-additions:** holds at 2.3.0. The tools guide still states the Anthropic exception (not Haiku). https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L224
- **sandbox-role-renames:** holds at 2.3.0. `sandboxFromDriver`, `SandboxDriver` and the deprecated aliases `createSandboxSessionEnv` and `SandboxApi` are still exported. https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/index.ts#L106-L115
- **cloudflare-agents-pin:** holds at 2.3.0. `@flue/vite` declares `"agents": "^0.20.1"` as a dependency, unchanged since v2.0.3 (https://github.com/withastro/flue/blob/v2.3.0/packages/vite/package.json#L40). New context: the SDK's npm latest is 0.28.0 (2026-10-09), so the pinned line trails by 8 minors.
- **virtual-sandbox-default:** changed (superseded at v2.0.0, 2026-07-31, before this window; it should retire). Since 2.0.0 an agent has no sandbox unless `useSandbox()` attaches one, and the virtual sandbox requires adding `just-bash` yourself (https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/sandboxes.md#L7-L27). The "virtual sandbox by default" wording was last present at v1.0.0-beta.9 (https://github.com/withastro/flue/blob/v1.0.0-beta.9/apps/docs/src/content/docs/guide/sandboxes.md#L9-L13). Third-party guides still repeat it.
- **model-harness-separation:** holds at 2.3.0. The README calls Flue "The Agent Harness Framework" and composes `useModel` alongside sandbox, skills and tools (https://github.com/withastro/flue/blob/v2.3.0/README.md#L1-L20). Model resolution is delegated to Pi (section 3).
- **headless-deployable-target:** holds at 2.3.0. Prompts are admitted with 202 (https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/runtime/agent-routes.ts#L57), and Node and Cloudflare remain the two targets (guide/node-target.md, guide/cloudflare-target.md).
- **skills-markdown-first:** holds at 2.3.0. The README imports `SKILL.md` files directly (https://github.com/withastro/flue/blob/v2.3.0/README.md#L10-L11).
- **skills-typescript-native:** holds at 2.3.0. `defineSkill` is exported (https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/index.ts#L116).
- **skill-naming-ascii-spec:** holds at 2.3.0. The rules are at most 64 characters and `^[a-z0-9]+(?:-[a-z0-9]+)*$` (https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/skill-definition.ts#L95-L96; skill-frontmatter.ts L82-L84).
- **connector-agent-install:** holds at 2.3.0. `flue add` and `flue update` fetch blueprint guides for a coding agent (https://github.com/withastro/flue/blob/v2.3.0/packages/cli/src/commands/blueprints.ts#L14-L30). 2.3.0's E2B fix is delivered this way (`flue update sandbox e2b`).
- **first-party-connector-ecosystem:** holds at 2.3.0. There are 28 public `@flue/*` packages, all at 2.3.0 (`packages/*/package.json` at the tag).
- **durable-recoverable-execution:** holds at 2.3.0. The accepted-work contract is unchanged (https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/durability.md#L7-L13). Open outside reports (#858, #810) are leads, not refutations.
- **durable-streams-transport:** holds at 2.3.0. Offsets still use the Durable Streams format (https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/reference/streaming-protocol.md#L29).
- **define-naming-unification:** superseded (at v2.0.0, before this window; it should retire). `defineAgent` and `defineWorkflow` have 0 occurrences under packages/ at v2.3.0. Agents are `'use agent'` functions (https://github.com/withastro/flue/blob/v2.3.0/README.md#L7), and workflows are "not a Flue feature per se" (https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/workflows.md#L7).

Bolded paragraphs of "Where it stands, 2026-09-21":

- **Channel.** changed (sections 1, 2, 7). The pin moves to 2.3.0; the receipt is now the root CHANGELOG at the `v` tag, not a GitHub Release.
- **Skip 2.0.4 and 2.0.5.** holds. New skip advice comes from section 6: 2.2.0 and 2.2.1 for AI Gateway Claude, all of 2.2.x for finish hooks with guards.
- **What 2.x is.** holds at 2.3.0. The CLI has only init, run, docs, add and update (packages/cli/src/commands at the tag). `?wait` is rejected (https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/runtime/handle-agent.ts#L95-L98). `flue dev` is now `vite dev` (migration.md L42), and workflows remain external engines.
- **Trace content is on unless you turn it off.** holds at 2.3.0, and the package README now says so (section 9).
- **The tool contract firmed up.** holds at 2.3.0 in code. The public tests behind it are gone (section 1).
- **MCP hints arrive, unenforced.** holds. The tools guide now adds that annotations may require approval and never skip it (https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L433).
- **`allowed-tools` limits nothing.** holds for behavior. "That fix is in no release" changed: it shipped in 2.1.1 (section 10).
- **Cost reads $0 for unknown.** holds at 2.3.0 (https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/runtime/providers.ts#L139-L150).

## Carry-forward answers

`stance.watch_next`:

1. **Trace content back to opt-in?** No. It is still on by default at 2.3.0 (content.ts L151; opentelemetry index.ts L63-L71). The README contradiction was corrected in 2.1.1 (section 9).
2. **`allowed-tools` doc fix in a release, type comment no longer "pre-approved"?** Yes, both in 2.1.1 (2026-09-23). c5a2a725 is an ancestor of @flue/runtime@2.1.1, and types.ts at 2.1.1 and 2.3.0 says the field is not enforced (section 10).
3. **Any Flue fix arriving with an advisory?** No. `gh api repos/withastro/flue/security-advisories` -> [], and the global advisories for `@flue/runtime`, `@flue/cli` and `@flue/vite` return 0. The orphan-process fix (section 4) and the interceptor identity fix (section 5) shipped as changelog lines.
4. **`next` prereleases leading stables by more than a day?** Yes, once: 2.2.0-next.0 led 2.2.0 by three days. Then the next line stopped receiving pushes; next now trails latest and carries a feature no stable has, with its own release tooling still intact (section 7).

"What is unresolved":

1. **No advisory channel; security-relevant fixes as changelog lines.** Still open and reconfirmed (answer 3). Watching Flue now means reading the root CHANGELOG at each `v` tag, because the per-package changelogs are deleted.
2. **Whether the Vite bet lowers adoption cost.** Still open. Registry downloads rose (see Operator questions), but they count installs, not adoption cost, and there is no comparative evidence.
3. **Whether the in-browser demo chat grows into a new `flue dev`.** No movement. The CLI at v2.3.0 has no `dev` command, there are no commits to `demo/` between 2.1.0 and v2.3.0, and the dev-console branches (`feat/invoke-console`, `wip/dev-console-followups`) were last touched 2026-06-22.

## Operator questions settled

- **Model + harness as a durable category?** It is validated as layering, with a cost. Flue's model catalog and agent loop come from Pi, another harness this watchlist profiles. In 2.3.0 Flue deleted its own catalog workaround once Pi fixed the cause upstream (sections 3, 6). The coupling is real, though: a Pi minor can now change Flue's behavior with no Flue release.
- **Which primitives are stabilizing?** Stabilizing: the tool contract (timeouts, abort repair), the durability contract, bounded history reads, and approval as a documented pattern. Unstable: the release process itself (lockstep `v` tags, then Changesets, then back to export-style in five weeks), the Cloudflare sandbox adapter against SDK 1.0, and model id resolution across Pi bumps (2.2.x).
- **Integration surfaces to treat as precedent?** The approval gate (asynchronous, durable, idempotent, first decision wins) and execution interceptors as a veto chain (sections 5, 11). Also the trace-content `transform` hook as the one redaction point.
- **Receipt layer and deployment membrane?** Flue's own receipts got weaker: no per-change public commits or public runtime contract tests, and no npm provenance at 2.3.0 (sections 1, 2). Keep your own: exact pins with lockfile hashes, tarball checks, and contract tests. Server-authored message timestamps (2.2.0) help an audit trail. Tool `durationMs` changed definition in 2.3.0, so latency receipts shift at that version.
- **Traction enough to treat as architectural reference?** Registry downloads of `@flue/runtime` (api.npmjs.org) rose from about 217K in the week of 2026-09-07 to about 380K per week for the three weeks from 2026-09-21. Stars went from 8,347 to 8,455. Outside reporters filed detailed issues throughout the window (#785, #809, #818, #829 and others). Inspectability fell at the same time, so treat Flue as a reference for patterns (approval gates, the durability contract), not as a dependency you can audit without your own verification.

## Leads not promoted

- **Writing lane, Latent Space "[AINews] Pi 1.0, Pi Durable, and AIE NYC" (2026-10-02):** Pi 1.0 going stable is confirmed by Pi's own release (v1.0.0, 2026-10-01T19:20:55Z), and Flue's move to Pi 1.1.0 is section 3. "Pi Durable" does not appear in Pi's v1.0.0 release body; not pursued (Pi lane).
- **Writing lane, Cloudflare "Cloudflare Containers, rebuilt to scale agent sandboxes" (2026-09-30):** marketing. Its line about carrying the native `ctx.container` model "into Sandbox SDK 1.0" matches the 1.0.0 package contents. This led to section 8.
- **Writing lane, Cloudflare "Everything we launched during Birthday Week 2026" (2026-10-05) and "Cloudflare OS" (2026-10-01):** no mention of Flue. The one "flue" hit is the word "influence".
- **Writing lane, Cloudflare "Clef" decision models (2026-10-01, 2026-10-09):** Clef and Clef-flash appear in Pi 1.1.0 and 1.2.0's Workers AI catalog as classifier entries; Clef-omni does not. Whether Flue's `useModel` can drive classifier models was not checked. A model missing from the catalog would resolve as a dynamic model whose cost reads $0 (providers.ts L139-L150).
- **Writing lane, Simon Willison "Deno is joining Cloudflare" (2026-10-09):** nothing Flue-specific; Flue targets Node and Cloudflare Workers only.
- **Writing lane, Matt Pocock "Harness" dictionary entry (2026-09-24) and Latent Space on a cloud-native harness (Stacklok, 2026-10-07):** definitional or about other projects; no Flue content.
- **Writing-lane keyword scan:** the only literal "flue" match in 161 items was "influence" in an OpenAI post (false positive).
- **Web search ("Flue agent framework withastro 2.3.0 October 2026"):** returned only third-party write-ups (betterstack, pyshine, stork.ai, sourcepulse, agentic-ai.readthedocs). They describe a "default virtual sandbox", which the primary docs dropped at v2.0.0. Rejected as third-party summaries.
- **GitHub issues from outside reporters, open at 2.3.0 and not promoted** (an issue is a claim, not a receipt): #858 (graceful shutdown during a tool batch fails recovery), #822 (Node coordinator retains one conversation fold per instance for the process lifetime), #813 (Node agent runs inherit the async context of the first dispatching request), #810 (finish hook skipped after a restart), #820 (stream decoding errors bypass bounded retries), #828 (unguarded ROLLBACK in the Node transaction helper), #781 (open even though 2.3.0 fixes its leading-slash case). Settle each by a CHANGELOG entry at a later `v` tag.
- **Issue closures as fix signals:** all 23 issues closed on 2026-10-12 carry state_reason "completed", but 14 were converted to open Feature Request discussions, 8 map to shipped fixes, and #602 was closed as not reproducible. Deletion #764 -> #855, retry #787 -> #844, bounded React history #807 -> #840, LINE #798 -> #843 and WeChat #799 -> #842 remain requests, not shipped capabilities. Follow Discussions and require a tagged implementation or release note to settle them (section 1).
- **X:** the X lane is down this run (grok CLI signed out). No posts from @flueai were checked.

## Surfaces checked

- `gh api repos/withastro/flue` (identity, stars, pushed_at); `gh api repos/withastro/flue/releases?per_page=100 --paginate` (release objects from 2026-09-19; 28 per cut through 2.2.2, none for 2.3.0); `gh api releases/tags/<tag>` for 2.1.1, 2.2.0-next.0, 2.2.0-next.1, 2.2.0, 2.2.1, 2.2.2 and v2.3.0 (404).
- `gh api compare`: v2.3.0...main (identical), @flue/runtime@2.2.2...v2.3.0 (2/0), @flue/runtime@2.1.0...v2.3.0 (23/0). `gh api commits/<sha>` for the two Source SHAs (422).
- Blobless clone of withastro/flue: `git fetch --tags`, `for-each-ref` over tags since 2026-09-19, `rev-list --count` for every ledger pair, `merge-base --is-ancestor` for 16 in-window commits and the `next` tags, `git cherry v2.3.0 origin/next`, branch recency, `git log --grep '^Source: '` with public or absent classification, test-file and changelog counts at 11 refs.
- Worktrees (read-only) at v2.3.0 and @flue/runtime@2.2.2: local-env.ts, client.ts, session.ts, shell.ts, providers.ts, tool.ts, mcp.ts, abort.ts, types.ts, skill-frontmatter.ts, skill-definition.ts, telemetry/content.ts, cloudflare/tracing/index.ts, cloudflare/cf-sandbox.ts, handle-agent.ts, agent-routes.ts, index.ts, sdk client.ts and public/reply.ts, opentelemetry index.ts and README.md, vite and runtime package.json, cli commands, blueprints/sandbox--cloudflare.md and sandbox--e2b.md, docs guide/{tools,skills,sandboxes,durability,workflows,migration}.md and reference/{events,agent-behavior,streaming-protocol,sandbox-api,provider-api}.md. Also read: CHANGELOG.md at v2.3.0 in full (L1-L142 for the window), CONTRIBUTING.md at v2.3.0, sandboxes.md at v1.0.0-beta.9, opentelemetry README at 2.1.0 and 2.1.1, sandbox-api.md at 2.2.0-next.0.
- Commit diffs: 95a8c862 (stat, CONTRIBUTING, workflows, package.json, session.ts, document-attachments.ts), deee93b4 (all source and docs files), cc7b9ca4, 4827d6ee (stat and changeset).
- npm: `npm view` dist-tags and time for `@flue/runtime`, cli, sdk, vite, react, opentelemetry; `_npmUser` and `dist.attestations` for runtime at 13 versions and 7 packages at 2.3.0; registry documents for runtime 2.2.2 and 2.3.0; attestation endpoints (2.2.2 200, decoded; 2.3.0 404); `deprecated` for 8 versions; dependencies of 7 packages at 2.3.0; `@earendil-works/pi-ai` and pi-agent-core dist-tags and time; `agents` and `@cloudflare/sandbox` dist-tags and time.
- Tarballs (listed and grepped, never executed): `@flue/cli`, runtime and sdk at 2.2.2 and 2.3.0 (docs counts, dist grep); runtime 2.1.0 (bundled docs); `@flue/opentelemetry` 2.1.0 and 2.1.1 (README); pi-ai 0.87.1, 0.99.0, 1.0.0, 1.1.0, 1.2.0 (provider modules, AI Gateway and Workers AI catalogs); `@cloudflare/sandbox` 0.11.0 and 1.0.0 (typings).
- GitHub issues #739, #744, #764, #781, #785, #787, #802, #805, #807, #809, #818, #829, PR #832 and its comments; issue search for items created since 2026-09-21 and 2026-09-28 and items closed 2026-10-12 (close times and state_reason read for all 23); `gh pr list` for PRs created since 2026-09-21.
- Advisories: `gh api repos/withastro/flue/security-advisories` ([]); `gh api advisories?ecosystem=npm&affects=` for `@flue/runtime`, `@flue/cli`, `@flue/vite` (0 each).
- Pi primary record: `gh api repos/earendil-works/pi/releases/tags/v1.0.0`, v1.1.0, v1.2.0, v0.99.0 bodies (grep).
- https://flueframework.com/ (200; marketing, unpinned; "Powered by Pi" framing present in apps/www since at least v2.0.3, so not a window change); apps/www blog pages at v2.3.0 (no post in the window); https://blog.cloudflare.com/faster-agent-sandboxes/, /birthday-week-2026-wrap-up/, /managed-cloudflare-os/ (leads).
- api.npmjs.org downloads range 2026-08-17..2026-10-12 for `@flue/runtime` and `@flue/cli`.
- runs/.../feeds/writing.json (161 items, keyword scan plus a manual title read).

## Not reached

- Per-package GitHub Release bodies for the 25 channel and store packages per changesets cut (runtime spot-checked only).
- A reproducible build of any 2.3.0 package. Correspondence with the public source was spot-checked on one change in the runtime dist; nothing was executed.
- Behavior of Pi 1.2.0 under Flue 2.3.0 (not executed; Pi's own changes belong to the pi-coding-agent lane).
- Whether `@cloudflare/sandbox` 0.12.x works with Flue's adapter (the blueprint pins 0.11.x).
- Contents of the unmerged branches beyond titles and the `onOutput` changeset: `feat/cloudflare-coordinator-on-state-machine`, `fix/754-docs-404s`, `feat/cloudflare-streaming` after 2026-09-18.
- npm dist-tag history (the registry does not expose it).
- The live docs site was not diffed against `apps/docs` at the tag (the repo at the tag is used as the docs record).
- X/social capture (lane down).

## Crosscheck applied

Applied the three CORRECTED verdicts: section 1 distinguishes Discussion
conversions from shipped fixes; section 3 locates Azure's rename in Pi 1.0.3
and includes 1.2.0 provider behavior; section 7 retains next's dormant tooling
and the earlier streaming prereleases. Fixed collateral install, closure,
recursion-guard and channel statements. No numbered section was REFUTED or
UNVERIFIABLE. Independently checked both material misses and the three smaller
omissions, adding all five as sections 13 through 17 as requested. Replaced the
unmerged PR's receipt with its comments API so the generator does not label it
merged. All 17 sections have the required fields and receipts. Nothing from the
provider was executed. Moving channel observations retain their dated
crosscheck anchors. The source contract's stale no-Releases note needs a
coordinator correction outside this write scope.
