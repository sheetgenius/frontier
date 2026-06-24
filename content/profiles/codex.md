---
schema_version: bitter.frontier_profile.v0
profile_id: codex
label: Codex
owner: OpenAI
source_contract: sources/codex.yml
homepage: https://developers.openai.com/codex/
docs: https://developers.openai.com/codex/
changelog: https://developers.openai.com/codex/changelog
repo: https://github.com/openai/codex
tagline: "OpenAI builds the authority machinery, then keeps the keys to the control plane."
compared_with:
  - claude-code
  - gemini-cli
x:
  project: OpenAICodexCli
surface_class: mixed_official_docs
evidence_floor: release_note
status: active_watch
last_updated: 2026-06-23
last_full_review: 2026-06-03
claims:
  - id: goal-persistent-validation
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: goal-lifecycle-metrics
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: mcp-memory-spawn
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: session-id-tracking
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: mcp-thread-metadata
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: plugin-share-access-controls
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: linux-sandbox-bundled
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: active
  - id: permissions-approval-tui-visible
    finding_id: 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    last_verified: 2026-05-11
    status: active
  - id: plugin-share-role-aware
    finding_id: 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    last_verified: 2026-05-11
    status: active
  - id: skills-watcher-app-server
    finding_id: 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    last_verified: 2026-05-11
    status: active
  - id: pretooluse-input-rewrite
    finding_id: 2026-05-12-codex-pretooluse-input-rewrite
    last_verified: 2026-05-12
    status: active
  - id: goal-mode-default-on
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-05-27
    status: active
  - id: remote-computer-use-after-lock
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-06-23
    status: active
  - id: chronicle-screen-context-preview
    finding_id: 2026-06-23-codex-eea-uk-swiss-feature-rollout
    last_verified: 2026-06-23
    status: open_question
  - id: developer-mode-cdp-boundary
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-06-23
    status: open_question
  - id: plugin-marketplace-sharing
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-05-27
    status: active
  - id: permission-profile-inheritance
    finding_id: 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    last_verified: 2026-05-27
    status: active
  - id: managed-requirements-toml
    finding_id: 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    last_verified: 2026-05-27
    status: active
  - id: profile-flag-canonical
    finding_id: 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    last_verified: 2026-05-27
    status: active
  - id: remote-exec-apikey-and-bedrock
    finding_id: 2026-06-02-codex-cli-0136-remote-exec
    last_verified: 2026-06-03
    status: active
  - id: sites-plugin-deploy
    finding_id: 2026-06-02-codex-sites-plugin-launch
    last_verified: 2026-06-03
    status: active
  - id: ios-faceid-passcode-lock
    finding_id: 2026-06-02-chatgpt-ios-1-2026-146-face-id
    last_verified: 2026-06-03
    status: active
  - id: environment-scoped-approvals
    finding_id: 2026-06-23-codex-environment-scoped-approvals
    last_verified: 2026-06-23
    status: active
  - id: rollout-token-budget-turn-abort
    finding_id: 2026-06-23-codex-rollout-token-budgets
    last_verified: 2026-06-23
    status: active
  - id: multi-agent-delegation-authority-mode
    finding_id: 2026-06-23-codex-multi-agent-delegation-modes
    last_verified: 2026-06-23
    status: active
posture_basis:
  capability:
    - 2026-05-07-codex-stateful-control-plane
    - 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    - 2026-05-12-codex-pretooluse-input-rewrite
    - 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    - 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    - 2026-06-23-codex-rollout-token-budgets
    - 2026-06-23-codex-multi-agent-delegation-modes
    - 2026-06-23-codex-eea-uk-swiss-feature-rollout
  accessibility:
    - 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    - 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    - 2026-06-23-codex-eea-uk-swiss-feature-rollout
  governance:
    - 2026-05-07-codex-stateful-control-plane
    - 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    - 2026-05-12-codex-pretooluse-input-rewrite
    - 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    - 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    - 2026-06-23-codex-environment-scoped-approvals
    - 2026-06-23-codex-rollout-token-budgets
    - 2026-06-23-codex-multi-agent-delegation-modes
