---
schema_version: bitter.frontier_harvest.v0
provider: hermes-agent
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/hermes-agent.yml
channels_present: [tagged-release, main-unreleased]
window_volume: 7 stable tags, 0 prereleases; 12 material changes (2 repo GHSA fixes, 5 approval-gate changes, 1 default flip, 1 docs repair, 3 capability clusters)
lane: primary sources, Lane A researcher
---

# Harvest -- hermes-agent (primary sources)

Punctuation is ASCII. Identity: `gh api repos/NousResearch/hermes-agent` -> full_name NousResearch/hermes-agent, description "The agent that grows with you", default_branch main. Matches the contract's primary_surfaces repo. Ancestry computed with `git merge-base --is-ancestor` on a blobless clone and cross-checked with `gh api repos/NousResearch/hermes-agent/compare/A...B`. All tags in the window are non-prerelease; every channel below is `tagged-release` unless marked.

## Release ledger

| Tag | Name | published_at (UTC) | prerelease | ahead_by vs previous stable (behind_by) |
|---|---|---|---|---|
| v2026.8.19 | v0.20.5 | 2026-08-21T12:16:39Z | false | 804 vs v2026.8.18 (0) |
| v2026.8.27 | v0.20.6 | 2026-08-27T12:06:53Z | false | 1376 vs v2026.8.19 (0) |
| v2026.8.31 | v0.21.0 "The Pantheon Release" | 2026-08-31T19:29:49Z | false | 911 vs v2026.8.27 (0) |
| v2026.9.7 | v0.21.1 | 2026-09-07T22:17:01Z | false | 5995 vs v2026.8.31 (0) |
| v2026.9.11 | v0.21.2 "The state.db Patch Release" | 2026-09-11T19:20:31Z | false | 986 vs v2026.9.7 (0) |
| v2026.9.14 | v0.21.3 | 2026-09-14T16:04:14Z | false | 1039 vs v2026.9.11 (0) |
| v2026.9.21 | v0.21.4 | 2026-09-21T18:10:55Z | false | 5173 vs v2026.9.14 (0) |

Counts are `git rev-list --left-right --count` including merge commits; release bodies quote non-merge counts (for example v0.21.1 body: 5,139). Every tag is a linear descendant of the previous one (behind_by=0). Only v0.21.0 and v0.21.2 carry curated notes; v0.20.5, v0.20.6, v0.21.1, v0.21.3, v0.21.4 are rollup bodies that defer notes (to v0.21.0, then to v0.22.0) and say "undocumented here on purpose" for listed features. Channel fact: v0.21.3 body says Hermes Cloud agents auto-update to the newest release tag, and Docker images build from each tag (`nousresearch/hermes-agent:v2026.9.14`). Main at 2026-09-23 observation (c0d72947) is ahead of v2026.9.21 by 488, behind_by=0; 129 of those commits are dated on or before 2026-09-21 local time.

## 1. Carry-forward: the three approval fixes reached v2026.8.19 on 2026-08-21 (confirmed)

- **Date:** 2026-08-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR merge SHAs from `gh api .../pulls/N`: #90224 f0ffcbc7532f5ca58d62eba474b0a398082c6e93 (merged 2026-08-19T19:46:26Z), #90391 b0350365829ee67aee0cd40e7cb04774c57dab27 (2026-08-20T02:42:00Z), #90765 1179f148e436d80fdd36f78cfb758444f392780d (2026-08-20T11:30:23Z). `compare <sha>...v2026.8.19` -> status=ahead, behind_by=0 for all three (ahead_by 470, 372, 194). `git merge-base --is-ancestor <sha> v2026.8.18` fails for all three. #89416 e88d8831 also in v2026.8.19, not v2026.8.18.
- **Receipt:** https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** The parent brief's statement holds. The CLI execute_code approval fall-through, the honest `/yolo` locked-ON report under process-frozen YOLO, and the Bot Mode group-room approval cards are all in the first in-window stable tag. The v0.20.5 release body does not name any of them; it lists "execution-discipline and runtime stall guards" and "Bot Mode group-room threads" in summary only.

