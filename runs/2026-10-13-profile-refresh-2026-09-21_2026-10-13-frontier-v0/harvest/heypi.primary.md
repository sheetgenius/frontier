---
schema_version: bitter.frontier_harvest.v0
provider: heypi
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/heypi.yml
channels_present: [tagged-release, preview-or-beta]
window_volume: 0 heypi source commits, tags or npm publishes; upstream dependency releases and compatibility changes; 17 numbered sections including four verified misses and historical posture corrections
lane: primary sources, corrected by write-up author
---

# Harvest: heypi (primary sources)

Identity: hunvreus/heypi, Ronan Berder (hunvreus), MIT, https://heypi.dev/. This is the policy/transport shell around Pi, not Pi itself or Inflection's chatbot. The original researcher read clones without executing code; the author independently read pinned raw files, issuing-repository APIs, registries and selected tarballs in memory. Cloned and published code was never executed. Crosscheck and author verification occurred on 2026-10-14 for the stated cutoff. Current observations do not reconstruct historical dist-tag moves or live-doc contents.

## Install today

`npm create heypi@0.3.0-beta.2 -- codex-tag my-agent` pins the scaffolder; the documented floating command uses `@latest`. Manual installs pin `@hunvreus/heypi@0.3.0-beta.2` and the selected optional runtime package. Core declares Node >=22, but the ordinarily resolved Pi 0.79.10 package declares >=22.19.0 in both its registry manifest and inspected tarball. Use at least 22.19.0 for that resolution; the Gondolin adapter still requires >=23.6 plus QEMU. The one template uses Docker, the command classifier and loopback admin, always starts local, and adds Slack only with both credentials. A GitHub token is forwarded only if supplied. Receipts: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/cli.md#L13-L20, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L7-L35, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/guides/deployment.md#L3-L4.

All six heypi packages have only `latest: 0.3.0-beta.2` in the 2026-10-14 registry observations; no publication postdates 2026-07-22. Newest non-prerelease 0.1.3 remains installable, but is a legacy architecture rather than the recommended starting point for a new deployment. No stable 0.3.0 or main-only change was found. See section 15 for primary channel records.

The consumer receives no repository lockfile. The repository lock proves a resolution, not test coverage. Ordinary fresh, unlocked resolution through the cutoff selects the versions below; existing consumer locks and overrides may differ.

| Dependency | Beta.2 declaration | Repository lock | Fresh unlocked resolution | Upstream published by cutoff |
|---|---|---|---|---|
| @earendil-works/pi-coding-agent | ^0.79.6 | 0.79.10 | 0.79.10 | 1.2.0, 2026-10-12 |
| just-bash | ^3.1.0 | 3.1.0 | 3.6.0 | 3.6.0, 2026-10-01 |
| @earendil-works/gondolin | ^0.12.0 | 0.12.0 | 0.12.0 | 0.13.0, 2026-10-04 |
| @cloudflare/sandbox | ^0.12.3 | 0.12.3 | 0.12.10 | 1.0.1, 2026-10-13 |
| @vercel/sandbox | 2.6.0 exact | 2.6.0 | 2.6.0 | 3.8.0, 2026-10-13 |

Receipts: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/pnpm-lock.yaml, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/package.json, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/package.json#L41, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/package.json#L41, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-vercel/package.json#L42; version histories at https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent, https://registry.npmjs.org/just-bash, https://registry.npmjs.org/%40earendil-works%2Fgondolin, https://registry.npmjs.org/%40cloudflare%2Fsandbox and https://registry.npmjs.org/%40vercel%2Fsandbox. Publication timestamps establish availability; they do not establish dist-tag movement times.

Defaults are configuration choices, not feature flags: omitted runtime uses host Bash; tools have no approval policy until opted in; access is unrestricted unless user/group lists are configured; DMs default allowed; memory defaults enabled. Admin defaults off and binds loopback if enabled. Receipts: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/tool-config.ts#L30-L51, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L103-L108, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/access.md#L23-L24; sections 6, 8, 16 and 17. These are beta defaults, not the legacy non-prerelease defaults.

The npm manifests record gitHead d1a2ebead2d2dddda353e5c0804c31e7b6cc89b5. Its comparison to the tag has two commits and no package-source changes, but does change examples, docs, manifests and the lockfile. Selected compiled code was inspected; this is not a whole-package reproducible-build proof. Receipt: https://github.com/hunvreus/heypi/compare/d1a2ebead2d2dddda353e5c0804c31e7b6cc89b5...436da22ceab0bc4e2db133e8626649b4bf76286d.

## Release ledger

| Version | Source timestamp (UTC) | Semver channel | Registry publication (UTC) |
|---|---|---|---|
| 0.3.0-beta.2, still tip | Annotated tag 2026-07-22T01:35:54Z | preview-or-beta, no GitHub Release object | Core 2026-07-22T01:15:13.485Z; six packages through 01:15:18.675Z |
| No heypi window shipment | None found | beta.2...main identical, ahead 0 / behind 0 | No heypi publication after 2026-07-22 |
| 0.1.3, newest non-prerelease | Commit 2026-06-04T15:21:13Z; lightweight tag creation time unestablished | legacy non-prerelease | 2026-06-04T15:22:07.052Z |

The beta is 257 commits ahead / 0 behind 0.1.3. No GitHub release objects were found; tags and registry records establish the channel. Historical npm 0.2.0-beta.1 has no matching git tag. The website repository ends at 2115e3296dd78d54664efcbb455e200a3df4c0c3 on 2026-07-22. This supports no website source commit in the window, not proof that deployed pages never changed. The original sentence-match counts are not independent historical proof. Receipts: https://github.com/hunvreus/heypi/compare/0.1.3...0.3.0-beta.2, https://github.com/hunvreus/heypi-website/commit/2115e3296dd78d54664efcbb455e200a3df4c0c3.

## 1. Gondolin 0.13.0 closes hookless internal-network egress outside heypi's range

