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
last_updated: 2026-07-27
last_full_review: 2026-07-27
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
  use_for: "Use Claude Code when supervising several sessions from one screen is the bottleneck, or when work should keep moving against a named completion condition after you leave the terminal. Set the fan-out ceilings rather than inheriting them: per-session subagent and WebSearch caps default to 200, concurrent subagents to 20, and the nesting-depth default changed twice in three days during July."
  avoid_for: "Do not treat the `stable` channel as a safety posture, and do not treat a written permission rule, plan mode, or `isolation: 'worktree'` as a boundary you have not personally tested. At the 2026-07-27 window close `stable` served 2.1.212, which lacks the v2.1.214 batch of permission checks that had been failing open; plan mode ran file-modifying Bash with no prompt before 2.1.212; worktree and directory isolation leaked three separate ways in eleven days. Separately, do not procure on the assumption that Console / API auth unlocks the cloud-control surfaces -- Remote Control, `/schedule`, and claude.ai MCP connectors disable themselves under `ANTHROPIC_API_KEY`, `apiKeyHelper`, or `ANTHROPIC_AUTH_TOKEN` and require Claude.ai subscription identity."
  watch_next: "Whether `stable` ever carries the 2.1.214 permission repairs, and whether Anthropic ever routes an authority repair through the advisory feed instead of a changelog line -- across eight authority-repairing releases in July it published none. Also whether the official What's New digest resumes past Week 29, and what the auto-mode classifier actually refuses now that it adjudicates dangerous `rm`, background `&`, and suspicious Windows paths that used to reach a human."
---

# Claude Code

## Operator Read

