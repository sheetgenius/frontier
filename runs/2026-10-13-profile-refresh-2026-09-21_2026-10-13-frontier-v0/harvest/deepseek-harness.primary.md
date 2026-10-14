---
schema_version: bitter.frontier_harvest.v0
provider: deepseek-harness
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/deepseek-harness.yml
channels_present: [preview-or-beta, docs-only]
window_volume: 8 in-window GitHub release objects (4 rc, 4 alpha), 1 tag without a release object, no stable; 24 numbered observations after crosscheck, including 6 advisory publications
lane: primary sources, corrected write-up packet
---

# Harvest: deepseek-harness (primary sources)

Window observations were recorded on 2026-10-13. The independent crosscheck and author's receipt rechecks took place on 2026-10-14; neither is backdated. Tagged code establishes historical implementation, while registry tags and Desktop feeds remain dated mutable observations. No cloned code, package, exploit, installer, or runtime was executed during the author pass. No npm installation or site build was run.

Identity: deepseek-ai/deepseek-harness, MIT, default branch master. Public merge messages name PRs whose endpoints returned 404; this establishes unavailable public review history, not the exact private development location or a confirmed mirror arrangement. Issues are disabled and Discussions is the public reporting surface. Star and topic-search counts are not adoption evidence.

Current pins: dsh-v0.2.0-rc.2 = 639ed015397290b3745d163aafe02ffee4aa3f84; dsh-v0.2.1-alpha.2 = d743267388641bc76f17c45ce8b4c231aed1d32c. Baselines: dsh-v0.1.5-rc.2 = fb2c4b9e698e30edb738bca4cf0618587db7d203; dsh-v0.1.6-alpha.2 = ddefc45fbc7f8e46dd73185e68295696d1297887. All harness tags discussed here are prereleases. Advisory publications are docs-only events, not releases or proof of a fix.

## Install today

- Newest stable: none. The research snapshot has 27 rc/alpha tags, 26 GitHub release objects all marked prerelease, and 31 npm CLI versions all prerelease. PyPI SDK and runtime-bin stop at 0.1.5rc1, published 2026-09-10.
- The README command npx @deepseek-ai/dsh web resolves npm latest = 0.2.0-rc.2, published 2026-09-29T09:56:27Z. Dist-tags recorded on 2026-10-13: latest and next = 0.2.0-rc.2; alpha = 0.2.1-alpha.2. npm latest is observed at 0.2.0-rc.2. The checked release path publishes rc versions to next; the actor, mechanism and exact time of the latest promotion are unrecorded.
- Newest prerelease: 0.2.1-alpha.2, npm published 2026-10-09T08:18:00Z, annotated tag at 09:40:56Z, GitHub release at 11:09:26Z. master equals that commit, 935 ahead and 0 behind the newest rc. Nothing observed is main-only.
- Desktop: feeds recorded on 2026-10-13 name 0.2.0-rc.2 for macOS arm64/x64 and Windows x64. The pinned packaging design describes signed resources and a nightly-named feed, polling with manual download/restart decisions and support for mandatory policy. Installer signatures and the live blocking-policy endpoint were not verified. No Linux installer was identified.
- Pinning the CLI version does not freeze dependencies expressed as ranges. Commit a reviewed lockfile; the current rc still permits vendor patch updates. Current CLI internal components are exact-version requests; Cordis is ~4.0.4. Bare component latest tags can be stale (section 6). No exact installed graph, hoisting layout, or duplicate-Cordis outcome is certified here.
- Optional and off on the rc: Auto review, Schedule, Agent Teams and voice input. Ralph is disabled; the agent-facing plugin_manager tool is disabled outside Creator mode. The Web terminal and Plugins page are present. Session-log upload and package inventory are enabled; Desktop analytics is separate (sections 2 and 3).
- Bounded evaluation recommendation: use @deepseek-ai/dsh@0.2.0-rc.2 with a reviewed lockfile and an outer disposable VM; disable session-log-deepseek and plugin-package-inventory-deepseek before the first request and set DSH_TELEMETRY_DISABLED=1. Keep the Web listener on loopback and Auto review/Schedule off. Set maxConsecutiveWakes explicitly if unattended cost must be bounded. Loopback is a network exposure choice, not an independent agent/operator boundary (section 18).

## Release ledger

GitHub publication timestamps below are UTC in 2026, except the explicitly identified tag-only row. Counts were checked by the crosscheck against the stated comparison pairs. The 0.1.7-alpha.1 branch is 2986 ahead and 3 behind 0.1.5-rc.3; do not describe every tag as a fast-forward of the chronologically preceding tag.

| Tag | GitHub publication | Ahead / behind against stated predecessor | Ahead / behind against 0.1.5-rc.2 | npm publication |
|---|---|---|---|---|
| dsh-v0.1.5-rc.2 (baseline) | 2026-09-10T15:09:34Z | 4 / 0 vs 0.1.5-rc.1 | 0 / 0 | 2026-09-10T14:57:10Z |
| dsh-v0.1.6-alpha.2 (baseline) | 2026-09-17T13:30:16Z | 887 / 0 vs 0.1.6-alpha.1 | 1687 / 0 | 2026-09-17T13:52:10Z |
| dsh-v0.1.5-rc.3 (tag only) | tag commit 2026-09-22T05:26:23Z | 3 / 0 vs 0.1.5-rc.2 | 3 / 0 | 2026-09-22T05:55:20Z |
| dsh-v0.1.7-alpha.1 | 2026-09-22T06:16:27Z | 1299 / 0 vs 0.1.6-alpha.2 | 2986 / 0 | 2026-09-22T06:23:31Z |
| dsh-v0.1.7-alpha.2 | 2026-09-22T15:49:49Z | 162 / 0 vs 0.1.7-alpha.1 | 3148 / 0 | 2026-09-22T16:08:55Z |
| dsh-v0.1.7-rc.1 | 2026-09-23T13:30:24Z | 156 / 0 vs 0.1.7-alpha.2 | 3304 / 0 | 2026-09-23T13:44:12Z |
| dsh-v0.1.7-rc.2 | 2026-09-24T14:10:21Z | 346 / 0 vs 0.1.7-rc.1 | 3650 / 0 | 2026-09-24T14:18:11Z |
| dsh-v0.2.0-rc.1 | 2026-09-28T12:36:21Z | 261 / 0 vs 0.1.7-rc.2 | 3911 / 0 | 2026-09-28T12:34:03Z |
| dsh-v0.2.0-rc.2 (latest/next) | 2026-09-29T09:42:36Z | 187 / 0 vs 0.2.0-rc.1 | 4098 / 0 | 2026-09-29T09:56:27Z |
| dsh-v0.2.1-alpha.1 | 2026-10-03T06:42:19Z | 266 / 0 vs 0.2.0-rc.2 | 4364 / 0 | 2026-10-03T04:53:22Z |
| dsh-v0.2.1-alpha.2 (alpha/master) | 2026-10-09T11:09:26Z | 669 / 0 vs 0.2.1-alpha.1 | 5033 / 0 | 2026-10-09T08:18:00Z |