- **Date:** 2026-10-04 (upstream release; fix 2026-10-01)
- **Channel:** `tagged-release` upstream; heypi Gondolin adapter `preview-or-beta` at 0.3.0-beta.2
- **Ancestry evidence:** Fix 494cf18b7bd8cef7b63e1ae3665cb770c5ced0de is the merge base of its comparison to v0.13.0, ahead 29 / behind 0, and is absent from v0.12.0. v0.12.0...v0.13.0 is ahead 58 / behind 0. Release published 2026-10-04T22:03:12Z; npm 2026-10-04T22:12:17.630Z. The adapter declares ^0.12.0 and its lock resolves 0.12.0. Its provider forwards caller VM options without adding httpHooks.
- **Receipt:** https://github.com/earendil-works/gondolin/blob/v0.13.0/CHANGELOG.md#L12, https://github.com/earendil-works/gondolin/commit/494cf18b7bd8cef7b63e1ae3665cb770c5ced0de, https://github.com/earendil-works/gondolin/releases/tag/v0.13.0, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/package.json#L41, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/src/index.ts#L65-L82, https://github.com/earendil-works/gondolin/blob/v0.12.0/host/src/http/hooks.ts#L143-L147
- **Half:** defect | **Confidence:** high

**What changed.** Gondolin 0.13.0 blocks guest HTTP/TLS to loopback, private, link-local and other internal ranges even without HTTP hooks. In 0.12.0, the IP check was skipped when httpHooks.isIpAllowed was absent, despite the older network documentation claiming default blocking. heypi's ^0.12.0 range excludes 0.13.0, so ordinary fresh beta installs still select 0.12.0. The adapter installs no hooks itself. Hookless VMs could reach host-local services and cloud metadata endpoints, subject to host routing. No matching public Gondolin advisory was found in the crosscheck's 2026-10-14 searches.

**Operator consequence.** For heypi Gondolin deployments near private services or cloud metadata, supply createHttpHooks() with blockInternalRanges enabled; the 0.12.0 helper defaults it to true and the adapter forwards the hook. An explicit 0.13.0 dependency override is another source-supported route, but compatibility has not been executed or established. Test the network boundary and the changes listed in section 14. A normal heypi update within the declared range does not obtain this fix.

## 2. Pi 1.x does not reach heypi's 0.79.x dependency range

- **Date:** 2026-10-01 (Pi 1.0.0); Pi 1.2.0 published 2026-10-12
- **Channel:** `tagged-release` upstream; embedded heypi `preview-or-beta`
- **Ancestry evidence:** Pi 1.0.0 release published 2026-10-01T19:20:55Z; npm 2026-10-01T19:15:22Z. Pi 1.2.0 npm publication 2026-10-12T23:03:25.459Z. v0.80.8...v1.2.0 is ahead 1948 / behind 0. The crosscheck counted 36 releases after v0.79.10 through cutoff, nine with Breaking Changes headings. AuthStorage is exported at the checked v0.79.10 and v0.80.7 indexes, absent at checked v0.80.8 and v1.2.0. heypi's source and published ESM import that name.
- **Receipt:** https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent/0.79.10, https://github.com/earendil-works/pi/releases/tag/v1.0.0, https://github.com/earendil-works/pi/releases/tag/v0.80.8, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/pnpm-lock.yaml#L404, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/model.ts#L1-L13, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/pi.ts#L147-L152, https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/sdk.ts#L48-L55, https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent/1.2.0
- **Half:** both | **Confidence:** high

**What changed.** Pi shipped 1.0.0 and 1.2.0 in the window without an accompanying heypi release. heypi 0.3.0-beta.2 declares >=0.79.6 <0.80.0; its repository lockfile and an ordinary fresh resolution select 0.79.10. Existing consumer lockfiles can retain another allowed 0.79.x version. Pi 0.79.10 declares Node >=22.19.0 in its registry record and published package.json, so the core's own Node >=22 declaration is not the complete fresh dependency requirement. The lockfile establishes resolution, not a successful compatibility test. Pi 0.80.8 documents removal of AuthStorage and replacement of authStorage/modelRegistry session options with modelRuntime. The checked 0.80.8 and 1.2.0 exports cannot satisfy heypi's named ESM import. heypi's re-exported tool/extension APIs also come from its embedded Pi line. The four published Pi advisory ranges checked by the verifier exclude 0.79.10; that is not a complete transitive vulnerability assessment.

**Operator consequence.** The old profile's claim that Pi breaking changes automatically reach heypi was backwards for normal npm resolution. The narrow range blocks both those releases and their improvements. Do not lift Pi to 1.2.0 with an override: the checked exports would fail ESM linking, and session construction needs a port. Use the API of the Pi version actually resolved, and assess ecosystem extension compatibility individually. A heypi release porting the imports and session API would settle the integration gap; no runtime compatibility test was run here.

## 3. just-bash 3.6.0 carries the earlier hard-link escape fix

- **Date:** 2026-10-01 (3.6.0 release); historical fix 2026-08-13 and advisory 2026-09-15
- **Channel:** `tagged-release` just-bash 3.3.0 and 3.6.0; heypi adapter `preview-or-beta`
- **Ancestry evidence:** GHSA-g5pf-mh4h-h655: high, no CVE, published 2026-09-15T20:13:44Z, affected <3.3.0, patched 3.3.0. Merge 3ee215c2ad56c96ce0d88e2813050df9f15afa38 is an ancestor of 3.3.0 (ahead 1 / behind 0) and 3.6.0 (ahead 56 / behind 0), not 3.1.0 or 3.2.0. heypi declares ^3.1.0 but its repository lock selects 3.1.0. Ordinary fresh resolution selects 3.6.0, npm publication 2026-10-01T12:48:02.977Z. On 2026-10-14 the verifier observed a 404 from the global GHSA endpoint and no just-bash result from npm bulk advisories; Pi 0.78.0 returned four control advisories.
- **Receipt:** https://github.com/vercel-labs/just-bash/security/advisories/GHSA-g5pf-mh4h-h655, https://github.com/vercel-labs/just-bash/commit/3ee215c2ad56c96ce0d88e2813050df9f15afa38, https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L85, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/pnpm-lock.yaml#L1520
- **Half:** both | **Confidence:** high

