---
schema_version: bitter.frontier_profile.v0
profile_id: paperclip
label: Paperclip
owner: Paperclip
source_contract: sources/paperclip.yml
homepage: https://paperclip.ing/
docs: https://docs.paperclip.ing/
tagline: "Paperclip's stable upgrade makes permission review part of installation."
compared_with: []
x:
  project: papercliping
  maintainers:
    - handle: dotta
      name: dotta
repo: https://github.com/paperclipai/paperclip
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-24
last_full_review: 2026-10-24
claims:
  - id: plaintext-credentials
    finding_id: 2026-09-21-paperclip-v2026-916-0-agent-apis-stopped-returning-plaintext-credentials-including-to-the-agent-itse
    last_verified: 2026-10-24
    status: retired
  - id: thought-text-stable
    finding_id: 2026-09-21-paperclip-carry-forward-acpx-thought-text-containment-c2cfd55e-11801-first-reached-stable-in-v2026
    last_verified: 2026-10-13
    status: retired
  - id: namespaced-canary-train-still-running
    finding_id: 2026-08-20-paperclip-namespaced-canary-train-still-running-stable-unmoved
    last_verified: 2026-08-20
    status: retired
  - id: acpx-thought-text-in-issue-comments
    finding_id: 2026-08-20-paperclip-acpx-thought-text-can-land-in-issue-comments
    last_verified: 2026-08-20
    status: retired
  - id: adapter-runtime-command-spec
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-10-13
    status: retired
  - id: sandbox-callback-bridge
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-10-13
    status: retired
  - id: e2b-sandbox-provider
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-10-13
    status: retired
  - id: issue-cost-summaries
    finding_id: 2026-05-07-paperclip-agent-company-control-plane
    last_verified: 2026-10-13
    status: retired
  - id: secrets-provider-vaults
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-10-13
    status: retired
  - id: cursor-cloud-adapter
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-10-13
    status: retired
  - id: routine-revision-history
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-10-13
    status: retired
  - id: planning-mode-issues
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-10-13
    status: retired
  - id: host-env-isolation-remote-probes
    finding_id: 2026-05-12-paperclip-secrets-vaults-and-cursor-cloud
    last_verified: 2026-10-13
    status: retired
  - id: scoped-agent-permissions-and-protected-assignments
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-10-13
    status: retired
  - id: routine-env-secrets-precedence
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: retired
  - id: board-managed-document-locks
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-10-13
    status: retired
  - id: modal-sandbox-plugin
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-10-13
    status: retired
  - id: acpx-claude-settings-respect
    finding_id: 2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets
    last_verified: 2026-05-27
    status: retired
  - id: skills-cli-and-first-admin-claim
    finding_id: 2026-05-29-paperclip-v2026.529.0
    last_verified: 2026-10-13
    status: retired
  - id: cloud-tenant-deprivilege
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-10-13
    status: retired
    channel: tagged-release
  - id: per-company-jwt-signing-keys
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-06-23
    status: retired
    channel: tagged-release
  - id: plugin-tenant-isolation-fk
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-10-13
    status: retired
    channel: tagged-release
  - id: negated-phrasing-review-fix
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-10-13
    status: retired
    channel: tagged-release
  - id: http-log-credential-redaction
    finding_id: 2026-06-23-paperclip-v2026.618.0-multitenant-cluster-tagged
    last_verified: 2026-10-13
    status: retired
    channel: tagged-release
  - id: preflight-budget-cap-enforcement
    finding_id: 2026-06-23-paperclip-heartbeat-preflight-budget-caps
    last_verified: 2026-10-24
    status: retired
    channel: tagged-release
  - id: task-watchdog-scoped-recovery
    finding_id: 2026-06-23-paperclip-task-watchdog-control-plane
    last_verified: 2026-10-13
    status: retired
    channel: tagged-release
  - id: same-company-ceo-authz-central
    finding_id: 2026-06-23-paperclip-same-company-ceo-authz-centralization
    last_verified: 2026-10-13
    status: retired
    channel: tagged-release
  - id: review-policy-lock-stable
    finding_id: 2026-09-21-paperclip-carry-forward-the-review-policy-lock-and-cwe-78-cli-guidance-reached-stable-in-v2026-824
    last_verified: 2026-10-13
    status: retired
  - id: resolver-default-anyone
    finding_id: 2026-09-21-paperclip-v2026-824-0-new-interactions-default-to-resolver-policy-anyone
    last_verified: 2026-10-24
    status: retired
  - id: sandbox-capabilities-fail-closed
    finding_id: 2026-09-21-paperclip-v2026-824-0-sandbox-capability-contract-resolves-fail-closed-managed-previews-default-to
    last_verified: 2026-10-13
    status: retired
  - id: bad-bearer-token-401
    finding_id: 2026-09-21-paperclip-v2026-831-0-bad-agent-bearer-tokens-401-instead-of-silently-becoming-the-local-user
    last_verified: 2026-10-13
    status: retired
  - id: grok-dontask-removed
    finding_id: 2026-09-21-paperclip-v2026-831-0-paperclip-stopped-setting-the-wrapped-grok-cli-s-permission-mode-to-dontask
    last_verified: 2026-09-23
    status: retired
  - id: forwarded-host-trusted-proxy
    finding_id: 2026-09-21-paperclip-v2026-916-0-x-forwarded-host-is-honored-only-from-a-trusted-proxy
    last_verified: 2026-10-13
    status: retired
  - id: authority-to-people-defaults-widened
    finding_id: 2026-09-21-paperclip-v2026-916-0-authority-moved-to-people-and-connections-some-defaults-widened
    last_verified: 2026-10-13
    status: retired
  - id: install-guide-channels
    finding_id: 2026-09-21-paperclip-docs-and-site-caught-up-to-v2026-916-1-install-guide-still-does-not-name-the-lanes
    last_verified: 2026-10-13
    status: retired
  - id: install-channel-snapshot
    finding_id: 2026-10-13-paperclip-three-stable-releases-followed-beta-exposure-their-source-match-is-not-a-release-guarantee
    last_verified: 2026-10-24
    status: retired
  - id: node-install-guide-defect
    finding_id: 2026-10-13-paperclip-docs-now-cover-v2026-1012-0-but-the-vps-node-command-violates-the-engine-floor
    last_verified: 2026-10-24
    status: active
  - id: scoped-grant-and-gateway-fixes
    finding_id: 2026-10-13-paperclip-certain-scoped-tools-use-grants-could-authorize-tools-outside-their-restrictions-until-v20
    last_verified: 2026-10-24
    status: retired
  - id: sqlite-lock-upgrade-drain
    finding_id: 2026-10-13-paperclip-v2026-1012-0-requires-a-writer-drain-earlier-integration-migrations-are-conditional
    last_verified: 2026-10-24
    status: active
  - id: coding-full-auto-defaults
    finding_id: 2026-10-13-paperclip-v2026-1001-0-defaults-native-acpx-native-opencode-and-legacy-coding-paths-to-full-auto
    last_verified: 2026-10-24
    status: retired
  - id: new-agent-grants-and-hiring
    finding_id: 2026-10-13-paperclip-v2026-1012-0-gives-new-standard-agents-14-grants-including-unscoped-tool-use
    last_verified: 2026-10-24
    status: active
  - id: chat-confirmation-resolver
    finding_id: 2026-10-13-paperclip-v2026-1005-0-lets-an-agent-record-a-user-chat-reply-as-a-confirmation-decision
    last_verified: 2026-10-24
    status: retired
  - id: aggregator-and-api-availability
    finding_id: 2026-10-13-paperclip-v2026-1005-0-forced-mcp-aggregators-on-and-enabled-native-api-tools-by-default
    last_verified: 2026-10-24
    status: retired
  - id: grok-full-auto-correction
    finding_id: 2026-10-13-paperclip-correction-grok-always-approve-stayed-on-when-paperclip-removed-the-dontask-default
    last_verified: 2026-10-24
    status: retired
  - id: assistant-mcp-human-consent
    finding_id: 2026-10-13-paperclip-v2026-1012-0-ships-flag-off-assistant-mcp-connections-acting-as-a-real-signed-in-user
    last_verified: 2026-10-24
    status: retired
  - id: managed-browser-work
    finding_id: 2026-10-13-paperclip-v2026-1005-0-adds-managed-paid-website-work-through-browser-use-cloud
    last_verified: 2026-10-24
    status: active
  - id: persistent-files-without-new-revisions
    finding_id: 2026-10-13-paperclip-v2026-1005-0-persists-agent-files-but-new-writes-omit-prior-content-revisions
    last_verified: 2026-10-24
    status: retired
  - id: short-instructions-unmeasured
    finding_id: 2026-10-13-paperclip-paperclip-cut-default-role-and-planning-instructions-without-a-completed-live-comparison
    last_verified: 2026-10-24
    status: active
  - id: beta-human-operator-seeding
    finding_id: 2026-10-13-paperclip-beta-widens-human-operator-authority-and-tightens-budget-accounting-with-conditional-unpri
    last_verified: 2026-10-24
    status: retired
  - id: beta-ledger-unpriced-policy
    finding_id: 2026-10-13-paperclip-beta-widens-human-operator-authority-and-tightens-budget-accounting-with-conditional-unpri
    last_verified: 2026-10-24
    status: retired
  - id: stable-budget-warning-display
    finding_id: 2026-10-13-paperclip-stable-soft-budget-warnings-look-like-stopped-work-the-wording-fix-is-canary-only
    last_verified: 2026-10-24
    status: retired
  - id: personal-app-consent-at-use
    finding_id: 2026-10-13-paperclip-v2026-1005-0-defers-optional-personal-app-consent-until-the-tool-is-used
    last_verified: 2026-10-24
    status: retired
  - id: worker-version-compatibility
    finding_id: 2026-10-13-paperclip-v2026-1012-0-requires-a-writer-drain-earlier-integration-migrations-are-conditional
    last_verified: 2026-10-24
    status: retired
  - id: stable-human-authority
    finding_id: 2026-10-24-paperclip-stable-grants-existing-human-operators-company-editing-and-tool-administration
    last_verified: 2026-10-24
    status: active
  - id: durable-cost-admission
    finding_id: 2026-10-24-paperclip-stable-makes-cost-receipts-durable-and-can-hold-admission-on-unknown-prices
    last_verified: 2026-10-24
    status: active
  - id: private-task-boundaries
    finding_id: 2026-10-24-paperclip-stable-enforces-private-task-reads-with-privileged-and-shared-agent-exceptions
    last_verified: 2026-10-24
    status: active
  - id: assistant-configuration-consent
    finding_id: 2026-10-24-paperclip-assistant-mcp-can-configure-work-as-well-as-delegate
    last_verified: 2026-10-24
    status: active
  - id: runtime-and-permission-decisions
    finding_id: 2026-10-24-paperclip-stable-adds-model-gateways-and-native-runtime-choices-without-removing-compatibility-limit
    last_verified: 2026-10-24
    status: active
  - id: bot-visibility-default
    finding_id: 2026-10-24-paperclip-slack-setup-becomes-automatic-while-github-bot-management-moves-behind-an-opt-in-gate
    last_verified: 2026-10-24
    status: active
  - id: retained-copyback-source
    finding_id: 2026-10-24-paperclip-failed-workspace-copy-back-can-preserve-the-only-recoverable-sandbox
    last_verified: 2026-10-24
    status: active
  - id: preview-qualified-defaults
    finding_id: 2026-10-24-paperclip-beta-defaults-new-codex-claude-and-pi-agents-to-qualified-native-runtimes
    last_verified: 2026-10-24
    status: active
  - id: preview-same-task-workflows
    finding_id: 2026-10-24-paperclip-beta-keeps-case-phases-on-one-task-and-adds-reusable-written-workflows
    last_verified: 2026-10-24
    status: active
  - id: preview-stop-and-warning
    finding_id: 2026-10-24-paperclip-beta-repairs-stop-recovery-and-finally-distinguishes-soft-budget-warnings
    last_verified: 2026-10-24
    status: active
  - id: preview-vault-deployment
    finding_id: 2026-10-24-paperclip-canary-adds-governed-secret-vault-and-deployment-actions
    last_verified: 2026-10-24
    status: active
  - id: preview-pipelines-removal
    finding_id: 2026-10-24-paperclip-beta-removes-pipelines-operating-surfaces-while-retaining-stored-data
    last_verified: 2026-10-24
    status: active
  - id: preview-current-filesystem-authority
    finding_id: 2026-10-24-paperclip-beta-drops-filesystem-history-from-workspace-authorization
    last_verified: 2026-10-24
    status: active
  - id: preview-recovery-expiry
    finding_id: 2026-10-24-paperclip-preview-recovery-expires-saved-work-and-closed-native-sessions
    last_verified: 2026-10-24
    status: active
  - id: preview-codex-service-secrets
    finding_id: 2026-10-24-paperclip-beta-exposes-assigned-service-secrets-to-legacy-codex-shell-commands
    last_verified: 2026-10-24
    status: active
  - id: preview-opencode-and-upgrade
    finding_id: 2026-10-24-paperclip-beta-defaults-opencode-to-runner-and-offers-explicit-upgrades-for-saved-agents
    last_verified: 2026-10-24
    status: active
  - id: preview-content-export
    finding_id: 2026-10-24-paperclip-beta-otlp-export-defaults-task-content-on-once-enabled
    last_verified: 2026-10-24
    status: active
  - id: preview-review-completion-guard
    finding_id: 2026-10-24-paperclip-beta-prevents-policy-replacement-from-discarding-an-unexecuted-live-review
    last_verified: 2026-10-24
    status: active
  - id: stable-review-scheduling
    finding_id: 2026-10-24-paperclip-stable-replaces-per-person-automatic-review-switches-with-event-and-author-filters
    last_verified: 2026-10-24
    status: active
  - id: preview-approval-key-custody
    finding_id: 2026-10-24-paperclip-canary-encrypts-sensitive-approvals-and-binds-retry-identity-to-actor-and-key-custody
    last_verified: 2026-10-24
    status: active
  - id: install-current-snapshot
    finding_id: 2026-10-24-paperclip-stable-installation-advances-while-preview-source-and-container-pointers-remain-distinct
    last_verified: 2026-10-24
    status: active
  - id: standalone-codex-version
    finding_id: 2026-10-24-codex-cli-and-typescript-reach-0-164-0-while-python-remains-0-163
    last_verified: 2026-10-24
    status: active
