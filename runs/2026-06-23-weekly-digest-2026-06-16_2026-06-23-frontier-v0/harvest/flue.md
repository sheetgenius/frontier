---
schema_version: bitter.frontier_harvest.v0
provider: flue
label: Flue
owner: withastro
repo: https://github.com/withastro/flue
tier: 2
window: 2026-06-16..2026-06-23
run: 2026-06-23-weekly-digest-2026-06-16_2026-06-23-frontier-v0
harvested_by: opus-4.8-harvester
harvested_at: 2026-06-23
primary_receipt_surface: CHANGELOG.md
channels_present: [tagged-release, preview-or-beta, main-unreleased]
window_volume: 69 commits on main, 8 merged PRs, 2 in-window git tags (v1.0.0-beta.1, v1.0.0-beta.2)
---

# Flue Harvest — 2026-06-16 to 2026-06-23

## Window summary

High-movement window for a Tier-2 source. Two beta tags published in-window
(v1.0.0-beta.1 on 2026-06-16, v1.0.0-beta.2 on 2026-06-17/18), plus a very
large `## Unreleased` CHANGELOG section accumulating on `main` (69 commits,
mostly direct maintainer commits rather than PRs — only 8 PRs merged). The
dominant theme is a deep API-naming and architecture convergence toward 1.0
GA: workflows rebuilt around a new **Actions** primitive, `define*` naming
unification, the `flue logs` command removed in favor of typed SDK run APIs,
and the run-event/observability contract tightened again.

**Date verification (to the YEAR):** v1.0.0-beta.1 committer date
`2026-06-16T08:29:38Z`; v1.0.0-beta.2 committer date `2026-06-18T05:01:41Z`
(CHANGELOG dates the beta.2 entry `2026-06-17`; entry-date vs commit-date,
both in-window). All 69 main commits carry ISO timestamps inside
`2026-06-16..2026-06-23`. Confirmed via `gh api .../commits` and
`gh api .../git/refs/tags/*`.

**Channel resolution:** v1.0.0-beta.1 and v1.0.0-beta.2 are
**preview-or-beta** (published git tags, `-beta.N`). The `## Unreleased`
section is **main-unreleased** (in CHANGELOG/main, no tag). The published-tag
existence makes these also formally **tagged-release** in the sense that a git
tag exists; Flue still publishes **zero GitHub Releases** (verified:
`gh api repos/withastro/flue/releases` → length 0). The canonical receipt
remains CHANGELOG.md, exactly as `sources/flue.yml` now specifies.

---

## Findings

### 2026-06-23-flue-workflows-rebuilt-on-actions
- **date:** 2026-06-19..2026-06-22 (Unreleased; commits d44bdf8049, bd930f183d, d8d3cfa77c)
- **version/tag/commit/PR:** main `## Unreleased`; commit d44bdf8049 "Migrate workflows to actions", d8d3cfa77c "Add action and workflow definitions"
- **change_type:** api_surface, capability, breaking_change
- **channel:** main-unreleased
- **section:** Breaking Changes / New Features
- **accessibility_impact:** Higher migration cost for existing workflow authors; every workflow now requires an agent definition and a default-exported `defineWorkflow(...)`. Removes the legacy named `run(ctx)` export, public `ctx.init()`, and workflow payload to agent initializers.
- **security_impact:** Action context deliberately does NOT expose `ctx.id`, `ctx.env`, or `ctx.req` — callers "must validate transport data before admission and pass required values explicitly as input." This is a positive isolation-by-default posture for delegated execution.
- **operator_implication:** Actions are a new shared primitive for "reusable finite orchestration for both workflows and model tools," with invocation-scoped harnesses and isolated child scopes that share parent policy/sandbox/filesystem/environment. This is the most architecturally load-bearing change in the window — it unifies the model-tool and workflow execution paths under one schema-validated primitive.
- **candidate_signal:** YES — this is the clearest evidence in the window of harness-primitive consolidation (Actions = the unit of orchestration), directly relevant to the "which harness primitives are stabilizing" operator question.
- **confidence:** high
- **receipt (VERBATIM):**
  > "**Workflows are now definitions built around Actions.** Workflow modules must default-export `defineWorkflow({ agent, action })` or `defineWorkflow({ agent, input?, output?, run })`. Every workflow requires an agent definition. The runner now owns root harness initialization, so the legacy named `run(ctx)` export, public `ctx.init()`, named workflow harness options, and workflow payload passed to agent initializers are removed."
  > "Actions now serve as reusable finite orchestration for both workflows and model tools, with invocation-scoped harnesses, strict JSON output serialization, and one execution path for schema validation and transformed values."
  > "Agent definitions can expose Actions through `actions`. Model-invoked Actions run as framework-owned tools in isolated child scopes while sharing the parent policy, sandbox, filesystem, and environment."
  - URL: https://github.com/withastro/flue/blob/main/CHANGELOG.md

