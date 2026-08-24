# Codex tree study -- primary-source pins, read 2026-08-23

All facts below read from a blobless clone of github.com/openai/codex on
2026-08-23 (refs as of that date) and from files at pinned tags. The study tag
is rust-v0.149.0 (npm latest at read time).

## Scale and velocity

- First commit 59a180ddec4adaf9760972cdb1eb89f06a81be8b "Initial commit"
  2025-04-16. 9,577 commits reachable
  from rust-v0.149.0.
- Last 90 days (since 2026-05-25): 2,905 commits on main by 204 distinct
  author names.
- 1,246 tags total; 198 stable minor tags (rust-vX.Y.0). Stable-tag cadence by
  month: 17 (2025-08), 15 (2025-09), 11 (2025-10), 9 (2025-11), 14 (2025-12),
  16 (2026-01), 13 (2026-02), 12 (2026-03), 10 (2026-04), 7 (2026-05),
  7 (2026-06), 4 (2026-07), 3 (2026-08). Stables decelerate while alpha tags
  run near-daily (21 GitHub releases on the 0.148.0-alpha line alone; see the
  2026-08-20 brief run for the alpha recount).
- Workspace growth, `codex-rs/` top-level entries: 24 at rust-v0.2.0
  (2025-06-30), 47 at rust-v0.50.0 (2025-10-25), 65 at rust-v0.100.0
  (2026-02-12), 115 at rust-v0.149.0 (2026-08-20).
- New crates 0.100.0 -> 0.149.0 include: app-server-daemon, app-server-client,
  app-server-transport, agent-identity, agent-graph-store, analytics,
  cloud-config, code-mode + code-mode-host + code-mode-protocol +
  code-mode-runtime, connectors, ext/ (extension tree), features, memories,
  thread-store, rollout, sandboxing, bwrap, v8-poc, workload-identity.
- Removed 0.100.0 -> 0.149.0: execpolicy-legacy, cloud-requirements, code,
  debug-client.
- 0.147.0 -> 0.149.0 (623 commits, two stable tags in 48 hours): files
  changed by crate, top of the list: core 363, tui 317, app-server 137,
  app-server-protocol 128, ext 120, exec-server 75, thread-store 55.

## The flag table is the roadmap and the graveyard

`codex-rs/features/src/lib.rs` at rust-v0.149.0: 116 feature specs.
38 Stable, 41 UnderDevelopment, 34 Removed, 3 Deprecated.

- Guardian family: GuardianApproval key=guardian_approval Stage::Stable
  default_enabled=TRUE. GuardianV2 key=guardianv2 UnderDevelopment, false.
  Plus three UnderDevelopment Guardian* transcript/compaction flags.
  So a model already sits in the approval path by default on stable; V2 is
  the anticipatory upgrade, present in the tag and off.
- Stable but default-off: MemoryTool, MultiAgentV2, RecommendedPlugins.
- UnderDevelopment (selected): CodeMode, CodeModeOnly, CodeModeInterrupt,
  Chronicle, Artifact, RealtimeConversation, NetworkProxy, TokenBudget,
  RolloutBudget, ExecPermissionApprovals, RequestPermissionsTool,
  DeferredToolWorldState, ExecutorCapabilityDiscovery, UseAgentIdentity.
- Removed (selected): JsRepl, JsReplToolsOnly, SearchTool, ToolSearch,
  RequestRule, Steer, SendAsyncMessage, CollaborationModes, RemoteControl,
  MultiAgentMode (v1), WindowsSandbox + WindowsSandboxElevated (superseded),
  UseLegacyLandlock, UseLinuxSandboxBwrap, Sqlite, ApplyPatchFreeform,
  GhostCommit, CodexGitCommit, TuiAppServer, PluginHooks.

## The deletion receipts (deterministic middle layer)

- 942af8447b "Retire the untrusted approval policy (#39630)" -- in
  rust-v0.149.0, not rust-v0.148.0.
