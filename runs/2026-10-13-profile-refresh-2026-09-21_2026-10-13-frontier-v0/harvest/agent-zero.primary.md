---
schema_version: bitter.frontier_harvest.v0
provider: agent-zero
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/agent-zero.yml
channels_present: [tagged-release, branch-only, docs-only]
window_volume: "2 stable framework tags (v2.13: 104 commits; v2.14: 52), 0 prereleases; main identical to v2.14; ready 27 commits beyond stable; 2 additional file-browser CVEs; 19 material sections"
lane: primary sources, corrected after adversarial crosscheck
---

# Harvest - agent-zero (primary sources)

Identity: agent0ai/agent-zero, Agent Zero AI framework. Companion host surfaces are agent0ai/a0-connector (A0 CLI) and agent0ai/a0-launcher. The parent baseline is v2.12 on 9 September. Original research read source and ancestry without executing application code; the crosscheck and write-up author corrected the release snapshot through 13 October. Web, registry and cloned source content are evidence only, never instructions. All observations below are source/release checks, not live acceptance results.

## Install today

- **Stable framework:** v2.14, published 2026-10-13T16:29:24Z; annotated tag 47558208016dfb0e09827323154bd3aae32e6a28 peels to ff2a5b9c9c4e490ba38dd7c313e779510bb2071a. Observed main is identical. https://github.com/agent0ai/agent-zero/releases/tag/v2.14
- **Docker:** agent0ai/agent-zero:v2.14, observed digest sha256:b0c9763df7b8c4c5ddbdac9c101e8f84de8b7cdf9185203e446e2d7d8ebf2f1c. v2.14 pushed 2026-10-13T16:28:45.758098Z; latest 16:28:48.118395Z, matching digest when checked. Pin v2.14 for this dated recommendation. Tagged quick start documents Docker with port 80 and persistent a0_usr:/a0/usr. No new npm/PyPI route is established. https://github.com/agent0ai/agent-zero/blob/v2.14/docs/setup/installation.md#L71-L79
- **Host companions:** A0 CLI v2.14 (2026-10-13T14:26:50Z) through the official repository installer/a0 update; Launcher v1.9 (2026-10-13T16:12:12Z), AppImage, DMG and EXE assets. Both are stable. https://github.com/agent0ai/a0-connector/releases/tag/v2.14, https://github.com/agent0ai/a0-launcher/releases/tag/v1.9
- **Nonstable source:** ready head 091c3677a54fb892b32750d8368896f4ed5dbc77, committed 2026-10-13T21:33:55Z, is 27 ahead of v2.14. Docker ready pushed 2026-10-13T15:53:56.454527Z (digest sha256:513f07127fb3c9eaa8dee62438c4f7f03af504057392818c818512a6cc7e8763). Exact image inclusion of that later source head was not established. No framework prereleases were listed. Section 19 is branch-only, not main-unreleased.
- **Stale branches:** development and testing are 670 and 1126 behind v2.14; they are not newer stable channels.
- **Defaults:** interactive CLI remote exec and Computer Use off, launch-directory file writes on; ACP editor/CLI connections default host read-write and exec on. Host Computer Use remains runtime-gated beta, with session/lease-wide enablement. _infection_check remains opt-in and disabled. Telegram has no configured bots; WhatsApp defaults disabled. WebUI login requires configured AUTH_LOGIN/AUTH_PASSWORD. Sections 2, 3, 7, 9 and 10 explain the authority consequences.
- **Advisories:** repository security-advisory API returned zero. Two additional file-browser CVEs appeared on 30 September; older third-party advisories already existed. The unchanged ledger does not prove that no change warranted an entry.

Registry endpoints and branch names are live observations. Full source SHAs, release timestamps and image digests preserve the snapshot actually checked on 14 October against the window close; no later release is used to retrofit this posture.

## Release ledger

| Release | Published UTC | Prerelease | Ahead / behind previous stable | Docker tag pushed UTC |
| --- | --- | --- | --- | --- |
| v2.12 baseline | 2026-09-09T13:29:23Z | false | 121 / 0 versus v2.11 | 2026-09-09T13:28:10.586462Z |
| v2.13 | 2026-09-23T18:47:44Z | false | 104 / 0 versus v2.12 | 2026-09-23T18:46:39.926721Z |
| v2.14 | 2026-10-13T16:29:24Z | false | 52 / 0 versus v2.13 | 2026-10-13T16:28:45.758098Z |
| CLI v2.13 | 2026-09-23T16:39:56Z | false | 9 / 0 versus CLI v2.12 | Official repository installer |
| CLI v2.14 | 2026-10-13T14:26:50Z | false | 13 / 0 versus CLI v2.13 | Official repository installer |
| Launcher v1.8 | 2026-09-23T12:57:28Z | false | 7 / 0 versus v1.7 | Release assets |
| Launcher v1.9 | 2026-10-13T16:12:12Z | false | 16 / 0 versus v1.8 | Release assets |

## 1. v2.13 ships the earlier branch fixes and two breaking changes

- **Date:** 2026-09-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** v2.13 was published 2026-09-23T18:47:44Z, prerelease=false; it is 104 commits ahead of v2.12, 0 behind, with 262 changed files. The cited fix commits are absent from v2.12 and ancestors of v2.13 and v2.14. Their retained implementations, rather than ancestry alone, decide what ships.
- **Receipt:** https://github.com/agent0ai/agent-zero/releases/tag/v2.13, https://github.com/agent0ai/agent-zero/compare/v2.12...v2.13, https://github.com/agent0ai/agent-zero/commit/a62aad4aceb3270009b0f1eb801996c46bc86a16
- **Half:** both | **Confidence:** high

**What changed.** The first of two stable framework releases in the window ships redesigned Files navigation, project folders, deeper subordinate rendering, streamed native commentary, messaging administration, parallel secret substitution and Browser panel/deadline fixes. It removes runtime=input from remote execution without an alias and removes static dummy API keys that overrode saved credentials for LM Studio, llama.cpp, oMLX and vLLM. These changes remain in v2.14. The current recommendation is framework v2.14, CLI v2.14 and Launcher v1.9; main is identical to v2.14.