The parent's closing master commit 08b73684 is an ancestor of alpha.2, with 2066 later commits. The tag-only rc.3 is an ancestor of 0.1.7-rc.1, which is 3301 ahead and 0 behind it. Desktop feed release dates are 2026-09-29T10:18:12Z (mac-arm64), 10:21:51Z (mac-x64) and 10:35:27Z (win-x64). These feeds are mutable, not archived release-history proof.

## 1. npm latest is 0.2.0-rc.2; every distribution remains prerelease

- **Date:** 2026-09-29 (rc release); dist-tags observed 2026-10-13, promotion time unknown
- **Channel:** preview-or-beta
- **Ancestry evidence:** 26 GitHub releases all prerelease, 27 rc/alpha tags, 31 prerelease npm CLI versions. The newest rc is 4098 ahead / 0 behind 0.1.5-rc.2. scripts/release/families.ts at 639ed015 L355-361 sends rc publication to next. The current master is alpha.2, 935 ahead / 0 behind the rc. Desktop packaging chooses nightly-mac.yml/nightly.yml; its README L399-419 describes polling, download/restart decisions and optional mandatory-policy enforcement.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2, https://registry.npmjs.org/@deepseek-ai%2Fdsh, https://api.github.com/repos/deepseek-ai/deepseek-harness/commits/master, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/scripts/release/families.ts#L355-L361, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/apps/desktop/README.md#L399-L419
- **Half:** both | **Confidence:** high on release flags and recorded channel observations; promotion history unverified

**What changed.** The README's npx @deepseek-ai/dsh web now resolves to the 0.2 rc line rather than 0.1.5-rc.2. npm latest is observed at 0.2.0-rc.2. The checked release path publishes rc versions to next; the actor, mechanism and exact time of the latest promotion are unrecorded. Desktop feeds name the same rc, and the vendor documents signed packaging, update polling with manual decisions, and mandatory-policy support. No installer signature or active blocking policy was observed. All distributions remain prerelease.

**Operator consequence.** Pin @deepseek-ai/dsh@0.2.0-rc.2 and a reviewed lockfile rather than relying on latest. Treat the migration as breaking. Desktop's update-policy design needs separate fleet review; polling does not mean automatic installation on every check. A first non-prerelease version would change the channel answer, not by itself certify safety.

**Lens.** Distribution became easier; controlling the version and migration now demands deliberate operator policy.

## 2. Session-log upload is enabled in the default rc install; the telemetry environment switch does not disable it

- **Date:** 2026-09-23 (first rc, 0.1.7-rc.1); retained in 0.2.0-rc.2
- **Channel:** preview-or-beta
- **Ancestry evidence:** session-log-deepseek enabled default is false at 0.1.5-rc.2/rc.3, true at 0.1.6-alpha.2 and 0.1.7-rc.1, and true at both current heads. The base bundle mounts it without an override. At 639ed015 L193-214 the preparation loop takes a bounded contiguous prefix of serializable unaccepted events; default maxBytes is 8 MiB. Successful HTTP responses advance the local acceptance watermark. profile-context.ts L39-55 targets session-telemetry-otel, not this plugin. DeepSeek-adapter request extensions lack a destination check. The account credential has a separate origin restriction. Package inventory remains enabled; feedback OTel uses dsh-otel-collector.deepseeksvc.com; Desktop mounts product-analytics separately.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/src/index.ts#L51-L77, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/README.md#L33-L47, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/app-boot/src/profile-context.ts#L39-L55, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/adapter.ts#L106-L112, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/product-analytics/README.md#L12
- **Half:** defect | **Confidence:** high on source; no traffic capture

**What changed.** The earlier alpha-only upload default reached the rc line and the default npm install. Eligible requests through the DeepSeek adapter can include a bounded contiguous prefix of unaccepted session events, with an 8 MiB default cap; successful HTTP responses advance the local acceptance watermark. Re-enabling resumes the backlog, including events recorded while disabled. Event headers include cwd, and the prepared data can include tool results and log-only events. An ineligible Session or oversized/unserializable first event can omit the extension. DSH_TELEMETRY_DISABLED affects a different plugin.

**Operator consequence.** Before the first request, set session-log-deepseek enabled: false, disable plugin-package-inventory-deepseek, and set DSH_TELEMETRY_DISABLED=1; confirm the composed configuration with --dump-config. Do not later re-enable upload on a Session whose backlog must stay local. DeepSeek-adapter baseURL relays receive the extension too; pi-ai/custom-provider routes do not use this extension. Review Desktop product-analytics separately, because it has no user-facing switch. Do not infer unrestricted account-token forwarding from the log-extension destination behavior.

**Lens.** The default puts a new data decision at installation time. Any inference about the lab's motive remains an inference, not a product fact.

## 3. The Web terminal and live plugin manager reach rc; optional Auto review runs allowed calls with Full access

- **Date:** 2026-09-23 (Web terminal/manager), 2026-09-24 (CLI includes Auto review)
- **Channel:** preview-or-beta
- **Ancestry evidence:** Terminal and manager rows absent at 0.1.5-rc.2, present in 0.1.7-rc.1 and the current rc; Auto review is included from 0.1.7-rc.2 but optional/off. Terminal README L30 gives OS-user rights independently of the agent sandbox. Plugin Manager README L31 states installed Host code runs in-process outside the workspace sandbox; its protection covers its own management components. The ordinary approval row at base L245-248 remains replaceable; architecture.md L11-39 describes no privileged core. Base/Web enable hmr; headless L33-34, sdk-app L24-25 and acp-app L23-24 disable it.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/api/terminal-controller/README.md#L30, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/README.md#L31, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/experimental/auto-review/README.md#L58-L62, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/architecture.md#L11-L39, https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1
- **Half:** both | **Confidence:** high on source; not probed

