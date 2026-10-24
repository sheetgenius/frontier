---
schema_version: bitter.frontier_profile.v0
profile_id: openclaw
label: OpenClaw
owner: OpenClaw
source_contract: sources/openclaw.yml
homepage: https://openclaw.ai
docs: https://docs.openclaw.ai/
tagline: "OpenClaw makes learned procedures reversible, but moves review after the edit."
compared_with: []
x:
  project: openclaw
  maintainers:
    - handle: onusoz
      name: Onur Solmaz
repo: https://github.com/openclaw/openclaw
surface_class: open_source_commits
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-24
last_full_review: 2026-10-24
claims:
  - id: exec-fix-stable
    finding_id: 2026-09-21-openclaw-the-approved-exec-fix-is-now-in-stable-but-not-on-extended-stable
    last_verified: 2026-10-13
    status: retired
  - id: extended-stable-unfixed
    finding_id: 2026-09-21-openclaw-extended-stable-moved-to-a-july-line-that-predates-every-fix-above
    last_verified: 2026-10-13
    status: retired
  - id: advisory-batch
    finding_id: 2026-09-21-openclaw-75-advisories-published-in-one-batch-the-exec-approval-family-is-patched-in-2026-8
    last_verified: 2026-10-13
    status: retired
  - id: approved-exec-still-unreleased
    finding_id: 2026-08-20-openclaw-approved-exec-fix-still-in-no-release
    last_verified: 2026-08-20
    status: retired
  - id: sandbox-stop-success-while-children-run
    finding_id: 2026-08-20-openclaw-codex-sandbox-stop-can-return-success-while-children-run
    last_verified: 2026-08-20
    status: retired
  - id: channel-recovery-self-healing
    finding_id: 2026-05-07-openclaw-everyday-agent-surfaces
    last_verified: 2026-05-07
    status: retired
  - id: live-exec-output-bounded
    finding_id: 2026-05-07-openclaw-everyday-agent-surfaces
    last_verified: 2026-05-07
    status: retired
  - id: subagent-security-boundary-docs
    finding_id: 2026-05-07-openclaw-everyday-agent-surfaces
    last_verified: 2026-10-24
    status: active
  - id: per-agent-message-restrictions
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-10-24
    status: retired
  - id: skill-archive-upload-gated
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-10-13
    status: retired
  - id: memory-dreaming-cap
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-10-13
    status: retired
  - id: cli-onboarding-wayfinding
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-05-12
    status: retired
  - id: voice-channel-allowlist
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-10-13
    status: retired
  - id: per-sender-tool-policies
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-10-24
    status: active
  - id: memory-wiki-scope-tightening
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-10-13
    status: retired
  - id: openai-cli-auth-default-shift
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-05-13
    status: retired
  - id: scoped-compaction-preservation
    finding_id: 2026-05-13-openclaw-per-sender-tool-policies
    last_verified: 2026-05-13
    status: retired
  - id: pre-dispatch-sender-allowlists
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: retired
  - id: browser-snapshot-ssrf-policy
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: retired
  - id: system-event-text-sanitization
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: retired
  - id: external-content-wrapping
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-05-27
    status: retired
  - id: gateway-auth-ratelimit-default-on
    finding_id: 2026-05-27-openclaw-content-boundary-hardening-suite
    last_verified: 2026-10-13
    status: retired
  - id: skill-workshop-and-stable-reliability
    finding_id: 2026-06-03-openclaw-stable-reliability-features
    last_verified: 2026-10-13
    status: retired
  - id: wcag-aa-control-ui-stable
    finding_id: 2026-06-23-openclaw-wcag-aa-reaches-stable
    last_verified: 2026-06-23
    status: retired
  - id: codex-auto-plugin-approvals
    finding_id: 2026-06-23-openclaw-codex-auto-plugin-approvals-stable
    last_verified: 2026-10-13
    status: retired
  - id: clawhub-skill-provenance-surfaced
    finding_id: 2026-06-23-openclaw-clawhub-skill-provenance-stable
    last_verified: 2026-10-13
    status: retired
  - id: workspace-boundary-fix-stable
    finding_id: 2026-09-21-openclaw-the-workspace-symlink-then-boundary-fix-is-in-stable-not-in-extended-stable
    last_verified: 2026-10-13
    status: retired
  - id: sandbox-stop-fix-stable
    finding_id: 2026-09-21-openclaw-the-codex-sandbox-stop-success-fix-and-the-rest-of-the-parent-s-main-only-pile-reached-the
    last_verified: 2026-10-13
    status: retired
  - id: defaults-widened-reach
    finding_id: 2026-09-21-openclaw-defaults-widened-agent-reach-several-times-each-on-a-named-stable
    last_verified: 2026-10-24
    status: active
  - id: operation-bound-grants
    finding_id: 2026-09-21-openclaw-approval-ux-grant-once-bind-to-the-operation-revoke-later
    last_verified: 2026-10-24
    status: retired
  - id: release-gates-waived
    finding_id: 2026-09-21-openclaw-seven-stables-in-20-days-with-release-gates-visibly-waived
    last_verified: 2026-10-13
    status: retired
  - id: upgrade-breaking-changes
    finding_id: 2026-09-21-openclaw-breaking-changes-an-upgrader-will-hit
    last_verified: 2026-10-13
    status: retired
  - id: one-prompt-install
    finding_id: 2026-09-21-openclaw-distribution-one-prompt-install-a-linux-desktop-app-a-linux-update-channel
    last_verified: 2026-10-13
    status: retired
  - id: extended-stable-august-fixes
    finding_id: 2026-10-13-openclaw-extended-stable-carries-the-august-approval-and-sandbox-fixes-with-narrower-defaults
    last_verified: 2026-10-24
    status: retired
  - id: bot-input-default-on
    finding_id: 2026-10-13-openclaw-discord-and-slack-accept-bot-authored-messages-by-default-from-2026-9
    last_verified: 2026-10-24
    status: active
  - id: chat-setup-permission-mode
    finding_id: 2026-10-13-openclaw-chat-driven-configuration-follows-the-requesting-run-s-permission-mode
    last_verified: 2026-10-24
    status: retired
  - id: hook-binding-beta-only
    finding_id: 2026-10-13-openclaw-hooks-can-rewrite-approved-arguments-on-stable-binding-is-fixed-only-in-beta
    last_verified: 2026-10-24
    status: retired
  - id: qualification-and-node-updates
    finding_id: 2026-10-13-openclaw-seven-main-line-stables-shipped-with-distinct-release-qualification-omissions
    last_verified: 2026-10-24
    status: retired
  - id: desktop-tool-search-and-compaction
    finding_id: 2026-10-13-openclaw-desktop-sharing-and-provider-compaction-remove-setup-and-summary-work
    last_verified: 2026-10-24
    status: retired
  - id: workshop-autonomous-mode
    finding_id: 2026-10-13-openclaw-autonomous-workshop-maintenance-requires-its-own-approval-setting
    last_verified: 2026-10-24
    status: retired
  - id: authority-inspection-and-chat-approvals
    finding_id: 2026-10-13-openclaw-authority-inspection-and-in-chat-approvals-became-easier-to-use
    last_verified: 2026-10-24
    status: retired
  - id: published-beta-public-ingress
    finding_id: 2026-10-13-openclaw-published-beta-3-adds-an-x-channel-and-plugin-browsing-beyond-stable
    last_verified: 2026-10-13
    status: retired
  - id: chatgpt-auth-and-provider-integrations
    finding_id: 2026-10-13-openclaw-chatgpt-sign-in-and-new-provider-integrations-reduce-entry-barriers
    last_verified: 2026-10-13
    status: retired
  - id: stable-10-3-repair-target
    finding_id: 2026-10-13-openclaw-stable-2026-10-3-repairs-credentials-memory-and-post-compaction-turns
    last_verified: 2026-10-24
    status: retired
  - id: telegram-replay-beta-repair
    finding_id: 2026-10-13-openclaw-beta-3-prevents-stale-telegram-spool-imports-becoming-fresh-owner-turns
    last_verified: 2026-10-24
    status: retired
  - id: device-join-service-consent
    finding_id: 2026-10-13-openclaw-beta-device-join-commands-offer-a-persistent-session-host
    last_verified: 2026-10-13
    status: retired
  - id: typesafe-local-external-plugin
    finding_id: 2026-10-13-openclaw-typesafe-becomes-an-external-plugin-with-a-local-decision-model-route
    last_verified: 2026-10-13
    status: retired
  - id: incognito-diagnostic-boundary
    finding_id: 2026-10-13-openclaw-incognito-content-is-excluded-from-four-diagnostic-writers-after-9
    last_verified: 2026-10-24
    status: retired
  - id: memory-turn-tool-isolation
    finding_id: 2026-10-13-openclaw-memory-saving-turns-retain-their-persistence-only-tool-boundary
    last_verified: 2026-10-24
    status: retired
  - id: advisory-artifact-mapping
    finding_id: 2026-10-13-openclaw-wider-advisory-databases-published-older-openclaw-issues-during-the-window
    last_verified: 2026-10-24
    status: retired
  - id: stable-security-repair-coverage
    finding_id: 2026-10-13-openclaw-stable-repaired-sandbox-revocation-and-credential-output-gaps-without-new-advisories
    last_verified: 2026-10-24
    status: retired
  - id: workspace-operation-time-coverage
    finding_id: 2026-10-13-openclaw-workspace-file-tools-use-root-handles-while-residual-raw-path-migration-stays-open
    last_verified: 2026-10-24
    status: active
  - id: quick-start-consent-scope
    finding_id: 2026-10-13-openclaw-quick-start-shortens-consent-while-usable-ai-access-remains-a-prerequisite
    last_verified: 2026-10-24
    status: active
  - id: october-node-runtime
    finding_id: 2026-10-24-openclaw-stable-now-requires-the-october-patched-node-runtime
    last_verified: 2026-10-24
    status: active
  - id: final-argument-approval-stable
    finding_id: 2026-10-24-openclaw-final-argument-approval-binding-reached-both-stable-lines
    last_verified: 2026-10-24
    status: active
  - id: telegram-import-rejection-stable
    finding_id: 2026-10-24-openclaw-stable-rejects-old-telegram-imports-instead-of-replaying-them-as-fresh-work
    last_verified: 2026-10-24
    status: active
  - id: versioned-workshop-learning
    finding_id: 2026-10-24-openclaw-workshop-replaces-proposal-review-with-direct-edits-and-bounded-undo-history
    last_verified: 2026-10-24
    status: active
  - id: compaction-explicit-opt-ins
    finding_id: 2026-10-24-openclaw-the-new-stable-train-no-longer-enables-the-profile-s-native-compaction-defaults
    last_verified: 2026-10-24
    status: active
  - id: extended-september-defaults
    finding_id: 2026-10-24-openclaw-extended-stable-advanced-to-september-and-lost-its-narrower-default-distinction
    last_verified: 2026-10-24
    status: active
  - id: windows-update-recovery
    finding_id: 2026-10-24-openclaw-windows-update-repairs-shipped-but-the-original-updater-can-still-be-the-obstacle
    last_verified: 2026-10-24
    status: active
  - id: cli-catalog-invalidation
    finding_id: 2026-10-24-openclaw-cli-tool-catalog-changes-now-invalidate-stale-native-sessions
    last_verified: 2026-10-24
    status: active
  - id: send-only-collaboration
    finding_id: 2026-10-24-openclaw-directed-sends-no-longer-require-direct-access-to-another-agent-s-transcript
    last_verified: 2026-10-24
    status: active
  - id: stable-x-public-sharing
    finding_id: 2026-10-24-openclaw-x-mentions-and-normal-public-thread-links-reached-stable
    last_verified: 2026-10-24
    status: active
  - id: provider-discovery-worker-routing
    finding_id: 2026-10-24-openclaw-model-discovery-and-worker-inference-reduce-manually-maintained-provider-wiring
    last_verified: 2026-10-24
    status: active
  - id: room-policy-binding-beta
    finding_id: 2026-10-24-openclaw-slack-and-discord-room-policy-binding-is-fixed-in-beta-not-stable-10
    last_verified: 2026-10-24
    status: active
  - id: cloud-worker-review-main
    finding_id: 2026-10-24-openclaw-main-adds-gateway-owned-exec-review-for-cloud-workers
    last_verified: 2026-10-24
    status: active
  - id: predicate-allowlist-gap
    finding_id: 2026-10-24-openclaw-bash-predicates-still-bypass-exec-allowlist-review-on-all-three-published-channels
    last_verified: 2026-10-24
    status: active
  - id: host-cli-sandbox-gap
    finding_id: 2026-10-24-openclaw-sandboxed-cron-and-delegated-children-need-api-models-until-host-cli-guards-ship
    last_verified: 2026-10-24
    status: active
  - id: headless-policy-hook-dispatch
    finding_id: 2026-10-24-openclaw-headless-agent-exec-dispatches-blocking-policy-hooks-from-stable-10
    last_verified: 2026-10-24
    status: active
  - id: private-browser-bootstrap
    finding_id: 2026-10-24-openclaw-browser-pairing-uses-a-private-file-instead-of-credential-bearing-process-arguments
    last_verified: 2026-10-24
    status: active
  - id: external-codex-runtime-floor
    finding_id: 2026-10-24-openclaw-known-incompatible-external-codex-runtime-plugins-are-refused-before-serving-turns
    last_verified: 2026-10-24
    status: active
  - id: same-conversation-continuations
    finding_id: 2026-10-24-openclaw-same-conversation-scheduled-continuations-re-admit-the-original-operator-authority
    last_verified: 2026-10-24
    status: active
  - id: mutable-sender-policy-warning
    finding_id: 2026-10-24-openclaw-main-warns-when-mutable-sender-names-select-privileged-tool-policies
    last_verified: 2026-10-24
    status: active
  - id: workshop-proposal-backup-retirement
    finding_id: 2026-10-24-openclaw-workshop-retirement-requires-manual-migration-of-proposal-integrations-and-old-backups
    last_verified: 2026-10-24
    status: active
  - id: visitor-welcome-main
    finding_id: 2026-10-24-openclaw-main-adds-an-invitation-bound-guest-welcome-endpoint-without-a-model-run
    last_verified: 2026-10-24
    status: active
  - id: install-channel-snapshot
    finding_id: 2026-10-24-openclaw-stable-package-and-linux-delivery-now-both-select-2026-10
    last_verified: 2026-10-24
    status: active
