# Group A Watchlist Harvest — 2026-05-13 → 2026-05-27

Window: 2026-05-13 (inclusive) through 2026-05-27 (inclusive, today).
Harvester: partial-cycle reconnaissance pass against Group A vendor surfaces
(Codex, Claude Code, Gemini CLI). All claims are constrained to the named
primary surfaces in each source contract. Observation date is 2026-05-27.

This is a findings-only pass. Nothing is promoted to signal here; candidate
signal potential is flagged per finding for a later promotion pass.

## Source Surfaces Consulted

- Codex: `https://developers.openai.com/codex/changelog` (priority 1
  official_changelog), GitHub release pages `rust-v0.131.0` through
  `rust-v0.134.0` (priority 2 repo).
- Claude Code: `https://code.claude.com/docs/en/changelog` (priority 1
  official_changelog), `https://code.claude.com/docs/en/whats-new`
  (priority 1 official_digest). Week 21 / Week 22 digests are not yet
  published as of 2026-05-27; only the changelog covers 2.1.143–2.1.152.
- Gemini CLI: `https://github.com/google-gemini/gemini-cli/releases`
  (priority 1 github_releases), individual release pages for v0.43.0-preview.1,
  v0.44.0-preview.0, v0.44.0 stable, v0.45.0-preview.0.

WebFetch call count: ~12.

---

## Codex (OpenAI)

Summary: **6 findings, 3 strong candidate signals.** Heavy in-window
activity. Three CLI minor releases (0.131, 0.132, 0.133, 0.134) plus one
product-level launch (`26.519` — "Appshots, goal mode, and more"). The
launch graduates goal mode out of experimental and ships remote computer
use after Mac lock. CLI side: Python SDK authentication, marketplace
plugin sharing CLI surface, `codex doctor`, `codex remote-control`
foreground rework, permission profile inheritance, and conversation
history search.

### Finding: codex-goal-mode-graduated-and-remote-computer-use

- precision_level: `release_note` (priority-1 official_changelog)
- surface: official_changelog
- url: `https://developers.openai.com/codex/changelog` (entry
  "Appshots, goal mode, and more 26.519")
- observed_at: 2026-05-27
- change_type: capability + accessibility + security
- body: The 2026-05-21 product launch promotes Goal mode out of
  experimental across app, IDE extension, and CLI — operators can now
  point Codex at an objective spanning "hours or even days." Same launch
  ships **remote computer use after Mac lock** with documented
  safeguards: short-lived authorization, covered displays, relock on
  local input, and manual-unlock fallback. macOS Appshots (double-Cmd
  capture of the frontmost app window with text) and ChatGPT Business
  plugin marketplace sharing also ship in this entry. The
  goal-graduation lines up with the CLI side's "Goals are now enabled
  by default, backed by dedicated storage" in 0.133.0 the same day —
  goal mode is no longer a research-preview-only feature. Profile
  already carries goal-as-persistent-objective as an active claim; the
  novelty is **default-on across all surfaces** plus the remote/locked
  computer-use surface, which is new.
- candidate_signal: **yes** — graduates a long-horizon primitive to
  default-on and introduces a locked-host remote-control surface
  (operator must decide whether to permit / restrict / wrap).
- section_candidate: control-plane (goal is operating-state authority);
  remote-after-lock is runtime
- axis_candidates: authority, accessibility, security

### Finding: codex-cli-0.131-doctor-marketplace-and-app-server-consolidation

- precision_level: `release_note` / `github_release`
- surface: official_changelog + github_release
- url: `https://github.com/openai/codex/releases/tag/rust-v0.131.0`,
  cross-referenced at `https://developers.openai.com/codex/changelog`