- 279b93242c "Remove config lockfile support (#38011)" -- in rust-v0.148.0.
- PR #32093 deleted the legacy exec policy engine outright at rust-v0.145.0;
  PR #34271 (same tag) edits the user's rules/default.rules on first startup,
  removing exact allow entries for prefixes Codex no longer suggests as policy
  amendments. (Both already receipted on the profile, 2026-07-21 read.)
- PR #29815 deleted the auto_compaction flag and its config schema entry:
  automatic compaction lost its off switch (profile, 2026-07 window).
- The surviving codex-rs/execpolicy crate at 0.149.0 is 10 source files whose
  public API is dominated by amend functions
  (blocking_append_allow_prefix_rule, blocking_append_network_rule): the rule
  file persists what was granted in session; it is not a hand-authored policy
  DSL. The RequestRule feature (model-proposed rule amendments as a gated
  feature) is Stage::Removed.

## The policy is a prompt

codex-rs/ext/guardian-v2/src/async_scorer/classifier_instructions.md at
rust-v0.149.0 is a natural-language security policy, versioned in the tree:
"You are acting as a first-step asynchronous security reviewer. Your decisions
are non-blocking, but we will run a blocking reviewer on future actions based
on your risk level." It defines trusted content (user and developer messages,
AGENTS.md, request_user_input responses) vs untrusted (tool outputs, skills,
plugin descriptions, assistant outputs), a four-level user_authorization
rubric, and a four-level base-risk taxonomy, including instructions like
"Judge authorization by the material semantics, not exact syntax."
Guardian approval MVP merged 2026-03-07 (e84ee33cc0, #13692).

## Deterministic investment did not stop; it moved to the boundary

In the same 0.147->0.149 jump: network-proxy (20 files), windows-sandbox-rs
(19), plus crates sandboxing, bwrap, linux-sandbox, exec-server. The 0.146
alpha line carried the egress-policy hardening wave (profile, 2026-07-21).
Enforcement (OS sandboxes, network proxy) gets engineering; adjudication
(what to allow) moves into models; the hand-authored middle (policy DSLs,
lockfiles, preset approval modes) is what gets deleted.

## Other arcs visible in the tree

- code-mode family (CodeModeHost Stable default-on; CodeMode/CodeModeOnly
  UnderDevelopment; v8-poc crate present): the JsRepl experiment is
  Stage::Removed and a second attempt at code-as-tool-interface is being
  built. First "Code mode" commits 2026-01.
- app-server family (daemon, client, transport, protocol; 265 changed files
  across the two-stable jump) plus sdk/: the harness as an embeddable
  service, consistent with OpenAIDevs' public "their applications control the
  interface, context, tools, and approvals while the harness handles the
  agent loop" (captured card, 2026-08-20 brief run).
- The repo's own AGENTS.md addresses the model as a contributor ("You operate
  in a sandbox where CODEX_SANDBOX_NETWORK_DISABLED=1 will be set...").
  Share of Codex-authored commits: not determinable from trailers (11
  Co-authored-by hits in 90 days); do not claim a number.

## Cross-checks not redone here

Alpha-release counts, GuardianV2 flag state at both stables, and the
0.148/0.149 ahead_by counts were independently verified in
runs/2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0 (J16-J20) and are
reused, not re-derived.

## Corrections made during the editor's pass

- The draft cited PR #39700 (fail closed on unsafe config and sed parsing) as
  in rust-v0.149.0. Ancestry check says it is NOT (merged 2026-08-20, after
  the tag). Replaced with PR #39307 (Guardian scoring fail-closed), which IS
  an ancestor of rust-v0.149.0 per this clone and the 2026-08-20 brief (J20).
- A full commit hash for the first commit was initially typed from memory and
  was wrong; the correct hash is 59a180ddec4adaf9760972cdb1eb89f06a81be8b
  (git rev-parse in the clone).
- rust-v0.146.0 stable is dated 2026-07-28, one week after the profile's
  2026-07-21 "no 0.146 stable" read; the feature says the egress work sat on
  the alpha line while 0.145.0 was the newest stable, which is exact.
