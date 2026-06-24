---
provider: claude-code
label: Claude Code
owner: Anthropic
surface_class: closed_source_release_notes
evidence_floor: release_note
window: 2026-06-16..2026-06-23
run_dir: runs/2026-06-23-weekly-digest-2026-06-16_2026-06-23-frontier-v0
harvested: 2026-06-23
harvester: opus-4.8-harvester
primary_surface: https://code.claude.com/docs/en/changelog
versions_in_window: [2.1.179, 2.1.181, 2.1.183, 2.1.185, 2.1.186]
versions_absent: [2.1.180, 2.1.182, 2.1.184]  # confirmed not published — internal/skipped tags
whats_new_status: "No Week 25 digest published as of harvest; latest is Week 24 (June 8–12, v2.1.166–v2.1.176). Changelog is the trailing canonical surface for this window."
---

# Claude Code — Harvest 2026-06-16 → 2026-06-23

## Surface posture

Claude Code is `closed_source_release_notes` (evidence_floor `release_note`). The
canonical surface is the changelog (https://code.claude.com/docs/en/changelog).
Each finding's channel is its version tag (`tagged-release`); there is no
main-unreleased channel for this surface. The `whats-new` digest has **not**
published a Week 25 narrative covering this window — the changelog stands alone.
Five versions ship dated June 2026, all within window: 2.1.179 (Jun 16), 2.1.181
(Jun 17), 2.1.183 (Jun 19), 2.1.185 (Jun 20), 2.1.186 (Jun 22). Versions
2.1.180, 2.1.182, 2.1.184 are confirmed **not present** on the page (skipped tags).

No item in this window carries research-preview / beta / experimental / coming-soon
language. Everything below is shipped in a tagged release (`tagged-release`).

---

## Findings

### 2026-06-23-claude-code-agent-permission-rules-enforced
- **date:** 2026-06-22
- **version:** 2.1.186
- **change_type:** security
- **channel:** tagged-release (2.1.186)
- **section:** Bug fixes (subagent permission grammar)
- **accessibility_impact:** low — restores intended behavior of an existing setting.
- **security_impact:** HIGH — this is a permission-enforcement regression fix. The
  `Agent(type)` / `Agent(x,y)` permission grammar (the param-grammar carried forward
  from 2.1.178's `Tool(param:value)` work, e.g. `Agent(model:opus)`) was **not being
  enforced for named subagent spawns**: deny rules and allowed-types restrictions
  silently failed to apply. An operator who wrote `Agent(...)` deny/allow rules to
  constrain which subagent types could be spawned was unprotected until this fix.
  Advisory-shape per `sources/claude-code.notes.md` (permission enforcement gap).
- **operator_implication:** Any deployment relying on `Agent(...)` rules to gate
  subagent spawning must upgrade past 2.1.186; pre-2.1.186 the rules were cosmetic
  for named spawns. Re-audit subagent allowlists after upgrade.
- **candidate_signal:** YES — permission-grammar enforcement gap on the exact
  Tool(param:value) surface we tracked last window; governance authority that
  silently didn't bind is a frontier trust-boundary event.
- **confidence:** high
- **receipt:** "Fixed `Agent(type)` deny rules and `Agent(x,y)` allowed-types restrictions not being enforced for named subagent spawns"
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-186

### 2026-06-23-claude-code-background-subagent-permission-prompts
- **date:** 2026-06-22
- **version:** 2.1.186
- **change_type:** security
- **channel:** tagged-release (2.1.186)
- **section:** Changed (subagent permission UX)
- **accessibility_impact:** medium — unblocks background subagents that previously
  dead-ended on a permission request.
- **security_impact:** medium — changes the default disposition of an
  unauthorized-tool request inside a background subagent from **auto-deny** to
  **surface-to-main-session-for-human-decision**. The dialog now attributes which
  agent is asking; Esc denies just that tool. This is a deliberate move of consent
  authority back into the operator's view (counter to the broader auto-mode-default
  trend), and it touches the background-worker trust isolation lineage (2.1.169).
- **operator_implication:** Background subagents can now obtain elevated permissions
  via a main-session prompt rather than being hard-denied. Operators who relied on
  background-subagent auto-deny as an implicit isolation boundary should note the
  boundary changed: a human is now prompted instead. Per-tool attribution is the
  mitigation.
- **candidate_signal:** YES (secondary) — a consent-surface that moves authority
  *toward* operator visibility, with per-agent attribution; relevant to the
  "consent moved, not vanished" framing in the profile.
- **confidence:** high
- **receipt:** "Changed background subagents to surface permission prompts in the main session instead of auto-denying; the dialog shows which agent is asking, and Esc denies just that tool"
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-186

### 2026-06-23-claude-code-mcp-cli-login-logout
- **date:** 2026-06-22
- **version:** 2.1.186
- **change_type:** protocol
- **channel:** tagged-release (2.1.186)
- **section:** Added (MCP connector auth)
- **accessibility_impact:** medium — MCP server authentication no longer requires the
  interactive `/mcp` TUI menu; works headless and over SSH via `--no-browser` stdin
  redirect.
- **security_impact:** medium — a new CLI auth entry point (`claude mcp login`/`logout`)
  for MCP connectors. Directly in the brief's watch list (MCP connector auth). Lowers
  friction for authenticating connectors in non-interactive / CI / SSH contexts.
- **operator_implication:** CI and headless pipelines can now authenticate MCP
  servers without an interactive session — relevant to any Bitter adapter that
  wraps Claude Code with MCP connectors. The `--no-browser` SSH path is the
  notable affordance.
- **candidate_signal:** YES (tertiary) — explicit brief watch item (MCP connector
  auth); new headless auth surface for the connector ecosystem.
- **confidence:** high
- **receipt:** "Added `claude mcp login <name>` and `claude mcp logout <name>` to authenticate MCP servers from the CLI without opening the interactive `/mcp` menu, with `--no-browser` stdin redirect support for completing over SSH"
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-186

### 2026-06-23-claude-code-headless-auth-stub-tool-leak
- **date:** 2026-06-22
- **version:** 2.1.186
- **change_type:** security
- **channel:** tagged-release (2.1.186)
- **section:** Bug fixes (headless/SDK MCP auth)
- **accessibility_impact:** low.
- **security_impact:** medium — MCP servers requiring authentication were
  **exposing auth-stub tools to the model in headless/SDK mode**. The model could
  see (and potentially attempt to call) placeholder tools for unauthenticated
  servers. Advisory-shape (information exposure on the headless tool surface).
- **operator_implication:** SDK/headless deployments that wire authenticated MCP
  servers should upgrade past 2.1.186; before it, unauthenticated server stubs
  leaked into the model's tool list non-interactively.
- **candidate_signal:** NO — real trust-surface fix, but narrow and contained;
  documented here for the carry-forward trust-boundary cluster rather than promoted.
- **confidence:** high
- **receipt:** "Fixed MCP servers requiring authentication exposing auth-stub tools to the model in headless/SDK mode"
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-186

### 2026-06-23-claude-code-scheduled-trigger-input-classification
- **date:** 2026-06-22
- **version:** 2.1.186
- **change_type:** security
- **channel:** tagged-release (2.1.186)
- **section:** Bug fixes (trigger input handling)
- **accessibility_impact:** low.
- **security_impact:** medium-HIGH — this is a privilege/injection-shape fix.
  Scheduled-task and webhook trigger deliveries were **treated as keyboard input**,
  meaning an inbound automated trigger could **approve a pending action** or **set
  the session title in auto mode**. Now they classify as task notifications and can
  do neither. This is an authority-confusion fix: external automated input was being
  granted operator-keystroke authority, including approving permissions under auto mode.
- **operator_implication:** Any deployment using `/schedule` or webhook triggers
  alongside auto mode should upgrade past 2.1.186 — pre-fix, an inbound trigger
  could auto-approve a pending tool call. Directly compounds the auto-mode-default
  posture: external triggers + auto-approve = unattended privilege escalation path,
  now closed.
- **candidate_signal:** YES (secondary) — input-source confusion that let automated
  triggers approve actions under auto mode; intersects the auto-mode-default-on
  governance thread and the Remote Control / `/schedule` cloud-surface lineage.
- **confidence:** high
- **receipt:** "Fixed scheduled task and webhook trigger deliveries being treated as keyboard input; they now classify as task notifications and can no longer approve a pending action or set the session title in auto mode"
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-186

### 2026-06-23-claude-code-respond-to-bash-output
- **date:** 2026-06-22
- **version:** 2.1.186
- **change_type:** workflow
- **channel:** tagged-release (2.1.186)
- **section:** Changed (default behavior)
- **accessibility_impact:** medium — `!` bash output now auto-feeds the agent.
- **security_impact:** low-medium — a **default-behavior change**: `!` bash commands
  now trigger Claude to respond to the output automatically (previously
  context-only). Reverting requires `"respondToBashCommands": false`. Default flips
  toward more autonomous reaction to command output.
- **operator_implication:** Operators who used `!` to inject command output into
  context *without* prompting a model turn will see new behavior — set
  `respondToBashCommands: false` to preserve the old contract. Minor authority
  drift in the autonomous-default direction.
- **candidate_signal:** NO — a default flip worth noting in the digest's
  autonomy-drift line, but below signal threshold on its own.
- **confidence:** high
- **receipt:** "`!` bash commands now trigger Claude to respond to the output automatically; set `\"respondToBashCommands\": false` in settings.json to keep the previous context-only behavior"
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-186

### 2026-06-23-claude-code-auto-mode-destructive-command-blocks
- **date:** 2026-06-19
- **version:** 2.1.183
- **change_type:** security
- **channel:** tagged-release (2.1.183)
- **section:** Improved (auto mode safety)
- **accessibility_impact:** low.
- **security_impact:** HIGH — hardens the **auto-mode classifier** (the default
  permission posture since 2.1.152) against destructive operations: destructive git
  commands (`git reset --hard`, `git checkout -- .`, `git clean -fd`, `git stash drop`)
  blocked when the user didn't ask to discard work; `git commit --amend` blocked when
  the commit wasn't made by the agent this session; `terraform destroy` /
  `pulumi destroy` / `cdk destroy` blocked unless the user named the specific stack.
  This is a substantive expansion of the auto-mode hard-deny/safety layer — concrete
  enumeration of what auto mode now refuses, partially answering the profile's open
  question "What does Auto mode classify as safe by default?"
- **operator_implication:** Auto-mode deployments get materially stronger guardrails
  against catastrophic destructive operations without operator intent. Operators who
  previously layered their own hard-deny rules for these commands can re-audit
  whether the native classifier now covers them. Note: IaC `destroy` now requires a
  named stack to proceed under auto mode.
- **candidate_signal:** YES — concrete, enumerated expansion of the auto-mode safety
  classifier (the governance surface we've tracked since 2.1.152); directly informs
  the auto-mode-default-on posture and a standing open question.
- **confidence:** high
- **receipt:** "Improved auto mode safety: destructive git commands (`git reset --hard`, `git checkout -- .`, `git clean -fd`, `git stash drop`) are now blocked when you didn't ask to discard local work, `git commit --amend` is blocked when the commit wasn't made by the agent this session, and `terraform destroy`/`pulumi destroy`/`cdk destroy` are blocked unless you asked for the specific stack"
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-183

### 2026-06-23-claude-code-deprecated-model-warning-frontmatter
- **date:** 2026-06-19
- **version:** 2.1.183
- **change_type:** runtime
- **channel:** tagged-release (2.1.183)
- **section:** Added (model deprecation warning)
- **accessibility_impact:** medium — surfaces silent model substitution.
- **security_impact:** low — but relevant to model-governance lineage. A warning now
  fires when the requested model is deprecated or auto-updated to a newer model, on
  stderr in print mode (`-p`), **now also covering models set in agent frontmatter**.
  Adjacent to the `enforceAvailableModels` / model-allowlist work (2.1.175/176, prior
  window): operators are now told when an agent-frontmatter model was silently
  substituted.
- **operator_implication:** Print-mode / CI runs and agent frontmatter now emit a
  visible warning on model substitution — useful for pipelines that pin a model and
  must detect silent upgrades. Improves model-routing transparency.
- **candidate_signal:** NO — transparency improvement, not a capability or authority
  shift; logged as model-governance carry-forward color.
- **confidence:** high
- **receipt:** "Added a warning when the requested model is deprecated or automatically updated to a newer model, shown on stderr in print mode (`-p`) and now also covering models set in agent frontmatter"
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-183

### 2026-06-23-claude-code-attribution-session-url-setting
- **date:** 2026-06-19
- **version:** 2.1.183
- **change_type:** workflow
- **channel:** tagged-release (2.1.183)
- **section:** Added (commit/PR attribution control)
- **accessibility_impact:** low.
- **security_impact:** low-medium — a new `attribution.sessionUrl` setting to **omit
  the claude.ai session link from commits and PRs** in web and Remote Control
  sessions. Relevant to teams with provenance/privacy policies about exposing
  internal claude.ai session URLs in public git history.
- **operator_implication:** Enterprises that don't want claude.ai session links
  leaking into commit/PR metadata now have a managed toggle. Provenance-policy item.
- **candidate_signal:** NO — config affordance; noted for enterprise-governance
  completeness.
- **confidence:** high
- **receipt:** "Added `attribution.sessionUrl` setting to omit the claude.ai session link from commits and PRs in web and Remote Control sessions"
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-183

### 2026-06-23-claude-code-foreground-subagent-depth-limit
- **date:** 2026-06-17
- **version:** 2.1.181
- **change_type:** security
- **channel:** tagged-release (2.1.181)
- **section:** Bug fixes (subagent depth)
- **accessibility_impact:** low.
- **security_impact:** HIGH — direct follow-up to last window's nested-subagent
  spawning (2.1.178, 5 levels deep). **Foreground** subagents were spawning
  **unbounded nested chains**; they now respect the same 5-level depth limit as
  background subagents. Pre-fix, a foreground subagent could spawn an unbounded
  recursive pyramid — a resource-exhaustion / runaway-fanout vector that the
  depth cap was supposed to prevent but didn't apply on the foreground path.
- **operator_implication:** The 5-level subagent depth invariant we tracked at
  2.1.178 was **not actually enforced on the foreground spawn path** until 2.1.181.
  Anyone modeling Claude Code's contextual-pyramid fanout as bounded should pin
  2.1.181+ as the floor where the cap holds in both directions.
- **candidate_signal:** YES — the depth-cap invariant from last window's headline
  feature was incomplete; the bound only fully bound at 2.1.181. Directly material
  to the nested-subagent governance thread.
- **confidence:** high
- **receipt:** "Fixed foreground subagents spawning unbounded nested chains; they now respect the same 5-level depth limit as background subagents"
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-181

### 2026-06-23-claude-code-config-key-value-from-prompt
- **date:** 2026-06-17
- **version:** 2.1.181
- **change_type:** workflow
- **channel:** tagged-release (2.1.181)
- **section:** Added (in-session config)
- **accessibility_impact:** medium — set any setting from the prompt without leaving
  the session; works in interactive, `-p`, and Remote Control. (2.1.183 adds
  `/config --help` to list shorthand keys.)
- **security_impact:** low-medium — a runtime can now mutate **any** setting
  mid-session via `/config key=value`, including from `-p` (print/headless) and
  Remote Control. Broad config-mutation surface; worth noting which settings are
  reachable this way relative to managed-settings policy.
- **operator_implication:** Operators should confirm managed-settings policy still
  constrains what `/config key=value` can change — a prompt-level config setter that
  reaches print mode and Remote Control is a wide authority surface if unbounded.
- **candidate_signal:** NO — convenience surface; flagged for the governance watch
  list (interaction with managed settings) rather than promoted.
- **confidence:** high
- **receipt:** "Added `/config key=value` syntax to set any setting from the prompt (e.g. `/config thinking=false`) — works in interactive, `-p`, and Remote Control"
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-181

### 2026-06-23-claude-code-routine-window-housekeeping
- **date:** 2026-06-16 .. 2026-06-22
- **version:** 2.1.179 / 2.1.181 / 2.1.185 / 2.1.186 (cluster)
- **change_type:** reliability
- **channel:** tagged-release
- **section:** Bug fixes / Improved (non-promoted)
- **accessibility_impact:** medium in aggregate — many TUI, streaming, startup, and
  agent-panel reliability fixes (mid-stream drop preservation 2.1.179; startup
  latency/crash fixes 2.1.181; stream-stall hint wording 2.1.185; numerous
  `claude agents` panel fixes 2.1.186).
- **security_impact:** none individually material.
- **operator_implication:** Quality-of-life and robustness; relevant to adapter
  stability but no governance/authority consequence. 2.1.185 is a single-bullet
  cosmetic release (stream-stall hint wording + 20s threshold).
- **candidate_signal:** NO — bundled per source-notes discipline ("bug-fix lists
  without a clear operator consequence"). Not padded into individual findings.
- **confidence:** high
- **receipt (representative):** "Fixed mid-stream connection drops: partial responses are now preserved instead of showing a raw error, and the spinner no longer gets stuck at \"running tool\"" (2.1.179)
- **anchor:** https://code.claude.com/docs/en/changelog#2-1-179

---

## Carry-forward

Last window closed at 2.1.178. Brief asked to check follow-ups to the
subagent/permission/model-allowlist work, new trust-boundary fixes, and anything
touching `/ultrareview`, Remote Control, or MCP connector auth.

- **Nested subagent spawning (2.1.178, 5 levels):** FOLLOW-UP FOUND. 2.1.181 reveals
  the depth cap was **not enforced on the foreground spawn path** — foreground
  subagents spawned unbounded nested chains until fixed. The headline invariant from
  last window only fully bound at 2.1.181.
  (`2026-06-23-claude-code-foreground-subagent-depth-limit`)
- **Tool(param:value) / Agent(model:opus) permission grammar (2.1.178):** FOLLOW-UP
  FOUND. 2.1.186 fixes `Agent(type)` deny rules and `Agent(x,y)` allowed-types
  restrictions **not being enforced for named subagent spawns** — the param-grammar
  governance surface silently didn't bind.
  (`2026-06-23-claude-code-agent-permission-rules-enforced`)
- **enforceAvailableModels / model allowlist (2.1.175/176):** NO new binding change
  this window. `enforceAvailableModels` stays at 2.1.175 (prior window). 2.1.183
  adds adjacent transparency: deprecated/auto-updated model warnings now cover agent
  frontmatter. (`2026-06-23-claude-code-deprecated-model-warning-frontmatter`)
- **Background-worker trust isolation + OTEL/cert (2.1.169/172):** RELATED MOVEMENT.
  2.1.186 changes background subagents from auto-deny to main-session permission
  prompts; 2.1.186 fixes headless/SDK auth-stub tool leakage. No new OTEL/cert items.
- **Fable 5 launch (2.1.170):** no further Fable items in window.
- **/ultrareview:** NO new entries this window.
- **Remote Control:** touched — `/config key=value` works in Remote Control (2.1.181);
  `attribution.sessionUrl` covers Remote Control sessions (2.1.183). No authority
  change to Remote Control itself.
- **MCP connector auth:** FOLLOW-UP FOUND. 2.1.186 adds `claude mcp login`/`logout`
  CLI auth with `--no-browser` SSH support. (`2026-06-23-claude-code-mcp-cli-login-logout`)
- **NEW trust-boundary item not previously tracked:** 2.1.186 reclassifies scheduled
  task / webhook trigger deliveries so they can no longer approve a pending action or
  set the session title in auto mode (input-source confusion / injection-shape fix).
  (`2026-06-23-claude-code-scheduled-trigger-input-classification`)

**Carry-forward verdict:** MATERIAL. Two of last window's headline governance
features (the subagent depth cap and the Agent() permission grammar) shipped with
**enforcement gaps that were silently not binding** and were closed this window. This
reinforces the profile's "consent moved, not vanished — verify it actually binds"
posture: governance surfaces announced as authority were, in two cases, cosmetic
until a later fix.

## Novelty vs profile

Profile last full review 2026-06-03 (through ~2.1.157, council-flagged drift to
2.1.154/157). NOVEL this window vs profile: (1) the foreground-subagent depth
enforcement gap and (2) the Agent() permission-rule enforcement gap — both are
*gaps in features the profile already treats as governance authority*, materially
sharpening the "verify enforcement, not just announcement" thread; (3) concrete
enumeration of auto-mode destructive-command blocks (2.1.183) partially answers the
profile open question "What does Auto mode classify as safe by default?"; (4)
scheduled-trigger input-classification fix is a wholly new trust-boundary vector not
in the profile; (5) `claude mcp login`/`logout` is a new MCP-connector auth surface.
The profile's "API-key auth disables cloud-control surfaces" boundary is untouched
this window. No profile claim is contradicted; several are extended.