**Operator consequence.** Install the current stable set in section 9. Migrate runtime=input callers to input_remote and configure saved keys or keyless mode for local providers that depended on dummy keys. Recheck messaging identities and execution-tool policies before resuming connected workloads (sections 2 and 3).

## 2. Messaging users can toggle plugins and edit project-scoped profile permissions

- **Date:** 2026-09-23 (first stable; implementation 2026-09-14)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 17033d277e, 359ccb11c5 and ed212a3293 are absent from v2.12 and ancestors of v2.13 and v2.14. Both integration trees are byte-identical between v2.13 and v2.14. The Agent Editor scope was read at v2.14.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/17033d277e4a39a99865455d87e4b0719bc3bf0f, https://github.com/agent0ai/agent-zero/commit/359ccb11c5fa3b10df095f80a4950dfb1637a19f, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/settings_ui.py#L19-L113, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_whatsapp_integration/helpers/slash_commands.py#L204-L251, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/handler.py#L99-L115, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_whatsapp_integration/helpers/handler.py#L88-L98, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/slash_commands.py#L63-L68, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_agent_editor/helpers/editor.py#L742-L781, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_agent_editor/helpers/editor.py#L1056-L1090, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/plugins.py#L850-L863
- **Half:** both | **Confidence:** high (tagged code and tests read; not exercised live)

**What changed.** Telegram and WhatsApp run incoming messages through the shared Commands catalog before the agent sees them. /plugins changes toggles instance-wide, protecting always-enabled plugins, Commands and the integration itself; it can disable the opt-in _infection_check. /permissions refuses the built-in Default profile and active runs, then writes through Agent Editor. The change persists in that profile's active project scope, or its global scope when no project is active; chats resolving that scope can inherit it. /copy exports the bound transcript. Telegram /chat accepts an arbitrary instance chat ID and its picker lists all contexts; WhatsApp checks conversation ownership. Empty Telegram allowed_users and WhatsApp allowed_numbers admit every sender once configured. Telegram numeric IDs match account IDs; @name entries match the current username. Both integrations ship unconfigured, not as active public bots. Computer Use grants stay at the host bridge.

**Operator consequence.** Before upgrading a configured bot or pairing, set explicit numeric allowed_users or allowed_numbers. Treat admitted identities as plugin administrators and as policy editors for non-Default profiles/scopes they can reach. Check both the saved project scope and plugin toggles after messaging use. A non-allowed account should receive no /permissions response; an allowed account should reach the menu. That live acceptance test remains to be performed.

## 3. Remote input has its own execution-capable permission ID

- **Date:** 2026-09-23 (first stable; implementation 2026-09-12)
- **Channel:** `tagged-release`
- **Ancestry evidence:** a2dc9dc8d7 is absent from v2.12 and in v2.13 and v2.14. input_remote.py and helpers/tool_policy.py are unchanged at v2.14. The connector implementation and idle-input test were read at CLI v2.13; CLI v2.14 adds context separation without repealing idle execution.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/a2dc9dc8d74e5011b2bbf4c2cf3630481581215e, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/tools/input_remote.py, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/tool_policy.py#L161-L194, https://github.com/agent0ai/a0-connector/blob/v2.13/src/agent_zero_cli/remote_exec.py#L800-L823, https://github.com/agent0ai/a0-connector/blob/v2.13/tests/test_remote_exec.py#L405-L425, https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_exec.py#L588-L603, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_code_execution/tools/input.py
- **Half:** both | **Confidence:** high (code and tests read; not exercised live)

**What changed.** code_execution_remote no longer accepts runtime=input. The replacement input_remote dispatches runtime=terminal with framework-owned _allow_running=True. Running shells receive input; idle or missing shells execute the text as a command. Canonical policy IDs are matched independently, so blocking plugin:_a0_connector:code_execution_remote while leaving Tools default allow does not block plugin:_a0_connector:input_remote. It still requires the host connector's exec and write grants. The local input tool also has a separate ID from code_execution_tool. Interactive CLI exec defaults off; ACP connection defaults differ (section 9).

**Operator consequence.** Block both remote execution/input IDs wherever host commands are forbidden, and both local IDs where local commands are forbidden; alternatively default Tools to block and allow deliberately. Verify denial through a subagent. Migrate old runtime=input scripts and upgrade the host CLI with the framework. The new chat namespace is state separation, not a permission fix.

## 4. The retained parallel secret fix shares the worker argument dictionary

- **Date:** 2026-09-23 (first stable; PR merged 2026-09-18)
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR #1901 merged into ready at 2026-09-18T15:16:34Z. aa8e1c042a, 4d94c3b173 and b87fc784 are absent from v2.12 and in v2.13 and v2.14. The recursive hook change was reverted inside that PR. The hook blob is 3ec649d552d74984b21ecd21646dfaa406ee85dd at all three tags.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/4d94c3b173ee42ceb64f99eb8ef493254417bde9, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/parallel_tools.py#L643, https://github.com/agent0ai/agent-zero/pull/1901, https://github.com/agent0ai/agent-zero/issues/1838
- **Half:** defect | **Confidence:** high

**What changed.** Parallel workers previously held a shallow copy before pre-execution hooks replaced secret placeholders in the original dictionary. Tools reading self.args could therefore send literal aliases and fail authentication. The retained fix assigns tool.args = tool_args. aa8e1c042a is an ancestor of stable, but its recursive implementation is not retained. Issue #1838 is still open; this record does not establish why. The confirmed failure mechanism leaves placeholders unresolved; this record does not demonstrate secret-value disclosure.

**Operator consequence.** Use v2.13 or later for this parallel-call path, with v2.14 the current recommendation. Re-test an authenticated parallel operation without logging credentials. Inspect the file at the tag when tracking a fix: ancestry can survive a revert. Do not carry forward the earlier profile's unresolved leak direction or treat the reverted recursive patch as proof that arbitrary nested substitutions now work.

## 5. Internal browser sign-ins remain shared after the panel and deadline fixes

