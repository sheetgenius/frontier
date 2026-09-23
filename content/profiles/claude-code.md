---
schema_version: bitter.frontier_profile.v0
profile_id: claude-code
label: Claude Code
owner: Anthropic
source_contract: sources/claude-code.yml
homepage: https://claude.ai/code
docs: https://code.claude.com/docs/en/overview
changelog: https://code.claude.com/docs/en/changelog
tagline: "The classifier that replaced the permission prompt now runs on Anthropic's servers by default, and the stable channel is a pointer someone moves."
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
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: server-side-classifier-default
    finding_id: 2026-09-21-claude-code-2-1-278-auto-mode-classifier-moves-server-side-by-default
    last_verified: 2026-09-23
    status: active
  - id: stable-pointer-jump
    finding_id: 2026-09-21-claude-code-stable-froze-on-2-1-236-for-eighteen-days-then-jumped-to-2-1-267
    last_verified: 2026-09-23
    status: active
  - id: project-bypass-ignored
    finding_id: 2026-09-21-claude-code-2-1-257-authority-batch-project-bypass-ignored-ask-rules-skipped-in-auto
    last_verified: 2026-09-23
    status: active
  - id: gitspawn-second-path
    finding_id: 2026-09-21-claude-code-gitspawn-ultrareview-path-ran-repo-git-config-before-trust-no-fix-named-through-2-1-278
    last_verified: 2026-09-23
    status: active
  - id: macos-read-deny-and-mcp-headershelper
    finding_id: 2026-08-20-claude-code-2-1-236-macos-read-deny-wildcards-bind-2-1-238-trust-gates-mcp-headershelper
    last_verified: 2026-08-20
    status: active
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
  - id: repo-settings-lose-tracing-and-env
    finding_id: 2026-09-21-claude-code-2-1-251-repository-settings-lose-tracing-env-and-a-symlink-toctou-closes
    last_verified: 2026-09-23
    status: active
  - id: per-command-egress-hosts
    finding_id: 2026-09-21-claude-code-2-1-271-model-names-its-own-egress-hosts-subagent-output-framed-as-subagent
    last_verified: 2026-09-23
    status: active
  - id: deny-rules-extended-and-reverted
    finding_id: 2026-09-21-claude-code-deny-rules-extended-into-bash-and-reverted-twice
    last_verified: 2026-09-23
    status: active
  - id: auto-mode-starting-mode-isolation-none
    finding_id: 2026-09-21-claude-code-auto-mode-is-the-starting-mode-and-docs-list-isolation-needed-none
    last_verified: 2026-09-23
    status: active
  - id: claude-ai-skills-plugins-sync
    finding_id: 2026-09-21-claude-code-claude-ai-skills-and-plugins-sync-into-terminal-sessions-by-default
    last_verified: 2026-09-23
    status: active
  - id: managed-lists-fail-closed
    finding_id: 2026-09-21-claude-code-managed-mcp-and-policy-lists-go-fail-closed-allowedmcpservers-semantics-flip
    last_verified: 2026-09-23
    status: active
  - id: agents-md-and-task-tools-removed
    finding_id: 2026-09-21-claude-code-agents-md-support-and-task-scaffolding-removed-for-current-models
    last_verified: 2026-09-23
    status: active
  - id: gateway-key-telemetry-and-cloud-uploads
    finding_id: 2026-09-21-claude-code-gateway-key-sent-to-telemetry-and-credential-files-uploaded-to-cloud-sessions
    last_verified: 2026-09-23
    status: active
  - id: effort-model-cost-governance
    finding_id: 2026-09-21-claude-code-effort-model-and-cost-governance-and-claude-plugin-eval
    last_verified: 2026-09-23
    status: active
  - id: plugin4shell-silent-fix
    finding_id: 2026-09-21-claude-code-plugin4shell-disclosed-in-window-fix-shipped-in-2-1-179-with-a-silent-changelog
    last_verified: 2026-09-23
    status: active
  - id: restricted-and-prompts-none
    finding_id: 2026-09-21-claude-code-restricted-and-permission-prompts-none-refuse-instead-of-asking
    last_verified: 2026-09-23
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
  use_for: "Supervised background work where auto mode's classifier stands in for most permission prompts, and headless jobs that must refuse rather than ask: `--restricted -p` for graders and untrusted-input review, `--permission-prompts none` for CI. Managed settings now fail closed when unreadable, which makes fleet policy worth writing down."
  avoid_for: "Treating auto mode as isolation: the vendor's own permission-modes page lists isolation needed as none. Treating `stable` as a one-week soak: it held one build for eighteen days and then jumped 23 versions. Opening untrusted repositories outside a container while the second GitSpawn path has no named fix. Relying on a deny rule you have not run a command against on the build you actually have."
  watch_next: "A changelog line or advisory naming a fix for the GitSpawn ultrareview path; which platforms and regions actually run the server-side classifier; whether either reverted deny-rule extension re-lands; when stable picks up 2.1.268 and later; whether `CLAUDE_CODE_AUTO_MODE_SERVER` is removed, as the docs say it may be."