- observed_at: 2026-05-27
- change_type: capability + workflow + ecosystem
- body: Codex CLI 0.131.0 (2026-05-18) introduces `codex doctor`
  ("support-ready diagnostics across runtime, auth, terminal, network,
  config, and local state"); unifies `@`-mentions across files,
  directories, plugins, and skills behind app-server plugin metadata;
  ships marketplace CLI commands for plugin workflows (`version-aware
  sharing, share checkout`); makes `codex remote-control`
  daemon-managed with runtime enable/disable APIs and registry-backed
  remote environments; and renames the Python SDK to `openai-codex`
  with concurrent turn routing and approval modes. The `@`-mention
  unification and marketplace CLI are the operator-visible surface
  shifts; `codex doctor` is the diagnostic add. Profile mentions
  app-server consolidation as a direction; this finding adds three new
  concrete surfaces (doctor, marketplace CLI, unified `@`).
- candidate_signal: **maybe** — `codex doctor` and marketplace CLI both
  change how an operator inspects state, but neither flips a posture.
  Promote if plugin marketplace acquires real distribution mass.
- section_candidate: platform (distribution surfaces) and control-plane
  (diagnostics)
- axis_candidates: accessibility, evidence

### Finding: codex-cli-0.132-python-sdk-auth-and-output-schema-resume

- precision_level: `release_note` / `github_release`
- surface: github_release + official_changelog
- url: `https://github.com/openai/codex/releases/tag/rust-v0.132.0`
- observed_at: 2026-05-27
- change_type: capability + workflow + protocol
- body: Codex CLI 0.132.0 (2026-05-20) gives the Python SDK
  first-class authentication (API key, ChatGPT browser flow,
  device-code flow, account inspection, logout APIs) — the SDK now
  has its own auth surface rather than borrowing the CLI's. Same
  release: `codex exec resume --output-schema` preserves session
  context while enforcing a structured JSON output schema on the
  resumed run (`codex exec` becomes a contract-bearing surface, not
  just a re-run). Remote executors can register via standard Codex
  auth instead of separate registry credentials; image inputs preserve
  original resolution across tools. Profile does not yet mention
  Python SDK auth flows or output-schema-on-resume; both are novel.
- candidate_signal: **yes** — `codex exec resume --output-schema`
  changes the receipt grammar of resumed runs; it lets a CI caller
  enforce schema on the *continuation* of an existing session, not
  just a fresh exec. That's an operator-action change (callers should
  now bind schemas at resume boundaries, not just at session start).
- section_candidate: runtime (resume + structured output is execution
  contract); control-plane (auth posture)
- axis_candidates: evidence, authority, security

### Finding: codex-cli-0.133-permission-profile-inheritance-and-managed-requirements

- precision_level: `release_note` / `github_release`
- surface: github_release + official_changelog
- url: `https://github.com/openai/codex/releases/tag/rust-v0.133.0`
- observed_at: 2026-05-27
- change_type: capability + governance + workflow
- body: Codex CLI 0.133.0 (2026-05-21) flips Goals on by default with
  dedicated storage and progress tracking across active turns —
  this is the CLI-side companion to the product launch the same day.
  Permission profiles expand substantially: list APIs for discovery,
  inheritance hierarchies, managed `requirements.toml` integration,
  runtime refresh, and stronger Windows sandbox compatibility. Plugin
  discovery becomes marketplace-aware (installed versions, visible
  marketplace roots, remote collections). Extensions observe more
  lifecycle events: subagent start/stop, tool execution phases, turn
  metadata, asynchronous approval/turn processing. Profile already
  treats permission profiles and plugin governance as first-class;
  the novelty is **profile inheritance** (a profile can derive from
  another) and **managed-requirements integration** (an
  organization-level enforcement file), neither of which the profile
  describes.
- candidate_signal: **yes** — managed `requirements.toml` and profile
  inheritance change how an enterprise operator should structure
  permission policy. Action-bearing: stop maintaining flat profile
  lists; start a base profile + per-team derivations.
- section_candidate: control-plane (permission/governance authority)
- axis_candidates: authority, security, accessibility

### Finding: codex-cli-0.134-conversation-history-search-and-readonly-concurrency