### 2026-06-23-flue-define-naming-unification
- **date:** 2026-06-20 (Unreleased; commits 97def70736 "Rename agent definitions", 127b5857f1 "Rename workflow definitions", 62a5ebd3b1 "Add deprecated createAgent alias")
- **version/tag/commit/PR:** main `## Unreleased`
- **change_type:** api_surface, breaking_change
- **channel:** main-unreleased
- **section:** Breaking Changes
- **accessibility_impact:** `createAgent()` → `defineAgent()` (deprecated alias kept); `createWorkflow()` → `defineWorkflow()` (NO alias). `CreatedAgent`/`CreatedWorkflow` types removed. Mechanical but breaking.
- **security_impact:** none
- **operator_implication:** Naming convergence on a `define*` vocabulary signals API freeze posture ahead of GA — the surface is being made consistent rather than extended. Low novelty, high stabilization signal.
- **candidate_signal:** no (housekeeping; supports the GA-convergence narrative but not independently material)
- **confidence:** high
- **receipt (VERBATIM):**
  > "**Agent and workflow declaration APIs use consistent `define*` naming.** `createAgent()` is renamed to `defineAgent()` and its returned type is now `AgentDefinition`; `createAgent()` remains as a deprecated compatibility alias. `createWorkflow()` is renamed to `defineWorkflow()` and its returned type is now `WorkflowDefinition`, with no compatibility alias."
  - URL: https://github.com/withastro/flue/blob/main/CHANGELOG.md

### 2026-06-23-flue-logs-removed-typed-run-apis
- **date:** 2026-06-21 (Unreleased; commit 73b3f6ced9 "Remove flue logs command")
- **version/tag/commit/PR:** main `## Unreleased`
- **change_type:** api_surface, breaking_change, runtime
- **channel:** main-unreleased
- **section:** Breaking Changes
- **accessibility_impact:** The `flue logs` CLI command is removed entirely. Operators must move to `client.runs.get()`, `client.runs.events()`, `client.runs.stream()`, or raw `/runs/:runId` APIs. The owning workflow must export `runs` middleware for HTTP access.
- **security_impact:** Run inspection now gated behind workflow-exported `runs` middleware — runs are private over HTTP by default unless explicitly exposed (see workflow-HTTP finding below). Tightens default exposure.
- **operator_implication:** DIRECT carry-forward hit. Externally-consumable run events are moving from an open CLI/stream surface toward a typed SDK + opt-in HTTP middleware model. The trajectory continues last window's narrowing of external run-event consumption.
- **candidate_signal:** YES — material to the recurring "how externally-consumable are run events" question. Combined with the workflow-HTTP privacy change, this is a coherent move toward private-by-default run observability.
- **confidence:** high
- **receipt (VERBATIM):**
  > "**The `flue logs` command is removed.** Use SDK `client.runs.get()`, `client.runs.events()`, or `client.runs.stream()` for typed run inspection, or consume the raw `/runs/:runId` APIs. The owning workflow must still export `runs` middleware for HTTP access."
  - URL: https://github.com/withastro/flue/blob/main/CHANGELOG.md

### 2026-06-23-flue-workflow-runs-private-by-default
- **date:** 2026-06-20 (Unreleased; commits 77a136331d "Protect workflow run HTTP access", fddfcf57d8 "Clarify workflow HTTP exposure")
- **version/tag/commit/PR:** main `## Unreleased`
- **change_type:** api_surface, security, breaking_change
- **channel:** main-unreleased
- **section:** Breaking Changes
- **accessibility_impact:** A workflow's `route` export now controls only `POST /workflows/:name`; existing runs are PRIVATE over HTTP unless the workflow separately exports `runs: WorkflowRunsHandler`. Omitted/unknown/orphaned runs all return identical `404`.
- **security_impact:** Strong positive — run-read authorization is now explicit and separable from invocation authorization; runs default to inaccessible. Also drops `streamUrl`/`offset`/`Location`/`Stream-Next-Offset` from workflow receipts (receipts now `{ runId }` / `{ runId, result }`).
- **operator_implication:** This is the receipt-layer-relevant change of the window. Flue's run-event receipt envelope is shrinking to an opaque `{ runId }` and access is opt-in. For Bitter's own receipt-layer thinking: Flue is moving toward "the run ID is the receipt; the event stream is a privileged, separately-authorized resource."
- **candidate_signal:** YES — directly answers the operator_question "Does any API change affect how Bitter thinks about its own receipt layer or deployment membrane?" and continues the carry-forward observability-narrowing thread.
- **confidence:** high
- **receipt (VERBATIM):**
  > "**Workflow HTTP exposure and receipts are simplified.** A workflow's `route` export now controls only `POST /workflows/:name`; existing runs are private over HTTP unless the workflow separately exports `runs: WorkflowRunsHandler`. ... Workflow HTTP and SDK admission receipts are now `{ runId }`, and waited results are `{ runId, result }`; remove uses of workflow `streamUrl` and `offset`, and use the known `runId` with `client.runs` or `/runs/<runId>` instead."
  - URL: https://github.com/withastro/flue/blob/main/CHANGELOG.md