**What changed.** just-bash 3.6.0 is the window release; its hard-link isolation fix predates the window. In affected ReadWriteFs versions, a pre-existing hard link inside a mounted root could let a guest write change the same inode through its outside-root name. heypi mounts workspace and shared directories through this class. The repository lock still selects affected 3.1.0; fresh unlocked resolution selects fixed 3.6.0. The latter also fixes late worker-bridge settlements after cancellation. heypi wires cancellation and timeouts, but that proves neither that every command uses the affected bridge nor that this failure was reproduced in heypi. just-bash network access remains disabled by default when not configured.

**Operator consequence.** Inspect npm ls just-bash or pnpm why just-bash. Replace artifacts below 3.3.0, with 3.6.0 the current target, while also repairing the read-only proxy in section 11. Do not revert to the vulnerable 3.1.0 repository lock to avoid API drift. Check mounted roots for pre-existing host-created hard links. The 2026-10-14 audit-service observation is a reason to read the issuing advisory directly, not proof of historical 2026-10-13 service responses or a promise that npm audit/Dependabot will never detect it.

## 4. Cloudflare 1.0 removes the session API used by heypi's remote adapter

- **Date:** 2026-09-30 (npm 1.0.0 publication); 1.0.1 and Vercel 3.8.0 published 2026-10-13
- **Channel:** `tagged-release` upstream; heypi Cloudflare and Vercel adapters `preview-or-beta`
- **Ancestry evidence:** Cloudflare 1.0.0 npm publication 2026-09-30T01:44:26.557Z, GitHub release 2026-10-08T07:23:34Z. Its pinned source f9e972a14123bef3b93e9bb337bab6e83419fe7e has no ISandbox, ExecutionSession or createSession in packages/sandbox/src. 0.12.10 exports the old types. The 1.0.1 index is unchanged; rewrite...1.0.1 is ahead 12 / behind 0. Cloudflare 1.0.1 npm publication 2026-10-13T10:20:44.828Z and Vercel 3.8.0 2026-10-13T21:36:59.609Z. Current registry tags observed 2026-10-14 are latest=1.0.1 and latest=3.8.0; publication timestamps do not establish dist-tag movement times.
- **Receipt:** https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%401.0.0, https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%401.0.1, https://github.com/cloudflare/sandbox-sdk/blob/e4877c7368f8b1620bd4400ff831e28fba152eff/packages/sandbox/src/index.ts#L37-L44, https://github.com/cloudflare/sandbox-sdk/tree/f9e972a14123bef3b93e9bb337bab6e83419fe7e/packages/sandbox/src, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/src/index.ts#L76-L116, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/package.json#L41, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-vercel/package.json#L42, https://github.com/vercel/sandbox/releases/tag/%40vercel/sandbox%403.0.0, https://github.com/vercel/sandbox/releases/tag/%40vercel/sandbox%403.8.0
- **Half:** defect | **Confidence:** high

**What changed.** Cloudflare's 1.0.0 rewrite removes the session interface heypi's adapter imports and calls on a caller-owned sandbox. heypi's ^0.12.3 dependency ordinarily resolves 0.12.10, but does not control the SDK used by the operator's Worker to construct that object. Cloudflare 1.0.1 was published by window close. Separately, heypi pins Vercel SDK 2.6.0 exactly while 3.8.0 was published by cutoff. Vercel 3.0.0 explicitly preserves runtime-based creation through the legacy v2 API, so age alone does not prove that adapter broken or unsupported.

**Operator consequence.** Keep the caller-owned Cloudflare Worker sandbox on the 0.12 line, preferably 0.12.10 for section 12's fixes, until the adapter is ported. Changing only heypi's transitive SDK does not change the object supplied by the Worker. Treat 1.0.0 API incompatibility as source analysis, not an executed deployment failure. Verify Vercel's exact 2.6.0 integration separately rather than transferring Cloudflare's incompatibility to it.

## 5. Experimental Pi durable harness resumes interrupted turns outside heypi

- **Date:** 2026-10-01 (pi-durable 1.0.0); package first publication 2026-09-19; 1.2.0 2026-10-12
- **Channel:** `tagged-release` upstream package, explicitly experimental; no heypi integration
- **Ancestry evidence:** pi-durable 1.0.0 npm publication 2026-10-01T19:11:04.822Z, 1.2.0 2026-10-12T23:00:37.181Z. The full durable-harness description is present at v1.0.0 and v1.2.0; v0.87.0 described record contracts and detached in-memory storage. v1.0.0...v1.2.0 is ahead 220 / behind 0. heypi depends on pi-coding-agent, not pi-durable, and its Pi range excludes these versions.
- **Receipt:** https://github.com/earendil-works/pi/blob/v1.0.0/packages/durable/README.md, https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3-L7, https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L181, https://registry.npmjs.org/%40earendil-works%2Fpi-durable/1.2.0, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L54-L63, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64
- **Half:** capability | **Confidence:** high

**What changed.** Pi's separately published durable harness persists conversations, turns and tool-call state before displaying them and resumes from storage after interruption. Tools declared replay-safe can rerun; other interrupted tools return an interrupted result to the model. Its API is explicitly experimental. heypi persists queued work and approval state but explicitly does not replay arbitrary in-flight model execution. The upstream capability is not a heypi feature, and a pi-coding-agent version bump alone would not integrate the separate harness.

**Operator consequence.** heypi operators still need supervised restarts, stable message IDs and reconciliation of interrupted work. Evaluate pi-durable as an upstream architecture direction, not a drop-in fix. It makes bespoke turn-recovery scaffolding less defensible if its contract matures, but does not replace heypi's chat identity, policy or routing records. A tested integration and a stable upstream recovery contract would change the work operators own.

## 6. Omitted runtime uses host Bash with access bounded by the service account

