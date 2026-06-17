---
schema_version: bitter.frontier_profile.v0
profile_id: claude-code
label: Claude Code
owner: Anthropic
source_contract: sources/claude-code.yml
homepage: https://claude.ai/code
docs: https://code.claude.com/docs/en/overview
changelog: https://code.claude.com/docs/en/changelog
surface_class: closed_source_release_notes
evidence_floor: release_note
status: active_watch
last_updated: 2026-06-03
last_full_review: 2026-06-03
claims:
  - id: ultrareview-cloud-review
    finding_id: 2026-05-06-claude-code-review-recap-plugin-surfaces
    last_verified: 2026-05-06
    status: active
  - id: session-recap-on-return
    finding_id: 2026-05-06-claude-code-review-recap-plugin-surfaces
    last_verified: 2026-05-06
    status: active
  - id: agent-view-multi-session
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-05-12
    status: active
  - id: goal-completion-primitive
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-05-12
    status: active
  - id: hook-continueonblock
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-05-12
    status: active
  - id: subagent-attribution-headers
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-05-12
    status: active
  - id: auto-mode-hard-deny
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-05-12
    status: active
  - id: api-key-cloud-surface-boundary
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-05-12
    status: active
  - id: auto-mode-default-on
    finding_id: 2026-05-27-claude-code-auto-mode-default-on
    last_verified: 2026-05-27
    status: active
  - id: skill-disallowed-tools
    finding_id: 2026-05-27-claude-code-auto-mode-default-on
    last_verified: 2026-05-27
    status: active
  - id: message-display-hook
    finding_id: 2026-05-27-claude-code-auto-mode-default-on
    last_verified: 2026-05-27
    status: active
  - id: sandbox-and-enforcement-fix-cluster
    finding_id: 2026-05-27-claude-code-powershell-and-worktree-sandbox-fixes
    last_verified: 2026-05-27
    status: active
  - id: permission-rule-enforcement-cluster
    finding_id: 2026-06-03-claude-code-webfetch-permission-rules
    last_verified: 2026-06-03
    status: active
posture_basis:
  capability:
    - 2026-05-06-claude-code-review-recap-plugin-surfaces
    - 2026-05-12-claude-code-agent-view-goal-and-governance
    - 2026-05-27-claude-code-auto-mode-default-on
  accessibility:
    - 2026-05-12-claude-code-agent-view-goal-and-governance
    - 2026-05-27-claude-code-auto-mode-default-on
  governance:
    - 2026-05-06-claude-code-review-recap-plugin-surfaces
    - 2026-05-12-claude-code-agent-view-goal-and-governance
    - 2026-05-27-claude-code-auto-mode-default-on
    - 2026-05-27-claude-code-powershell-and-worktree-sandbox-fixes
stance:
  use_for: "Use Claude Code when you need to supervise several sessions from one screen, or set a completion condition on work that should keep moving after you leave the terminal."
  avoid_for: "Avoid procuring on the assumption that Console / API auth unlocks the highest-leverage cloud-control surfaces. Under API-key or token auth (`ANTHROPIC_API_KEY`, `apiKeyHelper`, `ANTHROPIC_AUTH_TOKEN`), Remote Control, `/schedule`, and claude.ai MCP connectors disable themselves; those surfaces require Claude.ai subscription identity, often with admin policy / SSO settings on top. API-key auth is not 'fully offline': it is an online API path that disables cloud-account control surfaces."
  watch_next: "Whether autonomous-completion and cloud-review surfaces stabilize output schemas a CI pipeline can ingest, and how aggressively cloud-only features keep expanding past local-only auth."
---

# Claude Code

## Operator read

Claude Code is becoming a supervised background-work system with cloud-auth
boundaries, and as of v2.1.152, an autonomy-default system. Baseline
consent for Auto mode moved out of the opt-in runtime ceremony and into
managed policy plus classifier behavior; the runtime consent dialog is
gone, but the *governance* of what auto-runs has not vanished. It moved.
The shape this window: a multi-session supervisor, a persistent goal
primitive, a verification fleet that runs in the provider's cloud, and
Auto-mode-default-on as the new permission posture across the install
base. The trade-off is two-sided. The *highest-leverage cloud-control
surfaces* (Remote Control, `/schedule`, claude.ai MCP connectors) require
Claude.ai subscription identity and, in team contexts, admin toggles;
API-key-only auth disables them, and Console/API procurement does not by
itself unlock them. And the runtime consent ceremony that some admins
relied on as a posture-visibility surface no longer fires. Equivalent
visibility now lives in managed-settings policy and classifier behavior,
not in a runtime prompt.