### 2026-06-23-flue-event-index-decoupled-from-stream-offset
- **date:** 2026-06-21 (Unreleased; commit bc75072f39 "Decouple event indexes from stream offsets")
- **version/tag/commit/PR:** main `## Unreleased`
- **change_type:** protocol, breaking_change
- **channel:** main-unreleased
- **section:** Breaking Changes
- **accessibility_impact:** `eventIndex` is still the identity/ordering coordinate within a runtime context, but consumers must NOT convert it to a Durable Streams resume offset; checkpoint `FlueEventStream.offset` or the raw `Stream-Next-Offset` header instead.
- **security_impact:** none
- **operator_implication:** Direct continuation of last window's Durable Streams transport swap. The DS offset and the logical event index are now formally distinct, hardening the proprietary-transport boundary. External consumers building resume logic must track DS offsets, not logical indexes — another small narrowing of naive external consumption.
- **candidate_signal:** no (refinement of an already-recorded carry-forward; supporting evidence, not independently material)
- **confidence:** high
- **receipt (VERBATIM):**
  > "**Event indexes are no longer stream offsets.** `eventIndex` remains the identity and ordering coordinate for events within a runtime context, but workflow consumers must not convert it into a Durable Streams resume offset. Checkpoint `FlueEventStream.offset` or the raw `Stream-Next-Offset` header instead."
  - URL: https://github.com/withastro/flue/blob/main/CHANGELOG.md

### 2026-06-23-flue-defineskill-typescript-skills
- **date:** 2026-06-22 (Unreleased; commit 492bf47b9f "Add programmatic skill definitions")
- **version/tag/commit/PR:** main `## Unreleased`
- **change_type:** skill_system, capability
- **channel:** main-unreleased
- **section:** New Features
- **accessibility_impact:** Lowers the floor for single-file agents — skills no longer require an on-disk `SKILL.md` directory or build-time import; `defineSkill()` lets you author instructions, frontmatter metadata, and supporting text/binary files entirely in TypeScript.
- **security_impact:** none direct; same progressive-disclosure/lazy-file-access activation as imported SKILL.md dirs.
- **operator_implication:** Notable for the skill-primitives lens. Flue's skill system was "markdown-first" (profile claim `skills-markdown-first`); it now supports a TypeScript-native definition path with parity to the Markdown one. Skills become programmable artifacts, not just files. Mild tension with the existing profile claim — worth a profile note, not a reversal (Markdown skills still work; TS is additive).
- **candidate_signal:** YES (borderline) — relevant to the skill-primitives research lens and the "Agent = Model + Harness" framing: skills are now first-class programmable objects. Lower magnitude than the run-observability findings but genuinely novel vs profile.
- **confidence:** high
- **receipt (VERBATIM):**
  > "Added `defineSkill()` for defining Agent Skills entirely in TypeScript, including instructions, standard frontmatter metadata, and supporting text or binary files. Defined skills use the same progressive-disclosure activation and lazy file access as imported `SKILL.md` directories, enabling single-file agents without build-time skill imports."
  - URL: https://github.com/withastro/flue/blob/main/CHANGELOG.md

