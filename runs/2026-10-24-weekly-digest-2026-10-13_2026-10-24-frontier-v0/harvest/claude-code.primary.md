---
schema_version: bitter.frontier_harvest.v0
provider: claude-code
window: 2026-10-13..2026-10-24
run: 2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0
source_contract: sources/claude-code.yml
channels_present: [tagged-release, main-unreleased, docs-only]
window_volume: 12 non-prerelease releases (2.1.299 to 2.1.310); 25 public-repository commits from the baseline tag to latest and 2 further main commits; 27 material changes plus a current-channel observation; no repository advisory published or updated after the cutoff; two later global security-database events
lane: primary sources, profile-refresh researcher
---

# Harvest: claude-code (primary sources)

Identity confirmed: [anthropics/claude-code at v2.1.310](https://github.com/anthropics/claude-code/tree/v2.1.310), the official Claude Code repository and release record, linked to npm `@anthropic-ai/claude-code`. This is the coding harness, including explicitly identified Code tab, cloud and review surfaces, not Claude chat. The engine is closed source; the public repository contains release notes and inspectable built-in mods. Public-repository ancestry proves inclusion of those files, not ancestry of the closed engine. The existing blobless, no-checkout clone at `tmp/cycle-2026-10-24/clones/claude-code/` had the correct upstream and was read without executing its code. The window starts after 2026-10-13T23:59:59Z; initial research read closed at 2026-10-24T10:02:25Z; write-up receipt and channel rechecks extended through 2026-10-24T10:18:02Z. Marketing and social descriptions supplied leads, not product proof.

## Install today

**Newest non-prerelease release: 2.1.310**, published 2026-10-23T23:39:00Z, `prerelease=false`. **Anthropic's stable selector: 2.1.308**, published 2026-10-22T04:34:55Z. These are different meanings of stable. For the permission, sandbox and Windows hook cases below, test and pin `npm install -g @anthropic-ai/claude-code@2.1.310`. This is installation advice, not a command executed during research. [2.1.310 release](https://github.com/anthropics/claude-code/releases/tag/v2.1.310), [2.1.308 release](https://github.com/anthropics/claude-code/releases/tag/v2.1.308), [versioned npm manifest](https://registry.npmjs.org/@anthropic-ai%2fclaude-code/2.1.310).

| Moving surface | UTC read on 2026-10-24 | Observed pointer | Receipt |
|---|---|---|---|
| npm parent package dist-tags | 09:50:43.999746Z | `latest=2.1.310`, `next=2.1.310`, `stable=2.1.308` | [registry](https://registry.npmjs.org/@anthropic-ai%2fclaude-code); [immutable version identity](https://registry.npmjs.org/@anthropic-ai%2fclaude-code/2.1.310) |
| Native latest selector | 09:50:43.651530Z | 2.1.310 | [selector](https://downloads.claude.ai/claude-code-releases/latest), [versioned macOS arm64 download](https://downloads.claude.ai/claude-code-releases/2.1.310/darwin-arm64/claude) |
| Native stable selector | 09:50:43.690314Z | 2.1.308 | [selector](https://downloads.claude.ai/claude-code-releases/stable), [versioned macOS arm64 download](https://downloads.claude.ai/claude-code-releases/2.1.308/darwin-arm64/claude) |
| Homebrew `claude-code` | 09:50:43.626558Z | 2.1.308 | [cask pinned to observed tap revision](https://github.com/Homebrew/homebrew-cask/blob/9ec411cdc7fb37ffd19f74613fe46b8859117ad0/Casks/c/claude-code.rb) |
| Homebrew `claude-code@latest` | 09:50:43.630038Z | 2.1.310 | [cask pinned to observed tap revision](https://github.com/Homebrew/homebrew-cask/blob/12865dc5fe70b59d5d5f33e23f7c9fe1507c8abf/Casks/c/claude-code@latest.rb) |
| GitHub release list | 09:50:44.209184Z | newest 2.1.310; all 12 window releases non-prerelease | [latest versioned release](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) |

The parent npm manifest pins all eight optional native platform packages to 2.1.310. Their independent dist-tags were not inferred from those dependency pins. The `next` tag currently names the same non-prerelease artifact as `latest`; it does not identify a newer beta. npm's metadata modification timestamp was 2026-10-23T23:38:55.109Z. Moving selectors have no immutable historical URL; the table records their live observations and pairs them with versioned artifacts rather than inventing a historical selector log.

**Public main:** `318b7e6ac4e726e88a4ad326214866a93c373b1b`, committed 2026-10-24T02:18:57Z, is 2 ahead / 0 behind v2.1.310 and 5 ahead / 0 behind v2.1.308. The two post-310 commits change the security mod README and comments in `hooks/register.ts`, not executable TypeScript. They explain that an organization's outer plugin can reopen the user tier and that the host verifies an event matcher, not arbitrary branch conditions. Treat those clarifications as `main-unreleased` documentation; do not manufacture a shipped engine change from them. [Latest-to-main compare](https://github.com/anthropics/claude-code/compare/v2.1.310...318b7e6ac4e726e88a4ad326214866a93c373b1b), [stable-to-main compare](https://github.com/anthropics/claude-code/compare/v2.1.308...318b7e6ac4e726e88a4ad326214866a93c373b1b).

**Defaults and gates:** mods remain on, but the built-in security guard's presence depends on managed policy or the relevant Team/Enterprise sign-in. `allowManagedModsOnly` is an administrator opt-in, not a default ban on user mods. General hook failures still default to continuing unless `onFailure: "block"` applies; the Windows exceptions below are separate repairs. Explicit `--permission-mode auto` remains necessary where a headless job needs auto. MCP Tasks is a feature-level public beta on a non-prerelease binary, requires 2.1.304+, and remains flag/provider/session gated; no preview-only CLI tag establishes it. Native server-side auto review remains rollout dependent. [Guard at 310](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md), [permission modes capture](https://web.archive.org/web/20261022024756/https://code.claude.com/docs/en/permission-modes), [hooks capture](https://web.archive.org/web/20261019030048/https://code.claude.com/docs/en/hooks), [MCP capture](https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp).

## Release ledger

Baseline is the parent's newest non-prerelease release, 2.1.296; the parent's separate stable selector was 2.1.287. Publication times come from GitHub release objects and npm metadata, read at the times above. Counts are public-repository `git rev-list --left-right --count <previous>...<tag>`, presented as ahead / behind for the newer tag. They are not closed-binary commit counts. Each tag links to its release; registry times are from the [npm publication record](https://registry.npmjs.org/@anthropic-ai%2fclaude-code).

| Tag | Published (UTC) | Prerelease | ahead_by / behind_by vs previous non-prerelease | npm publish (UTC) |
|---|---|---|---|---|
| [v2.1.296, baseline](https://github.com/anthropics/claude-code/releases/tag/v2.1.296) | 2026-10-09T19:28:59Z | false | 5 / 0 vs v2.1.295 | 2026-10-09T16:58:10.924Z |
| [v2.1.299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299) | 2026-10-14T02:49:42Z | false | 7 / 0 | 2026-10-14T00:23:19.588Z |
| [v2.1.300](https://github.com/anthropics/claude-code/releases/tag/v2.1.300) | 2026-10-14T18:24:25Z | false | 3 / 0 | 2026-10-14T14:27:26.554Z |
| [v2.1.301](https://github.com/anthropics/claude-code/releases/tag/v2.1.301) | 2026-10-15T19:22:06Z | false | 1 / 0 | 2026-10-15T14:34:23.330Z |
| [v2.1.302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) | 2026-10-16T20:53:06Z | false | 1 / 0 | 2026-10-16T16:48:28.057Z |
| [v2.1.303](https://github.com/anthropics/claude-code/releases/tag/v2.1.303) | 2026-10-18T22:26:54Z | false | 3 / 0 | 2026-10-18T21:15:23.178Z |
| [v2.1.304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304) | 2026-10-19T21:34:39Z | false | 1 / 0 | 2026-10-19T19:47:15.337Z |
| [v2.1.305](https://github.com/anthropics/claude-code/releases/tag/v2.1.305) | 2026-10-20T20:46:50Z | false | 3 / 0 | 2026-10-20T19:29:36.816Z |
| [v2.1.306](https://github.com/anthropics/claude-code/releases/tag/v2.1.306) | 2026-10-21T03:16:31Z | false | 1 / 0 | 2026-10-21T02:28:47.495Z |
| [v2.1.307](https://github.com/anthropics/claude-code/releases/tag/v2.1.307) | 2026-10-21T22:17:02Z | false | 1 / 0 | 2026-10-21T20:47:18.383Z |
| [v2.1.308](https://github.com/anthropics/claude-code/releases/tag/v2.1.308) | 2026-10-22T04:34:55Z | false | 1 / 0 | 2026-10-22T04:19:48.902Z |
| [v2.1.309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) | 2026-10-22T22:18:57Z | false | 1 / 0 | 2026-10-22T20:34:13.713Z |
| [v2.1.310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) | 2026-10-23T23:39:00Z | false | 2 / 0 | 2026-10-23T21:20:46.540Z |

The observed release list jumps from 296 to 299. Versions 303 and 308 name only general bug fixes and reliability improvements; their existence does not support a more specific finding. No new or updated advisory appeared among the 35 repository advisory records read at 2026-10-24T09:50:44.050322Z. Security-shaped release notes below remain material even without a CVE. The source notes' statement that no advisory surface exists is stale; this harvest records that discrepancy without editing the notes.

## 1. The published guard now holds policy asks and environment pins over user mods

- **Date:** 2026-10-14
- **Channel:** `tagged-release`
- **Ancestry evidence:** Parent lead bf2323b3021c9d3db7a31e1e7d61068c3f704497 is not an ancestor of v2.1.296, but is an ancestor of v2.1.299, v2.1.308 and v2.1.310. The guard directory is identical between 308 and 310. Version 299 records improved managed permission, hook and MCP-name enforcement.
- **Receipt:** https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/held-verdict/verdicts/holds-over.ts, https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/policy/pinned-names.ts, https://github.com/anthropics/claude-code/releases/tag/v2.1.299, https://github.com/anthropics/claude-code/releases/tag/v2.1.304
- **Half:** both | **Confidence:** high

**What changed.** The parent's main-only guard is delivered. The code preserves a deny, or an ask backed by a rule, hook, setting, policy plugin, ceiling or host callback, when the user tier weakens or relabels it. An ordinary mode-owned dialog ask is not universally protected. Environment pins cover managed environment entries, the configured process wrapper, nine policy/sign-in variables and ten child-code-loading variables. Version 299 also stops user-mod environment changes from rewriting managed command-hook execution and stops hook/mod approvals from authorizing plan-mode writes. Version 304 adds `decider: "person"` and `e.isReadOnly`: a person-only ask requires a dialog or host callback and is refused when neither can answer.

**Operator consequence.** Raise a guard-dependent fleet above 296; both today's stable selector and latest contain this delivery. Keep `allowManagedModsOnly: true` where user code must not participate. This deletes a wait-for-release condition, not the need to choose admitted code: mods execute unsandboxed, the guard must be seated, and an administrator can deliberately relax its verdict holds. Regenerate installed mod types before using the new decider; the [public type mirror at 310](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/types/claude-code.d.ts#L10130) still describes `ToolCheckDecider` as `'host'` despite the 304 release note. Published Linux x64 packages at 299, 308 and 310 passed registry SHA-512 checks and contain the guard's refusal text and policy markers. That corroborates delivery; no enforcement probe was run.

## 2. Unconfigured headless jobs revert from auto to default in several cases

- **Date:** 2026-10-16
- **Channel:** `tagged-release`
- **Ancestry evidence:** The change is in the 2.1.302 changelog carried by both v2.1.308 and v2.1.310; 302 is an ancestor of each.
- **Receipt:** https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L293-L328, https://web.archive.org/web/20261022024756/https://code.claude.com/docs/en/permission-modes
- **Half:** both | **Confidence:** high

**What changed.** With no permission mode configured, `claude -p` and Agent SDK sessions now start in `default` on third-party providers, with telemetry disabled, or on a fresh install. An explicit `--permission-mode auto` keeps auto. This reverses the profile's 285-era headless default, while terminal and VS Code defaults remain a separate case. Version 302 also exposes `CLAUDE_CODE_AUTO_MODE_MODEL` for the client-side classifier only and compacts overlong server-review context instead of blocking every checked call.

**Operator consequence.** Set the mode in each CI job and SDK configuration. A pin alone no longer reproduces the old unconfigured behavior, and a job that cannot ask may now stop on actions it previously classified. Record the classifier actually used; selecting a local classifier model does not select the server's model or prove rollout coverage. Human attention moves from repeated prompts to a deliberate job policy and checks for fallback.

## 3. Latest closes more sandbox escape paths, and shell edits lose a rewind shortcut

- **Date:** 2026-10-22
- **Channel:** `tagged-release`
- **Ancestry evidence:** Version 299 fixes are in 308 and 310; the additional 309 fixes are in 310 but absent from the stable selector's 308. The 309-to-310 public history is linear.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.299, https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L32-L89, https://web.archive.org/web/20261023145040/https://code.claude.com/docs/en/sandboxing
- **Half:** defect | **Confidence:** high

**What changed.** Version 299 protects `--plugin-dir` code from sandboxed writes before its unsandboxed reload and repairs macOS denied-path symlink resolution and allow-glob root rechecking. Version 309 stops shell startup files running outside the sandbox before each command, protects `--mcp-config` from sandboxed commands and auto-accepted edits, repairs symlinked `denyWrite` globs, and keeps Linux denials on background commands. Additional shell/worktree checks cover redirections, wrapped git commands, locale prefixes and zsh arithmetic. Separately, 309 runs `sed -i` as an ordinary Bash command, whose edits are no longer restored by `/rewind`.

**Operator consequence.** Test 310 where sandbox containment is part of the deployment contract; selecting stable currently misses the 309 repairs. Exercise symlink destinations, shell startup and the exact MCP/plugin config paths. Keep a real diff or version-control recovery route for shell edits. A worktree separates files, and a classifier judges tool calls; neither substitutes for an OS boundary around code that must not escape.

## 4. Linux can admit nested user namespaces, at the cost of a sandbox boundary

- **Date:** 2026-10-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** `sandbox.allowNestedUserNamespaces` is named in 2.1.305, an ancestor of both 308 and 310; the archived sandbox guide states the same minimum.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.305, https://web.archive.org/web/20261023145040/https://code.claude.com/docs/en/sandboxing
- **Half:** both | **Confidence:** high

**What changed.** An opt-in permits Chromium/Electron's own sandbox and nested bubblewrap or `unshare` inside Linux/WSL2 commands. The documentation is stronger than a compatibility note: code can end up outside Claude Code's sandbox, so none of its restrictions, including protected paths and credential-file rules, should be relied on against a malicious command. Repository settings cannot enable it. The setting alone is insufficient for rootless Podman or Buildah.

**Operator consequence.** A browser test can become runnable without a separate launcher, but this is a containment decision, not a free fix. Use it only with a separately adequate process boundary and review the workload before allowing commands automatically. For Podman, follow the documented excluded-command route and recognize that those commands run with the user's full access. The new primitive saves integration work while moving judgment to the outer boundary.

## 5. Ultrareview now refuses untrusted noninteractive workspaces unless explicitly trusted

- **Date:** 2026-10-22
- **Channel:** `tagged-release`
- **Ancestry evidence:** The trust change first appears in 2.1.309 and is present at 310; 308 predates it.
- **Receipt:** https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L86, https://www.manifold.security/blog/ai-coding-agents-git-hijack
- **Half:** both | **Confidence:** high

**What changed.** `claude ultrareview` now asks for workspace trust on a terminal and refuses where no terminal can ask. Automation must supply the boolean `--trust-workspace` flag or the documented environment bypass. Put a PR number or base branch before that flag. This is directly relevant to the carried report that repository git configuration could execute before trust. The release note does not name that report, its undisclosed git setting, or a corresponding advisory.

**Operator consequence.** Pin 309+ for this new gate and make the trust decision before granting it in CI. Do not add the bypass globally merely to restore unattended behavior. The prior statement that no release names an ultrareview trust change is superseded; the stronger claim that the researcher's exact exploit is fixed remains unverified. Stable 308 lacks even this newly documented gate.

## 6. Hook failures and approval paths receive further fail-closed repairs

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** Separate repairs are versioned in 299, 300, 309 and 310. Stable 308 contains only the first two; latest contains all four.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.299, https://github.com/anthropics/claude-code/releases/tag/v2.1.300, https://github.com/anthropics/claude-code/releases/tag/v2.1.309, https://github.com/anthropics/claude-code/releases/tag/v2.1.310, https://web.archive.org/web/20261019030048/https://code.claude.com/docs/en/hooks
- **Half:** defect | **Confidence:** high

**What changed.** Version 299 blocks failed Windows `PreToolUse` and `PermissionRequest` hooks with no shell specified when Git is missing. Version 309 repairs PowerShell exit-code handling and the explicit-PowerShell missing-Git case. Version 310 closes the remaining quoted-command-only case. Version 299 also runs UserPromptSubmit before a skill or slash command expands, so blocking the prompt stops embedded shell commands; a skill's own frontmatter hook first runs on the following prompt. Version 300 validates hook `updatedInput` like model input: unknown keys are removed and invalid tool input denies the call. Version 310 also fixes VS Code's plan-feedback button approving a plan when Enter should send feedback.

**Operator consequence.** Windows policy-hook deployments should test 310 with missing Git, a quoted executable path, crashes and timeouts. Keep `onFailure: "block"` for policy hooks: the 295 opt-in remains relevant and the general default remains continue. Do not generalize the social shorthand about exit 2 to every event; `PermissionRequest` needs its documented decision JSON and does not use exit 2 as a universal denial. Test what the approval UI does, not just what its button says.

## 7. MCP admission and retries change which servers start and which calls repeat

- **Date:** 2026-10-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** Versioned changes in 299, 302, 305 and 307 are all carried by 308/310; 309 adds the disabled-server reconnection repair.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.299, https://github.com/anthropics/claude-code/releases/tag/v2.1.302, https://github.com/anthropics/claude-code/releases/tag/v2.1.305, https://github.com/anthropics/claude-code/releases/tag/v2.1.307, https://github.com/anthropics/claude-code/releases/tag/v2.1.309
- **Half:** both | **Confidence:** high

**What changed.** Version 299 checks policy before dynamically added headless/SDK servers connect and before list/get or subagent paths start blocked servers. It also extends the 2026-07-28 protocol default to cloud/Remote Control connectors without flags. Version 302 tolerates missing `resultType`, `ttlMs` or `cacheScope` from peers negotiating that protocol. Version 305 stops `allowedMcpServers` filtering managed stdio definitions whose variable substitution occurs only in `env`: a previously omitted server can start after upgrade. Version 307 retries interrupted HTTP tool calls only when marked read-only or idempotent; 309 prevents a disabled server reconnecting through a prompt.

**Operator consequence.** Re-audit managed MCP inventories at 305+, using `deniedMcpServers` for explicit prohibitions instead of depending on an allowlist exclusion that no longer applies. Server authors must state retry safety correctly. The client can remove some reconnection glue, but a transport failure still does not prove that a mutating action did nothing. Test protocol fallback and record remote action IDs before retrying consequential work.

## 8. Idle compaction reduces recaching work by replacing long idle context with a summary

- **Date:** 2026-10-14
- **Channel:** `tagged-release`
- **Ancestry evidence:** The 299 release announces the behavior while explicitly dating the controls to 290+. Version 302 adds its /config row; both notes are present at 308/310. This is not evidence that the underlying code first arrived in 299.
- **Receipt:** https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L504-L508, https://github.com/anthropics/claude-code/releases/tag/v2.1.302, https://web.archive.org/web/20261019080610/https://code.claude.com/docs/en/settings-reference
- **Half:** both | **Confidence:** high

**What changed.** Eligible interactive terminal conversations on a one-hour prompt-cache TTL, with Anthropic feature-flag fetching available, compact after about 54 idle minutes once context reaches the configured threshold, 200,000 tokens by default, while the computer is awake. A normal 200K context window compacts before reaching that default idle threshold; lowering it can make the session eligible, with a 100,000-token minimum. `idleCompaction: false` disables it; `CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS` changes the threshold. The later settings UI makes the choice discoverable. On return, the model receives a summary instead of all previous context.

**Operator consequence.** Native compaction can replace a timer or manual cleanup habit around long sessions. For a debugging thread where exact earlier details matter, choose the threshold or disable the behavior and retain external evidence. The expected saving is less full-context recaching; no measured quota reduction or accuracy result was established here. Do not use this mechanism as an explanation for the separate usage-drain complaints.

## 9. Forked delegation reaches headless sessions while lifecycle and budget holes close

- **Date:** 2026-10-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** The default changes are in 302, limit repairs in 299/304, and journal repair in 305, all ancestors of 308 and 310. Latest also carries 309's split-pane restriction inheritance repair.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.302, https://github.com/anthropics/claude-code/releases/tag/v2.1.299, https://github.com/anthropics/claude-code/releases/tag/v2.1.304, https://github.com/anthropics/claude-code/releases/tag/v2.1.305, https://github.com/anthropics/claude-code/releases/tag/v2.1.309
- **Half:** both | **Confidence:** high

**What changed.** Fork subagents become default in `-p`, Agent SDK, Desktop and VS Code; `CLAUDE_CODE_FORK_SUBAGENT=0` disables them and `claude mcp serve` never offers them. Desktop/VS Code main-conversation subagents always run in the background; nested Agent calls default to foreground on the named surfaces. Version 299 stops end-of-turn mod prompts extending runs beyond max turns, budget, interruption or ended input. Version 304 closes spawn/resume routes past max turns, Stop or ended input. Version 305 resumes completed workflow `pipeline()` and `parallel()` agents from the journal rather than rerunning them.

**Operator consequence.** Try native context-sharing delegation before maintaining custom prompt-copy and resume scaffolding. Re-test cost/turn limits with mods and child agents, and keep external spend controls where those are required. A recorded completed workflow step can now avoid duplicate execution, but this does not make arbitrary side effects exactly once. Version 309's inherited tool restrictions make 310 the more complete target for delegated jobs.

## 10. Gateway tool search and provider-native monitors absorb more integration code

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** Tool-search default is versioned in 304, regression recovery in 305, and Monitor/gateway compatibility in 310; the last part is absent from 308.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.304, https://github.com/anthropics/claude-code/releases/tag/v2.1.305, https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L3-L6
- **Half:** both | **Confidence:** high

**What changed.** Tool search is on by default behind a custom `ANTHROPIC_BASE_URL` from 304. Version 305 fixes that release's failures when endpoints reject tool search or ToolSearch is excluded: the client retries without it. Version 310 retries without unsupported effort beta values or mid-conversation system messages. It also makes Monitor and plugin monitors available on Bedrock, Vertex, Foundry and telemetry/nonessential-traffic-disabled sessions; those sessions now block long foreground sleeps too.

**Operator consequence.** Re-test a gateway before removing custom tool discovery or polling wrappers. Record whether the search fallback loaded tools conventionally, since the resulting context cost can differ. Monitor broadens native support for waiting on work, but scripts that depended on long foreground sleeps need adaptation. This is provider coverage and compatibility, not evidence that every third-party endpoint implements every native feature.

## 11. Reproduction transcripts gain request contents while prompt and gateway-key leaks are repaired

- **Date:** 2026-10-14
- **Channel:** `tagged-release`
- **Ancestry evidence:** The credential fixes are in 299 and transcript/prompt fixes in 300; both are present at 308 and 310.
- **Receipt:** https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L413-L479, https://github.com/anthropics/claude-code/releases/tag/v2.1.299
- **Half:** both | **Confidence:** high

**What changed.** Local transcripts now include each API request's system prompt, tools and parameters, improving request reproduction while expanding what a shared transcript contains. A mod-rewritten or dropped prompt no longer leaks its original text through the OTel user-prompt event, interaction span or title request. Version 299 stops third-party gateway keys accompanying several requests to Anthropic, including flag/startup/profile/feedback requests and the managed-settings case. Anthropic API keys remain intentionally sent to Anthropic.

**Operator consequence.** Revisit diagnostic-export and retention rules before asking colleagues to upload whole session files. Keep redaction on both `prompt` and `prompt_text`; the repaired rewrite path does not remove either field. These named fixes establish specific exposure paths. They do not establish or fix the separate practitioner allegation about personal information in web-request headers.

## 12. Safety events make the reason for an interruption easier to inspect

- **Date:** 2026-10-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** Version 307 adds the safety event; 300 adds cache-lifetime counters, 301 classifier fields and 302 field fixes. All are present at 308 and 310.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.307, https://github.com/anthropics/claude-code/releases/tag/v2.1.301, https://github.com/anthropics/claude-code/releases/tag/v2.1.302, https://github.com/anthropics/claude-code/releases/tag/v2.1.300
- **Half:** capability | **Confidence:** high

**What changed.** `claude_code.safety_event` reports calls stopped, prompted or sent back by rules, auto mode, safety checks, hooks or the sandbox. `tool_decision` also gains classifier verdict and permission mode; classifier category requires `OTEL_LOG_TOOL_DETAILS=1`, and 302 repairs missing categories and attribute-limit interactions. API events split five-minute and one-hour cache creation tokens.

**Operator consequence.** Use these native events to distinguish a policy block, classifier decision, retry and cache expense before building another log parser. Preserve correlation fields when collector attribute limits are low. An emitted event is an observation of the client's decision, not proof of an OS boundary, a successful redaction policy or the server's quota accounting. The saved attention is in diagnosing why work stopped.

## 13. MCP Tasks introduces server-owned jobs, with session and cancellation limits

- **Date:** 2026-10-24
- **Channel:** `docs-only`
- **Ancestry evidence:** Official documentation captured at 2026-10-24T08:50:41Z and read at 09:49:30Z names public beta and minimum 2.1.304. Stable 308 and latest 310 clear that version floor; version alone does not establish feature-flag eligibility. No preview-tag-only artifact was found for this feature.
- **Receipt:** https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp, https://github.com/anthropics/claude-code/releases/tag/v2.1.304, https://github.com/anthropics/claude-code/releases/tag/v2.1.310
- **Half:** capability | **Confidence:** high

**What changed.** Eligible main-conversation calls can return a server task handle while Claude continues working. Remote tasks survive client exit and can be followed by resuming the same session. This differs from a long ordinary tool call merely moved to the client's background. The beta requires flag fetching, a supporting server on protocol 2026-07-28 and supported CLI/SDK/GitHub Actions sessions; legacy negotiation rules it out, and third-party providers, telemetry-off sessions, Desktop and VS Code are excluded by the captured guide. Streaming headless sessions need the documented background settings and open input; a one-shot `claude -p "<prompt>"` does not get MCP Tasks.

**Operator consequence.** A server-owned export or build can replace a client polling wrapper. Preserve server identity, connection settings and session identity for recovery. Stdio processes ordinarily stop at client exit; cancellation requests do not guarantee stopped side effects. An expired unknown task outcome needs server-side reconciliation before retry. Noninteractive task elicitation cancels without running Elicitation hooks or the SDK callback. The wider social announcement does not make ordinary URL-mode elicitation new: it was already recorded in 281.

## 14. Hosted Code Review leaves preview and exposes review depth and stopping controls

- **Date:** 2026-10-15
- **Channel:** `docs-only`
- **Ancestry evidence:** Anthropic's dated 2026-10-15 engineering article says GA; the 2026-10-17 documentation capture describes the service. Versioned product notes under 304, 307 and 309 record depth and stop controls, but this is a hosted service, not code delivered merely by installing the CLI.
- **Receipt:** https://claude.dev/blog/solving-code-review-at-anthropic/, https://web.archive.org/web/20261017030656/https://code.claude.com/docs/en/code-review, https://github.com/anthropics/claude-code/releases/tag/v2.1.304, https://github.com/anthropics/claude-code/releases/tag/v2.1.307, https://github.com/anthropics/claude-code/releases/tag/v2.1.309
- **Half:** both | **Confidence:** high

**What changed.** The hosted Team/Enterprise service is GA. Owners choose Quick, Standard or Deep, with Standard the default and per-repository overrides. The service verifies candidate findings before posting inline comments and a check; it does not approve or block a pull request. Version 307's product notes add `@claude review stop` and aliases to end a review-always subscription; 309 repairs queued pushes still starting reviews after a stop. Local `/code-review` remains a distinct session command available on any plan.

**Operator consequence.** Try native review before maintaining a PR-comment orchestration service, but keep ownership of merge policy and measure false positives and missed bugs on the team's code. Set depth and cost policy per repository, and verify queued work actually stops. Anthropic's account of reduced internal reverts is a vendor report about its own process, not an independently established result of enabling this product.

## 15. Desktop documents saved environments and in-session tasks, while cloud access gets role controls

- **Date:** 2026-10-24
- **Channel:** `docs-only`
- **Ancestry evidence:** The official Desktop guide was read in its 2026-10-23T14:44:11Z capture. No CLI tag establishes the desktop layout rollout. The cloud-role controls are separately named in the 2.1.310 product notes.
- **Receipt:** https://web.archive.org/web/20261023144411/https://code.claude.com/docs/en/desktop, https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L19-L25
- **Half:** capability | **Confidence:** high

**What changed.** The Code tab documents saved local/SSH/cloud environments, parallel sessions and, inside a session, subagents, background shell commands and dynamic workflows in the tasks pane, and worktree choices for isolation. Its current and earlier layouts differ; some third-party deployments retain the earlier layout. Worktree use is optional, not universal isolation. The 310 product notes separately add cloud-session and Remote Control permissions to Enterprise custom roles, with confirmation listing affected roles when access is enabled.

**Operator consequence.** Test the Code tab as a native supervision surface before building another session dashboard. Cross-session supervision covers Desktop-run local/SSH/WSL sessions, excluding cloud, terminal CLI and VS Code sessions; it cannot replace a dashboard covering those other surfaces. Choose the execution host and worktree policy explicitly. A saved environment saves setup attention; it does not establish permission parity or better results than the CLI. SSH work can outlive a connection, but credential expiry, reconnection rules and Desktop-mediated tools can still stop it. Do not interpret an interface launch as a guarantee of unattended overnight completion.

## 16. Python SDK resume injection enters NVD after its July fix

- **Date:** 2026-10-16
- **Channel:** `tagged-release`
- **Ancestry evidence:** SDK fix 347a1cb88d7652199399db1b7f914e0a459a6662 is the merge base of the comparison to v0.2.121, ahead 4 / behind 0. That non-prerelease SDK release was published 2026-07-17T00:39:25Z; PyPI uploads agree. This is not CLI engine ancestry.
- **Receipt:** https://nvd.nist.gov/vuln/detail/CVE-2026-96620, https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2026-96620, https://github.com/anthropics/claude-agent-sdk-python/security/advisories/GHSA-h4mw-j7qp-8mwm, https://github.com/anthropics/claude-agent-sdk-python/commit/347a1cb88d7652199399db1b7f914e0a459a6662, https://github.com/anthropics/claude-agent-sdk-python/compare/347a1cb88d7652199399db1b7f914e0a459a6662...v0.2.121, https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.121, https://pypi.org/pypi/claude-agent-sdk/0.2.121/json
- **Half:** defect | **Confidence:** high

**What changed.** NVD published CVE-2026-96620 at 2026-10-16T20:18:28.293Z and modified it at 2026-10-21T22:16:50.597Z. The canonical advisory was already public on 12 September. Python claude-agent-sdk below 0.2.121 passed an untrusted resume ID as a separate CLI argument: an attacker-controlled dash-leading ID could inject an MCP configuration and execute a stdio server at startup outside SDK permission controls. The July fix binds resume/session-id values with an equals sign.

**Operator consequence.** Check the installed Python SDK dependency separately from the CLI pin, especially applications accepting resume IDs from requests. Use a fixed SDK, 0.2.121 or later. This is a newly indexed disclosure of an older fixed boundary, not a new CLI 310 vulnerability or proof that upgrading the CLI repairs an old SDK.

## 17. Plugin4Shell reaches the global advisory database after the repository disclosure

- **Date:** 2026-10-15
- **Channel:** `tagged-release`
- **Ancestry evidence:** The repository advisory names 2.1.179 as the fixed CLI build. Both current releases, 308 and 310, are later; no new code fix is dated to this database event.
- **Receipt:** https://github.com/advisories/GHSA-pq7j-f95f-qfcv, https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv, https://github.com/anthropics/claude-code/releases/tag/v2.1.179
- **Half:** defect | **Confidence:** high

**What changed.** GitHub's global advisory record was published at 2026-10-15T20:22:07Z and updated one second later. Repository disclosure remains 9 October. A malicious plugin upstream could replace a reviewed commit with attacker-controlled code by supplying a branch named like the commit hash; the fixed build remains 2.1.179.

**Operator consequence.** Inventory manually pinned older installations and plugin sources against the fixed build. Treat the later database entry as disclosure visibility, not a second vulnerability or October patch. A repository-only advisory scan does not cover later global indexing.

## 18. Remote Control rejects two sandbox flags that previously did nothing

- **Date:** 2026-10-14
- **Channel:** `tagged-release`
- **Ancestry evidence:** The 300 release note is carried by 308 and 310.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.300
- **Half:** both | **Confidence:** high

**What changed.** claude remote-control removes --sandbox and --no-sandbox. Either now exits with an error; neither previously enabled or disabled containment. sandbox.enabled in settings is the supported control.

**Operator consequence.** Remove those flags from launch wrappers and verify sandbox.enabled on the executing machine. A formerly accepted flag can now stop startup, while removing it does not itself change effective containment.

## 19. Deletion prompts narrow while unavailable sandbox write fallbacks are refused

- **Date:** 2026-10-22
- **Channel:** `tagged-release`
- **Ancestry evidence:** 299 is in 308/310; 309 is in 310 and absent from stable 308.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.299, https://github.com/anthropics/claude-code/releases/tag/v2.1.309
- **Half:** both | **Confidence:** high

**What changed.** 299 stops prompting for rm built at runtime inside a script the client cannot read unless CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT=1 is set. 309 changes the dangerous rm/rmdir prompt in Desktop and VS Code bypass mode to immediate denial with a rewrite hint. For commands excluded from an enabled but unavailable sandbox, writes to sandbox write-list paths now ask and the unsandboxed fallback is refused there.

**Operator consequence.** Re-test deletion policies that depended on a prompt and decide whether the strict inline-shell setting is needed. Check bypass jobs for the new denial path and exercise sandbox-unavailable writes. Reduced waiting does not mean those commands became approved.

## 20. Managed policy refresh and hosted transport settings gain stricter boundaries

- **Date:** 2026-10-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** 299, 300 and 304 are ancestors of 308 and 310 in the public release record.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.299, https://github.com/anthropics/claude-code/releases/tag/v2.1.300, https://github.com/anthropics/claude-code/releases/tag/v2.1.304
- **Half:** both | **Confidence:** high

**What changed.** 299 repairs a locally changed stored plan suppressing policy fetch under forceLoginOrgUUID and preserves machine forceLoginOrgUUID/Method over server policy. 300 ignores settings-sourced CA-bundle, tool-proxy and git TLS/config variables in host-managed sessions, limited to project settings under Desktop. It also applies managed settings in the named Anthropic-operated Desktop gateway case and makes unsupported desktop gateway policy keys stop startup. 304 refreshes organization policy after startup API-key approval or account-source changes.

**Operator consequence.** Inspect policy loading after login changes and test gateway deployments with their real CA/proxy/git variables. A stricter startup failure can require configuration changes. Verify the executing account loaded policy before reasoning about the guard's options.

## 21. MCP rule names and Anthropic proxy redirects become stricter

- **Date:** 2026-10-14
- **Channel:** `tagged-release`
- **Ancestry evidence:** The 299 release is included in 308 and 310.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.299
- **Half:** both | **Confidence:** high

**What changed.** 299 repairs deny/ask matching for normalized MCP names containing double underscores. Bare mcp__a allow rules and corresponding agent tool lists reach only the intended normalized server, rather than similarly prefixed names. Requests no longer follow redirects at claude.ai connector, Anthropic-hosted MCP and session MCP proxy boundaries; redirects from a connector's own server remain unaffected.

**Operator consequence.** Use the complete normalized server name in permission rules and inspect connector redirects before rollout. A policy or adapter that depended on prefix matching or proxy redirects can lose previously reachable tools; do not widen rules merely to restore that reach.

## 22. Skill grants now depend more closely on admitted hooks and managed settings

- **Date:** 2026-10-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** The 304 and 305 notes are carried by 308 and 310.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.304, https://github.com/anthropics/claude-code/releases/tag/v2.1.305
- **Half:** both | **Confidence:** high

**What changed.** 304 gives settings.read hooks each settings layer and a rewrite of the merged result. A skill source can register at most 1,024 hooks and 16,384 matcher characters per session. A main-conversation skill loses allowed-tools when plugin-only hook policy excludes its hooks. 305 also removes allowed-tools from Desktop path-mounted plugins under allowManagedPermissionRulesOnly.

**Operator consequence.** Re-test settings-rewriting mods and skills whose tool grants assumed their hooks would run. Hook admission and pre-approval must be reviewed together. The new ceilings support organization policy but can change effective retention settings and break oversized skill sources.

## 23. Plugin hook delivery failures refuse actions and missing agent-hook models fall back

- **Date:** 2026-10-14
- **Channel:** `tagged-release`
- **Ancestry evidence:** 299 and 300 are in both 308 and 310.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.299, https://github.com/anthropics/claude-code/releases/tag/v2.1.300
- **Half:** defect | **Confidence:** high

**What changed.** 299 refuses blockable actions when a plugin hook cannot receive the event or return its answer; if a tool already ran, its result is withheld. 300 fixes agent hooks ignoring their configured model, resolves model aliases and falls back to the caller's model when the selected model is unavailable instead of allowing the action.

**Operator consequence.** Test malformed hook inputs, unreadable results and unavailable models as well as Windows shell failures. A withheld result is not rollback of a completed side effect. These specific repairs do not change the general onFailure default for command or HTTP hooks.

## 24. Background restart preserves safe mode and remote mod revocation reaches open sessions

- **Date:** 2026-10-14
- **Channel:** `tagged-release`
- **Ancestry evidence:** All three changes are named in 299, included in 308 and 310.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.299
- **Half:** both | **Confidence:** high

**What changed.** 299 stops restarted or woken background sessions silently leaving safe mode. Remotely disabled installed mods now unload between turns. The printed resume command uses a session ID instead of its name, preventing a crafted name executing when that line is pasted.

**Operator consequence.** Verify safe mode after restart and remote revocation between turns. Keep launch and resume evidence together rather than assuming a launch-time restriction survived. ID-based resume output removes a reason to maintain a separate name-escaping wrapper.

## 25. Worktree exit cleanup is repaired where it could discard commits

- **Date:** 2026-10-22
- **Channel:** `tagged-release`
- **Ancestry evidence:** 301 and 304 cleanup repairs reach 308 and 310. The separate 309 replace-ref repair reaches 310 only.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.301, https://github.com/anthropics/claude-code/releases/tag/v2.1.304, https://github.com/anthropics/claude-code/releases/tag/v2.1.309
- **Half:** defect | **Confidence:** high

**What changed.** 301 repairs unprompted exit removal of WorktreeCreate-hook worktrees that might contain unpushed commits. 304 repairs exit cleanup removing a worktree and its branch after detached HEAD or branch changes, potentially losing commits. 309 makes harness-created worktrees and branch checkouts ignore git replace refs.

**Operator consequence.** Re-test retention using the team's actual creation hook, detached HEAD and branch-switch workflow before delegating cleanup. Keep an independent record of important commits. Worktree isolation must include ownership of what survives session exit.

## 26. Runner setup gains a timeout and interrupted remote tool outcomes become explicit

- **Date:** 2026-10-22
- **Channel:** `tagged-release`
- **Ancestry evidence:** 307 runner controls reach 308/310; 309 unknown-outcome notices reach 310. The 302 routine replay fix is separately scoped hosted product behavior, not delivered by a local CLI pin.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.302, https://github.com/anthropics/claude-code/releases/tag/v2.1.307, https://github.com/anthropics/claude-code/releases/tag/v2.1.309
- **Half:** both | **Confidence:** high

**What changed.** 307 stops checkout hooks after 30 minutes by default and fails session setup; --checkout-hook-timeout-min changes it and 0 disables it. 309 tells the model which tool call a runner move interrupted and marks its outcome unknown. Separately, 302 hosted notes repair a failed scheduled routine restarting from the beginning an hour or more later and potentially duplicating external work.

**Operator consequence.** Set a deliberate checkout budget and investigate slow setup before extending it. On remote recovery, reconcile the action's external identity before retrying. The unknown-outcome notice improves the decision presented to the agent; it does not make remote effects exactly once.

## 27. Unattended retry can bound a usage wait and recheck an early limit lift

- **Date:** 2026-10-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** 301 and 305 are included in 308 and 310.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.301, https://github.com/anthropics/claude-code/releases/tag/v2.1.305
- **Half:** capability | **Confidence:** high

**What changed.** 301 adds CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS to end an unattended retry request when its usage reset is too far away. 305 adds CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS to notice a limit lifted before the advertised reset.

**Operator consequence.** Configure native unattended retry before maintaining a usage-limit polling wrapper. Set a maximum wait that matches the job deadline. These controls manage waiting and establish neither the cause nor a fix for separate usage-drain reports.

## 28. Latest is 2.1.310 while the stable selector remains 2.1.308

- **Date:** 2026-10-24
- **Channel:** `tagged-release`
- **Ancestry evidence:** 310 and 308 are non-prerelease release objects. Pointer values are observations, not immutable historical selector records; 309/310 repairs are absent from 308.
- **Receipt:** https://github.com/anthropics/claude-code/releases/tag/v2.1.310, https://github.com/anthropics/claude-code/releases/tag/v2.1.308, https://registry.npmjs.org/@anthropic-ai%2fclaude-code, https://registry.npmjs.org/@anthropic-ai%2fclaude-code/2.1.310, https://downloads.claude.ai/claude-code-releases/latest, https://downloads.claude.ai/claude-code-releases/stable, https://github.com/Homebrew/homebrew-cask/blob/9ec411cdc7fb37ffd19f74613fe46b8859117ad0/Casks/c/claude-code.rb, https://github.com/Homebrew/homebrew-cask/blob/12865dc5fe70b59d5d5f33e23f7c9fe1507c8abf/Casks/c/claude-code@latest.rb
- **Half:** both | **Confidence:** high

**What changed.** At 2026-10-24T10:18:01.961288Z npm dist-tags were latest=2.1.310, next=2.1.310 and stable=2.1.308. Native latest read at 10:18:01.637374Z was 310; native stable at 10:18:01.743196Z was 308. These match the initial and crosscheck observations. The pinned Homebrew ordinary/latest casks in the install table carry 308/310. MCP Tasks remains feature-level public beta, requiring 304+ and eligibility rather than a preview-only binary.

**Operator consequence.** For the complete window repair set, test and pin npm install -g @anthropic-ai/claude-code@2.1.310. The stable selector is not that release. A version pin still does not establish hosted rollout, beta eligibility or runtime enforcement; main's post-310 guard changes are documentation and comments only.

## Prior claims re-checked

All 19 active frontmatter claims were checked against the newest non-prerelease release, 310, and the vendor stable selector, 308. For closed engine behavior, "holds" means the versioned release-note/documentation evidence still supports the claim, not that a local runtime probe passed.

- **gitspawn-second-path: changed (section 5).** At stable 308 the reported protection remains unverified. At latest 310, the [309 trust gate](https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L86) supersedes the broad absence of a named ultrareview trust change. The [researcher's precise path](https://www.manifold.security/blog/ai-coding-agents-git-hijack) is still not reproduced or mapped to an advisory.
- **deny-rules-extended-and-reverted: holds at 308/310, with a bounded meaning.** [Current archived permissions guidance](https://web.archive.org/web/20261023144933/https://code.claude.com/docs/en/permissions) covers recognized shell file commands and redirections, not arbitrary Python/Node subprocess reads or recursive commands that do not name the denied file. Do not imply either complete Bash coverage or no Bash coverage.
- **install-and-channel-lag: superseded.** The old 296/287 snapshot is historical. Today's [310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310)/[308](https://github.com/anthropics/claude-code/releases/tag/v2.1.308) split and timestamped selectors replace it; no unobserved history of every stable-pointer movement is claimed.
- **mods-permission-authority: changed (section 1).** Mods remain permission code, but on a guarded session the former blanket ability to override asks or non-managed PreToolUse blocks no longer holds. [Stable guard](https://github.com/anthropics/claude-code/blob/v2.1.308/mods/sec-default/README.md) and [permission precedence capture](https://web.archive.org/web/20261023144933/https://code.claude.com/docs/en/permissions) distinguish managed/Team/Enterprise credentials from unguarded sessions and preserve the unsandboxed-code caveat.
- **guard-ask-and-env-holds-unreleased: superseded.** [Stable 308 code](https://github.com/anthropics/claude-code/blob/v2.1.308/mods/sec-default/hooks/held-verdict/verdicts/holds-over.ts) and [310 environment pins](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/policy/pinned-names.ts), first contained in 299, settle release delivery.
- **auto-start-across-providers: changed (section 2).** [302 note retained at stable 308](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L213) reverses the cited unconfigured headless defaults. Interactive defaults are not thereby reversed.
- **server-review-and-headless-fallback: holds at 308/310 as documented; runtime coverage could not be verified.** [Stable record](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L2057-L2058) and [permission-mode capture](https://web.archive.org/web/20261022024756/https://code.claude.com/docs/en/permission-modes) retain server review and explicit opt-out. The [21 September historical billing/fallback capture](https://web.archive.org/web/20260921092459/https://code.claude.com/docs/en/auto-mode-classifier-billing) describes local headless fallback and warning behavior. The crosscheck could not read the current page, so current billing details and session-specific platform/region coverage remain unverified.
- **managed-os-read-denial-exception: holds at 308/310.** [Managed-settings capture](https://web.archive.org/web/20261017104632/https://code.claude.com/docs/en/managed-settings) still distinguishes OS access denial, which warns and skips that policy source, from parse/other failures that stop startup. Other loaded admin sources may still supply policy.
- **hook-failure-block-is-opt-in: holds at 308/310, with added exceptions (section 6).** [Stable changelog](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L670) and [hooks capture](https://web.archive.org/web/20261019030048/https://code.claude.com/docs/en/hooks) retain the opt-in. The newer Windows repairs do not turn every hook failure into a block.
- **grader-late-tool-registration: holds at 308/310 for the prior fixes; the recommended 296 floor is superseded.** The [295 entry retained at stable](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L668) remains; [299/304 limit repairs and 309 delegated restrictions](https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md) justify testing 310 for the broader unattended contract.
- **sandbox-auto-allow-rule-tests: holds at 308/310; expand tests (section 3).** The old command-shape repairs remain in the [stable changelog](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md); [309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) adds more shapes and sandbox paths. Containment still matters.
- **cloud-review-machine-off-switch: holds at 308/310.** The machine-local administrator qualification for `disableWorkflows` remains explicit in the [stable record](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1580). Hosted Code Review administration and CLI workspace trust are distinct controls, not replacements.
- **agents-md-portability-and-instruction-limits: holds at 308/310.** Re-read [stable built-in implementation README](https://github.com/anthropics/claude-code/blob/v2.1.308/mods/agents-md/README.md): local CLAUDE instructions suppress fallback; explicit both mode loads both; managed-only still does not intercept engine-added nested CLAUDE attachments.
- **model-alias-and-provider-governance: holds at 308/310, with an enforcement repair.** [Stable model-policy keys](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1738-L1739) and defaults for [Opus 5.5](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L2103), [Sonnet 5.5](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1634) and [Haiku 5.5](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L821) remain; the latter two notes specify the Anthropic API. [Pro and Team Standard's Opus default](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L2180) also remains. The [299 gateway repair](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L445) closes serving/listing models blocked by exact allowlists or denies. A configured policy was not proof of earlier enforcement.
- **safety-switch-overrides-opus-pin: holds at 308/310.** The exception remains in the [stable changelog](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1699). Record returned identity instead of treating an intended Opus pin as unconditional.
- **otel-prompt-text-masking: holds at 308/310, expanded exposure (section 11).** [Stable prompt_text entry](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1298) still requires masking both fields. [300](https://github.com/anthropics/claude-code/releases/tag/v2.1.300) repairs original-prompt leakage after rewrites but also expands local request transcripts.
- **runner-system-prompt-files: holds at 308/310.** [Stable runner entry](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L2062) still requires file flags for wrappers that augment prompts.
- **mcp-negotiation-default: holds and expands at 308/310 (section 7).** [299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299) adds cloud/Remote Control connectors; [302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) repairs missing optional response fields. `MCP_PROTOCOL_NEGOTIATION=legacy` remains the documented compatibility escape.
- **plugin4shell-advisory-names-fixed-build: holds at 308/310.** [GHSA-pq7j-f95f-qfcv / CVE-2026-86063](https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv) still names 2.1.179 as fixed for the commit-SHA/branch-name pin bypass. A malicious plugin upstream could use a branch named like the reviewed commit hash to install attacker-controlled code instead. Both current releases are later. Publication was 2026-10-09, so it is not a new advisory this window.

The literal "Where it stands" section has one unbolded install paragraph, so that paragraph and all 16 bold operator paragraphs below it were also audited:

- **Install latest 2.1.296 / stable 2.1.287: superseded** by the [310 release](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) and timestamped 308 stable read above.
- **Treat plugins as permission code: holds at 308/310; approval examples need revision.** [Stable guard](https://github.com/anthropics/claude-code/blob/v2.1.308/mods/sec-default/README.md) and [current precedence](https://web.archive.org/web/20261023144933/https://code.claude.com/docs/en/permissions) narrow the opening paragraph's ask/block override claim. The old function-hooks off switch is not a substitute for admission controls.
- **Make machine policy readable: holds at 308/310.** [Managed-settings capture](https://web.archive.org/web/20261017104632/https://code.claude.com/docs/en/managed-settings) still requires checking the actual service account and loaded sources.
- **On managed fleets, reject user mods: holds; old minimum is superseded.** [Stable guard options](https://github.com/anthropics/claude-code/blob/v2.1.308/mods/sec-default/README.md#options-an-administrator-sets) support the policy. Select 310 for the current repair set, and retain the warning that sideload restrictions affect runner flags.
- **On unmanaged machines, remove unreviewed mods: holds at 308/310.** [Current credential-dependent precedence](https://web.archive.org/web/20261023144933/https://code.claude.com/docs/en/permissions) still admits broader mod authority without a seated guard; built-in guards do not sandbox arbitrary plugin code.
- **Set the CI permission mode per job: holds; its headless-default explanation changed.** [302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) now makes explicit modes more important, not less.
- **Let policy hooks block their own failures: holds at 308/310.** [Hooks capture](https://web.archive.org/web/20261019030048/https://code.claude.com/docs/en/hooks) preserves the opt-in; [310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) supplies the additional Windows minimum.
- **Use 2.1.296 for unattended grading: superseded as an install recommendation.** [304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304) closes another lifecycle escape and [309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) repairs inherited restrictions; keep external containment.
- **Test the command shape: holds at 308/310.** [309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) expands the needed cases; [permission scope](https://web.archive.org/web/20261023144933/https://code.claude.com/docs/en/permissions) still excludes arbitrary subprocess enforcement.
- **Preserve gateway review fields and alert on fallback: historical documentation only for the detailed billing contract.** The [21 September capture](https://web.archive.org/web/20260921092459/https://code.claude.com/docs/en/auto-mode-classifier-billing) records `safeguards` / `safeguard_results` and the 24-hour acknowledgment distinction. The current page was unreadable to the independent crosscheck; remove the confirmed-current assertion. The [stable classifier controls](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L2057-L2058) do not establish current billing or a particular gateway's behavior.
- **Put the cloud-review stop on the reviewing machine: holds at 308/310.** [Stable 285-era note](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1580) still qualifies the setting by the executing machine's administrator.
- **Mask both prompt attributes: holds at 308/310.** [Stable prompt_text note](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1298); add request-transcript review from section 11.
- **Pin intended models and record served identity: holds at 308/310.** [Stable exact matching](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1738) and [safety-switch exception](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1699) remain complementary requirements.
- **Retire AGENTS.md forwarding shims: holds conditionally at 308/310.** [Stable loader README](https://github.com/anthropics/claude-code/blob/v2.1.308/mods/agents-md/README.md) still requires the intended instruction mode and has documented differences from CLAUDE.md; do not delete substantive instructions.
- **Use file flags in runner wrappers: holds at 308/310.** [Stable file-prompt entry](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L2062).
- **Test MCP handshakes: holds at 308/310.** [299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299) broadens the changed default; [302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) repairs compatibility rather than abolishing the need to test.
- **Read advisories alongside release notes: holds.** The [Plugin4Shell advisory](https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv) remains a concrete reason. The source notes' contrary advisory-surface claim should be corrected by its owner.

## Carry-forward answers

- **stance.watch_next, published guard update: yes.** Section 1 supplies tag ancestry, direct code reads at 308/310, the 299 release note and matching package text. The parent had no separate "Observed after window close" heading; its main-only guard section was treated as the equivalent first lead.
- **Unresolved guard delivery: yes, with the original containment caveat intact.** The old commit is in 299 onward. [Guard documentation at 310](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md#pinned-variables) still says environment pins are not a defense against hostile plugins executing their own code.
- **Unresolved GitSpawn/ultrareview protection: still open for the exact exploit; partial answer yes for a released trust gate.** [309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) changes startup trust; neither the advisory scan nor the [original research](https://www.manifold.security/blog/ai-coding-agents-git-hijack) maps a verified fix to its withheld configuration. Stable 308 does not contain the gate.
- **Unresolved server review by platform/region/session: still open.** [Permission-mode documentation](https://web.archive.org/web/20261022024756/https://code.claude.com/docs/en/permission-modes) continues to describe rollout. Capture the actual /status row and stream-json warning for each production path; no account-specific observation was available here.

## Operator questions settled

- **Governance:** yes. Sections 1-7 change admission, permission defaults, sandbox configuration, workspace trust, hook failure and MCP policy. Pin 310 for the complete window repair set; explicitly configure authority instead of inheriting defaults.
- **Lifecycle, resume, planning and hooks:** yes. Sections 6, 8, 9 and 13 cover approval defects, lossy idle summaries, child-agent limits, journaled resume and server-task recovery.
- **Defer to native capability:** selectively. Native forks, monitors, tool search, hosted review and Desktop supervision can replace wrappers, while MCP Tasks can replace client polling for eligible jobs. Sections 9, 10 and 13-15 state the conditions rather than claiming universal replacement.
- **New adapter, eval or receipt needs:** yes. Gateways need fallback tests; collectors need safety-event and cache-lifetime fields; transcript sharing needs a new data review; task adapters need stable task/server/session identity and unknown-outcome handling. Sections 7 and 10-13.
- **Easier serious work without hiding authority:** partly. Named decision events, person-only mod asks, explicit ultrareview trust and saved execution environments expose control. Unsandboxed mods, namespace opt-ins, rollout-dependent review and resumed remote side effects remain matters for human judgment.

## Leads not promoted

These are discovery records, paraphrased without quoting posts. A social URL identifies the lead only. The primary record below determines whether anything was promoted.

- **Desktop rebuild, saved environments and nested sessions:** [official sequence](https://x.com/ClaudeDevs/status/2110445844675838148), [environment detail](https://x.com/ClaudeDevs/status/2110445846219382954), [nested work](https://x.com/ClaudeDevs/status/2110445847922245974). The [archived Desktop guide](https://web.archive.org/web/20261023144411/https://code.claude.com/docs/en/desktop) supports section 15's capabilities and rollout qualifications. Faster starts and universal availability were not measured.
- **Desktop preference and CLI counter-reports:** [maintainer recommendation](https://x.com/trq212/status/2110465009218469972), [Danny Grinberg](https://x.com/DannyGrinberg/status/2112940090616103097), [Andy Fowler](https://x.com/andyfowler/status/2113668673680400888). The same [Desktop guide](https://web.archive.org/web/20261023144411/https://code.claude.com/docs/en/desktop) describes shared Claude Code functionality and surface differences. It does not establish which interface is better or that a user's felt difference identifies a different underlying model.
- **Idle compaction and summary loss:** [announcement](https://x.com/lydiahallie/status/2110484840256819380), [qualification](https://x.com/lydiahallie/status/2110484841926152622). Promoted only to the [299 mechanism](https://github.com/anthropics/claude-code/releases/tag/v2.1.299) in section 8. No quantified savings claim.
- **Fast mode GA:** [official lead](https://x.com/ClaudeDevs/status/2110825294655562048). The [2026-10-24 Claude Code guide capture](https://web.archive.org/web/20261024002607/https://code.claude.com/docs/en/fast-mode) still labels the harness feature research preview and says subscription use spends usage credits. The lead itself distinguishes Platform GA from unchanged Claude Code use. Do not turn that Platform announcement into a new harness entitlement or lower subscription cost.
- **Code Review GA and depth:** [launch](https://x.com/ClaudeDevs/status/2110866210573386065), [setup](https://x.com/ClaudeDevs/status/2110866214528716975). [Dated Anthropic article](https://claude.dev/blog/solving-code-review-at-anthropic/) and [service guide capture](https://web.archive.org/web/20261017030656/https://code.claude.com/docs/en/code-review) support section 14. Faster reviews and better bug detection remain vendor performance claims, not a reproduced comparison.
- **Review value versus a subscription skill:** [Vincent Chan](https://x.com/vincchan/status/2111608173593346554). The [service comparison](https://web.archive.org/web/20261017030656/https://code.claude.com/docs/en/code-review) distinguishes managed PR automation, local /code-review and cloud ultrareview. It cannot settle whether this user's own skill is cheaper or equally effective.
- **Self-verification and scarce review attention:** [Addy Osmani](https://x.com/addyosmani/status/2111604705340326393), [recordings follow-up](https://x.com/addyosmani/status/2113677798774898773); writing lane also links the [team's 2026-10-15 article](https://claude.dev/blog/solving-code-review-at-anthropic/). The article describes layered automated checks, risk-based human review and rollback, not no review. Its internal productivity/revert figures were not independently audited.
- **One priority versus a swarm:** [maintainer opinion](https://x.com/trq212/status/2112219173288120531). The primary review article discusses human review costs, but supplies no controlled comparison proving this prioritization advice. Retained as a judgment lead, not a harness change.
- **Cross-session hive behavior and propagation risk:** [Huntley](https://x.com/GeoffreyHuntley/status/2111037032659079517), [counter-read](https://x.com/datachad/status/2111039089323696272), [custom tools displaced](https://x.com/hbthegreat_/status/2111106706956783698). The [settings capture](https://web.archive.org/web/20261019080610/https://code.claude.com/docs/en/settings-reference) documents `crossSessionInbound` accept/notice/refuse control; the [official digest](https://code.claude.com/docs/en/whats-new), read 2026-10-24, dates cross-session messaging to 2026-08-03..2026-08-07. It is not a new primitive this window. No transcript proves autonomous migration or cross-session error spread in those reports.
- **Memory-induced localhost refusal and explanation failure:** [reporter's correction](https://x.com/noahreeveshq/status/2111544480457445781), [engineer response](https://x.com/felixrieseberg/status/2111557142306242621). [Stable instruction-loader rules](https://github.com/anthropics/claude-code/blob/v2.1.308/mods/agents-md/README.md) make stale instruction context plausible, but no affected memory file, session receipt or named fix was available. Do not promote the gist's diagnosis to a confirmed defect.
- **Ultracode effort and long autonomous work:** [effort advice](https://x.com/lydiahallie/status/2112241281602883702), [Simon Willison job](https://x.com/simonw/status/2110758747815784768), writing-lane [project report](https://simonwillison.net/2026/Oct/16/sqlite-sparql-rust/). The [workflow guide](https://code.claude.com/docs/en/workflows), read 2026-10-24, separates orchestration from model effort; [305](https://github.com/anthropics/claude-code/releases/tag/v2.1.305) supports the resume repair in section 9. No benchmark or execution audit establishes the reported duration, correctness or superiority of the generated extension.
- **Cloud Projects replacing Remote Control:** [practitioner](https://x.com/dani_avila7/status/2112304487746478461), [enterprise objection](https://x.com/jerrodtuck/status/2112337961488453874). [Desktop/cloud documentation](https://web.archive.org/web/20261023144411/https://code.claude.com/docs/en/desktop) distinguishes cloud execution from local/SSH execution; [310 role controls](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) support section 15. Neither source proves enterprise suitability or that everyone should migrate.
- **Usage drain, denial of a limits change, and later investigation:** [Campbell](https://x.com/CampbellKaleb23/status/2112957708219433095), [hakmgpt](https://x.com/hakmgpt/status/2113310831165198826), [opposite comparison](https://x.com/iuditg/status/2112599494135263672), [Boris response](https://x.com/bcherny/status/2113141937645769087), [Lydia response](https://x.com/lydiahallie/status/2113366380842254746), [investigation lead](https://x.com/bcherny/status/2113417302402322910). Public first-person [issue 104536 on 308](https://github.com/anthropics/claude-code/issues/104536), [104776 on 310](https://github.com/anthropics/claude-code/issues/104776) and [102618 plus its comment](https://github.com/anthropics/claude-code/issues/102618) corroborate that reports exist. Comments read at 09:51:48Z contain no maintainer-confirmed common cause. The recent [status feed](https://status.claude.com/api/v2/incidents.json) describes availability incidents, not a quota diagnosis. No limits-cut, throttling, cache-accounting or universal fix claim is promoted.
- **Personal data in HTTP headers after reading a web page:** [report](https://x.com/This_Liss/status/2113120507289624714), [maintainer-response lead](https://x.com/lydiahallie/status/2113322605482852430). A broader official-issue search found [102577](https://github.com/anthropics/claude-code/issues/102577), filed 2026-10-15 and naming 2.1.300, which reports Wikipedia requests exposing an email. Earlier [98584](https://github.com/anthropics/claude-code/issues/98584), filed 2026-10-01 against 2.1.286, supplies a reporter-designed contact-request page and alleged reproduction. [104774](https://github.com/anthropics/claude-code/issues/104774), filed 2026-10-24 with current environment 2.1.310, describes events on 2026-09-26 and 2026-10-03; it does not establish reproduction on 310. All three were open with no comments at 10:02:24Z. These are primary receipts for first-person reports, not independently verified executions or a maintainer-confirmed root cause. The [310 changelog](https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md) and advisory scan provide no matching named fix. Section 11's gateway-key leaks are different paths. No malicious test page was executed or private transcript obtained.
- **Mods as a new harness era:** [swyx](https://x.com/swyx/status/2113003628835553559), writing-lane [Latent Space article](https://latent.space/p/claude-mods/). Mods predate this cutoff; [299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299) and [304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304) establish this window's authority changes. The broad strategic framing is not a new release fact.
- **Person-only mod decider:** [ayyazdev](https://x.com/ayyazdev/status/2112678467364106340). Promoted to section 1 from [304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304), with the public-types mismatch recorded. The suggested production-deploy policy was not tested.
- **MCP Tasks and Elicitations launch:** [official lead](https://x.com/ClaudeDevs/status/2113698007892070527). Section 13 uses the [captured official contract](https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp), including beta gates and cancellation. The [281 release](https://github.com/anthropics/claude-code/releases/tag/v2.1.281) already recorded URL-mode elicitation; avoid dating all elicitation support to this announcement.
- **Windows hook fail-open and exit-code advice:** [310 criticism](https://x.com/LLMpsycho/status/2113867595581382820), [295 advice](https://x.com/AndreasDmln/status/2113908829754671157). Section 6 is supported by [310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) and [event-specific hook documentation](https://web.archive.org/web/20261019030048/https://code.claude.com/docs/en/hooks). The universal exit-2 shorthand does not hold for PermissionRequest.
- **Unsandboxed Windows anecdote:** [cooldaemon](https://x.com/cooldaemon/status/2113889196347904324). The [sandbox scope and boundary guide](https://web.archive.org/web/20261023145040/https://code.claude.com/docs/en/sandboxing) does not treat a classifier as process isolation. No incident during one person's reported use establishes neither safety nor equivalence.
- **Agent Skills donation and what was donated:** [Boris](https://x.com/bcherny/status/2113333859907747871), [official account](https://x.com/ClaudeDevs/status/2113328526413996100), [question](https://x.com/Joash0x/status/2113332229371793576); writing lane includes Simon Willison's pointer. Anthropic's [2026-10-22 announcement](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) specifies name, logo, GitHub organization and domain, with versioned releases/proposal process/security guidance proposed next. Governance news is confirmed; a new Claude Code runtime capability or completed roadmap is not.
- **Pi using a Claude subscription:** [question](https://x.com/sawyerhood/status/2111883771331187125), [repo pointer](https://x.com/asm3r96/status/2111943031406383375), [switching](https://x.com/bkase_/status/2113551251384520860), [latency claim](https://x.com/DanielGri/status/2113557233409614315). Read [earendil-works/pi-claude-code at 70abb65186592ca788b29b3db22c3160d629c41f](https://github.com/earendil-works/pi-claude-code/tree/70abb65186592ca788b29b3db22c3160d629c41f): it drives the official Claude process while Pi owns its loop/tools, and documents a usage-credit guard. [Anthropic's SDK/plan support article](https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan), read 2026-10-24, permits the described subscription path generally. This does not certify every bridge, prove 0.5-second overhead, or guarantee that a guard stops billing before any charge.
- **Bridge prompt/classifier warning and native-harness advantage:** [Esteban](https://x.com/EstebanForge/status/2113646681090605182), [Jay](https://x.com/jayledev/status/2112336035309056107), [closed-ecosystem criticism](https://x.com/GeoffreyHuntley/status/2113323328408805473). Read the separate [pi-claude-bridge prompt-capture code at 6aa276a1498e5376363f5c1f8cf04bfcaee38c93](https://github.com/elidickinson/pi-claude-bridge/blob/6aa276a1498e5376363f5c1f8cf04bfcaee38c93/src/prompt-capture.ts) and README. It is not the Earendil extension. The code and usage-credit documentation identify compatibility/billing concerns, not a proved ban, exploit, equivalent prompt or quality outcome. No legal conclusion is inferred.
- **Code-mode efficiency and MCP schema costs:** [Thariq](https://x.com/trq212/status/2111499591778734394), [Mario](https://x.com/badlogicgames/status/2111501246171410731), [MCP cost claim](https://x.com/Scott__D/status/2113763744094536081). [304/305 tool-search changes](https://github.com/anthropics/claude-code/releases/tag/v2.1.305) support section 10 and show why a fixed per-server context cost cannot be applied to every Claude session. No matched benchmark was supplied for the opposing efficiency claims.
- **Durable external harness:** [Vercel lead](https://x.com/vercel/status/2112653833382027729). The [pinned package README](https://github.com/vercel-labs/durable-harness/blob/ea8aa4060cf4fb8cd39737ce8ab21c4e0f40c741/packages/durable-harness/README.md) calls the package experimental and documents Claude Code/Codex sessions in Vercel Sandbox. It is external orchestration; broad multi-harness support and months-long reliability were not established from the inspected package. No cloned code was executed.
- **Origin PR-status mod request:** [0xEduardoB](https://x.com/0xEduardoB/status/2111202576205271405). The supplied item is a request, not an implementation receipt. A bounded search and the [310 mod surface](https://github.com/anthropics/claude-code/tree/v2.1.310/mods) did not identify a released Origin integration. Do not promote demand into availability.
- **Stale agent instructions and claimed model benchmark differences:** [Anonyfox](https://x.com/AnonyfoxCom/status/2112879852567101668), [Sithira](https://x.com/Sithira269/status/2113697019231670375). [Stable instruction loading](https://github.com/anthropics/claude-code/blob/v2.1.308/mods/agents-md/README.md) establishes how files enter context, not the claimed 65-file audit result or that every harness would obey every stale statement. No pinned Terminal-Bench run/configuration was found for the quoted Qwen/Claude Code score comparison.
- **Survey reshared in this window:** [survey lead](https://x.com/william40152988/status/2112662419600519527). The primary [JetBrains report](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/) reports May-July 2026 survey use, including Claude Code 39% versus January's 18%, and was published in August. It is not an October adoption measurement or a Copilot CLI-specific comparison.
- **Model preferences, switching and routing anecdotes:** [Huntley comparison](https://x.com/GeoffreyHuntley/status/2113119417303454155), [Mario preference](https://x.com/badlogicgames/status/2113302439164281308), [Thariq quality complaint](https://x.com/trq212/status/2113848923945304528), [Bedrock move](https://x.com/NYCounihan/status/2111896812009521660), [Pi limits](https://x.com/ai_suxiaole/status/2113499148154761724), [Koren](https://x.com/korenmiklos/status/2112639255872987156), [Claude driving Codex](https://x.com/LundstenA/status/2113821190926012910), [Morgan routing jobs](https://x.com/morganlinton/status/2113782141918343386), [team comparison request](https://x.com/joayats/status/2113726495394799786), [Grok front-end intent](https://x.com/hunvreus/status/2113449702712918147). The current version/model-policy record establishes options, not comparative results. No matched tasks, served-model receipts or outcome dataset was available; do not turn these into a quality ranking or market-share result.
- **Earlier desktop and prompt-vault commentary:** [Yuchen](https://x.com/Yuchenj_UW/status/2106435001340621147), [terminal counterpoint](https://x.com/SAKSHAM111/status/2106437243686867048), [Hesamation](https://x.com/Hesamation/status/2109070439666327856), [Josh](https://x.com/joshmatz/status/2109105661166448890), [Orca prompt vault](https://x.com/OrcaRouter/status/2105364729422344549). The sweep dates these before the 2026-10-13 cutoff. They are neither new events nor authoritative snapshots of 310's closed engine.
- **Scion, security process and ripoff comparisons in writing feeds:** Anthropic's [source-control research post](https://www.anthropic.com/research/redesigning-source-control) dates the underlying announcement to 2026-10-13, with an October 15 update acknowledging related work. It is not a released replacement for Claude Code's git workflow. The feed's company/process comparisons do not establish a harness behavior change.
- **Other writing and topic items:** Claude chat tree/Quick Study/finance stories do not establish Claude Code changes. OpenCode's provider-key breach and MCP flaw, other harness launches, and Cursor/Grok delegation reports concern different products; no Claude Code advisory or fixed build was established by those leads. They were not reassigned to this source merely because Anthropic or Claude appeared in the gist.

## Surfaces checked

- Read the house authorities in order, source contract and notes, current profile, parent harvest, specimen, researcher brief and the Frontier lens. Scanned all 109 writing-feed entries and read `claude-code.raw.md`, `banter.raw.md` and every `topic-*.raw.md` present, including agent challengers, coding-agent landscape, Cursor Origin and Pi ecosystem.
- Confirmed upstream identity and the clone's `blob:none` filter. Read the full 299-310 changelog, baseline entries needed for every active claim, release objects, npm manifest/times, native selectors, Homebrew manifests, public tags and pinned main. Compared guard code between stable/latest and latest/main; no engine implementation was inferred from repository commit counts.
- Deep reads: guard registration, held-verdict ranking and policy/environment helpers at 310, plus stable 308 equivalents; archived current permissions/sandbox/hook contracts; MCP Tasks lifecycle and protocol contract. Also read the stable AGENTS.md mod implementation README and current mod admin/types documentation.
- Read live official docs for setup, permission modes, settings, managed settings, hooks, mods/admin, overview, MCP, costs, workflows, Desktop, Code Review and monitoring. The official What's New index ended at September's week 37 at this read, so it did not replace the October versioned changelog.
- Successfully read immutable documentation captures for permission modes (2026-10-22), permissions/sandboxing/Desktop (2026-10-23), hooks/settings (2026-10-19), managed settings/Code Review (2026-10-17), and MCP/fast mode (2026-10-24). Some initial archive requests failed; successful retries, not failed responses, support the links used above.
- Advisory API read all 35 records. [GHSA-4p2j-qj3c-6x84 / CVE-2026-88066](https://github.com/anthropics/claude-code/security/advisories/GHSA-4p2j-qj3c-6x84) was published 2026-10-13T12:24:43Z, before this cutoff, and concerns Claude Desktop on Windows loading a malicious git executable, fixed in Desktop 1.8089.0. It is not a new CLI 310 advisory. Plugin4Shell was rechecked separately.
- Bounded official issue searches for usage and headers, selected issue bodies/comments, the recent status feed, primary engineering/standards announcements, the primary JetBrains survey, and pinned external bridge/durable-harness source were read. Search snippets, social gists and third-party summaries were not used as product receipts.
- Read published Linux x64 package bytes in memory only, verified registry SHA-512, and inspected `package/claude` for `managedMcpServersUnreadable`, the pinned-variable refusal string and guard option names. [299 package manifest](https://registry.npmjs.org/@anthropic-ai%2fclaude-code-linux-x64/2.1.299), read 09:42:12Z: `sha512-FnUWMvkaML+gSH7tK7KuWjCQfgbXX0kzEIzZabb3b73jeQESlNXEgmEgR1mvZRsyCb5O6hYUUTVqVQFY24wzhA==`. [308](https://registry.npmjs.org/@anthropic-ai%2fclaude-code-linux-x64/2.1.308), read 09:42:16Z: `sha512-ffUryevpH7POStPJ/xpUI5R1ozYbH9o/Dbh/xPSmyVJehELnRMZmRnejdQmq0TejOW/SbNnJFhCGMgwIsOqFTQ==`. [310](https://registry.npmjs.org/@anthropic-ai%2fclaude-code-linux-x64/2.1.310), read 09:42:13Z: `sha512-CuzpJrMBbqaR3+1SiLrBtPV3w/cFvcqBfhe9kNskzZ2Fm6KXa7v0l7tM+Ln6l5QLb79WoU0CcacXnYtsygbe6A==`. This was static delivery evidence, not binary execution.
- Only this assigned harvest was written. No publication-repository git mutation, site build, package install or cloned-code execution occurred.

## Not reached

- Closed engine source and runtime enforcement tests, including Windows missing-Git hooks, sandbox escape regressions, actual mod admission/reload and the exact undisclosed GitSpawn configuration. Static strings and release notes cannot establish those runtime outcomes.
- Account-specific server-review rollout, feature flags, provider/region coverage, MCP Tasks eligibility and Desktop rollout. No authenticated account changes, live task executions or paid reviews were performed.
- A confirmed common cause, measured limit change or resolution for the usage-drain reports; independent reproduction of the identifying-header reports, the full affected transcripts and any private security report; matched comparative model or harness benchmarks.
- Cross-platform binary inspection beyond Linux x64, independent dist-tags for the eight native dependency packages, Linux apt/rpm publication channels, and an exhaustive historical stable-selector timeline.
- A readable current classifier-billing page: the independent crosscheck returned HTTP 403 and could read only the 21 September capture. Historical warning/field details are not a confirmed-current billing contract. Mod-admin guidance was checked against pinned release/mod records; an exact time of its most recent prose change is not claimed.
- Independent measurement of idle-compaction savings/accuracy, hosted-review quality, Desktop speed, cross-session propagation, bridge latency/billing guarantees or long-duration external orchestration.

## Crosscheck applied

- Applied the exact idle-compaction eligibility correction in section 8 and the Desktop session/task distinction plus supervision limits in section 15.
- Removed the confirmed-current billing re-check. The readable 21 September capture remains historical context; current access failure proves neither continuity nor change. No numbered section was wholly REFUTED or UNVERIFIABLE, so none was deleted or moved.
- Added all 12 material misses as sections 16-27 after opening their release notes, canonical advisories and database records. Added section 28 so current install/channel claims have their own generated finding. All numbered sections are sequential.
- Re-read the tagged 310 changelog at 2026-10-24T10:17:38Z and checked additional worktree/deletion lines at 10:17:51Z. NVD JSON, the SDK advisory, fix diff, PyPI uploads, SDK release/compare and global GHSA timestamps independently support the disclosure dates and fixed versions. No downloaded code was executed. The commit description's narrower severity wording does not override the later canonical advisory's startup-MCP execution consequence.
- Rechecked npm and native selectors at the UTC times in section 28. The 310/308 split remains. Closed-engine behavior, exact GitSpawn protection, current fallback billing and account-specific rollouts remain untested.
