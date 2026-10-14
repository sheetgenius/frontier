---
schema_version: bitter.frontier_harvest.v0
provider: codex
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/codex.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased, docs-only]
window_volume: 14 non-prerelease rust-v tags (0.156.0 to 0.162.1); 94 rust alpha release objects after the parent's close plus 1 alpha tag with no release; 14 lockstep PyPI openai-codex versions with no python-v GitHub release; 27 material changes after crosscheck
lane: primary sources, profile-refresh researcher
---

# Harvest: codex (primary sources)

Punctuation is ASCII. Pin tags, not main. Identity: `gh api repos/openai/codex` returns full_name openai/codex, owner openai, description "Lightweight coding agent that runs in your terminal", default_branch main, pushed_at 2026-10-13T09:19:03Z. This is the repository behind npm `@openai/codex`, the Homebrew cask `codex` (its URL is this repo's `rust-v0.162.1/codex-package-aarch64-apple-darwin.tar.gz` release asset), PyPI `openai-codex` (sources under `sdk/python`) and npm `@openai/codex-sdk`. The official docs (https://learn.chatgpt.com/docs, 308 from developers.openai.com/codex) describe the same CLI. Code was read from a blobless clone and a sparse checkout of rust-v0.162.1 in scratch; nothing was built or executed. Marketing (openai.com launch posts, the DevDay recap, customer stories) is kept apart from substance (tags, code at tags, release bodies, docs pages, changelog entries); only substance is used as a receipt.

## Install today

**Newest stable: rust-v0.162.1**, GitHub release published 2026-10-09T19:44:51Z, prerelease=false, marked Latest (https://github.com/openai/codex/releases/tag/rust-v0.162.1). It is a two-fix hotfix over 0.162.0: a TUI crash on multiline async questions (#51866) and startup failures when a running background server's feature settings differ from CLI defaults (#52648).

**How it installs.** The docs CLI page (https://learn.chatgpt.com/docs/codex/cli, retrieved 2026-10-13) and the README at the tag (https://github.com/openai/codex/blob/rust-v0.162.1/README.md?plain=1#L14-L47) list the standalone installer first: `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, or on Windows `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"` (Authenticode-signed from 0.162.0, #51158). The installers download from `releases.openai.com/codex` and fall back to GitHub Releases. npm `@openai/codex` and `brew install --cask codex` are the listed alternatives. The README already led with the standalone installer at rust-v0.155.1, so this is not new in the window, but "installs from npm" is no longer the whole story.

**Published packages at the UTC cutoff.** Stable packages are 0.162.1 for npm `@openai/codex`, npm `@openai/codex-sdk`, and PyPI `openai-codex`; live npm latest still points there on 2026-10-14. The newest published preview before 2026-10-14T00:00:00Z is 0.163.0-alpha.10: CLI publication 2026-10-13T19:15:22.778Z, SDK 19:15:48.396Z. The original morning alpha.5 pointer observation did not cover the whole day. npm has no historical dist-tag audit log, so an exact cutoff alpha pointer is not reconstructed from publication times. Homebrew codex was 0.162.1 (https://github.com/Homebrew/homebrew-cask/blob/410fda78922483cdc65211cadbea846cf4232076/Casks/c/codex.rb). Receipts: https://registry.npmjs.org/@openai%2fcodex, https://registry.npmjs.org/@openai%2fcodex-sdk, https://pypi.org/pypi/openai-codex/0.162.1/json. The pipeline parks out-of-order publications under release-<version>-<tag> tags (#49704, #51186).

**Preview and main at the UTC cutoff.** Alpha.8, .9 and .10 were published on 2026-10-13; newest is rust-v0.163.0-alpha.10, published 19:04:12Z, 228 ahead / 4 behind stable (https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10). Alpha.6 remains tag-only. Alpha.11 was published 2026-10-14T03:27:29Z, outside this window. The last main commit before cutoff is ca2b076fffbc24ad5fa57258ece8a8277b326138, committed 2026-10-13T23:59:56Z, 248 ahead / 4 behind stable (https://github.com/openai/codex/compare/rust-v0.162.1...ca2b076fffbc24ad5fa57258ece8a8277b326138). The original 9167a0b2 morning snapshot was 204 ahead / 4 behind and was not the cutoff snapshot.

**Flag-off or flag-on things the profile discusses, at rust-v0.162.1.** Off: `guardianv2` and `guardianv2_decisions_comparison` (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1805-L1814), `cli_daybreak` (L1363-L1366), `token_budget` (L1829-L1832, which gates rollout token budgets), and `[tools.update_plan]` (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/config/mod.rs#L2730-L2736). On by default although marked under development: `instant_interrupt` (lib.rs L1159-L1162). On by default and new as a default this window: `daemon_auto_start` (L992-L995), `write_stdin_approval` (L1291-L1294). `features.credential_masking` exists only in rust-v0.163.0-alpha.2 and later, off by default.

**Changelog check corrected.** Independent text extraction on 2026-10-14 finds all fourteen CLI headings, install commands and release details on https://learn.chatgpt.com/docs/changelog. The raw-HTML absence test failed; no immutable October 13 capture establishes that absence. Use versioned GitHub release bodies for historical facts. This is a research correction, not a docs-removal event.

**Desktop app.** Codex also ships inside the ChatGPT desktop app. The vendor macOS security update naming CVE-2026-100754 is retained only under Leads not promoted, with impact unverified. Homebrew chatgpt was 26.1007.41230 with auto_updates true at the cutoff (https://github.com/Homebrew/homebrew-cask/blob/710f8bc53a14f9e92f470bba29672c01c3e43993/Casks/c/chatgpt.rb). Later live cask values do not revise that historical observation.

**What to run today.** rust-v0.162.1, pinned, with the background server either disabled (`--no-daemon` or `features.daemon_auto_start = false`) or its updater disabled followed by `codex app-server daemon restart` where a pinned version must stay pinned (sections 1 and 2), and `model` set explicitly (section 3).

## Release ledger

Stable = non-prerelease `rust-v*` GitHub release. ahead/behind from local `git rev-list --left-right --count <prev>...<tag>` on a blobless clone (same semantics as GitHub compare ahead_by/behind_by). Stables are cut from release branches, so a small behind_by is expected.

| Tag | Published (UTC) | Prerelease | ahead_by / behind_by vs previous stable | npm publish (UTC) |
|---|---|---|---|---|
| rust-v0.155.1 (baseline) | 2026-09-18T20:03:04Z | false | 2 / 1 vs 0.155.0 | 2026-09-18T20:09:23Z |
| rust-v0.156.0 | 2026-09-22T19:51:01Z | false | 526 / 8 | 2026-09-22T19:55:37Z |
| rust-v0.156.1 | 2026-09-23T02:41:36Z | false | 2 / 1 | 2026-09-23T02:45:25Z |
| rust-v0.157.0 | 2026-09-25T02:31:06Z | false | 128 / 2 | 2026-09-25T02:35:19Z |
| rust-v0.157.1 | 2026-09-26T01:02:31Z | false | 5 / 1 | 2026-09-26T01:06:57Z |
| rust-v0.158.0 | 2026-09-28T05:07:23Z | false | 207 / 6 | 2026-09-28T05:12:20Z |
| rust-v0.159.0 | 2026-09-29T08:05:42Z | false | 89 / 17 | 2026-09-29T08:10:59Z |
| rust-v0.159.1 | 2026-09-29T20:32:34Z | false | 3 / 1 | 2026-09-29T20:36:58Z |
| rust-v0.159.2 | 2026-09-29T23:57:16Z | false | 2 / 1 | 2026-09-30T00:03:49Z |
| rust-v0.159.3 | 2026-09-30T22:57:34Z | false | 2 / 1 | 2026-09-30T23:02:02Z |
| rust-v0.160.0 | 2026-10-01T20:19:13Z | false | 56 / 5 | 2026-10-01T20:26:19Z |
| rust-v0.160.1 | 2026-10-05T18:29:37Z | false | 2 / 1 | 2026-10-05T18:33:51Z |
| rust-v0.161.0 | 2026-10-07T15:58:45Z | false | 155 / 4 | 2026-10-07T16:04:02Z |
| rust-v0.162.0 | 2026-10-08T18:55:59Z | false | 227 / 2 | 2026-10-08T19:01:18Z |
| rust-v0.162.1 | 2026-10-09T19:44:51Z | false (Latest) | 3 / 1 | 2026-10-09T19:50:30Z |
| rust-v0.163.0-alpha.5 | 2026-10-10T00:26:59Z | true | 144 / 4 vs 0.162.1 | 2026-10-10T00:48:26Z (npm `alpha`) |
| rust-v0.163.0-alpha.6 | tag only, 2026-10-10T01:27:21Z | no release | n/a | not published |
| rust-v0.163.0-alpha.8 | 2026-10-13T13:14:41Z | true | 210 / 4 vs 0.162.1 | 2026-10-13T13:47:11.563Z |
| rust-v0.163.0-alpha.9 | 2026-10-13T15:47:20Z | true | 217 / 4 vs 0.162.1 | 2026-10-13T15:58:51.908Z |
| rust-v0.163.0-alpha.10 | 2026-10-13T19:04:12Z | true | 228 / 4 vs 0.162.1 | 2026-10-13T19:15:22.778Z |
| main @ ca2b076f | 2026-10-13T23:59:56Z | n/a | 248 / 4 vs 0.162.1 | n/a |

Hotfix contents: 0.156.1 adds GPT-6 Sol and Luna to the catalog and makes the rate-limit prompt recommend Luna (#47405). 0.157.1 carries four Windows daemon and console backports (#48138, #48157, #48238, #48272); its release body says highlights "could not be determined". 0.159.1 makes GPT-6.1 Sol the default model (#49323, #49342). 0.159.2 suppresses Windows console flashes (#49385). 0.159.3 adds account security setup reminders (#49744). 0.160.1 preserves Windows environment variables for remote stdio MCP servers (#51121). 0.162.1 is described above.

Prereleases: 101 alpha release objects were published 2026-09-21..2026-10-13, 7 of them on 2026-09-21 and already counted by the parent, so 94 are new: 0.155.0 hotfix line x3 (alpha.16.1, .16.3, .16.4), 0.156.0 x5, 0.157.0 x12, 0.158.0 x19, 0.159.0 x14, 0.160.0 x5, 0.161.0 x14, 0.162.0 x22, 0.163.0 x7. Do not count alpha suffixes as releases.

SDKs: PyPI `openai-codex` published 0.156.0 through 0.162.1, each approximately 3.4 to 12.3 minutes after the matching CLI npm publish, and has been in lockstep since 0.155.1 (2026-09-20). The newest GitHub python-v release is still python-v0.154.0, so the Python SDK now ships with no release object or notes of its own.

Registry delay endpoints use earliest artifact uploads: 0.159.1 (https://pypi.org/pypi/openai-codex/0.159.1/json), 0.160.1 (https://pypi.org/pypi/openai-codex/0.160.1/json), compared with npm time records.

## 1. Interactive codex now attaches to a shared background app server by default from 0.157.0

- **Date:** 2026-09-25 (0.157.0 default); 2026-10-07 (0.161.0 analytics default for daemon-launched servers)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #47179 (75ec81c8, merged 2026-09-22) is first contained in rust-v0.157.0 by `merge-base --is-ancestor` across all stables. `daemon_auto_start` reads Experimental/false at rust-v0.156.0 and Stable/true at every stable from rust-v0.157.0 to rust-v0.162.1. The socket isolation it depends on, #45984 (49305d74), is first in rust-v0.156.0. #49426 (2cc65cdd) is first in rust-v0.161.0; #49472 (b588812e) first in rust-v0.161.0; #50013 (b527ce47), #50913 (c2f7fe89) and #50140 (cb6da588) first in rust-v0.162.0; #52648 (backport f715d506) in rust-v0.162.1. The `codex exec` sources at rust-v0.162.1 contain no daemon references.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.157.0, https://github.com/openai/codex/pull/47179, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L992-L995, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/startup_orchestration.rs#L509-L512, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md?plain=1#L22-L28, https://github.com/openai/codex/pull/49426
- **Half:** both | **Confidence:** high

**What changed.** Since 0.157.0 an eligible interactive `codex` launch starts or reuses a detached, pid-backed app server and connects the TUI to it over the Unix control socket advertised at `CODEX_HOME/app-server-control/`, unless `--no-daemon` is passed, the launch targets a remote workspace or the agents overview, the Bedrock sign-in wizard or a Windows-mounted WSL home forces the embedded server, or `CODEX_EXEC_SERVER_URL` is set (startup_orchestration.rs L509-L512; README L25-L28). The server keeps running after the TUI exits, until a managed stop, restart or update; the README's lifecycle section describes no idle exit. The daemon crate's README at the tag says it "is experimental and its lifecycle contract may change" and that "Shared clients use the environment inherited when the daemon started. Opening a new terminal or clearing variables there does not clear the running daemon's environment; per-client environment isolation is not provided." The TUI now adopts that server's view of authority: permission profiles and permission shortcuts come from the server's catalog (#49472 in 0.161.0, #50140 in 0.162.0), and fresh threads take the server's model and reasoning defaults unless the launch sets them (#50013, #50913 in 0.162.0). From 0.161.0 the daemon launches app-server with `--analytics-default-enabled` (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/backend/pid.rs#L410), matching first-party clients; `analytics.enabled = false` still opts out. 0.162.1 is itself a fix for startup failures when a running daemon's feature settings differ from CLI defaults (#52648). The precondition shipped one release earlier: #45984 (0.156.0) binds control sockets in a 0700 user-owned directory and masks it from bubblewrap and Seatbelt sandboxes so filesystem-restricted commands cannot reach the privileged RPC transport.

**Operator consequence.** Environment variables set in a new terminal (cloud profiles, tokens, PATH) do not reach work served by an already-running daemon, and every terminal using the same `CODEX_HOME` shares one server: run `codex app-server daemon restart` after changing the environment, or use `--no-daemon` or `features.daemon_auto_start = false` where per-shell isolation matters. Expect the running server's version and settings to differ from the CLI just typed (section 2) and check with `codex app-server daemon version`. Set `analytics.enabled = false` explicitly if telemetry policy requires it. `codex exec` in CI does not use the daemon. Human attention moves from "which binary did I run" to "which long-lived server is this terminal talking to".

**Frontier lens.** The vendor now runs its own default terminal client on the app server that its docs still call experimental and unsupported for production (app-server and mcp-server pages, retrieved 2026-10-13). The TUI became a thin client, and authority (permissions, model defaults, environment) moved into a shared local service. The serial human gate that remains is the environment boundary, which is now per daemon, not per terminal.

## 2. The auto-started background server can update itself past a pinned npm or Homebrew CLI

- **Date:** 2026-09-22 (package seeding in 0.156.0); 2026-09-25 (reached by default through 0.157.0 auto-start); 2026-10-08 (network-policy fix, alpha only)
- **Channel:** `tagged-release` (behavior at 0.157.0 through 0.162.1); `preview-or-beta` (#52223 first in rust-v0.163.0-alpha.1, not in rust-v0.162.1)
- **Ancestry evidence:** #45558 (653e5fbb, merged 2026-09-15) is not in rust-v0.155.1 and is in rust-v0.156.0. The `follows_latest` logic and `default_auto_update_enabled() -> true` read the same at rust-v0.156.0, rust-v0.157.0 and rust-v0.162.1, and the README sentence on update checks is present at all three. #52223 (d570b363, merged 2026-10-08) is first contained in rust-v0.163.0-alpha.1 and is not an ancestor of rust-v0.162.1.
- **Receipt:** https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install.rs#L272-L338, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install_tests.rs#L53-L80, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/lib.rs#L893-L930, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/settings.rs#L27-L37, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md?plain=1#L48-L55, https://github.com/openai/codex/pull/45558, https://github.com/openai/codex/pull/52223, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/lib.rs#L330-L343
- **Half:** both | **Confidence:** medium

**What changed.** Read in code at rust-v0.162.1, not executed: on a first auto-start, `Daemon::start` (lib.rs L409-L458) copies the invoking CLI's complete package into `CODEX_HOME/packages/app-server-daemon/releases/<version>-<target>` and, for a stable version whose source is not the standalone installer's pinned `current` release, writes an `auto-update-version` marker that makes the copy count as latest-channel (prepare_install.rs L250-L254, L274-L281, L332-L338). npm installs carry that package layout (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/install-context/src/lib.rs#L740-L765; `scripts/stage_npm_packages.py` extracts `codex-package-<target>.tar.gz` into the npm vendor directory), the Homebrew cask downloads the same archive, and the test `seeds_full_package` asserts the marker for a seeded 0.152.0 package. The start path then calls `ensure_managed_updater` (lib.rs L451-L457, L893-L930). With `autoUpdateEnabled` defaulting to true (settings.rs L27-L37, L87-L89), that starts a detached loop which, per the README, checks "for updates after five minutes, then hourly", fetches https://chatgpt.com/codex/install.sh or install.ps1 (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/update_loop.rs#L74-L76), installs a daemon-only package that leaves "the user's CLI command and shell setup alone" (README L108), and restarts the running server on the new binary. A standalone install pinned to an explicit release is not auto-updated (README table: "the selected release stays pinned"). On 0.162.1 the updater's HTTP client falls back to a default client when configuration fails to load (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/cli/src/main.rs#L2360-L2372); #52223, only in the 0.163.0 alphas, says daemon updates "must honor application network restrictions and stop when their configuration cannot be loaded". No release note or docs page describes the updater; the docs CLI, app-server and managed-configuration pages do not mention it.

**Operator consequence.** Pinning `@openai/codex` to a version, or a Homebrew version, no longer pins the code that serves interactive sessions: the TUI client stays put while an eligible latest-channel background server can move independently. Five minutes then hourly is the default check schedule, not an update deadline; selected package, support, pin state, configuration and successful network access still matter. Where versions must hold (regulated fleets, eval baselines), set `{"updater": {"autoUpdateEnabled": false}}` in `CODEX_HOME/app-server-daemon/settings.json` then run `codex app-server daemon restart` to apply the enabled state, or disable auto-start. Inspect the applicable updater pidfile under CODEX_HOME/app-server-daemon: daemon-updater.pid for dedicated packages or app-server-updater.pid for legacy packages (lib.rs L330-L343). Compare `codex app-server daemon version` with `codex --version`; restart reuses the selected daemon package and does not downgrade an already advanced server to the CLI pin. Managed network allowlists do not reliably bind the updater on 0.162.1; treat the fix as preview until a stable contains #52223. An eligible successful auto-update can deliver newer fixes without a manual CLI upgrade; actual upgrade behavior and interruption costs were not observed here. Settle the code reading on a test machine: install a pinned npm version, launch `codex`, and watch `daemon-updater.pid` and the daemon version after the first check.

## 3. Default model moved again in a hotfix, and fresh TUI threads now take the server's defaults

- **Date:** 2026-09-23 (0.156.1 GPT-6 Sol and Luna); 2026-09-29 (0.159.1 default GPT-6.1 Sol); 2026-10-08 (0.162.0 server defaults, no default label)
- **Channel:** `tagged-release`; `docs-only` (changelog entries of 2026-09-14, 2026-09-22 and 2026-09-29)
- **Ancestry evidence:** Bundled catalog priority 1 is `gpt-6-astra` at rust-v0.159.0 (models.json slug L4, priority L74) and `gpt-6.1-sol` at rust-v0.159.1 (slug L178, priority L249), unchanged through rust-v0.162.1 (L177, L248). The 0.159.1 backports are #49323 (9fb2f5f4) and #49342 (3b765518); the main-line #49318 (b1e72963) first lands in rust-v0.161.0. #50013, #50913 and #51235 (2f412e60) are first in rust-v0.162.0. #44650 (1aaa453c) is first in rust-v0.156.0.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.159.1, https://github.com/openai/codex/blob/rust-v0.159.0/codex-rs/models-manager/models.json#L4-L74, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/models.json#L177-L248, https://github.com/openai/codex/pull/50013, https://github.com/openai/codex/pull/51235, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/models.json#L1397-L1406, https://learn.chatgpt.com/docs/changelog, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/v2/thread.rs#L110-L113, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/v2/turn.rs#L284-L287, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server/src/request_processors/thread_processor.rs#L1156
- **Half:** both | **Confidence:** high

**What changed.** For the second window running, a patch release changed what runs when `model` is unset: 0.159.1, published the same day as the changelog's "GPT-6.1 Sol in Codex and ChatGPT Work" entry, made `gpt-6.1-sol` priority 1 in the bundled and Bedrock catalogs, and 0.161.0 carried the same default on the main line. Its catalog entry defaults to `low` reasoning and lists `ultra` as its top effort, described as "Maximum reasoning with automatic task delegation" (the effort already existed for other models at 0.155.1). 0.156.1 had already put GPT-6 Sol and GPT-6 Luna in the picker and made the rate-limit prompt recommend Luna. In 0.162.0 fresh TUI threads omit unselected `model`, `model_provider` and `model_reasoning_effort` from `thread/start`, so the connected server's configuration decides: the local daemon's `config/read`, managed new-thread defaults, or its catalog when no model is configured (#50013, #50913). The picker stopped appending "(default)" to any entry (#51235). The legacy thread and turn multiAgentMode fields are deprecated and ignored in favor of ultra effort; the server discards the value, and this already held at 0.155.1, so it is a correction to the prior profile rather than a new in-window removal. The catalog is "backed by bundled models, cache, and `/models`" (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/src/manager.rs#L285), so an unset model can still move without an upgrade. GPT-5.5 is still listed at 0.162.1 with an upgrade prompt to `gpt-6-sol` and `retirement_at: null` (models.json L1397-L1406), while the changelog entry of 2026-09-14 retires it "from ChatGPT, ChatGPT Work, and Codex on all plans" on 2026-10-14 and says the retirement "does not apply to the OpenAI API". Managed requirements gained `model_provider` and `model_providers`, which override local and session selection (#44650, 0.156.0); the managed-configuration docs page (retrieved 2026-10-13) does not list them.

**Operator consequence.** Set `model` and `model_reasoning_effort` explicitly, in `config.toml` or on the command line, for anything with a cost, latency or eval baseline. A value in `config.toml` is part of the server's configuration and survives the new precedence; an unset one follows the catalog. Re-run evals on fleets that floated through 0.159.1. Remove `gpt-5.5` from configs, custom agents and scheduled tasks before 2026-10-14; the bundled 0.162.1 GPT-5.5 entry has no retirement timestamp; server or cached catalog metadata can differ. Admins who need a fixed gateway can now require it with `model_provider` in `requirements.toml`. The picker no longer tells anyone which model is the default, so the status line is where to look.

## 4. Sandbox escapes closed as release-note bullets in 0.156.0 and 0.162.0, with no matching new public advisory found

- **Date:** 2026-09-22 (0.156.0); 2026-09-25 (0.157.0); 2026-09-29 (0.159.0); 2026-10-08 (0.162.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** First stable containing each fix by `merge-base --is-ancestor`: #44639 (e25bedc1), #45984 (49305d74) and #46500 (04e4d2b4) in rust-v0.156.0; #47389 (888e02db) and #47407 (22a3f6d5) in rust-v0.157.0; #48155 (645b683a) and #48176 (1d804e91) in rust-v0.159.0; #51211 (7aa8f510) and #51407 (ccde2fc8) in rust-v0.162.0. `gh api repos/openai/codex/security-advisories` still returns only GHSA-w5fx-fh39-j5rw (2025-09-19); `gh api advisories?affects=@openai/codex` adds only GHSA-xrxf-jgv3-qmrm (2026-04-14).
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.156.0, https://github.com/openai/codex/releases/tag/rust-v0.162.0, https://github.com/openai/codex/pull/45984, https://github.com/openai/codex/pull/46500, https://github.com/openai/codex/pull/51211, https://github.com/openai/codex/pull/51407, https://github.com/openai/codex/security/advisories
- **Half:** defect | **Confidence:** high

**What changed.** Per the merged PR descriptions: before #45984, "Network access and Unix-socket allowlists" could let filesystem-restricted commands reach "the privileged app-server RPC transport"; the fix moves control sockets into a 0700 directory, masks it in bubblewrap, denies it in Seatbelt, and makes bubblewrap mandatory for filesystem-restricted Linux execution, so users of the deprecated `features.use_legacy_landlock` must turn it off. #46500 blocks the macOS `F_MAKECOMPRESSED` and `F_TRANSFEREXTENTS` fcntls, which "can mutate files through read-only descriptors". #44639 adds the missing inbound firewall block for the Windows offline sandbox. #47389 and #47407 keep Codex's own network policy in force across redirects, response bodies and live WebSocket traffic. #48155 keeps explicit filesystem denials when an approved command gets broader writes, and #48176 protects `.aws` under writable roots because "AWS profiles can select credential helpers that the application executes". In 0.162.0, #51211 stops bubblewrap discovery from probing or launching a `bwrap` found in a sandbox-writable PATH entry, which could otherwise "run outside the sandbox", and #51407 stops deny-read glob expansion from running a workspace-writable `rg` before confinement. The release notes carry these as one-line bullets; no matching new public advisory was found in the repository list, global package query or scoped NVD search during the 2026-10-14 crosscheck. That search does not prove an advisory can never exist.

**Operator consequence.** Run 0.162.0 or later (0.162.1 today) wherever Codex touches untrusted repository content. On Linux with a sandbox-writable directory on PATH, a planted `bwrap` or `rg` could run before confinement on 0.161.x and earlier. Check Linux configs for `features.use_legacy_landlock` before relying on filesystem-restricted profiles past 0.156.0. Do not rely solely on advisory feeds or Dependabot; watch the versioned release feed too. Reading release bullets for security fixes remains serial human work the vendor has not removed.

## 5. Typing into an escalated terminal now needs approval by default from 0.158.0

- **Date:** 2026-09-28 (0.158.0); 2026-10-07 (0.161.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #47799 (c098f97e, merged 2026-09-24) and #48073 (60713126) are first in rust-v0.158.0. `write_stdin_approval` reads UnderDevelopment/false at rust-v0.157.1 and Stable/true from rust-v0.158.0. #49353 (804d6306) and #49880 (1f52d407) are first in rust-v0.161.0.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.158.0, https://github.com/openai/codex/pull/47799, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/unified_exec/stdin_approval.rs#L190-L203, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1291-L1294, https://github.com/openai/codex/pull/49353, https://github.com/openai/codex/releases/tag/rust-v0.161.0
- **Half:** both | **Confidence:** high

**What changed.** When the agent writes to the stdin of a running process, Codex now compares the process's retained launch permissions and the current policy and asks for review when the process runs with a sandbox bypass, additional agent permissions, or policy that drifted since launch (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/unified_exec/stdin_approval.rs#L1-L5 and L190-L203); runtime-only grants such as plugin metrics no longer trigger it (#48073). Empty polls and non-TTY Ctrl-C are exceptions; not every stdin call is reviewed. Before 0.158.0, a process approved once to run outside the sandbox, such as a shell or REPL, accepted further typed input without review. With auto-review on, Guardian reviews these `WriteStdin` actions like other approvals. 0.161.0 adds that an approved filesystem escalation can grant broader writes "while retaining the sandbox, denied reads, and network policy" and tracks escalated terminals so later `write_stdin` calls still need review (#49353), and binds grants to the turn that requested them so background code-mode cells keep their own permissions (#49880).

**Operator consequence.** Expect more prompts, or more auto-review calls, in sessions that drive interactive escalated processes (ssh sessions, database shells, REPLs); this is a deliberate gate, not noise. App-server clients and scripts that pipe input into escalated terminals must now handle an approval request. On 0.161.0 and later, approving an escalation such as a `git pull` can widen writes without dropping deny-read globs over secrets.

## 6. Projectless folders skip the trust prompt, and the AGENTS.md gate fires only on an explicit untrusted decision

- **Date:** 2026-10-01 (0.160.0); the AGENTS.md gate is unchanged since 2026-08-26 (0.150.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #49160 (0d7b8117, merged 2026-09-29) is first in rust-v0.160.0. `is_untrusted()` is `matches!(self.trust_level, Some(TrustLevel::Untrusted))` at rust-v0.150.0, rust-v0.155.1 and rust-v0.162.1. The AGENTS.md early return added by #39837 (bd194593) is unchanged at rust-v0.162.1. `codex exec` uses the same "not explicitly untrusted" test for `--worktree` sources (exec/src/lib.rs L459-L460).
- **Receipt:** https://github.com/openai/codex/pull/49160, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/projectless.rs#L66-L90, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agents_md.rs#L64-L66, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/config_toml.rs#L614-L616, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/loader/mod.rs#L1098-L1109
- **Half:** both | **Confidence:** high

**What changed.** From 0.160.0, launching the TUI in a local directory with no project root marker, no Git checkout and no project config layer skips the folder-trust prompt and, when no saved trust, explicit choice, managed default or remote workspace says otherwise, applies the workspace-write profile with a granular approval policy that disallows shell-escalation, execpolicy-rule and skill prompts while allowing `request_permissions` and MCP elicitations (projectless.rs L66-L90; https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/loader/mod.rs#L412-L414). Re-reading trust at the tag also corrects the prior posture: project `AGENTS.md` is skipped only when the project is explicitly marked untrusted (agents_md.rs L64-L66 with config_toml.rs L614-L616), so a checkout with no saved trust decision, the usual CI and ephemeral case, still loads it. What an undecided or untrusted project loses is "project-local config, hooks, and exec policies" (loader/mod.rs L1098-L1109). The 0.154.0 fix that stops startup running workspace-controlled PATH helpers before trust still holds at the tag (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/utils/path-utils/src/system_commands.rs#L14).

**Operator consequence.** CI that relies on a repository's `AGENTS.md` does not need to grant trust; CI that relies on the repository's `.codex/` config, hooks or exec policies does. Conversely, opening a hostile clone does not drop its `AGENTS.md` unless someone recorded "untrusted", so treat the instructions file as attacker-controlled input in unattended runs. Running Codex in a scratch folder outside any repository now starts writing there without a prompt, inside the sandbox and with escalation prompts off.

## 7. Guardian V2 is still off; auto-review gained policy, template and audit-log controls, plus an opt-in Decisions comparison

- **Date:** 2026-09-22 (0.156.0) to 2026-10-08 (0.162.0); 2026-10-13 (alpha.8 includes #53389 and its environment-fallback follow-up)
- **Channel:** `tagged-release` (flags and controls); `preview-or-beta` (#53389 and 90f00bd8 first in alpha.8)
- **Ancestry evidence:** `Feature::GuardianV2` reads UnderDevelopment/false at every stable from rust-v0.156.0 to rust-v0.162.1, at rust-v0.163.0-alpha.10 and cutoff main ca2b076f. First stables: #45516 (520e13a4) and #45764 (ca53e19c) rust-v0.156.0; #47125 (26cb4d73) rust-v0.157.0; #47870 (30758e5c), #47630 (851d9e95) and #47647 (e9b4c696) rust-v0.158.0; #50099 (59f18e81), #51133 (4c9f42f4) and #50019 (9552906b) rust-v0.162.0. #53389 (27e6192e, 2026-10-12) and 90f00bd8 (environment fallback) first reach alpha.8 by window close.
- **Receipt:** https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1805-L1814, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L55-L66, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/decisions.rs#L30, https://github.com/openai/codex/pull/47870, https://github.com/openai/codex/pull/47125, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/analytics/normalize.rs#L320-L321, https://github.com/openai/codex/blob/rust-v0.163.0-alpha.10/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L57-L76, https://github.com/openai/codex/commit/30758e5c77c14e6ddcc53a6c7407a477fed4ac76
- **Half:** both | **Confidence:** high

**What changed.** The flag did not flip. The older Guardian approval reviewer stays Stable/true (lib.rs L1763-L1766) and still approves without a model review in Full Access (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-reviewer/src/routing.rs#L86-L91). The reviewer became configurable and auditable instead: `auto_review.experimental_policy_template` overrides the reviewer prompt (#45516, 0.156.0); `auto_review.extra_policy` and the managed `guardian_extra_policy` append policy text (#47125, 0.157.0); `otel.log_guardian_assessments`, off by default and needing an OTLP log exporter, exports completed synchronous-review assessments with status, risk level, user authorization and a rationale capped at 64 KiB; cached V2 approvals are excluded, and errors and cancellations differ from completed allow/deny assessments (#47870, 0.158.0). Reviews are now bound to the action's target environment (#47630), and the Browser connector gets computer-use review (#47647). New in 0.162.0 and off by default, `guardianv2_decisions_comparison` sends each Guardian V2 snapshot classification, including its transcript context, a second time to `https://api.openai.com/v1/decisions`, authenticated with `CODEX_GUARDIAN_DECISIONS_API_KEY` or, for the default OpenAI provider, `OPENAI_API_KEY` (startup.rs L55-L66; decisions.rs L30); alpha.8 switches that fallback to the cached login key (#53389) and adds an environment fallback (90f00bd8); use the alpha.10 resolver as the end-of-window preview receipt. The 0.156.0 `/usage` dashboard labels server-reported `guardian_review` and `guardian_classifier` usage as "Auto review" and "Auto review classifier", while by-model message counts fold `codex-auto-review` into "other" (normalize.rs L179, L320-L321). The auto-review docs page (retrieved 2026-10-13) documents none of the new keys and still says nothing about usage or cost.

**Operator consequence.** Nothing auto-enables Guardian V2 through 0.162.1 or on main. Teams that need receipts for reviewer decisions should turn on `otel.log_guardian_assessments` with an OTLP exporter; this is a new synchronous-review audit export, not a log of every Guardian decision. Put organization rules in `guardian_extra_policy` instead of replacing the whole template. The opt-in comparison sends transcript-bearing classifier requests to a separate endpoint using the selected API credential; verify its billing ownership before enabling it. `/usage` source labels establish attribution, not the monetary cost of auto-review.

**Frontier lens.** Attention moves from approving calls one by one to writing reviewer policy and auditing its decisions. Guardian V2 stays off while the older approval reviewer is on by default; the human-authored policy layer around that existing reviewer grows.

## 8. Defaults switched on in the window: voice, worktrees, API-key model discovery, and unannounced instant interrupts

- **Date:** 2026-09-22 (0.156.0); 2026-10-07 (0.161.0); 2026-10-08 (0.162.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Feature diffs between consecutive stables: `realtime_conversation` and `worktrees` go Experimental/false to Stable/true at rust-v0.156.0 (#44921 3f59eb96, #44870 68bc5369); `api_key_model_discovery` goes UnderDevelopment/false to Stable/true and `in_app_voice` appears as Stable/true at rust-v0.161.0 (#49807 7d4c7a07, #49683 6996cde6); `instant_interrupt`, added UnderDevelopment/false in rust-v0.159.0, goes UnderDevelopment/true at rust-v0.162.0 through cherry-pick a0282505 of #51812 (main commit 406b0c44, first in rust-v0.163.0-alpha.1); `ultrafast_mode` appears as Stable/true at rust-v0.162.0. #50148 (e7ea5f4a) is first in rust-v0.162.0. The rust-v0.162.0 release body does not mention #51812.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.156.0, https://github.com/openai/codex/releases/tag/rust-v0.162.0, https://github.com/openai/codex/commit/a028250541f18b4f3040744be1325214ed5cc832, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1159-L1162, https://github.com/openai/codex/pull/50148, https://github.com/openai/codex/pull/49683
- **Half:** both | **Confidence:** high

**What changed.** 0.156.0 turned voice conversations on by default (F8 toggle, bundled audio runtimes for Linux and Windows) and worktree support on by default; 0.162.0 adds agent-callable `create_worktree`, `get_worktree_creation_status` and `list_worktrees` tools for eligible trusted local projects with attachment storage, rejecting explicitly untrusted sources and leaving the task working directory unchanged (#50148). 0.161.0 enables model discovery for API-key accounts, keeping explicit opt-outs, and registers `in_app_voice`, a managed gate that the PR says is "intended for managed requirements to control permission for voice in desktop apps". 0.162.0 enables `instant_interrupt`, so new user input can preempt a streaming response or a long code-mode call; 0.159.0's notes introduced it as "Opt-in", the flag is still marked under development, and the cherry-pick message says Python SDK tests had to disable it where they depend on responses completing before steering. `ultrafast_mode` is on in the client; eligibility is server-side (changelog 2026-10-08: Pro $500 and eligible Enterprise and Edu plans, "Enterprise access is off by default").

**Operator consequence.** Fleet images should decide voice explicitly (`features.realtime_conversation = false` for the TUI, `in_app_voice = false` in managed requirements for desktop apps) where microphone use is out of policy. SDK and app-server clients that send input while a turn runs should re-test on 0.162.0 and later, or set `features.instant_interrupt = false`: new input can yield foreground observations mid-response instead of waiting. Cancellation of code-mode cells and nested calls through code_mode_interrupt is separate and default-on only in the 0.163.0 previews. Worktree tools let the agent create checkouts on its own in trusted projects; watch disk and branch hygiene.

## 9. Stable 0.162.1 keeps CLI Daybreak off; current docs scope the Approve-for-me switch to desktop

- **Date:** 2026-10-07 (0.161.0); 2026-10-08 (0.162.0, API-key accounts)
- **Channel:** `tagged-release`; `docs-only` (auto-review and cyber-safety pages, retrieved 2026-10-13)
- **Ancestry evidence:** #49856 (c41a72cd), #49858 (e1522188), #49939 (6b4daafd) and the gate #51207 (backport d7b674e2) are all first in rust-v0.161.0 and none is in rust-v0.160.1, so the CLI controls never shipped ungated in a stable; the main-line #51207 (5ad68916) and #50433 (66561d03) are first in rust-v0.162.0. `cli_daybreak` reads UnderDevelopment/false from rust-v0.161.0 to rust-v0.162.1.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.161.0, https://github.com/openai/codex/pull/51207, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/daybreak.rs#L8-L33, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1363-L1366, https://learn.chatgpt.com/docs/sandboxing/auto-review, https://learn.chatgpt.com/docs/cyber-safety
- **Half:** capability | **Confidence:** high

**What changed.** Daybreak is OpenAI's approval-gated cyber access program: Daybreak Blue for authorized defensive work and Daybreak Red for separately approved offensive validation (cyber-safety docs). In the CLI it is a per-turn cyber access program: `--enable cli_daybreak` or `features.cli_daybreak=true` exposes `/daybreak` and its indicators, and `codex exec --cyber-access-program` or the TypeScript SDK's `cyberAccessProgram` selects a program per turn even with the flag off. The 0.161.0 notes say `daybreak=true` alone is insufficient and automatic Cyber routing is omitted by default "even for saved Daybreak threads". The TUI code selects an access program only for an eligible account and model (daybreak.rs L8-L33), and none of its non-test Daybreak code references approvals or permissions. The live auto-review page scopes the permission switch to the desktop app: "selecting an approved Daybreak model automatically switches the permissions control to Approve for me when that mode is available for your account and allowed by organization policy", and "Model selection never overrides managed organization requirements." The bundled catalog carries hidden `gpt-daybreak-blue-latest` and `gpt-daybreak-red-latest` entries with `model_specialty: cyber`.

**Operator consequence.** On stable 0.162.1 nothing changes for CLI users who do not opt in, and Daybreak does not loosen CLI approvals. Desktop-app fleets with Daybreak-approved users should expect the permission mode to switch to Approve for me on model selection unless managed requirements pin approvals; set those requirements before granting Trusted Access. Pipelines can request a program per turn with `codex exec --cyber-access-program` without enabling the TUI controls. Alpha.10 enables CLI and API-key cyber-program gates by default, still subject to eligible account, provider and model support (section 26). The desktop switch is current moving documentation, not a dated in-window implementation event.

## 10. Remote execution surfaces: exec-server auth is opt-in, and the app-server docs lag the code on unauthenticated listeners

- **Date:** 2026-09-28 (0.158.0)
- **Channel:** `tagged-release`; `docs-only` (app-server page retrieved 2026-10-13)
- **Ancestry evidence:** #47601 (22101904) and #47648 (ad26b252) are first in rust-v0.158.0. The app-server string "refusing to start non-loopback websocket listener" is present in `transport/websocket.rs` at rust-v0.150.0, rust-v0.155.1 and rust-v0.162.1.
- **Receipt:** https://github.com/openai/codex/pull/47601, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/exec-server/src/server/transport.rs#L1-L2, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/exec-server/src/server/transport.rs#L40, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-transport/src/transport/websocket.rs#L135-L142, https://learn.chatgpt.com/docs/app-server
- **Half:** both | **Confidence:** high

**What changed.** `codex exec-server` gained `--ws-auth` capability tokens and signed bearer tokens for direct WebSocket listeners in 0.158.0, and app-server executor connections can carry bearer tokens (#47648). The exec-server transport still says "unauthenticated listeners remain supported for compatibility" (transport.rs L1-L2); its default listen URL is `ws://127.0.0.1:0` (L40). The app server is stricter than its docs: at rust-v0.162.1, as since at least 0.150.0, it refuses to start a non-loopback WebSocket listener without `--ws-auth` (websocket.rs L135-L142), while the live app-server page says "Non-loopback WebSocket listeners currently allow unauthenticated connections by default during rollout". The same page still calls the app-server command and WebSocket transport "experimental" and unsupported for production, and lists `process/spawn` as starting "an explicit process session outside Codex's sandbox" behind the `experimentalApi` capability.

**Operator consequence.** Anyone exposing `codex exec-server` beyond loopback must add `--ws-auth` (0.158.0 and later) and TLS; the server will not insist. For the app server, the docs warning is stale relative to the stock binary, which refuses an unauthenticated non-loopback listener. Treat any reachable app-server socket as a sandbox-bypass capability because of `process/spawn`. The docs discrepancy was independently reproduced on 2026-10-14; its exact October 13 wording is not archived.

## 11. Scaffolding removed: personality, prompt suggestions, plugin-creator skill, thread/rollback and default-model labels

- **Date:** 2026-09-22 to 2026-10-08
- **Channel:** `tagged-release`; `preview-or-beta` (#52160)
- **Ancestry evidence:** #44935 (12e82f44) and #44915 (3052bbcf) are first in rust-v0.156.0, where `personality` goes Stable/true to Removed; #47130 (cf6754e6) rust-v0.157.0; #47932 (694d8d45) rust-v0.158.0; #48621 (334b6e73) and #48604 (9db8162d) rust-v0.159.0; #49395 (ceea6716) rust-v0.161.0; #51329 (6221a217), #51235 (2f412e60) and #51203 (685270a5, `apply_patch_preserve_line_endings` to Removed) rust-v0.162.0; #52160 (cd85a26c) first in rust-v0.163.0-alpha.1.
- **Receipt:** https://github.com/openai/codex/pull/44935, https://github.com/openai/codex/pull/44915, https://github.com/openai/codex/pull/48621, https://github.com/openai/codex/pull/48604, https://github.com/openai/codex/pull/47932, https://github.com/openai/codex/pull/51329, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1889-L1892, https://github.com/openai/codex/commit/3052bbcf8c9d48e130599308c583784db43e57aa, https://github.com/openai/codex/commit/6221a217e2b24701ecbf05a239e4ca899ae3a359
- **Half:** capability | **Confidence:** high

**What changed.** The window deleted harness in several places. Personality selection left the TUI and the `personality` flag is Removed; the app-server protocol documents that "`friendly` and `pragmatic` no longer select a style". The deprecated `thread/rollback` API is gone, with `thread/revert` named as the alternative for paginated threads; legacy history markers remain for replay. Automatic follow-up prompt suggestions and the `tui.prompt_suggestions` setting were removed, as was the bundled `plugin-creator` skill. GPT-5.4 left the bundled catalogs (migration prompts kept), and the `ultrafast` tier left `gpt-5.6-sol`. Partial-history subagent forks and randomized session greetings were removed. Legacy positive integer fork strings now inherit all history; zero and invalid values are rejected, and model overrides require `fork_turns: "none"` (#51329). The model picker stopped labeling a default, and CRLF preservation in `apply_patch` became unconditional, retiring its flag. On the 0.163.0 alphas the patched zsh execution backend is removed (#52160).

**Operator consequence.** App-server clients calling `thread/rollback` break on 0.156.0 and later and must assess `thread/revert` for paginated threads rather than treating it as an unrestricted drop-in replacement. Configs setting `personality` or `tui.prompt_suggestions` now do nothing. Workflows that used the bundled plugin-creator skill must supply their own. Short-history fork clients may now pass the whole parent context; check context volume and model overrides. This is the same pattern as `update_plan` in the prior window: guidance scaffolding is coming out, and the knobs that matter are model, effort and permissions.

## 12. Channel: fourteen stables in eighteen days, model and daemon changes in patches, SDKs in lockstep

- **Date:** 2026-09-22 to 2026-10-09
- **Channel:** `tagged-release`; `docs-only` (changelog)
- **Ancestry evidence:** Release ledger above: seven minors (56 to 526 commits each) and seven patches. Patches with model-selection or daemon-compatibility changes: 0.156.1 (models in the picker and rate-limit recommendation), 0.159.1 (default model), 0.162.1 (daemon compatibility checks); 0.159.3 also introduces visible account-security reminders, so these three are not a rigorous partition of behavior changes. #49704 (5602705c) is first in rust-v0.161.0 and #51186 (5cbcf810) in rust-v0.162.0; both change the release workflow scripts.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.162.1, https://github.com/openai/codex/releases, https://www.npmjs.com/package/@openai/codex, https://pypi.org/project/openai-codex/, https://github.com/openai/codex/pull/51186, https://github.com/openai/codex/pull/49704, https://learn.chatgpt.com/docs/changelog, https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.8, https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.9, https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10, https://pypi.org/pypi/openai-codex/0.159.1/json, https://pypi.org/pypi/openai-codex/0.160.1/json, https://github.com/openai/codex/blob/rust-v0.162.1/README.md#L14-L54, https://registry.npmjs.org/@openai%2fcodex, https://registry.npmjs.org/@openai%2fcodex-sdk
- **Half:** capability | **Confidence:** high

**What changed.** Fourteen non-prerelease tags landed between 2026-09-22 and 2026-10-09, with 94 new alpha release objects alongside. The release pipeline now refuses to move GitHub `latest`, npm `latest` and platform dist-tags, the R2 `latest` channel or the installer aliases backward (#51186), and parks out-of-order alpha publishes under `release-<version>-<tag>` dist-tags (#49704). That is the failure the parent observed on 2026-09-23, when npm `alpha` pointed back to 0.155.0-alpha.16.3. At the cutoff, newest stable is rust-v0.162.1, published 2026-10-09T19:44:51Z; npm CLI and TypeScript SDK latest are 0.162.1 and PyPI openai-codex is 0.162.1. The tagged README lists the standalone installer first, with npm and Homebrew alternatives; that ordering already existed at 0.155.1 and is not new this window. The Python SDK ships to PyPI with every CLI stable but without GitHub release objects. Independent text extraction on 2026-10-14 finds all fourteen CLI entries on the official changelog; the original absence claim was an inspection error with no immutable October 13 support. Python publication delays are approximately 3.4 to 12.3 minutes using the earliest artifact upload per version.

**Operator consequence.** The default install moved from 0.155.1 to 0.162.1 in eighteen days, and 0.156.1 adds model choices, 0.159.1 changes the default model, and 0.162.1 fixes daemon compatibility; 0.159.3 also adds reminders. Pin the CLI, the Python SDK and the TypeScript SDK to the same version and upgrade on purpose; read each versioned GitHub release body for historical facts. Pinning the CLI does not pin an auto-started background server (section 2).

## 13. On 0.163.0 previews through alpha.10: credential masking, proxy DNS authorization, sandbox integrity checks

- **Date:** 2026-10-07 to 2026-10-13
- **Channel:** `preview-or-beta` (rust-v0.163.0-alpha.1 through alpha.10)
- **Ancestry evidence:** First tag containing each main commit: #51650 (37eaae6e), #51843 (cba716c0), #51835 (72c95952), #52160 (cd85a26c), #52223 (d570b363), #52220 (89d68bc8) and #52182 (78a19f5a) in rust-v0.163.0-alpha.1; #52302 (bd274564), #52250 (75e0b408) and #52245 (c9e0fffb) in alpha.2; #52661 (65b82cdf) and #52689 (10da5692) in alpha.5; #53389 (27e6192e) and #53506 (12cca49c) first in alpha.8. None is an ancestor of rust-v0.162.1.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.5, https://github.com/openai/codex/pull/52302, https://github.com/openai/codex/pull/51650, https://github.com/openai/codex/pull/51843, https://github.com/openai/codex/pull/52223, https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10, https://github.com/openai/codex/commit/27e6192e84fa8a2969d9d56c2fbe05754205958b, https://github.com/openai/codex/commit/12cca49c81c8aa6a37a5cc4e39964ee3b70f9458, https://github.com/openai/codex/commit/10da569252004863c8256eb6bdabee3a8fc73042, https://github.com/openai/codex/commit/cba716c0f1caa4f2528dedbb1075b50126709d7e
- **Half:** both | **Confidence:** high

**What changed.** The next minor is shaping up around secrets and isolation. `features.credential_masking`, off by default, brokers credentials through an already enabled network proxy and keeps project config from overriding it (#52302). The proxy now requires hostname authorization before DNS lookups (#51650), stops brokered credential aliases from bypassing MITM hooks (#52661) and, from alpha.8, rejects duplicate Host headers (#53506). Sandbox integrity checks run before commands and filesystem operations on bubblewrap, Seatbelt and MXC backends (#51840 to #51843), but are observational: preparation failures and timeouts do not stop execution. They are not an additional enforced containment boundary. Daemon updates honor application network policy (#52223). Also on the alphas: code-mode interruption on by default (#51835), parallel execution of read-only tools (#52245), a configurable default plugin activation policy (#52220), a verified sandbox launcher exposed to local MCP servers (#52182), opt-in Guardian trust for orchestrator connector identities (#52250), and per-turn cyber access programs forwarded to Guardian (#52689).

**Operator consequence.** None of this is in stable 0.162.1. Alpha.10 also flips the Daybreak gates (section 26); the genuine cutoff main-only Guardian classifier fallback change is in section 27. Teams waiting on credential masking or the daemon-update network fix should test the 0.163.0 alphas off production and watch for a 0.163.0 stable; settle it by reading `features/src/lib.rs` and `cli/src/main.rs` at that tag.

## 14. Ripgrep deny-glob expansion now ignores user configuration

- **Date:** 2026-10-08 (0.162.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** ac9b5b8380517ded445b09dd3196d8d9e2ba3c59 is contained in rust-v0.162.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/ac9b5b8380517ded445b09dd3196d8d9e2ba3c59
- **Half:** defect | **Confidence:** high

**What changed.** User ripgrep configuration, including --quiet in RIPGREP_CONFIG_PATH, could suppress the file list used to build Linux sandbox deny-glob masks and leave matching files accessible. The deny-glob invocation now passes --no-config; protected executable lookup alone did not close this separate hole.

**Operator consequence.** Use 0.162.0 or later and re-test denied reads and writes with RIPGREP_CONFIG_PATH set, checking that permitted files still work.

## 15. Resolved Git metadata stays protected across writable roots

- **Date:** 2026-09-28 (0.158.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** a92ccbde5328697894d09935a656f7c5f07a7d3f is contained in rust-v0.158.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/a92ccbde5328697894d09935a656f7c5f07a7d3f
- **Half:** defect | **Confidence:** high

**What changed.** A .git pointer could resolve inside another writable root and lose metadata protection through broader macOS grants or later Linux mounts. Resolved gitdirs, including symlink aliases, now remain read-only exclusions; explicit policy overrides remain possible.

**Operator consequence.** Run 0.158.0 or later for linked worktrees and audit writable-root combinations and aliases. Verify metadata writes are denied while ordinary surrounding files remain writable.

## 16. macOS managed configuration accepts only forced preferences

- **Date:** 2026-09-22 (0.156.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 73bf1812722f9b6fdbfac4997b2d96d7b64ff7c3 is contained in rust-v0.156.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/73bf1812722f9b6fdbfac4997b2d96d7b64ff7c3
- **Half:** defect | **Confidence:** high

**What changed.** CFPreferencesCopyAppValue could return ordinary user-writable defaults as administrator configuration or override lower requirements layers. Codex now checks CFPreferencesAppValueIsForced before and after reading config_toml_base64 and requirements_toml_base64 and requires a string without exposing preference contents in diagnostics.

**Operator consequence.** Run 0.156.0 or later and inspect MDM delivery of forced preferences. A value returned by CFPreferences alone is insufficient evidence of administrator ownership.

## 17. Guardian V2 invalidates cached approval when unscored access widens

- **Date:** 2026-09-22 (0.156.0)
- **Channel:** `tagged-release (Guardian V2 remains off by default)`
- **Ancestry evidence:** 663eb5fbdda690ca4471d92b3f9a29db43c5ba22 is contained in rust-v0.156.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/663eb5fbdda690ca4471d92b3f9a29db43c5ba22
- **Half:** defect | **Confidence:** high

**What changed.** An unscored exec_command requesting additional permissions could reuse a V2 approval that did not cover the wider access. For default-namespace exec_command with with_additional_permissions, the AgeScore path now invalidates the cached score as a scoring failure.

**Operator consequence.** Opt-in Guardian V2 users should run 0.156.0 or later and verify widened unscored actions fail closed. This fix does not enable V2 for default users.

## 18. Unix MCP children lose unrelated descriptors and OAuth endpoints require HTTP(S)

- **Date:** 2026-09-25 (0.157.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** afe4249cfe6bdf218ce8807a670fad122d2b60ed is contained in rust-v0.157.0; 2c2a42e65de077c5518ea5b4c3999633ef6a12fc is contained in rust-v0.157.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/afe4249cfe6bdf218ce8807a670fad122d2b60ed, https://github.com/openai/codex/commit/2c2a42e65de077c5518ea5b4c3999633ef6a12fc
- **Half:** both | **Confidence:** high

**What changed.** Unix local stdio MCP servers and descendants now launch with StdioOnly descriptor policy; Windows is not covered. MCP OAuth also rejects authorization endpoint schemes other than http or https before client registration or authorization URL return.

**Operator consequence.** Run 0.157.0 or later and check integrations relying on unrelated inherited descriptors or custom authorization URI schemes. Explicit transport stdio remains; do not infer this descriptor isolation on Windows.

## 19. Extension filesystem reads and cached skill pages follow callback permissions

- **Date:** 2026-10-07 (0.161.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** da2e174a66a6572204a91373321b7d22d87fb12e is contained in rust-v0.161.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/da2e174a66a6572204a91373321b7d22d87fb12e
- **Half:** both | **Confidence:** high

**What changed.** Extension tools and turn-input contributors receive environment access captured for the current step, including session and originating-turn grants. Executor skill reads use that access. Continuation pages bind to filesystem identity and callback permissions; image-generation filesystem operations use the same accessor.

**Operator consequence.** Custom extension authors should run 0.161.0 or later and exercise grant changes, environment switching and pagination. Cached pages from one permission context must not be treated as current access in another.

## 20. Fresh V2 subagents can inherit dynamic tools behind a default-off flag

- **Date:** 2026-10-08 (0.162.0)
- **Channel:** `tagged-release (multi_agent_v2_dynamic_tools off by default)`
- **Ancestry evidence:** e4e33a56b073b5d9a550aaf513798480f88e4a38 is contained in rust-v0.162.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/e4e33a56b073b5d9a550aaf513798480f88e4a38
- **Half:** capability | **Confidence:** high

**What changed.** With multi_agent_v2_dynamic_tools enabled, fresh V2 subagents started without parent history inherit the parent client-defined dynamic tool definitions and persist them in session metadata. The flag is default-off; this is not ordinary child behavior.

**Operator consequence.** Embedders can test fresh-child delegation with dynamic tools on 0.162.0 or later by explicitly enabling the flag. Verify the child calls its intended tools under the authority granted by policy.

## 21. Code Mode adds ranked tool discovery and settlement streaming

- **Date:** 2026-10-08 (0.162.0)
- **Channel:** `tagged-release (code_mode_tool_search off by default)`
- **Ancestry evidence:** 4d15794336668d6098c0e36eb8e96cbbbfdb1d2d is contained in rust-v0.162.0; 28a264fbc766a59f2b550b8318f88e4a4b8dffe1 is contained in rust-v0.162.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/4d15794336668d6098c0e36eb8e96cbbbfdb1d2d, https://github.com/openai/codex/commit/28a264fbc766a59f2b550b8318f88e4a4b8dffe1
- **Half:** capability | **Confidence:** high

**What changed.** Opt-in code_mode_tool_search exposes BM25-ranked tools.tool_search when the model supports it. Results are filtered through current nested-tool policy before the result limit. New as_settled and stream_settled JavaScript helpers expose fulfilled and rejected concurrent results in settlement order instead of waiting for the slowest input.

**Operator consequence.** Try ranked discovery for large permitted catalogs and settlement helpers for uneven tool latencies on 0.162.0 or later. These remove catalog-scanning and promise-orchestration scaffolding without granting additional tool authority; no end-to-end throughput gain was measured.

## 22. Custom Responses providers declare web and compaction capabilities

- **Date:** 2026-10-08 (0.162.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** c6049ebd9694c941386d85fb3e09acab2af289cb is contained in rust-v0.162.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/c6049ebd9694c941386d85fb3e09acab2af289cb
- **Half:** capability | **Confidence:** high

**What changed.** Responses-compatible providers can set model_providers.<id>.capabilities.external_web_access and remote_compaction. external_web_access=false prevents live-web hosted search; remote_compaction accepts v2 or unsupported, which uses local compaction. Omitted fields preserve existing provider defaults.

**Operator consequence.** Adapter authors can declare actual backend support without posing as the default provider. Test remote and local compaction and hosted-search behavior before selecting these capabilities on 0.162.0 or later.

## 23. Fullscreen transcripts become the default terminal presentation

- **Date:** 2026-09-25 (0.157.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 5106a5234ff10f49f2403e84b1f668ac2b4a61b5 is contained in rust-v0.157.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/5106a5234ff10f49f2403e84b1f668ac2b4a61b5
- **Half:** capability | **Confidence:** high

**What changed.** tui.fullscreen_transcript defaults true even without a tui section and applies from the first frame. Alternate-screen restrictions still take precedence.

**Operator consequence.** Set tui.fullscreen_transcript=false to retain terminal scrollback. This visible default flip changes presentation, not session or approval authority.

## 24. Explicit user goal edits persist before state changes and survive compaction

- **Date:** 2026-10-07 (0.161.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** de020167989fde4937204a064ea2fedd54f3c931 is contained in rust-v0.161.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/de020167989fde4937204a064ea2fedd54f3c931
- **Half:** both | **Confidence:** high

**What changed.** Thread goal set and clear requests accept user or automatic origin. Explicit user edits and clears persist as user instructions before goal state changes, including unloaded threads and concurrent compaction. Automatic or omitted origins supply no user authorization; recording failure leaves state unchanged.

**Operator consequence.** Embedders should set origin deliberately, retain failure handling and test unloaded-thread edits during compaction on 0.161.0 or later. Machine-generated goal mutations must not silently become user authority.

## 25. MCP OAuth adds confidential clients and in-session login

- **Date:** 2026-09-28 (0.158.0 secrets); 2026-10-07 (0.161.0 TUI login)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 83b56bc5ad9489a47a0eb3edc3e5852f597125be is contained in rust-v0.158.0; 4773a132c3512cc9dcfff1e03bcf57bbbd490cf8 is contained in rust-v0.161.0; absent from rust-v0.155.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/83b56bc5ad9489a47a0eb3edc3e5852f597125be, https://github.com/openai/codex/commit/4773a132c3512cc9dcfff1e03bcf57bbbd490cf8
- **Half:** capability | **Confidence:** high

**What changed.** Pre-registered MCP OAuth clients can supply oauth.client_secret for exchange and refresh. Secrets persist in server configuration but are redacted from debug output and excluded from authorization URLs and OAuth token records. From 0.161.0, /mcp login <name> starts login inside an active TUI session and returns results to its originating thread.

**Operator consequence.** Use 0.158.0 or later for confidential clients and 0.161.0 or later to repair login without leaving the session. Protect server configuration as credential-bearing storage and re-login when configured client identity changes.

## 26. Alpha.10 enables CLI Daybreak and API-key cyber-program gates

- **Date:** 2026-10-13 (rust-v0.163.0-alpha.10)
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** 6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7 is contained in rust-v0.163.0-alpha.10; 6cc7d9cc5c702c0ca133f7ea48432166e0b880be is contained in rust-v0.163.0-alpha.10; absent from rust-v0.162.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7, https://github.com/openai/codex/commit/6cc7d9cc5c702c0ca133f7ea48432166e0b880be, https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10
- **Half:** capability | **Confidence:** high

**What changed.** cli_daybreak is marked Stable and default-on inside alpha.10; api_key_cyber_access_programs also defaults on. Account, provider and model eligibility and opt-outs remain. Neither flip is in stable 0.162.1; enabling a client control does not grant Daybreak account access.

**Operator consequence.** Preview testers should check eligible background turns and API-key routing. Stable users retain the off-by-default CLI gate. Feature maturity inside an alpha does not turn that preview into a stable release.

## 27. Cutoff main changes the Guardian V2 classifier fallback to conversation

- **Date:** 2026-10-13 (commit at 18:08:10Z; no published in-window tag)
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 4d82d36ccf0746b75437d78b874ba4c96ff2cc75 is contained in ca2b076fffbc24ad5fa57258ece8a8277b326138; absent from alpha.10 and rust-v0.162.1. Read-only merge-base checks reproduced; primary commit messages and relevant diffs checked without executing upstream code. First containing release placements were independently established in the crosscheck.
- **Receipt:** https://github.com/openai/codex/commit/4d82d36ccf0746b75437d78b874ba4c96ff2cc75, https://github.com/openai/codex/compare/rust-v0.162.1...ca2b076fffbc24ad5fa57258ece8a8277b326138
- **Half:** capability | **Confidence:** high

**What changed.** Guardian V2 selects conversation classification when neither local async_classifier_mode nor the model default supplies a mode. Explicit snapshot remains available. This is in cutoff main, absent from alpha.10 and stable 0.162.1; V2 itself remains off.

**Operator consequence.** Keep this out of stable and in-window preview recommendations. V2 experiment owners should inspect the next containing release and test fallback and explicit modes. Post-window alpha.11 availability does not change this window.

## Prior claims re-checked

Active frontmatter claims, read at rust-v0.162.1 unless noted:

- `default-model-hotfix`: changed (see section 3). It recurred: 0.159.1 moved the default to `gpt-6.1-sol` (models.json L177-L248 at rust-v0.162.1).
- `mcp-server-removed`: holds at 0.162.1. No `mcp-server` subcommand in `codex-rs/cli/src/main.rs` and no `codex-rs/mcp-server` crate at the tag; the docs removal page (retrieved 2026-10-13) still calls the app-server command "experimental".
- `guardian-v2-still-off`: holds at 0.162.1 (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1805-L1808), and at every in-window stable, rust-v0.163.0-alpha.10 and cutoff main ca2b076f.
- `goal-persistent-validation`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/goal_files.rs#L121 checks `MAX_THREAD_GOAL_OBJECTIVE_CHARS`).
- `goal-lifecycle-metrics`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/goal/src/runtime.rs#L666).
- `mcp-memory-spawn`: could not verify. Memories at the tag are a core read and write pipeline (`codex-rs/memories/README.md`) plus `codex-rs/ext/memories`; no MCP spawn path for memories was found by grep.
- `session-id-tracking`: holds structurally (thread ids are the app-server protocol's primary key in `codex-rs/app-server-protocol/src/protocol/v2/thread.rs` at the tag); not re-pinned line by line.
- `mcp-thread-metadata`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/codex-mcp/src/resource_origin.rs#L302, `x-codex-turn-metadata`).
- `plugin-share-access-controls`: API surface present; authorization behavior not reverified (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/common.rs#L942-L947, `plugin/share/save` and `plugin/share/updateTargets`).
- `linux-sandbox-bundled`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/scripts/codex_package/layout.py#L149 requires `codex-resources/bwrap`; #51211 keeps "the bundled bubblewrap fallback").
- `permissions-approval-tui-visible`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/bottom_pane/status_line_setup.rs#L94-L99).
- `plugin-share-role-aware`: API surface present; authorization and role behavior not reverified.
- `skills-watcher-app-server`: module declaration present; full watcher behavior not reverified (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server/src/lib.rs#L139).
- `pretooluse-input-rewrite`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/hooks/src/events/pre_tool_use.rs#L44, `updated_input`).
- `goal-mode-default-on`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1823-L1826, Goals Stable/true).
- `remote-computer-use-after-lock`: could not verify (closed desktop surface; not re-read this run).
- `plugin-marketplace-sharing`: could not verify (closed surface).
- `permission-profile-inheritance`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/permissions_toml.rs#L33-L39 and L91, `extends`).
- `managed-requirements-toml`: holds and expanded: `model_provider` and `model_providers` (#44650, 0.156.0), `guardian_extra_policy` (#47125, 0.157.0), the `in_app_voice` gate (#49683, 0.161.0), and requirements that can disable the Windows MXC sandbox (#49642, 0.161.0). The managed-configuration docs page lists only `guardian_policy_config` among these.
- `profile-flag-canonical`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/utils/cli/src/shared_options.rs#L35-L36, `--profile`/`-p`).
- `remote-exec-apikey-and-bedrock`: holds and extended. Bedrock gained multi-agent V2, Ultra reasoning and GovCloud regions (0.161.0), and exec-server gained opt-in WebSocket auth (section 10).
- `sites-plugin-deploy`: could not verify in code (closed); the docs index still lists Sites and Sites administration pages.
- `ios-faceid-passcode-lock`: could not verify (closed iOS surface).
- `environment-scoped-approvals`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/tools/sandboxing.rs#L497-L507) and extended: Guardian reviews are bound to the target environment (#47630, 0.158.0).
- `rollout-token-budget-turn-abort`: changed, needs a qualifier. Rollout token budgets resolve to nothing unless `features.token_budget` is on (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/config/mod.rs#L2861-L2867), and that flag is UnderDevelopment/false (lib.rs L1829-L1832), as it has been since rust-v0.142.0. The cap exists only for operators who enable an under-development flag.
- `multi-agent-delegation-authority-mode`: no longer holds. The thread and turn `multiAgentMode` fields are documented "@deprecated Ignored" in favor of `ultra` reasoning effort (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/v2/thread.rs#L110-L113, https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/v2/turn.rs#L284-L287), the server discards the value (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server/src/request_processors/thread_processor.rs#L1156), and the wire value `none` now maps to an empty custom hint. The change predates this window (the deprecation is already present at rust-v0.155.1). The delegation knob is now the reasoning effort.
- `guardian-v2-in-tag-off-by-default`: holds (same evidence as `guardian-v2-still-off`).
- `guardian-skips-full-access-and-user-approval`: holds for Full Access (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-reviewer/src/routing.rs#L86-L91, `full_access` computed at https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/guardian/decision.rs#L72-L75); User mode skips background scoring (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/observation.rs#L189-L196), but synchronous routing has a require_guardian exception (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/approval.rs#L57-L67).
- `untrusted-projects-no-agents-md-no-helpers`: partly holds, consequence corrected (see section 6). The explicit-untrusted AGENTS.md skip and the helper fix hold; the profile's statement that CI "now has to trust the project explicitly" to keep `AGENTS.md` does not, because only an explicit `untrusted` decision skips it.
- `python-sdk-external-message`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/sdk/python/src/openai_codex/_inputs.py#L48-L52: it "does not establish user authorization or approval"). The SDK now ships to PyPI in lockstep (0.162.1).
- `hardening-without-advisories`: holds and intensified (see section 4).
- `fourteen-stables-three-hotfix-trains`: superseded by this window's cadence (see section 12): fourteen stables in eighteen days, seven of them patches.
- `update-plan-off-cd-sandbox-fix`: holds (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/config/mod.rs#L2730-L2736: `update_plan` is enabled only by `[tools.update_plan] enabled = true`).
- `mcp-result-interception-hot-reload`: interception type export present; replacement and hot-reload behavior not reverified (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/extension-api/src/lib.rs#L59 exports `McpToolResultInput`; 0.158.0 also adds extension hooks for model requests and response streams, #47679). Hot reload was not re-read.

Bolded paragraphs of "Where it stands, 2026-09-21":

- **Channel.** changed (see sections 1, 2 and 12): latest is 0.162.1; the standalone installer is the first documented path; the desktop app also has a Linux preview (changelog 2026-08-11, before this window); pinning the CLI no longer pins an auto-started background server.
- **Pin the model too.** holds, and recurred (see section 3). The GPT-5.5 retirement on 2026-10-14 is still scheduled.
- **The reviewer is narrower than its name.** holds at 0.162.1: Guardian V2 off, Guardian approval on, Full Access skips model review, `--approve-for-me` still defined (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/utils/cli/src/shared_options.rs#L45). Section 7 adds the new controls.
- **Untrusted repositories got quieter.** changed (see section 6): the CI consequence was wrong. The explicit `approval_policy = "untrusted"` error still holds (https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/config/mod.rs#L229-L232).
- **`codex mcp-server` is gone.** holds; the app server is still labeled experimental in docs, while the default TUI now runs on it (see section 1). Python SDK `ExternalMessage` holds.
- **Fixes arrive as bullets.** holds (see section 4).
- **Behavior worth knowing before you configure it.** mostly holds: MCP interception type presence and `update_plan` off verified; full interception behavior not reverified; hook trust on plugin refresh, rejection text to the model, and subagent tokens in goal budgets were not re-read this run.

## Carry-forward answers

From `stance.watch_next`:

1. **Guardian V2's default at the next stable tag:** no change. UnderDevelopment/false at all fourteen stables, at rust-v0.163.0-alpha.10 and at cutoff main ca2b076f. The new adjacent flags `guardianv2_decisions_comparison` and `guardian_trust_orchestrator_connectors` (alpha) are also off.
2. **The app server losing its experimental label:** no. The app-server and mcp-server docs pages (retrieved 2026-10-13) still say "experimental" and unsupported for production, and the daemon crate README calls itself experimental. The vendor nonetheless runs its default TUI on it (section 1).
3. **A docs page on how Guardian and auto-review usage shows up in usage views:** no docs page. Partial answer from code: the `/usage` dashboard (0.156.0, ChatGPT accounts) labels server-reported `guardian_review` and `guardian_classifier` usage "Auto review" and "Auto review classifier", and folds `codex-auto-review` into "other" when grouping messages by model (normalize.rs L179, L320-L321). The opt-in Decisions comparison uses a selected API credential; billing ownership and price need separate verification (section 7).
4. **Configs naming gpt-5.5 before its 14 October retirement:** still open until tomorrow. The changelog still schedules 2026-10-14 for ChatGPT sign-in surfaces; the 0.162.1 bundled catalog still lists `gpt-5.5` with `retirement_at: null` and an upgrade prompt to `gpt-6-sol`, the bundled 0.162.1 GPT-5.5 entry has no retirement timestamp; server or cached catalog metadata can differ.

From "What is unresolved":

- **Whether Guardian V2 ever defaults on:** still open; no sign of a flip anywhere, including main.
- **What Guardian costs you:** partly answered (item 3 above); still no docs statement on cost.
- **When the app server becomes supportable:** still open; the label stands, and the stakes rose because the default TUI path now depends on it.
- **The "Daybreak" auto-switch:** mostly settled (section 9). The docs scope it to the desktop app, conditional on mode availability and organization policy, and say model selection never overrides managed requirements. The CLI gates Daybreak behind `cli_daybreak` and its Daybreak code does not touch approvals. The docs sentence still cannot be dated, and the desktop behavior cannot be read in code.

## Operator questions settled

- **Does this change how an operator should run, trust, or govern Codex?** Yes: the default interactive runtime is now a shared, self-updating background server (sections 1 and 2); typing into escalated terminals is gated (section 5); trust semantics are clearer and narrower than the profile said (section 6); auto-review is now governed by policy text and auditable (section 7).
- **Does this affect long-horizon autonomous software work?** Yes: `ultra` effort brings automatic task delegation and replaces the deprecated delegation-mode knob (section 3 and prior claims); instant interrupts let humans steer mid-run (section 8); the agent can create its own worktrees (section 8); rollout token budgets remain behind an off-by-default flag (prior claims).
- **Does this affect verification, replay, resume, permissions, memory, or receipts?** Yes: per-decision OTLP Guardian assessment logs (section 7); turn-bound grants (section 5); server-authoritative permissions that survive reconnects (section 1); cold-resume permission changes (#53150, #53419) were not independently placed in a preview in this author pass.
- **Does this change whether teams should wrap, test, adapt, or ignore Codex capability?** Adapt and pin: `thread/rollback` is gone (section 11), the SDKs move in lockstep (section 12), and the app server stays experimental (section 10).
- **Does this make serious agent work easier to start, inspect, or control without hiding authority?** Mixed. Starting is easier (projectless folders, section 6) and review is more inspectable (section 7), but the daemon hides version and environment provenance (sections 1 and 2) and the picker hides the default model (section 3).

## Leads not promoted

- Docs-only vendor update notice, impact unverified: the live changelog dates macOS security update 26.924 to 2026-09-25 and names version 26.924.20706 and CVE-2026-100754 (https://learn.chatgpt.com/docs/changelog). CVE Services returns CVE_RECORD_DNE (https://cveawg.mitre.org/api/cve/CVE-2026-100754), and NVD returns zero records (https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2026-100754). No primary receipt establishes impact, attack prerequisites or affected versions. Original section 13 was deleted; hold security promotion for a vendor advisory, CNA/NVD record or original researcher disclosure.

- Simon Willison, web-edit 0.1a0 post (2026-10-12, https://simonwillison.net/2026/Oct/12/web-edit/): he describes driving Codex remotely from his phone with GPT-6 Astra at extra-high effort. The primary record shows `codex remote-control` documented in the CLI reference and iOS pairing entries in the changelog; usage anecdote only, not promoted.
- Simon Willison, "llm-openai-decisions 0.1a0" (2026-10-06): the Decisions API announced at DevDay. The only Codex use found is the opt-in Guardian V2 comparison against `https://api.openai.com/v1/decisions` (section 7).
- Latent Space, DevDay 2026 AINews (2026-09-30, https://www.latent.space/p/ainews-openai-devday-2026-dots-61): a roundup listing dots, GPT-6.1 Sol, Ultrafast, the Decisions and Agents APIs, Spaces and a marketplace. Verified against primary records: GPT-6.1 Sol (changelog 2026-09-29, catalog in 0.159.1), Ultrafast (docs DevDay page, changelog 2026-10-08, `ultrafast_mode` in 0.162.0), Decisions API (section 7). No Codex docs page mentions the Agents API (grep of the docs index and fetched pages). Spaces are a ChatGPT surface; no Codex marketplace change was verified.
- openai.com DevDay recap and "Introducing GPT-6.1 Sol" (2026-09-29): marketing; returned HTTP 403 to fetches. The docs page https://learn.chatgpt.com/docs/whats-new/devday-2026 was used instead. Its Codex items are Astra Ultrafast (Pro $500 and eligible Enterprise and Edu), reusable cloud environments, Codex Security Cloud (research preview), and the enterprise Agent Security console. That page and the Agent Security page (retrieved 2026-10-13) are docs-only. The Agent Security page notes that "Where policy permits full sandbox escalation and it is approved, that execution can bypass the command proxy."
- OpenAI customer stories in the window (LegalOn on Codex cost cuts, Asana, Oracle, Chatham, Sophos with Daybreak): marketing; no operator fact promoted.
- Web results on CVE-2026-100754 (aiweekly.co, mezha.ua, techjournal.org, feedly): a local process could pass as a trusted OpenAI component through the macOS app's process-chain signature checks and reach conversations, commands and TCC-protected files. Not promoted: no primary write-up, and no MITRE or NVD record (vendor notice above).
- Simon Willison on Wikimedia "rogue" agent activity (2026-10-07): not shown to involve Codex; not verified.
- Latent Space AINews comparing Claude Haiku 5.5 with GPT-6 Luna (2026-10-08): benchmark claim without method; ignored per contract.
- The X lane is down this run; no social posts were captured.

## Surfaces checked

- `gh api repos/openai/codex` (identity); `gh release list -R openai/codex --limit 400` (all objects from 2026-09-18; prerelease flags, publish times, Latest flag); `gh release view` bodies for all fourteen in-window stables; `gh release view rust-v0.163.0-alpha.6` (not found).
- Local blobless clone: `git fetch --tags`; `git rev-list --left-right --count` for every consecutive stable pair, rust-v0.163.0-alpha.5 and main; `git merge-base --is-ancestor` for about 70 PR commits against all fourteen stables and the 0.163.0 alpha tags; `git log` of each hotfix range; commit messages of about 60 PRs read locally.
- Code at tags: `codex-rs/features/src/lib.rs` at every stable from rust-v0.155.1 to rust-v0.162.1, rust-v0.163.0-alpha.6 and main (full feature diff per tag); `codex-rs/models-manager/models.json` at ten tags; a sparse checkout of rust-v0.162.1 (`codex-rs`, `scripts`, `sdk`, `docs`, README) read for the daemon, updater, TUI startup, trust, stdin approval, Guardian, Daybreak, app-server and exec-server transports, analytics dashboard, Python SDK and package layout; the README, `prepare_install.rs`, settings and app-server protocol files compared at rust-v0.150.0, rust-v0.155.1, rust-v0.156.0 and rust-v0.157.0 where history mattered.
- Registries: `npm view @openai/codex dist-tags` and `time`; `npm view @openai/codex-sdk dist-tags` and `time`; PyPI JSON for `openai-codex`; formulae.brew.sh cask JSON for `codex` and `chatgpt`.
- Advisories: `gh api repos/openai/codex/security-advisories`; `gh api advisories?affects=@openai/codex`; MITRE CVE Services and the NVD API for CVE-2026-100754.
- Docs (retrieved 2026-10-13, unpinnable): changelog (including the `?type=codex-cli` view), llms.txt index, codex/cli, app-server, mcp-server, sandboxing/auto-review, cyber-safety, feature-maturity, permissions, developer-commands, enterprise/managed-configuration, enterprise/agent-security, linux/linux-app, whats-new/devday-2026. Docs captures were re-fetched into a codex-only scratch folder after a shared scratch folder was overwritten by another lane; the re-fetched sizes matched the first fetch byte for byte.
- Writing lane: `feeds/writing.json` (161 items) filtered for Codex, OpenAI, GPT-6, Daybreak, Guardian and app-server terms; all titles scanned.

## Not reached

- Running anything: the daemon updater's reach to npm and Homebrew installs (section 2) is read in code at the tag, not observed.
- openai.com posts (DevDay recap, GPT-6.1 Sol launch): HTTP 403.
- Wayback snapshots of the changelog, to settle whether CLI release entries were removed after 2026-09-23 (HTTP 429).
- Closed surfaces: desktop remote computer use after lock, Sites, iOS Face ID lock and plugin marketplace sharing were not re-verified; the desktop-app Daybreak permission switch cannot be read in code.
- Not re-read at the tag: the Guardian skip in User-approval mode, plugin and hook hot reload, hook trust on plugin refresh, rejection text sent to the model, the Python SDK `HookMetadata.root` migration, and `--bypass-hook-trust` semantics.
- Billing for `/v1/decisions` requests and any docs statement on auto-review cost.
- What CVE-2026-100754 allowed (no public record).

## Crosscheck applied

Applied verify/codex.crosscheck.md on 2026-10-14 with a 2026-10-13 posture and 2026-10-14T00:00:00Z cutoff. Original sections 2, 3, 7, 9, 11, 12 and 14 corrected. Original section 13 deleted as a publishable security finding; its docs-only vendor notice remains an impact-unverified lead. No numbered section was UNVERIFIABLE. Original preview section 14 is now 13. All fourteen verified misses M1-M14 have checked primary receipts and containment tests in new sections 14-27. Corrected the preview ledger to alpha.10, 94 new alpha objects and cutoff main; removed the changelog-absence claim; narrowed billing, catalog, audit export, observational integrity checks and unsupported composite rechecks. Updater-disable instructions require restart and distinguish dedicated and legacy pidfiles; restarting does not reset the selected package. No upstream code, installer, daemon or tests were executed.
