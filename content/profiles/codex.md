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
tagline: "Codex's shared background server makes a CLI version pin an incomplete runtime policy."
compared_with: []
x:
  project: OpenAICodexCli
surface_class: mixed_official_docs
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-13
last_full_review: 2026-10-13
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
    last_verified: 2026-10-13
    status: active
  - id: shared-background-server
    finding_id: 2026-10-13-codex-interactive-codex-now-attaches-to-a-shared-background-app-server-by-default-from-0-157
    last_verified: 2026-10-13
    status: active
  - id: daemon-updates-independent-of-cli
    finding_id: 2026-10-13-codex-the-auto-started-background-server-can-update-itself-past-a-pinned-npm-or-homebrew-cli
    last_verified: 2026-10-13
    status: active
  - id: model-and-server-defaults
    finding_id: 2026-10-13-codex-default-model-moved-again-in-a-hotfix-and-fresh-tui-threads-now-take-the-server-s-defaults
    last_verified: 2026-10-13
    status: active
  - id: stable-sandbox-helper-fixes
    finding_id: 2026-10-13-codex-sandbox-escapes-closed-as-release-note-bullets-in-0-156-0-and-0-162-0-with-no-matching-new
    last_verified: 2026-10-13
    status: active
  - id: escalated-terminal-input-review
    finding_id: 2026-10-13-codex-typing-into-an-escalated-terminal-now-needs-approval-by-default-from-0-158
    last_verified: 2026-10-13
    status: active
  - id: explicit-distrust-and-project-config
    finding_id: 2026-10-13-codex-projectless-folders-skip-the-trust-prompt-and-the-agents-md-gate-fires-only-on-an-explicit
    last_verified: 2026-10-13
    status: active
  - id: guardian-policy-and-audit-export
    finding_id: 2026-10-13-codex-guardian-v2-is-still-off-auto-review-gained-policy-template-and-audit-log-controls-plus
    last_verified: 2026-10-13
    status: active
  - id: steering-and-worktree-tools
    finding_id: 2026-10-13-codex-defaults-switched-on-in-the-window-voice-worktrees-api-key-model-discovery-and-unannounced
    last_verified: 2026-10-13
    status: active
  - id: stable-daybreak-gate
    finding_id: 2026-10-13-codex-stable-0-162-1-keeps-cli-daybreak-off-current-docs-scope-the-approve-for-me-switch-to-desk
    last_verified: 2026-10-13
    status: active
  - id: remote-execution-authentication
    finding_id: 2026-10-13-codex-remote-execution-surfaces-exec-server-auth-is-opt-in-and-the-app-server-docs-lag-the-code
    last_verified: 2026-10-13
    status: active
  - id: removed-apis-and-fork-context
    finding_id: 2026-10-13-codex-scaffolding-removed-personality-prompt-suggestions-plugin-creator-skill-thread-rollback
    last_verified: 2026-10-13
    status: active
  - id: preview-isolation-work
    finding_id: 2026-10-13-codex-on-0-163-0-previews-through-alpha-10-credential-masking-proxy-dns-authorization-sandbox
    last_verified: 2026-10-13
    status: active
  - id: deny-globs-ignore-ripgrep-config
    finding_id: 2026-10-13-codex-ripgrep-deny-glob-expansion-now-ignores-user-configuration
    last_verified: 2026-10-13
    status: active
  - id: forced-macos-managed-preferences
    finding_id: 2026-10-13-codex-macos-managed-configuration-accepts-only-forced-preferences
    last_verified: 2026-10-13
    status: active
  - id: fresh-child-dynamic-tools-opt-in
    finding_id: 2026-10-13-codex-fresh-v2-subagents-can-inherit-dynamic-tools-behind-a-default-off-flag
    last_verified: 2026-10-13
    status: active
  - id: ranked-tool-discovery-and-streaming
    finding_id: 2026-10-13-codex-code-mode-adds-ranked-tool-discovery-and-settlement-streaming
    last_verified: 2026-10-13
    status: active
  - id: user-goal-origin-survives-compaction
    finding_id: 2026-10-13-codex-explicit-user-goal-edits-persist-before-state-changes-and-survive-compaction
    last_verified: 2026-10-13
    status: active
  - id: preview-daybreak-defaults
    finding_id: 2026-10-13-codex-alpha-10-enables-cli-daybreak-and-api-key-cyber-program-gates
    last_verified: 2026-10-13
    status: active
  - id: main-classifier-fallback
    finding_id: 2026-10-13-codex-cutoff-main-changes-the-guardian-v2-classifier-fallback-to-conversation
    last_verified: 2026-10-13
    status: retired