- **Date:** 2026-07-21 (historical beta.0 behavior); re-verified for the 2026-10-13 profile
- **Channel:** `preview-or-beta` heypi 0.3.0-beta.2; not the legacy 0.1.3 defaults
- **Ancestry evidence:** beta.0...beta.2 is ahead 3 / behind 0 with no package source changes, including runtime-tools.ts, storage.ts and app.ts. beta.0 npm publication was 2026-07-21. Old beta.0 at 0.2.0 and newest stable 0.1.3 documented a just-bash default.
- **Receipt:** https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime-tools.ts#L17-L27, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L1034-L1038, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/runtimes.md#L8-L24, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/storage.ts#L45-L70, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/secrets.ts#L67-L95, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/secrets.md#L17-L26, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/guides/deployment.md#L11, https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/runtime.md#L34
- **Half:** defect | **Confidence:** high

**What changed.** This corrects an older default claim; it is not an in-window change. runtime?.kind falls back to host. Omitting runtime logs security_runtime_unisolated and proceeds; explicit host() does not trigger that warning. File tools apply path checks, but host Bash can leave the workspace within the service account's OS permissions. The workspace sits below the state root with encrypted secret records, memory and ledgers; secrets.key is at that root. The deployment checklist requires an explicit runtime choice, not a prohibition on trusted host execution.

**Operator consequence.** Inspect missing runtime configurations and explicit host() use. Choose an isolation provider for model-directed commands that must not reach service-owned state. If using host execution, use a dedicated OS account and protect the state directory: encrypted values and their decryption key share the state root; anyone who can read both, including a complete backup, can decrypt them. Filesystem permissions and backup protection remain necessary. Selecting just-bash is explicit and still requires the dependency checks in sections 3, 11 and 13.

## 7. Docker uses normal bridge networking without a heypi egress selector

- **Date:** 2026-07-21 (historical beta.0 rewrite); re-verified for the 2026-10-13 profile
- **Channel:** `preview-or-beta` heypi 0.3.0-beta.2
- **Ancestry evidence:** runtime-docker.ts is unchanged between beta.0 and beta.2 and supplies no --network argument. 0.2.0-beta.0's removed separate Docker package passed its network setting with a none default. Docker documentation is pinned to d751b36e43fc991c8810520c74adcd422cc0b959, whose file revision predates cutoff (2026-07-14).
- **Receipt:** https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime-docker.ts#L16-L35, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime.ts#L25-L39, https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi-runtime-docker/src/index.ts#L274-L275, https://github.com/docker/docs/blob/d751b36e43fc991c8810520c74adcd422cc0b959/content/manuals/engine/network/drivers/bridge.md#L19-L44, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L7-L35, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/.env.example#L9-L11
- **Half:** defect | **Confidence:** high

**What changed.** This corrects a historical network-off assumption. The current Docker runtime runs a detached container with workspace/shared binds, a read-only skills bind and runtime environment values, but no network selector, user override, capability drops or resource limits. Normal Docker defaults attach it to the bridge and use masquerading for external access. Effective connectivity remains subject to daemon, routing and firewall policy. The template forwards GITHUB_TOKEN into runtime environment only when the operator supplies it.

**Operator consequence.** Do not transfer the old Docker network-none default to the 0.3 beta. Enforce egress policy at the daemon/firewall or in a custom runtime and test the routes that matter. Inspect runtime environment values for credentials visible to model-directed commands. The docker() builder itself exposes only workspace, image and env; neither approvals nor the container label establish a network boundary.

## 8. Relevant shared memory is eligible for recall across conversations by default

- **Date:** 2026-07-21 (historical beta.0 default); re-verified for the 2026-10-13 profile
- **Channel:** `preview-or-beta` heypi 0.3.0-beta.2; legacy 0.1.3 still documents memory off
- **Ancestry evidence:** app.ts and memory.ts have no source changes from beta.0 to beta.2. Old 0.2.0-beta.0 memory docs say off by default. Current recall filters positive relevance, escapes text and has default bounds of eight records / 4000 characters; the context hook skips an empty query.
- **Receipt:** https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/memory.md#L3-L21, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L417-L430, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L272-L280, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L336-L368, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L439-L464, https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/memory.md#L3
- **Half:** both | **Confidence:** high

**What changed.** This corrects the older memory-off claim. Memory is enabled by default. Relevant shared records are eligible for recall across conversations with the same adapter ID; they are not all injected into every turn. Recall considers user records before conversation and shared records, selects for relevance, limits records/characters and escapes text before labelling it untrusted reference context. Separate adapter IDs retain a storage boundary. These measures do not establish immunity to prompt injection.

**Operator consequence.** Use memory: false when this cross-conversation recall surface is unwanted; separate adapters when their state must stay apart. Include memory files in retention and review. The name-based approval configuration can target the memory tool as a source inference, but no integration test of that policy was run. Do not describe bounded relevant recall as universal injection or as only a prompt label.

## 9. Approval-request records are queryable JSONL without tamper evidence

- **Date:** 2026-07-21 (historical beta.0 ledger); re-verified for the 2026-10-13 profile
- **Channel:** `preview-or-beta` heypi 0.3.0-beta.2
- **Ancestry evidence:** channel.ts and approval.ts are unchanged from beta.0 to beta.2. The write path is appendFile(JSON line) without a hash chain, signature or fsync. No-policy, false-result and block-result branches return before approval writes; once() can reuse an earlier tool approval. Background schedules deny calls asking for approval without a canonical approval-audit callback.
- **Receipt:** https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/admin.md#L47-L53, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/channel.ts#L191-L194, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L309-L395, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L468-L484, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L975-L985, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/channel.ts#L356-L374
- **Half:** both | **Confidence:** high

**What changed.** This replaces the older typed-trace-events description. heypi's conversation JSONL is a queryable authorization/routing ledger; Pi's transcript is the separate execution trace. The approval-request path records requester, approver, canonical-input hash, displayed action and decision, and required write failures block that path. Calls with no policy, policies returning allow/block and reused once() approvals do not each enter this audit path. A decision hash does not prove subsequent execution. The file writes are not tamper-evident.