**What changed.** The rc Web surface now includes an OS-user terminal and a live installer for unsandboxed in-process bundles, whose patches can replace the approval row. Auto review is distributed as an optional bundle. Under Auto's usual ask policy, a denial may request human approval if later listeners do not deny or cancel it; under never, the denial is final. Allowed calls use Full access. Unloading Auto moves live Auto Sessions to Full access with never. The base/Web composition enables configuration reload; headless, SDK and ACP explicitly disable it, and custom profiles may override it. Activation failures can leave partially applied plugin changes; parse failures preserve the previous configuration.

**Operator consequence.** Treat the Plugins page as an admin console and inspect each bundle's patches, including overrides of approval, permission and sandbox rows. Move live Auto Sessions back to Workspace Write before unloading the reviewer. Inspect --dump-config after changes and after an activation failure; a failed parse is a different case. An operator cookie gives access to a user-level terminal, but section 18 changes who can obtain that authority.

**Lens.** Less per-call approval moves judgment to bundle admission and permission transitions. A replaceable model reviewer is not a containment boundary.

## 4. Scheduled reminders are framed as user messages after an untrusted-content instruction was removed

- **Date:** 2026-09-29 (0.2.0-rc.2)
- **Channel:** preview-or-beta; Schedule optional/off on rc, tools enabled in alpha Web Standard
- **Ancestry evidence:** af39300572bf4494370a1d0be19ce3c1ff330d36, merge 511a62cd1b26977e4cf1a3319f78683c1ff6d055, absent from 0.2.0-rc.1 and contained in rc.2 and both 0.2.1 alphas. domain.ts uses the new framing in both renderers. The decision note acknowledges model-authored prompts can carry external content and accepts the residual user-origin risk. The alpha Standard preset enables tool-schedule; this does not describe every custom or Minimal profile.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/commit/af39300572bf4494370a1d0be19ce3c1ff330d36, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/.agents/notes/implemented/architecture/2026-09-24-scheduled-message-framing.md#L15, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/bundle/web-app/presets/standard.patch.yml#L35-L36
- **Half:** defect | **Confidence:** high on code and decision text; exploit untested

**What changed.** Due reminders now use the framing "This is a scheduled message from the user" instead of the instruction to present reminder text as untrusted content. The model can write reminders after reading web pages, files or command output. The source records the risk of that text arriving under user-origin framing; no successful prompt-injection exploit is claimed.

**Operator consequence.** Leave Schedule off when that trust conversion is unacceptable. If enabled, inspect reminder text before it fires. Alpha Web Standard enables its tools by default; disable tool-schedule there if needed. The decision note says a demonstrated injection would trigger reconsideration of the removed clause.

**Lens.** Resuming work without a human re-prompt saves serial attention, but external text can return with stronger framing.

## 5. Windows delete confinement improves in 0.1.7; workspace Low labels persist and require module revocation

- **Date:** 2026-09-22 (alpha.1); first rc 2026-09-23 (0.1.7-rc.1)
- **Channel:** preview-or-beta
- **Ancestry evidence:** d5ad3baeb5d531e31da5e586c3ec3ebedd825169, merge eb7d3af91ce0c5aaa3df0d1e62f4900ea4d4371c, absent from 0.1.5-rc.3/0.1.6-alpha.2 and contained from 0.1.7-alpha.1 and rc.1. The commit describes deletes outside the workspace under both confined modes where ambient ACL rights allowed them. README L128-129 describes standing directory changes and the module's revocation path. SAFETY.md is unchanged from the old rc: not security-audited and isolation not guaranteed. No matching Windows-delete advisory was found in the checked sources; that negative result is not a claim that the product has no advisories.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/commit/d5ad3baeb5d531e31da5e586c3ec3ebedd825169, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-windows-acl/README.md#L125-L130, https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/SAFETY.md
- **Half:** both | **Confidence:** high on vendor tests and documentation; no Windows reproduction

**What changed.** The vendor's fix confines Windows deletes using Low-integrity execution and workspace security-descriptor changes. Workspace Low labels and access entries persist after DSH exits by design; cleanup must use the ACL module's revocation path. Manual icacls cleanup of the derived SID can fail. A standing Low label broadens access for other Low-integrity processes while it remains. Discretionary permissions still matter; a Low label alone is not universal write permission. No matching Windows-delete advisory was found in the checked sources.

**Operator consequence.** Move Windows evaluations off 0.1.5-rc.x/0.1.6-alpha.x to the current rc and review what directories receive grants. Avoid granting a home directory, drive root or install directory as a writable workspace. Use the documented module revocation path for cleanup rather than calling the changes irrevocable. Keep an outer disposable environment around the evaluation, as SAFETY.md recommends.

## 6. A CLI version pin does not freeze ranged dependencies in DeepSeek's vendored Cordis stack

- **Date:** 2026-09-22 (vendor releases and 0.1.5-rc.3)
- **Channel:** preview-or-beta; package manifests and registry history
- **Ancestry evidence:** 0.1.5-rc.2 requests dsh component ^0.1.5-rc.2 and Cordis ^4.0.2. 943af81a185ea4d70eda2b36598938857b1f851b pins vendor dependencies in rc.3. At 639ed015 internal CLI components are exact, Cordis ~4.0.4, schemastery ~3.18.4 and loader ~1.0.5. vendor/README.md identifies the cordiverse/cordis core snapshot 56b3d4f7 and DeepSeek-owned modifications/publication, including eager non-transactional Loader changes. Cordis 4.0.3/4.0.4 published on 2026-09-22, alpha.1 on 2026-10-03; alpha.2 published on 2026-10-14 is outside the window. Harness alpha.2 requests pi-ai ^1.0.2, which permits registry version 1.2.0 published 2026-10-12T23:01:40Z.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/commit/943af81a185ea4d70eda2b36598938857b1f851b, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/vendor/README.md#L5-L40, https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.1.5-rc.2, https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.2.0-rc.2, https://registry.npmjs.org/@earendil-works%2Fpi-ai
- **Half:** both | **Confidence:** high on manifests; no installed-tree certification

**What changed.** The 0.2 CLI requests its internal components at exact versions while intentionally permitting selected vendor patch updates. Pinning the CLI version does not freeze dependencies expressed as ranges. Commit a reviewed lockfile; the current rc still permits vendor patch updates. DeepSeek source-vendors, modifies and publishes Cordis from the harness repository. The alpha pi-ai range permits compatible later versions; that is not an observed installation result.

**Operator consequence.** Replace the prior version-string-only advice with a reviewed lockfile and reproducible install procedure. Record resolved Cordis and pi-ai versions in evaluation baselines. Review DeepSeek's vendor changes when a plugin-lifecycle defect appears; its framework patch train can change a fresh install without a new harness tag. Do not claim exact package totals, duplicate copies or hoisting from manifests alone.

