---
schema_version: bitter.frontier_profile.v0
profile_id: pi-coding-agent
label: Pi Coding Agent
owner: Earendil Works (formerly badlogic / Mario Zechner)
source_contract: sources/pi-coding-agent.yml
homepage: https://pi.dev/
docs: https://pi.dev/docs/latest
tagline: "An MCP adapter deleted its own interpreter in favor of Pi's codemode."
x:
  maintainers:
    - handle: badlogicgames
      name: Mario Zechner
repo: https://github.com/earendil-works/pi
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-24
last_full_review: 2026-10-24
claims:
  - id: harness-tagged
    finding_id: 2026-09-21-pi-coding-agent-the-dev-harness-reached-main-and-a-tag-in-v0-85-0-its-plugin-surface-was-published-to-npm
    last_verified: 2026-09-23
    status: retired
  - id: harnesstax
    finding_id: 2026-09-21-pi-coding-agent-harnesstax-study-same-model-same-success-up-to-five-times-the-cost
    last_verified: 2026-10-24
    status: open_question
  - id: user-bash-fails-closed
    finding_id: 2026-09-21-pi-coding-agent-user-bash-fails-closed-an-extension-that-routes-commands-into-a-vm-no-longer-falls-back
    last_verified: 2026-10-13
    status: retired
  - id: rpc-steer-input-handlers
    finding_id: 2026-09-21-pi-coding-agent-rpc-steer-and-follow-up-no-longer-bypass-extension-input-handlers
    last_verified: 2026-10-13
    status: retired
  - id: extension-reach-grew
    finding_id: 2026-09-21-pi-coding-agent-extensions-gained-authenticated-model-calls-and-full-transcript-control-context-handlers
    last_verified: 2026-10-13
    status: retired
  - id: bug-upload-radius
    finding_id: 2026-09-21-pi-coding-agent-bug-uploads-diagnostics-and-optionally-the-transcript-to-radius-without-login
    last_verified: 2026-10-13
    status: retired
  - id: compaction-docs-match-package
    finding_id: 2026-09-21-pi-coding-agent-compaction-docs-now-match-the-package-session-compact-failed-shipped-in-0-84
    last_verified: 2026-10-13
    status: retired
  - id: project-trust-system
    finding_id: 2026-06-08-pi-coding-agent-project-trust-system
    last_verified: 2026-10-24
    status: active
  - id: agents-override-before-trust
    finding_id: 2026-08-10-pi-coding-agent-agents-override-md-lets-any-directory-replace-the-operator-s-context
    last_verified: 2026-10-13
    status: retired
  - id: credential-print-commands
    finding_id: 2026-08-03-pi-ships-credential-export-commands
    last_verified: 2026-10-13
    status: retired
  - id: default-tools-per-project
    finding_id: 2026-08-17-pi-coding-agent-defaulttools-makes-the-built-in-tool-set-configurable-per-project-the
    last_verified: 2026-08-17
    status: retired
  - id: dev-hosts-not-plugins
    finding_id: 2026-08-22-pi-dev-hosts-are-not-plugins-kernel-still-design
    last_verified: 2026-08-22
    status: retired
    note: "Read at the dev branch SHA a17323e5. That branch is gone and its code is in every tag from v0.85.0; see harness-tagged."
  - id: new-harness-on-dev-not-tagged
    finding_id: 2026-08-20-pi-new-harness-lives-on-dev-not-on-a-tag
    last_verified: 2026-08-22
    status: retired
    note: "Superseded. The harness reached a tag in v0.85.0 (2026-09-04)."
  - id: live-docs-compaction-event-not-in-tag
    finding_id: 2026-08-20-pi-live-docs-describe-compaction-event-not-in-0-84-2
    last_verified: 2026-08-20
    status: retired
    note: "Superseded. session_compact_failed shipped in v0.84.3."
  - id: typebox-extension-sdk-validation
    finding_id: 2026-05-06-pi-thin-harness-provider-churn
    last_verified: 2026-10-13
    status: retired
  - id: terminating-tool-results
    finding_id: 2026-05-06-pi-thin-harness-provider-churn
    last_verified: 2026-10-13
    status: retired
  - id: provider-retry-timeout-controls
    finding_id: 2026-05-07-pi-thin-harness-churn
    last_verified: 2026-10-13
    status: retired
  - id: session-dir-env
    finding_id: 2026-05-07-pi-thin-harness-churn
    last_verified: 2026-10-24
    status: active
  - id: earendil-works-package-migration
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-10-13
    status: retired
  - id: jsonc-models-json
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-10-13
    status: retired
  - id: harness-stream-configuration
    finding_id: 2026-05-12-pi-earendil-migration-and-harness-sdk
    last_verified: 2026-05-12
    status: retired
  - id: security-hardening-cluster
    finding_id: 2026-06-02-pi-coding-agent-oauth-hardening
    last_verified: 2026-10-13
    status: retired
  - id: compaction-event-context
    finding_id: 2026-06-23-pi-extension-compaction-event-context
    last_verified: 2026-10-13
    status: retired
  - id: selective-provider-base-entrypoints
    finding_id: 2026-06-23-pi-selective-provider-base-entrypoints
    last_verified: 2026-06-23
    status: retired
  - id: mistral-prompt-cache-cost-accounting
    finding_id: 2026-06-23-pi-mistral-prompt-caching
    last_verified: 2026-10-13
    status: retired
  - id: dependency-and-session-path-hardening
    finding_id: 2026-06-23-pi-vulnerable-dependency-update
    last_verified: 2026-10-13
    status: retired
  - id: no-governance-in-core
    finding_id: 2026-06-23-pi-extension-compaction-event-context
    last_verified: 2026-09-23
    status: retired
  - id: mcp-built-in
    finding_id: 2026-10-13-pi-coding-agent-mcp-is-built-into-the-cli-from-0-99-0-project-servers-wait-for-trust-stdio-servers-inherit
    last_verified: 2026-10-24
    status: active
  - id: codemode-authority
    finding_id: 2026-10-13-pi-coding-agent-codemode-lets-the-model-script-tool-calls-the-tool-calls-stay-gated-its-model-calls-do-not
    last_verified: 2026-10-24
    status: active
  - id: tool-selection-reach
    finding_id: 2026-10-13-pi-coding-agent-tools-stopped-being-a-strict-allowlist-once-codemode-or-tool-search-is-in-the-list-1-0
    last_verified: 2026-10-24
    status: active
  - id: standalone-dotenv
    finding_id: 2026-10-13-pi-coding-agent-standalone-binaries-loaded-the-launch-directory-s-env-into-pi-s-own-environment-until-1-1
    last_verified: 2026-10-24
    status: retired
  - id: durable-and-sdk-split
    finding_id: 2026-10-13-pi-coding-agent-the-experimental-plugin-and-server-stack-left-the-coding-agent-the-durable-harness-now-shi
    last_verified: 2026-10-24
    status: active
  - id: install-channels
    finding_id: 2026-10-13-pi-coding-agent-npm-installs-stopped-pinning-transitive-dependencies-in-1-0-1-the-installer-is-the-pinned
    last_verified: 2026-10-24
    status: active
  - id: headless-and-startup-trust
    finding_id: 2026-10-13-pi-coding-agent-project-trust-re-read-at-1-2-0-headless-runs-already-refuse-protected-resources-and-the
    last_verified: 2026-10-24
    status: active
  - id: extension-routing-and-hooks
    finding_id: 2026-10-13-pi-coding-agent-extensions-gained-more-reach-in-the-1-0-line-and-before-agent-start-now-also-gates-extensi
    last_verified: 2026-10-24
    status: active
  - id: text-print-truncation
    finding_id: 2026-10-13-pi-coding-agent-headless-runs-fail-loudly-where-they-used-to-pass-and-the-tui-went-fullscreen-by-default
    last_verified: 2026-10-24
    status: active
  - id: private-output-files
    finding_id: 2026-10-13-pi-coding-agent-hygiene-fixes-shipped-as-release-notes-again-with-no-advisory
    last_verified: 2026-10-24
    status: retired
  - id: provider-migrations
    finding_id: 2026-10-13-pi-coding-agent-provider-changes-chatgpt-sign-in-on-the-openai-provider-short-lived-anthropic-credentials
    last_verified: 2026-10-24
    status: retired
  - id: pending-internal-version-pins
    finding_id: 2026-10-13-pi-coding-agent-internal-pi-dependency-versions-are-pinned-on-main-not-in-1-2
    last_verified: 2026-10-24
    status: retired
  - id: pending-share-destination
    finding_id: 2026-10-13-pi-coding-agent-session-share-destination-becomes-explicit-on-main-not-in-1-2
    last_verified: 2026-10-24
    status: retired
  - id: pending-resume-tools
    finding_id: 2026-10-13-pi-coding-agent-resumed-sessions-recover-active-tools-on-main-with-explicit-cli-selection-taking-precedenc
    last_verified: 2026-10-24
    status: retired
  - id: pending-codemode-workers
    finding_id: 2026-10-13-pi-coding-agent-bun-codemode-cancellation-and-a-two-worker-limit-are-repaired-only-on-main
    last_verified: 2026-10-24
    status: retired
  - id: sdk-model-unification
    finding_id: 2026-10-13-pi-coding-agent-image-and-classifier-models-share-the-models-surface-from-0-99
    last_verified: 2026-10-24
    status: retired
  - id: sdk-stream-return
    finding_id: 2026-10-13-pi-coding-agent-custom-stream-functions-must-return-assistantmessageeventstream-from-1-1
    last_verified: 2026-10-24
    status: retired
  - id: mcp-cancellation
    finding_id: 2026-10-13-pi-coding-agent-mcp-1-2-0-stops-dispatching-calls-abandoned-during-oauth-refresh
    last_verified: 2026-10-24
    status: active
  - id: export-visibility
    finding_id: 2026-10-13-pi-coding-agent-hidden-custom-messages-can-be-revealed-in-html-exports-from-0-99
    last_verified: 2026-10-24
    status: active
  - id: summary-inputs
    finding_id: 2026-10-13-pi-coding-agent-compaction-and-branch-summaries-omit-thinking-blocks-in-1-2
    last_verified: 2026-10-13
    status: retired
  - id: startup-busy-state
    finding_id: 2026-10-13-pi-coding-agent-a-starting-session-is-busy-during-before-agent-start-in-1-2
    last_verified: 2026-10-24
    status: retired
  - id: provider-defaults
    finding_id: 2026-10-13-pi-coding-agent-kimi-k3-and-nemotron-3-ultra-replace-retired-provider-defaults
    last_verified: 2026-10-13
    status: retired
  - id: prompt-price-tiers
    finding_id: 2026-10-13-pi-coding-agent-prompt-length-pricing-tiers-stop-disappearing-from-model-cost-estimates
    last_verified: 2026-10-24
    status: retired
  - id: install-pins-and-nix
    finding_id: 2026-10-24-pi-coding-agent-exact-internal-package-versions-and-the-nix-repairs-have-shipped
    last_verified: 2026-10-24
    status: active
  - id: released-share-destination
    finding_id: 2026-10-24-pi-coding-agent-session-sharing-has-an-explicit-destination-setting
    last_verified: 2026-10-24
    status: active
  - id: resume-and-new-tools
    finding_id: 2026-10-24-pi-coding-agent-resume-restores-tool-selections-and-1-4-also-admits-newly-installed-extension-tools
    last_verified: 2026-10-24
    status: active
  - id: codemode-fifo-and-cancellation
    finding_id: 2026-10-24-pi-coding-agent-codemode-cancellation-is-released-with-fifo-admission-and-a-wait-of-at-most-60-seconds
    last_verified: 2026-10-24
    status: active
  - id: coding-agent-summary-budget
    finding_id: 2026-10-24-pi-coding-agent-coding-agent-compaction-and-branch-summaries-drop-the-fixed-output-cap-and-repair-recovery
    last_verified: 2026-10-24
    status: active
  - id: provider-routes-and-caches
    finding_id: 2026-10-24-pi-coding-agent-provider-routing-and-cache-behavior-changed-without-a-model-quality-guarantee
    last_verified: 2026-10-24
    status: active
  - id: tool-validation-and-sdk-breaks
    finding_id: 2026-10-24-pi-coding-agent-tool-boundaries-received-smaller-repairs-while-sdk-consumers-face-further-api-breaks
    last_verified: 2026-10-24
    status: active
  - id: durable-sleep-and-migration
    finding_id: 2026-10-24-pi-coding-agent-durable-1-4-can-hibernate-between-phases-with-a-one-way-sqlite-upgrade
    last_verified: 2026-10-24
    status: active
  - id: durable-parking-and-host-policy
    finding_id: 2026-10-24-pi-coding-agent-durable-adds-crash-loop-parking-inspectable-telemetry-and-browser-storage
    last_verified: 2026-10-24
    status: active
  - id: independent-host-versions
    finding_id: 2026-10-24-pi-coding-agent-pi-has-independently-versioned-front-ends-forks-and-durable-hosts-not-one-synchronized-eco
    last_verified: 2026-10-24
    status: active
  - id: adapter-native-codemode
    finding_id: 2026-10-24-pi-coding-agent-the-mcp-adapter-removes-its-separate-script-engine-and-routes-approvals-through-real-tool
    last_verified: 2026-10-24
    status: active
  - id: compaction-provenance
    finding_id: 2026-10-24-pi-coding-agent-new-compaction-research-reaches-pi-whose-stable-summary-input-still-flattens-role-provenan
    last_verified: 2026-10-24
    status: active
  - id: pending-oauth-scheme-allowlist
    finding_id: 2026-10-24-pi-coding-agent-mcp-oauth-now-rejects-non-http-authorization-urls-but-only-on-main
    last_verified: 2026-10-24
    status: active
  - id: undici-affected-runtime
    finding_id: 2026-10-24-pi-coding-agent-pi-still-pins-undici-8-10-2-after-new-upstream-advisories
    last_verified: 2026-10-24
    status: active
  - id: pending-main-runtime-and-apis
    finding_id: 2026-10-24-pi-coding-agent-main-improves-cancellation-export-and-large-stream-handling-while-changing-durable-apis
    last_verified: 2026-10-24
    status: active
  - id: durable-per-model-compaction
    finding_id: 2026-10-24-pi-coding-agent-durable-can-tune-compaction-policy-for-each-provider-and-model
    last_verified: 2026-10-24
    status: active
  - id: extension-models-import
    finding_id: 2026-10-24-pi-coding-agent-installed-extensions-can-import-the-public-pi-ai-models-subpath
    last_verified: 2026-10-24
    status: active
  - id: pending-package-install-warning
    finding_id: 2026-10-24-pi-coding-agent-main-continues-startup-when-a-configured-package-cannot-install
    last_verified: 2026-10-24
    status: active
  - id: pending-provider-cost-provenance
    finding_id: 2026-10-24-pi-coding-agent-main-separates-openrouter-reported-total-cost-from-catalog-estimates
    last_verified: 2026-10-24
    status: retired
  - id: pending-gemini-schema-rewrite
    finding_id: 2026-10-24-pi-coding-agent-main-rewrites-gemini-const-schemas-while-preserving-literal-data
    last_verified: 2026-10-24
    status: retired
  - id: pocket-patched-undici
    finding_id: 2026-10-24-pi-coding-agent-pi-pocket-declares-and-locks-a-patched-undici-graph
    last_verified: 2026-10-24
    status: active
