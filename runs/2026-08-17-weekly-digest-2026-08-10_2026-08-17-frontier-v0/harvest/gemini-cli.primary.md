---
schema_version: bitter.frontier_harvest.v0
provider: gemini-cli
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/gemini-cli.yml
channels_present: [main-unreleased, tagged-release, preview-or-beta]
window_volume: 6 material changes, 3 capability-bearing, 4 defect-bearing, 2 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- gemini-cli (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Google starts merging agent-authored PRs into the Gemini CLI default branch

- **Date:** 2026-08-17 | **Version:** unreleased (post-v0.55.1 main)
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** `git tag --contains 2a87e7be1` / `a5c49a5c4` / `194edea47` / `e0e846bf0` returns empty -- these commits are in no tag at all, stable or prerelease. Latest stable tag v0.55.1 was published 2026-08-11T21:15Z, before the first SSR merge on 2026-08-14T23:51Z. Confirmed against the tag list from `gh api repos/google-gemini/gemini-cli/tags`.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/28812
- **Half:** capability | **Confidence:** high

**What changed.** Between 2026-08-14 and 2026-08-17, 29 PRs titled `[SSR Agent] Issue Fix (NNNNN): ...` were opened on google-gemini/gemini-cli by @joneba-google, each closing a long-standing issue. Eight merged to main inside the window (#28811, #28812, #28813, #28814, #28819, #28820, #28847, #28864); three more merged 2026-08-18T00:20Z; 13 were closed unmerged; 5 remained open at window end. They are output of the caretaker-agent PR-generation pipeline, not hand-authored: the body of #28811 leaks the generator's own paths, e.g. `.../tools/caretaker-agent/evals/pr-generation/run_outputs/onboarded_triaged_3.5_flash/agent_environments/issue_19826/...`, naming the model tier that wrote it. Humans are still in the loop -- #28812 carries an APPROVED review from @adamfweidman on 2026-08-17T05:11Z and a `gemini-code-assist[bot]` comment. Content is not cosmetic: #28812 (commit a5c49a5c4ab5ebe8119c3b363772ad043bbc4ceb) adds 3s/5s `execAsync` timeouts to the `ps` and PowerShell calls in `packages/core/src/ide/process-utils.ts` and makes `getProcessInfo()` fall back to empty defaults, changing TUI startup behaviour. #28811 rewrote the a2a-server environment-isolation tests -- the same package hardened by the v0.53.0 RCE fix. There is no doc, README, or roadmap entry describing the pipeline anywhere in the repo.

**Operator consequence.** Watch, and change how you read this repo's provenance. Starting 2026-08-14, `git log` on main no longer distinguishes human from machine authorship by author field -- every one of these lands under a human Google account with an `[SSR Agent]` title prefix as the only marker. If you vendor, fork, or audit gemini-cli, grep for `[SSR Agent]` in the log to segregate machine-authored commits, and read those diffs yourself rather than trusting the PR body, which is also machine-written. None of this is in a stable tag yet: it will first reach operators in the release after v0.55.1, so audit before you upgrade past it, not after.

## 2. Git subprocesses stop inheriting the workspace's own git config; git forced to ASK_USER in untrusted folders

- **Date:** 2026-08-13 | **Version:** unreleased (post-v0.55.1 main)
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** `git tag --contains c0d192452` returns empty -- the commit is in no tag, stable or prerelease. v0.55.1 (2026-08-11) predates it. Verified the code is absent from the tag: `git show v0.55.1:packages/core/src/utils/gitUtils.ts` has no `getSafeGitEnv`, while `git show e120d041e:packages/core/src/utils/gitUtils.ts` defines it.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/28792
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** PR #28792 (commit c0d192452b4e2df7efb6d62a60385f475bfd6779, merged 2026-08-13T22:03Z) adds `getSafeGitEnv()` in `packages/core/src/utils/gitUtils.ts` and routes every internal git subprocess through it -- GitService (checkpointing), WorktreeService, GrepTool's `git grep`, and the GitHub extension installer. It strips all inbound `GIT_CONFIG_*`/`GIT_CONFIG_PARAMETERS`, points `GIT_CONFIG_GLOBAL` and `GIT_CONFIG_SYSTEM` at /dev/null, and pins eight keys to inert values: `credential.helper`, `core.fsmonitor`, `core.hooksPath`, `core.sshCommand`, `core.editor`, `sequence.editor`, `diff.external` all emptied, `core.pager` set to `cat`. Separately, `PolicyEngine` gains an `isTrustedFolder` hook: in an untrusted workspace any parsed `git` invocation now returns ASK_USER, and -- explicitly -- that ASK_USER survives the `isKnownSafeCommand` override that previously promoted it to ALLOW. The same PR consolidates the a2a-server's second, divergent trust evaluator: `setIsTrusted()` used to return `getEnv('GEMINI_FOLDER_TRUST') === 'true'` (a feature-enable flag, not a verdict) falling back to a client-supplied `agentSettings.isTrusted`, and now calls `checkPathTrust` with `loadSettings(workspaceRoot, false)`; the executor stamps `GEMINI_CLI_TRUST_WORKSPACE` into the task env so downstream checks read one verdict instead of re-deriving it. Verified by reading the diff: `git show c0d192452 -- packages/a2a-server/src/config/config.ts`.

**Operator consequence.** This is the guard that was still reading from inside the workspace, and the fix is not in any release yet. On stable v0.55.1, a repository you did not write can ship a `.git/config` setting `core.pager`, `core.hooksPath`, `core.sshCommand` or `diff.external`, and those run when the agent invokes git -- while `git status`-class commands were auto-allowed as 'known safe' even in an untrusted folder. Until this ships: do not point v0.55.1 or earlier at an untrusted clone with checkpointing or worktrees enabled, or pre-neutralize the repo's local config yourself. Also test before adopting the fix -- blanking `credential.helper` and voiding global/system config changes how `gemini extensions install <github-url>` authenticates against private repos.

## 3. Capacity-exhaustion errors became terminal in stable v0.55.1; retries and a recovery TTL exist only on main

- **Date:** 2026-08-13 | **Version:** regression in v0.55.1; fix unreleased
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** The regression half is in stable: `git tag --contains 2139b121b` -> v0.55.1 (also d55e366f6 -> v0.55.1). The fix half is not: `git tag --contains fa2f27aee` returns empty. Confirmed at file level -- `git show v0.55.1:packages/core/src/availability/modelAvailabilityService.ts | grep markedAt` returns nothing, while the same file at e120d041e defines `markedAt` and the 30s sliding TTL.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/28790
- **Half:** defect | **Confidence:** high

**What changed.** PR #28599 then #28716 (commit 2139b121bc028e0b4c96b97385555b19c2dd629d, merged 2026-08-07T01:17Z, first stable v0.55.1 on 2026-08-11) reclassified `MODEL_CAPACITY_EXHAUSTED` / `MODEL_CAPACITY_EXCEEDED`, `INSUFFICIENT_G1_CREDITS_BALANCE`, and 429/499/503 responses with capacity-shaped messages as `TerminalQuotaError` -- no backoff even when the server supplies a retry delay, immediate model fallback instead. Issue #28761, filed 2026-08-10 against 0.54.4, reports the user-facing shape: repeated 'Usage limit reached for gemini-3.5-flash' while the CLI's own `/model` usage display shows 1-8% consumed. PR #28790 (commit fa2f27aee0464412e4ac455a4221b01a775ff9bc, merged 2026-08-13T18:20Z) calls this a 'critical capacity exhaustion retry regression' and restores graduated behaviour: unattended/non-interactive runs translate capacity errors back to ordinary retryable errors with exponential backoff (default 10 attempts) and never prompt for fallback; interactive runs get 2 silent jittered backoffs (1s, 3s) before the fallback dialog; and `ModelAvailabilityService` stamps `markedAt` and clears a capacity-terminal mark after a 30-second sliding TTL so a model is not dead for the whole session. Harder `'quota'` reasons stay permanently terminal.

**Operator consequence.** Hold at v0.54.x, or accept the behaviour, if you run gemini-cli unattended. On the current stable (v0.55.1, npm `latest` as of 2026-08-17) a single transient capacity blip terminates rather than backs off, silently downgrades you to a fallback model, and marks the preferred model unavailable for the rest of the session with no recovery path -- which in CI reads as a hard failure or a quality regression you cannot attribute. The fix has been on main since 2026-08-13 and is in no tag; watch for the next stable and re-test your unattended runs against it before trusting retry semantics again.

## 4. Gemini CLI v0.55.1 -- the 0.55 line's only stable, with release notes that overstate its contents

- **Date:** 2026-08-11 | **Version:** v0.55.1
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/google-gemini/gemini-cli/releases/tags/v0.55.1` -> prerelease:false, published_at 2026-08-11T21:15:10Z. No `v0.55.0` appears in `gh api repos/google-gemini/gemini-cli/tags` or in `npm view @google/gemini-cli versions`. Real content delta measured with `git log v0.54.4..v0.55.1` = 25 commits; the release body's Full Changelog link is `compare/v0.49.0-preview.0...v0.55.1`, spanning ~90 PRs.
- **Receipt:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.1
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** Stable v0.55.1 shipped 2026-08-11 and is npm `latest`. There is no v0.55.0 stable -- the line's first stable is .1. Genuinely new over v0.54.4 (25 commits): MCP OAuth token refresh repaired (#28481, below); macOS Seatbelt sandbox no longer crashes at startup when the six `.sb` profiles are stripped from a bundle -- they are now embedded in `sandboxBuiltinProfiles.ts` and written to a randomized temp file, and the `NODE_OPTIONS` argument inside the `sh -c` invocation is now shell-quoted to close an injection path (#28551, commit ac42fb0a24fe7349e9968e2359ef5232f1cb6e72, merged 2026-08-03T19:31Z); Cloud Workstations OAuth redirect URIs resolved dynamically (#28688); the capacity-exhaustion reclassification described separately; and the whole tools/caretaker-agent pipeline. The release body, however, lists roughly 90 PRs because its changelog was generated against v0.49.0-preview.0 rather than the preceding stable -- most of what it advertises shipped in v0.50.0 through v0.54.4 weeks earlier.

**Operator consequence.** Upgrade for the sandbox and MCP OAuth fixes, but read `git log v0.54.4..v0.55.1` rather than the release page to decide what you are actually getting -- the published notes are not a delta and will make you believe fixes are new when they are a month old. If you gate upgrades on release notes in an automated pipeline, this release is the counterexample that breaks that habit.

## 5. MCP OAuth token refresh repaired for discovery-configured servers

- **Date:** 2026-08-11 | **Version:** v0.55.1
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `git tag --contains eef19f25c` -> v0.55.1 (stable, non-prerelease per `gh api .../releases/tags/v0.55.1` prerelease:false). Commit eef19f25c325f35634bdf5fdea5f245414ed4390 merged to main 2026-08-10T19:49Z; first stable tag containing it is v0.55.1, published 2026-08-11T21:15Z.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/28481
- **Half:** defect | **Confidence:** high

**What changed.** For MCP servers added via OAuth discovery plus dynamic client registration (`gemini mcp add --transport http ...` with no explicit `oauth` block), `DynamicStoredOAuthProvider` passed an empty OAuth config to `refreshAccessToken`, which threw on the missing `clientId` before any network call -- and the catch block then deleted the stored credentials, so every reconnect forced a fresh interactive re-auth. `getValidToken` had the same gap and returned null silently. The fix resolves `config.clientId ?? credentials.clientId`, passes it into the refresh call, and persists it when saving the refreshed token in both paths. Fixes issue #27745.

**Operator consequence.** Upgrade to v0.55.1 if you run OAuth-backed MCP servers that were registered by discovery. Before this, refresh never worked for that class of server and the failure destroyed recoverable credentials -- meaning any long-running or headless session against such a server would eventually stall waiting for a human to re-authorize. After upgrading, confirm your stored credentials survive a reconnect rather than assuming it.

## 6. The preview channel is not ahead of stable -- v0.56.0-preview.1 is v0.55.1 minus one fix

- **Date:** 2026-08-11 | **Version:** v0.56.0-preview.1
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** `git log v0.55.1..v0.56.0-preview.1` returns a single commit, 8f0576950 `chore(release): v0.56.0-preview.1`. The reverse, `git log v0.56.0-preview.1..v0.55.1`, returns two: the v0.55.1 release chore and 58ba19945 (#28688, Cloud Workstations OAuth redirect). `git tag --contains 58ba19945` -> v0.55.1 only, not v0.56.0-preview.1. npm dist-tags: preview=0.56.0-preview.1, latest=0.55.1.
- **Receipt:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-preview.1
- **Half:** neither | **Confidence:** high

**What changed.** v0.56.0-preview.1 was cut 2026-08-11T19:46Z, about 90 minutes before v0.55.1 stable at 21:15Z, from a point on the branch that predates #28688. As a result the 0.56 preview tree contains zero feature commits beyond stable and is missing one OAuth fix that stable has. Six days of main-branch work -- the git-environment hardening (#28792), the capacity-retry restoration (#28790), the multi-turn rollback (#28801), the IDE directory-mismatch fix (#28729), and all eleven merged SSR-agent PRs -- are in no preview tag either; `git tag --contains` on each returns empty.

**Operator consequence.** Stop treating `npm i -g @google/gemini-cli@preview` as an early look at what is coming. For the 0.56 line as of 2026-08-17 it gives you strictly less than stable. If you canary against preview to catch regressions before they reach your users, that canary is currently blind: run your probes against the default branch instead, or wait for a preview cut that actually contains post-v0.55.1 commits.

## Researcher lane notes

Method: read sources/gemini-cli.yml and gemini-cli.notes.md before any web access. Made a blobless clone into scratchpad (no writes to /Users/honey/co/frontier) so every channel call could be settled by `git tag --contains <sha>` rather than by publication date. All 45 default-branch commits in the window were reviewed; every claim above is pinned to a tag, a PR, or a SHA-pinned blob.

Confidence and calibration notes:
- The SSR-agent story is the window's centre of gravity and it is fully receipted, but I want to flag one place I nearly got it wrong. PR #28818, closed unmerged, is titled 'Change steering eval test to always pass' -- which reads like an agent proposing to neuter a failing test. It is the opposite: `ALWAYS_PASSES` is the *stricter* eval policy name and the PR raises the bar from `USUALLY_PASSES`. I have left that claim out entirely rather than report the tempting version. Anyone re-reporting this lane should not resurrect it.
- Similarly, I did not claim the a2a-server `setIsTrusted` feature-flag bug was exploitable in stable. `git grep setIsTrusted c0d192452^ -- packages/` shows it had no production caller in the a2a-server before #28792 revived it. It is a latent-divergence story, not a live-vulnerability story, and the finding says so.
- Issue #28761 was filed against 0.54.4, which contains neither #28599 nor #28716 by ancestry (`git tag --contains` puts both in v0.55.1 only). PR #28790 says it closes #28761 and is 'related to' the other two. I have stated the ancestry facts and the maintainers' own words rather than asserting that #28716 caused the reporter's symptom; the causal chain is the maintainers' claim, not mine.

Gaps recorded honestly:
- `gh api repos/google-gemini/gemini-cli/security-advisories` returns an empty array, and `/advisories?ecosystem=npm&affects=@google/gemini-cli` returns only GHSA-wpqr-6v78-jr5g (critical, 2026-04-24, outside the window). So none of this window's security-relevant work -- HTTPS enforcement on the credential provider, the keychain tag validation, the NODE_OPTIONS quoting, the git-config neutralization -- carries a CVE or GHSA. Operators who rely on advisory feeds or `npm audit` will see nothing for any of it. That absence is itself the finding, and it is why every security item above is anchored to a commit rather than an advisory ID.
- The official docs site (https://google-gemini.github.io/gemini-cli/docs/) shows no changelog or what's-new surface and did not move materially in the window; `git log --since=2026-08-03 -- docs/` returns six commits, of which four are auto-generated changelog dumps and two are agent-authored one-liners. No doc, README, or roadmap entry exists anywhere in the repo for the caretaker-agent / SSR pipeline: `grep -rli 'caretaker|SSR agent|pr-generator' docs/ README.md ROADMAP.md` matches only the generated changelogs. There is therefore no docs-surface receipt for the window's biggest governance change, and I did not manufacture one.
- I did not run gemini-cli locally, so nothing here rests on a reproducible local probe. The git-config attack path in v0.55.1 is asserted from code reading plus the maintainers' own validation steps in #28792 ('set a custom pager, execute a git operation through Gemini CLI'), not from an executed exploit. If this lane's finding gets promoted to a signal, that probe is the obvious next verification step and would upgrade it from code-read to demonstrated.
- One unresolved smell I could not settle and am not reporting as a change: agent-authored #28811 rewrote `delete process.env['CODER_AGENT_WORKSPACE_PATH']` as `vi.stubEnv('CODER_AGENT_WORKSPACE_PATH', '')` in the a2a-server tests. Unset and empty-string are not the same value, and this is the package whose environment isolation the v0.53.0 RCE fix depends on. Every affected assertion happens to be truthiness-based, so the tests still cover what they claim to; but it is a machine-introduced semantic drift in a security-relevant test file, and it is the kind of thing worth watching as the SSR volume grows.
- Nightly tags were enumerated but deliberately not harvested, per the source notes' instruction not to over-weight nightly churn. Every nightly in the window maps to a main commit already covered above.

## Surfaces checked

- sources/gemini-cli.yml (source contract, read first)
- sources/gemini-cli.notes.md
- GitHub releases API: repos/google-gemini/gemini-cli/releases (full pagination)
- GitHub tags API: repos/google-gemini/gemini-cli/tags
- Release bodies for v0.54.0, v0.54.4, v0.55.1
- google-gemini/gemini-cli default branch commit log 2026-08-03..2026-08-17 (blobless clone, git log/git tag --contains)
- Merged and closed PRs #28431-#28884 (targeted), incl. all 29 [SSR Agent] PRs
- Issue #28761 (capacity-exhaustion regression report)
- GitHub security advisories: repos/google-gemini/gemini-cli/security-advisories (empty) and /advisories?ecosystem=npm&affects=@google/gemini-cli
- npm registry: @google/gemini-cli dist-tags, versions, publication times
- Official docs site https://google-gemini.github.io/gemini-cli/docs/
- docs/ tree in repo (git log --since=2026-08-03 -- docs/)
- Source read at pinned SHAs: packages/core/src/utils/trust.ts, packages/cli/src/config/settings.ts, packages/cli/src/config/trustedFolders.ts, packages/a2a-server/src/config/settings.ts, packages/a2a-server/src/config/config.ts, packages/a2a-server/src/agent/executor.ts, packages/a2a-server/src/http/app.ts, packages/core/src/utils/gitUtils.ts, packages/core/src/policy/policy-engine.ts, packages/core/src/availability/modelAvailabilityService.ts, packages/core/src/services/FolderTrustDiscoveryService.ts
