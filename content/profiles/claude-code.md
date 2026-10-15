---
schema_version: bitter.frontier_profile.v0
profile_id: claude-code
label: Claude Code
owner: Anthropic
source_contract: sources/claude-code.yml
homepage: https://claude.ai/code
docs: https://code.claude.com/docs/en/overview
changelog: https://code.claude.com/docs/en/changelog
tagline: "Claude Code can answer routine prompts; its plugins can answer first."
compared_with: []
x:
  project: AnthropicAI
  maintainers:
    - handle: bcherny
      name: Boris Cherny
surface_class: closed_source_release_notes
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: server-side-classifier-default
    finding_id: 2026-09-21-claude-code-2-1-278-auto-mode-classifier-moves-server-side-by-default
    last_verified: 2026-10-13
    status: retired
  - id: stable-pointer-jump
    finding_id: 2026-09-21-claude-code-stable-froze-on-2-1-236-for-eighteen-days-then-jumped-to-2-1-267
    last_verified: 2026-09-23
    status: retired
  - id: project-bypass-ignored
    finding_id: 2026-09-21-claude-code-2-1-257-authority-batch-project-bypass-ignored-ask-rules-skipped-in-auto
    last_verified: 2026-10-13
    status: retired
  - id: gitspawn-second-path
    finding_id: 2026-09-21-claude-code-gitspawn-ultrareview-path-ran-repo-git-config-before-trust-no-fix-named-through-2-1-278
    last_verified: 2026-10-13
    status: active
  - id: macos-read-deny-and-mcp-headershelper
    finding_id: 2026-08-20-claude-code-2-1-236-macos-read-deny-wildcards-bind-2-1-238-trust-gates-mcp-headershelper
    last_verified: 2026-10-13
    status: retired
  - id: ultrareview-cloud-review
    finding_id: 2026-05-06-claude-code-review-recap-plugin-surfaces
    last_verified: 2026-10-13
    status: retired
  - id: session-recap-on-return
    finding_id: 2026-05-06-claude-code-review-recap-plugin-surfaces
    last_verified: 2026-10-13
    status: retired
  - id: agent-view-multi-session
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-10-13
    status: retired
  - id: goal-completion-primitive
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-10-13
    status: retired
  - id: hook-continueonblock
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-10-13
    status: retired
  - id: subagent-attribution-headers
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-10-13
    status: retired
  - id: auto-mode-hard-deny
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-10-13
    status: retired
  - id: api-key-cloud-surface-boundary
    finding_id: 2026-05-12-claude-code-agent-view-goal-and-governance
    last_verified: 2026-10-13
    status: retired
  - id: auto-mode-default-on
    finding_id: 2026-05-27-claude-code-auto-mode-default-on
    last_verified: 2026-05-27
    status: retired
  - id: skill-disallowed-tools
    finding_id: 2026-05-27-claude-code-auto-mode-default-on
    last_verified: 2026-10-13
    status: retired
  - id: message-display-hook
    finding_id: 2026-05-27-claude-code-auto-mode-default-on
    last_verified: 2026-10-13
    status: retired
  - id: sandbox-and-enforcement-fix-cluster
    finding_id: 2026-05-27-claude-code-powershell-and-worktree-sandbox-fixes
    last_verified: 2026-10-13
    status: retired
  - id: permission-rule-enforcement-cluster
    finding_id: 2026-06-03-claude-code-webfetch-permission-rules
    last_verified: 2026-10-13
    status: retired
  - id: foreground-subagent-depth-enforcement-gap
    finding_id: 2026-06-23-claude-code-foreground-subagent-depth-limit
    last_verified: 2026-10-13
    status: retired
  - id: agent-permission-rule-enforcement-gap
    finding_id: 2026-06-23-claude-code-agent-permission-rules-enforced
    last_verified: 2026-10-13
    status: retired
  - id: auto-mode-destructive-command-denylist
    finding_id: 2026-06-23-claude-code-auto-mode-destructive-command-blocks
    last_verified: 2026-10-13
    status: retired
  - id: trigger-input-classification-fix
    finding_id: 2026-06-23-claude-code-scheduled-trigger-input-classification
    last_verified: 2026-10-13
    status: retired
  - id: background-subagent-prompt-to-main
    finding_id: 2026-06-23-claude-code-background-subagent-permission-prompts
    last_verified: 2026-10-13
    status: retired
  - id: mcp-cli-login-logout
    finding_id: 2026-06-23-claude-code-mcp-cli-login-logout
    last_verified: 2026-10-13
    status: retired
  - id: repo-settings-lose-tracing-and-env
    finding_id: 2026-09-21-claude-code-2-1-251-repository-settings-lose-tracing-env-and-a-symlink-toctou-closes
    last_verified: 2026-10-13
    status: retired
  - id: per-command-egress-hosts
    finding_id: 2026-09-21-claude-code-2-1-271-model-names-its-own-egress-hosts-subagent-output-framed-as-subagent
    last_verified: 2026-10-13
    status: retired
  - id: deny-rules-extended-and-reverted
    finding_id: 2026-09-21-claude-code-deny-rules-extended-into-bash-and-reverted-twice
    last_verified: 2026-10-13
    status: active
  - id: auto-mode-starting-mode-isolation-none
    finding_id: 2026-09-21-claude-code-auto-mode-is-the-starting-mode-and-docs-list-isolation-needed-none
    last_verified: 2026-09-23
    status: retired
  - id: claude-ai-skills-plugins-sync
    finding_id: 2026-09-21-claude-code-claude-ai-skills-and-plugins-sync-into-terminal-sessions-by-default
    last_verified: 2026-10-13
    status: retired
  - id: managed-lists-fail-closed
    finding_id: 2026-09-21-claude-code-managed-mcp-and-policy-lists-go-fail-closed-allowedmcpservers-semantics-flip
    last_verified: 2026-09-23
    status: retired
  - id: agents-md-and-task-tools-removed
    finding_id: 2026-09-21-claude-code-agents-md-support-and-task-scaffolding-removed-for-current-models
    last_verified: 2026-09-23
    status: retired
  - id: gateway-key-telemetry-and-cloud-uploads
    finding_id: 2026-09-21-claude-code-gateway-key-sent-to-telemetry-and-credential-files-uploaded-to-cloud-sessions
    last_verified: 2026-10-13
    status: retired
  - id: effort-model-cost-governance
    finding_id: 2026-09-21-claude-code-effort-model-and-cost-governance-and-claude-plugin-eval
    last_verified: 2026-10-13
    status: retired
  - id: plugin4shell-silent-fix
    finding_id: 2026-09-21-claude-code-plugin4shell-disclosed-in-window-fix-shipped-in-2-1-179-with-a-silent-changelog
    last_verified: 2026-09-23
    status: retired
  - id: restricted-and-prompts-none
    finding_id: 2026-09-21-claude-code-restricted-and-permission-prompts-none-refuse-instead-of-asking
    last_verified: 2026-10-13
    status: retired
  - id: install-and-channel-lag
    finding_id: 2026-10-13-claude-code-stable-moved-seven-times-in-small-steps-once-about-a-day-after-publish-it-now-serves-2-1
    last_verified: 2026-10-13
    status: active
  - id: mods-permission-authority
    finding_id: 2026-10-13-claude-code-mods-ship-on-by-default-in-2-1-286-and-can-approve-tool-calls-deny-rules-hold-over-them
    last_verified: 2026-10-13
    status: active
  - id: guard-ask-and-env-holds-unreleased
    finding_id: 2026-10-13-claude-code-unreleased-on-main-after-2-1-296-the-mods-guard-extends-to-ask-verdicts-and-pins-policy
    last_verified: 2026-10-13
    status: active
  - id: auto-start-across-providers
    finding_id: 2026-10-13-claude-code-auto-mode-becomes-the-starting-mode-on-every-plan-and-provider-and-for-claude-p-on-third
    last_verified: 2026-10-13
    status: active
  - id: server-review-and-headless-fallback
    finding_id: 2026-10-13-claude-code-the-server-side-classifier-reaches-every-direct-api-session-type-read-only-and-sandboxed
    last_verified: 2026-10-13
    status: active
  - id: managed-os-read-denial-exception
    finding_id: 2026-10-13-claude-code-managed-settings-an-os-denied-read-now-starts-sessions-without-that-source-s-policy-parse
    last_verified: 2026-10-13
    status: active
  - id: hook-failure-block-is-opt-in
    finding_id: 2026-10-13-claude-code-hooks-still-fail-open-by-default-2-1-295-adds-onfailure-block
    last_verified: 2026-10-13
    status: active
  - id: grader-late-tool-registration
    finding_id: 2026-10-13-claude-code-graders-and-unattended-runs-restricted-left-gaps-until-2-1-290-and-2-1-295-background-comm
    last_verified: 2026-10-13
    status: active
  - id: sandbox-auto-allow-rule-tests
    finding_id: 2026-10-13-claude-code-bash-checks-deny-and-ask-rules-were-skipped-under-sandbox-auto-allow-dangerous-rm-now-time
    last_verified: 2026-10-13
    status: active
  - id: symlink-write-destination-check
    finding_id: 2026-10-13-claude-code-symlink-writes-now-ask-about-where-they-land-instead-of-their-in-tree-spelling
    last_verified: 2026-10-13
    status: retired
  - id: cloud-review-machine-off-switch
    finding_id: 2026-10-13-claude-code-disableworkflows-no-longer-stops-cloud-reviews-unless-machine-policy-sets
    last_verified: 2026-10-13
    status: active
  - id: plan-mode-connector-ask-policy
    finding_id: 2026-10-13-claude-code-plan-mode-stops-auto-approving-mutating-connector-tools-with-a-server-ask-policy
    last_verified: 2026-10-13
    status: retired
  - id: agents-md-portability-and-instruction-limits
    finding_id: 2026-10-13-claude-code-agents-md-reaches-all-providers-in-2-1-281-managed-only-still-admits-nested-instructions
    last_verified: 2026-10-13
    status: active
  - id: model-alias-and-provider-governance
    finding_id: 2026-10-13-claude-code-defaults-moved-to-opus-5-5-sonnet-5-5-and-haiku-5-5-new-managed-keys-pin-exact-model-versi
    last_verified: 2026-10-13
    status: active
  - id: safety-switch-overrides-opus-pin
    finding_id: 2026-10-13-claude-code-safety-related-model-switches-can-override-a-pinned-opus-model
    last_verified: 2026-10-13
    status: active
  - id: gateway-meter-correction
    finding_id: 2026-10-13-claude-code-the-claude-apps-gateway-spend-meter-stops-undercounting-cache-writes-and-server-tools
    last_verified: 2026-10-13
    status: retired
  - id: otel-prompt-text-masking
    finding_id: 2026-10-13-claude-code-telemetry-and-data-exposure-otel-prompt-text-gains-a-second-attribute-background-telemetry
    last_verified: 2026-10-13
    status: active
  - id: runner-system-prompt-files
    finding_id: 2026-10-13-claude-code-self-hosted-runners-pass-prompts-as-files-and-wrappers-must-use-file-flags
    last_verified: 2026-10-13
    status: active
  - id: mcp-negotiation-default
    finding_id: 2026-10-13-claude-code-local-mcp-connections-negotiate-protocol-2026-07-28-by-default-on-latest
    last_verified: 2026-10-13
    status: active
  - id: plugin4shell-advisory-names-fixed-build
    finding_id: 2026-10-13-claude-code-four-repository-advisories-in-fifteen-days-disclose-earlier-fixes-plugin4shell-among-them
    last_verified: 2026-10-13
    status: active
