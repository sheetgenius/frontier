---
schema_version: bitter.frontier_profile.v0
profile_id: hermes-agent
label: Hermes Agent
owner: Nous Research
source_contract: sources/hermes-agent.yml
homepage: https://hermes-agent.nousresearch.com/docs
docs: https://hermes-agent.nousresearch.com/docs
tagline: "Hermes v0.21.7 makes webhook and API requests without a human approval channel consult unattended policy before model review."
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
last_updated: 2026-10-13
last_full_review: 2026-10-13
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
    last_verified: 2026-10-13
    status: active
  - id: unattended-mode-deny
    finding_id: 2026-09-21-hermes-agent-unattended-platforms-webhook-msgraph-webhook-api-server-now-deny-dangerous-commands-by-def
    last_verified: 2026-09-23
    status: retired
  - id: deny-list-in-containers
    finding_id: 2026-09-21-hermes-agent-approvals-deny-now-applies-inside-isolated-containers-v2026-9
    last_verified: 2026-10-13
    status: active
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
    last_verified: 2026-10-13
    status: active
  - id: gateway-unattended-policy-v0-21-7
    finding_id: 2026-10-13-hermes-agent-unattended-deny-did-not-apply-inside-a-running-gateway-until-v0-21-7-webhook-turns-reached
    last_verified: 2026-10-13
    status: active
  - id: lsp-workspace-trust
    finding_id: 2026-10-13-hermes-agent-language-servers-ran-a-cloned-repository-s-own-code-on-file-writes-with-no-approval-until
    last_verified: 2026-10-13
    status: active
  - id: stable-source-update
    finding_id: 2026-10-13-hermes-agent-hermes-update-follows-published-releases-from-v0-21-7-before-that-an-unconfigured-source
    last_verified: 2026-10-13
    status: active
  - id: release-artifact-receipts
    finding_id: 2026-10-13-hermes-agent-releases-became-receipts-calver-tags-end-at-v2026-9-24-both-new-stables-were-cut-with-the
    last_verified: 2026-10-13
    status: active
  - id: tirith-removed
    finding_id: 2026-10-13-hermes-agent-the-default-on-tirith-command-scanner-left-core-in-v0-21-6-two-of-its-catches-moved-into
    last_verified: 2026-10-13
    status: active
  - id: email-sender-authentication
    finding_id: 2026-10-13-hermes-agent-email-gateway-allowlists-could-be-passed-with-a-spoofed-from-display-name-or-smuggled-auth
    last_verified: 2026-10-13
    status: active
  - id: dashboard-login-revocation
    finding_id: 2026-10-13-hermes-agent-four-dashboard-sign-in-defects-reported-by-tenable-including-a-login-code-redirect-that
    last_verified: 2026-10-13
    status: active
  - id: sandbox-browser-placement
    finding_id: 2026-10-13-hermes-agent-with-a-sandboxed-terminal-bot-screen-computer-use-and-the-browser-still-ran-on-the-gateway
    last_verified: 2026-10-13
    status: active
  - id: optional-memory-catalog-migration
    finding_id: 2026-10-13-hermes-agent-core-shed-six-memory-providers-home-assistant-spotify-and-skill-sync-configured-homes-can
    last_verified: 2026-10-13
    status: active
  - id: hook-response-and-batch-consent
    finding_id: 2026-10-13-hermes-agent-approval-and-consent-fixes-v2026-9-24-to-v0-21-6-hook-approvals-escalate-stale-sessions
    last_verified: 2026-10-13
    status: active
  - id: compaction-ratio-default
    finding_id: 2026-10-13-hermes-agent-compaction-on-1m-window-models-moved-from-a-256k-cap-to-half-the-window-in-v0-21-6-and-a
    last_verified: 2026-10-13
    status: active
  - id: bounded-advisory-search
    finding_id: 2026-10-13-hermes-agent-queried-github-advisory-surfaces-had-no-newer-public-hermes-entry-17-source-cited-ids-were
    last_verified: 2026-10-13
    status: active
  - id: default-browser-vault
    finding_id: 2026-10-13-hermes-agent-correction-the-browser-credential-vault-is-on-by-default-only-real-profile-browsing-is-opt
    last_verified: 2026-10-13
    status: active
  - id: retired-pypi-homebrew
    finding_id: 2026-10-13-hermes-agent-correction-pypi-and-homebrew-distribution-ended-in-july-pip-install-hermes-agent-still-ins
    last_verified: 2026-10-13
    status: active
  - id: policy-hook-fail-closed
    finding_id: 2026-10-13-hermes-agent-policy-plugin-exceptions-now-block-the-tool-instead-of-failing-open
    last_verified: 2026-10-13
    status: active
  - id: foreign-home-secret-scope
    finding_id: 2026-10-13-hermes-agent-routed-foreign-profile-homes-no-longer-borrow-launch-process-credentials-on-a-secret-miss
    last_verified: 2026-10-13
    status: active
  - id: anthropic-endpoint-credential-origin
    finding_id: 2026-10-13-hermes-agent-anthropic-labeled-custom-endpoints-no-longer-receive-refreshed-vendor-credentials
    last_verified: 2026-10-13
    status: active
  - id: simplex-contact-ids
    finding_id: 2026-10-13-hermes-agent-simplex-sender-allowlists-now-match-numeric-contact-ids-rather-than-mutable-display-names
    last_verified: 2026-10-13
    status: active
  - id: a2a-empty-peer-list
    finding_id: 2026-10-13-hermes-agent-network-exposed-a2a-refuses-dispatch-with-an-empty-trusted-peer-list
    last_verified: 2026-10-13
    status: active
  - id: explicit-empty-toolsets
    finding_id: 2026-10-13-hermes-agent-explicitly-empty-resolved-cli-and-per-job-cron-toolsets-no-longer-widen-to-defaults
    last_verified: 2026-10-13
    status: active
  - id: blank-message-signing-secrets
    finding_id: 2026-10-13-hermes-agent-webhook-twilio-sms-and-line-reject-blank-signing-secrets
    last_verified: 2026-10-13
    status: active
  - id: profile-export-private-stores
    finding_id: 2026-10-13-hermes-agent-profile-exports-exclude-credential-stores-and-imports-cannot-replace-nested-private-state
    last_verified: 2026-10-13
    status: active
  - id: private-browser-media-modes
    finding_id: 2026-10-13-hermes-agent-browser-profiles-screenshots-and-media-caches-gain-private-filesystem-modes
    last_verified: 2026-10-13
    status: retired
  - id: diagnostic-url-redaction
    finding_id: 2026-10-13-hermes-agent-diagnostic-dumps-redact-credentials-embedded-in-base-urls
    last_verified: 2026-10-13
    status: active
  - id: signed-reasoning-resume
    finding_id: 2026-10-13-hermes-agent-anthropic-and-bedrock-resume-preserve-provider-appropriate-signed-reasoning
    last_verified: 2026-10-13
    status: active
  - id: cron-store-health-notices
    finding_id: 2026-10-13-hermes-agent-cron-reports-an-unwritable-store-as-degraded-and-notifies-the-owning-home-on-recovery
    last_verified: 2026-10-13
    status: active
  - id: platform-build-omissions
    finding_id: 2026-10-13-hermes-agent-intel-macos-and-termux-stable-artifacts-become-opt-in-and-were-omitted-from-v0-21
    last_verified: 2026-10-13
    status: active
  - id: utc-cutoff-source-state
    finding_id: 2026-10-13-hermes-agent-late-october-13-v0-22-0-attempts-leave-main-ahead-of-the-last-in-window-stable
    last_verified: 2026-10-13
    status: active
  - id: smart-review-and-failure-escalation
    finding_id: 2026-10-13-hermes-agent-unattended-deny-did-not-apply-inside-a-running-gateway-until-v0-21-7-webhook-turns-reached
    last_verified: 2026-10-13
    status: active
  - id: built-in-memory-write-default
    finding_id: 2026-10-13-hermes-agent-core-shed-six-memory-providers-home-assistant-spotify-and-skill-sync-configured-homes-can
    last_verified: 2026-10-13
    status: active