**Operator consequence.** v2026.8.19 is the minimum tag where a quiet classic-CLI session and a `/yolo` OFF line can be trusted. Anyone still on v2026.8.18 should skip straight to v2026.9.21 (see items 5, 6, 9, 10) rather than stop at v2026.8.19.

## 2. agent.max_turns default flipped from 500 to unlimited in v2026.8.19

- **Date:** commit 2026-08-20; tagged 2026-08-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** c32119b12c "feat(config): default agent.max_turns to unlimited; accept inf/infinity/null spellings". `compare v2026.8.18...c32119b12c` ahead_by=639 (not in v2026.8.18); `compare c32119b12c...v2026.8.19` ahead_by=165, behind_by=0. hermes_cli/config_defaults.py: `"max_turns": 500` at v2026.8.18 (line 46), `"max_turns": None` at v2026.8.19 (line 50) and v2026.9.21 (line 56) with comment "null = unlimited (default; caps caused silent mid-task truncation)". Companion opt-in wall-clock budget 803397ecc3 (`agent.run_budget_seconds` / `hermes chat --run-budget N`) is also first in v2026.8.19; `budget_warning_ratio` default None.
- **Receipt:** https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L53-L60
- **Half:** both | **Confidence:** high

**What changed.** The parent agent no longer has a turn ceiling by default. Subagents keep their own 250-iteration cap (item 7). The only default bound on a runaway parent is now gateway_timeout (inactivity, 1800s) and spend.

**Operator consequence.** Upgrading from v2026.8.18 or earlier removes a cap you may have been relying on without knowing it. If you run Hermes unattended, set `agent.max_turns` or `agent.run_budget_seconds` explicitly. This saves attention on long tasks (no more silent truncation at 500) and creates a spend-watching obligation.

## 3. Unattended platforms (webhook, msgraph_webhook, api_server) now deny dangerous commands by default

