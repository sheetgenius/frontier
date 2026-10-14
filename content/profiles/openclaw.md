---
schema_version: bitter.frontier_profile.v0
profile_id: openclaw
label: OpenClaw
owner: OpenClaw
source_contract: sources/openclaw.yml
homepage: https://openclaw.ai
docs: https://docs.openclaw.ai/
tagline: "OpenClaw lets owners request configuration and credential changes through chat."
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
last_updated: 2026-10-13
last_full_review: 2026-10-13
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
    last_verified: 2026-10-13
    status: active
  - id: per-agent-message-restrictions
    finding_id: 2026-05-12-openclaw-agent-permissions-and-onboarding
    last_verified: 2026-10-13
    status: active
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
    last_verified: 2026-10-13
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
    last_verified: 2026-10-13
    status: active
  - id: operation-bound-grants
    finding_id: 2026-09-21-openclaw-approval-ux-grant-once-bind-to-the-operation-revoke-later
    last_verified: 2026-10-13
    status: active
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
    last_verified: 2026-10-13
    status: active
  - id: bot-input-default-on
    finding_id: 2026-10-13-openclaw-discord-and-slack-accept-bot-authored-messages-by-default-from-2026-9
    last_verified: 2026-10-13
    status: active
  - id: chat-setup-permission-mode
    finding_id: 2026-10-13-openclaw-chat-driven-configuration-follows-the-requesting-run-s-permission-mode
    last_verified: 2026-10-13
    status: active
  - id: hook-binding-beta-only
    finding_id: 2026-10-13-openclaw-hooks-can-rewrite-approved-arguments-on-stable-binding-is-fixed-only-in-beta
    last_verified: 2026-10-13
    status: active
  - id: qualification-and-node-updates
    finding_id: 2026-10-13-openclaw-seven-main-line-stables-shipped-with-distinct-release-qualification-omissions
    last_verified: 2026-10-13
    status: active
  - id: desktop-tool-search-and-compaction
    finding_id: 2026-10-13-openclaw-desktop-sharing-and-provider-compaction-remove-setup-and-summary-work
    last_verified: 2026-10-13
    status: active
  - id: workshop-autonomous-mode
    finding_id: 2026-10-13-openclaw-autonomous-workshop-maintenance-requires-its-own-approval-setting
    last_verified: 2026-10-13
    status: active
  - id: authority-inspection-and-chat-approvals
    finding_id: 2026-10-13-openclaw-authority-inspection-and-in-chat-approvals-became-easier-to-use
    last_verified: 2026-10-13
    status: active
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
    last_verified: 2026-10-13
    status: active
  - id: telegram-replay-beta-repair
    finding_id: 2026-10-13-openclaw-beta-3-prevents-stale-telegram-spool-imports-becoming-fresh-owner-turns
    last_verified: 2026-10-13
    status: active
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
    last_verified: 2026-10-13
    status: active
  - id: memory-turn-tool-isolation
    finding_id: 2026-10-13-openclaw-memory-saving-turns-retain-their-persistence-only-tool-boundary
    last_verified: 2026-10-13
    status: active
  - id: advisory-artifact-mapping
    finding_id: 2026-10-13-openclaw-wider-advisory-databases-published-older-openclaw-issues-during-the-window
    last_verified: 2026-10-13
    status: active
  - id: stable-security-repair-coverage
    finding_id: 2026-10-13-openclaw-stable-repaired-sandbox-revocation-and-credential-output-gaps-without-new-advisories
    last_verified: 2026-10-13
    status: active
  - id: workspace-operation-time-coverage
    finding_id: 2026-10-13-openclaw-workspace-file-tools-use-root-handles-while-residual-raw-path-migration-stays-open
    last_verified: 2026-10-13
    status: active
  - id: quick-start-consent-scope
    finding_id: 2026-10-13-openclaw-quick-start-shortens-consent-while-usable-ai-access-remains-a-prerequisite
    last_verified: 2026-10-13
    status: active
