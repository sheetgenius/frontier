---
schema_version: bitter.frontier_harvest.v0
provider: agent-zero
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/agent-zero.yml
channels_present: [tagged-release, branch-only]
window_volume: 8 material changes, 4 capability-bearing, 5 defect-bearing, 5 security-relevant
lane: primary sources, Lane A researcher; identity agent0ai/agent-zero
---

# Harvest -- agent-zero (primary sources)

Punctuation is ASCII. Identity: `gh api repos/agent0ai/agent-zero` -> full_name agent0ai/agent-zero, description "Agent Zero AI framework", default branch main. Not any other ZERO project. Baseline is the parent harvest (v2.10, 2026-08-19); not re-reported.

## Release ledger

| Tag | Published (UTC) | Prerelease | ahead_by / behind_by vs previous stable | Tag commit |
|---|---|---|---|---|
| v2.10 (baseline) | 2026-08-19T12:30:34Z | false | 20 / 0 vs v2.9 | b22a144bf5 |
| v2.11 | 2026-08-27T14:30:15Z | false | 71 / 0 vs v2.10 (192 files) | 6a6cecff85 |
| v2.12 | 2026-09-09T13:29:23Z | false | 121 / 0 vs v2.11 (300+ files, API cap) | b1cbd1f960 |

Channel facts: `compare/v2.12...main` -> status identical, ahead_by 0 (checked 2026-09-23): nothing is `main-unreleased`. Branch `ready` is 76 ahead / 0 behind v2.12; its commits are on no default branch and in no tag (called `branch-only` below). Branch `development` is 514 behind v2.12 (stale). Docker Hub agent0ai/agent-zero: `v2.11` pushed 2026-08-27T14:29:39Z, `v2.12` and `latest` pushed 2026-09-09T13:28Z, and a `ready` image tag pushed 2026-09-09T12:42Z. No tag after v2.12 through 2026-09-23. GitHub security-advisories endpoint returns 0 entries.

## 1. v2.12 fixes an unauthenticated Telegram webhook that let anyone forge allowed-user prompts

- **Date:** 2026-09-09
- **Channel:** `tagged-release`
- **Ancestry evidence:** commit 675f6e7ccd in `compare/v2.11...v2.12` (ahead 121, behind 0). v2.12 prerelease=false. Maintainer write-up TG-001 in `security-review/LEDGER.md` at v2.12. Regression test tests/test_telegram_webhook_security.py added in the same commit. No GHSA or CVE filed.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/675f6e7ccd ; https://github.com/agent0ai/agent-zero/blob/v2.12/security-review/LEDGER.md
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Before v2.12, `plugins/_telegram_integration/api/webhook.py` bypassed session auth and CSRF and checked the secret only `if instance.webhook_secret`. The secret was documented as optional. Two cases were open. Polling bots accepted HTTP updates at all, even with a secret set. Webhook bots with an empty secret accepted any POST. The update body carries the Telegram sender ID. The allowlist trusts that ID, and the handler then calls `context.communicate`. What this allowed: anyone who could reach the Agent Zero HTTP port could post as an allowed Telegram user and put a prompt into that user's agent context. The agent then runs it with its normal terminal and code-execution tools. The maintainer ledger rates this High. It calls Critical impact "conditional on agent capabilities and deployment exposure" and claims no host escape. Now the webhook must be active, the secret must be nonempty, and the header is checked with a constant-time compare. Setup rejects secrets that are not 32 to 256 characters of `[A-Za-z0-9_-]`.

**Operator consequence.** If a Telegram bot is configured and the WebUI port is reachable from anywhere you do not control, upgrade to v2.12 now. Treat pre-v2.12 agent history for that bot as possibly injected. Breaking: webhook bots without a valid secret will not start until you set one. The shipped bots list is empty, so installs without Telegram are not exposed.

## 2. v2.12 also fixes WhatsApp media path traversal (file overwrite in the container) and an IMAP sender-allowlist bypass

