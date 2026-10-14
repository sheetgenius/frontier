---
schema_version: bitter.frontier_profile.v0
profile_id: pi-coding-agent
label: Pi Coding Agent
owner: Earendil Works (formerly badlogic / Mario Zechner)
source_contract: sources/pi-coding-agent.yml
homepage: https://pi.dev/
docs: https://pi.dev/docs/latest
tagline: "Pi 1.2.0 puts MCP connections and JavaScript tool composition in the CLI."
x:
  maintainers:
    - handle: badlogicgames
      name: Mario Zechner
repo: https://github.com/earendil-works/pi
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: harness-tagged
    finding_id: 2026-09-21-pi-coding-agent-the-dev-harness-reached-main-and-a-tag-in-v0-85-0-its-plugin-surface-was-published-to-npm
    last_verified: 2026-09-23
    status: retired
  - id: harnesstax
    finding_id: 2026-09-21-pi-coding-agent-harnesstax-study-same-model-same-success-up-to-five-times-the-cost
    last_verified: 2026-10-13
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
    last_verified: 2026-10-13
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
    last_verified: 2026-10-13
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
    last_verified: 2026-10-13
    status: active
  - id: codemode-authority
    finding_id: 2026-10-13-pi-coding-agent-codemode-lets-the-model-script-tool-calls-the-tool-calls-stay-gated-its-model-calls-do-not
    last_verified: 2026-10-13
    status: active
  - id: tool-selection-reach
    finding_id: 2026-10-13-pi-coding-agent-tools-stopped-being-a-strict-allowlist-once-codemode-or-tool-search-is-in-the-list-1-0
    last_verified: 2026-10-13
    status: active
  - id: standalone-dotenv
    finding_id: 2026-10-13-pi-coding-agent-standalone-binaries-loaded-the-launch-directory-s-env-into-pi-s-own-environment-until-1-1
    last_verified: 2026-10-13
    status: active
  - id: durable-and-sdk-split
    finding_id: 2026-10-13-pi-coding-agent-the-experimental-plugin-and-server-stack-left-the-coding-agent-the-durable-harness-now-shi
    last_verified: 2026-10-13
    status: active
  - id: install-channels
    finding_id: 2026-10-13-pi-coding-agent-npm-installs-stopped-pinning-transitive-dependencies-in-1-0-1-the-installer-is-the-pinned
    last_verified: 2026-10-13
    status: active
  - id: headless-and-startup-trust
    finding_id: 2026-10-13-pi-coding-agent-project-trust-re-read-at-1-2-0-headless-runs-already-refuse-protected-resources-and-the
    last_verified: 2026-10-13
    status: active
  - id: extension-routing-and-hooks
    finding_id: 2026-10-13-pi-coding-agent-extensions-gained-more-reach-in-the-1-0-line-and-before-agent-start-now-also-gates-extensi
    last_verified: 2026-10-13
    status: active
  - id: text-print-truncation
    finding_id: 2026-10-13-pi-coding-agent-headless-runs-fail-loudly-where-they-used-to-pass-and-the-tui-went-fullscreen-by-default
    last_verified: 2026-10-13
    status: active
  - id: private-output-files
    finding_id: 2026-10-13-pi-coding-agent-hygiene-fixes-shipped-as-release-notes-again-with-no-advisory
    last_verified: 2026-10-13
    status: active
  - id: provider-migrations
    finding_id: 2026-10-13-pi-coding-agent-provider-changes-chatgpt-sign-in-on-the-openai-provider-short-lived-anthropic-credentials
    last_verified: 2026-10-13
    status: active
  - id: pending-internal-version-pins
    finding_id: 2026-10-13-pi-coding-agent-internal-pi-dependency-versions-are-pinned-on-main-not-in-1-2
    last_verified: 2026-10-13
    status: active
  - id: pending-share-destination
    finding_id: 2026-10-13-pi-coding-agent-session-share-destination-becomes-explicit-on-main-not-in-1-2
    last_verified: 2026-10-13
    status: active
  - id: pending-resume-tools
    finding_id: 2026-10-13-pi-coding-agent-resumed-sessions-recover-active-tools-on-main-with-explicit-cli-selection-taking-precedenc
    last_verified: 2026-10-13
    status: active
  - id: pending-codemode-workers
    finding_id: 2026-10-13-pi-coding-agent-bun-codemode-cancellation-and-a-two-worker-limit-are-repaired-only-on-main
    last_verified: 2026-10-13
    status: active
  - id: sdk-model-unification
    finding_id: 2026-10-13-pi-coding-agent-image-and-classifier-models-share-the-models-surface-from-0-99
    last_verified: 2026-10-13
    status: active
  - id: sdk-stream-return
    finding_id: 2026-10-13-pi-coding-agent-custom-stream-functions-must-return-assistantmessageeventstream-from-1-1
    last_verified: 2026-10-13
    status: active
  - id: mcp-cancellation
    finding_id: 2026-10-13-pi-coding-agent-mcp-1-2-0-stops-dispatching-calls-abandoned-during-oauth-refresh
    last_verified: 2026-10-13
    status: active
  - id: export-visibility
    finding_id: 2026-10-13-pi-coding-agent-hidden-custom-messages-can-be-revealed-in-html-exports-from-0-99
    last_verified: 2026-10-13
    status: active
  - id: summary-inputs
    finding_id: 2026-10-13-pi-coding-agent-compaction-and-branch-summaries-omit-thinking-blocks-in-1-2
    last_verified: 2026-10-13
    status: retired
  - id: startup-busy-state
    finding_id: 2026-10-13-pi-coding-agent-a-starting-session-is-busy-during-before-agent-start-in-1-2
    last_verified: 2026-10-13
    status: active
  - id: provider-defaults
    finding_id: 2026-10-13-pi-coding-agent-kimi-k3-and-nemotron-3-ultra-replace-retired-provider-defaults
    last_verified: 2026-10-13
    status: retired
  - id: prompt-price-tiers
    finding_id: 2026-10-13-pi-coding-agent-prompt-length-pricing-tiers-stop-disappearing-from-model-cost-estimates
    last_verified: 2026-10-13
    status: active
