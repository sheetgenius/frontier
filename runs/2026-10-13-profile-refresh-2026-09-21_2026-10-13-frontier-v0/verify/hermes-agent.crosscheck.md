# Hermes Agent adversarial crosscheck

Source: `hermes-agent` / `NousResearch/hermes-agent`.
Harvest: `harvest/hermes-agent.primary.md` in this run.
Verification performed: 2026-10-14.
Profile window: 2026-09-21 through 2026-10-13, excluding baseline findings already recorded.

Disposition: correct before publication. The principal security fixes and their first stable releases survive independent ancestry checks. Several operator instructions overstate what the code does, historical moving pointers lack preserved evidence, and material security and runtime changes are missing.

Numbered-section totals: **4 VERIFIED, 11 CORRECTED, 0 REFUTED, 0 UNVERIFIABLE**. These totals count sections 1 through 15 only. Individual rejected claims and inaccessible historical observations are identified below. A CORRECTED verdict does not clear the section's original wording.

`install_today_correct: false` applies to the entire installation block. Its v0.21.7 version answer is correct at the researcher's stated 2026-10-13T09:56Z snapshot and through the end of October 13 UTC. The unsupported historical alias claims and incomplete platform-channel accounting prevent clearing the block unchanged.

## Method and temporal boundary

Read the researcher brief, source contract and notes, dated profile, harvest, and repository editorial authorities. Independently listed GitHub releases, inspected official release objects and registry metadata, and used the separate blobless clone at `tmp/refresh-2026-10-13/clones/hermes-agent-verify`. Read tagged files and commit diffs as data. No upstream code, installer, test suite, or build was executed.

Dates below use UTC, matching the harvest's release ledger. Converted tagger offsets to UTC before counting attempt tags. This boundary matters: v0.22.0 was published at 2026-10-14T03:21:46Z, which is 2026-10-13T21:21:46 in America/Denver. Thus an end-of-day Denver interpretation would include v0.22.0. The profile must state its snapshot time or UTC cutoff; it must not present v0.21.7 as the latest release at every interpretation of October 13.

For each stated release boundary, independently ran `git merge-base --is-ancestor <commit> <tag>` against the claimed release and its preceding stable. Unless explicitly stated otherwise, "first stable" below means exit 0 at that tag and exit 1 at its predecessor. Also inspected production code at v0.21.7 for the principal approval, LSP, vault, sandbox, migration, and prior-default claims. Ancestry alone proves inclusion, not current behavior.

All harvest blob receipts use version tags, and its commit receipts identify commits. PR pages, issue pages, Actions runs, registry endpoints, advisory databases, and release bodies can change. I opened those surfaces but use their merge commits, tagged code, or immutable candidate-manifest hash for substantive claims. A PR URL alone does not satisfy the brief's pinning rule. Missing historical evidence is rejected rather than inferred from today's moving endpoint.

## Channel truth and release ledger

Independently read `gh release list`, release API objects, annotated tags, Docker Hub tag records, PyPI JSON, and the npm registry document. There are now 39 visible public releases, all non-prerelease; 38 were published by the UTC cutoff. The extra release is v0.22.0, not an overlooked October 13 UTC stable.

| Release | Published UTC | Commit | Ahead / behind previous stable |
| --- | --- | --- | --- |
| v2026.9.21, named v0.21.4 | 2026-09-21T18:10:55Z | `d337b736aa1e8ebecfab043842d13e4a2d2f48a3` | 5173 / 0 versus v2026.9.14 |
| v2026.9.24, named v0.21.5 | 2026-09-24T10:09:38Z | `f97608f178d1ffeca59860195ab7da295f7c8e5f` | 1638 / 0; 1610 non-merge |
| v0.21.6 | 2026-10-08T11:51:57Z | `818c13be1dc4fd28987e1e881a9408224afd4535` | 9180 / 0; 8867 non-merge |
| v0.21.7 | 2026-10-12T05:53:41Z | `71d34bad1045610252eda02ee79549436896e784` | 777 / 0; 754 non-merge |
| v0.22.0, after UTC cutoff | 2026-10-14T03:21:46Z | `e06df9c2eae6901f4c88f464e0ae6e753c0428b8` | 756 / 0 versus v0.21.7 |

All five releases are non-draft and non-prerelease. The stable ledger's dates, release names, and ancestry counts are correct. Primary records: [baseline](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.21), [v2026.9.24](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.24), [v0.21.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6), [v0.21.7](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7), [v0.22.0](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.0).

Installation corrections and limits:

- The source installer defaults to `main`; the official-origin updater defaults to stable from v0.21.7, with the implicit forward-only constraint described in section 4. A command selecting the moving stable channel today no longer selects v0.21.7. For historical reproduction, use commit `71d34bad1045610252eda02ee79549436896e784`. [Tagged installer](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/scripts/install.sh#L23-L25), [tagged channel policy](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/update_channel.py#L140-L200).
- VERIFIED: the v0.21.7 annotated tag binds Docker digest `sha256:444b42594e7f467425872fc35e077a227d377f0fe0726bc818706d62175fad8b`, and Docker's `rc.15-v0.21.7` tag has that digest, pushed 2026-10-12T03:31:03.018627Z. The version-named Docker `v0.21.7` endpoint returns 404. [Docker attempt record](https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/rc.15-v0.21.7), [release tag](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7).
- UNVERIFIABLE historical observation: the exact October 12 push times and October 13 values of Docker `stable` and `latest`, and the historical stable desktop pointer. The harvest contains no preserved payload of those moving endpoints. Today Docker `stable` and `latest` both report `sha256:c69536a39e885b8943329bda68cdf44492458b96aa74a212239bde9d2aeb406a`, pushed October 14; the desktop pointer now names v0.22.0. Do not use current responses to certify old values. [Docker stable](https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/stable), [Docker latest](https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/latest), [desktop stable pointer](https://hermes-assets.nousresearch.com/releases/stable/release-candidates.json).
- VERIFIED replacement evidence: the immutable [rc.15 candidate manifest](https://hermes-assets.nousresearch.com/releases/tag/rc.15-v0.21.7/release-candidates.json) hashes to `7ea37048fa5dc2d5b83c37242a97ccbff6e1c4d5dd939f893def615f3c03dbac`, matching the final tag. It lists macOS Apple silicon and Windows artifacts and four skipped native smoke results. This proves listed artifacts, not Store ingestion or installation success.
- CORRECTED platform scope: rc.15 has `includeMacosIntel: false` and `includeTermux: false`. v0.21.7 changed these stable builds to opt-in; the APT package can remain at an earlier release. Do not imply platform-version parity. The exact October 13 APT and Microsoft Store versions remain UNVERIFIABLE here. [Pinned build-policy change](https://github.com/NousResearch/hermes-agent/commit/5f9b77cce07870e5c0bce2dd42f4ae5d069f3d7e), [attempt tag object](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/ec0f68f50d19dd439ff0ed54b4acc764dadb4e50).
- VERIFIED: PyPI's highest version is still 0.19.0, uploaded 2026-07-20T18:37:26.417523Z for the wheel. npm `hermes-agent` identifies itself as the unofficial wyrtensi bridge. Its newest version published by the cutoff was 0.21.7, uploaded 2026-10-12T12:36:38.954Z. Today's npm `latest` is 0.22.0, published 2026-10-14T04:56:33.819Z. Publication history alone does not reconstruct an old npm dist-tag. [Versioned PyPI record](https://pypi.org/pypi/hermes-agent/0.19.0/json), [npm registry record](https://registry.npmjs.org/hermes-agent).

The immutable Docker records also confirm the older ledger entries: `v2026.9.21` was pushed 2026-09-21T18:17:10.136341Z and `v2026.9.24` at 2026-09-24T10:18:08.966841Z. `v0.21.6` points to `sha256:55e192fba0cd4fde61142abbff5adeacff40efdb482ccd0ff877924bd274f909`, pushed 2026-10-08T06:26:08.583023Z; the final release instead binds `sha256:9774f4f39a9bb8c2f68ce728ed5e99ddbad282163be56764afacf88ed952b784`, present under `rc.4-v0.21.6` at 11:09:00.673462Z. [Version-named record](https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/v0.21.6), [final-attempt record](https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/rc.4-v0.21.6).

The morning snapshot's 50 attempts, 51 abandoned markers, and main ahead by 302 are accurate only at its stated observation time. By October 13 23:59:59 UTC there were **52 attempt tags, 52 abandoned markers, and 19 canary tags**. Added `rc.1-v0.22.0` at 21:24:15Z, `abandoned-rc.1-v0.22.0` at 22:33:48Z, and `rc.2-v0.22.0` at 22:34:10Z. These were locks, not public prereleases. The latest main commit by that cutoff was `e06df9c2eae6901f4c88f464e0ae6e753c0428b8`, committed 22:07:03Z and 756 commits ahead of v0.21.7; it was released the following UTC day. Pinned tag-object receipts: [rc.1](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/8b8cf0f47f8aaacb0d01b213d7b46dd607af7b3b), [abandoned rc.1](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/0c3014a34334ab372b18be3e0ccb193e6eac1614), [rc.2](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/5f7059a40a642486d3096e31774d0fad53f9ca1d), [main commit](https://github.com/NousResearch/hermes-agent/commit/e06df9c2eae6901f4c88f464e0ae6e753c0428b8).

The October 13 canary remains `v0.21.7+canary.20261013T070740Z`, commit `63d0b94120027d487c9a5235b9ec64b696af1b26`, 279 commits beyond v0.21.7. The harvest's `ae3f9f9cb149a828ae61625bb9c84b7bae837a0f` is another 23 commits later, yielding its correct 302 total and 296 non-merge count. Preserve that timestamp if retaining that row.

## 1. Git-config execution floor: VERIFIED

Read the v0.21.6 security notes, PR #130661, the old v2026.9.24 assertion, the v0.21.7 helper and snapshot call site, and the production diffs for `c77a2dda9fc7e75b5a8462bafe16bae74383f6cc`, `803cd03521590fd99755e5417651ebc652c17ad9`, and `22a81ca50ae728256f564e9fb423327674eabb6c`. All three, and merge `6c5107592900aac96ed76bb13bbcc7358d50124e`, first reach stable in v0.21.6. PR merge time is 2026-10-01T19:54:44Z; stable publication is October 8, 2026.

The code supports repository-named filter discovery, bounded overrides, include-target inspection, and refusing the automatic Git operation when safe discovery fails. A delivered `.git/config` can supply commands that run under the operator's account during automatic Git work. The earlier fixed-key defense is insufficient for that mechanism. The described v0.21.6 floor holds for this defect. A terminal container setting by itself is not evidence that host-side startup Git calls execute inside that container.

Receipts read: [fixed helper](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/_subprocess_compat.py#L492-L535), [fail-closed caller](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/coding_context.py#L531-L536), [old assertion](https://github.com/NousResearch/hermes-agent/blob/v2026.9.24/hermes_cli/_subprocess_compat.py#L34-L41), [pinned merge](https://github.com/NousResearch/hermes-agent/commit/6c5107592900aac96ed76bb13bbcc7358d50124e). This is source verification, not an executed exploit reproduction.

## 2. Unattended gateway approval: CORRECTED

The principal defect and v0.21.7 release boundary hold. Independently checked `8918717b1ad2b52d1389756a3581a9860b98397b` and `71ff5238ec4643ddc6bddcfbc8be4b1cdd400684`: neither is in v0.21.6; both are in v0.21.7, committed on October 8, 2026. Read `_presence`, `_human_decision`, pending submission, the unattended command branch, the earlier gateway ask setting, and issue #100532.

Exact fixes:

- Replace the universal 300-second stall claim with: "Notifier-backed requests can wait for an approval timeout. With no notifier, the old API path returns a pending result for a request that the client cannot answer; that path does not itself wait 300 seconds."
- Replace "starts approving every flagged command" with: "Approves commands that reach the unattended-policy branch after earlier guard checks. User denies and applicable hard floors still take precedence; isolated-container, YOLO, disabled-approval, prepared-batch, and allowlist paths are separate."

The guardian could still approve commands that should have been decided by unattended policy. That security consequence survives. Receipts: [first fix](https://github.com/NousResearch/hermes-agent/commit/8918717b1ad2b52d1389756a3581a9860b98397b), [follow-up](https://github.com/NousResearch/hermes-agent/commit/71ff5238ec4643ddc6bddcfbc8be4b1cdd400684), [new presence logic](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942), [old decision path](https://github.com/NousResearch/hermes-agent/blob/v0.21.6/tools/approval.py#L827-L880), [guard ordering](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L1128-L1169).

## 3. Language-server workspace trust: CORRECTED

The automatic project-code execution finding and v0.21.6 boundary hold. Independently checked `f5c754d4365e17ff7c6e7c1c51808ec36f4d7cc9`, `59ec2811409479ade61ce451d77521b63a262529`, `e929702021f6db0cf348e2989989803dea678a4b`, and `da2b64304baec42c03152d0474e373fca6aec4a6`: all enter stable after v2026.9.24 and by v0.21.6. Read the diffs, eight-server allowlist, trust resolver, and tagged defaults.

Exact replacement: "Kanban gets no automatic operator workspace roots. Cron omits the job's session workspace from those roots but still considers the process launch directory. A nested clone is not automatically trusted merely because it sits inside an operator worktree; an explicit `lsp.trusted_workspaces` directory grants trust to paths beneath it, including nested clones."

This corrects both "scheduled work gets no automatic trust" and the unqualified nested-clone assertion. The eight untrusted-workspace servers and `lsp.enabled: True` are verified. Receipts: [initial fix](https://github.com/NousResearch/hermes-agent/commit/f5c754d4365e17ff7c6e7c1c51808ec36f4d7cc9), [trust resolver](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/lsp/workspace.py#L157-L193), [server allowlist](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/lsp/servers.py#L372-L389), [defaults](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2387-L2413).

## 4. Source updater channel: CORRECTED

Read the old branch resolver, v0.21.6 to v0.21.7 channel-policy diff, v0.21.7 update docs, installer, and `6a92a2aa4928175041e6bb04922d69d3f6e49eda`. First stable is v0.21.7. The commit was authored October 9 and committed October 10 UTC; release publication was October 12, 2026.

Replace "every source install tracked main" with "an unconfigured source updater defaulted to main; explicit branch selection already existed." Replace the GitHub-only description of stable resolution with "the official stable release record, with GitHub release fallback and tag verification." The official-origin default, fork/mirror exception, preserved explicit choice, and implicit forward-only behavior are supported. The installation script's default remains main at the audited tag.

Receipts: [policy change](https://github.com/NousResearch/hermes-agent/commit/6a92a2aa4928175041e6bb04922d69d3f6e49eda), [old explicit-branch resolver](https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/main_install_repair.py#L1275-L1277), [new policy](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/update_channel.py#L140-L200), [tagged update documentation](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/getting-started/updating.md#L33-L50).

## 5. Release receipts and skipped tests: CORRECTED

Independently read both final annotated tags, both successful attempt claims, the release workflow documentation, v0.21.6 publication commit, Actions run 38199200509 attempt 4 jobs, and the immutable rc.15 manifest. Both attempt claims set `skipTests: true`. rc.4-v0.21.6 also has `skipBundles: true`; rc.15-v0.21.7 has `skipBundles: false`. Docker digest mismatch and lack of a Docker `v0.21.7` tag are confirmed.

Exact fixes:

- "The v0.21.6 receipt has `candidateManifestSha256: null` because native bundles were skipped. v0.21.7 binds a non-null candidate-manifest hash." Do not imply both releases bound a built native manifest.
- "Source CI, install/update E2E, and native acceptance/smoke jobs were skipped. Docker build-and-test jobs concluded successfully; the skip-tests policy bypasses their test work." The harvest's claim that the Docker jobs themselves show skipped is false. Job logs were not inspected, so no independent assertion about every command executed inside those jobs is cleared.
- Use the final v0.21.7 tag, immutable attempt-tag object, and hashed candidate manifest. The `releases/tag/rc.15-v0.21.7` HTML route is a tag page, not evidence of a public prerelease; the release API for that tag returns 404.
- Update full-day attempt counts to 52/52/19 or preserve the explicit 09:56Z observation cutoff.

Receipts: [v0.21.6 publication commit](https://github.com/NousResearch/hermes-agent/commit/818c13be1dc4fd28987e1e881a9408224afd4535), [release policy](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/developer-guide/stable-releases.md#L102-L133), [Actions run](https://github.com/NousResearch/hermes-agent/actions/runs/38199200509/attempts/4), [rc.4 claim](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/99f94588c7dd458fbcc1cbc6db5beb2c2b871bf6), [rc.15 claim](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/ec0f68f50d19dd439ff0ed54b4acc764dadb4e50), [candidate manifest](https://hermes-assets.nousresearch.com/releases/tag/rc.15-v0.21.7/release-candidates.json).

## 6. Tirith removal: CORRECTED

Removal, prior default-on/fail-open settings, migrated key deletion, new upload/Unicode patterns, and the lack of a retained tirith catalog entry are verified. `911da42e9e03ba8594ab2af5dfd1e50e7e721e3e` and `68dd9927691e66058bf2347937e7dc276ceb50cd` were committed October 6, 2026 and first reach stable in v0.21.6. The transient catalog addition `945ffcd257ffb74a8c1faa9deb1929f5e2e9123f` was reverted by `1070b91da6aee3c9e889f319130ff501bf3ef6c8` before that release.

Replace "jobs ... will start passing" with "tirith-specific refusals disappear; other detectors, policy hooks, user denies, and unattended policy can still block those jobs." Keep 14/16, 12/24, 13/16 and 5/24 attributed to the removal author's small command corpus. They are not independently reproduced rates or a general security benchmark. Use the exact hook response syntax clarified in section 11.

Receipts read: [removal and vendor measurement](https://github.com/NousResearch/hermes-agent/commit/911da42e9e03ba8594ab2af5dfd1e50e7e721e3e), [replacement patterns](https://github.com/NousResearch/hermes-agent/commit/68dd9927691e66058bf2347937e7dc276ceb50cd), [new defaults](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1769-L1792), [old defaults](https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L1717-L1741), [Unicode detector](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval_detection.py#L347-L351).

## 7. Email sender authentication: VERIFIED

Read PR #125212, its production diff, v0.21.6 security notes, and the v0.21.7 parser/authentication implementation. Merge `6f7a7991bb069db07ae74a479823ce8310f8c7e0`, merged 2026-09-27T15:19:09Z, is absent from v2026.9.24 and present in v0.21.6 and v0.21.7.

The old display-name extraction could impersonate an allowlisted mailbox. Authentication-Results parsing also accepted misleading sender-controlled clauses and insufficiently aligned authentication assertions. The fixes support the stated unauthorized-command risk through the email gateway. The 23/40 result is explicitly the PR author's probe, not this verifier's experiment. Allow-all behavior must remain a separate qualification. The 404 advisory identifier establishes public inaccessibility, not an additional verified affected range.

Pinned receipts: [merge and diff](https://github.com/NousResearch/hermes-agent/commit/6f7a7991bb069db07ae74a479823ce8310f8c7e0), [tagged parser](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/email/adapter.py#L286-L296), [versioned security notes](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6). The mutable PR was read for its attributed probe and merge metadata.

## 8. Dashboard authentication fixes: CORRECTED

All four merges first reach stable in v0.21.6: `725c3ec4bc4283f73fce3e881e8187f4e30fb4e4`, `c83fe1b2c4eabe0765430b8e78e362247f0be37e`, `66fa864f1950fd57bec0df72dd94dec880621b8c`, and `ed4c35076b797bf93c09e611e4f129983dcdc2d3`. The first merged October 1, the others October 5, 2026. Read PR/release descriptions, their pinned changes, and current auth-gate and Basic Auth code. Login-code redirection can give an attacker the signed-in session; forged forwarded addresses evade throttling; oversized unauthenticated input can consume log/body resources. Tenable attribution is the vendor release's attribution, not an independently opened Tenable advisory.

Correct the remediation: "For Basic Auth, rotate the effective signing secret and restart to load it. `HERMES_DASHBOARD_BASIC_AUTH_SECRET` overrides the config secret; if neither is set, restart rotates the process-random key. This does not revoke sessions issued by other auth providers; use their revocation mechanism."

The universal non-loopback gate also has a credentialed Desktop-owned exception, and configured public URLs can trigger the gate even on loopback. Describe those conditions instead of saying it covers every remotely reachable deployment without qualification.

Receipts: [redirect fix](https://github.com/NousResearch/hermes-agent/commit/725c3ec4bc4283f73fce3e881e8187f4e30fb4e4), [throttling fix](https://github.com/NousResearch/hermes-agent/commit/c83fe1b2c4eabe0765430b8e78e362247f0be37e), [audit-log fix](https://github.com/NousResearch/hermes-agent/commit/66fa864f1950fd57bec0df72dd94dec880621b8c), [body-limit fix](https://github.com/NousResearch/hermes-agent/commit/ed4c35076b797bf93c09e611e4f129983dcdc2d3), [effective Basic Auth key](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/dashboard_auth/basic/__init__.py#L125-L202), [actual auth gate](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/web_server.py#L522-L565), [container entry point](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/docker/s6-rc.d/dashboard/run#L30-L46).

## 9. Sandbox placement and default image: CORRECTED

`399d9569036d6e85420635c2f54e0177fb8b8d45`, committed September 28, 2026, first reaches stable in v0.21.6. Read its placement/image changes, v0.21.7 defaults, and migration 48. The prior host-side screen/browser authority, new `auto` placement, explicit gateway fallback, and refusal for unsupported screen backends are supported.

Exact replacement for the upgrade consequence: "Fresh or replaced default containers use `nousresearch/hermes-sandbox:desktop`. Migration removes a copied legacy default from configuration, but an existing persisted Docker container is retained until the operator chooses Switch; gateway and cron paths keep it and report the pending choice. Explicit image pins are retained."

Thus upgrading does not invariably pull the larger image or rebuild an existing container. Do not let the image-size paragraph conceal that migration behavior. The image uses Python 3.13 and Node 26 rather than the former Python 3.11/Node 20 default. A moving Docker image-size observation is not a permanent property of that tag.

Receipts: [complete change](https://github.com/NousResearch/hermes-agent/commit/399d9569036d6e85420635c2f54e0177fb8b8d45), [placement defaults](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2518-L2543), [default image](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L8-L17), [migration](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_migrations.py#L634-L654).

## 10. Memory and integration extraction: CORRECTED

Independently compared tagged plugin trees and checked all listed removals. First stable: hindsight (`4cbf862a`) in v2026.9.24; honcho (`7e53b3ef`), supermemory (`87be434b`), mem0 (`781334ee`), openviking (`05eecbcd`), Home Assistant (`fb9fc8a3`), Skill Sync (`64ad33e3`) and the compatibility layer (`a5bd2468`) in v0.21.6; holographic (`cca83848`) and Spotify (`71704ffb`) in v0.21.7. MCP/skill activation `9039b690` first reaches v2026.9.24; mid-session skill indexing `ec78ae22` reaches v0.21.7. Langfuse extraction `cdf5732a` is absent from v0.21.7 and present in the October 13 canary. These are inclusion checks against the full objects, not guesses from commit dates.

Read the current migration implementation and the honcho, holographic, hindsight and mem0 catalog records. The maintainer, pin and mem0 telemetry disclosure are supported as catalog statements.

Exact fixes:

- "A home configured for a departed provider can receive its catalog plugin automatically. Startup recovery honors `security.allow_lazy_installs` and only assumes consent for formerly bundled providers. During an interactive update, dependency consent can still be requested; refused or failed installs remain possible."
- "The default `memory.provider` is empty, selecting built-in memory. Removing optional providers does not make a fresh default install run an external memory plugin."

Apply the second fix to the harvest's "Operator questions settled" answer too. Receipts: [migration and consent paths](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/memory_provider_migration.py#L168-L299), [built-in default](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1311-L1325), [honcho removal](https://github.com/NousResearch/hermes-agent/commit/7e53b3ef82c9074649230b572dfcc76d4b629058), [live activation](https://github.com/NousResearch/hermes-agent/commit/9039b690fc34b965b2614bea33d88b0216752aa0), [holographic catalog](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/holographic.yaml), [mem0 catalog](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/mem0.yaml), [Langfuse extraction](https://github.com/NousResearch/hermes-agent/commit/cdf5732af67c9c1784ba4857191c499c3f3b741e).

## 11. Hooks, YOLO and consent: CORRECTED

The release boundaries hold. `30b38d139b1fd91670e3b5bd88cd50f71287a12f`, `02ad41df3a33a5913c05d35ac33abbcc4376a570`, `ba5bec3f2c9ae2eceac81d3dc6841e67b808adf3` and `903c80ff1b7eec36a4cf79c2c63acdf56373071c` first reach v2026.9.24. `c42c90552ecb0f0062e91c8bc0a048c1b4d44ea5`, `447fb4955d1af040dd7b6da98aa71fe77fdb3fcc`, `b1a39a1b1bf135091ff3fd0020002bba35a9d456`, `762f419fe8374ea14b0d5c3ffedca7ad8ac02b9a`, and `2b525ced84297fe21e638d0aaa27b03acbe61051` first reach v0.21.6. Read the production diffs and v0.21.7 gateway-hook trust documentation.

Narrow the operator shorthand: "A shell hook returning `{"action":"approve"}` requests human approval from v2026.9.24. The distinct existing `{"decision":"approve"}` response means allow." A generic claim that an "approve answer" always asks a human is wrong. The stale-session global YOLO defect, batch re-gating, headless refusal, and placement-trusted gateway hooks otherwise survive.

Receipts: [exact response grammar](https://github.com/NousResearch/hermes-agent/commit/30b38d139b1fd91670e3b5bd88cd50f71287a12f), [stale-session fix](https://github.com/NousResearch/hermes-agent/commit/ba5bec3f2c9ae2eceac81d3dc6841e67b808adf3), [failed-batch fix](https://github.com/NousResearch/hermes-agent/commit/c42c90552ecb0f0062e91c8bc0a048c1b4d44ea5), [policy-change fix](https://github.com/NousResearch/hermes-agent/commit/447fb4955d1af040dd7b6da98aa71fe77fdb3fcc), [gateway-hook trust](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/user-guide/security.md#L931-L939). The separate exception-fails-open defect is miss M1 below.

## 12. Compaction default: VERIFIED

`98278833e29b167fe930e276eed7cb16bee68673`, committed September 28, 2026, is absent from v2026.9.24 and present in v0.21.6 and v0.21.7. Read the default comparison and migration 47. The absolute 256000 cap becomes unset; the ratio remains 0.50; migration removes only an exactly seeded 256000 value. The old small-window ratio floor explains the approximate 341K crossover stated in the harvest; it is not a 512K arithmetic error.

The consequence is a higher configured pre-compaction threshold on 1M-context models, not an observed doubling of spend or guaranteed usable context. The harvest presents it as a potential input-size increase, which is supported. Receipts: [change and migration](https://github.com/NousResearch/hermes-agent/commit/98278833e29b167fe930e276eed7cb16bee68673), [new defaults](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L577-L594), [old defaults](https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L553-L571).

## 13. Advisory coverage: CORRECTED

Independently queried the repository advisory endpoint, global GitHub advisory API for `affects=hermes-agent`, all 17 listed unresolved identifiers, and NVD. The repository returned an empty public list. The newest matching public GitHub records were published June 17, 2026. All 17 listed IDs returned HTTP 404 at verification time:

`GHSA-2fmg-cjqm-hhrj`, `GHSA-3vpc-7q5r-276h`, `GHSA-5g4g-6jrg-mw3g`, `GHSA-5qr3-c538-wm9j`, `GHSA-76xc-57q6-vm5m`, `GHSA-7x36-8jrh-v4pw`, `GHSA-96vc-wcxf-jjff`, `GHSA-fr3q-rjg3-x6mf`, `GHSA-gpxw-6wxv-w3qq`, `GHSA-jmf9-9729-7pp8`, `GHSA-m4m8-xjp4-5rmm`, `GHSA-mcfc-hp25-cjv7`, `GHSA-ppp5-vxwm-4cf7`, `GHSA-qg5c-hvr5-hjgr`, `GHSA-rhgp-j443-p4rf`, `GHSA-rxqh-5572-8m77`, `GHSA-xf8p-v2cg-h7h5`.

Exact replacement: "No newer public Hermes entry was found in the queried GitHub advisory surfaces. Seventeen source-cited IDs were inaccessible. NVD contains a September GitSpawn CVE, and this search found no new Hermes-product CVE published in the UTC window. These observations do not establish complete coverage of OSV, Dependabot, every ecosystem alias, private advisories, or every vendor disclosure."

REFUTED as written: "No Hermes advisory ... since June" across all sources, "Dependabot, OSV ... will not tell you to upgrade," "the vendor has given none," and "no CVE or advisory exists" for an issue. These are broader than the inspected evidence. The exact exhaustive 32-total/15-dependency ID census was not independently established and is not cleared for publication. The verified result is 17 specified 404 responses, not a proof that no advisory exists.

NVD's [CVE-2026-71963](https://nvd.nist.gov/vuln/detail/CVE-2026-71963), published September 3, 2026, describes repository-controlled Git configuration executing commands as the Hermes user and exposing credentials. Its VulnCheck-provided range is 0.18.2 through 0.21.0 with fix `f6234d0`. It describes the earlier fixed-key issue; do not transplant that range onto the later filter-driver bypass. The record was Deferred, not an independent NVD validation of the affected range.

The October 10 [CVE-2026-108593](https://nvd.nist.gov/vuln/detail/CVE-2026-108593) concerns 9router: an authenticated dashboard user can inject Hermes configuration via a crafted base URL, enable auto-accepted hooks, and cause command execution. It is correctly excluded as a new Hermes-product defect. August [CVE-2026-82020](https://nvd.nist.gov/vuln/detail/CVE-2026-82020) concerns overwriting Hermes credentials through file tools; [CVE-2026-82021](https://nvd.nist.gov/vuln/detail/CVE-2026-82021) concerns code execution through a mutable MCP catalog after upstream compromise. Both predate this window.

Receipts read: [repository advisories](https://github.com/NousResearch/hermes-agent/security/advisories), [global filtered API](https://api.github.com/advisories?affects=hermes-agent&per_page=100), [tagged unresolved Telegram reference](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/telegram/adapter.py#L3096-L3110), [tagged webhook reference](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/platforms/webhook.py#L370-L380). Advisory pages are mutable public records; inaccessible IDs are not usable receipts for a bug mechanism or range.

## 14. Browser vault default: VERIFIED

Read both baseline and v0.21.7 toolsets, browser availability checks, defaults, 1Password backend, and vault list/fill/unlock paths. The five vault tools ride with available browser tooling. The local vault and detected managers are enabled by default; real-profile browsing is not. A scoped 1Password service-account token makes the backend report unlocked without a human prompt. Login fills remain item-origin-bound; payment confirmation is separate. This supports correcting the old opt-in claim, including headless access within the token's actual vault permissions and available item URLs.

The later consolidation `3bf97898ac0ecfc8190202cae390c84004b0240f` is absent from v0.21.7 and present in the October 13 canary, as claimed. Receipts: [v0.21.7 toolset](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/toolsets.py#L11-L22), [baseline toolset](https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/toolsets.py#L21), [manager defaults](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2446-L2464), [token unlock condition](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/vault_backends/onepassword.py#L30-L71), [fill implementation](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/browser_vault_tool.py), [canary consolidation](https://github.com/NousResearch/hermes-agent/commit/3bf97898ac0ecfc8190202cae390c84004b0240f).

## 15. PyPI/Homebrew retirement: CORRECTED

Independently checked registry identity/upload history and `d84e11af4d9927c41ad0a3b4db72042cca250c64`, merged 2026-07-22T20:51:02Z. It is absent from v2026.7.20 and present in v2026.7.30 and v0.21.7. The distribution retirement is real and predates the window, so this is a correction to the old profile. Current installation documentation does not restore those channels.

Replace "Any host that installed Hermes with pip or uvx is on 0.19.0 and will not be told" with "A fresh unpinned install from the public PyPI package resolves to 0.19.0. Existing installs may be older, pinned, editable, or sourced from Git. Inspect both version and origin before replacing them." The retirement commit explicitly preserves source/development workflows. Installer choice alone cannot identify the installed version or every notification path.

Receipts: [retirement change](https://github.com/NousResearch/hermes-agent/commit/d84e11af4d9927c41ad0a3b4db72042cca250c64), [versioned PyPI record](https://pypi.org/pypi/hermes-agent/0.19.0/json), [v0.21.7 installation guide](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/getting-started/installation.md).

## Prior claims re-checked at v0.21.7

These are independent spot checks of the consequential holds, not blanket approval of every carry-forward bullet.

| Prior claim | Verdict and current evidence |
| --- | --- |
| GitSpawn floor | CORRECTED: the original fixed-key overrides remain, but filter-driver coverage first arrives in v0.21.6. Section 1 receipts. |
| Unattended deny; deny list in containers | VERIFIED with scope: default unattended policy is deny; pure isolated-container fast paths still check user denies, then approve. Host-access containers use the normal flow. The gateway defect is fixed in v0.21.7. [Current gate](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L1128-L1169). |
| Who approves; guardian errors | VERIFIED as code/defaults: smart mode, timeout 300, breaker 3; guardian errors and empty decisions log and escalate. This does not promise human approval for every tool. [Defaults](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1665-L1700), [failure handling](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval_smart.py#L116-L131). |
| Unlimited parent; delegation limits | VERIFIED: parent turn and time budgets are unset; child max iterations 250, concurrent children 10, one-shot children 2; subagent auto-approve is false. [Parent defaults](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L75-L88), [delegation defaults](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1354-L1390). |
| Vault and real-profile browsing | CORRECTED exactly as section 14: the vault is not opt-in. This is a default with a direct credential-authority consequence. |
| Multiplex email and webhook route isolation | VERIFIED for the named paths: email uses scoped reads; webhook policy keys use authenticated `user_id`. This is not proof of all profile isolation; M2 and M3 show additional leaks fixed in the window. [Email](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/email/adapter.py#L761-L767), [webhook](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/platforms/webhook.py#L370-L380). |
| Own-policy adapters fail closed | VERIFIED for the intake path inspected, not a universal claim about every adapter. [Current authz gate](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/authz_mixin.py#L460-L480). M4, M5 and M7 require separate treatment. |
| Memory/skill writes and curator | VERIFIED defaults: write approval is false, nudge interval 10; project discovery true, trusted project dirs empty, inline shell false, agent-created-skill guarding false; weekly curator enabled, consolidation and built-in pruning false. These are not evidence that every runtime scan executes. [Memory](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1311-L1325), [skills and curator](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1454-L1512). |
| Plugin isolation and updates | VERIFIED defaults: isolation is `in_process`, auto-apply false. An opt-in child process is not by itself an OS sandbox. [Defaults](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1717-L1755). |
| Secret redaction on by default | VERIFIED as a default only. M10 fixes a path that leaked URL credentials despite redaction being on. [Default](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1769-L1792). |
| Service watchdog | VERIFIED only for `systemd_watchdog_seconds: 0`. Do not generalize that to every startup or loop watchdog. File presence alone does not verify restart/readiness behavior. [Current config](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/config.py#L616). |

REFUTED as sufficient re-verification: the "holds by ancestry" conclusions for `three-approval-fixes-in-v2026-8-19`, `skill-scan-on-pull-tagged`, and `steer-stop-and-update-honesty-tagged`. The harvest admits not rereading the scanner, and inherited commits or current config do not establish that the specific current callers still enforce those contracts. Downgrade those holds to "could not verify" until current implementations are traced. Likewise, module presence alone does not clear the functional Kanban durability, provider extensibility, or service-readiness claims. This rejects their evidentiary status, not the existence of those features. Preserve the existing "could not verify" for credential-pool fallback isolation.

The memory migration and advisory carry-forward answers need the same corrections as sections 10 and 13. Do not repeat "default install runs catalog memory code" or a universal absence of advisories in a summary after fixing the numbered section.

## Misses in the UTC window

The following omissions are material under the source contract's permission, memory, toolset, messaging, cron, sandbox, replay, and runtime-portability patterns. I read each cited production diff and independently checked its release ancestry. Dates here are commit dates converted to UTC; channel is the first published stable containing the fix. None of these receipts depends on a social post.

### M1. A crashing policy plugin could fail open

2026-09-22; `tagged-release`, first v2026.9.24. A raising `pre_tool_call` callback previously logged its failure without vetoing the tool, so a broken security guard could let the tool execute. The fix returns a block directive on policy-hook exceptions in both dispatch paths. Operators using guard plugins need the fix and should inspect callback failures, separately from the shell response-parser correction in section 11. [Pinned fix](https://github.com/NousResearch/hermes-agent/commit/89de6083171d0f70e5356bef05105231344e371d), [retained sync enforcement](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/plugins_dispatch.py#L215-L245), [retained async enforcement](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/plugins_dispatch.py#L511-L520).

### M2. Foreign profile homes could borrow process credentials

2026-09-23; `tagged-release`, first v2026.9.24. With multiplexing off, a missing secret in a routed foreign home could fall back to the launch process environment. Desktop, cron, MCP and kanban work could therefore use another home's credential. The fix binds scope provenance and denies that fallback for routed homes. Audit profile-specific runs and credential use; the earlier email-scope fix did not cover this path. [Pinned fix](https://github.com/NousResearch/hermes-agent/commit/2c3a75beaaf0fabc5a5dcc932d57f4be70efa3d5), [current secret read](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/secret_scope.py#L219-L247).

### M3. An Anthropic-labeled custom endpoint could receive vendor credentials

2026-09-23; `tagged-release`, first v2026.9.24. A foreign endpoint using Anthropic routing could trigger refresh of real Anthropic credentials; the prior string-based host check could also be fooled by the vendor hostname appearing elsewhere in the URL. The fix restricts credential use using the parsed hostname. Review custom model/base-URL routes and rotate credentials if logs establish exposure. [Pinned routing fix](https://github.com/NousResearch/hermes-agent/commit/a4d8f173a9c4bd287f57ab64c95a9646caede20d).

### M4. SimpleX display names were not authenticated identities

2026-09-27; `tagged-release`, first v0.21.6. A contact could rename itself to an allowlisted display name and obtain the sender's access. The adapter now uses numeric `contactId` matching. This is also a breaking allowlist migration: replace display-name entries with IDs. The commit's earlier author date does not move its first stable before this window. [Pinned fix](https://github.com/NousResearch/hermes-agent/commit/467046753420c40aba05a118e5ffd5061e42f481).

### M5. Network-exposed A2A with an empty peer list now refuses dispatch

2026-10-01; `tagged-release`, first v0.21.6. A remotely bound, token-authenticated A2A adapter with no trusted-peer list previously accepted peers after authentication. It now refuses dispatch unless peers are configured or allow-all is explicitly selected. This is not an unauthenticated Internet bypass: bearer/peer-token authentication remains a precondition. Operators must populate the peer list instead of treating an empty list as deny. [Pinned fix](https://github.com/NousResearch/hermes-agent/commit/a0cad39f5d55a2c7e2f0cbea2198358b5a3d55b0), [current conditions](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/a2a/security.py#L74-L115).

### M6. An explicitly empty toolset could expand to default tools

2026-10-06; `tagged-release`, first v0.21.6. Desktop/TUI `cli: []` could become an unspecified toolset, enabling defaults. Per-job cron `[]` could similarly disappear during storage/dispatch, including unintended MCP availability. The fix preserves explicit emptiness through those paths. Review restricted jobs and sessions created before the fix; an empty policy was not reliably zero authority. [Pinned end-to-end fix](https://github.com/NousResearch/hermes-agent/commit/b4969d8e2d0954b1938492b2f0a90321737f9164).

### M7. Blank signing secrets across three messaging inputs

2026-10-07; `tagged-release`, first v0.21.6. Webhook, Twilio SMS, and LINE paths now reject blank or whitespace-only authentication secrets. A guessable empty/whitespace HMAC key lets an attacker construct a valid signature for forged inbound messages. This does not imply bypass of a valid random secret. Operators should check configured secrets and upgrade before exposing these receivers. Pinned fixes: [webhook](https://github.com/NousResearch/hermes-agent/commit/8ec668b3cc8b9289d63f02fa6abca3d67e993eb3), [Twilio](https://github.com/NousResearch/hermes-agent/commit/84cb790e6425f3ef53aab893dce59ba707cb27da), [LINE](https://github.com/NousResearch/hermes-agent/commit/a560ba0b0842f0cd572bade054414667258727e3).

### M8. Profile export and distribution import exposed credential stores

2026-10-03; `tagged-release`, first v0.21.6. Export exclusions missed service-account files, OAuth/vault/browser state, and copied OS credential stores. Distribution installation also needed protection against replacing private nested stores such as pairing/session data. The fixes expand exclusions and prevent imported distributions overwriting those user-owned paths. Inspect previously shared archives and rotate credentials actually included; upgrade before producing or accepting another profile distribution. Pinned fixes: [profile credential inventory](https://github.com/NousResearch/hermes-agent/commit/9c18f8c28ce271a1351a8d105e8e76080120818e), [nested import protection](https://github.com/NousResearch/hermes-agent/commit/8c1adb7d6dfb7773d705fbac41ee173ffe1ec2f7), [OS credential exclusions](https://github.com/NousResearch/hermes-agent/commit/9dfb2b27b30ef823c963a7943ed9d6f8a73d2b02), [retained private-path inventory](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/profiles.py#L148-L182).

### M9. Local filesystem permissions exposed browser and media state

2026-10-01; `tagged-release`, first v0.21.6. With a traversable Hermes home, ordinary 0755/0644 creation modes could expose browser profiles, screenshots, and media to other local users. The fix uses private directories/files where supported. Managed group-sharing has an explicit exception, and POSIX mode handling is not a Windows ACL guarantee. Shared-host operators should inspect actual ownership/modes and retained state. [Pinned permissions fix](https://github.com/NousResearch/hermes-agent/commit/6c3aae398adeb021bd598c61be2f7b0a460f6cf9).

### M10. Diagnostic bundles could leak credentials embedded in URLs

2026-09-29; `tagged-release`, first v0.21.6. Dump/debug output could retain base-URL userinfo and query tokens even when strict redaction was requested. The fix sanitizes those URL credentials. The prior redaction default still holds but did not protect every serialization path. Inspect already-shared bundles and revoke exposed tokens where applicable. [Pinned redaction fix](https://github.com/NousResearch/hermes-agent/commit/205d5d78f1ff8a20701555bff26e107df48d5b92).

### M11. Resumed conversations lost or corrupted signed reasoning

2026-10-11; `tagged-release`, first v0.21.7. Anthropic replay could discard the latest assistant thinking after resume; Bedrock replay could lose signatures for non-Claude reasoning, causing request validation errors; streamed reasoning could be duplicated. The fix preserves provider-appropriate reasoning/signature records. This directly affects whether a long-running conversation can resume, not just transcript appearance. [Pinned replay fix](https://github.com/NousResearch/hermes-agent/commit/79b45d1647f6b5680768d851c4c406e8cc550a1e).

### M12. Unwritable cron stores gain explicit degraded-state reporting

2026-10-07; `tagged-release`, first v0.21.6. Store write failures could skip jobs while leaving the operational failure mainly in logs. The scheduler now records degraded health and skipped counts, probes recovery, and can notify the owning home's channel on failure and recovery, respecting alert opt-outs. Operators get an actionable storage failure instead of assuming a quiet scheduler succeeded. This is not an exactly-once execution guarantee. [Health-state fix](https://github.com/NousResearch/hermes-agent/commit/759b1c34adb5c1be2ac5eeea50d6b2f4f52c9d7a), [owner notification fix](https://github.com/NousResearch/hermes-agent/commit/91fc7badafd2ab345aec8b4ac64c06460f30c017).

### M13. Vercel backend changes its default runtime image

2026-09-28; `tagged-release`, first v0.21.6. Fresh sandboxes use `vercel/sandbox/universal:latest` and the new `terminal.vercel_image` setting. Migration removes copied `node24` defaults while retaining other explicit choices; restored snapshots do not receive a fresh runtime/image argument. This is a distinct backend default change from the desktop-container story. Operators comparing environments need to record the resolved image or preserve an intentional pin. [Pinned runtime and migration change](https://github.com/NousResearch/hermes-agent/commit/7c799a6565dca33ad8774cb01efb17f88a8c7c43).

### M14. Voice turns default to no reasoning, or the provider's lowest valid level

2026-10-07; `tagged-release`, first v0.21.6. The voice auxiliary route defaults `reasoning_effort` to `none`, with provider-compatible fallback and scoped rejection state. This changes the latency/reasoning trade for voice use without changing the ordinary text route's configured reasoning. Do not infer a measured latency improvement from the setting alone. [Pinned default change](https://github.com/NousResearch/hermes-agent/commit/98a6dcf586788dc16f25cac1ce40edc6259dd108), [current voice default](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L788-L790).

### M15. Intel macOS and Termux stable artifacts become opt-in

2026-10-11; `tagged-release`, first v0.21.7. Stable release builds omit these targets unless explicitly requested. rc.15 sets both inclusion flags false, so the omission occurred in the audited release. Operators cannot infer the Termux package or Intel desktop version from the newest GitHub stable. Exact APT and Store feed versions were not recovered. [Pinned release-policy change](https://github.com/NousResearch/hermes-agent/commit/5f9b77cce07870e5c0bce2dd42f4ae5d069f3d7e), [actual attempt claim](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/ec0f68f50d19dd439ff0ed54b4acc764dadb4e50).

### M16. Late October 13 release attempts and main position

2026-10-13; `main-unreleased` plus release-attempt tags, not stable or published prerelease at the UTC cutoff. Add the two v0.22.0 attempts, one abandoned marker, and end-of-day main position documented in the channel audit, or label the entire harvest as the 09:56Z snapshot. A morning observation cannot silently stand in for a full inclusive day. [First attempt object](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/8b8cf0f47f8aaacb0d01b213d7b46dd607af7b3b), [second attempt object](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/5f7059a40a642486d3096e31774d0fad53f9ca1d), [source commit](https://github.com/NousResearch/hermes-agent/commit/e06df9c2eae6901f4c88f464e0ae6e753c0428b8).

No core license-file change was found between the baseline and the last in-window source commit. No new Hermes-product advisory was found in the queried window surfaces. These are bounded search results, not assurances that every security issue was disclosed or every third-party plugin license stayed unchanged.

## Rule checks and publication gate

- Pinning: tag/SHA code receipts pass. Supplement PR-only support with the pinned merges above. Replace moving desktop-pointer proof with the manifest whose hash is bound by the release tag. Historical registry aliases require a preserved dated observation or an explicit unverified label.
- Channel/date: stable ancestry checks pass for the numbered mechanisms. Correct full-day tag counts, distinguish author/merge/publication dates, and state the UTC cutoff. Do not promote the October 13 canary-only changes to v0.21.7.
- Security wording: describe what the bug allows, its preconditions, and the specific fixed channel. An unresolved GHSA identifier is not a disclosure. NVD affected ranges belong to the named issue and issuing record, not to every later bypass in the same class.
- Marketing versus substance: removal measurements remain attributed vendor observations. Neither "tested Docker image" nor "fully supported" Windows proves acceptance on the skipped-test release. Catalog descriptions establish the catalog's claims, not an independent audit of external plugin behavior.
- Social evidence: no social quotation is used as proof. The leaner-core interpretation must rest on the tagged removals. Do not carry a social slogan into a product claim.
- Re-check standard: reject holds based only on ancestry, directory presence, or a config default when the claim concerns enforcement or runtime behavior. Keep the prior-claim gaps explicit.

Only this crosscheck file was written in the repository. The harvest was not edited. No repository-writing Git command, site build, npm installation, or execution of cloned code was performed.
