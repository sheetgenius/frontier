---
schema_version: bitter.frontier_harvest.v0
provider: eve
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/eve.yml
channels_present: [tagged-release]
window_volume: 10 material changes, 10 capability-bearing, 4 defect-bearing, 5 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- eve (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. eve 0.32.0 renames the approval-gate denial from deny to cancel and requires custom sandbox backends to implement stop()

- **Date:** 2026-08-11 | **Version:** eve@0.32.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/vercel/eve/releases` lists eve@0.32.0 published 2026-08-11T10:13:19Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.31.3...eve%400.32.0'` returned a 29-commit list containing both change commits 1702f91 (approval rename) and cbe7105 (sandbox stop) -- both in the history of the stable tag eve@0.32.0.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.32.0
- **Half:** both | **Confidence:** high

**What changed.** Tool approval responses now use `cancel` instead of `deny`, retaining `approve` for the positive response, to align the public protocol with the user-facing flow-control semantics. Separately, authored hooks, tools, and channel callbacks can stop their active sandbox through `ctx.getSandbox().stop()`; every built-in backend preserves the durable session for a later callback, and custom sandbox backend handles must now implement `stop()`.

**Operator consequence.** The rename lands on the exact surface this source is watched for. Anything that reads eve's approval stream -- audit logs, dashboards, compliance exports -- needs its matcher updated, and the semantic drift is worth arguing about rather than absorbing: `deny` is an authority verdict and `cancel` is flow control, and a log that records the second when an operator meant the first is a weaker record. If you maintain a custom sandbox backend, 0.32.0 is a compile break until you implement `stop()`; if you use a built-in backend, the durable session survives the stop, so treat `stop()` as suspension, not teardown.

## 2. eve 0.33.0 makes channel messages interrupt the running turn by default

- **Date:** 2026-08-11 | **Version:** eve@0.33.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/vercel/eve/releases` lists eve@0.33.0 published 2026-08-11T19:55:46Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.32.0...eve%400.33.0'` returned 4ded514 1ee27be 1bacd9a ac31852 2dd193b f29b782 672c054 ccaa596 2d9a794, containing the change commit 2dd193b -- in the history of the stable tag eve@0.33.0.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.33.0
- **Half:** capability | **Confidence:** high

**What changed.** Channel message sends now default to `turnPolicy: "steer"`, so an accepted message replaces the active turn through cancellation-backed steering without a separate cancel request. The previous wait-for-completion behaviour is still available by setting `turnPolicy: "queue"` on a channel or on an individual send. The same release makes dynamic models and subagents resolve without compiled fallbacks or placeholder configs: `defineDynamic` accepts only `events`, and dynamic model handlers must return a concrete selection.

**Operator consequence.** This is a default flip that changes what your agent does to work already in flight, and it arrived on a minor version. Before upgrading past 0.33.0, decide per channel whether an inbound message should kill the running turn. For a Slack or GitHub agent doing long tool work, steering is usually right -- a follow-up message means the human changed their mind. For anything transactional, or anything where a half-finished turn leaves external side effects, set `turnPolicy: "queue"` explicitly rather than inheriting the new default. Do not rely on the old behaviour surviving silently.

## 3. eve 0.34.0 adds request and response approval policies that can authenticate the responder, plus a durable instrumentation layer that traces approval waits

- **Date:** 2026-08-12 | **Version:** eve@0.34.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/vercel/eve/releases` lists eve@0.34.0 published 2026-08-12T22:57:52Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.33.3...eve%400.34.0'` returned a 24-commit list containing the minor-change commit 11908eb (approval policies) alongside the instrumentation commits c90a459, 29313be, 4138e64, d304544 and 1528fda -- all in the history of the stable tag eve@0.34.0. The instrumentation provider layout is labelled experimental in its own release note; that is a maturity label inside a stable tag, not a prerelease channel.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.34.0
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Tools and connections can now define optional `request` and `response` approval policies while preserving the existing function shorthand. Response policies can authenticate the responder and return a tagged allow or rejection decision, and authorization token results can expose a stable provider subject. Alongside it, an experimental `agent/instrumentation/` provider layout ships with durable lifecycle handlers: `agent.action` spans are reconstructed when runtime actions settle, including across worker replacement, recording each action's caller-accepted duration, kind, outcome, stable error code and subagent usage; human approval waits appear as durable `agent.approval` child spans; every lifecycle event carries a replay-stable `idempotencyKey` derived from durable eve identity so providers can upsert one record across retries and worker replays; and remote eve sessions join the caller action trace through W3C `traceparent`.

**Operator consequence.** This is the answer to the open question the contract has carried since registration -- who approves, and where is the pause recorded. Study it even if you never ship eve. A response policy that authenticates the responder means the gate finally distinguishes "someone clicked approve" from "the person authorized to approve clicked approve", which is the difference between an approval UI and an approval control. The durable `agent.approval` span with a replay-stable idempotency key is the other half: the pause becomes a record that survives worker replacement and does not double-count on replay. If you are building your own receipt layer for agent authority, these two properties -- responder identity on the decision, replay-stable identity on the record -- are the bar to clear.

## 4. eve 0.35.0 stops recording model and tool inputs and outputs in traces by default

- **Date:** 2026-08-13 | **Version:** eve@0.35.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/vercel/eve/releases` lists eve@0.35.0 published 2026-08-13T15:32:54Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.34.0...eve%400.35.0'` returned a 17-commit list containing the minor-change commit 3f92f7d -- in the history of the stable tag eve@0.35.0.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.35.0
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Instrumentation now records trace metadata without model or tool inputs and outputs by default. Content capture is opt-in: set `recordInputs` or `recordOutputs` to `true`, or use `EVE_TRACES_CONTENT=on` for the automatic local trace spool. This follows 0.34.0's redaction work, in which OpenTelemetry destinations can independently decline input or output content, redaction covers span attributes, exception and custom events, and status messages without mutating spans shared with other destinations, and providers can declare themselves metadata-only so eve never builds sensitive projections for them.

**Operator consequence.** Two opposite consequences, and which one applies depends on which side of the trade you were on. If you were relying on traces to debug what an agent actually said and did, your traces go quiet on upgrade and you must set `recordInputs`/`recordOutputs` explicitly. If you were shipping agent traces to a third-party observability vendor, the default just stopped exporting prompts, responses and tool payloads to them -- a real reduction in what leaves your boundary, and worth confirming against your own vendor contract before you turn it back on. The metadata-only provider tier is the design to note: it lets you send one class of telemetry to a vendor and keep the content class local, without hand-rolling redaction.

## 5. eve 0.36.0 changes the default agent model from Claude Sonnet 5 to zai/glm-5.2

- **Date:** 2026-08-13 | **Version:** eve@0.36.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/vercel/eve/releases` lists eve@0.36.0 published 2026-08-13T18:28:09Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.35.0...eve%400.36.0'` returned dc8a261 0f359fe ee8943b 2714386 20a5201 b58b2f2, containing the change commit 20a5201 -- in the history of the stable tag eve@0.36.0. The commit itself (`gh api repos/vercel/eve/commits/20a5201`, dated 2026-08-13T18:07:36Z, "Default new agents to zai/glm-5.2 (#1949)") touches packages/eve/src/shared/default-agent-model.ts, the setup model picker and its tests, README.md and seven docs files -- so this is a code default, not a docs claim.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.36.0
- **Half:** capability | **Confidence:** high

**What changed.** eve's default agent model becomes `zai/glm-5.2`. New agents created with `eve init`, config-less agents, and the setup model picker all now use GLM 5.2 instead of Claude Sonnet 5. The change lands in `default-agent-model.ts` and the interactive `select-model` flow, with README and docs updated to match.

**Operator consequence.** Pin your model explicitly and stop inheriting the framework's default -- that is the durable lesson regardless of which model you prefer. Concretely: any eve agent you scaffold after 0.36.0, and any agent running without an explicit model config, silently changes providers on upgrade, which changes cost, latency, tool-calling behaviour and where your prompts are processed. Re-run your evals rather than assuming parity. The wider signal is worth watching rather than acting on: a major US platform vendor moved its out-of-the-box default off a frontier US model onto an open-weights Chinese one, in a patch-cadence release, with a one-line note. Defaults are the loudest thing a harness says about the model layer, and this one says the model layer is now interchangeable enough to swap by default.

## 6. eve 0.36.0 moves SvelteKit deployment onto Vercel's stable services model and removes the experimentalServices escape hatch

- **Date:** 2026-08-13 | **Version:** eve@0.36.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Same stable tag as the default-model change: `gh api 'repos/vercel/eve/compare/eve%400.35.0...eve%400.36.0'` returned dc8a261 0f359fe ee8943b 2714386 20a5201 b58b2f2, containing the minor-change commit 2714386 -- in the history of eve@0.36.0 (prerelease=false per `gh api repos/vercel/eve/releases`).
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.36.0
- **Half:** both | **Confidence:** high

**What changed.** `eve/sveltekit` now deploys the agent through Vercel's stable services model. On Vercel builds it generates an eve Build Output service and a `/eve/v1/*` service route instead of writing legacy `experimentalServices` into `vercel.json`. The `configureVercelJson` and `servicePrefix` plugin options and the `EVE_SVELTEKIT_SERVICE_PREFIX` export are removed, and any generated `experimentalServices` block must be deleted from `vercel.json` by hand.

**Operator consequence.** A manual step on upgrade, not an automatic one: delete the `experimentalServices` block from `vercel.json` yourself, or your deployment carries a stale route definition the plugin no longer owns. If you set `servicePrefix` or `EVE_SVELTEKIT_SERVICE_PREFIX` to route eve somewhere other than `/eve/v1/*`, that control is gone -- check what else on your domain was relying on the custom prefix before you upgrade.

## 7. eve 0.37.0 exposes Vercel Sandbox Drives as mountable storage for live session sandboxes

- **Date:** 2026-08-13 | **Version:** eve@0.37.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/vercel/eve/releases` lists eve@0.37.0 published 2026-08-13T21:04:29Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.36.0...eve%400.37.0'` returned fe691aa 456c0a5 c77c661 7ab7d97 d6ac2d2 d0bb6af 9032e9f, containing the minor-change commit fe691aa -- in the history of the stable tag eve@0.37.0.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.37.0
- **Half:** capability | **Confidence:** high

**What changed.** Vercel Sandbox Drives are exposed, and authors can mount them when creating live session sandboxes. The same release changes CLI entry behaviour: running `eve` with no command initializes the current directory when no eve project is present and starts development when one is detected, and `eve init` now asks whether to scaffold a non-empty current directory in place or create a named subdirectory, with in-place scaffolds preserving unrelated files and overwriting generated paths.

**Operator consequence.** Watch rather than adopt. A mountable drive is the piece that lets state outlive a single sandbox session, which is the difference between an agent that re-clones and re-installs every run and one that keeps a warm workspace -- but it binds you to the Vercel sandbox backend specifically, and the contract's open question about which of the three backends (Vercel, Microsandbox, Docker) are first-class is now answered in Vercel's favour by this asymmetry. Separately, note the CLI behaviour change before you run `eve` in a populated directory expecting a no-op: a bare `eve` now scaffolds.

## 8. eve 0.38.0 replaces frontend stop() with turn-targeted cancel() and lets extensions contribute channels and schedules

- **Date:** 2026-08-14 | **Version:** eve@0.38.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/vercel/eve/releases` lists eve@0.38.0 published 2026-08-14T16:49:41Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.37.1...eve%400.38.0'` returned c0ca9a5 a7d34e5 7aacca9 8904392 775c061 abcd06d 4c3c475 bdd5a9b ccc604c e306fc3 48c1105 692c5c6, containing the minor-change commit 48c1105 and the extension commits 8904392 (channels) and 775c061 (schedules) -- all in the history of the stable tag eve@0.38.0.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.38.0
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** `stop()` on frontend agent bindings is replaced by `cancel()`. Cancellation now targets the exact durable turn through `MessageResponse.cancel()` while the binding stays attached through settlement. Separately, extensions can now contribute both channels and schedules: mounted channel and schedule IDs receive the extension namespace while authored route paths, cron expressions and handler behaviour remain unchanged. Built-in inbound hooks can also return `title` to set the workflow run title without changing the message sent to the model.

**Operator consequence.** Update any frontend that calls `stop()` -- this is the second approval- and cancellation-vocabulary rename in seven days, after 0.32.0's `deny`-to-`cancel`, and it is the clearest evidence available that eve's control-flow surface is not settled. The extension change is the more interesting one for the filesystem-first thesis: a channel or a schedule can now arrive from a package rather than from your own project tree, namespaced but live. Before installing a third-party eve extension, check what channels and schedules it mounts -- an extension can now give your agent an inbound surface and a cron trigger you did not author.

## 9. eve 0.39.0 promotes ChatGPT subscription models to a stable chatgpt() API with Codex-owned authentication

- **Date:** 2026-08-17 | **Version:** eve@0.39.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/vercel/eve/releases` lists eve@0.39.0 published 2026-08-17T21:49:08Z, prerelease=false, draft=false -- the last release inside the window. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.38.3...eve%400.39.0'` returned b285784 267a59a 73d381e 24f6c06 4c1bd80 4af3b1e 7a8f43b e8da571 99eb632 00c0a26 7a140d4 2c99a4a, containing the minor-change commit 00c0a26 -- in the history of the stable tag eve@0.39.0.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.39.0
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** ChatGPT subscription models move from `experimental_chatgpt()` to the stable `chatgpt()` API, with Codex-owned authentication, automatic token refresh, `eve dev` recovery through `codex login` or `/model`, setup and source-authoring support, and local-only deployment safeguards. The deprecated `experimental_chatgpt()` alias remains available.

**Operator consequence.** Try it if you already pay for a ChatGPT subscription and would rather not add a metered API key to run agents. The load-bearing detail is the safeguard, not the promotion: the path is local-only by deployment design, so a subscription-backed agent runs on your machine and does not become a deployed service. That boundary is the whole reason a subscription credential is acceptable here, and it is what you should verify still holds before building anything on it. Note also that the credential is Codex-owned -- eve is borrowing another vendor's harness authentication, so a change in Codex's login flow becomes a change in your eve agent's ability to authenticate. That coupling is a fact about the pair, not about eve.

## 10. eve 0.39.0 removes glob and grep from the default agent tool set and lets a child session inherit the parent's live sandbox

- **Date:** 2026-08-17 | **Version:** eve@0.39.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Same stable tag as above. `gh api 'repos/vercel/eve/compare/eve%400.38.3...eve%400.39.0'` returned b285784 267a59a 73d381e 24f6c06 4c1bd80 4af3b1e 7a8f43b e8da571 99eb632 00c0a26 7a140d4 2c99a4a, which contains both 4c1bd80 (tool-set removal) and e8da571 (parent.sandbox reuse) -- both in the history of eve@0.39.0, prerelease=false per `gh api repos/vercel/eve/releases`.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.39.0
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** `glob` and `grep` are removed from the default agent tool set; agents opt back in by exporting `defineGlobTool()` or `defineGrepTool()` from the corresponding tool file. Separately, a child can now return `parent.sandbox` from a `defineSandbox` callback, reusing the dispatching parent's live sandbox across agent sessions so parent and child see the same files, processes, workspace and sandbox home. A child that selects `parent.sandbox` cannot also declare managed workspace or skill resources; eve rejects that configuration before execution and requires either removing those resources or giving the child its own sandbox.

**Operator consequence.** Check your agents' search behaviour after upgrading past 0.39.0 -- a coding agent that silently loses `glob` and `grep` degrades into reading whole files or shelling out, which shows up as cost and latency rather than as an error. Re-export the tools explicitly if you want them. The shared-sandbox option is the one to think carefully about: parent and child seeing the same files, processes and home directory removes the handoff cost of delegation and removes the isolation boundary in the same move. eve refuses the obviously wrong combination up front, which is good design, but it cannot refuse the case where you wanted a child to be unable to touch the parent's workspace. Choose per delegation, not globally.

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