## Run it differently

Use [`claude agents`](https://code.claude.com/docs/en/agent-view) (v2.1.139,
Research Preview) when terminal juggling is the bottleneck. It turns scattered
Claude Code sessions into a supervised queue with visible state, background
worktrees under `.claude/worktrees/`, and reply-in-place control. Enterprises
get `disableAgentView` as a managed setting.

Treat [`/goal`](https://code.claude.com/docs/en/changelog#2-1-139) (v2.1.139)
as a handoff primitive, not just a command: the operator can leave a session
running against a named stop condition, then inspect elapsed time, turns, and
token burn instead of babysitting every turn. Works in interactive, `-p`, and
Remote Control modes.

Use [`/ultrareview`](https://code.claude.com/docs/en/ultrareview) (Research
Preview, introduced April 2026) when manual review queues are the bottleneck
rather than authorship. A cloud fleet of bug-hunting agents runs against a
branch or pull request; findings return automatically. `claude ultrareview`
brings the same capability to CI without requiring an interactive session.

When you return to a terminal that was unfocused, expect an automatic
[session recap](https://code.claude.com/docs/en/interactive-mode#session-recap);
when you attach to a backgrounded session via agent view, Claude posts a short
recap of what happened while you were away.

## Governance boundaries

As of [v2.1.152](https://code.claude.com/docs/en/changelog#2-1-152)
(2026-05-27), Auto mode is the default permission posture. It no longer
requires opt-in consent. Operators with managed Claude Code deployments
should re-audit what Auto mode classifies as safe by default and where
the equivalent visibility check now lives in their environment (managed
settings, hook policy, out-of-band review). v2.1.152 also adds two
adjacent governance vectors: `disallowed-tools` in skill and
slash-command frontmatter (a skill can subtract tools from the agent
while active), and a `MessageDisplay` hook that can transform or hide
assistant message text on the output path.

[`settings.autoMode.hard_deny`](https://code.claude.com/docs/en/changelog#2-1-136)
(v2.1.136) defines auto-mode rules that block unconditionally: no allow rule
overrides them. Treat this as the unconditional-refusal layer of auto-mode
policy.

[`continueOnBlock`](https://code.claude.com/docs/en/changelog#2-1-139) (v2.1.139)
turns `PostToolUse` hooks from terminal refusals into advisory constraints: the
hook's rejection reason feeds back to Claude, and the turn continues. The
pattern shifts from "block and stop" to "explain and let Claude adapt."

Do not design cloud-control workflows around API-key-only auth, and do
not procure Claude Code on the assumption that Console/API access
unlocks these surfaces. When
[`ANTHROPIC_API_KEY`](https://code.claude.com/docs/en/changelog#2-1-139),
`apiKeyHelper`, or `ANTHROPIC_AUTH_TOKEN` is set, Remote Control,
`/schedule`, claude.ai MCP connectors, and notification preferences
disappear under that auth path. The boundary is durable: cloud-control
surfaces require Claude.ai subscription identity, and in team contexts
they may also require admin policy toggles, SSO configuration, and
compliance review on top of operator-level login. Enterprise buyers
should treat Console / API procurement and Claude.ai subscription as
*separate procurement decisions* and test which control surfaces their
chosen auth path actually exposes.

If your review loop depends on delegated-work attribution, start capturing
Claude Code's agent and parent-agent IDs in traces now: subagent API calls
carry [`x-claude-code-agent-id`](https://code.claude.com/docs/en/changelog#2-1-139)
and `x-claude-code-parent-agent-id` headers (v2.1.139), and OTel
`claude_code.llm_request` spans include `agent_id` and `parent_agent_id`
attributes. Parentage no longer has to be inferred from surrounding logs.

Windows operators with PowerShell allowlists, git worktree workflows,
or enterprise login pinning should upgrade past
[v2.1.149](https://code.claude.com/docs/en/changelog#2-1-149)
(2026-05-22). The 2.1.147-2.1.149 cluster closed three sandbox /
enforcement regressions that ship as ordinary changelog entries
rather than a separate advisory: PowerShell built-in `cd` functions
defeating the workspace boundary, sandbox write allowlist
over-scoping in git worktrees, and `forceLoginOrgUUID` /
`forceLoginMethod` enforcement gaps against third-party-provider and
API-key sessions. Per the source-contract note added 2026-05-27,
treat advisory-shape changelog entries as the de-facto advisory
surface; Anthropic does not publish a separate one.

*Posture basis: `2026-05-06-claude-code-review-recap-plugin-surfaces`,
`2026-05-12-claude-code-agent-view-goal-and-governance`,
`2026-05-27-claude-code-auto-mode-default-on`,
`2026-05-27-claude-code-powershell-and-worktree-sandbox-fixes`.*

## Open questions

- What does Auto mode classify as "safe" by default? The v2.1.152
  changelog does not enumerate the runtime classification; deployments
  must consult the runtime, not the docs, to know what is now auto-approved.
- `MessageDisplay` is a new hook event on the output path. Whether it is
  primarily a redaction surface (transform sensitive output) or a
  censorship surface (hide assistant disclosures from the operator)
  depends on deployment intent and is not documented as a policy.
- What evidence does `/ultrareview` actually produce, and in what format? The
  research preview returns findings to the CLI/Desktop but does not yet
  document the artifact schema or how a caller should ingest or route verdicts.
- Does `/goal` state survive context compaction? The compaction prompt now asks
  the model to preserve sensitive user instructions; whether a goal counts as
  sensitive is not documented.
- Does `/goal` integrate with agent view progress reporting? The changelog entry
  describes the goal overlay per-session; whether the agent view row reflects
  goal state or completion is not yet documented.
- Weeks 21 and 22 `whats-new` digests are not published as of 2026-05-27
  despite the changelog being current through 2.1.152. Whether
  publication is intentionally lagging or simply delayed is unclear; the
  changelog remains the trailing-window canonical surface either way.
- This profile's last harvest pass was 2026-05-27 against v2.1.152. The
  external-review council pressure-test on 2026-05-29 flagged that the
  changelog has advanced past that point (2.1.154 and 2.1.157 entries on
  the official docs as of the council run). A refresh harvest is owed
  before the next digest cycle, with particular attention to dynamic
  workflow handling, auto-mode classifier fixes, and reduced startup
  permission ceremony, all of which reinforce the "consent moved, not
  vanished" framing rather than refuting it.

## What to watch next

- Whether Auto-mode-default-on is reversed or refined under operator
  pushback, or extended further (e.g. is `disallowed-tools` adoption
  in skills high enough to suggest the operator class wants more
  scope control, not less consent).
- Stable-channel arrival of agent view (Research Preview); interface and
  shortcuts may change.
- Goal-completion semantics: what counts as "met," what happens on a partial
  run, and whether goal state persists across compaction.
- `/ultrareview` artifact format and integration surface for third-party CI and
  review pipelines.
- Whether `continueOnBlock` enables a hook-as-policy-advisor pattern that
  changes how governance is expressed in production deployments.
- The `/code-review` rename and `--fix` apply path (introduced
  2.1.147; loop closure 2.1.152): a code-review command that edits
  the tree by default through `/simplify` aliasing. Whether this
  becomes a CI-bound surface or remains interactive-only is a real
  authority decision.
- `parentSettingsBehavior` (v2.1.133): admin-tier key for SDK managedSettings
  policy merge: how it interacts with enterprise policy deployment at scale.
- The `worktree.baseRef: "fresh"` default change (v2.1.133): watch for operator
  reports of unexpected worktree base behavior, especially in CI or automated
  Bitter runs that create worktrees programmatically.
- Whether Anthropic adds a separate security advisory surface or
  continues to use `official_changelog` for advisory-grade content
  (per `sources/claude-code.notes.md`).

## Profile hygiene

This profile follows the discipline in `METHOD.md`: every
concrete claim in the prose has an inline source link and an entry in the
`claims:` block; posture sections may interpret freely but must cite finding IDs
when naming a specific feature, behavior change, or cross-provider comparison.
Cross-provider editorial belongs in the weekly digest, not here. Git history is
the audit trail; removed claims live in the diff log.

The `claims:` block references
`finding_id: 2026-05-06-claude-code-review-recap-plugin-surfaces` for the two
claims seeded from the prior manual-run finding. That finding predates the
`finding_id` field convention; the ID is a retrospective assignment. See
`audit.md` in this cycle's run artifact for the full explanation and the
recommendation for resolving it in the next cycle.
