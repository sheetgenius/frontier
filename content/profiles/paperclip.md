---
schema_version: bitter.frontier_profile.v0
profile_id: paperclip
label: Paperclip
owner: Paperclip
source_contract: sources/paperclip.yml
homepage: https://paperclip.ing/
docs: https://docs.paperclip.ing/
tagline: "Paperclip lets agents run and configure more work; set their authority before dispatch."
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
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: plaintext-credentials
    finding_id: 2026-09-21-paperclip-v2026-916-0-agent-apis-stopped-returning-plaintext-credentials-including-to-the-agent-itse
    last_verified: 2026-10-13
    status: active
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
    last_verified: 2026-10-13
    status: active
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
    last_verified: 2026-10-13
    status: active
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
    last_verified: 2026-10-13
    status: active
  - id: node-install-guide-defect
    finding_id: 2026-10-13-paperclip-docs-now-cover-v2026-1012-0-but-the-vps-node-command-violates-the-engine-floor
    last_verified: 2026-10-13
    status: active
  - id: scoped-grant-and-gateway-fixes
    finding_id: 2026-10-13-paperclip-certain-scoped-tools-use-grants-could-authorize-tools-outside-their-restrictions-until-v20
    last_verified: 2026-10-13
    status: active
  - id: sqlite-lock-upgrade-drain
    finding_id: 2026-10-13-paperclip-v2026-1012-0-requires-a-writer-drain-earlier-integration-migrations-are-conditional
    last_verified: 2026-10-13
    status: active
  - id: coding-full-auto-defaults
    finding_id: 2026-10-13-paperclip-v2026-1001-0-defaults-native-acpx-native-opencode-and-legacy-coding-paths-to-full-auto
    last_verified: 2026-10-13
    status: active
  - id: new-agent-grants-and-hiring
    finding_id: 2026-10-13-paperclip-v2026-1012-0-gives-new-standard-agents-14-grants-including-unscoped-tool-use
    last_verified: 2026-10-13
    status: active
  - id: chat-confirmation-resolver
    finding_id: 2026-10-13-paperclip-v2026-1005-0-lets-an-agent-record-a-user-chat-reply-as-a-confirmation-decision
    last_verified: 2026-10-13
    status: active
  - id: aggregator-and-api-availability
    finding_id: 2026-10-13-paperclip-v2026-1005-0-forced-mcp-aggregators-on-and-enabled-native-api-tools-by-default
    last_verified: 2026-10-13
    status: active
  - id: grok-full-auto-correction
    finding_id: 2026-10-13-paperclip-correction-grok-always-approve-stayed-on-when-paperclip-removed-the-dontask-default
    last_verified: 2026-10-13
    status: active
  - id: assistant-mcp-human-consent
    finding_id: 2026-10-13-paperclip-v2026-1012-0-ships-flag-off-assistant-mcp-connections-acting-as-a-real-signed-in-user
    last_verified: 2026-10-13
    status: active
  - id: managed-browser-work
    finding_id: 2026-10-13-paperclip-v2026-1005-0-adds-managed-paid-website-work-through-browser-use-cloud
    last_verified: 2026-10-13
    status: active
  - id: persistent-files-without-new-revisions
    finding_id: 2026-10-13-paperclip-v2026-1005-0-persists-agent-files-but-new-writes-omit-prior-content-revisions
    last_verified: 2026-10-13
    status: active
  - id: short-instructions-unmeasured
    finding_id: 2026-10-13-paperclip-paperclip-cut-default-role-and-planning-instructions-without-a-completed-live-comparison
    last_verified: 2026-10-13
    status: active
  - id: beta-human-operator-seeding
    finding_id: 2026-10-13-paperclip-beta-widens-human-operator-authority-and-tightens-budget-accounting-with-conditional-unpri
    last_verified: 2026-10-13
    status: active
  - id: beta-ledger-unpriced-policy
    finding_id: 2026-10-13-paperclip-beta-widens-human-operator-authority-and-tightens-budget-accounting-with-conditional-unpri
    last_verified: 2026-10-13
    status: active
  - id: stable-budget-warning-display
    finding_id: 2026-10-13-paperclip-stable-soft-budget-warnings-look-like-stopped-work-the-wording-fix-is-canary-only
    last_verified: 2026-10-13
    status: active
  - id: personal-app-consent-at-use
    finding_id: 2026-10-13-paperclip-v2026-1005-0-defers-optional-personal-app-consent-until-the-tool-is-used
    last_verified: 2026-10-13
    status: active
  - id: worker-version-compatibility
    finding_id: 2026-10-13-paperclip-v2026-1012-0-requires-a-writer-drain-earlier-integration-migrations-are-conditional
    last_verified: 2026-10-13
    status: active