posture_basis:
  capability:
    - 2026-10-13-claude-code-mods-ship-on-by-default-in-2-1-286-and-can-approve-tool-calls-deny-rules-hold-over-them
    - 2026-10-13-claude-code-hooks-still-fail-open-by-default-2-1-295-adds-onfailure-block
    - 2026-10-13-claude-code-agents-md-reaches-all-providers-in-2-1-281-managed-only-still-admits-nested-instructions
    - 2026-10-13-claude-code-local-mcp-connections-negotiate-protocol-2026-07-28-by-default-on-latest
    - 2026-10-13-claude-code-self-hosted-runners-pass-prompts-as-files-and-wrappers-must-use-file-flags
  accessibility:
    - 2026-10-13-claude-code-auto-mode-becomes-the-starting-mode-on-every-plan-and-provider-and-for-claude-p-on-third
    - 2026-10-13-claude-code-the-server-side-classifier-reaches-every-direct-api-session-type-read-only-and-sandboxed
    - 2026-10-13-claude-code-stable-moved-seven-times-in-small-steps-once-about-a-day-after-publish-it-now-serves-2-1
  governance:
    - 2026-10-13-claude-code-mods-ship-on-by-default-in-2-1-286-and-can-approve-tool-calls-deny-rules-hold-over-them
    - 2026-10-13-claude-code-unreleased-on-main-after-2-1-296-the-mods-guard-extends-to-ask-verdicts-and-pins-policy
    - 2026-10-13-claude-code-four-repository-advisories-in-fifteen-days-disclose-earlier-fixes-plugin4shell-among-them
    - 2026-10-13-claude-code-managed-settings-an-os-denied-read-now-starts-sessions-without-that-source-s-policy-parse
    - 2026-10-13-claude-code-hooks-still-fail-open-by-default-2-1-295-adds-onfailure-block
    - 2026-10-13-claude-code-bash-checks-deny-and-ask-rules-were-skipped-under-sandbox-auto-allow-dangerous-rm-now-time
    - 2026-10-13-claude-code-graders-and-unattended-runs-restricted-left-gaps-until-2-1-290-and-2-1-295-background-comm
    - 2026-10-13-claude-code-telemetry-and-data-exposure-otel-prompt-text-gains-a-second-attribute-background-telemetry
    - 2026-10-13-claude-code-defaults-moved-to-opus-5-5-sonnet-5-5-and-haiku-5-5-new-managed-keys-pin-exact-model-versi
    - 2026-10-13-claude-code-disableworkflows-no-longer-stops-cloud-reviews-unless-machine-policy-sets
    - 2026-10-13-claude-code-safety-related-model-switches-can-override-a-pinned-opus-model
    - 2026-09-21-claude-code-deny-rules-extended-into-bash-and-reverted-twice
    - 2026-09-21-claude-code-gitspawn-ultrareview-path-ran-repo-git-config-before-trust-no-fix-named-through-2-1-278
