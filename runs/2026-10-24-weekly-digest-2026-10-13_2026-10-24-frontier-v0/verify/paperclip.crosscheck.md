# Paperclip adversarial crosscheck

Window: after 2026-10-13T23:59:59Z through the verification reads on 2026-10-24 UTC. Profile date: 2026-10-24.

Result: the fifteen numbered sections are VERIFIED as bounded source claims. Counts: VERIFIED 15, CORRECTED 0, REFUTED 0, UNVERIFIABLE 0. These counts cover numbered sections only; channel corrections, receipt repairs and thirteen material misses are separate below. The harvest needs supplementation before profile publication.

The stable recommendation and both latest selectors are correct. The complete Install today snapshot needs refreshing: nightly now has a Git tag and a newer container digest. Thus install_today_correct is false for the complete snapshot, while the recommended stable package remains correct. These are later-read observations, not proof that the researcher's earlier timestamped reads were false.

## Evidence and boundaries

Read the house authorities, researcher brief, source contract/notes, dated profile, submitted harvest and prior crosscheck. Independently cloned https://github.com/paperclipai/paperclip.git with blob filtering and no checkout into `/Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones/paperclip-verify/`. The identity agrees with the npm package repository metadata and tagged README.

All 51 links in the fifteen Receipt fields were opened through their corresponding local Git commit/blob objects, plus GitHub release metadata for the release link. None uses main or HEAD. Commit patches, tagged documentation and relevant consumers were read as data. The deepest code checks were human-grant seeding, accounting/admission and private-read predicates. Documentation and upstream qualification reports establish source contracts or attributed results; no deployed-system acceptance, exploit, provider call or paid journey was independently executed.

Ancestry was rerun with `git merge-base --is-ancestor COMMIT TAG`. Exit 0 means contained; 1 means absent. In the section evidence below, O = v2026.1012.0, S = v2026.1023.0, B = beta/v2026.1023.0-beta.0, C = canary/v2026.1024.0-canary.7. Full commit IDs and implementation dates are recorded below. Section dates 1-9 refer to the 2026-10-24 GitHub stable release event, not to code first being authored that day. Sections 10-14 refer to the beta publication on 2026-10-23, and section 15 to the canary snapshot on 2026-10-24.

No upstream executable, package install, site build, test suite or repository-writing git command was run. Only this crosscheck is authored in the publication repository; the independent upstream clone is in the authorized scratch directory.

## Channel truth and release ledger

