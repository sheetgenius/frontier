# OpenCode adversarial crosscheck

Run: `2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0`.
Source: `harvest/opencode.primary.md`. Window starts after 2026-10-13T23:59:59Z.
Independent reads: 2026-10-24 UTC. Registry pointer reads below are timestamped individually.

The stable recommendation is correct. The numbered-section result is **12 VERIFIED, 3 CORRECTED, 0 REFUTED, 0 UNVERIFIABLE**. Sections 5, 6 and 14 need the exact corrections below. The harvest also omits 13 material change groups, including eight third-party malware advisories. It should not pass to a profile unchanged.

These counts cover the 15 numbered sections, not every subordinate sentence, supplementary lead, or omission. VERIFIED means the inspected source, documentation and distribution record support the bounded claim. It does not mean a binary, exploit, migration or hosted deployment was tested. Unsupported current-exposure inferences are withheld under the requested REFUTED default.

## Independent method

Read AGENTS.md, THESIS.md, METHOD.md, EDITORIAL.md, CONTRIBUTING.md, the researcher brief, and the OpenCode source contract and notes. Neither `content/profiles/opencode.md` nor the previous run's OpenCode harvest exists at this read, so the intake designation is correct.

Created a separate blobless, no-checkout upstream clone at `/Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones/opencode-verify/` and fetched its tags. Read tagged blobs with `git show`, commit metadata/diffs, merged-PR API records, registry time maps, release objects, updater JSON, canonical advisories and NVD JSON. No cloned program, installer, package lifecycle script, application, test or build was executed.

Every SHA in the harvest's numbered ancestry statements was independently checked with `git merge-base --is-ancestor`. The first plain stable tag was independently determined with tag containment, sorted within each major. The results below reproduce the stated first stable versions. Each listed first tag contains the SHA and the preceding plain stable in that line does not. A source commit reaching a tag is not evidence that a separately deployed hosted service has been updated.

Dereferenced stable tags:

- V2.1.4: `68bc26b7da1990ce10ffecfbc1e09eb13aa5d824`.
- V1.19.4: `148842ef7cb1bc34192b3fff57d0f9721ab9c801`.

The former SST namespace independently resolves to `anomalyco/opencode`, repository ID `975734319`, default branch `dev`. This is the TypeScript/Bun lineage. Unrelated OpenCode Systems products and other wrappers in NVD results are excluded.

## Install today: stable VERIFIED; preview snapshot CORRECTED