**Last material change: [`v2.1.214`](https://github.com/anthropics/claude-code/releases/tag/v2.1.214),
2026-07-18 -- a batch of permission checks that had been failing open. At window
close it was not in the `stable` channel.**

The first Claude Code question as of 2026-07-27 is not which feature to use. It
is which build you are running, because the two documented channels disagreed
about whether the permission system works. `stable` served `2.1.212` and
`latest` served `2.1.220`, eight releases and eight days apart, and `v2.1.214`
sits in the gap. [Channel semantics](https://code.claude.com/docs/en/setup#configure-release-channel)
put `stable` about a week behind by design. Anyone running
`"autoUpdatesChannel": "stable"`, the Homebrew `claude-code` cask, or the apt,
dnf, or apk `stable` repository did not have the fixes.

What was failing open is worth naming, because every item reads like a boundary
when you write it. `Edit(src/**)` auto-approved writes to a nested `src/`
anywhere in the tree instead of only `<cwd>/src`. Commands in Windows PowerShell
5.1 sessions bypassed the check. Bash file-descriptor redirect forms that bash
parses one way and the permission analyzer parsed another ran unprompted, as did
commands over ten thousand characters, zsh variable subscripts inside `[[ ]]`
treated as inert text, and `help` and `man` invocations able to carry unsafe
options and command substitutions. Six ways to write a rule that reads exactly
like a boundary and was not one, repaired in a single release, announced as
ordinary changelog prose.

The action has two parts and the second is the one people skip. Move to
`latest`, or pin `minimumVersion` to `2.1.214` -- a floor that auto-update and
`claude update` refuse to go below, enforceable org-wide from managed settings.
Then write a deny rule, run the command it forbids, and watch what happens. On
this surface an announced permission feature is not a permission boundary until
something refuses.

The rest of the window rhymes. Remote managed settings delivered to a
non-interactive run were
[recorded as consented without the dialog ever appearing](https://github.com/anthropics/claude-code/releases/tag/v2.1.207)
before `v2.1.207`, so any fleet where a user ran `claude -p` or the SDK holds a
consent record that is fiction. Plan mode was
[running file-modifying Bash with no prompt](https://github.com/anthropics/claude-code/releases/tag/v2.1.212)
until `v2.1.212`, so it was never the read-only containment boundary operators
used it as. Worktree and directory isolation leaked three distinct ways in
eleven days. The delegation default reversed twice in three days. And across
eight releases that repaired authority boundaries, Anthropic published
[zero security advisories](https://github.com/anthropics/claude-code/security/advisories);
a patch process triggered by CVEs or GHSAs did not fire once in July. The
official [What's New digest](https://code.claude.com/docs/en/whats-new) stops at
Week 29, so `v2.1.214` through `v2.1.220` -- the stretch holding all of the
above -- has no vendor summary at all. Read the changelog line by line or read
nothing.

Underneath the repairs the product's direction is unchanged. Claude Code is a
supervised background-work system in which auto mode is the default permission
posture, and this window auto mode
[absorbed three more decisions that used to reach a human](https://github.com/anthropics/claude-code/releases/tag/v2.1.218):
dangerous `rm`, background `&`, and suspicious Windows paths now go to the
classifier instead of a dialog. The cross-project reading of this window is in
[Rules Became Judgment](/digests/2026-07-02_2026-07-27-weekly/); the
Claude Code case is written up as its own
[signal](/signals/2026-07-27-claude-code-permission-rules-did-not-refuse/).

## Run It Differently

Set the fan-out ceilings rather than inheriting them.
[`v2.1.212`](https://github.com/anthropics/claude-code/releases/tag/v2.1.212)
added the first hard per-session caps -- 200 WebSearch calls
(`CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`) and 200 subagent spawns
(`CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION`, reset by `/clear`) -- and
[`v2.1.217`](https://github.com/anthropics/claude-code/releases/tag/v2.1.217)
added a concurrency cap of 20 (`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`). Spawn
depth is the one to set explicitly: `v2.1.217` turned nested subagents off by
default and
[`v2.1.219`](https://github.com/anthropics/claude-code/releases/tag/v2.1.219)
turned them back on at depth 3 three days later. `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1`
disables nesting. Note also that `--max-budget-usd` did not stop background
subagents until `v2.1.217`; before that the cap was advisory.

Add an explicit review step. As of
[`v2.1.215`](https://github.com/anthropics/claude-code/releases/tag/v2.1.215)
Claude no longer runs `/verify` or `/code-review` on its own, and `v2.1.218` did
the same for `/deep-research`. If your quality bar assumed implicit self-review,
it stopped on 2026-07-19; wire the command into a hook or a workflow step or the
review stops happening.

Re-baseline anything tied to the model. `v2.1.219` made
`claude-opus-5` the default Opus model with 1M context and fast mode at $10/$50
per Mtok, and merged the `/model` picker row. Upgrading past `v2.1.218` silently
moves your default model and your context window; pin explicitly if "Opus" meant
a specific model in your evals or cost model.

Wire `mcp_server_errors` into headless pipelines. The stream-json init event
(`v2.1.219`) now lists `--mcp-config` entries that config validation silently
dropped, with a startup warning in terminal runs. Before this the failure was
invisible.

Use [`claude agents`](https://code.claude.com/docs/en/agent-view) when terminal
juggling is the bottleneck: scattered sessions become a supervised queue with
visible state and background worktrees, and `disableAgentView` is available as a
managed setting. `/fork` now copies a conversation into its own background
session with its own row; the in-session subagent it used to launch is
`/subtask`. Treat [`/goal`](https://code.claude.com/docs/en/changelog#2-1-139)
as a handoff primitive rather than a command, and
[`/ultrareview`](https://code.claude.com/docs/en/ultrareview) as the cloud
review fleet for when the queue rather than authorship is the constraint. All
three remain Research Preview or preview-shaped surfaces.

Authenticate MCP connectors headlessly with
[`claude mcp login`/`logout`](https://code.claude.com/docs/en/changelog#2-1-186)
when a CI or SSH pipeline cannot open the interactive `/mcp` menu; the
`--no-browser` stdin-redirect path completes OAuth over SSH.

Enterprise operators have one genuinely new lever:
[`CLAUDE_CODE_PROCESS_WRAPPER`](https://github.com/anthropics/claude-code/releases/tag/v2.1.208)
(`v2.1.208`) is the first documented way to force every Claude Code self-spawn
through your own executable. The same release fixed integer environment
variables written in scientific notation silently using the mantissa, so `1e6`
was being enforced as `1`. Audit those before you trust any budget you set that
way.

## Governance Boundaries

**The permission checks that did not refuse.** Nine classes of check were
failing open before
[`v2.1.214`](https://github.com/anthropics/claude-code/releases/tag/v2.1.214)
(2026-07-18): single-segment `dir/**` allow rules matching nested directories
anywhere in the tree, Windows PowerShell 5.1 sessions, Bash file-descriptor
redirect forms, commands over 10,000 characters, zsh variable subscripts and
modifiers in `[[ ]]`, `help` and `man` with unsafe options or command
substitutions, remote-session prompts that could proceed before the local
confirmation dialog, `docker` daemon-redirect flags including the Podman shim,
and `file` with `-m`/`--magic-file` or `-f`/`--files-from`. The same release
carries a silent break in the other direction: single-segment `dir/**` hook
`if:` conditions now match only `<cwd>/dir`, so every such hook fires less than
it used to. Write `**/dir/**` for any-depth matching. `deny` and `ask`
permission rules keep their any-depth match.
[`v2.1.216`](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)
continued the same repair: Bash permission checking for compound statements with
redirects inside `&&` lists or negations, and PowerShell validation for commands
containing invisible Unicode characters.

**Consent that was never given, and authority leaving the repository.** Before
[`v2.1.207`](https://github.com/anthropics/claude-code/releases/tag/v2.1.207)
(2026-07-11), remote managed settings reaching a non-interactive run (`claude
-p`, the SDK) were permanently recorded as consented without the security
consent dialog ever being shown. Re-audit which settings your fleet is actually
running under. The same release strips authority from repository-resident files:
plugin option values (`pluginConfigs`) are no longer read from project
`.claude/settings.json`, and auto mode no longer reads `autoMode` from
`.claude/settings.local.json`, so a repo that committed either loses the setting
on upgrade and must move it to user or managed settings. Two adjacent moves
complete the pattern: nested `.claude/rules/*.md` files
[stopped loading](https://github.com/anthropics/claude-code/releases/tag/v2.1.211)
when setting sources exclude project settings, and agent frontmatter hooks now
[require the agent file's own folder to have accepted workspace trust](https://github.com/anthropics/claude-code/releases/tag/v2.1.218).
Before `v2.1.218`, dropping a third-party agent markdown file into an untrusted
folder was enough to get its hooks to run.

**Isolation is not a boundary on its own.** Worktree and directory isolation
leaked three separate ways in eleven days: worktree-isolated subagents running
git-mutating commands against the
[main checkout](https://github.com/anthropics/claude-code/releases/tag/v2.1.210)
(`v2.1.210`, 2026-07-14),
[`git -C`, `--git-dir`, `GIT_DIR`, and `GIT_WORK_TREE` redirection](https://github.com/anthropics/claude-code/releases/tag/v2.1.216)
(`v2.1.216`, 2026-07-20), and
[uncanonicalized symlinked working directories](https://github.com/anthropics/claude-code/releases/tag/v2.1.217)
that let background sessions escape their workspace folder (`v2.1.217`,
2026-07-21). Add symlink following in worktree creation (`v2.1.212`) and in
workflow and scheduled-task writes (`v2.1.216`), plus Windows worktree removal
[deleting files outside the worktree](https://github.com/anthropics/claude-code/releases/tag/v2.1.205)
across an NTFS junction (`v2.1.205`) -- that one is data loss, not only
containment. If you use `isolation: 'worktree'` as a control for untrusted work,
pair it with filesystem sandboxing and treat the July record, not the
documentation, as the description of what it does.

**Auto mode keeps absorbing decisions.** Auto mode has been the default
permission posture since v2.1.152. This window moved three more decisions into
it: [dangerous `rm`, background `&`, and suspicious Windows paths](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)
no longer open permission dialogs and are adjudicated by the classifier instead,
and plan mode with auto stopped prompting for Bash the static analyzer cannot
prove read-only. The classifier itself is now
[pinned to Sonnet 5 for external sessions](https://github.com/anthropics/claude-code/releases/tag/v2.1.210),
validated on the session's first request. One repair ran the other way: before
[`v2.1.211`](https://github.com/anthropics/claude-code/releases/tag/v2.1.211),
auto mode could override a `PreToolUse` hook's `ask` decision for unsandboxed
Bash, so the hook was not the floor operators assumed. If your policy says a
human sees every `rm -rf` prompt, it does not hold under auto mode.

**The approval surface itself was forgeable.** Permission previews relayed to
chat channels did not neutralize bidirectional-override, zero-width, or
look-alike quote characters until `v2.1.211`, "so tool inputs cannot visually
alter the approval message." Before
[`v2.1.205`](https://github.com/anthropics/claude-code/releases/tag/v2.1.205),
text sitting in a session transcript could read as a human approval to a later
turn and be acted on; background task notifications now state explicitly that no
human input occurred. If you approve actions from Slack, or audit runs by
reading transcripts, both were load-bearing assumptions that did not hold.

**Credentials, telemetry, and config that changed under you.** Background and
agent-view sessions
[dropped a shell-exported `ANTHROPIC_BASE_URL`](https://github.com/anthropics/claude-code/releases/tag/v2.1.203)
before `v2.1.203`, sending API keys to `api.anthropic.com` before failing with
401 -- rotate any key a background agent ran under a gateway configuration,
because the credential left your boundary before the error appeared. Managed
settings that set `OTEL_EXPORTER_OTLP_ENDPOINT` did not govern all signals until
`v2.1.217`, so a lower-scope override could quietly redirect telemetry away from
the managed endpoint. And `v2.1.219` changed managed MCP allowlist and denylist
`${VAR}` entries to resolve from the startup environment and managed-settings
env rather than settings-file env: if your allowlist used a settings-file `env`
value it resolves differently or not at all after upgrade, which can turn an
allowlist into a denylist.

**Push authority widened.**
[`v2.1.206`](https://github.com/anthropics/claude-code/releases/tag/v2.1.206)
auto-allows `git push` from `/commit-push-pr` to the repository's configured
push remote (`remote.pushDefault`, or the sole remote when only one exists) in
addition to `origin`. Following the previous window's change that let background
agents commit, push, and open draft pull requests, check `remote.pushDefault`
and confirm branch protection covers that remote in every repository where
background agents run.

**Nothing came through the advisory channel.** `anthropics/claude-code`
published [zero GitHub Security Advisories](https://github.com/anthropics/claude-code/security/advisories)
between 2026-07-01 and 2026-07-27; the newest predates the window. Every item in
this section shipped as a changelog line. The changelog is the de facto advisory
surface on this product, and a vulnerability feed showed nothing for the entire
month.

Two smaller controls stay worth knowing.
[`settings.autoMode.hard_deny`](https://code.claude.com/docs/en/changelog#2-1-136)
defines auto-mode rules that block unconditionally, with no allow rule
overriding them -- the unconditional-refusal layer.
[`continueOnBlock`](https://code.claude.com/docs/en/changelog#2-1-139) turns
`PostToolUse` hooks from terminal refusals into advisory constraints: the
rejection reason feeds back to Claude and the turn continues.

The cloud-auth boundary is unchanged and remains a procurement decision rather
than a configuration one. When `ANTHROPIC_API_KEY`, `apiKeyHelper`, or
`ANTHROPIC_AUTH_TOKEN` is set, Remote Control, `/schedule`, claude.ai MCP
connectors, and notification preferences disappear under that auth path. Those
surfaces require Claude.ai subscription identity, and in team contexts admin
policy toggles, SSO configuration, and compliance review on top. Treat Console /
API procurement and Claude.ai subscription as separate decisions, and test which
control surfaces your chosen auth path actually exposes.

## Open Questions

- **Resolved this window, in the worst direction.** The June profile asked
  whether other governance features had been announced before they actually
  bound. They had, at scale: nine permission-check classes failing open in
  [`v2.1.214`](https://github.com/anthropics/claude-code/releases/tag/v2.1.214),
  plan mode running file-modifying Bash in `v2.1.212`, three isolation escapes,
  a budget cap that did not bound background subagents, and a managed-settings
  consent record written without a dialog. The pattern was not exhausted. The
  standing instruction that follows is to re-test every rule a deployment relies
  on, every window.
- **When does `stable` carry the permission repairs?** At window close it served
  `2.1.212`. The documented trade is a week of regression soak-time; on this
  product that is also a week without authority repairs that ship with no
  advisory. Whether the trade is net positive is now a live operational
  question, not a theoretical one.
- **What is actually in `v2.1.220`?** The entire release note for the current
  `latest` reads "Bug fixes and reliability improvements." Nothing in the
  primary record says whether it contains a security fix.
- **What does the auto-mode classifier refuse?** Still undocumented, and the
  question widened. The `v2.1.183` destructive-command denylist covers only its
  enumerated set and only conditionally, and `v2.1.218` handed dangerous `rm`,
  background `&`, and suspicious Windows paths to the classifier as well. The
  runtime, not the docs, remains canonical.
- **Does the What's New digest resume?** Week 29 (`v2.1.207` to `v2.1.212`) is
  the newest entry and the Week 30 URL returns 404. The eight releases holding
  the permission batch, two worktree escapes, the nesting reversal, and Opus 5
  have no official summary. Whether publication is lagging or stopped is not
  knowable from the surface.
- **How should a headless caller detect a self-ended session?** `v2.1.214` added
  the `EndConversation` tool, so a session can now terminate itself. That is not
  a crash and not a timeout, and the release note does not say how to
  distinguish it. Scheduled and headless runs need a distinct exit path before
  retry logic treats it as a failure.
- `MessageDisplay` (v2.1.152) remains a hook on the output path with no
  documented policy on whether it is a redaction surface or a way to hide
  assistant disclosures from the operator.
- `/ultrareview` still does not document its artifact schema or how a caller
  should ingest verdicts, and `/goal` still does not document whether goal state
  survives compaction or surfaces in the agent view row.

## What To Watch Next

- Whether `stable` ever receives `2.1.214`+, and whether Anthropic revisits the
  channel's semantics now that authority repairs land inside the lag.
- Whether any authority repair is ever routed through the advisory feed. The
  answer this window was no, across eight releases.
- Whether the nesting default holds at depth 3. It changed twice in three days,
  in opposite directions.
- Auto-mode-default-on was not reversed under operator pushback this window; it
  was extended. Watch whether the classifier's remit keeps growing, and whether
  `disallowed-tools` adoption in skills suggests the operator class wants scope
  control rather than restored consent.
- `sandbox.network.strictAllowlist` (v2.1.219), which denies non-allowlisted
  hosts for sandboxed commands without prompting -- the first egress control
  here that refuses rather than asks -- and `sandbox.filesystem.disabled`
  (v2.1.216), which keeps network egress control while skipping filesystem
  isolation.
- `CLAUDE_CODE_PROCESS_WRAPPER` adoption as an enterprise control, and whether
  managed settings gain more surfaces that apply without an approval prompt now
  that `v2.1.218` exempts "benign" feature and cost toggles.
- Opus 5 as the default Opus model: whether "Opus" keeps meaning a moving
  target, and what that does to pinned evals and cost models.
- Stable-channel arrival of agent view, still a Research Preview, and whether
  `/code-review` running as a background subagent (v2.1.218) becomes a CI-bound
  surface.
- Whether `continueOnBlock` produces a durable hook-as-policy-advisor pattern in
  production deployments.

## Profile Hygiene

This profile follows the profile discipline defined in
[METHOD.md](../../METHOD.md#the-object-grammar): posture sections may interpret
freely, but every concrete claim carries an inline link to the release, probe,
or documentation page it rests on. Cross-project editorial belongs in the weekly
digest, not here. Git history is the audit trail; removed claims live in the
diff log.

The `claims:` block is unchanged from 2026-06-23. The 2026-07-27 research cycle
published its record as per-source harvest and cross-check artifacts rather than
individual finding files, so this window's material is carried in the prose with
inline receipts on the claim-bearing words instead of new `claims:` entries.

The block references
`finding_id: 2026-05-06-claude-code-review-recap-plugin-surfaces` for the two
claims seeded from a prior manual run. That finding predates the `finding_id`
convention; the ID is a retrospective assignment.