posture_basis:
  capability:
    - 2026-06-23-paperclip-heartbeat-preflight-budget-caps
    - 2026-10-13-paperclip-v2026-1001-0-defaults-native-acpx-native-opencode-and-legacy-coding-paths-to-full-auto
    - 2026-10-13-paperclip-v2026-1012-0-gives-new-standard-agents-14-grants-including-unscoped-tool-use
    - 2026-10-13-paperclip-paperclip-cut-default-role-and-planning-instructions-without-a-completed-live-comparison
    - 2026-10-13-paperclip-v2026-1005-0-persists-agent-files-but-new-writes-omit-prior-content-revisions
    - 2026-10-13-paperclip-v2026-1012-0-ships-flag-off-assistant-mcp-connections-acting-as-a-real-signed-in-user
    - 2026-10-13-paperclip-v2026-1005-0-adds-managed-paid-website-work-through-browser-use-cloud
    - 2026-10-13-paperclip-v2026-1005-0-defers-optional-personal-app-consent-until-the-tool-is-used
  accessibility:
    - 2026-10-13-paperclip-v2026-1012-0-ships-flag-off-assistant-mcp-connections-acting-as-a-real-signed-in-user
    - 2026-10-13-paperclip-docs-now-cover-v2026-1012-0-but-the-vps-node-command-violates-the-engine-floor
    - 2026-10-13-paperclip-v2026-1005-0-defers-optional-personal-app-consent-until-the-tool-is-used
  governance:
    - 2026-06-23-paperclip-heartbeat-preflight-budget-caps
    - 2026-10-13-paperclip-certain-scoped-tools-use-grants-could-authorize-tools-outside-their-restrictions-until-v20
    - 2026-10-13-paperclip-v2026-1012-0-gives-new-standard-agents-14-grants-including-unscoped-tool-use
    - 2026-10-13-paperclip-v2026-1005-0-lets-an-agent-record-a-user-chat-reply-as-a-confirmation-decision
    - 2026-10-13-paperclip-v2026-1005-0-forced-mcp-aggregators-on-and-enabled-native-api-tools-by-default
    - 2026-10-13-paperclip-v2026-1012-0-requires-a-writer-drain-earlier-integration-migrations-are-conditional
    - 2026-10-13-paperclip-v2026-1005-0-persists-agent-files-but-new-writes-omit-prior-content-revisions
    - 2026-10-13-paperclip-beta-widens-human-operator-authority-and-tightens-budget-accounting-with-conditional-unpri
    - 2026-10-13-paperclip-stable-soft-budget-warnings-look-like-stopped-work-the-wording-fix-is-canary-only
stance:
  use_for: "Teams coordinating multiple agents who want durable tasks, owned connections and assistant handoffs, and will set tool, hiring and provider-permission boundaries before dispatch."
  avoid_for: "Relying on defaults to require human approval for tools or hiring; upgrading with old writers still active; audits that depend on Paperclip recovering every prior instruction file."
  watch_next: "Watch <a href='#open-questions'>Operator permissions and accounting repairs reaching stable, plus live tests of shorter manuals and browser recovery</a>."
---

# Paperclip