**Lens.** The durable plugin contract has an owner and its own release policy. Composability does not remove that dependency decision.

## 7. Alpha.2 rejects wildcard Web binds and adds native TLS; rc still permits wildcard configuration

- **Date:** 2026-10-03 (public URL support); 2026-10-09 (concrete binds and native TLS)
- **Channel:** preview-or-beta; new listener protections alpha-only
- **Ancestry evidence:** At 639ed015 the schema permits 127.0.0.1 or 0.0.0.0, although startup refuses the wildcard CLI flag. Alpha.2 rejects unspecified IPv4/IPv6 addresses at schema load. cb9a590c86d90948989247863bd921261bc0350b is absent from rc.2 and alpha.1, contained in alpha.2. Cookies become TLS-aware; RPC admission still checks Host/Origin then cookie, without a loopback exemption. Cookie max age remains 30 days. The public-deployment guide distinguishes advertised URL, Host fence, listener exposure and identity.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/host/webserver/src/index.ts#L127, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/host/webserver/src/index.ts#L262-L268, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/bundle/web-app/src/startup.ts#L64-L70, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/docs/user/guide/public-deployments.md#L27-L35, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112
- **Half:** both | **Confidence:** high on source; no listener probe

**What changed.** The default rc retains a configuration path to an all-interface listener and automatic LAN host trust; alpha.2 replaces it with concrete-interface binds and native TLS. Public URL support arrived in alpha.1. Both heads still use signed-cookie authentication, but that fact does not isolate the signing material from a same-user command (section 18).

**Operator consequence.** On the rc, remove webserver host: 0.0.0.0 from all composition layers and forward loopback through SSH for remote access. Treat the printed token-bearing URL as a credential. Alpha's supported remote-listener path adds configuration and migration work (section 21); TLS protects transport, not the inner agent/operator boundary.

## 8. Account-funded model routes and bundled Desktop CLI reduce setup work

- **Date:** 2026-09-24 (account route); 2026-09-29 (Desktop CLI bundling)
- **Channel:** preview-or-beta
- **Ancestry evidence:** Both deepseek-account and llm-deepseek-account rows present from 0.1.7-rc.2. The credential provider uses platform.deepseek.com and api.deepseek.com; system-browser OAuth callback checks state and S256 PKCE rather than RPC-cookie authentication. Grants persist in the local credential store. Release notes distinguish account-funded/API-key model entries and account-route web search without an additional key. Desktop documentation describes the exact bundled dsh runtime and a managed CLI command that survives application removal.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.2, https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/credentials/deepseek-account-platform/README.md#L41, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/architecture.md#L51-L55, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/apps/desktop/README.md#L27-L31
- **Half:** capability | **Confidence:** high on route and packaging contracts; paid tasks and installer contents untested

**What changed.** The current rc supports browser sign-in and account credit through separate account-funded model entries, plus account-route web search without an extra key. Desktop's documented package includes the harness runtime and a managed dsh command. This is supported setup behavior, not evidence that an account had credit or that a paid task succeeded.

**Operator consequence.** Choose the billing/model entry deliberately and treat the local credential store as secret material. The OAuth callback bypasses RPC cookies but validates state and PKCE; do not describe it as unprotected. Remove the managed dsh command before uninstalling Desktop. Account-route requests still use the session-log extension in section 2.

## 9. The rc upgrade rejects protocol configs and migrates settings, presets, logs and plugin APIs

- **Date:** 2026-09-23 through 2026-09-29
- **Channel:** preview-or-beta
- **Ancestry evidence:** 0.1.7-rc.1 notes cover Messages-only official adapter, E2B removal, ptc-runtime rename, workflow-ptc, agent/created, sandboxed separate Node processes, Session V4, one-time settings.yaml import, preset bundles, token-based spill policy and compatibility checks. config.ts L206-207 rejects protocol; the public endpoint is api.deepseek.com/anthropic. Base selects deepseek-official/deepseek-flash; models.ts labels it DeepSeek-V41-Flash. pi-ai 0.87.1 catalog changes reach rc.2. Runtime-invariant/export removal and stats split remain alpha-only.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/config.ts#L206-L207, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/models.ts#L8-L9
- **Half:** defect | **Confidence:** high on notes and protocol check

**What changed.** Former alpha migrations reach the default rc. The official DeepSeek adapter is Messages-only and refuses a protocol key. Settings move into profile plugin configuration, presets become bundles, logs become V4 and plugin-facing APIs change. The default model remains deepseek-flash, labeled DeepSeek-V41-Flash; protocol compatibility did not remain unchanged.

**Operator consequence.** Back up DSH_HOME, remove protocol and obsolete Chat Completions baseURL overrides, migrate custom settings/presets and plugin APIs, and reselect removed catalog model IDs. Use --dump-config and --dump-config-schema for the composition review. Compatibility checks require reviewing old plugins, not assuming every old plugin necessarily fails. Pin the model as well as the dependency tree for comparisons.

## 10. Ralph is disabled; headless resume and model-declared tool changes reach rc

- **Date:** 2026-09-23 through 2026-09-29
- **Channel:** preview-or-beta
- **Ancestry evidence:** Base tool-ralph row is disabled from 0.1.7-rc.1; its comment distinguishes worker self-report from independent evaluation. Headless --json and --session-id are absent at 0.1.5-rc.2, present from 0.1.6-alpha.1 and rc.1. Release notes support SSH remote workspaces, MCP resources, background jobs, browser/Computer Use experiments and 8 live children/depth 1 defaults. 0.1.7-rc.2 supports dynamic tool changes preserving KV cache when the configured model declares support. Timed questions are opt-in; shipped schemas are blocking and a timeout is never approval. Public web_fetch still needs no per-call confirmation.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/base/cordis.patch.yml#L440-L449, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/headless/src/startup.ts#L43-L44, https://github.com/deepseek-ai/deepseek-harness/blob/fb2c4b9e698e30edb738bca4cf0618587db7d203/packages/bundle/headless/src/startup.ts, https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.2, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/interaction/tool-ask-user/README.md#L30-L44, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/subsystems/web.md#L129-L131
- **Half:** capability | **Confidence:** high on code/contracts; vendor-stated for unprobed runtime capabilities

**What changed.** Ralph remains implemented but is disabled; the documented distinction is that completion is the worker's self-report, not independent evaluation. Headless NDJSON/resume and the previously alpha-only remote-work capabilities now have rc support. Cache-preserving dynamic tool changes depend on the model/API declaring support and a compatible adapter, not common lab ownership. Alpha.2 also documents these capabilities on pi-ai routes.

