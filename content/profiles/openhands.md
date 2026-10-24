---
schema_version: bitter.frontier_profile.v0
profile_id: openhands
label: OpenHands
owner: OpenHands
source_contract: sources/openhands.yml
homepage: https://openhands.dev/
docs: https://docs.openhands.dev/
tagline: "A permitted GitHub mention can now get OpenHands to push a branch."
compared_with: []
x:
  project: OpenHandsDev
  maintainers:
    - handle: rbren_dev
      name: Robert Brennan
    - handle: xingyaow_
      name: Xingyao Wang
repo: https://github.com/OpenHands/OpenHands
surface_class: mixed_official_docs
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-24
last_full_review: 2026-10-24
claims:
  - id: docker-runtime-ignored
    finding_id: 2026-09-21-openhands-docker-conversation-runtime-settings-reach-the-bundled-agent-server-v1-20-0-docker-executi
    last_verified: 2026-10-13
    status: retired
  - id: profiles-scopes
    finding_id: 2026-09-21-openhands-profiles-become-enforceable-scopes-mcp-servers-v1-19-0-and-secrets-v1-20-0-with-a-skill
    last_verified: 2026-09-23
    status: retired
  - id: wrong-profile-fix-unreleased-at-2026-08-20
    finding_id: 2026-08-20-openhands-wrong-profile-fix-still-unreleased-at-window-close
    last_verified: 2026-08-20
    status: retired
  - id: git-sync-404-on-v1-14-0
    finding_id: 2026-08-20-openhands-v1-14-0-git-sync-page-404s-against-bundled-automation
    last_verified: 2026-08-20
    status: retired
  - id: release-channel-lag
    finding_id: 2026-06-23-openhands-channel-posture
    last_verified: 2026-06-23
    status: retired
  - id: api-key-redaction
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: retired
  - id: secret-injection-subprocess
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-10-13
    status: retired
  - id: sandbox-grouping-ui
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: retired
  - id: self-hosted-gitlab
    finding_id: 2026-05-07-openhands-platform-hardening
    last_verified: 2026-05-07
    status: retired
  - id: subagent-delegation-opt-in
    finding_id: 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    last_verified: 2026-10-13
    status: retired
  - id: critic-result-gui
    finding_id: 2026-05-12-openhands-subagent-delegation-and-critic-evaluation
    last_verified: 2026-05-12
    status: retired
  - id: acp-agent-settings-ui
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-05-27
    status: retired
  - id: org-level-llm-profiles
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-06-23
    status: retired
  - id: mcp-acp-env-per-org-member
    finding_id: 2026-05-27-openhands-acp-ui-and-org-llm-profiles
    last_verified: 2026-05-27
    status: retired
  - id: frontend-cve-cluster-and-acp-secrets
    finding_id: 2026-06-03-openhands-cve-2026-44492-axios
    last_verified: 2026-06-03
    status: retired
  - id: apikey-keycloak-decouple
    finding_id: 2026-06-23-openhands-apikey-keycloak-decouple
    last_verified: 2026-06-23
    status: retired
  - id: conversation-secret-enricher
    finding_id: 2026-06-23-openhands-conversation-secret-enricher
    last_verified: 2026-06-23
    status: retired
  - id: dynamic-sandbox-spec-service
    finding_id: 2026-06-23-openhands-dynamic-sandbox-spec-service
    last_verified: 2026-06-23
    status: retired
  - id: concurrency-limits-reverted
    finding_id: 2026-06-23-openhands-concurrency-limit-revert
    last_verified: 2026-06-23
    status: retired
  - id: acp-env-broadcast-closed
    finding_id: 2026-06-23-openhands-acp-env-leak-closed
    last_verified: 2026-06-23
    status: retired
  - id: hide-personal-workspaces-ui-only
    finding_id: 2026-06-23-openhands-hide-personal-workspaces-ui-only
    last_verified: 2026-06-23
    status: retired
  - id: wrong-profile-fix-v1-15-and-model-override
    finding_id: 2026-09-21-openhands-carry-forward-v1-15-0-is-the-in-window-tag-with-the-wrong-profile-fix-and-it-ships-the-opp
    last_verified: 2026-09-23
    status: retired
  - id: automation-permissions-run-as
    finding_id: 2026-09-21-openhands-automations-get-view-manage-permissions-creator-only-re-enable-a-visible-run-as-identity
    last_verified: 2026-10-24
    status: active
  - id: security-fixes-without-advisories
    finding_id: 2026-09-21-openhands-four-security-fixes-shipped-as-plain-prs-electron-link-origin-bypass-runtime-config-xss
    last_verified: 2026-10-13
    status: retired
  - id: pdf-preview-unsandboxed
    finding_id: 2026-09-21-openhands-v1-15-0-removes-the-pdf-preview-sandbox-tagged
    last_verified: 2026-09-23
    status: retired
  - id: acp-harness-list-explicit
    finding_id: 2026-09-21-openhands-acp-harness-surfacing-becomes-an-explicit-per-harness-decision-the-acp-registry-pin-now
    last_verified: 2026-10-13
    status: retired
  - id: ui-ahead-of-server-pin
    finding_id: 2026-09-21-openhands-provider-connections-ui-shipped-in-v1-15-0-ahead-of-the-server-api-it-works-from-v1-16-0
    last_verified: 2026-09-23
    status: retired
  - id: lan-key-policy
    finding_id: 2026-10-13-openhands-v1-25-0-stops-serving-the-session-key-to-the-network-npm-desktop-and-docker-installs-befor
    last_verified: 2026-10-24
    status: active
  - id: docker-auth-env-gap
    finding_id: 2026-10-13-openhands-docker-image-setting-local-backend-api-key-leaves-the-agent-server-with-no-key-at-all-open
    last_verified: 2026-10-24
    status: active
  - id: docker-package-repair
    finding_id: 2026-10-13-openhands-the-v1-27-0-docker-image-crash-loops-v1-27-1-fixes-it-and-adds-a-boot-test-before-tags-mov
    last_verified: 2026-10-24
    status: retired
  - id: local-terminal-secret-path
    finding_id: 2026-10-13-openhands-profile-secret-scopes-do-not-bind-the-agent-s-own-terminal-the-stack-s-session-key-is-in
    last_verified: 2026-10-24
    status: active
  - id: whole-conversation-docker
    finding_id: 2026-10-13-openhands-per-conversation-docker-containers-ship-through-oh-conversation-runtime-the-execution-only
    last_verified: 2026-10-24
    status: active
  - id: conditional-profile-fallback
    finding_id: 2026-10-13-openhands-agent-profiles-gain-server-catalog-tools-and-a-persona-v1-25-0-global-settings-fallback
    last_verified: 2026-10-24
    status: retired
  - id: remote-server-floor
    finding_id: 2026-10-13-openhands-canvas-v1-25-0-refuses-agent-servers-older-than-1-51
    last_verified: 2026-10-24
    status: retired
  - id: credential-telemetry-repairs
    finding_id: 2026-10-13-openhands-credential-telemetry-and-approval-repairs-ship-as-ordinary-pull-requests
    last_verified: 2026-10-24
    status: retired
  - id: acp-engines-and-models
    finding_id: 2026-10-13-openhands-acp-pi-and-opencode-join-the-built-in-agents-on-local-backends-and-model-lists-come-from
    last_verified: 2026-10-24
    status: active
  - id: automation-assistant-and-transcripts
    finding_id: 2026-10-13-openhands-automations-the-agent-fills-the-setup-form-v1-27-0-and-enterprise-transcripts-become-org
    last_verified: 2026-10-24
    status: active
  - id: router-prompt-and-toggle
    finding_id: 2026-10-13-openhands-model-router-lets-a-classifier-pick-the-model-for-each-task-and-first-router-creation-atte
    last_verified: 2026-10-24
    status: retired
  - id: digitalocean-stable-backend
    finding_id: 2026-10-13-openhands-digitalocean-managed-agents-becomes-a-canvas-backend-v1-27
    last_verified: 2026-10-13
    status: retired
  - id: qa-recipes-and-evidence
    finding_id: 2026-10-13-openhands-openhands-ships-its-own-agent-driven-qa-harness-and-recipes-for-27-feature-families-and
    last_verified: 2026-10-13
    status: retired
  - id: delegated-tool-mcp-limits
    finding_id: 2026-10-13-openhands-delegated-agents-inherit-profile-tool-and-mcp-limits-from-sdk-v1-51
    last_verified: 2026-10-24
    status: active
  - id: anyio-remediation
    finding_id: 2026-10-13-openhands-anyio-tls-certificate-spoofing-remediation-reaches-the-canvas-v1-25-0-backends
    last_verified: 2026-10-13
    status: retired
  - id: residual-dependency-version-alerts
    finding_id: 2026-10-13-openhands-dependency-repairs-leave-pyjwt-and-fsspec-version-alerts-in-the-newest-sdk-lock
    last_verified: 2026-10-24
    status: active
  - id: run-capacity-storage-and-security-events
    finding_id: 2026-10-13-openhands-capacity-enforcement-and-optional-storage-policies-change-unattended-docker-runs
    last_verified: 2026-10-13
    status: retired
  - id: enterprise-key-export-and-proxy-switch
    finding_id: 2026-10-13-openhands-enterprise-1-71-0-repairs-llm-key-export-and-adds-an-opt-out-from-the-managed-proxy
    last_verified: 2026-10-24
    status: retired
  - id: member-create-and-cloud-compatibility
    finding_id: 2026-10-13-openhands-automation-members-can-create-work-and-cloud-profile-and-cookie-compatibility-improve
    last_verified: 2026-10-24
    status: retired
  - id: sync-encryption-and-webhook-dedup
    finding_id: 2026-10-13-openhands-git-sync-encryption-re-export-and-configured-webhook-deduplication-reach-stable
    last_verified: 2026-10-13
    status: retired
  - id: gemini-model-correctness
    finding_id: 2026-10-13-openhands-sdk-v1-54-0-restores-gemini-requested-model-handling
    last_verified: 2026-10-24
    status: active
  - id: unreleased-web-bridge-default
    finding_id: 2026-10-13-openhands-digitalocean-web-bridge-defaults-on-only-in-the-closing-main-ancestry
    last_verified: 2026-10-13
    status: retired
  - id: unreleased-secret-requests
    finding_id: 2026-10-13-openhands-in-conversation-secret-requests-are-merged-but-absent-from-canvas-v1-27
    last_verified: 2026-10-24
    status: retired
  - id: cloud-conversation-org-scope
    finding_id: 2026-10-13-openhands-canvas-v1-26-0-adds-explicit-organization-scope-to-cloud-conversation-requests
    last_verified: 2026-10-13
    status: retired
  - id: install-channel-at-cutoff
    finding_id: 2026-10-13-openhands-install-snapshot-at-cutoff-is-canvas-v1-27-1-with-separately-pinned-services
    last_verified: 2026-10-24
    status: retired
  - id: gemini-request-remapping
    finding_id: 2026-10-13-gemini-cli-stable-v0-61-0-rewrites-explicit-flash-model-ids
    last_verified: 2026-10-13
    status: retired
  - id: local-profile-launch-and-behavior
    finding_id: 2026-10-24-openhands-local-launches-keep-the-selected-profile-and-profiles-take-ownership-of-behavior
    last_verified: 2026-10-24
    status: active
  - id: released-secret-requests
    finding_id: 2026-10-24-openhands-in-conversation-secret-requests-reach-stable-with-server-side-profile-filtering
    last_verified: 2026-10-24
    status: active
  - id: tmux-sanitization-with-surviving-alias
    finding_id: 2026-10-24-openhands-tmux-starts-honoring-secret-sanitization-while-the-automation-key-alias-still-survives
    last_verified: 2026-10-24
    status: active
  - id: exact-child-mcp-and-shell-rails
    finding_id: 2026-10-24-openhands-children-inherit-exactly-the-parent-s-mcp-set-and-policy-rails-parse-shell-structure
    last_verified: 2026-10-24
    status: active
  - id: cipher-key-migration
    finding_id: 2026-10-24-openhands-cipher-key-rotation-gains-a-migration-path-and-refuses-destructive-writes-under-a-lost-key
    last_verified: 2026-10-24
    status: active
  - id: runtime-selection-and-resource-replacements
    finding_id: 2026-10-24-openhands-a-server-can-offer-local-and-docker-conversations-but-client-resource-values-are-not-cappe
    last_verified: 2026-10-24
    status: active
  - id: executable-plugin-automations
    finding_id: 2026-10-24-openhands-plugin-manifests-can-carry-executable-automations-and-azure-devops-joins-the-event-path
    last_verified: 2026-10-24
    status: active
  - id: scoped-sandbox-quota-and-member-drafts
    finding_id: 2026-10-24-openhands-daily-quotas-count-sandbox-creation-and-members-can-save-their-own-automation-drafts
    last_verified: 2026-10-24
    status: active
  - id: enterprise-linking-and-verification-default
    finding_id: 2026-10-24-openhands-enterprise-binds-account-linking-to-the-browser-but-makes-email-verification-enforcement
    last_verified: 2026-10-24
    status: active
  - id: enterprise-compose-and-licensed-helm
    finding_id: 2026-10-24-openhands-enterprise-packages-a-local-compose-stack-and-clarifies-the-licensed-helm-path
    last_verified: 2026-10-24
    status: active
  - id: digitalocean-bridge-opt-in-restored
    finding_id: 2026-10-24-openhands-the-digitalocean-web-bridge-ships-default-on-then-returns-to-opt
    last_verified: 2026-10-24
    status: active
  - id: mcp-oauth-and-unreleased-acp-forwarding
    finding_id: 2026-10-24-openhands-mcp-oauth-installation-and-refresh-improve-while-acp-credential-forwarding-remains-unrelea
    last_verified: 2026-10-24
    status: active
  - id: litellm-compatibility-cap
    finding_id: 2026-10-24-openhands-a-compatibility-cap-excludes-the-compromised-litellm-release-while-dependency-freshness
    last_verified: 2026-10-24
    status: active
  - id: certifi-python-repair-os-bundle-open
    finding_id: 2026-10-24-openhands-certificate-distrust-ships-in-python-dependencies-with-an-os-bundle-repair-still-on-main
    last_verified: 2026-10-24
    status: active
  - id: session-key-argv-main-only
    finding_id: 2026-10-24-openhands-canvas-removes-the-session-key-from-a-child-command-line-only-after-v1-33
    last_verified: 2026-10-24
    status: active
  - id: github-monitor-authorization-and-implement
    finding_id: 2026-10-24-openhands-github-mentions-can-request-code-changes-under-a-repository-write-gate
    last_verified: 2026-10-24
    status: active
  - id: default-enabled-factory-guidance
    finding_id: 2026-10-24-openhands-software-factory-guidance-ships-and-becomes-default-enabled
    last_verified: 2026-10-24
    status: active
  - id: provider-staging-and-registration
    finding_id: 2026-10-24-openhands-enterprise-providers-can-be-staged-and-new-user-registration-controlled
    last_verified: 2026-10-24
    status: active
  - id: configured-email-admin-grants
    finding_id: 2026-10-24-openhands-configured-emails-can-receive-instance-super-admin-on-oauth-login
    last_verified: 2026-10-24
    status: active
  - id: compose-sandbox-grouping
    finding_id: 2026-10-24-openhands-enterprise-compose-shares-sandboxes-across-conversations-by-default
    last_verified: 2026-10-24
    status: active
  - id: typescript-run-controls-forwarded
    finding_id: 2026-10-24-openhands-typescript-conversation-limits-now-reach-the-server
    last_verified: 2026-10-24
    status: active
  - id: strict-plugin-preflight
    finding_id: 2026-10-24-openhands-strict-plugin-preflight-resolves-a-revision-without-enabling-the-plugin
    last_verified: 2026-10-24
    status: active
  - id: failed-sandbox-cleanup-retry
    finding_id: 2026-10-24-openhands-failed-automation-sandbox-starts-get-cleanup-and-bounded-retries
    last_verified: 2026-10-24
    status: retired
  - id: install-channel-2026-10-24
    finding_id: 2026-10-24-openhands-install-snapshot-is-canvas-v1-33-0-with-separately-pinned-services-and-extensions
    last_verified: 2026-10-24
    status: active
