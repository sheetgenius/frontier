---
schema_version: bitter.frontier_profile.v0
profile_id: deepseek-harness
label: DeepSeek Harness
owner: deepseek-ai
source_contract: sources/deepseek-harness.yml
homepage: https://deepseek.com/harness/en/
docs: https://github.com/deepseek-ai/deepseek-harness/tree/d743267388641bc76f17c45ce8b4c231aed1d32c/docs
tagline: "DeepSeek Harness resumes the saved conversation, not the processes it was running."
compared_with:
  - codex
  - claude-code
repo: https://github.com/deepseek-ai/deepseek-harness
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-10-24
last_full_review: 2026-10-24
claims:
  - id: web-ui-login
    finding_id: 2026-10-13-deepseek-harness-alpha-2-rejects-wildcard-web-binds-and-adds-native-tls-rc-still-permits-wildcard-configura
    last_verified: 2026-10-13
    status: retired
  - id: still-prerelease
    finding_id: 2026-10-13-deepseek-harness-npm-latest-is-0-2-0-rc-2-every-distribution-remains-prerelease
    last_verified: 2026-10-24
    status: active
  - id: any-row-replaceable
    finding_id: 2026-10-13-deepseek-harness-the-web-terminal-and-live-plugin-manager-reach-rc-optional-auto-review-runs-allowed-calls
    last_verified: 2026-10-24
    status: retired
  - id: more-data-to-deepseek
    finding_id: 2026-09-21-deepseek-harness-more-outbound-data-to-deepseek-by-default-the-session-log-upload-flipped-on-in-the-alpha
    last_verified: 2026-09-23
    status: retired
  - id: gates-removed-by-default
    finding_id: 2026-09-21-deepseek-harness-defaults-that-removed-human-gates-public-webfetch-without-per-request-approval-web-termina
    last_verified: 2026-09-23
    status: retired
  - id: bubblewrap-escape-safety-md
    finding_id: 2026-09-21-deepseek-harness-security-fixes-a-bubblewrap-escape-via-proc-safety-md-now-says-nothing-is-audited
    last_verified: 2026-09-23
    status: retired
  - id: default-model-v4-1-flash
    finding_id: 2026-09-21-deepseek-harness-default-model-moved-to-deepseek-v4-1-flash-default-wire-protocol-moved-to-messages-on-alph
    last_verified: 2026-09-23
    status: retired
  - id: upgrade-breaks
    finding_id: 2026-10-13-deepseek-harness-the-rc-upgrade-rejects-protocol-configs-and-migrates-settings-presets-logs-and-plugin-apis
    last_verified: 2026-10-24
    status: active
  - id: acp-headless-remote
    finding_id: 2026-09-21-deepseek-harness-capability-half-what-an-operator-can-do-now-that-they-could-not-on-2026-08
    last_verified: 2026-09-23
    status: retired
  - id: gate-is-a-plugin
    finding_id: 2026-10-13-deepseek-harness-the-web-terminal-and-live-plugin-manager-reach-rc-optional-auto-review-runs-allowed-calls
    last_verified: 2026-10-24
    status: retired
  - id: web-ui-unauthenticated
    finding_id: 2026-08-17-deepseek-harness-nothing-authenticates-the-web-ui-on-127-0-0-1-3080-and-the-api-fence
    last_verified: 2026-08-20
    status: retired
  - id: plugins-are-unsandboxed-in-process
    finding_id: 2026-10-13-deepseek-harness-the-web-terminal-and-live-plugin-manager-reach-rc-optional-auto-review-runs-allowed-calls
    last_verified: 2026-10-24
    status: active
  - id: one-channel-and-it-is-a-prerelease
    finding_id: 2026-08-17-deepseek-harness-the-whole-project-ships-to-exactly-one-channel-and-it-is-a
    last_verified: 2026-08-20
    status: retired
  - id: runs-rival-models-and-harnesses
    finding_id: 2026-10-13-deepseek-harness-alpha-adds-rival-harness-catalog-bundles-and-a-shared-global-instruction-chain
    last_verified: 2026-10-24
    status: active
  - id: rc-8-still-plugin-gate
    finding_id: 2026-08-20-deepseek-harness-still-prerelease-gate-still-a-plugin-ui-still-unauthenticated
    last_verified: 2026-08-20
    status: retired
  - id: desktop-update-policy
    finding_id: 2026-10-13-deepseek-harness-npm-latest-is-0-2-0-rc-2-every-distribution-remains-prerelease
    last_verified: 2026-10-13
    status: retired
  - id: default-session-log-upload
    finding_id: 2026-10-13-deepseek-harness-session-log-upload-is-enabled-in-the-default-rc-install-the-telemetry-environment-switch
    last_verified: 2026-10-24
    status: active
  - id: same-user-cookie-authority
    finding_id: 2026-10-13-deepseek-harness-the-web-cookie-signing-key-crosses-the-same-user-agent-and-operator-boundary
    last_verified: 2026-10-24
    status: active
  - id: auto-review-unload-full-access
    finding_id: 2026-10-13-deepseek-harness-the-web-terminal-and-live-plugin-manager-reach-rc-optional-auto-review-runs-allowed-calls
    last_verified: 2026-10-24
    status: active
  - id: scheduled-user-framing
    finding_id: 2026-10-13-deepseek-harness-scheduled-reminders-are-framed-as-user-messages-after-an-untrusted-content-instruction-was
    last_verified: 2026-10-24
    status: active
  - id: windows-delete-and-standing-labels
    finding_id: 2026-10-13-deepseek-harness-windows-delete-confinement-improves-in-0-1-7-workspace-low-labels-persist-and-require-modu
    last_verified: 2026-10-24
    status: active
  - id: sandbox-safety-warning
    finding_id: 2026-10-13-deepseek-harness-windows-delete-confinement-improves-in-0-1-7-workspace-low-labels-persist-and-require-modu
    last_verified: 2026-10-24
    status: active
  - id: ranged-vendor-dependencies
    finding_id: 2026-10-13-deepseek-harness-a-cli-version-pin-does-not-freeze-ranged-dependencies-in-deepseek-s-vendored-cordis-stack
    last_verified: 2026-10-24
    status: active
  - id: plugin-public-registry-fallback
    finding_id: 2026-10-13-deepseek-harness-the-rc-plugin-manager-defaults-to-public-npmmirror-fallback
    last_verified: 2026-10-24
    status: active
  - id: bundle-patch-path-containment
    finding_id: 2026-10-13-deepseek-harness-cve-2026-101132-names-bundle-patch-traversal-current-rc-and-alpha-lack-path-containment
    last_verified: 2026-10-24
    status: active
  - id: account-funded-desktop-runtime
    finding_id: 2026-10-13-deepseek-harness-account-funded-model-routes-and-bundled-desktop-cli-reduce-setup-work
    last_verified: 2026-10-13
    status: retired
  - id: messages-only-config-migration
    finding_id: 2026-10-13-deepseek-harness-the-rc-upgrade-rejects-protocol-configs-and-migrates-settings-presets-logs-and-plugin-apis
    last_verified: 2026-10-24
    status: active
  - id: headless-resume-current-rc
    finding_id: 2026-10-13-deepseek-harness-ralph-is-disabled-headless-resume-and-model-declared-tool-changes-reach
    last_verified: 2026-10-24
    status: retired
  - id: ralph-needs-independent-evaluation
    finding_id: 2026-10-13-deepseek-harness-ralph-is-disabled-headless-resume-and-model-declared-tool-changes-reach
    last_verified: 2026-10-24
    status: retired
  - id: background-wake-cap-removed
    finding_id: 2026-10-13-deepseek-harness-background-job-completion-wakes-no-longer-have-a-default-three-turn-cap
    last_verified: 2026-10-24
    status: retired
  - id: alpha-listener-and-tls
    finding_id: 2026-10-13-deepseek-harness-alpha-2-rejects-wildcard-web-binds-and-adds-native-tls-rc-still-permits-wildcard-configura
    last_verified: 2026-10-24
    status: retired
  - id: alpha-global-instructions
    finding_id: 2026-10-13-deepseek-harness-alpha-adds-rival-harness-catalog-bundles-and-a-shared-global-instruction-chain
    last_verified: 2026-10-24
    status: retired
  - id: alpha-tool-and-team-contracts
    finding_id: 2026-10-13-deepseek-harness-alpha-2-changes-tool-and-subagent-contracts-and-removes-agent-team-outbox-delivery
    last_verified: 2026-10-24
    status: retired
  - id: alpha-webruntime-migration
    finding_id: 2026-10-13-deepseek-harness-alpha-2-removes-webruntime-old-overlays-can-stop-connection-startup
    last_verified: 2026-10-24
    status: retired
  - id: alpha-reasoning-translation-egress
    finding_id: 2026-10-13-deepseek-harness-optional-alpha-reasoning-translation-adds-a-separate-data-destination
    last_verified: 2026-10-24
    status: retired
  - id: alpha-persistent-working-directory
    finding_id: 2026-10-13-deepseek-harness-alpha-2-gives-session-working-directory-changes-a-persistent-api-and-recovery-path
    last_verified: 2026-10-24
    status: retired
  - id: cve-linux-isolation-publication
    finding_id: 2026-10-13-deepseek-harness-cve-2026-101078-publishes-a-local-linux-isolation-allegation-without-an-established-curren
    last_verified: 2026-10-24
    status: active
  - id: cve-code-mode-publication
    finding_id: 2026-10-13-deepseek-harness-cve-2026-101102-documents-the-older-code-mode-host-user-trust-model
    last_verified: 2026-10-13
    status: retired
  - id: cve-e2b-publication
    finding_id: 2026-10-13-deepseek-harness-cve-2026-101131-alleges-an-e2b-setup-trust-problem-in-a-retired-component
    last_verified: 2026-10-13
    status: retired
  - id: cve-bundle-traversal-publication
    finding_id: 2026-10-13-deepseek-harness-cve-2026-101132-names-bundle-patch-traversal-current-rc-and-alpha-lack-path-containment
    last_verified: 2026-10-24
    status: retired
  - id: cve-spawn-profile-publication
    finding_id: 2026-10-13-deepseek-harness-cve-2026-108788-publishes-an-older-spawn-profile-allegation-with-an-unresolved-mechanism
    last_verified: 2026-10-24
    status: active
  - id: cve-workflow-publication
    finding_id: 2026-10-13-deepseek-harness-cve-2026-108789-concerns-a-trusted-workflow-vm-already-replaced-by-sandboxed-ptc
    last_verified: 2026-10-13
    status: retired
  - id: rc-migrations-and-schedule
    finding_id: 2026-10-24-deepseek-harness-the-rc-line-inherits-alpha-s-listener-instruction-and-integration-contracts-including-enab
    last_verified: 2026-10-24
    status: active
  - id: plugin-admission-and-reload
    finding_id: 2026-10-24-deepseek-harness-plugin-discovery-and-hot-reload-expand-while-explicit-compatibility-checks-reject-mismatch
    last_verified: 2026-10-24
    status: active
  - id: credential-provenance
    finding_id: 2026-10-24-deepseek-harness-saved-credentials-win-in-web-and-desktop-while-headless-stops-loading-them-by-default
    last_verified: 2026-10-24
    status: active
  - id: sdk-resume-and-ptc-memory
    finding_id: 2026-10-24-deepseek-harness-sdk-session-resume-and-optional-ptc-memory-reduce-restart-work-without-restoring-running
    last_verified: 2026-10-24
    status: active
  - id: non-owner-api-grants
    finding_id: 2026-10-24-deepseek-harness-api-resource-authorization-constrains-non-owner-clients-but-retains-browser-owner-authorit
    last_verified: 2026-10-24
    status: active
  - id: cua-source-experiment
    finding_id: 2026-10-24-deepseek-harness-native-macos-computer-use-reaches-tagged-source-as-an-explicitly-unmounted-experiment
    last_verified: 2026-10-24
    status: active
  - id: hosted-retrieval-egress
    finding_id: 2026-10-24-deepseek-harness-search-and-fetch-apis-add-an-opt-in-hosted-retrieval-route-with-separate-prompt-egress
    last_verified: 2026-10-24
    status: active
  - id: dynamic-api-key-catalog
    finding_id: 2026-10-24-deepseek-harness-rc-3-discovers-official-api-key-models-dynamically-instead-of-relying-only-on-the-bundled
    last_verified: 2026-10-24
    status: active
  - id: display-masking-only
    finding_id: 2026-10-24-deepseek-harness-default-credential-masking-changes-sent-message-display-not-model-input-or-stored-history
    last_verified: 2026-10-24
    status: active
  - id: desktop-analytics-live-control
    finding_id: 2026-10-24-deepseek-harness-rc-3-adds-navigation-customization-and-more-desktop-analytics-events-with-a-separate-live
    last_verified: 2026-10-24
    status: active
  - id: http-mcp-redirect-exposure
    finding_id: 2026-10-24-deepseek-harness-the-shipped-http-mcp-client-is-in-the-affected-range-of-the-redirect-advisory
    last_verified: 2026-10-24
    status: active
  - id: undici-fetch-affected-pin
    finding_id: 2026-10-24-deepseek-harness-undici-advisories-overlap-exact-runtime-pins-including-the-local-web-fetch-implementation
    last_verified: 2026-10-24
    status: active
  - id: desktop-cookie-accumulation
    finding_id: 2026-10-24-deepseek-harness-desktop-s-changing-ports-and-long-lived-authority-specific-cookies-support-an-accumulation
    last_verified: 2026-10-24
    status: active
  - id: main-auto-and-sdk-approvals
    finding_id: 2026-10-24-deepseek-harness-main-preserves-auto-on-shutdown-and-adds-opt-in-sdk-approval-handling-while-live-unload
    last_verified: 2026-10-24
    status: active
  - id: main-private-destination-fetch
    finding_id: 2026-10-24-deepseek-harness-main-removes-local-web-fetch-s-public-destination-boundary
    last_verified: 2026-10-24
    status: active
  - id: profile-reset-deletes-target
    finding_id: 2026-10-24-deepseek-harness-recreating-a-custom-profile-now-deletes-its-previous-directory
    last_verified: 2026-10-24
    status: active
  - id: minimal-images-and-compaction
    finding_id: 2026-10-24-deepseek-harness-minimal-gains-image-reading-and-automatic-and-manual-history-compaction
    last_verified: 2026-10-24
    status: active
  - id: python-optional-resources
    finding_id: 2026-10-24-deepseek-harness-current-python-distributions-require-explicit-optional-resource-downloads
    last_verified: 2026-10-24
    status: active
  - id: coding-tools-default-reset
    finding_id: 2026-10-24-deepseek-harness-turning-coding-tools-off-can-reset-the-saved-default-from-any-authenticated-browser
    last_verified: 2026-10-24
    status: active
  - id: python-ptc-confinement-rc
    finding_id: 2026-10-24-deepseek-harness-the-rc-upgrade-promotes-python-ptc-filesystem-confinement
    last_verified: 2026-10-24
    status: active
  - id: channel-selection-2026-10-24
    finding_id: 2026-10-24-deepseek-harness-published-channel-selectors-disagree-and-the-harness-remains-entirely-prerelease
    last_verified: 2026-10-24
    status: active