**Operator consequence.** Use headless --json on the current rc, correcting the old recommendation at 0.1.5-rc.2. If re-enabling Ralph, add an independent completion check. Timed questions allow independent work to continue but do not grant approval. Review the separate loss of the background-wake cap in section 19.

**Lens.** Resumption and model-aware tool presentation are reusable primitives. Neither proves better model reasoning or makes independent evaluation dispensable.

## 11. Alpha adds rival-harness catalog bundles and a shared global instruction chain

- **Date:** 2026-10-03 (Mods experiment); 2026-10-09 (catalog and shared instructions)
- **Channel:** preview-or-beta; new catalog/global behavior alpha-only
- **Ancestry evidence:** Alpha.2 release adds catalog installs matching the running release, permits rival bundles on headless/SDK/ACP, Python PTC and state APIs. At both rc and alpha, Claude wrapper permissionMode defaults dontAsk and Codex defaults never. Base includes pi-ai third-party/custom-provider support. agent-instructions README at d7432673 L30-40 documents filesystem-provider requirements, byte budget, deduplication and process-owned home paths. Alpha.1 describes Claude Code Mods as an experiment comparing API capability, not practical compatibility.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/context/agent-instructions/README.md#L30-L40, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/subagent/subagent-codex/src/run.ts#L69, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/subagent/subagent-claude-code/src/run.ts#L56, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/user/guide/providers.md
- **Half:** both | **Confidence:** high on source; external harness execution untested

**What changed.** Alpha makes Claude Code and Codex delegation a catalog install; the wrappers already exist on rc and default to unattended approval modes. Those defaults do not imply every operation succeeds or all user communication is suppressed. Base-backed profiles with the instruction plugin and a filesystem provider load eligible global files on the first request, subject to the byte budget and deduplication. The chain includes DSH_HOME/AGENTS.md and DSH_AGENTS_HOME/AGENTS.md (default ~/.agents), followed by project instructions. Mods remains a compatibility experiment, not a promise.

**Operator consequence.** Inspect each wrapper's permissionMode, audit eligible shared instruction files, and use process DSH_HOME/DSH_AGENTS_HOME to select homes; stray row keys are ignored. Do not confuse the new catalog convenience with a new approval boundary or stable rival-harness integration.

## 12. CVE-2026-101078 publishes a local Linux isolation allegation without an established current fix

- **Date:** 2026-09-28T15:30:18Z (CVE); GHSA at 18:31:24Z
- **Channel:** docs-only; advisory describes prereleases through 0.1.7-rc.2
- **Ancestry evidence:** Pinned CVE snapshot preserves the in-window publication and reported range. The referenced report discusses root-run Bubblewrap/mount capability, whereas the CVE names Landlock. Reading current launch arguments does not settle backend capability handling. The older 82db1515 PID-namespace fix is in 0.1.1-rc.1 but is a distinct /proc mechanism.
- **Receipt:** https://github.com/CVEProject/cvelistV5/blob/71c9c9757e4d1553ee3e16032c43469dfec5a9fd/cves/2026/101xxx/CVE-2026-101078.json, https://github.com/advisories/GHSA-23q9-h232-4q79, https://github.com/Ruoyyy/My_vulnerable/blob/364965b90bd1674eb70477b92607e965cec43376/SECURITY-MOUNT-ESCAPE.en.md
- **Half:** defect | **Confidence:** high on publication; mechanism/current exposure unverified

**What changed.** A CVE/GHSA record was published alleging local Linux sandbox isolation failure through 0.1.7-rc.2. Its referenced report alleges that root-run confined commands can retain mount capability and reach host filesystems. This is an attributed report, not a demonstrated escape, and not an ordinary unprivileged desktop claim. No current affected/fixed status is established.

**Operator consequence.** Root-run Linux evaluations need a backend-capability review before relying on this boundary. Obtain a reproducible backend-specific test and a fixing commit/containing tag to settle the allegation. Do not label the older PID-namespace fix as this CVE's fix.

## 13. CVE-2026-101102 documents the older Code Mode host-user trust model

- **Date:** 2026-09-28T18:00:07Z (CVE); GHSA at 18:31:26Z
- **Channel:** docs-only publication; separate-process replacement is on current rc
- **Ancestry evidence:** Record names run_code through 0.1.0-rc.7. The old worker README expressly treats model-written code as host-user execution rather than hostile-code isolation. Current Node PTC documentation places direct filesystem/process effects under the selected OS sandbox; this replacement is documented in 0.1.7-rc.1.
- **Receipt:** https://github.com/CVEProject/cvelistV5/blob/f9975a22f71be782aff19e6fac192da4b9ca5613/cves/2026/101xxx/CVE-2026-101102.json, https://github.com/advisories/GHSA-m9ww-cpfc-8cf2, https://github.com/deepseek-ai/deepseek-harness/blob/dsh-v0.1.0-rc.7/packages/code-runtime/code-runtime-worker-thread/README.md#L5, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/ptc-runtime/ptc-runtime-node/README.md#L62-L74
- **Half:** both | **Confidence:** high on publication and architectural contracts; exploit untested

**What changed.** The new record concerns an old Code Mode implementation whose own documentation gave generated code the harness user's file/process rights. The current rc uses a different, separate-process PTC architecture. Neither publication nor replacement establishes an unauthenticated remote exploit or vendor-certified CVE-specific fix.

**Operator consequence.** Inventory old run_code deployments and move evaluations to the current rc architecture. Preserve the distinction between an architectural replacement and an assigned fixed version; require a vendor mapping or reproducer before calling this CVE fixed.

## 14. CVE-2026-101131 alleges an E2B setup trust problem in a retired component

- **Date:** 2026-09-28T18:30:14Z (CVE); GHSA at 21:31:16Z
- **Channel:** docs-only publication about older prereleases; current rc omits the E2B component
- **Ancestry evidence:** Record names E2B_API_KEY through 0.1.5-rc.3. Old code reads configuration/environment to create a remote sandbox, while its contract excludes forwarding that key into the sandbox. Retirement commit c49db8bc8c2924e115308692d34af7539288e7bb is dated 2026-09-11 and contained in 0.1.6-alpha.1, rc.1 and both current heads.
- **Receipt:** https://github.com/CVEProject/cvelistV5/blob/a16e0dce460042963be9c343d261234166097f54/cves/2026/101xxx/CVE-2026-101131.json, https://github.com/advisories/GHSA-vcc3-4jvw-qx89, https://github.com/deepseek-ai/deepseek-harness/blob/dsh-v0.1.5-rc.3/packages/e2b/e2b/src/index.ts#L93-L106, https://github.com/deepseek-ai/deepseek-harness/commit/c49db8bc8c2924e115308692d34af7539288e7bb
- **Half:** defect | **Confidence:** high on publication and retirement; practical exploit unverified