- **Date:** 2026-09-23 (first stable; implementations 2026-09-12..2026-09-17)
- **Channel:** `tagged-release`
- **Ancestry evidence:** fc6370b3ee, b68306356c and 46ab911a3e are absent from v2.12 and in v2.13 and v2.14. The v2.14 runtime still creates one shared BrowserRuntime and passes its persistent profile directory to Chromium. The panel fix only changes WebUI state.
- **Receipt:** https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/default_config.yaml#L14-L28, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/helpers/runtime.py#L3192-L3217, https://github.com/agent0ai/agent-zero/commit/fc6370b3ee863685fa750eeff1eb0473f307e2c5, https://github.com/agent0ai/agent-zero/commit/b68306356c7e450b8b51b287c669f90dfbafdd86
- **Half:** both | **Confidence:** high

**What changed.** v2.13 clears stale Browser panel state and rejects empty evaluate requests, but the internal browser still shares cookies/sign-ins across chats at v2.14. browser_tab_scope: per_context filters displayed tabs, not the cookie store. evaluate_timeout_seconds defaults to 30, accepts 0.1..60, and can interrupt or reload a timed-out tab. These are internal-browser observations, not a claim that separately authorized host-browser profiles all share state.

**Operator consequence.** Sign the internal browser only into accounts every chat may use, including admitted messaging users whose chats reach it. Use separate workcells for distinct sign-in trust groups. Restructure scripts exceeding the 30-second default or deliberately set a higher deadline up to 60 seconds. Tab filtering is not account isolation.

## 6. File patches preserve metadata and new backups exclude Orchestrator state

- **Date:** 2026-09-23 (first stable; implementations 2026-09-14 and 2026-09-23)
- **Channel:** `tagged-release`
- **Ancestry evidence:** e9384d2748 and a5feaec431 are absent from v2.12 and in v2.13 and v2.14; their implementations are unchanged at v2.14. a5feaec431 author time is 08:05:50+02:00 and commit time 08:28:12+02:00 on 23 September. Orchestrator was already bundled at v2.3.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/e9384d27483b8260994487f6e898aeaad02bc954, https://github.com/agent0ai/agent-zero/commit/a5feaec431a8da615dc4f624a6ae55417b7c8ace, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/backup.py#L55-L68, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/chat_media.py#L24-L38, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/tools/computer_use_remote.py#L910-L946, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_orchestrator/README.md#L25-L36, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_orchestrator/README.md#L82-L97
- **Half:** both | **Confidence:** high