posture_basis:
  capability:
    - 2026-05-07-pi-thin-harness-churn
    - 2026-09-21-pi-coding-agent-harnesstax-study-same-model-same-success-up-to-five-times-the-cost
    - 2026-10-13-pi-coding-agent-mcp-is-built-into-the-cli-from-0-99-0-project-servers-wait-for-trust-stdio-servers-inherit
    - 2026-10-13-pi-coding-agent-codemode-lets-the-model-script-tool-calls-the-tool-calls-stay-gated-its-model-calls-do-not
    - 2026-10-13-pi-coding-agent-the-experimental-plugin-and-server-stack-left-the-coding-agent-the-durable-harness-now-shi
    - 2026-10-13-pi-coding-agent-extensions-gained-more-reach-in-the-1-0-line-and-before-agent-start-now-also-gates-extensi
    - 2026-10-13-pi-coding-agent-image-and-classifier-models-share-the-models-surface-from-0-99
    - 2026-10-13-pi-coding-agent-custom-stream-functions-must-return-assistantmessageeventstream-from-1-1
  accessibility:
    - 2026-05-07-pi-thin-harness-churn
    - 2026-10-13-pi-coding-agent-npm-installs-stopped-pinning-transitive-dependencies-in-1-0-1-the-installer-is-the-pinned
    - 2026-10-13-pi-coding-agent-headless-runs-fail-loudly-where-they-used-to-pass-and-the-tui-went-fullscreen-by-default
    - 2026-10-13-pi-coding-agent-provider-changes-chatgpt-sign-in-on-the-openai-provider-short-lived-anthropic-credentials
    - 2026-10-13-pi-coding-agent-internal-pi-dependency-versions-are-pinned-on-main-not-in-1-2
  governance:
    - 2026-06-08-pi-coding-agent-project-trust-system
    - 2026-10-13-pi-coding-agent-mcp-is-built-into-the-cli-from-0-99-0-project-servers-wait-for-trust-stdio-servers-inherit
    - 2026-10-13-pi-coding-agent-codemode-lets-the-model-script-tool-calls-the-tool-calls-stay-gated-its-model-calls-do-not
    - 2026-10-13-pi-coding-agent-tools-stopped-being-a-strict-allowlist-once-codemode-or-tool-search-is-in-the-list-1-0
    - 2026-10-13-pi-coding-agent-standalone-binaries-loaded-the-launch-directory-s-env-into-pi-s-own-environment-until-1-1
    - 2026-10-13-pi-coding-agent-project-trust-re-read-at-1-2-0-headless-runs-already-refuse-protected-resources-and-the
    - 2026-10-13-pi-coding-agent-hygiene-fixes-shipped-as-release-notes-again-with-no-advisory
    - 2026-10-13-pi-coding-agent-session-share-destination-becomes-explicit-on-main-not-in-1-2
    - 2026-10-13-pi-coding-agent-resumed-sessions-recover-active-tools-on-main-with-explicit-cli-selection-taking-precedenc
    - 2026-10-13-pi-coding-agent-bun-codemode-cancellation-and-a-two-worker-limit-are-repaired-only-on-main
    - 2026-10-13-pi-coding-agent-mcp-1-2-0-stops-dispatching-calls-abandoned-during-oauth-refresh
    - 2026-10-13-pi-coding-agent-hidden-custom-messages-can-be-revealed-in-html-exports-from-0-99
    - 2026-10-13-pi-coding-agent-a-starting-session-is-busy-during-before-agent-start-in-1-2