posture_basis:
  capability:
    - 2026-10-13-hermes-agent-with-a-sandboxed-terminal-bot-screen-computer-use-and-the-browser-still-ran-on-the-gateway
    - 2026-10-13-hermes-agent-core-shed-six-memory-providers-home-assistant-spotify-and-skill-sync-configured-homes-can
    - 2026-10-13-hermes-agent-compaction-on-1m-window-models-moved-from-a-256k-cap-to-half-the-window-in-v0-21-6-and-a
    - 2026-10-13-hermes-agent-anthropic-and-bedrock-resume-preserve-provider-appropriate-signed-reasoning
    - 2026-10-13-hermes-agent-cron-reports-an-unwritable-store-as-degraded-and-notifies-the-owning-home-on-recovery
  accessibility:
    - 2026-10-13-hermes-agent-hermes-update-follows-published-releases-from-v0-21-7-before-that-an-unconfigured-source
    - 2026-10-13-hermes-agent-releases-became-receipts-calver-tags-end-at-v2026-9-24-both-new-stables-were-cut-with-the
    - 2026-10-13-hermes-agent-correction-pypi-and-homebrew-distribution-ended-in-july-pip-install-hermes-agent-still-ins
    - 2026-10-13-hermes-agent-intel-macos-and-termux-stable-artifacts-become-opt-in-and-were-omitted-from-v0-21
    - 2026-10-13-hermes-agent-late-october-13-v0-22-0-attempts-leave-main-ahead-of-the-last-in-window-stable
  governance:
    - 2026-10-13-hermes-agent-the-git-config-floor-moves-to-v0-21-6-a-repository-s-own-clean-smudge-process-filters-stil
    - 2026-10-13-hermes-agent-unattended-deny-did-not-apply-inside-a-running-gateway-until-v0-21-7-webhook-turns-reached
    - 2026-10-13-hermes-agent-language-servers-ran-a-cloned-repository-s-own-code-on-file-writes-with-no-approval-until
    - 2026-10-13-hermes-agent-the-default-on-tirith-command-scanner-left-core-in-v0-21-6-two-of-its-catches-moved-into
    - 2026-10-13-hermes-agent-four-dashboard-sign-in-defects-reported-by-tenable-including-a-login-code-redirect-that
    - 2026-10-13-hermes-agent-approval-and-consent-fixes-v2026-9-24-to-v0-21-6-hook-approvals-escalate-stale-sessions
    - 2026-10-13-hermes-agent-queried-github-advisory-surfaces-had-no-newer-public-hermes-entry-17-source-cited-ids-were
    - 2026-10-13-hermes-agent-correction-the-browser-credential-vault-is-on-by-default-only-real-profile-browsing-is-opt
    - 2026-10-13-hermes-agent-policy-plugin-exceptions-now-block-the-tool-instead-of-failing-open
    - 2026-10-13-hermes-agent-routed-foreign-profile-homes-no-longer-borrow-launch-process-credentials-on-a-secret-miss
    - 2026-10-13-hermes-agent-anthropic-labeled-custom-endpoints-no-longer-receive-refreshed-vendor-credentials
    - 2026-10-13-hermes-agent-explicitly-empty-resolved-cli-and-per-job-cron-toolsets-no-longer-widen-to-defaults
    - 2026-10-13-hermes-agent-profile-exports-exclude-credential-stores-and-imports-cannot-replace-nested-private-state
    - 2026-10-13-hermes-agent-diagnostic-dumps-redact-credentials-embedded-in-base-urls
