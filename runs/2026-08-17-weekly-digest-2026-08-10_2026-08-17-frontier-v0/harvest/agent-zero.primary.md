---
schema_version: bitter.frontier_harvest.v0
provider: agent-zero
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/agent-zero.yml
channels_present: [tagged-release, unknown]
window_volume: 5 material changes, 4 capability-bearing, 3 defect-bearing, 3 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- agent-zero (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. SSRF fix for CVE-2026-4308 was silently lost in a plugin refactor and shipped broken through 13 stable releases before v2.9 restored it

- **Date:** 2026-08-12 | **Version:** v2.9
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/agent0ai/agent-zero/compare/b40874e7c0...v2.9 -> status=ahead, ahead=9, behind=0, so the fix commit is an ancestor of the stable (non-prerelease) tag v2.9. Exposure boundary established the same way: gh api compare/6ccbae0712...v1.18 -> status=behind (not contained); compare/6ccbae0712...v1.19 -> status=ahead behind=0; compare/6ccbae0712...v2.8 -> status=ahead behind=0. So the regressing commit is in v1.19 through v2.8 and the fix lands only in v2.9. All tags checked are non-prerelease per the releases API (prerelease=false).
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/b40874e7c03775c53989e206769e33ff23a4384e
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** CVE-2026-4308 is a server-side request forgery (CWE-918) in Agent Zero's remote document fetching: an operator-privileged user can make the agent's own process fetch an arbitrary URL, including private/internal addresses the agent host can reach but the caller cannot. It was patched on 2026-04-12 in commit 6397acc092a538594186c6a2bacdcfa516ca0747, which added helpers/network.py::fetch_public_http_resource and routed helpers/document_query.py through it. On 2026-05-29 commit 6ccbae0712 extracted document query into plugins/_document_query/, and the new plugins/_document_query/helpers/fetch.py went back to a raw `aiohttp.ClientSession(...).get(uri, allow_redirects=True)` with no public-only guard. The v2.9 diff is literally the removal of `import aiohttp` and the reinstatement of `from helpers.network import fetch_public_http_resource`, plus tests/test_document_query_plugin.py regression coverage for private targets. NVD lists the CVE as published 2026-03-17 with exploit maturity PROOF_OF_CONCEPT and the note that the vendor 'was contacted early about this disclosure but did not respond in any way'; GitHub scores it CVSS 3.1 6.3 / CVSS 4.0 2.1, severity medium, advisory type 'unreviewed'. No repository security advisory was ever filed by the maintainers (the repo's security-advisories endpoint returns empty), and the v2.9 release notes are the only vendor disclosure of the regression, one line under 'Fixes'.

**Operator consequence.** Upgrade to v2.9 now if you run document query against untrusted or user-supplied URLs, and treat every instance pinned between v1.19 (2026-06-02) and v2.8 (2026-08-01) as exploitable with a public PoC. Then re-audit rather than assume: the failure mode here is not that a fix was missing, it is that a fix was present, tested, and then discarded by a refactor that moved the call site into a plugin. If you carry local patches or vendored forks of Agent Zero across its plugin-extraction churn, diff your security-relevant call sites against helpers/network.py rather than trusting that a CVE you already patched is still patched. Also note there is no GHSA from the vendor and no advisory-based notification path, so nothing will tell you this happened except reading the release notes.

## 2. Agent Zero v2.9 makes tool, MCP, and skill access a scoped policy enforced at execution and inherited by delegated subagents

- **Date:** 2026-08-12 | **Version:** v2.9
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/agent0ai/agent-zero/compare/eec18ad839...v2.9 -> status=ahead, ahead=48, behind=0; compare/afff2e3c05...v2.9 -> status=ahead, ahead=40, behind=0; compare/c2ee867665...v2.9 -> status=ahead, ahead=47, behind=0. All three are ancestors of the stable tag v2.9 (releases API: prerelease=false, published_at 2026-08-12T13:58:33Z). The annotated tag v2.9 (57d8e907e1) dereferences to commit baadd0dd0b09fa769a1027c183b964be85d5c8cc, which is also the current main HEAD.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/eec18ad839eedb5e92d389ca164abc192e19968f
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** A single project/profile-aware resolver (helpers/tool_policy.py) now canonicalises local, plugin, and MCP tool identities and is applied at six enforcement points, not one: text system prompts (extensions/python/system_prompt/_11_tools_prompt.py, _12_mcp_prompt.py), native Responses tool schemas (helpers/responses_tools.py), connector tool stubs, local execution (plugins/_tool_access/extensions/python/tool_execute_before/_10_enforce_tool_policy.py), MCP invocation (helpers/mcp_handler.py), and delegated/parallel subordinate agents (helpers/parallel_tools.py). A blocked tool is removed from the rendered prompt rather than merely refused at call time. The hardening commit afff2e3c05 fixes the fail-open case the first pass left behind: an empty config at a higher layer used to shadow an inherited restriction, so a project-level profile with no policy set could silently erase a global block. A parallel commit (c2ee867665) adds sparse allow/block skill visibility with an explicit default for future skills. The official docs corroborate the released behaviour and name the tri-state model verbatim: 'On' (always allow), 'Default' (follow category default), 'Off' (block the item), with 'Changing a category default affects existing and future items left on Default. Explicit On and Off decisions remain pinned.' Profiles live at /a0/usr/agents/<profile-id>/ globally and /a0/usr/projects/<project>/.a0proj/agents/<profile-id>/ per project, and /permissions opens the editor from chat.

**Operator consequence.** Test this before trusting it, and test it specifically through a subagent. For a framework whose entire premise is an agent with a real computer, terminal, browser, and filesystem, a per-project revocation that actually survives delegation and MCP is the first governable boundary Agent Zero has shipped; the enforcement points list is what makes it credible rather than cosmetic. Two caveats the docs state plainly and you should verify locally: skill policy 'controls discovery and new loading. It does not erase skill text already saved in a chat's history', so revoking a skill does not retroactively sanitise a long-running conversation, and the fail-open shadowing bug in the first implementation means you should assert an actual denial in a project-scoped profile rather than reading the UI state. If you previously modelled Agent Zero as all-or-nothing machine access, this is the change that justifies re-modelling it as a workcell with a revocable tool surface.

## 3. Time Travel snapshotting shipped with no retention at all; v2.9 adds sweeps after a live instance accumulated 518 shadow repos and 12 GB

- **Date:** 2026-08-12 | **Version:** v2.9
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/agent0ai/agent-zero/compare/c42dffa54e...v2.9 -> status=ahead, ahead=7, behind=0, so the commit is an ancestor of the stable tag v2.9 (prerelease=false). Merged as PR #1775 on 2026-08-12T03:16:25Z, before the tag was created at 2026-08-12T13:03:44Z.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/c42dffa54e046bbbfa339632c1274678395afdf9
- **Half:** both | **Confidence:** high

**What changed.** The commit message is an unusually candid defect report from the maintainers. Time Travel keeps a hidden git repository per workspace under /a0/usr/.time_travel/workspaces/<id>/repo.git and snapshots on every file change, but shipped no retention whatsoever: chat_remove never touched .time_travel, there was no delete or prune endpoint in the API or web UI, and any workspace whose 'git add' exceeded GIT_TIMEOUT_SECONDS stranded repo.git/index.lock, failing every subsequent snapshot with 'index.lock: File exists'. Quoting the commit directly: 'Observed on a live instance: 518 shadow repositories / 12 GB, most belonging to long-deleted chats, plus a permanently wedged workspace.' v2.9 adds a throttled retention sweep driven from job_loop, running in a worker thread off the event loop, at most one in flight, default every 6 hours: orphan removal after a grace window (live workspace paths are forward-enumerated and hashed with the existing workspace_id_for derivation), optional age-out via retention_max_age_days (default 0 = keep forever), stale index.lock removal past retention_stale_lock_minutes, and set-aside of corrupt repos. Deletion is refused for any path outside the shadow root. Evidence is durable: retention.json with running totals and last-sweep stamp, retention.log with one JSON line per sweep naming everything removed, tail-capped at 1000.

**Operator consequence.** If you run Agent Zero with Time Travel enabled, go look at the disk now rather than waiting for the upgrade to fix it, and check for a wedged workspace: a stranded index.lock means that workspace has been silently failing to snapshot for however long, so your time-travel history for it is a lie of omission, not a gap you would have noticed. After upgrading to v2.9, note the default is conservative on purpose (retention_max_age_days=0 keeps live history forever) so only orphans and stale locks are swept unless you opt in. The general lesson for anyone giving an agent a persistent workcell: the snapshot mechanism arrived long before the cleanup mechanism, and the maintainers found out from a production instance, not a test. Audit your own agent-side persistence for the same asymmetry.

## 4. v2.9 bundles a Migrate Agents plugin that imports agent definitions from five rival harnesses

- **Date:** 2026-08-12 | **Version:** v2.9
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/agent0ai/agent-zero/compare/7129e287c3...v2.9 -> status=ahead, ahead=25, behind=0, so the commit is an ancestor of the stable tag v2.9 (prerelease=false).
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/7129e287c3b92013e2d82d53c91a9c07d4a82cf0
- **Half:** capability | **Confidence:** high

**What changed.** A built-in plugin under plugins/_migrate_agents/ with a preview-then-import workflow (api/migration_preview.py, api/migration_import.py, helpers/migration.py, tests). The release notes and the vendor's v2.9 article both say 'five-harness migration' without naming the five; the commit's file list does name them, via the bundled WebUI assets: plugins/_migrate_agents/webui/assets/claude.svg, codex.svg, hermes.svg, openclaw.svg, opencode.svg, alongside an ATTRIBUTION.md. A follow-up commit on the same day (baadd0dd0b, the tag commit) removed the sidebar quick-action shortcut, leaving the migration UI reachable only from the Plugins screen.

**Operator consequence.** Worth trying only if you are actually evaluating a move, and worth reading regardless as a statement of where Agent Zero thinks it sits: it is now shipping an on-ramp from Claude Code, Codex, Hermes, OpenClaw, and OpenCode rather than treating agent definitions as proprietary. Do not assume behaviour survives the import. An agent profile is a prompt plus a tool policy plus a model preset, and only the first of those means the same thing in two harnesses; a migrated profile whose source harness enforced tool limits differently will not carry those limits. Preview the import, then re-derive the tool policy in Agent Zero's own scoped model rather than trusting what came across.

## 5. ACP bridge and an interactive internal Browser viewport are staged on the `ready` branch, in no tag and not on main

- **Date:** 2026-08-16
- **Channel:** `unknown` (channel unresolved)
- **Ancestry evidence:** These commits are on the non-default branch `ready`, which gh api compare/main...ready shows as status=ahead, ahead_by=9, behind_by=0 (tip add781d3b3e5b3972fbd7cef54657b7bfb274ae9, 2026-08-16T17:25:05Z). Ancestry checks put them outside every release channel in the taxonomy: compare/add781d3b3...v2.9 -> status=behind, ahead=0, behind=9, and compare/add781d3b3...main -> status=behind, ahead=0, behind=9. So they are in no tag (stable or prerelease) and not on the default branch, which makes 'main-unreleased' factually wrong and 'preview-or-beta' wrong too since no prerelease tag exists (every entry in the releases list has prerelease=false). I am reporting the channel as unknown rather than forcing a label. Note the branch topology is inverted from what the names suggest: `development` is 0 ahead / 302 behind main and `testing` is 0 ahead / 758 behind, i.e. both are stale, and `ready` is the only active staging line.
- **Receipt:** https://github.com/agent0ai/agent-zero/commit/add781d3b3e5b3972fbd7cef54657b7bfb274ae9
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Nine commits landed on `ready` between 2026-08-13 and 2026-08-16, after v2.9 was cut. Two threads matter. First, protocol: 'Bundle Agent Zero ACP' adds plugins/_a0_acp/ shipping 'the built-in ACP session bridge with an editor-hosted A0 CLI transport and a startup migration that removes retired a0_acp installations and scoped overrides' -- Agent Zero becoming an Agent Client Protocol endpoint that other tools can drive. Second, computer use: e2f43a3fb8 'Harden internal Browser against bot detection' runs Chromium headful through Patchright on a private Xvfb display while keeping page helpers in Patchright's isolated world, and 005b366b51 'Add interactive internal Browser viewport' renders the Patchright page 'through an isolated, authenticated Xpra session with CDP screencast and snapshot fallbacks', touching helpers/virtual_desktop.py and plugins/_browser/. Four further commits (a0eefe19bd, 4bf92a6072, 227b47f53d, 340d5ef9dd, 1fb9363b49) consolidate to one shared internal Browser runtime with automatic tab restore.

**Operator consequence.** Watch, do not build on it. None of this is in v2.9 and none of it is on main, so an operator who upgrades to the latest release gets none of it, and a reader who saw it on GitHub this week could easily believe otherwise. The two threads are worth tracking for different reasons: the ACP bridge would make Agent Zero drivable as a component by an external orchestrator rather than only usable as a whole product, and the interactive viewport is the visibility half of the workcell question -- a human watching the agent's actual browser through an authenticated Xpra session instead of inferring from a screenshot log. The bot-detection hardening cuts the other way and deserves a policy answer before you enable it: an agent browser deliberately engineered to be indistinguishable from a human one is a compliance question, not just a reliability feature.

## Researcher lane notes

Agent Zero moved substantially in this window. One stable release landed in w2 (v2.9, tagged 2026-08-12T13:03:44Z, published 13:58:33Z, prerelease=false) and it is a large one: 52 commits ahead of v2.8. Nothing landed in w1 on the code channel -- v2.8 published 2026-08-01T15:50:00Z, two days before the window opens, so it is 'outside' and I have reported it only in the carry-forward answer about the stop control.

Channel discipline notes. Every v2.9 finding is proved by ancestry, not date: for each key commit I ran gh api repos/agent0ai/agent-zero/compare/<sha>...v2.9 and required status=ahead with behind_by=0, which establishes the tag as a descendant. The annotated tag v2.9 (57d8e907e1) dereferences to commit baadd0dd0b, which is simultaneously the current main HEAD -- so at time of harvest there is no main-unreleased material at all on this source. That is unusual and worth stating plainly rather than leaving as an absence.

The branch topology is inverted from what the names imply and I want this on the record because it will mislead a future harvest: `development` is 0 ahead / 302 behind main, `testing` is 0 ahead / 758 behind -- both are stale and abandoned -- while `ready` is 9 ahead / 0 behind and carries all post-v2.9 work (2026-08-13 to 2026-08-16). Anyone checking `development` for what is coming next will conclude, wrongly, that nothing is. I have reported the `ready` work with channel 'unknown' rather than forcing it into the taxonomy: it is not main-unreleased (not on the default branch) and not preview-or-beta (no prerelease tag exists anywhere in this repo's release history -- every entry returns prerelease=false). Forcing either label would have been a false receipt, so the channel_evidence field carries the full compare output instead.

The SSRF item is the strongest finding and I want to be precise about what is and is not established. Established by primary evidence: the April fix (6397acc092, 2026-04-12) added helpers/network.py::fetch_public_http_resource and used it from helpers/document_query.py; the plugin extraction (6ccbae0712, 2026-05-29) created plugins/_document_query/helpers/fetch.py using raw aiohttp with allow_redirects=True and no guard; the v2.9 diff removes `import aiohttp` and reinstates the public-only fetcher. Established by ancestry: 6ccbae0712 is not in v1.18 but is in v1.19 and v2.8, and the fix is only in v2.9. NOT established, and I have not claimed it: that anyone exploited this, or that the maintainers knew the guard had been dropped before they found it. I have described it as lost in a refactor because the diff shows exactly that, not because anyone said so.

Two gaps recorded honestly. First, the vendor filed no GitHub repository security advisory for CVE-2026-4308 -- the security-advisories endpoint for the repo returns empty -- so the only vendor-side disclosure of the regression is one bullet in the v2.9 release notes. The GHSA that exists (GHSA-8g9j-3hrr-2hvm) is type 'unreviewed', sourced from VulDB via NVD, with no vulnerabilities array populated and no source_code_location, which means automated dependency scanning will not reliably flag an affected Agent Zero install. That is a real operator hazard and I have said so in the finding rather than only in these notes. Second, the site's sitemap.xml carries a uniform lastmod of 2026-08-12 on every page, which is a site-rebuild stamp, not authoring dates -- it is useless for dating content and I did not use it. The Spynel date (2026-08-09 15:27 UTC) comes from the in-page timestamp, cross-checked against the article index ordering (it sits between the v2.8 and v2.9 posts). /p/docs/release-articles/ returns HTTP 404 despite being linked from the docs index; the working path is /p/articles/.

On the capability/defect balance, which I checked deliberately rather than assuming: this harvest is not defect-only. Capability side -- scoped tool/MCP/skill policies, the Agent Editor, project-scoped profiles, the five-harness Migrate Agents plugin, and the staged ACP bridge and interactive Browser viewport. Defect side -- the SSRF regression and the total absence of Time Travel retention. Two items are genuinely 'both': the tool policy work shipped a capability and simultaneously fixed a fail-open shadowing bug in its own first implementation, and Time Travel retention is both a new control surface and the repair of a shipped-with-no-cleanup defect.

One editorial observation for the coordinator, offered as opinion and not as a receipted claim: the Time Travel commit message is the most useful primary source I read this window, because the maintainers wrote down the production numbers (518 shadow repositories, 12 GB, a permanently wedged workspace) instead of describing the fix abstractly. Paired with the SSRF regression, this window's Agent Zero story is coherent -- a project whose autonomy features consistently ship before their cleanup, revocation, and containment features, and which is now, visibly, backfilling all three at once.

## Surfaces checked

- https://github.com/agent0ai/agent-zero (repo identity confirmed: agent0ai/agent-zero, description "Agent Zero AI framework", default branch main, 18,901 stars, not a fork, not archived)
- https://github.com/agent0ai/agent-zero/releases (full paginated release list, 2024-10 through 2026-08)
- https://github.com/agent0ai/agent-zero/tags (v2.9 and v2.8 annotated tags dereferenced to commits)
- main-branch commit log since 2026-08-03 (52 commits; main HEAD == v2.9 tag commit)
- non-default branches: development, testing, ready (compared against main)
- merged PRs with mergedAt >= 2026-08-03 (#1820, #1775, #1770, #1763, #1710, #1694, #1533)
- GitHub repository security advisories endpoint (empty)
- GitHub Advisory Database: GHSA-8g9j-3hrr-2hvm
- NVD: CVE-2026-4308
- https://www.agent-zero.ai/ (official site landing)
- https://www.agent-zero.ai/p/docs/ (docs index)
- https://www.agent-zero.ai/p/docs/agent-profiles/
- https://www.agent-zero.ai/p/articles/ (article index)
- https://www.agent-zero.ai/p/articles/agent-zero-v2-9/
- https://www.agent-zero.ai/p/articles/meet-spynel-one-conversation-many-agents/
- https://www.agent-zero.ai/sitemap.xml (uniform 2026-08-12 lastmod; rebuild stamp, not authoring dates)