- precision_level: `release_note` / `github_release`
- surface: github_release + official_changelog
- url: `https://github.com/openai/codex/releases/tag/rust-v0.134.0`
- observed_at: 2026-05-27
- change_type: capability + workflow + reliability
- body: Codex CLI 0.134.0 (2026-05-26) adds **search across local
  conversation history** with case-insensitive content match and
  result previews; makes `--profile` the canonical profile selector
  across CLI, TUI permission flows, and sandbox flows (with legacy
  profile configs rejected through migration guidance); lets
  read-only MCP tools advertising `readOnlyHint` run concurrently;
  preserves local `$ref`/`$defs` structures in connector tool
  schemas; adds richer hook context including subagent identity in
  hook inputs and conversation history for extension tools;
  introduces per-server environment targeting and OAuth options for
  streamable HTTP MCP servers. Profile does not mention local
  conversation history search; this is a new operator surface
  (sessions become searchable artifacts) and a small but real
  receipt-grammar shift (`readOnlyHint` as a concurrency hint, not
  just a label).
- candidate_signal: **maybe** — conversation history search is genuinely
  novel for an operator hunting past context; `readOnlyHint`
  concurrency may or may not be operator-visible depending on MCP
  tool choices. Promote if Bitter wants to model session history as
  a queryable artifact.
- section_candidate: runtime (concurrency hint, hook context) and
  platform (history search as a session surface)
- axis_candidates: evidence, accessibility

### Finding: codex-plugin-marketplace-sharing-launch

- precision_level: `release_note`
- surface: official_changelog
- url: `https://developers.openai.com/codex/changelog` (entry
  "Appshots, goal mode, and more 26.519", 2026-05-21)
- observed_at: 2026-05-27
- change_type: ecosystem + economics
- body: Plugin sharing through marketplace sources ships for ChatGPT
  Business (Enterprise "coming soon"). Teams can distribute reusable
  plugin bundles containing skills, app integrations, MCP servers,
  and lifecycle hooks. Profile records "plugin sharing as a
  governance surface" (`plugin-share-access-controls` and
  `plugin-share-role-aware` claims), but those described the
  share-permission scaffolding; **this** finding establishes
  distribution-by-marketplace as a live mechanism with a paid-tier
  gate. The CLI side (0.131.0 marketplace CLI commands; 0.133.0
  marketplace-aware list output) lines up with this.
- candidate_signal: **maybe** — turns plugins from per-org artifacts
  into a marketplace good. Operator consequence depends on which
  marketplaces materialize; today it's "watch."
- section_candidate: platform (distribution / adoption)
- axis_candidates: accessibility, authority

### Codex open questions

- The 2026-05-21 product launch describes Codex Chrome extension
  changes ("no longer create tab groups, uses tab icons for status").
  Where does the Chrome extension changelog live independently of the
  product launch entry? The source contract names docs and the npm
  package but not a Chrome extension surface.
- "Read-only MCP tools advertising `readOnlyHint`" — does this map to
  any cross-vendor MCP convention (Claude Code, Gemini CLI) or is it
  Codex-local? Worth a cross-provider probe next cycle.

---

## Claude Code (Anthropic)