posture_basis:
  capability:
    - 2026-10-13-codex-interactive-codex-now-attaches-to-a-shared-background-app-server-by-default-from-0-157
    - 2026-10-13-codex-default-model-moved-again-in-a-hotfix-and-fresh-tui-threads-now-take-the-server-s-defaults
    - 2026-10-13-codex-defaults-switched-on-in-the-window-voice-worktrees-api-key-model-discovery-and-unannounced
    - 2026-10-13-codex-fresh-v2-subagents-can-inherit-dynamic-tools-behind-a-default-off-flag
    - 2026-10-13-codex-code-mode-adds-ranked-tool-discovery-and-settlement-streaming
    - 2026-10-13-codex-explicit-user-goal-edits-persist-before-state-changes-and-survive-compaction
  accessibility:
    - 2026-10-13-codex-defaults-switched-on-in-the-window-voice-worktrees-api-key-model-discovery-and-unannounced
    - 2026-10-13-codex-channel-fourteen-stables-in-eighteen-days-model-and-daemon-changes-in-patches-sdks-in-lock
    - 2026-10-13-codex-alpha-10-enables-cli-daybreak-and-api-key-cyber-program-gates
  governance:
    - 2026-10-13-codex-interactive-codex-now-attaches-to-a-shared-background-app-server-by-default-from-0-157
    - 2026-10-13-codex-the-auto-started-background-server-can-update-itself-past-a-pinned-npm-or-homebrew-cli
    - 2026-10-13-codex-sandbox-escapes-closed-as-release-note-bullets-in-0-156-0-and-0-162-0-with-no-matching-new
    - 2026-10-13-codex-typing-into-an-escalated-terminal-now-needs-approval-by-default-from-0-158
    - 2026-10-13-codex-projectless-folders-skip-the-trust-prompt-and-the-agents-md-gate-fires-only-on-an-explicit
    - 2026-10-13-codex-guardian-v2-is-still-off-auto-review-gained-policy-template-and-audit-log-controls-plus
    - 2026-10-13-codex-remote-execution-surfaces-exec-server-auth-is-opt-in-and-the-app-server-docs-lag-the-code
    - 2026-10-13-codex-on-0-163-0-previews-through-alpha-10-credential-masking-proxy-dns-authorization-sandbox
    - 2026-10-13-codex-ripgrep-deny-glob-expansion-now-ignores-user-configuration
    - 2026-10-13-codex-macos-managed-configuration-accepts-only-forced-preferences
    - 2026-10-13-codex-explicit-user-goal-edits-persist-before-state-changes-and-survive-compaction
stance:
  use_for: "Interactive coding teams that want <a href=\"https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L22-L28\">clients to share a background server</a> and will control its version and permissions."
  avoid_for: "Embedding the background daemon where deployment requires a <a href=\"https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L1-L9\">guaranteed lifecycle contract</a>."
  watch_next: "Watch for <a href=\"https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8\">stable updater network enforcement</a> before enabling updates in restricted fleets."
---

# Codex