**Operator consequence.** Use these records to reconstruct decisions that entered the request path, not as a complete per-call execution ledger. Export them to independently protected append-only storage if state writers must not be able to rewrite evidence. An OS crash may lose unflushed records. The loader drops a malformed unterminated final line and rejects earlier JSON syntax errors, but cannot authenticate well-formed edits. Under host execution, the service account may also let the agent edit this state.

## 10. approval.command() allows unmatched commands after opt-in

- **Date:** 2026-07-21 (historical beta.0 policy); re-verified for the 2026-10-13 profile
- **Channel:** `preview-or-beta` heypi 0.3.0-beta.2
- **Ancestry evidence:** approval.ts is unchanged between beta.0 and beta.2. tool-config.ts builds policies only from tools.<name>.approve. The template explicitly selects approval.command() for bash. Source patterns and option-placement behavior were read, not executed.
- **Receipt:** https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L88-L104, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L165-L176, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/tool-config.ts#L30-L51, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L16-L20, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/Dockerfile#L3-L13
- **Half:** defect | **Confidence:** high

**What changed.** approval.command() gates nothing until the tool opts in. Its four block patterns cover rm -rf /, mkfs, shutdown and reboot; thirteen approval patterns cover curl, wget, ssh, scp, rsync, docker, kubectl, terraform, helm, git push, npm publish, pnpm publish and rm -rf. Raw-text regexes then allow everything unmatched with a Safe default reason. git -C . push does not satisfy the git-push regex. Python and gh are absent from the lists but present in the template image; the template can expose an optional GitHub token to these commands.

**Operator consequence.** Treat the classifier as a convenience filter, not exhaustive authorization. For consequential tools choose approval.always(), or a predicate that asks for everything outside a short known-good set. The predicate receives the current actor, but credential and network controls still belong in the runtime. A textual list cannot establish that equivalent effects through other commands are gated.

## 11. just-bash 3.6.0 bypasses heypi's read-only skills proxy with createExclusive

- **Date:** 2026-10-01 (3.6.0 release); introduction committed 2026-09-27T21:16:32Z
- **Channel:** `tagged-release` just-bash 3.6.0, eligible under heypi beta adapter ^3.1.0; no heypi fix
- **Ancestry evidence:** Introduction cc35fab4ffdd7498dd45ab6d2247a95b5db551ee is the merge base to release commit 7537a260e38648e8998db7a95504102ad80b0194, ahead 23 / behind 0. It is absent from 3.4.2 (ahead 0 / behind 24). Independently fetched the pinned wrapper, mktemp, helper, MountableFs and ReadWriteFs source. Published adapter beta.2 and just-bash 3.6.0 tarballs were inspected only in memory: the compiled proxy lacks a createExclusive deny entry, while the upstream bundle contains the command/method. No cloned or published code was executed.
- **Receipt:** https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0, https://github.com/vercel-labs/just-bash/commit/cc35fab4ffdd7498dd45ab6d2247a95b5db551ee, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L64, https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/commands/mktemp/mktemp.ts#L407-L417, https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/create-exclusive.ts#L38-L49, https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/mountable-fs/mountable-fs.ts#L407-L437, https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/read-write-fs/read-write-fs.ts#L714-L771, https://registry.npmjs.org/%40hunvreus%2Fheypi-runtime-just-bash/0.3.0-beta.2, https://registry.npmjs.org/just-bash/3.6.0
- **Half:** both | **Confidence:** high

**What changed.** The new mktemp command makes unique private temporary files/directories possible, using the newly added createExclusive filesystem method. heypi's skills mount is a proxy around ReadWriteFs that blocks ten named mutators and binds every other method directly to the underlying filesystem. createExclusive is absent from that list. mktemp calls the helper, MountableFs delegates to the mounted proxy, and ReadWriteFs creates the host entry. When mktemp is available and the service account can write the staged skills directory, this source path permits empty file or directory creation inside a mount described as read-only. This is source-traced dependency drift despite no heypi release, not an executed exploit; it does not establish overwriting existing skills or arbitrary outside-root writes.

**Operator consequence.** Inspect the installed just-bash version and re-audit heypi's wrapper against the full current filesystem mutation API. Repair or replace that boundary and validate that temporary-entry creation is refused in /agent/skills before relying on read-only behavior. Account for service-account permissions and command availability. Keep the upstream hard-link and parser fixes; downgrading to heypi's vulnerable 3.1.0 lock is not an adequate mitigation. The human cost is now dependency-boundary review, not merely watching heypi tags.

## 12. Cloudflare 0.12.10 rejects credential-proxy bucket mutations

- **Date:** 2026-09-23 (release and npm publication); fix 2026-09-22T11:44:54Z
- **Channel:** `tagged-release` upstream 0.12.10, within heypi beta adapter ^0.12.3
- **Ancestry evidence:** Fix 08ab8c9430a782683f0937aa13b2d07841f9a459 is the merge base to 0.12.10 commit e4877c7368f8b1620bd4400ff831e28fba152eff, ahead 6 / behind 0. Release published 2026-09-23T10:31:24Z; npm 2026-09-23T10:36:01.964Z. The diff rejects non-GET/HEAD/OPTIONS requests at a bucket root with HTTP 405. Read the immutable diff and release independently.
- **Receipt:** https://github.com/cloudflare/sandbox-sdk/commit/08ab8c9430a782683f0937aa13b2d07841f9a459, https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%400.12.10, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/package.json#L41, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/src/index.ts#L76-L116
- **Half:** both | **Confidence:** high

**What changed.** Cloudflare 0.12.10 adds a bucket-root mutation rejection to credentialProxy mounts while retaining object writes, probes and scoped listings. Earlier proxy behavior could forward bucket-level mutations subject to the real credential's permissions. heypi does not automatically configure such mounts: relevance depends on the caller-owned sandbox using them. The same release fixes intercepted-HTTPS multipart backups above 10 MiB and file recreation after restoreBackup(), for deployments exercising those features. These fixes are available on the compatible 0.12 line; existing consumer locks can retain older permitted versions.

