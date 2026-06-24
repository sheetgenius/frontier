---
schema_version: bitter.frontier_profile.v0
profile_id: claude-code
label: Claude Code
owner: Anthropic
source_contract: sources/claude-code.yml
homepage: https://claude.ai/code
docs: https://code.claude.com/docs/en/overview
changelog: https://code.claude.com/docs/en/changelog
tagline: "Background work on a leash whose clasp only locks once you test it."
compared_with:
  - codex
  - gemini-cli
x:
  project: AnthropicAI
  maintainers:
    - handle: bcherny
      name: Boris Cherny
surface_class: closed_source_release_notes
evidence_floor: release_note
status: active_watch
last_updated: 2026-06-23
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
  - id: foreground-subagent-depth-enforcement-gap
    finding_id: 2026-06-23-claude-code-foreground-subagent-depth-limit
    last_verified: 2026-06-23
    status: active
  - id: agent-permission-rule-enforcement-gap
    finding_id: 2026-06-23-claude-code-agent-permission-rules-enforced
    last_verified: 2026-06-23
    status: active
  - id: auto-mode-destructive-command-denylist
    finding_id: 2026-06-23-claude-code-auto-mode-destructive-command-blocks
    last_verified: 2026-06-23
    status: active
  - id: trigger-input-classification-fix
    finding_id: 2026-06-23-claude-code-scheduled-trigger-input-classification
    last_verified: 2026-06-23
    status: active
  - id: background-subagent-prompt-to-main
    finding_id: 2026-06-23-claude-code-background-subagent-permission-prompts
    last_verified: 2026-06-23
    status: active
  - id: mcp-cli-login-logout
    finding_id: 2026-06-23-claude-code-mcp-cli-login-logout
    last_verified: 2026-06-23
    status: active
posture_basis:
  capability:
    - 2026-05-06-claude-code-review-recap-plugin-surfaces
    - 2026-05-12-claude-code-agent-view-goal-and-governance
    - 2026-05-27-claude-code-auto-mode-default-on
    - 2026-06-23-claude-code-mcp-cli-login-logout
  accessibility:
    - 2026-05-12-claude-code-agent-view-goal-and-governance
    - 2026-05-27-claude-code-auto-mode-default-on
    - 2026-06-23-claude-code-background-subagent-permission-prompts
    - 2026-06-23-claude-code-mcp-cli-login-logout
  governance:
    - 2026-05-06-claude-code-review-recap-plugin-surfaces
    - 2026-05-12-claude-code-agent-view-goal-and-governance
    - 2026-05-27-claude-code-auto-mode-default-on
    - 2026-05-27-claude-code-powershell-and-worktree-sandbox-fixes
    - 2026-06-23-claude-code-foreground-subagent-depth-limit
    - 2026-06-23-claude-code-agent-permission-rules-enforced
    - 2026-06-23-claude-code-auto-mode-destructive-command-blocks
    - 2026-06-23-claude-code-scheduled-trigger-input-classification
    - 2026-06-23-claude-code-background-subagent-permission-prompts
stance:
  use_for: "Use Claude Code when you need to supervise several sessions from one screen, or set a completion condition on work that should keep moving after you leave the terminal."
  avoid_for: "Avoid procuring on the assumption that Console / API auth unlocks the highest-leverage cloud-control surfaces. Under API-key or token auth (`ANTHROPIC_API_KEY`, `apiKeyHelper`, `ANTHROPIC_AUTH_TOKEN`), Remote Control, `/schedule`, and claude.ai MCP connectors disable themselves; those surfaces require Claude.ai subscription identity, often with admin policy / SSO settings on top. API-key auth is not 'fully offline' -- it is an online API path that disables cloud-account control surfaces."
  watch_next: "Whether autonomous-completion and cloud-review surfaces stabilize output schemas a CI pipeline can ingest, and how aggressively cloud-only features keep expanding past local-only auth."
---

# Claude Code

## Operator Read

