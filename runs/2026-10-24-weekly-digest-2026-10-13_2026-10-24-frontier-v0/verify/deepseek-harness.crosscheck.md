# Crosscheck: deepseek-harness

Source: `harvest/deepseek-harness.primary.md` in this run. Window: after
2026-10-13T23:59:59Z through the verifier's reads on 2026-10-24 UTC. Final
release-list confirmation: 2026-10-24T10:28:59Z.

Result for the 15 numbered sections: 13 VERIFIED, 2 CORRECTED, 0 REFUTED,
0 UNVERIFIABLE. These counts cover numbered sections only. Install today and
the release ledger are correct. Two advisory timelines need correction before
promotion. Nine material omissions are recorded below, including an unreleased
removal of Web Fetch destination restrictions.

Read the researcher brief, source contract and notes, current profile, parent
harvest, and house authorities. Independently cloned the official repository,
blobless and without checkout, into
`tmp/cycle-2026-10-24/clones/deepseek-harness-verify/`. No cloned code was
executed. All 78 distinct pinned source-file receipts in the harvest were
opened with `git show`; its additional pinned `vendor` tree resolves as a tree.
The numbered sections contain no moving branch code receipt. Versioned npm
metadata, canonical advisory IDs, numbered RFCs, and Discussion permalinks are
different receipt types; a Discussion proves a report, not the reported runtime
outcome.

## Independent channel read

