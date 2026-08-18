---
schema_version: bitter.frontier_harvest.v0
provider: pi-coding-agent
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/pi-coding-agent.yml
channels_present: [tagged-release]
window_volume: 9 material changes, 6 capability-bearing, 5 defect-bearing, 3 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- pi-coding-agent (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. JSON and RPC `message_update` becomes delta-only, ending quadratic stdout growth that OOM-killed agents

- **Date:** 2026-08-03 | **Version:** 0.84.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Commit a4475344fb765850ec5321efe3c67e6f364ead5c ("fix(coding-agent): make JSON streaming output linear (#7394)", authored 2026-08-03T16:33:22Z). `gh api repos/earendil-works/pi/compare/v0.84.0...a4475344` returned status=behind, behind_by=139 (ancestor of the v0.84.0 tag). `gh api repos/earendil-works/pi/compare/v0.83.0...a4475344` returned status=ahead, ahead_by=202 (not in v0.83.0). v0.84.0 is a stable, non-prerelease tag: releases API shows prerelease=false, draft=false, published 2026-08-06T11:07:05Z.
- **Receipt:** https://github.com/earendil-works/pi/commit/a4475344fb765850ec5321efe3c67e6f364ead5c
- **Half:** both | **Confidence:** high

**What changed.** Before this change, every `message_update` event in `--mode json` and `--mode rpc` carried the entire cumulative assistant message twice -- once as `message`, once as `assistantMessageEvent.partial` -- and one event was emitted per token delta. Streaming a single large tool call therefore re-serialized all of its arguments on every delta, so stdout grew with the square of the argument size. Issue #7290 documents the measurements: a 19 KB file emitted 165 MB of JSON, a 39 KB file emitted 691 MB, and around 99 KB in one `write` the process exceeded Node's default heap and died with `FATAL ERROR: Reached heap limit`. v0.84.0 removes both cumulative fields; clients must now assemble deltas between `message_start` and `message_end`, with `message_end` authoritative. The v0.84.0 release notes list this under Breaking Changes.

**Operator consequence.** Adapt, then upgrade. Anyone driving Pi non-interactively -- `--mode json`, `--mode rpc`, or any wrapper parsing its event stream -- must rewrite the client to accumulate deltas; code that read `message_update.message` or `assistantMessageEvent.partial` now gets nothing. In exchange, long file writes under automation stop dying at ~99 KB. If you run Pi headless and have seen unexplained heap-limit crashes on large writes, this is the cause and 0.84.0 is the fix.

## 2. Cloudflare AI Gateway requests were silently escaping to api.openai.com; header-deletion markers now preserved

- **Date:** 2026-08-03 | **Version:** 0.84.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Commit a24fb9e96a3fbc7be2a87e81aa1aa5c0ddf95d35 ("fix(coding-agent): preserve auth header deletion markers (#7539)", authored 2026-08-03T12:28:26Z) appears in `gh api repos/earendil-works/pi/compare/v0.83.0...v0.84.0 -q '.commits[]'`, i.e. it is in the range of commits added between the v0.83.0 and v0.84.0 stable tags. v0.84.0 has prerelease=false per the releases API.
- **Receipt:** https://github.com/earendil-works/pi/issues/7030
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Issue #7030 reports that when an OpenAI model was routed through Cloudflare AI Gateway, `getBuiltinProviderForModel()` returned undefined and the code fell back to the raw `openai-responses` API provider. That fallback skipped the Cloudflare stream wrapper, so the base URL still contained unresolved `{CLOUDFLARE_ACCOUNT_ID}`/`{CLOUDFLARE_GATEWAY_ID}` template placeholders, the OpenAI SDK defaulted to `api.openai.com`, and the request went straight to OpenAI carrying the placeholder key literal `"unused"`. v0.84.0's fix changes `ModelRegistry.getApiKeyAndHeaders()` to return `ProviderHeaders` with `string | null` values and to preserve `null` header-deletion markers -- the release notes state this "prevents placeholder OpenAI credentials from being sent through Cloudflare AI Gateway." It is a listed Breaking Change: extensions inspecting returned headers must now handle `null`.

**Operator consequence.** Re-audit, then upgrade. This is an egress finding, not a key leak: no real credential was disclosed, but requests an operator believed were confined to their own Cloudflare AI Gateway were leaving directly to api.openai.com. If you route Pi through a gateway for logging, rate limiting, or data-residency reasons, check your gateway logs against your provider logs for the pre-0.84.0 period -- the traffic you thought you were seeing may not be all of it. Extension authors forwarding headers to pi-ai streams must pass them through unchanged rather than filtering nulls.

## 3. `AGENTS.override.md` lets any directory replace the operator's context file -- and it loads before project trust is resolved

- **Date:** 2026-08-05 | **Version:** 0.84.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Commit 8ecf8a9883d1cb7c78d07c0fd64d32d6a1fd2c4c ("feat(coding-agent): support AGENTS.override.md (#7681)", authored 2026-08-05T19:24:31Z; PR #7681 merged 2026-08-05T19:24:32Z with that merge_commit_sha). `gh api repos/earendil-works/pi/compare/v0.84.0...8ecf8a98` returned status=behind, behind_by=40 -- the commit is an ancestor of the stable v0.84.0 tag. v0.84.0: prerelease=false, draft=false.
- **Receipt:** https://github.com/earendil-works/pi/pull/7681
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Pi now treats `AGENTS.override.md` as the highest-priority context file for each directory. Per docs/usage.md at v0.84.2: "If a directory contains `AGENTS.override.md`, Pi loads it instead of `AGENTS.md` or `CLAUDE.md` from that directory. Context files from other directories still layer normally." The security doc was updated in the same release to name it explicitly among the files exempt from the trust gate: at v0.84.0 and later, docs/security.md reads "Context files such as `AGENTS.override.md`, `AGENTS.md`, and `CLAUDE.md` are loaded regardless of project trust unless context loading is disabled" -- the v0.83.0 text named only `AGENTS.md` and `CLAUDE.md`. The same doc notes that non-interactive modes (`-p`, `--mode json`, `--mode rpc`) show no trust prompt at all.

**Operator consequence.** Try it, but audit for it first. The capability is real -- per-directory context override is the clean answer to monorepos where one root AGENTS.md cannot serve every package. The exposure is that a checked-in `AGENTS.override.md` in a cloned repository displaces whatever guidance you wrote for that directory, and it loads whether or not you trust the project. If you run Pi over repositories you did not author, grep for `AGENTS.override.md` before the first run, or disable context loading with `--no-context-files`/`-nc`. Under headless automation there is no prompt to catch it.

## 4. The session and harness API is replaced wholesale with the v4 lane-based model; legacy repositories removed

- **Date:** 2026-08-06 | **Version:** 0.84.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Documented in the body of the v0.84.0 release under Breaking Changes. v0.84.0 is a stable tag at sha a5f43bf8aff3c55752432655f7334e3dafd1e256 (gh api repos/earendil-works/pi/tags), published 2026-08-06T11:07:05Z with prerelease=false and draft=false per gh api repos/earendil-works/pi/releases. The supporting work is visible as a run of harness-v2 commits in gh api repos/earendil-works/pi/compare/v0.83.0...v0.84.2 dated 2026-08-05 and 2026-08-06 (e.g. 651d5d6a "partial harness v2/json backend (#7611)", 2bb7ba49 "feat: harness v2 r2 (#7669)", a838c069 "harness-v2 jsonl session atomic writes for forks & torn-tail truncation (#7707)").
- **Receipt:** https://github.com/earendil-works/pi/releases/tag/v0.84.0
- **Half:** both | **Confidence:** high

**What changed.** v0.84.0 replaces the inherited pi-agent-core harness session model with the v4 lane-based `Session`, `SessionStorage`, and `SessionRepo` APIs, adding durable operation records, global facts, shared sequence numbers, and tree-scoped lane views. The v2 session and `AgentHarness` API was promoted from pi-agent-core's experimental entrypoint to its default export and the experimental subpaths were removed. The legacy JSONL and in-memory repository APIs are gone; callers must move to v4 `JsonlSessionRepo` or `InMemorySessionRepo`, both implementing the new `SessionRepo` contract. Also breaking in the same release: `ModelRegistry.refresh()` now takes `ModelsRefreshOptions` and returns `ModelsRefreshResult` instead of discarding cancellation and provider errors; `ModelRuntime.setRuntimeApiKey()` takes auth cancellation options rather than catalog refresh options; config-form extension OAuth `refreshToken(credentials, signal)` callbacks must honor a concrete abort signal; and dynamic provider refresh store access is replaced by the read-only `context.stored` snapshot plus a generation-checked `context.publish()` transaction.

**Operator consequence.** Adapt before upgrading, and pin if you embed. If you have wrapped Pi as an agent adapter or built on its SDK, 0.84.0 is not a drop-in minor -- session storage, model-registry refresh, and provider registration contracts all moved at once. The release notes carry before/after migration snippets for the provider refresh path; providers built with `createProvider({ fetchModels })` need no change, but handwritten `Provider.refreshModels()` implementations that touched `context.store` directly must be rewritten around `context.publish()`. Budget a migration pass rather than a version bump.

## 5. `pi auth check` adds a third command that prints a live provider credential to stdout

- **Date:** 2026-08-06 | **Version:** 0.84.1
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Commit a261366bde90c24826eb77bfc600f1bb62ad36e2 ("feat(coding-agent): add auth preflight", authored 2026-08-06T17:43:52Z). `gh api repos/earendil-works/pi/compare/v0.84.1...a261366b` returned status=behind, behind_by=13 -- ancestor of the v0.84.1 tag. `gh api repos/earendil-works/pi/compare/v0.84.0...a261366b` returned status=ahead, ahead_by=17 -- not in v0.84.0. v0.84.1 is stable: prerelease=false, draft=false, published 2026-08-07T06:07:00Z.
- **Receipt:** https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/src/cli/auth-command.ts
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** v0.84.1 adds `pi auth check --provider <p> [--model <m>] [--json] [--credentials] [--no-refresh]`, a credential preflight (issue #7152). The help text in `auth-command.ts` at v0.84.2 states: "Checks refresh expired OAuth credentials by default; --no-refresh prevents this. --credentials emits the credential, or includes it in JSON output." This joins the two commands added on 2026-07-27 (commit 99e34013, "feat: auth print (#7168)", which `gh api compare/v0.83.0...99e34013` shows as behind/ancestor of v0.83.0): `pi auth print-api-key` and `pi auth print-bearer-token`. The test file `test/credential-print.test.ts` at v0.84.2 confirms behaviour: `resolveCredentialForPrint` resolves a stored API key to plaintext, extracts a bearer token out of an `Authorization` header, and -- for an expired OAuth entry -- calls the provider's `refresh` and prints the freshly minted token, persisting it back to storage.

**Operator consequence.** Watch, and treat it as a design decision to plan around. The capability is legitimate -- a preflight that tells you whether credentials will resolve before a long unattended run is genuinely useful, and `--no-refresh` lets you check without minting. But it also means a third command surface can print a live secret, including one refreshed on demand from an expired OAuth grant. See the carry-forward answer: none of the three is gated from Pi's own shell tool. If you share a host or a container with an agent session, the mitigation is process isolation and short-lived credentials, not a Pi-side flag.

## 6. Extension `tool_call` handlers can terminate a blocked batch without paying for another model call

- **Date:** 2026-08-06 | **Version:** 0.84.1
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Commit 1eb988cfe88fb0ff740ff62583d2f16359f7b6b0 ("feat(agent): allow blocked tool calls to terminate (#7715)", authored 2026-08-06T15:14:48Z). `gh api repos/earendil-works/pi/compare/v0.84.1...1eb988cf` returned status=behind, behind_by=22 -- ancestor of the stable v0.84.1 tag (prerelease=false).
- **Receipt:** https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/extensions.md
- **Half:** capability | **Confidence:** high

**What changed.** `tool_call` handlers now return `{ block: true, reason?: string, terminate?: boolean }`. Per docs/extensions.md at v0.84.2: "`terminate` only applies to a blocked call; the agent stops early only when every finalized result in the batch is terminating." The doc's worked example is exactly the governance case -- intercept `bash`, and if the command contains `rm -rf`, return `{ block: true, reason: "Dangerous command", terminate: true }`. The same release contributed by @muyiyr (PR #7715). A parallel `terminate: true` return from a custom tool's `execute()` carries the same semantics for structured-output tools that should end the turn.

**Operator consequence.** Try it if you are building the permission layer Pi deliberately omits. Pi ships no permission popups and no built-in sandbox; the `tool_call` interception hook is where operators have been implementing their own policy. Until 0.84.1, blocking a call still triggered an automatic follow-up model call -- so a policy that refuses a whole batch burned a round trip explaining itself to the model. Now a wholly-refused batch stops. That makes an extension-layer command policy cheap enough to run on every turn.

## 7. Bun standalone binaries crashed at startup in any directory containing a `bunfig.toml` with `preload`

- **Date:** 2026-08-06 | **Version:** 0.84.1
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Listed under Fixed in the v0.84.1 release body, referencing PR #7685. Backing commit beeca6ab ("fix(coding-agent): disable bunfig autoload in compiled binaries (#7685)", 2026-08-06T15:16:12Z) appears in the commit range returned by `gh api repos/earendil-works/pi/compare/v0.83.0...v0.84.2`, between the v0.84.0 and v0.84.1 tag points. v0.84.1: prerelease=false, published 2026-08-07T06:07:00Z.
- **Receipt:** https://github.com/earendil-works/pi/pull/7685
- **Half:** defect | **Confidence:** high

**What changed.** Pi's compiled Bun standalone binaries crashed on startup whenever the current working directory contained a `bunfig.toml` declaring `preload`. The binary was autoloading the project's bunfig and executing its preload scripts inside itself. Fixed by compiling with `--no-compile-autoload-bunfig`. Contributed by @geril07.

**Operator consequence.** Upgrade if you install Pi as a standalone binary and work on Bun projects. Before 0.84.1 the failure looked like Pi being broken rather than the directory being the trigger, which is a hard symptom to diagnose. Worth noting for its own sake: a compiled agent binary was reading and running a preload script out of whatever directory it happened to be started in.

## 8. `Agent.reset()` wiped transcript and runtime state mid-run; it now rejects until idle

- **Date:** 2026-08-06 | **Version:** 0.84.1
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Commit 1532c999 ("fix(agent): reject reset during active runs (#7717)", 2026-08-06T15:12:25Z) appears in the commit list from `gh api repos/earendil-works/pi/compare/v0.83.0...v0.84.2`, after the v0.84.0 tag commit a5f43bf8 and before the v0.84.1 tag. Listed under Fixed in the v0.84.1 release body. v0.84.1 is a stable tag (prerelease=false).
- **Receipt:** https://github.com/earendil-works/pi/pull/7717
- **Half:** defect | **Confidence:** high

**What changed.** Calling `Agent.reset()` while a run was in flight cleared the transcript and runtime state underneath the active turn. It now rejects until the agent is idle. Contributed by @wesleyzhangwq.

**Operator consequence.** Upgrade if you embed Pi via the SDK and reset agents programmatically -- for example a long-lived server that recycles an agent between requests. The old behaviour corrupted state silently rather than erroring, so the damage surfaced later as an inexplicably empty or truncated transcript. Callers now get a rejection they can await on instead.

## 9. Fullscreen TUI mode, Mermaid and LaTeX rendering, Baseten and Qwen Token Plan providers

- **Date:** 2026-08-06 | **Version:** 0.84.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Documented in the v0.84.0 and v0.84.1 release bodies. v0.84.0 tag sha a5f43bf8aff3c55752432655f7334e3dafd1e256, v0.84.1 tag sha 53fa77ccd8a279eb87e92294ef3687b03ff80112, both prerelease=false and draft=false per gh api repos/earendil-works/pi/releases. Supporting commits appear in gh api repos/earendil-works/pi/compare/v0.83.0...v0.84.2: 05e89b41 "feat(tui): render LaTeX math in Markdown" (2026-08-05), 5446cd75 "feat(coding-agent): rename UI mode to TUI mode" (2026-08-05), c03d78bd "feat(ai): add Qwen Token Plan Individual provider (#7659)" (2026-08-06).
- **Receipt:** https://github.com/earendil-works/pi/releases/tag/v0.84.0
- **Half:** capability | **Confidence:** high

**What changed.** v0.84.0 adds a fullscreen TUI mode switchable at runtime, with a sticky editor and footer, an independently scrollable transcript, and draggable scrollbars; Mermaid diagram and terminal-Unicode math rendering in interactive transcripts; arbitrary OpenAI-compatible `samplingParams` plus opt-in vLLM `thinking_token_budget`; and a built-in Baseten provider. v0.84.1 adds a Qwen Token Plan Individual provider (PR #7659, @arasovic) and multi-click word/paragraph selection. v0.84.2 adds fullscreen transcript search on Ctrl+Shift+F, a configurable fullscreen exit output (print the transcript, or only a resume hint), and `--use-theme <name[/name]>` for a per-run theme that does not touch saved settings (PR #7722, @rwachtler). Note the qualifier in docs/usage.md at v0.84.2: the flag is documented as `--tui-mode <mode>` with `regular` (default) or **experimental** `fullscreen`, and iTerm2 renders inline images only as text placeholders in fullscreen because its inline-image protocol cannot crop placements during application-owned scrolling.

**Operator consequence.** Try fullscreen mode, but keep `regular` as the default for now. The three releases spend most of their surface area on the terminal, and the payoff is real for long sessions -- a transcript you can scroll and search without losing the editor. The caveat is that the release notes call it a headline feature while the docs still call it experimental, with named terminal-specific degradations. That gap between the release note and the doc is the thing to notice. `samplingParams` and `thinking_token_budget` matter more if you self-host: they let a vLLM or OpenAI-compatible endpoint be tuned from Pi's config instead of forked code.

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
