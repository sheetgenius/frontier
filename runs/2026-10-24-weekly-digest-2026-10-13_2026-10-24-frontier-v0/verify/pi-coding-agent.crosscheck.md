# Pi Coding Agent adversarial crosscheck

Run: `2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0`.
Window: after `2026-10-13T23:59:59Z` through the verifier's 2026-10-24 UTC reads.
Input: `harvest/pi-coding-agent.primary.md`, read with `RESEARCHER-BRIEF.md`, the source contract and notes, the dated profile, and the house authorities.

Result: **Install today is correct about the newest stable version and npm latest.** Of the 15 numbered sections, **8 are VERIFIED and 7 are CORRECTED**. No whole section is REFUTED or UNVERIFIABLE. These counts cover numbered sections only. Unconfirmed subsidiary assertions are not accepted merely because the surrounding section passes.

The harvest was not edited. No site build, package installation, or cloned-code execution was performed. The only working clone created was the requested blobless, no-checkout clone at `/Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones/pi-coding-agent-verify/`. All git mutations were confined to that scratch clone; none ran against the publication checkout.

## Channel truth and release ledger

Independent registry GETs at **2026-10-24T10:12:54Z through 10:12:56Z**, GitHub release/ref/workflow GETs at **10:12:52Z through 10:12:54Z**, and a final `gh release list` at **10:20:36Z** agree with the harvest:

| Artifact | GitHub published UTC | Prerelease | Ahead / behind previous stable | CLI npm published UTC |
| --- | --- | --- | --- | --- |
| [v1.2.0 baseline](https://github.com/earendil-works/pi/releases/tag/v1.2.0) | 2026-10-12T23:03:53Z | false | 81 / 0 versus v1.1.0 | 2026-10-12T23:03:25.459Z |
| [v1.3.0](https://github.com/earendil-works/pi/releases/tag/v1.3.0) | 2026-10-15T19:17:33Z | false | 63 / 0 versus v1.2.0 | 2026-10-15T19:13:30.662Z |
| [v1.4.0](https://github.com/earendil-works/pi/releases/tag/v1.4.0) | 2026-10-21T22:49:48Z | false | 81 / 0 versus v1.3.0 | 2026-10-21T22:48:58.431Z |

The tag commits are respectively `06a466935536f8c9bcacb2d5efc0fc021be1bdff`, `71023aec1546d6d677a65669c5665c0927ce0dd0`, and `4a080252f06caf63a525d7873c5d94d3c23887e0`. Local `rev-list --left-right --count` produced `0 81`, `0 63`, and `0 81` when each older tag was the left operand. The harvest's ahead/behind presentation is correct. The 144-commit baseline-to-stable total is correct, and is not an authored-in-window count.

- [CLI registry history and dist-tags](https://registry.npmjs.org/@earendil-works%2fpi-coding-agent), [pi-ai](https://registry.npmjs.org/@earendil-works%2fpi-ai), and [pi-agent-core](https://registry.npmjs.org/@earendil-works%2fpi-agent-core): `latest: 1.4.0`, `legacy-node20: 0.74.2`.
- [pi-durable](https://registry.npmjs.org/@earendil-works%2fpi-durable) and [pi-mcp](https://registry.npmjs.org/@earendil-works%2fpi-mcp): only `latest: 1.4.0`. No newer publication or preview dist-tag was present in these records.
- [Old CLI scope](https://registry.npmjs.org/@mariozechner%2fpi-coding-agent): `latest: 0.73.1`, published `2026-05-07T14:45:19.966Z`.
- `stable` equals the v1.4.0 commit. [Nix workflow 39686887389](https://github.com/earendil-works/pi/actions/runs/39686887389) is completed/success, bound to that exact commit and tag. The [tagged flake](https://github.com/earendil-works/pi/blob/v1.4.0/flake.nix) supports the pinned selector. This verifies channel availability, not a local installation.
- Main remained `bdb151774ed6bef2b5676bbff4669f20a0c233fe` at **10:20:37Z**. The local comparison is `0 57`; no newer release was listed. [Pinned comparison](https://github.com/earendil-works/pi/compare/v1.4.0...bdb151774ed6bef2b5676bbff4669f20a0c233fe).

**Installer limitation resolved at this read.** Contrary to the researcher's access result, the [managed installer selector](https://pi.dev/api/installer/releases/latest) returned JSON at **10:12:52Z** and **10:13:28Z**: `schemaVersion: 1`, `version: 1.4.0`, `sourceCommit: 4a080252f06caf63a525d7873c5d94d3c23887e0`, `publishedAt: 2026-10-21T22:49:28.878Z`. It listed versioned package tarballs and integrity values. Replace the current uncertainty with this timestamped observation; retain the researcher's earlier 403 as a historical access result. No installer was executed. The [quickstart](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/quickstart.md) and [manifest](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json) support the install route, Node >=22.19.0, and exact internal dependencies.

The conditional-feature wording also holds: [CLI tool defaults](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/cli.md) leave codemode/tool_search inactive absent activation; [MCP configuration](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/mcp.md#L189-L234) can activate them when servers connect. `autoEnableCodemode: false` does not revoke tool authority. [SDK consumers must load these extensions themselves](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/sdk.md#L110-L116).

## Independent ancestry procedure

For every upstream change SHA below I reran `git merge-base --is-ancestor` against v1.2.0, v1.3.0, v1.4.0 and the checked main. Exit 0 means contained; exit 1 means absent. For main-only findings I also ran `git tag --contains`, which returned no tags. Receipt files were fetched at their stated tags/SHAs; commit patches were read as data. The malformed section 7 receipt returned HTTP 404 and is replaced below.

| Section | First verified release membership or main-only result |
| --- | --- |
| 1 | `f13c00fb`, `0a8cfff4`, `d05a73fb`, `eddebaee`: absent v1.2.0, present v1.3.0 and v1.4.0 |
| 2 | `cea25743`: absent v1.2.0, present v1.3.0 and v1.4.0 |
| 3 | `6f2f164a`: v1.3.0 onward; `bd3c9b82`: absent v1.3.0, present v1.4.0 |
| 4 | `3daa2028`: v1.3.0 onward; `885a564b`: absent v1.3.0, present v1.4.0 |
| 5 | `6fcb4867`, `adfc1446`, `02726086`: absent v1.3.0, present v1.4.0 |
| 6 | `a3f265b1`, `91130942`, `60ac3bcc`: v1.3.0 onward; `caa6967b`, `adc5fa9f`: v1.4.0 onward |
| 7 | Corrected `87f9a36419e8164bba77397d15c54ff39fac5e8a` and `b3997979`: v1.3.0 onward; `8c4e8738`, `bdd9f039`, `38847563`, `7f225f25`, `2ec55d80`: v1.4.0 onward |
| 8 | `f75b3240`, `5c1736f8`: absent v1.3.0, present v1.4.0 |
| 9 | `a30c2a81`, `2ec55d80`, `16f5f0af`: absent v1.3.0, present v1.4.0 |
| 12 | Serializer blob is `1f05a14b4e787259b71d3dee4eef2c7f7d028a9c` at both v1.4.0 and checked main |
| 13 | `9ffd27cf`: absent v1.4.0, present main, no containing tag |
| 14 | `2685de7a`: absent v1.4.0, present main, and does not update the CLI Undici pin |
| 15 | `27cc6bfc`, `9359adf0`, `be14d973`, `92ab5360`, `f715a15c`, `da412b03`, `d8d99950`: absent v1.4.0, present main, no containing tag |

Abbreviations in this table refer to the full pinned SHAs in the harvest, except the explicitly corrected section 7 SHA. The 2026-10-15 and 2026-10-21 dates in released sections are release-event dates, not claims that every constituent commit was authored that day. The four baseline main-only leads changing channel in 1.3.0 are valid in-window events.

## 1. Exact internal versions and Nix repairs: VERIFIED

Read the [pinning patch](https://github.com/earendil-works/pi/commit/f13c00fb3a4d77ad3faa815057e31d614d42b3f1), [stable manifest](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json), [catalog repair](https://github.com/earendil-works/pi/commit/d05a73fb31ea1c55c861115306df8f358a120de1), and successful tag-bound workflow above. Also checked the [removed Nix dependencies](https://github.com/earendil-works/pi/commit/0a8cfff4cbcbbdb0071ebe056f1fcb5710e7fcf0) and [PATH ordering](https://github.com/earendil-works/pi/commit/eddebaeebf8168dfc31d6712b7a021e4df3b4e6a).

The source supports exact internal versions from 1.3.0, a repaired catalog pin, and Node appended as a fallback. The harvest correctly avoids equating exact direct dependencies with a complete npm transitive lock. Channel: tagged-release, first v1.3.0, retained v1.4.0.

## 2. Share destination setting: VERIFIED

Read the [destination patch](https://github.com/earendil-works/pi/commit/cea257439d5666ad6a987c065eb3ab0e230a135d), [settings reference](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/settings.md), and [sharing contract](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/sessions.md#L50-L58). `auto`, `gist`, and `radius`, automatic routing by Radius authentication, and explicit Radius failure without fallback are supported. The setting routes uploads; it does not redact them. Channel: tagged-release from v1.3.0.

## 3. Resume tool restoration and new extensions: VERIFIED

Read the [1.3 restoration patch](https://github.com/earendil-works/pi/commit/6f2f164ab7e7f1516c4530da396b151ab2f84779), [1.4 refinement](https://github.com/earendil-works/pi/commit/bd3c9b823762b7383954aa49e13ee350471015fe), and [stable restoration implementation](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/agent-session.ts#L1825-L1861). It distinguishes tools ever added/removed from newly registered extension tools; default-inactive tools remain inactive. Explicit selection and modifiers retain their described role. The authority consequence is real: a resumed transcript alone does not freeze an extension inventory. Channel dates and versions are correct.

## 4. Codemode cancellation and admission: CORRECTED

Read both the [cancellation patch](https://github.com/earendil-works/pi/commit/3daa20280f6a7c7cbe0935680c9a38fdc3863005) and [queue patch](https://github.com/earendil-works/pi/commit/885a564b3b22dc6eefd55a78a8f6bb757ddfbc69), then the [stable admission and execution code](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts#L56-L110). The two-worker default, positive-integer override, FIFO admission, 60-second wait limit, script-deadline accounting, and release on actual worker exit are supported. Returned cancellation does not prove computation or dispatched effects stopped.

**Exact correction:** replace "bounded queue" with "FIFO admission with a wait of at most 60 seconds." `codemodeWorkerWaiters` is an array with no explicit queue-length cap; it is the wait time and live-worker count that are bounded. Do not imply bounded pending-request memory. Channel: cancellation first v1.3.0; waiting first v1.4.0.

## 5. Summary output caps and recovery: CORRECTED

Read the [cap-removal patch](https://github.com/earendil-works/pi/commit/6fcb48670fc0e6672a644f3b2691010321734426), [split-prefix instructions patch](https://github.com/earendil-works/pi/commit/adfc14461aa11adbf486efad9b0ede2dc0dab06a), [orphan-result recovery patch](https://github.com/earendil-works/pi/commit/02726086d11c2911aa872959e308b90d69182392), and [coding-agent summary construction](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/compaction.ts#L681-L722). The stated CLI mechanisms ship in v1.4.0.

**Exact correction:** scope the title and first sentence to **coding-agent compaction and branch summaries**. Do not extend the cap-removal claim to Pi Durable. [Durable v1.4.0 still passes `maxTokens` derived from `floor(0.8 * policy.reserveTokens)` and the model limit](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/compaction.ts#L140-L151). Its `reserveTokens` can still affect summary output. This distinction matters because the harvest also recommends separately versioned Durable hosts.

## 6. Provider routing, caching and defaults: VERIFIED

Read the [1.3 AI changelog](https://github.com/earendil-works/pi/blob/v1.3.0/packages/ai/CHANGELOG.md), [1.4 AI changelog](https://github.com/earendil-works/pi/blob/v1.4.0/packages/ai/CHANGELOG.md), [CLI changelog](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/CHANGELOG.md), [provider documentation](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/providers.md), and [client-identity relocation](https://github.com/earendil-works/pi/commit/adc5fa9f800bee587e35b1a7b316e4b11a8aef24). Independently checked ancestry for the Kimi, thinking, Responses caching, and identity commits listed above.

The Kimi `/v1` migration, supported GPT-6 effort/cache handling, foreign-model thinking removal, three named model-default changes, rejected Codex model removals, classifier pricing correction, and header-hook change are supported. Null removal remains supported despite later attribution insertion. These receipts establish request/catalog behavior, not task-quality or universal token-saving results. Release dates and split between 1.3.0 and 1.4.0 hold.

## 7. Tool repairs and SDK breaks: CORRECTED

The harvest's `87f9a36419e8168dfc31d6712b7a021e4df3b4e6a` receipt is malformed and returned **HTTP 404**. It cannot support the claim or the stated ancestry.

**Exact correction:** replace every occurrence and link with [87f9a36419e8164bba77397d15c54ff39fac5e8a](https://github.com/earendil-works/pi/commit/87f9a36419e8164bba77397d15c54ff39fac5e8a). I read its parser/validation changes and independently verified absence from v1.2.0 and inclusion in v1.3.0/v1.4.0. It attaches `argumentsError` and raw text instead of executing a parsed prefix, while retaining the existing string-repair behavior.

Also read the [grep repair](https://github.com/earendil-works/pi/commit/8c4e873899b97f6abd14bc45928ccb465f83010c), [tagged CLI changelog](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/CHANGELOG.md), and both [1.3](https://github.com/earendil-works/pi/blob/v1.3.0/packages/ai/CHANGELOG.md) and [1.4 SDK breaking-change records](https://github.com/earendil-works/pi/blob/v1.4.0/packages/ai/CHANGELOG.md). BOM handling, dialog stacking, classifier images, removed frame exports, telemetry span rename, user-agent API removal, and transcript-tool API replacement are supported. The remaining section survives with the corrected receipt.

## 8. Durable sleeps and SQLite migration: VERIFIED

Read the [tagged breaking changes](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/CHANGELOG.md), [host-wake contract](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L139-L220), [schema migrations](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/storage/sqlite/migrations.ts#L91-L137), and [Cloudflare's dated SDK 0.30.0 announcement](https://developers.cloudflare.com/changelog/post/2026-10-22-pi-harness-pi-1-4/).

The new sleeping state, removed `runtime.sleep()`, host wake ownership, automatic schema-2 migration, older SQLite reader incompatibility, JSONL sleeping-state limitation, and required `checkpointWhen` are supported. The older 1.3 namespace/system-baseline/base64 fixes are documented separately. Channel: Pi tagged-release v1.4.0 on 2026-10-21; Cloudflare's separately dated integration announcement is 2026-10-22. The Cloudflare page is a dated official document, not immutable code or proof of a deployed user workload.

## 9. Crash-loop parking, telemetry and browser storage: CORRECTED

Read the [scheduler](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/scheduler.ts), [default of five](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/agent.ts#L54-L61), [Durable contract](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md), and [Pi Pocket's explicit Infinity override](https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/src/server/app.ts#L1083-L1100). Crash counting applies to every running task found after an unclean interruption; committed progress resets it. The `keep` default, IndexedDB backend, dynamic settings/models, and diagnostic-text qualification are supported.

**Exact correction:** replace "requires `retryTask()` to run again" with "stays parked at the current limit; `retryTask()` clears its restart count, and raising `restartLimit` can also make it runnable." The [scheduler explicitly reconsiders parked tasks after a raised limit](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/scheduler.ts#L1395-L1407), and calls that path during scheduling. Do not describe parking as a gate only an explicit per-task retry can reopen. Channel: v1.4.0; the Pocket override is independently present in released v0.21.0.

## 10. Independently versioned ecosystem: CORRECTED

The core identity and dependency claims check out. I opened every linked manifest/README/code receipt, the named release objects, the fixed-date npm download endpoints, the dated Vercel announcement, and the pinned Cloudflare example README. Independent release reads confirmed:

| Project | Newest release / published UTC | Verified Pi dependency or source status |
| --- | --- | --- |
| [pi-web](https://github.com/agegr/pi-web/blob/v0.12.2/package.json) | v0.12.2 / 2026-10-15T15:15:42Z | Exact 1.2.0; loopback default and optional authentication in tagged README |
| [pi-gui](https://github.com/minghinmatthewlam/pi-gui/blob/v1.0.1/packages/pi-sdk-driver/package.json) | v1.0.1 / 2026-09-26T22:08:40Z | `^0.87.1`, outside-window release inventory |
| [piclaw](https://github.com/rcarmo/piclaw/blob/v3.3.4/package.json) | v3.3.4 / 2026-10-15T23:31:56Z | Exact 1.2.0; [pinned later engine](https://github.com/rcarmo/piclaw/blob/1d66eaf09e45203b24aaaee0384540824c2caefe/runtime/durable-engine/package.json) uses 1.3.0 |
| [Oh My Pi](https://github.com/can1357/oh-my-pi/blob/v18.12.6/packages/coding-agent/CHANGELOG.md) | v18.12.6 / 2026-10-21T21:02:53Z | Independent fork; in-window dispatch retry, cancellation and ACP changes |
| [Pi Pocket](https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/package.json) | v0.21.0 / 2026-10-23T23:13:02Z | Exact Pi/Durable 1.4.0, with host overrides |

All five are non-prereleases. The six tag-to-researcher-head compare API calls, including the adapter, returned exactly `34/0`, `38/0`, `453/0`, `170/0`, `4/0`, and `3/0` ahead/behind. Registry reads at **10:15:23Z through 10:15:24Z** confirmed the recorded pi-web, OMP, adapter, and subagent dist-tags. All eight fixed-interval download endpoints reproduced the harvest's numbers, including 2,875,191 CLI downloads for October 14-23 and the lower comparable following week.

The [Ultimate source and warning](https://github.com/HazAT/ultimate/blob/4aaa0744c220660170c71e797ca35168f9855cf4/README.md), [Vercel adapter](https://github.com/vercel-labs/durable-harness/blob/ea8aa4060cf4fb8cd39737ce8ab21c4e0f40c741/packages/durable-harness/src/pi-durable.ts), [Cloudflare example](https://github.com/earendil-works/pi-durable-cloudflare/tree/dcb56ce2d174babb3f00112ac5b8cd597e58ab45), and [23-component host integration contract](https://github.com/IgorWarzocha/pi-durable-components/blob/ff771e11211fba7257393acb47300480fc89e0ca/README.md) support their narrower source-level claims. I did not establish release membership for every source snapshot. No released-status inference for those snapshots is accepted.

**Exact corrections:**

- Do not label the whole section `tagged-release`. Split tagged downstream releases, source snapshots whose release membership has not been proved, and dynamic discovery/adoption observations. The table's local qualifications are useful but do not make the single section channel true for every row.
- Do not carry the package count forward as an evergreen 5,345. The [catalog](https://pi.dev/packages) displayed **5,347** at the independent **2026-10-24T10:19:31Z** read. The earlier timestamped 5,345 was not independently reproducible; retain it only as the researcher's observation or replace it with the new timestamped count. It is not a unique-user or reviewed-extension count. Pi and OMP star counts had also advanced to 117,522 and 36,422; the other five matched. Such movement does not refute an earlier timestamped snapshot.

## 11. Adapter removes its script engine and changes approval routing: VERIFIED

Read the [v6.0.0 release](https://github.com/nicobailon/pi-mcp-adapter/releases/tag/v6.0.0), [breaking changes](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md), [codemode factory bridge](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/codemode-bridge.ts), [approval implementation](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/tool-approval.ts), tagged README, and [Executor pause patch](https://github.com/nicobailon/pi-mcp-adapter/commit/234caf72dfd924e36adccdc39ea9925a413f5983).

The removed `mcpScript`, Jev evaluation/settings, bundled skill and QuickJS dependency, deferred real tool identities, reusable scriptTools, model-resume refusal and headless failure are supported. The implementation recognizes the specified Executor integration; this is not a universal approval broker for arbitrary MCP servers. Compare API calls from `234caf72...` and `d0e77a15...` to v6.0.0 returned ahead with zero behind, independently establishing inclusion. Release publication `2026-10-22T20:41:03Z` and npm publication `20:42:18.459Z` match. Native Pi MCP is not newly introduced by this adapter release.

## 12. Compaction research and present serializer: VERIFIED

Opened [arXiv v1](https://arxiv.org/abs/2610.29869v1), which records submission **2026-10-21T15:24:23Z**, the [pinned Pi disclosure](https://github.com/pixee/compaction-laundering/blob/9ce87b71301c628dfcd9232b01f1ccbdb0e67b16/disclosure/pi.md), [stable serializer](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/utils.ts#L120-L155), and [summary request construction](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/compaction.ts#L681-L725).

The paper's event date is in-window; the private report and historical bug are older. The disclosure reports Pi v0.79.0, 3/6 poisoned runs versus 0/5 controls. The current serializer still embeds unescaped content under text role labels and submits the flattened conversation in one user message. Tool-result content is truncated to 2,000 characters, not escaped into typed provenance. Identical stable/main blobs confirm retention of this mechanism. Neither that code observation nor the old experiment establishes a Pi 1.4 exploit rate. The harvest keeps that distinction correctly. Channel: docs-only research event plus tagged v1.4.0 mechanism inspection.

## 13. MCP OAuth scheme hardening: VERIFIED

Read the [fix and regression tests](https://github.com/earendil-works/pi/commit/9ffd27cfaaeed5c1ecf9369f393c3222975729b4), [stable URL parser](https://github.com/earendil-works/pi/blob/v1.4.0/packages/mcp/src/oauth/types.ts#L126-L132), and [stable flow](https://github.com/earendil-works/pi/blob/v1.4.0/packages/mcp/src/oauth/flow.ts). The stable blacklist permits `file:` and custom schemes; the patch allowlists HTTP/HTTPS and checks the authorization entry point again. A malicious server can induce a platform protocol-handler handoff during sign-in. The harvest correctly avoids claiming universal remote code execution.

Commit date is 2026-10-23. Independent ancestry: stable exit 1, main exit 0, no containing tags. Channel: main-unreleased; npm latest 1.4.0 lacks the fix. The repository advisory API contained four June advisories and no October publication.

## 14. Undici affected dependency: CORRECTED

Read the [stable manifest](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json), [dispatcher and global installation path](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/http-dispatcher.ts#L81-L112), [main dependency-update patch](https://github.com/earendil-works/pi/commit/2685de7a1785f1835a9d3d684e16c29789e4eaa8), each canonical GHSA, and their upstream advisory API records. Both stable and checked main retain CLI Undici 8.10.2. The affected ranges include it; 8.12.2 is the fixed 8.x floor.

**Exact correction to the timeline:** these were published by **nodejs/undici on 2026-10-15**, then added to the GitHub Advisory Database on **2026-10-23**. Do not describe October 23 as their first disclosure. Upstream publication times are `16:01:26Z`, `16:01:04Z`, and `15:59:40Z` respectively; database publication times are `2026-10-23T22:14:31Z`, `22:13:29Z`, and `22:12:57Z`. Keep both dates if describing discovery lag.

- [CVE-2026-109869 / GHSA-xjj6-f33q-929c](https://github.com/advisories/GHSA-xjj6-f33q-929c): a hostile server sends more than five content codings and closes before the body. An orphaned internal stream can emit an unhandled error and terminate Node even if fetch rejection is caught. Replace the looser "malicious compressed response" description with these triggering conditions.
- [CVE-2026-109924 / GHSA-4qv8-2p9j-2685](https://github.com/advisories/GHSA-4qv8-2p9j-2685): a malicious SSE peer can make Undici EventSource retain unbounded parser state and exhaust process memory. This is availability loss, not demonstrated code execution.
- [CVE-2026-109841 / GHSA-f72v-6w45-q472](https://github.com/advisories/GHSA-f72v-6w45-q472): a response can bypass a pinned integrity digest when the application uses an uppercase or mixed-case algorithm token that Undici skips. The attacker controls response bytes; it need not change the application's digest metadata.

The CLI fetch path is present; EventSource and integrity-option reachability remain unproved. A package-range match is not an executed Pi exploit. NVD detail URLs were opened but yielded no usable detail text in this read, so the mechanism/ranges/timestamps above rely on the primary upstream and GHSA records. Channel: advisory documents about a dependency present in tagged v1.4.0, with no verified tagged CLI repair. See the separately patched Pocket graph under misses.

## 15. Main cancellation, export, stream and Durable changes: CORRECTED

Read the [macOS patch](https://github.com/earendil-works/pi/commit/27cc6bfc0c2ca0bfdd983d3db4c992a2bfae9cc6), [system-message export patch](https://github.com/earendil-works/pi/commit/9359adf0c6df974b2059b597e632a14cf1942c30), [incremental parsing patch](https://github.com/earendil-works/pi/commit/f715a15c101ca8a44d759bceeb7ec2a51024c81c), [pinned Durable unreleased contract](https://github.com/earendil-works/pi/blob/bdb151774ed6bef2b5676bbff4669f20a0c233fe/packages/durable/CHANGELOG.md), and [pinned CLI notes](https://github.com/earendil-works/pi/blob/bdb151774ed6bef2b5676bbff4669f20a0c233fe/packages/coding-agent/CHANGELOG.md). Stream appends, watcher coalescing, read-only mode, adopt callback, renamed watch endings, removed getters, login confirmation and architecture handling are supported. These are untagged changes, not 1.4.0 capabilities.

**Exact correction:** replace "so a following command in a list does not start during teardown" with "to reduce the race in which a following command starts during teardown." The macOS implementation explicitly calls this **best-effort**, not an atomic freeze, and retains kill fallbacks when stopping fails. A `SIGSTOP` before `SIGKILL` is not proof that no subsequent command can ever begin. No process-level cancellation experiment was run. The main snapshot and no-containing-tag results above support the channel.

## Prior claims re-checked at newest stable

I independently spot-checked the claims carrying the largest security/default consequences. These are source findings, not runtime acceptance tests:

- **Project trust and headless refusal hold.** [Trust evaluation](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/project-trust.ts#L47-L88) gives overrides, extension decisions and saved trust precedence; undecided ask-mode without UI returns false. [Security documentation](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/security.md) explicitly separates startup resource trust from tool permissions.
- **Context and session-directory exposure hold.** [Startup selection](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/main.ts#L671-L695) and the tagged security contract retain CLI/env precedence and the project sessionDir lookup before trust. Context files load regardless of trust unless context loading is disabled.
- **Native MCP and inherited process authority hold.** [Configuration loading](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/mcp/config.ts), [startup behavior](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/mcp.md#L98-L102), and [stdio transport](https://github.com/earendil-works/pi/blob/v1.4.0/packages/mcp/src/transports/stdio.ts) support project trust gating, startup connections and inherited environment. The source contract's old MCP-omission note remains stale.
- **Codemode model-call control gap holds.** [Nested tools call `ctx.executeTool`](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts#L530-L543), while [classifiers/images call Models directly](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts#L832-L846). The [factory models switch defaults true](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/index.ts#L14-L45). The worker queue does not add per-model-call tool approval.
- **Declaration hiding is still not execution denial.** [Callable-tool filtering](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/agent-session.ts#L1578-L1586) retains codemode/deferred reach, and [the agent loop resolves calls against active tools](https://github.com/earendil-works/pi/blob/v1.4.0/packages/agent/src/agent-loop.ts#L718-L738). `--tools` and codemode-only projection cannot substitute for tool authorization.
- **Standalone dotenv/build hardening holds as a recipe.** [Binary build flags](https://github.com/earendil-works/pi/blob/v1.4.0/scripts/build-binaries.sh#L132-L135) disable compiled dotenv and bunfig autoload. Distributed binaries were not executed.
- **Private output creation holds.** [Output files](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/utils/output-files.ts#L14-L33) use mode 0600 and exclusive `wx` creation for both write paths. This does not establish permissions for arbitrary extension output.
- **Hidden exports remain visible to a recipient.** [The HTML viewer](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/export-html/template.js#L1335-L1339) embeds display-false content and has a toggle for it. Hidden is not redacted.
- **HTTP MCP cancellation remains a pre-dispatch check.** [Stable transport](https://github.com/earendil-works/pi/blob/v1.4.0/packages/mcp/src/transports/streamable-http.ts#L289-L316) checks cancellation after asynchronous authentication and before request dispatch. It cannot undo server-side work already sent.
- **Text truncation still signals job failure.** [Print handling](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/modes/print-mode.ts#L139-L164) retains partial text with a warning and exit 1 for a text-only length stop.
- **The four pending release claims changed as reported.** Internal pins, explicit share routing, resume restoration and worker admission first reach v1.3.0; 1.4.0 adds the independently checked refinements. The installer selector uncertainty can now be removed using the timestamped response above.

The unresolved current HarnessTax replication, current-version compaction exploit rate, account entitlement, and exactly-once arbitrary external effects remain unresolved. Nothing in these source reads clears them.

## Material misses

### M1. Durable per-model compaction policy is new in stable

**Date/channel:** released 2026-10-21, tagged-release v1.4.0. [The v1.3.0 contract](https://github.com/earendil-works/pi/blob/v1.3.0/packages/durable/README.md) has no modelOverrides setting; [v1.4.0 documents it](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L565-L582), [types it](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/types.ts#L516-L522), and [resolves each policy field for the exact provider/modelId](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/compaction.ts#L261-L270). [Generation uses it for thresholds and overflow](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/generation.ts#L173-L180).

Hosts serving small and large model windows can stop applying one compaction budget to all models. Recheck reserve, retained history and background thresholds per route. This is a capability addition omitted from sections 8/9, and it does not imply Durable's summary-output cap was removed. Tag-to-tag file reads establish the change; the commit title alone was not used as evidence.

### M2. Installed extensions can import the public pi-ai/models subpath

**Date/channel:** commit 2026-10-20, first tagged-release v1.4.0 on 2026-10-21. [22dc6c26f3c530e11b8cc40443ecdce2b3c84116](https://github.com/earendil-works/pi/commit/22dc6c26f3c530e11b8cc40443ecdce2b3c84116) adds loader aliases and bundled virtual modules for `@earendil-works/pi-ai/models` and the legacy spelling. Local ancestry is absent v1.3.0, present v1.4.0.

Extensions using public model helpers such as `clampThinkingLevel` no longer fail with Cannot find module through that loader. Authors can remove an import workaround after verifying the installed host. This is an extension compatibility repair, not just generated reference documentation.

### M3. Main continues startup after a configured package cannot install

**Date/channel:** 2026-10-23, main-unreleased. [6dfb5467851adb603d525f9c27e28f341e3f08b9](https://github.com/earendil-works/pi/commit/6dfb5467851adb603d525f9c27e28f341e3f08b9) catches package-install failures, skips their resources, and reports warnings; next startup or reload retries. Explicit install/update commands still fail nonzero. Local ancestry: stable exit 1, main exit 0, no containing tag.

This changes failure behavior at an extension boundary and is missing from section 15. A source-based operator who relies on a package for policy must verify that it actually loaded before admitting work. Treating a startup warning as cosmetic can leave the host running without that package's behavior. This is a consequence inferred from the skipped resources, not a demonstrated bypass of a named policy extension. Pi 1.4.0 is not claimed to contain it.

### M4. Main distinguishes provider-reported OpenRouter totals from estimates

**Date/channel:** 2026-10-22, main-unreleased. [7c22a93d0ed02092142fa63823e63d76aa4e2406](https://github.com/earendil-works/pi/commit/7c22a93d0ed02092142fa63823e63d76aa4e2406) adds `usage.cost.totalFromProvider`; [cae8d69e572e038d584c881efd1818e40571fb7c](https://github.com/earendil-works/pi/commit/cae8d69e572e038d584c881efd1818e40571fb7c) consumes OpenRouter accounting for Chat Completions and Anthropic Messages. Both are absent stable, present main, with no containing tag.

With valid accounting, total cost can include OpenRouter's charge and BYOK upstream inference charges. Components remain catalog estimates and need not sum to the reported total; missing/invalid accounting falls back. Cost dashboards and exports must preserve that distinction rather than recomputing total from estimated components. This is an omitted provider/economics contract change, not proof that a workload became cheaper.

### M5. Main repairs Gemini const schemas without rewriting literal data

**Date/channel:** 2026-10-23, main-unreleased. [7314819f0fe30fa616f32fa3a1fc8d1a856a1446](https://github.com/earendil-works/pi/commit/7314819f0fe30fa616f32fa3a1fc8d1a856a1446) rewrites string/number schema const values into singleton enums because Gemini ignores const; [a7b94a03f09f20f4937fa1a76339014c60d261ad](https://github.com/earendil-works/pi/commit/a7b94a03f09f20f4937fa1a76339014c60d261ad) restricts traversal to schema-bearing keywords and preserves names such as `__proto__`. Both are absent stable, present main, no containing tag.

Custom-tool authors should include literal/default/example values and named property maps in next-release compatibility checks. This removes a provider-schema workaround while avoiding mutation of data that merely resembles a schema. It is omitted from section 15 and is not present in npm latest 1.4.0.

### M6. Pi Pocket has a patched Undici graph despite its Pi dependency

**Date/channel:** [Pi Pocket v0.20.0](https://github.com/TannerMidd/pi-pocket/releases/tag/v0.20.0), non-prerelease, published **2026-10-22T23:17:17Z**; retained in v0.21.0. The [0.20 manifest](https://github.com/TannerMidd/pi-pocket/blob/v0.20.0/package.json) and [0.21 manifest](https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/package.json) declare Undici 8.12.3 and a root override. The [v0.21 lockfile](https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/package-lock.json) resolves `node_modules/undici` to 8.12.3.

That is beyond the [8.12.2 patched floor for the three cited advisories](https://github.com/advisories/GHSA-xjj6-f33q-929c). Do not infer that this host inherits Pi's vulnerable 8.10.2 graph merely because it embeds Pi 1.4.0. This is a concrete security counterexample missing from sections 10/14. The tagged declaration/lock are verified; an installed Pocket artifact was not audited or executed.

## Other leads, rule checks and limits

- The main [repository-local `/ir` helper adds HTTP(S) JSONL session import](https://github.com/earendil-works/pi/commit/5884ee6816e7a89cf93c3b67b235c605352d6ae7). It lives in `.pi/extensions/import-repro.ts`; it is not a new bundled CLI command. Its main-only ancestry was checked. This is lower-priority contributor workflow inventory, not a seventh material product miss.
- The [models.json reference generation](https://github.com/earendil-works/pi/commit/8efd314fa3d3232ce197d8d7a6a5660530b9d83e) and remaining terminal/platform repairs are useful release inventory, but are not elevated above the compatibility and authority consequences above.
- The [repository security-advisory surface](https://github.com/earendil-works/pi/security/advisories) was independently enumerated. It returned four advisories published June 8, 2026 and updated June 12, not new October Pi advisories. This is a statement about published records, not absence of undisclosed bugs. The global affected-Undici query returned precisely the three advisories discussed in section 14.
- The [MIT license at stable](https://github.com/earendil-works/pi/blob/v1.4.0/LICENSE) remains present; the baseline-to-main license diff was empty. No new scope migration, removed distribution channel, prerelease, or stable selector advance was found. The repaired Nix channel is already covered.
- All numbered code receipts are tag/SHA pinned except the broken section 7 URL, corrected above. Official dated documents, advisory records, registry pointers and adoption counters are mutable records and must retain their read times. They cannot become immutable historical snapshots by linking them.
- No social post was quoted or used to clear a product claim. The harvest keeps launch rhetoric, benchmark/token slogans, privacy claims, account anecdotes and actual source behavior separate. The Vercel announcement was checked as an announcement; the pinned adapter was checked for its mechanism. Marketing does not establish universal exactly-once external effects or comparative cost.
- CVE/GHSA descriptions must retain the plain-language attacker action and effect in section 14. A named identifier or the phrase integrity issue alone is insufficient. The compaction research stays a historical experiment plus current source mechanism, without an assigned current exploit success rate.
- No exploit, worker kill experiment, fault-injection recovery run, install, provider account operation, downstream app execution, Nix activation, or comparative benchmark was performed. Claims of those outcomes remain rejected. This verification uses current primary records, source inspection and independently rerun ancestry.

The original harvest SHA-256 before writing this file was `d55d265346ff59b9db220b132d43bd6c4d09039d41f92a3cd08116c5957f40d7`. The final read-back matched it. ASCII, all 15 numbered verdicts, their 8/7 totals, and all six material-miss headings passed the local artifact check. This crosscheck is the only repository document written.