The newest published stable remains [`@opencode/cli@2.1.4`](https://registry.npmjs.org/@opencode%2fcli/2.1.4), published 2026-10-23T10:13:53.203Z. [`opencode-ai@1.19.4`](https://registry.npmjs.org/opencode-ai/1.19.4), published 2026-10-22T13:03:43.704Z, remains the V1 line. The [tagged migration guide](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx) supports the shared executable name and migration requirements. No newer stable appears in the full registry time maps read at 2026-10-24T10:21:34.731207Z and 2026-10-24T10:21:37.660701Z, respectively.

Final independent dist-tag reads:

| Package | latest | dev | beta | Read UTC |
| --- | --- | --- | --- | --- |
| @opencode/cli | 2.1.4 | 0.0.0-dev-21769 | 0.0.0-beta-19507 | 2026-10-24T10:25:30.981303Z |
| opencode-ai | 1.19.4 | 0.0.0-dev-202610221304 | 0.0.0-beta-202608110357 | 2026-10-24T10:25:29.965483Z |
| @opencode/client | 2.1.4 | 0.0.0-dev-21769 | 0.0.0-beta-19507 | 2026-10-24T10:25:30.081357Z |
| @opencode/sdk | 2.1.4 | 0.0.0-dev-21769 | 0.0.0-beta-19507 | 2026-10-24T10:25:31.031689Z |
| @opencode/plugin | 2.1.4 | 0.0.0-dev-21769 | 0.0.0-beta-19507 | 2026-10-24T10:25:30.045158Z |
| @opencode/ai | 2.1.4 | 0.0.0-dev-21769 | 0.0.0-beta-19507 | 2026-10-24T10:25:30.030571Z |
| @opencode-ai/cli | 0.0.0-beta-17823 | 0.0.0-dev-19272 | 0.0.0-beta-19271 | 2026-10-24T10:25:30.042528Z |

Receipts: [CLI registry](https://registry.npmjs.org/@opencode%2fcli), [V1 registry](https://registry.npmjs.org/opencode-ai), [client](https://registry.npmjs.org/@opencode%2fclient), [SDK](https://registry.npmjs.org/@opencode%2fsdk), [plugin](https://registry.npmjs.org/@opencode%2fplugin), [AI](https://registry.npmjs.org/@opencode%2fai), [obsolete preview](https://registry.npmjs.org/@opencode-ai%2fcli). V1's `next`, `latest-0` and `latest-1` remain the versions recorded by the researcher. The obsolete preview's `next` equals its old `latest`.

**Exact refresh:** replace 21768 with 21769 for current V2 dev pointers. CLI 21769 was published at 2026-10-24T10:08:01.805Z. Its [exact package record](https://registry.npmjs.org/@opencode%2fcli/0.0.0-dev-21769) and the [dev updater](https://update.opencode.ai/api/dev) now identify source `f20760b8bf3bced0fa5620b6afe7b78dd615ee36`. The updater independently returned that version/source at 2026-10-24T10:13:19.426796Z and again in the 10:21 read. Thus the inference cost/allowance documentation commit described as only on the default branch now also has a distributed dev artifact. Describe it as preview/dev, absent from stable, rather than currently main-unreleased. This is a later observation, not a claim that the researcher's earlier timestamped snapshot was false.

At 2026-10-24T10:11:24.387124Z the default branch was still `f20760b8bf3bced0fa5620b6afe7b78dd615ee36`. Independent symmetric count against v2.1.4 is `1 45`, meaning 45 ahead and 1 behind. The [pinned compare](https://github.com/anomalyco/opencode/compare/v2.1.4...f20760b8bf3bced0fa5620b6afe7b78dd615ee36) and dev distribution must be reported separately from stable.

[GitHub Latest](https://api.github.com/repos/anomalyco/opencode/releases/latest), read at 2026-10-24T10:11:24.582894Z, remains v1.19.4, published 2026-10-22T13:03:41Z, non-draft and non-prerelease. A fresh [v2.1.4 Release lookup](https://api.github.com/repos/anomalyco/opencode/releases/tags/v2.1.4) returned 404 at 2026-10-24T10:11:24.385067Z. The V2 registry/tag conclusion does not depend on GitHub Latest.

Desktop facts also check out. The [latest desktop record](https://update.opencode.ai/api/latest/desktop/opencode), read at 2026-10-24T10:21:33.553057Z, is 2.1.4, registered 2026-10-23T10:15:34.111Z, source `74f8d4860f49c563909e6b039b0cc8b454ebce72`, run `39931428578`. That source is the immediate parent of v2.1.4. The [beta record](https://update.opencode.ai/api/beta), read at 2026-10-24T10:21:33.554839Z, is desktop 0.0.0-beta-21770, registered 2026-10-24T09:15:51.970Z, source `8f94e242cd4a24cca8660ee5e1637112b051bcf2`, run `40080649621`. Its count against stable is independently `14 382`. The separate beta GitHub desktop 19425 and beta updater CLI 2.0.1 are unchanged. All **40 advertised payload SHA-256 values** in the harvest match the independently read updater records or V1 release-asset digests. These are advertised values, not independently downloaded binary hashes. Stable and beta source package manifests both still name Electron.

## Release ledger: VERIFIED

Ran `gh release list` independently, read both full npm time maps, and reran all 32 previous-tag symmetric comparisons, including both baseline rows. Every recorded npm publication timestamp and ahead/behind pair matches. V1 publication times and prerelease flags match the release list. The V2 rows correctly use npm publication and do not fabricate GitHub Release flags.

- Weekly V2 stable publications: 2.0.29, 2.0.30, 2.0.31, 2.0.32, 2.1.0, 2.1.1, 2.1.2, 2.1.3, 2.1.4: nine.
- Weekly V1 stable publications: 1.19.1, 1.19.2, 1.19.3, 1.19.4: four.
- Retrospective since 2026-09-24: 22 V2 and eight V1 publications. The September baselines are intentionally outside that count.

The non-ancestor release-version commits and v2.0.27's large merge count are real. Neither a GitHub release's `target_commitish` nor a commit count establishes shipped capability. Receipts: the two registry time maps above and [GitHub release objects](https://api.github.com/repos/anomalyco/opencode/releases?per_page=100).

## Numbered-section verdicts

For the ancestry lists below, `V1 pass` means merge-base exit 0 against v1.19.4 and `V2 pass` means exit 0 against v2.1.4. First stable tags and their release dates use the independently verified ledger. Dates that label standing contracts or explicitly retrospective repairs are retained as such; they must not become new October 14 through 24 release claims.

### Section 1. V2 migration changes the executable, configuration and extension contract

**VERIFIED.** The migration guide and normalizer support in-memory configuration translation, global cli.json migration, incompatible V1 plugin implementations, AGENTS.md discovery without CLAUDE.md fallback, and absent LSP execution. The four migration repairs reach exactly the stated releases. Independently checked the additional V1 guard SHA `3be039593a9a2cbe44f9578e37ac2bd789768262`: first stable v1.19.2, absent from v1.19.1, present in v1.19.4. The explicit major upgrade remains separate. The date is a current-contract/latest-repair date, not V2 launch day.

Harvest date: 2026-10-23. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [Migration docs](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx), [normalizer](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/config/normalize.ts), [V1 update guard](https://github.com/anomalyco/opencode/commit/3be039593a9a2cbe44f9578e37ac2bd789768262).

Independent ancestry results:

- `3260ec767ca9d18a2424231e04f7a756186dc011`: first stable v2.1.3; V2 pass.
- `5bae6d48aeba7db7fddb7d9a4456f6b74a298549`: first stable v2.1.4; V2 pass.
- `5f8c158976ea9eae4b3a77b752710d2ad2097070`: first stable v2.1.4; V2 pass.
- `c3b613cac8d597853275dc57ddae667c2995e896`: first stable v2.1.3; V2 pass.

### Section 2. Plan restricts edit tools but retains host shell authority

**VERIFIED.** Agent schema defaults are allow-all with the stated env-file read exceptions. Plan adds question allow and edit deny/plan-directory allow, without adding a shell deny. The shell preparation path checks inferred directories and scanner command resources but executes through host services. Custom child creation passes agent/model, not an intersection of parent permission rules. The README discrepancy is real. These are source-established authority facts; no bypass exploit was run. The documentation correction first reaches v2.1.0 on 2026-10-20.

Harvest date: 2026-10-23. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [Base rules](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/schema/src/agent.ts), [built-in agents](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/agent.ts), [Plan](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/plan.ts), [shell enforcement](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/shell.ts), [subagent creation](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/subagent.ts), [security contract](https://github.com/anomalyco/opencode/blob/v2.1.4/SECURITY.md).

Independent ancestry results:

- `68bc26b7da1990ce10ffecfbc1e09eb13aa5d824`: first stable v2.1.4; V2 pass.
- `c6d1c09c1d85d6d2f9c4d21a801f10efa4652c66`: first stable v2.1.0; V2 pass.

### Section 3. Project approvals persist, while managed policy can deny a configured tool or integration

**VERIFIED.** Permission evaluation first resolves configured agent/session rules and returns deny before adding saved project allows. Always approvals persist through the saved-permission table. The policy hook can replace allow/ask with deny; plugin admission checks integration.use before loading. Managed-policy ordering and the guarded policy/Console built-ins support the stated precedence. The Console decoder drops unknown action/effect enum values, while malformed statements otherwise fail validation. This does not establish confinement of admitted host code.

Harvest date: 2026-10-20. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [Permission evaluation and replies](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/permission.ts), [saved rules](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/permission/saved.ts), [policy plugin](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/config/plugin/policy.ts), [precedence](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/managed-policy.ts), [plugin admission](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/module.ts), [policy docs](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/policies.mdx).

Independent ancestry results:

- `613ef8ba874250297f0a2e663d792a7af869265b`: first stable v2.0.25; V2 pass.
- `f576da508d70ecfb59dd0499d4bd48851e87ee34`: first stable v2.0.29; V2 pass.
- `6dc4d4e758b237020b715433b6e14d97bc468085`: first stable v2.0.29; V2 pass.
- `fede5ddda5e389bb072cb68fd380ec31f41f9929`: first stable v2.1.0; V2 pass.

### Section 4. V2 CLI server paths generate passwords, while remote pairing exposes the same execution host

**VERIFIED.** The managed/foreground launcher supplies a configured or random 32-byte password and defaults to 127.0.0.1. The standalone child receives an independent random lease password and port 0. Pairing uses 16 random bytes with a five-minute cache lifetime and consumes the entry. Sessions have a 30-day TTL and password-derived signatures. The lower-level Config.layer has no password by default, so the CLI guarantee cannot be generalized to arbitrary embedding. SECURITY.md retains the contradictory opt-in sentence. The Windows port fix first reaches v2.1.3 on 2026-10-22.

Harvest date: 2026-10-23. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [Server launch](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/server-process.ts), [owned standalone server](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/services/standalone.ts), [auth and sessions](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/server/src/auth.ts), [authorization middleware](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/server/src/middleware/authorization.ts), [pairing codes](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/server/src/pairing.ts), [web docs](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/web.mdx).

Independent ancestry results:

- `38454c6e9c51f9eb1f98fcec0060ef434f378bb8`: first stable v2.0.27; V2 pass.
- `e441dafb09857d797416c9e4573a2217b63e8797`: first stable v2.1.3; V2 pass.

### Section 5. Plugins, Code Mode and worktree tools expose the harness as a programmable host

**CORRECTED.** The plugin, SDK, Workerd, worktree and Code Mode mechanisms and release mapping are supported, including default MCP Code Mode, explicit skill loading despite hidden advertising, the file-URL rejection and async-job repair. Narrow the sentence "nested OpenCode operations still use their permission paths". Exact replacement: "Nested read/edit/shell and MCP calls retain their own checks; plugin tools enforce the permissions they assert. Session rename/move and worktree create/list request no built-in permission action. Worktree removal explicitly checks edit on the target directory." The tagged tools contract and implementation establish this exception. It matters because a session move can change the configuration location without an individual permission prompt. Receipts: [tool contract](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/tools.mdx#sessions), [implementation](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/opencode.ts).

Harvest date: 2026-10-21. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [Plugin contract](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/plugins/index.mdx), [plugin surfaces](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/plugins.mdx), [Code Mode](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/tools.mdx), [embedded SDK](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/sdk/index.mdx), [Cloudflare host](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/sdk/cloudflare.mdx).

Independent ancestry results:

- `7d179e83f42a9bb6377b6f34d8d4fcbf04707621`: first stable v2.0.27; V2 pass.
- `4fbdea2d13910b262644459d26517b0829b0a354`: first stable v2.0.27; V2 pass.
- `3b593dd5d27eeabf28be8db056178438b773e326`: first stable v2.1.2; V2 pass.
- `6a7cedcbf1823eeb1c8dfc4baf5a7951854f578b`: first stable v2.0.29; V2 pass.

### Section 6. MCP human-input forms reach clients, and client-hosted MCP arrives experimentally

**CORRECTED.** The source change preserves Effect context for MCP callbacks and the UI change renders location-owned elicitation forms. All four stated commits first reach v2.1.4 on 2026-10-23. The helper and endpoint are explicitly experimental. Tagged MCP docs confirm legacy transport as default, with auto or 2026-07-28 explicitly configured. The two pull-request receipt URLs violate the brief's tag/SHA pin rule even though the PRs are merged. Exact fix: replace pull/57504 with commit/453514613974ae54cbd6ae0ab878be1b0aff7a1e and pull/57505 with commit/4a6dacec5e4afb69f211458e08be5233c57dd307. I independently opened the PR API records and confirmed both merge SHAs. Protocol receipt: [tagged MCP configuration](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/mcp-servers.mdx#protocol-version).

Harvest date: 2026-10-23. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [MCP callback context fix](https://github.com/anomalyco/opencode/commit/889abb4657e9a944a6ddcaaf5bc41eab5cd9a4c6), [server-side MCP client](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/mcp/client.ts), [desktop/web form fix](https://github.com/anomalyco/opencode/commit/8482dbf1e7eba18d6c5d0de6f02f8242112bcf06), [client helper](https://github.com/anomalyco/opencode/commit/453514613974ae54cbd6ae0ab878be1b0aff7a1e), [experimental server endpoint](https://github.com/anomalyco/opencode/commit/4a6dacec5e4afb69f211458e08be5233c57dd307).

Independent ancestry results:

- `889abb4657e9a944a6ddcaaf5bc41eab5cd9a4c6`: first stable v2.1.4; V2 pass.
- `8482dbf1e7eba18d6c5d0de6f02f8242112bcf06`: first stable v2.1.4; V2 pass.
- `453514613974ae54cbd6ae0ab878be1b0aff7a1e`: first stable v2.1.4; V2 pass.
- `4a6dacec5e4afb69f211458e08be5233c57dd307`: first stable v2.1.4; V2 pass.

### Section 7. Compaction gains an opt-in background summary with real latency and inference tradeoffs

**VERIFIED.** The compaction implementation initializes auto=true, keep=15000 and precompute=false. PRECOMPUTE_RATIO is 0.85; the measured prompt-token minimum is 64000. Native compaction and incompatible states skip precomputation. A per-session Map holds the fiber/result, and usePrecomputed can await an unfinished fiber. The documentation explicitly says held summaries are lost on restart and unused speculative summaries cost tokens. The whole-conversation change first reaches 2.1.0; background summaries and their rename first reach 2.1.4. The harvest correctly avoids a no-wait or free-inference promise.

Harvest date: 2026-10-23. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [Compaction implementation](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/session/compaction.ts), [compaction configuration](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/compaction.mdx), [2.1 release notes](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md).

Independent ancestry results:

- `fd6589239e6cc99155ab6a793a3539c28cd0415b`: first stable v2.1.0; V2 pass.
- `6a5973d2636936317de15726ab37e3681f678be3`: first stable v2.1.4; V2 pass.
- `f523f7713816163b75be81d17186ab539a56f76a`: first stable v2.1.4; V2 pass.
- `ac68d6a929bcc0b107b37f0d0c01b659f0160903`: first stable v2.1.4; V2 pass.

### Section 8. V2.1 changes public replay and compaction fields while preserving legacy stored data

**VERIFIED.** The v2.1.4 changelog explicitly documents the v2.1 public breaking changes: native fields, shallow tool-native merge, configuration-to-metadata credential answers, keepID, native.messages and removal of session.compacted. It distinguishes storage/import compatibility from public write/API compatibility. Provider/model matching and the narrower provider-run-result exception are stated as in the harvest. The underlying change first reaches v2.1.0 on 2026-10-20.

Harvest date: 2026-10-20. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [Breaking-change specification at newest stable](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes), [breaking-change commit](https://github.com/anomalyco/opencode/commit/acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd).

Independent ancestry results:

- `acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd`: first stable v2.1.0; V2 pass.

### Section 9. Credentials follow the execution host or the optional Console gateway

**VERIFIED.** The credential table stores a JSON-valued text column and writes the provided value through the database path; the inspected path does not wrap each credential in an OS-keychain encryption operation. The Console provider plugin implements device authorization, OAuth access/refresh values and refresh handling. The provider-custody docs explicitly place linked upstream keys in the Console gateway. The old-domain forwarding and custom-baseURL fixes reach 2.1.2 and 2.1.3, respectively. These sources do not establish an actual Console incident or upstream-key revocation.

Harvest date: 2026-10-22. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [Provider authentication](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/providers.mdx), [credential table](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/credential/sql.ts), [credential implementation](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/credential.ts), [Console OAuth implementation](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/provider/opencode.ts), [Console provider custody](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/providers.mdx).

Independent ancestry results:

- `4c33a253aa89ec0fa4faaa5d5b4aefef7d1a3963`: first stable v2.0.20; V2 pass.
- `7d3752c14ce8dd03cfaac03ee4062a877808a69c`: first stable v2.1.2; V2 pass.
- `870ab9dc5f2eb97c82024f56278f168353a0b068`: first stable v2.1.3; V2 pass.

### Section 10. Local execution does not imply zero telemetry or uniform model retention

**VERIFIED.** CLI observability receives OTEL_EXPORTER_OTLP_ENDPOINT, and the OTLP implementation returns no exporters/an empty layer without an endpoint. Desktop Sentry initialization and publishing variables are distinct. Update-service source describes unsampled Worker request events, their included fields and excluded bodies/credentials. Tagged model docs include retention/training exceptions. Both Cat Jam corrections have October 14, 2026 commit dates and the stated first releases. The free-model exclusion flag first reaches 2.1.2. No claim about measured network traffic or actual backend retention is established.

Harvest date: 2026-10-21. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [CLI observability configuration](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/index.ts), [OTLP opt-in implementation](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/util/src/observability/otlp.ts), [desktop Sentry initialization](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/desktop/src/renderer/startup/sentry.ts), [desktop build variables](https://github.com/anomalyco/opencode/blob/v2.1.4/.github/workflows/publish.yml), [update logging](https://github.com/anomalyco/opencode/blob/v2.1.4/services/update/README.md), [model data policies](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/models.mdx), [Cat Jam correction](https://github.com/anomalyco/opencode/commit/a95d9c0fe46909a0d5ac8dc323fcdce51436604f).

Independent ancestry results:

- `aadd4d861458d66af9bc3994b428d829b54eaa60`: first stable v2.1.2; V2 pass.
- `a95d9c0fe46909a0d5ac8dc323fcdce51436604f`: first stable v1.19.1; V1 pass.
- `d2cedffd71bf4755bd46dbab80ca23eb0b5ed6e6`: first stable v2.0.29; V2 pass.

### Section 11. V1 session sharing is discontinued despite surviving sharing documentation

**VERIFIED.** At v1.19.4 the share implementation fails with a discontinuation error, import rejects HTTP(S) share URLs, and unshare only clears local metadata. Independently opened the v1.19.1 Release object: its 2026-10-15 notes explicitly say existing links and sharing commands are unavailable. The backend-retirement commit is in v2.0.30; tag containment does not independently date a service deployment or prove deletion of historical uploads.

Harvest date: 2026-10-15. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [V1 sharing implementation](https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/share/session.ts), [V1 import command](https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/cli/cmd/import.ts), [V1.19.1 release](https://github.com/anomalyco/opencode/releases/tag/v1.19.1), [backend retirement](https://github.com/anomalyco/opencode/commit/9e6877007419dd10b841d6ab600af69dcbba1019).

Independent ancestry results:

- `d320177aa4cb93d63b6462acd6efca0ee037dedf`: first stable v1.19.1; V1 pass.
- `9e6877007419dd10b841d6ab600af69dcbba1019`: first stable v2.0.30; V2 pass.

### Section 12. The MCP OAuth command-injection report maps to September fixes in both release lines

**VERIFIED.** The primary researcher report describes attacker-controlled remote MCP OAuth authorization URLs reaching a PowerShell browser-launch path on Windows/WSL, allowing host code execution without model prompt injection. The source changes centralize opening, permit HTTP(S), and update the open dependency. Both first-release mappings independently match: V1.18.33 on 2026-09-28 and V2.0.18 on 2026-09-25. The report header says October 19, 2026 while its timeline says it published October 4, 2026; the harvest correctly preserves the conflict. Repository advisories contain no corresponding entry at this read. This remains a historical fix, not an in-window new patch or proof of a current 2.1.4 exploit.

Harvest date: 2026-09-28. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [V1 fix](https://github.com/anomalyco/opencode/commit/29f07e0c69ad8668e0e15b0eb54f2fcb342af98c), [V2 fix](https://github.com/anomalyco/opencode/commit/29ce49db0f5da1bd31e2ea60841a1d837f4237e1), [V1.18.33 release](https://github.com/anomalyco/opencode/releases/tag/v1.18.33), [researcher report](https://www.pillar.security/blog/open-and-shut-remote-code-execution-in-opencode-via-mcp-oauth), [advisory index](https://github.com/anomalyco/opencode/security/advisories).

Independent ancestry results:

- `29f07e0c69ad8668e0e15b0eb54f2fcb342af98c`: first stable v1.18.33, v2.0.27; V1 pass, V2 pass.
- `29ce49db0f5da1bd31e2ea60841a1d837f4237e1`: first stable v2.0.18; V2 pass.

### Section 13. A September advisory concerns cross-site server upgrades on npm-family V1 installations

**VERIFIED.** The canonical repository advisory supports the precise browser-to-upgrade attack: a reachable npm/pnpm/Bun-managed V1 serve instance could install an attacker-selected package and run its installation scripts, including a cross-site navigation carrying cached Basic credentials. The typed schema requires a semantic version, and the fix replaces raw text handling with the declared JSON API. The advisory names 1.18.22 as patched despite its unbounded machine-readable range. Published 2026-09-24, patch committed 2026-08-24; both dates are outside the weekly window. It is correctly a retrospective advisory, not a newly released October fix.

Harvest date: 2026-09-24. Channel: `docs-only`.

Receipts read, with required pin corrections applied: [GHSA-632h-h47v-g4x4](https://github.com/anomalyco/opencode/security/advisories/GHSA-632h-h47v-g4x4), [fix commit](https://github.com/anomalyco/opencode/commit/2a36236132b0588eafbe3a16f2d271144f5a1104), [fixed typed request schema](https://github.com/anomalyco/opencode/blob/v1.18.22/packages/opencode/src/server/routes/instance/httpapi/groups/global.ts).

Independent ancestry results:

- `2a36236132b0588eafbe3a16f2d271144f5a1104`: first stable v1.18.22, v2.0.27; V1 pass, V2 pass.

### Section 14. Bundled Bun and long-running request fixes require updating the running application

**CORRECTED.** Bun 1.4.4 containment, Windows persistent PTYs, active-location protection, watcher degradation and output-limit continuation all match the stated releases. Correct the implied newness of run timeout handling: PR #55149 changes the TUI initial/reconnect clients; run and mini already disabled Bun's fetch timeout and are refactored to the shared helper. Exact wording: "V2.1.0 fixes long-pending TUI requests; run and mini retain their existing no-timeout behavior through a shared helper." Also replace the unpinned pull/55149, pull/51536 and pull/57416 receipt URLs with their merge commits 52a10f573f1da5103c85990da9341e3645a39365, c93aaae37157d785f76a8e9a9243a6560e286468 and 89d996c2c5b902c9467494d8abe01205830e1d4a. Their PR records independently confirm the SHAs. Bun's versioned security notes do not establish an OpenCode-specific exploit.

Harvest date: 2026-10-22. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [V2 bundled runtime workflow](https://github.com/anomalyco/opencode/blob/v2.1.4/.github/workflows/publish.yml), [V1 runtime bump](https://github.com/anomalyco/opencode/commit/baec69bae8e2c90551dbb8e3c462456870c735cf), [Bun 1.4.4 security notes](https://bun.com/blog/bun-v1.4.4#security), [long-request change](https://github.com/anomalyco/opencode/commit/52a10f573f1da5103c85990da9341e3645a39365), [watcher failure handling](https://github.com/anomalyco/opencode/commit/c93aaae37157d785f76a8e9a9243a6560e286468), [active-location fix](https://github.com/anomalyco/opencode/commit/89d996c2c5b902c9467494d8abe01205830e1d4a).

Independent ancestry results:

- `37d973754ba6cc31732f93421c0c18b675841573`: first stable v2.1.3; V2 pass.
- `baec69bae8e2c90551dbb8e3c462456870c735cf`: first stable v1.19.4; V1 pass.
- `52a10f573f1da5103c85990da9341e3645a39365`: first stable v2.1.0; V2 pass.
- `92242b55392395535bc0f4992793209d0a06e4b0`: first stable v2.1.0; V2 pass.
- `c93aaae37157d785f76a8e9a9243a6560e286468`: first stable v2.1.3; V2 pass.
- `89d996c2c5b902c9467494d8abe01205830e1d4a`: first stable v2.1.2; V2 pass.
- `a3f7f42ac96800aec06fb26365cd482024a52cd1`: first stable v2.0.29; V2 pass.

### Section 15. ACP starts a private server and persists directory grants on the session

**VERIFIED.** The ACP handler starts Standalone.start and authenticates its network client to that private child; ACP itself uses stdin/stdout. The directory grant code stores external_directory allow rules and session metadata while preserving other rules. The tagged protocol contract explicitly states child grant copying, absolute matching cwd, process-lifetime directory-scoped MCP replacement, passed headers, OAuth disabled and policy checks. The two retrospective fixes first reach v2.0.25, absent from 2.0.24. This is an editor protocol contract, not a verified third-party editor release.

Harvest date: 2026-10-23. Channel: `tagged-release`.

Receipts read, with required pin corrections applied: [ACP protocol contract](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/acp.mdx), [launch handler](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/commands/handlers/acp.ts), [directory grants](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/acp/directories.ts), [MCP registration](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/acp/sessions.ts).

Independent ancestry results:

- `f17b15eaa52ab97db1fead6b4f27d38cdced7403`: first stable v2.0.25; V2 pass.
- `ed0e7acecdb770a13edd89da65fea1e941896e35`: first stable v2.0.25; V2 pass.

## Prior claims re-checked: VERIFIED within the stated scope

- No sandbox and permissive defaults hold at v2.1.4. Independently reread SECURITY.md, agent defaults, Plan and shell implementation. A Plan label is not host containment. See section 2's pinned receipts.
- Saved approvals, independent custom-child permissions, and managed-policy ordering hold in the inspected paths. ACP directory grants are copied session state, not evidence that every parent rule propagates. See sections 3 and 15.
- Password generation holds for the inspected managed, foreground and standalone CLI paths. It does not hold as an unconditional lower-level SDK default. The source resolves the operating-path disagreement, without explaining why SECURITY.md is stale. See section 4.
- Optional Console key custody and operator-run remote execution are supported as documented architecture. Hosted voice inference in miss M6 does not establish hosted coding-agent execution. See sections 4 and 9.
- The notes' V1 sharing description is superseded by the disabled implementation at 1.19.4. Sharing documentation cannot establish either current availability or deletion of old history. See section 11.
- Desktop beta product status and independently advertised artifact identities hold. Actual installed client/server updates, payload signatures and runtime behavior remain untested. The later dev pointer refresh is recorded above.

## Material misses in the weekly window

All source commits below were independently checked against v2.1.4, or v1.19.4 where named. Each first stable is independently established; the immediately preceding stable does not contain the commit. Hosted-source containment is kept separate from deployment. These are candidate findings for the editor, not an assertion that all deserve equal space in the weekly.

### M1. Sanitized exports and database errors lose additional hidden data

Channel: tagged-release. Dates: V2.0.30 on 2026-10-15 and V2.0.31 on 2026-10-16. Half: defect.

[Database query-error parameters are redacted](https://github.com/anomalyco/opencode/commit/a8fc567c5c2a0af0b6069e6b87293d2d420cd668), first v2.0.30. [Completed compaction replay context is omitted from sanitized exports](https://github.com/anomalyco/opencode/commit/706a688994c2343243615b0bd38083fc8fe69671), first v2.0.31. The latter prevents hidden replay payloads surviving sanitization of visible summary text. At [v2.1.4 the sanitizer handles native compaction data](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/session/transfer.ts).

Operator consequence: regenerate sanitized support exports on the fixed version and inspect the actual export/error path before treating it as safe to share. This is a concrete data-disclosure repair, not a claim that every diagnostic artifact is secret-free. It belongs beside the sharing and credential discussion.

### M2. Dependency hardening removes nested Seroval 1.3.2, but does not establish complete remediation

Channel: tagged-release source/dependency graph. Date: V2.1.4 on 2026-10-23. Half: defect.

[Commit d93568f3344e1a93297d56bc1dc71892104856d0](https://github.com/anomalyco/opencode/commit/d93568f3344e1a93297d56bc1dc71892104856d0) removes `@solidjs/start/seroval` 1.3.2 and its nested plugin resolution from bun.lock; first v2.1.4, absent from v2.1.3. The [newest stable lockfile](https://github.com/anomalyco/opencode/blob/v2.1.4/bun.lock) still resolves root Seroval 1.5.6. Do not summarize this as all Seroval issues fixed.

The older [CVE-2026-59940 / GHSA-mv8w-475r-vwqw](https://github.com/advisories/GHSA-mv8w-475r-vwqw) concerns malicious serialized JSON invoking unintended functions when an application exposes suitable plugin callables; patched Seroval is 1.5.3. Separately, [CVE-2026-104845 / GHSA-jp82-f5mq-hwhp](https://github.com/advisories/GHSA-jp82-f5mq-hwhp) covers small JSON inputs causing CPU/memory exhaustion through unchecked typed-array allocation, lists <=1.6.2 as affected and 1.6.3 as patched. The October 22 [GitHub Security Lab report](https://securitylab.github.com/advisories/GHSL-2026-200_Seroval/) supplies additional typed-array type-confusion analysis. These dependency records require a reachable deserialization-path audit; I did not establish an exploitable OpenCode CLI or hosted endpoint. Review the deployed web/server-function dependency graph separately from bundled Bun.

### M3. Hosted GitHub/bridge authentication surfaces are narrowed or removed

Channel: source contained in tagged-release v2.1.3, hosted deployment unverified. Source dates: 2026-10-21. Half: both.

[GitHub App tokens are scoped to the verified repository](https://github.com/anomalyco/opencode/commit/f9098c96105bf5f6cbdb859c6e9f2045666d07d7). The [unauthenticated Feishu bridge route is removed](https://github.com/anomalyco/opencode/commit/0c6be8694894dc96b87c5a7b773d52e57ddaa1b2), as is the [PAT-to-installation-token exchange route](https://github.com/anomalyco/opencode/commit/17ebb66d2557be741275b8d14f4e0997885f80d0). All first appear in v2.1.3, absent from v2.1.2. GitHub mock execution changes from MOCK_TOKEN exchange to direct TOKEN use; ordinary Actions retain OIDC exchange.

Operator consequence: adapt self-hosted automation that calls removed routes and check the actual deployed token audience/scope. This is primary evidence of attack-surface reduction and a compatibility change. It does not establish the Console incident's cause, affected keys, remediation time, or deployment completion.

### M4. Free-model selection defaults and model-picker visibility change

Channel: tagged-release. Dates: V2.0.31 on 2026-10-16 and V2.1.0 on 2026-10-20. Half: both.

[Default selection begins preferring Big Pickle when only free OpenCode models are available](https://github.com/anomalyco/opencode/commit/8db638c53ca568028c915e593277b1a14a1e03fe), followed by [an explicit preference order](https://github.com/anomalyco/opencode/commit/4cce6aef4e6578a2f72afd82b7fdadc9a5733df1). Both first reach v2.0.31. [Free models also become visible beside paid twins by default](https://github.com/anomalyco/opencode/commit/a70eaa759b7857f89241c6262dd2cab00fbc3844), first v2.1.0. The [v2.1.4 implementation](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/model.ts) preserves the conditional free-only ordering.

Operator consequence: pin a provider/model when routing or retention matters. The free-model exclusion flag in section 10 is only half of the selection story. The default ordering change is not proof that every signed-in or explicitly selected session switches models.

### M5. Configured reasoning options generate model variants in both majors

Channel: tagged-release. Date: 2026-10-16. Half: capability.

[V1 commit d12161eecd9886b820fc438921c06a0b3ca58d3b](https://github.com/anomalyco/opencode/commit/d12161eecd9886b820fc438921c06a0b3ca58d3b) first ships in v1.19.3, absent from v1.19.2. Configured reasoning_options replace catalog-derived variants, then explicit configured variant overrides apply. [V2 commit d889cb20447f3b31d88719786f46a1a75ed2e6fa](https://github.com/anomalyco/opencode/commit/d889cb20447f3b31d88719786f46a1a75ed2e6fa) first ships in v2.0.31, absent from v2.0.30.

Operator consequence: custom/provider-compatible models can expose reasoning controls through configuration instead of a custom adapter. Recheck variant names and provider request settings when adopting this behavior. This is the V1.19.3 capability omitted even though its release appears in the ledger.

### M6. SDK clients can discover voice models and start Console-hosted GPT-Live sessions

Channel: tagged-release client/server capability; actual Console availability unverified. Date: V2.1.3 on 2026-10-22. Half: capability.

[Experimental voice-model discovery](https://github.com/anomalyco/opencode/commit/79fd806343db0de150f23b09e4b9199434d6779c) and [connected-Console hosted GPT-Live sessions](https://github.com/anomalyco/opencode/commit/f7577a1f65b465b35b0dcb30b23f22c14e3b5460) both first reach v2.1.3, absent from v2.1.2. The [tagged SDK release notes](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#sdk) specify voice.models, voice.session and instruction updates.

Operator consequence: a bounded voice integration can use the supported discovery/session API rather than bespoke provider setup. Preserve experimental status and connected-workspace requirements. Hosted voice inference does not prove hosted coding-agent execution or a separately released iOS client.

### M7. Configured instructions start loading, and Claude skill-discovery disable flags are honored

Channel: tagged-release. Date: V2.0.30 on 2026-10-15. Half: both.

[Configured instruction files, globs and URLs are loaded](https://github.com/anomalyco/opencode/commit/1e63a3bb73713ccaddd2c527e372ac79f2a72e4c). [OPENCODE_DISABLE_CLAUDE_CODE and OPENCODE_DISABLE_CLAUDE_CODE_SKILLS gate .claude skill roots](https://github.com/anomalyco/opencode/commit/775d1d0d7138fd9b4de455186ff2c1b1e2505a3b). Both first reach v2.0.30, absent from v2.0.29. The latter does not disable .agents roots and is separate from the absence of a CLAUDE.md instruction fallback.

Operator consequence: test one configured instruction and one disabled compatibility skill root after upgrading the server. For remote instruction URLs, the source keeps the last good copy or skips an unavailable URL; do not assume a failed fetch halts all work. This changes which instructions actually reach model context.

### M8. Eight public malware advisories name third-party OpenCode ecosystem packages

Channel: docs-only advisory records concerning third-party npm distribution. Dates: 2026-10-16 and 2026-10-22. Half: defect.

A registry-wide GitHub Advisory Database query, including type=malware, finds records absent from the repository's three-entry advisory index. On 2026-10-16T18:49:06Z all versions >=0 of these exact package names were listed:

| Package | Canonical receipt |
| --- | --- |
| @beloved-lenora/opencode-shared-rpc | [GHSA-8c9g-fwgq-rqq5](https://github.com/advisories/GHSA-8c9g-fwgq-rqq5) |
| @beloved-lenora/opencode-shell-guard | [GHSA-pm76-w63j-7j29](https://github.com/advisories/GHSA-pm76-w63j-7j29) |
| @beloved-lenora/opencode-btw | [GHSA-xv54-6gmc-3xph](https://github.com/advisories/GHSA-xv54-6gmc-3xph) |
| @beloved-lenora/opencode-stats | [GHSA-f4h2-68pg-ffhj](https://github.com/advisories/GHSA-f4h2-68pg-ffhj) |
| @beloved-lenora/opencode-goal | [GHSA-c78h-wwhq-g6j8](https://github.com/advisories/GHSA-c78h-wwhq-g6j8) |
| @beloved-lenora/opencode-todo | [GHSA-9rjq-6mhc-46c5](https://github.com/advisories/GHSA-9rjq-6mhc-46c5) |
| @beloved-lenora/opencode-orchestrator | [GHSA-7wq2-8pc2-wm26](https://github.com/advisories/GHSA-7wq2-8pc2-wm26) |

[GHSA-9855-prwc-mfp2](https://github.com/advisories/GHSA-9855-prwc-mfp2), published 2026-10-22T18:35:11Z, names opencode-skills-collection versions 4.0.56, 4.0.57, 4.0.77, 4.1.0, 4.1.1, 4.1.3, 4.1.4, 4.1.6, 4.1.7, 4.1.8, 4.1.9, 4.1.10, 4.1.11, 4.1.12, 4.1.13, 4.1.14, 4.1.16, 4.1.17, 4.1.18, 4.1.19 and 4.1.20. Every advisory's exact record and affected ranges were independently read through the GitHub API.

In plain words: these records identify malicious packages that can give an outside party control of the installing/running machine and expose its keys. For a machine that installed a listed package/version, the canonical response is host-compromise handling and key rotation from a separate clean machine, not merely an OpenCode CLI upgrade. The records do not identify the payload or prove compromise of @opencode/cli, opencode-ai, @opencode-ai/cli, the Console, or the separately alleged Copilot-auth plugin. Those identities must remain distinct.

### M9. Session archiving is restored through durable events and API state

Channel: tagged-release. Date: V2.1.0 on 2026-10-20. Half: capability.

[Commit fa9da987be20f189408edd6494fc425c1235d502](https://github.com/anomalyco/opencode/commit/fa9da987be20f189408edd6494fc425c1235d502) adds archived filtering, archived=true/false updates, and durable session.archived/session.unarchived events. First v2.1.0, absent from v2.0.32.

Operator consequence: integration owners can remove finished sessions from active lists and restore them without deleting their record. Adapt list filters and event consumers. This is a durable-state/workflow capability absent from the harvest's standing session discussion.

### M10. Idle-unload control and quota recovery reduce distinct interruption costs

Channel: tagged-release. Date: V2.1.2 on 2026-10-21. Half: both.

[experimental.location_idle_timeout](https://github.com/anomalyco/opencode/commit/d898c048ae8513e333c5dc88fd3351f14be7d8fd) accepts a duration or false, retaining 60 minutes as the default. [The TUI free-limit recovery change](https://github.com/anomalyco/opencode/commit/86a0950c6194f4a848f37fa0c80f7b2c863f8bea) restores a submitted prompt when the composer is empty and presents reset/model-switch actions instead of the generic failure path. Both first reach v2.1.2, absent from v2.1.1; [tagged release notes](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md) corroborate the client behavior.

Operator consequence: choose unloading explicitly for idle workspaces and avoid retyping quota-rejected prompts. Keeping a location loaded indefinitely costs resources; it does not resolve a hung task. These controls are distinct from section 14's fixes that keep active jobs loaded.

### M11. The diff side panel graduates from an experiment to the default

Channel: tagged-release. Date: V2.0.30 on 2026-10-15. Half: capability.

[Commit 09a075d90c063198a4f08ed78ede86fe4558d639](https://github.com/anomalyco/opencode/commit/09a075d90c063198a4f08ed78ede86fe4558d639) removes the experimental diff-panel gate. In a session, /diff opens beside the transcript unless fullscreen is configured; outside a session, it falls back to the full-screen route. First v2.0.30, absent from v2.0.29.

Operator consequence: review remains next to the session without an experimental toggle. Existing full-screen preferences and the outside-session exception matter. This is a confirmed default flip, without a measured claim about review speed.

### M12. Go documentation ends a fourfold Step 5 Preview allowance promotion

Channel: docs-only service contract change; source contained in v2.1.3. Source date: 2026-10-21. Half: defect/economics.

[Commit 3a1f9a934fef659d4cfd6bd3964da6340cf0c3e9](https://github.com/anomalyco/opencode/commit/3a1f9a934fef659d4cfd6bd3964da6340cf0c3e9) changes the documented Step 5 Preview Go allowance from promotional $60 to $15, and Go Plus from promotional $240 to $60, with corresponding request estimates reduced fourfold. [The Go FAQ separately removes its 200 requests/day free-model claim](https://github.com/anomalyco/opencode/commit/4d5965762ec5e0d1a0b14630553fc62b51a11fba). Both first appear in v2.1.3's source, absent from v2.1.2.

Operator consequence: recheck model-specific entitlement and the actual workspace's live limits before budgeting a run. These are documented allowance/policy changes, not proof of an account's billing, deployed enforcement time, or the CLI performing less efficiently. Optional subscriptions are more than a standing product-name list this window.

### M13. Fresh zsh/Fish installations receive missing shell configuration

Channel: tagged source plus independently matched live installer. Date: V2.1.2 on 2026-10-21. Half: defect.

[Commit 442439183d679880c9e68cafbd1f8fbaec1a78f8](https://github.com/anomalyco/opencode/commit/442439183d679880c9e68cafbd1f8fbaec1a78f8) creates a missing zsh/Fish config file when PATH modification is enabled, writes the PATH entry when possible and tells the operator to reload the shell. First v2.1.2, absent from v2.1.1.

The [live V2 installer](https://opencode.ai/v2/install), read only as bytes at 2026-10-24T10:26:34.155365Z, is identical to [v2.1.4:install](https://github.com/anomalyco/opencode/blob/v2.1.4/install). SHA-256: `bfa0e5cd55b0447acdb1becbd3be1854277b5f8025742bd23ebf91bc01aa8ee8`. No script was executed. Operators on a fresh shell can distinguish a successful install that needs PATH reload from a missing binary; this also makes the installer's configuration-file write an explicit part of the installation contract.

## Additional security triage outside the weekly change count

The repository advisory index still has three public entries: September's upgrade issue and January's two server/web issues. The global Advisory Database is a separate surface, as M8 demonstrates.

NVD keyword JSON was independently read at 2026-10-24T10:15:59.420018Z and returned 13 records. The two January OpenCode records describe [unauthenticated local-server command execution, CVE-2026-22812](https://nvd.nist.gov/vuln/detail/CVE-2026-22812), and [web-UI XSS leading to local command execution, CVE-2026-22813](https://nvd.nist.gov/vuln/detail/CVE-2026-22813). They are historical, not new weekly advisories. Other hits include unrelated OpenCode Systems products, a wrapper, Ouroboros, and OpenCode Studio; they are not official OpenCode CLI vulnerabilities.

One historical record deserves an explicit unresolved profile note: [CVE-2026-88624](https://nvd.nist.gov/vuln/detail/CVE-2026-88624), published 2026-09-22 and last modified 2026-09-24, describes arbitrary recursive directory deletion through Worktree.remove in v1.18.26. Its linked external report returned 404 in this read, so I cannot independently reconstruct its full threat model or assign a fixed version from that report.

The latest [V1.19.4 removal implementation](https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/worktree/index.ts#L388-L413) does independently show a consequential behavior: if the caller's canonical directory is absent from git's worktree list but exists, it calls cleanDirectory, which recursively removes it. That file is unchanged between v1.19.0 and v1.19.4, so this is not a newly shipped weekly regression. Do not claim the NVD issue was fixed in V1.19.4 merely because newer versions exist. Conversely, do not claim an unauthenticated latest-version exploit without establishing its entry point and authorization conditions.

[V2.1.4's different removal service](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/worktree.ts#L257-L269) requires a stored project worktree with a strategy, otherwise returning InvalidDirectoryError. Its [model-facing removal tool also checks edit](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/opencode.ts#L181-L200). A claim that the old deletion report proves an exposed V2.1.4 exploit is REFUTED under the requested default. The confirmed source difference and unresolved V1 triage should survive into the first profile.

The [opencode2 malware advisory](https://github.com/advisories/GHSA-8w65-j2wh-mqv7) was published at 2026-10-13T17:47:30Z, before the cutoff, and is therefore excluded from M8's weekly count. It concerns an unscoped npm package, not the official V2 package or the opencode2 executable alias.

## Rule checks and remaining limits

- **Receipt pinning: CORRECTED.** All numbered code/doc blob receipts use tags; commit receipts use SHAs. The five bare PR receipts in sections 6 and 14 need the replacements recorded above. PR merge state was independently checked, not inferred from their titles. Registry selectors, updater feeds and advisory records are necessarily live or canonical records, and are labeled with read times or identifiers rather than presented as immutable historical snapshots.
- **Dates and channels: VERIFIED with the preview refresh above.** All stable publication dates in the ledger are 2026. Retrospective September fixes and standing contracts remain explicitly outside new weekly shipment. Source tags do not establish deployment of Console/function/update services. The new dev artifact makes the former main-only description stale as of this read.
- **Plain-language security consequence: VERIFIED in sections 12 and 13.** Both explain what an attacker can do and the required path. M2 and M8 apply the same standard to missed dependency and malware records. Do not turn a dependency's generic advisory into a proven reachable OpenCode exploit.
- **Marketing separation: VERIFIED.** The numbered sections use source, docs and distribution records. The launch essay and adoption claims remain discovery/positioning material. No usage number establishes unique humans or lower human attention per verified outcome.
- **Social quotation rule: VERIFIED.** Numbered sections contain no quoted social-post text. Non-promoted leads are paraphrased and do not prove product behavior. The Console incident and the distinct Copilot-auth-plugin allegation remain unverified; M8 cannot be used to settle either by association.
- **License/install channels.** No LICENSE change appears in v2.0.28..v2.1.4. The two official npm majors remain distinct, with the stable recommendation unchanged. M13 adds the independently confirmed installer change. No package-manager pointer beyond those actually read is certified.
- **Scope.** No site build, npm install, root-repository git mutation or upstream-code execution occurred. Only this requested repository file was written; the harvest was not edited. No distributed binary runtime, exploit, migration, editor-compatibility, service-incident, telemetry capture or end-to-end attention benchmark was tested.
