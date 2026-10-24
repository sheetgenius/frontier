---
schema_version: bitter.frontier_profile.v0
profile_id: github-copilot-cli
label: GitHub Copilot CLI
owner: GitHub
source_contract: sources/github-copilot-cli.yml
homepage: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
docs: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
changelog: https://github.com/github/copilot-cli/blob/main/changelog.md
repo: https://github.com/github/copilot-cli
tagline: "Copilot CLI 1.0.100 lets sandboxed commands reach the local network by default."
compared_with: []
surface_class: closed_source_releases
evidence_floor: official_changelog
status: active_watch
first_published: 2026-08-21
last_updated: 2026-10-24
last_full_review: 2026-10-24
claims:
  - id: allow-all-falsey
    finding_id: 2026-09-21-github-copilot-cli-1-0-85-copilot-allow-all-falsey-values-used-to-enable-auto-approval
    last_verified: 2026-10-13
    status: retired
    note: "Historical 1.0.85 repair retained; superseded as an install decision by the current stable-version claim."
  - id: plugin4shell-no-fix
    finding_id: 2026-09-21-github-copilot-cli-plugin4shell-no-changelog-line-names-a-fix-through-1-0-87
    last_verified: 2026-10-24
    status: active
    note: "Rechecked through 1.0.103 as no named checkout-verification repair found; current exploitability and an unnamed private repair remain unestablished."
  - id: sandbox-localhost-proxy-egress
    finding_id: 2026-09-21-github-copilot-cli-1-0-83-sandbox-cuts-localhost-and-pins-linux-egress-to-the-proxy-breaking-default
    last_verified: 2026-10-13
    status: retired
    note: "Historical warning superseded by 1.0.100 local-network defaults and the conditional 1.0.101 macOS localhost exception."
  - id: sandbox-file-tools-read-dev-config
    finding_id: 2026-09-21-github-copilot-cli-1-0-83-sandbox-grants-file-tools-read-access-to-token-bearing-dev-config-by-default
    last_verified: 2026-10-24
    status: active
  - id: managed-hooks-bypass
    finding_id: 2026-09-21-github-copilot-cli-1-0-85-allowmanagedhooksonly-was-bypassable-by-extension-callbacks
    last_verified: 2026-10-13
    status: retired
    note: "Historical extension-registered callback repair still documented; arbitrary extension code is a separate surface."
  - id: session-sandbox-bypass
    finding_id: 2026-09-21-github-copilot-cli-1-0-85-session-scoped-sandbox-bypass-for-users-when-policy-allows
    last_verified: 2026-10-13
    status: retired
    note: "Corrected scope: approval can apply to one attempt, with a separate explicit session-wide opt-out when policy permits."
  - id: fail-closed-managed-settings-acp-revoke
    finding_id: 2026-09-21-github-copilot-cli-1-0-81-fail-closed-managed-settings-acp-allow-all-revoke-fixed-per-entry-managed-plugins
    last_verified: 2026-10-24
    status: active
    note: "Retained only for documented forced-refresh restrictions at the closing docs snapshot. ACP entry-point and sandbox claims are separate; failure behavior remains untested."
  - id: parser-rewrite-breaking
    finding_id: 2026-09-21-github-copilot-cli-1-0-85-cli-parser-rewrite-and-copilot-plugins-flag-removals-breaking
    last_verified: 2026-10-13
    status: retired
    note: "Historical parser costs still documented; current upgrade guidance prioritizes settings migration and routing fallback."
  - id: login-pinning-mcp-race-marketplaces
    finding_id: 2026-09-21-github-copilot-cli-1-0-83-and-1-0-87-enterprise-login-pinning-mcp-policy-race-closed-marketplace-lockdown
    last_verified: 2026-10-13
    status: retired
    note: "Historical repairs remain documented with first-party MCP exemptions; current prose prioritizes entry-point coverage and runtime pinning."
  - id: worktrees-fleet-custom-agents
    finding_id: 2026-09-21-github-copilot-cli-capability-worktrees-out-of-experimental-fleet-custom-agents-read-repo-instructions
    last_verified: 2026-10-13
    status: retired
    note: "Replaced by the current rule-file ingestion, directory-grant and fleet-channel decisions."
  - id: content-exclusion-docs
    finding_id: 2026-09-21-github-copilot-cli-content-exclusion-now-documented-as-applying-to-the-cli-docs-only
    last_verified: 2026-10-24
    status: active
  - id: repo-is-not-agent-source
    finding_id: 2026-10-13-github-copilot-cli-ten-stable-releases-after-the-baseline-pinning-the-package-does-not-disable-cli-or-plugin
    last_verified: 2026-10-24
    status: active
    note: "The proprietary agent remains outside the public release tree; binary enforcement has not been tested."
  - id: latest-lags-prerelease
    finding_id: 2026-10-13-github-copilot-cli-ten-stable-releases-after-the-baseline-pinning-the-package-does-not-disable-cli-or-plugin
    last_verified: 2026-10-13
    status: retired
    note: "Stable and preview publication are distinct. Exact historical npm dist-tag transitions were not verified."
  - id: stable-runtime-and-update-policy
    finding_id: 2026-10-13-github-copilot-cli-ten-stable-releases-after-the-baseline-pinning-the-package-does-not-disable-cli-or-plugin
    last_verified: 2026-10-24
    status: retired
    note: "Replaced by the 1.0.103 install record. Runtime update controls still hold."
  - id: managed-policy-entry-points
    finding_id: 2026-10-13-github-copilot-cli-1-0-88-managed-settings-now-reach-acp-ahp-host-and-server-sessions-which-previously-ran
    last_verified: 2026-10-24
    status: retired
    note: "The older MCP, permission and plugin repair still holds; the current posture prioritizes the separate 1.0.103 ACP sandbox repair."
  - id: local-sandbox-ga-and-bypass-policy
    finding_id: 2026-10-13-github-copilot-cli-1-0-93-opens-local-sandboxing-to-every-user-it-stays-off-by-default-and-a-server-managed
    last_verified: 2026-10-24
    status: active
  - id: cloud-sandbox-preview-billing
    finding_id: 2026-10-13-github-copilot-cli-1-0-93-opens-local-sandboxing-to-every-user-it-stays-off-by-default-and-a-server-managed
    last_verified: 2026-10-13
    status: retired
    note: "Documented preview and billing distinction retained in the supporting record; omitted from this local-shell posture."
  - id: platform-network-docs
    finding_id: 2026-10-13-github-copilot-cli-ga-docs-rewrite-the-sandbox-network-rules-local-network-off-macos-and-linux-egress-forced
    last_verified: 2026-10-24
    status: retired
    note: "Superseded by released local-network enablement and the conditional macOS localhost exception; the Windows warning remains documented."
  - id: credential-withholding-and-masking
    finding_id: 2026-10-13-github-copilot-cli-sandboxed-commands-now-get-placeholder-credentials-github-token-withheld-1-0-92-and-a-loca
    last_verified: 2026-10-24
    status: active
  - id: managed-domain-boundary
    finding_id: 2026-10-13-github-copilot-cli-1-0-93-adds-permissions-limitto-a-managed-domain-boundary-that-allow-all-cannot-widen
    last_verified: 2026-10-24
    status: active
  - id: assisted-permissions-controls-and-attribution
    finding_id: 2026-10-13-github-copilot-cli-approvals-got-finer-and-assisted-permissions-the-llm-approval-judge-got-an-admin-off-switc
    last_verified: 2026-10-24
    status: active
    note: "Retained for the documented managed Assisted disable control and decision attribution; the key name and unattended-fallback definition remain unresolved. Current managed-ask behavior and preview gates are separate claims."
  - id: settings-location-and-model-default
    finding_id: 2026-10-13-github-copilot-cli-1-0-93-ignores-user-settings-left-in-copilot-config-json-breaking-plus-retired-models-and
    last_verified: 2026-10-24
    status: active
    note: "The current body uses the settings-location break; the docs-only default-model change is left in the supporting record."
  - id: repository-inputs-and-directory-grants
    finding_id: 2026-10-13-github-copilot-cli-repository-controlled-inputs-widened-claude-rules-1-0-89-hot-applied-mcp-config-1-0-93-add
    last_verified: 2026-10-24
    status: active
  - id: computer-use-and-workflow-permissions
    finding_id: 2026-10-13-github-copilot-cli-docs-describe-preview-computer-use-and-dynamic-workflows-with-different-permission-surface
    last_verified: 2026-10-24
    status: active
  - id: stable-resume-and-hook-repairs
    finding_id: 2026-10-13-github-copilot-cli-stable-1-0-97-repairs-resumed-plugin-hooks-and-canceled-writes-and-denies-unattended-hook
    last_verified: 2026-10-24
    status: retired
    note: "The 1.0.97 repairs remain release history; omitted from the current posture in favor of current ACP and approval-policy checks."
  - id: json-output-secret-redaction
    finding_id: 2026-10-13-github-copilot-cli-stable-1-0-97-repairs-json-secret-redaction-and-mcp-selection-inline-images-now-default
    last_verified: 2026-10-24
    status: retired
    note: "Retained release history, omitted from the current operating posture; no fresh runtime redaction test was performed."
  - id: telemetry-capture-policy
    finding_id: 2026-10-13-github-copilot-cli-docs-separate-telemetry-identity-from-five-content-capture-classes-all-off-by-default
    last_verified: 2026-10-13
    status: retired
    note: "Documented but omitted from this operating posture to keep the containment and upgrade decisions short."
  - id: managed-sandbox-client-minimum
    finding_id: 2026-10-13-github-copilot-cli-managed-sandbox-docs-require-cli-1-0-93-and-block-older-client-connections
    last_verified: 2026-10-24
    status: retired
    note: "The documented 1.0.93 minimum still holds; the current ACP sandbox repair requires 1.0.103."
  - id: fast-routing-fallback
    finding_id: 2026-10-13-github-copilot-cli-1-0-89-removes-fast-routing-saved-preferences-fall-back-to-balance
    last_verified: 2026-10-24
    status: retired
    note: "Historical Fast-to-Balance fallback still holds; current model retirements and built-in defaults take priority in this posture."
  - id: custom-agent-precedence
    finding_id: 2026-10-13-github-copilot-cli-custom-agent-docs-put-personal-definitions-ahead-of-repository-and-organization-definition
    last_verified: 2026-10-13
    status: retired
    note: "Documentary correction retained in the supporting record; omitted from the public body to avoid a configuration catalog."
  - id: workflow-billing-eligibility
    finding_id: 2026-10-13-github-copilot-cli-dynamic-workflow-preview-excludes-annual-pro-plans-still-on-legacy-request-billing
    last_verified: 2026-10-24
    status: active
  - id: fleet-channel-limits
    finding_id: 2026-10-13-github-copilot-cli-ten-stable-releases-after-the-baseline-pinning-the-package-does-not-disable-cli-or-plugin
    last_verified: 2026-10-24
    status: retired
    note: "Original fleet and workflow-run introduction versions remain unresolved; current prose uses versioned structured-output and approval-inheritance changes."
  - id: local-network-default-and-macos-exception
    finding_id: 2026-10-24-github-copilot-cli-local-network-access-defaults-on-and-macos-gains-a-narrower-localhost-exception
    last_verified: 2026-10-24
    status: active
  - id: acp-sandbox-new-and-resumed-sessions
    finding_id: 2026-10-24-github-copilot-cli-acp-honors-saved-sandbox-settings-and-launch-flags-on-new-and-resumed-sessions
    last_verified: 2026-10-24
    status: active
  - id: proxy-and-long-command-repairs
    finding_id: 2026-10-24-github-copilot-cli-corporate-proxy-inheritance-and-long-running-sandbox-commands-get-stable-repairs
    last_verified: 2026-10-24
    status: active
  - id: one-session-trust-and-plugin-preparation
    finding_id: 2026-10-24-github-copilot-cli-one-session-folder-trust-replaces-persistent-setup-while-trusted-repository-inputs-do-more
    last_verified: 2026-10-24
    status: active
  - id: assisted-managed-ask-conflict
    finding_id: 2026-10-24-github-copilot-cli-assisted-approval-expands-extension-requests-stay-explicit-and-ambiguous-skill-grants-prom
    last_verified: 2026-10-24
    status: active
  - id: native-workflow-output-and-approval-inheritance
    finding_id: 2026-10-24-github-copilot-cli-workflow-subagents-gain-native-structured-output-and-inherit-granted-tool-approvals
    last_verified: 2026-10-24
    status: active
  - id: mcp-startup-and-worktree-snapshots
    finding_id: 2026-10-24-github-copilot-cli-mcp-startup-stops-blocking-whole-sessions-and-tool-caches-cross-worktrees
    last_verified: 2026-10-24
    status: retired
    note: "Omitted from the shorter public posture; startup and cache repairs remain in the dated research record."
  - id: remote-startup-and-history-sync-migration
    finding_id: 2026-10-24-github-copilot-cli-remote-startup-flags-split-from-history-syncing-and-bare-share-stops-publishing-immediatel
    last_verified: 2026-10-24
    status: active
  - id: online-semantic-search-default
    finding_id: 2026-10-24-github-copilot-cli-online-semantic-search-defaults-on-while-model-routing-and-long-session-recovery-change
    last_verified: 2026-10-24
    status: retired
    note: "Omitted from the shorter public posture; the native child-handoff trial supplies the concrete comparison with existing glue."
  - id: client-telemetry-invocation-opt-out
    finding_id: 2026-10-24-github-copilot-cli-a-new-invocation-flag-disables-first-party-client-telemetry-not-every-data-path
    last_verified: 2026-10-24
    status: active
  - id: existing-unconfigured-feature-availability
    finding_id: 2026-10-24-github-copilot-cli-default-feature-availability-now-applies-to-existing-unconfigured-ga-features
    last_verified: 2026-10-24
    status: active
  - id: assisted-and-task-wait-preview-boundaries
    finding_id: 2026-10-24-github-copilot-cli-the-preview-removes-the-assisted-experimental-gate-and-changes-background-task-waiting
    last_verified: 2026-10-24
    status: active
  - id: hosted-retirements-and-agent-defaults
    finding_id: 2026-10-24-github-copilot-cli-hosted-model-retirements-change-built-in-agent-routing-independently-of-the-cli-pin
    last_verified: 2026-10-24
    status: active
  - id: custom-agent-tool-alias-resolution
    finding_id: 2026-10-24-github-copilot-cli-custom-agents-receive-tools-declared-through-the-documented-aliases
    last_verified: 2026-10-24
    status: retired
    note: "Omitted from the shorter public posture; tool-alias resolution is separate from approval inheritance."
  - id: stable-103-install-and-runtime-updates
    finding_id: 2026-10-24-github-copilot-cli-stable-1-0-103-replaces-1-0-97-while-runtime-auto-update-remains-enabled
    last_verified: 2026-10-24
    status: active
  - id: gpt-5-model-specific-verbosity
    finding_id: 2026-10-24-github-copilot-cli-gpt-5-responses-requests-regain-model-specific-default-verbosity
    last_verified: 2026-10-24
    status: active