**Operator consequence.** If the Worker's sandbox uses credentialProxy mounts, resolve its SDK to 0.12.10 and review the actual mount credentials and permitted object operations. Inspect the Worker's lock as well as heypi's. Obtain these fixes without moving to the incompatible 1.0 session rewrite. Backup/restore fixes need feature-specific validation; no claim is made that every heypi deployment uses these surfaces.

## 13. just-bash 3.6.0 bundles the smol-toml parsing fix

- **Date:** 2026-10-01 (just-bash release); advisory published 2026-09-22T16:40:12Z
- **Channel:** `tagged-release` just-bash 3.6.0, within heypi beta adapter ^3.1.0
- **Ancestry evidence:** Issuing advisory GHSA-r4xh-jqrq-34v2: medium, no CVE, affected smol-toml <=1.8.0, patched 1.9.0. GitHub global publication/review timestamp in crosscheck: 2026-10-05T23:41:14Z. Bundle fix 632090a60b710608e2180638a757172dc0316b2c committed 2026-10-01T11:11:55Z is the merge base to 3.6.0, ahead 1 / behind 0. Independently read the issuing advisory, yq parser, immutable dependency/changeset diff and release notes.
- **Receipt:** https://github.com/squirrelchat/smol-toml/security/advisories/GHSA-r4xh-jqrq-34v2, https://github.com/vercel-labs/just-bash/commit/632090a60b710608e2180638a757172dc0316b2c, https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0, https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/commands/yq/formats.ts#L219-L221
- **Half:** both | **Confidence:** high

**What changed.** Attacker-controlled ordinary TOML with many keys can take quadratic parsing time in affected smol-toml versions and synchronously stall the event loop. just-bash's yq TOML path invokes that parser. The 3.6.0 release bundles patched 1.9.0; the Node artifact inlines smol-toml, so changing only a downstream smol-toml lock entry does not replace the embedded code. This is a receipted improvement in a dependency available within heypi's range, not proof of an observed heypi denial of service or that every older just-bash artifact embedded the same parser.

**Operator consequence.** Replace an affected old just-bash artifact rather than relying on a downstream parser override. Inspect the actual artifact and TOML-processing exposure. Use 3.6.0's bundled fix while also addressing section 11's skills proxy regression; a security upgrade can carry a new integration problem.

## 14. Gondolin 0.13.0 overrides require explicit compatibility checks

- **Date:** 2026-10-04 (upstream release)
- **Channel:** `tagged-release` Gondolin 0.13.0; excluded by heypi beta adapter ^0.12.0
- **Ancestry evidence:** Read the v0.13.0 changelog and release independently, along with the heypi adapter manifest. Release published 2026-10-04T22:03:12Z. The adapter still declares Node >=23.6 even though upstream reduced its own minimum.
- **Receipt:** https://github.com/earendil-works/gondolin/blob/v0.13.0/CHANGELOG.md#L9-L40, https://github.com/earendil-works/gondolin/releases/tag/v0.13.0, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/package.json#L28-L41, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/src/index.ts#L65-L82
- **Half:** both | **Confidence:** high

**What changed.** The release that fixes hookless internal egress also removes guest XDG_CACHE_HOME, XDG_CONFIG_HOME, XDG_DATA_HOME and UV_CACHE_DIR overrides, lowers upstream Node's minimum to 22.19.0, drops the generated CommonJS shim and makes VM.close() terminal. HTTP-hook secret placeholders now use a shared random marker plus secret name by default, with secretPlaceholderMode: unique to retain unique random placeholders. The same release fixes long-running VM resource/network problems and adds image/cache management. These are upstream changes, not newly shipped heypi behavior.

**Operator consequence.** Before an override, test guest cache locations, VM lifecycle, module loading, secret placeholder assumptions and guest-image-dependent features. Do not lower heypi's Gondolin adapter requirement from >=23.6 merely because upstream changed its own minimum. HTTP-hook configuration on the admitted 0.12.0 remains an alternative to a version override. No override compatibility run was performed.

## 15. heypi 0.3.0-beta.2 remains the install channel without a new release

- **Date:** 2026-07-22 (beta.2 publication); channel rechecked for the 2026-10-13 cutoff on 2026-10-14
- **Channel:** `preview-or-beta` npm latest and tag; no main-only heypi changes; legacy non-prerelease 0.1.3 is separate
- **Ancestry evidence:** All six registry histories end at beta.2 on 2026-07-22T01:15:13.485Z to 01:15:18.675Z. The annotated tag object points to 436da22ceab0bc4e2db133e8626649b4bf76286d at 2026-07-22T01:35:54Z. GitHub releases returned 0, window commits 0, and beta.2...main identical ahead 0 / behind 0. Newest non-prerelease 0.1.3 npm publication 2026-06-04T15:22:07.052Z; its lightweight tag only supplies a commit timestamp, not a tag publication time. Registry tags and absence queries were observed 2026-10-14, not reconstructed dist-tag history.
- **Receipt:** https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent/0.79.10, https://registry.npmjs.org/%40hunvreus%2Fheypi, https://registry.npmjs.org/create-heypi, https://api.github.com/repos/hunvreus/heypi/git/tags/7e126ec748a66db9cd854c2474f630af60a64cbe, https://github.com/hunvreus/heypi/compare/0.3.0-beta.2...main, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/cli.md#L13-L20, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L7-L35, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/guides/deployment.md#L3-L24, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md#L3-L63, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L3-L19
- **Half:** both | **Confidence:** high

**What changed.** No heypi source commit, tag or package publication was found in the window. All six packages still advertise beta.2 as latest. Core declares Node >=22, but a fresh resolution of Pi 0.79.10 declares >=22.19.0; the Gondolin adapter still declares >=23.6 and needs QEMU. npm create heypi@latest -- codex-tag my-agent copies the one Codex Tag template and installs its dependencies, with no adapter/runtime/model interview. The template selects Docker, a bash command policy and loopback admin, always starts a local adapter, adds Slack only when both credentials are supplied and forwards a GitHub token only if supplied. Pi owns model execution/transcripts/tools/session state; heypi owns transport/policy/staging/coordination. It is a supervised Node process with file-backed state and a one-process-per-state-directory deployment contract. The 0.3 rewrite is intentionally incompatible and removed its migration path.