GitHub release listing independently returned v2026.1023.0 as Latest, non-prerelease and non-draft. Final GitHub/npm/ref recheck ran from 2026-10-24T10:14:29.500596Z to 2026-10-24T10:14:47.713941Z. No newer stable or newer npm pointer appeared. [Release metadata](https://api.github.com/repos/paperclipai/paperclip/releases/latest), [versioned release](https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0), [registry publication history and dist-tags](https://registry.npmjs.org/paperclipai).

| Artifact | Source identity | GitHub publication UTC | npm publication UTC | Ahead / behind |
| --- | --- | --- | --- | --- |
| v2026.1012.0, baseline | bba6a45f0d364cfd962ac59b3bdf2426a8222adb | 2026-10-12T21:06:53Z, prerelease false | 2026-10-12T20:59:34.312Z | 132 / 0 against v2026.1005.0 |
| v2026.1023.0 | 1b4c803816e82b0265c8422e1a804327a7ed8c54 | 2026-10-24T00:03:59Z, prerelease false | 2026-10-23T23:54:25.678Z | 200 / 2 against old stable |
| beta/v2026.1023.0-beta.0 | d69631b01b9c658f80bf8bed389863dce82643e1 | No release object | 2026-10-23T22:16:58.814Z | 515 / 0 against S |
| nightly/v2026.1024.0-nightly.0 | 5e26b733b9668d24b005418704d43f66109a7dd8 | No release object | 2026-10-24T09:30:20.762Z | 572 / 0 against S |
| canary/v2026.1024.0-canary.7 | 5e26b733b9668d24b005418704d43f66109a7dd8 | No release object | 2026-10-24T08:06:02.289Z | 572 / 0 against S |

The original ledger is numerically correct except that nightly's source is now identifiable. Independently recomputed left/right counts match, including stable's two old-stable-only commits. Stable is exactly the former beta/v2026.1012.1-beta.0 commit; source identity does not establish package-byte equality. HEAD is still C, 572 commits ahead of S, with no remainder beyond the named canary. The cutoff-to-HEAD count is 476. Timestamp-based npm counts are one stable, one beta, eleven nightlies and 170 canaries, matching the harvest. [Pinned source comparison](https://github.com/paperclipai/paperclip/compare/bba6a45f0d364cfd962ac59b3bdf2426a8222adb...1b4c803816e82b0265c8422e1a804327a7ed8c54), [preview comparison](https://github.com/paperclipai/paperclip/compare/1b4c803816e82b0265c8422e1a804327a7ed8c54...5e26b733b9668d24b005418704d43f66109a7dd8).

Pointers remain latest=2026.1023.0, beta=2026.1023.0-beta.0, nightly=2026.1024.0-nightly.0 and canary=2026.1024.0-canary.7. All four package records require Node >=24.11.0. The pinned `npx paperclipai@2026.1023.0 onboard --yes` recommendation agrees with the [tagged README](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/README.md#L346-L364) and [published engines](https://registry.npmjs.org/paperclipai/2026.1023.0). The package metadata does not contain gitHead, including the new nightly.

Anonymous GHCR reads begun at 2026-10-24T10:06:43.456703Z independently confirmed stable latest/version digest `sha256:40f46940c4612ead131aebe6079cd4651f8cd1434af49f7c621887f4a452a62e`, revision S; beta digest `sha256:a1817472ffb0cd3ecd99a11aeb06d230bbfec41296e311ef91a165b501dbf0fb`, revision B; and canary digest `sha256:7ca2da88e2ec67aa799497bbf1c3bd8d25f4c1e93492331c74a8db0f532c2f97`, revision C. The version-specific nightly container name still returns 404. No image was run.

### Corrections required before publication

- C1, channel freshness: replace nightly's unknown-source/no-tag row with `nightly/v2026.1024.0-nightly.0 -> 5e26b733b9668d24b005418704d43f66109a7dd8`, 572 ahead / 0 behind S. `git ls-remote` independently returned this ref during the initial read begun at 2026-10-24T10:05:54.567550Z and in the final recheck. Its ancestry matches C, including section 15. Do not infer npm tarball identity merely from the tag. [Nightly tag ref](https://api.github.com/repos/paperclipai/paperclip/git/ref/tags/nightly/v2026.1024.0-nightly.0), [pinned source](https://github.com/paperclipai/paperclip/tree/5e26b733b9668d24b005418704d43f66109a7dd8).
- C2, channel freshness: current GHCR nightly is `sha256:0bbbd73df3326e85fd22b9704e5f23586a07fbcf043c5e57d22735b903a7c719`, revision `5e26b733b9668d24b005418704d43f66109a7dd8`, with OCI created label 2026-10-24T09:58:35.647Z. Replace the earlier October 23 nightly digest for any current recommendation. The label time postdates the harvest's last pointer check. [Immutable new nightly manifest](https://ghcr.io/v2/paperclipai/paperclip/manifests/sha256:0bbbd73df3326e85fd22b9704e5f23586a07fbcf043c5e57d22735b903a7c719).
- C3, receipt repair: ledger publication-time links should cite the [full registry time map](https://registry.npmjs.org/paperclipai), naming `time[version]`. The version-specific endpoints cited in the ledger expose package metadata but not the publication-time map. The times themselves are verified; change the claim-bearing receipts.

The live homepage independently named v2026.1023.0 at 2026-10-24T10:13:49.946187Z. The docs remote HEAD remains d811a89622809a04001af07e84e427a86162a3bb. Its [pinned installation guide](https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/guides/getting-started/installation.md#L197-L217) still runs setup_20.x despite requiring 24.11.0 in surrounding prose. The harvest's docs warning holds. Homepage language is discovery/positioning, not runtime acceptance.

## Numbered-section verification

### 1. Stable grants existing human Operators company editing and tool administration

VERIFIED. The stable role preset has exactly fourteen Operator grants, excluding joins:approve and users:manage_permissions. insertMissingPrincipalGrants uses a unique permission-row conflict target; an existing scoped row survives, while an absent row is inserted. The active-human backfill calls that preset. This supports the stated distinction from new-agent defaults and the warning that deleting a grant can let seeding recreate it. A role change must still be followed by inspection of persisted grants; this source check is not a migrated-database acceptance test.

Receipts read: [role change](https://github.com/paperclipai/paperclip/commit/582911ba74350dbe9029eb132d69a257edd9d26a), [fourteen-grant preset](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/company-member-roles.ts#L57-L73), [seeding and conflict behavior](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135).

- `582911ba74350dbe9029eb132d69a257edd9d26a`: O/S/B/C = 1/0/0/0; committed 2026-10-06T20:55:38Z.

### 2. Stable makes cost receipts durable and can hold admission on unknown prices

VERIFIED. Read the receipt writer/replayer, full run-settlement function, company-row transaction lock, reservation implementation and blocking predicate. The writer uses exclusive creation, 0600, file sync, rename and directory sync. Run settlement uses heartbeat:<run>:final, retains recovered files through commit, and updates accounting/runtime state together. The predicate explicitly excludes inactive, non-hard-stop and nonpositive policies. It also subtracts recovering runs from pending debt. The harvest correctly avoids treating estimates as a provider-side spending ceiling or claiming a provider-invoice reconciliation.

Receipts read: [ledger change](https://github.com/paperclipai/paperclip/commit/799e4d556f5c1bc17b398147c7e0abff91446de0), [durable usage receipts](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/usage-receipts.ts), [run settlement](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/run-cost-accounting.ts), [company transaction lock](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/accounting-transaction.ts), [admission reservations](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budget-reservations.ts), [blocking predicate](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budgets.ts#L224-L230).

- `799e4d556f5c1bc17b398147c7e0abff91446de0`: O/S/B/C = 1/0/0/0; committed 2026-10-07T05:26:48Z.
- `eab93fd4a0774cea2f968b2c580656e642abdf33`: O/S/B/C = 1/0/0/0; committed 2026-10-07T01:16:18Z.

### 3. Stable enforces private-task reads, with privileged and shared-agent exceptions

VERIFIED. The tagged privacy contract and SQL predicates agree on open defaults, downward sharing, independent grants and the responsible-user intersection. issueReadSqlCondition explicitly bypasses enforcement for local_implicit and instance administrators; the authorization path also excludes allow_instance_admin/allow_local_board from private-task denial. The separate inspection contract requires opt-in Cloud permit configuration and does not create a task notice. The trusted-agent residual risk is explicit. This verifies implemented read controls, not universal confidentiality of files or learned context. The later preview removal of filesystem-history authorization is a material omission, M2 below.

Receipts read: [privacy contract](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/ISSUE-PRIVACY.md), [SQL read predicates](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/authorization.ts#L538-L658), [privileged authorization bypasses](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/authorization.ts#L2634-L2671), [inspection contract](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/CUSTOMER-SUCCESS-INSPECTION.md).

- `b67db12d90c1bd191f99975e35cc5c84137858e4`: O/S/B/C = 1/0/0/0; committed 2026-10-07T11:53:20Z.
- `3a726e676fe47f4725d03037e823d7f057760708`: O/S/B/C = 1/0/0/0; committed 2026-10-07T12:06:40Z.
- `a9a20fb5c6c080884ced7ee0a4e3b04f9cbf3a6e`: O/S/B/C = 1/0/0/0; committed 2026-10-07T02:38:15Z.

### 4. Assistant MCP can configure work as well as delegate it

VERIFIED. The expanded catalog and tagged contract support work/configuration mutations, expiring exact-byte uploads and durable request-ID receipts. Configuration needs paperclip:configure plus domain permissions. The contract explicitly says the single write checkbox approves both requested mutation scopes; the harvest does not repeat the release body's misleading suggestion of a separate checkbox. Real-user OAuth, HTTPS/loopback, revocation and unknown-outcome limits are preserved. Existing write grants do not acquire configuration scope through refresh.

Receipts read: [expanded MCP actions](https://github.com/paperclipai/paperclip/commit/2d0c138122b5977c4e8add39cc917de1fbaabae4), [stable consent and receipt contract](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/public-mcp.md), [flag default](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/shared/src/feature-catalog.ts#L116-L122).

- `2d0c138122b5977c4e8add39cc917de1fbaabae4`: O/S/B/C = 1/0/0/0; committed 2026-10-07T01:29:58Z.

### 5. Stable gives agents durable lifecycle state and signing identities

VERIFIED. Opened all four cited receipt targets, including the lifecycle and plugin journal commits. The lifecycle state machine separates approval, preparation, verification, ready, pausing and cleanup; deletion waits for terminal lifecycle state. Journal delivery is ordered per resource and acknowledged per plugin, with a seeded current-state baseline and at-least-once delivery. The identity contract confirms Ed25519, next-managed-run provisioning for existing agents, encrypted private storage, PEM environment delivery, failure on a wrong wrapping key and hosted-adapter exclusions. Identity is not request authentication or proof of correct output.

Receipts read: [stable identity contract](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/AGENT-IDENTITY.md), [lifecycle ownership](https://github.com/paperclipai/paperclip/commit/2dd9811e8be1dab59cccd86cdb25e8953b02fe07), [plugin/UI lifecycle contract](https://github.com/paperclipai/paperclip/commit/5badea47987aed32b86f36da6bc6c40ceed2995a), [plugin journal delivery](https://github.com/paperclipai/paperclip/commit/1cebdd4c4f9d8a4cb9e9eb1e71642e23605d04f9), [transaction-bound lifecycle records](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/resource-lifecycle-events.ts).

- `a590ab769d32be6e8912de1ac169eb7bdc398fb7`: O/S/B/C = 1/0/0/0; committed 2026-10-06T18:57:03Z.
- `2dd9811e8be1dab59cccd86cdb25e8953b02fe07`: O/S/B/C = 1/0/0/0; committed 2026-10-09T16:05:12Z.
- `5badea47987aed32b86f36da6bc6c40ceed2995a`: O/S/B/C = 1/0/0/0; committed 2026-10-09T18:15:24Z.
- `1cebdd4c4f9d8a4cb9e9eb1e71642e23605d04f9`: O/S/B/C = 1/0/0/0; committed 2026-10-06T19:27:09Z.

### 6. Stable adds model gateways and native runtime choices without removing compatibility limits

VERIFIED. Opened both gateway commits, installed-command resolution, fallback rules, remote compatibility and the Dot contract. Installed Codex resolution validates the package identity and contained executable before PATH fallback. Explicit artifact/install pins precede image model fallback. The remote bounds remain >=0.149.0 and <0.161.0. The stable Runner manifest declares Codex 0.160.0; the release records Claude 2.1.286. Harness-specific endpoint compatibility, Dot's separate pairing/flag/Assistant-MCP requirement and unmetered hosted usage are correctly qualified.

Receipts read: [gateway routing change](https://github.com/paperclipai/paperclip/commit/9f7057e122c0c6987044240e22ea067402e6e450), [advanced providers](https://github.com/paperclipai/paperclip/commit/e38d6d16b6f234c29651f5ed501cc8d25cfc121a), [Codex command resolution](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/paperclip-runner/src/drivers/codex/codex-command.ts), [fallback rules](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-model-fallback.ts), [remote compatibility](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts), [Dot contract](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/openai-dot-runner.md).

- `9f7057e122c0c6987044240e22ea067402e6e450`: O/S/B/C = 1/0/0/0; committed 2026-10-06T18:29:03Z.
- `e38d6d16b6f234c29651f5ed501cc8d25cfc121a`: O/S/B/C = 1/0/0/0; committed 2026-10-06T20:21:22Z.
- `6f9d0a56ba3c2f0059a723b7de434320eed7eb22`: O/S/B/C = 1/0/0/0; committed 2026-10-09T13:19:51Z.
- `bf9dbd18a8d9a539f79ca2e3ccb10b6df31c6334`: O/S/B/C = 1/0/0/0; committed 2026-10-08T09:57:26Z.
- `57e977be72f37dcf31acff64b3e5dcbb64a92cd0`: O/S/B/C = 1/0/0/0; committed 2026-10-09T13:56:41Z.
- `a6306ba606eb87c89b9ef0344e9fe8e0025580f9`: O/S/B/C = 1/0/0/0; committed 2026-10-07T01:48:15Z.
- `fc6304dfe5f2e446e09bd052a7b45f51e930f250`: O/S/B/C = 1/0/0/0; committed 2026-10-08T00:11:50Z.

### 7. Slack setup becomes automatic, while GitHub bot management moves behind an opt-in gate

VERIFIED. The tagged Slack contract explicitly defaults only new drafts to automatic setup and preserves older manual drafts. Unknown creation outcomes require inspection. GitHub's contract confirms the commit-specific check, configurable score and separate formal-review settings, Cloud callback dependence, and management visibility without stopping existing bots. The section is accurate but omits a breaking migration: legacy per-person automaticReviews values are ignored. See M11.

Receipts read: [automatic Slack setup](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/SLACK-AUTOMATIC-SETUP.md), [GitHub review-bot contract](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/GITHUB-REVIEW-BOT.md), [release migration notes](https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0).

- `d66acb7ac157c3db2e1d389de4513a7809977725`: O/S/B/C = 1/0/0/0; committed 2026-10-08T11:33:31Z.
- `ed2c22ea8c743b50acd5ae130f4258eaec4569d9`: O/S/B/C = 1/0/0/0; committed 2026-10-09T22:01:20Z.

### 8. Failed workspace copy-back can preserve the only recoverable sandbox

VERIFIED. The tagged restore contract and both changes support at most three total pre-write attempts, exclusion of unsafe/permission/partial-write failures, exact retained allocation evidence and a board-owned repair hold. Cleanup stops rather than destroys the required source; successful repair does not resume work or remove the retained allocation. The UI limitation, possible storage charges and continued writer-drain requirement are correctly stated. This legacy copy-back contract does not describe the separate preview worktree/restore-point expiration changes in M3.

Receipts read: [workspace lock, transfer and repair contract](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L102), [retry change](https://github.com/paperclipai/paperclip/commit/4611d6e95a683d6750120ee103f77c5490b4a9a5), [retention change](https://github.com/paperclipai/paperclip/commit/f1c44b7b565b8cddb0567d091539d2e7cc517ec8).

- `4611d6e95a683d6750120ee103f77c5490b4a9a5`: O/S/B/C = 1/0/0/0; committed 2026-10-12T04:44:11Z.
- `f1c44b7b565b8cddb0567d091539d2e7cc517ec8`: O/S/B/C = 1/0/0/0; committed 2026-10-07T20:29:44Z.

### 9. Stable meters internal model decisions and optional acknowledgment generation

VERIFIED. Read both full service contracts. Decision models identify only the fixed setup test as a product caller, retain current permission/budget checks and default saved sponsorship on. Fast responses use a separate SDK generation service, start flag-off, have a three-second acceptance/publication deadline, no tools or paid SDK retry, and retain accounting even when output is suppressed. The harvest does not claim measured latency or completed work from an acknowledgment.

Receipts read: [decision-model service contract](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/decision-models.md), [independent fast-response service](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/fast-responses.md).

- `a7a244ab33cea9e8c68d2c1fa54c4879361bfc07`: O/S/B/C = 1/0/0/0; committed 2026-10-07T20:53:13Z.
- `a7dd5284b580e774c52711b91a41b7b36f9e0952`: O/S/B/C = 1/0/0/0; committed 2026-10-10T18:09:17Z.

### 10. Beta defaults new Codex, Claude and Pi agents to qualified native runtimes

VERIFIED. Opened the three default-selection commits and Copilot's tagged contract. Ancestry establishes preview delivery, not stable delivery. Target qualification, explicit Legacy choices, saved execution identity, explicit Pi model/provider setup, packaged Copilot 1.0.88 and personal Copilot Requests tokens are supported. USD remains unknown without invoice evidence. Missing coverage: OpenCode also changes its new-agent default, and existing Codex/Claude agents gain an explicit upgrade control. See M5.

Receipts read: [Codex default selection](https://github.com/paperclipai/paperclip/commit/adb69e8f09852c772d9901ae270e5b2d66e39c77), [Claude target qualification](https://github.com/paperclipai/paperclip/commit/8193abb9363ef953edb920c6e48fbf251cc65d79), [Pi default and restrictions](https://github.com/paperclipai/paperclip/commit/734c26533914511f943db8ea5a416277b5625af3), [beta Copilot connection contract](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/connections/github-copilot.md).

- `adb69e8f09852c772d9901ae270e5b2d66e39c77`: O/S/B/C = 1/1/0/0; committed 2026-10-14T16:33:02Z.
- `8193abb9363ef953edb920c6e48fbf251cc65d79`: O/S/B/C = 1/1/0/0; committed 2026-10-19T19:17:24Z.
- `734c26533914511f943db8ea5a416277b5625af3`: O/S/B/C = 1/1/0/0; committed 2026-10-21T22:10:00Z.
- `7c247243e5dcc9b6369aa360551bc500c9860bad`: O/S/B/C = 1/1/0/0; committed 2026-10-20T12:33:14Z.

### 11. Beta adds hosted Grok Bot and personal Muse integrations with explicit limits

VERIFIED. Read both tagged hosted-agent contracts. Grok Bot is distinct from the coding CLI, verifies delivery and authenticated replies, and binds required file outputs to verified byte/publication receipts. Muse remains disabled by default and leaves real OAuth work, installed Cloud and sustained qualification open. Stop revokes Paperclip authority without certifying provider termination. The harvest correctly attributes provider limitations and does not turn synthetic tests into live acceptance.

Receipts read: [Grok Bot contract](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/grok-bot-agent.md), [personal Muse compatibility and release gates](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/muse-personal-agent.md).

- `b8ffeb973a2a1d430efabffd755f15b6c7cf112a`: O/S/B/C = 1/1/0/0; committed 2026-10-14T01:57:42Z.
- `e6dcc6b0959bdfc3bc93239c3d95e14c9fc8d457`: O/S/B/C = 1/1/0/0; committed 2026-10-18T03:44:36Z.

### 12. Beta keeps case phases on one task and adds reusable written workflows

VERIFIED. The tagged map describes same-primary-task handoffs, delayed source release, original-caller permission rechecks and opt-in Cases. The workflow plan documents adoption revisions and conflicts. Its lines 60-65 report four actual Codex API runs and nine checks while retaining incomplete aggregate dollar accounting. The harvest attributes that upstream result, rather than claiming an independent replay or a measured fix for subtask overload.

Receipts read: [case state and access map](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/feature-map/cases.md), [workflow implementation and bounded qualification](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/plans/2026-10-21-reusable-case-workflows.md).

- `505e1a5582175a1ca835f4ae4fc9091fa451cb20`: O/S/B/C = 1/1/0/0; committed 2026-10-20T17:46:14Z.
- `0a5f1546ee53627f2e86db365db602ce500a5c3b`: O/S/B/C = 1/1/0/0; committed 2026-10-21T20:00:12Z.

### 13. Beta offers a paid classifier for tool-result prompt injection, retaining fallback checks

VERIFIED. Read the full tagged classifier contract and implementation change. Saved shared OpenRouter setup is opt-in; valid model verdicts can replace regex results, with bounded paid calls and unknown-cost holds. Failed/unavailable classification normally falls back to the complete original regex input. Two useful limits remain explicit in the receipt: oversized/redaction-mismatched results skip model dispatch, and caller cancellation propagates instead of returning a regex result to a stopped caller. These do not overturn the finding. Detection cannot undo a prior tool mutation.

Receipts read: [classifier configuration, data and billing contract](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/prompt-injection-prevention.md), [implementation commit](https://github.com/paperclipai/paperclip/commit/2c96f76780b37405e0fd2b423be39ecd5021d40c).

- `2c96f76780b37405e0fd2b423be39ecd5021d40c`: O/S/B/C = 1/1/0/0; committed 2026-10-20T16:32:25Z.

### 14. Beta repairs Stop recovery and finally distinguishes soft budget warnings

VERIFIED. The Stop diff adds accounting to the finalization work signal and removes the exemption that admitted pre-Stop comments as a new user turn. The retained-input/follow-up journey is separately documented. The warning diff branches on soft versus hard incidents; the stable card still has paused-work wording. Both changes are absent from stable and present in beta. The warning commit predates this window, so channel advancement is the correct new event. No general blocked-task re-wake-loop fix is established.

Receipts read: [Stop and accounting repair](https://github.com/paperclipai/paperclip/commit/6dda8cc2b75e211dc62af264bfd0994f602099d1), [warning fix](https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9), [still-unfixed stable card](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/ui/src/components/BudgetIncidentCard.tsx).

- `6dda8cc2b75e211dc62af264bfd0994f602099d1`: O/S/B/C = 1/1/0/0; committed 2026-10-21T18:02:27Z.
- `2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9`: O/S/B/C = 1/1/0/0; committed 2026-10-13T17:12:49Z.

### 15. Canary adds governed secret-vault and deployment actions

VERIFIED. Read all three canary contracts. 1Password has eight reviewed actions and initially allows discovered actions for chosen agents; authorized item/secret reads deliberately return secret values, while the durable service token stays vaulted/redacted. Supabase's required-project Management API is distinct from its MCP method. Vercel requires a team, rejects preview on an empty project and retains a mismatch reconciliation receipt; ambiguous writes are not automatically retried. The section should be supplemented with the approval-payload encryption/key-custody change in M12. These changes also now have a matching nightly Git tag; package-byte identity is not established.

Receipts read: [1Password contract](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/1PASSWORD.md), [Supabase contract](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/SUPABASE.md), [Vercel contract](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/vercel.md).

- `4d90634f747c75e8bc557c4c221dea267cea9ab2`: O/S/B/C = 1/1/1/0; committed 2026-10-23T20:27:33Z.
- `9c442cf48e633002fb9600ff0c137550889fdb08`: O/S/B/C = 1/1/1/0; committed 2026-10-23T18:37:29Z.

## Prior claims re-checked independently

These are spot checks at S, not a claim that every active profile claim was independently acceptance-tested. The security/default claims below were read again at the newest stable, rather than inherited from the researcher's verdict.

- VERIFIED, plaintext-credentials holds: the agent response mapper calls redactAgentAdapterConfig, and that function separately redacts every environment binding. This establishes the current serializer behavior, not retroactive rotation of old credentials. [Agent route](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/routes/agents.ts#L2853-L2863), [redactor](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/redaction.ts#L974-L989).
- VERIFIED, scoped-grant matching holds: allow entries and all supplied selectors must match; malformed/unknown restrictions reject that grant. Explicit matching grants still precede profile filtering. Failure of one grant is not a global veto. [Matcher](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/tool-access-policy.ts#L731-L761), [precedence](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/tool-access-policy.ts#L1466-L1485).
- VERIFIED, new-agent-grants-and-hiring holds: exactly fourteen standard-agent defaults, including unscoped tools:use; assignment-subtree and responsible-user inbox scopes are distinct. Existing agents are not backfilled by this list. New non-low-trust creation authority and false board-hiring-approval default are explicit. [Defaults and scope function](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/lib/agent-permissions.ts#L3-L75), [company schema](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/db/src/schema/companies.ts#L19-L21).
- VERIFIED, coding-full-auto-defaults holds with the harvest's correction: ACPX defaults approve-all, OpenCode allow, and native Codex never within its independently restricted environment. The native ACP permission adapter now supplies supported decisions. The old no-interactive-handler generalization must stay retired. [Modes](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L48-L136), [native decision adapter](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/paperclip-runner/src/drivers/acpx/acp-permission-adapter.ts).
- VERIFIED, grok-full-auto-correction holds: alwaysApprove defaults true and emits --always-approve; removing dontask did not remove automatic approval. [Default](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/adapters/grok-local/src/server/execute.ts#L266-L273), [arguments](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/adapters/grok-local/src/server/execute.ts#L554-L562).
- VERIFIED, resolver-default-anyone holds: both requested and effective resolver columns default to anyone. Ordinary confirmation interpretation rejects toolAction, secretProposal and connectionAuthorization payloads so their dedicated approval paths remain separate. [Interaction schema](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/db/src/schema/issue_thread_interactions.ts#L25-L32), [resolver](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/confirmation-comment-resolution.ts#L12-L96).
- VERIFIED, aggregator-and-api-availability holds: aggregators are forced on; native API tools default on, but an explicit non-true deployment switch or false binding disables them. Availability does not grant tool authority. [Settings](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/instance-settings.ts#L225-L239), [rollout predicate](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/runner-api-rollout.ts).
- VERIFIED, budget advancement and warning defect: the human/accounting former-beta changes are now stable, with the active/positive/hard-stop qualification intact. Stable still has the misleading budget card. The warning fix has S/B/C=1/0/0. [Budget predicate](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budgets.ts#L224-L230), [stable card](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/ui/src/components/BudgetIncidentCard.tsx), [repair](https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9).
- VERIFIED, sqlite-lock-upgrade-drain holds: stop every old writer, preserve SQLite lock files and verify file restoration. The same procedure applies on rollback. [Tagged runbook](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L56).
- VERIFIED, assistant-MCP consent holds with broader scoped actions: real-user membership and flag-off delivery remain; configuration requires new consent, and revocation does not undo delegated work. [Stable contract](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/public-mcp.md).
- VERIFIED, short-instructions-unmeasured holds: the tagged comparison says no completed provider-run behavioral comparison and retains cancelled/skipped paid work without a behavioral grade. The Cases arithmetic trial answers a different question. [Evaluation record](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/plans/2026-10-05-plan-task-guidance.md#L44-L85).
- VERIFIED, managed-browser-work remains bounded: stable documents a basic paid journey while revocation, approval, rate limiting and restart lifecycle acceptance remain outstanding. Fixtures cannot close those live gaps. [Stable browser evidence](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/BROWSER-USE.md#L154-L191).
- VERIFIED, Node installation defect and remote worker compatibility hold: the docs recipe still installs Node 20; remote Codex still rejects versions outside its explicit range. Neither a package pin nor local tolerance proves the worker actually executed. [Pinned install recipe](https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/guides/getting-started/installation.md#L197-L217), [remote bounds](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts).

## Material misses

For each commit below, ancestry was independently rerun. Unless a different tuple is stated, S/B/C = 1/0/0: absent from stable, present in the October 23 beta and October 24 canary. The new nightly Git tag has the same source as C; this does not assert byte-for-byte identity with its npm artifact. These are material omissions, not evidence that the fifteen included findings are false.

### M1. Pipelines is removed, with storage retained

2026-10-19, preview-or-beta. Commit `90777488945fc2ceba6d27c407516d4a1df69b54` removes the application, REST API, CLI commands, experiment, review queue, learnings and stage automation. The pipeline tables/schema/migration history remain; no cleanup migration drops old data. Cases and Routines continue independently. Operators using the experiment must plan for loss of its operating surfaces before upgrading to beta. Do not imply that same-task Cases is an automatic migration of their pipeline.

Read the removal patch, including route registration, CLI deletion and the database contract: [commit](https://github.com/paperclipai/paperclip/commit/90777488945fc2ceba6d27c407516d4a1df69b54), [tagged retained-storage contract](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/DATABASE.md#L1018-L1025).

### M2. Filesystem-history authorization is deliberately removed

2026-10-20, preview-or-beta. Commit `813e808af462b6a6f9db38b6791e3bfe8465b51e` removes historical source/reader intersections, physical-alias inventories and related acquisition classifications from runtime file authorization. Current task/configuration authority and OS isolation govern bytes. App-record privacy remains, but a private historical task no longer prevents an otherwise authorized task from using the same selected checkout. New preparation also stops creating the historical-ownership remote-clone fallback. This is a deliberate boundary change, not an independently reproduced exploit.

Operators must inspect shared directories and execution isolation separately from private-task API ACLs before trialing beta. A security profile that reports only the stable privacy feature would conceal this preview trade. [Removal commit](https://github.com/paperclipai/paperclip/commit/813e808af462b6a6f9db38b6791e3bfe8465b51e), [tagged admission and physical-policy contract](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/agent-access-map/workspaces.md#L59-L104), [task-bound file reads](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/agent-access-map/workspaces.md#L242-L244).

### M3. Recoverable work and session backups acquire expiration policies

2026-10-20 through 2026-10-24, preview-or-beta. The harvest discusses preserving failed copy-back sources but misses a separate lifecycle: restore points can permit removal of closed worktrees containing unpushed/uncommitted work after a default three-day terminal delay, or idle open worktrees after seven days. These behaviors are conditional on the relevant cleanup/restore-point settings and safety checks. Restore points are encrypted and storage-verified; default terminal retention is ninety days. After expiry, reopening can start fresh with a warning that prior unsaved work is unavailable. Separately, closed native sessions' failover copies default to seven-day expiration, so later reopening starts a fresh native session.

The beta initially excludes ignored files; canary adds a separate ignored-file snapshot with exclusions for environment secrets and regenerable directories. Its v2 payload is rejected by older servers. Operators should inspect retention settings, backup/master-key custody and rollback compatibility before relying on Paperclip as an indefinite archive of unsaved work.

Ancestry: `12bb7e1976caf83afda2ee85ba357ac204a1b7f1`, `6d44b80a5edbcc9f69bfc3d520994e70aa9fab6d`, `5ef783d9714b689d9207c6388221ab664043aa84` and `d69631b01b9c658f80bf8bed389863dce82643e1` each have S/B/C=1/0/0. Ignored-file commit `687776090497fd161e6a49c2d7eb9c0a58f28763` has 1/1/0. Failover expiration `1f3695ac6716ff6163fb23c5a20578a201d4d01d` is in the beta. [Beta cleanup and retention](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/recoverable-disk-cleanup.md), [ninety-day default implementation](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/server/src/services/git-restore-point-ledger.ts#L8-L39), [canary ignored-file behavior](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/recoverable-disk-cleanup.md#L154-L191).

### M4. Configured service secrets become visible to legacy Codex shell commands

2026-10-22, preview-or-beta. Commit `042051904d368f5514e287e5ca8e404dc8f78a0d` explicitly includes configured task service-secret variables, such as SLACK_BOT_TOKEN, in legacy Codex ACP/CLI shell delivery, including runs without an agent identity. This is not a claim about every native Codex path. Provider/login keys, observability credentials and reserved runtime transport secrets remain excluded; unassigned ambient host secrets are not opted in.

Assigning such a credential authorizes model-directed shell commands to read it. Operators must narrow service scopes and inspect adapter environment bindings; it is not equivalent to a brokered tool keeping the credential hidden from agent code. [Change](https://github.com/paperclipai/paperclip/commit/042051904d368f5514e287e5ca8e404dc8f78a0d), [tagged delivery contract](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/AGENT-IDENTITY.md#L101-L117), [allowlist implementation](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/packages/adapter-utils/src/codex-shell-environment.ts).

### M5. OpenCode also changes its default; existing agents get an explicit upgrade path

2026-10-21, preview-or-beta. `39e44a9d9b0dbbb327beecc490c0e5095f92649b` defaults new qualified OpenCode agents to Runner, translates supported settings and rejects unsupported legacy permission/configuration combinations. Section 10 lists Codex, Claude and Pi but omits this default flip. `0f15f82b19dfefcb66f278b575cd430be381015f` separately offers an Upgrade runner control for eligible existing Codex/Claude agents. It preserves compatible settings/history while new sessions start fresh; unsaved form changes are included. It does not migrate agents automatically.

Operators should record selected runner and conversation continuity when comparing runs, and review unsaved changes before using the upgrade control. [OpenCode default and translation](https://github.com/paperclipai/paperclip/commit/39e44a9d9b0dbbb327beecc490c0e5095f92649b), [existing-agent upgrade implementation](https://github.com/paperclipai/paperclip/commit/0f15f82b19dfefcb66f278b575cd430be381015f).

### M6. Company OTLP export can send prompts, answers and tool content

2026-10-19, preview-or-beta. `ac9459bae3329395f10bc81c638a374eef152baa` adds company-owned Braintrust/custom OTLP configuration for supported managed Codex/Claude execution. Export defaults off; once configured/enabled, prompts, responses and tool content default on. It is separate from content-free infrastructure tracing. Export credentials are accessible to the executing harness and potentially its tools; this is not a credential-isolation feature.

Operators should approve the destination and content settings, use ingestion-only credentials or a separate collector, and verify records from the actual remote execution environment. A successful synthetic connection test does not prove agent export. [Implementation](https://github.com/paperclipai/paperclip/commit/ac9459bae3329395f10bc81c638a374eef152baa), [tagged capture, credentials and limits](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/agent-observability.md#L3-L94).

### M7. Commentary gets a separate default human read permission, including Viewers

2026-10-19, preview-or-beta. `e5927e1db9095828d14578997cd9f6847f9137fc` adds commentary:view to all human role presets, including Viewer, and grants it to existing active human members without overwriting existing scopes. Commentary gets its own Audit surface and shareable messages; source-task privacy still filters it. This does not grant agent-action audit/export authority.

Operators should audit the audience for agent complaints/suggestions separately from detailed audit access. The migration and legacy invitation behavior matter for existing people, not just new installations. [Permission diff](https://github.com/paperclipai/paperclip/commit/e5927e1db9095828d14578997cd9f6847f9137fc), [tagged read contract](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/agent-commentary.md#L70-L85).

### M8. Runner gains execution-host-assigned local stdio MCP servers

2026-10-16, preview-or-beta. `6f8ad3d77bc9032d7a6d518eb0a9580fc607c23d` registers verified session-local stdio MCP assignments through native Codex and compatible ACPX clients. Bindings use a private Unix socket and serialized shared-resource calls; tasks cannot supply the reserved environment inputs and read-only sessions omit them. Host-assigned native Codex tools do not add a new per-call prompt; explicit deny/prompt rules remain effective.

This removes some local transport scaffolding but puts trust in host assignments and adapter support. Inspect those bindings and test the actual client; HTTP gateway administration/revocation guarantees do not automatically cover this separate transport. [Implementation](https://github.com/paperclipai/paperclip/commit/6f8ad3d77bc9032d7a6d518eb0a9580fc607c23d), [tagged transport and approval boundaries](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/agent-access-map/gateways-profiles.md#L149-L172).

### M9. Unified Google setup defaults three service groups to read/write

2026-10-19, preview-or-beta. `23b2ceb0d19d4dff0e34f0d957aa41efec739816` replaces new-account service-by-service setup with one google-workspace grant/catalog. Gmail, Drive including Docs/Sheets/Slides, and Calendar start enabled with read/write access; users can narrow groups before consent. The default request uses nine scopes. Actual provider-granted scopes are rechecked and old individual connections remain supported. Managed OAuth is still limited to enrolled internal testers during preview; other companies need their own eligible OAuth app.

Operators should review the combined consent rather than assume a previously narrow app selection, and deploy matching instance/broker scope registries. [Implementation](https://github.com/paperclipai/paperclip/commit/23b2ceb0d19d4dff0e34f0d957aa41efec739816), [tagged defaults and existing-account behavior](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/connections/GOOGLE-WORKSPACE.md#L3-L73), [preview eligibility](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/connections/GOOGLE-WORKSPACE.md#L101-L113).

### M10. A live review cycle cannot be discarded by replacing policy and marking done

2026-10-15, preview-or-beta. `880d4ae60fa691305a4703d4e25e367b63c2a7d7` rejects a simultaneous execution-policy replacement and done request when regenerated stage IDs would discard a pending or changes-requested review. The bug allowed a task to be marked complete through a review that never ran. The fix returns unexecuted_review_stage; deliberate cancellation and ordinary policy edits retain their prior behavior. No CVE/GHSA or independent exploitation is established.

Operators relying on staged review should keep stable limitations explicit and test the exact policy-edit/completion sequence when trialing beta. [Pinned guard and regression change](https://github.com/paperclipai/paperclip/commit/880d4ae60fa691305a4703d4e25e367b63c2a7d7).

### M11. Stable ignores old per-person automatic-review switches

2026-10-24 stable promotion, tagged-release. This is an omitted breaking detail within section 7. `ed2c22ea8c743b50acd5ae130f4258eaec4569d9` has O/S/B/C=1/0/0/0. Saved people[].automaticReviews values are read but ignored; automatic event/author include-exclude controls replace per-person switches. Authorized mentions can bypass automatic scheduling filters while normal repository/access permissions still apply.

Before restarting stable, operators should review author filters and guest sponsorship rather than assume old per-person automatic-run choices still constrain scheduling. [Stable policy contract](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/GITHUB-REVIEW-BOT.md#L130-L160), [implementation](https://github.com/paperclipai/paperclip/commit/ed2c22ea8c743b50acd5ae130f4258eaec4569d9).

### M12. Canary encrypts new sensitive approval payloads and changes retry identity custody

2026-10-23, preview-or-beta, canary-only relative to B. `9c442cf48e633002fb9600ff0c137550889fdb08` has S/B/C=1/1/0. Beyond adding deployment tools, it encrypts sensitive arguments such as secretValue in new approval payloads. Existing signed approval records are not rewritten. Sensitive request identities use the signing key instead of guessable secret hashes; default retry identities become versioned and actor-scoped. Unverifiable old retries require reconciliation rather than blind replay.

Operators should preserve/share the configured tool-action signing key or its persisted master-key fallback with the database, and account for rotation invalidating retry matching. This is a source-backed custody change; no historical secret compromise is alleged. [Pinned Vercel approval and retry contract](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/vercel.md#L198-L212), [Supabase key fallback](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/SUPABASE.md#L239-L254), [implementation](https://github.com/paperclipai/paperclip/commit/9c442cf48e633002fb9600ff0c137550889fdb08).

### M13. Agent connections and default models can be edited in bulk

2026-10-22, preview-or-beta. `9bf7dc0c8f794120ebf2ccce4fd9c92510715715` adds the roster bulk-settings surface and validated runtime-settings patches. The agent route rechecks configuration authority, connection/model compatibility and expected configuration before saving. This can remove repeated per-agent edits, while increasing the consequence of choosing the wrong shared connection/model for a group.

Operators should review the selected roster and inspect each persisted result after a bulk change. No provider-performance improvement is established. [Implementation and route checks](https://github.com/paperclipai/paperclip/commit/9bf7dc0c8f794120ebf2ccce4fd9c92510715715), [tagged agent surface map](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/feature-map/agents.md).

## Advisory, license and rule checks

The repository advisory API returned twelve records, with publications in April or July 2026 and no new in-window publication/update. GitHub's npm paperclipai advisory search returned no in-window result. NVD keyword search for paperclip with the requested publication window returned totalResults=0 at 2026-10-24T10:07:48.956952Z. This is a bounded negative search, not an assertion that the product has no vulnerabilities. [Repository advisories](https://github.com/paperclipai/paperclip/security/advisories), [repository advisory API](https://api.github.com/repos/paperclipai/paperclip/security-advisories), [package advisory query](https://api.github.com/advisories?ecosystem=npm&affects=paperclipai&published=%3E2026-10-13&per_page=100), [NVD window query](https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=paperclip&pubStartDate=2026-10-14T00:00:00.000&pubEndDate=2026-10-24T10:10:00.000).

No new CVE/GHSA finding needs promotion. The review-cycle defect in M10 is described in plain words without inventing an advisory. The harvest's issue reports remain leads, not confirmed new vulnerabilities. Privacy and classifier changes are not substitutes for proving a specific exploit or advisory fix.

The root LICENSE diff is empty both from old stable to S and from the cutoff commit to C. The read package records still declare MIT. No root license or package-name/install-channel change beyond the recorded version/channel movements was found. [Stable license](https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/LICENSE), [canary license](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/LICENSE), [version metadata](https://registry.npmjs.org/paperclipai/2026.1023.0).

Rule check: all numbered Receipt fields are tag/SHA-pinned except the inherently versioned GitHub release object. The registry time-map receipt repair is C3. Dates were checked as 2026 implementation/release events, with UTC commit dates retained in the ancestry list. Stable promotion is not described as newly merged code. Capability and defect consequences remain bounded to the channel read. Marketing, upstream qualification and independent verification are distinguished. No social-post wording was quoted or used to establish runtime behavior.

## Remaining limits and publication disposition

Keep the verified fifteen sections, update C1-C3, and add the material operator consequences above before synthesizing a profile. The most consequential omissions are M1-M4, M6 and M10-M12: removed workflows, changed file/credential boundaries, recovery expiry, content export and review/approval behavior.

No live upgrade/rollback, grant migration, provider billing comparison, exploit, sandbox recovery, external-agent journey or resource mutation was run. No complete audit of every path in all 476 commits is claimed. The additional changes above were found by an independent date-bounded history sweep and checked against pinned code/docs and ancestry. Platform/account-specific acceptance and npm/container/source byte equivalence remain unproven.