### 2026-06-23-flue-skill-naming-ascii-spec
- **date:** Unreleased
- **version/tag/commit/PR:** main `## Unreleased`
- **change_type:** skill_system, breaking_change
- **channel:** main-unreleased
- **section:** Breaking Changes
- **accessibility_impact:** Skill names must now be 1–64 lowercase ASCII letters/numbers/single-hyphens, no leading/trailing hyphen; previously accepted Unicode skill names and directories must be renamed before upgrade.
- **security_impact:** minor positive (narrows skill-identity character space, reduces homoglyph/path ambiguity surface).
- **operator_implication:** Flue is aligning its skill naming to "the specification's ASCII naming rules" — i.e. converging on an external Agent Skills spec rather than an ad-hoc scheme. Worth noting for the skill-primitives lens as ecosystem-convergence evidence.
- **candidate_signal:** no (constraint tightening; supports skill-spec-convergence narrative)
- **confidence:** high
- **receipt (VERBATIM):**
  > "**Agent Skill names now follow the specification's ASCII naming rules.** Imported, workspace-discovered, and programmatically defined skills must use 1–64 lowercase ASCII letters, numbers, and single hyphens, with no leading or trailing hyphen."
  - URL: https://github.com/withastro/flue/blob/main/CHANGELOG.md

### 2026-06-23-flue-run-unified-through-http-app
- **date:** 2026-06-22 (Unreleased; commit 6d5b81ea83 "Add unified resource run and console")
- **version/tag/commit/PR:** main `## Unreleased`; related PR #265 "Update `flue run` output", #262 "Polish flue CLI output"
- **change_type:** runtime, api_surface, breaking_change
- **channel:** main-unreleased
- **section:** Breaking Changes
- **accessibility_impact:** `flue connect` is REPLACED by `flue console <agent>` (interactive transcript, Node + Cloudflare, one read-only workflow invocation). `flue run` now executes through the normal HTTP application instead of a private child-process path; `--server <path|url>` selects local mount or remote attach via `agent:<name>`/`workflow:<name>`.
- **security_impact:** none direct; remote attach goes through authored mounts.
- **operator_implication:** Local dev and production now share one execution topology (the HTTP app), removing the divergent child-process invocation path. Consolidation toward a single runtime membrane — relevant to the "deployment membrane" operator question.
- **candidate_signal:** no (CLI/runtime consolidation; supports GA-convergence narrative, not independently material)
- **confidence:** high
- **receipt (VERBATIM):**
  > "**`flue run` now executes agents and workflows through the normal HTTP application.** Local runs temporarily expose route-free resources through an existing authored `flue()` mount and execute `app.ts` plus application and resource middleware. ... the earlier private child-process invocation path is removed."
  - URL: https://github.com/withastro/flue/blob/main/CHANGELOG.md

### 2026-06-23-flue-1.0-beta.1-and-beta.2-tags
- **date:** 2026-06-16 (beta.1), 2026-06-17/18 (beta.2)
- **version/tag/commit/PR:** tags v1.0.0-beta.1 (05f9d478f5, committer 2026-06-16T08:29:38Z), v1.0.0-beta.2 (2352ef4480, committer 2026-06-18T05:01:41Z)
- **change_type:** capability, api_surface, breaking_change, deployment, security (beta.1 is a very large entry)
- **channel:** preview-or-beta (published git tags; no GitHub Release)
- **section:** CHANGELOG 1.0.0-beta.1 / 1.0.0-beta.2
- **accessibility_impact:** beta.1 is the migration-heavy 1.0 baseline (valibot tool schemas replacing TypeBox, opaque `run_<ulid>` run IDs, `defineTool({ parameters })` on valibot, `timeoutMs`/`maxAttempts`, `cloudflareSandbox()` replacing the workerd stub, version-7-class session/event contract tightening, `observe()` now receiving every event with the `types` filter removed). beta.2 is a single image-attachment-to-task fix.
- **security_impact:** beta.1 tightens session/event contracts (durable events carry `v: 1`, `turn_request`/`message_update`/raw assistant payloads no longer persisted) and moves provider channel handlers (GitHub/Slack/Discord/Google Chat) to provider-native deliveries, removing Flue's normalized wrappers and fixed allowlists.
- **operator_implication:** beta.1 is the actual 1.0 stabilization tag; the `## Unreleased` work above sits on top of it heading toward beta.3/GA. The first-party connector explosion (15+ new `@flue/*` channel and DB packages: stripe, notion, resend, shopify, salesforce, teams, linear, telegram, whatsapp, twilio, mysql, redis, mongodb, etc.) is the ecosystem-surface story of beta.1.
- **candidate_signal:** YES (the first-party connector/persistence ecosystem expansion is material category evidence — Flue is moving from "harness" toward "harness + verified-ingress + durable-persistence ecosystem"). The valibot/opaque-run-ID/observe() changes are largely carry-forward continuations.
- **confidence:** high
- **receipt (VERBATIM):**
  > "Added first-party `@flue/stripe`, `@flue/notion`, `@flue/resend`, `@flue/shopify`, `@flue/intercom`, `@flue/zendesk`, `@flue/salesforce`, `@flue/teams`, `@flue/google-chat`, `@flue/linear`, `@flue/telegram`, `@flue/whatsapp`, `@flue/twilio`, and `@flue/messenger` packages for verified HTTP ingress, constructor-owned typed handlers, canonical provider identity where available, and discovered `channels/<name>.ts` routing."
  > "**`observe()` now receives every event directly.** The `types` filter and per-subscriber JSON snapshots are removed; callbacks should branch on `event.type` and treat events as read-only."
  - URL: https://github.com/withastro/flue/blob/main/CHANGELOG.md

