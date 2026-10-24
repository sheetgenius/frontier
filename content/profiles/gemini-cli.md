---
schema_version: bitter.frontier_profile.v0
profile_id: gemini-cli
label: Gemini CLI
owner: Google
source_contract: sources/gemini-cli.yml
homepage: https://github.com/google-gemini/gemini-cli
docs: https://google-gemini.github.io/gemini-cli/docs/
tagline: "Gemini CLI 0.65.0 refuses project MCP additions in untrusted folders and lets the agent explore directories itself."
compared_with: []
x:
  project: geminicli
  maintainers:
    - handle: ntaylormullen
      name: N. Taylor Mullen
repo: https://github.com/google-gemini/gemini-cli
surface_class: open_source_commits
evidence_floor: commit_diff_reviewed
status: active_watch
last_updated: 2026-10-24
last_full_review: 2026-10-24
claims:
  - id: autoedit-and-seatbelt
    finding_id: 2026-09-21-gemini-cli-autoedit-path-check-never-loaded-and-seatbelt-reached-docker-socket
    last_verified: 2026-10-13
    status: retired
    note: Verified historical control omitted from this dated body; the current sandbox claim concerns workdirs and runtime state.
  - id: plugin4shell-unpatched
    finding_id: 2026-09-21-gemini-cli-extension-install-still-checks-out-fetch-head-after-plugin4shell-disclosure
    last_verified: 2026-10-24
    status: active
    note: "Pin-verification omission rechecked at v0.65.0. Hosted exploit reach and future patch policy remain unverified."
  - id: v0-57-0-carries-august-preview-fixes
    finding_id: 2026-09-21-gemini-cli-v0-57-0-promotes-every-preview-only-item-from-the-previous-brief
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: v0-59-v0-60-hardening
    finding_id: 2026-09-21-gemini-cli-v0-59-0-and-v0-60-0-harden-mcp-oauth-web-fetch-credentials-and-extensions
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: build-file-gate-preview-only
    finding_id: 2026-09-21-gemini-cli-build-file-edit-gate-is-preview-only-at-close
    last_verified: 2026-10-13
    status: retired
    channel: preview-or-beta
    note: "Superseded: recognized edit-tool gates reached stable in v0.61.0; the new build-file claim states their scope."
  - id: a2a-self-trust-rce-fixed-v0-53-0
    finding_id: 2026-08-03-gemini-cli-a2a-workspace-self-trust-rce-reaches-stable
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: adc-https-enforced-v0-54-0
    finding_id: 2026-08-10-gemini-cli-gemini-cli-v0-54-0-https-enforced-for-google-credential-auth-keychain
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: agent-authored-prs-on-main
    finding_id: 2026-08-17-gemini-cli-google-starts-merging-agent-authored-prs-into-the-gemini-cli-default
    last_verified: 2026-10-13
    status: retired
    note: Historical observation retained; no prefixed merge after 18 August was found and later authorship was not established.
  - id: v0-56-0-stable-is-two-chore-commits
    finding_id: 2026-08-20-gemini-cli-v0-56-0-is-stable-and-two-chore-commits-past-v0-55-1
    last_verified: 2026-08-20
    status: retired
    note: Superseded. npm latest is 0.60.0 at 2026-09-21.
  - id: enableagents-false-loads-builtins-on-0-56-0
    finding_id: 2026-08-20-gemini-cli-enableagents-false-still-loads-builtins-on-0-56-0
    last_verified: 2026-08-20
    status: retired
    note: Fixed in v0.57.0 (753e4cb55).
  - id: git-env-hardening-preview-only
    finding_id: 2026-08-20-gemini-cli-git-env-hardening-is-preview-not-0-56-0
    last_verified: 2026-08-20
    status: retired
    note: Reached stable in v0.57.0 (c0d192452).
  - id: consumer-service-retired-2026-06-18
    finding_id: 2026-07-01-gemini-cli-consumer-service-retired
    last_verified: 2026-10-24
    status: open_question
    note: "Current documentation re-read on 2026-10-24; historical October 13 wording and comprehensive route-specific support commitments remain unverified."
  - id: oss-repo-active-enterprise-serving
    finding_id: 2026-07-01-gemini-cli-consumer-service-retired
    last_verified: 2026-10-13
    status: retired
    note: Superseded adoption posture; consult current subscription notices and contract terms. No immutable October 13 service-page capture was established.
  - id: memory-reviewable-patch
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-10-13
    status: retired
    note: Verified default-off memory behavior omitted from this dated body.
  - id: memory-private-allowlist
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: workspace-trust-visible-mcp
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: workspace-trust-headless-enforcement
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-10-24
    status: active
    note: "Schema and runtime default folder trust on; disabling it bypasses the headless startup guard. The tagged guide remains stale."
  - id: shell-safety-evals
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: shell-tools-allowlist
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: subagents-approval-mode-aware
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: subagent-protocol-pluggable
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: session-invocation-protocols-stable
    finding_id: 2026-05-27-gemini-session-invocation-protocols-stable
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: agent-registration-first-wins
    finding_id: 2026-05-27-gemini-session-invocation-protocols-stable
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: auto-modes-merged
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: policy-engine-in-acp
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: auto-edit-shell-redirect-approval
    finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: session-export-import
    finding_id: 2026-05-11-gemini-subagent-protocol-and-session-portability
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: session-resume-reliability
    finding_id: 2026-05-12-gemini-session-resume-reliability
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: agent-execution-stopped-json
    finding_id: 2026-05-07-gemini-reviewable-memory-and-trust
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: long-horizon-goal-primitive
    last_verified: 2026-10-13
    status: retired
    note: Dropped from the current posture. The planning change establishes an executable workflow, not a first-class durable goal primitive.
    finding_id: 2026-10-13-gemini-cli-headless-plan-mode-now-encourages-autonomous-implementation
  - id: v0-45-0-mcp-blacklist-and-policy-resilience
    finding_id: 2026-06-03-gemini-cli-v0-45-0-release
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: antigravity-migration-funnel-stable
    finding_id: 2026-06-23-gemini-antigravity-migration-to-stable
    last_verified: 2026-06-23
    status: retired
    note: Historical migration-funnel claim retained as retired; the current body defers to the live consumer-access notice without asserting a pinned historical cutoff.
  - id: antigravity-banner-uncapped-stable
    finding_id: 2026-06-23-gemini-antigravity-banner-uncapped-in-stable
    last_verified: 2026-06-23
    status: retired
    note: Superseded by current consumer-access guidance; historical cutoff wording is not pinned here.
  - id: skill-path-traversal-fix-preview-only
    finding_id: 2026-06-23-gemini-skill-path-traversal-stranded-in-preview
    last_verified: 2026-06-23
    status: retired
    channel: preview-or-beta
    note: Superseded. The fix reached stable in v0.49.0 (2026-07-01-gemini-cli-skill-install-path-traversal-fix-reaches-stable-in-v0-49).
  - id: skill-path-traversal-fix-stable-v0-49
    finding_id: 2026-07-01-gemini-cli-skill-install-path-traversal-fix-reaches-stable-in-v0-49
    last_verified: 2026-10-13
    status: retired
    note: Retained in the historical record; dropped from this dated posture. Current decisions use the new release findings.
  - id: code-assist-subscription-sunset
    finding_id: 2026-10-13-gemini-cli-google-stops-selling-new-code-assist-subscriptions
    last_verified: 2026-10-24
    status: open_question
    note: "Current documentation re-read on 2026-10-24; historical October 13 wording and comprehensive route-specific support commitments remain unverified."
  - id: explicit-flash-request-rewrite
    finding_id: 2026-10-13-gemini-cli-stable-v0-61-0-rewrites-explicit-flash-model-ids
    last_verified: 2026-10-24
    status: active
  - id: stable-build-file-tool-gates
    finding_id: 2026-10-13-gemini-cli-build-file-tool-gates-reach-stable-and-override-yolo
    last_verified: 2026-10-24
    status: active
  - id: stable-taint-false-positive-repair
    finding_id: 2026-10-13-gemini-cli-stable-v0-64-0-narrows-untrusted-argument-false-positives
    last_verified: 2026-10-24
    status: retired
    note: "Verified at v0.65.0; omitted from this refreshed posture or covered by the current channel-specific claim. Retirement does not assert removal of the mechanism."
  - id: headless-plan-autonomous-prompt
    finding_id: 2026-10-13-gemini-cli-headless-plan-mode-now-encourages-autonomous-implementation
    last_verified: 2026-10-24
    status: active
  - id: agent-git-diff-restored
    finding_id: 2026-10-13-gemini-cli-stable-v0-63-0-fixes-agent-git-diff
    last_verified: 2026-10-24
    status: retired
    note: "Verified at v0.65.0; omitted from this refreshed posture or covered by the current channel-specific claim. Retirement does not assert removal of the mechanism."
  - id: individual-tool-text-cap
    finding_id: 2026-10-13-gemini-cli-tool-text-fields-gain-a-non-configurable-65536-byte-cap
    last_verified: 2026-10-24
    status: active
  - id: mcp-add-settings-loss-preview-fix
    finding_id: 2026-10-13-gemini-cli-mcp-add-can-erase-untrusted-project-settings-until-v0-65-0-preview
    last_verified: 2026-10-24
    status: retired
    note: "Superseded by stable 0.65.0 refusal; the new stable settings claim replaces preview-only guidance."
  - id: sandbox-workdir-and-runtime-state
    finding_id: 2026-10-13-gemini-cli-sandboxes-reject-sensitive-workdirs-and-seatbelt-changes-its-state-root
    last_verified: 2026-10-24
    status: retired
    note: "Verified at v0.65.0; the older sandbox settings and storage tour is omitted from this posture. The new bridge claim covers the current decision."
  - id: oauth-issuer-compatibility-and-synthetic-turns
    finding_id: 2026-10-13-gemini-cli-stable-v0-64-0-relaxes-oauth-iss-requirements-and-normalizes-terminal-turns
    last_verified: 2026-10-24
    status: retired
    note: "Verified at v0.65.0; omitted from this refreshed posture or covered by the current channel-specific claim. Retirement does not assert removal of the mechanism."
  - id: stable-acp-correlation-and-usage
    finding_id: 2026-10-13-gemini-cli-acp-permissions-correlate-with-tools-and-stable-v0-64-0-reports-usage
    last_verified: 2026-10-24
    status: retired
    note: "Verified at v0.65.0; omitted from this refreshed posture or covered by the current channel-specific claim. Retirement does not assert removal of the mechanism."
  - id: session-patches-and-local-write-locks
    finding_id: 2026-10-13-gemini-cli-stable-v0-64-0-appends-session-patches-and-serializes-local-writes
    last_verified: 2026-10-24
    status: active
  - id: redirection-and-config-path-hardening
    finding_id: 2026-10-13-gemini-cli-v0-63-0-hardens-redirection-config-paths-reads-and-untrusted-resource-output
    last_verified: 2026-10-24
    status: retired
    note: "Verified at v0.65.0; omitted from this refreshed posture or covered by the current channel-specific claim. Retirement does not assert removal of the mechanism."
  - id: a2a-nested-settings-migration
    finding_id: 2026-10-13-gemini-cli-a2a-settings-migrate-to-nested-controls-in-memory
    last_verified: 2026-10-24
    status: retired
    note: "Verified at v0.65.0; omitted from this refreshed posture or covered by the current channel-specific claim. Retirement does not assert removal of the mechanism."
  - id: stable-active-operation-cancellation
    finding_id: 2026-10-13-gemini-cli-ctrl-c-reaches-cancellation-during-active-operations-in-v0-64
    last_verified: 2026-10-24
    status: retired
    note: "Verified at v0.65.0; omitted from this refreshed posture or covered by the current channel-specific claim. Retirement does not assert removal of the mechanism."
  - id: preview-cancellation-history-repair
    finding_id: 2026-10-13-gemini-cli-rapid-cancellation-history-repair-reaches-v0-65-0-preview
    last_verified: 2026-10-24
    status: retired
    note: "Superseded by stable 0.65.0 history delivery; newer execution-loop fixes remain nightly."
  - id: diagnostic-file-reference-resolution
    finding_id: 2026-10-13-gemini-cli-file-references-with-line-suffixes-resolve-in-v0-64
    last_verified: 2026-10-13
    status: retired
    note: Verified convenience omitted from this posture; file resolution does not establish line-range-only context.
  - id: preview-companion-shutdown-source
    finding_id: 2026-10-13-gemini-cli-ide-companion-shutdown-repair-is-in-v0-65-0-preview-source
    last_verified: 2026-10-24
    status: retired
    note: "Superseded by stable 0.65.0 source delivery; Marketplace delivery remains unverified."
  - id: stable-and-preview-at-october-close
    finding_id: 2026-10-13-gemini-cli-v0-64-0-stable-and-v0-65-0-preview-ship-before-the-window-closes
    last_verified: 2026-10-24
    status: retired
    note: "Historical snapshot retained; current install guidance is stable 0.65.0, preview 0.66.0-preview.0 and the dated nightly."
  - id: antigravity-plan-review-scope
    finding_id: 2026-10-13-antigravity-dangerously-skip-permissions-stops-auto-approving-plan-plans-in-1-3-2-plan-and-artifact
    last_verified: 2026-10-13
    status: retired
    note: Comparison omitted from this dated body; no current Antigravity behavior is asserted.
  - id: install-stable-0-65-0
    finding_id: 2026-10-24-gemini-cli-stable-refuses-project-settings-writes-in-untrusted-workspaces
    last_verified: 2026-10-24
    status: active
  - id: stable-untrusted-settings-refusal
    finding_id: 2026-10-24-gemini-cli-stable-refuses-project-settings-writes-in-untrusted-workspaces
    last_verified: 2026-10-24
    status: active
  - id: stable-resume-and-exit-history
    finding_id: 2026-10-24-gemini-cli-stable-repairs-resumed-session-deletion-duplicate-tool-responses-and-rapid-exit-history
    last_verified: 2026-10-24
    status: active
  - id: authenticated-otlp-export
    finding_id: 2026-10-24-gemini-cli-stable-can-authenticate-telemetry-exports-with-configured-otlp-headers
    last_verified: 2026-10-24
    status: active
  - id: agent-directed-directory-context
    finding_id: 2026-10-24-gemini-cli-stable-directory-references-stop-eagerly-reading-the-entire-directory
    last_verified: 2026-10-24
    status: active
  - id: current-vendor-access-and-model-warning
    finding_id: 2026-10-24-gemini-cli-the-readme-stops-promising-obsolete-access-and-warns-about-gemini-4-optimization
    last_verified: 2026-10-24
    status: active
  - id: preview-global-git-and-noninteractive-auth
    finding_id: 2026-10-24-gemini-cli-preview-restores-user-git-configuration-while-disabling-interactive-credential-prompts
    last_verified: 2026-10-24
    status: active
  - id: preview-private-mcp-oauth
    finding_id: 2026-10-24-gemini-cli-preview-allows-an-explicit-per-server-private-network-mcp-oauth-exception
    last_verified: 2026-10-24
    status: active
  - id: preview-env-and-nightly-raw-migration
    finding_id: 2026-10-24-gemini-cli-preview-fixes-env-resolution-order-nightly-preserves-raw-placeholders-during-migration
    last_verified: 2026-10-24
    status: active
  - id: nightly-cancellation-loop
    finding_id: 2026-10-24-gemini-cli-preview-forwards-parent-signals-nightly-blocks-further-work-after-cancellation
    last_verified: 2026-10-24
    status: active
  - id: nightly-sandbox-ide-bridge
    finding_id: 2026-10-24-gemini-cli-nightly-bridges-the-host-ide-companion-into-container-sandboxes
    last_verified: 2026-10-24
    status: active
  - id: nightly-file-semantics
    finding_id: 2026-10-24-gemini-cli-nightly-checks-existing-file-writability-and-preserves-hard-links
    last_verified: 2026-10-24
    status: active
  - id: nightly-scoped-flag-approvals
    finding_id: 2026-10-24-gemini-cli-nightly-scopes-flag-taint-to-external-output-and-remembers-approved-flags-within-the-sessi
    last_verified: 2026-10-24
    status: active
  - id: nightly-local-model-catalog
    finding_id: 2026-10-24-gemini-cli-nightly-exposes-a-machine-readable-local-model-catalog
    last_verified: 2026-10-24
    status: active
  - id: portable-skills-and-hook-timeouts
    finding_id: 2026-10-24-gemini-cli-skill-parsing-and-hook-import-preserve-more-of-portable-configuration
    last_verified: 2026-10-24
    status: active
  - id: stable-extension-download-boundary
    finding_id: 2026-10-24-gemini-cli-stable-hardens-the-github-extension-json-downloader
    last_verified: 2026-10-24
    status: active
  - id: stable-question-answer-context
    finding_id: 2026-10-24-gemini-cli-stable-keeps-the-full-ask-user-question-beside-the-answer
    last_verified: 2026-10-24
    status: active