Paperclip [coordinates multiple agents, their tasks, tool connections and approvals](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/README.md#L87-L145).
Newly activated standard agents [receive broad tool-use permissions](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28), [hiring approval defaults off](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/companies.ts#L18-L20), and [several coding adapters skip approval prompts by default](https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L48-L136). Before dispatching work, review those defaults.

## Where it stands, 2026-10-13

**Pin stable. Plan the shutdown before upgrading.** At the close of 13 October 2026,
stable is [v2026.1012.0, published 12 October 2026](https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0).
[Drain and stop every old server and worker writing to the instance root, including other hosts and containers, before upgrade or rollback. Preserve the new `.lock.sqlite` files; the writer protocols must not coexist there](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/workspace-restore-locks.md#L42-L52).
[For an existing instance, preserve unfinished-run evidence, move leftover legacy lock directories outside the lock root after all writers stop, and restart every writer on the new version. Verify that the agent can complete an interaction with its coding provider and that its files are collected and restored correctly](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/workspace-restore-locks.md#L42-L52).

For a fresh installation, pin the
[documented onboarding command](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/README.md#L350-L356)
as `npx paperclipai@2026.1012.0 onboard --yes` on [Node 24.11.0 or newer](https://registry.npmjs.org/paperclipai/2026.1012.0).
Skip the guide's contradictory [Node 20 VPS command](https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/guides/getting-started/installation.md#L197-L217).

See [the preview release questions](#open-questions) before adopting a preview.

**Audit past tool calls, then repair rejected grants.** Certain scoped
`tools:use` grants [could authorize calls outside their restrictions](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/tool-access-policy.ts#L673-L680) from
[v2026.720.0](https://github.com/paperclipai/paperclip/blob/v2026.720.0/server/src/services/tool-access-policy.ts#L669-L675)
through [v2026.1005.0](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/tool-access-policy.ts#L673-L680).
The fix [requires a supplied allow list to match along with additional restrictions](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L731-L761)
and [binds native MCP assignments to their agent owner](https://github.com/paperclipai/paperclip/commit/c46e41e81c03cd3c8b64cf993615b604d7fe8c62).
Compare stored allow lists, combined selectors and malformed restrictions with
actual tool-audit calls to check your instance's exposure. Repair a rejected
grant before widening access.

**Rotate credentials exposed by older installs.** If you ran before
v2026.916.0, rotate affected plain environment credentials:
[agent API responses could expose them](https://github.com/paperclipai/paperclip/releases/tag/v2026.916.0).

**Scope new agents before dispatching work.** Newly activated standard agents
[get fourteen setup and tool grants, including unscoped `tools:use` and connection management](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28).
[Pending agents wait for activation; low-trust and built-in agents are excluded, and existing agents are not backfilled](https://github.com/paperclipai/paperclip/commit/a1ab55a56d3d535931efb18fc6b5e6f13b5fcdbd).
After connection access and applicable policy checks, [an explicit tool-use grant wins before tool-profile exclusions](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L1466-L1480).
If a profile should restrict access, remove or scope the broad grant, or use
block/require-approval policies.
[One nonmatching grant does not veto other grants](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L1201-L1215).

**Require human approval before agents create more agents.** New non-low-trust agents
[can hire unless overridden](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L69-L76),
and [hire approval defaults off](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/companies.ts#L18-L20).
Enable `requireBoardApprovalForNewAgents` or set `canCreateAgents: false`.

**The upgrade can remove prompts without narrowing authority.** Since v2026.1001.0,
missing settings choose [approve-all for native ACPX and allow for native OpenCode](https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L48-L136).
Set the coding harness and company connection-tool grants separately before dispatch. The operating bet is to spend attention defining authority up front, then checking completed work. Judge it by outcomes, spend and human interventions; these receipts do not establish an end-to-end gain.
Use [`opencodePermissionMode: ask` for native OpenCode prompts](https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L80-L84).
[Native ACPX's `approve-reads` allows assigned Paperclip read tools; other operations stop with an approval-required message because there is no interactive approval handler](https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapter-utils/src/paperclip-runner-permissions.ts#L124-L129).

Legacy Codex [defaults to bypassing approvals and its sandbox unless explicit sandbox, profile, approval or network restrictions suppress that default; opt out with `dangerouslyBypassApprovalsAndSandbox: false`](https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapters/codex-local/src/server/codex-args.ts#L53-L80). For legacy
[Claude remote/root paths](https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapters/claude-local/src/server/permissions.ts#L7-L23)
and [OpenCode](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/opencode-local/src/server/runtime-config.ts#L105-L117),
use `dangerouslySkipPermissions: false`. Native Codex [selects a separate filesystem profile and network setting](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/paperclip-runner/src/drivers/codex/codex-security-config.ts#L225-L246).

Legacy Grok's [`alwaysApprove` already defaults true](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/grok-local/src/server/execute.ts#L266-L273);
[set it false to stop the adapter adding `--always-approve`](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/adapters/grok-local/src/server/execute.ts#L555-L556).

**Apply advice to the worker you actually run.** Stable declares
[Codex 0.160.0 and Claude Code 2.1.286 pins; remote Codex supports >=0.149.0 and <0.161.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0).
Record worker/image identity and check adapter compatibility before applying
standalone harness advice. A declared pin does not prove which version is running.

**A person can answer while the agent records the decision.** The
[default `anyone` resolver](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/issue_thread_interactions.ts#L25-L32)
lets the active responding agent [interpret the latest post-card user reply and resolve an ordinary confirmation as itself](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/confirmation-comment-resolution.ts#L12-L96).
Use [`human_only`; `not_creator` can still admit another agent](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/issue-thread-interaction-resolution.ts#L158-L297).
Keep spending, hiring and tool authorization on their dedicated approval controls.

**Use connection policy to control tool access.** MCP
aggregators [remain available even with an old false setting](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/instance-settings.ts#L232-L236).
Use connection access and tool policies. Set
[`PAPERCLIP_RUNNER_API_TOOLS_ENABLED=false` to keep native API tools off](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/native-runtime/runner-api-rollout.ts#L1-L13).
Optional personal apps [wait for the responsible user's consent at invocation, so unrelated work need not wait for every account to connect](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/GENERIC-REMOTE-MCP.md#L65-L80).

**Check the run before lifting a budget cap.** Stable
[soft-warning cards use paused-work wording](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/ui/src/components/BudgetIncidentCard.tsx).
Check the incident type and actual run state. Stable's
[preflight checks still stop blocked queued runs before provider execution](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/heartbeat.ts#L17425-L17451).

**Try assistant handoffs in a test company.** Stable's
[Assistant MCP connections ship off by default](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/shared/src/feature-catalog.ts#L116-L122).
Enable them on an [authenticated deployment with real users and a suitable public origin, using HTTPS except on loopback](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/public-mcp.md#L29-L39). Authorize the client for the selected company:
[read-only consent cannot delegate; write consent can create durable work](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/public-mcp.md).
[Revocation stops future calls without cancelling work already delegated](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/public-mcp.md).

**Try paid browser work with an explicit per-run cap.** Authorize the
[browser profile, its saved authenticated sessions and the per-run cost cap](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/BROWSER-USE.md#L18-L24)
and try a harmless website task. Check provider-confirmed cancellation:
[closing the tab does not immediately stop provider work](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/BROWSER-USE.md#L79-L86).
Inspect an [uncertain paid start before replacing it](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/BROWSER-USE.md#L70-L77).

**Snapshot instructions when recovery matters.** Managed agent files
[persist across tasks, but new writes omit prior-content revisions; old history rows remain](https://github.com/paperclipai/paperclip/commit/3ca196b0a642aa21b8feba1fcd89edb53d1c622e).
The [activity log retains attribution and editor-save hashes, not every prior file body](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-file-store.ts#L175-L284). Keep directory copies before consequential work.

<h2 id="open-questions">What is unresolved</h2>

- **Inspect permissions for people with the Operator role before adopting beta.** Published
  [beta 2026.1012.1-beta.0](https://registry.npmjs.org/paperclipai/2026.1012.1-beta.0) and [nightly 2026.1013.0-nightly.0](https://registry.npmjs.org/paperclipai/2026.1013.0-nightly.0)
  [expand their preset to fourteen grants and let startup and Cloud sign-in seeding add missing grants to existing Operators](https://github.com/paperclipai/paperclip/commit/582911ba74350dbe9029eb132d69a257edd9d26a).
  Remove unwanted configuration or connection administration access.
  A stable tag containing the change and before/after member-grant results must
  show who gains authority in a stable migration.
- **Reconcile spending before trusting the accounting repair.** [Beta](https://registry.npmjs.org/paperclipai/2026.1012.1-beta.0) and [nightly](https://registry.npmjs.org/paperclipai/2026.1013.0-nightly.0) carry the accounting repair. Its
  [ledger adds durable recovery, receipt deduplication and exact-cents accounting](https://github.com/paperclipai/paperclip/commit/799e4d556f5c1bc17b398147c7e0abff91446de0).
  The Operator permission expansion and accounting repair are [outside stable](https://github.com/paperclipai/paperclip/compare/v2026.1012.0...4a641d0980fdaffc4c4e805f6f0a8809eb5702f2).
  Reconcile affected stable runs against provider charges to see whether your
  stable spending was affected. Leave margin.
  [Unpriced usage blocks only under applicable active, positive-amount policies with hard stops enabled and `unpricedUsagePolicy: block`](https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/services/budgets.ts#L224-L230).

  A stable tag containing the change, provider-reconciled interrupted/retried
  runs and priced/unpriced admission tests must show how migration behaves. The separate [warning-card wording fix](https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9)
  is canary-only at the cutoff, in [2026.1013.0-canary.16](https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16).
  Confirm delivery with a stable tag containing the fix and soft/hard incident UI checks.
- **Keep established procedure until shorter manuals justify removing it.** Selected
  [role and planning defaults got shorter; saved manuals stay unchanged](https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0).
  The coordination skill grew from [7,626](https://github.com/paperclipai/paperclip/blob/v2026.916.1/skills/paperclip/SKILL.md)
  to [8,584 words](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/skills/paperclip/SKILL.md),
  while the [comparison recorded zero provider runs and no behavioral grade](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/plans/2026-10-05-plan-task-guidance.md#L44-L85).
  Compare quality, spend and human intervention in a matched live old-versus-short
  manual trial, recording outcomes and failures.
- **Test browser lifecycle controls before expanding the trial.** The
  [vendor records a basic live Browser Use journey](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/BROWSER-USE.md#L171-L186).
  Provider-backed revocation, restart and approval tests must show what happens
  beyond that journey.

## Profile hygiene

This profile stops at 2026-10-13.
See [METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md)
for the evidence contract.