posture_basis:
  capability:
    - 2026-10-13-openclaw-chat-driven-configuration-follows-the-requesting-run-s-permission-mode
    - 2026-10-13-openclaw-desktop-sharing-and-provider-compaction-remove-setup-and-summary-work
    - 2026-10-13-openclaw-stable-2026-10-3-repairs-credentials-memory-and-post-compaction-turns
    - 2026-10-13-openclaw-memory-saving-turns-retain-their-persistence-only-tool-boundary
  accessibility:
    - 2026-10-13-openclaw-chat-driven-configuration-follows-the-requesting-run-s-permission-mode
    - 2026-10-13-openclaw-authority-inspection-and-in-chat-approvals-became-easier-to-use
    - 2026-10-13-openclaw-quick-start-shortens-consent-while-usable-ai-access-remains-a-prerequisite
  governance:
    - 2026-09-21-openclaw-defaults-widened-agent-reach-several-times-each-on-a-named-stable
    - 2026-09-21-openclaw-approval-ux-grant-once-bind-to-the-operation-revoke-later
    - 2026-10-13-openclaw-extended-stable-carries-the-august-approval-and-sandbox-fixes-with-narrower-defaults
    - 2026-10-13-openclaw-discord-and-slack-accept-bot-authored-messages-by-default-from-2026-9
    - 2026-10-13-openclaw-hooks-can-rewrite-approved-arguments-on-stable-binding-is-fixed-only-in-beta
    - 2026-10-13-openclaw-seven-main-line-stables-shipped-with-distinct-release-qualification-omissions
    - 2026-10-13-openclaw-autonomous-workshop-maintenance-requires-its-own-approval-setting
    - 2026-10-13-openclaw-incognito-content-is-excluded-from-four-diagnostic-writers-after-9
    - 2026-10-13-openclaw-memory-saving-turns-retain-their-persistence-only-tool-boundary
    - 2026-10-13-openclaw-wider-advisory-databases-published-older-openclaw-issues-during-the-window
    - 2026-10-13-openclaw-stable-repaired-sandbox-revocation-and-credential-output-gaps-without-new-advisories
    - 2026-10-13-openclaw-workspace-file-tools-use-root-handles-while-residual-raw-path-migration-stays-open
    - 2026-10-13-openclaw-beta-3-prevents-stale-telegram-spool-imports-becoming-fresh-owner-turns
stance:
  use_for: '<a href="#release-choice">Owner-operated agent work through a self-hosted chat Gateway.</a>'
  avoid_for: '<a href="#authority">Unrelated tenants sharing one Gateway.</a>'
  watch_next: '<a href="#what-is-unresolved">A stable tag containing the repair that makes approval cover plugin-rewritten tool arguments and the repair that stops old imported Telegram instructions from running as fresh work.</a>'
---

# OpenClaw

## What OpenClaw lets owners do

[OpenClaw is a self-hosted service that connects chats to agents and their tools; that service is called the Gateway](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/index.md).

[OpenClaw stable 2026.9.7 lets owners request configuration, credential storage and owned-skill changes in chat](https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md). [Full Access applies delegated changes automatically; restricted messaging runs return approval to the requesting chat](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L120-L143). The owner can delegate setup navigation while deciding which runs may change the Gateway.

## Where it stands, 2026-10-13

<a id="release-choice"></a>

### Release choice