- **Date:** commit 2026-08-30; tagged 2026-08-31
- **Channel:** `tagged-release`
- **Ancestry evidence:** ef71f2cad8b43628594a34f24755e726cc316432 (PR #98558, merged 2026-08-30T14:04:17Z). `compare v2026.8.27...ef71f2ca` ahead_by=578; `compare ef71f2ca...v2026.8.31` ahead_by=333, behind_by=0. New key `approvals.unattended_mode: "deny"` at v2026.9.21 config_defaults.py line 1651; absent at v2026.8.18. Same tag carries 73f8fb74e0 (webhook excluded from gateway approval context). Follow-ups in v2026.9.21: c001881d85 routes /v1/runs MCP trust-gate consent through a live run's approval callback; 05e7e89175 honors pattern-key allowlists when unattended. Issue #87509 (api_server stall) remains open.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/ef71f2cad8b43628594a34f24755e726cc316432
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Before v2026.8.31, a webhook session hitting a dangerous command sat for the full approvals.timeout with nobody able to answer (#37284). Now webhook, msgraph_webhook, and api_server resolve instantly through `unattended_mode` (deny | approve), mirroring `cron_mode`.

**Operator consequence.** Webhook and API-server automations that previously stalled will now fail fast with a BLOCKED result. Do not set `unattended_mode: approve` to make them pass; that auto-approves every flagged command from a caller who authenticated only with a webhook secret. Use `command_allowlist` pattern keys instead (honored when unattended as of v2026.9.21).

## 4. GHSA-7x36-8jrh-v4pw: a copied repo's .git/config could run code on the host before any prompt (fixed v2026.9.7)

- **Date:** commit 2026-09-02; tagged 2026-09-07
- **Channel:** `tagged-release`
- **Ancestry evidence:** f6234d00c5d59450adea1d7edd30ad3859375c79 "fix(security): close GitSpawn RCE class". `compare v2026.8.31...f6234d00` ahead_by=674 (not in v0.21.0); `compare f6234d00...v2026.9.7` ahead_by=5321, behind_by=0. `gh api advisories/GHSA-7x36-8jrh-v4pw` and the repo security-advisories endpoint both return 404: the advisory is not published. Resolution below is from the commit message and diff (agent/context_references.py, hermes_cli/_subprocess_compat.py, tools/working_diff.py, tools/subagent_worktree.py, tests/security/test_gitspawn_config_injection.py).
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/f6234d00c5d59450adea1d7edd30ad3859375c79
- **Half:** defect | security | **Confidence:** high on the fix and scope; advisory text unavailable

**What it allowed.** Hermes runs system git automatically against the session directory (coding-workspace snapshot, gateway project tree, /diff, @diff and @staged context refs, goal fingerprint, `-w` worktree add) before any prompt, tool call, approval, or trust gate. Those probes honored the repo's own config, so a directory delivered with its .git folder intact (zip, sync folder, USB stick; not a `git clone`) could set core.fsmonitor, core.hooksPath, pager, editor, credential helper, or a .gitattributes-named diff/textconv driver and get arbitrary code execution as the user with nothing on screen. The fix pins those keys inert via GIT_CONFIG_* env, ignores global/system config for probes, and adds `--no-ext-diff --no-textconv` to diff-rendering subcommands.

**Operator consequence.** Every tag through v2026.8.31 is exposed. Upgrade to v2026.9.7 or later before opening Hermes in any directory you did not create or clone yourself. Project-skill trust (`hermes skills trust`) never gated this path; the exposure was pre-trust.

## 5. approvals.deny now applies inside isolated containers (v2026.9.7)

- **Date:** commit 2026-09-05; tagged 2026-09-07
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1c37b9c45772fe284af0179df41f2b366cb6b0e9 (fixes #91002, closed 2026-09-05). `compare 1c37b9c4...v2026.9.7` ahead_by=696, behind_by=0; not an ancestor of v2026.8.31.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/1c37b9c45772fe284af0179df41f2b366cb6b0e9
- **Half:** defect | security-relevant | **Confidence:** high

**What it allowed.** Both shell-command guard entry points returned approval from the isolated-container fast path before evaluating the operator's `approvals.deny` globs. A Docker sandbox without host mounts, and singularity, modal, daytona, and vercel backends, skipped the entire user deny list, which config documents as unbypassable even under --yolo.

**Operator consequence.** If you enforce policy with `approvals.deny` on a remote or container backend, it was not enforced before v2026.9.7. Re-run `hermes approvals test` on your deny list after upgrading; the command mirrors the new order.

## 6. computer_use ran destructive desktop actions unapproved on every non-CLI host until v2026.9.14

- **Date:** commits 2026-09-12 and 2026-09-13; tagged 2026-09-14
- **Channel:** `tagged-release`
- **Ancestry evidence:** 3e066dfedd2e3dbbf39607b32f760417b51c0ec3 "fix(computer_use): approval goes through the shared gate; no callback now fails closed": `compare v2026.9.11...3e066dfe` ahead_by=500 (not in v2026.9.11); `compare 3e066dfe...v2026.9.14` ahead_by=539, behind_by=0. Follow-up 98a3324821c64b78c13d5d0f105508da0ab71cee (approvals.mode off honored at the shared gate) `compare ...v2026.9.14` ahead_by=223, behind_by=0. Same tag: 24692ee79035c88f0abf386934c0582f0c8e7883 flags cloud metadata endpoint (169.254.169.254, fd00:ec2::254, metadata.google.internal, 100.100.100.200) fetches for approval.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/3e066dfedd2e3dbbf39607b32f760417b51c0ec3
- **Half:** defect | security-relevant | **Confidence:** high

**What it allowed.** computer_use kept a private approval path that returned "allow" when no approval callback was installed. Only the interactive CLI installed one, so gateway turns (Telegram, Discord, Slack), cron, api_server, tui_gateway, and ACP executed destructive desktop input with no approval, ignoring cron_mode and the allowlist. An "always approve" grant also unlocked every computer_use action for the session. From v2026.9.14: no callback and no gateway means BLOCKED; gateway sessions get real once/session/always buttons; "always" is scoped to one `cua:<action>:<background|foreground>` key. `curl` to an IMDS address, previously auto-approved, now prompts (not a hardline block).

**Operator consequence.** If you enabled computer_use on a gateway or cron host before v2026.9.14, audit what it did: it was running without a gate. Upgrade, then expect approval cards where there were none. On cloud VMs, the IMDS prompt is the new signal to watch for.

## 7. Delegation docs now agree with config (250 / 10), from v2026.9.11

- **Date:** commit 2026-09-08; tagged 2026-09-11
- **Channel:** `tagged-release` (docs in tag); deployed docs agree
- **Ancestry evidence:** bc1d1a287966bb4e990c4414461f9f0c0da3e80e "docs(delegation): update shipped defaults (250 iterations, 10 concurrent children) and document output_schema". `compare v2026.9.7...bc1d1a28` ahead_by=75; `compare bc1d1a28...v2026.9.11` ahead_by=911, behind_by=0. delegation.md still said 50 / 3 at v2026.8.19, v2026.8.27, v2026.8.31, v2026.9.7 (for example v2026.9.7 blob dbe5e21c lines 45, 164, 295, 562-563). At v2026.9.21 (blob a53ad1ed): "Up to 10 concurrent subagents by default" (line 45), "iteration limit (default: 250)" (line 344), sample `max_iterations: 250` / `max_concurrent_children: 10` (lines 636-637). config_defaults.py at v2026.9.21: max_iterations 250 (line 1333), max_concurrent_children 10 (line 1348). Live page https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation served "Up to 10" and "default: 250" on 2026-09-23.
- **Receipt:** https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/website/docs/user-guide/features/delegation.md#L344
- **Half:** defect (closed) | **Confidence:** high

**What changed.** The mismatch the parent reported against v2026.8.16.2 and v2026.8.18 is closed at v2026.9.11. The page also now says max_iterations is config-only, not a per-call delegate_task parameter. Residual: the cost-warning example at line 550 still multiplies with `max_concurrent_children: 3` (an illustration, not a stated default). v2026.9.21 adds `delegation.oneshot_max_children` (default 2) for `-q` runs only (a79d1d3a71).

**Operator consequence.** Retire the "do not size spend from the docs" caution for tags v2026.9.11 and later. With item 2, a default parent is unbounded while each of up to 10 concurrent children gets 250 iterations; size budgets from that.

## 8. Multiplex profiles leaked allow-all, allowlists, vault secrets, and files across profiles until v2026.9.11

- **Date:** merged 2026-09-11; tagged 2026-09-11
- **Channel:** `tagged-release`
- **Ancestry evidence:** #107616 cbd03e6e4ca143c1d5c2db881320afb85783c30b (`compare ...v2026.9.11` ahead_by=116, behind_by=0), #107630 580322ef, #107609 3b044261, #107617, #107611, #107620, #107626; all first in v2026.9.11 per release body and `merge-base --is-ancestor`. Follow-ups in v2026.9.14: 9c9e7ab6e5 (a served profile's turn sees its own cwd, approvals, redaction, tool policy).
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/cbd03e6e4ca143c1d5c2db881320afb85783c30b
- **Half:** defect | security | **Confidence:** high

**What it allowed.** Under `gateway.multiplex_profiles`, adapter authorization read the default profile's env. If the default profile opted into GATEWAY_ALLOW_ALL_USERS, every secondary email, QQ, WhatsApp, Matrix, Teams, Slack, LINE, and DingTalk bot answered any sender (email also skipped From: authentication), and the default's Matrix allowlist decided who could approve tool calls on a secondary bot. Secondary stdio MCP servers received the default's vault secrets; MEDIA: delivery could attach another profile's .env, auth.json, or state.db.

**Operator consequence.** If you serve several profiles from one gateway, upgrade to v2026.9.11 or later and review who talked to secondary bots before then. Single-profile installs were not affected.

## 9. GHSA-2fmg-cjqm-hhrj: a weak webhook route could inherit a privileged sibling's toolsets (fixed v2026.9.21)

- **Date:** commit 2026-09-18; tagged 2026-09-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** 9345c67854f6ef1ef4f68ac4b9c3ae266ecceccf. `compare v2026.9.14...9345c678` status=diverged, ahead_by=1 (not in v2026.9.14); `compare 9345c678...v2026.9.21` ahead_by=5395, behind_by=0. Advisory lookup 404 (unpublished); resolved from commit message and gateway/platforms/webhook.py diff. Reported-by trailer: pinarsadioglu.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/9345c67854f6ef1ef4f68ac4b9c3ae266ecceccf
- **Half:** defect | security | **Confidence:** high

**What it allowed.** Per-route toolsets were resolved by splitting the session chat_id on ":", while authentication used the exact URL segment. A route named `build:external` resolved to route `build`, so a caller holding only the weak route's HMAC secret got the privileged sibling's terminal and file tools. Routes without ":" were unaffected.

**Operator consequence.** If any webhook route name contains ":", upgrade to v2026.9.21 and rotate the secrets of the weaker route. Otherwise, low exposure.

## 10. Approval-gate integrity cluster in v2026.9.21: breaker, attribution, smart-approval silence, new flagged patterns

- **Date:** 2026-08-27 to 2026-09-21
- **Channel:** `tagged-release` (v2026.8.27 for the guardian timeout; v2026.9.21 for the rest)
- **Ancestry evidence:** cc295509b412f76785ecf548a7cf0a7d2a4e285f tirith breaker half-open (`...v2026.9.21` ahead_by=2838, behind_by=0; not in v2026.9.14). 6332216384b7e71efdb64a4e77764201f114d2f8 (gateway withdrawn prompts, ahead_by=4280) and 2dfb795cb78f2cbb880215c30c666512b46b250b (CLI undelivered prompts, ahead_by=4122) both first in v2026.9.21. 349e6611a1c5d846a865368dd6c386b78edd1a54 explicit smart-approval guardian timeout, first in v2026.8.27. 262825db74ff6c9d2d4a678cc47931bcb4b8b027 empty guardian answer warns, `...v2026.9.21` ahead_by=491. 06a3a98751e1034545fa225c48258b2190721c57 dynamic shell words (port of openai/codex#39159) and 886df27c6e26db022cc328899d66507e603e40db bun/deno inline scripts, both first in v2026.9.21. Config unchanged across the window: approvals.mode "smart", timeout 300, denial_breaker_threshold 3 (v2026.9.21 lines 1647-1657).
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/cc295509b412f76785ecf548a7cf0a7d2a4e285f
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** (a) The tirith command-scanner circuit breaker latched open forever after consecutive spawn failures, so one transient failure meant every later command skipped scanning until restart. It now half-opens after a TTL with a single probe. (b) An approval prompt that was withdrawn (parent delegation ended, /stop, turn end) or never delivered (CLI callback raised, input interrupted) used to be reported as "User denied", so the parent agent reasoned about a refusal that never happened. It is now outcome `cancelled` with a cause; still fail-closed. (c) The smart-approval guardian had no explicit timeout (a stalled provider froze a turn for 62 minutes with no log) and an empty 200 answer mapped silently to ESCALATE. Both now log at WARNING. On any guardian failure the verdict is ESCALATE to the human or pattern gate, not approve. (d) Newly flagged: shell expansions that could synthesize destructive find flags, and `bun`/`deno` inline eval.

**Operator consequence.** On v2026.9.14 and earlier, a Hermes that ever logged a tirith crash may have stopped scanning silently; restart or upgrade. If you parse approval hook outcomes, add `cancelled` as a distinct value. If you run smart mode on a reasoning model as the guardian, watch WARNING logs for empty answers; each one is a human prompt you will be asked to answer.

## 11. Capability: real-profile browsing, password-blind vault, SHA-pinned plugin catalog

- **Date:** 2026-08-27 (browser), 2026-09-11 (vault, catalog)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1f4d095fd8 "feat(browser): real-profile browsing via agent-browser copy + browser-use CDP" `compare ...v2026.8.27` ahead_by=128, behind_by=0. `browser.use_real_profile: False` and `real_profile_autoclose: False` at v2026.9.21 config_defaults.py lines 431, 438. #106480 96fbc47f (vault) `compare ...v2026.9.11` ahead_by=252, behind_by=0. #69446 e74c4a00 (plugin catalog) first in v2026.9.11.
- **Receipt:** https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L423-L442
- **Half:** capability (authority-bearing) | **Confidence:** high on code; release body is the only description of the vault's 2FA flow

**What became possible.** The agent can browse locally with the user's real Chromium logins through a Hermes-managed snapshot of the active default profile. It is off by default; turning it off deletes ~/.hermes/browser-profile/. On Windows, closing a browser that holds the profile lock is a separate user-approved step (e4451ec6). From v2026.9.11 the agent can sign in, pay, and fill addresses from 1Password, Bitwarden, or the local Hermes vault without the secret entering model context; 2FA codes come from a saved authenticator key or a UI prompt. Plugins can be installed from a curated index pinned to commit SHAs.

**Operator consequence.** These are the largest authority grants of the window and all are opt-in. Try them only on a profile you would let a delegate use. Payment and real-login capability moves the review question from "what command will it run" to "which sites and accounts is it allowed to act on"; there is no per-site allowlist in the config block at v2026.9.21.

## 12. Capability and defaults in v2026.9.21: skills.auto_load, stream-json, one-shot footprint, curator stops pruning built-ins

- **Date:** 2026-09-14 to 2026-09-19 commits; tagged 2026-09-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1976869c0103a0cc2f9d27cd9c043f31e308a84c skills.auto_load (`...v2026.9.21` ahead_by=4907, behind_by=0; not in v2026.9.14). 1657a1ce2d `--format stream-json`. a79d1d3a71 one-shot footprint. 1b8e4c513d6a55c6a6bdf8779b43544456cb89ef "feat(curator)!: prune_builtins defaults to off" (`...v2026.9.21` ahead_by=2021). a6e934e0fd gateway `decline` unauthorized-DM behavior. All `merge-base --is-ancestor` v2026.9.21.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/1b8e4c513d6a55c6a6bdf8779b43544456cb89ef
- **Half:** capability | **Confidence:** high

**What became possible.** `skills.auto_load: [names]` pins skills fully loaded into every new session on CLI, TUI, gateway, cron, and API. The CLI emits structured JSONL for wrapping Hermes as an engine. A `-q` / `--oneshot` run no longer authors skills, drops self-improvement coaching, and caps delegation at 2 children; the commit measured 34% of tool-result bytes going to skill text across 21 one-shot trajectories. The curator no longer silently archives bundled skills unused for 30 days (one launch archived 57); opt back in with `curator.prune_builtins: true`.

**Operator consequence.** For teams wrapping Hermes as an agent engine (operator question 3), stream-json plus the one-shot footprint make headless runs cheaper and parseable; test `-q` runs against v2026.9.21 before comparing cost to other harnesses. The self-improvement loop is now explicitly scoped to interactive and gateway sessions. If skills vanished after an earlier update, check ~/.hermes/skills archive state; the curator was the cause.

## Researcher lane notes

- Marketing vs substance: the v0.21.0 "Security hardening across the board" highlight credits #81152 (protected instruction files), #84428 (Windows destructive commands), and #85232 (live subagent steering). All three are ancestors of v2026.8.18 (verified), i.e. already shipped before this window. Do not report them as window changes.
- v0.21.0 shipped a session-store rewrite that made state.db fragile for some installs (second writers cancelling POSIX locks, healthy WAL databases reported corrupt, one bad row killing `sessions list`). v0.21.2 (v2026.9.11) is the repair release (#108076 902eccae and five siblings). Anyone on v2026.8.31 or v2026.9.7 should move to v2026.9.11+ and run `hermes doctor`.
- Egress: iron-proxy defaults unchanged (`proxy.enabled: False`, `enforce_on_docker: True`). In-window hardening, all tagged: 722acd66 fail-closed when `docker_network: false` contradicts a `--network` flag in docker_extra_args (v2026.9.7); 578c7aea blocks forwarding any egress-owned credential name (including AWS_SECRET_ACCESS_KEY and custom mappings) into the sandbox via docker_forward_env or `-e` (v2026.9.21; previously only *_API_KEY/*_TOKEN suffixes were guarded); 3933fdf6 routes provider/manifest/sitemap URL fetches through the SSRF guard (v2026.9.21).
- Skills trust: no change to `trusted_project_dirs` semantics or `project_discovery` default in the window. 1764508c (v2026.9.21) makes project-local skills register for the TUI/Desktop session's repo, not $HOME. `skills.inline_shell` stays False; `guard_agent_created` stays False; `tier1_advisory` stays True (still a no-op without the NVIDIA binary).
- Windows tool execution: reliability only (stdout drain bounding e7a82ead, Job Object containment 9307c678, all drive letters treated as host cwd bb504a2e, gateway lifecycle guard recognizes Windows spellings d966b34c). No new approval coverage beyond #84428, which predates the window.
- Bot Mode: beyond #90765, b466a87b (v2026.9.21) makes group-room approval choices submit on click (the clip-prone Respond button is gone) and fixes rooms showing a failed turn as live work for up to 20 minutes.
- The v0.21.1 compare (5,995 commits in 7 days) reflects a codebase modularization; expect file paths cited in pre-September findings to have moved (config_defaults.py lines shifted from ~2263 to ~1633 for approvals).

## Observed after window close

- 30b38d139b1fd91670e3b5bd88cd50f71287a12f (authored 2026-09-21T22:44 PDT = 2026-09-22T05:44Z; on main, in no tag): a shell `pre_tool_call` hook printing the documented `{"action": "approve"}` parsed to None, so the tool ran with no approval prompt and `hermes hooks doctor` stayed green. The defect is present at v2026.9.21. Sibling 02ad41df (a plugin block outranks an earlier plugin's approve). Channel `main-unreleased` at observation.
- 31e59b9441 (2026-09-23): setup agent can install plugins and skills through the approval card. `main-unreleased`.

## Surfaces checked

- `gh api repos/NousResearch/hermes-agent` (identity) and `releases?per_page=40` (tag, name, published_at, prerelease, draft)
- Release bodies for all seven in-window tags
- Blobless clone: `git rev-list --left-right --count` between consecutive tags and v2026.9.21...origin/main; `git merge-base --is-ancestor` for every SHA cited
- `gh api .../pulls/{90224,90391,90765,81152,81137,84428,85232,106480,69446,107616,107630,107609,108076,110061,99220}` merge SHAs and dates
- `gh api .../compare/A...B` for every receipt SHA listed above
- config_defaults.py at v2026.8.18 and v2026.9.21 (approvals, skills, browser, proxy, agent, delegation blocks); at every in-window tag for delegation defaults
- website/docs/user-guide/features/delegation.md at every in-window tag
- Live docs: https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation (250 / 10 on 2026-09-23); /docs/user-guide/security HTTP 200
- Issues #87509 (open), #37284, #91002, #99213 (closed)
- `gh api advisories/<id>` and repo security-advisories for GHSA-7x36-8jrh-v4pw, GHSA-2fmg-cjqm-hhrj (404), GHSA-9f4c-93c8-jc8g (Electron CVE-2026-70608, upstream dependency; desktop mitigation 77ca6a6d first in v2026.9.7)
- Commit messages for all SHAs cited

## Not reached

- Published text of GHSA-7x36-8jrh-v4pw and GHSA-2fmg-cjqm-hhrj (not published; repo security-advisories list returned an empty array). Severity and affected-version ranges are therefore inferred from ancestry, not stated by the vendor.
- Docker Hub tag timestamps for `nousresearch/hermes-agent:v2026.9.x` (not queried).
- Deployed-docs pages other than delegation and security were not diffed against the tag.
- Maintainer social posts: none opened; Lane C owns social.
