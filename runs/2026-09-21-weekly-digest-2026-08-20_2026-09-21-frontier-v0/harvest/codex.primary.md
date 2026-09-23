---
schema_version: bitter.frontier_harvest.v0
provider: codex
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/codex.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased, docs-only]
window_volume: 14 non-prerelease rust-v tags plus python-v0.154.0; ~98 rust alpha release objects; 10 material changes
lane: primary sources, Lane A researcher
---

# Harvest -- codex (primary sources)

Punctuation is ASCII. Pin tags, not main. Identity: `gh api repos/openai/codex` -> full_name openai/codex, owner openai, description "Lightweight coding agent that runs in your terminal", default_branch main. Every stable's release page links back to this repo, and the official changelog (https://learn.chatgpt.com/docs/changelog, 308 from developers.openai.com/codex/changelog) mirrors the same tags with `npm install -g @openai/codex@<ver>` lines.

## Release ledger

Stable = non-prerelease `rust-v*` GitHub release. ahead/behind from `gh api repos/openai/codex/compare/<prev>...<tag>`. Stables are cut from release branches, so status is `diverged` with a small behind_by. That is expected.

| Tag | Published (UTC) | Prerelease | ahead_by / behind_by vs previous stable | npm publish (UTC) |
|---|---|---|---|---|
| rust-v0.149.0 (baseline) | 2026-08-20T21:04:55Z | false | 242 / 1 vs 0.148.0 | 2026-08-20T21:09:05Z |
| rust-v0.149.1 | 2026-08-24T00:28:28Z | false | 5 / 1 | 2026-08-24T00:32:45Z |
| rust-v0.150.0 | 2026-08-26T19:37:28Z | false | 207 / 5 | 2026-08-26T19:43:31Z |
| rust-v0.150.1 | 2026-08-27T01:56:54Z | false | 2 / 1 | 2026-08-27T02:01:46Z |
| rust-v0.151.0 | 2026-08-29T09:55:39Z | false | 164 / 2 | 2026-08-29T09:59:26Z |
| rust-v0.152.0 | 2026-09-01T01:58:32Z | false | 90 / 4 | 2026-09-01T02:02:46Z |
| rust-v0.152.1 | 2026-09-01T22:33:02Z | false | 3 / 0 (ahead) | 2026-09-01T22:36:50Z |
| rust-v0.153.0 | 2026-09-03T01:37:38Z | false | 99 / 6 | 2026-09-03T01:42:05Z |
| rust-v0.153.1 | 2026-09-03T21:02:56Z | false | 3 / 1 | 2026-09-03T21:09:57Z |
| rust-v0.153.2 | 2026-09-03T23:53:12Z | false | 2 / 1 | 2026-09-03T23:57:21Z |
| rust-v0.153.3 | 2026-09-04T19:01:32Z | false | 3 / 1 | 2026-09-04T19:07:16Z |
| rust-v0.153.4 | 2026-09-04T23:25:48Z | false | 3 / 1 | 2026-09-04T23:31:18Z |
| rust-v0.154.0 | 2026-09-09T22:35:38Z | false | 249 / 10 | 2026-09-09T22:40:10Z |
| python-v0.154.0 (Python SDK) | 2026-09-10T19:51:43Z | false | n/a (separate train) | PyPI `openai-codex==0.154.0` |
| rust-v0.155.0 | 2026-09-17T23:14:43Z | false | 219 / 2 | 2026-09-17T23:19:02Z |
| rust-v0.155.1 | 2026-09-18T20:03:04Z | false | 2 / 1 | 2026-09-18T20:09:23Z |
| rust-v0.156.0 (OUT) | 2026-09-22T19:51:01Z | false | 526 / 8 | 2026-09-22T19:55:37Z |