**Pin stable 2026.10.3 for an owner-operated production Gateway.** Install the [13 October 2026 stable release](https://github.com/openclaw/openclaw/releases/tag/v2026.10.3) with `npm i -g openclaw@2026.10.3`, after checking [Node `>=24.16.0 <25 || >=26.1.0`](https://github.com/openclaw/openclaw/blob/v2026.10.3/package.json). This [self-hosted Gateway](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/start/getting-started.md) now [protects valid OAuth profiles during legacy-store cleanup, refuses lossy rewrites of malformed UTF-8 root memory and repairs the next turn after native compaction](https://github.com/openclaw/openclaw/blob/v2026.10.3/CHANGELOG/2026.10.3.md).

The same release retains fixes for [required HTTP sandboxing being skipped on new sessions](https://github.com/openclaw/openclaw/commit/fa92bd54c449b71a2104c292af5c2fe1ce112567), [registered Guest work surviving access revocation](https://github.com/openclaw/openclaw/commit/08f5fb80f301d8236cadb8acc853d95566fd7f10) and [credentials escaping masking across output chunks](https://github.com/openclaw/openclaw/blob/v2026.10.2/CHANGELOG/2026.10.2.md). [Memory-saving turns keep persistence-only tools through final assembly](https://github.com/openclaw/openclaw/commit/1a4c6b4d1a429ce152cb3ced1d87454ac19630b8), preventing housekeeping from regaining unrelated execution or MCP tools. Update for these repairs even when the advisory feed is quiet.

**Choose August extended-stable when narrower collaboration defaults matter.** Install [2026.8.35](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35) with `npm i -g openclaw@2026.8.35`. It documents [agent-to-agent messaging off and session visibility limited to the agent](https://github.com/openclaw/openclaw/blob/v2026.8.35/src/config/types.tools.ts#L505-L524). It inherits the [byte-bound exec approval](https://github.com/openclaw/openclaw/compare/ab5611f0...v2026.8.35), [symlink-then-`..` validation](https://github.com/openclaw/openclaw/compare/cc027149...v2026.8.35) and [child-tree termination](https://github.com/openclaw/openclaw/compare/fd8326c5...v2026.8.35) repairs. Before choosing it, [check later repair coverage](#what-is-unresolved).

Its [Node range is `>=22.22.3 <23 || >=24.15.0 <25 || >=25.9.0`](https://github.com/openclaw/openclaw/blob/v2026.8.35/package.json). It is [package-only and requires a foreground update](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/install/development-channels.md#L14-L18).

<a id="beta-only-repairs"></a>

### Beta-only repairs

**Remove argument-rewriting plugins you do not control.** [Stable 2026.10.3](https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.before-tool-call.policy.ts#L303-L411) and [extended-stable 2026.8.35](https://github.com/openclaw/openclaw/blob/v2026.8.35/src/agents/agent-tools.before-tool-call.policy.ts#L277-L405) allow ordinary `before_tool_call` hooks to replace arguments after trusted inline approval.

The [beta fix requires approval for the final replacement parameters or blocks the call](https://github.com/openclaw/openclaw/blob/v2026.10.5-beta.3/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436). Test transforming-hook compatibility on a separate Gateway with the [published prerelease](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3): `npm i -g openclaw@2026.10.5-beta.3`.

**Review pending Telegram work before recovery.** [Stable 2026.10.3 lacks the legacy-import repair](https://github.com/openclaw/openclaw/blob/v2026.10.3/extensions/telegram/src/telegram-ingress-spool-migration.ts#L69-L125). [Beta.3 marks imports older than 24 hours non-dispatchable](https://github.com/openclaw/openclaw/commit/84e5f5d130867647cf4b3677e778084b69f3b989), stopping old owner instructions from becoming fresh work. [It also forgoes genuinely unprocessed old instructions, and already imported rows remain](https://github.com/openclaw/openclaw/pull/170068). Inspect the queue and migration warning; the update is not a cleanup.

<a id="authority"></a>

### Authority

**Keep unrelated trust domains on separate Gateways.** In stable, [agent-to-agent messaging and all-session visibility are enabled by default](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-tools/sessions-and-subagents.md#L24-L38). Set [`tools.sessions.visibility` to `"agent"` or `"self"`](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-tools/sessions-and-subagents.md#L24-L38), [sender tool policies](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-tools/tool-policy.md#L230-L248) and [messaging and delegation limits](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/tool-permissions.md#L33-L121). Those controls [govern collaboration within one trust domain and do not isolate hostile tenants](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/trust-model.md#L55-L68).

**Set bot admission before updating a shared chat.** [From 2026.9.7, omitted Discord and Slack `allowBots` means `true`, including on upgraded installations](https://github.com/openclaw/openclaw/commit/b078de41c413403542f847ac484c42d904b9fbaf). Choose [`false` to exclude bot turns or `"mentions"` to require a mention](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/discord/troubleshooting.md#L103-L108). [Slack room messages additionally require the bot in the room's allowlist or an explicit owner as a current room member](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/slack/access-control.md#L242-L248). Check the setting yourself: [the audit catalog has no dedicated allowBots check](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/audit-checks.md#L140-L147).

**Keep chat setup in restricted runs.** [Use the button or `/approve`; a typed yes cannot authorize the request](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L120-L143). [Filesystem, sandbox, tool, route and live-authority checks still apply](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L133-L137). Use masked credential setup: [a pasted key already reached the provider and transcript](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L168-L184).

**Put autonomous skill editing behind review.** [Workshop is OpenClaw's skill-maintenance system](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/self-learning.md#L127-L180). Set [`skills.workshop.autonomous.mode: "propose"` or `"off"` alongside `skills.workshop.approvalPolicy: "pending"`](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/skill-workshop/configuration.md#L68-L84). [Pending alone controls proposal decisions](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/skill-workshop/configuration.md#L68-L84). By default, [autonomous `"auto"` edits directly with inherited permissions and no automatic rollback snapshots](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/self-learning.md#L127-L180); back up the Workshop directory if you keep that mode. [`"off"` stops autonomous maintenance while explicit manual skill work remains available](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/self-learning.md#L127-L180). The [autonomous default predates this window](https://github.com/openclaw/openclaw/blob/v2026.9.5/docs/tools/skill-workshop/configuration.md).

**Inspect the session before granting routine automation.** Use [`openclaw exec-policy show --agent <id> --session <existing-session-key> --verbose`](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/approvals.md#L210-L273). [Without `--session`, inspection is offline; even a live preview may be cached and does not guarantee execution](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/approvals.md#L210-L273). For Gateway-hosted cron runs, [standing grants bind the exact agent, job definition and operation and are rechecked before spawn](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/exec-approvals.md#L554-L589). Use that scope to avoid repeated approvals without authorizing every later command.

**Set the fleet's update cadence yourself.** The [2026.10.3 release reports Telegram beta E2E not supplied and Android APK production skipped](https://github.com/openclaw/openclaw/releases/tag/v2026.10.3). Read its qualification block before rollout. Eligible [packaged headless nodes check hourly, apply while idle and allow at least 12 hours between activations](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/nodes/node-host.md#L177-L191). To control updates, [opt out with `nodeHost.autoUpdate.enabled: false` or `OPENCLAW_NO_AUTO_UPDATE=1`; extended-stable is excluded from this automation](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/nodes/node-host.md#L177-L191).

**Review retained Incognito logs if diagnostics were enabled.** The [2026.9.7 repair excludes Incognito model content from cache traces, Anthropic payload logs, raw-stream logs and WebSocket event summaries](https://github.com/openclaw/openclaw/commit/21aa89f744af426d1c9b1d5d7d40960abf1e7465). [Existing logs remain, and the repair does not establish external-provider privacy](https://github.com/openclaw/openclaw/pull/155595). An upgrade cannot replace a retention decision.

**Match scanner exceptions to the installed package or device.** Wider databases recorded older disclosures, including [channel target-allowlist bypasses](https://github.com/advisories/GHSA-g7fw-3gjp-g5hf) and [attachment reads outside sender policy under a different global GHSA ID](https://github.com/advisories/GHSA-m2g4-5ff5-4cf5). Check the affected package and backported mechanism before waiving an alert. [iOS before 2026.8.11 logged bearer deep-link keys that could authorize forged requests](https://github.com/openclaw/openclaw/security/advisories/GHSA-5j57-84cx-r295). Check the phone version and rotate exposed keys separately from a Gateway update.

**Before relying on the default, choose which paired desktops may be shared.** [Sharing defaults on but needs an existing node-local RFB server; it does not enable macOS Screen Sharing](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/config-browser-ui-desktop.md#L336-L355).

**Choose which model connections may use provider-side conversation summaries.** [OpenClaw defaults to native compaction for manual `/compact` without focus on public OpenAI Responses routes](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/openai/advanced.md#L337-L341); [focused requests, provider-confirmed overflow and endpoint failures retain client summaries](https://github.com/openclaw/openclaw/commit/6015e98d907837b45058f04f01694eaa7eab3ce4). [OpenClaw enables Anthropic server compaction by default for supported models on direct `api.anthropic.com` API-key routes](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/anthropic.md#L889-L913). Opt out with [`params.responsesCompactEndpoint: false`](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/openai/advanced.md#L337-L341) or [`params.anthropicServerCompaction: false`](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/providers/anthropic.md#L889-L913) if you need client summaries.

<a id="what-is-unresolved"></a>

## What is unresolved

- For the [beta-only repairs](#beta-only-repairs), wait for a published stable tag and inspect its final-argument approval policy and legacy Telegram importer before rollout.
- [With workspace-only restrictions enabled, read and edit tools use handles tied to the permitted root; writes also check authority at that root](https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.read.ts#L1362-L1495). Coverage beyond those tools remains unverified. Audit and replace [remaining raw-path consumers that rely on `assertSandboxPath` as their final safety boundary](https://github.com/openclaw/openclaw/issues/114382) before relying on complete workspace containment.
- Later repair coverage remains unverified on extended-stable. In the [2026.8.35 release tree](https://github.com/openclaw/openclaw/tree/v2026.8.35), inspect the code that enforces HTTP sandboxing, stops revoked Guest work and masks credential output. Check the backported behavior rather than requiring the original main-branch commit.
- To check first-run authority disclosure, record fresh-machine Quick start and Custom flows, including later screens. The specified [Quick start path auto-acknowledges a short warning; Custom retains full confirmation](https://github.com/openclaw/openclaw/blob/v2026.10.3/src/commands/onboard-guided-consent.ts#L50-L75). Choose Custom for that full step; later screens' defaults remain unknown.

## Profile hygiene

This profile stops at 2026-10-13. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the evidence contract.