posture_basis:
  capability:
    - 2026-10-24-openclaw-workshop-replaces-proposal-review-with-direct-edits-and-bounded-undo-history
    - 2026-10-24-openclaw-cli-tool-catalog-changes-now-invalidate-stale-native-sessions
    - 2026-10-24-openclaw-directed-sends-no-longer-require-direct-access-to-another-agent-s-transcript
    - 2026-10-24-openclaw-model-discovery-and-worker-inference-reduce-manually-maintained-provider-wiring
    - 2026-10-24-openclaw-same-conversation-scheduled-continuations-re-admit-the-original-operator-authority
  accessibility:
    - 2026-10-13-openclaw-quick-start-shortens-consent-while-usable-ai-access-remains-a-prerequisite
    - 2026-10-24-openclaw-x-mentions-and-normal-public-thread-links-reached-stable
    - 2026-10-24-openclaw-browser-pairing-uses-a-private-file-instead-of-credential-bearing-process-arguments
    - 2026-10-24-openclaw-main-adds-an-invitation-bound-guest-welcome-endpoint-without-a-model-run
    - 2026-10-24-openclaw-stable-package-and-linux-delivery-now-both-select-2026-10
  governance:
    - 2026-09-21-openclaw-defaults-widened-agent-reach-several-times-each-on-a-named-stable
    - 2026-10-13-openclaw-discord-and-slack-accept-bot-authored-messages-by-default-from-2026-9
    - 2026-10-13-openclaw-workspace-file-tools-use-root-handles-while-residual-raw-path-migration-stays-open
    - 2026-10-24-openclaw-stable-now-requires-the-october-patched-node-runtime
    - 2026-10-24-openclaw-final-argument-approval-binding-reached-both-stable-lines
    - 2026-10-24-openclaw-stable-rejects-old-telegram-imports-instead-of-replaying-them-as-fresh-work
    - 2026-10-24-openclaw-the-new-stable-train-no-longer-enables-the-profile-s-native-compaction-defaults
    - 2026-10-24-openclaw-extended-stable-advanced-to-september-and-lost-its-narrower-default-distinction
    - 2026-10-24-openclaw-slack-and-discord-room-policy-binding-is-fixed-in-beta-not-stable-10
    - 2026-10-24-openclaw-main-adds-gateway-owned-exec-review-for-cloud-workers
    - 2026-10-24-openclaw-bash-predicates-still-bypass-exec-allowlist-review-on-all-three-published-channels
    - 2026-10-24-openclaw-sandboxed-cron-and-delegated-children-need-api-models-until-host-cli-guards-ship
    - 2026-10-24-openclaw-headless-agent-exec-dispatches-blocking-policy-hooks-from-stable-10
    - 2026-10-24-openclaw-known-incompatible-external-codex-runtime-plugins-are-refused-before-serving-turns
    - 2026-10-24-openclaw-main-warns-when-mutable-sender-names-select-privileged-tool-policies
    - 2026-10-24-openclaw-workshop-retirement-requires-manual-migration-of-proposal-integrations-and-old-backups