---

## Carry-forward subsection

Last window (0.10.0..1.0.0-beta.1) closed on: leading 1.0 beta with
migration-heavy stabilization (valibot tool schemas, opaque run IDs,
run-introspection exports), durable/recoverable execution on a built-in SQLite
store, and a swap from WebSocket/SSE to a proprietary Durable Streams
transport that narrowed external run-event consumption.

This window's carry-forward verdict — **CONFIRMED AND ADVANCED on all three
threads:**

1. **Further 1.0-beta progression toward GA:** YES. beta.1 (2026-06-16) is the
   migration baseline; beta.2 (2026-06-17/18) is a small fix; a large
   `## Unreleased` section (Actions, `define*` naming, `flue run` unification)
   is staging the next beta/GA. The motion is convergence/cleanup, not new
   surface area — classic pre-GA freeze behavior.

2. **Transport/observability changes:** YES. `flue logs` removed
   (typed SDK run APIs only); `eventIndex` formally decoupled from Durable
   Streams resume offsets; `observe()` now delivers every event read-only with
   the `types` filter gone. The proprietary-transport boundary is hardening.

3. **Change to how externally-consumable run events are:** YES, and the most
   important thread. Workflow runs are now **private over HTTP by default**
   (opt-in `runs: WorkflowRunsHandler` export), receipts shrink to opaque
   `{ runId }`, and `streamUrl`/`offset` are removed from receipts. Combined
   with `flue logs` removal, Flue is moving decisively toward
   **private-by-default, separately-authorized run observability.** For a
   source we watch precisely because of the model+harness receipt boundary,
   this is a clear directional signal: the run record exists, but consuming it
   externally is becoming a privileged, explicitly-granted capability rather
   than an open stream.

## Source-contract follow-up (STEP 5)

**RESOLVED.** `sources/flue.yml` now contains a dedicated `changelog`
primary surface (id `changelog`, kind `changelog_file`, priority 1, url
`.../blob/main/CHANGELOG.md`) with a note explicitly stating it is the
"Canonical receipt surface" and that Flue publishes no GitHub Releases —
"cite the version-tagged CHANGELOG.md (or a release tag) as the receipt,
never the /releases page." This is the fix the prior audit asked for.

Residual nit for the coordinator: the `repo` primary surface still lists
`releases` in its `watch` array (line 13). That is defensible as a watch for
the *future appearance* of GitHub Releases, NOT as a receipt pointer, so it
does not reopen the follow-up. Verified this window:
`gh api repos/withastro/flue/releases` → length **0** (still empty). No action
required.

## Novelty vs profile

Profile (`content/profiles/flue.md`, last_updated 2026-06-03) is now
**materially stale** — it describes a v0.5.3-era surface (sandbox: 'local',
configureProvider(), observe() as isolate-global, SSE streaming with
Last-Event-ID, connector-via-coding-agent install). Genuinely NEW vs profile
this window:
- **Actions** as a unified orchestration primitive (no profile claim).
- Workflows rebuilt around `defineWorkflow({ agent, action })` (profile has no
  workflow grammar at all).
- `defineSkill()` TypeScript-native skills — additive tension with the
  `skills-markdown-first` claim (Markdown still works; TS is now first-class).
- Run observability now **private-by-default** + `flue logs` removed —
  contradicts the profile's "What To Watch Next" assumption that observability
  might become *more* externally consumable; the actual direction is the
  opposite (narrowing).
- `observe()` semantics changed (every event, read-only, no `types` filter) —
  supersedes the profile's v0.5.3 `observe()` description and answers the
  profile's open question about what events are observable.
- 15+ first-party `@flue/*` connector/persistence packages — supersedes the
  profile's "connector-via-coding-agent" framing with first-party verified
  ingress.

Recommend profile refresh next full review: add a Workflows/Actions section,
update the Run Observability section to reflect private-by-default direction,
and amend the `skills-markdown-first` claim to note TS-native parity.