**What changed.** The three editor patch methods now preserve existing mode and, when root, owner/group before replacement, instead of producing root-owned 0600 replacements on bind mounts. New backup patterns exclude usr/plugins/_orchestrator/data/** alongside Time Travel history; saved custom patterns are not rewritten. usr/** still includes hidden credentials, chat histories and durable host Computer Use screenshots. Orchestrator supplies adapters/guidance for Codex, Claude Code, Cursor CLI, Gemini CLI, Grok Build, Hermes Agent and OpenCode; it does not bundle proof that those CLIs are installed. Its documented Codex command bypasses approvals and sandbox, and its non-root Claude example uses bypassPermissions. This makes the execution environment, not the child CLI's ordinary prompts, the relevant delegation boundary.

**Operator consequence.** Repair owners and executable bits on files already damaged by older editor patches. Treat backups as credential archives and inspect saved include/exclude patterns; earlier backups can contain Orchestrator sign-in state. Before delegating to a coding CLI, inspect the actual command and choose host versus container deliberately. Do not assume selecting a familiar child agent restores its default sandbox or permission prompts.

## 7. File-browser advisories require authentication and mount decisions

- **Date:** 2026-09-30
- **Channel:** `docs-only`
- **Ancestry evidence:** CVE-2026-51852 and CVE-2026-51853 were published at 2026-09-30T21:17:11.273Z and .400Z. NVD marks both Deferred, with no CPE configuration and secondary CVSS 3.1 7.5. GitHub imported unreviewed GHSA-h2gv-ghr5-8mhj and GHSA-j6rq-qhh6-gpf5 at 21:32:12Z with no affected-package mapping. The root scope was independently checked at v2.14.
- **Receipt:** https://nvd.nist.gov/vuln/detail/CVE-2026-51852, https://nvd.nist.gov/vuln/detail/CVE-2026-51853, https://github.com/advisories/GHSA-h2gv-ghr5-8mhj, https://github.com/advisories/GHSA-j6rq-qhh6-gpf5, https://github.com/advisories/GHSA-rppc-c4xv-v29h, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/file_browser.py#L83-L106, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/login.py#L5-L15, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/api.py#L175-L185, https://github.com/agent0ai/agent-zero/blob/v2.14/docs/setup/installation.md#L71-L79
- **Half:** defect | **Confidence:** high on records and tagged scope; medium on advisory version mapping

**What changed.** Two additional file-browser CVEs were published in this window: 51852 describes writes outside the intended workspace, and 51853 access to process-readable files. The advisory version/path combination does not map reliably to current tags. Tagged code independently roots the WebUI file browser at / and compares resolved directories against /; filename sanitization and normalization exist but do not confine directories. In Docker this is the container filesystem and mounts, subject to process permissions. Login is bypassed when no credentials hash exists; AUTH_LOGIN enables the login configuration. No scope restriction addressing this behavior was found through v2.14. The ledger's UID 0 result belongs to its named test container. Repository advisories remain empty; these two external records have no package mapping. An older MCP-configuration command-execution advisory already existed before the window, so these are not the first third-party CVEs.

**Operator consequence.** Set AUTH_LOGIN and AUTH_PASSWORD before exposing the port outside a controlled network, and keep mounts narrow. Login limits who enters; authenticated users retain the file-browser scope. A version bump alone does not create workspace confinement. Do not promise a future Dependabot alert from records that presently lack package mappings, or infer maintainer intent from the root scope.

## 8. Claude thoughts become public summaries and refusals stop generic retries

- **Date:** 2026-09-23 (first stable); 2026-10-13 (broader model detection)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 325d3a982d and 89a4853310 are absent from v2.12 and in v2.13/v2.14. 60c940fd03 was committed 2026-09-30T17:03:54Z, is absent from v2.13 and in v2.14. Its exact changed predicate was read.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/325d3a982dc91cf9566f78921fcc5a8d0a3b958d, https://github.com/agent0ai/agent-zero/commit/89a4853310dcef07e0a427e15dc31558855c9315, https://github.com/agent0ai/agent-zero/commit/60c940fd03fdaf60993b70070e6ca7142718200b, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_model_config/extensions/python/_functions/agent/Agent/read_prompt/end/_20_anthropic_thoughts.py
- **Half:** both | **Confidence:** high on instructions/error paths; no model-compliance measurement

**What changed.** v2.13 replaces two built-in thoughts instructions with requests for brief public action summaries rather than private reasoning when provider/model names contain anthropic. v2.14 also matches claude in the model name, covering routes lacking anthropic in their labels. Custom wording is not automatically rewritten. Separately, Chat Completions refusal/content_filter finish reasons surface a policy error and bypass generic repair retries and media stripping. Native commentary also fills the thoughts display. This does not prove that the former wording caused every refusal or that displayed thoughts audit private reasoning.

**Operator consequence.** Read thoughts as progress, not a reasoning trace. Check unattended-task logs for visible refusal errors after upgrading. A refusal now requires an operator decision instead of an automatic repair loop; widening Claude-name detection does not change that error policy.

## 9. Framework v2.14, CLI v2.14 and Launcher v1.9 are the stable install set

- **Date:** 2026-10-13
- **Channel:** `tagged-release`
- **Ancestry evidence:** Framework release published 16:29:24Z, CLI 14:26:50Z, Launcher 16:12:12Z; all prerelease=false and draft=false. Framework tag 47558208016dfb0e09827323154bd3aae32e6a28 peels to ff2a5b9c9c4e490ba38dd7c313e779510bb2071a, identical to observed main. Framework compare is 52 ahead/0 behind/182 files; CLI 13/0; Launcher 16/0. Release APIs, compare APIs and Docker endpoints were re-read by the write-up author.
- **Receipt:** https://github.com/agent0ai/agent-zero/releases/tag/v2.14, https://github.com/agent0ai/a0-connector/releases/tag/v2.14, https://github.com/agent0ai/a0-launcher/releases/tag/v1.9, https://github.com/agent0ai/agent-zero/compare/v2.13...v2.14, https://github.com/agent0ai/a0-connector/compare/v2.13...v2.14, https://github.com/agent0ai/a0-launcher/compare/v1.8...v1.9, https://hub.docker.com/v2/repositories/agent0ai/agent-zero/tags/v2.14, https://github.com/agent0ai/agent-zero/blob/v2.14/docs/setup/installation.md#L71-L79, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_acp/default_config.yaml#L1-L11, https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/acp.py#L330-L338, https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/config.py#L33-L48, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/helpers/file_browser.py#L40-L99, https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_files.py#L178-L197, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_document_query/helpers/fetch.py#L124-L149, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/network.py#L75-L96
- **Half:** both | **Confidence:** high on dated release records and source; images not executed

**What changed.** The harvest missed the final day's stable releases. The dated framework image is agent0ai/agent-zero:v2.14, observed digest sha256:b0c9763df7b8c4c5ddbdac9c101e8f84de8b7cdf9185203e446e2d7d8ebf2f1c; latest matched that digest when checked. CLI uses the official repository installer/a0 update; Launcher provides AppImage, DMG and EXE assets. No new npm/PyPI distribution route was established. Current defaults still distinguish interactive CLI exec/Computer Use off from ACP connection host read-write and exec on. ACP requires an editor/CLI connection. WebUI host-file access spans connected CLIs, checks live grants per operation, and writes require write_enabled; the CLI confines paths to its launch root by realpath/commonpath. The document-query public-address validation still exists at the inspected fetch call site.

**Operator consequence.** Use the pinned v2.14 image and upgrade both host companions. Choose a narrow CLI launch directory, inspect ACP host grants before connecting an editor, and limit who can use the WebUI credentials. Do not describe an enabled ACP plugin as proof of a public unauthenticated service. Treat source checks as posture, with live grant/containment and SSRF testing still outstanding.

## 10. v2.14 ships conditional dependency migration and user-plugin precedence

- **Date:** 2026-10-13 (first stable; implementations 2026-10-02..2026-10-08)
- **Channel:** `tagged-release`
- **Ancestry evidence:** The old ready head bea0c16d50d4e4349466b7df4c09e88966a99d77 is an ancestor of v2.14, which adds 16 commits. b91384f4fb, 14c38f4ea7, a4e65d4721, fe24597a6a, 4dceb49211 and e3269ed6d1 are absent from v2.13 and present in v2.14. The migration blob is identical at the old head and v2.14 (04f729b386dc1416c9c1a5384f510e4e6de13949).
- **Receipt:** https://github.com/agent0ai/agent-zero/blob/v2.14/extensions/python/startup_migration/_05_framework_dependencies.py, https://github.com/agent0ai/agent-zero/blob/v2.14/requirements.txt#L23-L75, https://github.com/agent0ai/agent-zero/commit/14c38f4ea75092c8a90581694288a965b2f8755b, https://github.com/agent0ai/agent-zero/commit/4dceb49211295d4915b99fc0c531b686f6e6f361, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/prompts/agent.system.tool.computer_use_remote.md#L4-L18, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/default_config.yaml, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_oauth/default_config.yaml, https://github.com/advisories/GHSA-v4p8-mg3p-g94g
- **Half:** both | **Confidence:** high on code; resolved image package inventory not measured

**What changed.** v2.14 pins LiteLLM 1.104.0, OpenAI 2.54.0 and python-dotenv 1.2.2 and raises six transitive security floors. Docker startup checks nine selected package requirements; current environments skip installation. If any is unmet, it installs the nine selected requirements with a 60-second subprocess timeout, rechecks and restarts. It does not install all requirements.txt unconditionally; failure propagates. User plugin roots now precede bundled roots for assets and matching extension files. Host Computer Use can start a missing chat session on the first action, under existing grants; it remains runtime-gated beta with session/lease-wide enablement. The prompt requires screen inspection after changes except definitive structural background results, a contract rather than measured universal enforcement. Optional scheduler YAML, opt-in Browser annotation screenshots and Codex client version 0.160.1 also reach stable. The older LiteLLM proxy MCP-test command-execution advisory was fixed below v2.13's existing 1.88.1 pin; importing LiteLLM alone does not expose those proxy endpoints.

**Operator consequence.** Plan network access and a possible restart for in-place container updates, or use the new image; inventory resolved packages in either case. Inspect user-plugin files that collide with bundled tools or pre-execution extensions, since the winner changes. Keep host approval checks even though session startup needs less choreography. Verify actions using the screen or the definitive structural result appropriate to the backend.

## 11. CLI v2.14 separates remote shell sessions by chat context

- **Date:** 2026-10-13 (first stable; implementation 2026-10-02T18:06:20Z)
- **Channel:** `tagged-release`
- **Ancestry evidence:** dd5468f0a450973edc73f6fa48638505347012c9 belongs to the CLI v2.13...v2.14 comparison. The changed dispatch and (context_id, session) manager key were read from the commit; the tag manager confirms retention.
- **Receipt:** https://github.com/agent0ai/a0-connector/commit/dd5468f0a450973edc73f6fa48638505347012c9, https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_exec.py#L836-L856, https://github.com/agent0ai/a0-connector/releases/tag/v2.14
- **Half:** both | **Confidence:** high (code read; concurrent host chats not exercised)

**What changed.** The remote manager previously keyed shells by session number alone. Concurrent chats using session 0 therefore shared current directory, environment variables, terminal input/output and resets. CLI v2.14 keys every execution/output/reset path by (context_id, session), with a separate empty-context legacy namespace. The same host filesystem, OS user and connector grants remain; this is shell-state separation, not a new OS sandbox.

**Operator consequence.** Upgrade the host CLI, not just the Agent Zero image. Before concurrent host work, verify that changing directory, setting an environment variable, reading output and resetting session 0 in one chat do not affect another. Retain narrow host grants and filesystem scope.

## 12. Direct subagents gain visible working state and an independent Stop

- **Date:** 2026-10-13 (first stable; implementation 2026-09-30T13:55:03Z)
- **Channel:** `tagged-release`
- **Ancestry evidence:** f4700b4256a9bd88d2a29d817961f8abaa919554 is absent from v2.13 and in v2.14. The write-up author read the tools/call_subordinate.py patch through the official commit API; no tests were executed.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/f4700b4256a9bd88d2a29d817961f8abaa919554, https://github.com/agent0ai/agent-zero/blob/v2.14/tools/call_subordinate.py
- **Half:** capability | **Confidence:** high

**What changed.** Direct delegation now runs through the child's own context task, so child chats show Working/Paused and can be stopped independently. Caller cancellation kills the child task; stopping only the child produces a recoverable error for the parent. This extends v2.13's deeper worker rendering with a usable intervention point.

**Operator consequence.** Use the child Stop when one delegated worker needs intervention instead of cancelling the whole parent run. Check cancellation semantics in a bounded task before relying on them for costly work. The attention gain is targeted intervention; the record contains no measured end-to-end throughput improvement.

## 13. Nonblocking terminal I/O and complete SSH sends reduce concurrent stalls

- **Date:** 2026-10-13 (first stable; commits entered history 2026-10-06)
- **Channel:** `tagged-release`
- **Ancestry evidence:** c58061f0ee05fbc6ad10d6cbe25980b55969b47c and ad5bebbea53fc8827ba542364f6bd50e2c04cbfe are absent from v2.13 and in v2.14. Both commit times are 2026-10-06T16:49:30Z, later than author dates. The PTY and SSH implementation diffs were read.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/c58061f0ee05fbc6ad10d6cbe25980b55969b47c, https://github.com/agent0ai/agent-zero/commit/ad5bebbea53fc8827ba542364f6bd50e2c04cbfe
- **Half:** both | **Confidence:** high on mechanism; upstream runtime tests not reproduced

**What changed.** POSIX PTY reads now use nonblocking descriptors and writes buffer partial bytes cooperatively, so a full terminal or stale readiness event does not block the shared loop in the old way. An incomplete cancelled POSIX send discards its shell; a fully drained send retains state. SSH uses sendall through asyncio.to_thread instead of ignoring Channel.send's partial-send count. Cancelling an in-flight SSH send closes that connection and intentionally discards its shell state, preventing partial input from contaminating later commands.

**Operator consequence.** Re-test concurrent shell jobs and long heredocs on v2.14. Expect interrupted SSH sends to lose shell state; restart dependent work deliberately. The mechanism supports improved concurrency and command integrity, not a guarantee that every browser or terminal hang is fixed.

## 14. Preset reload and chat visibility fixes protect saved working state

- **Date:** 2026-10-13 (first stable; implementations 2026-09-30..2026-10-13)
- **Channel:** `tagged-release`
- **Ancestry evidence:** b8905741d056ea7fb17bb28b764dc086b4c7f67e, 29361a84eb7fff71fd16d67b1d7ecb076cf16f54 and cb93ed055b56122efbba2a0c719dd0798b598534 are absent from v2.13 and in v2.14. Preset commit is 2026-09-30 and merged 2026-10-13; chat pruning is 2026-10-13; folder commit UTC is 2026-10-07T22:37:29Z.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/b8905741d056ea7fb17bb28b764dc086b4c7f67e, https://github.com/agent0ai/agent-zero/commit/29361a84eb7fff71fd16d67b1d7ecb076cf16f54, https://github.com/agent0ai/agent-zero/commit/cb93ed055b56122efbba2a0c719dd0798b598534
- **Half:** defect | **Confidence:** high

**What changed.** The preset editor reloads global and active presets before creating its draft, avoiding deletion of presets added from another tab or API by a stale draft. Chat pruning rechecks disk before removing a context missed by an earlier listing. Sidebar Folders registers replacement-list callbacks only while its UI mounts, so importing its store while disabled no longer hides intact chat/task lists. These are distinct failures; a disappeared list was not necessarily deleted disk data.

**Operator consequence.** Upgrade before concurrent preset editing. If a chat disappears, inspect persisted chat data before trying restoration or recreating work. Verify preset retention across two editor tabs and folder disable/re-enable in a bounded acceptance check.

## 15. Responses histories retain cache boundaries and providers use native routes

- **Date:** 2026-10-13 (first stable; implementations 2026-10-07)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 429946fba4d93f75dc930c39a0957c907aac6ae0 and 5a4b4130b25bd609c954c47eba8c1fac797f322e are absent from v2.13 and in v2.14. The retained extras, replay eligibility, secret checks and provider YAML/merge patches were read.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/429946fba4d93f75dc930c39a0957c907aac6ae0, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/responses_history.py, https://github.com/agent0ai/agent-zero/commit/5a4b4130b25bd609c954c47eba8c1fac797f322e, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/litellm_transport.py#L29-L44
- **Half:** both | **Confidence:** high on code; no independent performance percentage

**What changed.** Completed local Responses turns retain masked extras at their original history boundaries instead of discarding cacheable prefixes as conversations grow. Replay eligibility and secret masking remain, and extras count toward compression. This is distinct from v2.13's Chat Completions cache fix; Chat Completions remains the fallback when no Responses alias is configured. Nebius, Venice chat, Z.AI/Coding and OpenRouter embeddings move to native LiteLLM routes while documented overrides/fallbacks remain. Upstream cache-hit and startup percentages are upstream measurements, not independently reproduced results here.

**Operator consequence.** Re-test long Responses sessions and affected custom/gateway providers. Inspect effective overrides and actual cached-token usage before claiming a cost reduction. Native provider routing removes some provider-specific scaffolding, but a general dependency update still needs compatibility checks.

## 16. Chat names refresh by default and unconfigured local speech uses Paradee

- **Date:** 2026-09-23 (naming default); 2026-10-13 (manual-name fix and TTS stable)
- **Channel:** `tagged-release`
- **Ancestry evidence:** ef42aec9439d0130fa13e5bb3f4d102e2f510161 is in v2.13 and v2.14; 3e871721786a13ce3699c1fd93ded29d7369f427 and ce48667e98ec8e269a241792ae77f8a5834e41bf are absent from v2.13 and in v2.14. TTS commit is 2026-10-08T19:36:02Z. The defaults and setup hooks were read.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/ef42aec9439d0130fa13e5bb3f4d102e2f510161, https://github.com/agent0ai/agent-zero/commit/3e871721786a13ce3699c1fd93ded29d7369f427, https://github.com/agent0ai/agent-zero/commit/ce48667e98ec8e269a241792ae77f8a5834e41bf, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_kokoro_tts/default_config.yaml, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_kokoro_tts/hooks.py
- **Half:** both | **Confidence:** high

**What changed.** Unconfigured chat naming changes from once to always in v2.13; explicitly saved choices remain. v2.14 preserves names deliberately entered by users under always mode. Local TTS now defaults unconfigured voice settings to Paradee Heart while retaining saved Kokoro settings. Assets load lazily, and install/update, enabled startup and re-enable hooks prepare missing speech dependencies; the framework requirements file is not the whole speech dependency surface.

**Operator consequence.** Check effective naming and voice settings after upgrading if stable titles or a particular local voice matter. Allow for first-use assets and missing-dependency setup when testing local speech. Do not infer a saved preference changed merely because the new default differs.

## 17. Plugin updates rebase locally committed changes

- **Date:** 2026-09-23 (first stable; implementation 2026-09-15T22:44:04Z)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 40a4303637de45c846dc77728df3d78b5537cc9a is absent from v2.12 and in v2.13 and v2.14. The official commit API confirms the UTC commit date; 16 September in the crosscheck is the local +02:00 date. The update_repo and conflict-toast patches were read.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/40a4303637de45c846dc77728df3d78b5537cc9a, https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/git.py
- **Half:** both | **Confidence:** high on updater code; updater not run

**What changed.** The plugin updater replaces unspecified pull reconciliation with fetch/rebase of local commits onto upstream. It refuses an existing Git operation, attempts to abort conflicts and restore local state, and reports conflicting filenames in a persistent escaped toast. Local commit identities can change on a successful rebase. This describes the product's updater; no such write command was executed for this research.

**Operator consequence.** Before updating a locally modified plugin, preserve its patch/commits and inspect the conflict report. Plan for rebased local history instead of assuming commit IDs survive. Pair this with v2.14's changed plugin precedence when auditing custom extensions.

## 18. Launcher v1.9 adds per-host certificate trust and preserves Windows settings

- **Date:** 2026-10-13 (stable companion releases)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Launcher dc72cb4a86d9f4b65f7e7d354f39e403f08dba5b, d6b465d1500626954cb3fc0109ebbe5bd9c52942 and 98e390f3849b4731566908867897aa9707a551db belong to v1.8...v1.9. CLI 7676c282069a291a95b310fa2554c9c936896dc8 belongs to v2.13...v2.14. Membership and relevant source/lock patches were checked through the official APIs.
- **Receipt:** https://github.com/agent0ai/a0-launcher/releases/tag/v1.9, https://github.com/agent0ai/a0-launcher/commit/dc72cb4a86d9f4b65f7e7d354f39e403f08dba5b, https://github.com/agent0ai/a0-launcher/blob/v1.9/shell/remote_certificate_trust.js, https://github.com/agent0ai/a0-launcher/commit/d6b465d1500626954cb3fc0109ebbe5bd9c52942, https://github.com/agent0ai/a0-launcher/commit/98e390f3849b4731566908867897aa9707a551db, https://github.com/advisories/GHSA-5p4m-2wfm-xmqj, https://github.com/agent0ai/a0-connector/commit/7676c282069a291a95b310fa2554c9c936896dc8, https://github.com/agent0ai/a0-connector/blob/v2.14/constraints/a0-runtime.txt, https://github.com/advisories/GHSA-54p9-h82j-f925
- **Half:** both | **Confidence:** high on configuration and pins; exploit reachability and Windows install not exercised

**What changed.** Launcher v1.9 lets a saved remote host opt into accepting unknown certificate issuers while retaining host-name and validity-date checks. The trust rule is host-specific, not blanket TLS disablement. Its Windows installer preserves settings around legacy uninstallers, failed installation and interrupted recovery; WSL/Docker discovery also changes. The Launcher lock moves js-yaml 4.2.0 to 4.3.2, above GHSA-5p4m-2wfm-xmqj's affected 4.x range below 4.3.1: crafted ordered-map YAML can consume quadratic CPU and stall parsing. That advisory predates this window; the shipped update is new. CLI v2.14 pins multidict 6.9.1 and framework v2.14 adds that floor. CVE-2026-104874 affects multidict C-extension 6.7.0..6.9.0 items-view reflected unions/subtractions and can exhaust memory. No reachable attacker-controlled parser or items-view path through Agent Zero was demonstrated.

**Operator consequence.** Review which saved hosts receive certificate trust and retain a settings backup before Windows upgrade. Use Launcher v1.9 and CLI v2.14 for these shipped changes. Check dependency resolution without claiming that dependency membership proves application-level exploitation or that these availability bugs disclose data.

## 19. The remaining ready tail changes truncation recovery and live profile switching

- **Date:** 2026-10-13
- **Channel:** `branch-only`
- **Ancestry evidence:** Pinned ready head 091c3677a54fb892b32750d8368896f4ed5dbc77 is 27 ahead/0 behind/87 files versus v2.14. 2f8a06515ea30ebd8a4fc58cc39fc796a2ca937c, 675e7d051de8c95ea2fc561e76f56794fbe5d4bc and 7216b8641b0169e82f0bc1498e0e8ec6ffdb0848 are absent from v2.14 and ancestors of that ready head. The Docker ready image predates this head; exact branch-head/image inclusion is not established.
- **Receipt:** https://github.com/agent0ai/agent-zero/compare/v2.14...091c3677a54fb892b32750d8368896f4ed5dbc77, https://github.com/agent0ai/agent-zero/commit/2f8a06515ea30ebd8a4fc58cc39fc796a2ca937c, https://github.com/agent0ai/agent-zero/commit/675e7d051de8c95ea2fc561e76f56794fbe5d4bc, https://github.com/agent0ai/agent-zero/commit/7216b8641b0169e82f0bc1498e0e8ec6ffdb0848
- **Half:** both | **Confidence:** high on pinned source/channel; no image inclusion claim

**What changed.** The actual end-of-window branch tail identifies output-limit truncation and prevents Context Doctor from repairing and dispatching incomplete native-call arguments on that path. A separate change removes the WebUI/API running-context guard for changing an agent profile: later model turns use the new profile, prompt cache is forfeited and subordinate profiles remain their own. It does not remove messaging /permissions' active-run refusal. These source changes are on ready, outside stable and outside main.

**Operator consequence.** Wait for a later stable tag containing the three pinned commits before relying on truncation recovery or mid-run profile switching. Re-read the relevant extension/endpoint at that tag; do not treat the mutable ready image or the old 36-commit branch account as proof of inclusion.

## Prior claims re-checked

The original profile has 22 active claims. Their disposition for the draft is explicit below; a still-true claim may retire because the dated posture no longer uses it.

- `telegram-webhook`: holds. v2.12 introduced the required nonempty matching webhook secret; v2.14 retains the handler and 32-256-character registration check. Keep the original security floor if mentioning it; the draft retires this entry when omitting the older webhook narrative. https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/api/webhook.py#L38-L50, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_telegram_integration/helpers/bot_manager.py#L198-L211
- `acp-defaults-unchanged`: holds with scope. ACP defaults apply to an editor/CLI connection, not proof of a public unauthenticated service; the interactive CLI differs. Section 9.
- `v2-10-acp-browser-ssrf-tests`: the retained ACP/browser/SSRF pieces hold, but retire this omnibus historical entry from the shorter posture. The inspected current SSRF call is plugins/_document_query/helpers/fetch.py, not nonexistent root helpers/fetch.py. https://github.com/agent0ai/agent-zero/blob/v2.14/tests/test_document_query_plugin.py#L118-L163
- `native-browser-playwright`: holds. Persistent Chromium uses Patchright 1.61.2, a Playwright fork; the internal profile is shared. Retire the engine catalog claim because the current body uses only the shared-profile fact. Sections 5 and 10.
- `linux-desktop-skill-controls`: holds at the inspected v2.13 skill; omit detailed Docker Desktop key/mouse instructions from the draft. https://github.com/agent0ai/agent-zero/blob/v2.13/plugins/_desktop/skills/linux-desktop/SKILL.md#L34-L42
- `oauth-quota-visibility`: original tag read supports remaining-percent cards; no live usage check. Omit it from this posture. https://github.com/agent0ai/agent-zero/blob/v2.13/plugins/_oauth/webui/config.html#L66-L77
- `browser-multi-tab-parallel-fanout`: original tag read supports multi and max_open_tabs 32; omit this catalog entry. https://github.com/agent0ai/agent-zero/blob/v2.13/plugins/_browser/tools/browser.py#L305-L308
- `odf-first-document-defaults`: original tag prompt supports it; omit this catalog entry. https://github.com/agent0ai/agent-zero/blob/v2.13/plugins/_office/prompts/agent.system.tool.office_artifact.md#L3-L19
- `persistent-desktop-lifecycle`: original tag read supports persistence and Save As; omit the catalog entry. https://github.com/agent0ai/agent-zero/blob/v2.13/plugins/_desktop/helpers/desktop_session.py
- `structured-actions-over-coordinates`: holds in the current host prompt, which prefers structural background dispatch when supported. Retire the older preference entry; the draft retains the precise structural-result exception instead. Section 10.
- `host-computer-use-remote`: holds as runtime-gated beta, enablement scoped to the host CLI session or Launcher lease, not a chat. Section 10.
- `vision-verification-required`: change/retire the categorical entry. The current prompt allows a definitive structural background result instead of a screen; this is a contract, not universal measured enforcement. The exception already existed at v2.13. Section 10.
- `platform-native-structural-targeting`: holds in backend skills, but omit the backend catalog. https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/prompts/agent.system.tool.computer_use_remote.md#L14-L20
- `ephemeral-capture-default`: retire the broad host claim. Host screenshots are durable chat media; only Docker Desktop's agent-facing refs remain ephemeral. Section 6.
- `screenshot-durable-storage-reversal`: holds for host captures and ordinary backup scope. Section 6.
- `ssrf-fix-lost-and-restored`: current guard holds at the inspected fetch site, but collapse the historical narrative into current scope or omit it from this posture. No fresh penetration test. Section 9.
- `scoped-tool-policy`: retire the earlier broad posture and replace it with independently named input/exec policies and scoped messaging editors. Sections 2 and 3.
- `whatsapp-imap-fixes`: retained code holds; a From allowlist is not sender authentication. Omit the older fixes from the current body. https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_whatsapp_integration/whatsapp-bridge/bridge.js#L304-L311, https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_email_integration/helpers/imap_client.py#L476-L491
- `host-folders-in-webui`: holds with live connector grants and launch-root confinement. Login protects this access only when configured. Sections 7 and 9.
- `chat-completions-default-context-doctor`: transport fallback holds; new Responses caching is section 15, and the truncated-call repair guard remains branch-only in section 19. Collapse the older transport notebook entry if omitted from the new body.
- `plugin-hooks-policy-prompts`: guidance/prompt pruning holds, but explicit legacy execute.py execution remains possible; user override precedence is new. Omit the old catalog entry. https://github.com/agent0ai/agent-zero/blob/v2.14/api/plugins.py#L280-L300
- `ready-branch-untagged-fixes`: retire. Earlier named fixes reached v2.13; the secret implementation was replaced inside its PR. The actual new tail is section 19.

The prior body ranking of Agent Zero as the widest/most complete on the watchlist has no comparative receipt here and is removed. The reason issue #1838 stayed open, the prediction of Dependabot behavior and a claim that no ledger-worthy fix shipped are also removed. LEDGER.md is unchanged, with WA-001/TG-001, not a completeness guarantee. https://github.com/agent0ai/agent-zero/blob/v2.14/security-review/LEDGER.md

## Carry-forward answers

- v2.13 shipped, and v2.14 followed on 13 October. aa8e1c042a is in ancestry but its recursive code was reverted; the retained argument-dictionary fix is section 4.
- ACP defaults still permit host writes/exec on connection; they have not become a public-listener finding (section 9).
- Repository advisories remain empty; two additional external file-browser CVEs appeared (section 7).
- The internal browser still shares one sign-in profile (section 5).
- Host-folder permissions are now read in tagged code on both sides, but no live revocation, path-race or stale-connection test was performed (section 9).

## Operator questions settled

- Full computer access now includes administration through configured messaging and independent intervention in direct child tasks, while host input can execute commands in idle shells (sections 2, 3 and 12).
- Host shell sessions gain chat state separation, but internal browser identity remains shared. Backups retain credentials and host captures; mounts and login still decide file exposure (sections 5, 6, 7 and 11).
- Child status and public action summaries improve visibility; neither is an independent correctness proof. Refusals move to visible errors (sections 8 and 12).
- Locally modified plugin updates rebase, and user assets now win collisions. Audit the code that will actually execute, not only the saved tool policy (sections 10 and 17).
- The execution environment can compose outside coding CLIs, whose documented invocations may bypass their usual controls. Scope belongs to the selected host/container and connector grants (section 6).

## Leads not promoted

- Writing feed sweep found no Agent Zero item. The X lane was unavailable; no social statement is used as a product receipt.
- The v2.13/v2.14 release articles are context; tag/source reads support implementation claims. Release-note performance percentages remain attributed upstream tests, not reproduced measurements.
- Issues #1925/#1926 claim pre-execution argument mutations are not reread. Tagged source did not substantiate that generalized claim; the parallel dictionary path was fixed in section 4. No application probe was executed.
- Issue #1910 reports host Computer Use disarming; #1923 reports a dead Browser worker hanging a turn. Neither was independently reproduced. The new first-action startup and evaluate deadline do not prove those reports resolved.
- Codex OAuth model availability depends on a pinned client-version header; 0.160.1 now ships (section 10), but live model discovery was not tested.
- spynel and easy-service are outside this source contract and are not evidence about Agent Zero.

## Surfaces checked

Original researcher and verifier: official repository identity, release/tag/compare and issue/PR APIs, pinned framework code and tests, companion code and release records, Docker tag/manifest metadata, canonical NVD/GHSA records, installed-channel comparisons, source docs, security ledger and prior-profile claims. No application execution.

Write-up author: independently re-read framework/CLI/Launcher release APIs and comparisons; Docker v2.14/latest/ready digests and push times; pinned commit patches for every material miss M2..M10; framework ancestry with lazy fetching disabled; Agent Editor scope; v2.14 startup migration, requirement pins, Computer Use prompt and Orchestrator guidance; canonical dependency advisories and companion commit membership. An unavailable local blob was read through the official API instead of writing clone objects.

## Not reached

No cloned application code, test, install script, container, bot, browser action, Windows installer, dependency installation or exploit was executed. No image layers were pulled. Resolved Python packages inside the image are unmeasured. Per-chat shell separation, host grant revocation, filesystem races, screenshot contracts, policy/menu interactions and restores require live acceptance checks. Exact ready-head/image inclusion is unresolved. Lower-risk historical catalog entries were not all re-exercised; the draft retires unused ones rather than claiming new live assurance.

## Crosscheck applied

Applied all five CORRECTED numbered verdicts, retained the three VERIFIED mechanisms with their current scope, and deleted original REFUTED section 9. Its tagged implementation facts are replaced in new section 10; the false branch/image conclusion is removed. No numbered UNVERIFIABLE verdicts were present. Added M1..M10 as sections 9 and 11..19 after checking their primary receipts; section 10 separately replaces the old branch-only implementation account. Numbering is sequential, 1..19. Corrected prior-claim scope, screenshot exceptions, the SSRF path, unsupported rankings/intent/issue causation and advisory predictions. Anchored the plugin updater commit to its API UTC time rather than its local calendar date. Two stable releases and their host companions, not the pre-close snapshot, determine the 13 October recommendation.