**Operator consequence.** Pin @hunvreus/heypi@0.3.0-beta.2 or create-heypi@0.3.0-beta.2 explicitly for a new evaluation, inspect the selected runtime and generated policies, and keep the consumer lockfile. The old 0.1.3 remains installable but is not the recommended starting point for a new deployment; its older defaults are not beta.2 defaults. Rebuild 0.2.x configurations rather than assuming a migration. Package and dependency activity, not guesses about maintainer intent, should guide operational planning.

## 16. Approval requests fail closed while approver lists remain optional

- **Date:** 2026-07-21 (historical beta.0 implementation); re-verified for the 2026-10-13 profile
- **Channel:** `preview-or-beta` heypi 0.3.0-beta.2 with Pi 0.79.10 source checked
- **Ancestry evidence:** Approval source is unchanged from beta.0 to beta.2. Read heypi policy installation and audit callbacks, request/resolution writes and actor matching. At Pi v0.79.10, emitToolCall propagates handler errors, beforeToolCall rethrows them and the loop produces an error before execution. No cross-watchlist superiority assessment or runtime test was performed.
- **Receipt:** https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L342-L390, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L366-L506, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L274-L291, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/approvals.md#L3-L24, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L1040-L1049, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/telegram.ts#L412-L414, https://github.com/earendil-works/pi/blob/v0.79.10/packages/coding-agent/src/core/extensions/runner.ts#L862-L882, https://github.com/earendil-works/pi/blob/v0.79.10/packages/coding-agent/src/core/agent-session.ts#L415-L433, https://github.com/earendil-works/pi/blob/v0.79.10/packages/agent/src/agent-loop.ts#L578-L625
- **Half:** both | **Confidence:** high

**What changed.** For calls entering the interactive approval-request path, heypi records the request before showing UI and the resolution before continuing. Missing audit context, required write failure, failed UI posting or a non-approved result blocks execution; checked Pi handler exceptions also block. Approvals remain opt-in per tool. With neither admins nor approvers configured, approvalActorAllowed returns true, accompanied by a warning when a policy exists. With lists configured it matches resolvedById and resolvedBy, plus roles/groups; Telegram supplies a username alias alongside numeric ID. This is not exclusively immutable-ID matching or a broad no-spoofing proof. once() remembers approval by tool within the Pi session, not by individual later invocation or requester.

**Operator consequence.** Specify eligible approvers/admins and opt each consequential tool into a policy; configuring names alone does not create a gate. For shared threads needing per-call decisions, use always() rather than relying on a prior once() approval. Do not call the ledger complete per-call execution proof, and do not describe this isolated source check as best on the watchlist. These deliberate identity and decision boundaries can remain valuable even if upstream recovery improves.

## 17. Older admin applications already enabled authentication by default

- **Date:** 2026-06-04 (legacy 0.1.3); rewritten-server fix 2026-07-10; factual correction for the 2026-10-13 profile
- **Channel:** `tagged-release` legacy 0.1.3; `preview-or-beta` old beta.0 and current 0.3 beta; historical correction, no new advisory
- **Ancestry evidence:** The old src/admin/index.ts implementation at 0.1.3 and 0.2.0-beta.0 sets auth=config.auth !== false and protects routes with sessions. Fix 2dd2456e003f08f0ae64466e142d011ec9caa1c7 concerns rewritten src/admin.ts and is 26 commits before beta.0 / 29 before beta.2. Absence of that fix from the older, different implementation does not show absence of authentication.
- **Receipt:** https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/src/admin/index.ts#L119-L129, https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/src/admin/index.ts#L234-L248, https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/src/admin/index.ts#L133-L143, https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/src/admin/index.ts#L250-L264, https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/admin.md#L37-L65, https://github.com/hunvreus/heypi/commit/2dd2456e003f08f0ae64466e142d011ec9caa1c7, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/admin.ts#L287-L318, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L177-L192
- **Half:** both | **Confidence:** high

**What changed.** The rewritten admin server gained required non-loopback bearer-token authentication on 2026-07-10, included in 0.3.0-beta.0. The older 0.1.3 and 0.2.0-beta.0 admin applications already had authentication enabled by default. Current admin construction is opt-in, defaults to 127.0.0.1 and refuses non-loopback startup without a token; wildcard bindings also require configured hosts. The secret-submission route is handled before the general bearer check and has its own request/host handling, so the token statement must not be generalized to every endpoint.

**Operator consequence.** Withdraw the earlier profile's categorical pre-0.3 unauthenticated-admin allegation and blanket disclosure/rotation advice. Only an independently verified exposed revision or deployment could justify that advice. For current beta administration, retain loopback or explicitly configure token/hosts and review the secret handoff separately. This corrects a factual error; it is not an October fix or a new security advisory.

## Prior claims re-checked

- `governance-shell-built-on-pi`: holds, current ownership in section 15.
- `approvals-not-required-by-default`: holds, section 16.
- `bash-approval-command-classifier`: changed; retire the old implicit-default framing and use the explicit opt-in, unmatched-allow claim in section 10.
- `sandbox-just-bash-default-network-off`: retired for beta.2; host is the omission default (section 6). just-bash is optional and its network default remains off. Docker's former network-none default also no longer holds (section 7).
- `gondolin-vm-runtime`: holds as an optional QEMU micro-VM, with section 1's egress gap and section 14's override costs.
- `host-runtime-warning-not-block`: holds for omitted runtime; explicit host() is silent (section 6).
- `secret-webcrypto-handoff`: holds. Browser WebCrypto uses RSA-OAEP/SHA-256 with AES-GCM, encrypted replies are intercepted before Pi, and raw secrets are not written into the workspace. At rest AES-256-GCM uses a key in the same state root; pending request private keys remain in memory and do not survive restart. Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/secrets.ts#L136-L151, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/secrets.ts#L277-L282, https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/secrets.md#L8-L26. Complete-state backup protection claim corrected in section 6.
- `audit-is-typed-trace-events`: retired, replaced by the bounded request-decision JSONL ledger in section 9.
- `scaffolder-create-heypi`: still exists, but the prior configurable onboarding claim retires; one copied template with conditional Slack replaces it (section 15).
- `single-host-node-service-deploy`: holds, now file-backed rather than SQLite. One-process-per-state-directory is the deployment contract; the source lock is per conversation and checks PID liveness, not a global application lock. Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/channel.ts#L149-L166, section 15.
- `durability-no-crash-replay`: holds, with upstream experimental capability in section 5. Webhook intake persists before returning 202 and processing, uses stable IDs, and requires HMAC off-loopback; this is application persistence, not proof of power-loss durability. Receipt: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/adapters/webhook.md#L3-L45.
- `memory-off-not-a-security-boundary`: retired; memory defaults on with bounded relevant recall (section 8).
- `tags-only-no-github-releases`: holds as a dated absence/channel observation (section 15).
- `no-team-adoption-signal-yet`: remains an open question. Stars, downloads and dormant forks do not establish public deployments or maintainer intent.