**What changed.** A new advisory alleges locally influenced E2B_API_KEY can affect a trusted sandbox-setup decision in an old implementation. Reading the key does not prove key exfiltration or a practical bypass. The component had already been retired before publication; the detailed submission did not supply accessible confirming evidence.

**Operator consequence.** Identify any old E2B-backed deployments and treat the migration away from that removed backend separately from the disclosure. Do not invent a September 28 fix, a current-rc exposure, or key exfiltration. An accessible detailed report and affected/fixed mapping would settle those questions.

## 15. CVE-2026-101132 names bundle patch traversal; current rc and alpha lack path containment

- **Date:** 2026-09-28T18:45:08Z (CVE); GHSA at 21:31:16Z
- **Channel:** docs-only publication; source-confirmed check gap persists in preview rc and alpha
- **Ancestry evidence:** The record names dsh.bundle.patch through 0.1.7-rc.2. At both 639ed015 and d7432673, bundlePatchFiles checks string shape and bundlePatchPaths joins the declared path to packageDir without a containment check. loadProfileDirectory reads/parses those paths and composes valid patches.
- **Receipt:** https://github.com/CVEProject/cvelistV5/blob/f9975a22f71be782aff19e6fac192da4b9ca5613/cves/2026/101xxx/CVE-2026-101132.json, https://github.com/advisories/GHSA-rh7q-h525-wx9f, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/app-boot/src/profile.ts#L58-L75, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/boot/app-boot/src/profile.ts#L58-L75
- **Half:** defect | **Confidence:** high on publication and static code; no runtime exploit

**What changed.** The advisory publication identifies a bundle-patch traversal problem. Current code still lets an installed bundle select a patch file outside its package and compose it if its content parses as valid configuration. This is not proof of unrestricted disclosure of arbitrary files or a pre-auth network endpoint. No fixed tag was established.

**Operator consequence.** Review each bundle's patch paths and the selected files, not just its package name. Reject unexpected paths escaping the package. A containment check with tests and an identified containing release would settle the open fix question.

## 16. CVE-2026-108788 publishes an older spawn-profile allegation with an unresolved mechanism

- **Date:** 2026-10-12T02:00:56Z (CVE); GHSA at 03:32:55Z
- **Channel:** docs-only; older prereleases through 0.1.1-rc.2
- **Ancestry evidence:** Pinned record names local manipulation of spawn's Profile argument. The detailed external exploit/submission was inaccessible; the broad record does not identify a defensible payload, fixing commit, or current-version mapping.
- **Receipt:** https://github.com/CVEProject/cvelistV5/blob/20d9248c60fe62803efade3177e8b82b586d154c/cves/2026/108xxx/CVE-2026-108788.json, https://github.com/advisories/GHSA-5mvr-2xwh-9v9q
- **Half:** defect | **Confidence:** high on publication; exact mechanism and current status unverified

**What changed.** A CVE/GHSA publication alleges a locally influenced launch Profile can bypass sandbox restrictions in versions through 0.1.1-rc.2. It does not establish that the current rc is affected or fixed, and this pass did not obtain a reproducible mechanism.

**Operator consequence.** Keep the disclosure in the inventory for old deployments. Request an accessible reproducer and fixing-commit/containing-tag evidence before treating any current version as vulnerable or repaired on this basis.

## 17. CVE-2026-108789 concerns a trusted workflow VM already replaced by sandboxed PTC

- **Date:** 2026-10-12T02:15:31Z (CVE); GHSA at 03:32:56Z
- **Channel:** docs-only publication; architectural replacement already on current rc
- **Ancestry evidence:** Record names workflow worker agent through 0.1.1-rc.2. realm.ts L1-7 explicitly trusts model-written scripts and denies a security-boundary claim. Replacement 35af8698c24c1b7654cd5c83dcbec224e50f2337 is dated 2026-09-13, in 0.1.6-alpha.1 and rc.1/current heads, moving workflow execution to sandboxed PTC.
- **Receipt:** https://github.com/CVEProject/cvelistV5/blob/30f71dd3a295cf4496adceec548e18604139026b/cves/2026/108xxx/CVE-2026-108789.json, https://github.com/advisories/GHSA-wc99-rg5g-w3c8, https://github.com/deepseek-ai/deepseek-harness/blob/dsh-v0.1.1-rc.2/packages/workflow/workflow-worker-thread/src/realm.ts#L1-L7, https://github.com/deepseek-ai/deepseek-harness/commit/35af8698c24c1b7654cd5c83dcbec224e50f2337
- **Half:** both | **Confidence:** high on publication and replacement; live exploit untested

**What changed.** A new advisory concerns an old workflow worker that trusted generated scripts inside a VM with host-realm integration. The reported consequence is access to the worker's files/processes/network as the harness user, requiring workflow execution. The current rc already uses sandboxed PTC instead. No vendor CVE-specific fixed-version designation was found.

**Operator consequence.** Inventory and replace old workflow-worker deployments. Do not translate the database's remote-attack label into unauthenticated network access, or treat the earlier replacement as a newly shipped October 12 fix. A vendor mapping or controlled reproducer would settle CVE-specific fix status.

## 18. The Web cookie signing key crosses the same-user agent and operator boundary

- **Date:** 2026-10-02 (disclosure lead); source checked at rc.2 and alpha.2
- **Channel:** preview-or-beta; static trust path at both current heads, not a newly introduced implementation
- **Ancestry evidence:** Browser authentication signs cookies using a persistent browser-session credential record. credentials-local writes it with mode 0600 in the owner's credential file. Linux profiles retain read access to /; Windows docs describe unconfined caller-readable files and network. RPC admission treats a valid cookie as the operator, whose API includes permission changes and an OS-user terminal. Alpha.2 retains the persistent secret. The disclosure supplies timing; pinned code supplies the product facts.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/discussions/8678, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/browser-auth.ts#L125-L177, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/credentials/credentials-local/src/index.ts#L675-L691, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-local/src/profiles.ts#L16-L35, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/interaction/permission-presets/src/index.ts#L252-L273
- **Half:** defect | **Confidence:** high on static path; no runtime exploit or cookie-generation probe