posture_basis:
  capability:
    - 2026-10-13-paperclip-v2026-1012-0-gives-new-standard-agents-14-grants-including-unscoped-tool-use
    - 2026-10-13-paperclip-paperclip-cut-default-role-and-planning-instructions-without-a-completed-live-comparison
    - 2026-10-13-paperclip-v2026-1005-0-adds-managed-paid-website-work-through-browser-use-cloud
    - 2026-10-24-paperclip-stable-makes-cost-receipts-durable-and-can-hold-admission-on-unknown-prices
    - 2026-10-24-paperclip-assistant-mcp-can-configure-work-as-well-as-delegate
    - 2026-10-24-paperclip-failed-workspace-copy-back-can-preserve-the-only-recoverable-sandbox
    - 2026-10-24-paperclip-beta-keeps-case-phases-on-one-task-and-adds-reusable-written-workflows
    - 2026-10-24-paperclip-beta-defaults-new-codex-claude-and-pi-agents-to-qualified-native-runtimes
    - 2026-10-24-paperclip-beta-defaults-opencode-to-runner-and-offers-explicit-upgrades-for-saved-agents
    - 2026-10-24-paperclip-canary-adds-governed-secret-vault-and-deployment-actions
  accessibility:
    - 2026-10-13-paperclip-docs-now-cover-v2026-1012-0-but-the-vps-node-command-violates-the-engine-floor
    - 2026-10-24-paperclip-stable-installation-advances-while-preview-source-and-container-pointers-remain-distinct
    - 2026-10-24-paperclip-stable-adds-model-gateways-and-native-runtime-choices-without-removing-compatibility-limit
    - 2026-10-24-paperclip-beta-removes-pipelines-operating-surfaces-while-retaining-stored-data
  governance:
    - 2026-10-13-paperclip-v2026-1012-0-gives-new-standard-agents-14-grants-including-unscoped-tool-use
    - 2026-10-13-paperclip-v2026-1012-0-requires-a-writer-drain-earlier-integration-migrations-are-conditional
    - 2026-10-24-paperclip-stable-grants-existing-human-operators-company-editing-and-tool-administration
    - 2026-10-24-paperclip-stable-makes-cost-receipts-durable-and-can-hold-admission-on-unknown-prices
    - 2026-10-24-paperclip-stable-enforces-private-task-reads-with-privileged-and-shared-agent-exceptions
    - 2026-10-24-paperclip-slack-setup-becomes-automatic-while-github-bot-management-moves-behind-an-opt-in-gate
    - 2026-10-24-paperclip-stable-replaces-per-person-automatic-review-switches-with-event-and-author-filters
    - 2026-10-24-paperclip-beta-drops-filesystem-history-from-workspace-authorization
    - 2026-10-24-paperclip-preview-recovery-expires-saved-work-and-closed-native-sessions
    - 2026-10-24-paperclip-beta-exposes-assigned-service-secrets-to-legacy-codex-shell-commands
    - 2026-10-24-paperclip-beta-otlp-export-defaults-task-content-on-once-enabled
    - 2026-10-24-paperclip-beta-prevents-policy-replacement-from-discarding-an-unexecuted-live-review
    - 2026-10-24-paperclip-beta-repairs-stop-recovery-and-finally-distinguishes-soft-budget-warnings
    - 2026-10-24-paperclip-canary-encrypts-sensitive-approvals-and-binds-retry-identity-to-actor-and-key-custody
