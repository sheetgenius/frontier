---
schema_version: bitter.frontier_profile.v0
profile_id: deepseek-harness
label: DeepSeek Harness
owner: deepseek-ai
source_contract: sources/deepseek-harness.yml
homepage: https://deepseek.com/harness/en/
docs: https://github.com/deepseek-ai/deepseek-harness/tree/d743267388641bc76f17c45ce8b4c231aed1d32c/docs
tagline: "Try resumable work in a disposable VM; Web authentication is not a same-user agent boundary."
compared_with:
  - codex
  - claude-code
repo: https://github.com/deepseek-ai/deepseek-harness
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: web-ui-login
    finding_id: 2026-10-13-deepseek-harness-alpha-2-rejects-wildcard-web-binds-and-adds-native-tls-rc-still-permits-wildcard-configura
    last_verified: 2026-10-13
    status: active
  - id: still-prerelease
    finding_id: 2026-10-13-deepseek-harness-npm-latest-is-0-2-0-rc-2-every-distribution-remains-prerelease
    last_verified: 2026-10-13
    status: active
  - id: any-row-replaceable
    finding_id: 2026-10-13-deepseek-harness-the-web-terminal-and-live-plugin-manager-reach-rc-optional-auto-review-runs-allowed-calls
    last_verified: 2026-10-13
    status: active
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
    last_verified: 2026-10-13
    status: active
  - id: acp-headless-remote
    finding_id: 2026-09-21-deepseek-harness-capability-half-what-an-operator-can-do-now-that-they-could-not-on-2026-08
    last_verified: 2026-09-23
    status: retired
  - id: gate-is-a-plugin
    finding_id: 2026-10-13-deepseek-harness-the-web-terminal-and-live-plugin-manager-reach-rc-optional-auto-review-runs-allowed-calls
    last_verified: 2026-10-13
    status: active
  - id: web-ui-unauthenticated
    finding_id: 2026-08-17-deepseek-harness-nothing-authenticates-the-web-ui-on-127-0-0-1-3080-and-the-api-fence
    last_verified: 2026-08-20
    status: retired
  - id: plugins-are-unsandboxed-in-process
    finding_id: 2026-10-13-deepseek-harness-the-web-terminal-and-live-plugin-manager-reach-rc-optional-auto-review-runs-allowed-calls
    last_verified: 2026-10-13
    status: active
  - id: one-channel-and-it-is-a-prerelease
    finding_id: 2026-08-17-deepseek-harness-the-whole-project-ships-to-exactly-one-channel-and-it-is-a
    last_verified: 2026-08-20
    status: retired
  - id: runs-rival-models-and-harnesses
    finding_id: 2026-10-13-deepseek-harness-alpha-adds-rival-harness-catalog-bundles-and-a-shared-global-instruction-chain
    last_verified: 2026-10-13
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
    last_verified: 2026-10-13
    status: active
  - id: same-user-cookie-authority
    finding_id: 2026-10-13-deepseek-harness-the-web-cookie-signing-key-crosses-the-same-user-agent-and-operator-boundary
    last_verified: 2026-10-13
    status: active
  - id: auto-review-unload-full-access
    finding_id: 2026-10-13-deepseek-harness-the-web-terminal-and-live-plugin-manager-reach-rc-optional-auto-review-runs-allowed-calls
    last_verified: 2026-10-13
    status: active
  - id: scheduled-user-framing
    finding_id: 2026-10-13-deepseek-harness-scheduled-reminders-are-framed-as-user-messages-after-an-untrusted-content-instruction-was
    last_verified: 2026-10-13
    status: active
  - id: windows-delete-and-standing-labels
    finding_id: 2026-10-13-deepseek-harness-windows-delete-confinement-improves-in-0-1-7-workspace-low-labels-persist-and-require-modu
    last_verified: 2026-10-13
    status: active
  - id: sandbox-safety-warning
    finding_id: 2026-10-13-deepseek-harness-windows-delete-confinement-improves-in-0-1-7-workspace-low-labels-persist-and-require-modu
    last_verified: 2026-10-13
    status: active
  - id: ranged-vendor-dependencies
    finding_id: 2026-10-13-deepseek-harness-a-cli-version-pin-does-not-freeze-ranged-dependencies-in-deepseek-s-vendored-cordis-stack
    last_verified: 2026-10-13
    status: active
  - id: plugin-public-registry-fallback
    finding_id: 2026-10-13-deepseek-harness-the-rc-plugin-manager-defaults-to-public-npmmirror-fallback
    last_verified: 2026-10-13
    status: active
  - id: bundle-patch-path-containment
    finding_id: 2026-10-13-deepseek-harness-cve-2026-101132-names-bundle-patch-traversal-current-rc-and-alpha-lack-path-containment
    last_verified: 2026-10-13
    status: active
  - id: account-funded-desktop-runtime
    finding_id: 2026-10-13-deepseek-harness-account-funded-model-routes-and-bundled-desktop-cli-reduce-setup-work
    last_verified: 2026-10-13
    status: retired
  - id: messages-only-config-migration
    finding_id: 2026-10-13-deepseek-harness-the-rc-upgrade-rejects-protocol-configs-and-migrates-settings-presets-logs-and-plugin-apis
    last_verified: 2026-10-13
    status: active
  - id: headless-resume-current-rc
    finding_id: 2026-10-13-deepseek-harness-ralph-is-disabled-headless-resume-and-model-declared-tool-changes-reach
    last_verified: 2026-10-13
    status: active
  - id: ralph-needs-independent-evaluation
    finding_id: 2026-10-13-deepseek-harness-ralph-is-disabled-headless-resume-and-model-declared-tool-changes-reach
    last_verified: 2026-10-13
    status: active
  - id: background-wake-cap-removed
    finding_id: 2026-10-13-deepseek-harness-background-job-completion-wakes-no-longer-have-a-default-three-turn-cap
    last_verified: 2026-10-13
    status: active
  - id: alpha-listener-and-tls
    finding_id: 2026-10-13-deepseek-harness-alpha-2-rejects-wildcard-web-binds-and-adds-native-tls-rc-still-permits-wildcard-configura
    last_verified: 2026-10-13
    status: active
  - id: alpha-global-instructions
    finding_id: 2026-10-13-deepseek-harness-alpha-adds-rival-harness-catalog-bundles-and-a-shared-global-instruction-chain
    last_verified: 2026-10-13
    status: active
  - id: alpha-tool-and-team-contracts
    finding_id: 2026-10-13-deepseek-harness-alpha-2-changes-tool-and-subagent-contracts-and-removes-agent-team-outbox-delivery
    last_verified: 2026-10-13
    status: active
  - id: alpha-webruntime-migration
    finding_id: 2026-10-13-deepseek-harness-alpha-2-removes-webruntime-old-overlays-can-stop-connection-startup
    last_verified: 2026-10-13
    status: active
  - id: alpha-reasoning-translation-egress
    finding_id: 2026-10-13-deepseek-harness-optional-alpha-reasoning-translation-adds-a-separate-data-destination
    last_verified: 2026-10-13
    status: active
  - id: alpha-persistent-working-directory
    finding_id: 2026-10-13-deepseek-harness-alpha-2-gives-session-working-directory-changes-a-persistent-api-and-recovery-path
    last_verified: 2026-10-13
    status: active
  - id: cve-linux-isolation-publication
    finding_id: 2026-10-13-deepseek-harness-cve-2026-101078-publishes-a-local-linux-isolation-allegation-without-an-established-curren
    last_verified: 2026-10-13
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
    last_verified: 2026-10-13
    status: active
  - id: cve-spawn-profile-publication
    finding_id: 2026-10-13-deepseek-harness-cve-2026-108788-publishes-an-older-spawn-profile-allegation-with-an-unresolved-mechanism
    last_verified: 2026-10-13
    status: active
  - id: cve-workflow-publication
    finding_id: 2026-10-13-deepseek-harness-cve-2026-108789-concerns-a-trusted-workflow-vm-already-replaced-by-sandboxed-ptc
    last_verified: 2026-10-13
    status: retired