stance:
  use_for: 'Trial <a href="https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sdk/client/README.md">saved-session resume</a> with 0.2.1-rc.2 in a disposable VM.'
  avoid_for: 'Production isolation: the vendor calls the harness <a href="https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/SAFETY.md">experimental and unaudited</a>.'
  watch_next: 'A released repair and same-user regression test for <a href="https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts#L142-L198">owner signing material</a>.'
---

# DeepSeek Harness

The [14 October 2026 0.2.1-alpha.3 release](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.3) brought [SDK resume of the same session ID, history and working directory](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sdk/client/README.md). That can retire conversation-reconstruction glue.

Resume [does not restore shell or browser processes](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sdk/client/README.md). [Node code execution starts fresh for each call by default; optional in-memory state starts empty on resume](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/ptc-runtime/ptc-runtime-node/README.md#L70-L84). Keep a separate record of completed external actions so retrying interrupted work does not repeat them.

## Where it stands, 2026-10-24

**Quick decision:** Install pinned [0.2.1-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.2) in a disposable VM using the command below. [Every GitHub release remains prerelease](https://api.github.com/repos/deepseek-ai/deepseek-harness/releases?per_page=100). [Rc.3 is the newer CLI preview](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.3); [native macOS Computer Use requires experimental source setup](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/cua-macos/README.md#L28-L62); [hosted Search/Fetch is off by default](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-deepseek-api/README.md). Main's [shutdown preservation](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/experimental/auto-review/README.md) and [broader network fetching](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/web/web-fetch-http/README.md) remain unreleased. Before upgrading, [remove recurring `--from-default-profile`](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.2/from-default-profile-replaces-target/guide.md), [migrate old configuration](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1), and review data controls. Avoid production use, valuable host credentials, unreviewed plugins and credentialed HTTP MCP without a checked redirect boundary.

**Channel.** In a disposable VM, install [0.2.1-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.2) with [`npm install @deepseek-ai/dsh@0.2.1-rc.2`](https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.2.1-rc.2). Check the lock before `npx dsh web`: [vendor dependencies use ranges](https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.2.1-rc.2). At the 24 October 2026 read, [npm `latest` selects rc.2 and `next` selects 0.2.1-rc.3](https://registry.npmjs.org/@deepseek-ai%2Fdsh); [there is no stable harness](https://api.github.com/repos/deepseek-ai/deepseek-harness/releases?per_page=100). Keep it out of production under the [vendor's experimental, unaudited isolation warning](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/SAFETY.md).

## Choose the distribution explicitly

- Newer CLI preview: [0.2.1-rc.3, published on 23 October 2026](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.3): `npx @deepseek-ai/dsh@0.2.1-rc.3 web`. Choose it for [dynamic API-key model discovery, limited to the official origin and unmodified built-in catalog](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/llm/llm-deepseek-api-key/README.md#L40-L51).
- TypeScript SDK: Pin [0.2.1-rc.2](https://registry.npmjs.org/@deepseek-ai%2Fdsh-sdk-client/0.2.1-rc.2) to match the recommended runtime, or match rc.3 explicitly. Its [`latest` still selects 0.0.1-rc.1](https://registry.npmjs.org/@deepseek-ai%2Fdsh-sdk-client).
- Python SDK: [`pip install deepseek-harness-sdk==0.2.1rc2`](https://pypi.org/pypi/deepseek-harness-sdk/0.2.1rc2/json).
- Desktop Nightly: [macOS ARM is rc.3](https://download.deepseek.com/dsh-desk/feeds/mac-arm64/nightly-mac.yml), [Windows x64 is rc.3](https://download.deepseek.com/dsh-desk/feeds/win-x64/nightly.yml), [macOS Intel is rc.1](https://download.deepseek.com/dsh-desk/feeds/mac-x64/nightly-mac.yml). Check Intel's older feature set before switching from CLI.
- Native macOS Computer Use: [Tagged experimental source requires local setup and consent; no shipped profile mounts it](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/cua-macos/README.md#L28-L62); do not treat a Desktop installation as access to this experiment.

**Try Minimal before maintaining image and history helpers.** The preset [now reads images, compacts history automatically and offers `/compact` while idle](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-agent-preset/README.md).

## Before launching the trial

**Remove `--from-default-profile` from recurring launch commands.** In both current rc versions, [it replaces an existing custom profile, deleting dependencies, `node_modules` and `cordis.patch.yml`, even with help or config-dump requests](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.2/from-default-profile-replaces-target/guide.md). Save the patch before an intentional reset.

**Migrate an older rc trial before launching it.** The [17 October 2026 0.2.1-rc.1 release brought the former alpha contracts into the rc line](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1). [Replace `webRuntime` with `webStartup`; wildcard listeners are rejected](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.1/web-listener-trust-config/guide.md). [Native TLS is available](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1). Inspect [`DSH_HOME/AGENTS.md` and `DSH_AGENTS_HOME/AGENTS.md`, loaded before project instructions](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/context/agent-instructions/README.md#L30-L42).

Custom integrations must [replace `both` tool presentation with `native` or `ptc` and adopt `session/wait`](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1), handle [Team delivery without retained outbox intent or automatic retry](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/agent-team/README.md#L64-L70), and remove the [rejected adapter `protocol` key](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/llm/llm-deepseek/src/config.ts). Custom Python PTC compositions [require `sandbox` and `sandboxPolicy` and fail restricted runs when confinement is unavailable](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.1/python-ptc-sandbox/guide.md); test allowed workspace writes and denied outside writes.

**Prepare optional Python resources for offline deployment.** The [current contract requires explicit `download_office()` and `download_primary_runtime()` calls for optional resources; startup does not download them](https://github.com/deepseek-ai/deepseek-harness/blob/687f282e8625c6b8d11ff58211a90524be2e4317/docs/upgrade-guide/v0.2.1-alpha.1/python-optional-resources/guide.md). Prepare platform-matched caches for offline use.

## Who holds authority

**Keep valuable credentials outside the trial.** [Resource/action grants now deny missing or failed checks for non-owner API clients](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/api/remote-access/README.md#L27-L42). Browsers [retain owner authority](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/rpc-host.ts#L90-L94). [Signing material remains in a persistent credential record](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts#L142-L198), and [the Linux read policy permits host-file reads](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sandbox/sandbox-local/src/profiles.ts#L27-L35). A same-user command that can read the secret and reach the API could therefore act as [that owner](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/rpc-host.ts#L90-L94).

**Choose which key pays for automation.** Web and Desktop [prefer saved credentials to launch-environment values](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/credentials/credentials/README.md), while shipped headless [disables the saved provider](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/headless/cordis.patch.yml#L35-L43). Check the credential source before moving a desktop experiment into a script.

**Disable `tool-schedule` explicitly when reminder origin matters.** DeepSeek's current rc [enables Schedule in Standard, Creator and PTC; Minimal and subagents exclude it](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1). Model-written reminders still [arrive framed as messages from the user](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/schedule/schedule/src/domain.ts). When external material must retain its origin, inspect reminder text or disable the tools in each affected preset.

**Leave Auto review off without a transition plan.** In the current rc, [unloading it moves live Auto sessions to Full access with approval policy `never`](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/experimental/auto-review/README.md). Move those sessions to Workspace Write first. Main's [shutdown preservation is unreleased and still excludes live unload/reload](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/experimental/auto-review/README.md).

**Recheck the new-session default after changing Coding Tools.** [Turning it off can reset saved built-in PTC or Minimal defaults to Standard from any authenticated browser, and turning it back on does not restore them](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-agent-preset/README.md#L30-L32).

**Revoke Windows trial grants after exit.** This backend [leaves workspace Low labels and access entries in place and does not confine reads or networking](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sandbox/sandbox-windows-acl/README.md). Follow its documented revocation path when retiring the trial.

## What leaves the trial

**Set data controls before the first request.** For a private trial, disable [default-on `session-log-deepseek` with `enabled: false`](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/session/session-log-deepseek/README.md) and [default-on plugin-package inventory](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/llm/plugin-package-inventory-deepseek/README.md). [`DSH_TELEMETRY_DISABLED=1` changes only session-feedback telemetry](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/app-boot/src/profile-context.ts#L39-L54). For Desktop, also set [`product-analytics.enabled=false` in live settings; it lacks a user-facing switch and queued exports may finish](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/product-analytics/README.md#L24-L58).

Keep private sessions' upload disabled: [re-enabling includes events recorded while it was off](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/session/session-log-deepseek/README.md). [Credential masking preserves stored text and model input](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/ui-secret-mask/README.md#L12-L45); keep secrets out of prompts.

**Approve hosted retrieval's extra disclosure before enabling it.** Rc.2's [Search/Fetch API route is off by default, separately billed and has no silent fallback](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-deepseek-api/README.md). Once enabled, [default `sendOriginalQuestion=true` sends the latest human question](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-deepseek-api/README.md#L39-L59), [limited to 128 Unicode characters](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-deepseek-api/src/search.ts#L97-L105). Set it to false if only the query should leave.

## Plugins and delegated agents

Review a plugin before admitting it to the host. [Compatibility checks can reject mismatched versions](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/app-boot/src/plugin-compatibility.ts#L51-L100), but [installed plugins run in-process outside the workspace sandbox](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-manager/README.md). Inspect the failed requirement before granting an [exact package/runtime exemption](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/app-boot/src/plugin-compatibility.ts#L51-L100). Reject [bundle configuration outside its package](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/app-boot/src/profile.ts#L53-L75), disable [unapproved public-registry fallback with `fallbackRegistries: []`](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-manager/README.md), and [check whether an update needs a restart](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-manager/README.md).

**Choose child permissions before delegating.** DeepSeek's optional wrappers default to [`dontAsk` for Claude Code](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/subagent/subagent-claude-code/src/run.ts) and [`never` for Codex](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/subagent/subagent-codex/src/run.ts). Check the child's mode and refusal behavior before relying on a parent approval dialog.

## Retrieval boundaries

**Require a checked redirect boundary before credentialed HTTP MCP.** [Rc.2 pins client 2.2.0](https://github.com/deepseek-ai/deepseek-harness/blob/687f282e8625c6b8d11ff58211a90524be2e4317/packages/mcp/mcp-client/package.json), as does [rc.3](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/mcp/mcp-client/package.json), and the [HTTP transport supplies custom headers without a redirect-rejecting fetch](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/mcp/mcp-client/src/transport.ts#L40-L44). The [affected client can forward custom headers and session IDs across origins, plus bodies on 307/308 redirects; 2.3.0 fixes it](https://github.com/modelcontextprotocol/typescript-sdk/security/advisories/GHSA-6prh-2h8m-c8cw). Require that fix in the resolved dependencies or a reviewed transport that rejects redirects, then test it. [Stdio is outside this advisory](https://github.com/modelcontextprotocol/typescript-sdk/security/advisories/GHSA-6prh-2h8m-c8cw).

**Check the local fetch dependency before retrieving hostile pages.** [Rc.2 pins Undici 8.11.2](https://github.com/deepseek-ai/deepseek-harness/blob/687f282e8625c6b8d11ff58211a90524be2e4317/packages/web/web-fetch-http/package.json), as does [rc.3](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-fetch-http/package.json); both [call its fetch on direct and proxy routes](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-fetch-http/src/network.ts#L192-L238). A malicious response [can terminate the process despite a caught fetch rejection; 8.12.2 repairs the affected 8.x line](https://github.com/nodejs/undici/security/advisories/GHSA-xjj6-f33q-929c). Require the resolved update and a bounded hostile-response test before treating it as fixed.

**Review network policy before testing main.** Unreleased main [removes public-destination validation and connection pinning to support fake-IP proxies and internal retrieval](https://github.com/deepseek-ai/deepseek-harness/commit/2f01ad549c9dc7ecf480439f8e6801cc45ca14a0); rc.2/rc.3 retain [their destination checks](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/web/web-fetch-http/src/network.ts). Source builds can [fetch loopback, private-network and cloud metadata addresses](https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/web/web-fetch-http/README.md). That can remove proxy workarounds, but leaves your network policy to restrict destinations. Configure that boundary, or remove the tool, before using the broader reach.

## What is unresolved

- Same-user separation needs a released repair isolating [owner signing material](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts#L142-L198), followed by a same-user regression probe. Test secret readability and owner-API access; a loopback 401 is not enough.
- Bundle containment needs a released repair and traversal-rejection tests for [patch-path resolution](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/app-boot/src/profile.ts#L53-L75).
- The [older Linux isolation-bypass allegation](https://github.com/advisories/GHSA-23q9-h232-4q79) and [spawn Profile sandbox allegation](https://github.com/advisories/GHSA-5mvr-2xwh-9v9q) lack current-rc affected/fixed mappings. Backend-specific reproducers and vendor mappings would settle exposure.
- Before reconsidering the opt-out, require a release and regression test preserving [external text's origin in model-written reminders](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/.agents/notes/implemented/architecture/2026-09-24-scheduled-message-framing.md).
- To test whether [changing ports](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/apps/desktop-host/src/index.ts) and [authority-specific cookie names](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts#L116-L138) can accumulate enough cookies to cause restart failures, exercise a pinned Desktop version across restarts and record HTTP status, cookie count and cookie size. The failure mechanism and effective remedies remain unverified.

## Profile hygiene

This profile is dated 24 October 2026. It establishes no later state. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the evidence contract.
