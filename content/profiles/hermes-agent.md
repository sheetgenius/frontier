---
schema_version: bitter.frontier_profile.v0
profile_id: hermes-agent
label: Hermes Agent
owner: Nous Research
source_contract: sources/hermes-agent.yml
homepage: https://hermes-agent.nousresearch.com/docs
docs: https://hermes-agent.nousresearch.com/docs
tagline: "Hermes v0.22.5 keeps CLI work running in the gateway and moves its MCP server out of the core."
compared_with: []
x:
  project: NousResearch
  maintainers:
    - handle: Teknium
      name: Teknium
repo: https://github.com/NousResearch/hermes-agent
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-24
last_full_review: 2026-10-24
claims:
  - id: gitspawn-fixed-v2026-9-7
    finding_id: 2026-09-21-hermes-agent-ghsa-7x36-8jrh-v4pw-a-copied-repo-s-git-config-could-run-code-on-the-host-before-any-promp
    last_verified: 2026-09-23
    status: retired
  - id: computer-use-unapproved
    finding_id: 2026-09-21-hermes-agent-computer-use-ran-destructive-desktop-actions-unapproved-on-every-non-cli-host-until-v2026
    last_verified: 2026-10-13
    status: retired
  - id: turn-cap-unlimited
    finding_id: 2026-09-21-hermes-agent-agent-max-turns-default-flipped-from-500-to-unlimited-in-v2026-8
    last_verified: 2026-10-24
    status: active
  - id: unattended-mode-deny
    finding_id: 2026-09-21-hermes-agent-unattended-platforms-webhook-msgraph-webhook-api-server-now-deny-dangerous-commands-by-def
    last_verified: 2026-09-23
    status: retired
  - id: deny-list-in-containers
    finding_id: 2026-09-21-hermes-agent-approvals-deny-now-applies-inside-isolated-containers-v2026-9
    last_verified: 2026-10-24
    status: retired
  - id: multiplex-profile-leak
    finding_id: 2026-09-21-hermes-agent-multiplex-profiles-leaked-allow-all-allowlists-vault-secrets-and-files-across-profiles-unt
    last_verified: 2026-10-13
    status: retired
  - id: webhook-route-colon
    finding_id: 2026-09-21-hermes-agent-ghsa-2fmg-cjqm-hhrj-a-weak-webhook-route-could-inherit-a-privileged-sibling-s-toolsets-fix
    last_verified: 2026-10-13
    status: retired
  - id: approval-gate-integrity-v2026-9-21
    finding_id: 2026-09-21-hermes-agent-approval-gate-integrity-cluster-in-v2026-9-21-breaker-attribution-smart-approval-silence
    last_verified: 2026-09-23
    status: retired
  - id: vault-and-real-profile-browsing
    finding_id: 2026-09-21-hermes-agent-capability-real-profile-browsing-password-blind-vault-sha-pinned-plugin-catalog
    last_verified: 2026-09-23
    status: retired
  - id: oneshot-footprint-and-curator-builtins
    finding_id: 2026-09-21-hermes-agent-capability-and-defaults-in-v2026-9-21-skills-auto-load-stream-json-one-shot-footprint-cura
    last_verified: 2026-09-23
    status: retired
  - id: delegation-docs-match-config
    finding_id: 2026-09-21-hermes-agent-delegation-docs-now-agree-with-config-250-10-from-v2026-9
    last_verified: 2026-10-13
    status: retired
  - id: three-approval-fixes-in-v2026-8-19
    finding_id: 2026-09-21-hermes-agent-carry-forward-the-three-approval-fixes-reached-v2026-8-19-on-2026-08-21-confirmed
    last_verified: 2026-09-23
    status: retired
  - id: approval-guardrails-tagged-v2026-8-3
    finding_id: 2026-08-03-hermes-approval-guardrails-and-runaway-caps-reach-a-tag
    last_verified: 2026-09-23
    status: retired
  - id: skill-scan-on-pull-tagged
    finding_id: 2026-08-20-hermes-git-pull-skill-scan-reached-v2026-8-18
    last_verified: 2026-08-20
    status: retired
  - id: steer-stop-and-update-honesty-tagged
    finding_id: 2026-08-20-hermes-steer-stop-and-update-honesty-reached-v2026-8-18
    last_verified: 2026-08-20
    status: retired
  - id: delegation-docs-stale-at-v2026-8-18
    finding_id: 2026-08-20-hermes-delegation-docs-still-say-50-and-3-at-v2026-8-18
    last_verified: 2026-09-23
    status: retired
  - id: cli-execute-code-and-yolo-toggle-unreleased
    finding_id: 2026-08-20-hermes-cli-execute-code-approval-and-yolo-toggle-still-unreleased
    last_verified: 2026-09-23
    status: retired
  - id: curator-autonomous-skill-maintenance
    finding_id: 2026-05-06-hermes-curator-and-service-surfaces
    last_verified: 2026-05-06
    status: retired
  - id: self-improvement-loop-background-review
    finding_id: 2026-05-06-hermes-curator-and-service-surfaces
    last_verified: 2026-05-06
    status: retired
  - id: gateway-service-restart-readiness
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: retired
  - id: long-term-memory-session-key
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: retired
  - id: pluggable-model-provider-modules
    finding_id: 2026-05-07-hermes-gateways-skills-and-service-operation
    last_verified: 2026-05-07
    status: retired
  - id: kanban-durable-multiagent
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: retired
  - id: goal-persistent-cross-turn
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-05-12
    status: retired
  - id: security-redaction-on-by-default
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-10-13
    status: retired
  - id: platform-channel-allowlists
    finding_id: 2026-05-12-hermes-tenacity-kanban-and-security
    last_verified: 2026-10-13
    status: retired
  - id: mistralai-quarantine-graceful-disable
    finding_id: 2026-05-12-hermes-mistralai-quarantine-response
    last_verified: 2026-05-12
    status: retired
  - id: pypi-distribution-and-lazy-install
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: retired
  - id: native-windows-beta
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: retired
  - id: hermes-proxy-credential-router
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: retired
  - id: honcho-identity-mapping
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: retired
  - id: credential-pool-isolation-fallback
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: retired
  - id: supply-chain-advisory-checker
    finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_verified: 2026-05-27
    status: retired
  - id: v0-15-multi-agent-and-docker-optin
    finding_id: 2026-05-29-hermes-agent-patch-release
    last_verified: 2026-06-03
    status: retired
  - id: v0-17-fail-closed-wave-tagged
    finding_id: 2026-06-23-hermes-v0.17.0-reach-release
    last_verified: 2026-06-23
    status: retired
  - id: mcp-persistence-0day-mitigation-main-unreleased
    finding_id: 2026-06-23-hermes-0day-mitigation-wave-main-unreleased
    last_verified: 2026-09-23
    status: retired
  - id: managed-etc-hermes-scope
    finding_id: 2026-06-23-hermes-managed-scope-etc-hermes
    last_verified: 2026-10-13
    status: retired
  - id: background-fanout-subagents-no-wallclock
    finding_id: 2026-06-23-hermes-background-async-subagents-tagged
    last_verified: 2026-09-23
    status: retired
  - id: git-filter-floor-v0-21-6
    finding_id: 2026-10-13-hermes-agent-the-git-config-floor-moves-to-v0-21-6-a-repository-s-own-clean-smudge-process-filters-stil
    last_verified: 2026-10-24
    status: retired
  - id: gateway-unattended-policy-v0-21-7
    finding_id: 2026-10-13-hermes-agent-unattended-deny-did-not-apply-inside-a-running-gateway-until-v0-21-7-webhook-turns-reached
    last_verified: 2026-10-24
    status: active
  - id: lsp-workspace-trust
    finding_id: 2026-10-13-hermes-agent-language-servers-ran-a-cloned-repository-s-own-code-on-file-writes-with-no-approval-until
    last_verified: 2026-10-24
    status: active
  - id: stable-source-update
    finding_id: 2026-10-13-hermes-agent-hermes-update-follows-published-releases-from-v0-21-7-before-that-an-unconfigured-source
    last_verified: 2026-10-24
    status: retired
  - id: release-artifact-receipts
    finding_id: 2026-10-13-hermes-agent-releases-became-receipts-calver-tags-end-at-v2026-9-24-both-new-stables-were-cut-with-the
    last_verified: 2026-10-24
    status: retired
  - id: tirith-removed
    finding_id: 2026-10-13-hermes-agent-the-default-on-tirith-command-scanner-left-core-in-v0-21-6-two-of-its-catches-moved-into
    last_verified: 2026-10-24
    status: retired
  - id: email-sender-authentication
    finding_id: 2026-10-13-hermes-agent-email-gateway-allowlists-could-be-passed-with-a-spoofed-from-display-name-or-smuggled-auth
    last_verified: 2026-10-24
    status: retired
  - id: dashboard-login-revocation
    finding_id: 2026-10-13-hermes-agent-four-dashboard-sign-in-defects-reported-by-tenable-including-a-login-code-redirect-that
    last_verified: 2026-10-24
    status: retired
  - id: sandbox-browser-placement
    finding_id: 2026-10-13-hermes-agent-with-a-sandboxed-terminal-bot-screen-computer-use-and-the-browser-still-ran-on-the-gateway
    last_verified: 2026-10-24
    status: retired
  - id: optional-memory-catalog-migration
    finding_id: 2026-10-13-hermes-agent-core-shed-six-memory-providers-home-assistant-spotify-and-skill-sync-configured-homes-can
    last_verified: 2026-10-24
    status: retired
  - id: hook-response-and-batch-consent
    finding_id: 2026-10-13-hermes-agent-approval-and-consent-fixes-v2026-9-24-to-v0-21-6-hook-approvals-escalate-stale-sessions
    last_verified: 2026-10-24
    status: retired
  - id: compaction-ratio-default
    finding_id: 2026-10-13-hermes-agent-compaction-on-1m-window-models-moved-from-a-256k-cap-to-half-the-window-in-v0-21-6-and-a
    last_verified: 2026-10-24
    status: retired
  - id: bounded-advisory-search
    finding_id: 2026-10-13-hermes-agent-queried-github-advisory-surfaces-had-no-newer-public-hermes-entry-17-source-cited-ids-were
    last_verified: 2026-10-24
    status: retired
  - id: default-browser-vault
    finding_id: 2026-10-13-hermes-agent-correction-the-browser-credential-vault-is-on-by-default-only-real-profile-browsing-is-opt
    last_verified: 2026-10-24
    status: retired
  - id: retired-pypi-homebrew
    finding_id: 2026-10-13-hermes-agent-correction-pypi-and-homebrew-distribution-ended-in-july-pip-install-hermes-agent-still-ins
    last_verified: 2026-10-24
    status: active
  - id: policy-hook-fail-closed
    finding_id: 2026-10-13-hermes-agent-policy-plugin-exceptions-now-block-the-tool-instead-of-failing-open
    last_verified: 2026-10-24
    status: retired
  - id: foreign-home-secret-scope
    finding_id: 2026-10-13-hermes-agent-routed-foreign-profile-homes-no-longer-borrow-launch-process-credentials-on-a-secret-miss
    last_verified: 2026-10-24
    status: retired
  - id: anthropic-endpoint-credential-origin
    finding_id: 2026-10-13-hermes-agent-anthropic-labeled-custom-endpoints-no-longer-receive-refreshed-vendor-credentials
    last_verified: 2026-10-24
    status: retired
  - id: simplex-contact-ids
    finding_id: 2026-10-13-hermes-agent-simplex-sender-allowlists-now-match-numeric-contact-ids-rather-than-mutable-display-names
    last_verified: 2026-10-24
    status: retired
  - id: a2a-empty-peer-list
    finding_id: 2026-10-13-hermes-agent-network-exposed-a2a-refuses-dispatch-with-an-empty-trusted-peer-list
    last_verified: 2026-10-24
    status: retired
  - id: explicit-empty-toolsets
    finding_id: 2026-10-13-hermes-agent-explicitly-empty-resolved-cli-and-per-job-cron-toolsets-no-longer-widen-to-defaults
    last_verified: 2026-10-24
    status: retired
  - id: blank-message-signing-secrets
    finding_id: 2026-10-13-hermes-agent-webhook-twilio-sms-and-line-reject-blank-signing-secrets
    last_verified: 2026-10-24
    status: retired
  - id: profile-export-private-stores
    finding_id: 2026-10-13-hermes-agent-profile-exports-exclude-credential-stores-and-imports-cannot-replace-nested-private-state
    last_verified: 2026-10-24
    status: retired
  - id: private-browser-media-modes
    finding_id: 2026-10-13-hermes-agent-browser-profiles-screenshots-and-media-caches-gain-private-filesystem-modes
    last_verified: 2026-10-13
    status: retired
  - id: diagnostic-url-redaction
    finding_id: 2026-10-13-hermes-agent-diagnostic-dumps-redact-credentials-embedded-in-base-urls
    last_verified: 2026-10-24
    status: retired
  - id: signed-reasoning-resume
    finding_id: 2026-10-13-hermes-agent-anthropic-and-bedrock-resume-preserve-provider-appropriate-signed-reasoning
    last_verified: 2026-10-24
    status: retired
  - id: cron-store-health-notices
    finding_id: 2026-10-13-hermes-agent-cron-reports-an-unwritable-store-as-degraded-and-notifies-the-owning-home-on-recovery
    last_verified: 2026-10-24
    status: retired
  - id: platform-build-omissions
    finding_id: 2026-10-13-hermes-agent-intel-macos-and-termux-stable-artifacts-become-opt-in-and-were-omitted-from-v0-21
    last_verified: 2026-10-24
    status: retired
  - id: utc-cutoff-source-state
    finding_id: 2026-10-13-hermes-agent-late-october-13-v0-22-0-attempts-leave-main-ahead-of-the-last-in-window-stable
    last_verified: 2026-10-24
    status: retired
  - id: smart-review-and-failure-escalation
    finding_id: 2026-10-13-hermes-agent-unattended-deny-did-not-apply-inside-a-running-gateway-until-v0-21-7-webhook-turns-reached
    last_verified: 2026-10-24
    status: retired
  - id: built-in-memory-write-default
    finding_id: 2026-10-13-hermes-agent-core-shed-six-memory-providers-home-assistant-spotify-and-skill-sync-configured-homes-can
    last_verified: 2026-10-24
    status: retired
  - id: stable-install-and-selected-acceptance
    finding_id: 2026-10-24-hermes-agent-fresh-installs-now-select-stable-but-a-wrong-tree-release-shows-what-the-channel-does-not
    last_verified: 2026-10-24
    status: active
  - id: gateway-owned-cli-and-live-revocation
    finding_id: 2026-10-24-hermes-agent-the-gateway-owns-classic-cli-turns-and-live-revocations-reach-more-request-paths
    last_verified: 2026-10-24
    status: active
  - id: welcome-trial-and-connector-data-policy
    finding_id: 2026-10-24-hermes-agent-desktop-trials-and-connectors-reduce-setup-with-account-and-data-use-boundaries-still-visi
    last_verified: 2026-10-24
    status: active
  - id: mcp-server-plugin-migration
    finding_id: 2026-10-24-hermes-agent-hermes-as-an-mcp-server-now-requires-a-plugin-and-a-different-client-command
    last_verified: 2026-10-24
    status: active
  - id: declared-mcp-cost-consent
    finding_id: 2026-10-24-hermes-agent-declared-mcp-costs-can-trigger-approval-before-a-chat-exceeds-its-budget
    last_verified: 2026-10-24
    status: active
  - id: named-delegation-routes
    finding_id: 2026-10-24-hermes-agent-delegation-can-select-operator-defined-model-or-profile-routes
    last_verified: 2026-10-24
    status: active
  - id: docker-output-privilege-cleanup
    finding_id: 2026-10-24-hermes-agent-docker-cleanup-strips-sandbox-privilege-bits-including-persistent-container-leftovers
    last_verified: 2026-10-24
    status: active
  - id: memory-recovery-and-compaction-hook
    finding_id: 2026-10-24-hermes-agent-external-memory-calls-can-recover-after-a-stall-and-plugins-get-a-post-compaction-hook
    last_verified: 2026-10-24
    status: active
  - id: session-deletion-opt-in
    finding_id: 2026-10-24-hermes-agent-automatic-session-deletion-returns-to-explicit-opt
    last_verified: 2026-10-24
    status: active
  - id: plugin-oauth-consent
    finding_id: 2026-10-24-hermes-agent-plugins-can-delegate-oauth-sign-in-and-refresh-to-hermes
    last_verified: 2026-10-24
    status: retired
  - id: scoped-dependency-remediation
    finding_id: 2026-10-24-hermes-agent-dependency-repairs-reach-stable-with-exploit-conditions-narrower-than-the-package-names
    last_verified: 2026-10-24
    status: retired
  - id: local-runtime-awake-time-progress
    finding_id: 2026-10-24-hermes-agent-local-model-turns-handle-prompt-loading-and-laptop-sleep-without-treating-them-as-a-dead
    last_verified: 2026-10-24
    status: retired
  - id: canary-browser-tool-removal
    finding_id: 2026-10-24-hermes-agent-canary-removes-the-legacy-browser-tools-from-core
    last_verified: 2026-10-24
    status: active
  - id: canary-remembered-mcp-trust
    finding_id: 2026-10-24-hermes-agent-canary-makes-mcp-session-and-permanent-trust-answers-stick-per-tool
    last_verified: 2026-10-24
    status: active
  - id: canary-catalog-version-gate
    finding_id: 2026-10-24-hermes-agent-canary-enforces-catalog-minimum-hermes-versions-before-installing-or-updating-plugins
    last_verified: 2026-10-24
    status: active
  - id: dirty-worktree-archive-policy
    finding_id: 2026-10-24-hermes-agent-dirty-worktrees-can-be-archived-and-deleted-by-default
    last_verified: 2026-10-24
    status: active
  - id: local-viewer-script-approval
    finding_id: 2026-10-24-hermes-agent-local-execute-code-can-skip-whole-script-approval-only-for-an-attached-approving-viewer
    last_verified: 2026-10-24
    status: active
  - id: experimental-mcp-events
    finding_id: 2026-10-24-hermes-agent-experimental-mcp-event-subscriptions-can-start-unattended-agent-runs
    last_verified: 2026-10-24
    status: active
  - id: canary-file-backend-routing
    finding_id: 2026-10-24-hermes-agent-canary-lets-confining-terminal-backends-route-file-tools-through-the-backend
    last_verified: 2026-10-24
    status: active
  - id: canary-browser-control-api-removal
    finding_id: 2026-10-24-hermes-agent-canary-removes-browser-extension-control-apis-and-configuration
    last_verified: 2026-10-24
    status: active
  - id: gateway-service-ownership-recovery
    finding_id: 2026-10-24-hermes-agent-gateway-restart-recovery-and-service-ownership-receive-separate-repairs
    last_verified: 2026-10-24
    status: retired
  - id: mcp-live-progress
    finding_id: 2026-10-24-hermes-agent-mcp-servers-can-show-live-progress-in-the-calling-chat
    last_verified: 2026-10-24
    status: retired
  - id: aiohttp-multipart-remediation
    finding_id: 2026-10-24-hermes-agent-aiohttp-multipart-resource-exhaustion-is-patched-in-messaging-dependency-pins
    last_verified: 2026-10-24
    status: retired
  - id: desktop-git-environment-remediation
    finding_id: 2026-10-24-hermes-agent-desktop-simple-git-remediation-also-changes-forwarded-git-environment-variables
    last_verified: 2026-10-24
    status: active
