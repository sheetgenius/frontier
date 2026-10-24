# Crosscheck: gemini-cli

Run: runs/2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0

Window: after 2026-10-13T23:59:59Z through the independent reads on 2026-10-24 UTC. The channel refresh ended at 2026-10-24T10:13:01.671975Z. This review read RESEARCHER-BRIEF.md, the house authorities, source contract/notes, profile, parent harvest and assigned harvest. It independently cloned the upstream into `/Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones/gemini-cli-verify/` as a bare, blobless repository and read Git objects. No upstream code was executed.

Disposition: correct sections 2, 3, 9 and 15, and add the two missed stable changes below before using this harvest for a profile. Section 3 and section 15 need substantive wording changes; sections 2 and 9 need receipt corrections. The 17 numbered sections total 13 VERIFIED, 4 CORRECTED, 0 REFUTED and 0 UNVERIFIABLE. These counts exclude channel checks, prior-claim spot checks and additional misses. Verification establishes the stated source behavior, not runtime success.

## Channel truth: VERIFIED

Install today is correct about the newest stable: `@google/gemini-cli@0.65.0`. Independent `gh release list` and `npm view @google/gemini-cli time --json` agree with the release and publication timestamps in the harvest. GitHub still marks v0.65.0 latest and non-prerelease. No newer stable or regular preview was returned. [Stable release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0), [versioned package](https://registry.npmjs.org/@google%2fgemini-cli/0.65.0).

The final independent reads were:

| Surface | UTC read completed | Result |
| --- | --- | --- |
| GitHub release list | 2026-10-24T10:12:55.123499Z | Stable v0.65.0; preview v0.66.0-preview.0; newest nightly v0.67.0-nightly.20261024.gcd1b45c2d |
| CLI npm dist-tags | 2026-10-24T10:12:57.386497Z | latest=0.65.0; preview=0.66.0-preview.0; nightly=staging-tmp=0.67.0-nightly.20261024.gcd1b45c2d |
| Core npm dist-tags | 2026-10-24T10:12:59.108911Z | Same four selectors |
| A2A npm dist-tags | 2026-10-24T10:13:00.410722Z | Same four selectors |
| Remote HEAD | 2026-10-24T10:13:01.671975Z | cd1b45c2db0a5ea7b7fc3b67c1ba5879601d6005 |

CLI alone retains the literal `false` selector at 0.42.0-nightly.20260512.g11a9edc80. These are present observations, not historical dist-tag assignments. [CLI registry](https://registry.npmjs.org/@google%2fgemini-cli), [core registry](https://registry.npmjs.org/@google%2fgemini-cli-core), [A2A registry](https://registry.npmjs.org/@google%2fgemini-cli-a2a-server).

The published package identifies the upstream repository, `gemini` binary, Node >=20 and Apache-2.0 license. The root requires >=20.0.0. Direct comparison found no license, package-identity or Node-minimum change in the inspected window. README deletions do not establish feature removal or a license change. [CLI package](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/package.json), [root package](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/package.json), [license](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/LICENSE).

### Release ledger: VERIFIED

Independent tag resolution and `git rev-list --left-right --count BASE...TAG` reproduced every ledger count. Values below are ahead/behind, reversing Git's left/right output as the harvest does.

| Tag | GitHub published UTC | Prerelease | Ahead/behind; base | CLI npm published UTC |
| --- | --- | --- | --- | --- |
| [v0.64.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0) | 2026-10-13T20:44:46Z | false | 20/2; v0.63.0 | 2026-10-13T20:48:24.183Z |
| [v0.65.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0) | 2026-10-20T21:17:57Z | false | 29/4; v0.64.0 | 2026-10-20T21:26:34.492Z |
| [v0.66.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-preview.0) | 2026-10-20T21:04:34Z | true | 27/2; v0.65.0 | 2026-10-20T21:08:08.977Z |
| [v0.67.0-nightly.20261024.gcd1b45c2d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261024.gcd1b45c2d) | 2026-10-24T01:15:53Z | true | 46/2; v0.65.0 | 2026-10-24T01:19:32.154Z |

The baseline is outside the new window. The ten in-window nightly release objects, all prereleases, were independently listed:

| Tag | GitHub published UTC |
| --- | --- |
| v0.65.0-nightly.20261014.g42c518220 | 2026-10-14T01:29:12Z |
| v0.66.0-nightly.20261016.gdebf42324 | 2026-10-16T01:32:08Z |
| v0.66.0-nightly.20261017.ged96faedf | 2026-10-17T01:31:42Z |
| v0.66.0-nightly.20261018.ged96faedf | 2026-10-18T01:34:41Z |
| v0.66.0-nightly.20261019.ged96faedf | 2026-10-19T01:34:29Z |
| v0.66.0-nightly.20261020.g76e4d7c04 | 2026-10-20T01:33:51Z |
| v0.67.0-nightly.20261021.gd00859d6b | 2026-10-21T01:33:29Z |
| v0.67.0-nightly.20261022.g09d81bf11 | 2026-10-22T01:23:52Z |
| v0.67.0-nightly.20261023.ga713410ab | 2026-10-23T01:35:10Z |
| v0.67.0-nightly.20261024.gcd1b45c2d | 2026-10-24T01:15:53Z |

The [release API](https://api.github.com/repos/google-gemini/gemini-cli/releases?per_page=45) supplies the release flags and timestamps; the [registry publication ledger](https://registry.npmjs.org/@google%2fgemini-cli) independently supplies npm times. A missing October 15 nightly is not an omitted release in the returned ledger.

Resolved commits agree exactly: v0.64.0=`4a0749aceac5643e6f85a36d7420314d85e13b52`; v0.65.0=`6006c14a4decfe4b891c6263ad6ad5992e404b5b`; regular preview=`6d6b49efd32bc424eac12fcfdcb1151b7735ea40`; newest nightly=`ec71029abe3259d1101a0ee574507b912f25d927`.

Main is 45 ahead/2 behind stable. Its 43 commits after the cutoff exclude two October 13 documentation commits. Carry-in v0.65.0-preview.0 resolves to `ca417cd41f0dbf091c30d55b5b369f4c6b852fc8`, published 2026-10-13T20:27:55Z, and is an ancestor of stable with one subsequent release commit. Main is an ancestor of the current nightly with one subsequent release commit. Thus the inspected implementation has no main-only remainder. [Stable/main comparison](https://github.com/google-gemini/gemini-cli/compare/v0.65.0...cd1b45c2db0a5ea7b7fc3b67c1ba5879601d6005), [carry-in promotion](https://github.com/google-gemini/gemini-cli/compare/v0.65.0-preview.0...v0.65.0), [main/nightly comparison](https://github.com/google-gemini/gemini-cli/compare/cd1b45c2db0a5ea7b7fc3b67c1ba5879601d6005...v0.67.0-nightly.20261024.gcd1b45c2d).

## Independent section verdicts

Every commit receipt below was opened as a Git commit/diff. Every numbered blob receipt was resolved to a blob at its stated tag and the relevant implementation was read. No numbered code receipt uses main or HEAD. Issue #29556 is the one mutable supplemental receipt; section 9 specifies the correction.

Ancestry notation is the actual exit code from `git merge-base --is-ancestor COMMIT TAG`: 0 means contained; 1 means absent. In the section results, B=v0.64.0, S=v0.65.0, P=v0.66.0-preview.0, and N=v0.67.0-nightly.20261024.gcd1b45c2d. Dates are committer dates unless explicitly called delivery dates. A commit's presence was supplemented by reading the tagged implementation, since stable branches contain cherry-picks too.

### 1. Untrusted project-settings writes: VERIFIED

Commit [f41d0bc8f7fe79563d353f97c7580ed4d8fd24d7](https://github.com/google-gemini/gemini-cli/commit/f41d0bc8f7fe79563d353f97c7580ed4d8fd24d7), dated 2026-10-06, returned B/S/P/N=1/0/0/0. Stable delivery on 2026-10-20 is correctly distinguished from implementation. Read the stable [settings guard](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/settings.ts#L461-L492), [MCP add](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/commands/mcp/add.ts#L45-L66), and [MCP remove](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/commands/mcp/remove.ts). Empty untrusted workspace settings become read-only; project persistence fails before mutation. User scope and an explicit trust decision remain distinct choices. The baseline lacks this guard.

### 2. Resume and cancellation history: CORRECTED

The implementation and 2026-10-20 stable promotion are confirmed. [486ae2cd3edd45cfe00ae0f138e9c62916370ab3](https://github.com/google-gemini/gemini-cli/commit/486ae2cd3edd45cfe00ae0f138e9c62916370ab3) and [d3c70e73cb731e5d6945f9fd8eb449253567c84f](https://github.com/google-gemini/gemini-cli/commit/d3c70e73cb731e5d6945f9fd8eb449253567c84f) date to 2026-10-06; [204db94ae2a33f70afec7400ebf6b78f1b5e2575](https://github.com/google-gemini/gemini-cli/commit/204db94ae2a33f70afec7400ebf6b78f1b5e2575) dates to 2026-10-13. Each returned B/S/P/N=1/0/0/0. Recording cleanup waits for initialization, preserves resumed/resumable content, and cancellation bookkeeping has a one-second wait.

Exact receipt fix: replace the link labelled "stable reconstruction", which points to `packages/cli/src/utils/sessionUtils.ts`, with [packages/core/src/utils/sessionUtils.ts at v0.65.0](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/utils/sessionUtils.ts#L108-L320). The forward scan, call-ID deduplication and missing-response synthesis live in core, not the linked CLI display/session-selection utility. [Stable recording cleanup](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/services/chatRecordingService.ts#L1327-L1370) and [stable cancellation UI](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/ui/AppContainer.tsx) support the other clauses. Apply the same source-link fix to later references that label the CLI utility as reconstruction.

### 3. OTLP headers: CORRECTED

[b8e550e918e1f3f140e497b1a4ee945f88e672f1](https://github.com/google-gemini/gemini-cli/commit/b8e550e918e1f3f140e497b1a4ee945f88e672f1), dated 2026-10-07, returned B/S/P/N=1/0/0/0. Stable promotion on 2026-10-20, case-insensitive precedence and HTTP/gRPC exporter wiring are confirmed. [Resolution and precedence](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/telemetry/config.ts#L298-L348), [exporters](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/telemetry/sdk.ts#L282-L345), [telemetry defaults](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/docs/cli/telemetry.md#L40-L48).

Exact wording fix: replace "Invalid header data is rejected" with "Invalid header objects or wholly unusable nonempty header strings cause configuration errors. In comma-separated key=value input, malformed pairs and invalid names/values are skipped when another valid pair remains; gRPC exporter metadata can also skip invalid entries with a warning." The [parser](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/telemetry/config.ts#L109-L189) continues past a pair without `=` and only inserts valid tokens. For example, `Authorization=Bearer token,broken` retains the authorization pair. This is source reasoning, not an executed parser probe. Operators must verify effective headers rather than assume partial corruption fails closed.

### 4. Authentication retry bounds and extension isolation: VERIFIED

[44d764ee579610bf73c43107f5e0422cd92588b9](https://github.com/google-gemini/gemini-cli/commit/44d764ee579610bf73c43107f5e0422cd92588b9) dates to 2026-10-07; [e5e1d3d0514e5e579c5f2406928e801aef9efcc6](https://github.com/google-gemini/gemini-cli/commit/e5e1d3d0514e5e579c5f2406928e801aef9efcc6) to 2026-10-09; [51617c1bcbcb038291125b092501b4342f4e7f77](https://github.com/google-gemini/gemini-cli/commit/51617c1bcbcb038291125b092501b4342f4e7f77) to 2026-10-12. Each returned B/S/P/N=1/0/0/0, validating the 2026-10-20 stable-delivery date. Retry paths limit verification attempts and preserve OAuth retry bookkeeping. Read [stable extension loading](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extension-manager.ts#L724-L759) and installation validation in the same file: invalid load patterns warn/continue; missing or disallowed metadata skips that extension; install-time validation still throws.

### 5. Directory references and ignore pruning: VERIFIED

[9b6e0265d16bbd29ca51e33c9e0c01dc4cec5e83](https://github.com/google-gemini/gemini-cli/commit/9b6e0265d16bbd29ca51e33c9e0c01dc4cec5e83) and [8b5cb8a6491e17b2dd3ba0cfb49fcfe41c48c4a3](https://github.com/google-gemini/gemini-cli/commit/8b5cb8a6491e17b2dd3ba0cfb49fcfe41c48c4a3) date to 2026-10-09 and returned B/S/P/N=1/0/0/0. The [stable at-command processor](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/ui/hooks/atCommandProcessor.ts#L535-L549) filters directories out of eager reads; its directory path remains in the query. The ignore-parser diff implements cached hierarchical decisions and subtree pruning. Stable delivery on 2026-10-20 is correct. No performance number is established.

### 6. README access and optimization statements: VERIFIED

[21976e977ef833e9a03538119eac933fe89767a7](https://github.com/google-gemini/gemini-cli/commit/21976e977ef833e9a03538119eac933fe89767a7) and [b25669d84e1a404e30c176d779e732e25dafcec0](https://github.com/google-gemini/gemini-cli/commit/b25669d84e1a404e30c176d779e732e25dafcec0) both date to 2026-10-16 and returned S/P/N=1/0/0. The [preview README](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/README.md#L1-L22) contains the June 18, 2026 consumer replacement statement and Gemini 4 Argon warning; the older [stable authentication guide](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/docs/get-started/authentication.mdx#L12-L50) still recommends personal-account login. The harvest appropriately treats these as vendor documentation, not measured optimization or retroactive entitlement proof. Removing README marketing does not prove corresponding runtime features were removed.

### 7. Global Git configuration and noninteractive authentication: VERIFIED

[a2426f78653c8a3848fb2173d76b9dbf5b8e4fe2](https://github.com/google-gemini/gemini-cli/commit/a2426f78653c8a3848fb2173d76b9dbf5b8e4fe2) dates to 2026-10-15; [5534eeac330570eb2d0e71846eb42a8bef346a41](https://github.com/google-gemini/gemini-cli/commit/5534eeac330570eb2d0e71846eb42a8bef346a41) to 2026-10-20. Both returned S/P/N=1/0/0. The 2026-10-20 preview delivery is correct. Read the [preview shell environment](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/services/shellExecutionService.ts#L580-L640) and [safe Git environment](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/utils/gitUtils.ts#L13-L90). Nonempty global configuration is retained, system configuration remains disabled, credential helpers remain overridden, and the helper configures noninteractive SSH/credential behavior. The harvest correctly limits the SSH claim to this helper path.

### 8. Private-network MCP OAuth opt-in: VERIFIED

[b041de0171144b3dc7d31822196bc21761817ad0](https://github.com/google-gemini/gemini-cli/commit/b041de0171144b3dc7d31822196bc21761817ad0), dated 2026-10-20, returned S/P/N=1/0/0. The [preview validator](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/mcp/oauth-utils.ts#L54-L171) checks the opt-in separately from loopback, requires HTTPS away from loopback, and checks resolved addresses. The [tagged guide](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/docs/tools/mcp-server.md#L436-L441) names RFC 1918, RFC 6598, RFC 4193, internal/local names and default false. Link-local addresses remain excluded. This does not establish arbitrary web-fetch access or an end-to-end SSRF guarantee.

### 9. Environment resolution and raw migration placeholders: CORRECTED

The source claims are confirmed. [bdc1bd25d8e9551419ba9dc8831a6e0d85d36030](https://github.com/google-gemini/gemini-cli/commit/bdc1bd25d8e9551419ba9dc8831a6e0d85d36030), dated 2026-10-15, returned S/P/N=1/0/0; [a713410aba5d594594e20d5c822e3aab8f822089](https://github.com/google-gemini/gemini-cli/commit/a713410aba5d594594e20d5c822e3aab8f822089), dated 2026-10-22, returned 1/1/0 and first appears in the 2026-10-23 nightly. Read the [preview two-pass environment resolution](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/cli/src/config/settings.ts#L1047-L1118) and [nightly separate original-value persistence](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/config/settings.ts#L493-L525), plus its deprecated-migration diff.

Exact receipt fix: move [issue #29556](https://github.com/google-gemini/gemini-cli/issues/29556) out of the claim-proof receipt list and label it a mutable discovery/report link. It is not pinned to a tag or SHA. Independently opened issue metadata says created 2026-09-29 and closed 2026-10-22; its body describes placeholder persistence, not a reproduced credential theft. Use the pinned migration commit and tagged settings code above for the implementation claim. The paired dates in this section remain valid, with the first fix delivered in regular preview on October 20 and the later fix delivered in nightly on October 23.

### 10. Signals, cancellation and continuation: VERIFIED

[ed96faedfd5571f055c44f2c9509d62321d1138d](https://github.com/google-gemini/gemini-cli/commit/ed96faedfd5571f055c44f2c9509d62321d1138d), dated 2026-10-16, returned S/P/N=1/0/0. [451a02ff03f1d2a8fe870c120fd5342cfd6f9fd1](https://github.com/google-gemini/gemini-cli/commit/451a02ff03f1d2a8fe870c120fd5342cfd6f9fd1), dated 2026-10-22, and [a3dd9f8c7bcb495a46d0b505b6f179996ccd8332](https://github.com/google-gemini/gemini-cli/commit/a3dd9f8c7bcb495a46d0b505b6f179996ccd8332), dated 2026-10-23, returned 1/1/0 and first appear in the October 23 and October 24 nightlies respectively. Read the [nightly headless loop](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/nonInteractiveCli.ts): signal registration precedes the non-TTY return; abort checks precede response consumption and scheduling. The UI diff suppresses continuation/nudges after terminal outcomes. These receipts do not prove universal process-tree termination.

### 11. Container IDE bridge and companion source: VERIFIED

Shutdown commit [11db29e66045f56ae6ed4ac263a691610fce4c69](https://github.com/google-gemini/gemini-cli/commit/11db29e66045f56ae6ed4ac263a691610fce4c69), dated 2026-10-08, returned B/S/P/N=1/0/0/0. Read the [stable shutdown implementation](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/vscode-ide-companion/src/ide-server.ts#L423-L480): callers join the promise, transports close first, sockets close and generation checks preserve newer state.

[5e7b42d76afc90567443ee2a14c8c565c43bdee4](https://github.com/google-gemini/gemini-cli/commit/5e7b42d76afc90567443ee2a14c8c565c43bdee4) and [7cb39b75e4770805d6b750487d5950e58cc646c5](https://github.com/google-gemini/gemini-cli/commit/7cb39b75e4770805d6b750487d5950e58cc646c5) date to 2026-10-21; [d968ea0a247b4709e23fc03b782eaa05ce1bf4d4](https://github.com/google-gemini/gemini-cli/commit/d968ea0a247b4709e23fc03b782eaa05ce1bf4d4) dates to 2026-10-23. Each returned S/P/N=1/1/0. First nightly dates are October 22, October 22 and October 24. The [bridge](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/utils/ideBridge.ts#L447-L533) limits tools and performs a lexical normalized workspace check; [sandbox wiring](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/utils/sandbox.ts) retains the bearer token on the host. The exclusions and active-workspace changes match their diffs. No symlink-confinement guarantee is inferred.

Source promotion remains separate from Marketplace delivery. An independent read of the [versioned manifest](https://Google.gallerycdn.vsassets.io/extensions/google/gemini-cli-vscode-ide-companion/0.20.0/1765572429008/Microsoft.VisualStudio.Code.Manifest) at 2026-10-24T10:13:47.292160Z returned version 0.20.0, publisher identifier `google`, name `gemini-cli-vscode-ide-companion`. A [Marketplace extension query](https://marketplace.visualstudio.com/items?itemName=Google.gemini-cli-vscode-ide-companion) completed at 2026-10-24T10:14:17.301992Z independently returned 0.20.0, lastUpdated=2025-12-12T20:53:06.29Z, publisherName=Google. These confirm the selector observation but supply no mapping to the shutdown source fix. The harvest's capitalized publisher name is the Marketplace identity; the manifest uses lowercase.

### 12. Existing-file permissions and hard links: VERIFIED

[09d81bf116b6f0ef084731dc996aa9d56438bb70](https://github.com/google-gemini/gemini-cli/commit/09d81bf116b6f0ef084731dc996aa9d56438bb70), dated 2026-10-21, returned S/P/N=1/1/0 and first appears in the October 22 nightly. Compared [nightly writes](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/core/src/services/fileSystemService.ts#L57-L164) with [stable writes](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/services/fileSystemService.ts#L53-L100). Existing files get W_OK access checks; nlink >1 uses an in-place write; other files retain temp-file/rename behavior and mode handling. This supports the stated fidelity/atomicity trade. It does not establish immunity to races or privileged-user writes.

### 13. External-output flag taint and session approval memory: VERIFIED

[120a39ded6ad7b82e45b574ab54baba451d65fe9](https://github.com/google-gemini/gemini-cli/commit/120a39ded6ad7b82e45b574ab54baba451d65fe9), dated 2026-10-21, returned S/P/N=1/1/0 and first appears in the October 22 nightly. Read the [tracker](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/core/src/utils/untrustedContextTracker.ts) and [shell confirmation path](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/core/src/tools/shell.ts). Local shell output remains indexed for path/high-risk checks; unknown low-risk flag matching uses external provenance. Acknowledgments are stored on the session object and scoped by root-command sets. The claim does not promise persistent grants or elimination of all prompts.

### 14. Local machine-readable model catalog: VERIFIED

[cd1b45c2db0a5ea7b7fc3b67c1ba5879601d6005](https://github.com/google-gemini/gemini-cli/commit/cd1b45c2db0a5ea7b7fc3b67c1ba5879601d6005), dated 2026-10-23, returned S/P/N=1/1/0 and first appears in the October 24 nightly. The [models command](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/models/list.ts) uses the available-model builder, skips extensions, emits JSON when requested and hard-codes outputTokens=8192. Both command forms are added by the pinned commit. No live service entitlement, negotiated token limit or served-model observation follows.

### 15. A2A and conversation adapters: CORRECTED

The dates and channel split pass. [fa2531d457208ef92029a11dd454bf56a3cd21ee](https://github.com/google-gemini/gemini-cli/commit/fa2531d457208ef92029a11dd454bf56a3cd21ee), dated 2026-10-09, returned B/S/P/N=1/0/0/0. [06d329873703ddabe8a842d962342ac4ad779e83](https://github.com/google-gemini/gemini-cli/commit/06d329873703ddabe8a842d962342ac4ad779e83), dated 2026-10-14, returned S/P/N=1/0/0. [04366efb052573a8b4cf074e5973b027ae071eda](https://github.com/google-gemini/gemini-cli/commit/04366efb052573a8b4cf074e5973b027ae071eda), dated 2026-10-21, first appears in the October 22 nightly. [dbc73408840332c7faa0f40a4286641d7cdfc7a8](https://github.com/google-gemini/gemini-cli/commit/dbc73408840332c7faa0f40a4286641d7cdfc7a8) and [c690b9df153f74202c0c5b13cc197790f3c7f92f](https://github.com/google-gemini/gemini-cli/commit/c690b9df153f74202c0c5b13cc197790f3c7f92f), both dated 2026-10-22, first appear in the October 23 nightly. All three nightly-only commits returned S/P/N=1/1/0. Diffs support denial scope, scheduler grouping, JSON middleware order, extended usage bookkeeping and synthetic historical thought signatures.

Exact wording fix: replace "workspace trust is recomputed by the server rather than accepted from client/persisted task config" with "The executor now sets client/persisted isTrusted to undefined, allowing server-side trust evaluation; it previously forced that field false. The resolver also honors the IDE's GEMINI_FOLDER_TRUST environment signal after GEMINI_CLI_TRUST_WORKSPACE." The [baseline executor](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/a2a-server/src/agent/executor.ts) already overwrote client/persisted trust with false. The [stable executor](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/a2a-server/src/agent/executor.ts) and [stable trust resolver](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/a2a-server/src/config/config.ts#L444-L487) establish the actual transition. This is not evidence that v0.64.0 accepted an attacker-supplied trust bit. Correct the corresponding "additional controls" interpretation in the prior-claim/A2A posture text too.

### 16. Skill parsing and hook timeout import: VERIFIED

[debf423248af42e5710ccae49380a5031670a94f](https://github.com/google-gemini/gemini-cli/commit/debf423248af42e5710ccae49380a5031670a94f), dated 2026-10-15, returned S/P/N=1/0/0; [5b36aacf5bf3d044badc881063f7671598c27c9d](https://github.com/google-gemini/gemini-cli/commit/5b36aacf5bf3d044badc881063f7671598c27c9d), dated 2026-10-23, returned 1/1/0 and first appears in the October 24 nightly. The [preview skill loader](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/skills/skillLoader.ts) uses the encoding-aware reader, BOM/delimiter regex and bounded fallback description parsing. The [nightly importer](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/hooks/migrate.ts#L65-L105) accepts positive finite seconds, multiplies by 1000, rounds and caps the timer value. No retroactive correction of already-imported hooks is established.

### 17. Active-installation update verification: VERIFIED

[49797afb4d323b70a4fd30ee89aeb8faba399f90](https://github.com/google-gemini/gemini-cli/commit/49797afb4d323b70a4fd30ee89aeb8faba399f90), dated 2026-10-16, returned S/P/N=1/0/0. Read the [preview updater](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/cli/src/utils/handleAutoUpdate.ts#L87-L225). It resolves the active path before updating and fails the update result if matching package metadata reports an older version afterward. Missing, mismatched or unreadable metadata can still pass the best-effort check, as the harvest acknowledges. The October 16 date is implementation, with regular-preview delivery on October 20.

## Prior claims re-checked: independent spot checks

These checks sample the highest-consequence "holds" verdicts at newest stable v0.65.0. They do not claim a second complete audit of all 35 profile entries/paragraphs.

- `plugin4shell-unpatched`: VERIFIED within the harvest's narrowed scope. The [installer](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github.ts#L32-L80) fetches the requested ref and checks out FETCH_HEAD without comparing resulting HEAD to the requested commit. This verifies the omission only. Hosted branch acceptance, an end-to-end exploit and future patch policy remain unverified. The missed JSON-downloader hardening below does not repair this checkout verification omission.
- `workspace-trust-headless-enforcement`: VERIFIED. The [headless guard](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/utils/userStartupWarnings.ts#L84-L103) throws for untrusted headless startup when enabled. [Runtime fallback](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/trustedFolders.ts#L31-L35) and [schema](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/settingsSchema.ts#L1915-L1922) default true, contrary to the [tagged guide](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/docs/cli/trusted-folders.md#L8-L12). The harvest's default clarification is correct; this is not a newly established default flip in this window.
- `headless-plan-autonomous-prompt` and plan-only posture: VERIFIED. The [prompt](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/prompts/snippets.ts#L602-L620) directs autonomous progress and [policy-allowed plan exit](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/tools/exit-plan-mode.ts#L207-L268) can set YOLO in noninteractive mode. A planning label alone is not a write boundary.
- `stable-build-file-tool-gates`: VERIFIED as scoped. Read [recognized edit/build-file protection](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/policy/policy-engine.ts#L903-L956) and the [YOLO redirection rule](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/policy/policies/yolo.toml#L50-L56). The claim does not establish a universal write prohibition.
- `explicit-flash-request-rewrite`: VERIFIED as request mapping. The [gates](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/config/config.ts#L3591-L3649) enable latest Flash routing for API-key, Vertex and Gateway auth, while Google login uses experiments. The [request wrapper](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/core/modelMappingContentGenerator.ts#L44-L81) rewrites outgoing model IDs. This is not backend serving proof.
- `individual-tool-text-cap`: VERIFIED as a handled-field/part limit. The [constant](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/utils/constants.ts#L18) is 64*1024 and the [executor](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/scheduler/tool-executor.ts#L320-L405) truncates individual strings/text parts with best-effort output saving. It is not an aggregate result bound.
- `session-patches-and-local-write-locks`, lock-scope posture: VERIFIED for the sampled mutex clause. The [mutex](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/utils/pathMutex.ts#L7-L22) explicitly coordinates only one process. No cross-process guarantee follows from it.
- `sandbox-workdir-and-runtime-state`: VERIFIED for the sampled sanitization/storage clauses. [Sanitization](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/utils/sandboxUtils.ts#L245-L267) strips hooks, discovery/call commands and named API-key fields; [storage](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/config/storage.ts#L82-L107) routes Seatbelt runtime state into ~/.cache/.gemini. This is not a full sandbox audit.
- `mcp-add-settings-loss-preview-fix`, `preview-cancellation-history-repair`, `preview-companion-shutdown-source`: VERIFIED for source promotion using sections 1, 2 and 11. Marketplace delivery of the companion fix remains unestablished. Its 0.20.0 manifest does not turn a CLI source tag into a delivered extension receipt.
- A2A posture and `a2a-nested-settings-migration`: the added interpretation that trust is newly protected from accepted client/persisted values needs the section 15 correction. No new client-trust vulnerability is established by that diff.

## Misses

### M1. Stable hardens the GitHub extension JSON downloader

Material security and reliability change omitted from the assigned harvest, including its unpromoted leads. Implementation date: 2026-10-08. Newly stable delivery: 2026-10-20, v0.65.0, `tagged-release`. The commit was already in the carry-in preview, so this is a stable promotion, not new October implementation.

Independent ancestry for [a15ed711f120578df9115892991babf74e0cd75c](https://github.com/google-gemini/gemini-cli/commit/a15ed711f120578df9115892991babf74e0cd75c): v0.64.0=1; v0.65.0-preview.0=0; S/P/N=0/0/0. Direct [baseline helper](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/extensions/github_fetch.ts) versus [stable helper](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github_fetch.ts) confirms the behavioral change, not just different ancestry.

The old helper attached GITHUB_TOKEN to every URL it requested, including a recursively followed redirect destination, and lacked its own destination validation. The new helper restricts the token header to HTTPS github.com or its subdomains, validates destinations on each call, and supplies safeLookup to validate the addresses used by the socket rather than relying only on an earlier DNS check. It also bounds requests with a 30-second timeout and handles invalid JSON, aborted/incomplete streams and redirect lifecycle failures through promise rejection. The innocuous JSON/stream-error commit title understates the credential and network changes in its diff.

Operator consequence: upgrade stable extension-installation flows using GITHUB_TOKEN to 0.65.0 and test redirect destinations, private-host refusals and malformed/aborted responses. This narrows a credential-forwarding path and avoids manual recovery from hanging/crashing fetches. It is separate from unchecked extension commit pins. No hosted token exfiltration, credential leak or advisory identifier was reproduced or assigned here.

### M2. Stable keeps the full ask_user question beside the answer

Material tool-result/inspection change omitted from the assigned harvest. Implementation date: 2026-10-08. Newly stable delivery: 2026-10-20, v0.65.0, `tagged-release`.

Independent ancestry for [53a625646ba7f17063e4c33de3a30102bece1876](https://github.com/google-gemini/gemini-cli/commit/53a625646ba7f17063e4c33de3a30102bece1876): v0.64.0=1; v0.65.0-preview.0=0; S/P/N=0/0/0. Compare [baseline ask_user](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/tools/ask-user.ts#L212-L235) with [stable result display](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/tools/ask-user.ts#L215-L246). The old display retained only the short header/category beside an answer. The stable implementation retains the full question text and multiline formatting too, because the dialog's tool description disappears after closing.

Operator consequence: use stable 0.65.0 when reviewing human answers after the dialog closes, and keep both question and answer in transcript/UI readers. This reduces reconstruction work and ambiguous approval records. The claim is about the generated result display; it does not establish a new persistent consent mechanism or a changed authorization policy.

## Security-advisory and broader omission sweep

Independently queried the [repository advisory API](https://api.github.com/repos/google-gemini/gemini-cli/security-advisories) and [public advisory surface](https://github.com/google-gemini/gemini-cli/security/advisories): no published repository advisory was returned. The [global npm package advisory query](https://api.github.com/advisories?ecosystem=npm&affects=%40google%2Fgemini-cli&per_page=100) returned GHSA-wpqr-6v78-jr5g / CVE-2026-12537, published 2026-04-24 and updated 2026-09-24. Its older affected headless workflows could execute attacker-controlled code through workspace environment loading and YOLO allowlist bypass. CLI fixes are 0.39.1/0.40.0-preview.3 and the Action fix is 0.1.22. It is not an October advisory for the settings or filesystem changes. [Canonical GHSA](https://github.com/advisories/GHSA-wpqr-6v78-jr5g).

The independent [NVD keyword query](https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=gemini%20cli&resultsPerPage=100) returned 11 records. CVE-2026-12537's NVD publication date is 2026-06-24, distinct from the GHSA publication date; it describes pre-sandbox host code execution through a malicious .gemini/.env. CVE-2026-13745 was published 2026-09-10 and last modified 2026-09-23; it describes using an untrusted .env to redirect GEMINI_CLI_HOME to malicious configuration and execute code before 0.39.1. Neither is a new in-window advisory. [NVD 12537](https://nvd.nist.gov/vuln/detail/CVE-2026-12537), [NVD 13745](https://nvd.nist.gov/vuln/detail/CVE-2026-13745).

The in-window NVD modifications for CVE-2026-54785 and CVE-2026-108754 concern the separate gemini-bridge MCP server and GPT-Load proxy respectively. They do not establish a vulnerability in this upstream CLI. Other keyword hits concern unrelated wrappers, WordPress or Linux. A search lead naming GHSA-v4xv-rqh3-w9mc returned 404 at the canonical GitHub advisory endpoint and was not accepted as a current product fact. Empty or incomplete indexes do not prove that no undisclosed vulnerability exists.

The entire v0.64.0-to-v0.65.0 production diff and 45-commit stable-to-main inventory were screened, including the source contract's trust, MCP, shell, context, resume, sandbox, IDE, auth, telemetry and output areas. No additional license change, package-channel replacement, removed runtime feature or default flip was established. The global Git configuration restoration and private OAuth opt-in are already recorded in sections 7 and 8. The stale folder-trust guide is already identified in Install today. Streamed HTTP activity decoding, Windows diff quoting and terminal/accessibility changes are mentioned among the researcher's screened leads; they were not counted again as omissions. Their existence does not by itself establish a stream-json contract change or a newly assigned security vulnerability. [Pinned stable/main comparison](https://github.com/google-gemini/gemini-cli/compare/v0.65.0...cd1b45c2db0a5ea7b7fc3b67c1ba5879601d6005).

## Rule checks and limits

- Primary receipts support the numbered implementation claims after the four corrections. The issue link is mutable and must remain a report/discovery source rather than pinned implementation proof.
- Advisory identifiers are accompanied above by plain descriptions of what the bugs allow. No October source patch is assigned an older CVE merely because both concern trust or files.
- Vendor access/optimization statements remain attributed documentation. Neither launch marketing nor a local model catalog is treated as a benchmark, entitlement test or served-model receipt.
- No social post is quoted here. The harvest's social links are leads; no numbered claim depends on their contents as product evidence.
- Stable, regular preview, nightly, docs-only and Marketplace delivery remain separate. All stated section ancestry and first-nightly dates were rerun independently. Stable promotion dates are not substituted for original commit dates.
- No runtime reproduction, model request, credential use, login, exploit, sandbox, MCP OAuth, A2A/ACP execution, performance test or installed-extension inspection was performed. Historical service terms and future service commitments remain outside what this source review can establish.
- Only this crosscheck file was written as repository output. The harvest was left unchanged. No site build, npm install, upstream-code execution or Git write in the publication repository was run.
