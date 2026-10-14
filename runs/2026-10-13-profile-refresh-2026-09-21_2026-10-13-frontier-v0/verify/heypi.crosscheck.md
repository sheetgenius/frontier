# heypi adversarial crosscheck

Run: `2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0`.
Window: 2026-09-21 through 2026-10-13. Profile date: 2026-10-13.
Independent verification performed 2026-10-14.

**Disposition: correct before publication.** The central channel observation holds: heypi has not shipped another version. The harvest nevertheless contains stale upstream versions, an incorrect historical security allegation, and missing dependency changes that affect the current beta.

**Install today correct: false.** The heypi version is correct; the dependency snapshot and several qualifications are not.

Counters cover the ten numbered findings plus the critical historical-admin claim in the prior-claims review: **VERIFIED 3, CORRECTED 7, REFUTED 1, UNVERIFIABLE 0**. The ten numbered findings alone are 3 VERIFIED and 7 CORRECTED. Other scope and receipt limitations below are not additional counted findings.

## Method and custody

Read THESIS.md, METHOD.md, EDITORIAL.md, CONTRIBUTING.md, the researcher brief, source contract and notes, existing profile, parent harvest, and current harvest. Used the permitted compare-API route instead of creating a clone. Independently queried GitHub releases, tags, branches, comparisons and advisories; fetched pinned raw files; queried npm registry packuments and version manifests, including their complete publication histories; inspected selected npm tarballs in memory without extracting or executing them. These registry reads are the underlying data exposed by npm view.

All 68 initially fetched pinned source/artifact URLs returned HTTP 200. Additional source reads covered the legacy stable admin server, old beta admin server, Cloudflare's rewritten package, and just-bash's new filesystem methods. Release metadata and advisory records were read through the issuing repositories' API. No git write command, package installation, site build, cloned-code execution, or runtime exploit test was performed. Only this crosscheck file was written.

A current registry response proves the observed dist-tags, not the time a dist-tag moved. Publication times below are registry or GitHub API timestamps, not inferred from prose dates. Historical live-doc identity and historical audit-service responses cannot be reconstructed from a current fetch alone.

## Channel truth and release ledger