posture_basis:
  capability:
    - 2026-10-24-hermes-agent-the-gateway-owns-classic-cli-turns-and-live-revocations-reach-more-request-paths
    - 2026-10-24-hermes-agent-delegation-can-select-operator-defined-model-or-profile-routes
    - 2026-10-24-hermes-agent-external-memory-calls-can-recover-after-a-stall-and-plugins-get-a-post-compaction-hook
    - 2026-10-24-hermes-agent-experimental-mcp-event-subscriptions-can-start-unattended-agent-runs
  accessibility:
    - 2026-10-13-hermes-agent-correction-pypi-and-homebrew-distribution-ended-in-july-pip-install-hermes-agent-still-ins
    - 2026-10-24-hermes-agent-fresh-installs-now-select-stable-but-a-wrong-tree-release-shows-what-the-channel-does-not
    - 2026-10-24-hermes-agent-desktop-trials-and-connectors-reduce-setup-with-account-and-data-use-boundaries-still-visi
    - 2026-10-24-hermes-agent-hermes-as-an-mcp-server-now-requires-a-plugin-and-a-different-client-command
  governance:
    - 2026-10-13-hermes-agent-unattended-deny-did-not-apply-inside-a-running-gateway-until-v0-21-7-webhook-turns-reached
    - 2026-10-13-hermes-agent-language-servers-ran-a-cloned-repository-s-own-code-on-file-writes-with-no-approval-until
    - 2026-10-24-hermes-agent-declared-mcp-costs-can-trigger-approval-before-a-chat-exceeds-its-budget
    - 2026-10-24-hermes-agent-docker-cleanup-strips-sandbox-privilege-bits-including-persistent-container-leftovers
    - 2026-10-24-hermes-agent-automatic-session-deletion-returns-to-explicit-opt
    - 2026-10-24-hermes-agent-canary-makes-mcp-session-and-permanent-trust-answers-stick-per-tool
    - 2026-10-24-hermes-agent-canary-enforces-catalog-minimum-hermes-versions-before-installing-or-updating-plugins
    - 2026-10-24-hermes-agent-dirty-worktrees-can-be-archived-and-deleted-by-default
    - 2026-10-24-hermes-agent-local-execute-code-can-skip-whole-script-approval-only-for-an-attached-approving-viewer
    - 2026-10-24-hermes-agent-canary-lets-confining-terminal-backends-route-file-tools-through-the-backend
    - 2026-10-24-hermes-agent-canary-removes-browser-extension-control-apis-and-configuration
    - 2026-10-24-hermes-agent-desktop-simple-git-remediation-also-changes-forwarded-git-environment-variables