stance:
  use_for: "Teams who want OpenAI's read on long-running goals, plugin permissions, and visible authority state. Codex is editorially useful as a directional indicator for how a major closed-source coding-agent vendor shapes these surfaces -- directional, not predictive. Treat the design choices as evidence of where one large vendor is going, not as a forecast of where the category lands."
  avoid_for: "Anyone who needs to fork or audit the agent itself -- Codex is watched as platform behavior, not a CLI you own. Hook authors using PreToolUse rewrites should re-test after v0.130.x; the rewrite path now actually rewrites."
  watch_next: "Whether environment-scoped approvals become the per-environment authority model for mixed local+remote execution, how tight the turn-aborting token budget proves under real multi-agent load, and whether the app-server delegation-authority mode surfaces an equivalent end-operator control. Chronicle GA and the Developer-mode CDP boundary both remain open."
---

# Codex

## Operator Read

Codex is OpenAI's bet on a stateful agent control plane, not a terminal
prompt. Goals, sessions, threads, memory, plugin sets, permission profiles,
sandboxes, and authority posture are all becoming first-class persistent
state -- and as of the 2026-05-21 product launch (26.519 + CLI 0.133.0),
goal mode reaches a **stable, default-exposed persistent-objective
baseline**: it graduates out of experimental, ships with dedicated
storage and progress tracking, and turns on by default across app, IDE,
and CLI. The default-on move and a second piece -- *permission profile
inheritance plus a managed `requirements.toml` enforcement file* -- shipped together in the same release bundle. They are operationally
complementary, not causally chained: the policy substrate is real
policy substrate, but the framing that goal-default-on *required* it is
softer than the release notes literally claim. The 2026-06-16 to
2026-06-23 window extends the authority machinery rather than the
agent's reach: CLI 0.142.0 keys command and network approvals to the
execution environment (fail-closed on ambiguous attribution), adds a
turn-aborting rollout token budget as a hard spend cap, and gates
multi-agent delegation as disabled/explicit-request/proactive. The
browser/computer-use frontier did **not** move -- Chronicle stayed an
opt-in macOS research preview (regionalized, not GA), and the
Developer-mode CDP boundary stayed unclarified. Watch Codex as one
large vendor's directional read on where closed-source coding agents
go -- directional, not predictive.

## Run Codex Differently