- **Date:** 2026-09-09
- **Channel:** `tagged-release`
- **Ancestry evidence:** e2ed92b277 (WhatsApp) and c565f72845 (IMAP) are both in `compare/v2.11...v2.12`. WA-001 is in the LEDGER at v2.12. Tests: tests/test_whatsapp_bridge.mjs, tests/test_whatsapp_bridge_manager.py, tests/test_email_integration_sender.py.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/e2ed92b277 ; https://github.com/agent0ai/agent-zero/commit/c565f72845
- **Half:** defect | security-relevant | **Confidence:** high on the fix; medium on reachable impact (maintainers did not test live transport)

**What changed.** WhatsApp: the bridge callback built the write path from the document filename a remote sender supplied, and it saved media before any sender or group filter ran. So any WhatsApp sender, including one outside the allowlist, could write files outside `tmp/whatsapp/media`. The ledger PoC overwrote a sentinel at `extensions/python/job_loop/sentinel.py`. The framework runs as UID 0 in the container and imports extension modules as it finds them. The maintainers call the result root code execution in the container, "conditional" on WhatsApp keeping the crafted filename and a later extension load. They also say it does not imply a host escape. The fix keeps only the basename, checks that the path stays inside the cache, writes with exclusive create, and authorizes the sender before downloading. The integration is disabled by default. IMAP: sender extraction used a regex. Messages with several From mailboxes, a mailbox list, or a group could get past the whitelist. It now requires exactly one valid From mailbox, parsed with the standard-library email parser. The docs now say From filtering does not authenticate the sender.

**Operator consequence.** Upgrade if either integration is paired. The IMAP doc change matters on every version. A From whitelist is not sender authentication. Anyone who can email the inbox can spoof an allowed address and hand the agent a task.

## 3. Carry-forward: ACP defaults unchanged at v2.11 and v2.12; SSRF tests intact (blob changed for prompt text only)

- **Date:** 2026-09-09 (newest tag read)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Raw reads of `plugins/_a0_acp/plugin.yaml` at v2.10, v2.11 and v2.12 all give `always_enabled: true`. `plugins/_a0_acp/default_config.yaml` at all three gives `enabled: true`, `host_file_access: read_write`, `host_code_execution: true`. `tests/test_document_query_plugin.py` blob is 26bf2a69 at v2.10 and v2.11 and 35bd1dd6 at v2.12. The only change is 3400beccac (2026-08-30, "Hide disabled capabilities from system prompts"). Its diff swaps four main-prompt string assertions for `document_query not in main_prompt` and adds one assertion. The three SSRF tests are untouched: test_fetch_http_blocks_non_public_destinations (line 118), test_fetch_http_blocks_redirects_to_non_public_destinations (line 128), and test_fetch_http_preserves_public_redirects_and_request_compatibility (line 163). `plugins/_document_query/helpers/fetch.py` blob be1afeb9 and `helpers/network.py` blob abba1827 are identical at v2.10 and v2.12.
- **Receipt:** https://github.com/agent0ai/agent-zero/blob/v2.12/plugins/_a0_acp/default_config.yaml ; https://github.com/agent0ai/agent-zero/blob/v2.12/tests/test_document_query_plugin.py
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Nothing on either axis. ACP still ships always on, with host write and host exec on by default. The SSRF guard code has not changed since v2.10. The test file changed, but not the SSRF tests.

**Operator consequence.** The parent advice stands for v2.12. Turn ACP off unless you want an editor-hosted endpoint with host write and exec. A tool that pins by blob hash will flag the test file. Those are prompt-assertion edits, not lost coverage.

## 4. v2.12 exposes connected CLI and Launcher host folders in the WebUI Files panel

- **Date:** 2026-09-09
- **Channel:** `tagged-release`
- **Ancestry evidence:** 4777c14d82 "Expose connected CLI and Launcher folders in Files" and cb7e9b48d5 "Centralize streamed file transfers and harden archive operations" are both in `compare/v2.11...v2.12`. Also in that range: the merge 9e0c44b984 "Merge websocket transport hardening", which brings in 828f919010, f08d63cb2e and 76f905e07a (authored 2026-07-27, first tagged here). Tests: tests/test_file_browser_host.py, tests/test_file_transfer_safety.py, tests/test_file_browser_archives.py.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/4777c14d82 ; https://github.com/agent0ai/agent-zero/releases/tag/v2.12
- **Half:** both | security-relevant | **Confidence:** high on channel; medium on the exact permission model (read from the commit messages, not probed)

