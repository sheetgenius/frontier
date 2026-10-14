---
schema_version: bitter.frontier_harvest.v0
provider: openclaw
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/openclaw.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased]
window_volume: 7 main-line stable releases, 3 new extended-stable releases, 5 beta releases, 44 internal release-publish markers, 0 new repository advisories; 20 numbered observations including explicit posture corrections
lane: primary sources, profile-refresh write-up author
---

# Harvest: openclaw (primary sources)

Window closes at 2026-10-13T23:59:59Z. Crosscheck and author receipt checks were performed on 2026-10-14. Registry selectors are observations on that verification date; package publication timestamps establish availability within the window, not historical selector movement times. Identity is openclaw/openclaw, main, homepage https://openclaw.ai. The original research used a read-only blobless clone; the crosscheck used pinned raw files and GitHub comparison APIs. The author rechecked the missed releases, PRs, version records, dated NVD records and release-commit comparisons through APIs. No cloned code was executed.

Release branches contain cherry-picks. A main SHA absent from a tag does not establish a missing fix, especially on extended-stable's squashed backport line. Comparisons below establish ancestry only when base SHA equals merge-base SHA and behind_by is zero. Source checks establish the described mechanism, not runtime acceptance or package-tarball identity.

## Install today

- **Stable available by window close: 2026.10.3.** GitHub published 2026-10-13T13:49:25Z; npm published 2026-10-13T13:43:36.600Z. npm latest observed at verification is 2026.10.3. Tag SHA 59cb44796b0f1f0daa0e37af8b1495abb45d9bc1; 90 commits ahead and zero behind 2026.10.2. Use `npm i -g openclaw@2026.10.3` for an exact pin; the documented floating commands remain `npm i -g openclaw@latest` and `npx openclaw@latest`, and the installer defaults to latest. Exact Node range: `>=24.16.0 <25 || >=26.1.0`, excluding Node 25. [Release](https://github.com/openclaw/openclaw/releases/tag/v2026.10.3), [version record](https://registry.npmjs.org/openclaw/2026.10.3), [getting started](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/start/getting-started.md#L25-L38), [installer](https://github.com/openclaw/openclaw/blob/v2026.10.3/scripts/install.sh#L1295), [manifest](https://github.com/openclaw/openclaw/blob/v2026.10.3/package.json).
- **Extended-stable: 2026.8.35.** GitHub published 2026-10-02T14:06:34Z; npm published 2026-10-02T13:20:17.208Z. Observed extended-stable selector is 2026.8.35. Gateway package only, foreground installation, no automatic application. Exact Node range: `>=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0`. [Release](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35), [channel rules](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/install/development-channels.md#L14-L18), [manifest](https://github.com/openclaw/openclaw/blob/v2026.8.35/package.json).
- **Beta: 2026.10.5-beta.3.** GitHub published 2026-10-13T10:00:37Z; npm published 2026-10-13T09:42:22.050Z. Observed beta selector is beta.3, a published prerelease, not a tag-only build. SHA 1808b57b75f056fe4ae247d6cbc1ba68f1717858; 93/0 ahead of beta.2. Hook argument binding, Telegram legacy-spool replay prevention, X mentions and the new device-join command belong to this channel, not stable 10.3. [Release](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3), [version record](https://registry.npmjs.org/openclaw/2026.10.5-beta.3).
- **Desktop:** the versioned 10.3 release carries macOS DMG/zip and Linux AppImage/deb assets. The mutable linux-stable pointer names 10.3 when checked; its original publication date is 2026-09-19T05:00:44Z, and it is not another stable release. [Versioned assets](https://github.com/openclaw/openclaw/releases/tag/v2026.10.3), [pointer](https://github.com/openclaw/openclaw/releases/tag/linux-stable). No Windows Hub or mobile app-store inventory was checked.
- **Main:** last commit before 2026-10-14T00:00:00Z was 7e4c0f7378ea285e405bdb9cfca3207d2529d30f, dated 2026-10-13T23:57:55Z, diverged 5139 ahead / 380 behind v2026.10.3. These are not 5139 additional commits in stable. The earlier e5ba68db 09:34:58Z snapshot was 4581/290 versus 10.2, not the closing position. [Closing comparison](https://github.com/openclaw/openclaw/compare/v2026.10.3...7e4c0f7378ea285e405bdb9cfca3207d2529d30f). Channel docs advise against dev on production Gateways.
- **Branch only:** extended-stable/2026.9.33 at 3e97e46be43da54a0d0ab1455aac6544d2dd53e5 prepares a September line from 9.9 plus three commits; no tag or npm publication. [Commit](https://github.com/openclaw/openclaw/commit/3e97e46be43da54a0d0ab1455aac6544d2dd53e5).
- **Opt-in/experimental:** Claws needs `OPENCLAW_EXPERIMENTAL_CLAWS=1`; Visitor Access requires a source checkout. Sign in with ChatGPT is Beta. FaceTime and Google Meet participation are experimental. Codex Ultrafast and google-interactions are opt-in. [Claws](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/claws.md#L17-L23), [Visitor Access](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/plugins/reference/visitor-access.md), [authentication](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/openai/authentication.md), [9.6 changes](https://github.com/openclaw/openclaw/blob/v2026.9.6/CHANGELOG/2026.9.6.md), [9.7 changes](https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md).

## Release ledger

GitHub publication, npm publication and tag creation are distinct events. Ahead/behind values below were reproduced by the crosscheck. Baselines are retained for comparison, not counted again as new findings. The 44 release-publish ref names encode in-window epochs and are publication markers, not versions.

| Tag | GitHub published UTC | Prerelease | Channel | Ahead/behind | npm published UTC |
| --- | --- | --- | --- | --- | --- |
| v2026.9.5 | 2026-09-19T01:55:23Z | false | baseline | 4244/7 vs 9.4 | 2026-09-19T01:14:57.889Z |
| v2026.7.35 | 2026-09-21T13:14:04Z | false | extended baseline | 11/0 vs 7.33 | 2026-09-21T12:16:02.348Z |
| v2026.9.6 | 2026-09-23T23:21:10Z | false | stable | 2792/4 vs 9.5 | 2026-09-23T23:07:43.684Z |
| v2026.8.33 | 2026-09-29T03:12:00Z | false | extended | 48/0 vs 8.2; 20573/310 vs 7.35 | 2026-09-28T22:37:47.204Z |
| v2026.9.7 | 2026-09-30T04:44:14Z | false | stable | 3338/33 vs 9.6 | 2026-09-30T03:38:09.894Z |
| v2026.8.34 | 2026-10-02T00:12:39Z | false | extended | 4/0 vs 8.33 | 2026-10-01T20:28:57.660Z |
| v2026.8.35 | 2026-10-02T14:06:34Z | false | extended | 3/0 vs 8.34 | 2026-10-02T13:20:17.208Z |
| v2026.9.8 | 2026-10-03T03:21:47Z | false | stable | 58/0 vs 9.7 | 2026-10-03T02:08:46.095Z |
| v2026.10.1-beta.1 | 2026-10-05T19:47:49Z | true | beta | 2901/253 vs 9.9 | 2026-10-05T17:55:06.365Z |
| v2026.10.1-beta.2 | 2026-10-08T00:41:22Z | true | beta | 40/0 vs 10.1-beta.1 | 2026-10-07T23:36:22.831Z |
| v2026.9.9 | 2026-10-08T10:23:23Z | false | stable | 185/0 vs 9.8 | 2026-10-08T09:38:01.687Z |
| v2026.10.1 | 2026-10-10T23:54:03Z | false | stable | 3055/253 vs 9.9 | 2026-10-10T22:45:05.897Z |
| v2026.10.5-beta.1 | 2026-10-11T13:08:24Z | true | beta | 2270/185 vs 10.1 | 2026-10-11T12:55:06.772Z |
| v2026.10.2 | 2026-10-12T05:34:44Z | false | stable | 105/0 vs 10.1 | 2026-10-12T05:28:25.059Z |
| v2026.10.5-beta.2 | 2026-10-12T12:10:48Z | true | beta | 109/0 vs beta.1 | 2026-10-12T11:32:20.169Z |
| v2026.10.5-beta.3 | 2026-10-13T10:00:37Z | true | beta | 93/0 vs beta.2 | 2026-10-13T09:42:22.050Z |
| v2026.10.3 | 2026-10-13T13:49:25Z | false | stable | 90/0 vs 10.2 | 2026-10-13T13:43:36.600Z |

## 1. Extended-stable carries the August approval and sandbox fixes with narrower defaults

- **Date:** 2026-09-28 (8.33 npm publication; GitHub 2026-09-29), 2026-10-01 (8.34 npm), 2026-10-02 (8.35)
- **Channel:** `tagged-release`, extended-stable 2026.8.35
- **Ancestry evidence:** ab5611f0, fd8326c5 and cc027149 are ancestors of v2026.8.35 and v2026.10.3, not v2026.7.35. v2026.8.2 to v2026.8.33 is 48/0, followed by 4/0 and 3/0. Operand snapshot, approval binding, sandbox paths and child-reaper blobs match 8.1 and 8.35: 938c1687eb9a9ae86ac3c7e3574d9c9e7c2b55c9, e23438b81e29d34b01140af435a7a1ae70439055, 49f47e37738986702f13e650a2c1f80916650ac9, b5e1b77e899a69dac6a43aa7f2801620a7a42fbe.
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.8.33 ; https://github.com/openclaw/openclaw/releases/tag/v2026.8.35 ; https://github.com/openclaw/openclaw/compare/ab5611f0...v2026.8.35 ; https://github.com/openclaw/openclaw/blob/v2026.8.35/src/infra/system-run-mutable-file-operand.ts ; https://github.com/openclaw/openclaw/blob/v2026.8.35/src/config/types.tools.ts#L505-L524 ; https://github.com/openclaw/openclaw/blob/v2026.8.35/extensions/diagnostics-prometheus/src/service.ts#L980-L1015 ; https://github.com/openclaw/openclaw/blob/v2026.8.35/extensions/discord/src/send.emojis-stickers.ts#L27-L79 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/install/development-channels.md ; https://github.com/openclaw/openclaw/security/advisories/GHSA-rx8p-qcpv-c7vr ; https://github.com/openclaw/openclaw/security/advisories/GHSA-xvwp-wmh2-fq48 ; https://github.com/openclaw/openclaw/security/advisories/GHSA-5x6q-wg56-rxg8
- **Half:** both | **Confidence:** high

**What changed.** Extended-stable moved from the July line to an 8.2-based August line ending at 2026.8.35. It inherits byte-bound exec approval, the symlink-then-`..` validation fix and sandbox child-tree reaping from 8.1. Unlike the main stable line, 8.35 documents agent-to-agent messaging disabled and session visibility limited to the agent. It is gateway-only and requires a foreground update; extended-stable never applies automatically. Backport notes name three advisories whose version ranges still match this monthly version: scope-limited metrics scraping in the Prometheus plugin, Discord guild-asset uploads outside the sender's media roots, and Discord voice speaker-owner confusion. The Prometheus scope check and Discord asset-policy routing were independently traced in the release tree. Full voice speaker-ownership coverage was not traced. The first two advisories name separate plugin packages, not interchangeable core-package defects.

**Operator consequence.** An operator still on 7.35 can explicitly install `openclaw@2026.8.35` or run `openclaw update --channel extended-stable` to obtain the inherited fixes with narrower August defaults. Later-fix coverage must be checked in the release tree; absent main SHAs and absent note bullets do not establish absence after squashed backports. Record a package-specific scanner exception only after confirming the installed plugin and backported mechanism. The September 9.33 preparation branch is not an installable release; read its defaults if it eventually ships.

**Frontier lens.** The previous forced choice between a slower channel and these fixes has ended. A quieter channel can still cost expert attention: monthly numbering and squashed backports make version-range and SHA-only checks insufficient.

## 2. Discord and Slack accept bot-authored messages by default from 2026.9.7

- **Date:** 2026-09-24 merge, 2026-09-30 first stable
- **Channel:** `tagged-release`
- **Ancestry evidence:** b078de41c413403542f847ac484c42d904b9fbaf is an ancestor of 9.7 and 10.3, not 9.6 or 8.35. Crosscheck comparisons are 2539/0 at 9.7 and 5779/0 at 10.3.
- **Receipt:** https://github.com/openclaw/openclaw/commit/b078de41c413403542f847ac484c42d904b9fbaf ; https://github.com/openclaw/openclaw/pull/157091 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/slack/access-control.md#L242-L248 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/discord/troubleshooting.md#L103-L108 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/bot-loop-protection.md ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/audit-checks.md#L140-L147
- **Half:** both | **Confidence:** high

**What changed.** An omitted allowBots now means true on Discord and Slack, including existing installations after updating to 9.7. Explicit false stays disabled; mentions still requires a mention. Normal channel access and mention rules, self-message filtering and the bot-pair rate guard remain. That rate guard limits fast exchanges, not every sustained conversation. Slack additionally requires the sending bot to be allowed or an explicit owner present in the room; the cited Discord rule has no equivalent Slack owner-presence guard. Extended-stable 8.35 does not inherit this default flip.

**Operator consequence.** Set allowBots explicitly before upgrading a shared Gateway: false excludes bot-authored turns and mentions requires a mention. Check Discord rooms with requireMention false first. The audit catalog documents no dedicated allowBots check; inspect this setting explicitly. General open-channel or cross-agent checks may still report exposure, so catalog silence is not proof that every runtime audit ignores it.

**Frontier lens.** Routine bot collaboration became easier. The admission decision moved from choosing an opt-in to noticing an upgrade's changed default.

## 3. Chat-driven configuration follows the requesting run's permission mode

- **Date:** 2026-09-24 to 2026-09-26 merges, 2026-09-30 first stable; permission-change proposal closed unmerged 2026-09-26
- **Channel:** `tagged-release`
- **Ancestry evidence:** 8fd72da7, a219fa50 and a71e5566 are ancestors of 9.7 and 10.3, not 9.6. #158142 has no merge SHA. Default Full Access and its automatic delegated application predate this window.
- **Receipt:** https://github.com/openclaw/openclaw/pull/158120 ; https://github.com/openclaw/openclaw/pull/157447 ; https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L118-L185 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/permission-modes.md#L39-L62 ; https://github.com/openclaw/openclaw/pull/158142#issuecomment-5845640176
- **Half:** both | **Confidence:** high

**What changed.** 9.7 supports owner-requested configuration, credential storage and owned-skill changes through chat and removes prompt refusals for that ordinary requested work. A pasted key gets a fresh secret-store name and never overwrites a prior entry, but the message already reached the model provider and transcript. Delegated operations use the requesting run's effective permission mode: Full Access applies the exact proposal automatically, including when inherited from the configured default. Restricted channel runs get structured approval in the requesting chat; free-text agreement cannot authorize the operation. Full Access's default behavior was already present before this window. A proposal to require a separate human decision for permission changes even under Full Access was closed unmerged; the maintainer argued that shell and file tools already permit the same change.

**Operator consequence.** Prefer masked setup flows to pasting keys, and delete a superseded secret entry only once nothing uses it. Set channel-facing runs to a deliberate permission mode. The effective permission mode decides the delegated approval prompt; filesystem and sandbox boundaries, tool policy, operation restrictions, live run authority and verified inference-route checks still apply. Use an existing session's live policy preview when inspecting this posture, with the limits in section 8.

**Frontier lens.** A prompt refusal and a path-specific permission-change gate became less defensible when a general agent could do the same work with shell and file tools. Moving the decision to an enforced mode is coherent; inheriting Full Access makes configuration ownership more consequential. The refusal deletion does not prove a model intelligence gain.

## 4. Hooks can rewrite approved arguments on stable; binding is fixed only in beta

- **Date:** 2026-10-11 main merge, 2026-10-12 first beta fix; retained in beta.3 published 2026-10-13
- **Channel:** `preview-or-beta` and main-unreleased; affected stable through 2026.10.3 and extended-stable 2026.8.35
- **Ancestry evidence:** release fix 34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de is an ancestor of beta.3 at 147/0, not 10.3 or 8.35. Release commits 1bcc66b8 (indirect network taint) and 59e9db4c (unfinished reasoning privacy) are in beta.3 at 97/0 and 163/0, not 10.3. Main equivalents are 48a2b3d2, 4cb9f126 and 757d7398.
- **Receipt:** https://github.com/openclaw/openclaw/pull/142700 ; https://github.com/openclaw/openclaw/commit/34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de ; https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.before-tool-call.policy.ts#L303-L411 ; https://github.com/openclaw/openclaw/blob/v2026.10.5-beta.3/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436 ; https://github.com/openclaw/openclaw/blob/v2026.8.35/src/agents/agent-tools.before-tool-call.policy.ts#L277-L405 ; https://github.com/openclaw/openclaw/pull/169560 ; https://github.com/openclaw/openclaw/pull/168294 ; https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3
- **Half:** defect | **Confidence:** high

**What changed.** Stable through 10.3 and extended-stable 8.35 resolve a trusted inline approval before ordinary before_tool_call hooks can replace the final arguments. The beta fix isolates the approved snapshot and blocks a rewrite unless the hook requests approval for its final replacement parameters. It has been on the beta channel since beta.2 and is in current beta.3. The ordering was read in all three source trees; no exploit was executed. Beta.3 also carries fixes for network results reached through Tool Search or Code Mode not tainting the turn and unfinished reasoning becoming visible after a truncated tool stream. Those fixes are likewise absent from stable 10.3.

**Operator consequence.** Until a stable release containing this fix is verified, inventory ordinary before_tool_call hooks on either stable line and remove or pin plugins you do not control. Test transforming hooks on beta.3: plugin authors must return requireApproval with final parameters or the rewritten call is blocked. A future version number or an issue's open/closed status is not proof of stable inclusion.

**Frontier lens.** An approval must bind to the inputs that execute. This extends the same durable idea used for exec operands to generic tool calls, while the compatible plugin behavior changes with it.

## 5. Seven main-line stables shipped with distinct release qualification omissions

- **Date:** 2026-09-23 through 2026-10-13
- **Channel:** `tagged-release`
- **Ancestry evidence:** 9.7 to 9.8 is 58/0, 9.8 to 9.9 is 185/0, 10.1 to 10.2 is 105/0, 10.2 to 10.3 is 90/0. Node auto-update commit 3c4c111b is in 9.6 and 10.3, not baseline 9.5. Examined Android version files remain 2026.8.2.
- **Receipt:** https://api.github.com/repos/openclaw/openclaw/releases?per_page=40 ; https://github.com/openclaw/openclaw/releases/tag/v2026.9.6 ; https://github.com/openclaw/openclaw/releases/tag/v2026.9.7 ; https://github.com/openclaw/openclaw/releases/tag/v2026.9.8 ; https://github.com/openclaw/openclaw/releases/tag/v2026.9.9 ; https://github.com/openclaw/openclaw/releases/tag/v2026.10.1 ; https://github.com/openclaw/openclaw/releases/tag/v2026.10.2 ; https://github.com/openclaw/openclaw/releases/tag/v2026.10.3 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/apps/android/version.json ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/nodes/node-host.md#L177-L191
- **Half:** both | **Confidence:** high

**What changed.** Seven main-line stables shipped from 23 September through 13 October. 9.6 explicitly waived stable soak and made three failing CI lanes advisory; its crashing macOS package was rebuilt with the same version on 24 September. 9.7, 9.8 and 9.9 waived Telegram integration checks. 10.1, 10.2 and 10.3 report Telegram beta E2E not supplied. The examined release jobs skipped Android APK production and the checked version file remains 2026.8.2; no app-store inventory was checked. These are distinct waiver, missing-evidence and skipped-build states, not interchangeable failed tests. Update reliability also advanced: 9.7 adds database backups and candidate admission checks, 10.1 adopts immutable installation generations, and 10.3 repairs blocked updates. Since 9.6, eligible packaged headless nodes check hourly, apply while idle, and allow at least 12 hours between activations; extended-stable and other named install types are excluded.

**Operator consequence.** Pin a production Gateway to 2026.10.3 and read the versioned release's verification block before upgrading. Decide separately whether a node running system.run should self-update; opt out with nodeHost.autoUpdate.enabled false or OPENCLAW_NO_AUTO_UPDATE=1 when required. Treat the checked Android notes as source changes rather than proof of a current store build.

**Frontier lens.** Release and updater work consumed attention despite high code throughput. The record does not prove that waived checks caused a defect; it does show that operators cannot substitute a stable label for qualification evidence.

## 6. Desktop sharing and provider compaction remove setup and summary work

- **Date:** 2026-09-23 (9.6), 2026-09-30 (9.7), 2026-10-12 (10.2); rechecked at 10.3
- **Channel:** `tagged-release`
- **Ancestry evidence:** 7d472562 and 729c6b1c reach 9.6; f45f36e8 and 5e5f9c27 reach 9.7. Compaction release backport 6015e98d907837b45058f04f01694eaa7eab3ce4 is in 10.3 at 121/0. Absent main SHAs on 8.35 do not independently resolve every backport.
- **Receipt:** https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-browser-ui-desktop.md#L336-L355 ; https://github.com/openclaw/openclaw/pull/153359 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/tool-search.md#L80-L100 ; https://github.com/openclaw/openclaw/pull/156151 ; https://github.com/openclaw/openclaw/commit/6015e98d907837b45058f04f01694eaa7eab3ce4 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/openai/advanced.md#L337-L341 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/anthropic.md#L889-L913 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-tools/sessions-and-subagents.md#L24-L38 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/subagents/nesting.md#L13 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-gateway.md#L195 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/tool-permissions.md#L33-L57 ; https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md
- **Half:** both | **Confidence:** high

**What changed.** 9.6 enables structured Tool Search when unset for embedded and Copilot runs and enables desktop sharing for paired macOS, Windows and Linux nodes without a separate Gateway allow entry. Sharing still requires an existing node-local RFB server on 127.0.0.1 and does not enable macOS Screen Sharing. 9.7 lets voice consultations run specified read-only pipelines without spoken confirmation and changes bare opus/new Anthropic setup to Opus 5.5. 10.2 extends OpenAI's already available budget-triggered native compaction to manual /compact without focus text. Focused compaction, confirmed overflow and failures retain client summaries. Anthropic server compaction defaults on only for supported models on direct api.anthropic.com API-key routes. Current 10.3 docs retain older reach defaults: agent-to-agent enabled, session visibility all, Swarm enabled, delegation depth five, CLI agents enabled, and within/across-provider messaging enabled.

**Operator consequence.** Review which paired nodes should offer an existing desktop and which routes may use provider-side compaction. The opt-outs are params.responsesCompactEndpoint false and params.anthropicServerCompaction false; tools.toolSearch false restores direct schemas. Use an explicit model id if the opus alias change affects cost. On shared Gateways, choose session visibility agent or self and deliberate messaging/delegation limits. Do not turn the PR's checkpoint description into a provider-retention guarantee.

**Frontier lens.** General tool discovery and provider compaction replace parts of local orchestration. The ownership decision shifts to route selection and paired-device authority; no measured end-to-end throughput improvement follows from these receipts alone.

## 7. Autonomous Workshop maintenance requires its own approval setting

- **Date:** 2026-10-13 posture correction; behavior already present at 2026.9.5 before this window
- **Channel:** `tagged-release`
- **Ancestry evidence:** 9.5 and 10.3 configuration tables both specify autonomous.mode auto and direct maintenance without proposal scanning. The current 10.3 files match the crosschecked 10.2 files. 60e1aa9b in 10.1 changes propose-mode guidance, not the date of this older default.
- **Receipt:** https://github.com/openclaw/openclaw/blob/v2026.9.5/docs/tools/skill-workshop/configuration.md ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/skill-workshop/configuration.md#L68-L84 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/self-learning.md#L127-L180
- **Half:** both | **Confidence:** high

**What changed.** The old profile's approvalPolicy pending recommendation was incomplete. Autonomous Workshop maintenance defaults to auto and uses ordinary agent file tools, without proposals, a post-turn scanner or automatic rollback snapshots. approvalPolicy controls proposal apply/reject/quarantine decisions rather than that direct-maintenance path. The background run inherits the source session's permissions, tool limits and shell policy, and file tools stay rooted in the Workshop directory. This is a correction to the dated posture, not a newly shipped window default; 8.35 predates this setting.

**Operator consequence.** Set skills.workshop.autonomous.mode to propose or off as well as approvalPolicy pending when background proposal review is required. If keeping auto, back up the workshop-skills directory because direct edits have no automatic rollback snapshot. Off stops autonomous maintenance, not every explicit manual learning or skill-edit path.

**Frontier lens.** Direct maintenance can remove a review queue, but its cost moves into permission design, backups and recovery. That is a deliberate workflow choice, not evidence that human judgment disappeared.

## 8. Authority inspection and in-chat approvals became easier to use

- **Date:** 2026-09-23 (9.6), 2026-09-30 (9.7), 2026-10-10 (10.1)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 163cd10b, d8bf4703 and a71e5566 are in 9.7 and 10.3, not 9.6; approval-scope commit 17b92c6988cd2ca9effdc8db5443ee9edd1a106c reaches 10.1 and 10.3.
- **Receipt:** https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/approvals.md#L210-L273 ; https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md ; https://github.com/openclaw/openclaw/pull/164534 ; https://github.com/openclaw/openclaw/commit/17b92c6988cd2ca9effdc8db5443ee9edd1a106c ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L120-L143 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/exec-approvals.md#L554-L589 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/trust-model.md#L55-L68 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-tools/tool-policy.md#L230-L248
- **Half:** capability | **Confidence:** high

**What changed.** 9.7 adds exec-policy show to explain terminal-tool policy and approval sources, a plain-language connection Profile view, and structured change approvals completed in the chat that requested them. 10.1 adds scope to the standalone approval page, which previously showed command and host without payment details or standing-grant terms carried by the request. Current docs still offer sender tool policy, per-agent message restrictions and exact-operation standing grants for the named automation path. Standing grants bind the agent, job definition and operation and are rechecked before spawn. One Gateway is one trust domain; these collaboration controls are not hostile-tenant isolation.

**Operator consequence.** Use `openclaw exec-policy show --agent <id> --session <existing-session-key> --verbose` for a read-only live Gateway preview. Without session, the command is offline policy inspection and locally allowed execution is unverified. Even a successful preview can be cached and does not guarantee execution; model, channel, sandbox and runtime checks may still deny it. Keep unrelated trust domains on separate Gateways and approve notification requests on a build with the scope display fix.

**Frontier lens.** The useful advance is authority explained where a person makes the decision. Inspection and a legible approval reduce navigation work, while runtime enforcement remains a separate obligation.

## 9. Published beta.3 adds an X channel and plugin browsing beyond stable

- **Date:** 2026-10-11 beta.1, 2026-10-12 beta.2, 2026-10-13 beta.3
- **Channel:** `preview-or-beta`; specified Ollama schema change is main-unreleased
- **Ancestry evidence:** 9666c02c, 4e011b13, 6de5ce97, e9c58e9c, 5ac5bfe1 and c9c023fb are in beta.3, not stable 10.3. 4243ae96 is in neither beta.3 nor 10.3. Closing main snapshot is 5139/380 versus 10.3.
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.1 ; https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.2 ; https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3 ; https://registry.npmjs.org/openclaw/2026.10.5-beta.3 ; https://github.com/openclaw/openclaw/pull/165138 ; https://github.com/openclaw/openclaw/compare/9666c02c...v2026.10.5-beta.3 ; https://github.com/openclaw/openclaw/compare/v2026.10.3...7e4c0f7378ea285e405bdb9cfca3207d2529d30f ; https://github.com/openclaw/openclaw/pull/169556
- **Half:** capability | **Confidence:** high

**What changed.** npm beta no longer equals stable: beta.3 is published with the 10.5 feature line. It includes an X mentions channel admitting allowlisted accounts and replying publicly with API spend limits, ClawHub plugin/skill browsing from the Gateway, directed session sends without transcript access, Telegram/Discord progress display by default and managed official plugins preferring a build matched to the host. The X PR's live round trip was pending; synthetic proof is not production acceptance. Beta.3 also adds the Telegram import repair and device-join suggestion described in sections 12 and 13. A main-only Ollama change exposes policy-approved web tools directly when Tool Search is unset; it does not enable denied tools.

**Operator consequence.** Test the exact beta.3 package on a non-production Gateway for X ingress or transforming-hook compatibility. Use 10.3 as the main stable pin while monitoring release inclusion of the beta fixes, not a guessed future version. A public-reply channel requires explicit account admission and API budget decisions.

**Frontier lens.** Public mentions and integrated plugin discovery broaden the fraction of setup and communication an agent can operate. Public posting puts judgment about who can trigger work and what may be said into an especially visible human queue.

## 10. ChatGPT sign-in and new provider integrations reduce entry barriers

- **Date:** 2026-09-23 (9.6), 2026-09-30 (9.7), 2026-10-08 (9.9), 2026-10-10 (10.1)
- **Channel:** `tagged-release`, with Beta and experimental subfeatures
- **Ancestry evidence:** 67fd7e91, e9fcdb40, c432db86, 79f8440d and 673a44e9 reach 9.7 and 10.3. Opus release cherry-pick 05a084b2 reaches 9.6; its absence as that SHA from 10.3 is not model removal. Haiku release cherry-pick 29d724a8 reaches 10.1 and 10.3.
- **Receipt:** https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/openai/authentication.md#L11-L42 ; https://github.com/openclaw/openclaw/blob/v2026.9.6/CHANGELOG/2026.9.6.md ; https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md ; https://github.com/openclaw/openclaw/releases/tag/v2026.9.9
- **Half:** capability | **Confidence:** high

**What changed.** 9.7 adds Sign in with ChatGPT (Beta) alongside Codex login and API keys, an OpenAI Agents API plugin for hosted/self-hosted environments, Slack huddles as a signed-in Slack user, and experimental Google Meet participation. 9.6 adds an experimental FaceTime bridge. OpenClaw model integrations add Opus 5.5 and GPT-6 Sol/Luna in 9.6, Sonnet 5.5 in 9.7, GPT-6.1 Sol on the managed Codex runtime in 9.9 and extended-stable 8.35, and Haiku 5.5 in 10.1. The sign-in matrix uses app-specific grants and eligible account capabilities; hosted plugins and connected apps are not supported through Sign in with ChatGPT. These are OpenClaw's documented integrations, not independently exercised provider sessions.

**Operator consequence.** A user with eligible ChatGPT access can start without an API key or separate Codex CLI login, but must choose the authentication method against the capabilities needed. Preserve Beta and experimental labels when deciding which communication routes to deploy.

**Frontier lens.** Familiar sign-in and communication surfaces lower setup demands. The integration still requires a route/capability decision; easier access does not prove equivalent authority across providers.

## 11. Stable 2026.10.3 repairs credentials, memory and post-compaction turns

- **Date:** 2026-10-13, GitHub 13:49:25Z and npm 13:43:36.600Z
- **Channel:** `tagged-release`, npm latest observed at verification
- **Ancestry evidence:** 10.2 to 10.3 is 90/0. Release credential commit 8b69a99d3ba0ad28f5d28faedc1b27e4d2765f9b is 38/0 behind 10.3; memory commit e5781479f46cedc7adfa39adf54dad1e1683fa24 is 35/0 behind it. Other release commits in the comparison include 804d359a, 1503cbdb and 651212bf. Author independently reproduced both named comparisons and read the tagged changelog.
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.10.3 ; https://registry.npmjs.org/openclaw/2026.10.3 ; https://github.com/openclaw/openclaw/compare/v2026.10.2...v2026.10.3 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/CHANGELOG/2026.10.3.md ; https://github.com/openclaw/openclaw/commit/8b69a99d3ba0ad28f5d28faedc1b27e4d2765f9b ; https://github.com/openclaw/openclaw/commit/e5781479f46cedc7adfa39adf54dad1e1683fa24 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/package.json ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/start/getting-started.md#L25-L38
- **Half:** both | **Confidence:** high

**What changed.** Stable 2026.10.3 was released on 13 October, superseding 10.2 within the window. It prevents unreadable legacy OAuth cleanup from deleting valid canonical profiles, refuses lossy rewrites of malformed UTF-8 root memory, preserves enabled plugins whose startup was blocked, and waits for transcript projection rebuilding before the next turn after provider-native compaction. The missing wait predates the native-default change; these receipts do not establish that 10.2 introduced it. It also repairs blocked updater recovery, platform cases that stopped or rolled back the Gateway, and fresh macOS setup authentication. The manifest requires Node >=24.16.0 <25 or >=26.1.0; the installer and documented floating commands select latest.

**Operator consequence.** Use `npm i -g openclaw@2026.10.3` for the window's exact main stable target rather than stopping at 10.2. Confirm Node compatibility first. Repairs protect existing identity and memory state, but they do not remove the need for backups or prove recovery of already lost data.

**Frontier lens.** Provider-owned compaction removes some local summary work while durable credentials, memory and turn continuity remain harness responsibilities. The repair burden is evidence against treating upstream capability as automatic end-to-end reliability.

## 12. Beta.3 prevents stale Telegram spool imports becoming fresh owner turns

- **Date:** 2026-10-12 merge, 2026-10-13 beta publication
- **Channel:** `preview-or-beta`, 2026.10.5-beta.3 only among examined channels
- **Ancestry evidence:** 84e5f5d130867647cf4b3677e778084b69f3b989 is 75/0 behind beta.3 and diverges from stable 10.3. Author rechecked the full-SHA comparisons and #170068.
- **Receipt:** https://github.com/openclaw/openclaw/commit/84e5f5d130867647cf4b3677e778084b69f3b989 ; https://github.com/openclaw/openclaw/compare/84e5f5d130867647cf4b3677e778084b69f3b989...v2026.10.5-beta.3 ; https://github.com/openclaw/openclaw/compare/84e5f5d130867647cf4b3677e778084b69f3b989...v2026.10.3 ; https://github.com/openclaw/openclaw/pull/170068
- **Half:** defect | **Confidence:** high

**What changed.** The legacy Telegram importer refreshed the mutation time of old pending spool messages, so months-old owner instructions could become actionable again on first startup after an update. Beta.3 classifies imports older than 24 hours as non-dispatchable stale tombstones, preserves original source bytes and import receipts, and emits one bounded warning. It intentionally forgoes genuinely unprocessed old instructions. The already-imported sweep was dropped: this repair does not clean every existing pending queue.

**Operator consequence.** Inspect Telegram pending work and the import warning when moving to beta.3. Do not present stable 10.3 as protected by this fix or assume already imported stale rows were retired. Verify inclusion in a stable release before relying on its importer, and review any older queued instructions separately.

**Frontier lens.** Durable bytes alone do not make durable authority. An old owner's instruction requires a time boundary when recovery would otherwise turn it into fresh work.

## 13. Beta device-join commands offer a persistent session host

- **Date:** 2026-10-10 merge, 2026-10-13 beta publication
- **Channel:** `preview-or-beta`, 2026.10.5-beta.3
- **Ancestry evidence:** a14032f93c4729181e4163f0ba485edf9c18518e is 27/0 behind beta.3 and not an ancestor of 10.3. Author checked the commit comparison and #168623's consent boundary.
- **Receipt:** https://github.com/openclaw/openclaw/commit/a14032f93c4729181e4163f0ba485edf9c18518e ; https://github.com/openclaw/openclaw/compare/a14032f9...v2026.10.5-beta.3 ; https://github.com/openclaw/openclaw/pull/168623 ; https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3
- **Half:** both | **Confidence:** high

**What changed.** The recommended CLI/Control UI join command now includes --service and --session-host, offering a background node service that can run agent sessions. A command-only service alternative remains and the UI shows the full consent flags. This is a changed suggestion for new joins, not silent activation of every existing node; session hosting remains a device-local choice in the pasted command and the runtime default is unchanged.

**Operator consequence.** Decide whether a joined device should persist in the background and host sessions before copying the suggested command. Use session hosting only inside the trusted shared Gateway infrastructure appropriate to that device. Stable 10.3 does not contain this suggestion change.

**Frontier lens.** One-paste enrollment removes manual service and host setup. Its authority is visible in the literal flags, so ease of use and deliberate consent can coexist.

## 14. TypeSafe becomes an external plugin with a local decision-model route

- **Date:** 2026-09-21 merge, 2026-09-23 first stable 2026.9.6
- **Channel:** `tagged-release`, separate @openclaw/typesafe package
- **Ancestry evidence:** 5acfb83d9fe84d5741343d85d5e3d99243bafd39 is 1067/0 behind 9.6 and 7612/0 behind 10.3, absent from 9.5. Author checked first-stable ancestry, tagged docs and the published 2026.9.6 plugin manifest: host and plugin API minimum >=2026.9.6.
- **Receipt:** https://github.com/openclaw/openclaw/commit/5acfb83d9fe84d5741343d85d5e3d99243bafd39 ; https://github.com/openclaw/openclaw/compare/5acfb83d...v2026.9.6 ; https://registry.npmjs.org/@openclaw%2ftypesafe/2026.9.6 ; https://github.com/openclaw/openclaw/blob/v2026.9.6/docs/plugins/typesafe.md ; https://github.com/openclaw/openclaw/blob/v2026.9.6/CHANGELOG/2026.9.6.md
- **Half:** capability | **Confidence:** high

**What changed.** TypeSafe leaves the core package for an official external installation while retaining its plugin id and compatible configuration. An explicitly configured loopback baseUrl can serve local System One decisions without a TypeSafe key or forwarding its hosted credential; omitted baseUrl retains hosted behavior. The plugin is disabled by default, and installation alone does not select a decision model or schedule background work. The tagged setup text still calls publication pending, but the versioned registry record establishes that @openclaw/typesafe 2026.9.6 was published and requires a compatible host/API.

**Operator consequence.** Account for a separate plugin package during upgrades. Choose the local or hosted decision endpoint explicitly; a model label alone does not select the endpoint. Enable/select the decision role only when needed. This is a concrete local-serving capability and distribution change, not a measured decision-quality or latency gain.

**Frontier lens.** A specialized decision adapter remains useful and separately deployable. That cuts against an indiscriminate claim that every specialized layer is being erased by general agents.

## 15. Incognito content is excluded from four diagnostic writers after 9.7

- **Date:** 2026-09-23 merge, 2026-09-30 first stable
- **Channel:** `tagged-release`, first 2026.9.7, retained at 10.3
- **Ancestry evidence:** 21aa89f744af426d1c9b1d5d7d40960abf1e7465 is 2993/0 behind 9.7 and 6233/0 behind 10.3, not in 9.6. Author checked the commit diff, #155595 and first-stable comparison.
- **Receipt:** https://github.com/openclaw/openclaw/commit/21aa89f744af426d1c9b1d5d7d40960abf1e7465 ; https://github.com/openclaw/openclaw/compare/21aa89f7...v2026.9.7 ; https://github.com/openclaw/openclaw/pull/155595
- **Half:** defect | **Confidence:** high

**What changed.** Enabled diagnostic writers could record Incognito model content. The 9.7 repair excludes it from cache traces, Anthropic payload logs, raw-stream logs and WebSocket event summaries while keeping live conversation delivery and content-free diagnostics. Existing logs are not deleted. The repair does not restrict ordinary tools, promise privacy from external providers or establish exclusion from every telemetry path.

**Operator consequence.** If content diagnostics were enabled before 9.7, review their retention and any retained Incognito content rather than assuming an upgrade erased it. Use a fixed version for the four named writers and retain the separate provider-data and tool-write decisions.

**Frontier lens.** A private-mode label needs an implementation boundary at each writer. Privacy review moves toward retained logs and external routes after the local content paths are repaired.

## 16. Memory-saving turns retain their persistence-only tool boundary

- **Date:** 2026-10-10 first stable 2026.10.1
- **Channel:** `tagged-release`, retained at 10.3
- **Ancestry evidence:** release cherry-pick 1a4c6b4d1a429ce152cb3ced1d87454ac19630b8 is 33/0 behind 10.1 and 228/0 behind 10.3. Author read its assembly-path diff and #166650, and checked release ancestry rather than the distinct main SHA.
- **Receipt:** https://github.com/openclaw/openclaw/commit/1a4c6b4d1a429ce152cb3ced1d87454ac19630b8 ; https://github.com/openclaw/openclaw/compare/1a4c6b4d1a429ce152cb3ced1d87454ac19630b8...v2026.10.1 ; https://github.com/openclaw/openclaw/blob/v2026.10.1/CHANGELOG/2026.10.1.md ; https://github.com/openclaw/openclaw/pull/166650
- **Half:** defect | **Confidence:** high

**What changed.** Hidden pre-compaction memory-saving turns could regain execution or MCP tools after selecting a memory-only surface, allowing unrelated project work while a user's request waited. 10.1 keeps the persistence restriction through host-tool collection, client/MCP assembly and final harness presentation. File-backed saves keep read and the append-only daily-memory writer; provider-backed saves keep read and the selected plugin's declared persistence/lookup tools. Normal foreground tooling remains available.

**Operator consequence.** Include this fixed assembly path when depending on background memory work staying within its role. A memory-saving label alone was not an enforcement boundary. The fix requires no configuration or state migration and is included in the 10.3 stable pin.

**Frontier lens.** More autonomous housekeeping expands useful work only if later tool assembly cannot quietly restore broader authority. The durable primitive is a restriction that survives composition.

## 17. Wider advisory databases published older OpenClaw issues during the window

- **Date:** 2026-09-22, 2026-09-26, 2026-09-29, 2026-10-05 disclosure/database publications; source fixes predate the window
- **Channel:** `tagged-release` for named fixed baselines; database publication is not a new software release
- **Ancestry evidence:** fbd330b7aa4a26726fa8468f0db2a23ada3843bd is in both 8.35 and 10.3; author reproduced 19689/0 at 8.35. Crosscheck confirmed fca04893 and 3bd8ec2b in 10.3 at 9635/0 and 14175/0; absent main SHAs at 8.35 do not settle squashed coverage. Author reread three global GHSAs, the iOS repository advisory and all five named dated NVD entries.
- **Receipt:** https://github.com/advisories/GHSA-g7fw-3gjp-g5hf ; https://github.com/openclaw/openclaw/commit/fbd330b7aa4a26726fa8468f0db2a23ada3843bd ; https://github.com/advisories/GHSA-m2g4-5ff5-4cf5 ; https://nvd.nist.gov/vuln/detail/CVE-2026-100538 ; https://github.com/advisories/GHSA-px74-p6x8-q327 ; https://nvd.nist.gov/vuln/detail/CVE-2026-100567 ; https://nvd.nist.gov/vuln/detail/CVE-2026-95815 ; https://github.com/openclaw/openclaw/security/advisories/GHSA-5j57-84cx-r295 ; https://github.com/openclaw/openclaw/commit/8361f3704dd5e151ff1325e62ff5de658b6c62e6 ; https://nvd.nist.gov/vuln/detail/CVE-2026-102806 ; https://github.com/openclaw/openclaw/commit/fca04893b5b337d2eb70a6ba41f03fc8e33eff83 ; https://nvd.nist.gov/vuln/detail/CVE-2026-102807 ; https://github.com/openclaw/openclaw/commit/3bd8ec2b39b5f9e80aef0973f7d17eadc745b8f8 ; https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
- **Half:** defect | **Confidence:** high

**What changed.** No new repository advisories appeared, but wider databases published records for already disclosed issues. Reviewed GHSA-g7fw-3gjp-g5hf on 5 October covers channel target-allowlist bypasses for @openclaw/msteams, feishu, matrix and googlechat, fixed at 8.1. Imported records on 26 September cover outbound attachments reading outside sender file policy (CVE-2026-100538) and remote browser-control DNS rebinding toward forbidden private addresses (CVE-2026-100567), both fixed at 8.1 and assigned different global GHSAs from the repository originals. CVE-2026-95815 on 22 September concerns iOS before 8.11 logging bearer deep-link keys that could authorize forged requests. CVE-2026-102806 and 102807 on 29 September cover sibling-sandbox media reads before 9.5 and read-scoped standalone MCP-app tickets invoking write tools before 9.4. These are new database events, not newly introduced defects or newly shipped fixes. Some imported CVE records lack package mappings; absence of mapping is not absence of a record.

**Operator consequence.** When scanners disagree, check the original GHSA, any CVE-linked global GHSA, the affected artifact/package and its installed mechanism. Do not waive all extended-stable alerts because three backports were named. An npm Gateway upgrade is not an iOS app upgrade; verify phone version separately and rotate potentially exposed deep-link keys. The global record and npm package matching are different checks.

**Frontier lens.** Disclosure and code move at different speeds. Human attention belongs on reconciling the installed artifact with a mapped mechanism, not counting advisory IDs as interchangeable new defects.

## 18. Stable repaired sandbox, revocation and credential-output gaps without new advisories

- **Date:** 2026-09-30 first stable sandbox/revocation fixes, 2026-10-10 other hardening, 2026-10-12 redaction fix
- **Channel:** `tagged-release`, all retained at 2026.10.3; extended-stable coverage not fully resolved
- **Ancestry evidence:** fa92bd54c449b71a2104c292af5c2fe1ce112567 and 08f5fb80f301d8236cadb8acc853d95566fd7f10 reach 9.7 and 10.3, not 9.6. Redaction release cherry-pick 6e84f49a is 126/0 behind 10.3. Crosscheck paginated 722 repository advisories: none published/updated inside the window, newest timestamp 2026-09-11T00:58:59Z.
- **Receipt:** https://github.com/openclaw/openclaw/commit/fa92bd54c449b71a2104c292af5c2fe1ce112567 ; https://github.com/openclaw/openclaw/commit/08f5fb80f301d8236cadb8acc853d95566fd7f10 ; https://github.com/openclaw/openclaw/pull/155964 ; https://github.com/openclaw/openclaw/issues/156098 ; https://github.com/openclaw/openclaw/pull/156106 ; https://github.com/openclaw/openclaw/pull/161480 ; https://github.com/openclaw/openclaw/compare/6e84f49a...v2026.10.3 ; https://github.com/openclaw/openclaw/blob/v2026.10.1/CHANGELOG/2026.10.1.md ; https://github.com/openclaw/openclaw/blob/v2026.10.2/CHANGELOG/2026.10.2.md ; https://github.com/openclaw/openclaw/security/advisories
- **Half:** defect | **Confidence:** high

**What changed.** 9.7 repairs two P0-labeled issues: trusted-proxy HTTP callers could have their mandatory sandbox skipped on new sessions, and registered background execution could continue after its operator lost access. 10.1 rejects NUL execution arguments, fails closed on unresolved peer credentials and prevents stale Codex sessions mutating successor workspaces. 10.2 repairs masking for credentials split across long-output chunks. All named fixes are in 10.3. No new repository advisory accompanies these in-window release repairs; the separate wider-database events in section 17 concern older disclosures.

**Operator consequence.** Use the current 10.3 pin rather than interpreting 9.7's two fixes as a complete current floor. Read versioned security/reliability release bullets even when the repository advisory list is quiet. Extended-stable's later-fix coverage and whether the corresponding bugs exist on its base require code-specific checks; absence from notes is not proof of absence.

**Frontier lens.** Long-running work needs revocation and output hygiene as much as permission at launch. The installation decision has to follow release content, not an advisory counter.

## 19. Workspace file tools use root handles while residual raw-path migration stays open

- **Date:** 2026-10-13 posture correction and source recheck; no new window introduction date asserted
- **Channel:** `tagged-release`, inspected at 2026.10.3
- **Ancestry evidence:** cc027149's validation repair is inherited by 8.35 and 10.3. Current operation-time owners and issue #114382 were read in the crosscheck, not inferred solely from ancestry.
- **Receipt:** https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/sandbox-paths.ts#L139-L210 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.read.ts#L1362-L1495 ; https://github.com/openclaw/openclaw/issues/114382 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/src/infra/system-run-approval-binding.ts#L553-L620 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/extensions/codex/src/app-server/sandbox-exec-server/sandbox-child.ts#L126-L180
- **Half:** both | **Confidence:** high

**What changed.** The previous blanket validation-time-only description was too broad. The path validator still checks before use, but shipped workspace-only reads and edits obtain fs-safe Root handles, and writes use rootHandle.write with within-root parent-symlink handling and a pre-mutation authority guard. Issue #114382 remains open for residual raw-path consumers and the validator, not as proof of a current escape through all shipped file tools. Complete atomic coverage was not established. Current exec approval also recomputes mutable operand digests before spawn and denies drift; the sandbox child owner escalates SIGTERM to SIGKILL, waits for reaping and throws if the tree survives. The inherited August mechanisms are present on extended-stable as well.

**Operator consequence.** Retire the claim that every workspace file operation is only validation-time hygiene. Preserve a narrower unresolved question: which residual consumers still validate then use a raw path, and whether they adopt operation-time containment. Require an owner-level code audit and replacement of those consumers before asserting complete coverage; an open issue or an old exploit alone does not settle it.

**Frontier lens.** Specialized filesystem and process controls remain load-bearing even as general agents improve. Removing a prompt refusal does not remove the need for operation-time authority checks.

## 20. Quick start shortens consent while usable AI access remains a prerequisite

- **Date:** 2026-10-13 posture recheck; observed path already present before this window
- **Channel:** `tagged-release`, inspected at 2026.10.3
- **Ancestry evidence:** consent code and locale message were crosschecked at 10.3. This is a source-path observation, not a fresh-machine or every-flow UI test.
- **Receipt:** https://github.com/openclaw/openclaw/blob/v2026.10.3/src/commands/onboard-guided-consent.ts#L50-L75 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/src/wizard/i18n/locales/en.ts#L322-L328 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/start/getting-started.md#L25-L38 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/audit-checks.md#L140-L147
- **Half:** both | **Confidence:** high

**What changed.** The specified Quick start path displays a short real-machine-access warning and automatically acknowledges its risk; Custom retains the full note and confirmation. The tagged getting-started page supports a one-prompt flow when usable AI access already exists. This does not establish every fresh-machine UI or the absence of later prompts. Cross-agent default audit severity is contextual, and the audit catalog has no dedicated allowBots entry. A short start is not evidence that each widened default has been shown individually.

**Operator consequence.** Owners wanting the full consent step can choose Custom. For shared Gateways, inspect bot admission, session visibility, messaging, delegation and Workshop maintenance explicitly rather than expecting the short Quick start warning to enumerate them. A recorded first-run session of each flow would settle what later UI actually shows.

**Frontier lens.** Setup complexity has been absorbed for the user. Authority visibility still needs a deliberate surface; removing clicks can save attention or merely move the decision into configuration.

## Prior claims re-checked

Every original claim remains in the draft's frontmatter, active only when retained and supported. Retiring a claim below can mean dropping it from the current read rather than proving it false.

- exec-fix-stable and extended-stable-unfixed: retire the original exclusive-channel claims; replace with section 1's both-line inheritance and section 19's current implementation check. July 7.35 remains unchanged.
- workspace-boundary-fix-stable: retire its stable-only and blanket validation-time formulation; replace with sections 1 and 19. Complete residual coverage remains open.
- sandbox-stop-fix-stable: update to 2026-10-13; the mechanism survives current owner checks and now exists on both lines. Retire the old channel-exclusive presentation if the draft uses a new combined claim.
- advisory-batch: the historical 75-item disclosure remains, but remove a one-upgrade-target reading for all core, plugin and mobile artifacts. Section 17 distinguishes package mappings and old fixes from new database events.
- subagent-security-boundary-docs, per-agent-message-restrictions and per-sender-tool-policies: retained controls, current docs rechecked at 10.3. One Gateway remains one trust domain; deny/restrict sessions_spawn and allowAgents and use sandbox require when needed. Source: section 8 receipts plus https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/tool-permissions.md#L115-L121.
- skill-archive-upload-gated: documented default false, with enabled uploads handled as trusted operator.admin operations; independent of autonomous Workshop edits. https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-extensions.md#L145-L172.
- memory-wiki-scope-tightening: wiki.ingest remains operator.admin in constants and registration. Separate Obsidian-search write scope was not re-read. https://github.com/openclaw/openclaw/blob/v2026.10.3/extensions/memory-wiki/src/gateway.ts#L34-L37 and https://github.com/openclaw/openclaw/blob/v2026.10.3/extensions/memory-wiki/src/gateway.ts#L243.
- gateway-auth-ratelimit-default-on: ten failures in 60 seconds, then a five-minute IP/credential-scope lockout. Local CLI/loopback is exempt, but browser-origin loopback requests remain limited. https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/rate-limiting.md#L20-L85.
- skill-workshop-and-stable-reliability: change the recommendation; approvalPolicy pending alone does not gate autonomous auto mode (section 7). No automatic rollback snapshot on that path.
- defaults-widened-reach: current documented defaults survive, widened further by bot admission and newly supported chat setup (sections 2, 3 and 6). Default Full Access predates the window.
- operation-bound-grants: holds for the documented named automation path, not every approval surface (section 8).
- release-gates-waived: holds, with seven current stables and distinct omissions (section 5).
- upgrade-breaking-changes: exact Node range excludes Node 25 (section 11); 9.6 requires github in an explicit plugin allowlist for GitHub previews; beta transforming hooks need renewed approval (section 4). https://github.com/openclaw/openclaw/blob/v2026.9.6/CHANGELOG/2026.9.6.md.
- one-prompt-install: retained only with usable AI access and the specified source-path consent limits (section 20).
- memory-dreaming-cap, voice-channel-allowlist, codex-auto-plugin-approvals and clawhub-skill-provenance-surfaced: original harvest re-read the documented budget, channel allowlist, destructive-action options and skills verify command, but these are dropped from the shorter current posture, not asserted false. https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/concepts/dreaming.md#L79 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/discord/voice-channels.md#L169 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/plugins/codex-native-plugins.md#L517-L518 ; https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/skills.md#L53-L55.
- channel-recovery-self-healing, live-exec-output-bounded, openai-cli-auth-default-shift, scoped-compaction-preservation, pre-dispatch-sender-allowlists, browser-snapshot-ssrf-policy, system-event-text-sanitization, external-content-wrapping: current behavior not established; moved to leads, not carried as holds.
- wcag-aa-control-ui-stable: the repair remains in history; current conformance was not assessed. Retire the current holds verdict.
- approved-exec-still-unreleased, sandbox-stop-success-while-children-run and cli-onboarding-wayfinding: already retired; retain entries as retired.

## Carry-forward answers

1. Extended-stable containing ab5611f0: settled by 8.33 through 8.35 inheritance; no need to wait for a July backport.
2. Complete race-safe filesystem adoption: unresolved only for residual consumers and full coverage, not a blanket denial of the shipped fs-safe Root operations (section 19).
3. More release qualification omissions: yes, all seven stable records name a waiver, an unsupplied lane or a skipped APK build, with those categories kept separate (section 5).
4. One-prompt authority disclosure: the specified short warning/auto-acknowledgement path is established; every fresh-machine flow and possible later prompt was not tested (section 20).

## Cross-watchlist touchpoints

- codex: managed runtime/model integration and bundled sandbox child owner (sections 1, 10, 19). The hook fix concerns OpenClaw's tool approval ordering, not a demonstrated defect in standalone Codex. Native compaction and memory-saving authority are comparison primitives, not evidence of matching provider defaults.
- claude-code: Claude CLI sessions calling registered OpenClaw MCP tools appear in the tagged 10.3 changelog; the OpenClaw route's permissions are not proof of independent Claude Code's default permissions. https://github.com/openclaw/openclaw/blob/v2026.10.3/CHANGELOG/2026.10.3.md.
- github-copilot-cli: the OpenClaw Copilot adapter is explicitly touched by Tool Search and persistence-only tool assembly (sections 6 and 16). This is a backend/integration touchpoint to compare, not proof that GitHub's standalone CLI shares the implementation or the bug.
- pi-coding-agent: the 10.3 manifest depends on @earendil-works/pi-tui 0.86.1. This is a TUI dependency touchpoint, not evidence that OpenClaw imports Pi's reasoning loop; package lineage needs checking before a stronger cross-profile comparison. https://github.com/openclaw/openclaw/blob/v2026.10.3/package.json.

## Leads not promoted

- Original numbered section 5's claim that the September batch had no global database record was REFUTED and removed. Seventy-four original IDs returning 404 in the crosscheck did not erase the reviewed original ID or different CVE-linked global IDs. The supported release repairs were reauthored separately in section 18; wider records are in section 17.
- Ancestry-only recovery, output bounds, compaction preservation, sender filtering, browser SSRF enforcement, event sanitization and content wrapping remain unverified as current behavior. The old OpenAI CLI authentication default is untraced. No current WCAG assessment was performed.
- Full Discord voice speaker-owner backport coverage, extended-stable coverage of later HTTP/revocation/redaction/media/MCP fixes, and every residual filesystem consumer need code-owner checks. No absence is inferred from missing note bullets or original SHAs.
- Exact npm selector movement times are unavailable. Today's selector observation is not a timestamped historical switch.
- X-channel live round trip, mobile store availability, Windows Hub releases, every first-run consent flow, package tarball/tag identity and actual provider sessions were not exercised.
- Writing feed had no OpenClaw/ClawHub/maintainer item; X discovery was signed out. No social post was quoted or used as a product receipt. Third-party latest-version guides remained stale and were not used. An out-of-window AhnLab/CVE-2026-30741 lead and secondary OpenClaw 2.0 framing were not promoted.
- Release-evidence links returned 404 in the original pass; their contents were not relied on. Dist-tag workflow listings lacked selector-change inputs. A changed MIT LICENSE notices pointer was not a license conversion. The 9.7 managed-worktree highlight was already included in baseline 9.5 and is not a new window capability.

## Surfaces checked

Original harvest: repository identity, release/API/npm ledger, security advisories, PRs/issues, tagged source/docs and read-only clone comparisons. Crosscheck: all 722 repository advisories, all 75 September original IDs, NVD dated query, 38 cited 10.2 paths re-fetched at 10.3 (37 identical; package.json changed), release cherry-pick comparisons and targeted current owners. Author: GitHub release 10.3 and beta.3; tagged 10.3 changelog; M1 credential/memory ancestry; M2/M3 PRs and full-SHA stable/beta comparisons; TypeSafe merge, tagged setup, plugin version manifest and first-stable ancestry; Incognito diff/PR/ancestry; memory-assembly diff/PR/release ancestry; named global/iOS advisories and five NVD records; exact stable/extended Node manifests and registry publish times; current permission, compaction and inspection docs. NVD dated keyword query returned 88 matches; crosscheck classified 73 links to September advisories plus two additional core records, excluding 13 adjacent/unrelated records. Counts are discovery observations, not 88 new software defects.

## Crosscheck applied

Applied eight CORRECTED numbered sections, retained two VERIFIED sections, and deleted original REFUTED section 5. There were zero UNVERIFIABLE numbered sections. Corrected the closing install/ledger to stable 10.3 and published beta.3; fixed seven-release/44-marker counts, Node ranges, audit wording, permission boundaries, compaction scope/opt-outs, Android claims, preview limits, filesystem coverage and local-loopback rate-limit scope. Added all seven verified misses after checking primary receipts (sections 11 through 17), restored only the supported release-repair half as a separate section 18, and gave the consequential filesystem and Quick start corrections their own sections 19 and 20. Renumbered consecutively. Ancestry-only behavioral holds remain leads; no refuted database-absence or unverified runtime guarantee remains a promoted fact.