**What changed.** The in-window disclosure prompts a narrower assessment of the existing login. A same-user confined command that can read the credential file and reach the local API has cookie signing material capable of impersonating an operator. Owner-only file permissions distinguish users, not that command from the harness. The authenticated operator can change permission presets and use the OS-user terminal. This is a static trust-path conclusion, not a new CVE, proof of remote pre-auth access, or proof every prompt injection succeeds.

**Operator consequence.** Do not present loopback plus Workspace Write as independent control-plane protection. Evaluate in an outer disposable environment without valuable host credentials. To close the inner boundary, require source/release evidence that signing material is inaccessible to confined commands, followed by a controlled regression probe; TLS alone does not remove this path.

**Lens.** A real login can coexist with a broken inner authority boundary. The durable control plane needs principal separation, not more prompts.

## 19. Background-job completion wakes no longer have a default three-turn cap

- **Date:** 2026-09-22 (0.1.7-alpha.2); first rc 2026-09-23
- **Channel:** preview-or-beta; includes npm latest
- **Ancestry evidence:** b6775f6d4f55eaa0bcac36318cd7dfc98d70195c removes maxConsecutiveWakes default 3. Absent from alpha.1, contained in alpha.2, rc.1 and both current heads. Current tool-jobs README L40-57 describes eligible idle wakes and optional cap.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/commit/b6775f6d4f55eaa0bcac36318cd7dfc98d70195c, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/jobs/tool-jobs/README.md#L40-L57
- **Half:** both | **Confidence:** high on commit and default; cost unmeasured

**What changed.** Every eligible idle job completion can now wake its owner when no cap is configured. An agent can start another job on the woken turn, creating a self-exciting chain. Fewer completions wait for a human prompt, but the old default cap no longer bounds that chain.

**Operator consequence.** Set maxConsecutiveWakes explicitly when unattended cost or attention needs a bound. Understand the trade: beyond the cap, notices wait for the next user input and a wake-dependent task can stall. There is no measured throughput or billing result in this packet.

## 20. Alpha.2 changes tool and subagent contracts and removes Agent Team outbox delivery

- **Date:** 2026-10-09 (alpha.2 release)
- **Channel:** preview-or-beta; alpha-only
- **Ancestry evidence:** 4359d3ee17c002c05818d03c6e903767b0705a16 removes mixed both presentation; absent from rc.2/alpha.1, contained in alpha.2. Release notes return child IDs immediately and require custom SDK session/wait support. Tagged Team README L68-70 confirms direct Inbox acceptance with no retained unaccepted send intent, retries or resend deduplication. This reverses the direction stated in crosscheck M9; both English and Chinese release text agree with the tagged contract. Global instruction homes resolve from process environment, not per-row dshHome/agentsHome.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2, https://github.com/deepseek-ai/deepseek-harness/commit/4359d3ee17c002c05818d03c6e903767b0705a16, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/agent-team/README.md#L68-L70, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/context/agent-instructions/README.md#L40
- **Half:** both | **Confidence:** high on release and tagged contracts; Team delivery unprobed

**What changed.** Alpha.2 removes both tool presentation, returns subagent identifiers immediately, and requires callers to handle continuation/wait operations. Agent Team messages now go directly to the target Inbox; the separate outbox, automatic retries and resend deduplication are removed. A successful send means Inbox acceptance, not model processing or a synchronous storage flush. Per-row instruction-home overrides are ignored.

**Operator consequence.** Migrate tool presentation to native or ptc, support session/wait in custom runtimes, and handle failed Team sends explicitly without assuming retries or duplicate suppression. Select instruction homes using process environment. The direct-delivery simplification removes a durable delivery promise as well as code.

## 21. Alpha.2 removes webRuntime; old overlays can stop Connection startup

- **Date:** 2026-10-09 (first containing tag, alpha.2)
- **Channel:** preview-or-beta; alpha-only, not npm latest
- **Ancestry evidence:** cb9a590c86d90948989247863bd921261bc0350b removes WEB_RUNTIME_SERVICE, WebRuntimeValues, resolveLanTrust and the service provider. Absent from rc.2 and alpha.1, contained in alpha.2. The migration-guide directory is labeled v0.2.1-alpha.1 but ancestry determines the containing release.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/commit/cb9a590c86d90948989247863bd921261bc0350b, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/docs/upgrade-guide/v0.2.1-alpha.1/web-listener-trust-config/guide.md
- **Half:** defect | **Confidence:** high on commit and guide

**What changed.** The old webRuntime service no longer mounts. Overlays that inject it can wait indefinitely for that service and prevent required Connection startup. The supported replacement is webStartup; trusted-host reads change and lanAddresses disappears.

**Operator consequence.** Replace inject: [webRuntime] with inject: [webStartup], read ctx.webStartup.trustedHosts, remove lanAddresses, and fully restate patched configuration as the guide instructs. Do not infer release inclusion from the guide-directory name. This is the migration cost attached to section 7's listener improvement.

## 22. Optional alpha reasoning translation adds a separate data destination

- **Date:** 2026-10-09 (alpha.2)
- **Channel:** preview-or-beta; alpha-only, disabled in shipped profiles
- **Ancestry evidence:** Tagged cot-translation-bundle README L12 and L28-32 describes opt-in translation, Bing default once enabled, Google and paid native DeepSeek alternatives, POST bodies, saved translations and no automatic cross-provider fallback.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/cot-translation-bundle/README.md#L12, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/cot-translation-bundle/README.md#L28-L32, https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2
- **Half:** both | **Confidence:** high on contract; traffic and billing unobserved

**What changed.** An optional bundle can translate expanded reasoning into a selected language. Once enabled it defaults to Bing; the selected service receives text that may contain private code or conversation details. Native DeepSeek routes are explicit paid alternatives. Translations persist; provider failure does not automatically send text elsewhere.

**Operator consequence.** Approve the destination and any billing before enabling translation. Session-log opt-out does not govern this separate feature. Keep it off where reasoning cannot leave for the selected service. Do not describe it as on by default.

## 23. Alpha.2 gives Session working-directory changes a persistent API and recovery path

- **Date:** 2026-10-09 (alpha.2)
- **Channel:** preview-or-beta; alpha-only
- **Ancestry evidence:** Release and tagged working-directory contracts describe validated directory changes, durable events, context notices and TypeScript/Python SDK setters. Existing processes and sandbox grants retain separate lifetimes. README L80 says every turn fails when both current and original directory disappear, until repaired.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/working-directory/README.md#L42, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/working-directory/README.md#L80, https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/tool-working-directory/README.md#L28
- **Half:** capability | **Confidence:** high on tagged contracts; no resume probe

