---
schema_version: bitter.frontier_harvest.v0
provider: gemini-cli
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/gemini-cli.yml
channels_present: [tagged-release, preview-or-beta, docs-only, main-unreleased]
window_volume: 4 stables (v0.61.0 through v0.64.0), 6 non-nightly previews, daily nightlies; 86 commits on end-of-window main past v0.60.0; 20 numbered observations; 0 newly published project GHSAs; 1 advisory duplicate withdrawn
lane: primary sources, profile-refresh researcher and write-up author
---

# Harvest: gemini-cli (primary sources)

Window truth is the inclusive 2026-10-13 close, not the original 08:55Z snapshot. The crosscheck independently retrieved the evening releases on 2026-10-14. Repository identity remains google-gemini/gemini-cli; package identity remains @google/gemini-cli. The primary researcher read a blobless clone and tagged trees, never executed Gemini CLI, and recorded plain-Git probes. The verifier independently checked source, release objects and ancestry. The write-up author re-read the missed commit diffs through the GitHub API, the registry, the official subscription sunset page and the pinned withdrawn advisory, and reran read-only ancestry checks in the existing verifier clone. No cloned code was executed. Missing clone blobs were read through the API with lazy fetching disabled locally; no fetch or checkout was performed by the author.

The window moved authority in both directions. Headless Plan Mode's new prompt encourages autonomous implementation through an existing exit-to-YOLO path. Build-file edit-tool gates, redirection rules, untrusted-output marking and sandbox guards narrow particular paths without establishing an operating-system boundary. Stable v0.64.0 repairs ordinary-command false positives, OAuth compatibility, cancellation handling and recording reliability. Its MCP-add settings-loss fix is still only in v0.65.0-preview.0. Google also ended new Code Assist Standard and Enterprise subscriptions. The unchanged extension checkout remains an exposure, not a new change to count again.

## Install today

**Newest stable by 2026-10-13 close: v0.64.0.** GitHub published it at 2026-10-13T20:44:46Z, prerelease=false; npm at 2026-10-13T20:48:24.183Z. Install with `npm install -g @google/gemini-cli@0.64.0`. Node >=20 is required; the license remains Apache-2.0. Receipts: https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0 , https://www.npmjs.com/package/@google/gemini-cli/v/0.64.0 , https://github.com/google-gemini/gemini-cli/blob/v0.64.0/package.json , https://github.com/google-gemini/gemini-cli/blob/v0.64.0/LICENSE .

**Regular preview: v0.65.0-preview.0.** GitHub published it at 2026-10-13T20:27:55Z, prerelease=true; npm at 2026-10-13T20:31:28.212Z. It includes the MCP-add write refusal, session-resume repairs, custom OTLP headers, Google-login loop repairs, A2A rejection isolation, extension-load failure isolation, and rapid-cancellation history repair. The IDE companion change is in its repository source; Marketplace delivery was not verified. Receipt: https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0 .

**Registry retrieval: 2026-10-14.** `latest=0.64.0`, `preview=0.65.0-preview.0`, `nightly=staging-tmp=0.65.0-nightly.20261014.g42c518220`, and `false=0.42.0-nightly.20260512.g11a9edc80`. The October 14 nightly is outside the window. The last in-window nightly is `0.65.0-nightly.20261013.g51617c1bc`, published 2026-10-13T01:40:24.316Z. The researcher's 08:55Z observation had latest=0.63.0 and preview=0.64.0-preview.1. The registry supplies publication times but no retrospective dist-tag assignment history. Receipt: https://registry.npmjs.org/@google%2fgemini-cli .

**Train shape.** v0.62.0 and v0.63.0 each add one release chore to preview.0; v0.64.0 adds one to preview.1. Promotion is a manual dispatch, not a release-time guarantee. v0.61.0-preview.1 carried a model cherry-pick only about 67 minutes before stable npm availability. GitHub dated the stable September 23; npm availability began September 24 UTC. Preview is useful for testing, but not a promise of a week to evaluate every stable change. Receipt: https://github.com/google-gemini/gemini-cli/blob/42c51822084ac25cd5d97ac0023822c5235f88c8/.github/workflows/release-promote.yml#L3-L7 .

**Main at the close.** `42c51822084ac25cd5d97ac0023822c5235f88c8`, committed 2026-10-13T20:56:44Z, is 29 ahead / 4 behind v0.64.0, 86 ahead / 2 behind v0.60.0 and 2 ahead / 1 behind v0.65.0-preview.0. Its two source commits beyond that preview update the roadmap and preview changelog; their nightly was not published until October 14. Compare receipt: https://github.com/google-gemini/gemini-cli/compare/v0.65.0-preview.0...42c51822084ac25cd5d97ac0023822c5235f88c8 . Do not call them runnable in the last in-window nightly. Receipt: https://github.com/google-gemini/gemini-cli/commit/42c51822084ac25cd5d97ac0023822c5235f88c8 .

**Defaults.** Auto Memory remains `experimental.autoMemory`, off by default, with a reviewable project inbox. `experimental.dynamicModelConfiguration` remains false; `experimental.enableAgents` remains true. These defaults do not establish unchanged model routing or permissions. Receipts: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/cli/auto-memory.md#L15-L58 , https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settingsSchema.ts#L2225-L2232 , https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settingsSchema.ts#L2340-L2348 .