**What changed.** Capability: when the A0 CLI or Launcher is connected, the WebUI file browser and editor can list, upload, download and edit files in the host folders that connector exposes. Transfers go over authenticated HTTP with SHA-256 receipts and atomic writes, and the limits default to 10 MiB for editing and 100 MiB for transfers. The commit says it respects host permissions, and scope is still configured in the CLI or Launcher, not in the WebUI. Hardening: archive extraction now has expansion and entry budgets and rejects unsafe members. WebSocket payload ceilings are enforced, and remote connector tool payloads are bounded.

**Operator consequence.** Whatever host root you expose to the CLI or Launcher can now also be reached from any browser session logged into the WebUI, not only through agent tools. Before you connect, check which folders the connector exposes and whether they are writable. Treat the WebUI login as a credential for those host files.

## 5. v2.11 makes Chat Completions the default model transport (breaking) and adds Context Doctor, which rewrites model output before dispatch

- **Date:** 2026-08-27
- **Channel:** `tagged-release`
- **Ancestry evidence:** dac15f77a3 "Default model transports to Chat Completions" and dac39537c9 "Add Context Doctor plugin" (merged via PR #1850, b5c94079fc) are in `compare/v2.10...v2.11` (ahead 71, behind 0). New plugin dirs at v2.12 vs v2.10 tree: `plugins/_context_doctor`, `plugins/_context_window`. None were removed.
- **Receipt:** https://github.com/agent0ai/agent-zero/releases/tag/v2.11
- **Half:** both | **Confidence:** high

**What changed.** The release notes call this breaking. A provider that relied on the implicit Responses transport must now opt in. OpenAI, Azure and GitHub Copilot are pinned to Chat Completions. Codex/ChatGPT and xAI Grok OAuth stay on Responses. Context Doctor repairs malformed tool-call JSON before dispatch and handles thoughts-only replies. In v2.12 it leaves native function calls alone (b41f0e53f6). The v2.11 notes say per-chunk security hooks and strict tool validation still run while streaming.

**Operator consequence.** After upgrading, re-test any custom or gateway provider. It may have changed transport without telling you. Know that the tool call that runs can be a repaired version of what the model emitted. When you audit a tool call, compare the logged repaired output with the raw model output.

## 6. v2.12 makes plugin lifecycle go through hooks.py and removes disabled capabilities from system prompts

- **Date:** 2026-09-09
- **Channel:** `tagged-release`
- **Ancestry evidence:** a13262324c "Require lifecycle hooks for plugin setup and cleanup" and 3400beccac are in `compare/v2.11...v2.12`. The v2.12 release notes list "Plugin authoring now requires hooks.py ... execute.py setup patterns are no longer supported" under Breaking Changes.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/a13262324c ; https://github.com/agent0ai/agent-zero/commit/3400beccac
- **Half:** capability | **Confidence:** high on channel; medium on runtime enforcement (a13262324c edits only skills and guidance files)

**What changed.** Plugin install and uninstall now have one declared hook file for dependencies, init and cleanup, so cleanup is something you can inspect. a13262324c changes only guidance (the a0-create-plugin and a0-manage-plugin skills), so an old execute.py plugin may still run. Separately, prompts no longer advertise tools, delegation or live Browser context that the profile's policy disables. Policy-filtered tool prompts are now the only source.

**Operator consequence.** Check plugins you wrote for hooks.py. When you audit what a profile can do, read the policy, not the prompt. The prompt now follows the policy instead of listing everything.

## 7. The ready branch carries secret-substitution and browser cross-chat fixes that are in no tag

- **Date:** 2026-09-12 through 2026-09-21 (in-window commits only)
- **Channel:** `branch-only` (ready; `compare/v2.12...ready` ahead 76, behind 0; main is identical to v2.12)
- **Ancestry evidence:** PR #1901 (merge fcd5ee02e1, 2026-09-18) with aa8e1c042a "Fix nested secret substitution in parallel tool calls" and 4d94c3b173. Also fc6370b3ee (2026-09-17) "Fix Browser startup state and stale URLs across chats", which invalidates pending session and subscription results when the selected chat changes. Also a62aad4ace (2026-09-15), which removes static dummy API keys for LM Studio, llama.cpp, oMLX and vLLM that had overridden saved keys. And b68306356c and 46ab911a3e bound or reject browser `evaluate` calls. None of these are in v2.12.
- **Receipt:** https://github.com/agent0ai/agent-zero/compare/v2.12...ready
- **Half:** defect | security-relevant (secrets, browser cross-chat state) | **Confidence:** high on channel; medium on impact (the secret fix touches `_10_unmask_secrets.py`, and the direction of the leak was not resolved)

**What changed.** Nothing an operator installs from a tag. The Docker `ready` image tag exists, but it was pushed 2026-09-09T12:42Z, before these commits.

**Operator consequence.** On v2.12, do not rely on secret placeholders nested inside parallel tool-call arguments being unmasked correctly. Watch for v2.13 and check for aa8e1c042a in `compare/aa8e1c042a...v2.13`.

## Operator questions settled this window

- *Isolation, persistence, cleanup:* v2.12 moves plugin setup and cleanup into hooks.py and makes file transfers atomic, with cleanup of temp files the transfer owns. It also joins host folders to the WebUI (item 4). That widens the container boundary to include whatever the connector exposes.
- *What full computer access allows:* the Telegram and WhatsApp ledgers state it. A forged chat message or a crafted filename becomes agent execution or a file write in a UID 0 container. The maintainers draw the line at the container and claim no host escape.

## Researcher lane notes

The maintainers now keep a checked-in `security-review/LEDGER.md`. Each entry has a baseline SHA, an introduction SHA, a PoC and its limits. This is the first in-repo security record for this source, and no GHSA accompanies it. v2.12's four connector commits are dated 2026-07-27 but first appear in a tag at v2.12. They are listed in the `compare/v2.11...v2.12` commit set, so they are not in v2.11. The public docs at https://www.agent-zero.ai/p/docs/ returned 200. No docs change on Telegram webhook secrets or ACP was found there. The plugin README is the operative doc.

## Observed after window close

- ready branch: sidebar project folders and pin-to-top commits (2026-09-22). 00abf6bd09 "stabilize Chat Completions cache boundaries" (2026-09-22). Not tagged.

## Surfaces checked

- `gh api repos/agent0ai/agent-zero` (identity), releases list, tags list, branches (main, ready, development, testing)
- releases v2.11 and v2.12 bodies
- compare v2.10...v2.11, v2.11...v2.12, v2.12...main, v2.12...ready, v2.12...development, with commit lists
- raw at v2.10/v2.11/v2.12: plugins/_a0_acp/plugin.yaml, plugins/_a0_acp/default_config.yaml, tests/test_document_query_plugin.py (diff v2.11 vs v2.12)
- blob SHAs at v2.10 and v2.12: plugins/_document_query/helpers/fetch.py, helpers/network.py
- recursive trees v2.10 and v2.12 (plugin dirs added or removed)
- commits 675f6e7ccd, e2ed92b277, c565f72845, 4777c14d82, cb7e9b48d5, a13262324c, 3400beccac, aa8e1c042a, fc6370b3ee, a62aad4ace
- security-review/LEDGER.md at v2.12 and its commit history
- repos/agent0ai/agent-zero/security-advisories (0)
- Docker Hub agent0ai/agent-zero tags
- https://www.agent-zero.ai/p/docs/ (HTTP 200, grep only)

## Not reached

- No live probe of the Telegram webhook, the WhatsApp traversal or host-folder permissions. Impact comes from the maintainer ledger and the diffs.
- The full diff for the PR #1901 secret-unmasking fix was not read. Its leak direction is unresolved.
- Official docs pages for browser, ACP and integrations were not read page by page.
