---
schema_version: bitter.frontier_profile.v0
profile_id: codex
label: Codex
owner: OpenAI
source_contract: sources/codex.yml
homepage: https://developers.openai.com/codex/
docs: https://learn.chatgpt.com/docs
changelog: https://learn.chatgpt.com/docs/changelog
repo: https://github.com/openai/codex
tagline: "Codex 0.164.0 deserves a recovery trial before another conversation supervisor."
compared_with: []
x:
  project: OpenAICodexCli
surface_class: mixed_official_docs
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-24
last_full_review: 2026-10-24
claims:
  - id: default-model-hotfix
    finding_id: 2026-09-21-codex-default-model-moved-to-gpt-6-astra-in-the-0-153-x-hotfix-train-not-in-a-minor
    last_verified: 2026-09-23
    status: retired
  - id: mcp-server-removed
    finding_id: 2026-09-21-codex-codex-mcp-server-removed-app-server-is-the-only-integration-path-and-it-is-officially-expe
    last_verified: 2026-10-13
    status: retired
  - id: guardian-v2-still-off
    finding_id: 2026-09-21-codex-guardian-v2-stayed-off-by-default-in-every-stable-of-the-window-carry-forward
    last_verified: 2026-10-13
    status: retired
  - id: goal-persistent-validation
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-10-13
    status: retired
  - id: goal-lifecycle-metrics
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-10-13
    status: retired
  - id: mcp-memory-spawn
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: retired
  - id: session-id-tracking
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-10-13
    status: retired
  - id: mcp-thread-metadata
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-10-13
    status: retired
  - id: plugin-share-access-controls
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-05-07
    status: retired
  - id: linux-sandbox-bundled
    finding_id: 2026-05-07-codex-stateful-control-plane
    last_verified: 2026-10-13
    status: retired
  - id: permissions-approval-tui-visible
    finding_id: 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    last_verified: 2026-10-13
    status: retired
  - id: plugin-share-role-aware
    finding_id: 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    last_verified: 2026-05-11
    status: retired
  - id: skills-watcher-app-server
    finding_id: 2026-05-11-codex-permissions-visibility-and-plugin-share-evolution
    last_verified: 2026-05-11
    status: retired
  - id: pretooluse-input-rewrite
    finding_id: 2026-05-12-codex-pretooluse-input-rewrite
    last_verified: 2026-10-13
    status: retired
  - id: goal-mode-default-on
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-10-13
    status: retired
  - id: remote-computer-use-after-lock
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-06-23
    status: retired
  - id: chronicle-screen-context-preview
    finding_id: 2026-06-23-codex-eea-uk-swiss-feature-rollout
    last_verified: 2026-06-23
    status: retired
  - id: developer-mode-cdp-boundary
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-06-23
    status: retired
  - id: plugin-marketplace-sharing
    finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
    last_verified: 2026-05-27
    status: retired
  - id: permission-profile-inheritance
    finding_id: 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    last_verified: 2026-10-13
    status: retired
  - id: managed-requirements-toml
    finding_id: 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    last_verified: 2026-10-13
    status: retired
  - id: profile-flag-canonical
    finding_id: 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
    last_verified: 2026-10-13
    status: retired
  - id: remote-exec-apikey-and-bedrock
    finding_id: 2026-06-02-codex-cli-0136-remote-exec
    last_verified: 2026-10-13
    status: retired
  - id: sites-plugin-deploy
    finding_id: 2026-06-02-codex-sites-plugin-launch
    last_verified: 2026-06-03
    status: retired
  - id: ios-faceid-passcode-lock
    finding_id: 2026-06-02-chatgpt-ios-1-2026-146-face-id
    last_verified: 2026-06-03
    status: retired
  - id: environment-scoped-approvals
    finding_id: 2026-06-23-codex-environment-scoped-approvals
    last_verified: 2026-10-13
    status: retired
  - id: rollout-token-budget-turn-abort
    finding_id: 2026-06-23-codex-rollout-token-budgets
    last_verified: 2026-06-23
    status: retired
  - id: multi-agent-delegation-authority-mode
    finding_id: 2026-06-23-codex-multi-agent-delegation-modes
    last_verified: 2026-06-23
    status: retired
  - id: guardian-v2-in-tag-off-by-default
    finding_id: 2026-08-20-codex-0-148-0-cut-stable-guardian-v2-is-in-the-tag-and-off-by-default
    last_verified: 2026-10-13
    status: retired
  - id: npm-latest-0-149-0
    finding_id: 2026-08-20-codex-0-149-0-is-npm-latest-and-restores-permission-profile-on-resume
    last_verified: 2026-08-20
    status: retired
  - id: guardian-skips-full-access-and-user-approval
    finding_id: 2026-09-21-codex-guardian-no-longer-runs-in-full-access-or-user-approval-mode
    last_verified: 2026-09-23
    status: retired
  - id: untrusted-projects-no-agents-md-no-helpers
    finding_id: 2026-09-21-codex-untrusted-projects-stop-feeding-agents-md-and-startup-stops-running-workspace-helpers-befo
    last_verified: 2026-09-23
    status: retired
  - id: python-sdk-external-message
    finding_id: 2026-09-21-codex-python-sdk-0-154-0-external-content-with-tool-level-authority-not-user-authority
    last_verified: 2026-10-13
    status: retired
  - id: hardening-without-advisories
    finding_id: 2026-09-21-codex-sandbox-and-credential-hardening-no-advisories
    last_verified: 2026-10-13
    status: retired
  - id: fourteen-stables-three-hotfix-trains
    finding_id: 2026-09-21-codex-channel-fourteen-stables-in-32-days-three-hotfix-trains
    last_verified: 2026-09-23
    status: retired
  - id: update-plan-off-cd-sandbox-fix
    finding_id: 2026-09-21-codex-planning-tool-off-by-default-permission-profile-persistence-extended-to-tui-turns-cd-and
    last_verified: 2026-09-23
    status: retired
  - id: mcp-result-interception-hot-reload
    finding_id: 2026-09-21-codex-hooks-mcp-and-extensions-new-interception-points
    last_verified: 2026-09-23
    status: retired
  - id: current-install-and-sdk
    finding_id: 2026-10-13-codex-channel-fourteen-stables-in-eighteen-days-model-and-daemon-changes-in-patches-sdks-in-lock
    last_verified: 2026-10-24
    status: retired
  - id: shared-background-server
    finding_id: 2026-10-13-codex-interactive-codex-now-attaches-to-a-shared-background-app-server-by-default-from-0-157
    last_verified: 2026-10-24
    status: active
  - id: daemon-updates-independent-of-cli
    finding_id: 2026-10-13-codex-the-auto-started-background-server-can-update-itself-past-a-pinned-npm-or-homebrew-cli
    last_verified: 2026-10-24
    status: active
  - id: model-and-server-defaults
    finding_id: 2026-10-13-codex-default-model-moved-again-in-a-hotfix-and-fresh-tui-threads-now-take-the-server-s-defaults
    last_verified: 2026-10-24
    status: active
  - id: stable-sandbox-helper-fixes
    finding_id: 2026-10-13-codex-sandbox-escapes-closed-as-release-note-bullets-in-0-156-0-and-0-162-0-with-no-matching-new
    last_verified: 2026-10-24
    status: retired
  - id: escalated-terminal-input-review
    finding_id: 2026-10-13-codex-typing-into-an-escalated-terminal-now-needs-approval-by-default-from-0-158
    last_verified: 2026-10-24
    status: active
  - id: explicit-distrust-and-project-config
    finding_id: 2026-10-13-codex-projectless-folders-skip-the-trust-prompt-and-the-agents-md-gate-fires-only-on-an-explicit
    last_verified: 2026-10-24
    status: retired
  - id: guardian-policy-and-audit-export
    finding_id: 2026-10-13-codex-guardian-v2-is-still-off-auto-review-gained-policy-template-and-audit-log-controls-plus
    last_verified: 2026-10-24
    status: active
  - id: steering-and-worktree-tools
    finding_id: 2026-10-13-codex-defaults-switched-on-in-the-window-voice-worktrees-api-key-model-discovery-and-unannounced
    last_verified: 2026-10-24
    status: retired
  - id: stable-daybreak-gate
    finding_id: 2026-10-13-codex-stable-0-162-1-keeps-cli-daybreak-off-current-docs-scope-the-approve-for-me-switch-to-desk
    last_verified: 2026-10-24
    status: retired
  - id: remote-execution-authentication
    finding_id: 2026-10-13-codex-remote-execution-surfaces-exec-server-auth-is-opt-in-and-the-app-server-docs-lag-the-code
    last_verified: 2026-10-24
    status: active
  - id: removed-apis-and-fork-context
    finding_id: 2026-10-13-codex-scaffolding-removed-personality-prompt-suggestions-plugin-creator-skill-thread-rollback
    last_verified: 2026-10-24
    status: retired
  - id: preview-isolation-work
    finding_id: 2026-10-13-codex-on-0-163-0-previews-through-alpha-10-credential-masking-proxy-dns-authorization-sandbox
    last_verified: 2026-10-24
    status: retired
  - id: deny-globs-ignore-ripgrep-config
    finding_id: 2026-10-13-codex-ripgrep-deny-glob-expansion-now-ignores-user-configuration
    last_verified: 2026-10-24
    status: retired
  - id: forced-macos-managed-preferences
    finding_id: 2026-10-13-codex-macos-managed-configuration-accepts-only-forced-preferences
    last_verified: 2026-10-24
    status: retired
  - id: fresh-child-dynamic-tools-opt-in
    finding_id: 2026-10-13-codex-fresh-v2-subagents-can-inherit-dynamic-tools-behind-a-default-off-flag
    last_verified: 2026-10-24
    status: active
  - id: ranked-tool-discovery-and-streaming
    finding_id: 2026-10-13-codex-code-mode-adds-ranked-tool-discovery-and-settlement-streaming
    last_verified: 2026-10-24
    status: active
  - id: user-goal-origin-survives-compaction
    finding_id: 2026-10-13-codex-explicit-user-goal-edits-persist-before-state-changes-and-survive-compaction
    last_verified: 2026-10-24
    status: retired
  - id: preview-daybreak-defaults
    finding_id: 2026-10-13-codex-alpha-10-enables-cli-daybreak-and-api-key-cyber-program-gates
    last_verified: 2026-10-24
    status: retired
  - id: main-classifier-fallback
    finding_id: 2026-10-13-codex-cutoff-main-changes-the-guardian-v2-classifier-fallback-to-conversation
    last_verified: 2026-10-13
    status: retired
  - id: stable-updater-network-policy
    finding_id: 2026-10-24-codex-stable-updater-requests-now-require-successfully-loaded-network-policy
    last_verified: 2026-10-24
    status: active
  - id: stable-masking-with-fallback
    finding_id: 2026-10-24-codex-proxy-hardening-and-credential-masking-reached-stable-with-an-unmasked-fallback
    last_verified: 2026-10-24
    status: active
  - id: escalation-retry-review
    finding_id: 2026-10-24-codex-guardian-must-reassess-a-retry-that-requests-more-authority
    last_verified: 2026-10-24
    status: active
  - id: plugin-trust-follows-contents
    finding_id: 2026-10-24-codex-plugin-hook-approval-now-checks-file-contents-before-execution
    last_verified: 2026-10-24
    status: active
  - id: sandbox-alias-and-package-identity
    finding_id: 2026-10-24-codex-sandbox-protection-covers-case-aliases-and-replaceable-helper-paths
    last_verified: 2026-10-24
    status: active
  - id: completed-compaction-and-resume
    finding_id: 2026-10-24-codex-compaction-commits-only-completed-summaries-and-resume-restores-more-state
    last_verified: 2026-10-24
    status: active
  - id: enterprise-mcp-and-proxy-auth
    finding_id: 2026-10-24-codex-enterprise-authentication-gains-native-mcp-grants-and-windows-proxy-support
    last_verified: 2026-10-24
    status: retired
  - id: parallel-reads-and-fork-prefix
    finding_id: 2026-10-24-codex-read-only-calls-can-overlap-and-full-history-forks-preserve-their-prefix
    last_verified: 2026-10-24
    status: active
  - id: patched-shell-and-switch-retirement
    finding_id: 2026-10-24-codex-patched-zsh-and-retired-feature-switches-leave-less-configuration-to-maintain
    last_verified: 2026-10-24
    status: active
  - id: terminal-presets-and-settings
    finding_id: 2026-10-24-codex-terminal-configuration-becomes-easier-to-inspect-and-reuse
    last_verified: 2026-10-24
    status: retired
  - id: stable-daybreak-defaults-on
    finding_id: 2026-10-24-codex-daybreak-s-cli-and-api-key-gates-are-now-stable-defaults
    last_verified: 2026-10-24
    status: active
  - id: runtime-signing-default-off
    finding_id: 2026-10-24-codex-runtime-signing-is-present-but-default-off-with-ephemeral-keys
    last_verified: 2026-10-24
    status: retired
  - id: windows-systemroot-fix-untagged
    finding_id: 2026-10-24-codex-the-windows-resume-helper-s-systemroot-fix-is-still-untagged
    last_verified: 2026-10-24
    status: active
  - id: google-cloud-provider-preview
    finding_id: 2026-10-24-codex-the-google-cloud-provider-is-in-preview-while-public-availability-remains-prospective
    last_verified: 2026-10-24
    status: active
  - id: v8-sort-runtime-backport
    finding_id: 2026-10-24-codex-v8-sort-safety-backport-reaches-stable-code-mode
    last_verified: 2026-10-24
    status: active
  - id: catalog-and-oauth-defaults
    finding_id: 2026-10-24-codex-incremental-tools-and-coordinated-mcp-oauth-refresh-now-default
    last_verified: 2026-10-24
    status: active
  - id: model-request-observation-hooks
    finding_id: 2026-10-24-codex-native-model-request-hooks-observe-attempts-without-authorizing-them
    last_verified: 2026-10-24
    status: retired
  - id: github-oidc-proxy
    finding_id: 2026-10-24-codex-the-responses-api-proxy-can-exchange-github-actions-oidc-credentials
    last_verified: 2026-10-24
    status: retired
  - id: live-mcp-catalogs-opt-in
    finding_id: 2026-10-24-codex-mcp-catalogs-can-refresh-during-a-turn-behind-a-default-off-flag
    last_verified: 2026-10-24
    status: active
  - id: marketplace-host-fix-preview
    finding_id: 2026-10-24-codex-preview-blocks-a-marketplace-host-allowlist-parser-mismatch
    last_verified: 2026-10-24
    status: active
  - id: reviewer-defaults-preview
    finding_id: 2026-10-24-codex-preview-fresh-terminal-sessions-defer-reviewer-selection-to-the-server
    last_verified: 2026-10-24
    status: active
  - id: approval-policy-defaults-main
    finding_id: 2026-10-24-codex-startup-approval-policy-precedence-is-repaired-only-on-main
    last_verified: 2026-10-24
    status: active
  - id: queued-permissions-and-stdin-grants
    finding_id: 2026-10-24-codex-permission-menus-hold-queued-prompts-and-active-grants-permit-stdin-review
    last_verified: 2026-10-24
    status: active
  - id: current-cli-sdk-split
    finding_id: 2026-10-24-codex-cli-and-typescript-reach-0-164-0-while-python-remains-0-163
    last_verified: 2026-10-24
    status: active
  - id: chatgpt-auto-review-cost
    finding_id: 2026-10-24-codex-current-documentation-makes-chatgpt-authenticated-auto-review-free
    last_verified: 2026-10-24
    status: active