Use `/goal` as a persistent objective, not a prompt extension.
[TUI-side validation](https://github.com/openai/codex/commit/f09e1936e0fd464dcea78fe55b84bd20f721cad6)
handles paste, queued goal commands, length limits, and explicit operator
guidance for longer instructions. The goal lifecycle is
[instrumented](https://github.com/openai/codex/commit/91b735018779daed7c40f86aab9bec9abc9922e8) -- goals are observable durable objects, not chat-local state.

Treat each session as identified runtime state, not ambient context.
Sessions carry [a session id](https://github.com/openai/codex/commit/a98623511ba433154ec811fc63091617f5945438)
through the runtime, making "which session is this" answerable; MCP turns
carry [thread metadata](https://github.com/openai/codex/commit/fe24a180ab6f6b3639b682cc6a1e71150fea6d48)
linking tool calls back to the conversational thread they belong to. Memory
itself runs as
[a spawned MCP](https://github.com/openai/codex/commit/ca257b6ce5db5c2710ec8da290b25b263154e402)
rather than being bolted into the agent -- memory is a swap-able surface,
not a fixed component.

If your hook layer rewrote tool inputs by returning `updatedInput` but the
agent kept using the original, you have a behavior shift to verify.
[`PreToolUse` hooks now apply `updatedInput` rewrites](https://github.com/openai/codex/pull/20527)
before tool dispatch when the hook also returns `permissionDecision: "allow"`.
Hook authors can now sanitize, normalize, or redirect tool arguments before
execution -- the hook surface is no longer just allow/deny.

## Authority Made Visible

The TUI status line carries
[`permissions` and `approval-mode`](https://github.com/openai/codex/commit/e6312d44f073)
as separately configurable items. Authority that used to live behind
`/permissions` and `/status` now sits in peripheral vision. Standard states
render compactly (`Read Only`, `Workspace`, `Full Access`); user-defined
permission profile names are preserved; non-standard shapes render as
`Custom permissions`. Add both to your status line if you run more than one
permission profile.

Plugin sharing has matured into a governance surface, not just a feature.
Share carries
[explicit access controls](https://github.com/openai/codex/commit/5119680f85ed01fe039ee8fba0245de24f3a5e37)
separated from raw permissions. Share-context APIs are
[role-aware](https://github.com/openai/codex/commit/479491ed8925) -- "who can
see this plugin" is a first-class question, not a binary access flag -- and
share settings have
[discoverability work](https://github.com/openai/codex/commit/ae15343243ee)
on top of the role-aware context.

## Platform Surfaces

A [bundled Linux sandbox](https://github.com/openai/codex/commit/26f355b67b75b040ff16990d1b2e4e8093479213)
ships with Codex, removing the host-dependent sandbox setup step Linux
operators used to maintain. The skills watcher
[runs in the app-server](https://github.com/openai/codex/commit/408e6218ab7f),
consolidating skills management with the broader app-server direction the
repo has been pursuing. Each of these refines a previously coarse property
(implicit host sandbox setup, scattered skills management) into structured
runtime state.

## Goal Mode And Versioned Policy

Goal mode is no longer a research preview. The
[26.519 product launch](https://developers.openai.com/codex/changelog)
graduates it across app, IDE extension, and CLI; CLI 0.133.0 turns
goals on by default with dedicated storage and progress tracking
across active turns. Operators can point Codex at an objective
spanning "hours or even days" without the prior opt-in ceremony.
The same launch ships **remote computer use after Mac lock** as a new
opt-in authority surface. The locked-host boundary is the load-bearing
piece: the host's lock state is normally a hard signal that no agent
should be operating; this feature lets that signal be overridden, with
documented safeguards -- short-lived authorization, scoping to active
trusted computer-use turns, covered displays, relock on local input,
manual-unlock fallback, and per-task enable. The capability is narrow
and opt-in, not a default category event. The operator-facing rule of
thumb: default-deny locked-host computer use for sensitive hosts and
allow only scoped task classes after verifying stop/relock and
display-cover behavior end to end.

The computer-use frontier did **not** advance in the 2026-06-16 to
2026-06-23 window -- we looked and found no boundary movement. The only
in-window change is a regional availability rollout: desktop Computer
Use (macOS/Windows), the signed-in-Chrome extension, opt-in Memories
(off by default in these regions), and the
[Chronicle screen-context preview](https://developers.openai.com/codex/changelog)
reaching the EEA, UK, and Switzerland on 2026-06-16. Chronicle remains
an **opt-in macOS research preview** for ChatGPT Pro subscribers -- it
was regionalized, not graduated to GA. Separately, the Developer-mode
["controlled" Chrome DevTools Protocol boundary](https://developers.openai.com/codex/changelog)
introduced at app 26.609 was **not clarified** this window; the scope
of "controlled" CDP access remains an open question. Both claims carry
an unadvanced last_verified of 2026-06-23: we checked, and the answer
is still what it was.

*Findings: `2026-05-27-codex-goal-mode-graduated-and-remote-computer-use`,
`2026-06-23-codex-eea-uk-swiss-feature-rollout`.*

[CLI 0.133.0](https://github.com/openai/codex/releases/tag/rust-v0.133.0)
ships the new policy substrate alongside the goal-default-on move:
permission profile **inheritance hierarchies** (a profile can derive
from another), **managed `requirements.toml` integration** as an
org-level enforcement file, runtime profile refresh, and list APIs
for profile discovery. CLI 0.134.0 then makes `--profile` the
canonical permission selector across CLI, TUI, and sandbox flows,
**rejecting legacy profile configs** with migration guidance.
Enterprise operators can now prototype base profile + per-team
derivations rather than maintain flat grant lists. The discipline
constraint: prototype but do not rely on managed `requirements.toml`
as enforceable policy until the file's *distribution, signing, and
inheritance merge semantics* are documented or verified through
adoption -- the underlying policy mechanism is real, but the category
claim ("this is the enterprise policy model for coding agents") is
not yet receipt-backed and should not be made.

*Findings: `2026-05-27-codex-permission-profile-inheritance-and-managed-requirements`.*

## Environment-Scoped Authority And Spend Caps

CLI 0.142.0 (2026-06-22) narrows authority along a new axis: the
execution environment. Command and network approvals are now
[scoped to the environment they were granted in](https://github.com/openai/codex/pull/28899) -- the selected environment ID is folded into shell, unified-exec, and
network approval cache keys, so an `echo ok` approved in local
`/workspace` no longer auto-extends to the same command and path on a
remote executor. This closes an authority-leak class: a grant made in
one environment stops silently authorizing another. The network path
**fails closed** on ambiguity -- it preserves a legacy fallback for
unattributed requests but **denies when active-call attribution is
ambiguous**, and fails closed if an environment-specific proxy endpoint
cannot be prepared. Operators running mixed local+remote execution
should re-test approval reuse: previously-shared approvals will now
re-prompt per environment. This is a genuine narrowing, not a UI
refinement -- it changes how an operator reasons about "is my grant
where I think it is."

The same release adds a **hard runtime spend cap**. Configurable
[rollout token budgets](https://github.com/openai/codex/releases/tag/rust-v0.142.0)
track usage across agent threads, surface remaining-budget reminders,
and **abort turns when the budget is exhausted** -- a cap that refuses,
not a warning that nags. The enforcement is precise about its
boundary: it is a hard cap on spend but a **soft boundary in timing**.
There is no cross-thread `Op::Interrupt` fan-out; an in-flight thread
can finish its current response, and every thread aborts at its next
usage-accounting boundary rather than being killed mid-call. The
ledger is shared, so sub-agent usage draws against the same budget.
For anyone running long-horizon or fan-out work, this is the first
first-class containment lever that actually stops a run rather than
reporting on it -- bound a multi-thread autonomous run with it, but
size the budget knowing an expensive in-flight call can still complete
past the line.

Codex also gains a **delegation-authority gate**. App-server clients
can set
[multi-agent delegation](https://github.com/openai/codex/releases/tag/rust-v0.142.0)
to **disabled, explicit-request-only, or proactive** at both thread
and turn granularity -- a knob over whether Codex may spawn delegated
sub-work on its own or only when explicitly asked. This is the
"does the agent get to recruit more agents" question made
configurable. The reach is softened by surface: it is an app-server
client config, not yet an end-operator CLI flag, so the operator
exposure depends on the client. Note 0.143.0 is alpha-only as of
2026-06-23 -- none of its contents are asserted here as shipped.

*Findings: `2026-06-23-codex-environment-scoped-approvals`,
`2026-06-23-codex-rollout-token-budgets`,
`2026-06-23-codex-multi-agent-delegation-modes`.*

## Open Questions

- Chronicle (screen-context memory) status: still an opt-in macOS
  research preview as of 2026-06-23. It was regionalized to the EEA,
  UK, and Switzerland on 2026-06-16 but not graduated to GA. Open
  until a GA or a behavior change lands. Tracked as `open_question`;
  we looked this window and the answer is unchanged.
- Developer-mode "controlled" Chrome DevTools Protocol boundary
  (app 26.609): the scope of what "controlled" CDP access permits was
  not clarified this window. Open until the boundary is documented or
  observed.
- Rollout token-budget tightness under real multi-agent load: the cap
  aborts at the next usage-accounting boundary with no cross-thread
  interrupt, so an expensive in-flight call can still complete. How
  tight the effective bound is in practice is not documented.
- Multi-agent delegation reach: the disabled/explicit-request/proactive
  modes are an app-server client config, not an end-operator CLI flag.
  Whether an equivalent end-operator control surfaces is open.
- What is the distribution and signing model for managed
  `requirements.toml`? Release notes describe org-level enforcement
  but do not document whether the file is repo-rooted, org-rooted
  via a central distribution mechanism, signed against tampering,
  or watched at runtime.
- Profile inheritance semantics: does a derived profile only *add*
  to the base, or can it *subtract*? Subtraction is the harder and
  safer feature; the release notes do not say.
- Runtime profile-refresh consistency under in-flight tool calls is
  unspecified -- what happens to a tool call that started under a
  loosened profile that tightens mid-call?
- For remote computer use after Mac lock: can operators narrow the
  permission per-task / per-tool / per-domain beyond the documented
  short-lived authorization + relock-on-input + covered-display
  safeguards?
- Carried from the source contract: which GitHub releases, tags, and
  npm package versions should be treated as canonical when they
  disagree with the official Codex changelog? Which provider-native
  long-horizon features should Bitter detect through local probes
  rather than relying on release notes? See
  `sources/codex.yml#discovery`.
- `surface_class` migration trigger: Codex is currently classified
  `mixed_official_docs`. PR-level receipts for semantics-heavy
  features (permission profile inheritance, managed `requirements.toml`,
  goal lifecycle metrics) remain visible on `openai/codex`, so the
  classification holds. The pressure-test surfaced an open question
  for *when* migration to `closed_source_release_notes` would be
  triggered. Proposed trigger: when two consecutive cycles produce
  no semantics-heavy claim that can be anchored above
  `release_note` precision, the classification should move. Until
  then, `evidence_floor: release_note` stays, but profile claims
  reaching above release-note precision should cite the PR or docs
  page explicitly.

## What To Watch Next

- Whether goal-mode-default-on is reversed or refined under operator
  pushback. The default-on move puts Codex in a small group with
  Claude Code and Gemini CLI; whether one of them reverses creates
  a marker for the industry.
- Adoption of `requirements.toml` outside OpenAI's own enterprise
  customers -- distribution and trust model decisions will mostly
  emerge through adopters, not changelog entries.
- Whether plugin marketplace sharing (ChatGPT Business launched
  2026-05-21; Enterprise "coming soon") materializes meaningful
  distribution mass; the surface exists but the adoption is the
  signal.
- `codex exec resume --output-schema` (CLI 0.132.0): a contract-bearing
  resume surface that lets a CI caller enforce schema on continuation
  of an existing session. Watch for adoption patterns and whether
  the schema-on-resume becomes standard for non-interactive callers.
- Conversation history search (CLI 0.134.0): a small surface, but
  the first time sessions are treated as searchable artifacts
  rather than ephemeral logs.
- `readOnlyHint` concurrency for MCP tools (CLI 0.134.0): possible
  cross-vendor convention candidate. Cross-provider probe worth
  scheduling.
- App-server consolidation (skills watcher, app-server pagination) is
  ongoing. Likely to absorb more surfaces.
- Remote control surfaces mentioned in the 0.130.0 changelog are
  worth a diff-level probe.

## Profile Hygiene

This profile follows the discipline in `RESEARCH_CONTRACT.md#profile`:
every concrete claim has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite
finding IDs when naming a specific feature, behavior change, or
cross-provider comparison. Cross-provider editorial belongs in the
weekly digest, not here. Git history is the audit trail; removed
claims live in the diff log.
