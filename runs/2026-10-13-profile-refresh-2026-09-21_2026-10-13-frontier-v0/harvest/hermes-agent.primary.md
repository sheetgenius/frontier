---
schema_version: bitter.frontier_harvest.v0
provider: hermes-agent
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/hermes-agent.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased]
window_volume: "3 new stable releases; 0 public GitHub prereleases; 52 attempt tags, 52 abandoned markers and 19 canary tags by 2026-10-13T23:59:59Z; 31 numbered sections, including 2 corrections to prior posture"
lane: primary sources, corrected write-up author record
---

# Harvest: hermes-agent (primary sources)

Temporal boundary: 2026-10-13T23:59:59Z, UTC. The initial researcher snapshot was 09:56Z; section 31 adds the remainder of the day. v0.22.0 was published at 2026-10-14T03:21:46Z, outside this UTC window, although October 13 in America/Denver. All install answers below are dated to the UTC cutoff, not the date this file was edited.

Identity: NousResearch/hermes-agent is the vendor repository, default branch main, official homepage https://hermes-agent.nousresearch.com. Tagged files, pinned diffs and release ancestry are source evidence, not executed behavior. The independent verifier used tmp/refresh-2026-10-13/clones/hermes-agent-verify. The write-up author read cached diffs and tag objects with GIT_NO_LAZY_FETCH=1 and GIT_OPTIONAL_LOCKS=0, fetched primary receipts into memory only, and executed no upstream code.

## Install today

**Newest stable at the UTC cutoff: v0.21.7**, published 2026-10-12T05:53:41Z, non-draft and non-prerelease, source commit 71d34bad1045610252eda02ee79549436896e784: https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7. The final annotated tag binds rc.15-v0.21.7, manifest SHA256 7ea37048fa5dc2d5b83c37242a97ccbff6e1c4d5dd939f893def615f3c03dbac and Docker digest sha256:444b42594e7f467425872fc35e077a227d377f0fe0726bc818706d62175fad8b (section 5).