**Other stable repairs already identified.** v0.63.0 fails closed on malformed `mcp-server-enablement.json` and does not overwrite it (#29446); WSL uses the encrypted file keychain (#29448). v0.62.0 preserves Google OAuth refresh tokens (#29339) and repairs proxy-agent bundling (#29401). No window commit changed nonInteractiveCli.ts/output formatters or GEMINI.md discovery; this path check does not prove unchanged model behavior or session-log format. Receipts: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/mcp/mcpServerEnablement.ts#L222-L237 , https://github.com/google-gemini/gemini-cli/pull/29448 , https://github.com/google-gemini/gemini-cli/pull/29339 , https://github.com/google-gemini/gemini-cli/pull/29401 .

**Advisories.** No newly published project GHSA was found in the window. The project advisory list is empty. The database did change: September 24 withdrew the Actions duplicate GHSA-jj69-4grx-fqj5 into GHSA-wpqr-6v78-jr5g (section 19). The canonical exposure concerns automatic headless workspace trust and YOLO allowlist bypass in older versions, patched in CLI 0.39.1/0.40.0-preview.3 and Action 0.1.22. Do not count two active vulnerabilities or apply those affected ranges to 0.64.0.

## Release ledger

All times UTC, year 2026. Stable means a non-prerelease GitHub release. Ahead / behind counts use the stated base. These are independently rebuilt crosscheck counts.

| Tag | GitHub published UTC | Prerelease | Ahead / behind and base | npm published UTC |
| --- | --- | --- | --- | --- |
| v0.60.0 (baseline) | 2026-09-15T20:31:02Z | false | 16 / 2 vs v0.59.0 | 2026-09-15T20:36:40.030Z |
| v0.61.0-preview.1 | 2026-09-23T22:53:10Z | true | 10 / 2 vs v0.60.0 | 2026-09-23T22:57:54.198Z |
| v0.61.0 | 2026-09-23T23:59:15Z | false | 11 / 2 vs v0.60.0 | 2026-09-24T00:04:53.021Z |
| v0.62.0-preview.0 | 2026-09-23T23:47:50Z | true | 20 / 4 vs v0.61.0 | 2026-09-23T23:53:34.721Z |
| v0.62.0 | 2026-09-29T21:17:07Z | false | 21 / 4 vs v0.61.0 | 2026-09-29T21:25:44.188Z |
| v0.63.0-preview.0 | 2026-09-29T20:58:07Z | true | 16 / 2 vs v0.62.0 | 2026-09-29T21:02:47.827Z |
| v0.63.0 | 2026-10-06T20:38:49Z | false | 17 / 2 vs v0.62.0 | 2026-10-06T20:58:43.642Z |
| v0.64.0-preview.0 | 2026-10-06T20:26:18Z | true | 17 / 2 vs v0.63.0 | 2026-10-06T20:31:09.257Z |
| v0.64.0-preview.1 | 2026-10-09T20:27:57Z | true | 19 / 2 vs v0.63.0 | 2026-10-09T20:31:47.807Z |
| v0.64.0 | 2026-10-13T20:44:46Z | false | 20 / 2 vs v0.63.0 | 2026-10-13T20:48:24.183Z |
| v0.65.0-preview.0 | 2026-10-13T20:27:55Z | true | 28 / 4 vs v0.64.0 | 2026-10-13T20:31:28.212Z |
| v0.65.0-nightly.20261013.g51617c1bc | 2026-10-13T01:36:45Z | true | 40 / 2 vs v0.63.0 | 2026-10-13T01:40:24.316Z |

The nightly tag includes a version chore beyond main 51617c1bc, which itself is 39 ahead of v0.63.0. Do not conflate their commit counts. Nightlies ran almost daily; each listed non-nightly release has a matching tag/npm version.

## 1. Google stops selling new Code Assist subscriptions

- **Date:** 2026-10-09
- **Channel:** `docs-only`
- **Ancestry evidence:** No versioned CLI behavior change. Google's release notes date the end of new subscriptions October 9. Its linked sunset page displays Last updated 2026-10-13 UTC and was independently read on October 14; those historical bytes are not archived. The CLI auth docs at v0.64.0 still recommend consumer Google login.
- **Receipt:** https://docs.cloud.google.com/gemini/docs/codeassist/release-notes, https://docs.cloud.google.com/gemini/docs/codeassist/sunset, https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/get-started/authentication.mdx#L17-L34
- **Half:** defect | **Confidence:** high on the current official notice; historical page bytes are unversioned

**What changed.** From 2026-10-09 customers cannot purchase a new Code Assist Standard or Enterprise subscription. Existing subscriptions can still add licenses until 2027-01-31. The official sunset page gives that date for annual renewals and 2027-12-31 for monthly renewals, with existing service supported through its contractual end. These exact dates are now Google's statement, not merely issue #29712's report. Google points customers to Antigravity through Gemini Enterprise and links a Gemini CLI migration guide. Its consumer deprecation page still states the 2026-06-18 cutoff for individual, AI Pro and Ultra access. None of these receipts establishes a universal Gemini CLI shutdown or an API-key, Vertex or Gateway termination date.

**Operator consequence.** Existing Code Assist teams should schedule transition against their license-addition, final-renewal and contract-end dates; a new subscription is no longer available. Evaluate Google's Antigravity migration path or API-key/Vertex operation against the team's controls and metered costs rather than inferring support from repository activity. Do not use the stale consumer sign-in recommendation as proof of access. The exact schedule is current official documentation with a displayed October 13 update date, not an immutable October 13 capture.

## 2. Stable v0.61.0 rewrites explicit Flash model IDs

- **Date:** 2026-09-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** 62364cb2000795537a6895261b37ec668e4cf527 merged September 22; cherry-pick 0e6fa774e01fdeb1c0945536c9d257a7fceac730 reaches v0.61.0. Stable GitHub publication was September 23 and npm publication September 24. Preview.1 preceded npm stable by about 67 minutes. The mapping remains in v0.64.0.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29443, https://github.com/google-gemini/gemini-cli/commit/0e6fa774e01fdeb1c0945536c9d257a7fceac730, https://github.com/google-gemini/gemini-cli/compare/v0.61.0-preview.0...v0.61.0, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/models.ts#L144-L164, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/config.ts#L3585-L3618, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/core/modelMappingContentGenerator.ts#L44-L90
- **Half:** both | **Confidence:** high on outgoing client mapping; no backend response observed

**What changed.** Since v0.61.0 the client rewrites an outgoing gemini-3.5-flash or gemini-3-flash model ID to gemini-3.8-flash, and gemini-3.1-flash-lite to gemini-3.5-flash-lite, when latest-Flash access is enabled. API-key, Vertex and Gateway auth return true for that gate in client code; Google login uses experiment flags. No exposed setting opts these exact IDs out of the mapping. This establishes request rewriting, not a measured served model or improved quality/latency. Other IDs pass through this table unless the separate experimental dynamic-model configuration changes resolution. The v0.61.0 narrative changelog omitted the mapping change while highlighting versioned-model preservation.

**Operator consequence.** Re-baseline Flash evaluations when upgrading past 0.60.0, even if the configured ID is unchanged. Record the request and returned modelVersion separately; the latter was not observed here. Retaining 0.60.0 also retains this report's older security/reliability defects, so it is not an unqualified remedy. Read preview cherry-picks rather than assuming every stable change had a week of preview exposure.

## 3. Build-file tool gates reach stable and override YOLO

- **Date:** 2026-09-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** bfb71fd2b (#29250) is absent from v0.60.0 and present from v0.61.0 onward. The final non-interactive ASK-to-DENY conversion in 2fe7c2d3f reaches v0.63.0. Latest-stable code and tests confirm tool-name classification and target extraction, with no workspace-trust restriction on these gates.
- **Receipt:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0, https://github.com/google-gemini/gemini-cli/pull/29250, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policy-engine.ts#L903-L956, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/buildFileUtils.ts#L14-L71, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policies/yolo.toml#L50-L56, https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/policy/policy-engine.test.ts#L4290-L4335, https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/tools/shell.ts#L272-L325
- **Half:** both | **Confidence:** high on source and tests; no CLI or bypass executed

**What changed.** Recognized edit-tool calls with an extractable file_path, path, filePath or file target now ask for confirmation when the target is a recognized build/dependency file, including package.json, package-lock.json, pnpm-lock.yaml, yarn.lock, bun.lockb, Makefile, pyproject.toml, go.mod, Cargo.toml, Dockerfile and the other exact names/extensions in buildFileUtils.ts. The Bun entry is bun.lockb, not all Bun lockfiles. These gates override ALLOW in YOLO and trusted workspaces, and become DENY when non-interactive. After a tracked build-file edit, recognized build/test commands ask again and cannot become always-allow. Untrusted-output argument checks also run before shell YOLO bypass, with stable v0.64.0 narrowing their matcher (section 4). This is tool-path enforcement, not a prohibition on all filesystem writes: the YOLO shell rule permits redirection. It does not close every injection-to-build path.

**Operator consequence.** Headless dependency/config-edit jobs using the recognized edit tools can be denied even with YOLO. Move those steps to explicit automation or interactive review, and test the actual tools/commands your job uses. Preserve a filesystem or sandbox boundary when a file must be unwritable; an edit-tool gate alone is insufficient. The benefit is a deliberate confirmation point on the tracked edit-to-build path, with a compatibility cost for unattended jobs.

## 4. Stable v0.64.0 narrows untrusted-argument false positives

- **Date:** 2026-10-13
- **Channel:** `tagged-release`
- **Ancestry evidence:** Main fix 2ce1a6963 first appears in regular preview through composite cherry-pick 581fdbbface8dff93f24db861395f22581099a45 on October 9. That cherry-pick is an ancestor of stable v0.64.0. The tracker and policy-engine blobs at v0.64.0 match the fix commit; the original SHA itself is not an ancestor of that release branch.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29672, https://github.com/google-gemini/gemini-cli/commit/581fdbbface8dff93f24db861395f22581099a45, https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/untrustedContextTracker.ts, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policy-engine.ts#L633-L669, https://github.com/google-gemini/gemini-cli/issues/29579, https://github.com/google-gemini/gemini-cli/issues/29650
- **Half:** both | **Confidence:** high on implementation/channel; warning frequency unmeasured

**What changed.** On 0.61.0 through 0.63.0 the tracker indexed ordinary words and path segments from output marked untrusted, including the shell's own output. Later matching flags/path-like arguments could ask again or fail headless. Users reported ls -ld on 0.61.0 and ls -la, grep -rn and git diff on 0.62.0; those are reports, not measured prevalence. Stable 0.64.0 stops indexing path segments, exempts safe flags, preserves shell variables, limits argument matches to URLs/absolute paths/script extensions, and permits compound commands or loops when every subcommand matches an explicit ALLOW rule.

**Operator consequence.** Upgrade/test 0.64.0 for jobs affected by false-positive prompts or DENY on older stables. Check the same routine commands after output has accumulated. The fix can remove accidental human approvals while preserving narrower taint checks; it is not proof that every legitimate workload proceeds or every hostile one is stopped.

## 5. Headless Plan Mode now encourages autonomous implementation

- **Date:** 2026-10-06
- **Channel:** `tagged-release`
- **Ancestry evidence:** f5dc904d21da337a038f215c433b74382ca82bdb reaches v0.63.0 and remains in v0.64.0, absent from v0.62.0. The headless exit_plan_mode allowance and exit-to-YOLO implementation predate the window, including v0.62.0 and baseline v0.60.0; 1725ec346b5fe9ce889a1df8633d9cdc9d6bb587 dates to March 18.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29539, https://github.com/google-gemini/gemini-cli/issues/28913, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/prompts/snippets.ts#L602-L615, https://github.com/google-gemini/gemini-cli/blob/v0.62.0/packages/core/src/tools/exit-plan-mode.ts#L210-L268, https://github.com/google-gemini/gemini-cli/blob/v0.62.0/packages/core/src/policy/policies/plan.toml#L60-L65
- **Half:** both | **Confidence:** high on prompt and authority path; no headless execution measured

**What changed.** v0.63.0 replaces the headless prompt's wait-for-agreement instruction with directions to settle a strategy, draft the plan without waiting for confirmation and call exit_plan_mode to begin implementation. That exit already switched non-interactive sessions to YOLO. The earlier prompt could leave a run at a text answer, as reported in issue #28913; it never proved every older headless plan run was read-only. The new prompt encourages plan-then-implementation rather than introducing a new authority transition. Unchanged task/todo tools and this prompt change do not establish a first-class durable goal primitive.

**Operator consequence.** Treat headless Plan Mode as an executable workflow, not a read-only review boundary. For plan-only output, deny exit_plan_mode with an explicit policy and verify precedence, or enforce a read-only filesystem. For implementation jobs the prompt removes a reason for stopping at a plan, but success rates were not tested. Attention moves from approving each plan to deciding the run's permitted writes, tools and exit conditions before launch.

## 6. Stable v0.63.0 fixes agent git diff

- **Date:** 2026-10-06
- **Channel:** `tagged-release`
- **Ancestry evidence:** Introducing c0d192452b4e2df7efb6d62a60385f475bfd6779 reached v0.57.0 and is in v0.60.0. Fix 562f0361fe63952fcf2db793e3e9fc0ae69ec506 is absent from v0.62.0 and present in v0.63.0/v0.64.0. Primary and verifier plain-Git 2.51.1 probes reproduced the empty external-diff override error; no CLI execution.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29467, https://github.com/google-gemini/gemini-cli/blob/v0.62.0/packages/core/src/services/shellExecutionService.ts#L597-L606, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/shellExecutionService.ts#L597-L618, https://github.com/google-gemini/gemini-cli/issues/28928
- **Half:** defect | **Confidence:** high on source, ancestry and independently repeated Git mechanism

**What changed.** v0.57.0 through v0.62.0 set diff.external to an empty string in every agent shell environment. Git interprets that as an external program name: an ordinary content diff with changes exits 128, while git diff --no-ext-diff, git diff --stat, git show and git log -p remain usable. v0.63.0 removes the bad override. Seven other overrides remain: credential.helper, core.fsmonitor, core.hooksPath, core.sshCommand, core.editor and sequence.editor blank, core.pager=cat. GIT_CONFIG_GLOBAL and GIT_CONFIG_SYSTEM still point to /dev/null in v0.64.0.

**Operator consequence.** Use 0.63.0 or later for normal diff-based self-review. Older transcripts may contain errors/workarounds, rather than evidence that the agent reviewed the diff. Supply necessary Git identity/other settings at repository level when the agent needs them; do not assume global aliases, URL rewrites or signing settings are visible.

## 7. Tool text fields gain a non-configurable 65536-byte cap

- **Date:** 2026-10-06
- **Channel:** `tagged-release`
- **Ancestry evidence:** bedef96ef42905bd84a86dbec021c706168e7e2f is absent from v0.62.0 and present from v0.63.0 through v0.64.0. The latest-stable scheduler and recursive helper show independent string/part handling and the separate context-management distiller branch.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29451, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/constants.ts#L18, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/scheduler/tool-executor.ts#L202-L213, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/scheduler/tool-executor.ts#L320-L405, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/tool-utils.ts#L185-L278, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/context/chatCompressionService.ts#L495-L509, https://github.com/google-gemini/gemini-cli/blob/v0.60.0/packages/core/src/scheduler/tool-executor.ts#L200-L262
- **Half:** both | **Confidence:** high on source; memory/latency effects unbenchmarked

**What changed.** A 65,536-byte cap now applies to individual handled text strings, parts and response fields in the truncation path. It is not an aggregate ceiling on every result: two 40 KB text parts can both survive, binary/non-plain objects are outside the recursive string treatment, and experimental context management takes a separate distiller branch. A truncated field keeps its head with the explanatory suffix inside the byte budget. Saving the original is best-effort; disk errors are swallowed and some calls have no saved path. The old truncateToolOutputThreshold setting cannot raise this constant. The PR's 512 KB/50,000-token compression watermark is not implemented; compression uses a configured fraction of model context, default 0.5. The compression service also protects three recent tool turns and reduces older eligible responses to 2 KB previews, with retrieval exceptions.

**Operator consequence.** Re-test large file/web/MCP text fields and workflows that previously raised or disabled truncation. Paginate or explicitly preserve full output outside model history when completeness matters. Check that a saved path exists before relying on it; a truncation note is not a durable receipt. The cap bounds handled text without promising either an aggregate payload budget or recoverable omitted content.

## 8. MCP add can erase untrusted project settings until v0.65.0 preview

- **Date:** 2026-10-13
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** f41d0bc8f7fe79563d353f97c7580ed4d8fd24d7 merged October 6, first nightly October 7, regular preview v0.65.0-preview.0 October 13. It is absent from v0.64.0 and present in that preview. Source distinguishes add's write from remove's early empty-map return.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29583, https://github.com/google-gemini/gemini-cli/issues/29465, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settings.ts#L374-L380, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/commands/mcp/add.ts#L161-L165, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/commands/mcp/remove.ts#L24-L34, https://github.com/google-gemini/gemini-cli/blob/v0.65.0-preview.0/packages/cli/src/config/settings.ts#L377-L383, https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0
- **Half:** defect | **Confidence:** high on source/fix; user reproduction attributed

**What changed.** In an untrusted or not-yet-trusted folder, stable 0.64.0 keeps an empty in-memory workspace settings object with a writable project file path. Default project-scoped gemini mcp add can write that object back and erase existing keys in .gemini/settings.json. Issue #29465 reports this on 0.60.0. Stable mcp remove instead finds an empty server map and returns before writing; the evidence does not support a destructive remove claim. Preview 0.65.0-preview.0 marks the empty workspace read-only and rejects project-scoped add/remove with a trust error.

**Operator consequence.** On stable, back up project settings and use mcp add with --scope user, or deliberately trust the folder before project-scoped add. Inspect the resulting settings file. Test 0.65.0-preview.0 if write refusal is needed now; upgrading only to 0.64.0 does not deliver this repair.

## 9. Sandboxes reject sensitive workdirs and Seatbelt changes its state root

- **Date:** 2026-09-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** 9c1b0a610534d6f8120964cf2672c07807d8fc90 is absent from v0.60.0 and present from v0.61.0 through v0.64.0. Latest-stable source separates Docker/Podman/runsc setup, the earlier LXC return, and Seatbelt runtime storage.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29214, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L188-L193, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L398-L403, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L535-L623, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L1033-L1175, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/storage.ts#L70-L135
- **Half:** both | **Confidence:** high on code; no sandbox launched

**What changed.** Sandboxed launches refuse sensitive workdirs such as home, its parents and ~/.gemini. Docker/Podman/runsc additionally sanitize their settings copy, remove hooks/custom tool commands/API keys, force HOME=/home/node, and reject sensitive SANDBOX_MOUNTS paths. LXC has its own workdir/allowed-path checks and returns before that setup; no identical sanitized copy or HOME claim is established for LXC. SANDBOX_MOUNTS parsing is not a Seatbelt feature. With SANDBOX=sandbox-exec, Seatbelt runtime state moves to ~/.cache/.gemini, including MCP/A2A tokens, temporary sessions/checkpoints and policy-integrity state. Trusted folders use that default root unless GEMINI_CLI_TRUSTED_FOLDERS_PATH overrides it.

**Operator consequence.** Launch from a project directory. Recheck hooks/custom tools in Docker/Podman/runsc rather than assuming the host settings survive. On macOS expect separate default token/session/trust paths between Seatbelt and unsandboxed runs; locate resumable sessions under ~/.cache/.gemini and account for the trusted-folder override. Do not infer equivalent isolation details across all sandbox runtimes.

## 10. Stable v0.64.0 relaxes OAuth iss requirements and normalizes terminal turns

- **Date:** 2026-10-13
- **Channel:** `tagged-release`
- **Ancestry evidence:** Main commits 23c77ca61 and 249d51c2631ba1a36b71b0f2c50195abbe4100ce reach v0.64.0 through composite cherry-pick 581fdbbface8dff93f24db861395f22581099a45, despite absence of the original SHAs from its ancestry. oauth-flow.ts/geminiChat.ts blob comparisons establish the implementation.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29616, https://github.com/google-gemini/gemini-cli/pull/29696, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/tools/mcp-server.md#L325-L347, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/mcp/oauth-provider.ts#L411-L421, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/oauth-flow.ts#L268-L300, https://github.com/google-gemini/gemini-cli/commit/249d51c2631ba1a36b71b0f2c50195abbe4100ce
- **Half:** both | **Confidence:** high on source/channel; no MCP login performed

**What changed.** Stable 0.64.0 requires an OAuth callback iss only when discovered metadata declares authorization_response_iss_parameter_supported=true, or an issuer was configured explicitly without discovered metadata. A supplied iss still has to match. The oauth.authorizationResponseIssParameterSupported override can retain strict enforcement. This relaxes 0.60.0's compatibility break for issuer-publishing servers that omit iss; the PR names Notion. The same cherry-pick normalizes outgoing terminal model turns by adding harness-authored Please continue. user content and Response was lost or interrupted. tool responses where needed after rewinds/aborts/cancellation.

**Operator consequence.** Test 0.64.0 with MCP OAuth servers affected by the earlier missing-iss refusal. Set the support override true where that response is expected. In transcript/audit readers, distinguish synthetic continuation and missing-response records from user authorization or successful tool execution.

## 11. ACP permissions correlate with tools and stable v0.64.0 reports usage

- **Date:** 2026-09-29
- **Channel:** `tagged-release`
- **Ancestry evidence:** d5b3e3acc and 49cc3b340 first reach v0.62.0, 361b0bbc5 reaches v0.63.0, and e6550609f/a5cdfab72 reach stable v0.64.0. The last two are no longer preview-only at window close.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29439, https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L753-L782, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L379-L390, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L483-L489, https://github.com/google-gemini/gemini-cli/pull/29549
- **Half:** capability | **Confidence:** high on source/channel; no editor integration run

**What changed.** Since v0.62.0 ACP clients receive a pending tool_call update before permission requests and a failed update on denial; MCP titles separate the explanation. v0.63.0 resolves sessions before initialization and avoids same-minute filename collisions. Stable v0.64.0 adds PromptResponse.usage fields for input/output/cached-read/thought tokens, usage_update turn/context notifications, and exact-ID session recovery with listener cleanup. The PR's approximate billing savings were not measured here.

**Operator consequence.** Editor adapters on 0.64.0 can correlate permission requests with tools and consume usage/context reports without a preview dependency. Recheck request IDs, denial completion and resumed-session identity in the adapter. Use the reported usage for observability, not as independent proof of claimed savings.

## 12. Stable v0.64.0 appends session patches and serializes local writes

- **Date:** 2026-10-13
- **Channel:** `tagged-release`
- **Ancestry evidence:** d1cc08a8a, c6bccb7ec, 5e6915c94 and 478f771f9 are absent from v0.63.0 and present in v0.64.0, after preview October 6. The record type, append path, filesystem service, checkpoint lock and folder-trust hook were read at the stable tag.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29568, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/chatRecordingTypes.ts#L132-L152, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/chatRecordingService.ts#L1494-L1506, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/fileSystemService.ts#L45-L101, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/gitService.ts#L198-L218, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/ui/hooks/useFolderTrust.ts#L82-L85, https://github.com/google-gemini/gemini-cli/pull/29558
- **Half:** both | **Confidence:** high on source/channel; parser and memory effects not measured locally

**What changed.** Stable 0.64.0 appends $patch records instead of repeatedly rewriting the complete message list. Its recording service limits cachedConversation.messages to the last 50 messages, not every in-memory history copy; full history is reconstructable from disk. Edit/write operations and shadow-repository checkpoint snapshots use in-process path locks, and file writes use a sibling temporary file and rename. This is not cross-process locking. CLI persistent state gains atomic writes/backup recovery, and the headless UI receives the resolved folder-trust state. The PR author's 8.2-million-character/400-MB example is an attributed measurement, not a verifier benchmark.

**Operator consequence.** Update session readers to apply $patch before adopting 0.64.0; old $set-only readers can miss changed tool results. Prefer its write/checkpoint serialization within one process, but coordinate separate agent processes yourself. Inspect the full on-disk record when a cached history view is insufficient.

## 13. v0.63.0 hardens redirection config paths reads and untrusted resource output

- **Date:** 2026-10-06
- **Channel:** `tagged-release`
- **Ancestry evidence:** 2fe7c2d3f065dc40ad573d50b2091116f8a4aa18 committed 2026-09-25T22:50:05Z; independently checked as an ancestor of v0.63.0, v0.64.0 and v0.65.0-preview.0. The write-up author read the relevant policy, safety, filesystem and workflow patches through the API.
- **Receipt:** https://github.com/google-gemini/gemini-cli/commit/2fe7c2d3f065dc40ad573d50b2091116f8a4aa18, https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/safety/built-in.ts, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/paths.ts, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/fileUtils.ts
- **Half:** both | **Confidence:** high on reviewed diff/channel; runtime workflow execution not verified

**What changed.** Command-prefix ALLOW rules now need explicit allowRedirection for redirection even in autoEdit/YOLO. The allowed-path checker asks on .gemini configuration edits, recognizes more Windows short-name aliases and blocks .env.* except .env.example/.env.sample/.env.template/.env.dist. Reads re-resolve their target at execution and compare device/inode identities around the read. MCP resource listings/reads and web-search output gain untrusted-context wrappers. The repository's own issue-triage/dedup workflows remove shell tools and parse model output outside the agent; that workflow change is not an npm default.

**Operator consequence.** Recheck narrowly allowlisted redirected commands and unattended edits to .gemini config. Audit .env path exceptions against the exact template names. These checks reduce particular injection/race paths without proving every filesystem race or shell-write path is closed. The repository workflow shows useful authority reduction: let the agent classify, then parse its output in ordinary code.

## 14. A2A settings migrate to nested controls in memory

- **Date:** 2026-10-13
- **Channel:** `tagged-release`
- **Ancestry evidence:** c88b0a6ee58da76e63bab65d268cedf952abb88c committed 2026-09-29T19:46:22Z; absent from v0.63.0, present in v0.64.0 and v0.65.0-preview.0. First regular preview October 6. Author read the config consumers and migration/validation load path.
- **Receipt:** https://github.com/google-gemini/gemini-cli/commit/c88b0a6ee58da76e63bab65d268cedf952abb88c, https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/a2a-server/src/config/settings.ts, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/a2a-server/src/config/config.ts
- **Half:** both | **Confidence:** high on source/channel; no deployment configuration probe

**What changed.** The A2A server loads legacy flat settings, resolves variables, migrates them to nested fields in memory and validates the result. Config consumers read security.folderTrust, general.checkpointing, tools, context.fileFiltering and logging fields. The reviewed load path does not write an on-disk migration. This repairs compatibility between legacy and nested configuration without proving every old deployment's effective settings remain identical.

**Operator consequence.** Inspect effective trust, checkpointing, tool and file-filtering controls after upgrading the A2A server to 0.64.0. Test legacy and nested inputs with your deployment wrapper. A migrated in-memory object is not proof that a settings file was rewritten or that an old flag still has its intended effect.

## 15. Ctrl+C reaches cancellation during active operations in v0.64.0

- **Date:** 2026-10-13
- **Channel:** `tagged-release`
- **Ancestry evidence:** 5b71659d58eab63f5f249524f157c195be420427 committed 2026-10-01T17:41:28Z; absent from v0.63.0 and present in v0.64.0. Author read both input-prompt and keypress-parser changes.
- **Receipt:** https://github.com/google-gemini/gemini-cli/commit/5b71659d58eab63f5f249524f157c195be420427, https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
- **Half:** capability | **Confidence:** high on reviewed diff/channel; stop latency unmeasured

**What changed.** During generation the input prompt lets Ctrl+C propagate to the cancellation handler instead of treating it as input clearing. The mouse-escape parser also emits the Ctrl+C keypress when it arrives during an incomplete escape sequence. These fixes address swallowed emergency cancellation paths, not a measured guarantee about every running subprocess.

**Operator consequence.** Use 0.64.0 and test the stop action with your terminal/session setup. Cancelling active work is an operator control; an input buffer that clears while the work continues is not an adequate substitute. Rapid-exit recording repair remains a separate preview change (section 16).

## 16. Rapid cancellation history repair reaches v0.65.0 preview

- **Date:** 2026-10-13
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** 204db94ae2a33f70afec7400ebf6b78f1b5e2575 committed 2026-10-13T18:30:38Z; independently absent from v0.64.0 and the October 13 nightly, present in v0.65.0-preview.0. Author read AppContainer/useAgentStream/useGeminiStream patches.
- **Receipt:** https://github.com/google-gemini/gemini-cli/commit/204db94ae2a33f70afec7400ebf6b78f1b5e2575, https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0
- **Half:** both | **Confidence:** high on reviewed diff/channel; interruption/recovery not run

**What changed.** Cancellation gains an in-flight state/promise, records synthetic cancelled tool responses for unanswered calls, and lets rapid exit wait briefly for pending cancellation. The source uses bounded waits rather than guaranteeing all external work finishes. This aims to prevent interrupted session history ending with unanswered model tool calls; it is not in stable 0.64.0.

**Operator consequence.** Test 0.65.0-preview.0 if users interrupt and resume tool-heavy runs. Verify cancelled-call records and resumed history around quick repeated Ctrl+C/exit. Treat synthesized cancellation errors as harness bookkeeping, not evidence that the tool completed successfully.

## 17. File references with line suffixes resolve in v0.64.0

- **Date:** 2026-10-13
- **Channel:** `tagged-release`
- **Ancestry evidence:** 7336b08d2925233490a68e495e0c0d3ba58b6706 committed 2026-10-01T17:56:25Z; absent from v0.63.0 and present in v0.64.0. Author read suffix resolution, base-path ignore handling and ghost-text progress checks.
- **Receipt:** https://github.com/google-gemini/gemini-cli/commit/7336b08d2925233490a68e495e0c0d3ba58b6706, https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
- **Half:** capability | **Confidence:** high on reviewed diff/channel; context payload not measured

**What changed.** @file resolution strips recognized trailing line/column/range suffixes when resolving the file, and checks ignore rules against its base path. The same commit prevents zero-progress ghost-text wrapping. A diagnostic such as @src/main.ts:10:5 can resolve without manual cleanup; the change does not establish that only the specified lines are supplied as context.

**Operator consequence.** Paste common diagnostic file references directly on 0.64.0, while inspecting the resulting context when a restricted line range matters. Keep ignore rules on the actual file path. Do not turn path-resolution convenience into a promise of payload minimization.

## 18. IDE companion shutdown repair is in v0.65.0 preview source

- **Date:** 2026-10-13
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** 11db29e66045f56ae6ed4ac263a691610fce4c69 committed 2026-10-08T19:37:57Z; absent from v0.64.0 and present in v0.65.0-preview.0. Author read the companion's transport shutdown, connection closure and generation ownership changes. Marketplace publication was not verified.
- **Receipt:** https://github.com/google-gemini/gemini-cli/commit/11db29e66045f56ae6ed4ac263a691610fce4c69, https://github.com/google-gemini/gemini-cli/blob/v0.65.0-preview.0/packages/vscode-ide-companion/src/ide-server.ts, https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0
- **Half:** defect | **Confidence:** high on repository source/channel; Marketplace availability unknown

**What changed.** IDE companion shutdown closes MCP transports before the HTTP listener and drops remaining connections, rather than waiting indefinitely for open SSE sessions to drain. Concurrent stop calls share a promise, and generation checks avoid a late shutdown removing a newer server's state. This is source in a CLI repository preview tag, not verified delivery of a VS Code extension update.

**Operator consequence.** Integrators maintaining the companion should test shutdown with open MCP sessions. Verify the installed Marketplace extension's version/source separately; upgrading the npm CLI does not establish that the companion received this fix.

## 19. September advisory withdrawal consolidates headless execution exposure

- **Date:** 2026-09-24
- **Channel:** `docs-only`
- **Ancestry evidence:** Advisory database commit 4d9c664d5781d67b4be4238094de5f05fe74a628 is dated 2026-09-24T20:08:28Z; its pinned JSON records withdrawal at 20:05:24Z. Author read the JSON and canonical advisory. This is metadata consolidation, not a new October CLI patch.
- **Receipt:** https://github.com/github/advisory-database/blob/4d9c664d5781d67b4be4238094de5f05fe74a628/advisories/github-reviewed/2026/06/GHSA-jj69-4grx-fqj5/GHSA-jj69-4grx-fqj5.json, https://github.com/advisories/GHSA-wpqr-6v78-jr5g, https://nvd.nist.gov/vuln/detail/CVE-2026-12537
- **Half:** defect | **Confidence:** high on pinned metadata and stated affected/patched channels

**What changed.** GHSA-jj69-4grx-fqj5 was withdrawn as a duplicate of GHSA-wpqr-6v78-jr5g, not merely updated as a second active advisory. The canonical record describes older headless workflows automatically loading attacker-controlled workspace environment/configuration and YOLO ignoring fine-grained shell allowlists, enabling command execution. The duplicate/NVD description specifies malicious .gemini/.env causing host execution before sandbox isolation. Patched channels are CLI 0.39.1 stable, 0.40.0-preview.3, and run-gemini-cli Action 0.1.22; the canonical CLI ranges include versions below 0.39.1 and exactly 0.40.0-preview.2. The current window's stables are outside those ranges.

**Operator consequence.** Deduplicate vulnerability inventories and audit pinned Action and CLI versions separately. Explain the trust/allowlist exposure rather than treating a CVE number as a diagnosis. This metadata change supplies no new fix version for the window's boundary repairs.

## 20. v0.64.0 stable and v0.65.0 preview ship before the window closes

- **Date:** 2026-10-13
- **Channel:** `tagged-release`
- **Ancestry evidence:** Stable v0.64.0 dereferences to 4a0749aceac5643e6f85a36d7420314d85e13b52, one release chore ahead of v0.64.0-preview.1. Preview v0.65.0-preview.0 dereferences to ca417cd41f0dbf091c30d55b5b369f4c6b852fc8. GitHub/npm publication times independently establish both in-window artifacts. Registry tag observation is October 14, not an archived October 13 assignment record.
- **Receipt:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0, https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0, https://registry.npmjs.org/@google%2fgemini-cli, https://www.npmjs.com/package/@google/gemini-cli/v/0.64.0, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/package.json, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/LICENSE, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/cli/auto-memory.md#L15-L58, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settingsSchema.ts#L2225-L2232, https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settingsSchema.ts#L2340-L2348, https://github.com/google-gemini/gemini-cli/blob/42c51822084ac25cd5d97ac0023822c5235f88c8/.github/workflows/release-promote.yml#L3-L7
- **Half:** capability | **Confidence:** high on released versions/times/defaults; historical dist-tag assignments unavailable

**What changed.** The 08:55Z channel snapshot was overtaken by v0.65.0-preview.0 at 20:27:55Z and v0.64.0 stable at 20:44:46Z on GitHub; npm followed at 20:31:28.212Z and 20:48:24.183Z. The window has four stables and six non-nightly previews. The install target is @google/gemini-cli@0.64.0, with Node >=20 and Apache-2.0 licensing unchanged. The last in-window nightly is 0.65.0-nightly.20261013.g51617c1bc; the October 14 registry nightly is outside the window. Auto Memory remains off with reviewable candidates, dynamic-model configuration remains false and enableAgents true. Manual promotion and the 67-minute v0.61.0 preview.1 interval make a fixed week of preview exposure an unsafe release assumption.

**Operator consequence.** Pin `npm install -g @google/gemini-cli@0.64.0` for stable adoption as of the profile date; use exact 0.65.0-preview.0 only for its additional repairs and test them explicitly. Do not present the old preview-only taint/OAuth/session/ACP changes as absent from stable, or the MCP-add repair as already stable. Keep registry retrieval date separate from package publication date.

## Prior claims re-checked

Primary historical checks were at v0.63.0. The crosscheck upgraded the high-impact controls to v0.64.0 as cited below. These are source checks, not certification of every runtime/host combination.

- **autoedit-and-seatbelt:** holds at v0.63.0. `write.toml` keeps top-level `[[safety_checker]]` blocks named allowed-path for `replace` and `write_file` (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/policy/policies/write.toml#L42-L49), and the Seatbelt profile still denies the Docker sockets (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/utils/sandbox-macos-permissive-open.sb#L138-L143). Since v0.61.0, recognized edit-tool calls targeting build files additionally need confirmation in autoEdit (section 3).
- **plugin4shell-unpatched:** unchanged at v0.64.0 and end-of-window main 42c51822084ac25cd5d97ac0023822c5235f88c8. cloneFromGit still fetches the requested ref then checks out FETCH_HEAD without comparing HEAD to that ref (https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/extensions/github.ts#L32-L80). Primary researcher reproduced local-branch precedence with plain Git 2.51.1; verifier also read Git checkout implementation (https://github.com/git/git/blob/v2.51.1/builtin/checkout.c#L1266-L1280). Hosted-service branch acceptance remains untested. AIR reports Google will not patch it (https://www.air.security/blog-posts/plugin4shell); that is attributed reporting, not a Google-confirmed future fact. No new numbered finding repeats this unchanged exposure.
- **v0-57-0-carries-august-preview-fixes:** holds, with a correction. `isAgentsEnabled` is still checked before built-ins load (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/agents/registry.ts#L167-L171) and the retry/TTL and git-env work remain. The git-env change also broke `git diff` until v0.63.0 and nulls the global and system git config for agent shells (item 6).
- **v0-59-v0-60-hardening:** holds at v0.63.0. web_fetch still restricts private, loopback and internal destinations (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/docs/tools/web-fetch.md#L18-L21); `NODE_OPTIONS` and `PYTHONPATH` are still stripped (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/services/environmentSanitization.ts#L241-L246); Docker/Podman/runsc still get an isolated settings dir without `oauth_creds.json` (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/utils/sandboxUtils.ts#L274), extended in v0.61.0 (item 9); workspace-bounded read-only commands (`isPathEscapingWorkspace`, https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/sandbox/utils/commandSafety.ts#L95) and system-settings ownership checks (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/config/settings.ts#L849-L859) remain; the #28863, #29117 and #29120 patches reverse-apply cleanly to the v0.63.0 tree. The `iss` compatibility relaxation reaches stable v0.64.0 (section 10).
- **build-file-gate-preview-only:** changed (see section 3). Reached stable in v0.61.0 on 2026-09-23, and applies to recognized edit tools with an extractable target, in all modes/trust states, with DENY in non-interactive runs. It is not a filesystem prohibition (section 3).
- **a2a-self-trust-rce-fixed-v0-53-0:** holds at v0.63.0. `loadConfig` passes the computed trust into `loadEnvironment` before any workspace env is read (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/a2a-server/src/config/config.ts#L251-L258).
- **adc-https-enforced-v0-54-0:** holds at v0.63.0 (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/agents/auth-provider/google-credentials-provider.ts#L44-L46).
- **agent-authored-prs-on-main:** holds as history; the marker has gone quiet. The newest merged PR titled "[SSR Agent] Issue Fix" is #28882 (merged 2026-08-18); `gh search prs "SSR Agent" --merged-at ">=2026-09-15"` returns nothing. The caretaker PR generator is still in the tree, unchanged since 2026-08-07 (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/tools/caretaker-agent/cloudrun/pr-generator/workflow/worker.py#L36). Could not verify whether later PRs are agent-generated.
- **consumer-service-retired-2026-06-18:** holds. Google's Code Assist release notes and deprecations page (updated 2026-10-09) restate the 2026-06-18 cutoff for individuals, Google AI Pro and Ultra. The repository's authentication page at v0.63.0 still recommends Sign in with Google for those accounts (item 1).
- **oss-repo-active-enterprise-serving:** retire the old adoption posture. Four stables shipped, but new Code Assist Standard/Enterprise subscriptions ended October 9; existing license additions and renewals have the separate sunset dates in section 1. Existing service continues through contract end, not immediate shutdown.
- **memory-reviewable-patch:** holds at v0.63.0, flag-off. Candidates are held in a project-local inbox until approved (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/docs/cli/auto-memory.md#L18-L20), but Auto Memory is `experimental.autoMemory`, off by default (L43-L58).
- **memory-private-allowlist:** holds at v0.63.0 (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/services/memoryPatchUtils.ts#L75-L86).
- **workspace-trust-visible-mcp:** holds at v0.63.0. `mcp list` does not test stdio servers in an untrusted workspace (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/commands/mcp/list.ts#L78-L81).
- **workspace-trust-headless-enforcement:** holds at v0.63.0. When folder trust is enabled, headless mode throws `FatalUntrustedWorkspaceError` unless trust is exactly true (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/utils/userStartupWarnings.ts#L92-L98; docs https://github.com/google-gemini/gemini-cli/blob/v0.63.0/docs/cli/trusted-folders.md#L103-L108). The UI layer now propagates resolved trust in stable v0.64.0 (section 12). If folder trust is disabled, the startup guard returns early (https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/userStartupWarnings.ts#L84-L102).
- **shell-safety-evals:** holds (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/evals/shell_command_safety.eval.ts).
- **shell-tools-allowlist:** holds at v0.63.0 (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/policy/config.ts#L543-L559).
- **subagents-approval-mode-aware:** holds at v0.63.0 (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/agents/local-executor.ts#L1467-L1468).
- **subagent-protocol-pluggable:** holds at v0.63.0 (`AgentProtocol` at https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/agent/types.ts#L14; `LocalSubagentProtocol` and `RemoteSubagentProtocol` implement it).
- **session-invocation-protocols-stable:** holds at v0.63.0 (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/agents/remote-session-invocation.ts#L47).
- **agent-registration-first-wins:** holds at v0.63.0. A duplicate name logs "The later definition will be ignored" (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/agents/registry.ts#L341-L353); load order is built-ins, then project agents only when the folder is trusted, then user agents.
- **auto-modes-merged:** holds in code (`GEMINI_MODEL_ALIAS_AUTO = 'auto'`, old auto IDs deprecated, https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/config/models.ts#L166-L172); `docs/cli/model.md` at v0.63.0 still shows separate "Auto (Gemini 3)" and "Auto (Gemini 2.5)" rows.
- **policy-engine-in-acp:** holds at v0.63.0 (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/acp/acpSession.ts#L101-L153).
- **auto-edit-shell-redirect-approval:** holds at v0.63.0 (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/ui/hooks/useGeminiStream.ts#L1931-L1941).
- **session-export-import:** holds at v0.63.0 (`exportSessionCommand.ts` present; `--session-file` exclusive with `--resume` and `--session-id`, https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/config/config.ts#L245-L249).
- **session-resume-reliability:** holds at v0.63.0 (legacy handling in `packages/core/src/utils/sessionUtils.ts`); two further resume fixes (#29584, #29618) are in v0.65.0-preview.0, not newest stable.
- **agent-execution-stopped-json:** holds at v0.63.0 (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/nonInteractiveCli.ts#L394); `nonInteractiveCli.ts` was not touched in the window.
- **v0-45-0-mcp-blacklist-and-policy-resilience:** holds at v0.63.0 (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/commands/mcp/list.ts#L160-L170).
- **skill-path-traversal-fix-stable-v0-49:** holds at v0.63.0 (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/utils/skillUtils.ts#L81-L86).
- **long-horizon-goal-primitive (open_question):** still no first-class goal primitive at v0.63.0; the task tools (`write-todos.ts`, `trackerTools.ts`, `complete-task.ts`) were not touched in the window.
- **"Who can use it" paragraph:** changed (see section 1).
- **"Channel" paragraph:** superseded. Stable 0.64.0 and preview 0.65.0-preview.0 shipped October 13. Manual dispatch does not guarantee a fixed testing week; preview.1 preceded v0.61.0 npm stable by about 67 minutes. The enableAgents default/gate and Git environment checks hold, with the diff repair in section 6. Registry retrieval and publication dates are distinct.
- **"The floor is 0.60.0" paragraph:** superseded. 0.63.0 first repairs git diff and fails closed on malformed MCP enablement; 0.64.0 adds taint/OAuth/session repairs. MCP-add settings loss still requires preview. The retained fail-closed path is https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/mcp/mcpServerEnablement.ts#L222-L237 .
- **"What 0.60.0 breaks, on purpose" paragraph:** changed. web_fetch's private/loopback restriction holds; missing-iss refusal is conditional in stable 0.64.0 (section 10).
- **"None of it came with an advisory" paragraph:** narrow to no newly published project GHSA for the shipped window fixes. September 24 did withdraw a duplicate advisory (section 19). The researcher found stale narrative changelogs; do not infer absence of all advisory activity.
- **"Plugin4Shell will not be patched" paragraph:** retire the heading's certainty. The checkout remains; future patch policy remains AIR's report, not Google's primary statement.
- **"Preview-only at close" paragraph:** superseded. Build-file/sandbox guards are stable from 0.61.0; taint/OAuth/recording/ACP improvements are stable 0.64.0; the MCP-add and cancellation-history fixes are preview 0.65.0-preview.0.
- **"Who is writing it" paragraph:** holds as history; no prefixed PR merged after 2026-08-18.
- **"What still holds from spring" paragraph:** holds at v0.63.0 on re-read (bullets above), with the precision that memory patches require `experimental.autoMemory`.

## Carry-forward answers

- The build-file gate reached stable v0.61.0, with the narrower edit-tool scope in section 3. Its taint matcher was repaired in stable v0.64.0.
- Google now directly documents the Code Assist subscription sunset, including exact renewal/license dates (section 1). This is not a universal CLI/API shutdown statement, nor confirmation of AIR's future patch-policy report.
- FETCH_HEAD checkout has not changed. Keep the exposure and post-install HEAD check in posture, without a new material-change finding.
- No newly published project GHSA was found for the window's fixes. The duplicate advisory withdrawal is a distinct metadata event (section 19).
- RemoteSessionInvocation's destination was documented all along: the A2A agent-card URL or inline card url the operator configures in .gemini/agents/*.md, wherever that remote agent runs. The January 27 page is unchanged across the checked tags (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/docs/core/remote-agents.md , https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/core/src/agents/types.ts#L177-L189). Retire the claim that its destination is undocumented.

## Operator questions settled

- Trust and authority: recognized build-file edit tools are gated; ordinary taint false positives were narrowed in 0.64.0; Plan Mode remains able to exit to YOLO; extension pins remain unchecked against resulting HEAD; project-scoped mcp add remains destructive on untrusted stable workspaces.
- State/tools/auth: handled text fields gain individual byte caps, git diff works again, session logs gain $patch, writes/checkpoints gain in-process serialization, Seatbelt default state paths change, and Code Assist new subscriptions stop. Output formatter/GEMINI.md path stability is not a claim of unchanged behavior everywhere.
- Adapter/evaluation assumptions: record requested/returned model IDs, parse patches and synthetic turns, correlate ACP tool requests/usage, and test cancellation/resume. Neither a model name nor a planning label proves the run's effective behavior.
- Stable versus preview: 0.64.0 carries the former preview-only taint/OAuth/session/ACP changes. 0.65.0-preview.0 adds MCP-add refusal and rapid-exit history repair. The companion's npm-source preview channel is not a Marketplace delivery receipt.
- Attention: fewer ordinary-command false alarms and correlated ACP prompts can remove accidental approvals. Deliberate edit/build and configuration gates retain human responsibility. No system throughput or warning-frequency measurement was made.

## Leads not promoted

- Issue #29556 reports expanded ${VAR} values persisted by deprecated-settings migration. The v0.63.0 source matches the load/rewrite concern and PR #29564 remained unmerged at the original cutoff, but no credential case was tested. No exposure beyond that source/report scope is promoted (https://github.com/google-gemini/gemini-cli/blob/v0.63.0/packages/cli/src/config/settings.ts#L1074-L1075).
- PR #29451's 512 KB/50,000-token compression watermark is not in stable source (section 7); do not publish it as implemented.
- Exact Code Assist sunset dates are no longer third-party-only leads. They are recorded in section 1 as current official documentation displaying October 13, with no immutable historical capture.
- AIR's report of Google's no-fix/deprecation answer is a receipt for AIR's statement only. No Google-authored future patch-policy statement was found.
- Hosted Git acceptance of a FETCH_HEAD default branch remains untested; the local Git mechanism and unchanged installer were checked.
- No source/model benchmark supports a Gemini 4 Argon claim. Google's September recap names 3.8 Flash but says nothing about CLI routing/performance. Secondary Plugin4Shell/service-sunset coverage does not replace the primary receipts.
- X lane was unavailable this run; no social capture/quotations.

## Surfaces checked

- Primary research: repository identity, releases, tags, npm version times/tags, tagged source, PR/issue bodies, Google docs, advisory records and two plain-Git probes. Existing worktrees were read only; no Gemini CLI process was run.
- Crosscheck: all original thirteen receipt sets, end-of-window release/main identities, ancestry and exact blob equivalence for composite cherry-picks, newest-stable prior controls, advisory consolidation and six material-miss groups.
- Author on 2026-10-14: GitHub API diffs for 2fe7c2d3f065dc40ad573d50b2091116f8a4aa18, c88b0a6ee58da76e63bab65d268cedf952abb88c, 5b71659d58eab63f5f249524f157c195be420427, 204db94ae2a33f70afec7400ebf6b78f1b5e2575, 7336b08d2925233490a68e495e0c0d3ba58b6706 and 11db29e66045f56ae6ed4ac263a691610fce4c69; read-only ancestry against v0.63.0, v0.64.0, v0.65.0-preview.0 and the last in-window nightly. The source commits were never executed.
- Author: npm registry publication times/current tags, stable/preview release records, current official sunset page, pinned September 24 advisory JSON/canonical advisory, and exact recognized build filenames at v0.64.0.

## Not reached

- No API requests to Gemini models, CLI/sandbox execution, real MCP login, editor integration run or model benchmark. Outgoing ID mapping is not an observed served model; warning frequency and memory/throughput gains remain unmeasured.
- No hosted-service FETCH_HEAD acceptance test or author rerun of the researcher's exploit checkout.
- No Marketplace release mapping for the companion change, Homebrew review, or retrospective npm dist-tag assignment archive.
- No immutable historical bytes for Google's sunset pages; their current text and displayed dates are reported as docs-only.
- No cross-process locking guarantee, universal build-file write prohibition, aggregate tool-result cap or promise that every truncated field has a saved original.

## Crosscheck applied

Applied all twelve CORRECTED verdicts and retained the VERIFIED diff repair. No original numbered item was REFUTED or UNVERIFIABLE. Removed original section 11 from numbering because the crosscheck excludes its unchanged Plugin4Shell exposure from new findings; retained it in prior posture with attribution and host limits. Corrected the inclusive October 13 channel inventory, prior claims and operator answers throughout.

Re-read M1-M6's receipts and added seven sections (13-19), splitting M3 into stable cancellation handling and preview history repair. Added section 20 for the missed evening releases/install inventory. M6's withdrawal was checked in immutable database JSON. The official sunset schedule was read with its mutable-document limitation. All numbered sections are sequential and use the required fields/paragraphs. Author retrieval is October 14; event/channel facts stay within the stated window.