posture_basis:
  capability:
    - 2026-10-13-openhands-per-conversation-docker-containers-ship-through-oh-conversation-runtime-the-execution-only
    - 2026-10-13-openhands-acp-pi-and-opencode-join-the-built-in-agents-on-local-backends-and-model-lists-come-from
    - 2026-10-13-openhands-automations-the-agent-fills-the-setup-form-v1-27-0-and-enterprise-transcripts-become-org
    - 2026-10-13-openhands-sdk-v1-54-0-restores-gemini-requested-model-handling
    - 2026-10-24-openhands-local-launches-keep-the-selected-profile-and-profiles-take-ownership-of-behavior
    - 2026-10-24-openhands-in-conversation-secret-requests-reach-stable-with-server-side-profile-filtering
    - 2026-10-24-openhands-plugin-manifests-can-carry-executable-automations-and-azure-devops-joins-the-event-path
    - 2026-10-24-openhands-software-factory-guidance-ships-and-becomes-default-enabled
    - 2026-10-24-openhands-typescript-conversation-limits-now-reach-the-server
    - 2026-10-24-openhands-strict-plugin-preflight-resolves-a-revision-without-enabling-the-plugin
  accessibility:
    - 2026-10-24-openhands-enterprise-packages-a-local-compose-stack-and-clarifies-the-licensed-helm-path
    - 2026-10-24-openhands-the-digitalocean-web-bridge-ships-default-on-then-returns-to-opt
    - 2026-10-24-openhands-enterprise-providers-can-be-staged-and-new-user-registration-controlled
    - 2026-10-24-openhands-install-snapshot-is-canvas-v1-33-0-with-separately-pinned-services-and-extensions
  governance:
    - 2026-10-13-openhands-v1-25-0-stops-serving-the-session-key-to-the-network-npm-desktop-and-docker-installs-befor
    - 2026-10-13-openhands-docker-image-setting-local-backend-api-key-leaves-the-agent-server-with-no-key-at-all-open
    - 2026-10-13-openhands-profile-secret-scopes-do-not-bind-the-agent-s-own-terminal-the-stack-s-session-key-is-in
    - 2026-10-13-openhands-delegated-agents-inherit-profile-tool-and-mcp-limits-from-sdk-v1-51
    - 2026-10-13-openhands-dependency-repairs-leave-pyjwt-and-fsspec-version-alerts-in-the-newest-sdk-lock
    - 2026-10-24-openhands-tmux-starts-honoring-secret-sanitization-while-the-automation-key-alias-still-survives
    - 2026-10-24-openhands-children-inherit-exactly-the-parent-s-mcp-set-and-policy-rails-parse-shell-structure
    - 2026-10-24-openhands-cipher-key-rotation-gains-a-migration-path-and-refuses-destructive-writes-under-a-lost-key
    - 2026-10-24-openhands-a-server-can-offer-local-and-docker-conversations-but-client-resource-values-are-not-cappe
    - 2026-10-24-openhands-daily-quotas-count-sandbox-creation-and-members-can-save-their-own-automation-drafts
    - 2026-10-24-openhands-enterprise-binds-account-linking-to-the-browser-but-makes-email-verification-enforcement
    - 2026-10-24-openhands-mcp-oauth-installation-and-refresh-improve-while-acp-credential-forwarding-remains-unrelea
    - 2026-10-24-openhands-a-compatibility-cap-excludes-the-compromised-litellm-release-while-dependency-freshness
    - 2026-10-24-openhands-certificate-distrust-ships-in-python-dependencies-with-an-os-bundle-repair-still-on-main
    - 2026-10-24-openhands-canvas-removes-the-session-key-from-a-child-command-line-only-after-v1-33
    - 2026-10-24-openhands-github-mentions-can-request-code-changes-under-a-repository-write-gate
    - 2026-10-24-openhands-configured-emails-can-receive-instance-super-admin-on-oauth-login
    - 2026-10-24-openhands-enterprise-compose-shares-sandboxes-across-conversations-by-default