On [2026-09-25, Codex 0.157.0 enabled automatic background-server startup for eligible interactive sessions](https://github.com/openai/codex/releases/tag/rust-v0.157.0). [Eligible servers seeded from npm or Homebrew can update independently of the CLI](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install.rs#L245-L338). A pin can hold the command you typed while the service doing the work moves on.

## Where it stands, 2026-10-13

**Stable baseline: 0.162.1.** The [2026-10-09 release repairs startup failures
when the CLI and running server disagree about feature defaults](https://github.com/openai/codex/releases/tag/rust-v0.162.1).
Install [`npm install -g @openai/codex@0.162.1`](https://registry.npmjs.org/@openai%2fcodex/0.162.1);
embedding clients should use matching [Python](https://pypi.org/pypi/openai-codex/0.162.1/json)
or [TypeScript SDK](https://registry.npmjs.org/@openai%2fcodex-sdk/0.162.1) versions.

The immediate actions: [control server updates separately from the CLI](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L104-L120),
[restart after changing credentials supplied through environment variables](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L22-L28),
and [set model and reasoning effort explicitly](https://github.com/openai/codex/commit/b527ce47348e7937730d06bc3504f17a8ac723f2).
Embedding clients also need to handle [new terminal approvals](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/unified_exec/stdin_approval.rs#L190-L251)
and changed [fork](https://github.com/openai/codex/commit/6221a217e2b24701ecbf05a239e4ca899ae3a359)
and [rollback behavior](https://github.com/openai/codex/commit/3052bbcf8c9d48e130599308c583784db43e57aa).

**Use `codex --no-daemon` when the interactive baseline must stay fixed.**
[Explicit standalone-release pins stay pinned](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L117-L120).
The [`--no-daemon` option keeps an interactive launch off that shared
service](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/cli.rs#L83-L85);
[`codex exec` does not use the shared background service](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/exec/src/lib.rs#L731-L754).

**If you keep the server, control its updater separately.** For a fixed
version, [set `{"updater":{"autoUpdateEnabled":false}}` in
`app-server-daemon/settings.json` inside your Codex home directory (`CODEX_HOME`), then run
`codex app-server daemon restart` to apply it](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L48-L68).
Compare `codex app-server daemon version` with `codex --version`.
[Restart reuses the selected server package, so it will not undo an earlier
update](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L125-L142).
Leaving updates on [can deliver fixes without changing the
CLI](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L104-L120).

Keep the updater disabled where managed network restrictions must hold:
0.162.1 [can fall back to a default HTTP client when configuration loading
fails](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/cli/src/main.rs#L2360-L2372).

**Set the server's environment and telemetry.** Shared clients
[retain the environment from server startup; clearing a token in a new
terminal does not clear its copy](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L22-L28).
Restart after changing tokens, cloud profiles or PATH. [Daemon launches enable
analytics by default](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/backend/pid.rs#L408-L412);
set [`analytics.enabled=false` in `config.toml`](https://github.com/openai/codex/commit/2cc65cdd4c7c167f0c7252fcb5165d649c16aca0)
where required.

**Set the model and effort for cost or evaluation baselines.**
[0.159.1 changed the default to GPT-6.1 Sol on 2026-09-29](https://github.com/openai/codex/releases/tag/rust-v0.159.1).
From 0.162.0, [fresh terminal threads defer unselected settings to the server,
except for explicit profile launches](https://github.com/openai/codex/commit/b527ce47348e7937730d06bc3504f17a8ac723f2).
Set `model` and `model_reasoning_effort` explicitly.
[`multiAgentMode` is deprecated and ignored in favor of Ultra effort](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/v2/thread.rs#L110-L113);
stop relying on that delegation control.

## Trust and execution have separate gates

**Upgrade before opening untrusted Linux repositories, then test denied-file rules.**
Stable 0.162.0 blocks [sandbox-writable `bwrap` discovery](https://github.com/openai/codex/commit/7aa8f510496316b86a91a75ed0a71598ef03c640)
and [workspace-writable `rg` execution before confinement](https://github.com/openai/codex/commit/ccde2fc8b7fd08216757d3d3f67362847ab8341b).
It also stops [ripgrep configuration suppressing deny-glob masks](https://github.com/openai/codex/commit/ac9b5b8380517ded445b09dd3196d8d9e2ba3c59).
On the recommended baseline, test denied reads and writes with
`RIPGREP_CONFIG_PATH` set, and confirm permitted files still work.

**Record explicit distrust for hostile unattended checkouts.** Codex
[reads project AGENTS.md](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agents_md.rs#L63-L66)
unless the project is [explicitly Untrusted](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/config_toml.rs#L614-L616).
[No saved trust decision still allows those
instructions](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/config_toml.rs#L614-L616).
[Project config, hooks and exec policies have a separate trust gate: CI needs
trust for those](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/loader/mod.rs#L1098-L1109).

**Deliver macOS management settings as forced preferences.** Since 0.156.0,
[only forced preferences count as administrator configuration](https://github.com/openai/codex/commit/73bf1812722f9b6fdbfac4997b2d96d7b64ff7c3).
Confirm the MDM payload uses that delivery mode.

**Authenticate remote execution before exposing it.**
[`exec-server` permits unauthenticated listeners](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/exec-server/src/server/transport.rs#L1-L40),
while [app-server refuses them beyond loopback](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-transport/src/transport/websocket.rs#L135-L142).
Add `--ws-auth` and TLS before exposing `exec-server`.

**Govern auto-review with policy and sampled decisions.** The older Guardian
reviewer [defaults on](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1763-L1766).
In stable, the newer automatic approval reviewer,
[Guardian V2, remains off by default in 0.162.1](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1805-L1808).
[Full Access skips the older reviewer's model review](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-reviewer/src/routing.rs#L85-L91).
Put organization rules in [managed `guardian_extra_policy`](https://github.com/openai/codex/commit/26cb4d73e2ce25575644038d7af5beb2440d0ed0).
Enable [`otel.log_guardian_assessments` with an OTLP log exporter to inspect
completed synchronous assessments; cached V2 approvals are
excluded](https://github.com/openai/codex/commit/30758e5c77c14e6ddcc53a6c7407a477fed4ac76).
Put human review into the managed rules and sampled approval decisions.

**Handle approval requests after a terminal starts.** From 0.158.0,
[meaningful input to escalated terminals needs review; empty polls and non-TTY
Ctrl-C are exceptions](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/unified_exec/stdin_approval.rs#L190-L251).
Clients driving shells or REPLs must handle these requests.

## Native orchestration still needs an integration test

**Compare native discovery and result streaming with your existing adapters.** In
stable 0.162.0, [enable `features.code_mode_tool_search=true` for ranked tool
discovery](https://github.com/openai/codex/commit/4d15794336668d6098c0e36eb8e96cbbbfdb1d2d).
[It defaults off, needs model support and preserves nested-tool policy
filtering](https://github.com/openai/codex/commit/4d15794336668d6098c0e36eb8e96cbbbfdb1d2d).
[`as_settled` and `stream_settled` expose concurrent results in completion
order](https://github.com/openai/codex/commit/28a264fbc766a59f2b550b8318f88e4a4b8dffe1).
For new V2 subagents started without their parent's conversation history, [separately enable
`features.multi_agent_v2_dynamic_tools=true` to inherit client-defined
tools; that flag also defaults off](https://github.com/openai/codex/commit/e4e33a56b073b5d9a550aaf513798480f88e4a38).

Measure end-to-end gains by comparing accepted tasks and human setup and
review time before deleting catalog-scanning or tool-reinjection code.

**Retest clients that steer a running response or limit fork context.** Stable
0.162.0 [enables `instant_interrupt` by default while marking it under
development](https://github.com/openai/codex/commit/a028250541f18b4f3040744be1325214ed5cc832).
[Legacy positive integer fork strings now
inherit all history; zero and invalid values are rejected, and model overrides
require `fork_turns: "none"`](https://github.com/openai/codex/commit/6221a217e2b24701ecbf05a239e4ca899ae3a359).
Check context volume before upgrading those clients.

**Migrate embedding calls and preserve user authority.**
[`thread/rollback` is gone; assess `thread/revert` for paginated
threads](https://github.com/openai/codex/commit/3052bbcf8c9d48e130599308c583784db43e57aa).
For goal updates, set `origin` deliberately and handle recording failures.
From 0.161.0, [explicit user edits persist before state changes and survive
compaction; automatic or omitted origins grant no user
authorization](https://github.com/openai/codex/commit/de020167989fde4937204a064ea2fedd54f3c931).

## Preview hardening remains a trial

**Keep the 0.163.0 hardening trial off production.**
[Alpha.10, published 2026-10-13](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10),
is the newest published preview at this date. [Credential masking is
preview-only, default-off and requires an enabled proxy](https://github.com/openai/codex/commit/bd274564e1b1b3febb3886d274e6d97c2a3d275e).
[Sandbox integrity checks are observational; preparation failures and timeouts
do not stop execution](https://github.com/openai/codex/commit/cba716c0f1caa4f2528dedbb1075b50126709d7e).
Alpha.10 also [enables API-key cyber-program controls, still subject to model
eligibility and opt-outs](https://github.com/openai/codex/commit/6cc7d9cc5c702c0ca133f7ea48432166e0b880be).

## What is unresolved

- **Trace a pinned installation before relying on update timing.** On a
  test machine, trace CLI, selected daemon package and updater identities
  across a successful update to establish that installation's behavior and
  interruption costs.
  [Five minutes then hourly is the default check schedule](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L48-L68),
  not an update deadline.
- **Wait for stable updater network enforcement.** The [fail-closed
  network-policy fix is in the 0.163.0 previews](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8).
  A stable tag containing that commit would settle release availability.
  Then probe with blocked network access and failed configuration loading to
  establish behavior under the fleet's actual restrictions.
- **Require a lifecycle commitment before embedding the daemon.** The
  [0.162.1 daemon README describes its lifecycle contract as experimental](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L1-L9).
  For deployments that depend on daemon lifecycle behavior, require a
  versioned provider commitment covering that behavior.
- **Confirm review prices and the account charged before budgeting them.**
  In 0.162.1, the default-off
  [`guardianv2_decisions_comparison`](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1805-L1814)
  [can send transcript-bearing classifier requests](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/decisions.rs#L118-L188)
  [using a selected API credential](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L55-L66).
  [Usage labels identify review activity](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/analytics/normalize.rs#L314-L324),
  not its price. Dated provider pricing would settle ordinary review cost. A
  billing record matched to comparison requests would show which account was
  charged and how much.

## Profile hygiene

This page describes Codex as of 2026-10-13. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the
evidence contract.
