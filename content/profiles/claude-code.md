---
schema_version: bitter.frontier_profile.v0
profile_id: claude-code
label: Claude Code
owner: Anthropic
source_contract: sources/claude-code.yml
homepage: https://claude.ai/code
docs: https://code.claude.com/docs/en/overview
changelog: https://code.claude.com/docs/en/changelog
tagline: "Claude Code now resumes workflows without rerunning finished agents, while some headless defaults got stricter."
compared_with: []
x:
  project: AnthropicAI
  maintainers:
    - handle: bcherny
      name: Boris Cherny
surface_class: closed_source_release_notes
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-24
last_full_review: 2026-10-24
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
    status: retired
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
    last_verified: 2026-10-24
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
    status: retired
  - id: mods-permission-authority
    finding_id: 2026-10-13-claude-code-mods-ship-on-by-default-in-2-1-286-and-can-approve-tool-calls-deny-rules-hold-over-them
    last_verified: 2026-10-13
    status: retired
  - id: guard-ask-and-env-holds-unreleased
    finding_id: 2026-10-13-claude-code-unreleased-on-main-after-2-1-296-the-mods-guard-extends-to-ask-verdicts-and-pins-policy
    last_verified: 2026-10-13
    status: retired
  - id: auto-start-across-providers
    finding_id: 2026-10-13-claude-code-auto-mode-becomes-the-starting-mode-on-every-plan-and-provider-and-for-claude-p-on-third
    last_verified: 2026-10-13
    status: retired
  - id: server-review-and-headless-fallback
    finding_id: 2026-10-13-claude-code-the-server-side-classifier-reaches-every-direct-api-session-type-read-only-and-sandboxed
    last_verified: 2026-10-24
    status: active
  - id: managed-os-read-denial-exception
    finding_id: 2026-10-13-claude-code-managed-settings-an-os-denied-read-now-starts-sessions-without-that-source-s-policy-parse
    last_verified: 2026-10-24
    status: active
  - id: hook-failure-block-is-opt-in
    finding_id: 2026-10-13-claude-code-hooks-still-fail-open-by-default-2-1-295-adds-onfailure-block
    last_verified: 2026-10-24
    status: active
  - id: grader-late-tool-registration
    finding_id: 2026-10-13-claude-code-graders-and-unattended-runs-restricted-left-gaps-until-2-1-290-and-2-1-295-background-comm
    last_verified: 2026-10-13
    status: retired
  - id: sandbox-auto-allow-rule-tests
    finding_id: 2026-10-13-claude-code-bash-checks-deny-and-ask-rules-were-skipped-under-sandbox-auto-allow-dangerous-rm-now-time
    last_verified: 2026-10-13
    status: retired
  - id: symlink-write-destination-check
    finding_id: 2026-10-13-claude-code-symlink-writes-now-ask-about-where-they-land-instead-of-their-in-tree-spelling
    last_verified: 2026-10-13
    status: retired
  - id: cloud-review-machine-off-switch
    finding_id: 2026-10-13-claude-code-disableworkflows-no-longer-stops-cloud-reviews-unless-machine-policy-sets
    last_verified: 2026-10-24
    status: active
  - id: plan-mode-connector-ask-policy
    finding_id: 2026-10-13-claude-code-plan-mode-stops-auto-approving-mutating-connector-tools-with-a-server-ask-policy
    last_verified: 2026-10-13
    status: retired
  - id: agents-md-portability-and-instruction-limits
    finding_id: 2026-10-13-claude-code-agents-md-reaches-all-providers-in-2-1-281-managed-only-still-admits-nested-instructions
    last_verified: 2026-10-13
    status: retired
  - id: model-alias-and-provider-governance
    finding_id: 2026-10-13-claude-code-defaults-moved-to-opus-5-5-sonnet-5-5-and-haiku-5-5-new-managed-keys-pin-exact-model-versi
    last_verified: 2026-10-13
    status: retired
  - id: safety-switch-overrides-opus-pin
    finding_id: 2026-10-13-claude-code-safety-related-model-switches-can-override-a-pinned-opus-model
    last_verified: 2026-10-13
    status: retired
  - id: gateway-meter-correction
    finding_id: 2026-10-13-claude-code-the-claude-apps-gateway-spend-meter-stops-undercounting-cache-writes-and-server-tools
    last_verified: 2026-10-13
    status: retired
  - id: otel-prompt-text-masking
    finding_id: 2026-10-13-claude-code-telemetry-and-data-exposure-otel-prompt-text-gains-a-second-attribute-background-telemetry
    last_verified: 2026-10-24
    status: active
  - id: runner-system-prompt-files
    finding_id: 2026-10-13-claude-code-self-hosted-runners-pass-prompts-as-files-and-wrappers-must-use-file-flags
    last_verified: 2026-10-13
    status: retired
  - id: mcp-negotiation-default
    finding_id: 2026-10-13-claude-code-local-mcp-connections-negotiate-protocol-2026-07-28-by-default-on-latest
    last_verified: 2026-10-13
    status: retired
  - id: plugin4shell-advisory-names-fixed-build
    finding_id: 2026-10-13-claude-code-four-repository-advisories-in-fifteen-days-disclose-earlier-fixes-plugin4shell-among-them
    last_verified: 2026-10-13
    status: retired
  - id: released-policy-guard
    finding_id: 2026-10-24-claude-code-the-published-guard-now-holds-policy-asks-and-environment-pins-over-user-mods
    last_verified: 2026-10-24
    status: active
  - id: headless-mode-reversal
    finding_id: 2026-10-24-claude-code-unconfigured-headless-jobs-revert-from-auto-to-default-in-several-cases
    last_verified: 2026-10-24
    status: active
  - id: sandbox-and-shell-recovery
    finding_id: 2026-10-24-claude-code-latest-closes-more-sandbox-escape-paths-and-shell-edits-lose-a-rewind-shortcut
    last_verified: 2026-10-24
    status: active
  - id: nested-namespace-trade
    finding_id: 2026-10-24-claude-code-linux-can-admit-nested-user-namespaces-at-the-cost-of-a-sandbox-boundary
    last_verified: 2026-10-24
    status: active
  - id: ultrareview-workspace-trust
    finding_id: 2026-10-24-claude-code-ultrareview-now-refuses-untrusted-noninteractive-workspaces-unless-explicitly-trusted
    last_verified: 2026-10-24
    status: active
  - id: windows-hook-repair-set
    finding_id: 2026-10-24-claude-code-hook-failures-and-approval-paths-receive-further-fail-closed-repairs
    last_verified: 2026-10-24
    status: active
  - id: mcp-admission-retry-contract
    finding_id: 2026-10-24-claude-code-mcp-admission-and-retries-change-which-servers-start-and-which-calls-repeat
    last_verified: 2026-10-24
    status: active
  - id: eligible-idle-compaction
    finding_id: 2026-10-24-claude-code-idle-compaction-reduces-recaching-work-by-replacing-long-idle-context-with-a-summary
    last_verified: 2026-10-24
    status: retired
  - id: native-forks-and-journal-resume
    finding_id: 2026-10-24-claude-code-forked-delegation-reaches-headless-sessions-while-lifecycle-and-budget-holes-close
    last_verified: 2026-10-24
    status: active
  - id: gateway-search-and-monitors
    finding_id: 2026-10-24-claude-code-gateway-tool-search-and-provider-native-monitors-absorb-more-integration-code
    last_verified: 2026-10-24
    status: active
  - id: request-transcripts-and-leak-repairs
    finding_id: 2026-10-24-claude-code-reproduction-transcripts-gain-request-contents-while-prompt-and-gateway-key-leaks-are-repa
    last_verified: 2026-10-24
    status: active
  - id: native-safety-events
    finding_id: 2026-10-24-claude-code-safety-events-make-the-reason-for-an-interruption-easier-to-inspect
    last_verified: 2026-10-24
    status: retired
  - id: mcp-tasks-beta-contract
    finding_id: 2026-10-24-claude-code-mcp-tasks-introduces-server-owned-jobs-with-session-and-cancellation-limits
    last_verified: 2026-10-24
    status: active
  - id: hosted-review-ga
    finding_id: 2026-10-24-claude-code-hosted-code-review-leaves-preview-and-exposes-review-depth-and-stopping-controls
    last_verified: 2026-10-24
    status: active
  - id: desktop-supervision-scope
    finding_id: 2026-10-24-claude-code-desktop-documents-saved-environments-and-in-session-tasks-while-cloud-access-gets-role-con
    last_verified: 2026-10-24
    status: active
  - id: python-sdk-resume-injection
    finding_id: 2026-10-24-claude-code-python-sdk-resume-injection-enters-nvd-after-its-july-fix
    last_verified: 2026-10-24
    status: active
  - id: remote-control-sandbox-flags
    finding_id: 2026-10-24-claude-code-remote-control-rejects-two-sandbox-flags-that-previously-did-nothing
    last_verified: 2026-10-24
    status: active
  - id: deletion-and-fallback-changes
    finding_id: 2026-10-24-claude-code-deletion-prompts-narrow-while-unavailable-sandbox-write-fallbacks-are-refused
    last_verified: 2026-10-24
    status: active
  - id: policy-loading-and-transport
    finding_id: 2026-10-24-claude-code-managed-policy-refresh-and-hosted-transport-settings-gain-stricter-boundaries
    last_verified: 2026-10-24
    status: retired
  - id: mcp-name-and-redirect-rules
    finding_id: 2026-10-24-claude-code-mcp-rule-names-and-anthropic-proxy-redirects-become-stricter
    last_verified: 2026-10-24
    status: retired
  - id: skill-grants-and-hook-admission
    finding_id: 2026-10-24-claude-code-skill-grants-now-depend-more-closely-on-admitted-hooks-and-managed-settings
    last_verified: 2026-10-24
    status: retired
  - id: hook-delivery-and-model-failures
    finding_id: 2026-10-24-claude-code-plugin-hook-delivery-failures-refuse-actions-and-missing-agent-hook-models-fall-back
    last_verified: 2026-10-24
    status: active
  - id: background-policy-continuity
    finding_id: 2026-10-24-claude-code-background-restart-preserves-safe-mode-and-remote-mod-revocation-reaches-open-sessions
    last_verified: 2026-10-24
    status: retired
  - id: worktree-cleanup-retention
    finding_id: 2026-10-24-claude-code-worktree-exit-cleanup-is-repaired-where-it-could-discard-commits
    last_verified: 2026-10-24
    status: active
  - id: runner-setup-and-unknown-outcomes
    finding_id: 2026-10-24-claude-code-runner-setup-gains-a-timeout-and-interrupted-remote-tool-outcomes-become-explicit
    last_verified: 2026-10-24
    status: retired
  - id: install-channel-snapshot
    finding_id: 2026-10-24-claude-code-latest-is-2-1-310-while-the-stable-selector-remains-2-1-308
    last_verified: 2026-10-24
    status: active