stance:
  use_for: "Try resumable headless work in a disposable VM; follow the rc trial setup."
  avoid_for: "Avoid production use; read the authority limits."
  watch_next: "Watch for a released repair of the same-user boundary; see what would settle it."
---

# DeepSeek Harness

On 2026-10-02, [a public disclosure alleged a same-user sandbox escape](https://github.com/deepseek-ai/deepseek-harness/discussions/8678). In 0.2.0-rc.2, Web login [checks signed cookies](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112), while its [persistent signing key](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/browser-auth.ts#L125-L177) lives in [the owner's credential file](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/credentials/credentials-local/src/index.ts#L675-L691). In a Linux profile that [permits host-file reads](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-local/src/profiles.ts#L16-L35), a command able to read that key and reach the API has a code-supported route to [pose as the operator](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112).

## Where it stands, 2026-10-13

**Install a pinned rc only in a disposable virtual machine that contains the entire trial.** Keep valuable host credentials out and Web on loopback. As of 13 October 2026, [npm's newest published rc was 0.2.0-rc.2 and its newest alpha was 0.2.1-alpha.2; every published CLI version was a prerelease](https://registry.npmjs.org/@deepseek-ai%2Fdsh). Inside the disposable VM, install locally with `npm install @deepseek-ai/dsh@0.2.0-rc.2` and review the resulting lockfile before running it: [the CLI pin still permits ranged vendor dependency updates](https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.2.0-rc.2). Keep it out of production. Before first use, [disable session-log upload](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/README.md#L28-L35) and [plugin-package inventory](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/plugin-package-inventory-deepseek/README.md#L27-L31), [set the telemetry opt-out](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/app-boot/src/profile-context.ts#L39-L55), and [set a background-wake limit](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/jobs/tool-jobs/README.md#L40-L57). For upgrades, back up DSH_HOME and [migrate configuration](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1); Windows trials also need [workspace-grant cleanup](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-windows-acl/README.md#L125-L130). Alpha-specific changes are listed below.

**[Last material release, 2026-10-09](https://registry.npmjs.org/@deepseek-ai%2Fdsh).** Alpha.2 [reached npm](https://registry.npmjs.org/@deepseek-ai%2Fdsh) with [wildcard Web binds rejected](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/host/webserver/src/index.ts#L262-L268) and [native TLS available](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/bundle/web-app/src/startup.ts#L64-L70). The recommended trial remains 0.2.0-rc.2, which [still permits wildcard configuration](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/host/webserver/src/index.ts#L127).

The vendor [does not guarantee sandbox isolation](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/SAFETY.md).

**Set separate data controls before the first request.** The [rc enables session-log upload](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/src/index.ts#L51-L77). Set [`session-log-deepseek` to `enabled: false`](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/README.md#L28-L35) and disable [`plugin-package-inventory-deepseek`](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/plugin-package-inventory-deepseek/README.md#L27-L31). Set [`DSH_TELEMETRY_DISABLED=1` to disable only session-feedback OpenTelemetry; it does not disable those other uploads](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/app-boot/src/profile-context.ts#L39-L55). Check the effective settings with [`--dump-config`](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/architecture.md#L33-L39).

Eligible DeepSeek-adapter requests [can carry cwd and tool results in a session-log field capped at 8 MiB by default](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/src/index.ts#L51-L214), including through [custom `baseURL` relays](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/adapter.ts#L106-L121). Do not re-enable session-log upload on private Sessions: [events recorded while disabled join the upload backlog](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/README.md#L33-L47). Avoid Desktop if its [separate analytics without a user-facing switch](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/product-analytics/README.md#L12-L24) is unacceptable.

**Try headless resume with an explicit stopping rule.** The rc [supports NDJSON through `--json` and resume through `--session-id`](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/headless/src/startup.ts#L43-L44). [Eligible idle job completions can wake their owner without the old default three-wake cap](https://github.com/deepseek-ai/deepseek-harness/commit/b6775f6d4f55eaa0bcac36318cd7dfc98d70195c), saving another human prompt. Set `maxConsecutiveWakes` explicitly; [beyond it, notices wait for user input and wake-dependent work can stall](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/jobs/tool-jobs/README.md#L40-L57).

[Ralph, a worker automation feature, is disabled by default because its workers report their own completion without an independent acceptance check](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/base/cordis.patch.yml#L440-L449). If you enable Ralph, accept its results only after an independent check.

**Treat plugins as code with operator authority.** The rc Web UI has a [terminal with OS-user rights](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/api/terminal-controller/README.md#L30) and installs [unsandboxed Host code in-process](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/README.md#L31). Review approval and sandbox overrides: [the approval gate is replaceable](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/architecture.md#L11-L39).

Reject patch paths that escape their package. The bundle-patch traversal named by [CVE-2026-101132](https://github.com/CVEProject/cvelistV5/blob/f9975a22f71be782aff19e6fac192da4b9ca5613/cves/2026/101xxx/CVE-2026-101132.json) still permits loading valid configuration outside the package on [rc](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/app-boot/src/profile.ts#L58-L75) and [alpha](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/boot/app-boot/src/profile.ts#L58-L75). Set `fallbackRegistries: []` if public [npmmirror fallback](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/README.md#L50-L79) is outside your approved package origins.

**Leave Auto review off until you have a permission-transition plan.** This [optional rc bundle](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/experimental/auto-review/README.md#L12) [runs allowed calls with Full access; unloading moves live sessions using Auto review to Full access with approval policy `never`](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/experimental/auto-review/README.md#L58-L62). Move them back to Workspace Write before unloading. Fewer approval dialogs mean more judgment when admitting bundles and changing permissions.

**Leave Schedule off if external text must retain its origin.** On rc, [it is optional and shipped off](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/upgrade-guide/v0.1.7-rc.2/schedule-optional-bundle/guide.md#L14); due reminders [arrive as scheduled messages from the user](https://github.com/deepseek-ai/deepseek-harness/commit/af39300572bf4494370a1d0be19ce3c1ff330d36), even when the model wrote them after reading external content. The [decision note accepts that framing risk](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/.agents/notes/implemented/architecture/2026-09-24-scheduled-message-framing.md#L15). Inspect reminder text before enabling Schedule. On alpha, [Web Standard enables its tools](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/bundle/web-app/presets/standard.patch.yml#L35-L36), so disable `tool-schedule` there if needed.

## If upgrading an existing trial

**Back up `DSH_HOME` and migrate the old configuration.** When moving from 0.1.5 prereleases, review [settings import, preset bundles, Session V4 and plugin API changes](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1). Remove `protocol` and obsolete Chat Completions `baseURL` overrides: the [official adapter is Messages-only and rejects the old protocol key](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/config.ts#L206-L207).

**Move old Windows trials to this rc and revoke workspace grants afterward.** It contains the [vendor's fix for deletes outside the workspace](https://github.com/deepseek-ai/deepseek-harness/commit/d5ad3baeb5d531e31da5e586c3ec3ebedd825169). [Workspace Low labels and access entries persist after exit](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-windows-acl/README.md#L125-L130); clean up through the module's revocation path. Avoid writable grants to a home directory, drive root or install directory.

## Before choosing alpha

**[If choosing alpha, migrate the listener configuration](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/docs/upgrade-guide/v0.2.1-alpha.1/web-listener-trust-config/guide.md).** Replace [old `webRuntime` injections that can block Connection startup](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/docs/upgrade-guide/v0.2.1-alpha.1/web-listener-trust-config/guide.md) with `webStartup`; read `ctx.webStartup.trustedHosts` and remove `lanAddresses`.

**Audit global instructions before alpha's first request.** Profiles using the base bundle, instruction plugin and a filesystem provider [load eligible global files subject to byte budget and deduplication](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/context/agent-instructions/README.md#L30-L40). Inspect [`AGENTS.md` in `DSH_HOME` and `DSH_AGENTS_HOME` (default `~/.agents`)](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/context/agent-instructions/README.md#L34-L40). Select homes through the process environment; [configuration entries named `dshHome` and `agentsHome` are ignored](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/context/agent-instructions/README.md#L40).

**Check custom integrations before choosing alpha.** Update [tool presentation and subagent waiting](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2). [Team sends no longer retain an outbox or retry failed delivery](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/agent-team/README.md#L68-L70), so the caller must handle failures. [An accepted message does not prove the recipient processed it](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/agent-team/README.md#L70).

**Inspect child permissions before using the rival-harness catalog.** Alpha [makes Claude Code and Codex bundles easier to install](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2). DeepSeek's wrappers already default to [`dontAsk` for Claude Code](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/subagent/subagent-claude-code/src/run.ts#L56) and [`never` for Codex](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/subagent/subagent-codex/src/run.ts#L69). Check the child's mode rather than relying on the parent's approval dialog.

**Approve the translation destination before enabling it.** Alpha reasoning translation is [off in shipped profiles and defaults to Bing once enabled](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/cot-translation-bundle/README.md#L12). The [selected service receives expanded reasoning that may contain private code or conversation details](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/cot-translation-bundle/README.md#L28-L32). Review translation separately from session-log controls.

If changing a session's working directory, follow [the directory recovery instructions](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/working-directory/README.md#L80); directory changes leave [processes and sandbox grants with independent lifetimes](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/working-directory/README.md#L42).

## What is unresolved

- Same-user separation: the [cookie-authority path](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112) is inferred from the code, not from a forgery tested at runtime. Require a released repair that keeps confined commands from reading signing material, then a same-user regression probe. A loopback 401 alone is not enough.
- Bundle containment: require path-containment tests and a release containing the repair before calling it settled.
- Linux and spawn exposure: the [Linux advisory names Landlock](https://github.com/CVEProject/cvelistV5/blob/71c9c9757e4d1553ee3e16032c43469dfec5a9fd/cves/2026/101xxx/CVE-2026-101078.json), while its [report concerns root-run Bubblewrap and mount capability](https://github.com/Ruoyyy/My_vulnerable/blob/364965b90bd1674eb70477b92607e965cec43376/SECURITY-MOUNT-ESCAPE.en.md). The [spawn-profile allegation concerns versions through 0.1.1-rc.2](https://github.com/CVEProject/cvelistV5/blob/20d9248c60fe62803efade3177e8b82b586d154c/cves/2026/108xxx/CVE-2026-108788.json). Current-rc exposure and repair remain unsettled. Accessible backend-specific reproducers and vendor affected/fixed mappings would settle those questions.
- Schedule: a released contract and regression test preserving [external text's origin in model-authored reminders](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/.agents/notes/implemented/architecture/2026-09-24-scheduled-message-framing.md#L15) would justify reconsidering the opt-out.

A non-prerelease publication would change the channel choice. Reconsider production use only after a fresh review of authority and data defaults, including the unresolved boundaries above.

## Profile hygiene

### Review date and scope

Dated, not evergreen: the posture for 13 October 2026, using the 21 September to 13 October window. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the evidence contract.