stance:
  use_for: '<a href="#learning">Owner-operated chat agent work with reversible procedures and selected specialist handoffs.</a>'
  avoid_for: '<a href="#execution-boundary">Sandbox-dependent work routed through host CLIs, unchecked POSIX exec, or unrelated tenants sharing a Gateway.</a>'
  watch_next: '<a href="#what-is-unresolved">Published exec and placement repairs, stable room-ID binding, and recorded worker approval and guest invitation trials.</a>'
---

# OpenClaw

In stable 2026.10.7, [Workshop edits learned procedures immediately instead of staging proposals for approval](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md). [Versioned Undo lets the owner reverse an edit](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md); it does not put review back before a procedure can guide a new session.

OpenClaw's [self-hosted Gateway connects chats to agents and their tools](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/start/getting-started.md).

## Where it stands, 2026-10-24

Upgrade priorities: [check the service's Node runtime](https://github.com/openclaw/openclaw/blob/v2026.10.7/package.json), [review Workshop's switch to immediate edits](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md), and select API-backed models for [sandboxed scheduled](https://github.com/openclaw/openclaw/commit/7abbf8507aa2fc52952621a497ece0e019b2748e) or [delegated work](https://github.com/openclaw/openclaw/commit/a19f1bf9eb6e5b22343c144a387a945d2cbc3525). [Legacy Workshop proposal and curator integrations need migration](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md#L245-L260); [provider compaction settings](https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/anthropic-payload-policy.ts#L67-L107) need [explicit review](https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/openai-responses-payload-policy.ts#L204-L225).

**Channel snapshot.** Install [stable 2026.10.7](https://github.com/openclaw/openclaw/releases/tag/v2026.10.7) with `npm i -g openclaw@2026.10.7`. Check the service's Node runtime against [`>=24.22.1 <25 || >=26.12.1`](https://github.com/openclaw/openclaw/blob/v2026.10.7/package.json), not just the shell's runtime. At 10:38 UTC on 24 October 2026, [npm's beta selected 2026.10.10-beta.3 and extended-stable selected 2026.9.33](https://registry.npmjs.org/-/package/openclaw/dist-tags). The [exec and placement limits below](#execution-boundary) still matter after updating.

Release boundaries: [Slack room-ID binding](https://github.com/openclaw/openclaw/commit/803744916a8f168a7c82e346bf6d37065a04780f) and [Discord room-ID binding](https://github.com/openclaw/openclaw/commit/68c3f3fb660c5dd808231199b0fe265ea26086f2) repairs are [beta-only](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.3). [Predicate exec repairs](https://github.com/openclaw/openclaw/commit/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8), [host-CLI placement](https://github.com/openclaw/openclaw/commit/7abbf8507aa2fc52952621a497ece0e019b2748e) [guards](https://github.com/openclaw/openclaw/commit/a19f1bf9eb6e5b22343c144a387a945d2cbc3525), [cloud-worker exec review](https://github.com/openclaw/openclaw/commit/db38f86b6d086631347af055d2bc87a653b7e8c8), [guest welcome sessions](https://github.com/openclaw/openclaw/commit/280c7c7d494a796cc870fbd794088b84df1e53dc), and [the Windows restore-startup timeout repair](https://github.com/openclaw/openclaw/commit/071f27c2b58ce383e1a70f71b6fec66461261cb8) remain only on main, the development branch. [X guest admission and automatic work-session publication are off by default](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/channels/x.md); [Anthropic server compaction](https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/anthropic-payload-policy.ts#L67-L107) and [manual OpenAI endpoint compaction require opt-in](https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/openai-responses-payload-policy.ts#L204-L225).

<a id="execution-boundary"></a>

**Restrict shell execution: [some Bash tests can run commands without approval](https://github.com/openclaw/openclaw/commit/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8).** [Stable 2026.10.7 still treats argument-blind predicates as safe builtins](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/exec-safe-builtins.ts): [command substitution inside a quoted `test -v` operand can run without its allowlist match or on-miss approval](https://github.com/openclaw/openclaw/commit/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8). The [repair is main-only](https://github.com/openclaw/openclaw/commit/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8); [beta 2026.10.10-beta.3](https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/src/infra/exec-safe-builtins.ts) and [extended 2026.9.33](https://github.com/openclaw/openclaw/blob/v2026.9.33/src/infra/exec-safe-builtins.ts) retain the gap. Exclude those forms from admitted work and restrict exec or host exposure. Asking adversarial input to behave is not enforcement.

**Select API-backed models for sandboxed delegated work.** [The documented spawn restrictions remain available at 2026.10.7](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/security/tool-permissions.md#L117-L137). For sandboxed scheduled or delegated work, explicitly select an embedded/API-backed model. Check inherited subagent models, fallbacks, and runtime overrides. Main adds guards against routing that work to a host-executed CLI; [stable 2026.10.7 and beta 2026.10.10-beta.3 do not contain those guards](https://github.com/openclaw/openclaw/commit/a19f1bf9eb6e5b22343c144a387a945d2cbc3525). [A sandbox classification or `sandbox: require` is not proof that these CLI paths run inside the container](https://github.com/openclaw/openclaw/commit/7abbf8507aa2fc52952621a497ece0e019b2748e).

Check `agents.entries.<id>.subagents.model`, `agents.defaults.subagents.model`, and scheduled payload models, not just the parent's primary model. [Main rejects the incompatible placement rather than containerizing the CLI](https://github.com/openclaw/openclaw/blob/a19f1bf9eb6e5b22343c144a387a945d2cbc3525/src/agents/command/attempt-sandbox-cli-admission.ts).

<a id="learning"></a>

**Choose immediate learning or manual initiation.** [Background learning defaults to `auto`, and Workshop retains ten versions per skill](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md).

Set [`skills.workshop.autonomous.mode: "off"` when learning must be initiated manually](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md). Otherwise, review the change feed, test Undo, and keep backups beyond its bounded history. [Learned skills bypass ordinary per-agent skill allowlists](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md); Undo does not decide which procedures deserve to stay.

**Migrate the old Workshop review machinery.** [Legacy `propose` becomes `off`, approval settings disappear, and old `auto` plus pending approval is not silently disabled](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/doctor/shared/legacy-config-migrations.runtime.skills.ts). Update integrations: [proposal/curator methods return errors, proposal hooks are removed, and exported pending drafts are not loaded automatically](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md#L245-L260). Copy needed content from [old collection backups manually](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md#L245-L260).

**Use stable to bind approval to final plugin arguments.** [Stable 2026.10.7 requires renewed approval when a plugin changes already-approved parameters, or blocks the call](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436); [extended 2026.9.33 carries the same repair](https://github.com/openclaw/openclaw/blob/v2026.9.33/src/agents/agent-tools.before-tool-call.policy.ts#L330-L436). Test transforming plugins with their final arguments before continuing to use them.

**Test headless policy separately.** Stable now [initializes blocking plugin hooks under `openclaw agent exec`, where they could previously be skipped](https://github.com/openclaw/openclaw/commit/f33247464b02bd0bd04a215158a24150ac1f003a). Try a harmless denied operation through that command; [a passing Gateway test does not check standalone dispatch](https://github.com/openclaw/openclaw/commit/f33247464b02bd0bd04a215158a24150ac1f003a).

<a id="chat-policy"></a>

**Key privileged chat policy by stable IDs.** Stable still [matches Slack room names](https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/slack/src/group-policy.ts#L81-L95) and [Discord room names](https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/discord/src/group-policy.ts#L44-L62). [Slack room-ID binding](https://github.com/openclaw/openclaw/commit/803744916a8f168a7c82e346bf6d37065a04780f) and [Discord room-ID binding](https://github.com/openclaw/openclaw/commit/68c3f3fb660c5dd808231199b0fe265ea26086f2) are repaired in [beta 2026.10.10-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.3). Use channel IDs now. Separately, replace `name:`/`username:` sender overrides with `id:` keys: [a renamed sender can select another person's policy, and main only adds a warning](https://github.com/openclaw/openclaw/commit/16a3787ba105b71a72843941dcdf1c78634b752c). Use stable sender IDs on beta too.

**Grant specialist handoffs without opening every transcript.** Use [`agents.entries.<agentId>.tools.agentToAgent.send` for selected request-and-reply destinations while session visibility stays `agent`, `tree`, or `self`](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/sessions-and-subagents.md#L33-L103). Set collaboration permissions deliberately: [stable defaults to cross-agent access and all-session visibility](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/sessions-and-subagents.md#L25-L132), and [extended 2026.9.33 has the same broad defaults](https://github.com/openclaw/openclaw/blob/v2026.9.33/docs/gateway/config-tools/sessions-and-subagents.md). Set [`tools.agentToAgent.enabled: false` to block ordinary cross-agent access; owned native/ACP child sessions remain reachable under `tree` or `all` visibility](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/sessions-and-subagents.md#L25-L30). [A privileged recipient can still act or disclose information](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/sessions-and-subagents.md#L99-L103); keep unrelated operators on [separate Gateways and OS boundaries](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/security/trust-model.md#L55-L69).

**Try a scoped follow-up instead of another reminder.** [A new scheduled agent turn in its authenticated creator's exact conversation retains that authority and revalidates it on each occurrence](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/automation/cron-jobs/payloads.md#L98-L118). An [`at` continuation can call `next_check` to rearm itself; old jobs, guests, scripts, and other conversations gain no inferred authority](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/automation/cron-jobs/payloads.md#L98-L118). Before replacing the reminder loop, verify the target and revocation. Use the [API-backed placement above](#execution-boundary).

**Review Telegram recovery before reissuing work.** [Stable rejects legacy imports older than 24 hours as `stale-legacy-import`, including genuinely unprocessed old instructions](https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/telegram/src/telegram-ingress-spool-migration.ts). Decide which old instructions still deserve to run. Inspect migration warnings and pending work: [already-imported rows are not cleaned up](https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/telegram/src/telegram-ingress-spool-migration.ts#L155-L162).

**Configure provider-side conversation compaction explicitly after upgrading.** [Anthropic server compaction requires `params.anthropicServerCompaction: true`, direct API routing, and non-OAuth authentication](https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/anthropic-payload-policy.ts#L67-L107). [Manual OpenAI endpoint compaction requires `params.responsesCompactEndpoint: true`; budget-triggered use of that endpoint remains the default on public OpenAI Responses routes](https://github.com/openclaw/openclaw/blob/v2026.10.7/packages/ai/src/transports/openai-responses-payload-policy.ts#L204-L225).

**Update the external runtime plugin alongside the core.** [OpenClaw refuses known-incompatible versions of its external `@openclaw/codex` runtime](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/loader-runtime-candidate.ts#L245-L267), whose [OpenClaw plugin compatibility floor is 2026.9.7](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/official-runtime-plugins.ts#L19-L28). Use [`openclaw update repair` or `openclaw plugins update codex`, then restart the Gateway](https://github.com/openclaw/openclaw/commit/cada1bc0d9ac1c0120f5fbc63829db310648b3e7).

**Retest manual CLI session-reset workarounds.** In 2026.10.7, [a changed tool-name fingerprint invalidates the native CLI binding instead of resuming its stale catalog](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/cli-session.ts#L319-L328). Test the actual restart and tool-change sequence before keeping a workaround that discards useful continuity.

**Record where the Windows update failed.** Stable repairs [Windows junction recovery](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/plugin-generation-source-lookup.ts#L376-L424) and [scratch retirement](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/backup-scratch.ts#L169-L199), and [2026.10.7 adds activation and recovery repairs](https://github.com/openclaw/openclaw/blob/v2026.10.7/CHANGELOG/2026.10.7.md). Record the installed updater's version and the failed step. [The restore-startup timeout repair is still main-only](https://github.com/openclaw/openclaw/commit/071f27c2b58ce383e1a70f71b6fec66461261cb8); [transient database inspection contention calls for retry guidance](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/state/openclaw-database-preflight.messages.ts#L51-L65), not repeated restoration.

**Upgrade before browser pairing on shared hosts.** Stable [passes a private file path to the browser opener instead of a pairing URL another local OS user could read from process arguments](https://github.com/openclaw/openclaw/commit/fb08d790a901870455c35bc437dae2c9cc9bc523). Keep credential-bearing URLs out of shared logs too.

**Choose desktop downloads separately from the Gateway package.** [Linux has 2026.10.7 AppImage and DEB downloads](https://github.com/openclaw/openclaw/releases/tag/v2026.10.7), and [its updater pointer selected that version at 10:40 UTC on 24 October 2026](https://github.com/openclaw/openclaw/releases/download/v2026.10.7/latest.json). At that read, [2026.10.7 had no macOS DMG or ZIP](https://github.com/openclaw/openclaw/releases/tag/v2026.10.7); [2026.10.6 has macOS downloads](https://github.com/openclaw/openclaw/releases/tag/v2026.10.6).

**Decide what becomes public before enabling X replies.** Stable [supports admitted X mentions and public replies, with guest admission and automatic work-session publication off by default](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/channels/x.md). Inspect admission and API cost limits. [Published thread links expose later user messages and final answers to signed-out readers; redaction is best effort, and saved copies cannot be recalled](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/web/control-ui/sessions-and-sidebar.md#L339-L356). Check the transcript before publishing it.

**Pin model choices when reproducibility matters.** [OpenClaw can discover supported Claude and ChatGPT models without another core release](https://github.com/openclaw/openclaw/blob/v2026.10.7/CHANGELOG/2026.10.5.md). [Its Google API provider now defaults to Gemini 4 Argon](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/google.md#L11-L58). Evaluate the selected route and model before inheriting that default.

**Set shared-chat bot admission yourself.** [Discord admits bot messages by default under normal access and mention rules; `false` disables bot-triggered turns and `mentions` requires a mention](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/channels/discord/troubleshooting.md#L102-L108). [Slack additionally requires the bot in the room's allowlist or an explicit owner ID as a current member](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/channels/slack/access-control.md#L242-L248).

## What is unresolved

- A published version with the [exec and host-CLI guards](#execution-boundary), followed by recorded refusals on the affected predicate, scheduled, and child-run paths, would resolve those release questions. Stable room binding needs a released tag containing the [beta repairs above](#chat-policy), with rename/thread tests against the installed adapters.
- [Gateway-owned cloud-worker exec review remains on main](https://github.com/openclaw/openclaw/commit/db38f86b6d086631347af055d2bc87a653b7e8c8). Require a release and a recorded approve/deny/revoke sequence on the intended worker before relying on it. Keep a working placement; do not relax exec policy to force dispatch.
- [Invitation-bound guest welcome sessions are main-only](https://github.com/openclaw/openclaw/commit/280c7c7d494a796cc870fbd794088b84df1e53dc). A release and a fresh signed-in invitation trial covering role text, expiry, and retry would settle whether the whole flow works. For general onboarding, [Quick start auto-acknowledges a short warning while Custom retains fuller confirmation](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/onboard-guided-consent.ts#L50-L75); record both fresh-machine flows through their later screens.
- [Workspace-scoped read/write/edit tools use root-bound operations](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/agent-tools.read.ts#L1331-L1481). Complete workspace containment still needs the [residual raw-path audit](https://github.com/openclaw/openclaw/issues/114382) and race tests beyond those tools.
- To learn whether [direct Workshop learning](#learning) saves owner attention, repeat real tasks. Record completed outcomes, bad procedures, restoration success, and time spent reviewing and correcting them.

## Review date and evidence method

<div hidden aria-hidden="true" data-check-profile-legacy-heading>
## Profile hygiene
</div>

This profile stops at 2026-10-24. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the evidence contract.
