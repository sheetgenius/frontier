---
schema_version: bitter.frontier_harvest.v0
provider: flue
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/flue.yml
channels_present: [tagged-release]
window_volume: 4 material changes, 4 capability-bearing, 2 defect-bearing, 0 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- flue (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Flue v2.0.2 renames the sandbox types to their roles and replaces the cloudflare-shell blueprint with cloudflare-computer

- **Date:** 2026-08-04 | **Version:** v2.0.2
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/withastro/flue/tags` lists v2.0.2 -> a171cc1bc8a552775a820ae3d343ccd09597cc8c (non-prerelease, no rc/beta/alpha suffix). `gh api repos/withastro/flue/compare/v2.0.2...a171cc1bc8a552775a820ae3d343ccd09597cc8c` returned {"status":"identical","ahead_by":0,"behind_by":0}, so the tag dereferences to that commit and the CHANGELOG 2.0.2 section is inside the tag's history. `gh api repos/withastro/flue/releases` returns an empty array, confirming the contract's note that the version-tagged CHANGELOG is the only receipt surface.
- **Receipt:** https://github.com/withastro/flue/blob/a171cc1bc8a552775a820ae3d343ccd09597cc8c/CHANGELOG.md
- **Half:** capability | **Confidence:** high

**What changed.** The sandbox surface was renamed to match its roles, with the old names kept as deprecated aliases: `SessionEnv` becomes `Sandbox` (the live environment handle behind `harness.sandbox` and the standard tools), `SandboxApi` becomes `SandboxDriver` (the per-provider adapter interface), `createSandboxSessionEnv()` becomes `sandboxFromDriver()`, `SessionToolFactory`/`SessionToolFactoryOptions` become `SandboxToolFactory`/`SandboxToolFactoryOptions`, and `SandboxFactory.createSessionEnv()` becomes `createSandbox()`. A factory implementing only the legacy `createSessionEnv()` still initializes, with a one-time deprecation warning. In the same release the `cloudflare-shell` blueprint is replaced by `cloudflare-computer`, built on `@cloudflare/computer`, which hosts a durable SQLite-backed workspace inside the agent's own Durable Object with a `just-bash` shell backend and can escalate to a container backend where a JavaScript shell is not enough; the adapter provides a real `exec()` and keeps the framework's standard tool set instead of substituting a code tool. `flue add cloudflare-shell` and the old docs URLs redirect to the successor.

**Operator consequence.** No forced migration: upgrade to v2.0.2 and keep running on the deprecated aliases. Do rename in new code, because the rename is the project telling you which primitive it considers first-class -- the repo description now reads "The sandbox agent framework" rather than the harness slogan the contract registered this source on. If you were standing on `cloudflare-shell`, treat the redirect as a real port: `cloudflare-computer` keeps the standard tool set instead of substituting a code tool, so an agent that was written around the old code-tool shape needs re-testing, not just a rename.

## 2. Flue v2.0.2 makes conditional tool additions prompt-cache-safe on Anthropic models and writes down the actual cache contract

- **Date:** 2026-08-04 | **Version:** v2.0.2
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Same tag as above: `gh api repos/withastro/flue/compare/v2.0.2...a171cc1bc8a552775a820ae3d343ccd09597cc8c` returned status "identical", so the 2.0.2 CHANGELOG section is in the history of the stable tag v2.0.2. Not a prerelease (no rc/beta/alpha in the tag name; the last prerelease tag in the repo is v1.0.0-beta.9).
- **Receipt:** https://github.com/withastro/flue/blob/a171cc1bc8a552775a820ae3d343ccd09597cc8c/CHANGELOG.md
- **Half:** both | **Confidence:** high

**What changed.** A tool mounted by the rerender that follows a settled tool batch is now anchored to that batch's final tool result. On current first-party Anthropic models (Claude 4.5 and later, excluding Haiku) that keeps the added tool definition out of the cached prompt prefix instead of invalidating it; other providers ignore the anchor and their requests are unchanged. The anchor persists with the run and is restored on rehydration, so a rehydrated context matches the live loop exactly, and the internal reduced-state format counter bumps to 2. The Tools guide now states the real contract: tool-set changes rewrite the native tools array and invalidate the provider prompt cache, except for additions unlocked by a completed tool call on those models (#545).

**Operator consequence.** If you build agents that mount tools conditionally mid-run -- the standard progressive-disclosure pattern -- upgrade to v2.0.2 and measure your cache-hit rate again before you re-tune anything. This is the difference between paying full prefix cost on every conditional mount and paying it once. Note the boundary before you generalize: it is an Anthropic-model behaviour, Haiku is excluded, and every other provider gets the old invalidation. A cache saving observed on Claude 4.5 through Flue is a fact about that pair, not about the harness.

## 3. Flue v2.0.2 publishes an Agent Behavior reference page stating the runtime's built-in limits as a versioned contract

- **Date:** 2026-08-04 | **Version:** v2.0.2
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** The announcement of the page is a CHANGELOG entry inside stable tag v2.0.2 (`gh api repos/withastro/flue/compare/v2.0.2...a171cc1bc8a552775a820ae3d343ccd09597cc8c` -> status "identical"). The docs page itself is an unversioned marketing/docs surface with no tag or SHA behind it -- I fetched flueframework.com/docs/reference/agent-behavior/ directly and it resolves with the sections and numbers below, but that URL is a moving target and is cited as the docs surface only. The receipt for the change is the tagged changelog, not the page.
- **Receipt:** https://github.com/withastro/flue/blob/a171cc1bc8a552775a820ae3d343ccd09597cc8c/CHANGELOG.md
- **Half:** capability | **Confidence:** medium

**What changed.** A new reference page collects the out-of-the-box runtime contract in one place: built-in tool parameters and truncation limits, environment defaults, message admission and turn-boundary joining, context composition and compaction, and the enforced limits. The live page states `read` truncates at 2000 lines or 50 KB (whichever hits first), `bash` tail-truncates at 2000 lines or 50 KB, `grep` caps at 100 matches and 500 characters per line, `glob` at 1000 paths, the compaction reserve is model-aware and capped at 20,000 tokens with 8,000 tokens kept verbatim by default, and delegation depth is capped at 4 (a deeper task chain fails).

**Operator consequence.** Read it before you attribute an agent's failure to the model. Most of the "the agent didn't see the file" and "the agent lost the thread" reports in a harness like this are one of these numbers firing silently, and until now you had to read source to find them. Two are worth writing into your own runbook: the delegation depth cap of 4 is a hard failure, not a degradation, and the 8,000-token verbatim keep is what actually survives compaction. Standing on a docs page, not on code -- verify each number against your own runtime before you design around it.

## 4. Flue v2.0.3 takes ownership of the Cloudflare Agents SDK pin instead of leaving it to a scaffolded range

- **Date:** 2026-08-05 | **Version:** v2.0.3
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/withastro/flue/tags` lists v2.0.3 -> bf86b8726f5ba189844185fdbeca0e194344ded1; `gh api repos/withastro/flue/compare/v2.0.3...bf86b8726f5ba189844185fdbeca0e194344ded1` returned {"status":"identical","ahead_by":0,"behind_by":0}. Stable tag, no prerelease suffix. Date note: the tag commit's committer date is 2026-08-05T00:04:42Z (UTC) while the CHANGELOG header reads "2.0.3 - 2026-08-04"; both fall in w1.
- **Receipt:** https://github.com/withastro/flue/blob/bf86b8726f5ba189844185fdbeca0e194344ded1/CHANGELOG.md
- **Half:** both | **Confidence:** high

**What changed.** The Cloudflare Agents SDK (`agents`) becomes a dependency of `@flue/vite` rather than something each project declares. The generated Worker entry is the only code that imports the SDK, so the package that generates it now ships it, and every project runs the SDK version Flue was tested against instead of whatever a scaffolded semver range resolves to on install day. `flue init --target cloudflare` stops writing the dependency and existing projects can delete theirs; a project that declares its own `agents` dependency still wins, with the plugin falling back to its bundled copy only when the project's `node_modules` chain has none. This also unbreaks fresh installs, which had begun failing on an `ai` peer conflict internal to `agents@0.14.5` -- the newest version the scaffolded `^0.14.2` range had come to resolve. The scaffolded `wrangler` range moves to `^4.113.0`.

**Operator consequence.** If a Flue Cloudflare scaffold stopped installing in the last days of July or early August, this is the fix -- upgrade to v2.0.3 and delete your own `agents` dependency. The wider lesson is the one this publication keeps finding: a floating caret range in a scaffold is a time bomb that detonates on a day nobody chose, and the framework pulling the pin inside its own package is the correct fix. Audit your own generated templates for the same shape.

## Researcher lane notes

All three contracts were read before any surface was touched, and no open-web search was used for any of the seventeen findings -- every receipt is a GitHub release, a SHA-pinned changelog, or the project's own homepage.

CHANNEL DISCIPLINE. Every finding is tagged-release and every one carries ancestry evidence, not date evidence. For Flue I dereferenced each tag and ran the compare API against it (`compare/v2.0.2...a171cc1` and `compare/v2.0.3...bf86b87`, both "identical"), which also confirms the contract's standing note that github.com/withastro/flue/releases is empty and the version-tagged CHANGELOG is the only receipt surface. For Eve I proved containment for twelve individual change commits by running `compare/eve%40<prev>...eve%40<tag>` and checking the returned commit list -- the commit lists are quoted in each channel_evidence field. Note the URL-encoding trap for anyone repeating this: Eve's tags contain `@`, and `gh api repos/vercel/eve/compare/eve@0.36.0...20a5201` 404s while `eve%400.36.0` works. Every Eve release in the window returned prerelease=false and draft=false.

WHAT I DELIBERATELY DID NOT CLASS AS PRERELEASE. Two Eve features carry the word "experimental" -- the `agent/instrumentation/` provider layout (0.34.0) and `experimental.subagentPersistentSessions` (0.30.7). Those are maturity labels on opt-in flags inside stable tags, not prerelease channels, so I classed them tagged-release and put the experimental status in the finding text where an operator will actually read it.

AGENT FLYWHEEL RETURNED ZERO FINDINGS, AND THAT IS THE FINDING. Its contract bounds weekly detection to releases and tags and explicitly lists `untagged_main_branch_commits` as rejected evidence. There has been no tag since v0.7.0 on 2026-06-26 -- fifty-two days. Meanwhile main took 55 commits inside this window, and they are not noise: they touch installer retry classification and HTTP 429 handling, a standalone Internal Checksum Guard so installer drift fails closed, preserving an operator-audited SLB binary during nightly updates, setting Claude Code's `cleanupPeriodDays` explicitly so 30-day pruning stops silently deleting session history (#330), recovering from systemd runtime masks on agent-mail.service (#328), and roughly a dozen bundled-tool checksum refreshes. Under the contract I cannot report any of it, and I have not. But the gap is structural rather than incidental, because the README pinned at v0.7.0 documents the default one-liner as installing from `/main/install.sh` with a cache-busting query string. The tag is not what operators run. I have recorded that as a carry-forward answer with a tagged receipt rather than smuggling untagged commits in as findings, and I flag it for the coordinator: for this one source the publication's central rule runs backwards, and a future contract revision may need a bounded mechanism for it. Two operator questions cannot be closed at the release surface as a result -- whether the next tag fixes the v0.7.0 mode boundary, and which bundled agent versions are pinned.

DATING GAPS, STATED RATHER THAN GUESSED. Flue's homepage no longer carries the "Agent = Model + Harness" formula this source was registered on, and the repo description now reads "The sandbox agent framework." Both are undated moving surfaces. I can receipt the current state and I can receipt the in-window v2.0.2 rename that makes `Sandbox` the first-class handle, but I cannot prove the repositioning itself happened inside the window -- v2.0.0 on 2026-07-31 is the likelier moment, four days before it opens. Reported as a carry-forward answer with the caveat attached, not as a w1 change. Flue's v2.0.3 also has a two-date problem: the CHANGELOG header says 2026-08-04 while the tag commit is 2026-08-05T00:04:42Z UTC. Both are w1; I used the git date and noted the discrepancy.

SECURITY. `gh api .../security-advisories` returned empty for all three repositories, so there is no CVE or GHSA to resolve this window. The one security-class defect is eve@0.30.0's `localDev()` fix, which I have classed as authentication bypass: a request `Host` header could obtain the synthetic local-dev principal on a self-hosted server. It has no advisory -- it is a release-note line -- which is worth saying plainly, because an operator watching a CVE feed would not have seen it. Four further findings are marked security_relevant for authority-surface reasons rather than vulnerability reasons: the approval-policy responder authentication (0.34.0), the trace-content default flip (0.35.0), extensions gaining the ability to mount channels and schedules (0.38.0), and a child session inheriting the parent's live sandbox (0.39.0).

BOTH HALVES. Twelve of seventeen findings are capability or both; the harvest is not a defect list. The single loudest capability signal is not a feature at all -- it is eve@0.36.0 changing its default agent model from Claude Sonnet 5 to `zai/glm-5.2` in a routine release with a one-line note, verified as a code change (`default-agent-model.ts` plus the setup picker) rather than a docs claim.

VOLUME NOTE FOR THE EDITOR. Eve alone shipped ten minor versions in fourteen days and produced thirteen of the seventeen findings; four of those are breaking changes. I compressed aggressively -- roughly forty release-note entries were read and discarded as noise (dependency bumps, CLI polish, registry search formatting, Windows path fixes, snapshot-copy performance work). If the digest needs fewer, the four I would defend hardest are eve@0.30.0 (the Host-header bypass), eve@0.34.0 (approval policies that authenticate the responder), eve@0.36.0 (the default-model swap), and Flue v2.0.3 (the harness taking ownership of a transitive pin).

An unexpected cross-source echo worth flagging: eve@0.39.0 promoted `chatgpt()` to stable with Codex-owned authentication and local-only deployment safeguards, i.e. a framework borrowing another harness's subscription credential rather than requiring a metered API key. That sits directly on the same axis as Agent Flywheel's published budget, which assumes Claude Max and ChatGPT Pro subscriptions rather than API spend. Two unrelated sources converging on subscription-backed agent execution in the same fortnight may be a thread for the synthesis.

## Surfaces checked

- sources/flue.yml + sources/flue.notes.md (contract read first)
- sources/eve.yml + sources/eve.notes.md (contract read first)
- sources/agent-flywheel.yml + sources/agent-flywheel.notes.md (contract read first)
- github.com/withastro/flue -- repo metadata, tags (27), releases (empty, as the contract predicts), main-branch commits 2026-08-03..2026-08-18, branches, merged PRs in window (0)
- github.com/withastro/flue CHANGELOG.md pinned at v2.0.2 (a171cc1) and v2.0.3 (bf86b87)
- flueframework.com homepage
- flueframework.com/docs/reference/agent-behavior/ (new reference page announced in v2.0.2)
- github.com/withastro/flue security advisories (none published)
- github.com/vercel/eve -- repo metadata, full paginated release list, release notes for eve@0.30.0 through eve@0.39.0 and every 0.30.x/0.31.x patch in window
- github.com/vercel/eve compare API for tag-containment ancestry on 12 change commits
- github.com/vercel/eve security advisories (none published)
- github.com/Dicklesworthstone/agentic_coding_flywheel_setup -- releases (7, newest v0.7.0 2026-06-26), tags (7, same set), main-branch commits in window (55)
- github.com/Dicklesworthstone/agentic_coding_flywheel_setup README.md pinned at the v0.7.0 dereferenced commit edaee4f
- github.com/Dicklesworthstone/agentic_coding_flywheel_setup security advisories (none published)
- agent-flywheel.com homepage
