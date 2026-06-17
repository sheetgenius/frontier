# Group C Watchlist Harvest — 2026-05-13 to 2026-05-27

Author: agent
Window: 2026-05-13 to 2026-05-27 (today)
Sources read: source contracts + current profiles for Hermes Agent, Pi coding agent, Paperclip, Flue
Surfaces hit: GitHub releases, GitHub commits, GitHub PRs, top-level CHANGELOG (Flue)
Posture: novelty against current profile claims; "no notable activity" is valid; calibration roles per AGENTS.md (Paperclip = Factory/control-plane; Flue = programmable harness; Hermes + Pi = watchlist).

---

## Hermes Agent

Summary: **5 findings, 3 candidate signals.** v0.14.0 ("Foundation Release") shipped 2026-05-16 with 808 commits / 633 merged PRs since v0.13.0. The release reframes Hermes from "broad-surface personal agent" toward distribution primitive and provider-aggregator. Substantial post-release fix work continued through 2026-05-27 (Kanban hardening, Honcho identity-mapping, credential pool isolation).

### Finding: hermes-v0.14.0-foundation-release

- precision_level: release_note (with linked merged PRs at `commit_diff_reviewed` precision if a claim is taken from a specific PR)
- surface: github_release
- url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.16
- observed_at: 2026-05-27
- change_type: capability + ecosystem + economics
- body: Hermes ships as a PyPI package (`pip install hermes-agent`) for the first time ([PR #26593](https://github.com/NousResearch/hermes-agent/pull/26593)), removes its `[all]` extras in favor of lazy install of heavy adapters on first use ([PR #24220](https://github.com/NousResearch/hermes-agent/pull/24220), [#24515](https://github.com/NousResearch/hermes-agent/pull/24515)), cuts ~19s off cold-start, ships native Windows beta ([#21561](https://github.com/NousResearch/hermes-agent/pull/21561)), and is now listed in the Zed ACP Registry via `uvx` ([#26079](https://github.com/NousResearch/hermes-agent/pull/26079)). Distribution surface is dramatically lower-friction than the prior "clone + shell installer" path described in the current profile.
- candidate_signal: **yes** — install path changes the audience who can adopt Hermes (`pip install` vs. repo clone) and changes the supply-chain footprint (lazy + tiered + advisory checker). The profile's "Use Curator only if you are willing..." framing assumes a heavyweight install posture that this release softens.
- section_candidate: Platform
- axis_candidates: accessibility (clear win — distribution + cold start + Windows), security (lazy install + supply-chain advisory checker — Rule 5: platform-shaped, but evaluation-side, so could route to control-plane on review)

### Finding: hermes-openai-compatible-local-proxy

- precision_level: commit_diff_reviewed (PR body confirmed; merged 2026-05-14)
- surface: merged_pr
- url: https://github.com/NousResearch/hermes-agent/pull/25969
- observed_at: 2026-05-27
- change_type: capability + protocol + economics
- body: `hermes proxy` exposes a `http://localhost:port` endpoint speaking the OpenAI API, backed by whichever OAuth provider the operator is signed into (Claude Pro, ChatGPT Pro, SuperGrok). External tools that expect an OpenAI-compatible endpoint (Codex CLI, Aider, Cline, Continue) can route through a Hermes subscription instead of paying for separate API keys. This is novel relative to the current profile, which frames Hermes as an agent and messaging surface, not as a credential/router substrate.
- candidate_signal: **yes** — changes operator action ("one subscription, every tool") and changes Bitter's adjacency assumption: Hermes is now a control-plane for personal API access, not just a chat agent. Operators evaluating which tool to wrap with a subscription should consider this.
- section_candidate: Control Plane (provider routing + credential ownership)
- axis_candidates: accessibility (high — one OAuth, many tools), authority (visible — the proxy is local and the OAuth flow is owned by the operator), security (mixed — local endpoint widens the attack surface inside the host; not addressed in the PR body — note as residual)

### Finding: hermes-subgoal-on-active-goal

- precision_level: commit_diff_reviewed (PR merged 2026-05-14)
- surface: merged_pr
- url: https://github.com/NousResearch/hermes-agent/pull/25449
- observed_at: 2026-05-27
- change_type: capability + workflow
- body: `/subgoal <text>` appends user criteria onto a running `/goal` (Ralph loop) mid-run; the judge factors the new criteria into its done/continue verdict without restarting the loop. The current profile describes `/goal` as "locks the agent onto a target that persists across turns"; subgoal makes the criteria editable mid-run. The PR explicitly notes "No new tool, no agent self-judging, no decompose phase. The existing judge model just sees a richer prompt." — important honesty about the mechanism.
- candidate_signal: **maybe** — extends but does not fundamentally change the `/goal` semantic. Worth a posture-basis update for the `goal-persistent-cross-turn` claim, but not necessarily a standalone signal unless paired with the Kanban or judge story.
- section_candidate: Control Plane
- axis_candidates: authority (visible — user-driven mid-loop edit), accessibility (low-to-medium)

### Finding: hermes-kanban-corruption-hardening-wave

- precision_level: commit (multiple commits, diffs not individually reviewed)
- surface: maintainer_commit
- url: https://github.com/NousResearch/hermes-agent/commits/main (filter `fix(kanban)`)
- observed_at: 2026-05-27
- change_type: reliability + security
- body: A sustained wave of `fix(kanban)` commits landed 2026-05-23 through 2026-05-27 hardening SQLite against torn-write corruption (`secure_delete + cell_size_check + synchronous=FULL`, commit `6416dd51`), preserving exceptions on write-txn rollback failures (`e83252dc`), refusing to silently downgrade WAL to DELETE on transient EIO (`5c49cd0e`), adding post-commit `page_count` invariant checks (`99c19eb2`), grace periods to crashed-worker detection (`c002668f`), hoisting the zombie reaper out of `dispatch_once` (`ffdc937c`), and retrying corrupt-board dispatch after quarantine (`c94ad898`). The pattern reads as operational hardening on the Kanban primitive the current profile flags as "the production claim to watch" — a confidence-update event rather than a feature addition.
- candidate_signal: **maybe** — these are stability fixes, not capability changes, but the volume is the signal: the Kanban gate the profile names as load-bearing for multi-agent durability is still settling. Operators running real multi-agent boards should treat the post-v0.14.0 line as the integrity-floor baseline.
- section_candidate: Runtime
- axis_candidates: security (closes — torn-write + WAL downgrade are corruption vectors), authority (no change), accessibility (none)

### Finding: hermes-credential-pool-isolation-and-honcho-identity

- precision_level: commit (multiple in-window commits; diff not individually reviewed)
- surface: maintainer_commit
- url: https://github.com/NousResearch/hermes-agent/commit/2e181602
- observed_at: 2026-05-27
- change_type: security + capability
- body: `fix(agent): isolate credential pool on provider fallback` (commit `2e181602`, 2026-05-27) and the broader Honcho identity-mapping work (`feat(honcho-setup): add deployment-shape step`, `docs(honcho): document identity-mapping config + resolver ladder + deployment shapes`, commits `0bac8809` / `58987cb8` / `c03960de` / `6feb2afd`, week of 2026-05-21) extend the agent's per-user identity surface — `pinUserPeer`/`pinPeerName` aliases, user-id inclusion in agent cache signatures to prevent shared-thread peer contamination. Credential leakage across provider fallback and peer contamination on shared threads are both governance-relevant gaps. The current profile describes redaction-on-by-default and channel allowlists but does not describe the Honcho identity-mapping layer.
- candidate_signal: **yes** — this is a new identity-mapping primitive in Hermes that the profile does not name. Operators running multi-user gateway deployments should know about the resolver-ladder behavior and the cache-signature fix; absence of the prior fix is a quiet cross-user contamination risk.
- section_candidate: Control Plane
- axis_candidates: security (closes — cross-user contamination on shared threads; credential bleed on fallback), authority (visible — explicit identity resolver), accessibility (low — operators must understand resolver ladder)

### Open Questions

- Are the Honcho identity-mapping primitives now considered the canonical Hermes identity layer, or a Honcho-integration-specific feature? Source contract should be updated to name "identity mapping" as a high-signal pattern if so.
- The `hermes proxy` local endpoint: what auth does it require? PR body does not detail whether it binds to `127.0.0.1` only, requires a shared token, or is open-by-default on the loopback interface. Worth a follow-up probe.
- Does the lazy-install model preserve the "fail-closed on credentials" doctrine when a backend has not been installed yet, or could a missing backend silently degrade a security-relevant path?

---

## Pi Coding Agent

Summary: **3 findings, 1 candidate signal.** Nine releases shipped in window (v0.74.1 through v0.76.0). Most are reliability work (provider timeouts, Windows fixes, Node-version churn). Two are operator-relevant: the v0.75.4 supply-chain hardening release and v0.76.0's `--session-id` explicit-session naming for automation.

### Finding: pi-supply-chain-hardening-v0.75.4

- precision_level: release_note
- surface: github_release
- url: https://github.com/earendil-works/pi/releases/tag/v0.75.4
- observed_at: 2026-05-27
- change_type: security + ecosystem
- body: v0.75.4 (2026-05-20) ships the CLI with a generated `npm-shrinkwrap.json` for transitive dependencies, blocks accidental lockfile changes, verifies dependency pinning + lifecycle-script allowlists in CI, disables lifecycle scripts for `pi update --self` and local release installs where supported, and smoke-tests isolated npm + Bun installs before release. The README section is named "Supply-chain hardening." This is genuinely new posture relative to the current profile, which does not name supply-chain hygiene as a Pi characteristic.
- candidate_signal: **yes** — changes the operator decision "do I pin Pi by version or by lockfile" and changes Bitter's adapter assumptions if Pi is being wrapped: lifecycle scripts on `pi update --self` are now off by default, which affects custom postinstall hooks operators may have layered on.
- section_candidate: Platform (install path posture)
- axis_candidates: security (closes — lifecycle-script injection vector; transitive-dep drift), accessibility (low — invisible to most operators; helpful to ones who pin), authority (no change)

### Finding: pi-explicit-session-id-v0.76.0

- precision_level: release_note
- surface: github_release
- url: https://github.com/earendil-works/pi/releases/tag/v0.76.0
- observed_at: 2026-05-27
- change_type: capability + workflow
- body: v0.76.0 (2026-05-27) adds `--session-id <id>` so scripts can create or resume an exact project-local session by name ([PR #5076](https://github.com/earendil-works/pi/pull/5076)) and adds an `excludeFromContext` flag on the `bash` RPC command so RPC clients can run commands whose output should not be sent to the next prompt ([commit `61babc24`](https://github.com/earendil-works/pi/commit/61babc24)). Both are SDK/automation primitives — the current profile flags `$PI_SESSION_DIR` as the session-identity hook; this layer adds explicit naming for the session itself, useful for CI replays and external orchestration.
- candidate_signal: **yes** — operator action change: a CI runner or external scheduler can now address a Pi session by stable name without scraping the session directory. `excludeFromContext` is a small but real receipt-discipline primitive (run a context-polluting probe without feeding it back).
- section_candidate: Runtime (session identity + context shaping)
- axis_candidates: accessibility (medium — scriptability), authority (visible — explicit naming), security (low — `excludeFromContext` is the kind of primitive a redaction-aware harness needs)

### Finding: pi-provider-retry-and-timeout-bounds

- precision_level: release_note
- surface: github_release
- url: https://github.com/earendil-works/pi/releases/tag/v0.76.0
- observed_at: 2026-05-27
- change_type: reliability
- body: v0.76.0 bounds Codex WebSocket/SSE waits (`httpIdleTimeoutMs` applies to OpenAI Codex Responses WebSocket idle; new `websocketConnectTimeoutMs`; 10s Codex SSE response-header timeout) and makes `retry.provider.maxRetries` actually control provider retries instead of hidden SDK defaults ([PR #4991](https://github.com/earendil-works/pi-mono/pull/4991)). The current profile flags `retry.provider.timeoutMs / maxRetries / maxRetryDelayMs` as the existing surface; this finding refreshes that claim with the SDK-default-zero behavior and quota/billing 429-no-retry semantics.
- candidate_signal: no — it refreshes an existing claim. Should update `last_verified` on `provider-retry-timeout-controls` to 2026-05-27.
- section_candidate: Runtime
- axis_candidates: accessibility (low), authority (no change)

### Open Questions

- The current profile's `earendil-works-package-migration` claim assumed `@earendil-works/pi-coding-agent` would publish to npm. Did v0.74.1+ actually move publication? (The v0.74.1 release notes reference `@earendil-works/pi-ai` and `@earendil-works/pi-tui` as inheritance points, but the CLI package name is not in the release notes I sampled. Worth a direct npm check next cycle.)
- Pi's posture on supply-chain hardening lands on the same week as Hermes's lazy-install + advisory checker. Cross-provider digest opportunity: "the supply-chain wave" for agent harnesses.

---

## Paperclip — Factory / Control-Plane Calibration

Summary: **4 findings, 3 candidate signals.** Three numbered releases shipped (v2026.513.0, v2026.517.0, v2026.525.0). Substantial control-plane work: scoped agent permissions + protected assignments, routine env secrets with precedence rules, issue document locking, Modal as a first-party sandbox plugin, and an ACPX-Claude adapter that respects `~/.claude/settings.json` permissions. This is the calibration source for "agent labor becomes real operating state" — and several findings push that thesis forward.

### Finding: paperclip-scoped-agent-permissions-and-assignment-controls

- precision_level: release_note
- surface: github_release
- url: https://github.com/paperclipai/paperclip/releases/tag/v2026.525.0
- observed_at: 2026-05-27
- change_type: capability + protocol + security
- body: Issue and agent assignment mutations now run through a real authorization service with protected-assignment enforcement; plugin SDK/host APIs gain company-settings slots and policy/grant management; blocked issues get retry-now affordances; an incremental principal-access compatibility backfill runs ([PR #6386](https://github.com/paperclipai/paperclip/pull/6386)). This is the strongest control-plane evidence in window: assignment is no longer "agent declared, server believed" — it goes through a real authz service. The current profile's `in_review` claim ("agents cannot self-transition") generalizes here to assignment itself.
- candidate_signal: **yes** — direct Factory-relevance signal. Paperclip is operationalizing the governance thesis the current profile names as load-bearing. Operators evaluating whether multi-agent labor can be governed should treat this as evidence that the answer is moving toward yes for Paperclip specifically.
- section_candidate: Control Plane
- axis_candidates: authority (visible — explicit authz service + protected assignments), security (closes — agent-asserted assignment is no longer the source of truth), accessibility (medium — policy/grant UI surfaces this to operators)

### Finding: paperclip-routine-env-secrets-with-precedence

- precision_level: release_note (PR linked)
- surface: github_release
- url: https://github.com/paperclipai/paperclip/releases/tag/v2026.525.0
- observed_at: 2026-05-27
- change_type: capability + security
- body: Routine env now flows through the runtime contract with persisted revisions and `agent < project < routine` precedence; safe secret metadata surfaces in routine UI/history without exposing secret values in logs or `secret_access_events` ([PR #6212](https://github.com/paperclipai/paperclip/pull/6212)). The current profile names `secrets-provider-vaults` and `secret_access_events` as v2026.512-era claims; this extends them to the routine layer with explicit precedence rules and is the first time Paperclip exposes a layered-secret model in operator-visible terms.
- candidate_signal: **yes** — precedence (`agent < project < routine`) is the kind of structural choice operators must understand to govern correctly. The fact that the precedence is named in release notes is itself the receipt that this is meant to be an operator concept, not an implementation detail.
- section_candidate: Control Plane
- axis_candidates: security (closes — secret values stay out of logs; access events preserved), authority (visible — precedence rules are documented), accessibility (medium)

### Finding: paperclip-issue-document-locks

- precision_level: release_note
- surface: github_release
- url: https://github.com/paperclipai/paperclip/releases/tag/v2026.517.0
- observed_at: 2026-05-27
- change_type: capability + workflow
- body: Board-managed document locks preserve approved snapshots, route agent writes to derived documents, expose lock state in the UI and API, and record lock activity ([PR #6009](https://github.com/paperclipai/paperclip/pull/6009)). This is the structural analog to the v2026.512-era `in_review` claim, applied to document state: an approved document cannot be overwritten by an agent in-place; agent writes are diverted to a derived document. The current profile does not name document locking; it should.
- candidate_signal: **yes** — changes operator behavior (approval discipline now has a persistent surface). Pairs with the `in_review` claim as evidence that Paperclip's structural-not-asserted governance approach is generalizing across object types.
- section_candidate: Control Plane
- axis_candidates: authority (visible — lock state is API-exposed), accessibility (medium — operators see lock state in UI), security (closes — silent overwrite of approved state)

### Finding: paperclip-modal-sandbox-and-acpx-claude

- precision_level: release_note
- surface: github_release
- url: https://github.com/paperclipai/paperclip/releases/tag/v2026.525.0
- observed_at: 2026-05-27
- change_type: ecosystem + capability
- body: Modal joins E2B, Cloudflare, Daytona, exe.dev as a first-party sandbox plugin ([PR #6245](https://github.com/paperclipai/paperclip/pull/6245)), with cold-start-friendly probe timeouts (120s `environmentProbe` worker RPC timeout, [#6289](https://github.com/paperclipai/paperclip/pull/6289)). The ACPX-Claude adapter now resolves bare Claude model IDs, surfaces real diagnostic detail instead of opaque "Internal error", and respects user `~/.claude/settings.json` permissions ([PR #6590](https://github.com/paperclipai/paperclip/pull/6590)). The second half is the more interesting one: a control-plane that respects the underlying coding agent's own permission file is a different posture than "control plane owns all permissions."
- candidate_signal: **maybe** — sandbox expansion is observe-grade per the source contract's `ecosystem_package` default. The ACPX-Claude permission-file respect is more interesting: it's an explicit deference to the agent-owned permission layer, which has implications for how Bitter (or any wrapping layer) should think about layered permissions.
- section_candidate: Runtime (sandbox), with the permission-file slice routed to Control Plane
- axis_candidates: accessibility (low-medium — more sandbox choices), authority (the ACPX claim is the visible-authority story: settings.json stays the source of truth)

### Open Questions

- The "principal-access compatibility backfill" in PR #6386 suggests there was prior data without principal-access metadata. What was the pre-backfill governance baseline, and what did operators on older versions need to do to be safe? Worth a security-advisory check.
- The `~/.claude/settings.json` respect in ACPX-Claude raises the question: does Paperclip's authz service compose with the agent-owned permission file, or do they operate on disjoint surfaces? (Answer affects how operators should structure their permission policy.)
- Cold-start probe timeout at 120s on Modal: is this a sandbox-class characteristic or a Modal-specific quirk? Affects how operators should set timeouts for other cold-start providers.

---

## Flue — Programmable Harness / Headless Agent Calibration (Tier 2)

Summary: **5 findings, 3 candidate signals.** This is the heaviest in-window movement of any Group C provider. Six numbered releases shipped (0.6.0, 0.6.1, 0.6.2, 0.7.0, 0.7.1, 0.8.0) plus multiple betas. The 0.8.0 release (2026-05-27) is a structural rewrite that separates persistent agents from finite workflows — a category-level move that calibrates the "model + harness" framing the source contract names as the research lens.

### Finding: flue-agents-vs-workflows-split-v0.8.0

- precision_level: release_note (CHANGELOG.md root, plus underlying merged commits)
- surface: official_docs
- url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
- observed_at: 2026-05-27
- change_type: api_surface + philosophy + breaking_change
- body: Flue 0.8.0 (2026-05-27) introduces a category split: `agents/` files define persistent, addressable agent instances via `createAgent(...)`; `workflows/` files define finite executions via `run(...)`. Agents maintain sessions across direct interactions and dispatched inputs; workflows own persisted runs and results. Public HTTP and WebSocket exposure is declared through `route` and `websocket` middleware exports. Roles are replaced by named `defineAgentProfile(...)` subagents; `task({ role })` becomes `task({ agent })`. Runs, `/runs`, and `flue logs` describe workflows only; direct/dispatched agent interactions correlate by instance/session/operation/`dispatchId` instead of `runId`. The current profile names "Agent = Model + Harness" as the framing; 0.8.0 splits that into "Agent (persistent) vs Workflow (finite)" and routes the receipt-trail through workflows only — a category-level posture change.
- candidate_signal: **yes** — this is the kind of breaking_change the source contract flags as `study`, not `note`. Validates a specific shape of the "model + harness" thesis: that persistent agents and finite executions are distinct primitives with distinct authority models, not two configurations of one runtime. Bitter's own observation-vs-actuation split is structurally adjacent.
- section_candidate: Runtime (execution-environment shape change), with strong Platform implications (the adoption-time API contract has shifted)
- axis_candidates: authority (the runs-are-workflow-only rule moves the receipt-trail; clarifies which artifact is the durable claim), accessibility (medium — Markdown skill imports + Vite-based build lowers the floor, but the breaking rename of `@flue/sdk` → `@flue/runtime` raises the cost for existing users), security (no direct change)

### Finding: flue-local-sandbox-factory-and-env-allowlist-v0.6.0

- precision_level: release_note
- surface: official_docs
- url: https://github.com/withastro/flue/blob/main/CHANGELOG.md (0.6.0 section)
- observed_at: 2026-05-27
- change_type: api_surface + security + sandbox
- body: v0.6.0 (2026-05-13) replaces the `sandbox: 'local'` magic string with a `local()` factory exported from `@flue/runtime/node`. The factory inherits only a small allowlist from `process.env` (`PATH`, `HOME`, `USER`, `LOGNAME`, `HOSTNAME`, `SHELL`, `LANG`, `LC_ALL`, `LC_CTYPE`, `TZ`, `TERM`, `TMPDIR`, `TMP`, `TEMP`); anything else, including API keys, must be passed explicitly through the `env` option. The current profile claim `virtual-sandbox-default` says the agent inherits a virtual sandbox; the local-sandbox path's env-allowlist posture is a real security primitive — keys do not leak into the agent's `bash` tool by default unless the operator opts in.
- candidate_signal: **yes** — directly matches the source contract's "model + harness" framing: the harness is responsible for the env boundary, not the model. The allowlist makes the boundary mechanical, not aspirational.
- section_candidate: Runtime
- axis_candidates: security (closes — accidental host-secret exposure into agent shell), authority (visible — explicit `env` option), accessibility (low — TypeScript developers only)

### Finding: flue-cloudflare-shell-sandbox-v0.7.0

- precision_level: release_note (with breaking_change marker)
- surface: official_docs
- url: https://github.com/withastro/flue/blob/main/CHANGELOG.md (0.7.0 section)
- observed_at: 2026-05-27
- change_type: api_surface + sandbox + breaking_change
- body: v0.7.0 (2026-05-15) adds `getShellSandbox({ workspace, loader })`, `getDefaultWorkspace()`, and `hydrateFromBucket()` from `@flue/runtime/cloudflare`. The new sandbox wires `@cloudflare/shell` Workspaces into Flue through a codemode `code` tool backed by a Worker Loader binding. The prior `getVirtualSandbox()` now throws with a migration message: the previous API "described R2 as if it were mounted directly as the harness filesystem, but `@cloudflare/shell` Workspaces are SQLite-indexed filesystems with optional R2 blob spillover; raw bucket keys uploaded outside Workspace were invisible." This is the kind of correction the source contract flags as `study`: the prior API was telling operators a false story about how the filesystem worked.
- candidate_signal: **yes** — operators on the Cloudflare target who uploaded raw R2 keys expecting the agent to see them were running on a broken model. Anyone running pre-0.7.0 Cloudflare sandboxes has a real upgrade burden. Also category evidence: filesystem-abstraction primitives are non-obvious and easy to misframe.
- section_candidate: Runtime
- axis_candidates: accessibility (the prior API was easier-to-call but lied about behavior; the new one is more honest and requires explicit hydration), authority (visible — the workspace boundary is now explicit), security (the prior model exposed bucket-key visibility ambiguity)

### Finding: flue-run-observability-and-bare-runid-routes-v0.5.x-through-0.6.0

- precision_level: release_note (per CHANGELOG; covers 0.5.0–0.6.0)
- surface: official_docs
- url: https://github.com/withastro/flue/blob/main/CHANGELOG.md (0.5.0 and 0.6.0 sections)
- observed_at: 2026-05-27
- change_type: api_surface + runtime + breaking_change
- body: v0.6.0 collapses run-lookup HTTP routes to `GET /runs/<runId>` (no agent/instance prefix), and `flue logs` becomes `flue logs <runId>`. v0.6.0 also adds `registerProvider(...)` accepting `contextWindow`, `maxTokens`, and per-model overrides for HTTP providers (fixing a class of "model metadata defaulted to 0" bugs that made `shouldCompact` misfire). The current profile names `run-observability-history` as a claim; the bare-runId route + provider-metadata correctness extends that claim with a stable opaque-id pattern and a real fix to compaction behavior on small-window models.
- candidate_signal: **maybe** — this refreshes the `run-observability-history` claim and adds a structural correctness fix to compaction on Workers AI / small-window models. The bare-runId routing is a small API-shape statement about what is canonical (the run, not the agent/instance/run path). Worth `last_verified` refresh.
- section_candidate: Runtime
- axis_candidates: accessibility (medium — simpler routes), authority (clearer receipt URL pattern), security (none)

### Finding: flue-openapi-and-admin-api-v0.6.0

- precision_level: release_note
- surface: official_docs
- url: https://github.com/withastro/flue/blob/main/CHANGELOG.md (0.6.0 section)
- observed_at: 2026-05-27
- change_type: api_surface + platform
- body: v0.6.0 adds `GET /openapi.json` serving an OpenAPI 3.1 document for the built-in routes, plus a read-only `admin()` Hono sub-app mounted by user apps with their own auth middleware. Endpoints: `GET /agents`, `GET /agents/<name>/instances`, `GET /agents/<name>/instances/<id>/runs`, `GET /runs`, `GET /runs/<runId>`. Flue ships no auth opinions — middleware order in the user's Hono app controls access. This is the first time Flue exposes an audit-shaped surface: list-agents, list-runs, etc. The current profile's "operator owns the run" governance posture is preserved (Flue still ships no auth), but the *shape* of an admin surface is now defined.
- candidate_signal: **yes** — Flue is shipping the API shape but explicitly deferring authority. This is the calibration the source contract names: which harness primitives are stabilizing? OpenAPI doc + read-only admin sub-app is structural; auth is still operator-owned. Validates the "harness as shaped environment around the model, not platform" thesis.
- section_candidate: Platform (read API surface), with Control Plane implications (admin surface declared but auth deferred)
- axis_candidates: authority (mixed — surface exists but auth is operator-owned, by design), accessibility (medium — OpenAPI spec lets external tools build clients), security (none directly; the explicit "Flue ships no auth opinions" is the residual)

### Open Questions

- The 0.8.0 release notes mention agent **delegation** was added and then reverted in-window (commits `00808e0a` Revert "agent delegation foundation", `2d6c187a` / `51096563` / `b3974554` / `600073f8` / `e5d44f22`, all 2026-05-26). What did the delegation API look like, why was it reverted, and what shape does the eventual delegation surface take? This matters for the multi-agent calibration story.
- The package rename `@flue/sdk` → `@flue/runtime` plus the migration-placeholder package suggests Flue is reserving `@flue/sdk` for a *client-side* SDK (to talk to deployed Flue apps from external code). Track whether that lands and what it looks like.
- The `local()` sandbox factory's env allowlist is small and explicit, but operators can pass `env: { ...process.env }` to opt into full host env. Is this guidance documented in the README, or only in the CHANGELOG?
- Documentation app shipped 2026-05-26 (`feat(docs): add standalone documentation frontend`, `docs: deploy docs site under /docs`). Once the docs site is live, it becomes a new primary surface; source contract may need to add a `docs` surface separate from the README.

---

## Cross-Provider Observations (Not Yet Findings)

- **Supply-chain hardening is a parallel motion this window.** Hermes v0.14.0 ships a supply-chain advisory checker + lazy install + tiered fallback; Pi v0.75.4 ships an explicit "Supply-chain hardening" README section with shrinkwrap, lifecycle-script controls, and isolated install smoke tests. Two providers from different surface classes converged on the same posture in the same two-week window. Digest opportunity.
- **Structural-not-asserted governance is generalizing.** Paperclip's PR #6386 (scoped agent permissions + protected assignments) and PR #6009 (issue document locks) extend the v2026.512-era `in_review` thesis: governance is enforced at the structural layer, not by agent assertion. Hermes' Kanban PR #20232 (the hallucination gate already in the current profile) is the parallel pattern. Cross-provider digest line: "no evidence, no state change" is gaining specific mechanisms.
- **The runs-as-workflow-only choice in Flue 0.8.0 is the cleanest "what is the receipt" answer this cycle.** Persistent agents do not produce runs; workflows do. This maps directly onto Bitter's finding-vs-signal distinction in a way worth examining in backstage rather than the public digest.

## Open Doctrine Questions for Audit Note

- The `hermes-v0.14.0-foundation-release` finding is multi-faceted (distribution, supply chain, performance, native Windows, Zed registry, multiple new providers). Per `RESEARCH_CONTRACT.md`, a finding is a "source-backed observation of what changed" — is a release-as-finding legitimate, or should v0.14.0 be decomposed into several findings keyed on operator consequence? Suggestion: the decomposition happens at signal-promotion time, not finding time.
- Paperclip's ACPX-Claude adapter respects `~/.claude/settings.json` — this is a *composition* claim about two products' permission systems. Where do composition findings live in the schema? Worth a charter/proposed note if this pattern recurs.

## Process Notes

- WebFetch calls used: 1 (Paperclip changelog page; returned no content). All other surfaces hit via `gh` CLI for GitHub data per the WebFetch guidance. Total `gh api` calls: ~14.
- All citations are GitHub URLs (release pages, commits, PRs, CHANGELOG.md). All dates verified against `published_at` / `merged_at` / commit `author.date` in the 2026-05-13 to 2026-05-27 window.
- No stale-model-memory claims. Where a profile claim was extended rather than refreshed, the finding names the existing claim ID it touches.