posture_basis:
  capability:
    - 2026-10-13-codex-interactive-codex-now-attaches-to-a-shared-background-app-server-by-default-from-0-157
    - 2026-10-13-codex-default-model-moved-again-in-a-hotfix-and-fresh-tui-threads-now-take-the-server-s-defaults
    - 2026-10-13-codex-fresh-v2-subagents-can-inherit-dynamic-tools-behind-a-default-off-flag
    - 2026-10-13-codex-code-mode-adds-ranked-tool-discovery-and-settlement-streaming
    - 2026-10-24-codex-compaction-commits-only-completed-summaries-and-resume-restores-more-state
    - 2026-10-24-codex-read-only-calls-can-overlap-and-full-history-forks-preserve-their-prefix
    - 2026-10-24-codex-incremental-tools-and-coordinated-mcp-oauth-refresh-now-default
    - 2026-10-24-codex-mcp-catalogs-can-refresh-during-a-turn-behind-a-default-off-flag
  accessibility:
    - 2026-10-24-codex-daybreak-s-cli-and-api-key-gates-are-now-stable-defaults
    - 2026-10-24-codex-cli-and-typescript-reach-0-164-0-while-python-remains-0-163
    - 2026-10-24-codex-current-documentation-makes-chatgpt-authenticated-auto-review-free
  governance:
    - 2026-10-13-codex-interactive-codex-now-attaches-to-a-shared-background-app-server-by-default-from-0-157
    - 2026-10-13-codex-the-auto-started-background-server-can-update-itself-past-a-pinned-npm-or-homebrew-cli
    - 2026-10-13-codex-typing-into-an-escalated-terminal-now-needs-approval-by-default-from-0-158
    - 2026-10-13-codex-guardian-v2-is-still-off-auto-review-gained-policy-template-and-audit-log-controls-plus
    - 2026-10-13-codex-remote-execution-surfaces-exec-server-auth-is-opt-in-and-the-app-server-docs-lag-the-code
    - 2026-10-24-codex-stable-updater-requests-now-require-successfully-loaded-network-policy
    - 2026-10-24-codex-proxy-hardening-and-credential-masking-reached-stable-with-an-unmasked-fallback
    - 2026-10-24-codex-guardian-must-reassess-a-retry-that-requests-more-authority
    - 2026-10-24-codex-plugin-hook-approval-now-checks-file-contents-before-execution
    - 2026-10-24-codex-sandbox-protection-covers-case-aliases-and-replaceable-helper-paths
    - 2026-10-24-codex-the-windows-resume-helper-s-systemroot-fix-is-still-untagged
    - 2026-10-24-codex-v8-sort-safety-backport-reaches-stable-code-mode
    - 2026-10-24-codex-preview-blocks-a-marketplace-host-allowlist-parser-mismatch
    - 2026-10-24-codex-preview-fresh-terminal-sessions-defer-reviewer-selection-to-the-server
    - 2026-10-24-codex-startup-approval-policy-precedence-is-repaired-only-on-main
    - 2026-10-24-codex-permission-menus-hold-queued-prompts-and-active-grants-permit-stdin-review