posture_basis:
  capability:
    - 2026-05-07-pi-thin-harness-churn
    - 2026-09-21-pi-coding-agent-harnesstax-study-same-model-same-success-up-to-five-times-the-cost
    - 2026-10-13-pi-coding-agent-mcp-is-built-into-the-cli-from-0-99-0-project-servers-wait-for-trust-stdio-servers-inherit
    - 2026-10-13-pi-coding-agent-codemode-lets-the-model-script-tool-calls-the-tool-calls-stay-gated-its-model-calls-do-not
    - 2026-10-13-pi-coding-agent-the-experimental-plugin-and-server-stack-left-the-coding-agent-the-durable-harness-now-shi
    - 2026-10-13-pi-coding-agent-extensions-gained-more-reach-in-the-1-0-line-and-before-agent-start-now-also-gates-extensi
    - 2026-10-24-pi-coding-agent-resume-restores-tool-selections-and-1-4-also-admits-newly-installed-extension-tools
    - 2026-10-24-pi-coding-agent-codemode-cancellation-is-released-with-fifo-admission-and-a-wait-of-at-most-60-seconds
    - 2026-10-24-pi-coding-agent-coding-agent-compaction-and-branch-summaries-drop-the-fixed-output-cap-and-repair-recovery
    - 2026-10-24-pi-coding-agent-tool-boundaries-received-smaller-repairs-while-sdk-consumers-face-further-api-breaks
    - 2026-10-24-pi-coding-agent-durable-1-4-can-hibernate-between-phases-with-a-one-way-sqlite-upgrade
    - 2026-10-24-pi-coding-agent-durable-adds-crash-loop-parking-inspectable-telemetry-and-browser-storage
    - 2026-10-24-pi-coding-agent-the-mcp-adapter-removes-its-separate-script-engine-and-routes-approvals-through-real-tool
    - 2026-10-24-pi-coding-agent-durable-can-tune-compaction-policy-for-each-provider-and-model
    - 2026-10-24-pi-coding-agent-installed-extensions-can-import-the-public-pi-ai-models-subpath
  accessibility:
    - 2026-05-07-pi-thin-harness-churn
    - 2026-10-13-pi-coding-agent-npm-installs-stopped-pinning-transitive-dependencies-in-1-0-1-the-installer-is-the-pinned
    - 2026-10-13-pi-coding-agent-headless-runs-fail-loudly-where-they-used-to-pass-and-the-tui-went-fullscreen-by-default
    - 2026-10-24-pi-coding-agent-exact-internal-package-versions-and-the-nix-repairs-have-shipped
    - 2026-10-24-pi-coding-agent-provider-routing-and-cache-behavior-changed-without-a-model-quality-guarantee
    - 2026-10-24-pi-coding-agent-pi-has-independently-versioned-front-ends-forks-and-durable-hosts-not-one-synchronized-eco
  governance:
    - 2026-06-08-pi-coding-agent-project-trust-system
    - 2026-10-13-pi-coding-agent-mcp-is-built-into-the-cli-from-0-99-0-project-servers-wait-for-trust-stdio-servers-inherit
    - 2026-10-13-pi-coding-agent-codemode-lets-the-model-script-tool-calls-the-tool-calls-stay-gated-its-model-calls-do-not
    - 2026-10-13-pi-coding-agent-tools-stopped-being-a-strict-allowlist-once-codemode-or-tool-search-is-in-the-list-1-0
    - 2026-10-13-pi-coding-agent-project-trust-re-read-at-1-2-0-headless-runs-already-refuse-protected-resources-and-the
    - 2026-10-13-pi-coding-agent-mcp-1-2-0-stops-dispatching-calls-abandoned-during-oauth-refresh
    - 2026-10-13-pi-coding-agent-hidden-custom-messages-can-be-revealed-in-html-exports-from-0-99
    - 2026-10-24-pi-coding-agent-session-sharing-has-an-explicit-destination-setting
    - 2026-10-24-pi-coding-agent-resume-restores-tool-selections-and-1-4-also-admits-newly-installed-extension-tools
    - 2026-10-24-pi-coding-agent-durable-adds-crash-loop-parking-inspectable-telemetry-and-browser-storage
    - 2026-10-24-pi-coding-agent-the-mcp-adapter-removes-its-separate-script-engine-and-routes-approvals-through-real-tool
    - 2026-10-24-pi-coding-agent-new-compaction-research-reaches-pi-whose-stable-summary-input-still-flattens-role-provenan
    - 2026-10-24-pi-coding-agent-mcp-oauth-now-rejects-non-http-authorization-urls-but-only-on-main
    - 2026-10-24-pi-coding-agent-pi-still-pins-undici-8-10-2-after-new-upstream-advisories
    - 2026-10-24-pi-coding-agent-main-improves-cancellation-export-and-large-stream-handling-while-changing-durable-apis
    - 2026-10-24-pi-coding-agent-main-continues-startup-when-a-configured-package-cannot-install
    - 2026-10-24-pi-coding-agent-pi-pocket-declares-and-locks-a-patched-undici-graph