stance:
  use_for: '<a href="#native-handoffs">Trial native workflow handoffs on 1.0.103 before maintaining custom response parsing.</a>'
  avoid_for: '<a href="#managed-ask">Workloads that require confirmed human approval for every managed ask.</a>'
  watch_next: '<a href="#managed-ask">A recorded comparison of one managed ask in Manual and Assisted modes, identifying who approved it.</a>'
---

# GitHub Copilot CLI

On 19 October 2026, [Copilot CLI 1.0.100 enabled local-network access by default for sandboxed commands](https://github.com/github/copilot-cli/releases/tag/v1.0.100). The [setting that lets a job reach its test server can also let it reach an unintended private service](https://github.com/github/copilot-cli/releases/tag/v1.0.100); choose the policy before widening the rollout.

## Where it stands, 2026-10-24

**Channel.** Install [stable 1.0.103, released 22 October 2026](https://github.com/github/copilot-cli/releases/tag/v1.0.103), with [`npm install -g @github/copilot@1.0.103`](https://registry.npmjs.org/@github/copilot/1.0.103). Keep [1.0.104-2 in a preview trial](https://github.com/github/copilot-cli/releases/tag/v1.0.104-2); [removing Assisted Permissions' experimental prerequisite belongs to that train](https://github.com/github/copilot-cli/releases/tag/v1.0.104-0). For reproducible automation, [disable the default runtime auto-update](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L452-L453) with [`COPILOT_AUTO_UPDATE=false`](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md#L140-L146) and record `copilot --version`.

[Sandboxing remains off by default](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L499-L500). [ACP editor integration](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/acp-server.md#L17-L18), [dynamic workflows](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/dynamic-workflows.md#L13-L73) and [computer use remain public preview; computer use is also off by default](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/computer-use.md#L13-L57). The [public branch snapshot is one notes commit ahead of the stable tag](https://github.com/github/copilot-cli/compare/v1.0.103...7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120), covering the [already-released 1.0.103 changes](https://github.com/github/copilot-cli/releases/tag/v1.0.103).

Before upgrading, migrate [wrapper flags](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L720-L750) and [any user settings still in `~/.copilot/config.json`](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L55-L68). Before rollout, explicitly configure [local-network access](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L504) and test sandbox denials. Avoid assuming [private services are blocked](https://github.com/github/copilot-cli/releases/tag/v1.0.100), [managed approval requests always reach a person](https://github.com/github/copilot-cli/releases/tag/v1.0.100), or [a version pin prevents runtime updates](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L452-L453).

**Set [`sandbox.userPolicy.network.allowLocalNetwork`](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L504) explicitly before expanding a 1.0.103 rollout.** Test a needed dev server and an unintended private service. [1.0.101 permits direct localhost TCP on macOS when local access is enabled and no host filters apply](https://github.com/github/copilot-cli/releases/tag/v1.0.101). The [configuration table still lists false](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L504). Plan for the released change, then check the policy on your host.

**If your editor launches Copilot through ACP, upgrade that Copilot server and test both new and resumed sessions.** [1.0.103 repairs inheritance of saved sandbox settings and `--sandbox` / `--no-sandbox` across both paths](https://github.com/github/copilot-cli/releases/tag/v1.0.103). Record which binary and launch arguments the editor uses. Run an allowed command and a denied one in each path. [Server-launch settings seed tool filters and reasoning settings; managed sandbox requirements override local opt-out](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/acp-server.md#L37-L55). Check shell containment separately from the approval dialog.

<a id="managed-ask"></a>

**Check whether a managed `ask` approval rule actually reaches a person.** [1.0.100 says Assisted mode can allow safe managed asks without confirmation](https://github.com/github/copilot-cli/releases/tag/v1.0.100), while [enterprise docs require fresh one-time approval without automatic shortcuts](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L253-L261). Test the same matching operation in Manual and Assisted modes and check who made the recorded decision. Separately, [1.0.101 requires explicit approval for extension-capability requests](https://github.com/github/copilot-cli/releases/tag/v1.0.101).

**Migrate wrapper flags before upgrading.** [1.0.103 retires legacy remote startup flags](https://github.com/github/copilot-cli/releases/tag/v1.0.103). Replace [`--remote-export` and its negative form with `--sync-session=on|off`; `--no-remote` is removed, and `--remote` remains for legacy SDK server/headless startup only](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L720-L750). For local-only history, check sync and remote control together: [enabling remote control overrides the export opt-out](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L494-L497).

<a id="native-handoffs"></a>

**Try workflow subagents before maintaining custom output parsers and permission-passing code.** [1.0.101 gives workflow subagents native structured output on supported models](https://github.com/github/copilot-cli/releases/tag/v1.0.101); [1.0.102 passes existing custom/MCP tool approvals to subagents](https://github.com/github/copilot-cli/releases/tag/v1.0.102). Review initial grants, validate schema conformance and content separately, and test a denied child action. Compare completed jobs and human minutes spent repairing handoffs, reviewing grants and correcting results with the current wrapper. Retire parsing or approval glue only if total human time per completed job falls. [`copilot workflow run` displays no approval prompts, and extension code can execute outside those prompts](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/dynamic-workflows.md#L106-L116). Check eligibility first: [existing annual Pro/Pro+ plans on legacy request billing are excluded](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/dynamic-workflows.md#L71-L73).

**Require a usable sandbox before running the job.** Apply [`sandbox.enabled: true`, `sandbox.failIfUnavailable: true` and `sandbox.allowBypass: false` through managed policy](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L391-L404) where containment is mandatory. For older setups, move [user settings left in `~/.copilot/config.json` to `~/.copilot/settings.json`](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L55-L68) before trusting the configured restrictions.

**Restrict credential-file access before widening grants.** [Masking does not hide credential files](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md#L180-L182), and [developer-tool access is enabled by default](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L215-L221). Set [`sandbox.allowDevToolAccess: false` to remove automatic grants to token-bearing configuration such as `~/.npmrc`](https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L486), then grant only needed paths. Built-in file operations [use best-effort software checks outside OS sandbox containment](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md#L64).

**Review what the repository can load before using one-session trust.** [1.0.100 automatically prepares trusted repository plugins before chat](https://github.com/github/copilot-cli/releases/tag/v1.0.100). Its [`--trust-folder` flag trusts hooks, workspace MCP servers and repository plugin settings for one new noninteractive session, without persisting trust or granting tool/path/URL permissions](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md#L51). Inspect those inputs before launching. Copilot also [reads `.claude/rules` as custom instructions](https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L256). Test permission enforcement separately from instruction loading.

**Retest the proxy loop before keeping workarounds.** [1.0.102 adds `NO_PROXY`/`ALL_PROXY` inheritance and repairs sandbox commands becoming unreliable after ten seconds](https://github.com/github/copilot-cli/releases/tag/v1.0.102). Try a long command, an upstream-proxied destination, a `NO_PROXY` destination and a blocked host. [`NO_PROXY` bypasses the inherited upstream, not the local policy proxy; only HTTP(S) upstreams are supported](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L546-L552). Fix certificate trust before accepting the [offered unsandboxed retry](https://github.com/github/copilot-cli/releases/tag/v1.0.100).

**Recheck model pins and evaluation settings.** GitHub records [the retirement of Gemini 3.7 Flash, GPT-5 mini, GPT-5.4, GPT-5.4 mini and GPT-5.5 from Copilot on 19 October 2026](https://github.com/github/docs/blob/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b/data/tables/copilot/model-deprecation-history.yml#L14-L32). Its [built-in `explore` agent now defaults to `gpt-5.6-luna`; `task` uses that model with `claude-haiku-4.5` fallback](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1383-L1388). Separately, [1.0.103 restores model-specific GPT-5 Responses verbosity defaults unless session verbosity is explicit](https://github.com/github/copilot-cli/blob/7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120/changelog.md#L7). Record the selected model and set verbosity explicitly for comparisons. [A CLI pin cannot restore those retired Copilot models](https://github.com/github/docs/commit/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b).

**Set telemetry policy on every launch path.** Use [1.0.100's `--disable-client-telemetry`](https://github.com/github/copilot-cli/releases/tag/v1.0.100) for [an invocation-level opt-out of restricted and unrestricted first-party client uploads](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli.md#L280-L293). It [is not saved and leaves server-side collection, configured OpenTelemetry exports and enabled SDK forwarding unchanged](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli.md#L280-L293). Inspect those data paths separately.

**Make enterprise feature exceptions explicit.** The [23 October 2026 documentation change](https://github.com/github/docs/commit/2843f3a6c3f21ac46f6503475a24b0080059490d) says [default availability now covers existing unconfigured GA features, including MCP policy](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/enterprise/default-availability.md). [Explicit settings win; preview features and Store local sessions in the Cloud are excluded](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/enterprise/default-availability.md). Check effective tenant settings before assuming an untouched setting is disabled.

**Give preview Autopilot its own stop condition.** [1.0.104-2 keeps interactive and SDK Autopilot waiting for attached background tasks beyond `COPILOT_TASK_WAIT_TIMEOUT_SECONDS`; `-p --autopilot` still honors it](https://github.com/github/copilot-cli/releases/tag/v1.0.104-2). Check watchdogs that depended on that timeout before trying the preview.

## What is unresolved

The [public release tree contains documentation and an installer, without the agent implementation](https://github.com/github/copilot-cli/tree/v1.0.103). Test these boundaries on the deployed runtime:

- **Test network and credential denials on each target OS.** Through terminal and new/resumed ACP sessions, record allowed and denied credential destinations, token-file reads and filtered localhost. On Windows, [direct connections can bypass proxy host rules](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L552); keep an independent egress boundary where required.
- **Test failed refresh before requiring fresh policy.** Test failed [mandatory refresh under the documented no-stale-cache rule](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L241-L249), separating unmanaged, known-managed, cached and required-fresh startup.
- **Require definitions for Assisted deployment controls.** The release notes mention [a managed Assisted disable control and permission-decision attribution](https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L144-L162). Require a documented key and unattended-fallback definition before relying on them.
- **Test an excluded-file shell read and a dynamically constructed destination.** [For Business and Enterprise users, content exclusion promises context exclusion](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/copilot-surfaces/copilot-cli.md#L214-L216); [`permissions.limitTo` covers detected domain requests rather than shell/read/write operations themselves](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L717-L733).
- **Compare installed plugin files with the expected commit.** [AIR's 17 September 2026 Plugin4Shell report describes substituting plugin code through hash-shaped default branches on hosts that permit them](https://www.air.security/blog-posts/plugin4shell). No named checkout-verification repair was found in [notes through 1.0.103](https://github.com/github/copilot-cli/blob/7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120/changelog.md); current exploitability remains unestablished. A named released repair or controlled comparison of installed files with the expected commit would settle the mechanism for that host and version.

## Profile hygiene

Dated, not evergreen. Scope: through 2026-10-24. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for how this profile uses sources.
