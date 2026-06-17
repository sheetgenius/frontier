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
surface_class: mixed_official_docs
evidence_floor: release_note
status: active_watch
last_updated: 2026-06-03
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
    last_verified: 2026-05-27
    status: active
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
posture_basis:
  capability:
    - 2026-05-07-codex-stateful-control-plane
    - 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    - 2026-05-12-codex-pretooluse-input-rewrite
    - 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    - 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
  accessibility:
    - 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    - 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
  governance:
    - 2026-05-07-codex-stateful-control-plane
    - 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    - 2026-05-12-codex-pretooluse-input-rewrite
    - 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    - 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
stance:
  use_for: "Teams who want OpenAI's read on long-running goals, plugin permissions, and visible authority state. Codex is editorially useful as a directional indicator for how a major closed-source coding-agent vendor shapes these surfaces: directional, not predictive. Treat the design choices as evidence of where one large vendor is going, not as a forecast of where the category lands."
  avoid_for: "Anyone who needs to fork or audit the agent itself: Codex is watched as platform behavior, not a CLI you own. Hook authors using PreToolUse rewrites should re-test after v0.130.x; the rewrite path now actually rewrites."
  watch_next: "How plugin sharing evolves once role-aware access lands in operator hands, and whether bundled Linux sandboxing extends to other host OSes."
---

# Codex

## Operator read

Codex is OpenAI's bet on a stateful agent control plane, not a terminal
prompt. Goals, sessions, threads, memory, plugin sets, permission profiles,
sandboxes, and authority posture are all becoming first-class persistent
state, and as of the 2026-05-21 product launch (26.519 + CLI 0.133.0),
goal mode reaches a **stable, default-exposed persistent-objective
baseline**: it graduates out of experimental, ships with dedicated
storage and progress tracking, and turns on by default across app, IDE,
and CLI. The default-on move and a second piece (*permission profile
inheritance plus a managed `requirements.toml` enforcement file*)
shipped together in the same release bundle. They are operationally
complementary, not causally chained: the policy substrate is real
policy substrate, but the framing that goal-default-on *required* it is
softer than the release notes literally claim. Watch Codex as one
large vendor's directional read on where closed-source coding agents
go: directional, not predictive.

## Run Codex differently

Use `/goal` as a persistent objective, not a prompt extension.
[TUI-side validation](https://github.com/openai/codex/commit/f09e1936e0fd464dcea78fe55b84bd20f721cad6)
handles paste, queued goal commands, length limits, and explicit operator
guidance for longer instructions. The goal lifecycle is
[instrumented](https://github.com/openai/codex/commit/91b735018779daed7c40f86aab9bec9abc9922e8):
goals are observable durable objects, not chat-local state.

Treat each session as identified runtime state, not ambient context.
Sessions carry [a session id](https://github.com/openai/codex/commit/a98623511ba433154ec811fc63091617f5945438)
through the runtime, making "which session is this" answerable; MCP turns
carry [thread metadata](https://github.com/openai/codex/commit/fe24a180ab6f6b3639b682cc6a1e71150fea6d48)
linking tool calls back to the conversational thread they belong to. Memory
itself runs as
[a spawned MCP](https://github.com/openai/codex/commit/ca257b6ce5db5c2710ec8da290b25b263154e402)
rather than being bolted into the agent: memory is a swap-able surface,
not a fixed component.

If your hook layer rewrote tool inputs by returning `updatedInput` but the
agent kept using the original, you have a behavior shift to verify.
[`PreToolUse` hooks now apply `updatedInput` rewrites](https://github.com/openai/codex/pull/20527)
before tool dispatch when the hook also returns `permissionDecision: "allow"`.
Hook authors can now sanitize, normalize, or redirect tool arguments before
execution: the hook surface is no longer just allow/deny.

## Authority made visible

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
[role-aware](https://github.com/openai/codex/commit/479491ed8925): "who can
see this plugin" is a first-class question, not a binary access flag, and
share settings have
[discoverability work](https://github.com/openai/codex/commit/ae15343243ee)
on top of the role-aware context.

## Platform surfaces

A [bundled Linux sandbox](https://github.com/openai/codex/commit/26f355b67b75b040ff16990d1b2e4e8093479213)
ships with Codex, removing the host-dependent sandbox setup step Linux
operators used to maintain. The skills watcher
[runs in the app-server](https://github.com/openai/codex/commit/408e6218ab7f),
consolidating skills management with the broader app-server direction the
repo has been pursuing. Each of these refines a previously coarse property
(implicit host sandbox setup, scattered skills management) into structured
runtime state.

## Goal mode and versioned policy

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
documented safeguards: short-lived authorization, scoping to active
trusted computer-use turns, covered displays, relock on local input,
manual-unlock fallback, and per-task enable. The capability is narrow
and opt-in, not a default category event. The operator-facing rule of
thumb: default-deny locked-host computer use for sensitive hosts and
allow only scoped task classes after verifying stop/relock and
display-cover behavior end to end.

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
adoption. The underlying policy mechanism is real, but the category
claim ("this is the enterprise policy model for coding agents") is
not yet receipt-backed and should not be made.

*Posture basis: `2026-05-07-codex-stateful-control-plane`,
`2026-05-11-codex-permissions-visibility-and-plugin-share-evolution`,
`2026-05-12-codex-pretooluse-input-rewrite`,
`2026-05-27-codex-goal-mode-graduated-and-remote-computer-use`,
`2026-05-27-codex-permission-profile-inheritance-and-managed-requirements`.*

## Open questions

- What is the distribution and signing model for managed
  `requirements.toml`? Release notes describe org-level enforcement
  but do not document whether the file is repo-rooted, org-rooted
  via a central distribution mechanism, signed against tampering,
  or watched at runtime.
- Profile inheritance semantics: does a derived profile only *add*
  to the base, or can it *subtract*? Subtraction is the harder and
  safer feature; the release notes do not say.
- Runtime profile-refresh consistency under in-flight tool calls is
  unspecified: what happens to a tool call that started under a
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

## What to watch next

- Whether goal-mode-default-on is reversed or refined under operator
  pushback. The default-on move puts Codex in a small group with
  Claude Code and Gemini CLI; whether one of them reverses creates
  a marker for the industry.
- Adoption of `requirements.toml` outside OpenAI's own enterprise
  customers: distribution and trust model decisions will mostly
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

## Profile hygiene

This profile follows the discipline in `METHOD.md`:
every concrete claim has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite
finding IDs when naming a specific feature, behavior change, or
cross-provider comparison. Cross-provider editorial belongs in the
weekly digest, not here. Git history is the audit trail; removed
claims live in the diff log.