VERIFIED. The independent `gh release list` read at approximately
2026-10-24T10:11:58Z, repeated at 10:28:59Z, returned 32 release objects, all
prereleases. The newest is
[dsh-v0.2.1-rc.3](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.3),
published 2026-10-23T15:26:39Z. No newer release or stable harness was found.
The [release API](https://api.github.com/repos/deepseek-ai/deepseek-harness/releases?per_page=100)
and local fetched tags agree. There are 33 tags in total; the extra historical
tag does not add an in-window release or a stable channel.

Registry reads at 2026-10-24T10:12:14Z through 10:12:15Z, repeated for the
DSH components at 10:17:11Z through 10:17:13Z, independently confirmed:

| Surface | Selector as read | Receipt |
| --- | --- | --- |
| CLI | `latest=0.2.1-rc.2`, `next=0.2.1-rc.3`, `alpha=0.2.1-alpha.5`; 37 versions, none stable | [CLI registry](https://registry.npmjs.org/@deepseek-ai%2Fdsh) |
| SDK client | `latest=0.0.1-rc.1`, `next=0.2.1-rc.3`, `alpha=0.2.1-alpha.5` | [SDK registry](https://registry.npmjs.org/@deepseek-ai%2Fdsh-sdk-client) |
| Agent | `latest=0.1.0-rc.6`, `next=0.2.1-rc.3` | [Agent registry](https://registry.npmjs.org/@deepseek-ai%2Fdsh-agent) |
| Base | `latest=0.0.1-rc.1`, `next=0.2.1-rc.3` | [Base registry](https://registry.npmjs.org/@deepseek-ai%2Fdsh-base) |
| DeepSeek Cordis | `latest=4.0.5`, `next=4.0.1-rc.4`, `dsh-0-2-1-alpha-3=4.0.5-alpha.2` | [Cordis registry](https://registry.npmjs.org/@deepseek-ai%2Fcordis) |
| DeepSeek loader | `latest=1.0.6`, `next=1.0.2-rc.4`, `dsh-0-2-1-alpha-3=1.0.6-alpha.2` | [Loader registry](https://registry.npmjs.org/@deepseek-ai%2Fcordis-plugin-loader) |

The Cordis and loader publication times match the harvest exactly. Both
versioned CLI manifests retain `~4.0.5` and `~1.0.6` ranges. This is DeepSeek's
vendored framework publication, not an upstream Cordis release assertion.

PyPI reads at 2026-10-24T10:13:16Z confirmed
[SDK 0.2.1rc2](https://pypi.org/pypi/deepseek-harness-sdk/0.2.1rc2/json), with
the wheel uploaded 2026-10-17T14:48:59.447319Z, and
[runtime-bin 0.2.1rc2](https://pypi.org/pypi/deepseek-harness-runtime-bin/0.2.1rc2/json),
with five platform wheels beginning 2026-10-17T14:47:52.108883Z. Neither has a
newer release at this read.

Desktop feed reads at 2026-10-24T10:13:13Z through 10:13:16Z reproduced every
version, releaseDate, artifact URL, and stable-alias 404 in the harvest:
[ARM Nightly](https://download.deepseek.com/dsh-desk/feeds/mac-arm64/nightly-mac.yml)
is rc.3, [Intel Nightly](https://download.deepseek.com/dsh-desk/feeds/mac-x64/nightly-mac.yml)
is rc.1, and [Windows Nightly](https://download.deepseek.com/dsh-desk/feeds/win-x64/nightly.yml)
is rc.3. The [ARM stable alias](https://download.deepseek.com/dsh-desk/feeds/mac-arm64/latest-mac.yml),
[Intel stable alias](https://download.deepseek.com/dsh-desk/feeds/mac-x64/latest-mac.yml),
and [Windows stable alias](https://download.deepseek.com/dsh-desk/feeds/win-x64/latest.yml)
returned 404. No binary or signature was inspected.

## Release ledger re-run

VERIFIED. All eight harvest rows have the correct GitHub UTC publication time,
prerelease flag, npm publication time, peeled SHA, and ancestry distance. npm
times were independently read from the registry time map; release dates were
read from release objects, not commit dates.

| Tag suffix | GitHub published UTC | npm published UTC | Ahead/behind baseline rc |
| --- | --- | --- | --- |
| 0.2.0-rc.2 | 2026-09-29T09:42:36Z | 2026-09-29T09:56:27.792Z | 0/0 |
| 0.2.1-alpha.2 | 2026-10-09T11:09:26Z | 2026-10-09T08:18:00.501Z | 935/0 |
| 0.2.1-alpha.3 | 2026-10-14T13:32:15Z | 2026-10-14T12:35:33.988Z | 1787/0 |
| 0.2.1-alpha.4 | 2026-10-15T13:40:02Z | 2026-10-15T13:08:08.555Z | 1876/0 |
| 0.2.1-alpha.5 | 2026-10-16T12:23:28Z | 2026-10-16T12:31:49.659Z | 1912/0 |
| 0.2.1-rc.1 | 2026-10-17T05:22:10Z | 2026-10-17T03:17:24.154Z | 1916/0 |
| 0.2.1-rc.2 | 2026-10-17T08:16:33Z | 2026-10-17T08:36:31.655Z | 1925/0 |
| 0.2.1-rc.3 | 2026-10-23T15:26:39Z | 2026-10-23T07:54:30.267Z | 1931/0 |

All rows are prereleases. Local `git rev-list --left-right --count` returned
`0 6` for rc.2...rc.3 and `0 1533` for rc.3...observed master. Observed master
is `22ddee3792402c3e70ec5f86a63c3e3e895a2f60`; rc.2 is
`687f282e8625c6b8d11ff58211a90524be2e4317`; rc.3 is
`1f81c047fc48fa190a683e469daa699857e9afe8`. There is no stable baseline.
The harvest correctly uses the parent's default rc instead.

## Ancestry method

For each named change, independently ran `git merge-base --is-ancestor` against
the stated tags and observed master, plus `git tag --contains`. Exit 0 means
contained; exit 1 means absent. All numbered-section channel assignments are
correct. First-containing-tag results below are among all 33 fetched tags.
The four main-only commits in sections 14 and 15 have empty containing-tag
lists, exit 1 against rc.2 and rc.3, and exit 0 against observed master.

## 1. Rc promotion of listener, instruction, integration and Schedule contracts

VERIFIED. `cb9a590c86d90948989247863bd921261bc0350b` and
`4359d3ee17c002c05818d03c6e903767b0705a16` first occur in alpha.2 and are
ancestors of rc.1, rc.2 and rc.3. The 2026-10-17 date correctly describes rc
publication rather than initial invention.

Read the pinned listener, migration guide, instruction contract, Standard
preset, Team contract, reminder implementation, Worktrees contract and SSH
helper contract. The [listener rejects wildcard addresses](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/host/webserver/src/index.ts#L278-L285),
the [global instruction chain](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/context/agent-instructions/README.md#L30-L42)
and migrations support the text, and the
[Standard preset enables Schedule](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/web-app/presets/standard.patch.yml#L35-L36).
Team explicitly removes retained send intent, automatic retries and resend
deduplication. Worktrees and the SSH helper first occur in alpha.2:
`c67a2d6fdf848c38cd912ba3a3537deb8c8acc96` and
`d9342fcb5dcb5302e115cccb8246c6aeced53d37` both pass containment at every
subsequent tag. Their source contracts support the stated limits.

## 2. Plugin discovery, hot reload and compatibility rejection

VERIFIED. HMR `879ad372ac96e688d788737d41b3f76d16276878` first occurs in
alpha.3; market `3de3a977e0cca074b17744f7372644bc57ee63bd` and update guard
`f52abc04fa73c68623e9eeed1b5b75d0981731d0` first occur in alpha.4, published
2026-10-15. All pass rc.2 and rc.3 containment.

Read all original receipts. The [evaluator](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/app-boot/src/plugin-compatibility.ts#L51-L100)
prioritizes `engines.dsh`, otherwise checks every DSH peer with prereleases
included, and scopes exemptions to an exact package/runtime pair. The
[rc.2](https://registry.npmjs.org/@deepseek-ai%2Fdsh-agent/0.2.1-rc.2) and
[rc.3](https://registry.npmjs.org/@deepseek-ai%2Fdsh-agent/0.2.1-rc.3)
published agent manifests have exact DSH peer versions. The
[market contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-market/README.md)
supports default-off, no default indexes, unsigned metadata, rejected redirects
and separate manifest admission. The manager retains in-process Host authority
and Creator mutation approvals. No universal rc.3 startup failure is proved.

## 3. Saved credentials and headless precedence

VERIFIED. `5249d9a4ceeb9824b1713f7520a0fe094d6f89da` first occurs in
alpha.3, published 2026-10-14, and passes rc.2/rc.3 containment. Read the
credential contract, headless composition and commit; additionally inspected
the [current credential implementation](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/credentials/credentials-local/src/index.ts#L1-L20).
It states saved store, inherited environment, invocation `.env`, then home
`.env`. The [headless patch disables credentials and account authorization](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/headless/cordis.patch.yml#L35-L43).
This supports the claimed change in credential provenance.

## 4. SDK resume and optional PTC memory

VERIFIED. Resume `0bec9479aea3651479ea52a7569e2717e6c02d76` and persistent
Node `4fb14dcac6785bc214299b0327f46822b8901427` first occur in alpha.3,
published 2026-10-14, and pass rc.2/rc.3 containment. Read TypeScript and Python
SDK contracts, versioned PyPI metadata, Node PTC and terminal contracts. The
[SDK resume contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sdk/client/README.md#L28)
supports history/directory restoration, interrupted-turn repair, rejection of
missing or occupied sessions, and no external-process restoration. The
[PTC contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/ptc-runtime/ptc-runtime-node/README.md#L70-L84)
supports per-call default and best-effort retained memory. Ordinary evaluation
exceptions can preserve earlier mutations; the harvest's narrower statement
that failure can clear memory is acceptable, not a promise to reset every error.

## 5. API authorization and browser-owner authority

VERIFIED. Merge `a941635df343cd2af87d5f16478d2fc73f7348b9` first occurs in
alpha.3, published 2026-10-14, and passes rc.2/rc.3 containment. Read all five
source receipts. The [resource contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/api/remote-access/README.md#L27-L42)
denies missing grants and failed policies, while owners bypass these checks.
The [browser peer is an owner](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/rpc-host.ts#L90-L94),
and [cookie signing still uses a credential record](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts#L182-L198).
The same-user path is supported conditionally by source; no forgery was run.
Non-owner API grants do not prove that boundary repaired.

## 6. Unmounted native macOS Computer Use

VERIFIED. Merge `f9c634d0920ef529f8677eb27af9012afe912234` first occurs in
alpha.3, published 2026-10-14, and passes rc.2/rc.3 containment. Read both
CUA contracts and the merge record. The [macOS contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/cua-macos/README.md#L28-L62)
requires macOS 14+, explicit source composition, native setup, and application
consent; shipped profiles do not mount it. Saved access binds executable path
and code-signing requirement. Dispatch does not certify the UI outcome, and
distribution/onboarding remain deferred. This is tagged source availability,
not a packaged Desktop capability or demonstrated task success.

## 7. Optional hosted Search/Fetch and prompt egress

VERIFIED. `fda98dadd2c299222fe6448f75eba96f3d55407d` is in rc.2 and rc.3,
absent from rc.1 and every alpha. Its 2026-10-17 publication date is correct.
Read the rc.2 release, provider contract and search request implementation.
The [provider contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-deepseek-api/README.md#L39-L59)
and [Unicode-aware question bound](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-deepseek-api/src/search.ts#L97-L105)
support default `sendOriginalQuestion=true`, whitespace collapse, a 128-character
limit, and no automatic provider fallback. The API route is opt-in and separately
billed. Fetch API success is not an origin HTTP-status receipt. The Intel rc.1
feed lacks this merge.

## 8. Dynamic API-key model discovery in rc.3

VERIFIED. `c48f8523f22a35a452c38db51ca1c21f572b2593` is contained only by
rc.3 among fetched tags. The 2026-10-23 date describes publication; the commit
was made 2026-10-22. Read the commit, adapter contract and exports, and rc.3
release. Also read the more specific [API-key provider contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/llm/llm-deepseek-api-key/README.md#L40-L51).
It confirms official-origin/built-in-catalog conditions, background refresh,
retained fallback, refusal of listed unsupported models before inference I/O,
and pass-through of unlisted IDs. Availability is not a task-quality result.

## 9. Credential display masking

VERIFIED. `a93958c7d0b41cb93ec5552676bd7eef6331cbfe` first occurs in
alpha.3, published 2026-10-14, and passes rc.2/rc.3 containment. Read the
masking contract, scanner, and Web composition. The
[contract explicitly preserves original characters](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-secret-mask/README.md#L12-L45)
in message text, copy actions and model input. Unrecognized assignments and
other non-UserText surfaces remain visible. The default Web mount and
value-specific reveal state support the section. Masking is not redaction.

## 10. Navigation and Desktop analytics

VERIFIED. Environment `4dee41f4bc71537d9e6c73c9f98cb4fa10253338` first
occurs in alpha.4; navigation `5ff29190ed8e2bba8211035375ba7c733b332879`,
analytics `675164957aac5cc32ec653a268adc7c8c7076cf7`, and draft repair
`39d2903841fa1e2e510a1011b4d0a65713270062` are rc.3-only among tags.
The 2026-10-23 date correctly describes rc.3 publication. Read both UI changes,
analytics README and event definitions. The
[live configuration contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/product-analytics/README.md#L24-L58)
confirms default-on collection, separate controls, excluded content and custom
identifiers, no user-facing switch, and possible queued exports after disabling.
The Web patch mounts both analytics rows only for Desktop.

## 11. MCP redirect advisory

CORRECTED. The affected dependency and transport are verified, but the advisory
timeline conflates two records. The cited
[upstream advisory](https://github.com/modelcontextprotocol/typescript-sdk/security/advisories/GHSA-6prh-2h8m-c8cw)
has `published_at=2026-10-02T20:42:34Z` and
`updated_at=2026-10-19T20:07:25Z`. The
[global Advisory Database record](https://github.com/advisories/GHSA-6prh-2h8m-c8cw)
was added 2026-10-20T18:26:30Z. Independently read both API records at
2026-10-24T10:12:14Z through 10:12:15Z. The harvest's assertion that the cited
upstream advisory was first published after rc.2 is false.

Exact fix: label 2026-10-20 as Advisory Database publication, report the upstream
publication and in-window update separately, remove "after rc.2", and replace
"a new ... advisory" with "the redirect advisory". These timestamps do not
reconstruct the upstream advisory's exact text on its initial publication date.

Read every original receipt, including both published component manifests and
the observed-master pin. [Rc.3 pins client 2.2.0](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/mcp/mcp-client/package.json#L42),
as does rc.2; [transport construction supplies custom headers without a rejecting fetch](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/mcp/mcp-client/src/transport.ts#L40-L44).
The current advisory covers 2.0.0 through 2.2.0, fixed in 2.3.0. A redirected
HTTP request can disclose custom credential headers and session IDs; 307/308
can also forward its body. Stdio is excluded. DSH OAuth use and an actual leak
were not established. Channel remains `preview-or-beta`, not fixed in rc.3.

## 12. Undici advisories

CORRECTED. All three cited upstream advisories were published on 2026-10-15,
before rc.1, rc.2 and rc.3. The harvest instead supplies the global database
publication times from 2026-10-23 and calls them upstream disclosure times.

| Advisory | Upstream published UTC | Global database published UTC |
| --- | --- | --- |
| [GHSA-f72v-6w45-q472, CVE-2026-109841](https://github.com/nodejs/undici/security/advisories/GHSA-f72v-6w45-q472) | 2026-10-15T15:59:40Z | 2026-10-23T22:12:57Z |
| [GHSA-4qv8-2p9j-2685, CVE-2026-109924](https://github.com/nodejs/undici/security/advisories/GHSA-4qv8-2p9j-2685) | 2026-10-15T16:01:04Z | 2026-10-23T22:13:29Z |
| [GHSA-xjj6-f33q-929c, CVE-2026-109869](https://github.com/nodejs/undici/security/advisories/GHSA-xjj6-f33q-929c) | 2026-10-15T16:01:26Z | 2026-10-23T22:14:31Z |

Exact fix: use 2026-10-15 for upstream advisory publication and replace "after
rc.3 publication" with an explicit distinction between upstream publication and
the later database entries. The corresponding global records are
[SRI](https://github.com/advisories/GHSA-f72v-6w45-q472),
[EventSource](https://github.com/advisories/GHSA-4qv8-2p9j-2685), and
[fetch crash](https://github.com/advisories/GHSA-xjj6-f33q-929c).

The substance is verified: rc.2, rc.3 and observed master pin 8.11.2; the current
affected 8.x ranges end before 8.12.2. The
[tagged fetch implementation](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-fetch-http/src/network.ts#L192-L238)
calls Undici on direct and proxy routes, and the
[published component](https://registry.npmjs.org/@deepseek-ai%2Fdsh-web-fetch-http/0.2.1-rc.3)
retains the exact pin. A hostile response can crash the process despite a
caught fetch rejection. EventSource can exhaust memory; mixed-case SRI tokens
can permit a response whose body does not match the intended digest. The last
two application preconditions remain unproved. Channel remains
`preview-or-beta`; no exploit payload was run.

## 13. Desktop cookie accumulation hypothesis

VERIFIED as the bounded source-supported hypothesis actually stated.
`ecd9bf9273520316f478de566dc8ebd2e335641b` first occurs in alpha.1 and passes
rc.2/rc.3 containment. Read every source receipt, RFC 6265 section 8.5, and all
three linked reports. Discussion creation times were independently confirmed:
10830 at 2026-10-24T01:38:10Z, 10831 at 01:42:10Z, and 10868 at 09:10:50Z.

[Desktop requests port 0](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/apps/desktop-host/src/index.ts#L30),
[cookie names hash authority](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts#L116-L138),
the default lifetime is 30 days, and Desktop uses Electron's default session.
The inspected startup path has no stale-cookie removal and drops response
status from its authentication error. [Cookies are not port-isolated](https://www.rfc-editor.org/rfc/rfc6265#section-8.5).
These support accumulation risk. The reports' exact cookie counts, thresholds,
successful repairs and universal failure predictions remain unverified; the
harvest correctly keeps them as reports.

## 14. Additional writable roots on main

VERIFIED. `6b71dcad85b11ac6683002b761718e4f1483073c` and
`64ece4cac12839d98a9ccb84af879e8e122d2a54` are on observed master, absent
from every fetched tag. First-parent merge
`29a0861375d6c9e797a812e804a91e19f153fa5d` is dated
2026-10-18T03:59:31Z. Read both commits and both main contracts.
The [policy contract](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/sandbox/sandbox-policy/README.md#L45-L51)
and backend support explicit physical directories, composition-wide scope,
redirected-root rejection and Windows subprocess refusal. These are deployment
configuration rather than session grants. Startup must receive that
configuration again; it can come from saved YAML, so this does not require
manual re-entry on every restart. No current rc contains the feature.

## 15. Shutdown Auto preservation and SDK approval handling on main

VERIFIED. `4923f3cb4c0713ba825827c9f054575f2bf16b93` enters first-parent
history on 2026-10-18 through the merge above. SDK merge
`4fbe6e3f42960dc44456acf10dfea5dd4b16c369` is dated
2026-10-21T11:45:10Z. Both are on observed master with no containing tag.
Read both commit receipts and both main contracts. The
[Auto contract](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/experimental/auto-review/README.md)
distinguishes shutdown preservation from live-unload migration. The
[SDK contract](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/sdk/client/README.md#L30)
requires explicit opt-in and a request handler; unavailable or failing handlers
fail closed. Ordinary headless stdin is not an approval channel. The warning
about live unload remains valid, including on main.

## Prior claims independently spot-checked

There is no newest stable. Used newest published rc.3 and npm-default rc.2
explicitly. Their relevant implementations are identical; the six-commit
comparison changes package version metadata in these security paths, not their
implementations.

| Prior claim | Independent result at rc.3 and rc.2 |
| --- | --- |
| `same-user-cookie-authority` | VERIFIED as a conditional static path. HMAC material is in the owner's credential store; the Linux read policy includes `/`; browser RPC uses an owner principal. Mode 0600 does not separate two processes of the same user. No forgery or backend exploit was performed. |
| `default-session-log-upload` | VERIFIED. `enabled` defaults true and the default cap is 8 MiB. Re-enabling includes the unaccepted suffix, including events recorded while disabled. |
| Separate inventory and feedback controls | VERIFIED. Inventory remains default-on; `DSH_TELEMETRY_DISABLED` changes only `session-telemetry-otel`. |
| `auto-review-unload-full-access` | VERIFIED. Tagged unload moves live Auto sessions to Full access with policy `never`; the main shutdown fix does not occur in either rc. |
| `scheduled-user-framing` | VERIFIED. Current framing says a scheduled message is from the user. The old default-off rc posture is superseded because ordinary Web presets now mount its tools. |
| `plugins-are-unsandboxed-in-process`, `gate-is-a-plugin` | VERIFIED. Host plugins run outside the workspace sandbox; the approval service remains part of replaceable composition. Compatibility admission is not confinement. |
| `plugin-public-registry-fallback` | VERIFIED. Schema default remains the public npmmirror registry. |
| `bundle-patch-path-containment` | VERIFIED as a static gap. `bundlePatchFiles` validates strings; `bundlePatchPaths` joins them without containment. An existing valid patch outside the package can be selected. This is not proof of unauthenticated remote execution. |
| `windows-delete-and-standing-labels` | VERIFIED at the documented scope. Standing workspace ACL/Low-label changes persist; reads and networking are not confined by this backend. |
| `sandbox-safety-warning` | VERIFIED. SAFETY.md still calls the software experimental, unaudited and unsuitable as a sole isolation boundary. |
| Wrapper approval defaults | VERIFIED. Claude wrapper default is `dontAsk`; Codex wrapper default is `never`. This does not prove every delegated child command succeeds. |
| Ralph and job wake defaults | VERIFIED. Ralph remains optional, with worker-reported completion and no independent evaluator; `maxConsecutiveWakes` remains unset by default. |
| Older Linux and spawn CVE exposure | UNVERIFIABLE for current rc, as the harvest already states. Advisory publication is confirmed; no vendor affected/fixed mapping or reproducer settles the current backend. Do not turn "holds as publication" into "currently exploitable". |

Evidence read for these checks includes the pinned
[signing implementation](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts#L142-L198),
[Linux read policy](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sandbox/sandbox-local/src/profiles.ts#L27-L35),
[session-log implementation](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/session/session-log-deepseek/src/index.ts#L51-L53),
[telemetry patch](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/app-boot/src/profile-context.ts#L39-L54),
[plugin manager](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-manager/README.md),
[bundle path resolver](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/app-boot/src/profile.ts#L58-L74),
[Windows contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sandbox/sandbox-windows-acl/README.md),
[SAFETY.md](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/SAFETY.md),
and the original pinned wrapper, Ralph and Jobs receipts. All were opened anew.

## Misses

These are omissions from this harvest, not changes made to it. Dates name the
in-window merge or publication. None is a stable release.

### M1. Main removes local Web Fetch's public-destination boundary

2026-10-20, `main-unreleased`. Commit
[`2f01ad549c9dc7ecf480439f8e6801cc45ca14a0`](https://github.com/deepseek-ai/deepseek-harness/commit/2f01ad549c9dc7ecf480439f8e6801cc45ca14a0)
removes public-address resolution, destination validation and connection
pinning, deletes the network implementation, and removes the custom resolver
interface. It reaches default-branch history through
[`c3e9b2884560f2461418126327e7acc8b0ecb5f0`](https://github.com/deepseek-ai/deepseek-harness/commit/c3e9b2884560f2461418126327e7acc8b0ecb5f0)
at 2026-10-20T06:13:24Z. Both have no containing tag and return ancestry exits
`1,1,0` against rc.2, rc.3 and observed master.

The [current main contract](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/web/web-fetch-http/README.md#L12)
explicitly permits loopback and private-network hosts. Same-origin redirect and
size limits remain. This restores compatibility with fake-IP proxy setups and
permits internal retrieval, while removing the tool-level destination boundary.
Operators evaluating source builds need network egress controls and must migrate
custom resolvers. Rc.2 and rc.3 retain their tagged public-destination checks;
do not describe this as their current behavior or as an exploit reproduced here.

### M2. Recreating a custom profile deletes its previous directory

2026-10-14, `preview-or-beta`, first alpha.3, then all rc tags. Commit
[`8843c37e378706185cfb9ea308572a4d461cf6e4`](https://github.com/deepseek-ai/deepseek-harness/commit/8843c37e378706185cfb9ea308572a4d461cf6e4)
changes `--from-default-profile` from refusing an existing target to replacing
it. Independent ancestry exits are `1,0,0,0` against alpha.2, alpha.3, rc.2 and
rc.3. The [tagged migration](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.2/from-default-profile-replaces-target/guide.md)
says the old dependencies, `node_modules` and `cordis.patch.yml` are deleted,
including for help or config-dump invocations. Remove the option from recurring
launch commands unless a reset is intended, and preserve the custom patch first.
The guide directory's alpha.2 name is not proof that alpha.2 contained it.

### M3. Main replaces tools configuration with explicit executor plugins

2026-10-21, `main-unreleased`. Merge
[`1c6c5584325b3325cd2d87a7da5877d6794a8203`](https://github.com/deepseek-ai/deepseek-harness/commit/1c6c5584325b3325cd2d87a7da5877d6794a8203)
is on observed master, has no containing tag, and returns `1,1,0` against
rc.2, rc.3 and master. The [pinned migration](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/upgrade-guide/v0.2.1-rc.2/tool-executor-plugins/guide.md)
removes `tools.mode`, moves `maxParallelSubCalls` to the PTC executor, and stops
reading `DSH_TOOLS_MODE`. Custom compositions must mount a native or PTC
executor; invalid configuration or missing required providers can stop startup.
Update custom composition and extension APIs when testing main. The guide's
rc.2 directory name must not be mistaken for a released rc.2/rc.3 change.

### M4. Main enables plugin management in Standard mode

2026-10-21, `main-unreleased`. Merge
[`edde4a066776798c68e0c2750adf19b149a8c49f`](https://github.com/deepseek-ai/deepseek-harness/commit/edde4a066776798c68e0c2750adf19b149a8c49f)
has no containing tag and returns `1,1,0` against rc.2, rc.3 and master.
The [Standard preset](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/bundle/web-app/presets/standard.patch.yml)
enables `tool-plugin-manager` when a profile context exists; the
[manager contract](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/boot/plugin-manager/README.md#L31)
now names Standard and Creator. Every action still requires Full access or
per-call approval; lower modes with policy `never` fail closed. This widens the
default model-visible capability on main, not mutation authority without
approval. Rc.2/rc.3 retain the narrower Creator default stated in section 2.

### M5. Main raises assumed capacities for undescribed custom models

2026-10-19, `main-unreleased`. Commit
[`f2e0d7db1b3e85cb4b094ca35e8eef4127a7c484`](https://github.com/deepseek-ai/deepseek-harness/commit/f2e0d7db1b3e85cb4b094ca35e8eef4127a7c484)
reaches default-branch history through
[`9ab971fde551167d21f25683ae5e225aca01ec4e`](https://github.com/deepseek-ai/deepseek-harness/commit/9ab971fde551167d21f25683ae5e225aca01ec4e)
at 2026-10-19T09:44:46Z. The change has no containing tag and returns `1,1,0`
against rc.2, rc.3 and master. The [pinned guide](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/upgrade-guide/v0.2.1-rc.2/pi-ai-default-capacities/guide.md)
raises assumed context from 262,144 to 1,000,000 and output capacity from 32,768
to 128,000 when configuration and catalog omit them. This can delay compaction;
it does not prove endpoint capacity or set a request-level output default by
itself. Explicitly size custom endpoints before trying main.

### M6. Minimal gains image reading and automatic/manual compaction

2026-10-14, `preview-or-beta`, first alpha.3, then rc.1 through rc.3. Commits
[`f15091a9228780f5024d64e0f8ac1ab25de50ad5`](https://github.com/deepseek-ai/deepseek-harness/commit/f15091a9228780f5024d64e0f8ac1ab25de50ad5),
[`5b784ecbc31777a75576c9e0653344ff933af8e9`](https://github.com/deepseek-ai/deepseek-harness/commit/5b784ecbc31777a75576c9e0653344ff933af8e9),
and SDK-minimal
[`444692d1ca9731920c73514ef6daa9740db8c127`](https://github.com/deepseek-ai/deepseek-harness/commit/444692d1ca9731920c73514ef6daa9740db8c127)
were authored before the cutoff but first published in alpha.3. Each is absent
from alpha.2 and passes rc.2/rc.3 containment. The
[SDK-minimal composition](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/sdk-minimal/cordis.patch.yml)
adds `read_image`, attachments, token metering and automatic compaction. The
[preset contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-agent-preset/README.md)
also documents idle-session `/compact`. Minimal no longer requires custom glue
for these capabilities; this does not add Schedule or general shell tools.

### M7. Current Python distribution requires explicit optional resource downloads

2026-10-17, `preview-or-beta`, official PyPI 0.2.1rc2 and rc-line promotion.
This was already in alpha.2, not invented this window:
`89f35fe2e93f59653dd20090e71afa37dd653d35` passes alpha.2 and all current rc
containment. The in-window event is the newer official Python publication and
promotion to the default rc generation. The [tagged migration](https://github.com/deepseek-ai/deepseek-harness/blob/687f282e8625c6b8d11ff58211a90524be2e4317/docs/upgrade-guide/v0.2.1-alpha.1/python-optional-resources/guide.md)
states that wheels omit Office sidecars and authoring interpreters/libraries;
SDK startup does not download them. The [versioned runtime metadata](https://pypi.org/pypi/deepseek-harness-runtime-bin/0.2.1rc2/json)
establishes publication, not a wheel-content inspection. Operators need explicit
`download_office()` / `download_primary_runtime()` calls and prepared
platform-specific caches for offline deployment. The bundled DSH CLI still
does not require system Node.

### M8. Coding Tools off can reset a saved mode from any authenticated browser

2026-10-14, `preview-or-beta`, first alpha.3 and all later rc tags. Commit
[`23c29d067a865107d5157c6924dbbe09c571d4c4`](https://github.com/deepseek-ai/deepseek-harness/commit/23c29d067a865107d5157c6924dbbe09c571d4c4)
first reaches a tag in alpha.3 despite its earlier author date. Independent
alpha.2/alpha.3/rc.2/rc.3 exits are `1,0,0,0`. The
[current preset contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-agent-preset/README.md#L30-L32)
says turning Coding Tools off resets a saved built-in PTC or Minimal default to
Standard in every authenticated browser. Existing sessions retain their mode;
turning the setting back on does not restore the prior default. Remote browser
operators must recheck the new-session default rather than treating this as a
local visibility preference only.

### M9. The rc upgrade also promotes Python PTC filesystem confinement

2026-10-17, `preview-or-beta`, rc-line promotion of existing alpha.2 behavior.
`11a0f85b34068b25a16ab45a6f8f38dc86f93d7c` passes alpha.2, rc.1, rc.2 and
rc.3 containment. The [current migration contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.1/python-ptc-sandbox/guide.md)
says Python PTC now requires `sandbox` and `sandboxPolicy`, applies the shared
filesystem policy to direct Python operations, and fails a restricted run when
confinement is unavailable. This belongs beside section 1's other rc migrations.
Custom Python compositions must supply those services and verify enforcement;
default shipped profiles continue using Node. This is a source-backed contract,
not a backend sandbox test or a repair designation for an older CVE.

## Rule checks and security search

Marketing separation: PASS. None of the numbered findings relies on stars,
launch rhetoric, a comparative benchmark or a social quotation. The unmounted
CUA experiment and optional features are not promoted into default capabilities.
Social links stay discovery-only. No social text was quoted in this verification.

Pinning and channels: PASS. Every numbered product implementation receipt is a
SHA or commit; versioned registry receipts name versions. Advisory IDs and
Discussion IDs are canonical records, not immutable historical snapshots.
No main-only feature is claimed released. Misses M1, M3, M4 and M5 show why
neither merge dates nor version-looking guide directories establish release.

Security consequence wording: sections 11 and 12 explain what the bugs allow.
Before reusing the older advisory inventory, add plain consequences rather than
only identifiers: [CVE-2026-101078](https://github.com/advisories/GHSA-23q9-h232-4q79)
alleges a local isolation bypass, while its current-backend mapping remains
unresolved; [CVE-2026-108788](https://github.com/advisories/GHSA-5mvr-2xwh-9v9q)
alleges a local sandbox problem through the spawn Profile argument, but the
available record does not establish a more precise current effect. Keep that
limitation explicit. [Zod CVE-2023-54404](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5)
describes oversized failing-array validation exhausting memory and crashing the
process; [fflate CVE-2026-45820](https://github.com/advisories/GHSA-px8p-9vwx-vf98)
describes a malformed ZIP64 archive causing an infinite `unzipSync` loop.
Neither dependency's DSH exploitability was independently established here.
The harvest already explains the bundle traversal effect narrowly enough.

Independently read the repository advisory API and
[public advisory surface](https://github.com/deepseek-ai/deepseek-harness/security/advisories):
no published repository advisory. Package-filtered global queries found no new
DSH mapping; their negative result is not exhaustive because the older DSH CVEs
have no package mapping. A direct NVD API keyword search for `deepseek-harness`,
publication range 2026-10-14 through 2026-10-24T10:20:59Z, returned zero records
at 2026-10-24T10:21:00Z. It does not cover older-record updates or dependencies.
Global in-window MCP-client and Undici queries reproduced the four records in
sections 11 and 12. Older Linux, bundle and spawn advisory records were read
again, along with the Zod range update and fflate record. No additional
in-window harness-issued CVE/GHSA was confirmed. The root project license
remains MIT; no install-channel conversion to stable was found.

## Verification limits and file custody

No installation, dependency resolution, model call, native build, malicious
payload, Desktop launch, signature check or benchmark was performed. This
crosscheck verifies source contracts, exact dependency overlaps, publication
metadata and ancestry; it does not certify runtime exploitability or fixes.
All current-exposure conclusions left open by the harvest remain open unless
explicitly settled above. Main-history review was targeted to defaults,
permissions, plugins, Web retrieval, breaking changes and install behavior; it
was not an exhaustive audit of every one of the 1533 post-rc.3 commits.

Only this repository file was written. Scratch clone objects were populated
under the authorized verification clone. The harvest and profile were not
edited. No repository-writing git command, npm install, site build or site
integrity script was run.