Claude Code is becoming a supervised background-work system with cloud-auth
boundaries -- and as of v2.1.152, an autonomy-default system. Baseline
consent for Auto mode moved out of the opt-in runtime ceremony and into
managed policy plus classifier behavior; the runtime consent dialog is
gone, but the *governance* of what auto-runs has not vanished -- it moved.
The shape this window: a multi-session supervisor, a persistent goal
primitive, a verification fleet that runs in the provider's cloud, and
Auto-mode-default-on as the new permission posture across the install
base. The trade-off is two-sided. The *highest-leverage cloud-control
surfaces* (Remote Control, `/schedule`, claude.ai MCP connectors) require
Claude.ai subscription identity and, in team contexts, admin toggles;
API-key-only auth disables them, and Console/API procurement does not by
itself unlock them. And the runtime consent ceremony that some admins
relied on as a posture-visibility surface no longer fires -- equivalent
visibility now lives in managed-settings policy and classifier behavior,
not in a runtime prompt.

The sharper development as of v2.1.186 is a disclosure, not a feature:
two of the prior window's marquee authority controls did not actually
bind when announced. The five-level nested-subagent depth cap (shipped
2.1.178) did not apply to *foreground* spawns -- a foreground subagent
could spawn unbounded nested chains until 2.1.181 -- and the named-subagent
permission rules (`Agent(type)` deny, `Agent(x,y)` allowed-types) were not
enforced for named subagent spawns until 2.1.186. An operator who wrote
either rule when it was announced was, in the interim, unprotected by it.
The lesson generalizes past these two fixes: on this surface, a permission
feature is not a permission boundary until something refuses the disallowed
action, and the only way to know is to test it after upgrading. The
counter-motion is real where enforcement did land: 2.1.183 enumerated the
specific destructive git / IaC commands the auto-mode classifier now
refuses, and reclassified scheduled-task and webhook trigger deliveries so
an inbound automated trigger can no longer approve a pending action or set
the session title under auto mode.

## Run It Differently

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