stance:
  use_for: 'Terminal and background coding jobs with an explicit permission policy. <a href="#make-unattended-policy-explicit">Choose the mode for each job.</a>'
  avoid_for: 'Work where unreviewed plugins make permission decisions. <a href="#review-plugins-before-delegating-permission-checks">Review plugin admission and containment.</a>'
  watch_next: 'A published guard update. <a href="#what-is-unresolved">Check which controls reached a release.</a>'
---

# Claude Code

<span id="claude-code"></span>

From [2.1.286, mods load by default](https://web.archive.org/web/20261012024958/https://code.claude.com/docs/en/plugins/mods/admin). Mods are [plugin code that can answer permission checks](https://web.archive.org/web/20261012012019/https://code.claude.com/docs/en/plugins/mods/overview). A mod can [approve over an ask rule or non-managed PreToolUse block and skip the classifier](https://web.archive.org/web/20261012180805/https://code.claude.com/docs/en/permissions#extend-permissions-with-hooks). Admitting a plugin now includes deciding whether its code may answer permission questions.

## Where it stands, 2026-10-13

Install [latest 2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296) with `npm install -g @anthropic-ai/claude-code@2.1.296` for jobs relying on mods, policy hooks or restricted tool sets. The upgrade brings [hook-failure blocking and restrictions on built-ins registered after launch, added in 2.1.295](https://github.com/anthropics/claude-code/releases/tag/v2.1.295). At this date, [stable was 2.1.287](https://github.com/Homebrew/homebrew-cask/commit/a1326862d9154547bcda62a60c007b734cf36dc4).

## Review plugins before delegating permission checks

**Treat plugins as permission code.** [Review their approval authority](https://web.archive.org/web/20261012180805/https://code.claude.com/docs/en/permissions#extend-permissions-with-hooks) before enabling them. [2.1.287 ignores the old `CLAUDE_CODE_ENABLE_FUNCTION_HOOKS=0` off switch](https://web.archive.org/web/20261012012019/https://code.claude.com/docs/en/plugins/mods/overview).

**Make machine policy readable.** In [2.1.285+, an OS-denied managed-settings read warns and starts without that source's policy; parse errors and other read errors still stop sessions](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L920). If no other admin source supplies policy, [the session runs unmanaged](https://web.archive.org/web/20261011174406/https://code.claude.com/docs/en/managed-settings). Check permissions as the account running Claude Code and alert on the [read-failure notices in `/status` and `-p` stderr](https://web.archive.org/web/20261011174406/https://code.claude.com/docs/en/managed-settings).

**On managed fleets, reject user mods.** With the built-in guard loaded, set [`pluginConfigs["cc-plugin-sec-default@builtin"].options.allowManagedModsOnly: true` in managed settings](https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/sec-default/README.md#options-an-administrator-sets). Set managed [`requiredMinimumVersion`](https://web.archive.org/web/20261012152039/https://code.claude.com/docs/en/settings-reference#requiredminimumversion) to 2.1.296 for the [guard repair stable lacks](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L450). Before adding [`disableSideloadFlags`, check CI: it also rejects `--agents` and `--mcp-config`](https://web.archive.org/web/20261012024958/https://code.claude.com/docs/en/plugins/mods/admin).

**On unmanaged machines, remove unreviewed mods.** Without managed settings or a Team/Enterprise sign-in, a mod can [approve over a deny rule](https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/sec-default/README.md#deny-rules-hold). Inspect [`claude plugin validate` for `tool.check`](https://web.archive.org/web/20261012024958/https://code.claude.com/docs/en/plugins/mods/admin), or use [`--safe-mode` or `disableAllHooks: true`; built-in mods remain](https://web.archive.org/web/20261012012019/https://code.claude.com/docs/en/plugins/mods/overview). Review the hooks before enabling the mod.

On either kind of machine, contain the process: [mods run unsandboxed and tool deny rules do not cover their own filesystem and process calls](https://web.archive.org/web/20261012024958/https://code.claude.com/docs/en/plugins/mods/admin).

## Make unattended policy explicit

**Set the CI permission mode per job.** Unconfigured [terminal and VS Code sessions default to auto across plans and providers](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1112); from 2.1.285, so do [third-party and telemetry-off `-p` and Python Agent SDK sessions](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1002). Without an explicit mode, [headless sessions fetching flags and sessions eligible for the HIPAA configuration default to `default`](https://web.archive.org/web/20261012151817/https://code.claude.com/docs/en/permission-modes#which-mode-a-session-starts-in). Pass `--permission-mode` explicitly. For auto jobs, use Anthropic's own [pattern pairing the classifier with an enforced egress allowlist](https://github.com/anthropics/claude-code/blob/2301018b1f61/CLAUDE.md). Decide whether this job may use server-side permission review, then confirm coverage using the [checks under What is unresolved](#what-is-unresolved).

**Let policy hooks block their own failures.** [Use the release named above](https://github.com/anthropics/claude-code/releases/tag/v2.1.296). For synchronous command or HTTP `PreToolUse` policy hooks, [set `onFailure: "block"`](https://web.archive.org/web/20261011225234/https://code.claude.com/docs/en/hooks#block-the-action-when-a-hook-fails) and test failure and timeout behavior; [the default remains continue](https://web.archive.org/web/20261011225234/https://code.claude.com/docs/en/hooks#block-the-action-when-a-hook-fails). Once those tests pass, retire wrappers that only catch those failures.

**[Use 2.1.296 for unattended grading jobs that depend on restricted tool sets](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L123).** Retain containment.

**Test the command shape your rule must block.** [2.1.289 repairs sandbox auto-allow skipping deny and ask rules after `X=1; rm -rf build` or `TZ="$HOME" rm -rf build`](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L603-L604). Test both with disposable targets. [Read and Edit denies still do not cover arbitrary subprocesses](https://web.archive.org/web/20261012180805/https://code.claude.com/docs/en/permissions#bash-rule-limits); keep a sandbox or container.

**Preserve gateway review fields and alert on fallback.** On billed accounts, a gateway that strips review fields [makes `-p` continue on local checks; a gateway acknowledgment on the same machine within 24 hours suppresses the stderr notice](https://web.archive.org/web/20260921092459/https://code.claude.com/docs/en/auto-mode-classifier-billing). Pass [`safeguards` and `safeguard_results` through](https://web.archive.org/web/20260921092459/https://code.claude.com/docs/en/auto-mode-classifier-billing). Do not rely on timeout alerts for this change of judge and cost.

## Check data boundaries and integration costs

**Put the cloud-review stop on the reviewing machine.** From [2.1.285, Code Review PR reviews and `/ultrareview` run despite `disableWorkflows` unless MDM or that machine's managed-settings file sets it](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L997). To disable those reviews, deploy `disableWorkflows: true` there and verify it loads. Verify upload prevention separately before relying on this setting for a no-upload policy.

**Mask both prompt attributes.** [2.1.287 adds `prompt_text` as a copy of `prompt` on the OTel `user_prompt` event](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L715). Add it to every masking or drop rule that covers `prompt`.

**Pin intended models and record served identity.** Pro and Team Standard [changed from Sonnet to Opus](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1597), whose [default is 5.5](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1520). Set `model` if you intended Sonnet. For evals, pin full IDs. In managed settings, pair an [`availableModels` allowlist with `availableModelsMatch: "exact"`](https://github.com/anthropics/claude-code/releases/tag/v2.1.283) to make later versions a deliberate choice. Record the returned model: [safety-triggered Opus switches on the Anthropic API can override `ANTHROPIC_DEFAULT_OPUS_MODEL` or `modelOverrides`](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1116).

**Retire AGENTS.md forwarding shims.** [2.1.281 reads AGENTS.md across providers and telemetry-off sessions](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1477). Once fleet pins support it, delete CLAUDE.md files that only forward to it. If you keep local notes, [CLAUDE.local.md suppresses AGENTS.md under the default; set Project instructions to `claude-md-and-agents-md` to read both](https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/agents-md/README.md).

**Use file flags in runner wrappers.** [2.1.281 passes self-hosted runner system prompts as private files, allowing large prompts to launch](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1479). Change wrappers and command hooks to [pass prompt files with `--system-prompt-file` or `--append-system-prompt-file`](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1479).

**Test MCP handshakes before fleet rollout.** [2.1.292 makes local stdio connections negotiate protocol 2026-07-28 by default](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L368); [2.1.295 extends it to claude.ai connectors without flag fetching](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L202). Use [`MCP_PROTOCOL_NEGOTIATION=legacy`](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L368) for compatibility while fixing a handshake.

**Read repository advisories alongside release notes.** The [9 October 2026 advisory for the plugin commit-pin bypass names a fix in 2.1.179](https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv) that [its changelog did not name](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L4369).

## What is unresolved

- **Wait for released guard checks before relying on them.** [Additional guard checks that stop user mods from overriding some requests for permission or changing policy and code-loading environment variables](https://github.com/anthropics/claude-code/blob/bf2323b3021c9d3db7a31e1e7d61068c3f704497/mods/sec-default/README.md) [were main-only at this date](https://github.com/anthropics/claude-code/compare/v2.1.296...bf2323b3021c9d3db7a31e1e7d61068c3f704497). A release note and matching published binary would confirm delivery. The [environment pin explicitly does not stop hostile plugins](https://github.com/anthropics/claude-code/blob/bf2323b3021c9d3db7a31e1e7d61068c3f704497/mods/sec-default/README.md#pinned-variables), so shipping it would not settle which mods to admit.
- **Check protection before using `claude ultrareview` on received repository bundles.** [Manifold reported a repository-supplied command running on the host before workspace trust, still confirmed on 2.1.252 on 1 September 2026](https://www.manifold.security/blog/ai-coding-agents-git-hijack); [no line through 2.1.296 names its fix](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md). Protection for a reported /ultrareview security issue remains unverified on the recommended build. A released fix naming the path or a reproducible test on the fleet's pinned build would settle protection there.
- **Confirm server review in the sessions you depend on.** [Server-side review covers direct-API headless, SDK and IDE session types as the rollout reaches them](https://web.archive.org/web/20261012151817/https://code.claude.com/docs/en/permission-modes#server-side-classifier-review). Platform and region coverage remain unverified here. Capture the [/status Auto mode server row and stream-json warning](https://web.archive.org/web/20260921092459/https://code.claude.com/docs/en/auto-mode-classifier-billing) on each platform in use. Those readouts establish coverage for the observed sessions. A supported version alone does not.

Claude Code is absorbing pieces of the surrounding workflow: [instruction forwarding](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1477) and [hook-failure handling](https://github.com/anthropics/claude-code/releases/tag/v2.1.295). Retire those wrappers after the checks above pass. Spend the judgment on [which plugins may approve a command](https://web.archive.org/web/20261012180805/https://code.claude.com/docs/en/permissions#extend-permissions-with-hooks) and what contains the process once it runs.

## Profile hygiene

This page describes the 2026-10-13 posture, with no claim about later releases
or rollouts. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md)
for the evidence contract.