Independent `gh release list` returned `[]`; the tags API returned eight tags. The only branches are main at `436da22ceab0bc4e2db133e8626649b4bf76286d` and the old admin branch at `19f1062bc0993a620ac5de4f263c0d78086cbeee`. The window commits query returned `[]`. The [beta-to-main comparison](https://github.com/hunvreus/heypi/compare/0.3.0-beta.2...main) was identical, ahead 0, behind 0. This moving comparison was used only to observe the channel; source claims below use tags or SHAs.

| Item | Independent result |
| --- | --- |
| Parent baseline and current npm target | `0.3.0-beta.2`, commit `436da22ceab0bc4e2db133e8626649b4bf76286d` |
| Annotated tag time | 2026-07-22T01:35:54Z, [tag object](https://api.github.com/repos/hunvreus/heypi/git/tags/7e126ec748a66db9cd854c2474f630af60a64cbe) |
| Core npm publication | 2026-07-22T01:15:13.485Z, [core registry](https://registry.npmjs.org/%40hunvreus%2Fheypi) |
| Newest non-prerelease version | `0.1.3`; npm 2026-06-04T15:22:07.052Z; [commit](https://github.com/hunvreus/heypi/commit/a4f69da2ed64d42fc25e75341956ce7c34f77e73) is dated 2026-06-04T15:21:13Z |
| Beta versus newest non-prerelease | [257 ahead, 0 behind](https://github.com/hunvreus/heypi/compare/0.1.3...0.3.0-beta.2) |
| New heypi release or publish in window | None found |

The ledger's heypi numbers are correct. Its prerelease column describes semver: there are no GitHub release objects carrying a prerelease flag. The `0.1.3` timestamp in the tag column is a commit timestamp; a lightweight tag does not establish its creation/publication time. `0.1.3` remains explicitly installable, although it is the old architecture and is not npm latest. Replace the categorical "not an install target" with an editorial recommendation not to start a new deployment on that legacy line. Do not call the current beta a stable release.

All six package records independently returned only `latest: 0.3.0-beta.2`:

| Package | Last publication, UTC |
| --- | --- |
| [@hunvreus/heypi](https://registry.npmjs.org/%40hunvreus%2Fheypi) | 2026-07-22T01:15:13.485Z |
| [@hunvreus/heypi-runtime-cloudflare](https://registry.npmjs.org/%40hunvreus%2Fheypi-runtime-cloudflare) | 2026-07-22T01:15:14.387Z |
| [@hunvreus/heypi-runtime-gondolin](https://registry.npmjs.org/%40hunvreus%2Fheypi-runtime-gondolin) | 2026-07-22T01:15:15.561Z |
| [@hunvreus/heypi-runtime-just-bash](https://registry.npmjs.org/%40hunvreus%2Fheypi-runtime-just-bash) | 2026-07-22T01:15:16.592Z |
| [@hunvreus/heypi-runtime-vercel](https://registry.npmjs.org/%40hunvreus%2Fheypi-runtime-vercel) | 2026-07-22T01:15:17.689Z |
| [create-heypi](https://registry.npmjs.org/create-heypi) | 2026-07-22T01:15:18.675Z |

The npm manifests' `gitHead` is `d1a2ebead2d2dddda353e5c0804c31e7b6cc89b5`. The [comparison to the tag](https://github.com/hunvreus/heypi/compare/d1a2ebead2d2dddda353e5c0804c31e7b6cc89b5...436da22ceab0bc4e2db133e8626649b4bf76286d) has two commits and no changes under package source directories. It does change example files as well as docs, manifests and the lockfile. That source comparison alone is not a reproducible-build proof. Independently inspected the published core's model import, its absence of a consumer lockfile, and the just-bash adapter's compiled proxy. No whole-package build-equivalence claim is made.

The [scaffolder docs](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/cli.md#L13-L20), [quickstart](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/getting-started/index.md), and [template](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L7-L35) support the installation commands and Docker/approval/admin configuration. Correct "adds Slack" to "adds Slack only when both Slack credentials are supplied"; the template always starts with the local adapter. `GITHUB_TOKEN` is also optional, not an always-present credential.

Correct the upstream snapshot:

- Cloudflare latest is **1.0.1**, published 2026-10-13T10:20:44.828Z; its [non-prerelease release](https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%401.0.1) was published 2026-10-13T10:18:41Z. The [registry](https://registry.npmjs.org/%40cloudflare%2Fsandbox) also has beta, next, rc and release-0-12-6 tags. The heypi range still tops out at 0.12.10.
- Vercel latest is **3.8.0**, published 2026-10-13T21:36:59.609Z; its [non-prerelease release](https://github.com/vercel/sandbox/releases/tag/%40vercel/sandbox%403.8.0) was published 2026-10-13T21:35:29Z. The [registry](https://registry.npmjs.org/%40vercel%2Fsandbox) also has beta=3.4.0-beta.0. heypi still pins 2.6.0 exactly.
- Pi 1.2.0, pi-durable 1.2.0, Gondolin 0.13.0 and just-bash 3.6.0 match the harvest. Their heypi ranges still select 0.79.10, no pi-durable integration, 0.12.0 and 3.6.0 respectively on an ordinary fresh resolution without an existing lockfile or override. Existing installations can retain earlier permitted versions.

The website repository still ends at [2115e329, 2026-07-22](https://github.com/hunvreus/heypi-website/commit/2115e3296dd78d54664efcbb455e200a3df4c0c3). This supports "no website source commit in the window", not a categorical claim that no deployed page ever changed. The harvest's sentence-match counts were not reproduced and must not become independent historical proof.

## 1. Gondolin internal-network egress: VERIFIED

Read the [v0.13.0 changelog](https://github.com/earendil-works/gondolin/blob/v0.13.0/CHANGELOG.md#L12), [fix diff](https://github.com/earendil-works/gondolin/commit/494cf18b7bd8cef7b63e1ae3665cb770c5ced0de), [release](https://github.com/earendil-works/gondolin/releases/tag/v0.13.0), heypi's [dependency](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/package.json#L41) and [VM construction](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/src/index.ts#L65-L82). Also read the old [network claim](https://github.com/earendil-works/gondolin/blob/v0.12.0/docs/network.md#L261-L265), old HTTP enforcement, and [hook defaults](https://github.com/earendil-works/gondolin/blob/v0.12.0/host/src/http/hooks.ts#L143-L147).

Independent comparison: fix to v0.13.0 is ahead 29, behind 0, with the fix as merge base; fix to v0.12.0 is behind 29. v0.12.0 to v0.13.0 is ahead 58, behind 0. Fix timestamp is 2026-10-01T11:25:20Z; release 2026-10-04T22:03:12Z; npm 2026-10-04T22:12:17.630Z.

The mechanism is supported: hookless guest HTTP/TLS could reach internal addresses, including host-local services and metadata endpoints. The heypi adapter supplies no policy of its own and its caret range cannot select 0.13.0. Caller-supplied HTTP hooks are forwarded. The mitigation and override are source-supported options, not runtime-tested compatibility guarantees. Upstream channel: tagged-release; heypi adapter: preview-or-beta. No repository/global Gondolin advisory or NVD keyword match was found.

## 2. Pi version and SDK ceiling: CORRECTED

Read [Pi 1.0.0](https://github.com/earendil-works/pi/releases/tag/v1.0.0), [0.80.8 breaking changes](https://github.com/earendil-works/pi/releases/tag/v0.80.8), heypi's [manifest](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64), [lockfile](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/pnpm-lock.yaml#L404), [model import](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/model.ts#L1), [session construction](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/pi.ts#L147-L152), and [Pi 1.2.0 SDK](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/sdk.ts#L48-L55). Opened the version-specific npm record through its registry equivalent.

Independent v0.80.8 to v1.2.0 comparison is ahead 1948, behind 0; v1.0.0 to v1.2.0 is ahead 220, behind 0. Registry and release dates match the harvest. Independently counted 36 releases after v0.79.10 through the cutoff, nine with a Breaking Changes heading. `AuthStorage` is present in index.ts at v0.79.10 and v0.80.7 and absent at v0.80.8 and v1.2.0. The published heypi ESM also imports it by name.

**Exact fix:** replace "every heypi install, old or fresh, runs Pi 0.79.10" with "heypi 0.3.0-beta.2 declares >=0.79.6 <0.80.0; its repository lockfile and an ordinary fresh resolution select 0.79.10. Existing consumer lockfiles can retain another allowed 0.79.x version." A lockfile establishes resolution, not that a compatibility test passed. State the ESM incompatibility for the checked releases and the documented API removal, rather than making an unlimited promise about all future Pi versions or every ecosystem package.

The four published Pi advisories were checked independently; their affected ranges end below 0.79.10. This does not establish that every transitive dependency is vulnerability-free. Upstream channel: tagged-release; embedded heypi channel: preview-or-beta.

## 3. just-bash hard-link escape and audit visibility: CORRECTED

Read [GHSA-g5pf-mh4h-h655](https://github.com/vercel-labs/just-bash/security/advisories/GHSA-g5pf-mh4h-h655), [PR 368](https://github.com/vercel-labs/just-bash/pull/368), its [immutable merge](https://github.com/vercel-labs/just-bash/commit/3ee215c2ad56c96ce0d88e2813050df9f15afa38), [3.6.0 notes](https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0), heypi's [mounts and cancellation wiring](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L85), and [3.1.0 lock](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/pnpm-lock.yaml#L1520).

The hard-link finding holds. A pre-existing hard link inside a mounted root can cause a guest write to change the same inode through its outside-root name. Advisory: high, no CVE, published 2026-09-15T20:13:44Z, affected <3.3.0, patched 3.3.0. Merge: 2026-08-13T14:26:31Z. Independent comparisons from the fix are ahead 1/behind 0 to 3.3.0, ahead 56/behind 0 to 3.6.0, behind 31 to 3.1.0, and behind 22 to 3.2.0. The security fix and advisory predate this window; 3.6.0 publication on 2026-10-01 is the window event.

The global advisory endpoint returned 404 and npm's bulk endpoint returned no just-bash record, while the Pi 0.78.0 control returned four advisories. **Exact fix:** date this as an observed service response on 2026-10-14; do not promise that npm audit or Dependabot can never detect it, or claim an independent historical 2026-10-13 response.

Cancellation wiring proves heypi can abort commands, not that every such command reaches the worker-bridge failure fixed upstream. Describe that benefit conditionally. More seriously, do not imply that selecting 3.6.0 settles every isolation concern: its new `createExclusive` API is absent from heypi's read-only proxy denylist, as detailed in miss M1. Upstream channel: tagged-release; heypi adapter: preview-or-beta.

## 4. Cloudflare rewrite and remote SDKs: CORRECTED

Read the [1.0.0 release](https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%401.0.0), [0.12.10 exports](https://github.com/cloudflare/sandbox-sdk/blob/e4877c7368f8b1620bd4400ff831e28fba152eff/packages/sandbox/src/index.ts#L37-L44), all 29 files in the pinned [1.0.0 source tree](https://github.com/cloudflare/sandbox-sdk/tree/f9e972a14123bef3b93e9bb337bab6e83419fe7e/packages/sandbox/src), and heypi's [session calls](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/src/index.ts#L76-L116). The tree contains zero `ISandbox`, `ExecutionSession` or `createSession` occurrences. Its replacement index remains unchanged at [1.0.1](https://github.com/cloudflare/sandbox-sdk/blob/8a535b3ce8d29ffd321a625da02594ba449c1b51/packages/sandbox/src/index.ts).

The 1.0 rewrite incompatibility holds as source analysis. npm 1.0.0 publication is 2026-09-30T01:44:26.557Z; GitHub release publication is 2026-10-08T07:23:34Z. The rewrite SHA to 1.0.1 comparison is ahead 12, behind 0. **Exact fix:** update latest to Cloudflare 1.0.1 and Vercel 3.8.0, both published by the window close, and stop equating publish timestamps with dist-tag movement timestamps.

The [Vercel 3.0.0 notes](https://github.com/vercel/sandbox/releases/tag/%40vercel/sandbox%403.0.0) explicitly retain runtime-based creation through the legacy API. Being pinned to an older SDK does not itself prove the Vercel runtime is broken or unsupported. Keep that separate from Cloudflare's demonstrable API removal. Also include the usable 0.12.10 security change in M2. Both upstream lines are tagged-release; heypi's adapters remain preview-or-beta.

## 5. Experimental Pi durability: VERIFIED

Read the [v1.2.0 README opening](https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3-L7), [replay contract](https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L181), [versioned registry record](https://registry.npmjs.org/%40earendil-works%2Fpi-durable/1.2.0), and heypi's [failure model](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L54-L63). Also checked the same harness/replay description at [v1.0.0](https://github.com/earendil-works/pi/blob/v1.0.0/packages/durable/README.md).

The package existed before the window, but the full harness description is present by v1.0.0; the v0.87.0 README described record contracts and detached in-memory storage. Registry 1.0.0 publication is 2026-10-01T19:11:04.822Z; 1.2.0 is 2026-10-12T23:00:37.181Z. The v1.0.0 to v1.2.0 ancestry is established above. The API is explicitly experimental; replay-safe tools can rerun and others receive an interrupted result. heypi does not embed this separate harness. This verifies an upstream capability, not an available heypi feature or proof that upgrading pi-coding-agent alone would integrate it. Channel: tagged-release upstream; no heypi integration.

## Shared ancestry for sections 6 through 10

The [0.3.0-beta.0 to beta.2 comparison](https://github.com/hunvreus/heypi/compare/0.3.0-beta.0...0.3.0-beta.2) is ahead 3, behind 0. Its complete changed-file list contains no package source files, including runtime-tools.ts, runtime-docker.ts, storage.ts, memory.ts, channel.ts, approval.ts or app.ts. Thus those source behaviors already existed in beta.0, published to npm on 2026-07-21. The refreshed docs appeared later. These are historical profile corrections, not September/October heypi changes. Their channel is preview-or-beta.

## 6. Host execution and secrets: CORRECTED

Read [runtime selection](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime-tools.ts#L17-L27), [startup warning](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L1034-L1038), [runtime limits](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/runtimes.md#L8-L24), [state layout](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/storage.ts#L45-L70), and the [old default](https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/runtime.md#L34). The omitted-runtime host behavior and absence of the warning for explicit host() are supported.

**Exact fix:** replace "at-rest encryption protects secrets from backups and other users" with "encrypted values and their decryption key share the state root; anyone who can read both, including a complete backup, can decrypt them. Filesystem permissions and backup protection remain necessary." The [key creation and decryption code](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/secrets.ts#L67-L95) and [secret-storage docs](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/secrets.md#L17-L18) establish this.

Remove the assertion that the deployment checklist says the opposite of permitting host execution. It requires an [explicit runtime choice](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/guides/deployment.md#L11); the runtime doc permits host execution for trusted commands. Host access is bounded by the service account's OS permissions. The risk conclusion holds without claiming a blanket prohibition or protection against full-state backup disclosure.

## 7. Docker egress: CORRECTED

Read [container arguments](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime-docker.ts#L16-L35), [builder options](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime.ts#L25-L39), and the old [network-none argument](https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi-runtime-docker/src/index.ts#L274-L275). The networking change holds. The current source supplies no network selector, user override, capability drop or resource limit.

**Exact fix:** replace the moving Docker-doc receipt with [Docker's pinned bridge documentation](https://github.com/docker/docs/blob/d751b36e43fc991c8810520c74adcd422cc0b959/content/manuals/engine/network/drivers/bridge.md#L19-L44), whose last file commit before the cutoff is 2026-07-14. It establishes default bridge attachment and masquerading. Phrase the consequence as normal Docker defaults subject to daemon, routing and firewall policy, not measured connectivity on every deployment. The template forwards a GitHub token [only if supplied](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L7-L15).

## 8. Memory defaults and sharing: CORRECTED

Read [memory docs](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/memory.md#L3-L21), [default installation](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L417-L430), [recall](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L336-L368), [context hook](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L439-L464), and [old memory-off docs](https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/memory.md#L3).

**Exact fix:** "Memory is enabled by default. Relevant shared records are eligible for recall across conversations with the same adapter ID; they are not all injected into every turn." The [search filters positive relevance](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/memory.ts#L272-L280), the hook skips an empty text query, and recall defaults to eight records and 4,000 characters, with user records considered before conversation and shared records. Separate adapter IDs retain a storage boundary. A prompt label is not an injection-proof guarantee, but the implementation also performs selection, size limiting and escaping; "only a prompt label" erases those distinctions.

The memory tool can be targeted by the name-based approval configuration, as a source inference. No policy integration test was run. Disabling memory is a documented way to remove this recall surface.

## 9. Audit ledger: CORRECTED

Read [admin query interfaces](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/admin.md#L47-L53), [append path](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/channel.ts#L191-L194), [request write](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L366-L395), [resolution write](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L468-L484), and [background approval handling](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L975-L985). JSONL, no hash chain/signature/fsync in this path, and fail-closed required audit writes are supported.

**Exact fix:** describe the records as evidence of approval decisions for calls that enter the approval-request path, not a complete per-call execution ledger. [No policy, a false policy result, and a block result return before the audit writes](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L335-L355); [once() reuses prior tool approval](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L309-L313). A decision hash does not prove that a tool subsequently executed. Pi's transcript is the separate execution trace.

Say an OS crash *may* lose unflushed records, not that loss is certain. The [loader](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/channel.ts#L356-L374) drops a malformed unterminated final line and rejects earlier JSON syntax errors. It does not authenticate well-formed edits. Background schedules have no canonical approval-audit callback and deny calls that ask for approval.

## 10. Command classifier: VERIFIED

Read [the patterns](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L88-L104), [classification order and fallback](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L165-L176), [opt-in tool configuration](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/tool-config.ts#L30-L51), and [template image tools](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/Dockerfile#L3-L13).

There are four built-in block patterns and thirteen approval patterns, followed by allow. Matching is over raw command text. The cited git option placement does not satisfy the git-push pattern, and Python and gh are absent from the lists. This is a source-supported classifier limitation, not a tested command execution. The template opts bash into this policy. Prefer an always-ask policy or a carefully defined predicate for consequential calls; these policies do not replace runtime isolation.

## Prior claims re-checked

### Critical historical-admin claim: REFUTED

The harvest says the profile's "admin surface was unauthenticated until 0.3.0" still holds. It does not.

At newest non-prerelease **0.1.3**, [admin authentication defaults on](https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/src/admin/index.ts#L119-L129) and [protected routes require a session](https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/src/admin/index.ts#L234-L248). At **0.2.0-beta.0**, [authentication also defaults on](https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/src/admin/index.ts#L133-L143), and [missing sessions redirect to login](https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/src/admin/index.ts#L250-L264). Its [docs restrict disabling auth to loopback](https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi/docs/configuration/admin.md#L37-L65). Signed login-token code exists at both tags.

The [2026-07-10 fix](https://github.com/hunvreus/heypi/commit/2dd2456e003f08f0ae64466e142d011ec9caa1c7) affects the rewritten `src/admin.ts`, not the old `src/admin/index.ts` implementation. Independent comparisons place it 26 commits before beta.0 and 29 before beta.2; it is absent from the old beta and stable histories. An absent fix does not prove the old, different implementation lacked authentication.

**Required replacement:** "The rewritten admin server gained required non-loopback bearer-token authentication on 2026-07-10, included in 0.3.0-beta.0. The older 0.1.3 and 0.2.0-beta.0 admin applications already had authentication enabled by default." Retract the blanket pre-2026-07-21 disclosure/rotation advice unless an independently verified vulnerable deployment or revision is identified. This is a factual correction, not a new heypi release or a newly assigned advisory.

### Other consequential checks

- **Approval enforcement holds at beta.2, with the section 9 scope correction.** Read the actual [audit injection](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L342-L390), Pi 0.79.10 [extension dispatch](https://github.com/earendil-works/pi/blob/v0.79.10/packages/coding-agent/src/core/extensions/runner.ts#L862-L882), [session hook](https://github.com/earendil-works/pi/blob/v0.79.10/packages/coding-agent/src/core/agent-session.ts#L415-L433), and [pre-execution exception handling](https://github.com/earendil-works/pi/blob/v0.79.10/packages/agent/src/agent-loop.ts#L578-L625). Rejection and thrown policy errors block this path. "Best on the watchlist" is not established by examining heypi alone; remove that comparative certification from the verifier's verdict.
- **Opt-in policies and unrestricted default approvers hold at beta.2.** [Policy installation](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L342-L345) and [actor checks](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L274-L291) support them. The latter checks both resolvedById and resolvedBy. [Telegram supplies a username alias as well as a numeric ID](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/telegram.ts#L412-L414), so replace an exclusively immutable-ID characterization with the actual matching rule. No broad absence-of-spoofing proof was performed.
- **Current admin defaults hold at beta.2.** [Construction is opt-in](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L177-L192); [loopback default, token requirement and wildcard Host requirement](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/admin.ts#L287-L318) are implemented. The secret submission route has its own handling before bearer-token checking; do not generalize the admin token claim to every endpoint.
- **Secret handoff and at-rest encryption hold at beta.2.** Read [WebCrypto code](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/secrets.ts#L277-L282), [storage and pending requests](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/secrets.ts#L136-L151), and the secret docs. Pending private keys are in memory. The full-state backup correction in section 6 is mandatory.
- **Host/memory/audit corrections apply to beta.2, not stable 0.1.3.** The newest stable still documents [just-bash default](https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/docs/configuration/runtime.md#L34), [memory off](https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/docs/configuration/memory.md#L3), and the older authenticated admin. Never silently transfer beta defaults to the non-prerelease line.
- **Governance ownership, six packages, no crash replay, and incompatible rewrite hold at beta.2.** Read the [architecture](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md), [webhook contract](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/adapters/webhook.md), six manifests, and [changelog](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/CHANGELOG.md#L3-L4). Durable intake is application persistence, not proof of disk survival after power loss. The [per-conversation PID lock](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/channel.ts#L149-L166) supports the harvest's narrowed single-process claim.
- **Paused versus abandoned remains unresolved.** Other repositories' activity cannot establish the maintainer's intention for heypi. Retain "no observed heypi source or package activity" and leave the intent/adoption questions open. Neither current popularity counters nor downloads establish a public team deployment.

## Misses

### M1. just-bash 3.6.0 adds a mutator that bypasses heypi's read-only skills proxy

Date: 2026-10-01 release. Channel: tagged-release just-bash 3.6.0, automatically eligible under the preview-or-beta heypi adapter's `^3.1.0` range. Confidence: high for the source path; no executed reproduction.

[mktemp's new implementation calls createExclusiveOn](https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/commands/mktemp/mktemp.ts#L407-L417). The [helper calls createExclusive](https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/create-exclusive.ts#L38-L49), [MountableFs forwards it to the mounted filesystem](https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/mountable-fs/mountable-fs.ts#L407-L437), and [ReadWriteFs creates an entry in its host root](https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/fs/read-write-fs/read-write-fs.ts#L660-L666). heypi's [proxy blocks ten named mutators but not createExclusive, and binds other methods directly to the underlying filesystem](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L64).

Consequently, when the service account can write the staged skills directory and mktemp is available, this source path permits creating empty files or directories inside a mount heypi describes as read-only. It does not establish arbitrary outside-root writes, overwriting existing skill contents, or successful exploitation. Both published tarballs were read in memory: the heypi adapter retains this proxy and just-bash 3.6.0 includes the new method. No code was executed.

[Introduction commit cc35fab4](https://github.com/vercel-labs/just-bash/commit/cc35fab4ffdd7498dd45ab6d2247a95b5db551ee) is an ancestor of 3.6.0, ahead 23/behind 0 from that commit, and absent from 3.4.2, behind 24. This is in-window dependency API drift despite no heypi commit. Re-audit the wrapper against all current mutating filesystem methods and validate the boundary before calling this combination read-only. Do not solve this by reverting to the known hard-link-vulnerable 3.1.0 lock.

### M2. Cloudflare 0.12.10 restricts credential-proxy bucket operations

Date: fix 2026-09-22T11:44:54Z; release 2026-09-23T10:31:24Z; npm 2026-09-23T10:36:01.964Z. Channel: tagged-release upstream, within the heypi beta adapter's `^0.12.3` range.

The harvest records the version but omits the substantive change. [Commit 08ab8c94](https://github.com/cloudflare/sandbox-sdk/commit/08ab8c9430a782683f0937aa13b2d07841f9a459) adds a 405 rejection for bucket-root mutation requests through `credentialProxy` mounts, while retaining permitted object writes, probes and scoped listings. Before this restriction, the proxy could forward bucket-level mutation requests, subject to the real credential's permissions. The [0.12.10 release](https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%400.12.10) includes the fix; independent comparison from the fix is ahead 6, behind 0, with the fix as merge base.

Operators using these mounts on their caller-owned Cloudflare sandbox should resolve the Worker SDK to 0.12.10 and review mount credentials. This is conditional on use of credentialProxy mounts; heypi does not configure those mounts automatically. A stale consumer lock can remain older even though a fresh resolution is fixed. The same release fixes intercepted-HTTPS multipart backups above 10 MiB and file recreation after restoreBackup(), which are relevant to deployments using those features. There is no need to move to incompatible 1.x to obtain these 0.12-line fixes.

### M3. just-bash bundles a TOML denial-of-service fix

Date: repository advisory 2026-09-22T16:40:12Z; just-bash 3.6.0 release 2026-10-01; global GitHub review/publication 2026-10-05T23:41:14Z. Channel: tagged-release just-bash 3.6.0, available within heypi's range.

[GHSA-r4xh-jqrq-34v2](https://github.com/squirrelchat/smol-toml/security/advisories/GHSA-r4xh-jqrq-34v2) affects smol-toml <=1.8.0 and is fixed in 1.9.0. It allows ordinary attacker-controlled TOML with many keys to consume quadratic parsing time and synchronously stall the event loop. It has no CVE. just-bash's [yq TOML parser](https://github.com/vercel-labs/just-bash/blob/7537a260e38648e8998db7a95504102ad80b0194/packages/just-bash/src/commands/yq/formats.ts#L219-L221) invokes this library.

[Commit 632090a6](https://github.com/vercel-labs/just-bash/commit/632090a60b710608e2180638a757172dc0316b2c) and the [3.6.0 notes](https://github.com/vercel-labs/just-bash/releases/tag/just-bash%403.6.0) explain that the Node bundle inlines smol-toml, so changing only a downstream smol-toml lock entry does not replace the embedded code. The commit is an ancestor of 3.6.0, ahead 1, behind 0. This is another reason to replace an old just-bash artifact, while addressing M1 rather than asserting the upgrade removes every containment issue. No claim is made that every older just-bash build has the same parser version or that a heypi deployment was successfully stalled.

### M4. Gondolin override changes need an explicit compatibility list

Date: 2026-10-04. Channel: tagged-release Gondolin 0.13.0; excluded by heypi's declared range, reachable only through an explicit dependency change/override.

The harvest mentions changed guest defaults without saying which. The pinned [changelog](https://github.com/earendil-works/gondolin/blob/v0.13.0/CHANGELOG.md#L9-L40) records removal of guest XDG/UV cache environment overrides, a Node minimum of 22.19.0, removal of the generated CommonJS shim, terminal VM.close(), and a changed secret-placeholder default with a unique-mode opt-out. Those details matter if recommending an override as an egress mitigation. heypi's own Gondolin adapter still declares Node >=23.6, so an upstream minimum reduction does not automatically lower the adapter's declared requirement. Existing VM.close() and guest-default mentions need these concrete checks rather than a generic warning.

The same release fixes long-running VM resource/network problems and adds image/cache management; they are upstream capabilities, not heypi changes. No in-window heypi license, package removal, default flip, or direct install-channel change was found.

## Rule checks and remaining limits

- **Pinning:** numbered source receipts resolve to tags or full SHAs, except the moving Docker reference corrected in section 7. PR 368 is supplemented with its immutable merge. Advisory identifiers and versioned release/registry records are appropriate primary records, but their metadata can be updated. Mutable dist-tags and absence queries are explicitly dated observations, not immutable historical snapshots.
- **Dates:** retained full 2026 timestamps from APIs. The heypi changelog labels beta.1 and beta.2 as 2026-07-21, whereas npm and tag timestamps place them on 2026-07-22 UTC; the harvest correctly used the latter for shipment. Sections 6 through 10 remain historical corrections. The hard-link advisory is also historical; M1 through M4 identify window events.
- **Security language:** the hard-link and TOML items explain the permitted effect and preconditions, not just identifiers. The four Pi advisories concern exported-HTML script execution, a local credential-permission race, attacker-prepared temporary extensions executing as another local user, and unapproved project-extension loading. Their published affected ranges exclude Pi 0.79.10. No CVE is invented for Gondolin, Cloudflare's bucket restriction, or the static skills-mount finding.
- **Security coverage:** independently queried repository advisories for heypi, Pi, Gondolin, just-bash, Cloudflare Sandbox and Vercel Sandbox; global GHSA package searches for heypi and the runtime SDKs; npm bulk advisories with a positive control; NVD API keyword searches for heypi, gondolin and just-bash, each returning totalResults=0. Empty searches mean no matching public record was found, not proof of no vulnerabilities. NVD's CVE-2026-85730 page returned no usable text through the browser tool; the older smol-toml issue was not promoted as an in-window event.
- **Marketing:** the source-backed host, approval and durability mechanisms are usable. The alleged contradiction between host marketing and the deployment checklist is removed. Comparative superiority and maintainer intent are not established by these receipts.
- **Social:** no quoted social post supplies evidence for any numbered finding or miss. The newsletter and ecosystem package mentions remain leads, not product receipts.
- **Not established:** runtime exploit reproduction, compatibility of a Gondolin override, every Pi release's full behavioral compatibility, complete transitive vulnerability coverage, historical live-doc contents, exact historical dist-tag move times, deployed Vercel service behavior, or private adoption. These limits must not be converted into affirmative publication claims.

## Required editorial corrections

Correct Cloudflare/Vercel latest versions and conditional template behavior; narrow Pi resolution to fresh unlocked beta installs; replace the full-backup protection claim; pin Docker's external reference; bound memory recall and approval-ledger coverage; retract the pre-0.3 admin-authentication allegation and its blanket rotation advice; remove unsupported superiority and maintainer-intent verdicts. Add the in-range Cloudflare restriction, bundled TOML fix, and the source-traced just-bash read-only-wrapper regression. Keep the beta/stable distinction visible throughout.