In-window: 14 stable rust-v tags (0.149.1 through 0.155.1). 0.149.1 has an empty release body; its 5 commits are compaction and classification backports (#40161, #40280, #40186). Prereleases published 2026-08-20T21:05Z..2026-09-21 by train (GitHub release objects): 0.149.0 x4, 0.150.0 x14, 0.151.0 x13, 0.152.0 x6, 0.153.0 x6, 0.154.0 x10, 0.155.0 x27, 0.156.0 x16, 0.157.0 x2 (~98), plus non-CLI prereleases `rusty-v8-v152.2.0` and `voice-cygwin-108b38cf67cbb731` (the changelog calls the second "CI-only build tools... not included in Codex user packages"). Do not count alpha suffixes as releases.

**npm latest at window close: 0.155.1.** `npm view @openai/codex time --json`: 0.155.1 published 2026-09-18T20:09:23Z, and the next non-prerelease version, 0.156.0, published 2026-09-22T19:55:37Z (OUT). Observed 2026-09-23: dist-tags latest=0.156.1, alpha=0.155.0-alpha.16.3. The registry keeps no dist-tag history, so "latest=0.155.1 on 2026-09-21" is inferred from publish times plus the release train's pattern of moving `latest` on every stable publish. Confidence: high.

## 1. Guardian V2 stayed off by default in every stable of the window (carry-forward 1)

- **Date:** 2026-08-24..2026-09-18 (every stable)
- **Channel:** `tagged-release` (flag state), `main-unreleased` at window close (the one Guardian default that did flip)
- **Ancestry evidence:** Raw `codex-rs/features/src/lib.rs` read at rust-v0.149.1, 0.150.0, 0.151.0, 0.152.0, 0.153.0, 0.153.4, 0.154.0, 0.155.0, 0.155.1 (and 0.156.0 for the OUT list). At every one: `Feature::GuardianV2`, key "guardianv2", `Stage::UnderDevelopment`, `default_enabled: false`. `Feature::GuardianApproval` ("guardian_approval") stays `Stage::Stable`, `default_enabled: true`. New at 0.154.0: `Feature::GuardianThreadContext`, key "guardianv2.thread_context", UnderDevelopment/false (#42529, #43104). `Feature::GuardianExt` ("guardian_ext") shows up at 0.150.0 as UnderDevelopment/false.
- **Receipt:** https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/features/src/lib.rs#L1593-L1596 (GuardianV2), https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/features/src/lib.rs#L1563-L1566 (GuardianApproval)
- **Half:** defect (a negative) | **Confidence:** high

**What changed.** The flag did not flip. The code behind it did change a lot. Guardian V2 got analytics: #42144 (merge 86b7d127, ancestor of rust-v0.153.0, ahead 13/behind 0) emits `codex_guardian_v2_classification` and `codex_guardian_v2_fast_decision` events and adds `guardian_v2_enabled` to turn analytics. #44164 (d3ffbbed, in rust-v0.155.0) adds `codex.guardian.context.request_tokens` telemetry and estimates of per-section context cost. #43462 (db0568db, in rust-v0.154.0) deletes the legacy `fast_decision`/`full_review` hooks and the duplicate Guardian V2 fast-approval path. That is scaffolding removal. The only Guardian default that flipped is `guardian_reuse_parent_compaction` -> Stable/true (#46522), which is in rust-v0.156.0 (OUT, 2026-09-22) and not in 0.155.1.

**Analytics/billing answer.** Guardian usage is now recorded in vendor-side telemetry (the events above). No docs page in the window says what the default is or how Guardian or auto-review usage shows up in the user's usage or billing views. The auto-review page (https://learn.chatgpt.com/docs/sandboxing/auto-review, retrieved 2026-09-23, unpinnable) documents `approvals_reviewer = "auto_review"`, the 3-consecutive / 10-in-50 denial circuit breaker, `/approve` override, and `[auto_review].policy` vs managed `guardian_policy_config`. It never names Guardian V2 and never mentions usage or cost. The user-facing `/usage` analytics dashboard (#45764, ca53e19c) is `main-unreleased` at window close (compare ca53e19c...rust-v0.155.1 ahead 8/behind 204) and ships in 0.156.0 (OUT). The social claim that guardian-v2 is invisible in usage analytics therefore stays unsettled for the user-facing surface.

**Operator consequence.** Nothing auto-enables Guardian V2 through 0.155.1. If you turned it on, 0.153.0+ sends classification events with thread attribution to OpenAI analytics. Audit that against your telemetry policy. Watch 0.156.x for `/usage` and for any GuardianV2 default flip. Settle it by reading lib.rs at the next stable tag.

## 2. Default model moved to GPT-6-Astra in the 0.153.x hotfix train, not in a minor

- **Date:** 2026-09-03 (config-only) -> 2026-09-04 (bundled default)
- **Channel:** `tagged-release`
- **Ancestry evidence:** rust-v0.153.1 (#42605, 5cc1c94b) adds GPT-6-Astra as configurable "without changing the default model or showing it in the model picker". rust-v0.153.4 (#42874, 0083d9e3, ancestor of rust-v0.153.4 ahead 2/behind 0) flips `visibility` "hide" -> "list" in `codex-rs/models-manager/models.json`. The picker snapshot changes from "gpt-5.6-sol (default)" to "gpt-6-astra (default)". Bundled catalog at rust-v0.153.0: gpt-5.6-sol priority 1. At rust-v0.153.4, 0.154.0, 0.155.1: gpt-6-astra priority 1, list; gpt-5.6-sol priority 6. rust-v0.154.0 carries the same result through #42879/#42607 (the hotfix SHA itself is not in the 0.154.0 ancestry: ahead 249/behind 8).
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.153.4 ; https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/models-manager/models.json
- **Half:** both | **Confidence:** high

**What changed.** When `model` is unset, a patch release changed which model runs. 0.153.2 says the Astra Fast tier is "2x speed, increased usage". 0.154.0 says fresh sessions and forks now "respect server model defaults unless explicitly overridden" (#43177), so the effective default can also come from the server catalog. 0.154.0 updates the bundled OpenAI Docs skill with Astra migration guidance (#42931). Changelog (docs-only): GPT-5.3-Codex-Spark was deprecated 2026-09-14. GPT-5.5 retires from Codex with ChatGPT sign-in on 2026-10-14, and the changelog says to switch to gpt-5.6-sol. Marketing for the "GPT-6 Astra" launch is out of scope. The Codex primary surfaces record only the catalog, picker, and default change above.

**Operator consequence.** Any fleet that leaves `model` unset changed model on a patch upgrade (0.153.3 -> 0.153.4). Pin `model` explicitly if cost, latency, or eval baselines matter. Re-run evals if you did not pin. Grep configs, custom agents, and scheduled tasks for `gpt-5.5` and `gpt-5.3-codex-spark` before 2026-10-14.

## 3. Guardian no longer runs in Full Access or User approval mode

- **Date:** 2026-09-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** #42147 "Skip Guardian reviews in Full Access" (e5769939, ancestor of rust-v0.153.0 ahead 11/behind 0) and #42256 "Skip Guardian scoring in User approval mode", both listed in the 0.153.0 body.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.153.0
- **Half:** both | **Confidence:** high

**What changed.** Full Access skips Guardian reviews for confirmation-only actions. User approval mode skips background Guardian scoring and prewarming. Sensitive-action checks and user-input requests keep their existing handling. Across 0.151 to 0.155, a series of hardening fixes landed: stale Guardian classifications can no longer authorize after permission-state changes (#41196, 0.151.0). Authorization evidence survives compaction (0.152.0, 0.153.0). Approvals invalidated by new user instructions are rejected (#43442, 0.154.0). Review failures are now distinguished from unsafe-action findings, and transient failures retry (#44482, 5d3fe48b, in 0.155.0).

**Operator consequence.** In Full Access mode, the reviewer is not guarding confirmation-only actions. That makes Full Access what it says it is. In User approval mode you are the only reviewer and no scoring tokens are spent. If you relied on Guardian as a backstop under Full Access, move to `approval_policy = "on-request"` plus `approvals_reviewer = "auto_review"`. The auto-review page says `approval_policy = "never"`, `:danger-full-access`, or `--yolo` can avoid creating the request that review needs.

## 4. Untrusted projects stop feeding AGENTS.md, and startup stops running workspace helpers before trust

- **Date:** 2026-08-26 (0.150.0); 2026-09-09 (0.154.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #39837 (bd194593, merged 2026-08-21) is an ancestor of rust-v0.150.0 (ahead 152/behind 0) and NOT of rust-v0.149.1 (behind 55). #42324 "Avoid executing PATH helpers before workspace trust" (637c3227) is in rust-v0.154.0 (behind 0) and not in rust-v0.153.0 (behind 26). The macOS sandbox block on terminal input injection (#42590) ships in the same 0.154.0 bullet.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.150.0 ; https://github.com/openai/codex/releases/tag/rust-v0.154.0 ; https://github.com/openai/codex/pull/39837
- **Half:** defect | **Confidence:** high

**What changed.** When the project is untrusted, project-scoped `AGENTS.md` discovery is skipped. User-level instructions are kept, and trust level is part of the instruction cache key, so a runtime trust change reloads instructions. Managed deny-read rules stay enforced after permission changes (#40004). From 0.154.0, startup no longer executes workspace-controlled helpers before trust is established.

**Operator consequence.** Cloning a hostile repo and opening it untrusted no longer lets it inject instructions or run helpers at startup. Upgrade to >=0.154.0 for both fixes. If your workflow depends on repo AGENTS.md, the project must now be trusted. Check this in CI and in ephemeral checkouts where trust is never granted.

## 5. `codex mcp-server` removed; app server is the only integration path, and it is officially experimental

- **Date:** 2026-08-24 (deprecation, docs-only) -> 2026-09-09 (removed in 0.154.0)
- **Channel:** `tagged-release` (removal); `docs-only` (deprecation notice 2026-08-24, removal notice 2026-09-05, which predates the stable carrying it)
- **Ancestry evidence:** #42993 (531f3836, merged 2026-09-05) is an ancestor of rust-v0.154.0 (ahead 79/behind 0). The 0.154.0 Chores section says "The deprecated `codex mcp-server` entry point is no longer available." The changelog entry of 2026-09-05 says the app-server command "is experimental and isn't supported for production workloads".
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.154.0 ; https://github.com/openai/codex/pull/42993 ; https://learn.chatgpt.com/docs/changelog (2026-09-05 entry "Codex MCP server removed")
- **Half:** both | **Confidence:** high

**What changed.** The MCP-server mode of Codex (Codex as a tool other agents call) is deleted. Codex as an MCP client (`codex mcp`) stays. The SDK docs (https://learn.chatgpt.com/docs/codex-sdk, retrieved 2026-09-23) point to the app server for "authentication, conversation history, approvals, and streamed agent events". That matches the vendor's "app owns approvals" posture from the parent window. Yet the same vendor's changelog calls that app server unsupported for production.

**Operator consequence.** Anything that launches `codex mcp-server` or `codex-mcp-server` breaks on >=0.154.0. Pin <=0.153.4 or migrate. If you embed Codex, you now build on an interface the vendor labels experimental. Wrap it and pin versions. Treat protocol changes as breaking (see item 6).

## 6. Python SDK 0.154.0: external content with tool-level authority, not user authority

- **Date:** 2026-09-10
- **Channel:** `tagged-release` (python-v0.154.0, prerelease=false)
- **Ancestry evidence:** `gh api releases/tags/python-v0.154.0`, published 2026-09-10T19:51:43Z. #44086 (1a4096e2, merged 2026-09-09) is titled "Add untrusted external messages to the Python SDK". 0.155.0 Chores (#44067) aligns Python SDK and runtime versions with stable CLI releases.
- **Receipt:** https://github.com/openai/codex/releases/tag/python-v0.154.0 ; https://github.com/openai/codex/pull/44086
- **Half:** capability | **Confidence:** high

**What changed.** `ExternalMessage` on `run()`/`turn()` lets an embedding app inject content from other agents, tools, or services as function output with tool-level authority. The release says it "does not grant user authorization". There is also `include_turns` on resume/fork and per-turn `turn_service_tier`. Breaking migrations: `HookMetadata` now wraps its handler in `.root`. Previously unknown notifications get typed payloads. Late-joining turn handles do not replay earlier output. It requires CLI >=0.151.0.

**Operator consequence.** Embedders can now route multi-agent or webhook input without spoofing it as a user turn. This is the first SDK-level authority boundary for injected content. Update hook-reading code (`hook.command` -> `hook.root.command`) before upgrading. No Codex primary surface in the window mentions OpenAI's "Agents API" (2026-09-10). The only cross-link is the auto-review page, which sends "custom API or Agents SDK harnesses" to the API guardrails guide.

## 7. Planning tool off by default; permission-profile persistence extended to TUI turns, `/cd`, and remote resume

- **Date:** 2026-08-29 (0.151.0), 2026-09-01 (0.152.0), 2026-09-09 (0.154.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #41192 is in 0.151.0 (bundle #41196 035295b4 ahead 12/behind 0). #41744 (a9519cbc) is in rust-v0.152.0 (ahead 11/behind 0). #43330/#43355 are listed in the 0.154.0 body.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.151.0 ; https://github.com/openai/codex/releases/tag/rust-v0.152.0
- **Half:** both | **Confidence:** high

**What changed.** 0.151.0 keeps restored permission profiles across TUI turns and stops `/cd` from weakening sandbox restrictions. Before this, the 0.149.0 `/cd` command could loosen the sandbox. 0.152.0 restores the saved working directory on resume and keeps filesystem permissions through client metadata updates. 0.154.0 preserves saved permissions on remote resume/fork. 0.152.0 disables the `update_plan` tool by default (`tools.update_plan.enabled = true` re-enables it). That is scaffolding the harness removed. 0.151.0 also counts nested subagent tokens toward root goal budgets (#41183).

**Operator consequence.** If you use `/cd` on 0.149.x/0.150.x, upgrade. Plan-mode UIs or scripts that expect `update_plan` events must opt in on >=0.152.0. Goal budgets on multi-agent runs now include subagent tokens, so budgets set before 0.151.0 will trip earlier.

## 8. Hooks, MCP, and extensions: new interception points

- **Date:** 2026-08-26..2026-09-17
- **Channel:** `tagged-release`
- **Ancestry evidence:** listed in the release bodies of rust-v0.150.0 (#40511), rust-v0.151.0 (#41199, #41202), rust-v0.152.0 (#41700, #41421), rust-v0.153.0 (#42133), rust-v0.154.0 (#42284, #42413), rust-v0.155.0 (#43624).
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.151.0 ; https://github.com/openai/codex/releases/tag/rust-v0.155.0
- **Half:** capability | **Confidence:** high

**What changed.** 0.150.0 adds `Interrupt` hooks, which run commands or MCP handlers when a top-level turn is interrupted. 0.151.0 lets extensions inspect or replace MCP tool results before the model sees them. 0.152.0 adds per-tool `output_token_limit`. 0.153.0 scopes remembered MCP tool approvals to the selected app account. 0.154.0 hot-reloads plugin tools, skills, and hooks in existing sessions after plugin upgrades. MCP OAuth refresh failures surface a login challenge "without automatically replaying rejected tool calls". 0.155.0 adds Touch ID verification for MCP requests in local TUI on supported Macs.

**Operator consequence.** You can now filter or redact MCP output at the harness layer instead of in each server. Because plugins hot-reload, a session's skills and hooks can change mid-run. Re-audit anything that assumed the skill and hook set was fixed at session start.

## 9. Sandbox and credential hardening (no advisories)

- **Date:** 2026-09-01..2026-09-17
- **Channel:** `tagged-release`
- **Ancestry evidence:** release bodies of rust-v0.152.0 (#41403), rust-v0.154.0 (#42324, #42590), rust-v0.155.0 (#44286, #43909, #44040, #43906/#44341/#44489). `gh api repos/openai/codex/security-advisories` returns only GHSA-w5fx-fh39-j5rw (2025-09-19). `gh api advisories?affects=@openai/codex` adds GHSA-xrxf-jgv3-qmrm (2026-04-14). Neither is in the window.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.155.0 ; https://github.com/openai/codex/security/advisories
- **Half:** defect | **Confidence:** high

**What changed.** 0.152.0: cloud task requests reject untrusted backend URLs and disable redirects "to protect saved credentials". 0.155.0: blocks Windows-process escapes from restricted WSL sandboxes, hardens brokered shell snapshots against credential exposure, and invalidates remote-control sessions and cached state on account switch. No GHSA or CVE was published for any of them.

**Operator consequence.** Sandbox-escape and credential fixes are shipping as release-note bullets, not advisories. An advisory feed will not tell you to upgrade. On Windows/WSL, move to >=0.155.0. 0.156.0 (OUT) adds more isolation-gap fixes.

## 10. Channel: fourteen stables in 32 days, three hotfix trains

- **Date:** 2026-08-24..2026-09-18
- **Channel:** `tagged-release`
- **Ancestry evidence:** Release ledger above. Hotfix trains: 0.150.1, 0.152.1, and 0.153.1-.4 (four patches in 22 hours, all Astra catalog and guidance). Hotfix PR titles carry "[0.153 hotfix]".
- **Receipt:** https://github.com/openai/codex/releases
- **Half:** capability | **Confidence:** high

**What changed.** A minor roughly every 2 to 8 days, 90 to 250 commits each. Default install moved from 0.149.0 to 0.155.1 across the window. 0.155.1 restores reasoning summaries to off by default for new local TUI sessions (#46467) after 0.155.0 caused request rejections on providers that do not support them. 0.153.0 adds a disabled-by-default `features.context_management.experimental_mode` (token-budget context, `new_context` tool) for ChatGPT-plan sessions only.

**Operator consequence.** Floating `latest` means a behavior change every few days, including model defaults (item 2). Pin a version in CI and fleet images, and upgrade on purpose.

## Carry-forward answers

1. **Guardian V2 default:** NO. `default_enabled: false`, `Stage::UnderDevelopment` at every in-window stable (lib.rs read at 0.149.1, 0.150.0, 0.151.0, 0.152.0, 0.153.0, 0.153.4, 0.154.0, 0.155.0, 0.155.1). Still false at 0.156.0 (OUT). No docs page states the default. Guardian V2 analytics events exist vendor-side (#42144 in 0.153.0). No docs say how Guardian appears in usage or billing. The user `/usage` dashboard is main-unreleased at close.
2. **Stables in window:** 14 rust-v tags (ledger above) plus python-v0.154.0. npm latest at window close = 0.155.1 (published 2026-09-18T20:09:23Z; next stable 0.156.0 at 2026-09-22T19:55:37Z is OUT).
3. **#39153** (539a09cb): ancestor of rust-v0.155.1 (ahead 1154/behind 0). It survives and is extended by #41192 (0.151.0) and #43330/#43355 (0.154.0). **#39307** (c97bd2dc): ancestor of rust-v0.155.1 (ahead 1099/behind 0). `record_fail_closed_score` writing action_risk=1.0 is present at https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/ext/guardian-v2/src/async_scorer/extension.rs#L233-L235. **#39630** (942af844, merged 2026-08-20T07:04:50Z): already in rust-v0.149.0 (ahead 21/behind 0), so it landed in a stable in the parent window, and it survives in rust-v0.155.1 (ahead 1036/behind 0). Per the PR, explicit `approval_policy = "untrusted"` now fails with an error, and the known-safe command allowlist is gone. At rust-v0.155.1, `AskForApproval::UnlessTrusted` remains with serde rename "untrusted", documented as an "Internal policy for projects marked untrusted" (protocol.rs L993-L997).
4. **Approvals, sandbox, hooks, MCP, skills, SDK:** items 3 to 9. No security advisories in the window. Agents API: no mention on any Codex primary surface. GPT-6 Astra: catalog, picker, and bundled default changes only (item 2). No new config key beyond the model slug.

## Researcher lane notes

- The docs pages (auto-review, codex-sdk, changelog) are live and unversioned. They are retrieved 2026-09-23 and cannot be pinned. Treat their wording as docs-only as of retrieval.
- The auto-review page says selecting an approved "Daybreak" model in the desktop app auto-switches permissions to "Approve for me". I could not date this sentence to the window. The bundled catalog has hidden `gpt-daybreak-*` slugs at 0.153.0+.
- #45516 "Allow configuring the Guardian prompt template" and the Guardian reviewer refactor wave (#45413-#45736) appear in the changelog under 0.156.0 (OUT).

## Observed after window close

- rust-v0.156.0 (2026-09-22T19:51:01Z): voice on by default, worktrees on by default, `/usage` analytics dashboard (#45764), `/tui` fullscreen, `/daemon`, sandbox isolation fixes (#44639, #45984, #46500). `guardian_reuse_parent_compaction` flips to Stable/true. `guardian_ext` goes to Stage::Removed. GuardianV2 is still off.
- rust-v0.156.1 (2026-09-23T02:41:36Z): GPT-6 Sol and GPT-6 Luna in the picker. The rate-limit prompt recommends GPT-6 Luna (#47405). npm latest=0.156.1 as observed 2026-09-23.

## Surfaces checked

- `gh api repos/openai/codex` (identity)
- `gh api repos/openai/codex/releases?per_page=100` pages 1-3 (all releases back to 2026-05-12). Bodies of every in-window stable and python-v0.154.0.
- `gh api compare` for each consecutive stable pair, and for PR merge SHAs 539a09cb, c97bd2dc, 942af844, bd194593, 035295b4, a9519cbc, 86b7d127, e5769939, 531f3836, db0568db, 637c3227, d3ffbbed, 5d3fe48b, ca53e19c, 0083d9e3 against the relevant tags
- Raw `codex-rs/features/src/lib.rs` at 10 tags. Raw `codex-rs/models-manager/models.json` at rust-v0.153.0, 0.153.4, 0.154.0, 0.155.1. Raw `codex-rs/ext/guardian-v2/src/async_scorer/extension.rs` and `codex-rs/protocol/src/protocol.rs` at rust-v0.155.1
- `gh api pulls/<n>` for 39153, 39307, 39630, 39837, 41196, 41744, 42144, 42147, 42605, 42874 (plus diff), 42993, 42324, 43462, 44086, 44164, 44482, 45764
- `gh api repos/openai/codex/security-advisories`; `gh api advisories?affects=@openai/codex`
- `npm view @openai/codex dist-tags --json`; `npm view @openai/codex time --json`
- https://learn.chatgpt.com/docs/changelog (developers.openai.com/codex/changelog -> 200 after redirect), entries 2026-08-20..2026-09-18
- https://learn.chatgpt.com/llms.txt; https://learn.chatgpt.com/docs/sandboxing/auto-review.md; https://learn.chatgpt.com/docs/codex-sdk.md
- `gh search prs --repo openai/codex "Agents API"` (no results)

## Not reached

- Dist-tag history for npm `latest` on 2026-09-21 (the registry does not expose it; inferred from publish times).
- Pinned versions of the docs pages (no versioned docs source found). The changelog `.md` variant returns 404.
- https://developers.openai.com/blog/codex-as-a-platform was not re-read this window. The "Introducing the Agents API" post was not read, which follows the lane rule.
- Enterprise managed-configuration page ("supported client versions" for auto-review) was not opened.