posture_basis:
  capability:
    - 2026-05-11-gemini-subagent-protocol-and-session-portability
    - 2026-10-13-gemini-cli-headless-plan-mode-now-encourages-autonomous-implementation
    - 2026-10-13-gemini-cli-stable-v0-64-0-appends-session-patches-and-serializes-local-writes
    - 2026-10-24-gemini-cli-stable-directory-references-stop-eagerly-reading-the-entire-directory
    - 2026-10-24-gemini-cli-stable-repairs-resumed-session-deletion-duplicate-tool-responses-and-rapid-exit-history
    - 2026-10-24-gemini-cli-nightly-bridges-the-host-ide-companion-into-container-sandboxes
    - 2026-10-24-gemini-cli-nightly-exposes-a-machine-readable-local-model-catalog
    - 2026-10-24-gemini-cli-skill-parsing-and-hook-import-preserve-more-of-portable-configuration
    - 2026-10-24-gemini-cli-stable-keeps-the-full-ask-user-question-beside-the-answer
  accessibility:
    - 2026-07-01-gemini-cli-consumer-service-retired
    - 2026-10-13-gemini-cli-google-stops-selling-new-code-assist-subscriptions
    - 2026-10-24-gemini-cli-the-readme-stops-promising-obsolete-access-and-warns-about-gemini-4-optimization
    - 2026-10-24-gemini-cli-preview-allows-an-explicit-per-server-private-network-mcp-oauth-exception
    - 2026-10-24-gemini-cli-preview-restores-user-git-configuration-while-disabling-interactive-credential-prompts
  governance:
    - 2026-09-21-gemini-cli-extension-install-still-checks-out-fetch-head-after-plugin4shell-disclosure
    - 2026-10-13-gemini-cli-build-file-tool-gates-reach-stable-and-override-yolo
    - 2026-10-13-gemini-cli-tool-text-fields-gain-a-non-configurable-65536-byte-cap
    - 2026-10-13-gemini-cli-stable-v0-61-0-rewrites-explicit-flash-model-ids
    - 2026-10-24-gemini-cli-stable-refuses-project-settings-writes-in-untrusted-workspaces
    - 2026-10-24-gemini-cli-stable-hardens-the-github-extension-json-downloader
    - 2026-10-24-gemini-cli-stable-can-authenticate-telemetry-exports-with-configured-otlp-headers
    - 2026-10-24-gemini-cli-preview-fixes-env-resolution-order-nightly-preserves-raw-placeholders-during-migration
    - 2026-10-24-gemini-cli-preview-forwards-parent-signals-nightly-blocks-further-work-after-cancellation
    - 2026-10-24-gemini-cli-nightly-scopes-flag-taint-to-external-output-and-remembers-approved-flags-within-the-sessi
    - 2026-10-24-gemini-cli-nightly-checks-existing-file-writability-and-preserves-hard-links
  succession:
    - 2026-07-01-gemini-cli-consumer-service-retired
    - 2026-10-13-gemini-cli-google-stops-selling-new-code-assist-subscriptions
    - 2026-10-24-gemini-cli-the-readme-stops-promising-obsolete-access-and-warns-about-gemini-4-optimization