Authenticate MCP connectors headlessly with
[`claude mcp login`/`logout`](https://code.claude.com/docs/en/changelog#2-1-186)
(v2.1.186) when a CI or SSH pipeline can't open the interactive `/mcp` menu. The
`--no-browser` stdin-redirect path completes the OAuth flow over SSH. This lowers
the friction of wiring authenticated connectors into non-interactive runs -- and
is the connector-auth surface the source contract had flagged on its watch list.

## Governance Boundaries

As of [v2.1.152](https://code.claude.com/docs/en/changelog#2-1-152)
(2026-05-27), Auto mode is the default permission posture -- it no longer
requires opt-in consent. Operators with managed Claude Code deployments
should re-audit what Auto mode classifies as safe by default and where
the equivalent visibility check now lives in their environment (managed
settings, hook policy, out-of-band review). v2.1.152 also adds two
adjacent governance vectors: `disallowed-tools` in skill and
slash-command frontmatter (a skill can subtract tools from the agent
while active), and a `MessageDisplay` hook that can transform or hide
assistant message text on the output path.

Two of the prior window's headline authority controls shipped with
enforcement gaps that only closed this window -- verify both bind in the
binary you run. Foreground subagents
[ignored the five-level nested-subagent depth cap](https://code.claude.com/docs/en/changelog#2-1-181)
until v2.1.181 (the cap, shipped at 2.1.178, applied only to background
spawns; a foreground subagent could spawn an unbounded recursive chain
until the fix). And the named-subagent permission rules -- [`Agent(type)` deny rules and `Agent(x,y)` allowed-types restrictions](https://code.claude.com/docs/en/changelog#2-1-186)
 -- were not enforced for named subagent spawns until v2.1.186; they were
cosmetic for the named-spawn path before it. Any deployment that relies on
`Agent(...)` rules to gate which subagent types can spawn must pin 2.1.186+
and re-test those rules by writing a deny and confirming a named spawn is
actually refused. The bound only fully bound here; do not infer it from the
2.1.178 announcement.

As of [v2.1.183](https://code.claude.com/docs/en/changelog#2-1-183)
(2026-06-19), the auto-mode classifier
[enumerates a destructive-command denylist](https://code.claude.com/docs/en/changelog#2-1-183):
destructive git commands (`git reset --hard`, `git checkout -- .`,
`git clean -fd`, `git stash drop`) are blocked when the operator did not ask
to discard work, `git commit --amend` is blocked when the commit wasn't made
by the agent this session, and `terraform destroy` / `pulumi destroy` /
`cdk destroy` are blocked unless the operator named the specific stack. These
are *conditional* refusals, not unconditional ones, and they partially answer
the standing open question of what auto mode classifies as unsafe -- but only
for this enumerated set; the runtime, not the docs, remains canonical for the
full classification. The same release also fixed an authority-confusion vector:
[scheduled-task and webhook trigger deliveries](https://code.claude.com/docs/en/changelog#2-1-183)
were being treated as keyboard input -- an inbound automated trigger could
approve a pending action or set the session title in auto mode. They now
classify as task notifications and can do neither. Deployments running
`/schedule` or webhook triggers alongside auto mode should pin 2.1.183+ to
close that unattended-escalation path.

[Background subagent permission requests](https://code.claude.com/docs/en/changelog#2-1-186)
now surface in the main session for a human decision (v2.1.186) instead of
auto-denying; the dialog attributes which agent is asking, and Esc denies just
that one tool. This moves consent authority *toward* operator visibility -- the
opposite direction from the auto-mode-default trend -- but it also changes a
boundary: operators who relied on background-subagent auto-deny as an implicit
isolation barrier should note that a human is now prompted instead, with
per-tool attribution as the mitigation.

[`settings.autoMode.hard_deny`](https://code.claude.com/docs/en/changelog#2-1-136)
(v2.1.136) defines auto-mode rules that block unconditionally -- no allow rule
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

*Findings: `2026-05-06-claude-code-review-recap-plugin-surfaces`,
`2026-05-12-claude-code-agent-view-goal-and-governance`,
`2026-05-27-claude-code-auto-mode-default-on`,
`2026-05-27-claude-code-powershell-and-worktree-sandbox-fixes`,
`2026-06-23-claude-code-foreground-subagent-depth-limit`,
`2026-06-23-claude-code-agent-permission-rules-enforced`,
`2026-06-23-claude-code-auto-mode-destructive-command-blocks`,
`2026-06-23-claude-code-scheduled-trigger-input-classification`,
`2026-06-23-claude-code-background-subagent-permission-prompts`.*

## Open Questions

- What does Auto mode classify as "safe" by default? Partially answered:
  [v2.1.183](https://code.claude.com/docs/en/changelog#2-1-183) enumerates a
  destructive-command denylist (destructive git, IaC `destroy`), but only for
  that set and only conditionally. The full runtime classification beyond the
  enumerated commands is still undocumented; deployments must consult the
  runtime, not the docs, to know what else is auto-approved.
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
- The `whats-new` digest has not published a Week 25 narrative covering
  this window (latest is Week 24, through ~v2.1.176) as of 2026-06-23,
  despite the changelog being current through 2.1.186. Whether publication
  is intentionally lagging or simply delayed is unclear; the changelog
  remains the trailing-window canonical surface either way.
- Now that two announced authority controls (the depth cap and the
  `Agent()` permission rules) shipped with enforcement gaps, are there
  *other* governance features whose announcement preceded their actual
  binding? The enforcement-gap disclosures were the provider's own; whether
  the pattern is exhausted or ongoing is not knowable from the changelog
  alone and warrants per-window re-testing of any rule a deployment relies on.

## What To Watch Next

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
  policy merge -- how it interacts with enterprise policy deployment at scale.
- The `worktree.baseRef: "fresh"` default change (v2.1.133): watch for operator
  reports of unexpected worktree base behavior, especially in CI or automated
  Bitter runs that create worktrees programmatically.
- Whether Anthropic adds a separate security advisory surface or
  continues to use `official_changelog` for advisory-grade content
  (per `sources/claude-code.notes.md`).

## Profile Hygiene

This profile follows the discipline in `RESEARCH_CONTRACT.md#profile`: every
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