posture_basis:
  capability:
    - 2026-10-13-claude-code-hooks-still-fail-open-by-default-2-1-295-adds-onfailure-block
    - 2026-10-24-claude-code-forked-delegation-reaches-headless-sessions-while-lifecycle-and-budget-holes-close
    - 2026-10-24-claude-code-gateway-tool-search-and-provider-native-monitors-absorb-more-integration-code
    - 2026-10-24-claude-code-mcp-tasks-introduces-server-owned-jobs-with-session-and-cancellation-limits
    - 2026-10-24-claude-code-hosted-code-review-leaves-preview-and-exposes-review-depth-and-stopping-controls
    - 2026-10-24-claude-code-desktop-documents-saved-environments-and-in-session-tasks-while-cloud-access-gets-role-con
  accessibility:
    - 2026-10-13-claude-code-the-server-side-classifier-reaches-every-direct-api-session-type-read-only-and-sandboxed
    - 2026-10-24-claude-code-unconfigured-headless-jobs-revert-from-auto-to-default-in-several-cases
    - 2026-10-24-claude-code-latest-is-2-1-310-while-the-stable-selector-remains-2-1-308
  governance:
    - 2026-10-13-claude-code-managed-settings-an-os-denied-read-now-starts-sessions-without-that-source-s-policy-parse
    - 2026-10-13-claude-code-hooks-still-fail-open-by-default-2-1-295-adds-onfailure-block
    - 2026-10-13-claude-code-telemetry-and-data-exposure-otel-prompt-text-gains-a-second-attribute-background-telemetry
    - 2026-10-13-claude-code-disableworkflows-no-longer-stops-cloud-reviews-unless-machine-policy-sets
    - 2026-09-21-claude-code-deny-rules-extended-into-bash-and-reverted-twice
    - 2026-10-24-claude-code-the-published-guard-now-holds-policy-asks-and-environment-pins-over-user-mods
    - 2026-10-24-claude-code-latest-closes-more-sandbox-escape-paths-and-shell-edits-lose-a-rewind-shortcut
    - 2026-10-24-claude-code-linux-can-admit-nested-user-namespaces-at-the-cost-of-a-sandbox-boundary
    - 2026-10-24-claude-code-ultrareview-now-refuses-untrusted-noninteractive-workspaces-unless-explicitly-trusted
    - 2026-10-24-claude-code-hook-failures-and-approval-paths-receive-further-fail-closed-repairs
    - 2026-10-24-claude-code-mcp-admission-and-retries-change-which-servers-start-and-which-calls-repeat
    - 2026-10-24-claude-code-reproduction-transcripts-gain-request-contents-while-prompt-and-gateway-key-leaks-are-repa
    - 2026-10-24-claude-code-python-sdk-resume-injection-enters-nvd-after-its-july-fix
    - 2026-10-24-claude-code-remote-control-rejects-two-sandbox-flags-that-previously-did-nothing
    - 2026-10-24-claude-code-deletion-prompts-narrow-while-unavailable-sandbox-write-fallbacks-are-refused
    - 2026-10-24-claude-code-plugin-hook-delivery-failures-refuse-actions-and-missing-agent-hook-models-fall-back
    - 2026-10-24-claude-code-worktree-exit-cleanup-is-repaired-where-it-could-discard-commits