stance:
  use_for: "Use Pi for <a href='https://github.com/earendil-works/pi/releases/tag/v0.99.0'>CLI work with native MCP and scripted tools</a> when you can own containment and credentials."
  avoid_for: "Avoid Pi when you need <a href='https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L3-L17'>turnkey approval and containment policy</a>."
  watch_next: "Watch for <a href='https://github.com/earendil-works/pi/issues/10426'>a tagged fix that enforces codemode-only execution</a>."
---

# Pi Coding Agent

On 29 September 2026, [Pi 0.99.0 built Model Context Protocol (MCP) connections and codemode into the CLI](https://github.com/earendil-works/pi/releases/tag/v0.99.0).
You can drop the separate MCP adapter and let the model
[compose tool calls in JavaScript](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/codemode.md),
while [extensions and child processes retain your permissions](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L3-L17).
The architectural trade is less adapter code to maintain, with operator attention
still required for server configuration, credential scope and execution policy.

## Where it stands, 2026-10-13

**Use the managed installer for repeatable CLI fleets.**
[Stable 1.2.0 was released on 12 October 2026](https://github.com/earendil-works/pi/releases/tag/v1.2.0).
For this upgrade, check [HTTP MCP cancellation](https://github.com/earendil-works/pi/commit/da0eadf0433d29516287c7e3d7b3db325a446281),
[batch-job exit codes](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/modes/print-mode.ts#L139-L157) and [extension startup handlers](https://github.com/earendil-works/pi/commit/a447ba11f3e7760fcff91e924bda8c20033953ea).

The documented macOS/Linux command,
[`curl -fsSL https://pi.dev/install.sh | sh`](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/quickstart.md#L7-L30),
requires [Node 22.19.0 or newer](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/package.json).
[The installer pins dependencies](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/quickstart.md#L7-L30);
[npm stopped pinning transitive dependencies in 1.0.1](https://github.com/earendil-works/pi/commit/581e7ba78141a4d8b61cc9d11b8b22ae7e59195e).

For npm, pin 1.2.0 with
[`npm install -g --ignore-scripts @earendil-works/pi-coding-agent@1.2.0`](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/quickstart.md#L7-L30);
keep your own lockfile for repeatable npm deployments.

**Check Nix's installed version before relying on 1.2.0 behavior.** For 1.2.0,
[the Nix release workflow failed all three platform builds and skipped the stable update on 12 October 2026](https://github.com/earendil-works/pi/actions/runs/38318646655).
Use the managed installer if you need 1.2.0; see
[below](#what-is-unresolved) for the Nix catch-up condition.

**Review MCP processes before trusting a checkout.** Enabled servers
[connect at CLI session startup](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/mcp.md#L100),
[including headless runs](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/main.ts#L577);
[project `.pi/mcp.json` waits for trust](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/config.ts#L134-L148).
[Stdio servers inherit Pi's environment, including exported provider keys, with per-server overrides](https://github.com/earendil-works/pi/blob/v1.2.0/packages/mcp/src/transports/stdio.ts#L94).
[Routing only bash into a VM leaves the harness outside it](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L13-L17).
Isolate the whole `pi` process or scrub its environment before launch.

**Override context and transcript paths for unfamiliar checkouts.** Under the
[default `ask` policy](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-defaults.ts#L29),
[undecided headless runs decline protected resources unless an override, extension or saved decision supplies trust](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/project-trust.ts#L47-L88).
[Context files still load, and the initial project `sessionDir` lookup precedes trust](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L25-L60).
Use [`--no-context-files`](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/cli.md#L214-L215) and
[`--session-dir` or `PI_CODING_AGENT_SESSION_DIR`, which outrank project settings](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/main.ts#L671-L694).

**Choose codemode's credentials when enabling it.**
[`codemode` and `tool_search` are off by default](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/cli.md#L151-L156),
but [an MCP server connecting with default `codemode` exposure activates codemode; `autoEnableCodemode: false` stops only that automatic activation](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/mcp.md#L204-L230).

[Classifier/image operations use session credentials](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/codemode.md#L60-L62)
and [bypass individual tool hooks](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/execute.ts#L740-L751).
Withhold unwanted provider credentials or reject the enclosing script.

**Enforce access in tool hooks.**
[Nested calls traverse those hooks](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L730-L760).
[Since 1.0.4](https://github.com/earendil-works/pi/releases/tag/v1.0.4), [`pi --tools read,codemode` retains registered MCP tools with codemode/deferred exposure; hidden tools and inactive direct tools stay excluded](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1541-L1571).
[`codemode.mode: "only"` hides declarations](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1771-L1789)
while [execution still accepts active tools called directly](https://github.com/earendil-works/pi/blob/v1.2.0/packages/agent/src/agent-loop.ts#L708-L735).
Apply policy to direct and scripted calls. Allow the codemode entry itself when
intended.

To exclude all built-in MCP tools by name, exclude the following patterns and helper names:
[`mcp__*`, `list_mcp_resources`, `list_mcp_resource_templates` and `read_mcp_resource`](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/mcp-servers.ts#L12-L40).
Use [`--no-mcp` for complete built-in MCP shutdown](https://github.com/earendil-works/pi/releases/tag/v1.0.4).

**Replace older standalone binaries.** A reporter
showed [1.0.2 loading a checkout's `.env` into Pi's environment](https://github.com/earendil-works/pi/issues/10473);
[1.1.0 disables dotenv autoload in those Bun builds](https://github.com/earendil-works/pi/commit/1ffb6bd621c29d7c8e38bb3b3c1cdcbda6b6ea90).
Inspect sessions started in unfamiliar checkouts with a `.env`.

On shared hosts, remove old `pi-bash-*`, `pi-output-*`, `pi-powershell-*` and
`pi-mcp-*` temp output:
[1.0.3 added owner-only permissions and exclusive creation](https://github.com/earendil-works/pi/commit/d677d0ee7134f834dfc163bf6bdb395df9e57c6b).

**Inspect exports before sharing.** HTML viewers
[let recipients reveal custom messages marked `display: false`](https://github.com/earendil-works/pi/commit/b2bd111f2d46eed1a4689c32f30fde6306498827).
Treat the display flag as presentation, not redaction.

**Use 1.2.0 before relying on HTTP MCP cancellation.** It
[stops calls canceled during shared OAuth refresh from dispatching afterward](https://github.com/earendil-works/pi/commit/da0eadf0433d29516287c7e3d7b3db325a446281).
For an operation already sent, check the server's outcome.

**Treat truncated text output as a failed job.** In 1.2.0,
[`pi -p` in text mode retains the partial answer, warns on stderr and exits 1](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/modes/print-mode.ts#L139-L157)
when the final response hits its output limit. Raise that limit or split the task
instead of masking the exit code.

**Migrate off the removed harness and source-only client/plugin APIs.**
[1.0.0 removed the harness from pi-agent-core](https://github.com/earendil-works/pi/blob/v1.0.0/packages/agent/CHANGELOG.md#L7);
[1.2.0 removed the experimental client/server/plugin source stack](https://github.com/earendil-works/pi/commit/7472cda0d6e51dfbf53c03f46b47aa42ac64bf64).
Use the coding-agent SDK/RPC.
[SDK sessions do not load the CLI's built-ins automatically](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/mcp.md).
Durable applications can evaluate
[Pi Durable, a separate experimental library](https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3).
For pi-ai adapters,
[migrate image models to Models/Provider from 0.99.0](https://github.com/earendil-works/pi/blob/v0.99.0/packages/ai/CHANGELOG.md#L5-L9)
and [return AssistantMessageEventStream from custom stream functions from 1.1.0](https://github.com/earendil-works/pi/blob/v1.1.0/packages/ai/CHANGELOG.md#L5-L12).

**Port extension startup handlers for 1.2.0.**
[`before_agent_start` now covers extension-started runs and distinguishes user/custom messages; startup counts as busy, `sendMessage` queues and `sendUserMessage` needs `deliverAs`](https://github.com/earendil-works/pi/commit/a447ba11f3e7760fcff91e924bda8c20033953ea).
Check [`event.messageType === "user"` where a handler needs a user prompt](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/CHANGELOG.md#L16) and choose delivery explicitly.

<details>
<summary>Provider migrations for earlier upgrades</summary>

**Rename Azure provider keys and references before upgrading.** From 1.0.3,
[Pi's provider ID is `azure`; the API ID `azure-openai-responses` and `AZURE_OPENAI_*` variables stay unchanged](https://github.com/earendil-works/pi/blob/v1.0.3/packages/ai/CHANGELOG.md#L5-L11).

**Pin provider routes and models for repeatable work.** Pi's
[legacy OpenAI Codex route defaults to `gpt-6.1-sol` from 0.99.1](https://github.com/earendil-works/pi/releases/tag/v0.99.1).
Rebaseline long-prompt costs with
[1.1.0's correction to estimated long-prompt costs](https://github.com/earendil-works/pi/commit/943a10e744b87d9a593f3dca7406d4671910f490).

</details>

<h2 id="what-is-unresolved">What is unresolved</h2>

- When Nix will catch up after [the failed release build](https://github.com/earendil-works/pi/actions/runs/38318646655).
  [The repair is only on main](https://github.com/earendil-works/pi/commit/0a8cfff4cbcbbdb0071ebe056f1fcb5710e7fcf0).
  Successful tagged builds followed by `stable` advancing settle availability.
- Which releases will contain the 13 October 2026 changes. Main adds
  [exact internal Pi dependency versions](https://github.com/earendil-works/pi/commit/f13c00fb3a4d77ad3faa815057e31d614d42b3f1),
  [explicit share destinations](https://github.com/earendil-works/pi/commit/cea257439d5666ad6a987c065eb3ab0e230a135d),
  [restored active tools on resume unless explicit CLI selection overrides them](https://github.com/earendil-works/pi/commit/6f2f164ab7e7f1516c4530da396b151ab2f84779),
  and [Bun codemode cancellation that returns promptly, with a two-worker limit across sessions](https://github.com/earendil-works/pi/commit/3daa20280f6a7c7cbe0935680c9a38fdc3863005).
  [None is in 1.2.0](https://github.com/earendil-works/pi/compare/v1.2.0...3daa20280f6a7c7cbe0935680c9a38fdc3863005). A tag containing a change's commit would confirm its release.
  Until then, inspect share destinations and record tool selections in wrappers.
  Distinguish a returned cancellation from a worker stopping.
- When codemode-only mode will enforce execution. Look for a tagged fix for
  [the open restriction](https://github.com/earendil-works/pi/issues/10426)
  with passing direct and nested call tests.
- Whether the CLI will offer a separate classifier/image-call control. A tagged
  user setting beyond the
  [extension factory's `models` option](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/index.ts#L14-L45)
  verified to block those calls would settle it.
- Whether Pi 1.2.0 preserves the cost and task-success results reported in
  [the September 2026 HarnessTax comparison](https://arena.ai/blog/coding-agents-harness-tax),
  particularly on long-horizon work. A matched-task evaluation with fixed
  models, tools and pricing would answer it.

## Review date and sources

This profile covers 2026-10-13, not subsequent releases. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md)
for the evidence contract.

## Profile hygiene

Legacy marker for the unchanged draft checker. The site removes this final section.