---

# Claude Code

Claude Code is on this watchlist because it is where a classifier replaced
the permission prompt as the default. Auto mode is the starting mode on Pro,
Max and Team, so for many users a model, not a person, now decides which tool
calls run. The product is closed source, and its changelog is the only record
of what that judge and the rules around it do. We pin that record at
[commit 8187baaaafb3](https://github.com/anthropics/claude-code/blob/8187baaaafb3/CHANGELOG.md).

## Where it stands, 2026-09-21

**Channel.** It installs from npm as `@anthropic-ai/claude-code`, from the
native installer, or from the Homebrew cask, and all three follow two
pointers. At window close `stable` was 2.1.267 and `latest` was
[2.1.278](https://github.com/anthropics/claude-code/releases/tag/v2.1.278),
after 32 versions in the window. The
[setup page](https://code.claude.com/docs/en/setup#configure-release-channel)
says stable is "typically about one week old." In practice the cask that
follows it sat on 2.1.236 from
[28 August](https://github.com/Homebrew/homebrew-cask/commit/7506a05707) to
[15 September](https://github.com/Homebrew/homebrew-cask/commit/67ec5aa16a),
then skipped 23 versions in one hop. Stable is a pointer someone moves, not
a lag. Pin `minimumVersion` to the build that carries the fix you need.
Stable 2.1.267 has the September authority batch below and lacks everything
from 2.1.268 on.

**The judge moved to the server.**
[2.1.278](https://github.com/anthropics/claude-code/releases/tag/v2.1.278)
makes the server-side classifier the auto-mode default for API, Enterprise,
Bedrock, Vertex, Foundry and gateway sessions. The check rides inside the
session's own model request, and Anthropic
[stops billing for it](https://code.claude.com/docs/en/auto-mode-classifier-billing).
Four days earlier 2.1.273 had set the local classifier as the default on the
three clouds, and `CLAUDE_CODE_AUTO_MODE_SERVER` changed meaning between the
two: `=1` opted in on 15 September, `=0` opts out now. A gateway that strips
the `safeguards` request field or the `safeguard_results` response field
holds each session's first checked action on a notice, which stalls a `-p`
run. Pass both through, or set the variable to `0` and keep paying for the
local classifier. The docs call the variable temporary. Which classifier
decided shows up only in `/status` and a stream-json `system` warning; put
that in your run records.

**Auto mode is a review layer, not a wall.** Anthropic's
[permission-modes page](https://code.claude.com/docs/en/permission-modes)
lists isolation needed for hands-off auto mode as "None; a sandbox or
container adds defense in depth." On 26 August Johann Rehberger
[drove Claude Code on Opus 5 in auto mode](https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/)
from a web page to code execution, reporting 60 to 80 percent success, and
says Anthropic closed the report because auto mode is not a security
boundary. That is his account, not a vendor statement. Either way, a session
that reads untrusted content belongs in the sandbox or a container.
[2.1.271](https://github.com/anthropics/claude-code/releases/tag/v2.1.271)
also changed who proposes egress: in sandboxed auto mode the model names the
hosts a command needs, the classifier approves them with the command, and
any other host is refused with no prompt. A managed `strictAllowlist` still
overrides that.

**A clone can no longer choose your mode.**
[2.1.257](https://github.com/anthropics/claude-code/releases/tag/v2.1.257)
ignores `bypassPermissions` from project and local settings. Before it, a
`permissions.ask` rule was skipped in auto mode when the command sat inside a
compound or subshell, so an ask rule was not a human checkpoint. Dismissing
the Remote Control consent prompt counted as consent.
[2.1.251](https://github.com/anthropics/claude-code/releases/tag/v2.1.251)
took raw API body logging, tracing endpoints and `CLAUDE_CONFIG_DIR` away from
a repository's `.claude/settings.json`. Grep the repos your fleet clones for
`env` and tracing keys, and rotate anything a raw-body log could have caught.

**Test the deny rule you rely on.** Anthropic extended `Read()` deny rules
into Bash twice and
[reverted](https://github.com/anthropics/claude-code/releases/tag/v2.1.260)
[both](https://github.com/anthropics/claude-code/releases/tag/v2.1.273), each
time because a build command started failing. At 2.1.278 a deny binds on the
file tools, `< file` redirects, recognized reader commands, `tee` targets and
symlinked path spellings. It does not bind on arbitrary Bash arguments, and
lines the checker cannot parse, such as `eval`, prompt. Run `cat < .env`,
`tac .env` and `eval "cat .env"` on your build and write down what happens.
The answers differ between stable and latest.

**Managed settings fail closed, with one flip.**
[2.1.259](https://github.com/anthropics/claude-code/releases/tag/v2.1.259)
refuses to start on an unparseable managed-settings file, where before the
fleet ran silently unmanaged. Fix syntax before rolling it. The same release
stops `allowedMcpServers` filtering servers an org ships in
`managed-mcp.json`, so an excluded server loads on upgrade; move exclusions
to `deniedMcpServers`. On fleets that layer MDM over server-managed settings,
MCP deny lists were ignored until 2.1.273, which stable does not have.

**What comes in from outside.**
[2.1.275](https://github.com/anthropics/claude-code/releases/tag/v2.1.275)
syncs the skills and plugins enabled on a claude.ai account into terminal
sessions by default. An admin-installed plugin becomes code on every signed-in
machine; `syncClaudeAiPlugins: false` stops it. Two credential leaks closed
earlier:
[2.1.246](https://github.com/anthropics/claude-code/releases/tag/v2.1.246)
stopped sending a third-party gateway's API key to Anthropic's telemetry,
so rotate keys that ran before it, and 2.1.248 stopped `/ultrareview` and
seeded cloud sessions uploading uncommitted `*.tfvars` and key backups.

**Headless jobs can now refuse.**
[`--restricted`](https://github.com/anthropics/claude-code/releases/tag/v2.1.248)
strips command execution and WebFetch and reads no user or project settings.
[`--permission-prompts none`](https://github.com/anthropics/claude-code/releases/tag/v2.1.259)
turns any would-be prompt into a denial. Both are on stable. Use the first
for graders, the second for CI.

**Scaffolding came out.**
[2.1.268](https://github.com/anthropics/claude-code/releases/tag/v2.1.268)
stopped offering the task-tracking tools on current models, and
[2.1.277](https://github.com/anthropics/claude-code/releases/tag/v2.1.277)
removed TaskOutput and reads `AGENTS.md` when a project has no CLAUDE.md
(not yet on Bedrock, Vertex or Foundry). Parsers keyed on TodoWrite lose
their signal.

**Fixes arrive unannounced.** The
[advisory list](https://github.com/anthropics/claude-code/security/advisories)
has nothing since 25 June. AIR Security's Plugin4Shell was fixed in 2.1.179,
and that
[changelog entry](https://github.com/anthropics/claude-code/blob/8187baaaafb3/CHANGELOG.md)
does not mention it. Read the changelog line by line.

## What is unresolved

- **The second GitSpawn path.**
  [Manifold reports](https://www.manifold.security/blog/ai-coding-agents-git-hijack)
  an ultrareview path that ran a repository's git config before the trust
  prompt, still reproducing on 2.1.252. No changelog line through 2.1.278
  names a fix, and the silent Plugin4Shell fix means that is not proof it is
  open. A changelog line or advisory settles it. Until then, open untrusted
  repositories in a container.
- **Where the server-side classifier runs.** The billing page says it depends
  on each platform's rollout and names none.
- **Whether auto mode is a boundary.** The docs say no isolation is needed;
  the researcher says the vendor told him it is not a boundary. No vendor
  document reconciles the two.

## Profile hygiene

Dated, not evergreen. Every claim above is linked on its words to a release,
a pinned changelog commit or a docs page, and the current read comes from
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/).
This page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