The prior public claim of universally unauthenticated pre-0.3 administration and its blanket credential-rotation advice are withdrawn, with positive corrected evidence in section 17. The unsupported best-on-the-watchlist approval certification is withdrawn; source-supported fail-closed behavior remains (section 16). The old Pi-churn assertion is reversed for ordinary npm resolution (section 2). No inference that the project is paused rather than abandoned is retained.

## Carry-forward answers

No new heypi commit, tag or package publication was found. Approver/admin lists remain optional; omission permits responses from reachable actors and emits a warning when policies exist. No stable 0.3 or migration contract was found. No matching public heypi advisory was found in the verifier's dated searches; that is not proof of no vulnerabilities. The audit record is queryable but neither complete per-call execution proof nor tamper-evident. Intent and team adoption remain unresolved. The evidence that would settle these questions is a new release/maintainer status statement, default-deny identity code, a protected audit implementation, and a public deployment with concrete configuration and outcomes.

## Cross-watchlist touchpoints

- `pi-coding-agent`: direct embedded harness; the beta's range excludes current Pi and pi-durable. Sections 2 and 5 establish the divergence without implying that a version override integrates recovery.
- `flue`: shares the Cloudflare 0.x adapter migration problem. At v2.3.0 its blueprint pins ^0.11.0 and exports the old Sandbox class, while its runtime wraps a getSandbox() stub; heypi instead depends on ^0.12.3 and uses session calls. Do not transfer heypi's eligible 0.12.10 fix to Flue's narrower blueprint. Independently read receipts: https://github.com/withastro/flue/blob/v2.3.0/blueprints/sandbox--cloudflare.md#L77-L91, https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/cloudflare/cf-sandbox.ts#L1-L53. Shared vendor API drift does not establish identical failure modes or remote behavior.

## Leads not promoted

- The Latent Space Pi 1.0/pi-durable newsletter is a discovery lead; sections 2 and 5 use the issuing project's primary records instead.
- Pi ecosystem approval and Slack gateway packages from the original researcher were not evaluated. Package descriptions and search snippets do not establish multiplayer governance or compatibility with heypi's older Pi.
- GitHub metadata updated_at alone is not a source commit, a tag or a package publication.
- Private adoption and maintainer intent cannot be inferred from public activity elsewhere. No public deployment was established by the reviewed material.
- Historical live-doc sentence identity and exact dist-tag movement times are not established by current fetches. Only website source history and dated registry observations are retained.
- The social capture lane was unavailable to the researcher; no social claim supports these sections.

## Surfaces checked

Original researcher: heypi source at 0.3.0-beta.2 and legacy tags; all six manifests, repository lock, runtime providers, approval/identity, admin, memory, secrets, ledger, deployment and architecture docs; npm histories; heypi tags/releases/commits/issues/forks; website source; upstream Pi, Gondolin, just-bash, Cloudflare and Vercel release/advisory records. Researcher clone reads did not execute cloned code.

Crosscheck: independent pinned-source/registry/tarball reads; GitHub comparisons; repository/global advisories, npm bulk advisories with positive control and NVD keyword searches. Empty searches establish no matching record found, not absence of vulnerabilities.

Author, 2026-10-14: inspected Pi 0.79.10's registry and published package.json in memory to resolve its Node requirement; read the full harvest/crosscheck, brief and prior profile; independently fetched the four misses' pinned sources, introducing/fix diffs, ancestry comparisons, issuing advisory and release records; inspected two published tarballs entirely in memory; queried six heypi and five upstream registry histories, filtered availability through 2026-10-13; checked releases=0, window commits=0, annotated tag and tip comparison; read pinned Docker networking, template conditionals, old/current admin, bounded memory recall, approval early returns and Flue's shared Cloudflare surfaces. No runtime test, install, site build or git write was performed.

## Not reached

No exploit reproduction, runtime compatibility test, Gondolin override validation, complete transitive security review, private deployment audit or current Vercel service probe was performed. ESM/API incompatibilities and the skills-mount regression are source analyses. A repository lock is not a successful-test receipt. The 2026-10-14 advisory-service observation is not a historical cutoff response. Neither package publication nor absence of later publication proves when latest moved. All beta defaults and corrections are scoped to 0.3.0-beta.2 rather than transferred to legacy 0.1.3.

## Crosscheck applied

Applied all seven numbered CORRECTED verdicts and retained the three VERIFIED sections. The one REFUTED historical-admin allegation was removed from the factual record and replaced with pinned positive correction evidence; no numbered section was refuted and no numbered section was UNVERIFIABLE. Independently verified and added M1 to M4 as sections 11 to 14. Sections 15 to 17 make the corrected current channel, approval contract and historical-admin correction addressable in findings. Corrected the dependency snapshot, resolved Pi Node floor (independently checked in manifest and artifact), conditional template behavior, backup protection, Docker pin, recall/audit scope, dated service observations, unsupported comparisons and maintainer-intent inference. Historical corrections remain labelled as such; no heypi shipment is invented.