stance:
  use_for: 'A bounded native-delegation pilot on 2.1.310 after <a href="#delegated-limits">testing child limits</a>.'
  avoid_for: 'Unreviewed user plugins. <a href="#mod-admission">Choose which plugins may run.</a>'
  watch_next: 'A released fix or reproducible test for <a href="#what-is-unresolved">Manifold''s GitSpawn report</a>.'
---

# Claude Code

<span id="claude-code"></span>

Claude Code [2.1.305 can resume workflows without repeating completed `pipeline()` and `parallel()` agents](https://github.com/anthropics/claude-code/releases/tag/v2.1.305). Try [built-in fork subagents, now enabled by default in headless and SDK runs](https://github.com/anthropics/claude-code/releases/tag/v2.1.302), before maintaining your own prompt-copy and restart code.

Where the built-in security plugin is active, [2.1.299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299) [by default prevents user plugins from weakening permission requests required by policy](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md#deny-rules-hold).

## Where it stands, 2026-10-24

Install [2.1.310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) using the pinned npm command below; [stable](https://registry.npmjs.org/@anthropic-ai%2fclaude-code) and the [ordinary Homebrew cask](https://github.com/Homebrew/homebrew-cask/blob/9ec411cdc7fb37ffd19f74613fe46b8859117ad0/Casks/c/claude-code.rb) [still lack repairs](https://github.com/anthropics/claude-code/releases/tag/v2.1.309). Before unattended runs, set permission modes explicitly, test policy enforcement, and [preserve recovery outside `/rewind`](https://github.com/anthropics/claude-code/releases/tag/v2.1.309). Avoid [unreviewed user plugins](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md#pinned-variables) and [nested user namespaces without adequate outer containment](https://web.archive.org/web/20261023145040/https://code.claude.com/docs/en/sandboxing). [MCP Tasks remains gated public beta](https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp); [hosted Code Review is GA for Team/Enterprise](https://claude.dev/blog/solving-code-review-at-anthropic/). [Changes on public main after 2.1.310 are documentation and comments only](https://github.com/anthropics/claude-code/compare/v2.1.310...318b7e6ac4e726e88a4ad326214866a93c373b1b).

**Channel.** Test and pin [non-prerelease 2.1.310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) with [`npm install -g @anthropic-ai/claude-code@2.1.310`](https://registry.npmjs.org/@anthropic-ai%2fclaude-code/2.1.310). At 10:18 UTC on 24 October 2026, [npm latest and next were 2.1.310; stable was 2.1.308](https://registry.npmjs.org/@anthropic-ai%2fclaude-code). The ordinary [Homebrew cask also carried 2.1.308](https://github.com/Homebrew/homebrew-cask/blob/9ec411cdc7fb37ffd19f74613fe46b8859117ad0/Casks/c/claude-code.rb), missing [2.1.309's sandbox and workspace-trust repairs](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) and [2.1.310's remaining Windows hook fix](https://github.com/anthropics/claude-code/releases/tag/v2.1.310).

## Set the policy before a job starts

**Choose the permission mode in every unattended job.** Unconfigured [`claude -p` and Agent SDK sessions now start in `default` on third-party providers, with telemetry disabled, or on a fresh install](https://github.com/anthropics/claude-code/releases/tag/v2.1.302). If the job needs auto, [pass `--permission-mode auto` explicitly](https://github.com/anthropics/claude-code/releases/tag/v2.1.302). Before launch, decide what the job may do unattended. Test an action it should refuse and one it should complete.

<span id="delegated-limits"></span>

**Test delegated limits before removing your wrappers.** [2.1.299 closes mod-prompt routes past turn and budget limits](https://github.com/anthropics/claude-code/releases/tag/v2.1.299), [2.1.304 closes further spawn/resume routes](https://github.com/anthropics/claude-code/releases/tag/v2.1.304), and [2.1.309 makes split-pane teammates inherit the leader's command-line tool deny and `--tools` rules](https://github.com/anthropics/claude-code/releases/tag/v2.1.309). Before deleting your delegation wrapper, test a child hitting its limit and attempting a denied tool. Count completed jobs and the minutes you spend approving, investigating and recovering them. Make the native path earn its keep on that total, and retain external spend controls where the job requires them.

<span id="mod-admission"></span>

**Choose which user plugins may run.** Claude Code [calls these plugins mods](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md). These [plugins can start processes with your access; environment pins do not contain their code](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md#pinned-variables). The [guard depends on managed policy or the relevant Team/Enterprise sign-in](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md). To reject user mods on load or reload, [set `allowManagedModsOnly: true` under the built-in guard's managed `pluginConfigs` options](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md#options-an-administrator-sets). [Administrators can relax the verdict holds; ordinary permission-dialog asks are not universally protected](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md).

**Keep consequential approvals person-only when the job demands it.** [2.1.304 adds `decider: "person"`, refusing when neither a dialog nor host callback can answer](https://github.com/anthropics/claude-code/releases/tag/v2.1.304). Regenerate installed mod types before using it: [2.1.310's public mirror still lists only `host`](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/types/claude-code.d.ts#L10130).

**Check policy as the account running the job.** [When no admin source supplies policy, an OS-denied managed-settings read is reported and skipped; other read failures stop startup](https://web.archive.org/web/20261017104632/https://code.claude.com/docs/en/managed-settings). Check which policy sources loaded before relying on their restrictions.

**Test that policy-hook failures block actions.** Set [`onFailure: "block"` on applicable command or HTTP hooks; continuing remains the general default](https://web.archive.org/web/20261019030048/https://code.claude.com/docs/en/hooks). On Windows, test missing Git, PowerShell exits and quoted executable paths against [2.1.309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) and [2.1.310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310). [PermissionRequest needs decision JSON to deny a call; exit 2 does not deny it](https://web.archive.org/web/20261019030048/https://code.claude.com/docs/en/hooks). [Failed plugin-event delivery can withhold an already-run tool's result](https://github.com/anthropics/claude-code/releases/tag/v2.1.299). Reconcile the tool's effects before retrying.

## Choose the containment and recovery boundary

**Test the containment paths your commands use.** [2.1.309 repairs shell startup outside the sandbox on macOS/Linux, MCP-config writes, macOS symlinked write denies and Linux write denies on background commands that outlive the session](https://github.com/anthropics/claude-code/releases/tag/v2.1.309). Test those paths with disposable targets. [File deny rules cover recognized shell commands and redirects, not arbitrary Python/Node file access or recursive commands that omit the target](https://web.archive.org/web/20261023144933/https://code.claude.com/docs/en/permissions). Keep a process boundary around untrusted code.

**Leave nested user namespaces off unless an outer boundary is adequate.** The opt-in [`sandbox.allowNestedUserNamespaces` can enable Chromium/Electron workloads while letting malicious commands escape Claude Code's restrictions, including protected paths and credential-file rules](https://web.archive.org/web/20261023145040/https://code.claude.com/docs/en/sandboxing). The [setting alone is insufficient for rootless Podman or Buildah](https://web.archive.org/web/20261023145040/https://code.claude.com/docs/en/sandboxing).

**Check the Python SDK separately from the CLI.** When an application forwards an untrusted resume ID, [claude-agent-sdk below 0.2.121 lets an attacker inject MCP configuration and execute commands at startup outside SDK permission controls; use 0.2.121 or later](https://github.com/anthropics/claude-agent-sdk-python/security/advisories/GHSA-h4mw-j7qp-8mwm). The [fix shipped on 17 July 2026](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.121); [16 October 2026 was its NVD publication](https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2026-96620). Check that dependency even when upgrading the CLI.

**Inspect the MCP servers admitted after upgrading.** From [2.1.305, managed stdio definitions whose substitutions occur only in `env` are no longer filtered by `allowedMcpServers`](https://github.com/anthropics/claude-code/releases/tag/v2.1.305). Compare connected servers with policy intent and [use `deniedMcpServers` for explicit prohibitions](https://github.com/anthropics/claude-code/releases/tag/v2.1.305).

**Remove obsolete Remote Control flags.** [`claude remote-control` now rejects `--sandbox` and `--no-sandbox`, which previously did nothing; use `sandbox.enabled`](https://github.com/anthropics/claude-code/releases/tag/v2.1.300). Check launch wrappers before upgrading.

**Recheck deletion policy that depended on prompts.** [2.1.299 stops prompting for runtime-built `rm` in unreadable scripts unless `CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT=1` is set](https://github.com/anthropics/claude-code/releases/tag/v2.1.299). In Desktop and VS Code bypass mode, [2.1.309 instead makes dangerous rm/rmdir prompts deny immediately with a rewrite hint](https://github.com/anthropics/claude-code/releases/tag/v2.1.309). Test the intended refusals before leaving those jobs unattended.

**Keep recovery independent of session cleanup.** [`sed -i` is now ordinary Bash work, so `/rewind` no longer restores its edits](https://github.com/anthropics/claude-code/releases/tag/v2.1.309). Keep a diff or version-control recovery route. Test retention too: [2.1.301 repairs cleanup of hook-created worktrees with possible unpushed commits](https://github.com/anthropics/claude-code/releases/tag/v2.1.301), and [2.1.304 repairs commit-loss paths after detached HEAD or branch changes](https://github.com/anthropics/claude-code/releases/tag/v2.1.304).

**Inspect diagnostic exports before sharing them.** [2.1.300 adds system prompts, tools and API request parameters to local transcripts](https://github.com/anthropics/claude-code/releases/tag/v2.1.300). Limit transcript retention and sharing, and [mask both OTel `prompt` and `prompt_text`](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1298).

## Decide which wrappers the native tools can replace

**Try MCP Tasks only with a recovery plan.** The [gated public beta requires 2.1.304+, flag fetching, a supporting protocol-2026-07-28 server and eligible main-conversation CLI/SDK/GitHub Actions calls; one-shot `claude -p`, third-party providers, telemetry-off sessions, Desktop and VS Code are excluded](https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp). [Streaming headless sessions also need open input and the documented background settings](https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp). Eligible [remote tasks survive client exit and can be followed by resuming the same session](https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp). Preserve server, connection and session identity. [Cancellation cannot guarantee stopped effects; expired unknown outcomes need server-side reconciliation](https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp).

**Test native waiting before maintaining another polling loop.** [2.1.310 makes Monitor available on Bedrock, Vertex, Foundry and telemetry-off sessions, which now also block long foreground sleeps](https://github.com/anthropics/claude-code/releases/tag/v2.1.310). Test that provider path before replacing sleep-based waits.

**Measure hosted review against human review time.** [Hosted Code Review became GA for Team/Enterprise on 15 October 2026](https://claude.dev/blog/solving-code-review-at-anthropic/). Choose [Quick, Standard or Deep per repository; Standard is default, and the service neither approves nor blocks a PR](https://web.archive.org/web/20261017030656/https://code.claude.com/docs/en/code-review). Count missed bugs, useful comments and reviewer minutes before retiring PR-comment automation. Include the time spent dismissing bad comments. Keep the service only if the review queue gets shorter without letting more bugs through.

**Set review prohibitions on the machine running the review.** [Code Review PR reviews and ultrareview run despite `disableWorkflows` unless that machine's MDM or managed-settings file sets it](https://github.com/anthropics/claude-code/blob/v2.1.308/CHANGELOG.md#L1580). For a no-upload policy, test upload prevention separately.

**Check which sessions Desktop can supervise.** The [Code tab documents saved environments, parallel sessions and in-session subagents, background shell commands and dynamic workflows](https://web.archive.org/web/20261023144411/https://code.claude.com/docs/en/desktop). Its [cross-session view covers Desktop-run local/SSH/WSL sessions, excluding cloud, terminal CLI and VS Code](https://web.archive.org/web/20261023144411/https://code.claude.com/docs/en/desktop). Test that coverage before replacing a broader dashboard.

## What is unresolved

- **Trust received repositories deliberately.** [2.1.309 adds ultrareview workspace trust and noninteractive refusal unless explicitly trusted](https://github.com/anthropics/claude-code/releases/tag/v2.1.309). Decide before adding `--trust-workspace` to CI. Protection for [Manifold's withheld GitSpawn configuration](https://www.manifold.security/blog/ai-coding-agents-git-hijack) remains unverified here. A released fix naming it or a reproducible test on the pinned build would settle that question.

- **Check who reviews your sessions and what it costs.** [Server-side auto review remains rollout dependent](https://web.archive.org/web/20261022024756/https://code.claude.com/docs/en/permission-modes). A readable current billing contract and matched session, fallback and billing records would settle coverage and cost. The detailed [21 September 2026 gateway-warning guidance](https://web.archive.org/web/20260921092459/https://code.claude.com/docs/en/auto-mode-classifier-billing) remains historical here.

- **Prove task recovery with the intended server.** Record handles and external outcomes across disconnect, resume, cancellation and expiry under the [MCP Tasks lifecycle](https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp). Use those trials to check whether a consequential job recovers without duplicating work.

## Profile hygiene

This page describes the 24 October 2026 posture, with no claim about later releases
or rollouts. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md)
for the evidence contract.