stance:
  use_for: 'A bounded trial of webhook-triggered agent jobs after the gateway policy check.'
  avoid_for: 'Keep hostile repositories outside the Hermes host environment.'
  watch_next: 'Wait for passed release acceptance checks before fleet rollout.'
---

# Hermes Agent

## Where it stands, 2026-10-13

On 12 October 2026 UTC, [Hermes v0.21.7](https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.21.7) [made webhook and API requests without a human approval channel consult `approvals.unattended_mode` before model review](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942). [Through v0.21.6, a gateway flag let model review bypass that setting](https://github.com/NousResearch/hermes-agent/commit/8918717b1ad2b52d1389756a3581a9860b98397b). The [release used `skipTests: true`](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/ec0f68f50d19dd439ff0ed54b4acc764dadb4e50), leaving [source, install/update and native acceptance checks](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/developer-guide/stable-releases.md#L102-L133) for the operator.

Choose [v0.21.7](https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.21.7), the release selected for this dated recommendation. [v0.22.0 was published at 03:21:46 UTC on 14 October 2026](https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.0), after this profile's cutoff. Download the linked [v0.21.7 `scripts/install.sh`](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/scripts/install.sh) and run its [`--commit` option](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/scripts/install.sh#L43-L54) with [source commit `71d34bad1045610252eda02ee79549436896e784`](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/00f69310e29c24dfd7c6bb258b0a2337d3455d79), or use [Docker image `nousresearch/hermes-agent@sha256:444b42594e7f467425872fc35e077a227d377f0fe0726bc818706d62175fad8b`](https://hub.docker.com/v2/repositories/nousresearch/hermes-agent/tags/rc.15-v0.21.7). The installer [otherwise starts from main](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/scripts/install.sh#L23-L25).

Preview, beta and main-only status are unverified here. This recommendation covers stable v0.21.7 only; v0.22.0 is outside this review.

**Choose your source update channel explicitly.** From v0.21.7, [official-origin source updates default to stable, but implicit selection preserves an ahead-of-stable commit](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/update_channel.py#L140-L200). [`hermes update --set-channel stable` selects the current release](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/getting-started/updating.md#L33-L50). Record the resolved commit; the command moves with future releases.

Check version and origin on existing pip/uv installs: [PyPI's 0.19.0 files were uploaded on 20 July 2026 UTC](https://pypi.org/pypi/hermes-agent/0.19.0/json), and [PyPI/Homebrew distribution ended in July 2026](https://github.com/NousResearch/hermes-agent/commit/d84e11af4d9927c41ad0a3b4db72042cca250c64).

**Test the artifact before a fleet rollout.** The v0.21.7 receipt [binds source, Docker digest and a hashed desktop manifest](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/00f69310e29c24dfd7c6bb258b0a2337d3455d79). [v0.21.6 also set `skipTests: true`](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/99f94588c7dd458fbcc1cbc6db5beb2c2b871bf6). Run the source, install/update and native acceptance checks yourself, including startup and required install/update transitions.

Check your platform: [the v0.21.7 manifest lists Apple silicon and Windows artifacts](https://hermes-assets.nousresearch.com/releases/tag/rc.15-v0.21.7/release-candidates.json); [Intel macOS and Termux were excluded from that release attempt](https://api.github.com/repos/NousResearch/hermes-agent/git/tags/ec0f68f50d19dd439ff0ed54b4acc764dadb4e50).

## Before running unattended

**Set unattended policy before reconnecting the gateway.** Inspect `approvals.unattended_mode` before upgrading. Review earlier webhook sessions for flagged commands that ran.

On upgrade, [formerly approved jobs can block; a saved `approve` can instead become effective](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L1128-L1169). Add only intended `command_allowlist` patterns. [User deny rules and applicable mandatory blocks take precedence over unattended approval; isolated containers still enforce user deny rules. YOLO uses a separate approval path](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L1128-L1169). [Notifier-backed API requests retain their approval bridge](https://github.com/NousResearch/hermes-agent/commit/71ff5238ec4643ddc6bddcfbc8be4b1cdd400684).

**Test the approval rules you rely on.** Interactive review defaults to [model-led `smart` mode](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1665-L1700); [guardian failures log and escalate](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval_smart.py#L116-L131). Choose `approvals.mode` deliberately. From v2026.9.24, [a shell hook returning `{"action":"approve"}` requests human approval, while `{"decision":"approve"}` means allow](https://github.com/NousResearch/hermes-agent/commit/30b38d139b1fd91670e3b5bd88cd50f71287a12f), and [`pre_tool_call` policy-plugin exceptions block the tool](https://github.com/NousResearch/hermes-agent/commit/89de6083171d0f70e5356bef05105231344e371d). Run `hermes hooks test` for shell hooks. Exercise a throwing policy-plugin callback separately.

Protect `<profile home>/hooks/`: [gateway hooks load at startup without a prompt, are not skipped by `HERMES_SAFE_MODE` and sit outside protected file writes](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/user-guide/security.md#L931-L939).

**Isolate the whole Hermes process before opening hostile code.** [v0.21.6 fixes startup Git-filter execution from a delivered `.git/config`](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6) and [repository-owned language-server tooling (LSP) running on ordinary edits without approval](https://github.com/NousResearch/hermes-agent/commit/f5c754d4365e17ff7c6e7c1c51808ec36f4d7cc9). [LSP stays enabled](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2387-L2413), and [launch/session worktrees can be trusted automatically; explicit trusted roots also trust nested clones](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/lsp/workspace.py#L157-L193).

Launch outside untrusted checkouts, narrow those roots or set `lsp.enabled: false`. Include [startup Git](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/coding_context.py#L531-L536) in that isolation.

**Keep browser work in the intended backend.** From v0.21.6, [`bot_desktop.placement: auto` follows the terminal backend; unsupported screen backends refuse instead of silently using the host](https://github.com/NousResearch/hermes-agent/commit/399d9569036d6e85420635c2f54e0177fb8b8d45). Use `placement: gateway` only for intentional host control. The same change [replaces the fresh default container image, while retaining persisted Docker containers until you choose Switch and preserving explicit pins](https://github.com/NousResearch/hermes-agent/commit/399d9569036d6e85420635c2f54e0177fb8b8d45). Check the running container before assuming it changed.

**Give browser profiles a narrow vault.** [Vault tools accompany available browser tooling](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/toolsets.py#L11-L22), and [detected password managers are enabled by default](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2446-L2464). A [1Password service-account token in the profile's secrets unlocks its login access without a session prompt](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/vault_backends/onepassword.py#L30-L71). Scope the token to an agent vault or disable `vault.onepassword.enabled` and, if needed, `vault.bitwarden.enabled`. [Real-profile browsing is a separate opt-in](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L455).

**Review memory providers and plugin access per profile.** Inspect `memory.provider`: [empty selects built-in memory, whose writes need no approval by default](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1311-L1325). Existing profiles using Hindsight, Honcho, mem0, Supermemory, OpenViking or Holographic [can migrate from bundled providers to catalog plugins, subject to lazy-install policy and dependency consent](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/memory_provider_migration.py#L168-L299). Inspect maintainer, pin and disclosures, including [the catalog's disclosure that mem0 telemetry defaults to on](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugin-catalog/mem0.yaml).

From v2026.9.24, [installed plugins' MCP servers and skills activate in every open chat of that profile on its next turn](https://github.com/NousResearch/hermes-agent/commit/9039b690fc34b965b2614bea33d88b0216752aa0). [Plugins run in process by default; opt-in host-process isolation is not an OS sandbox](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L1717-L1755).

**Fewer interruptions, fewer catches.** [v0.21.6 stopped bundling tirith without automatically installing a replacement](https://github.com/NousResearch/hermes-agent/commit/911da42e9e03ba8594ab2af5dfd1e50e7e721e3e). The [accompanying detector change reports fewer everyday-command flags and fewer attacks caught on a small test corpus](https://github.com/NousResearch/hermes-agent/commit/68dd9927691e66058bf2347937e7dc276ceb50cd). [Credential-upload and invisible-Unicode detection moved into core](https://github.com/NousResearch/hermes-agent/commit/68dd9927691e66058bf2347937e7dc276ceb50cd). If you depended on tirith, you now own its separate operation and testing.

**Budget long work before walking away.** The main agent has [no default turn or wall-clock cap](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L75-L88). v0.21.6 [removed the seeded 256000-token compaction cap, permitting roughly 500K tokens on a 1M-window model at the default ratio](https://github.com/NousResearch/hermes-agent/commit/98278833e29b167fe930e276eed7cb16bee68673). Set `agent.run_budget_seconds` or `agent.max_turns`. To keep compaction near the old threshold, set `compression.threshold_tokens: 250000`; [migration removes only the exactly seeded 256000 value](https://github.com/NousResearch/hermes-agent/commit/98278833e29b167fe930e276eed7cb16bee68673).

**Put human attention on exceptions.** v0.21.7 [preserves provider-appropriate Anthropic thinking and Bedrock reasoning signatures across resume](https://github.com/NousResearch/hermes-agent/commit/79b45d1647f6b5680768d851c4c406e8cc550a1e). v0.21.6 adds [degraded status for unwritable cron stores](https://github.com/NousResearch/hermes-agent/commit/759b1c34adb5c1be2ac5eeea50d6b2f4f52c9d7a) and [failure/recovery notices to the owning profile's channel, subject to opt-outs](https://github.com/NousResearch/hermes-agent/commit/91fc7badafd2ab345aec8b4ac64c06460f30c017). These changes reach into continuation and failure reporting. Use them to move attention from reconstructing session state and searching logs to handling exceptions and judging completed work. Test a representative resume and the notification destination before delegating. Completion-rate gains and cross-model portability remain unmeasured here; a recovery notice does not establish that a skipped job completed.

<details>
<summary>Upgrade checks for an older deployment</summary>

**Repair sender rules before accepting messages.** These changes first reached stable in [v0.21.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6):

- Review earlier email sessions for unexpected senders: [From spoofing](https://github.com/NousResearch/hermes-agent/commit/d0c588972ec3484a6af50eb186e7d22565a44dda) and [authentication-header spoofing could pass allowlists](https://github.com/NousResearch/hermes-agent/commit/3f4533b9dedb526e5891354164b07b59a8557cc5).
- Replace `SIMPLEX_ALLOWED_USERS` display names with [numeric contact IDs](https://github.com/NousResearch/hermes-agent/commit/467046753420c40aba05a118e5ffd5061e42f481).
- Populate `A2A_TRUSTED_PEERS` for exposed token-authenticated adapters, or [choose allow-all explicitly](https://github.com/NousResearch/hermes-agent/commit/a0cad39f5d55a2c7e2f0cbea2198358b5a3d55b0).
- Configure a strong webhook signing secret and the provider-issued [Twilio Auth Token](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/user-guide/messaging/sms.md#L31-L35) and [LINE Channel secret](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/user-guide/messaging/line.md#L29-L32): [webhook](https://github.com/NousResearch/hermes-agent/commit/8ec668b3cc8b9289d63f02fa6abca3d67e993eb3), [Twilio](https://github.com/NousResearch/hermes-agent/commit/84cb790e6425f3ef53aab893dce59ba707cb27da) and [LINE](https://github.com/NousResearch/hermes-agent/commit/a560ba0b0842f0cd572bade054414667258727e3) now reject blank or whitespace keys.

**Recheck jobs meant to have no tools.** Until v0.21.6, [empty Desktop/TUI CLI selections and per-job cron toolsets could widen to defaults, including unintended MCP availability](https://github.com/NousResearch/hermes-agent/commit/b4969d8e2d0954b1938492b2f0a90321737f9164). Check stored `enabled_toolsets` and the resolved CLI/MCP set on earlier restricted jobs.

**Revoke pre-fix dashboard sessions.** v0.21.6 repairs [a login-code redirect that could hand over a signed-in session](https://github.com/NousResearch/hermes-agent/commit/37fea25c2b8fb18b39f5865562409679664d7800). For an exposed dashboard using Basic Auth, [rotate the effective signing key and restart; `HERMES_DASHBOARD_BASIC_AUTH_SECRET` overrides config, and an unset key is process-random](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/dashboard_auth/basic/__init__.py#L125-L202). For other providers, use their own revocation mechanisms.

**Inspect earlier credential destinations and shared bundles.** v2026.9.24 fixes [foreign homes borrowing launch-process secrets](https://github.com/NousResearch/hermes-agent/commit/2c3a75beaaf0fabc5a5dcc932d57f4be70efa3d5) and [custom Anthropic endpoints receiving refreshed vendor credentials](https://github.com/NousResearch/hermes-agent/commit/a4d8f173a9c4bd287f57ab64c95a9646caede20d). Check routed homes and custom URLs on older runs. v0.21.6 adds [credential-store exclusions for exports](https://github.com/NousResearch/hermes-agent/commit/9c18f8c28ce271a1351a8d105e8e76080120818e), [private-state protection on imports](https://github.com/NousResearch/hermes-agent/commit/8c1adb7d6dfb7773d705fbac41ee173ffe1ec2f7) and [URL-token redaction in diagnostic dumps](https://github.com/NousResearch/hermes-agent/commit/205d5d78f1ff8a20701555bff26e107df48d5b92). Check old archives and debug bundles. Revoke credentials where logs or shared files establish exposure.

</details>

## What is unresolved

- **Require issue-specific affected ranges for exposure decisions.** They remain unverified for the [filter-driver repair](https://github.com/NousResearch/hermes-agent/commit/c77a2dda9fc7e75b5a8462bafe16bae74383f6cc) and the [webhook advisory cited in code](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/gateway/platforms/webhook.py#L370-L380). Published advisories with explicit ranges would settle those gaps. The [September 2026 GitSpawn CVE range](https://cveawg.mitre.org/api/cve/CVE-2026-71963) describes the earlier mechanism.
- **Check dated package records before assuming platform parity.** The [artifact manifest](https://hermes-assets.nousresearch.com/releases/tag/rc.15-v0.21.7/release-candidates.json) does not establish APT or Microsoft Store versions at the UTC cutoff. Dated feed/package records would settle delivery; installation results on the target platform would settle acceptance.
- **Require tested role rules before relying on dashboard OIDC for authorization.** [OIDC login exists](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/plugins/dashboard_auth/self_hosted/__init__.py#L1-L10); group/role enforcement remains unestablished. Documented claim mapping and tested allow/deny behavior would settle that question.

## Profile hygiene

### Review date and scope

Dated, not evergreen. This recommendation is limited to 2026-10-13, 23:59:59 UTC. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the evidence contract.