stance:
  use_for: "A bounded repository trial of <a href='https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/README.md'>packaged development jobs with reviewed credentials and checkpoints</a> on <a href='https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json'>Canvas v1.33.0 and its coordinated services</a>."
  avoid_for: "<ul><li>Production secrets in the <a href='https://github.com/OpenHands/docs/blob/f742b438db2d5a2d316ebea67a18c46b4ab56a48/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx'>default local runtime</a>.</li><li>Reachable Docker with <a href='https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh#L210-L239'>only LOCAL_BACKEND_API_KEY configured</a>.</li><li>A code-changing monitor with <a href='https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114'>anyone authorization</a>.</li></ul>"
  watch_next: "<ul><li>Require a released fix and rejection tests for <a href='#local-secret-boundary'>excluded-secret retrieval</a>.</li><li>Require a released fix and an unauthenticated-request 401 for <a href='#docker-auth'>Docker authentication</a>.</li><li>Test unauthorized commenters against <a href='#monitor-authority'>the deployed monitor</a>.</li><li>Require Cloud's serving version and a cross-member transcript test before applying <a href='#what-is-unresolved'>Enterprise's output-access rule</a>.</li></ul>"
---

# OpenHands

A permitted GitHub mention can now [ask OpenHands to create a branch, commit and push](https://github.com/OpenHands/extensions/commit/af0a4b816b0b711c79771b91a950726c0c6ed896) using an automation's token. Choose who may start that work before judging the patch.

Start with [Canvas v1.33.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0) on one bounded repository; the install command and prerequisites follow. Before enabling automation, [review saved monitors](#monitor-authority), [keep production secrets off the default local runtime](#local-secret-boundary), and [configure Docker authentication before exposing a port](#docker-auth). [DigitalOcean Managed Agents remains public preview](https://docs.digitalocean.com/products/managed-agents/). [Enterprise child launching](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/config.py#L190-L198), [the DigitalOcean bridge](https://github.com/OpenHands/OpenHands/commit/1e850162beea360c61b75bee8c0d818b405be184) and [agent delegation](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/tool/defaults.py) require explicit enablement. Three repairs listed below remain on main and are absent from these [Canvas](https://github.com/OpenHands/OpenHands/compare/v1.33.0...fee10e3d2909ebbf9950578575b1ee011492171e) and [SDK releases](https://github.com/OpenHands/software-agent-sdk/compare/v1.58.1...acd96e6fa424c02432304395b9208f99be24b54d).

## Where it stands, 2026-10-24: Install and release status

**Channel.** <span id="install-channel"></span> Install [Canvas v1.33.0, a non-prerelease published 23 October 2026](https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0): [`npm install -g @openhands/agent-canvas@1.33.0`, then `agent-canvas`](https://github.com/OpenHands/OpenHands/blob/v1.33.0/README.md), with [Node >=24](https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json) and [uv](https://github.com/OpenHands/OpenHands/blob/v1.33.0/README.md). Alternatives are the [desktop installers](https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0) or [`ghcr.io/openhands/agent-canvas:1.33.0`](https://github.com/OpenHands/OpenHands/blob/v1.33.0/README.md). Match separately managed services to [agent-server 1.58.1 and automation 1.25.1; the remote-server minimum is now 1.55.0](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json). Canvas bundles [extensions 0.35.0](https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json). [Enterprise source 1.79.0](https://github.com/OpenHands/enterprise/releases/tag/1.79.0) is a separate release; it does not establish which version Cloud is running.

**These repairs are on main, outside the listed releases.** See the warnings for [command-line keys](#command-line-repair), [ACP credential forwarding](#acp-credential-forwarding) and [Debian certificates](#debian-trust-store-repair) beside the released behavior they affect.

## Changes that need your attention

Review [who may start unattended work](#decide-who-may-start-unattended-work), [credential boundaries](#keep-credentials-inside-the-runtime-boundary), [Enterprise and optional backends](#configure-enterprise-and-optional-backends-deliberately), or [engines and dependencies](#verify-the-engine-and-dependencies-you-run).

## Decide who may start unattended work

**Decide who may turn a mention into code.** <span id="monitor-authority"></span> Inspect the deployed GitHub monitor, token scope and bypass lists before enabling it. Its [defaults are repository-write authorization and `implement` mode](https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114). The [poller checks repository permissions, with token-owner and explicit-allowlist bypasses](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/github-repo-monitor/scripts/main.py#L641-L663); the [fallback template puts authorization and work restrictions in the agent prompt](https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114). Choose [`reply` for narrower work; `anyone` plus `implement` lets arbitrary commenters request code changes with your token](https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114).

Check each saved monitor. Do not assume a catalog update migrated it.

**Try the factory on one bounded repository.** [Software-factory guidance became default-enabled on 20 October](https://github.com/OpenHands/extensions/commit/5f0bc702a65b2165e4406227d845b87efd5d445a); its [recipe assembles issue-to-PR, review and triage jobs with credentials and checkpoints](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/README.md). [Installing the guidance does not start those jobs](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/README.md). Evaluate this specialist orchestration before writing your own.

On that repository, measure accepted changes against time spent approving work, reviewing patches and handling failures. Give the factory a second repository only if it saves more supervision than it creates.

**Review the plugin revision before enabling it.** [Plugin manifests now carry script or conversation automations; conversation runners require a profile](https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/plugin_specs.py). Use [strict preflight to resolve a remote source to a SHA without enabling it](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/plugin/strict_fetch.py), then review that revision and its profile together. [Canvas shows the creator as the automation's run-as identity](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/components/features/automations/detail/configuration-section.tsx); [members can save their own drafts](https://github.com/OpenHands/automation/commit/cb092d344341f721bef9d24e5e7021c602901578).

**Review the migrated profile before delegating.** [Skills and routing now belong to profiles](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/api/agent-profiles-service/profile-behavior.ts). Inspect both before enabling [`task_tool_set`, still outside Standard tools](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/tool/defaults.py). [Children inherit exactly the parent's MCP configuration; tool restrictions are separate](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/subagent/scope.py). Test extra-tool, extra-MCP and nested-delegation requests before removing your own checks.

## Keep credentials inside the runtime boundary

**Keep production secrets off the default local runtime.** <span id="local-secret-boundary"></span> In the release, [local launches preserve their selected profile](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/resolve-conversation-launch.ts), and [tmux now removes inherited credentials excluded by sanitization](https://github.com/OpenHands/software-agent-sdk/commit/ec6655cc181db85c9583d0c42956f6bb5e34687d). Canvas still [exports the stack key as `OPENHANDS_AUTOMATION_API_KEY`](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L927-L935), [sanitization leaves that alias](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/command.py), and [the key opens saved-secret values without a profile check](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569).

Together these imply [a terminal path around profile exclusions](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569); no live secret retrieval was attempted.

**The command-line patch remains on main.** <span id="command-line-repair"></span> [Removing a child process's session key from its command-line arguments](https://github.com/OpenHands/OpenHands/commit/8fdd6859aee5779ebbc12e44dc32823d7cb08527) is [outside Canvas v1.33.0](https://github.com/OpenHands/OpenHands/compare/v1.33.0...fee10e3d2909ebbf9950578575b1ee011492171e). See [the remaining local-runtime credential exposure](#local-secret-boundary).

**Give Docker its server key before exposing the port.** <span id="docker-auth"></span> [Setting only `LOCAL_BACKEND_API_KEY` still skips exporting `OH_SESSION_API_KEYS_0`](https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh#L210-L239), and [an empty server key list permits unauthenticated requests](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/dependencies.py#L27-L39). [Set both to the same value, or leave both unset for generation](https://github.com/OpenHands/OpenHands/blob/v1.33.0/docker/entrypoint.sh#L210-L239).

Require HTTP 401 from [the protected API](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/api.py#L573-L606) using [`GET /api/conversations/search`](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/conversation_router.py#L160-L184) without `X-Session-API-Key`. Keep [off-loopback session-key injection disabled](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/bind-host.mjs).

**Check what a credential request delivered.** [In-conversation secret requests shipped in Canvas v1.28.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.28.0), and [v1.33.0 masks their input by default](https://github.com/OpenHands/OpenHands/commit/04f6dd5fcc428b816803b040943a2b7bbc9d14b8). [Local updates](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/event_service.py) and [Docker updates filter names through the profile](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/routers.py), but [the UI can report success after filtering](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/services/secret-request.ts), while [this Canvas update path sends no secret update to Cloud](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/conversation-mutation-utils.ts).

Test a saved-but-excluded credential and inspect what reaches the conversation.

**Back up encrypted state before rotating keys.** [SDK 1.57.0 supports old-key decryption via `OH_PREVIOUS_SECRET_KEYS` and new-key encryption via `OH_SECRET_KEY`; writes to unreadable settings return HTTP 409](https://github.com/OpenHands/software-agent-sdk/commit/53757a33283d8d412189421b852640b83a8868cf). Keep old keys until migration completes. [Without an explicit encryption key, the first session key is the fallback](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/README.md#L273-L286), so rotating authentication keys also affects decryption. Handle automation storage and provider-key revocation separately.

## Configure Enterprise and optional backends deliberately

**Choose whole-conversation Docker deliberately.** Enable [`OH_CONVERSATION_RUNTIME=docker`](https://github.com/OpenHands/docs/blob/f742b438db2d5a2d316ebea67a18c46b4ab56a48/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx) and set `OH_CONVERSATION_IMAGE=ghcr.io/openhands/agent-server:1.58.1-python` to match [the bundled server version, 1.58.1](https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json). It [creates a separate server and keys per conversation with an explicit environment](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/docker_runtime/registry.py), including [configured telemetry credentials](https://github.com/OpenHands/software-agent-sdk/commit/4b8cb431a66c1f4b813d6c9c0181ce63a4e30d0a).

For mixed local/Docker requests, [`OH_CONVERSATION_RUNTIME_SELECTABLE=1` requires Docker setup and a secret key, while request CPU/memory values replace server defaults](https://github.com/OpenHands/software-agent-sdk/commit/77c6ee584101b929fbb50b7b09a66d3a5a0a1053). Enforce resource ceilings externally.

[Without an explicit override, the launcher binds on all interfaces for the Docker default](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L506-L511); firewall that listener. [The guide also promises automatic networking for selectable mode](https://github.com/OpenHands/docs/blob/f742b438db2d5a2d316ebea67a18c46b4ab56a48/openhands/usage/agent-canvas/backend-setup/docker-execution.mdx), but [that launcher branch does not test the selectable flag](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L506-L511). Verify the bind address and container-to-host callbacks in selectable mode.

**Check sandbox sharing before adopting Enterprise Compose.** The [packaged stack uses Canvas 1.32.0, SDK 1.58.1 and automation 1.25.1](https://github.com/OpenHands/enterprise/commit/8b923c3568a8809adbb9b648d2a0ee95d5cc527a), and [defaults to `FEWEST_CONVERSATIONS`, sharing sandboxes across conversations](https://github.com/OpenHands/enterprise/blob/1.79.0/docker-compose.yml). Inspect workspace separation and effective grouping. Enterprise uses [PolyForm Free Trial 1.0.0](https://github.com/OpenHands/enterprise/blob/1.79.0/LICENSE); Kubernetes needs [a Helm-enabled license and registry credentials](https://github.com/OpenHands/docs/commit/a903c5fc29d616d1df39cfc8482e5175e9dca2ad).

**Enable Enterprise child conversations explicitly.** [Enterprise child launching defaults off](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/config.py#L190-L198); [enablement requires `OH_ENABLE_CHILD_CONVERSATION_LAUNCHER`, `web_url`, compatible sandbox images and Canvas handling](https://github.com/OpenHands/enterprise/commit/c7225f7dc9e506a914e33fd0b95e3146c1fdea6a).

**Treat the daily quota as a remote-SaaS counter.** It [meters attributed new sandboxes, excluding Docker, E2B, process backends, warm starts and resumes; some failed asynchronous starts retain reservations](https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/sandbox/remote_sandbox_service.py). Check metered starts and how reservations settle before planning capacity around this counter.

**Set Enterprise admission policy explicitly.** [`REQUIRE_VERIFIED_EMAILS` defaults to false](https://github.com/OpenHands/enterprise/blob/1.79.0/server/constants.py#L32-L55). Audit it alongside [`SUPER_ADMIN_EMAILS`, empty by default, which grants matching stored emails instance super-admin on OAuth v2 login](https://github.com/OpenHands/enterprise/commit/dbdbf0d60c648d9f3f9ec059387dcba20e0b0914). [New identity providers start disabled; existing providers migrate enabled, and disabling does not revoke sessions or tokens](https://github.com/OpenHands/enterprise/commit/0893792cd133eae70aa79852769e059577b43238). Test new-user admission and existing-user linking separately: [the registration switch gates only new-user creation](https://github.com/OpenHands/enterprise/commit/f31c63a7bf677150f36f8a94920d2a84504b0a7f).

**Enable the DigitalOcean bridge explicitly.** The [DigitalOcean bridge again requires `MARS_WEB=1`](https://github.com/OpenHands/OpenHands/commit/1e850162beea360c61b75bee8c0d818b405be184). Recheck sign-in and VM size before creating resources.

## Verify the engine and dependencies you run

**Identify the engine before applying standalone advice.** Canvas [offers Pi and OpenCode as local ACP engines](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/constants/acp-providers.ts). Record the launched package, version and server before applying either standalone profile. [The Gemini model-selection transport repair remains in OpenHands' ACP adapter](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/agent/acp_agent.py). Record requested and reported model IDs before comparing spend.

**Test MCP auth on the selected engine.** Stable [can install remote OAuth-only library entries through the server's OAuth](https://github.com/OpenHands/OpenHands/commit/55c5b7dd54d22fef5bc14ac8b0ce357c16f4f933) and [preserves credentials after refresh failure](https://github.com/OpenHands/software-agent-sdk/commit/f331fa667b7a55b1573121993a8a843593c75de9); test the actual operation on your engine.

<span id="acp-credential-forwarding"></span> [Forwarding MCP OAuth credentials into ACP agents](https://github.com/OpenHands/software-agent-sdk/commit/87bec04de8e08117399d5cab68042cc794bc2199) remains on main, [outside SDK v1.58.1](https://github.com/OpenHands/software-agent-sdk/compare/v1.58.1...acd96e6fa424c02432304395b9208f99be24b54d).

**Retest TypeScript run budgets.** [Client 1.56.0 starts forwarding previously ignored `maxIterations` and `stuckDetection` settings, including constructor defaults](https://github.com/OpenHands/software-agent-sdk/commit/1fbfd37f6fb21491ed733fc92d409aff1517ff4a). Record an actual stop before removing an external guard. These settings do not cap spend.

**Check installed dependencies.** [SDK 1.58.1 requires LiteLLM <1.106](https://pypi.org/pypi/openhands-sdk/1.58.1/json), excluding [1.107.0, identified as compromised in the supplier's 23 October account](https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain). Inspect older or independently resolved environments.

Current [SDK](https://github.com/OpenHands/software-agent-sdk/commit/e8a071f511222697caf2df0dd0498c54590c9707), [automation](https://github.com/OpenHands/automation/commit/872e32295b0f7f33da275845626ff4000d189f2e) and [Enterprise locks repair certifi](https://github.com/OpenHands/enterprise/commit/177fbeb699613a04e473c0f10fe17f36b30f7c60) against [TLS interception by an on-path attacker holding compromised CA keys](https://github.com/advisories/GHSA-6q48-6c7w-9gw2). Check Python, vendored and OS trust stores separately.

<span id="debian-trust-store-repair"></span> [Repairing the SDK's Debian CA snapshot](https://github.com/OpenHands/software-agent-sdk/commit/acd96e6fa424c02432304395b9208f99be24b54d) remains on main, [outside SDK v1.58.1](https://github.com/OpenHands/software-agent-sdk/compare/v1.58.1...acd96e6fa424c02432304395b9208f99be24b54d).

## What is unresolved

- **Credential isolation.** A released alias repair plus local/Docker tests refusing an excluded saved secret would settle the terminal path. A tag fixing [the Docker key-export gap](https://github.com/OpenHands/OpenHands/issues/17763) plus the protected-route 401 would settle that separate defect. Inspect terminal environments and effective credentials in both tests.
- **Monitor authority.** Exercise an unauthorized commenter, an allowlisted non-writer and a permitted writer against the [deployed monitor](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/github-repo-monitor/scripts/main.py). Record who starts work and which token is used before granting unattended access.
- **Cloud availability and output access.** Require a dated record of the version Cloud is running and a cross-member read test before applying [Enterprise's org-readable automation-transcript rule](https://github.com/OpenHands/enterprise/blob/1.79.0/server/sharing/sql_shared_conversation_info_service.py#L90-L106) to Cloud. Keep credentials out of shared run output.
- **Residual dependency exposure.** [SDK locks PyJWT 2.14.0 and fsspec 2025.9.0](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/uv.lock); [automation locks fsspec 2026.3.0](https://github.com/OpenHands/automation/blob/1.25.1/uv.lock). Their advisories describe [uncaught request-level exceptions, potentially HTTP 500s, from deeply nested pre-verification JWT payloads](https://github.com/advisories/GHSA-42vr-xj54-vc7v) and [Python execution through attacker-controlled ReferenceFileSystem templates](https://github.com/advisories/GHSA-27vj-qcqg-25rc). Check installed versions and trace their consumers to establish what is reachable.

## Profile hygiene

This profile covers OpenHands as of 24 October 2026. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md) for the evidence contract.