stance:
  use_for: "Pilot <a href='https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/features/mcp.md#L1027-L1081'>approved event subscriptions</a> after testing repeated delivery, revocation and completion."
  avoid_for: "Unattended upgrades before <a href='https://github.com/NousResearch/hermes-official-plugins/blob/6389dd08c1e485db708688c69e42c2b7a7360f4e/mcp-serve/README.md'>external MCP launchers</a> have been migrated."
  watch_next: "A stable release containing <a href='https://github.com/NousResearch/hermes-agent/commit/72fc7dfe9bb9555fc89d603f0cc8dd6217ea675d'>backend file-tool routing</a>, followed by denied-path read/write/search tests with a pinned plugin."
---

# Hermes Agent

On 23 October 2026, [Hermes published stable v0.22.5](https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.5). It [removed the built-in `hermes mcp serve` command](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/left_core_migration.py#L261-L266), leaving external clients with a manual launcher migration. A smaller core still leaves someone responsible for keeping the integration working.

## Where it stands, 2026-10-24

Before upgrading, [repair any external MCP launcher](https://github.com/NousResearch/hermes-official-plugins/blob/6389dd08c1e485db708688c69e42c2b7a7360f4e/mcp-serve/README.md) and [preserve ignored worktree files](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/git-worktrees.md#L201-L260). [Gateway jobs can continue after the terminal closes](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md), so set a runtime budget. Avoid [retired PyPI/Homebrew installs](https://github.com/NousResearch/hermes-agent/commit/d84e11af4d9927c41ad0a3b4db72042cca250c64), [the unofficial npm bridge](https://registry.npmjs.org/hermes-agent) and [terminal-only isolation for hostile code](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/bubblewrap.yaml).

[Experimental MCP event subscriptions ship in stable but require `events: true`](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/features/mcp.md#L1027-L1081); the [MCP server's general tool bridge requires `--tools`](https://github.com/NousResearch/hermes-official-plugins/blob/6389dd08c1e485db708688c69e42c2b7a7360f4e/mcp-serve/README.md). Canary changes are listed separately below, and [v0.22.5 did not replace standalone Desktop installers](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5).

**Channel.** Use [stable v0.22.5, published on 23 October 2026](https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.5). Download the linked [v0.22.5 installer](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/scripts/install.sh) as `install.sh`, then run [`bash install.sh --commit`](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/scripts/install.sh#L47-L57) [`bf0203a794a07aac3ff764972ab9087baa4e4f4e`](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/56b6a31fededdf7364e1a0a79548d144e7fd81a3). Alternatively, pin [Docker `nousresearch/hermes-agent@sha256:9c5561579f3ffdf333401797094ac3a743738d6c25d40f4331c7bf77b694238d`](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/56b6a31fededdf7364e1a0a79548d144e7fd81a3). Fresh official installs [now select stable](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/scripts/install.sh); existing official-source installs can [run `hermes update --set-channel stable`, including to leave an ahead-of-stable checkout](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/update_channel.py#L140-L200). Avoid [retired PyPI/Homebrew distribution](https://github.com/NousResearch/hermes-agent/commit/d84e11af4d9927c41ad0a3b4db72042cca250c64) and [npm's unofficial bridge](https://registry.npmjs.org/hermes-agent). [Canary](https://github.com/NousResearch/hermes-agent/tree/e8abec1e9655d135df39e9440c98dec0e8a34137) and [main](https://github.com/NousResearch/hermes-agent/compare/v0.22.5...bac34e9e9946c9c6a9ce7ce64efadd47f8fa375b) contain later source changes. The [browser removals](https://github.com/NousResearch/hermes-agent/commit/68500d9ff9456b52036ae2eb50c73468a6c2bae2), [remembered MCP approvals](https://github.com/NousResearch/hermes-agent/commit/ce11b6be1af2b1defe4b461b79a451a02af96a9f) and [catalog version enforcement](https://github.com/NousResearch/hermes-agent/commit/0255dedd1a445a0b300d1ef2b767da84e52a5af2) described under 'Audit adapters before choosing canary' are not in stable v0.22.5.

## What to repair before upgrading

**Update each external MCP launcher.** [Install `mcp-serve` in its launch profile](https://github.com/NousResearch/hermes-official-plugins/blob/6389dd08c1e485db708688c69e42c2b7a7360f4e/mcp-serve/README.md#L11-L34), then [replace client arguments `["mcp", "serve"]` with `["mcp-serve"]`](https://github.com/NousResearch/hermes-official-plugins/blob/6389dd08c1e485db708688c69e42c2b7a7360f4e/mcp-serve/README.md). Check every external client before rollout.

Its [conversation tools still read history, send through linked accounts and answer approvals; the general tool bridge stays off without `--tools`](https://github.com/NousResearch/hermes-official-plugins/blob/6389dd08c1e485db708688c69e42c2b7a7360f4e/mcp-serve/README.md).

**Save ignored files before automatic worktree cleanup.** [In v0.22.5, idle dirty or unpushed worktrees can be archived and removed by default; ignored files are deleted without entering the archive](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/git-worktrees.md#L201-L260). Inspect [`hermes worktree prune --dry-run`; set `worktrees.archive_dirty: false` if dirty trees must stay](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/git-worktrees.md#L201-L260), and preserve ignored state separately. [Archive retention defaults to 30 days](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/config_defaults.py#L495-L508). [Session auto-deletion separately defaults off again; saved choices still govern existing installations](https://github.com/NousResearch/hermes-agent/commit/968c87f6bc28de96a84763e0004e8b07f85f4e1b). Set worktree and session retention independently.

**Check the delivered Desktop bundle.** [v0.22.5 did not replace standalone Desktop installers](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5). Its [selected source and install/update checks passed](https://github.com/NousResearch/hermes-agent/actions/runs/39889504159), while [native package smoke entries were skipped and no new native packages were listed](https://hermes-assets.nousresearch.com/releases/tag/rc.3-v0.22.5/release-candidates.json). Before rollout, test startup, existing sessions and required plugins on the delivered artifact.

The [Desktop source update to simple-git 4.0.2 also changes SSH/askpass environment forwarding](https://github.com/NousResearch/hermes-agent/commit/14f2ca2bf40f012b0a90d7455cddaf692047b010); test custom Git authentication on the installed bundle.

## Who owns unattended work

**Follow the job after closing the terminal.** Classic chat, `chat -q` and `-z` [attach to gateway execution; EOF or detach leaves the job running](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md). Track the persisted session identity and explicit completion. Set [`agent.run_budget_seconds` in configuration](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md#L73-L80): [the main agent has no default turn or wall-clock cap](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/config_defaults.py#L75-L90), and [this client rejects `--run-budget`](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md). Before allowing an interrupted client to resubmit work, decide who reconciles it.

**Test script approval with the viewer you will use.** A local session's own foreground turn can [skip whole-script `execute_code` approval with an attached approval-capable viewer and notifier, outside delegated-child context](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/approval.py#L1198-L1283). [Injected, automation, delegated and detached turns do not gain this exemption; individual terminal guards remain, while direct Python effects bypass them](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/approval.py#L1198-L1283). Confine the process to contain direct Python effects.

[Unattended gateway turns without an answering surface use their unattended approval mode](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/approval.py#L933-L965), which [defaults to denial, as do cron and single-query modes](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/config_defaults.py#L1671-L1697). Do not generalize those defaults to every execution path.

**Approve an event's instructions before retiring its polling wrapper.** Opt-in `events: true` enables [experimental MCP subscriptions whose approved instructions and result destination become a signed webhook route; occurrences start unattended runs while the gateway is running](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/features/mcp.md#L1027-L1081). Test duplicates, revocation, renewal and lapse handling first. [Poll/push delivery and secondary multiplexed-profile subscriptions are unsupported](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/features/mcp.md#L1080-L1081). Keep a person responsible for which events may trigger which effects.

**Configure paid-tool consent before delegating.** Hermes [reserves declared MCP costs before dispatch and requires consent above the server's per-chat threshold, including for trusted servers](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/mcp_tool_handlers.py#L55-L165). [Meshy's catalog supplies estimates and a 200-credit threshold](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/meshy.yaml). Check vendor billing separately: [accounting is in memory, restarts lose the tally, and undeclared or zero-priced tools have no cost gate](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/mcp_tool_costs.py). [An operator can approve excess](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/mcp_tool_handlers.py#L55-L165); set a separate account spending limit where required.

**Treat a delegation route as a credential grant.** The optional [advanced-delegation plugin offers named model and profile routes; a profile route uses that profile's credentials, skills and terminal policy](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/advanced-delegation.yaml). Test one completed handback before replacing a supervisor that chooses those routes. Review [what the pinned plugin can execute and which credentials and terminal permissions each destination profile grants](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/advanced-delegation.yaml).

**Test memory recovery before leaving a long job unattended.** External memory [has two independent admission gates per process and home/provider, for prefetch and background work, each capped at 16 in-flight calls; closed gates allow at most one recovery probe per 60 seconds while below that cap](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/memory_manager.py#L47-L207). [Together they can retain up to 32 calls; Python cannot cancel the stuck threads](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/memory_manager.py#L47-L207). Test timeout, recovery and shutdown with the chosen provider before trusting it with long jobs.

**Keep hostile code outside the host process.** On Linux with non-root Hermes and rootful, non-remapped Docker, [output handback attempts to strip setuid/setgid and conditionally clear file capabilities, including persistent-container paths](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/environments/docker_ownership.py). Check cleanup warnings before running outputs on the host; [cleanup is bounded and cannot contain a malicious root process still modifying the mount](https://github.com/NousResearch/hermes-agent/commit/b0be65c30a11691901c99031aa0e8f8959908c2a). Narrow [explicit `lsp.trusted_workspaces` roots, which also trust descendants](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/lsp/workspace.py#L157-L193), as part of confining the full process.

**Start a trial with the right data route.** The [welcome trial is claimed once per OS user on that computer through first-install local Desktop onboarding](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/welcome_trial.py#L1-L11); [once claimed, it can serve the install's other surfaces while guest access is allowed](https://github.com/NousResearch/hermes-agent/commit/6c5d3c97828f95fa69ecb0e9fd22d871ca1b7240), including [cron and Kanban model resolution](https://github.com/NousResearch/hermes-agent/commit/c8029f51eb3273095469fc9ce1e488534dff1852). Check the connected account and model route before adding work data. Connector results can [require no training or zero retention; Nous routes carry those constraints and refuse without fallback when denied](https://github.com/NousResearch/hermes-agent/commit/22fc8098691e9de5f5ee64c23d82078d94e4b122). Keep that refusal intact.

## What changes only in canary

**Audit adapters before choosing canary.** The [24 October canary source, `v0.22.5+canary.20261024T065630Z`](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/063cfb7bdcd4c9cc11748a59f489201801656241), includes [legacy browser-tool removal](https://github.com/NousResearch/hermes-agent/commit/68500d9ff9456b52036ae2eb50c73468a6c2bae2) and [removal of `/v1/browser-control`, `/v1/artifacts` and `browser.controller.*`](https://github.com/NousResearch/hermes-agent/commit/b87977caddafb4dd1842d782ae4ae7e3af98e575). The [configuration migration drops `browser.extension_control`](https://github.com/NousResearch/hermes-agent/commit/0f8bbed1ed3b0272c1f7ece147ea823b79789918); [the documented replacement uses `browser.cdp_url`](https://github.com/NousResearch/hermes-agent/commit/b04f5a38bb659bccf57dea4232554e33f093e9cc). Audit tool names and transports.

Canary also [remembers MCP session/permanent approvals per tool](https://github.com/NousResearch/hermes-agent/commit/ce11b6be1af2b1defe4b461b79a451a02af96a9f) and [enforces catalog minimum versions before plugin install/update](https://github.com/NousResearch/hermes-agent/commit/0255dedd1a445a0b300d1ef2b767da84e52a5af2). On stable, [compare catalog requirements manually](https://github.com/NousResearch/hermes-agent/commit/0255dedd1a445a0b300d1ef2b767da84e52a5af2) and [expect session/always answers to prompt again on later write-capable calls to an untrusted MCP server](https://github.com/NousResearch/hermes-agent/commit/ce11b6be1af2b1defe4b461b79a451a02af96a9f).

## What is unresolved

- **Native delivery.** Dated Store-client and APT package identities, followed by installation and migration results, would settle delivery beyond the [recorded build artifacts](https://hermes-assets.nousresearch.com/releases/tag/rc.3-v0.22.5/release-candidates.json). Accepting a downloadable canary also requires a source-linked bundle and a target-platform trial.
- **File-tool confinement.** Require a stable tag containing [canary's backend routing declaration](https://github.com/NousResearch/hermes-agent/commit/72fc7dfe9bb9555fc89d603f0cc8dd6217ea675d), a plugin pin adopting it, and denied-path read/write/search probes. The [v0.22.5 Bubblewrap catalog says file tools still run on the host](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/bubblewrap.yaml).
- **Kanban handbacks.** The [automation repair leaves producer/card work outstanding](https://github.com/NousResearch/hermes-agent/pull/141357). To settle that report, identify the exact failing card/session/version and replay it successfully.
- **Memory quality.** Establishing gains beyond [memory lifecycle repair](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/memory_manager.py) would require controlled task-outcome or recall tests.
- **Role enforcement.** Require server-side allow/deny tests for [dashboard OIDC groups](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugins/dashboard_auth/self_hosted/__init__.py#L273-L286) and [hosted connector calls](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/connectors/dispatch.py) before relying on them.
- **Exposure ranges.** Issue-specific advisories with explicit ranges would settle the [Git-filter](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/coding_context.py#L538-L554) and [webhook](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/gateway/platforms/webhook.py#L398-L406) exposure questions.

## Profile hygiene

### Review date and scope

This recommendation applies only to 24 October 2026. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the evidence contract.
