# Paperclip adversarial crosscheck

Window: 2026-09-21..2026-10-13, excluding material already recorded by the parent run. Profile date: 2026-10-13. Independently checked on 2026-10-14. Date cutoffs below use UTC.

Result: CORRECTED. Of the 13 numbered sections, 3 are VERIFIED and 10 are CORRECTED. No whole section is wholly REFUTED or UNVERIFIABLE; specific unsupported assertions are explicitly REFUTED below. These counts exclude the release ledger, prior-claim spot checks, and misses.

The stable installation choice is correct: paperclipai 2026.1012.0. The complete "Install today" snapshot is not correct for the close of October 13. It stops early that morning, misclassifies subsequently published nightly code as main-only, and misses later documentation and canary changes. The prompt-reduction finding also promotes an unfinished evaluation into a measured result.

## Evidence and method

Read the researcher brief, THESIS.md, METHOD.md, EDITORIAL.md, CONTRIBUTING.md, sources/paperclip.yml and its notes, the current profile, the parent harvest, and the submitted harvest. Independently listed GitHub releases, read npm publication times, dist-tags and engines, checked GHCR manifests, and read repository advisories, GitHub's advisory database, and NVD records. The repository identity is paperclipai/paperclip, not another project named Paperclip.

Source was read from a separate blobless, no-checkout clone at `/Users/c3po/co/frontier/tmp/refresh-2026-10-13/clones/paperclip-verify/`. I used `git show`, `git log`, `git diff`, `git rev-list`, and `git merge-base --is-ancestor`. Exit 0 means contained; exit 1 means not contained. I did not execute upstream code, install packages, build the site, or run upstream tests. Statements about runtime behavior below are source verification, not a new deployed-system acceptance test.

I opened the numbered sections' release, PR, code and documentation receipts. Tag/SHA blob receipts are pinned. PR pages and the homepage are mutable, so they cannot alone satisfy the requested pinning rule. Where a PR explains behavior, the corresponding merge commit or tagged implementation below supplies the pinned receipt. A release object's publication timestamp is distinct from a date written in its body.

## Channel truth and release ledger

The stable ledger's four rows, publication dates, prerelease flags and ancestry counts check out:

| Release | Commit | GitHub published, UTC | Prerelease | Ahead / behind previous stable | npm published, UTC |
| --- | --- | --- | --- | --- | --- |
| [v2026.916.1](https://github.com/paperclipai/paperclip/releases/tag/v2026.916.1) | d554c4789ed3930f8a53ac9fdf6503b3187097da | 2026-09-21T21:22:44Z | false | 1 / 0 against v2026.916.0 | 2026-09-21T21:15:04.910Z |
| [v2026.1001.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0) | 8f8a0ab7effbd6a0584107d8038736c134ee5047 | 2026-10-02T01:54:00Z | false | 77 / 1 | 2026-10-02T01:48:17.575Z |
| [v2026.1005.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0) | 467125fafb47a8520856504fecc48d6e32055db1 | 2026-10-06T16:40:49Z | false | 179 / 0 | 2026-10-06T16:34:47.778Z |
| [v2026.1012.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0) | bba6a45f0d364cfd962ac59b3bdf2426a8222adb | 2026-10-12T21:06:53Z | false | 132 / 0 | 2026-10-12T20:59:34.312Z |

Registry receipts: [publication history](https://registry.npmjs.org/paperclipai), [stable version metadata](https://registry.npmjs.org/paperclipai/2026.1012.0). The tagged [installation instructions](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/README.md#L350-L356) and package metadata agree on Node >=24.11.0 and the paperclipai package. No newer stable had been published by the window close, or by my verification.

On October 14, npm reports latest=2026.1012.0, beta=2026.1012.1-beta.0, nightly=2026.1014.0-nightly.0, and canary=2026.1014.0-canary.5. These are verification-time observations, not reconstructed October 13 dist-tag history. npm does not expose historical dist-tag movements. The researcher's earlier same-day observation may be genuine; it is not an end-of-day channel inventory.

Required corrections to the October 13 inventory:

- [2026.1013.0-nightly.0](https://registry.npmjs.org/paperclipai/2026.1013.0-nightly.0) was published at 2026-10-13T09:36:48.313Z. Its Git tag resolves to `4a641d0980fdaffc4c4e805f6f0a8809eb5702f2`, the exact SHA the harvest calls main-only. By window close, that code, including the draft future release notes, was `preview-or-beta` through the nightly channel.
- [2026.1013.0-canary.16](https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16) was published at 2026-10-13T21:56:46.461Z, at `be3e614d61bda152812cb51d7b0c173569d3113d`. The harvest stops at canary.5. Do not assert a historical dist-tag pointer solely from publication order; name the published versions and observation cutoff.
- Using the harvest's version-day counting convention, September 22 through October 13 contains 3 beta tags, 21 nightly tags and 264 canary tags. October 13 contributes 17 canary tags, not 6. Git tag counts are not interchangeable with counts of registry publications by timestamp.
- The last default-branch commit by 2026-10-13T23:59:59Z is `e0f30a4c7186498b71b2637f253b3399997dac7d`, 296 ahead and 2 behind stable. The harvest's 249 / 2 is correct only for its earlier pinned SHA. See the [end-of-window comparison](https://github.com/paperclipai/paperclip/compare/v2026.1012.0...e0f30a4c7186498b71b2637f253b3399997dac7d).
- Beta remains `2026.1012.1-beta.0`, published 2026-10-12T22:27:06.888Z, at `1b4c803816e82b0265c8422e1a804327a7ed8c54`, 200 ahead and 2 behind stable. It shares the October 12 nightly's commit. Its tag has no GitHub release object; that does not make it unreleased.

Anonymous GHCR manifest reads independently returned the same digest for `latest` and `2026.1012.0`: `sha256:1661b3dd3fdf7a9b59542d1ced464c3faf9dc8309798b4d15a9923ed32795307`. This confirms the current equality and the recorded digest, not the historical time at which the moving tag changed. The immutable image reference is `ghcr.io/paperclipai/paperclip@sha256:1661b3dd3fdf7a9b59542d1ced464c3faf9dc8309798b4d15a9923ed32795307`.

## 1. Full-auto defaults: CORRECTED

Date/channel verified: stable v2026.1001.0, published 2026-10-02. Commits `7bc03e0acd12142f31132365e13cc2eb6a6e9c73` and `45c99a0d06cbd5b04982b06b79de321149930ac5` are absent from v2026.916.1 and contained in all three newer stables.

The native ACPX and OpenCode default flips, and the legacy Codex bypass default, are real. I compared the old and new [runner permission catalog](https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L48-L136), [Codex arguments](https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapters/codex-local/src/server/codex-args.ts#L53-L80), [Claude permissions](https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapters/claude-local/src/server/permissions.ts#L7-L23), and [OpenCode runtime configuration](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/opencode-local/src/server/runtime-config.ts#L105-L117).

Exact fix: replace "every launch path" with the named native and legacy coding paths. The catalog also contains provider-managed permission modes. Distinguish native `opencodePermissionMode: ask` from legacy `opencode_local`, whose full-auto opt-out is `dangerouslySkipPermissions: false`. A native setting is not automatically a legacy adapter setting.

REFUTED: Paperclip's grants, policies and approvals are "the only gate on what a tool call does." Native Codex retains its [filesystem and network restrictions](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/paperclip-runner/src/drivers/codex/codex-security-config.ts#L187-L220); provider/account authorization and OS isolation remain relevant. Conversely, a local harness shell command is not necessarily mediated by Paperclip's connection-tool grant matcher. Say which operation crosses which boundary. An explicit Codex bypass=true also takes precedence over otherwise restrictive settings; the restrictive-argument exception applies to the defaulted bypass.

## 2. Scoped grants and gateway ownership: CORRECTED

Date/channel verified: stable v2026.1012.0, published 2026-10-12. Fixes `483dbc88904672362563419e485a1c4b366db96b` and `c46e41e81c03cd3c8b64cf993615b604d7fe8c62` are absent from v2026.1005.0 and contained in v2026.1012.0.

I read the [v2026.720.0 matcher](https://github.com/paperclipai/paperclip/blob/v2026.720.0/server/src/services/tool-access-policy.ts#L669-L675), [v2026.1005.0 matcher](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/tool-access-policy.ts#L673-L680), and [fixed matcher](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L731-L761). A nonmatching allow list could fall through to a selector check that ignored `allow`; a matching allow entry could also bypass additional restrictions. Malformed and unknown selectors are now rejected for that grant. Null and empty-object scopes remain broad.

Exact fix: "Certain scoped tools:use grants could authorize tools outside their intended restrictions from v2026.720.0 through v2026.1005.0." REFUTED: every scoped grant failed to narrow access. Recognized selectors could constrain the old matcher. Also, a grant that fails to match is not a global deny overriding every other grant, policy or profile. Audit the affected grant forms and actual calls; do not assert universal exposure or compromise.

The second bug allowed another agent's run token to authenticate against an ostensibly agent-owned native MCP assignment whose owner column was null. The [gateway authentication change](https://github.com/paperclipai/paperclip/commit/c46e41e81c03cd3c8b64cf993615b604d7fe8c62) now validates owner, profile and assignment provenance, including legacy rows. This is an ownership boundary failure, not evidence of unauthenticated internet access or cross-company compromise. The public advisory checks found no corresponding advisory for either fix as of verification.

## 3. Fourteen default grants: VERIFIED

Date/channel: stable v2026.1012.0, published 2026-10-12. `a1ab55a56d3d535931efb18fc6b5e6f13b5fcdbd` is absent from v2026.1005.0 and contained in v2026.1012.0. Native hiring commit `7944ed3d976d1a7cc26a2d0cee51f227f3542084` first reaches the three compared stables in v2026.1005.0.

Read the [14-grant list and two scopes](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28), [creation path](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agents.ts#L948-L961), [approval activation path](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agents.ts#L1173-L1183), [grant-before-profile decision](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L1466-L1480), and [company hire-approval default](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/companies.ts#L18-L20). The new standard-agent scope, exclusions, lack of existing-agent backfill, and policy/profile consequence are supported. Connection access and earlier policy decisions remain prerequisites.

The ancillary `update_skill` capability is also contained in stable via `eb049aebf2a7867f1865e93bca33119f92d019fa`; the [tagged contract](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/runner-created-skills.md#L3-L26) retains company policy, version conflict checks and idempotent audit. Do not describe this as unrestricted rewriting of every skill.

## 4. Conversational confirmation: CORRECTED

Date/channel verified: stable v2026.1005.0, published 2026-10-06. `3c561642b4c84a1a0c88667b859165ecfde8aae5` is absent from v2026.1001.0 and contained in v2026.1005.0 and v2026.1012.0.

The [comment-resolution implementation](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/confirmation-comment-resolution.ts#L12-L96) supports the active-run, latest-user-message, conversation identity and governed-action exclusions. It resolves as the agent, not as the person who wrote the message.

Exact fix: use `human_only` when a human resolver is required. `not_creator` prevents the creator from resolving; it does not prevent another eligible agent from doing so. The distinction is explicit in the [resolver checks](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/issue-thread-interaction-resolution.ts#L158-L177). The harvest's recommendation treats the two settings as interchangeable human-click controls; that implication is REFUTED. Dedicated approval mechanisms still govern spend, tool authorization and similar actions.

## 5. Aggregators and native API tools: VERIFIED

Date/channel: stable v2026.1005.0, published 2026-10-06. `8781f06a8710fc293d7e1fc4345a4530eb711436` and `f2ed0b65c4a033c6d2eff48dd3029de655ec4425` are absent from v2026.1001.0 and contained in v2026.1005.0 and v2026.1012.0.

Read the [forced aggregator setting](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/instance-settings.ts#L232-L236), [API-tool rollout switch](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/native-runtime/runner-api-rollout.ts#L1-L13), and [capture limits](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/runner-api-tools.md#L54-L80). An absent deployment switch enables the tools; an explicitly set value other than true disables them. A company allowlist and run binding can narrow availability. Catalog availability does not connect accounts or grant credentials.

The later account discovery and saved connection instructions are in v2026.1012.0 via `b43073d11fae2f62771144580a9c63a6734a4018` and `4857799a88914cd9597655da56af312808d0474d`, absent from v2026.1005.0. The [instruction contract](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/connections/CONNECTION-INSTRUCTIONS.md#L54-L75) requires current connection/tool authorization and checks revocation on each turn.

## 6. Upgrade steps and lock drain: CORRECTED

Stable dates in the harvest are correct: 2026-10-02, 2026-10-06 and 2026-10-12. Independent ancestry puts Composio retirement `b82661b561531800542cecfbbf51fc465bcb865c` in v2026.1001.0; UI snippet removal `5f1100e3b32bac1890cc093a25c95e13e7e2105e`, auth-preference removal `f38b5693f62b78a6f71545ba550c9486716c9119`, and mention changes `2de43fc9094c94f3f85a5f5429bcd77a7bb8e005` in v2026.1005.0; lock changes `dd9983b8945aa087e43d7d3694f694999d3e3a37` in v2026.1012.0. Each is absent from the preceding stable.

The release notes support the removal, harness pins, remote-version range and silence-threshold facts. The [lock upgrade and rollback procedure](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/workspace-restore-locks.md#L42-L52) confirms draining every old writer and retaining the new SQLite lock files. Integration-specific migration steps apply to installations using those integrations.

REFUTED: "a comment can no longer start agent work" and the unrestricted claim that only assignment and review requests dispatch work. Exact fix: "An @-mention no longer wakes the mentioned agent or authorizes taking the task. Ordinary issue comments can still wake the current assignee." The [same merge's specification change](https://github.com/paperclipai/paperclip/commit/2de43fc9094c94f3f85a5f5429bcd77a7bb8e005) says this explicitly in doc/SPEC.md and doc/SPEC-implementation.md. Other existing wake paths were not abolished.

## 7. Grok default correction: CORRECTED

The central correction is verified. `fbd20b28d31c7702180bacc1de95ddc7028b4246` is absent from v2026.824.1 and contained in v2026.831.0 and the newest stable. The [v2026.831.0 release](https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0) was published 2026-09-02T01:05:52Z. Read the [old defaults](https://github.com/paperclipai/paperclip/blob/v2026.824.1/packages/adapters/grok-local/src/server/execute.ts#L206-L209), [new defaults](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/grok-local/src/server/execute.ts#L266-L273), and [argument emission](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/grok-local/src/server/execute.ts#L555-L556). `alwaysApprove` defaults true before and after removal of the default `dontAsk` mode.

Exact fix: describe the maintainer-reported failure with the old default flag combination, not "every grok_local run" or "breaking every run." Explicit configuration can change the combination, and I did not run Grok CLI 1.0. The [pinned fix](https://github.com/paperclipai/paperclip/commit/fbd20b28d31c7702180bacc1de95ddc7028b4246) supports the reported first-tool failure and misleading success, not universal runtime coverage. Native Grok addition `f1a394bd30cb56fb9e479f98b9f50176fe921858` is absent from v2026.1001.0 and contained in v2026.1005.0.

## 8. Shorter prompts and claimed evaluation: CORRECTED

Channel dates and ancestry hold: `bacc0e6a98247fb1a9fef898ad4f814711592933` first reaches stable in v2026.1005.0 on 2026-10-06. `862a5758ba0e88a33232c1f1fa645e85c38a3113`, `b17019e14d04273ebff538a85385f2659f6d9ef1`, `16b7db35ffa0f9a95913c8cbdeea3d595435691f`, and `408f70e69f9c5e49cb4377f4886ac2001bfa67a2` are absent from v2026.1005.0 and contained in v2026.1012.0, published 2026-10-12.

Independent word counts reproduce the core skill's 7,626 to 8,584 growth and the two planning files' combined 1,937 to 415 reduction. The default hire manual is 598 words at baseline, 602 at v2026.1005.0, and 8 at v2026.1012.0. The CEO bundle is 1,893 at baseline and 1,897 immediately before the reduction. The [new bundle loader](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/default-agent-instructions.ts#L3-L6) selects only the 20-word AGENTS.md; the three old companion assets remain for compatibility. Thus the short-bundle claim is supported despite those files remaining in the tree.

REFUTED: the planning reduction was measured by a completed product E2E comparison, and the models were shown to carry the removed procedure themselves. The [tagged evaluation record](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/plans/2026-10-05-plan-task-guidance.md#L44-L85) records cancelled or failed setup before provider execution, zero agent runs, and no behavioral grade. The [hiring-template merge](https://github.com/paperclipai/paperclip/commit/862a5758ba0e88a33232c1f1fa645e85c38a3113) likewise leaves matched live hiring comparisons pending.

Exact replacement: "Paperclip shipped shorter default instructions and prepared comparisons; live outcome quality, non-regression, token savings and reduced human attention were not established by these receipts." Keep testing shorter instructions as an operator experiment. Do not present deletion of existing procedures or the Bitter Lesson interpretation as an empirical result. The core protocol remaining large also contradicts the unqualified phrase "almost no procedure."

## 9. Persistent agent files and history: CORRECTED

Date/channel verified: `3ca196b0a642aa21b8feba1fcd89edb53d1c622e` is absent from v2026.1001.0 and contained in v2026.1005.0, published 2026-10-06. Owner-chat file updates `4039d4f06b4dfb4d12bd59831a0aabf2401053dc` are absent from v2026.1005.0 and contained in v2026.1012.0.

Read the [current file-store writes and activity records](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-file-store.ts#L175-L284) and the [persistent-file change](https://github.com/paperclipai/paperclip/commit/3ca196b0a642aa21b8feba1fcd89edb53d1c622e). New writes update the managed files and record attribution rather than appending a content-revision history.

Exact fix: "New managed-file writes do not append prior-content revisions; old revision and candidate rows are retained for compatibility." The blanket statement that Paperclip no longer stores prior content implies historical deletion that the change does not perform. Keep the warning that an activity hash is not a recovery copy. The 256 MiB file / 2 GiB directory sync limits are not the smaller instruction-editor input limits.

## 10. Public assistant MCP: VERIFIED

Date/channel: stable v2026.1012.0, published 2026-10-12, flag-off. `e34abee670069cca84afb2efb86041bce7dccbec` and companion `22a3ea3414e9039a538fbb0374b3cfa7fc4371eb` are absent from v2026.1005.0 and contained in v2026.1012.0.

Read the [feature defaults](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/shared/src/feature-catalog.ts#L116-L122) and [tagged MCP contract](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/public-mcp.md). Scope, PKCE/device consent, attribution, revocation and webhook statements are supported. Preserve the prerequisites when publishing: an authenticated deployment with real users, a suitable public origin, and explicitly enabling Assistant connections. Implicit local-trusted board identity and agent keys cannot approve OAuth consent. Read-only consent does not permit delegation. Shipping this code does not prove a particular hosted tenant has it enabled.

## 11. Beta authority, budgets, identity and inspection: CORRECTED

Date/channel verified: beta 2026.1012.1-beta.0, published 2026-10-12, not newest stable. I independently obtained ancestor=true for all nine cited feature commits against `1b4c803816e82b0265c8422e1a804327a7ed8c54`, and false against v2026.1012.0: `799e4d556f5c1bc17b398147c7e0abff91446de0`, `eab93fd4a0774cea2f968b2c580656e642abdf33`, `582911ba74350dbe9029eb132d69a257edd9d26a`, `3a726e676fe47f4725d03037e823d7f057760708`, `b67db12d90c1bd191f99975e35cc5c84137858e4`, `2d0c138122b5977c4e8add39cc917de1fbaabae4`, `a590ab769d32be6e8912de1ac169eb7bdc398fb7`, `ed2c22ea8c743b50acd5ae130f4258eaec4569d9`, and `a9a20fb5c6c080884ced7ee0a4e3b04f9cbf3a6e`.

The Operator widening is supported by the [beta role implementation](https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/services/company-member-roles.ts). Do not confuse these human Operator grants with section 3's agent grants. The cost-accounting repair is beta-only; its existence warrants investigating stable accounting, not declaring every stable total wrong.

Required exact qualifications:

- Unpriced usage blocks under applicable active, positive-amount policies with hard stops enabled and `unpricedUsagePolicy: block`. It does not freeze every agent merely because some provider has an unknown price. See [budget admission](https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/services/budgets.ts#L224-L230). Choosing allow is a governance tradeoff, not a free corrective step.
- REFUTED as written: every agent immediately gets a private key passed to its process. New agents receive identities at creation; existing agents are provisioned lazily on a supported managed run. HTTP/gateway and hosted runner-API paths do not receive the private key. A host receiving the persistent key can retain it and sign outside Paperclip. See the [agent identity contract](https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/AGENT-IDENTITY.md).
- REFUTED: both customer-success flags must be set on a tenant before tenant reads work. `/run-authority` checks AUTHORITY_ENABLED on the inspecting agent's instance; `/read` checks INSPECTION_ENABLED on the inspected tenant, plus trust configuration and a consumed Cloud permit. The [route implementation](https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/routes/customer-success.ts#L79-L125) checks them independently. Disabling the authority endpoint on a tenant is not a second lock on its read endpoint.
- Private tasks/projects enforce their ACL by default, but shadow/off modes do not. Shared agent memory is trusted, and the separate permitted Cloud inspection path can read private material without the normal actor ACL or a tenant break-glass notice. Preserve these limits from [issue privacy](https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/ISSUE-PRIVACY.md) and [inspection](https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/CUSTOMER-SUCCESS-INSPECTION.md). No source receipt establishes whether any live tenant has opted in.
- The October 15 date in the [draft notes](https://github.com/paperclipai/paperclip/blob/4a641d0980fdaffc4c4e805f6f0a8809eb5702f2/releases/beta/v2026.1012.1-beta.0.md) is not an actual stable release date. The file was already shipped in the October 13 nightly, not main-only at window close.

## 12. Stable promotion cadence: CORRECTED

The three releases and approximately 10, 4.5 and 6 days of beta exposure are verified. The first two stable tags share commits with their named betas. The [channel policy](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/CHANNELS.md#L7-L18) requires at least three beta days; it does not promise a stable release date.

Exact fix: the [1006-beta to 1012-stable diff](https://github.com/paperclipai/paperclip/compare/22a3ea3414e9039a538fbb0374b3cfa7fc4371eb...bba6a45f0d364cfd962ac59b3bdf2426a8222adb) contains three files: releases/v2026.1012.0.md, scripts/run-vitest-stable.mjs, and scripts/__tests__/run-vitest-stable-shard.test.mjs. The harvest omits the test file. Application source is unchanged by those two promotion commits.

REFUTED as general guarantees: a fix typically reaches stable within six to thirteen days, and beta reliably predicts the next stable's code. Three observed promotions do not establish either rule. Say what these three releases did. Replace "byte-identical" with "same source commit" unless comparing downloaded package or image bytes; a shared Git SHA does not establish identical separately built artifacts. Update the main comparison to the window cutoff given above.

## 13. Public documentation and marketing: CORRECTED

REFUTED: no v2026.1012.0 documentation existed by October 13 close. The docs repository reached `d811a89622809a04001af07e84e427a86162a3bb` at 2026-10-13T16:44:53Z. Its [changelog](https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/reference/changelog.md) explicitly covers v2026.1012.0, new MCP pages, the grant and lock changes, new default instructions and other changes. The harvest's October 7 SHA is a valid earlier receipt, not the final in-window state. The changelog's displayed October 12 date should not be confused with the later commit publication.

The install defect survives: the updated [installation guide](https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/guides/getting-started/installation.md#L197-L217) requires Node >=24.11.0 while instructing installation of NodeSource 20.x. Its basic command still uses unqualified paperclipai and does not teach the four channels. Exact replacement headline: "Docs now cover v2026.1012.0, but the VPS Node command still violates the package's engine floor."

The [homepage](https://paperclip.ing/) is marketing and is not a pinned October 13 receipt. Its live content can support a dated observation made during verification, not retroactively prove the researcher's October 13 wording. REFUTED for historical publication purposes until a contemporaneous capture or versioned site receipt is supplied. Use the tagged hire and permission defaults as the product facts. The updated docs also disclose budget screenshots taken with an additional UI fix applied; they are not proof of the unpatched stable UI described in miss M11.

## Prior claims re-checked at v2026.1012.0

These are the material security/default spot checks, not blanket recertification of every older claim:

- VERIFIED, plaintext-credential response fix: `/agents/me` reaches buildAgentDetail for the ordinary agent case; restricted cases return reduced views. The [route](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/routes/agents.ts#L4284-L4318), [shared presenter](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/routes/agents.ts#L3196-L3208), and [redaction implementation](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/redaction.ts#L963-L990) support the current fix. This does not establish that historical exposures did not occur or that credentials were rotated.
- VERIFIED with its existing caveat, invalid bearer rejection: [auth middleware](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/middleware/auth.ts#L354-L377) rejects invalid authenticated tokens. A request without credentials in local_trusted mode still receives board authority by design at lines 229-239. "Bad tokens reject" is not a claim that local_trusted requires login.
- CORRECTED qualification, company JWT signing: new signing keys are derived per instance/company, but [legacy raw-secret verification fallback](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/agent-auth-jwt.ts#L65-L90) remains enabled unless PAPERCLIP_AGENT_JWT_DISABLE_LEGACY_FALLBACK=true. Do not turn the derivation claim into unconditional absence of a legacy verification path. This is a prior-claim qualification, not a newly discovered window change.
- VERIFIED, forwarded-host protection: [board mutation guard](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/middleware/board-mutation-guard.ts#L19-L40) uses forwarded host information only with the trusted-peer condition.
- VERIFIED, preflight budget admission: [queued-run checks](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/heartbeat.ts#L17425-L17451) cancel blocked runs before adapter execution. Source existence does not make stale or incomplete spend accurate. Budget commit 631b7806ed92c43bd6b5666ad8b1406635d1ab18, watchdog commit a71c4b678292a73ea9ddebbb96a861ce5c1687f7, and CEO authorization commit 93fdb9c2186318b958f3fa3bdc7bd26bd3339689 are all absent from v2026.618.0 and contained in v2026.626.0 and v2026.1012.0.
- VERIFIED, scoped watchdog and CEO controls: the [watchdog contract](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/TASK-WATCHDOG.md#L110-L140) retains ordinary resolver restrictions and prohibits governance impersonation; [CEO authorization](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/routes/companies.ts#L361-L373) requires the same company and CEO identity or board authority.
- VERIFIED, review-policy continuity and document locks: issue-review-policy.ts has no commits between v2026.916.1 and v2026.1012.0; 57edb26db4fcf7c46f1d75ae52c94d03d3618865 is contained in stable. [Document mutation/restore/delete checks](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/documents.ts) retain lock enforcement. Do not generalize this to every route that can affect task state.
- VERIFIED, resolver default and exposed experimental flags: [resolver schema](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/issue_thread_interactions.ts#L25-L32) remains anyone; [instance validators](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/shared/src/validators/instance.ts#L44-L62) keep public MCP, AI pools, memory connectors and combined inbox off by default. The native API-tool and aggregator exceptions are verified in section 5.
- Carry the Grok correction and ACPX default change from sections 1 and 7. Keep routine environment precedence unverified; the harvest correctly did not claim to have retraced it. Mere provider-directory, type-export or table presence is not proof of working live integrations.

## Material misses and underdeveloped findings

For each item, the named merge was independently checked against the preceding stable, v2026.1012.0, the October 12 beta, and the October 13 nightly/canary as applicable. Canary items below are ancestors of `be3e614d61bda152812cb51d7b0c173569d3113d`, and are absent from stable, the latest beta, and the October 13 nightly. None should be sold as a stable feature.

### M1. Google OAuth requests narrowed; existing tokens do not shrink

Merge 25c422ba7e30f9e4bfb34ddeff88ce4bd6b2773e, 2026-09-30. Channel: tagged-release, v2026.1005.0, published 2026-10-06; absent from v2026.1001.0. The [pinned scope contract](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/GOOGLE-WORKSPACE.md) removes extra Drive scopes from Docs/Sheets/Slides profiles and redundant Calendar write scope. Existing consent is not retroactively narrowed. Reconnection and a matching Cloud broker registry matter; mixed scope contracts fail closed. An upgrade alone is not evidence that old Google credentials have less authority.

### M2. Browser Use Cloud makes website work a managed paid operation

Merge d72389bee272ec705e5cf9fd864682048b1b214d, 2026-09-30. Channel: tagged-release, v2026.1005.0; absent from v2026.1001.0. The [tagged browser contract](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/BROWSER-USE.md) introduces seven reviewed tools, owned browser conversations, a human live viewer, cancellation/idle cleanup and cost attribution. Saved profiles can carry authenticated sessions. A lost paid-create response remains unknown and must not be automatically replayed. Operator action: authorize profiles and cost caps deliberately, and distinguish closing the viewer from stopping provider work. The vendor records a live basic journey; revocation, approvals and restart acceptance still rely on fixtures in that record.

### M3. GitHub skills gain complete packages, then automatic refresh in canary

Manual sources: merge d432dc7fa355c526a64a43c03120806c11d47b71, 2026-09-30, tagged-release v2026.1005.0. The [tagged skills guide](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/docs/guides/agent-developer/skills-store.md#L121-L205) describes commit-pinned package imports including supporting files and executable modes, manual refresh, and preservation of active/pinned versions. Import itself does not run scripts.

Automatic sources: merge 473c80d13f2b63fb142b58a6273c0679cb65bd7a, 2026-10-13, preview-or-beta through October 13 canary. The [pinned implementation and acceptance record](https://github.com/paperclipai/paperclip/blob/473c80d13f2b63fb142b58a6273c0679cb65bd7a/doc/plans/2026-10-12-project-repository-skills.md#L3-L30) adds project-attachment imports and roughly five-minute refresh. New executions use the latest installed version; resumed/pinned executions retain their snapshot. Existing manual sources gain automatic updates; legacy project attachment needs adoption. Operator consequence: repository changes can alter future agent instructions without a manual Refresh click. Review source ownership and automatic-update preferences. A commit pin per execution is not a policy of human approval for each update.

### M4. Low-trust agents can take a person's exact out-of-boundary task

Merge 0829d94af2a2381d39dfa5eac4b80dac8539dff0, 2026-10-01. Channel: tagged-release, v2026.1012.0; absent from v2026.1005.0. The [low-trust contract](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/LOW-TRUST-PRESETS.md#L44-L75) permits owner chat and an authenticated board user's direct assignment outside the normal intake boundary. It checks the live run and exact current task using server-owned provenance. It does not extend to children, an entire project, secrets or runtime management; sandbox and isolated-workspace requirements remain. The harvest leaves this as an unread lead, but it materially changes the trust boundary an operator must understand.

### M5. OAuth scope provenance stops treating requested scopes as provider proof

Merge ea8e686197498cd3f6f7e9a26c4621159c2c3a22, 2026-10-06. Channel: preview-or-beta, 2026.1012.1-beta.0; absent from v2026.1012.0. The [pinned tool-access change](https://github.com/paperclipai/paperclip/commit/ea8e686197498cd3f6f7e9a26c4621159c2c3a22) distinguishes scopes reported by the provider from requested-scope fallback and records unrequested scopes only from provider evidence. It does not change provider authorization, introspect every token, or backfill every historical grant. Operator consequence: an empty extra-scope list with fallback provenance means unknown, not proved least privilege.

### M6. Quota checks use the selected account and durably preserve rotated credentials

Merge 892b0b3606f066dd7344d6397daf25c8b52f598b, 2026-10-07 UTC. Channel: preview-or-beta, 2026.1012.1-beta.0; absent from stable. The [pinned change](https://github.com/paperclipai/paperclip/commit/892b0b3606f066dd7344d6397daf25c8b52f598b) replaces host-local credential fallback with the authorized company account, ties cached results to credential revision, and uses an encrypted durable recovery journal around single-use refresh-token rotation. The [beta AI connection contract](https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/connections/AI-CONNECTIONS.md) describes recovery state. Operator consequence: a quota check should report the account actually funding work, and backup/recovery needs the credential journal and its key. Mentioning the PR under surfaces checked does not convey this reliability and custody change.

### M7. Company decision-model setup defaults to sponsoring background calls

Merge a7a244ab33cea9e8c68d2c1fa54c4879361bfc07, 2026-10-07. Channel: preview-or-beta, 2026.1012.1-beta.0; absent from stable. The [decision-model contract](https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/decision-models.md#L3-L45) says new companies remain unconfigured, but saving a shared connection defaults company-sponsored background decisions on; an explicit off survives edits. The setup test is the only product caller in this release. Operator action: review that spending authorization during setup. Do not describe future background features or live provider success as already demonstrated.

### M8. Native call_api gains REST permission parity and more private receipts

Merge fc3b15537b00f7cd50329926e24ea0c20487fad5, 2026-10-13. Channel: preview-or-beta, October 13 canary only among the checked channels. The [pinned API contract](https://github.com/paperclipai/paperclip/blob/fc3b15537b00f7cd50329926e24ea0c20487fad5/doc/runner-api-tools.md#L164-L220) removes the extra native endpoint/payload denylist while retaining ordinary route permissions, run identity and work-mode restrictions. Authorized credential responses get encrypted replay storage; durable native events omit API bodies, and private response snapshots receive actor scoping. This changes both what native agents can operate and what an auditor can recover from logs. It is not board identity or a bypass of route authorization.

### M9. Restricted checkout conflict can trigger a fresh authorized remote clone

Merge c7f4b74111d16f0b57112fa6d0b6a59c2d63bfe8, 2026-10-13. Channel: preview-or-beta, October 13 canary. The [pinned repository contract](https://github.com/paperclipai/paperclip/blob/c7f4b74111d16f0b57112fa6d0b6a59c2d63bfe8/doc/project-repositories.md#L39-L58) lets a fresh implicit default workspace clone an authorized remote when a project checkout contains another task's restricted workspace. It retains source ACL checks and excludes low-trust review, explicit or ambiguous old bindings, pinned/local-only choices and unpublished local changes. This can unblock work without granting access to the restricted checkout, but the replacement clone is not a copy of unsaved work.

### M10. Task collections hide agent-created work by default

Merge be380ba15574bd9bcb877174477444f1a48a702d, 2026-10-13. Channel: preview-or-beta, October 13 canary. The [origin classifier](https://github.com/paperclipai/paperclip/blob/be380ba15574bd9bcb877174477444f1a48a702d/packages/shared/src/issue-creation-source.ts) includes agent-created, system-created and chat-channel tasks; the [preference reader](https://github.com/paperclipai/paperclip/blob/be380ba15574bd9bcb877174477444f1a48a702d/ui/src/hooks/useShowAgentCreatedTasks.ts#L5-L20) defaults false, including saved views without the new field. Hierarchy context and existing inbox participation remain. Operator consequence: disappearing rows need not mean missing work; explicitly show agent-created tasks when auditing the queue. This is a visibility default, not a new task-read ACL.

### M11. Stable soft-budget warnings falsely look like stopped work

Merge 2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9, 2026-10-13. Channel: preview-or-beta, October 13 canary; absent from v2026.1012.0. The [component diff](https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9) changes BudgetIncidentCard to distinguish soft warnings from hard stops. The stable component applies hard-stop/paused wording even to a soft incident. This is a UI defect, not proof that soft thresholds stop spending. The [October 13 docs update](https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/reference/changelog.md) uses screenshots with this patch applied. Operators should check actual incident type and execution state rather than infer a spending stop from the stable card.

### M12. Optional personal apps defer authorization until use

Merge 2de43fc9094c94f3f85a5f5429bcd77a7bb8e005, 2026-09-29. Channel: tagged-release, v2026.1005.0. The same merge's [remote MCP contract](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/GENERIC-REMOTE-MCP.md#L65-L80) says optional personal apps no longer cause run-start connection warnings for unrelated work. The responsible user authorizes when the agent calls the app; Paperclip must not substitute another person's personal grant. Missing consent yields an inline connection request while unrelated work can continue. This reduces unnecessary human interruptions without eliminating the invocation-time identity boundary.

## Security/advisory and rule audit

The public [repository advisory list](https://github.com/paperclipai/paperclip/security/advisories), its paginated API, and GitHub advisory queries for paperclipai and @paperclipai/server yielded no advisory first published in this window. The repository list contained 12 published entries; its newest publication was [GHSA-x8hx-rhr2-9rf7](https://github.com/paperclipai/paperclip/security/advisories/GHSA-x8hx-rhr2-9rf7), dated 2026-07-22. This is a bounded public-record result, not proof that no private report or undisclosed bug exists.

NVD's Paperclip search includes unrelated Ruby Paperclip results, which I excluded. Relevant older records include [CVE-2026-41208](https://nvd.nist.gov/vuln/detail/CVE-2026-41208), where agent access can reach host command execution through workspace provisioning; [CVE-2026-41679](https://nvd.nist.gov/vuln/detail/CVE-2026-41679), an unauthenticated import path to remote command execution; and [CVE-2026-77087](https://nvd.nist.gov/vuln/detail/CVE-2026-77087), where a malicious website can use DNS rebinding against a local server to reach command execution as the local user. These are not new window disclosures. CVE-2026-77087's NVD lastModified is in September, but its publication and substantive history predate the window; do not manufacture a new September vulnerability from that metadata alone.

The two October authority fixes are explained in plain capability terms in section 2, without inventing a CVE/GHSA association. No license-file change appeared in the baseline-to-window-end history. No social-post quotation was used as evidence here. The harvest's marketing-versus-code distinction is useful, but its homepage observation needs a historical receipt. The most serious evidence-contract breach is section 8's unsupported measured-outcome claim. The most consequential channel breach is treating an early October 13 snapshot as the entire dated window.

Only this crosscheck file was written in the repository. The harvest was not edited.