Summary: **5 findings, 2 strong candidate signals.** Very high
in-window activity at the granular level (12 changelog versions from
2.1.141 through 2.1.152, no 2.1.146 or 2.1.151 published). The two
weekly digests covering this exact window (Week 21 = May 18–22,
Week 22 = May 25–29) are **not yet published** at
`code.claude.com/docs/en/whats-new` as of 2026-05-27; only Week 20
(May 11–15, which overlaps the window's leading edge) and earlier
appear on the digest landing page. Promote with care: the changelog
is granular per the source contract.

### Finding: claude-code-auto-mode-default-on

- precision_level: `release_note` (priority-1 official_changelog)
- surface: official_changelog
- url: `https://code.claude.com/docs/en/changelog#2-1-152`
  (entry "Auto mode no longer requires opt-in consent", 2026-05-27)
- observed_at: 2026-05-27
- change_type: capability + governance + accessibility
- body: Auto mode — the permission-classifier feature that selectively
  runs safe actions without prompting and blocks risky ones — was
  formerly opt-in (consent required) and is now default behavior in
  2.1.152. The profile already captures `auto-mode-hard-deny` as a
  governance surface (v2.1.136); this is a posture flip on the same
  feature: auto mode becomes the default permission posture rather
  than an explicit opt-in. Operators who run pinned tooling and
  expected explicit consent need to re-verify managed settings
  enforcement; admins relying on the consent dialog as a friction
  point have lost that friction. The same release (2.1.152) adds
  `disallowed-tools` in skill/slash-command frontmatter and a
  `MessageDisplay` hook that can transform or hide assistant message
  text, which are additional governance vectors.
- candidate_signal: **yes** — default-on auto mode changes operator
  posture across the install base. Anyone with managed deployments
  must re-audit what auto mode now classifies as safe by default.
- section_candidate: control-plane (permission posture)
- axis_candidates: authority, accessibility, security

### Finding: claude-code-powershell-cd-and-worktree-sandbox-fixes

- precision_level: `release_note`
- surface: official_changelog
- url: `https://code.claude.com/docs/en/changelog#2-1-149`
  (2026-05-22)
- observed_at: 2026-05-27
- change_type: security
- body: 2.1.149 fixes a PowerShell **permission bypass**: built-in
  `cd` functions (`cd..`, `cd\`, `cd~`, `X:`) changed the working
  directory undetected, letting later commands read outside the
  workspace. Same release: fixes "the sandbox write allowlist in git
  worktrees covering the entire main repository root instead of only
  the shared `.git` directory" (with `hooks/` and `config` denied) —
  a sandbox-scoping bug where worktree write rules were too broad.
  PowerShell prefix/wildcard allow rules also fixed to actually
  pre-approve native executables. The 2.1.147 release earlier in the
  window (2026-05-21) also closed `forceLoginOrgUUID` /
  `forceLoginMethod` enforcement gaps against third-party-provider
  and API-key sessions. These are sandbox/permission-engine
  regressions; treat them as the kind of fixes a security advisory
  would carry if Anthropic published one. The changelog does not
  mark them as security advisories explicitly.
- candidate_signal: **yes** — operators on 2.1.148 or earlier with
  PowerShell allowlists, git worktree workflows, or enterprise
  login pinning should upgrade. This is the "upgrade before
  deploying" shape per the research contract's security advisory
  posture (even though Anthropic did not flag it as such).
- section_candidate: runtime (sandbox enforcement)
- axis_candidates: security, authority

### Finding: claude-code-skill-runtime-controls

- precision_level: `release_note`
- surface: official_changelog
- url: `https://code.claude.com/docs/en/changelog#2-1-152`
  (2026-05-27)
- observed_at: 2026-05-27
- change_type: capability + governance + workflow
- body: 2.1.152 introduces three skill-lifecycle controls: skills and
  slash commands can set `disallowed-tools` in frontmatter (removing
  tools from the model while the skill is active); `/reload-skills`
  re-scans skill directories without restarting the session; and
  `SessionStart` hooks can return `reloadSkills: true` to make
  hook-installed skills available in the same session. Together they
  turn skills from a load-at-start surface into a live-reloadable
  one. Profile does not currently carry skill-related claims for
  Claude Code; this is a new claim cluster. Also in 2.1.152: the
  `MessageDisplay` hook event lets hooks transform or hide assistant
  message text as it is displayed — that's a new hook point on the
  *output* path, not just the tool path.
- candidate_signal: **maybe** — live skill reload changes how plugin
  authors iterate; `MessageDisplay` is a new governance vector
  (hide/transform assistant output) worth its own watch.
- section_candidate: runtime (skill loading, hook output transform)
- axis_candidates: accessibility, authority

### Finding: claude-code-background-and-agent-view-hardening

- precision_level: `release_note`
- surface: official_changelog
- url: `https://code.claude.com/docs/en/changelog#2-1-141` through
  `#2-1-147` (2026-05-13 to 2026-05-21)
- observed_at: 2026-05-27
- change_type: reliability + workflow + capability
- body: Across 2.1.141 → 2.1.147, `claude agents` (agent view, the
  multi-session supervisor the profile already records as a Research
  Preview claim) accumulates substantial hardening: dispatch flags
  (`--add-dir`, `--settings`, `--mcp-config`, `--plugin-dir`,
  `--permission-mode`, `--model`, `--effort`,
  `--dangerously-skip-permissions`), `--cwd` scoping,
  `--json` listing for scripts, pinned background sessions that
  survive idle and Claude Code updates, `/resume` support for
  background sessions, Stop/SubagentStop hook input gains
  `background_tasks` and `session_crons`. Profile lists agent view as
  active; this finding refreshes it with a slate of new flags and the
  new pinned-background-session behavior — not a redefinition, but
  enough new surface that the profile claim should be re-verified.
- candidate_signal: **no** — accumulation rather than category shift.
  Worth folding into a profile refresh, not a signal.
- section_candidate: runtime (session lifecycle)
- axis_candidates: accessibility, authority

### Finding: claude-code-simplify-and-code-review-rename

- precision_level: `release_note`
- surface: official_changelog
- url: `https://code.claude.com/docs/en/changelog#2-1-147` (rename,
  2026-05-21), `#2-1-152` (fix loop closure, 2026-05-27)
- observed_at: 2026-05-27
- change_type: workflow + capability
- body: In 2.1.147 (2026-05-21) Anthropic **renames `/simplify` to
  `/code-review`**: the command reports correctness bugs at a chosen
  effort level (`/code-review high`), and `--comment` posts findings
  as inline GitHub PR comments. The "cleanup-and-fix" behavior of
  the old `/simplify` is removed. In 2.1.152 (2026-05-27), the loop
  closes: `/code-review --fix` applies review findings to the
  working tree after the review, and `/simplify` now invokes
  `/code-review --fix` (i.e. `/simplify` is back, but as an alias to
  the fix path). Profile's `ultrareview` claim covers the cloud-fleet
  bug-hunting agent; `/code-review` is a separate local command
  surface that didn't exist as a claim. Worth a new claim cluster:
  local review path that can post to PR or apply fixes locally.
- candidate_signal: **maybe** — operators wiring CI on the old
  `/simplify` semantics need to migrate; the `--fix` apply path is a
  new write-side hazard (Claude Code now has a code-review command
  that *edits the tree* by default-on alias).
- section_candidate: runtime (code-modification surface) and
  control-plane (review authority)
- axis_candidates: authority, accessibility

### Claude Code open questions

- Why are Week 21 and Week 22 What's-New digests not yet published as
  of 2026-05-27, given the changelog is current through 2.1.152
  (same-day)? The official_digest priority-1 surface is missing the
  most recent two-week window. Source-contract relevant: if the
  digest is publish-late by design, harvesters need to fall through
  to the changelog only for the trailing window.
- 2.1.149 calls out a PowerShell permission bypass, sandbox
  worktree-scope bug, and `forceLoginOrgUUID` enforcement bugs (2.1.147)
  but Anthropic does not appear to publish a separate security
  advisory page. Treating changelog entries as the de-facto advisory
  surface — confirm this is the contract intent or revise the source
  contract to add an explicit security surface.

---

## Gemini CLI (Google)

Summary: **4 findings, 2 strong candidate signals.** v0.44.0 stable
landed in-window on 2026-05-27 (today), preceded by v0.44.0-preview.0
on 2026-05-22 and v0.43.0-preview.1 on 2026-05-19. v0.45.0-preview.0
also dropped today. The stable release is heavy: agent session
invocation protocols (local + remote) land in stable, Auto modes
collapse to a single mode, agent registration becomes "first-wins
prioritize project," context files now **append** by default instead
of replacing, and PolicyEngine integrates into ACP sessions.

### Finding: gemini-session-invocation-protocols-land-stable

- precision_level: `github_release` + `commit`
- surface: github_releases
- url: `https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0`
  (stable, 2026-05-27); features merged via
  `https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-preview.0`
  (2026-05-22)
- observed_at: 2026-05-27
- change_type: capability + protocol + runtime
- body: `LocalSessionInvocation` (#26665) and `RemoteSessionInvocation`
  (#26937) ship in v0.44.0, with `AgentSession invocations` wired into
  the agent tool (#26948) and the `adk.agentSessionSubagentEnabled`
  flag (#26947). The current profile flags the prior `AgentProtocol`
  abstraction as having "tests but no observed remote target" —
  this release crosses that line: a remote session invocation now
  exists in stable, not just preview. Agent registration also moves to
  **first-wins with project prioritization** (#26953), which changes
  the resolution order when the same agent name is defined at multiple
  scopes. This is the resolution that the profile's
  `subagent-protocol-pluggable` claim (status `active`) anticipated.
- candidate_signal: **yes** — the profile's
  "subagents are a boundary, not yet a remote platform" stance needs
  revision. There is now a stable remote invocation protocol in the
  CLI; what remains open is *where the remote target runs*. Operators
  building delegated workflows should re-test against v0.44.0.
- section_candidate: runtime (subagent execution) and platform
  (protocol surface)
- axis_candidates: authority, accessibility

### Finding: gemini-context-files-now-append

- precision_level: `commit_diff_reviewed` (via release notes +
  referenced PR #26950)
- surface: github_release
- url: `https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-preview.0`
  (2026-05-22), confirmed in stable v0.44.0 (2026-05-27)
- observed_at: 2026-05-27
- change_type: workflow + breaking_change (semantically)
- body: `fix(core): made context files append instead of replace`
  (#26950) — Gemini CLI's context file loading switches from
  replace-on-load to append-on-load. The release tags this as a "fix,"
  but operationally it's a behavior change in how `GEMINI.md`,
  context files, and related state stack up across loads. Profile
  doesn't yet carry a claim about context-file load semantics; this
  is novel and the kind of silent semantic change the source contract
  flags as needing operator attention. Anyone who depended on
  "loading a context file resets the current set" must re-test.
- candidate_signal: **yes** — silent semantic shift in context loading.
  Operators with curated context regimes need to know.
- section_candidate: runtime (context loading) and control-plane
  (authority over what the agent reads)
- axis_candidates: evidence, authority

### Finding: gemini-auto-modes-merged-and-policy-engine-in-acp

- precision_level: `release_note`
- surface: github_release
- url: `https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-preview.0`
  (2026-05-22, "feat(cli): merge Auto modes into a single Auto mode"
  #26714; "fix(cli): integrate PolicyEngine into ACP session to prevent
  deadlocks" #27252)
- observed_at: 2026-05-27
- change_type: governance + protocol + reliability
- body: Multiple `Auto` modes collapse to a single Auto mode (#26714) —
  reduces operator-facing mode-picker complexity but also collapses
  whatever differentiations the prior modes carried. Concurrently,
  PolicyEngine integrates into ACP (Agent Communication Protocol)
  sessions specifically to prevent deadlocks; the profile's
  governance posture rests on `shell-tools-allowlist` and
  `subagents-approval-mode-aware`, and this finding extends the
  policy engine's reach into the ACP session layer. Auto-approval of
  shell redirections in `AUTO_EDIT` mode also lands in v0.44.0 (per
  the v0.44.0 stable release notes), which is the kind of permission
  expansion that wants a follow-on probe.
- candidate_signal: **maybe** — Auto mode merger is a UX change; the
  PolicyEngine-in-ACP change is a real protocol-layer shift but
  framed as a deadlock fix. Auto-approval of shell redirects in
  `AUTO_EDIT` is the one worth tracking — that's an attack-surface
  expansion if not bounded.
- section_candidate: control-plane (permission and policy authority)
- axis_candidates: authority, security

### Finding: gemini-oauth-refresh-and-keychain-non-interactive

- precision_level: `release_note`
- surface: github_release
- url: `https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-preview.0`
  (#26924 OAuth refresh preservation; #26921 keychain auth for
  `--list-sessions` and non-interactive; #26312 MCP OAuth refresh)
- observed_at: 2026-05-27
- change_type: security + workflow
- body: Three auth-side changes converge in v0.44.0: OAuth refresh
  tokens are preserved during rotation and retrieval (closes a
  re-auth loop bug); keychain authentication now works for
  `--list-sessions` and non-interactive mode (closes the
  "non-interactive callers can't reach the keychain" gap); and MCP
  OAuth tokens refresh after re-authentication. The profile's
  `workspace-trust-headless-enforcement` claim already records the
  shift toward headless enforcement; this finding is the auth-layer
  companion — headless callers can now authenticate from the keychain
  rather than needing inline credentials, and stale OAuth refresh
  doesn't drop sessions silently.
- candidate_signal: **no** — quality-of-life and reliability fix
  cluster. Worth refreshing the profile auth posture but not a
  posture-flipping signal.
- section_candidate: control-plane (auth posture)
- axis_candidates: security, accessibility

### Gemini CLI open questions

- Where does `RemoteSessionInvocation` actually execute when invoked?
  The release ships the protocol and invocations; the remote *target*
  (Google-hosted endpoint, self-hosted, both) is still not named in
  release notes. Profile's open question on
  `RemoteSubagentProtocol`'s destination remains unanswered.
- The `auto-approval of shell redirections in AUTO_EDIT mode` line in
  the v0.44.0 stable release deserves a diff-level probe — what
  exactly gets auto-approved? Source contract calls for
  `commit_diff_reviewed` precision on Gemini claims; this is one
  where the release-note framing is too thin.
- v0.45.0-preview.0 (2026-05-27) mentions "routing classifier bypasses
  to prevent orphaned function responses" and "internal session
  context filtering from history during resumption." Both sound
  load-bearing; defer to next cycle.

---

## Cross-Provider Observations (informational, not promoted)

- **Goal mode default-on hits Codex and Claude Code in the same window**
  (Codex 26.519 + 0.133.0 on 2026-05-21; Claude Code `/goal` was
  flagged as v2.1.139 the prior cycle and continues to expand;
  cross-fix in 2.1.143 prevents the evaluator firing while background
  shells/subagents are still running). This is a candidate
  cross-provider digest hook for the eventual Group-A digest.
- **PolicyEngine-in-ACP (Gemini) and managed `requirements.toml`
  (Codex)** both reach toward "policy lives in a versioned,
  org-managed file consulted by the agent runtime," not "policy lives
  in a per-session flag." Worth a side-by-side framing in a digest.
- **Auto mode posture is moving toward default-on across the
  ecosystem** (Claude Code 2.1.152 default-on; Gemini Auto modes
  collapsed and `AUTO_EDIT` adds shell-redirect auto-approval). The
  bridge field — accessibility gain vs. authority cost — is precisely
  the cross-axis tension RESEARCH_CONTRACT calls out.

## Harvest Quality Notes

- Codex changelog dates were trusted from the official changelog
  surface; WebFetch summarization occasionally rendered GitHub
  release dates as 2024 when the changelog header was the authoritative
  2026 date. Treat the official changelog as canonical when GitHub
  release pages disagree on year (the open question raised in
  `sources/codex.yml#discovery` remains live).
- Claude Code's Week 21 and Week 22 official_digest entries are not
  yet published as of 2026-05-27. The changelog priority-1 surface
  is the only in-window digest-equivalent available; harvesters
  running this window should not block on the digest catching up.
- Gemini CLI v0.44.0 stable shipped 2026-05-27 (today). All claims
  rest on the release page as published; commit-diff review per
  the profile's `evidence_floor: commit_diff_reviewed` was not done
  in this pass for the high-velocity items (session invocation,
  context-file append, PolicyEngine-in-ACP) and should be done before
  promoting to signal.
- ~12 WebFetch calls used across the three providers, under the
  ~20-call budget.