- **Source, Linux/macOS/WSL2:** the official installer defaults to main, not stable (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/scripts/install.sh#L23-L25). At this cutoff, `hermes update --set-channel stable` explicitly selects v0.21.7; implicit stable update selection from v0.21.7 preserves an ahead-of-stable source commit until a release passes it. For historical reproduction use installer argument `--commit 71d34bad1045610252eda02ee79549436896e784`, rather than the moving stable channel (section 4). These are documented commands, not commands run during this research.
- **Docker / Hermes Cloud:** release notes direct operators to nousresearch/hermes-agent:stable. For a reproducible v0.21.7 Docker install use nousresearch/hermes-agent@sha256:444b42594e7f467425872fc35e077a227d377f0fe0726bc818706d62175fad8b. The checked rc.15-v0.21.7 record carries that digest; no version-named v0.21.7 image was found. The v0.21.6 version-named image differs from its final receipt (section 5). Historical stable/latest alias payloads were not preserved and are not cleared as dated facts. Hermes Cloud update mechanics were not traced.
- **Desktop:** the immutable rc.15 candidate manifest, whose hash matches the final tag, lists macOS Apple silicon DMG/ZIP and Windows artifacts, with four skipped native smoke results: https://hermes-assets.nousresearch.com/releases/tag/rc.15-v0.21.7/release-candidates.json. Listing is not installation success or Microsoft Store ingestion. rc.15 omitted Intel macOS and Termux APT; both stable build targets became opt-in (section 30). Exact October 13 Store/APT feed versions were not recovered.
- **Nix:** best-effort per tagged installation docs. **PyPI/Homebrew:** retired in July; fresh unpinned public PyPI resolves to 0.19.0. Existing pip/uv installs require version/origin inspection (section 15). npm hermes-agent is an unofficial wyrtensi bridge, not a vendor channel; the newest version published by the cutoff was 0.21.7, but this does not reconstruct an old dist-tag.

Preview and main:

- **Canary:** 19 daily tags during this window, not public GitHub release objects; newest v0.21.7+canary.20261013T070740Z, source 63d0b94120027d487c9a5235b9ec64b696af1b26, 279 commits beyond v0.21.7. The documented separate app command is hermes-canary: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/getting-started/updating.md#L72-L77. Exact canary distribution feed state was not recovered.
- **Attempt refs:** 52 locks and 52 abandoned markers by the full UTC cutoff. They are not published prereleases. Two v0.22.0 attempts arrived late on October 13 (section 31).
- **Main:** e06df9c2eae6901f4c88f464e0ae6e753c0428b8, committed 2026-10-13T22:07:03Z, was 756 commits ahead of v0.21.7 at the cutoff. The earlier 09:56Z snapshot, ae3f9f9cb149a828ae61625bb9c84b7bae837a0f, was 302 ahead (296 non-merge). Langfuse extraction, deferred browser_vault consolidation and connectors-only guest tokens were already in the October 13 canary, not v0.21.7; the first two are in sections 10 and 14. Guest-token receipt: https://github.com/NousResearch/hermes-agent/commit/ea45ec393672.

Consequential defaults at v0.21.7, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py:

- agent.max_turns=None and agent.run_budget_seconds=None (L75-L88); unset parent limits.
- approvals.mode=smart, timeout=300, denial_breaker_threshold=3 (L1665-L1700); guardian failure logs/escalates, not universal human approval (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval_smart.py#L116-L131).
- lsp.enabled=True; explicit trusted_workspaces grant descendant trust (L2387-L2413, section 3).
- browser.use_real_profile=False (L455); browser vault availability is default-on where browser tooling is available (section 14).
- memory.provider is empty for built-in memory; memory/skill write_approval=False, nudge_interval=10; project discovery=True, trusted_project_dirs=[], inline_shell=False and guard_agent_created=False (L1311-L1325, L1454-L1482). Weekly curator enabled, consolidate=False and prune_builtins=False (L1494-L1512). These establish defaults, not a proof of every runtime scanner path.
- plugins.isolation=in_process, auto_apply=False (L1717-L1755); host process isolation is opt-in, not an OS sandbox by itself.
- proxy.enabled=False (L2596); compression.threshold_tokens=None, ratio=0.50 (section 12).
- systemd_watchdog_seconds=0 (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/config.py#L616); this does not settle every startup/loop watchdog.

## Release ledger

Stable means a non-draft, non-prerelease GitHub release. Counts include merges and are independent read-only ancestry checks. Release API timestamps, not body-local dates, anchor publication. Full-day source state follows the late attempt objects in section 31.

| Tag | Name | Published UTC | Commit | Ahead / behind preceding stable |
| --- | --- | --- | --- | --- |
| v2026.9.21 | v0.21.4, baseline | 2026-09-21T18:10:55Z | d337b736aa1e8ebecfab043842d13e4a2d2f48a3 | 5173 / 0 versus v2026.9.14 |
| v2026.9.24 | v0.21.5 | 2026-09-24T10:09:38Z | f97608f178d1ffeca59860195ab7da295f7c8e5f | 1638 / 0; 1610 non-merge |
| v0.21.6 | Hermes Agent v0.21.6 | 2026-10-08T11:51:57Z | 818c13be1dc4fd28987e1e881a9408224afd4535 | 9180 / 0; 8867 non-merge |
| v0.21.7 | Hermes Agent v0.21.7 | 2026-10-12T05:53:41Z | 71d34bad1045610252eda02ee79549436896e784 | 777 / 0; 754 non-merge |
| October 13 canary | no public GitHub release | tag 2026-10-13T07:07:42Z | 63d0b94120027d487c9a5235b9ec64b696af1b26 | 279 / 0 versus v0.21.7 |
| cutoff main | unreleased in this window | commit 2026-10-13T22:07:03Z | e06df9c2eae6901f4c88f464e0ae6e753c0428b8 | 756 / 0 versus v0.21.7 |

All three new stable release bodies defer curated notes to v0.22.0; v0.21.6 carries Security Fixes. The baseline is not a new window event. v0.22.0 publication is outside the UTC cutoff and is used only to establish that boundary. Source APIs for publication were fetched again on 2026-10-14 without writing their payloads to disk.

## 1. The git-config floor moves to v0.21.6: a repository's own clean/smudge/process filters still ran before the first prompt

- **Date:** 2026-10-08
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR #130661 (merged 2026-10-01T19:54:44Z, merge 6c5107592900aac96ed76bb13bbcc7358d50124e) and its commits on main c77a2dda9fc7 (adds `noninteractive_repo_git_env`), 803cd0352159 (session snapshot and subagent worktrees) and 22a81ca50ae7 (includeIf targets) are ancestors of v0.21.6 and v0.21.7 and not of v2026.9.24. Public report: issue #126017, opened 2026-09-28T05:26:55Z. At v2026.9.24, hermes_cli/_subprocess_compat.py L34-41 still asserts smudge/clean filters "are neutralized by the env layer"; at v0.21.7, L492-530 discover and override them. No GHSA id; the v0.21.6 "Security Fixes" section is the only vendor statement.
- **Receipt:** https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6, https://github.com/NousResearch/hermes-agent/commit/6c5107592900aac96ed76bb13bbcc7358d50124e, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/_subprocess_compat.py#L492-L530, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/coding_context.py#L531-L536, https://github.com/NousResearch/hermes-agent/blob/v2026.9.24/hermes_cli/_subprocess_compat.py#L34-L41
- **Half:** defect | **Confidence:** high

**What changed.** The v2026.9.7 fix for the GitSpawn class (f6234d00) pinned fixed git config keys such as core.fsmonitor, core.hooksPath, pager, editor and credential helper. It could not pin filter drivers, because a repository names those itself in .gitattributes. A `filter.<name>.clean`, `smudge` or `process` command in the repository's own .git/config, or in a file it includes, therefore still ran whenever Hermes read or checked out the index on its own: the session-start workspace snapshot (`git status`), kanban and subagent worktrees, worktree cleanup, delegation recovery hints, `hermes -w` and the TUI file picker. The v0.21.6 notes say this could happen before the first prompt. v0.21.6 discovers the repository's filter keys with one bounded probe, overrides each to a no-op, reads includeIf targets directly, and skips the automatic git call when discovery cannot be trusted (nested includes, unreadable targets, more than 256 filter keys). The precondition matches GitSpawn: a directory delivered with its .git intact (an archive, a synced folder), since `git clone` does not copy a remote's .git/config. The bug was public from 2026-09-28, fixed on main 2026-10-01, and first tagged 2026-10-08.

**Operator consequence.** The floor for opening Hermes in any directory you did not create or clone yourself is v0.21.6, not v2026.9.7; v2026.9.21 and v2026.9.24 are exposed. Upgrade before using the CLI, a Desktop project, `hermes -w` or kanban in an archive-delivered checkout, and isolate the entire Hermes process when opening untrusted checkouts. A terminal container setting alone does not establish that host-side startup Git runs in that container. Expect some repositories to lose automatic snapshots and worktrees on v0.21.6+, by design, when filter discovery fails closed. This is the second fix for the same class in five weeks; the durable rule is that a directory's .git/config is code.

## 2. Unattended deny did not apply inside a running gateway until v0.21.7: webhook turns reached the guardian model and no-notifier API requests could return unanswerable pending results

- **Date:** 2026-10-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** 8918717b1ad2b52d1389756a3581a9860b98397b (authored 2026-09-27) and 71ff5238ec4643ddc6bddcfbc8be4b1cdd400684 (authored 2026-09-28), committed to main 2026-10-08, are ancestors of v0.21.7 and not of v0.21.6. Issue #100532 opened 2026-09-01, closed 2026-10-08. Prior behavior read at tags: `_presence` keeps `is_ask` for unattended platforms (tools/approval.py L934-948 at v2026.9.21; L910-921 at v0.21.6); `start_gateway` sets HERMES_EXEC_ASK=1 process-wide (gateway/run.py L5707 at v2026.9.21, L32602 at v2026.8.31); the unattended branch runs only when `not is_ask` (tools/approval.py L1155 at v0.21.7, same shape at v2026.8.31). At v0.21.7 `_presence` drops `is_ask` for unattended sessions with no notifier and always for webhook and msgraph_webhook (tools/approval.py L910-942; tools/approval_context.py L155).
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/8918717b1ad2b52d1389756a3581a9860b98397b, https://github.com/NousResearch/hermes-agent/commit/71ff5238ec4643ddc6bddcfbc8be4b1cdd400684, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942, https://github.com/NousResearch/hermes-agent/blob/v0.21.6/tools/approval.py#L827-L880, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L1128-L1169, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval_smart.py#L116-L131, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1665-L1700
- **Half:** defect | **Confidence:** high

**What changed.** A running gateway sets HERMES_EXEC_ASK=1 process-wide, while the command gate consulted approvals.unattended_mode only when that ask flag was off. For webhook and msgraph_webhook turns, and api_server sessions with no approval notifier (non-streaming /v1/chat/completions), default smart mode therefore let the guardian judge commands that should have followed unattended policy; an APPROVE could execute them. Notifier-backed requests can wait for an approval timeout. With no notifier, the old API path returns a pending result for a request that the client cannot answer; that path does not itself wait 300 seconds. From v0.21.7 those no-notifier turns use unattended_mode before the guardian. /v1/runs and streaming chat completions with a notifier retain the API approval bridge. Interactive approvals still default to smart model review; guardian errors and empty decisions log at WARNING and escalate, without guaranteeing human approval for every tool.

**Operator consequence.** The prior profile overstated unattended denial in running gateways through v0.21.6. Review webhook-originated sessions on those tags for flagged commands that ran. On v0.21.7, automations formerly approved by the guardian may be blocked; add only intended command_allowlist patterns. Check config.yaml for approvals.unattended_mode: approve before upgrading. It approves commands that reach the unattended-policy branch after earlier guard checks. User denies and applicable hard floors still take precedence; isolated-container, YOLO, disabled-approval, prepared-batch, and allowlist paths are separate.

## 3. Language servers ran a cloned repository's own code on file writes, with no approval, until v0.21.6

- **Date:** 2026-10-08
- **Channel:** `tagged-release`
- **Ancestry evidence:** f5c754d4365e17ff7c6e7c1c51808ec36f4d7cc9 and 59ec2811409479ade61ce451d77521b63a262529 (authored 2026-09-28), e929702021f6 and da2b64304bae (2026-09-29) are ancestors of v0.21.6 and not of v2026.9.24. `lsp.enabled: True` at v2026.9.21 (config_defaults.py L2336-2337) and v0.21.7 (L2387-2388); `lsp.trusted_workspaces` is absent at v2026.9.21 and present at v0.21.7 (L2406-2413).
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/f5c754d4365e17ff7c6e7c1c51808ec36f4d7cc9, https://github.com/NousResearch/hermes-agent/commit/59ec2811409479ade61ce451d77521b63a262529, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/lsp/servers.py#L372-L389, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/lsp/workspace.py#L157-L193, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2387-L2413
- **Half:** defect | **Confidence:** high

**What changed.** Language servers are on by default and, in the fix commit's words, "start with no approval on every write_file/patch inside any git worktree". Before v0.21.6 Hermes pointed pyright at the checkout's own .venv interpreter (which pyright executes), let the TypeScript and Vue servers load the checkout's node_modules TypeScript, left rust-analyzer running cargo check (build.rs, proc-macros) and other servers evaluating project build files, and its npx tsc and rustfmt lint fallbacks resolved repository-controlled binaries. None of that passed through command approval. v0.21.6 trusts a workspace only when it is the worktree Hermes was launched in, the session's workspace, or a path under `lsp.trusted_workspaces`; elsewhere only eight servers start, pinned to Hermes-side tools, the toolchain fallbacks are skipped. Kanban gets no automatic operator workspace roots. Cron omits the job's session workspace from those roots but still considers the process launch directory. A nested clone is not automatically trusted merely because it sits inside an operator worktree; an explicit `lsp.trusted_workspaces` directory grants trust to paths beneath it, including nested clones.

**Operator consequence.** On v2026.9.24 and earlier, "clone this repository and fix it" could run the repository's code on the agent's first edit, outside every approval pattern. Upgrade to v0.21.6+. The launch directory is still trusted, so never launch Hermes inside a checkout you do not trust; keep `lsp.trusted_workspaces` narrow, since that explicit setting also trusts nested clones, or set `lsp.enabled: false` for work on untrusted code. Read with section 1, the lesson is that tooling which only reads or lints a repository often executes it.

## 4. `hermes update` follows published releases from v0.21.7; before that an unconfigured source updater defaulted to main, and the installer still installs main

- **Date:** 2026-10-12
- **Channel:** `tagged-release` (updater default); installer behavior identical on v0.21.7 and main
- **Ancestry evidence:** 6a92a2aa4928175041e6bb04922d69d3f6e49eda "feat(update): source installs default to the stable release channel" (authored 2026-10-09, committed 2026-10-10 UTC) is an ancestor of v0.21.7, not of v0.21.6. The v0.21.6..v0.21.7 diff of hermes_cli/update_channel.py shows that `default_channel` changes from `return CHANNEL_MAIN` (docstring "source installs follow main (historical behavior)") to stable for official-origin checkouts. At v2026.9.21 `_resolve_update_branch` defaults to "main" (hermes_cli/main_install_repair.py L1275-1277). `scripts/install.sh` sets `BRANCH="main"` at v0.21.7 (L24).
- **Receipt:** https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7, https://github.com/NousResearch/hermes-agent/commit/6a92a2aa4928175041e6bb04922d69d3f6e49eda, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/update_channel.py#L140-L200, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/getting-started/updating.md#L33-L50, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/scripts/install.sh#L23-L25, https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/main_install_repair.py#L1275-L1277
- **Half:** both | **Confidence:** high

**What changed.** Before v0.21.7 an unconfigured source updater defaulted to main; explicit branch selection already existed. From v0.21.7, an unconfigured official-origin checkout defaults to stable, resolving the official stable release record, with GitHub release fallback and tag verification. Forks and mirrors retain main, package installs retain their baked channel, and explicit source choices survive. Implicit selection only moves forward, so an install already ahead of stable stays on its commit until a newer release passes it. `hermes update --set-channel stable` explicitly permits landing on the current stable commit. The audited installer still starts from main.

**Operator consequence.** Select the channel once on each host and record the resolved commit. At the October 13 UTC cutoff stable meant v0.21.7; the moving stable command is not a permanent v0.21.7 pin. To reproduce this dated read, use the installer's `--commit 71d34bad1045610252eda02ee79549436896e784` argument. Re-check earlier unconfigured source updates by commit rather than assuming their installed code matched a release tag.

## 5. Releases became receipts: CalVer tags end at v2026.9.24, both new stables were cut with the skip-tests flag, and Docker has no `:v0.21.7` tag

- **Date:** 2026-10-08
- **Channel:** `tagged-release` (v0.21.6, v0.21.7); `preview-or-beta` (daily canary tags)
- **Ancestry evidence:** Stable/canary workflow files and stable-releases.md are absent at v2026.9.24 and present at v0.21.6. Annotated rc.4-v0.21.6 has skipBundles=true and skipTests=true; rc.15-v0.21.7 has skipBundles=false, skipTests=true, includeMacosIntel=false and includeTermux=false. Final tag objects bind the full source commits and Docker digests. rc.15 candidate-manifest SHA256 was independently fetched and matched on 2026-10-14. Actions run 38199200509 attempt 4 records skipped source/install/native gates, with successful Docker build-and-test jobs. Ancestry and tag objects were independently checked by the crosscheck; attempt counts use the full UTC cutoff.
- **Receipt:** https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6, https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7, https://api.github.com/repos/NousResearch/hermes-agent/git/tags/99f94588c7dd458fbcc1cbc6db5beb2c2b871bf6, https://api.github.com/repos/NousResearch/hermes-agent/git/tags/ec0f68f50d19dd439ff0ed54b4acc764dadb4e50, https://hermes-assets.nousresearch.com/releases/tag/rc.15-v0.21.7/release-candidates.json, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/developer-guide/stable-releases.md#L102-L133, https://github.com/NousResearch/hermes-agent/actions/runs/38199200509/attempts/4, https://github.com/NousResearch/hermes-agent/commit/818c13be1dc4fd28987e1e881a9408224afd4535, https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/v0.21.6, https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/rc.4-v0.21.6, https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/rc.15-v0.21.7
- **Half:** both | **Confidence:** high

**What changed.** v0.21.6 began the SemVer receipt pipeline after the last CalVer tag, v2026.9.24 (named v0.21.5). Attempt refs rc.N-vX.Y.Z are locks, not public prereleases; final tags bind the source commit, attempt and Docker digest. The v0.21.6 receipt has candidateManifestSha256: null because native bundles were skipped. v0.21.7 binds a non-null candidate-manifest hash. Both successful attempts set skipTests: true. Source CI, install/update E2E, and native acceptance/smoke jobs were skipped. Docker build-and-test jobs concluded successfully; the skip-tests policy bypasses their test work. Job logs were not inspected, so this is not an independent census of every executed command. Docker's v0.21.6 tag names an earlier attempt, not the final receipt digest; no version-named v0.21.7 Docker tag was found. The final rc.15 manifest hashes to 7ea37048fa5dc2d5b83c37242a97ccbff6e1c4d5dd939f893def615f3c03dbac. There were 52 attempts, 52 abandoned markers and 19 canary tags by October 13 23:59:59 UTC, including the late v0.22.0 locks in section 31.

**Operator consequence.** For the dated v0.21.7 image, pin nousresearch/hermes-agent@sha256:444b42594e7f467425872fc35e077a227d377f0fe0726bc818706d62175fad8b. Do not treat a stable label or successful Docker job as proof that the full release acceptance graph passed. Smoke-test the pinned image and bundle transitions before moving a fleet. The gain is a checkable link between release source and distributed artifact; skipped gates remain an operator cost.

## 6. The default-on tirith command scanner left core in v0.21.6; two of its catches moved into the built-in detector and nothing replaces the rest

- **Date:** 2026-10-08
- **Channel:** `tagged-release`
- **Ancestry evidence:** 911da42e9e03ba8594ab2af5dfd1e50e7e721e3e "refactor(security): remove the bundled tirith scanner from core" and 68dd9927691e66058bf2347937e7dc276ceb50cd (credential uploads, invisible Unicode), both 2026-10-06, are ancestors of v0.21.6 and not of v2026.9.24. A tirith catalog entry (945ffcd257ff) was added and reverted (1070b91da6ae) the same day. `security.tirith_enabled: True` and `tirith_fail_open: True` at v2026.9.21 (config_defaults.py L1737-1740); absent at v0.21.7 (security block L1769-1792); `_config_version` 45 -> 50.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/911da42e9e03ba8594ab2af5dfd1e50e7e721e3e, https://github.com/NousResearch/hermes-agent/commit/68dd9927691e66058bf2347937e7dc276ceb50cd, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1769-L1792, https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L1717-L1741, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval_detection.py#L347-L351
- **Half:** both | **Confidence:** high

**What changed.** tirith ran `tirith check` on every terminal command, on by default and fail-open, from a binary downloaded at startup. The removal commit records the vendor's measurement against tirith 0.4.2: 14 of 16 attack commands caught, but 12 of 24 everyday agent commands flagged, each one a hard block in cron and -q deny mode; it only saw terminal strings, and fail-open meant no protection where the binary could not install (Windows, Termux, x64 musl). v0.21.6 deletes the scanner, its installers and the `security.tirith_*` keys (config v50), "enables nothing in its place", and ships no tirith plugin. The built-in detector gained the two shapes only tirith had caught: curl or wget uploads of secret-named variables or credential files, and invisible or bidirectional Unicode that makes the approved command differ from the executed one. The removal author reports core at 13 of 16 attacks and 5 of 24 false flags on that small command corpus. Neither comparison was independently reproduced, and neither is a general security benchmark.

**Operator consequence.** Tirith-specific refusals disappear; other detectors, policy hooks, user denies, and unattended policy can still block those jobs. The prior scanner-restart fix is moot. If tirith was in your threat model, install and operate it yourself as a pre_tool_call hook. Test the exact response: `{"action":"approve"}` requests human approval from v2026.9.24, while `{"decision":"approve"}` means allow. Model judging and string patterns are not substitutes for isolating execution.

## 7. Email gateway allowlists could be passed with a spoofed From display name or smuggled Authentication-Results until v0.21.6

- **Date:** 2026-10-08
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR #125212 (merged 2026-09-27T15:19:09Z, merge 6f7a7991bb069db07ae74a479823ce8310f8c7e0) is an ancestor of v0.21.6 and not of v2026.9.24. The adapter already cited an earlier advisory on the same surface, GHSA-rxqh-5572-8m77, at v2026.9.21 (plugins/platforms/email/adapter.py L264, L357, L619); `gh api advisories/GHSA-rxqh-5572-8m77` returns 404. At v0.21.7 `_extract_email_address` uses `parseaddr` with length and nesting caps (L286-296).
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/6f7a7991bb069db07ae74a479823ce8310f8c7e0, https://github.com/NousResearch/hermes-agent/pull/125212, https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/email/adapter.py#L286-L296
- **Half:** defect | **Confidence:** high

**What changed.** The email adapter took the first angle-bracketed address in From, so `"Victim <victim@example.com>" <attacker@evil.test>` resolved to the victim and passed `EMAIL_ALLOWED_USERS`. `dmarc=pass` was accepted without checking that it applied to the From domain, and SPF, DKIM and DMARC verdicts could be smuggled through sender-controlled text inside the receiving server's Authentication-Results header. The PR author reports the spoof plus about 23 of 40 crafted headers authenticating before the fix and none after; this was not independently reproduced. It follows an earlier, still-unpublished advisory on the same surface. Allow-all mode is unchanged; enforcing sender authentication there (#123256) is a separate, open question.

**Operator consequence.** On v2026.9.24 and earlier, anyone able to send you mail could pass an email allowlist as an allowed sender and command the agent with that sender's grants. Upgrade to v0.21.6+ and review email-originated sessions for senders you did not expect. An email allowlist is identity by header parsing; weight email as a lower-trust channel than platforms that hand Hermes authenticated user ids.

## 8. Four dashboard sign-in defects reported by Tenable, including a login-code redirect that allowed session takeover, fixed in v0.21.6

- **Date:** 2026-10-08
- **Channel:** `tagged-release`
- **Ancestry evidence:** #130685 (merge 725c3ec4bc42, merged 2026-10-01T19:36:00Z), #133367 (c83fe1b2c4ea), #133369 (66fa864f1950) and #133370 (ed4c35076b79), merged 2026-10-05, are ancestors of v0.21.6 and not of v2026.9.24. A related v2026.9.24 fix, 269a982b643f, requires the Desktop spawn credential for the dashboard's host bypass. At v0.21.7 the container run script refuses to let HERMES_DASHBOARD_INSECURE disable the auth gate (docker/s6-rc.d/dashboard/run L30-46).
- **Receipt:** https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6, https://github.com/NousResearch/hermes-agent/commit/725c3ec4bc4283f73fce3e881e8187f4e30fb4e4, https://github.com/NousResearch/hermes-agent/commit/c83fe1b2c4eabe0765430b8e78e362247f0be37e, https://github.com/NousResearch/hermes-agent/commit/66fa864f1950fd57bec0df72dd94dec880621b8c, https://github.com/NousResearch/hermes-agent/commit/ed4c35076b797bf93c09e611e4f129983dcdc2d3, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/dashboard_auth/basic/__init__.py#L125-L202, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/web_server.py#L522-L565, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/docker/s6-rc.d/dashboard/run#L30-L46
- **Half:** defect | **Confidence:** high

**What changed.** The v0.21.6 notes credit Tenable Research (TRA-725 to TRA-728) for four dashboard-auth issues. The public `GET /auth/native/authorize` route validated `redirect_uri` with Python's URL parser but stored the raw string, so a URI the server read as loopback could send the browser, and the one-time login code, to another host after a real sign-in; the PR calls this the public counterpart of a privately reported advisory. A spoofed X-Forwarded-For reset the password-login rate limit, unauthenticated login requests could write unbounded values to the auth audit log, and the public /auth/ routes had no request-body limit. The auth gate normally engages on non-loopback binds, and configured public URLs can engage it even on loopback. There is a credentialed Desktop-owned exception. The container entry point ignores HERMES_DASHBOARD_INSECURE as an auth bypass. Tenable attribution comes from the vendor release; its private reports were not opened.

**Operator consequence.** For a remotely reachable dashboard, upgrade to v0.21.6+ and revoke sessions minted before the fix. For Basic Auth, rotate the effective signing secret and restart to load it. HERMES_DASHBOARD_BASIC_AUTH_SECRET overrides the config secret; if neither is set, restart rotates the process-random key. This does not revoke sessions issued by other auth providers; use their revocation mechanism. Configure dashboard.trusted_proxies for your actual proxy chain. No public Tenable write-up or issue-specific GHSA was recovered in the checked surfaces.

## 9. With a sandboxed terminal, Bot Screen, computer_use and the browser still ran on the gateway host until v0.21.6; containers now default to a Nous desktop image

- **Date:** 2026-10-08
- **Channel:** `tagged-release`
- **Ancestry evidence:** 399d9569036d6e85420635c2f54e0177fb8b8d45 (#121169, committed 2026-09-28) first reaches stable in v0.21.6, absent from v2026.9.24. The old bot_desktop defaults lack placement; v0.21.7 sets placement=auto. DEFAULT_SANDBOX_IMAGE changes from nikolaik/python-nodejs:python3.11-nodejs20 to nousresearch/hermes-sandbox:desktop. Migration 48 drops copied legacy defaults, retaining explicit pins; persisted Docker containers require an operator Switch choice.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/399d9569036d6e85420635c2f54e0177fb8b8d45, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2518-L2543, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L8-L17, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_migrations.py#L634-L654
- **Half:** both | **Confidence:** high

**What changed.** Before v0.21.6, sandboxing the terminal left Bot Screen, cua-driver and Chromium on the gateway host; computer_use could open a shell outside that terminal boundary. From v0.21.6 bot_desktop.placement: auto follows the terminal backend. Modal, Daytona and Vercel backends that cannot host a screen refuse instead of falling back to the host; placement: gateway explicitly selects the old host behavior. Fresh default containers use a Nous desktop image with Python 3.13 and Node 26, Xfce, TigerVNC, headed Chromium and cua-driver, rather than the earlier Python 3.11/Node 20 image. The change author records a 4.27 GB uncompressed image at that commit; this is not a permanent size guarantee for a moving Docker tag.

**Operator consequence.** Audit host activity if browser/computer_use accompanied a sandboxed terminal before v0.21.6. Fresh or replaced default containers use nousresearch/hermes-sandbox:desktop. Migration removes a copied legacy default from configuration, but an existing persisted Docker container is retained until the operator chooses Switch; gateway and cron paths keep it and report the pending choice. Explicit image pins are retained. A smaller custom image needs the desktop stack for in-sandbox screen work. Choosing placement: gateway on an unsupported screen backend deliberately restores host access.

## 10. Core shed six memory providers, Home Assistant, Spotify and Skill Sync; configured homes can migrate to catalog plugins

- **Date:** 2026-10-12
- **Channel:** `tagged-release` (v2026.9.24, v0.21.6, v0.21.7); `main-unreleased` and `preview-or-beta` for Langfuse
- **Ancestry evidence:** `git ls-tree <tag>:plugins/memory`: v2026.9.21 has byterover, hindsight, holographic, honcho, mem0, openviking, retaindb, supermemory; v2026.9.24 drops hindsight (4cbf862abe44); v0.21.6 drops honcho (7e53b3ef82c9), supermemory (87be434bff93), mem0 (781334eea4b9) and openviking (05eecbcd972c); v0.21.7 drops holographic (cca83848ec79) and keeps byterover and retaindb. Home Assistant (fb9fc8a3ddc7), the Skill Sync deletion (64ad33e32dad) and the plugin compat-layer removal (a5bd246865bd) are in v0.21.6; Spotify (71704ffb498f) in v0.21.7. Langfuse (cdf5732af67c) is on main and in v0.21.7+canary.20261013T070740Z, not in v0.21.7. Live activation 9039b690fc34 is in v2026.9.24; the mid-session skill index ec78ae2211fb in v0.21.7. Catalog entries at v0.21.7: honcho (maintainer plastic-labs, sha e2d2aba1), mem0 (mem0ai, 43849c6e), hindsight (vectorize-io, d56c4acd), holographic (itpartypattaya, tier community, 46b6f908).
- **Receipt:** https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/memory_provider_migration.py#L168-L299, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1311-L1325, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1717-L1755, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/holographic.yaml, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/mem0.yaml, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/honcho.yaml, https://github.com/NousResearch/hermes-agent/commit/7e53b3ef82c9074649230b572dfcc76d4b629058, https://github.com/NousResearch/hermes-agent/commit/9039b690fc34b965b2614bea33d88b0216752aa0, https://github.com/NousResearch/hermes-agent/commit/cdf5732af67c9c1784ba4857191c499c3f3b741e
- **Half:** both | **Confidence:** high

**What changed.** Across the three stables, hindsight, honcho, mem0, supermemory, openviking and holographic left bundled memory; byterover and retaindb remain. Home Assistant, Spotify, tirith and Skill Sync also left core, as did compatibility for pre-September plugin import paths. A home configured for a departed provider can receive its catalog plugin automatically. Startup recovery honors security.allow_lazy_installs and only assumes consent for formerly bundled providers. During an interactive update, dependency consent can still be requested; refused or failed installs remain possible. The default memory.provider is empty, selecting built-in memory. Removing optional providers does not make a fresh default install run an external memory plugin. Plugins still default to plugins.isolation: in_process; host process isolation is opt-in and is not an OS sandbox by itself. Catalog entries name maintainers and reviewed SHA pins: most are vendor-maintained, holographic is community-maintained, and mem0 discloses PostHog telemetry unless MEM0_TELEMETRY=false. Plugin installs activate their MCP servers and skills in every open chat of that profile on the next turn from v2026.9.24; newly added skill indexing reaches v0.21.7. Langfuse extraction is in main and the October 13 canary, absent from v0.21.7.

**Operator consequence.** Check memory.provider on each existing home before upgrading. A removed optional provider changes maintainer and dependency custody; inspect its catalog pin and disclosures, plus security.allow_lazy_installs and any consent prompt. Fresh default homes keep built-in memory. Treat an accepted plugin install as a live change to the next turn of every open chat in that profile, including gateway sessions. Plugins still importing pre-September module paths lose compatibility from v0.21.6.

## 11. Approval and consent fixes, v2026.9.24 to v0.21.6: hook approvals escalate, stale sessions stop flipping YOLO globally, Desktop batches re-gate

- **Date:** 2026-09-24
- **Channel:** `tagged-release` (v2026.9.24 for a, b and e; v0.21.6 for c and d)
- **Ancestry evidence:** 30b38d139b1fd91670e3b5bd88cd50f71287a12f, 02ad41df3a33, ba5bec3f2c9a and the docs commit 903c80ff1b7e are ancestors of v2026.9.24 and not of v2026.9.21. c42c90552ecb, 447fb4955d1a, 762f419fe837, 2b525ced8429 and b1a39a1b1bf1 are ancestors of v0.21.6 and not of v2026.9.24.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/30b38d139b1fd91670e3b5bd88cd50f71287a12f, https://github.com/NousResearch/hermes-agent/commit/ba5bec3f2c9ae2eceac81d3dc6841e67b808adf3, https://github.com/NousResearch/hermes-agent/commit/c42c90552ecb0f0062e91c8bc0a048c1b4d44ea5, https://github.com/NousResearch/hermes-agent/commit/447fb4955d1af040dd7b6da98aa71fe77fdb3fcc, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/user-guide/security.md#L931-L939
- **Half:** defect | **Confidence:** high

**What changed.** (a) A shell pre_tool_call hook printing the documented `{"action": "approve"}` parsed to nothing, so the tool ran with no prompt while `hermes hooks doctor` stayed green; v2026.9.24 routes that exact action response to the approval gate, whereas the distinct existing `{"decision":"approve"}` response means allow, and a plugin's block now outranks an earlier plugin's approve. (b) On the TUI and Desktop gateway, a config.set carrying a stale session id fell through to the session-less branch: a per-chat YOLO toggle set HERMES_YOLO_MODE in the backend's process env, inherited by every child started afterwards, and a per-chat Fast toggle rewrote the profile's service tier; fixed in v2026.9.24. (c) Desktop terminal batches collect approvals for every command up front; before v0.21.6 a later command still used its pre-made approval after an earlier one failed, and switching YOLO or "Approvals: off" back off mid-batch did not re-gate the rest. (d) In v0.21.6, MCP and vault consent prompts decline at once when no user can answer, and the protected-instruction gate no longer hangs -q sessions. (e) The v2026.9.24 docs now state that gateway hooks in `<profile home>/hooks/` load at startup with no prompt, are not skipped by HERMES_SAFE_MODE, and sit outside the file tools' protected-write list.

**Operator consequence.** A shell hook returning `{"action":"approve"}` requests human approval from v2026.9.24. The distinct existing `{"decision":"approve"}` response means allow; re-run `hermes hooks test` on each hook after upgrading. If you toggled per-chat YOLO from Desktop on v2026.9.21 or earlier, restart the backend to clear an inherited YOLO environment. Add `ls ~/.hermes/hooks/` to every audit: anything that can write the profile home, including the agent's own file tools on a local backend, can add code the gateway imports at its next start.

## 12. Compaction on 1M-window models moved from a 256K cap to half the window in v0.21.6, and a seeded 256000 cap is migrated away

- **Date:** 2026-10-08
- **Channel:** `tagged-release`
- **Ancestry evidence:** 98278833e29b167fe930e276eed7cb16bee68673 (#126064, 2026-09-28) is an ancestor of v0.21.6 and not of v2026.9.24. `compression.threshold_tokens` is 256_000 at v2026.9.21 (config_defaults.py L570) and v2026.9.24, and None at v0.21.6 and v0.21.7 (L593); `compression.threshold` stays 0.50 (L589).
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/98278833e29b167fe930e276eed7cb16bee68673, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L577-L594, https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/config_defaults.py#L553-L571
- **Half:** both | **Confidence:** high

**What changed.** Since #115986 every context window above about 341K compacted at 256K tokens, so a 1M-window model compacted at a quarter of its window and a `compression.threshold` above that was ignored. v0.21.6 makes the absolute cap opt-in again and lets the ratio decide, which at the default 0.50 means compaction near 500K tokens on a 1M model. Config v47 deletes `threshold_tokens` from config.yaml only when it equals exactly 256000, the value the seeder and `hermes doctor --fix` wrote; any other value survives.

**Operator consequence.** Long sessions on 1M-window models carry up to about twice as many input tokens per request before compaction on v0.21.6+, on top of an unlimited default turn count. If spend matters, set `compression.threshold_tokens` to an explicit value other than 256000 (250000 keeps the old behavior) so the migration leaves it alone, or lower `compression.threshold`, and re-baseline cost comparisons made on earlier tags.

## 13. Queried GitHub advisory surfaces had no newer public Hermes entry; 17 source-cited ids were inaccessible

- **Date:** 2026-10-13
- **Channel:** `tagged-release` (state of the v0.21.7 source and the public advisory record)
- **Ancestry evidence:** The researcher queried public GitHub advisory surfaces on 2026-10-13; the independent verifier repeated them on 2026-10-14. The repository public list was empty and the newest matching global GitHub entries dated 2026-06-17. Seventeen specified source-cited ids returned 404: 2fmg-cjqm-hhrj, 3vpc-7q5r-276h, 5g4g-6jrg-mw3g, 5qr3-c538-wm9j, 76xc-57q6-vm5m, 7x36-8jrh-v4pw, 96vc-wcxf-jjff, fr3q-rjg3-x6mf, gpxw-6wxv-w3qq, jmf9-9729-7pp8, m4m8-xjp4-5rmm, mcfc-hp25-cjv7, ppp5-vxwm-4cf7, qg5c-hvr5-hjgr, rhgp-j443-p4rf, rxqh-5572-8m77, xf8p-v2cg-h7h5. No complete 32-id dependency census is asserted. This is dated search evidence, not release ancestry or a universal disclosure inventory.
- **Receipt:** https://github.com/NousResearch/hermes-agent/security/advisories, https://api.github.com/advisories?affects=hermes-agent&per_page=100, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/telegram/adapter.py#L3096-L3110, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/platforms/webhook.py#L370-L380, https://nvd.nist.gov/vuln/detail/CVE-2026-71963, https://nvd.nist.gov/vuln/detail/CVE-2026-108593
- **Half:** defect | **Confidence:** high

**What changed.** No newer public Hermes entry was found in the queried GitHub advisory surfaces. Seventeen source-cited IDs were inaccessible. NVD contains a September GitSpawn CVE, and this search found no new Hermes-product CVE published in the UTC window. These observations do not establish complete coverage of OSV, Dependabot, every ecosystem alias, private advisories, or every vendor disclosure. VulnCheck's CVE-2026-71963, published September 3 and Deferred at NVD, gives 0.18.2 through 0.21.0 and f6234d0 for the earlier fixed-key GitSpawn issue; that range does not describe the later filter-driver bypass. October 10 CVE-2026-108593 describes configuration injection by an authenticated 9router dashboard user, not a new Hermes-product flaw. Tagged Telegram and webhook files cite inaccessible GHSA references.

**Operator consequence.** Use versioned release notes and pinned security changes alongside advisory feeds, rather than assuming those feeds are complete for Hermes. For affected-range work, distinguish the issuing record's earlier GitSpawn range from the source inclusion checks for later fixes. Inaccessible IDs cannot prove a bug mechanism or range. Publication of those IDs with explicit affected ranges would close the specific disclosure gap.

## 14. Correction: the browser credential vault is on by default; only real-profile browsing is opt-in

- **Date:** 2026-09-21
- **Channel:** `tagged-release` (state at v2026.9.21, unchanged at v0.21.7); the consolidation into one deferred tool is `main-unreleased` and in the 2026-10-13 canary
- **Ancestry evidence:** toolsets.py L21 lists `browser_vault_list`, `_unlock`, `_fill`, `_save_login` and `_enter_code` in `_HERMES_CORE_TOOLS` at v2026.9.21 and v0.21.7 ("ride with the browser"). `_check_vault_available` is true whenever the browser requirements are met (tools/browser_vault_tool.py L41-49 at both tags). `vault.onepassword.enabled: True` and `vault.bitwarden.enabled: True`, under the comment "Detected managers are login sources unless the user opts out" (config_defaults.py L2393-2405 at v2026.9.21; L2446-2464 at v0.21.7). The 1Password backend's `is_unlocked()` returns true whenever a service-account token is in the profile's secret scope (agent/vault_backends/onepassword.py L36-40 and L70-71 at v0.21.7). `browser.use_real_profile: False` (L455 at v0.21.7). On main, 3bf97898ac0e (in v0.21.7+canary.20261013T070740Z) collapses the five tools into one `browser_vault` tool deferred behind tool_search, still riding with the browser.
- **Receipt:** https://github.com/NousResearch/hermes-agent/blob/v0.21.7/toolsets.py#L11-L22, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2446-L2464, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/vault_backends/onepassword.py#L30-L71, https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/toolsets.py#L21
- **Half:** defect | **Confidence:** high

**What changed.** Nothing changed in the window; the 2026-09-21 profile said both new grants were off by default, and only one is. `browser.use_real_profile` is false and stays an opt-in. The credential vault is different: its tools are part of the default core tool set and are offered whenever the browser tools are installed; the local encrypted vault is "always on" (empty until the user adds items or the agent saves a login); detected 1Password and Bitwarden CLIs are login sources by default, unlocked per session with a masked master-password prompt; and when `OP_SERVICE_ACCOUNT_TOKEN`, the default service-account variable, is in the profile's secrets, the 1Password backend counts as unlocked with no prompt in any session. Fills are bound to each item's exact origin and payment items fill only after the user confirms, but there is still no per-site allowlist in config.

**Operator consequence.** If a Hermes profile holds a 1Password service-account token, for example for `secrets.onepassword`, the agent can list and fill every Login item that account can see without asking, including in headless sessions that have the browser tools. Scope that service account to a vault made for the agent, or set `vault.onepassword.enabled: false` (and `vault.bitwarden.enabled: false` if `bw` is installed for other reasons). The question "which accounts may it act on" applies to a default install, not only after an opt-in.

## 15. Correction: PyPI and Homebrew distribution ended in July; `pip install hermes-agent` still installs 0.19.0

- **Date:** 2026-07-30
- **Channel:** `tagged-release` (removal first in v2026.7.30); the PyPI registry is frozen
- **Ancestry evidence:** d84e11af4d9927c41ad0a3b4db72042cca250c64 "rip out brew + pip/PyPI wheel support (#68217)", merged 2026-07-22T20:51:02Z, is an ancestor of v2026.7.30 and not of v2026.7.20. PyPI JSON on 2026-10-13: `hermes-agent` latest 0.19.0, wheel uploaded 2026-07-20T18:37:26Z, nothing later. installation.md at v0.21.7 lists desktop bundles, source installers, Docker, Nix and the Termux APT package.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/d84e11af4d9927c41ad0a3b4db72042cca250c64, https://pypi.org/pypi/hermes-agent/0.19.0/json, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/getting-started/installation.md#L1-L5
- **Half:** defect | **Confidence:** high

**What changed.** Nothing in this window; the profile still carried PyPI distribution, from v0.14.0, as an active claim. v2026.7.30 removed the PyPI publish workflow, the Homebrew formula, the pip self-update path and PyPI update checks, and the ACP Registry manifest, and setup.py now refuses wheel and sdist builds outside a sealed Nix build. PyPI's `hermes-agent` therefore stops at 0.19.0, published 2026-07-20, which predates the approval guardrails of v2026.8.3, the GitSpawn fix of v2026.9.7 and everything in this file. npm's `hermes-agent` is not a vendor channel either: it describes itself as an "Unofficial npm bridge" and is maintained by a third party.

**Operator consequence.** A fresh unpinned install from the public PyPI package resolves to 0.19.0. Existing installs may be older, pinned, editable, or sourced from Git. Inspect both version and origin before replacing them. Use pip show hermes-agent and uv tool list to locate candidates, then move retired public-package installs to a supported source, Docker, or desktop channel. Termux APT exists but was not built in the v0.21.7 attempt; exact feed parity is unknown. Nix remains best-effort.

## 16. Policy-plugin exceptions now block the tool instead of failing open

- **Date:** 2026-09-22
- **Channel:** `tagged-release` (first stable v2026.9.24)
- **Ancestry evidence:** Commits 89de6083171d0f70e5356bef05105231344e371d were read as production diffs; commit date 2026-09-22 UTC. Read-only merge-base checks independently confirm first stable v2026.9.24, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/89de6083171d0f70e5356bef05105231344e371d, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/plugins_dispatch.py#L215-L245, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/plugins_dispatch.py#L511-L520
- **Half:** defect | **Confidence:** high

**What changed.** A pre_tool_call callback that raised previously logged the error and returned no veto, so a broken security plugin could allow execution. The fix adds a block directive for policy exceptions; both synchronous and asynchronous paths retain fail-closed handling at v0.21.7. This is separate from the shell-hook response grammar in section 11.

**Operator consequence.** Guard-plugin users need v2026.9.24 or later. Inspect callback-failure warnings on earlier runs and test the exception path, not only successful veto responses.

## 17. Routed foreign profile homes no longer borrow launch-process credentials on a secret miss

- **Date:** 2026-09-23
- **Channel:** `tagged-release` (first stable v2026.9.24)
- **Ancestry evidence:** Commits 2c3a75beaaf0fabc5a5dcc932d57f4be70efa3d5 were read as production diffs; commit date 2026-09-23 UTC. Read-only merge-base checks independently confirm first stable v2026.9.24, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/2c3a75beaaf0fabc5a5dcc932d57f4be70efa3d5, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/secret_scope.py#L219-L247
- **Half:** defect | **Confidence:** high

**What changed.** With multiplexing off, a missing secret in a routed foreign home could fall back to the launch process environment. Desktop, cron, MCP and kanban work could use another home's credentials. The fix stamps bound secret scopes with their home and refuses launch-environment fallback for a foreign home; own-home environment overlays remain intentional.

**Operator consequence.** Audit profile-specific runs and credential use before v2026.9.24. A fix to multiplexed email reads did not settle all foreign-home scope paths.

## 18. Anthropic-labeled custom endpoints no longer receive refreshed vendor credentials

- **Date:** 2026-09-23
- **Channel:** `tagged-release` (first stable v2026.9.24)
- **Ancestry evidence:** Commits a4d8f173a9c4bd287f57ab64c95a9646caede20d were read as production diffs; commit date 2026-09-23 UTC. Read-only merge-base checks independently confirm first stable v2026.9.24, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/a4d8f173a9c4bd287f57ab64c95a9646caede20d
- **Half:** defect | **Confidence:** high

**What changed.** An alias under the anthropic provider could point at a foreign host with no key, then refresh with ANTHROPIC_API_KEY or an OAuth token before a request or after a 401. The earlier substring check also treated a URL containing anthropic.com outside its hostname as native. The fix checks the parsed hostname before vendor credential refresh. The change explicitly identifies ~/.claude OAuth state as a shared credential source, not a bundled Claude Code agent.

**Operator consequence.** Review custom model aliases and base URLs on earlier tags; rotate vendor credentials if route or request logs establish exposure. Preserve intentional proxy credentials separately from native Anthropic credentials.

## 19. SimpleX sender allowlists now match numeric contact ids rather than mutable display names

- **Date:** 2026-09-27
- **Channel:** `tagged-release` (first stable v0.21.6)
- **Ancestry evidence:** Commits 467046753420c40aba05a118e5ffd5061e42f481 were read as production diffs; commit date 2026-09-27 UTC. Read-only merge-base checks independently confirm first stable v0.21.6, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/467046753420c40aba05a118e5ffd5061e42f481
- **Half:** defect | **Confidence:** high

**What changed.** A contact could change its display name to an allowlisted name and gain that sender's access. The SimpleX adapter and intake matching now use the numeric contactId only; the earlier author date does not change the first stable boundary.

**Operator consequence.** Upgrade to v0.21.6+ and replace SIMPLEX_ALLOWED_USERS display-name entries with numeric contact IDs. This deliberately breaks name-based configuration.

## 20. Network-exposed A2A refuses dispatch with an empty trusted-peer list

- **Date:** 2026-10-01
- **Channel:** `tagged-release` (first stable v0.21.6)
- **Ancestry evidence:** Commits a0cad39f5d55a2c7e2f0cbea2198358b5a3d55b0 were read as production diffs; commit date 2026-10-01 UTC. Read-only merge-base checks independently confirm first stable v0.21.6, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/a0cad39f5d55a2c7e2f0cbea2198358b5a3d55b0, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/a2a/security.py#L74-L115
- **Half:** defect | **Confidence:** high

**What changed.** On a non-loopback bind, a token-authenticated A2A adapter with no trusted peers previously accepted peers after authentication. It now refuses dispatch unless peers are listed or allow-all is explicitly enabled. Loopback empty-list behavior remains compatible; bearer/peer-token authentication is still a precondition for network access.

**Operator consequence.** Populate A2A_TRUSTED_PEERS before upgrading exposed adapters to v0.21.6+. An empty list is no longer permission for every authenticated peer; intentional allow-all requires an explicit setting.

## 21. Explicitly empty resolved CLI and per-job cron toolsets no longer widen to defaults

- **Date:** 2026-10-06
- **Channel:** `tagged-release` (first stable v0.21.6)
- **Ancestry evidence:** Commits b4969d8e2d0954b1938492b2f0a90321737f9164 were read as production diffs; commit date 2026-10-06 UTC. Read-only merge-base checks independently confirm first stable v0.21.6, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/b4969d8e2d0954b1938492b2f0a90321737f9164
- **Half:** defect | **Confidence:** high

**What changed.** The Desktop/TUI path converted an empty resolved CLI selection into None, meaning no restriction. Cron create/update/storage and dispatch normalized a per-job [] away and could restore platform defaults, including MCP tools. The fix preserves explicit emptiness: an empty resolved CLI list returns [] without client-surface fold-in, and a per-job cron [] persists and returns zero toolsets without an MCP merge. Absent keys still select defaults; CLI MCP configuration must be inspected separately from an empty native selection.

**Operator consequence.** Upgrade to v0.21.6+ and review restricted jobs and sessions created on earlier tags. Inspect stored enabled_toolsets and the resolved CLI/MCP set; merely remembering that you selected nothing is insufficient.

## 22. Webhook, Twilio SMS and LINE reject blank signing secrets

- **Date:** 2026-10-07
- **Channel:** `tagged-release` (first stable v0.21.6)
- **Ancestry evidence:** Commits 8ec668b3cc8b9289d63f02fa6abca3d67e993eb3, 84cb790e6425f3ef53aab893dce59ba707cb27da, a560ba0b0842f0cd572bade054414667258727e3 were read as production diffs; commit date 2026-10-07 UTC. Read-only merge-base checks independently confirm first stable v0.21.6, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/8ec668b3cc8b9289d63f02fa6abca3d67e993eb3, https://github.com/NousResearch/hermes-agent/commit/84cb790e6425f3ef53aab893dce59ba707cb27da, https://github.com/NousResearch/hermes-agent/commit/a560ba0b0842f0cd572bade054414667258727e3
- **Half:** defect | **Confidence:** high

**What changed.** Whitespace-only keys could pass truthiness checks and key message-signature HMACs with a guessable value. Webhook route/startup/request paths now validate usable secrets; SMS rejects an empty token at signature verification, and LINE strips its channel secret before validation. An attacker knowing an empty or whitespace key could forge inbound messages. This does not bypass a valid random secret.

**Operator consequence.** Check webhook route secrets, TWILIO_AUTH_TOKEN and LINE_CHANNEL_SECRET, and upgrade to v0.21.6+ before exposing these receivers. Configure actual random secrets; the fix refuses invalid configuration rather than repairing it.

## 23. Profile exports exclude credential stores and imports cannot replace nested private state

- **Date:** 2026-10-03
- **Channel:** `tagged-release` (first stable v0.21.6)
- **Ancestry evidence:** Commits 9c18f8c28ce271a1351a8d105e8e76080120818e, 8c1adb7d6dfb7773d705fbac41ee173ffe1ec2f7, 9dfb2b27b30ef823c963a7943ed9d6f8a73d2b02 were read as production diffs; commit date 2026-10-03 UTC. Read-only merge-base checks independently confirm first stable v0.21.6, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/9c18f8c28ce271a1351a8d105e8e76080120818e, https://github.com/NousResearch/hermes-agent/commit/8c1adb7d6dfb7773d705fbac41ee173ffe1ec2f7, https://github.com/NousResearch/hermes-agent/commit/9dfb2b27b30ef823c963a7943ed9d6f8a73d2b02, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/profiles.py#L148-L182
- **Half:** defect | **Confidence:** high

**What changed.** Named exports excluded too few stores and could include .op.env service-account tokens, OAuth files, vault/browser/platform state and copied OS credentials. The expanded private-path inventory excludes those stores, including nested OS-store names. Distribution imports now refuse private owned paths and merge ancestors instead of replacing private pairing/session data.

**Operator consequence.** Inspect archives already shared and rotate credentials actually included. Upgrade to v0.21.6+ before exporting or importing another profile distribution; a shareable profile must not carry its account authority.

## 24. Browser profiles, screenshots and media caches gain private filesystem modes

- **Date:** 2026-10-01
- **Channel:** `tagged-release` (first stable v0.21.6)
- **Ancestry evidence:** Commits 6c3aae398adeb021bd598c61be2f7b0a460f6cf9 were read as production diffs; commit date 2026-10-01 UTC. Read-only merge-base checks independently confirm first stable v0.21.6, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/6c3aae398adeb021bd598c61be2f7b0a460f6cf9
- **Half:** defect | **Confidence:** high

**What changed.** Under a traversable Hermes home, ordinary 0755/0644 creation modes could expose browser logins, screenshots and inbound media to other local users. The fix creates/reconciles private directories and writes owner-only files where supported. Managed group-sharing has an explicit exception, failures can be best-effort, and POSIX modes do not prove Windows ACL enforcement.

**Operator consequence.** On shared hosts, inspect actual ownership/modes and retained browser/media state after upgrading to v0.21.6+. Default home containment and configured group sharing change the exposure; do not infer local confidentiality from version alone.

## 25. Diagnostic dumps redact credentials embedded in base URLs

- **Date:** 2026-09-29
- **Channel:** `tagged-release` (first stable v0.21.6)
- **Ancestry evidence:** Commits 205d5d78f1ff8a20701555bff26e107df48d5b92 were read as production diffs; commit date 2026-09-29 UTC. Read-only merge-base checks independently confirm first stable v0.21.6, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/205d5d78f1ff8a20701555bff26e107df48d5b92
- **Half:** defect | **Confidence:** high

**What changed.** Fallback-provider base URLs could preserve userinfo, query or fragment tokens in hermes dump and uploaded debug bundles despite force redaction. The fix requests strict URL-credential redaction in dump/upload paths and preserves canonical hyphenated sensitive parameter names. security.redact_secrets=True was a default, not complete path coverage.

**Operator consequence.** Inspect bundles already shared for URL credentials and revoke exposed tokens. Upgrade to v0.21.6+ before producing another diagnostic bundle; avoid assuming the ordinary log redaction policy strips every URL token.

## 26. Anthropic and Bedrock resume preserve provider-appropriate signed reasoning

- **Date:** 2026-10-11
- **Channel:** `tagged-release` (first stable v0.21.7)
- **Ancestry evidence:** Commits 79b45d1647f6b5680768d851c4c406e8cc550a1e were read as production diffs; commit date 2026-10-11 UTC. Read-only merge-base checks independently confirm first stable v0.21.7, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/79b45d1647f6b5680768d851c4c406e8cc550a1e
- **Half:** both | **Confidence:** high

**What changed.** Anthropic last-turn-only reasoning lost the latest assistant thinking when a resumed turn closed the tool loop. Bedrock Converse replay for non-Claude reasoning models could drop signatures and fail request validation; streamed reasoning could also be duplicated. The fix preserves latest-turn Anthropic blocks, records the Bedrock issuing model for signature replay, and joins streamed reasoning per block. The change names deepseek.v3 as an affected model route; that is not evidence about the separate DeepSeek Harness product.

**Operator consequence.** Use v0.21.7 for resumed conversations on those provider routes and verify a representative resume before unattended work. Preserving signatures improves continuity, but this is not a cross-model portability guarantee or a measured completion-rate result.

## 27. Cron reports an unwritable store as degraded and notifies the owning home on recovery

- **Date:** 2026-10-07
- **Channel:** `tagged-release` (first stable v0.21.6)
- **Ancestry evidence:** Commits 759b1c34adb5c1be2ac5eeea50d6b2f4f52c9d7a, 91fc7badafd2ab345aec8b4ac64c06460f30c017 were read as production diffs; commit date 2026-10-07 UTC. Read-only merge-base checks independently confirm first stable v0.21.6, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/759b1c34adb5c1be2ac5eeea50d6b2f4f52c9d7a, https://github.com/NousResearch/hermes-agent/commit/91fc7badafd2ab345aec8b4ac64c06460f30c017
- **Half:** both | **Confidence:** high

**What changed.** Previously store-write failures were mainly log warnings while ticks retried work that could not be durably recorded. The scheduler now keeps an in-memory degraded record with outage time and distinct skipped runs, throttles write probes, and clears state on a successful save. The gateway sends failure/recovery notices to the owning home's channels, honoring warning opt-outs.

**Operator consequence.** On v0.21.6+, inspect cron status and notices for disk-space, read-only-mount or permissions failures. Confirm that the owning home has a usable notification channel and has not opted out. This makes skipped work inspectable; it does not guarantee exactly-once execution.

## 28. Fresh Vercel sandboxes use a managed image and migrate copied node24 defaults

- **Date:** 2026-09-28
- **Channel:** `tagged-release` (first stable v0.21.6)
- **Ancestry evidence:** Commits 7c799a6565dca33ad8774cb01efb17f88a8c7c43 were read as production diffs; commit date 2026-09-28 UTC. Read-only merge-base checks independently confirm first stable v0.21.6, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/7c799a6565dca33ad8774cb01efb17f88a8c7c43
- **Half:** both | **Confidence:** high

**What changed.** terminal.vercel_image defaults to vercel/sandbox/universal:latest for fresh sandboxes. Migration 49 removes copied node24 settings in config and the mirrored environment variable while preserving other explicit runtime choices; a retained runtime overrides the image. Restored snapshots omit both runtime and image arguments, so existing snapshots do not become the new base.

**Operator consequence.** Record the resolved image or an intentional runtime pin when comparing Vercel environments across v0.21.6. Test fresh sandboxes separately from restored snapshots; they have different migration behavior.

## 29. Voice turns request no reasoning or the route's lowest valid effort

- **Date:** 2026-10-07
- **Channel:** `tagged-release` (first stable v0.21.6)
- **Ancestry evidence:** Commits 98a6dcf586788dc16f25cac1ce40edc6259dd108 were read as production diffs; commit date 2026-10-07 UTC. Read-only merge-base checks independently confirm first stable v0.21.6, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/98a6dcf586788dc16f25cac1ce40edc6259dd108, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L788-L790
- **Half:** capability | **Confidence:** high

**What changed.** auxiliary.voice_chat.reasoning_effort now defaults to none, including when the voice slot follows the session model. Routes that cannot disable reasoning receive their lowest valid behavior, and rejection state stays scoped to the voice route. Typed turns retain their configured reasoning.

**Operator consequence.** Check the voice effort setting when quality matters and test spoken work separately from text. The default changes the latency/reasoning trade; no measured latency or quality improvement is established by this receipt.

## 30. Intel macOS and Termux stable artifacts become opt-in and were omitted from v0.21.7

- **Date:** 2026-10-11
- **Channel:** `tagged-release` (first stable v0.21.7)
- **Ancestry evidence:** Commits 5f9b77cce07870e5c0bce2dd42f4ae5d069f3d7e were read as production diffs; commit date 2026-10-11 UTC. Read-only merge-base checks independently confirm first stable v0.21.7, absent from its predecessor. No upstream code was executed.
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/5f9b77cce07870e5c0bce2dd42f4ae5d069f3d7e, https://api.github.com/repos/NousResearch/hermes-agent/git/tags/ec0f68f50d19dd439ff0ed54b4acc764dadb4e50, https://hermes-assets.nousresearch.com/releases/tag/rc.15-v0.21.7/release-candidates.json
- **Half:** both | **Confidence:** high

**What changed.** Stable release builds omit Intel macOS desktop and Termux APT unless explicitly requested. The actual rc.15 claim sets includeMacosIntel=false and includeTermux=false; its hashed manifest lists macOS arm64 and Windows artifacts only. The policy leaves APT indexes on the previous release when Termux is not built. Exact October 13 APT and Microsoft Store versions were not recovered.

**Operator consequence.** Do not infer platform-version parity from the newest GitHub stable. Intel/Termux users need a checked channel/version; a source install needs its own platform acceptance. Listed Windows artifacts do not prove Store ingestion or successful installation.

## 31. Late October 13 v0.22.0 attempts leave main ahead of the last in-window stable

- **Date:** 2026-10-13
- **Channel:** `main-unreleased` (attempt refs are locks, not published prereleases)
- **Ancestry evidence:** Annotated attempt and abandonment objects were read with git cat-file. Tagger epochs convert to the UTC times below; read-only rev-list gives 0 behind / 756 ahead for v0.21.7...e06df9c2eae6901f4c88f464e0ae6e753c0428b8. The official release API confirms publication outside the cutoff.
- **Receipt:** https://api.github.com/repos/NousResearch/hermes-agent/git/tags/8b8cf0f47f8aaacb0d01b213d7b46dd607af7b3b, https://api.github.com/repos/NousResearch/hermes-agent/git/tags/0c3014a34334ab372b18be3e0ccb193e6eac1614, https://api.github.com/repos/NousResearch/hermes-agent/git/tags/5f7059a40a642486d3096e31774d0fad53f9ca1d, https://github.com/NousResearch/hermes-agent/commit/e06df9c2eae6901f4c88f464e0ae6e753c0428b8, https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.0
- **Half:** both | **Confidence:** high

**What changed.** At the full UTC cutoff, rc.1-v0.22.0 was cut at 21:24:15Z, abandoned at 22:33:48Z, and rc.2-v0.22.0 cut at 22:34:10Z. These were attempt locks, not stable or public prereleases. The last in-window main commit was e06df9c2eae6901f4c88f464e0ae6e753c0428b8, committed 22:07:03Z and 756 commits beyond v0.21.7. v0.22.0 publication followed at 2026-10-14T03:21:46Z, outside this UTC window.

**Operator consequence.** Use the explicit UTC cutoff for this profile. v0.21.7 is its stable answer, while the late main commit and attempt locks are source state only. A moving stable command run after the cutoff is not historical reproduction; pin the audited source commit or image digest.

## Prior claims re-checked

Active entries in the prior profile are evaluated separately from whether this shorter posture retains them. A retained fact must still change a current operator decision; retired entries remain in draft frontmatter with their earlier evidence and verification date.

- gitspawn-fixed-v2026-9-7: retire the old sufficient-floor claim; section 1 moves this defect's floor to v0.21.6. Earlier fixed-key overrides remain.
- computer-use-unapproved: the shared gate still uses cua:<action>:<mode> keys at v0.21.7 (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/computer_use/tool.py#L380-L394). Scope it with sections 2 and 9, not an all-tools safety claim.
- turn-cap-unlimited: verified as current defaults, above. Retain for spend decisions.
- unattended-mode-deny: retire its universal gateway reading; section 2 replaces it.
- deny-list-in-containers: current isolated-container fast path checks user denies then approves; host-access containers take normal flow (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L1128-L1169). Retain only this scoped reading.
- multiplex-profile-leak and webhook-route-colon: named email scoped reads and authenticated webhook user_id policy still hold (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/platforms/email/adapter.py#L761-L767, https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/platforms/webhook.py#L370-L380). Do not infer complete profile isolation; sections 17 and 18 add distinct credential paths.
- approval-gate-integrity-v2026-9-21: partly superseded by tirith removal; guardian errors still log/escalate. The bun/deno/dynamic-shell patterns were not traced. Retire the composite claim in favor of scoped current facts.
- vault-and-real-profile-browsing: retire the old joint opt-in reading; section 14 corrects it.
- oneshot-footprint-and-curator-builtins: stream-json still exists (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/_parser.py#L264-L266), one-shot child default=2 (config_defaults.py L1386), skills auto_load and built-in pruning defaults remain (L1463, L1511). These checks do not independently trace every one-shot effect.
- delegation-docs-match-config: child iterations=250 and concurrent children=10, one-shot=2 and auto_approve=False are verified defaults (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1354-L1390); tagged delegation docs agree (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/user-guide/features/delegation.md#L345).
- three-approval-fixes-in-v2026-8-19, skill-scan-on-pull-tagged and steer-stop-and-update-honesty-tagged: could not verify current enforcement. Inherited commits/config do not clear these contracts; moved to leads below. The updater now has the separate current section 4.
- approval-guardrails-tagged-v2026-8-3: smart_policy and breaker defaults remain; approvals suggest exists (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/approvals_suggest.py#L1-L5). That is not blanket re-verification of historical enforcement.
- curator-autonomous-skill-maintenance and self-improvement-loop-background-review: current defaults for weekly curator, consolidation/pruning and unapproved writes/nudge interval are verified above; runtime efficacy is not measured.
- gateway-service-restart-readiness, pluggable-model-provider-modules and kanban-durable-multiagent: could not verify their functional contracts from module presence; move to leads and retire from this posture.
- long-term-memory-session-key: advertised/parsed at v0.21.7 (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/platforms/api_server.py#L1825-L1830), not a proof of third-party memory behavior after extraction.
- goal-persistent-cross-turn: command presence only (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/commands.py#L149-L151); cross-turn durability was not traced, so drop it from current prose.
- security-redaction-on-by-default: verified default, but section 25 fixes a path it did not cover.
- platform-channel-allowlists: allowed_channels/allowed_chats and gateway.allow_all_users=False remain (config_defaults.py L1532, L1544, L1630, L2132). SimpleX, A2A and signing-secret paths need separate sections 19-22.
- mistralai-quarantine-graceful-disable: superseded. Exact mistralai==2.4.8 lazy pin is back, outside [all] (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/pyproject.toml#L416-L424); old quarantine remains in startup advisory code. Drop the obsolete current-disable posture.
- pypi-distribution-and-lazy-install: superseded by correction section 15; current source installer still uses lazy heavy-dependency handling, not an active PyPI distribution.
- native-windows-beta: retire the old beta label. The tagged README says fully supported (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/README.md#L61), but acceptance and Store ingestion for this release were not established; sections 5 and 30 supply artifact facts.
- hermes-proxy-credential-router: parser presence does not re-verify full routing behavior; drop from this posture.
- honcho-identity-mapping: retire the bundled-provider claim; section 10 places optional Honcho in the catalog. External identity mapping was not audited.
- credential-pool-isolation-fallback: could not verify; retained as a lead, not a current fact.
- supply-chain-advisory-checker: startup checker and acknowledged-list configuration are present (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/user-guide/security.md#L941-L943); this does not close advisory coverage in section 13.
- v0-15-multi-agent-and-docker-optin: dashboard insecure flag is ignored (section 8); multi-agent part was not traced. Retire the composite.
- v0-17-fail-closed-wave-tagged: inspected intake path gates own-policy adapters (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/authz_mixin.py#L460-L480). This is not a proof of every adapter; separate defects are sections 19-22.
- managed-etc-hermes-scope: /etc/hermes remains the default managed directory (https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/managed_scope.py#L31). This establishes host configuration scope, not identity or an OS sandbox.

## Carry-forward answers

- GitSpawn/webhook advisory publication: 17 source-cited IDs including GHSA-7x36 and GHSA-2fmg were inaccessible in queried GitHub surfaces. The September VulnCheck range describes only earlier GitSpawn. No new Hermes-product CVE was found in the queried UTC window, not proof that no disclosure exists (section 13).
- pre_tool_call hook action response: first stable v2026.9.24; action:approve asks, decision:approve allows (section 11). Policy-plugin exceptions fail closed from that stable too (section 16).
- Leaner core: six optional memory providers plus integrations were removed in tags. A configured home can migrate to third-party catalog code; a fresh home still uses built-in memory (section 10). Langfuse follows only on main/canary in this window.
- Identity: the self-hosted dashboard OIDC provider was present before this window and maps claims to email; group/role mapping was not found. Retire the old assertion of no SSO. Tagged implementation: https://github.com/NousResearch/hermes-agent/tree/v0.21.7/plugins/dashboard_auth/self_hosted. A tested role/group authorization path would settle the remaining identity question.
- Setup-driven plugin installs: live activation is in v2026.9.24 and changes the next turn of each open chat in the profile; approval of installation is a wider authority change than one tool call (section 10).

## Operator questions settled

- Self-improvement: optional provider custody moves to catalog code for configured homes, not every default install. Skills and MCP activation can change ongoing chats. The built-in memory and curator write defaults still deserve an explicit operator choice (section 10 and defaults).
- Long work and portability: provider-correct reasoning replay reaches v0.21.7, inspectable cron degradation reaches v0.21.6, and default compaction permits more pre-compaction context. These are concrete mechanisms, not measured end-to-end throughput gains (sections 12, 26, 27).
- Embedding: stable update policy and release digest/manifest receipts improve reproducibility. The installer remains main-first and skipTests=true in both audited SemVer stables leaves acceptance work with the operator (sections 4-5).
- Authority: host-side startup Git/LSP, browser placement, default vault access, credential routing/export and exact hook grammar require separate boundaries (sections 1-3, 9, 11, 14, 16-25).

## Leads not promoted

- Historical Docker stable/latest aliases and October 12 push times, plus the October 13 stable desktop pointer: no preserved payload. Today's values cannot certify that date. Use the final release tag, attempt record and hashed immutable candidate manifest instead.
- Exact October 13 Termux APT/Microsoft Store feed versions and canary downloads: unrecovered. Listed artifacts and build policies are not delivery or installation proof.
- Claimed live install.sh byte identity and current Docker image-size observations: no preserved dated payload used for publication. Tagged installer defaults and the change author's image measurement are narrower evidence.
- Prior current-enforcement holds based only on ancestry for three-approval-fixes-in-v2026-8-19, skill-scan-on-pull-tagged and steer-stop-and-update-honesty-tagged: could not verify. Trace current callers before restoring them.
- Functional Kanban durability, provider-module extensibility, gateway restart/readiness, persistent-goal semantics, proxy routing, credential-pool fallback isolation, bun/deno and dynamic-shell approval patterns: not traced through current consumers. File presence or config is insufficient.
- Full advisory absence across OSV/Dependabot/aliases/private disclosures, and the exact exhaustive 32-total/15-dependency GHSA census: not established; section 13 is the accepted bounded result.
- Writing lane reported no Hermes/Nous/Teknium match among 161 items from 15 feeds; not used as a capability fact. Web aggregator summaries, pre-window informal GitHub security assessments, and unopen Manifold/Tenable write-ups are discovery only.
- CVE-2026-108593 concerns authenticated 9router configuration injection and is excluded as a Hermes-product defect.
- X leads about being more like Pi and a 1,393-subagent run were not re-fetched. No quoted social statement or product fact is promoted from them.
- npm hermes-agent is an unofficial bridge; package publication history alone does not reconstruct its old latest alias.

## Surfaces checked

Original researcher: vendor release objects and bodies; tagged defaults, approvals, updater, installer, LSP, vault, sandbox placement, migration and catalog code; read-only stable/canary/attempt ancestry; Actions jobs; public GitHub advisory/NVD queries; package/Docker records; vendor download pointers; writing/search discovery. See the independent crosscheck for exact original surfaces and its bounded results.

Write-up author: all 16 miss receipts checked as pinned production diffs and read-only ancestry in the verifier clone; current policy-hook enforcement; raw pinned voice and cron-health implementations; final/attempt/abandonment tag objects; independently fetched rc.15 manifest with SHA256 match; official release API publication timestamps for all three in-window stables and the out-of-window v0.22.0 boundary. No cloned code was executed. Missing blobs were fetched as text into memory, never through a Git fetch or a checkout. No historical moving registry payload was reconstructed.

## Not reached

Runtime/exploit reproduction; upstream tests or builds; skipped-release job logs; actual desktop acceptance and Microsoft Store ingestion; Termux/APT and canary feed versions; Hermes Cloud update mechanics; role/group mapping enforcement; external catalog plugin execution/telemetry and license audits; prior functional contracts listed under leads. Better replay, bigger context and voice effort defaults do not establish measured model capability, cost savings or end-to-end completion.

## Crosscheck applied

Applied all 11 CORRECTED numbered verdicts and retained the 4 VERIFIED mechanisms, with narrower operator wording where necessary. There were no wholly REFUTED or UNVERIFIABLE numbered sections to delete. Removed rejected universal advisory/default-memory claims and moved unverifiable historical pointers and prior enforcement holds to leads. Added and independently checked all 16 misses as sequential sections 16-31. Full UTC cutoff replaces the morning-only count; baseline and July distribution retirement remain explicitly labeled corrections, not new release events. Final public posture must use only these corrected facts.