stance:
  use_for: "Long coding runs where a team can <a href='#test-recovery-before-replacing-a-supervisor'>compare native resume with their existing supervisor</a>."
  avoid_for: "Workflows that cannot tolerate <a href='#check-approval-and-isolation-boundaries'>unmasked credential fallback</a>."
  watch_next: "Wait for <a href='#where-it-stands-2026-10-24'>stable marketplace host enforcement</a> before relying on host restrictions."
---

# Codex

On [23 October 2026, Codex 0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0) began [saving compaction summaries only after completion](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890), [resuming compressed histories](https://github.com/openai/codex/commit/76ed3b484d62ccceb9fa512ff4dd139f421814c3) and [restoring saved thread settings](https://github.com/openai/codex/commit/430a16799d90e296fb27b1e94f206023902b7e56).

Start with [stable 0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0): [`npm install -g @openai/codex@0.164.0`](https://registry.npmjs.org/@openai%2fcodex/0.164.0), then [`codex --no-daemon`](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/tui/src/cli.rs#L88-L89) for a fixed interactive baseline. Prioritize [recovery](#test-recovery-before-replacing-a-supervisor), [permissions and plugin-hook checks](#check-approval-and-isolation-boundaries) during rollout.

Preview alpha.1 adds [the marketplace repair](https://github.com/openai/codex/commit/61a991990fa4fd0c511ccaaab3875371796be956) and [Google Cloud provider](https://github.com/openai/codex/blob/rust-v0.165.0-alpha.1/codex-rs/model-provider-info/src/lib.rs); the [Windows helper](https://github.com/openai/codex/commit/d4bdafd378a8e328a67a4cd3557b5fe634af378c) and [approval-policy repairs remain main-only](https://github.com/openai/codex/commit/398500106707f0a3217c7cf83edc2bf226cc342f). Avoid [unauthenticated remote listeners](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/exec-server/src/server/transport.rs) and [secret-bearing execution paths where unmasked fallback is unacceptable](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/runtimes/unified_exec.rs#L706-L745).

## Where it stands, 2026-10-24

**Channel.** At the 24 October 2026 read, [TypeScript is also 0.164.0](https://registry.npmjs.org/@openai%2fcodex-sdk/0.164.0), but [Python remains 0.163.0](https://pypi.org/pypi/openai-codex/json); check SDKs separately. The [newest published preview](https://github.com/openai/codex/releases) is [0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1). In stable, [credential masking, ranked tool discovery in Code Mode and inheritance of client-defined dynamic tools by fresh V2 subagents remain off by default](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs).

**Keep a second boundary around marketplace installs.** Stable 0.164.0 lacks [alpha.1's repair for URL forms that policy parsing and Git can interpret as different destinations](https://github.com/openai/codex/commit/61a991990fa4fd0c511ccaaab3875371796be956). Constrain inputs and destinations separately until a stable tag contains the patch and passes rejection tests.

**Check the bundled CLI when Windows resume fails.** The [desktop report names bundled CLI 0.163.0-alpha.11.2](https://github.com/openai/codex/issues/56264). The [matching SystemRoot helper patch is main-only, absent from stable and alpha.1](https://github.com/openai/codex/commit/d4bdafd378a8e328a67a4cd3557b5fe634af378c). Require a release containing the patch, then test resume on the affected desktop/bundled-CLI pair.

## Test recovery before replacing a supervisor

For long coding runs, compare native resume with your current supervisor. [Interrupt compaction](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890), [restart from a compressed history](https://github.com/openai/codex/commit/76ed3b484d62ccceb9fa512ff4dd139f421814c3), and compare restored [model, effort](https://github.com/openai/codex/commit/430a16799d90e296fb27b1e94f206023902b7e56) and [permissions](https://github.com/openai/codex/commit/7c9bfb910ef65c8f4a957c53affbd43d5fac2882). Record completed jobs and human repair minutes. Retire recovery code only if completed work per hour of human attention improves. Check the outcome of interrupted external writes before retrying them.

[Vercel's 19 October description of its Codex adapter puts intent/outcome logging and replay outside the harness, with Vercel Sandbox required and built-in tools opt-in](https://vercel.com/blog/making-every-harness-durable). That addresses a different layer from restoring conversation state. Include a process crash after an external write in the comparison before treating the approaches as substitutes.

## Pin the runtime that does the work

**Pin the process doing the work.** [Eligible interactive sessions use a shared background daemon](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/tui/src/startup_orchestration.rs) whose [package selection is independent of the CLI](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/src/prepare_install.rs#L324-L331). Use [`codex --no-daemon`](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/tui/src/cli.rs#L88-L89) for a fixed interactive baseline. Otherwise, [disable automatic updates in `CODEX_HOME/app-server-daemon/settings.json` and restart; explicit updates can still select stable and interrupt work](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L48-L70). Record CLI and daemon versions separately. Restart after changing credentials: [the daemon keeps its startup environment](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L22-L28).

**Test saved network policy before enabling automatic updates.** [Codex 0.163.0 and the current stable enforce the updater's loaded network policy and propagate configuration failures](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8). Test blocked destinations and broken configuration. [Invoking CLI overrides do not configure this updater](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L63-L70); inspect its saved settings.

## Check approval and isolation boundaries

**Retest an approved command that asks for more authority.** In 0.164.0, [a prior approval from Guardian, Codex's automatic reviewer, no longer exempts an escalated retry from fresh review](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/orchestrator.rs#L484-L518). Test that review covers the retry's authority when an approved command fails inside the sandbox and requests escalation.

**Reinspect plugin-hook approvals.** 0.164.0 [binds hook trust to file contents as well as the declaration; changed contents require approval again](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/engine/plugin_trust.rs). [Older declaration-only approvals acquire their content baseline on first use](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/engine/plugin_trust.rs). Inspect those files before migration, then test that a later edit stops the hook.

**[Credential masking is off by default](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs); verify it after enabling.** When enabled, masking covers [supported remote Bash commands and Zsh snapshot sessions](https://github.com/openai/codex/releases/tag/rust-v0.164.0), but [unsupported execution paths can warn and run with unmasked credentials](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/runtimes/unified_exec.rs#L706-L745). Inspect tool environments and fallback warnings before treating masking as secret isolation. Keep secrets off paths where that fallback is unacceptable.

**Include runtime and sandbox integrations in the upgrade canary.** 0.164.0 [backports a V8 repair for invalid array-storage writes during sort](https://github.com/openai/codex/blob/rust-v0.164.0/patches/v8_array_sort_elements_kind.patch), [protects macOS repository metadata against case aliases](https://github.com/openai/codex/commit/3bae578af33e43268e7bc2d6d5d0266f704bb554) and [checks replaceable Linux helper paths and ancestors](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/sandboxing/src/bwrap.rs#L179-L310). Test case variants and replaceable paths on the relevant platform. Windows integrations must also pass [the new installed-package identity requirement for sandbox provisioning; debug foreground mode retains an exception](https://github.com/openai/codex/commit/d34f104c22ae815fc213641b8a637c5947f14ac1). Check unpackaged clients before rollout.

**Keep clients ready for approvals after shell launch.** [Active matching grants can let terminal input reach review with granular sandbox prompts disabled; each input still needs review](https://github.com/openai/codex/commit/d292f721242ef355ce5a38da90e0e33edc4790e6), [while expired grants are rejected under that granular policy; Never's early rejection has an exception when strict automatic review is active](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/approvals.rs#L459-L474). Test input after grant expiry.

**Govern automatic review through policy and sampled decisions.** [Guardian approval defaults on; the newer Guardian V2 and optional Decisions comparison remain off](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs). [Full Access skips the older model reviewer](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/ext/guardian-reviewer/src/routing.rs#L88-L94). Set [managed review policy](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/config_requirements.rs#L1083-L1084) and sample [opt-in, best-effort OTLP assessments, which exclude cached V2 approvals and cap rationale length](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/otel/README.md#L158-L174). Before relying on complete audit coverage, require a tested export that accounts for cached decisions too.

**Authenticate remote execution before exposure.** [`exec-server` still permits unauthenticated listeners](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/exec-server/src/server/transport.rs); [app-server rejects unauthenticated non-loopback WebSocket listeners](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-transport/src/transport/websocket.rs#L166-L172). Verify the deployed listener's authentication instead of assuming the other server's rules apply.

## Measure what native coordination replaces

**Compare native delegation with context-copying glue.** [Eligible read-only calls can overlap](https://github.com/openai/codex/commit/c9e0fffbbc05c36478686444f6ab1edbadfe2768), and [full-history forks preserve their prefix by default, with a legacy-compaction exception](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/feature_configs.rs#L316-L319). Before deleting your wrapper, measure accepted work, context volume and human repair time. Measure cache lifetime and quota cost separately.

**Retest tool integrations with the new defaults.** [Tool catalogs sent incrementally to the model in Responses Lite](https://github.com/openai/codex/commit/c953dacb42d2773d0ca9cc25a01129bba2ca36a8) and [MCP OAuth credential renewal coordinated across clients](https://github.com/openai/codex/commit/35757adb728b268a1e75eabeb3e4cf9a6def5c18) now default on. Test catalog-history compatibility and multi-client credential renewal before retiring synchronization code. [Within-turn MCP catalog refresh remains a separate default-off feature, `mcp_tool_list_changed`](https://github.com/openai/codex/commit/0df4aa67781ae45a3c97befa4db48b734afe46d9).

## Clean up configuration before rollout

**Remove obsolete configuration.** Codex [stopped bundling patched zsh](https://github.com/openai/codex/commit/a645742bb5615026ae673c9527f146ee551d4949) and [retired worktree/realtime feature switches](https://github.com/openai/codex/commit/bb64b894fd67158be0f874872e6d7bfe717e7368). Remove those assumptions from templates and test shell snapshots and permissions on the supported path.

## Confirm service access

**Confirm account and model approval before planning cyber work.** [Both `cli_daybreak` and `api_key_cyber_access_programs` now default on in stable](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1449-L1459). [Identity, organization, model and surface approvals remain separate](https://learn.chatgpt.com/docs/cyber-safety).

**Test the Google Cloud route in preview.** [Alpha.1 contains the `gcp` provider](https://github.com/openai/codex/blob/rust-v0.165.0-alpha.1/codex-rs/model-provider-info/src/lib.rs), while [OpenAI's 21 October 2026 announcement places general availability in coming weeks](https://openai.com/index/openai-models-google-cloud/). Confirm service access before building against it.

## What is unresolved

- **The recovery benefit remains unmeasured.** Settle whether native resume reduces human repair work with [the recovery comparison](#test-recovery-before-replacing-a-supervisor).
- **Check server defaults setting by setting.** Stable [defers unselected model/effort to the server, with explicit-profile exceptions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/tui/src/app_server_session/startup_launch.rs). [Reviewer precedence is repaired in alpha.1](https://github.com/openai/codex/commit/47a1f6bb77baa8ba237757196a62cadf97dc854b); [approval-policy precedence is repaired only on main](https://github.com/openai/codex/commit/398500106707f0a3217c7cf83edc2bf226cc342f). Require stable tags and first-turn tests with overrides, profiles and queued prompts. Set model and effort explicitly for evaluations.
- **Get a versioned provider commitment before embedding the daemon.** [Its lifecycle contract remains experimental](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L1-L9). On a test machine, trace selected packages and interruption costs before embedding those lifecycle assumptions.
- **Price optional API comparison separately.** Current documentation says [ChatGPT-authenticated auto-review checks are free and outside plan limits](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan). [Decisions comparison selects a separate API credential path](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L57-L70). Provider terms and request-matched billing would establish its account and cost.

## Profile hygiene

This page describes Codex as of 24 October 2026. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the
evidence contract.

Correction, 24 October 2026: the backend [already applied model and effort independently of fork history in 0.162.1](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agent/child_config.rs#L51-L84), and [0.164.0 retains that behavior](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/agent/child_config.rs#L52-L85), so the earlier `fork_turns: "none"` requirement was overstated. Follow any stricter caller contract.