**What changed.** Session directory changes can now be validated, persisted and supplied to the model through supported tools/SDK APIs rather than a process-local shell cd. A change is not automatically a new sandbox write grant. If both effective and original directories vanish, even chat turns reject.

**Operator consequence.** Use working_directory or SDK setWorkingDirectory/set_working_directory for relocation. Preserve independent grant/process lifetimes. Restore the original directory or set an existing absolute directory through the SDK before retrying a Session with missing projects.

## 24. The rc Plugin Manager defaults to public npmmirror fallback

- **Date:** 2026-09-23 (first rc containing the manager)
- **Channel:** preview-or-beta; default at rc.1 and both current heads
- **Ancestry evidence:** Plugin Manager config at 639ed015 L186 sets fallbackRegistries to NPMMIRROR_REGISTRY. registry.ts L40-79 plans ordered public fallbacks for network/timeouts/not-found/no-matching-version; an outside/private registry is asked alone. The current alpha retains this policy.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/src/index.ts#L184-L186, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/src/registry.ts#L40-L79, https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/README.md#L50
- **Half:** both | **Confidence:** high on default and policy; no install executed

**What changed.** The newly rc-reachable Plugin Manager may ask registry.npmmirror.com when the preceding configured public registry cannot supply a package/version. It is ordered fallback, not fastest-mirror selection. An outside/private registry is queried alone; this is not indiscriminate public leakage of private package lookups.

**Operator consequence.** Set fallbackRegistries explicitly, including an empty list if only one approved registry may supply plugins. Include the mirror in package-origin and egress review for live Web installs. This behavior is separate from the CLI's initial npm installation.

## Prior claims re-checked

- web-ui-login: authentication holds at current rc/alpha; section 18 narrows the isolation conclusion.
- still-prerelease: holds, but old default version is superseded by section 1.
- any-row-replaceable, gate-is-a-plugin and plugins-are-unsandboxed-in-process: hold at current rc (section 3).
- more-data-to-deepseek and gates-removed-by-default: old alpha-only qualifiers are obsolete; replace with sections 2, 3 and 4. Auto denial handling is conditional.
- bubblewrap-escape-safety-md: old PID fix now has a pinned commit, 82db1515fbbf3c161a62e6a989d4e19fca6dde85, first in 0.1.1-rc.1. SAFETY.md remains unchanged. Broad advisory absence is withdrawn; the six new publications do not establish an advisory for that exact older /proc mechanism.
- default-model-v4-1-flash: model selection holds, protocol half changed to Messages-only (section 9).
- upgrade-breaks: holds and extends to the current rc and separate alpha migration (sections 9, 20 and 21).
- acp-headless-remote: retire the headless NDJSON/resume advice at 0.1.5-rc.2; its flags were absent at that pin. Current-rc advice is in section 10.
- runs-rival-models-and-harnesses: supported routes hold; unattended wrapper defaults are unchanged (section 11).
- Equal English/Chinese documentary authority holds: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/i18n/README.md#L9. The pairing gate and every translation were not certified.
- Replace "mirror confirmed" with unavailable public PR review history. A 404 alone does not identify a private organization or development home.

## Carry-forward answers

No stable exists. The approval row remains replaceable. The rc session-log default question is settled yes, first rc.1 on September 23. npm latest is observed at rc.2; who/how/when remains open. The older Bubblewrap PID fix now has an identifiable commit, but no matching advisory was located; do not confuse it with CVE-2026-101078. Cordis provenance resolves to DeepSeek's vendored/published fork. Headless advice is corrected to the current rc. Loopback 401 remains a source branch, not a runtime probe, and cannot by itself establish separation from the same-user command.

## Leads not promoted

- Excluded assertions: manual/human latest promotion and its alleged exact time; exact installed dependency counts/hoisting/duplicate Cordis copies; independently verified Desktop signatures or a live mandatory-update policy; irrevocable Windows labels; universal Auto denial-to-human behavior; same-lab exclusivity for cache-preserving tool updates; inferred vendor motives stated as facts.
- Exact exploit mechanisms/current fixed status for CVE-2026-101078, CVE-2026-101131 and CVE-2026-108788 remain unverified. Their publication is retained as publication, not exploit proof.
- Discussion #9568's title-only October 13 credential-forgery lead is superseded by the earlier disclosure and static path in section 18. User-reported Windows startup/label outcomes in #9548/#9560/#9569 were not reproduced.
- Discussion #9598's webRuntime complaint is resolved by section 21's code/guide, not by the post.
- Landing-page preview positioning and plugin-ecosystem topic counts are not capability/adoption evidence. No stabilization target was located.
- Writing-feed Pi coverage is an indirect lead; pi-ai dependency ranges are covered in section 6. No X lane was available.

## Surfaces checked

Research/crosscheck: house authorities, source contract, parent/current profiles, GitHub release metadata and all in-window release bodies, tag/commit ancestry, npm CLI/component/Cordis/pi-ai manifests and history, PyPI SDK/runtime-bin metadata, Desktop feeds, current tagged code/docs, repository/global advisories, Discussions and writing feeds.

Author on 2026-10-14: all six pinned CVE JSON records fetched as data; GHSA pages opened; current/old trust contracts and both channel-head bundle path functions read; M8/M9/M10 and retirement/replacement ancestry rerun using the existing verification clone with lazy fetch and optional locks disabled. Missing cached blobs were fetched as raw pinned data only. Alpha.2 release text and Team README were checked to correct M9's reversed outbox direction. SDK/ACP hmr overrides were checked at sdk-app/acp-app, not nonexistent sdk/acp paths.

## Not reached

No runtime 401 probe, cookie-forgery probe, wire capture, Windows reproduction, backend root-capability test, installer inspection, active mandatory-policy endpoint, paid account task, dependency install or model benchmark. Current mutable observations do not reconstruct historical dist-tag promotion. Detailed inaccessible reports do not justify inventing exploit or fix status.

## Crosscheck applied

Applied all seven CORRECTED section verdicts and retained four VERIFIED sections; there were no wholly REFUTED or UNVERIFIABLE numbered sections to remove or demote. Rejected subclaims moved to Leads not promoted. Added all thirteen misses as sections 12-24 after receipt checks. M1/M3/M5 are publication-only where mechanisms remain unsettled. Corrected crosscheck M9 itself: alpha.2 removes the Team outbox/retries/deduplication, per the release and pinned contract. Preserved the September 21 to October 13 window and distinguished October 14 verification from event dates.