stance:
  use_for: "Run <a href='https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0'>controlled implementation jobs on 0.65.0</a> after confirming service access and permitted writes."
  avoid_for: "Plan-only jobs where <a href='https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/tools/exit-plan-mode.ts#L210-L268'>an allowed plan exit can enter YOLO</a>."
  watch_next: "A recorded cancellation test with the intended supervisor, piped input and output mode for <a href='https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/nonInteractiveCli.ts'>the nightly headless loop</a>."
---

# Gemini CLI

On 20 October 2026, [Gemini CLI 0.65.0 reached stable](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0) with [a refusal of project-scoped MCP additions in untrusted folders](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/commands/mcp/add.ts#L45-L66), closing the [empty-settings overwrite path](https://github.com/google-gemini/gemini-cli/commit/f41d0bc8f7fe79563d353f97c7580ed4d8fd24d7). The safeguard ships; deciding which repository deserves trust still belongs to you.

## Where it stands, 2026-10-24

**Channel.** Pin [0.65.0 stable, released 20 October 2026](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0): [`npm install -g @google/gemini-cli@0.65.0`](https://registry.npmjs.org/@google%2fgemini-cli/0.65.0), with [Node 20 or later](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/package.json). At the [24 October, 10:12:57 UTC npm read](https://registry.npmjs.org/@google%2fgemini-cli), preview selected [0.66.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-preview.0) and nightly selected [0.67.0-nightly.20261024.gcd1b45c2d](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261024.gcd1b45c2d). Choose a prerelease only for a need named below.

Preview adds [user Git configuration](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/services/shellExecutionService.ts#L580-L640), [earlier .env loading](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/cli/src/config/settings.ts#L1047-L1118) and [a per-server private-network OAuth exception that defaults off](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/docs/tools/mcp-server.md#L436-L441). Nightly adds [further cancellation controls](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/nonInteractiveCli.ts), [container editor integration](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/utils/ideBridge.ts), [file-write changes](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/core/src/services/fileSystemService.ts#L57-L164), [model listing](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/models/list.ts) and [hook-timeout conversion](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/hooks/migrate.ts#L65-L105). [None of the inspected changes remains main-only](https://github.com/google-gemini/gemini-cli/compare/cd1b45c2db0a5ea7b7fc3b67c1ba5879601d6005...v0.67.0-nightly.20261024.gcd1b45c2d).

**Upgrade before changing project MCP settings.** If the guard refuses, choose user scope or explicitly decide whether to trust the folder. The [guard applies only to settings persistence](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/settings.ts#L461-L492). Before unattended rollout, [confirm service access](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/README.md#L1-L22), [keep folder trust enabled](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/utils/userStartupWarnings.ts#L84-L103) and [verify extension checkouts](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github.ts#L32-L80). For plan-only work, [deny `exit_plan_mode` or enforce a read-only filesystem](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/tools/exit-plan-mode.ts#L210-L268).

**Verify service access before investing in rollout.** Google's [16 October 2026 README update](https://github.com/google-gemini/gemini-cli/commit/21976e977ef833e9a03538119eac933fe89767a7) [says Gemini CLI was replaced for unpaid-tier and Google One users on 18 June 2026, recommends Antigravity for current Gemini models, and warns that this CLI is not optimized for Gemini 4 Argon](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/README.md#L1-L22). The [stable authentication guide still recommends consumer sign-in](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/docs/get-started/authentication.mdx#L12-L50). Check the account route and support terms before choosing a deployment, whatever the package version.

## Repository trust still belongs to you

**Verify extension checkouts during installation.** Stable's [JSON downloader restricts GITHUB_TOKEN to HTTPS github.com and its subdomains, checks destinations and socket DNS results, and adds a 30-second timeout](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github_fetch.ts#L15-L205). The [installer still checks out FETCH_HEAD without comparing resulting HEAD to the requested commit](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github.ts#L32-L80).

Upgrade token-authenticated install flows, test redirects and private-host refusals, and compare the installed HEAD with your intended commit.

**Enforce the boundary for plan-only jobs.** Headless planning [encourages implementation without waiting](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/prompts/snippets.ts#L602-L620), and [policy-allowed exit_plan_mode can select YOLO](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/tools/exit-plan-mode.ts#L210-L268). Deny that tool in effective policy or enforce a read-only filesystem. [Recognized build-file edit gates](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/policy/policy-engine.ts#L903-L956) leave other routes open, including [YOLO shell redirection](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/policy/policies/yolo.toml#L50-L56).

**Keep folder trust enabled for unattended launches.** It [defaults on in stable](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/trustedFolders.ts#L31-L35), despite [the guide's off-default statement](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/docs/cli/trusted-folders.md#L8-L12). Disabling it [bypasses the headless untrusted-workspace rejection](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/utils/userStartupWarnings.ts#L84-L103). Check the effective setting before granting unattended work.

## Stable makes interrupted work easier to inspect

**Retest interrupted sessions on stable.** 0.65.0 [deduplicates reconstructed tool responses](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/utils/sessionUtils.ts#L108-L320), [preserves resumed sessions during cleanup](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/services/chatRecordingService.ts#L1327-L1370) and [repairs rapid-exit cancellation bookkeeping](https://github.com/google-gemini/gemini-cli/commit/204db94ae2a33f70afec7400ebf6b78f1b5e2575).

Resume a multi-call turn, then interrupt and exit quickly. Tools that read session logs must still [apply appended $patch records](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/services/chatRecordingService.ts). Reconcile the interrupted external action before retrying it.

**Let the agent explore a referenced directory.** Stable [leaves its path in the query instead of eagerly reading all its files](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/ui/hooks/atCommandProcessor.ts), handing file selection to the agent. Name files explicitly if the job needs them immediately.

**Keep the question beside the answer.** Stable's [ask_user result display retains the full question text and multiline formatting beside the answer](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/tools/ask-user.ts#L215-L246). Keep that context in review tools so nobody has to reconstruct what a short answer meant.

## Integrations require a deliberate channel choice

**Try native collector authentication before maintaining a header-only proxy.** Stable [passes configured OTLP headers to HTTP and gRPC exporters](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/telemetry/sdk.ts#L282-L345). Inspect effective headers: [comma-separated input can keep valid pairs while skipping malformed ones](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/telemetry/config.ts#L109-L189). Choose what to export before connecting a collector; [the guide defaults prompt logging to on, while telemetry itself defaults off](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/docs/cli/telemetry.md#L40-L48).

**Try preview when Git jobs need user configuration.** 0.66.0-preview.0 [restores global Git configuration while retaining sensitive overrides and disabling system configuration](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/services/shellExecutionService.ts#L580-L640). Its [Git helper disables interactive credential prompts](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/utils/gitUtils.ts#L13-L90). Check identity and URL rewrites; provision authentication before launching unattended jobs.

**Review internal MCP OAuth endpoints before enabling preview's exception.** In 0.66.0-preview.0, [per-server oauth.allowPrivateNetwork defaults off](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/docs/tools/mcp-server.md#L436-L441). Enabling it [permits private/internal OAuth endpoints, with HTTPS required away from loopback, resolved-address checks and link-local addresses still blocked](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/mcp/oauth-utils.ts#L54-L171). Check the specific server and DNS before removing a public-endpoint workaround.

**Choose the right channel for settings migration.** Regular preview [loads eligible .env files before final placeholder expansion](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/cli/src/config/settings.ts#L1047-L1118). Preserving literal placeholders when deprecated settings migrate requires [nightly's separate raw-value persistence](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/config/settings.ts). Inspect migration diffs for resolved secrets before committing configuration.

**Try editor diff review in a container on nightly.** Its [host bridge limits tool calls to openDiff and closeDiff and checks normalized workspace paths lexically](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/utils/ideBridge.ts), while [the companion token stays on the host](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/utils/sandbox.ts). Test workspace mappings, symlink escape and companion compatibility before relying on it.

**Test nightly cancellation with the actual supervisor.** It [checks cancellation before scheduling more tools](https://github.com/google-gemini/gemini-cli/commit/451a02ff03f1d2a8fe870c120fd5342cfd6f9fd1) and [stops continuation after cancellation and suppresses automatic nudges after terminal outcomes](https://github.com/google-gemini/gemini-cli/commit/a3dd9f8c7bcb495a46d0b505b6f179996ccd8332). With piped input and your output mode, check that no new tool starts and already-running work stops.

**Review the first shell approval's scope on nightly.** It [matches unfamiliar low-risk flags against external output and remembers approved flags for the same root commands within the session](https://github.com/google-gemini/gemini-cli/commit/120a39ded6ad7b82e45b574ab54baba451d65fe9). The first yes now has a longer reach. Inspect which flags the same set of root commands can reuse before accepting.

**Test file semantics before sharing a workspace.** Nightly [checks existing-file writability and writes hard-linked files in place](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/core/src/services/fileSystemService.ts#L57-L164), trading atomic replacement for link fidelity. Test permission failures under the real execution identity. Stable's [locks only coordinate within one process](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/utils/pathMutex.ts#L7-L22); coordinate separate agents' writes yourself.

**Use model listing as inventory when building an adapter.** Nightly's [`gemini models list --output-format json` reads local configuration and hard-codes outputTokens=8192](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/models/list.ts). Check service access separately. Stable [rewrites outgoing model IDs](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/core/modelMappingContentGenerator.ts#L44-L81), with [Flash routing enabled for API-key, Vertex and Gateway auth and experiment gates for Google login](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/config/config.ts#L3591-L3649). Record configured, outgoing and returned IDs separately in evaluations.

**Inspect imported Claude hooks before relying on their timing.** The 24 October nightly [converts valid timeout values from seconds to milliseconds](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/hooks/migrate.ts#L65-L105). Audit old imports separately. Test the command's timeout and refusal behavior in Gemini.

**Save complete tool output outside the conversation.** Stable [truncates individual handled text fields/parts, with best-effort output saving](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/scheduler/tool-executor.ts#L320-L405), using a [65,536-byte limit](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/utils/constants.ts#L18). Paginate large results and check that the saved file is complete before using it as an audit record.

## What is unresolved

- Continued support for API-key, Vertex and Gateway routes. Explicit Google commitments naming each route would settle it. Check [Google's consumer notice](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals) and [subscription terms](https://docs.cloud.google.com/gemini/docs/codeassist/sunset) for the account you intend to use.
- Hosted reach of the [unchecked extension pin path](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github.ts#L32-L80). A hosted branch-acceptance reproduction would establish reach; a tagged resulting-HEAD check would settle installer verification.
- Marketplace delivery of the [companion shutdown repair now in stable source](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/vscode-ide-companion/src/ide-server.ts#L423-L475). The [observed package manifest identifies 0.20.0](https://Google.gallerycdn.vsassets.io/extensions/google/gemini-cli-vscode-ide-companion/0.20.0/1765572429008/Microsoft.VisualStudio.Code.Manifest); a package-to-source mapping would establish delivery.
- Runtime success of the [nightly IDE bridge](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/utils/ideBridge.ts) and [cancellation controls](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/nonInteractiveCli.ts). Recorded tests naming the container, companion, supervisor and output mode would settle those deployments.

## Review date and method

This page describes Gemini CLI as of 24 October 2026. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the evidence contract.

<template data-legacy-section-label="check-profile.mjs">
## Profile hygiene
</template>