stance:
  use_for: "Delegate <a href='https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/public-mcp.md'>configuration of existing agents and task coordination</a> when a named owner can manage permissions and interrupted-run recovery."
  avoid_for: "Workflows requiring human approval for every new agent while <a href='https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/db/src/schema/companies.ts#L19-L21'>hiring approval remains off</a>."
  watch_next: "A recorded <a href='#what-is-unresolved'>stable-upgrade trial on a real instance</a>."
---

# Paperclip

On 24 October 2026, [Paperclip v2026.1023.0 was published as a stable GitHub release](https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0). Existing active human Operators can [receive missing configuration and tool-administration grants](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135) at [startup](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/index.ts#L706-L712) or [Cloud sign-in](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/middleware/auth.ts#L668-L705). Review their roles and stored restrictions before restarting.

## Where it stands, 2026-10-24

For existing installations: [stop all servers and workers before upgrading](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L56), [review permissions after startup](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135), and [test recovery before allowing jobs to run](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L56). Avoid preview upgrades until [Pipelines dependencies](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/DATABASE.md#L1106-L1113) and [unsaved work](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/recoverable-disk-cleanup.md) are protected.

**Install stable.** For a fresh instance, pin the [documented onboarding command](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/README.md#L346-L364) as `npx paperclipai@2026.1023.0 onboard --yes` on [Node 24.11.0 or newer](https://registry.npmjs.org/paperclipai/2026.1023.0). Skip the guide's [Node 20 VPS recipe](https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/guides/getting-started/installation.md#L197-L217).

As of 24 October 2026, 10:24 UTC, [preview choices were beta 2026.1023.0-beta.0, nightly 2026.1024.0-nightly.0 and canary 2026.1024.0-canary.7](https://registry.npmjs.org/paperclipai). [Assistant MCP, GitHub bot management, Dot and fast responses default off](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/shared/src/feature-catalog.ts).

**Review human permissions before restarting jobs.** Stable brings the [fourteen-grant human Operator preset, including agent configuration and connection/tool administration](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/company-member-roles.ts#L57-L73) to existing deployments: [startup](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/index.ts#L706-L712) or [Cloud sign-in](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/middleware/auth.ts#L668-L705) can [add missing grants for existing active human Operators without overwriting restrictions already stored on a grant](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135). Change inappropriate roles or store restrictive scopes. Then inspect persisted grants after startup/sign-in. [Deleting a preset row alone can let seeding recreate it](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135).

**Drain every old writer before upgrade or rollback.** [Stop old servers and workers across hosts and containers, preserve SQLite lock files and unfinished-run evidence, restart every writer on the chosen compatible version, and verify provider interaction and file restoration](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L56) before reopening dispatch.

**Reconcile interrupted costs before releasing held work.** Stable [keeps usage receipts until settlement commits and deduplicates final accounting](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/run-cost-accounting.ts). [Unpriced usage defaults to blocking only under applicable active, positive-amount policies with hard stops enabled](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budgets.ts). Choose that policy explicitly. Compare interrupted runs with provider bills; [reservations cannot cap the provider's final charge](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budget-reservations.ts). Before raising a cap, check the incident type and actual run state: [stable still labels soft warnings as paused work](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/ui/src/components/BudgetIncidentCard.tsx); [beta contains the wording repair](https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9).

**Update bot scheduling assumptions.** Stable [ignores saved per-person automaticReviews switches in favor of event and author filters; authorized mentions bypass automatic scheduling filters](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/GITHUB-REVIEW-BOT.md#L125-L148). Review those filters and guest sponsorship before restart. [Hiding bot management leaves existing bots running](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/GITHUB-REVIEW-BOT.md#L14-L16).

**Set agent authority before the first job.** Separately from human roles, [new standard agents receive fourteen grants, including unscoped tool use](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/lib/agent-permissions.ts#L3-L75); [existing agents are not backfilled](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/agent-permission-defaults.md). [Hiring approval defaults off](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/db/src/schema/companies.ts#L19-L21); enable `requireBoardApprovalForNewAgents` where a person must decide. Narrow [explicit tool grants that take precedence over profile exclusions](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/tool-access-policy.ts#L1466-L1485), and set harness permissions separately: [native ACPX defaults to approve-all and OpenCode to allow](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L48-L136).

**Use private tasks as record-access controls.** Stable [restricts private reads by participation and current responsible-user access](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/ISSUE-PRIVACY.md). [Company administrators without ordinary task access need audited break-glass reads](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/ISSUE-PRIVACY.md), while [instance administrators and implicit local authority bypass the checks](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/authorization.ts#L538-L658); [opt-in Cloud inspection is separate](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/CUSTOMER-SUCCESS-INSPECTION.md). Test deployed principals and privacy settings. [Trusted agents can still copy learned content into shared files or external tools](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/ISSUE-PRIVACY.md#L59-L79).

**Choose scopes before handing setup to an assistant.** Stable's [Assistant MCP can configure agents, instructions, projects and skills as well as delegate work](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/public-mcp.md). [Configuration needs a distinct scope and current user permissions, but one write checkbox approves requested mutation scopes together](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/public-mcp.md). Inspect consent in a test company. If a write has an unknown outcome, [inspect current task state and reuse the same request ID and arguments for any retry; revocation does not undo delegated work](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/public-mcp.md).

**Recover failed copy-back before deleting its sandbox.** Stable [can retain the exact stopped source and a repair hold when required legacy copy-back fails](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L58-L102). Inspect the retained source before replacing work. [Storage charges can continue, and successful repair does not automatically resume the task](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L58-L102).

**Check Codex compatibility before updating a worker's CLI.** Stable's Runner [declares Codex 0.160.0](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/paperclip-runner/package.json). Native local Codex [prefers the installed CLI](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/paperclip-runner/src/drivers/codex/codex-command.ts); [remote admission remains >=0.149.0 and <0.161.0](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts). The [standalone stable Codex release, 0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0), falls outside that remote range. For remote workers, keep Codex within [the stated version range](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts) and [test provider interaction and file restoration](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L56) before allowing jobs to run. Record the executable, account and selected model.

### What changes in beta

**Migrate Pipelines automation before trying beta.** Beta [removes its application, API and CLI while retaining database records](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/DATABASE.md#L1106-L1113). Export or replace dependent automation before upgrading. [Opt-in](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/packages/shared/src/feature-catalog.ts#L178-L185) [Cases keeps phase handoffs on one primary task](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/feature-map/cases.md), potentially reducing relay work. Cases is [separate from Pipelines, with no automatic migration](https://github.com/paperclipai/paperclip/commit/90777488945fc2ceba6d27c407516d4a1df69b54).

**Recheck shared checkouts before beta.** Beta [drops file-access restrictions based on a checkout's task history](https://github.com/paperclipai/paperclip/commit/813e808af462b6a6f9db38b6791e3bfe8465b51e). [Current task/configuration authority and OS isolation govern files, while application-record privacy remains](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/agent-access-map/workspaces.md#L59-L104). Test shared directory bindings separately from private-task reads before upgrading.

**Back up unsaved work outside preview retention.** If cleanup and restore settings permit, beta [can delete worktrees containing uncommitted or unpushed work. The default delays are 3 days closed or 7 days idle/open](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/recoverable-disk-cleanup.md). [Encrypted restore points default to 90-day retention after terminal closure. Eligible closed-session backups have a separate 7-day default expiry](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/recoverable-disk-cleanup.md). [Beta omits ignored files](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/recoverable-disk-cleanup.md#L112-L144); [canary adds selected ignored-file snapshots with exclusions and a payload older servers reject](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/recoverable-disk-cleanup.md#L154-L191). Check switches, deadlines, file coverage and master-key backups.

**Check reviewer completion directly on stable.** The [guard against replacing policy and marking Done while discarding a live, unexecuted review has reached beta but remains absent from stable](https://github.com/paperclipai/paperclip/commit/880d4ae60fa691305a4703d4e25e367b63c2a7d7). Inspect the stored review stage. Test that exact edit/completion sequence before relying on the beta guard.

**Test native Stop with the provider you use.** Beta [repairs native Stop accounting wake-up and requires a later user message to resume queued pre-Stop input](https://github.com/paperclipai/paperclip/commit/6dda8cc2b75e211dc62af264bfd0994f602099d1). Test interruption and resumption on your actual worker/account before relying on the repair.

**Choose which credentials the legacy Codex shell may read.** Beta [delivers assigned service secrets to legacy Codex ACP/CLI shells, including runs without an agent identity; provider/login and unassigned host secrets remain excluded from this opt-in](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/AGENT-IDENTITY.md#L96-L116). Narrow the assigned service account.

**Approve the telemetry destination before enabling export.** Beta's [managed Codex/Claude OTLP export defaults off; enabling it defaults prompt, answer and tool-content capture on, and the harness can access export credentials](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/agent-observability.md#L3-L94). Use ingestion-only credentials or a separate collector. Inspect destination records from a real remote task.

**Retest runtime selection after a beta conversion.** Qualified new [Codex](https://github.com/paperclipai/paperclip/commit/adb69e8f09852c772d9901ae270e5b2d66e39c77), [Claude](https://github.com/paperclipai/paperclip/commit/8193abb9363ef953edb920c6e48fbf251cc65d79), [Pi](https://github.com/paperclipai/paperclip/commit/734c26533914511f943db8ea5a416277b5625af3) and [OpenCode](https://github.com/paperclipai/paperclip/commit/39e44a9d9b0dbbb327beecc490c0e5095f92649b) agents default to Runner. [Existing agents keep saved choices; eligible Codex/Claude upgrades are explicit, save pending form edits and start fresh sessions](https://github.com/paperclipai/paperclip/commit/0f15f82b19dfefcb66f278b575cd430be381015f). Before comparing jobs, review those edits and record runner, target and model.

### Canary reaches vaults and deployments

**Try canary actions on disposable resources.** [1Password's authorized secret reads return values to agents and ordinary tool history](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/1PASSWORD.md). Review read/write policies first. [Paperclip's Vercel connector rejects preview creation on an empty project because Vercel can make its first deployment production](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/vercel.md#L118-L136). Inspect ambiguous remote outcomes before retrying.

**Back up approval keys with the database.** Canary [encrypts sensitive arguments in new approval payloads with a signing key or persisted master-key fallback, and makes new default retry keys actor-scoped](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/vercel.md#L198-L212). [Existing signed approvals are not rewritten; key rotation can invalidate retry matching](https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/connections/SUPABASE.md#L239-L254). Reconcile unverifiable old effects before issuing a new write.

## What is unresolved

- **Validate the stable migration on your instance.** Before/after [member-grant snapshots](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts) and provider-matched interrupted/retried runs with [priced/unpriced admission tests](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budget-reservations.ts) would show migration results beyond the implemented rules.
- **Establish what preview can restore.** Record expiration, restore and rollback trials with the actual storage, keys and file coverage to see what survives [the retention policies](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/recoverable-disk-cleanup.md).
- **Measure the coordination cost.** The [shorter-manual comparison still lacks a completed behavioral trial](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/plans/2026-10-05-plan-task-guidance.md#L44-L85). Run the same workload with both manuals and compare quality, spend, task creation and human interventions. For the wider pilot, also count manual handoffs and time spent recovering interrupted jobs. Keep Paperclip if it reduces that human work while maintaining completed-task quality.
- **Require a full browser lifecycle trial.** [Browser Use's basic live journey leaves revocation, restart, approval and rate-limit cases open](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/BROWSER-USE.md#L154-L191). Provider-backed trials that record cancellation and recovered state would settle those cases.

## Profile hygiene

This profile stops at 2026-10-24. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md) for the evidence contract.