stance:
  use_for: "Use <a href='https://github.com/earendil-works/pi/releases/tag/v1.4.0'>Pi 1.4.0</a> for <a href='https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/mcp.md#L189-L234'>scripted MCP calls</a> when your team can isolate the Pi process and enforce tool permissions."
  avoid_for: "Avoid unattended work that needs <a href='https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/security.md'>built-in containment and approval policy</a>; scope credentials and enforce execution policy in the host."
  watch_next: "Require a non-prerelease tag containing <a href='https://github.com/earendil-works/pi/commit/9ffd27cfaaeed5c1ecf9369f393c3222975729b4'>the MCP OAuth URL allowlist</a> before treating an upgrade as the OAuth fix."
---

# Pi Coding Agent

[Pi is a coding-agent CLI](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/quickstart.md). Its [extensions](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/agent-session.ts) and [separately versioned hosts](https://github.com/agegr/pi-web/blob/v0.12.2/package.json) need their own upgrade checks.

On 22 October 2026, the optional [pi-mcp-adapter 6.0.0 removed its QuickJS interpreter in favor of Pi's codemode](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md). If you use the adapter, [review removed script settings and permission hooks before upgrading](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md#L20-L28): [nested calls expose real MCP tool identities to permission hooks](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md#L27), and [recognized Executor approval pauses reach a person or fail in sessions that cannot show dialogs](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md#L26). Pi gives other builders a layer they can stop maintaining.

## Where it stands, 2026-10-24

**Channel.** Install [stable 1.4.0, released on 21 October 2026](https://github.com/earendil-works/pi/releases/tag/v1.4.0), with [`npm install -g --ignore-scripts @earendil-works/pi-coding-agent@1.4.0`](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/quickstart.md) on [Node 22.19.0 or newer](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json). When checked on 24 October 2026 UTC, [npm `latest` was 1.4.0, with no beta/nightly tag](https://registry.npmjs.org/@earendil-works%2fpi-coding-agent), and the [managed installer selected the same release](https://pi.dev/api/installer/releases/latest).

Nix's [successful 1.4.0 build](https://github.com/earendil-works/pi/actions/runs/39686887389) closes the earlier delivery warning; pin [`github:earendil-works/pi/v1.4.0`](https://github.com/earendil-works/pi/blob/v1.4.0/flake.nix).

Codemode, [which lets the model script tool calls](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts), and tool search [remain off by default](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/cli.md), although [MCP's default exposure can activate codemode automatically](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/mcp.md#L189-L234). [Pi Durable remains a separate experimental library](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md); [installing the CLI does not add Durable to its sessions](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json).

For a CLI upgrade, prioritize [MCP sign-in targets](https://github.com/earendil-works/pi/commit/9ffd27cfaaeed5c1ecf9369f393c3222975729b4), [dependency exposure](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json), [resumed extension tools](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/agent-session.ts) and [sharing settings](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/settings.md). Durable users also need a [state backup and migration plan](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/CHANGELOG.md); SDK users need [API migration tests](https://github.com/earendil-works/pi/blob/v1.4.0/packages/ai/CHANGELOG.md). Avoid unattended work that depends on Pi itself to [contain execution or enforce approvals](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/security.md).

**Lock the installation you deploy.** [Pi's internal package versions are exact from 1.3.0](https://github.com/earendil-works/pi/blob/v1.3.0/packages/coding-agent/CHANGELOG.md). The [managed installer pins the full dependency set; ordinary npm installs still need your deployment lock](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/quickstart.md). Record the resolved dependency graph before accepting a fleet upgrade.

## The host still owns access and tool permissions

**Review unfamiliar MCP sign-in targets.** Stable [permits `file:` and custom authorization URL schemes](https://github.com/earendil-works/pi/blob/v1.4.0/packages/mcp/src/oauth/types.ts#L126-L132), allowing [a malicious server to hand sign-in to a platform protocol handler](https://github.com/earendil-works/pi/commit/9ffd27cfaaeed5c1ecf9369f393c3222975729b4). The [HTTP/HTTPS allowlist repair remains main-only](https://github.com/earendil-works/pi/commit/9ffd27cfaaeed5c1ecf9369f393c3222975729b4). Wait for a release with the repair before treating an upgrade as the fix.

**Check the host's resolved HTTP dependency.** Pi 1.4.0 [pins Undici 8.10.2](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json) and [normally installs its fetch implementation](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/http-dispatcher.ts#L81-L112). A hostile server can [send more than five content codings and close before the body, causing an unhandled error that terminates Node; 8.12.2 fixes this](https://github.com/advisories/GHSA-xjj6-f33q-929c). Pi Pocket 0.21.0 instead [overrides Undici](https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/package.json) and [locks 8.12.3](https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/package-lock.json). Check each Pi host's deployed graph before judging its exposure.

**Check compacted approval claims against the original instruction before a consequential action.** [Research published on 21 October 2026](https://arxiv.org/abs/2610.29869v1) reports [3/6 poisoned cases versus 0/5 clean controls in Pi 0.79.0](https://github.com/pixee/compaction-laundering/blob/9ce87b71301c628dfcd9232b01f1ccbdb0e67b16/disclosure/pi.md), not a measured 1.4.0 exploit rate. Pi 1.4.0 [still flattens raw message content beneath text role labels before summarization](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/utils.ts#L120-L155).

**Contain the whole process before admitting unfamiliar code.** [Extensions retain Pi's process authority](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/security.md). Enabled MCP servers [connect at CLI startup](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/mcp.md#L98-L102), with [project `.pi/mcp.json` gated by trust](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/mcp/config.ts); [stdio servers by default inherit Pi's environment plus server overrides](https://github.com/earendil-works/pi/blob/v1.4.0/packages/mcp/src/transports/stdio.ts#L94). Isolate `pi` and scrub unwanted credentials. Routing bash alone into a VM [leaves the harness outside it](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/security.md#L3-L17).

**Enforce permissions when tools run.** [Nested codemode tools traverse session hooks](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/agent-session.ts#L725-L755), but [`--tools` and codemode-only declarations do not define the full callable set](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/agent-session.ts); [active tools still resolve when called directly](https://github.com/earendil-works/pi/blob/v1.4.0/packages/agent/src/agent-loop.ts#L718-L738). Test denial through both paths.

[Classifier/image calls bypass individual tool hooks](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts#L832-L846), so withhold their credentials or reject the enclosing script.

**Override context and transcript paths in unfamiliar checkouts.** [With the default ask policy, undecided headless runs decline protected resources](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/project-trust.ts#L47-L88), but [context files load regardless of trust, and the initial project session-directory lookup precedes it](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/security.md). Use [`--no-context-files`](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/cli.md) and [`--session-dir` or `PI_CODING_AGENT_SESSION_DIR` to override the project's transcript path](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/main.ts#L671-L695).

**Choose the upload destination before sharing.** The released [`sessionShareDestination` selects `auto`, `gist` or `radius`; `auto` follows Radius authentication, otherwise using a gist](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/settings.md). Review the transcript first: [HTML recipients can reveal messages marked `display: false`](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/export-html/template.js).

## Durable hosts own wakeups and rollback

**Back up Durable state before 1.4 opens it.** SQLite [automatically migrates to schema 2, which 1.3.0 and earlier cannot open](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/CHANGELOG.md#L7-L12). [JSONL avoids that migration, but older code cannot resume sleeping tasks](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/CHANGELOG.md). Prepare rollback, replace the [removed `runtime.sleep()` and supply each document's required `checkpointWhen`](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/CHANGELOG.md) before upgrading a persistent host.

**Make the host wake sleeping jobs.** Durable's [`sleepUntil()` checkpoints a phase and releases its invocation; the host must persist the wake and reopen/resume the harness](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L139-L220). Test process death around the checkpoint/alarm handoff. For [external effects, retain idempotency or a durable protocol](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md). Check whether an interrupted write happened before retrying it.

**Show parked work separately from completed work.** Durable [by default parks tasks after five interruptions without committed progress and counts every task running at process death](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L214-L216). [`retryTask()` clears the count; raising `restartLimit` can also make parked work runnable](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/scheduler.ts). Check host policy: [Pi Pocket 0.21.0 disables parking with `restartLimit: Infinity`](https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/src/server/app.ts#L1083-L1100). Offer a recovery action wherever the guard is enabled.

## CLI and SDK upgrades need separate checks

**Review extensions before resuming old sessions.** Resume [restores recorded tool choices and activates new extension tools with direct or model-only exposure unless `defaultActive: false`; explicit CLI selection still wins](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/agent-session.ts). Retire wrappers used only to restore lost tool selections. Keep explicit exclusions when a resumed job needs a fixed tool set.

**Size codemode for memory and wait time.** The [default is two live workers per process, configurable with `PI_CODEMODE_MAX_WORKERS`; saturated calls wait FIFO for at most 60 seconds, consuming their script deadline](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts). [Pending requests have no explicit count cap, and cancelled workers retain their slots until actual exit](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts).

[A returned cancellation cannot certify that side effects stopped](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts); [HTTP MCP cancellation checks before dispatch cannot undo work already sent](https://github.com/earendil-works/pi/blob/v1.4.0/packages/mcp/src/transports/streamable-http.ts#L289-L316).

**Rebudget summaries for the component you run.** Coding-agent [compaction and branch summaries drop Pi's fixed output cap](https://github.com/earendil-works/pi/commit/6fcb48670fc0e6672a644f3b2691010321734426). Durable [retains its reserve-derived cap](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/compaction.ts#L140-L151) and adds [exact provider/model policy overrides](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L565-L582). Check retained history, summary length and spend per route before removing custom budget logic.

**Migrate SDK consumers before updating their host.** [1.3.0 removes the frame APIs](https://github.com/earendil-works/pi/blob/v1.3.0/packages/ai/CHANGELOG.md); [1.4.0 replaces `telemetryContext` with `telemetry`, `getPiUserAgent()` with `formatUserAgent()`, and the boolean `resolveTranscriptTools()` argument with `TranscriptToolSupport`](https://github.com/earendil-works/pi/blob/v1.4.0/packages/ai/CHANGELOG.md). Installed extensions can now [import public `pi-ai/models` helpers](https://github.com/earendil-works/pi/commit/22dc6c26f3c530e11b8cc40443ecdce2b3c84116). [SDK sessions must load the CLI's codemode, tool-search and MCP extensions explicitly](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/sdk.md#L110-L116). Compile and test your embedding application before deployment.

**Retest provider-specific configuration.** [Kimi Coding overrides now need `/v1`](https://github.com/earendil-works/pi/blob/v1.4.0/packages/ai/CHANGELOG.md). [`before_provider_headers` no longer sees already-inserted attribution headers; explicit null removals still apply](https://github.com/earendil-works/pi/commit/adc5fa9f800bee587e35b1a7b316e4b11a8aef24). Update endpoint overrides and header handlers, then pin provider/model IDs before comparing cache usage or cost.

**Preserve failed-job exit codes.** [`pi -p` text truncation retains the partial answer, warns and exits 1](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/modes/print-mode.ts#L139-L164). Raise the output limit or split the task instead of accepting partial output as success.

**Upgrade the embedded runtime, too.** Updating global Pi leaves [Pi-web 0.12.2 on its pinned Pi 1.2.0](https://github.com/agegr/pi-web/blob/v0.12.2/package.json) and [Pi Pocket 0.21.0 on Pi/Durable 1.4.0](https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/package.json). Before delegating work, check the host's Pi version, who can sign in and how failed jobs resume.

## What is unresolved

- **Summary authority:** require a tagged provenance-preserving or escaping repair and current-version adversarial tests to establish whether [compaction can still turn untrusted content into apparent approval](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/utils.ts#L120-L155).
- **Execution refusal:** require a tagged implementation with direct and nested denial tests for [codemode-only mode](https://github.com/earendil-works/pi/issues/10426), plus a separate CLI classifier/image control beyond [the extension factory's `models` switch](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/index.ts#L14-L45).
- **Next-release host compatibility:** main [skips packages that fail to install and continues startup](https://github.com/earendil-works/pi/commit/6dfb5467851adb603d525f9c27e28f341e3f08b9), adds [best-effort macOS command-abort repair](https://github.com/earendil-works/pi/commit/27cc6bfc0c2ca0bfdd983d3db4c992a2bfae9cc6), and [changes Durable's custom-storage and watch APIs again](https://github.com/earendil-works/pi/blob/bdb151774ed6bef2b5676bbff4669f20a0c233fe/packages/durable/CHANGELOG.md). A release with these changes plus required-extension, command-list and storage-adapter tests would establish readiness. Check that required policy extensions loaded, even if the process is running.
- **Cost and task outcomes:** run a matched 1.4.0 trial with fixed models, tools, prices and checked outcomes before extending [older efficiency results](https://arena.ai/blog/coding-agents-harness-tax). Measure completed jobs and recovery exceptions per hour of human attention, including the migration work.

## Profile hygiene

Reviewed 2026-10-24.
