---
schema_version: bitter.frontier_profile.v0
profile_id: omnigent
label: Omnigent
owner: omnigent-ai
source_contract: sources/omnigent.yml
homepage: https://omnigent.ai
docs: https://omnigent.ai/docs
tagline: "Omnigent makes agents reusable and moves trust decisions into setup."
compared_with:
  - claude-code
  - codex
repo: https://github.com/omnigent-ai/omnigent
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: policy-outage-falls-through
    finding_id: 2026-09-21-omnigent-governance-layering-on-policy-server-outage-native-claude-codex-tool-calls-now-defer-to
    last_verified: 2026-09-23
    status: retired
  - id: bundle-advisories
    finding_id: 2026-09-21-omnigent-three-bundle-upload-advisories-published-2026-09-16-all-fixed-in-v0-14-0-by-one
    last_verified: 2026-10-13
    status: retired
  - id: pre-answers-harness-prompts
    finding_id: 2026-09-21-omnigent-omnigent-now-answers-wrapped-harnesses-safety-prompts-and-flips-their-approval-routing
    last_verified: 2026-10-13
    status: active
  - id: shared-editor-approval-not-narrowed
    finding_id: 2026-09-21-omnigent-carry-forward-shared-editor-approval-did-not-narrow-adjacent-editor-powers-did-two-of-them
    last_verified: 2026-10-13
    status: active
  - id: spend-gate-before-next-call
    finding_id: 2026-09-21-omnigent-carry-forward-spend-caps-are-gated-before-the-next-call-on-already-reconciled-spend-the
    last_verified: 2026-10-13
    status: active
  - id: root-budgets-skip-native-descendants
    finding_id: 2026-09-21-omnigent-budgets-did-not-reach-native-descendants-in-any-in-window-tag-scheduled-task-caps-attach
    last_verified: 2026-09-23
    status: retired
  - id: acp-result-fail-open-usage-flag
    finding_id: 2026-09-21-omnigent-carry-forward-acp-result-phase-fail-open-unchanged-usage-page-still-flag-gated
    last_verified: 2026-10-13
    status: retired
  - id: policy-engine-hardening
    finding_id: 2026-09-21-omnigent-policy-engine-hardening-spawn-bounds-persist-sub-agents-enforce-their-own-guardrails-verdi
    last_verified: 2026-10-13
    status: retired
  - id: v0-10-0-multi-sandbox-shared-editor-approval
    finding_id: 2026-08-20-omnigent-v0-10-0-adds-multi-sandbox-and-keeps-shared-editor-approval
    last_verified: 2026-08-20
    status: retired
  - id: worktree-guard-inert-on-windows
    finding_id: 2026-08-03-omnigent-worktree-guard-inert-on-windows-runners
    last_verified: 2026-09-23
    status: retired
  - id: v0-10-0-usage-page-off-parent-gates-unchanged
    finding_id: 2026-08-20-omnigent-v0-10-0-usage-page-off-parent-gates-unchanged
    last_verified: 2026-08-20
    status: retired
  - id: deny-tag-push-in-v0-10-0
    finding_id: 2026-08-20-omnigent-deny-tag-push-reaches-v0-10-0
    last_verified: 2026-10-13
    status: retired
  - id: spend-cap-is-a-downgrade-gate
    finding_id: 2026-08-03-omnigent-spend-cap-is-a-downgrade-gate-not-a-ceiling
    last_verified: 2026-09-23
    status: retired
  - id: cost-gate-fails-closed-on-unpriced-models
    finding_id: 2026-08-03-omnigent-spend-cap-is-a-downgrade-gate-not-a-ceiling
    last_verified: 2026-09-23
    status: retired
  - id: router-picks-harness-and-model
    finding_id: 2026-08-03-omnigent-v070-routing-picks-the-harness
    last_verified: 2026-10-13
    status: retired
  - id: stateful-policies-shipped-in-tag
    finding_id: 2026-08-03-omnigent-stateful-policies-claim-checks-out-in-the-tag
    last_verified: 2026-10-13
    status: retired
  - id: stable-install-and-distribution
    finding_id: 2026-10-13-omnigent-stable-0-18-0-reached-pypi-before-other-channels-the-morning-distribution-lag-was-temporar
    last_verified: 2026-10-13
    status: active
  - id: october-security-floor
    finding_id: 2026-10-13-omnigent-five-october-13-advisories-one-critical-and-four-high-move-the-patch-floor-to-v0-18
    last_verified: 2026-10-13
    status: active
  - id: bubblewrap-host-remediation
    finding_id: 2026-10-13-omnigent-linux-bubblewrap-helpers-could-escape-through-host-temporary-files-before-v0-18
    last_verified: 2026-10-13
    status: active
  - id: conservative-shell-parsing
    finding_id: 2026-10-13-omnigent-shell-policies-now-ask-on-or-block-any-command-they-cannot-parse-git-global-options-bypass
    last_verified: 2026-10-13
    status: active
  - id: current-edit-authority
    finding_id: 2026-10-13-omnigent-shared-session-editors-lost-the-raw-shell-and-agent-reconfiguration-but-still-approve-and
    last_verified: 2026-10-13
    status: active
  - id: project-mcp-preapproval
    finding_id: 2026-10-13-omnigent-omnigent-pre-approves-previously-undeclined-project-mcp-servers-for-claude-code
    last_verified: 2026-10-13
    status: active
  - id: explicit-outage-ask
    finding_id: 2026-10-13-omnigent-correction-on-a-policy-server-outage-claude-code-and-codex-tool-calls-get-an-explicit-ask
    last_verified: 2026-10-13
    status: active
  - id: missing-cost-approval
    finding_id: 2026-10-13-omnigent-correction-tokens-without-total-cost-usd-trigger-an-approval-path-and-repo-cost-docs-contr
    last_verified: 2026-10-13
    status: active
  - id: inherited-root-policy-repaired
    finding_id: 2026-10-13-omnigent-root-budgets-now-bind-native-child-sessions-budgets-gain-weekly-to-yearly-periods-and-cach
    last_verified: 2026-10-13
    status: active
  - id: reusable-agents-and-source-tool-migration
    finding_id: 2026-10-13-omnigent-v0-18-0-makes-third-party-agents-a-one-line-install-from-github-trusted-on-single-user-ins
    last_verified: 2026-10-13
    status: active
  - id: integrator-breaking-changes
    finding_id: 2026-10-13-omnigent-every-minor-in-the-window-broke-an-interface-an-integrator-touches
    last_verified: 2026-10-13
    status: active
  - id: managed-sandbox-recurring-work
    finding_id: 2026-10-13-omnigent-capability-devin-as-a-native-harness-side-chats-gitlab-and-azure-devops-reviews-copy-on
    last_verified: 2026-10-13
    status: active
  - id: brokered-codex-launch-contract
    finding_id: 2026-10-13-omnigent-brokered-databricks-authentication-adds-a-contained-codex-executor-and-a-migration-contrac
    last_verified: 2026-10-13
    status: active
  - id: managed-fork-restrictions
    finding_id: 2026-10-13-omnigent-managed-session-ui-removes-unsupported-fork-and-host-switch-controls
    last_verified: 2026-10-13
    status: active
  - id: git-ssh-main-only
    finding_id: 2026-10-13-omnigent-repository-scoped-git-ssh-brokering-is-on-main-only-at-window-close
    last_verified: 2026-10-13
    status: active
  - id: managed-mcp-main-only
    finding_id: 2026-10-13-omnigent-a-managed-mcp-registry-and-gateway-prototype-lands-on-main-with-separate-policy-and-creden
    last_verified: 2026-10-13
    status: active
stance:
  use_for: 'Teams wrapping Claude Code or Codex who need reusable agents under shared policies and can own the setup review.'
  avoid_for: 'Avoid granting Edit to anyone you would not trust to run code through the agent: check the sharing boundary.'
  watch_next: 'Before relying on policy-server outage handling, test whether the installed harness actually stops the tool.'
---

# Omnigent

On 2026-10-13, [Omnigent shipped stable 0.18.0 with reusable agent installs](https://github.com/omnigent-ai/omnigent/releases/tag/v0.18.0). That puts a trust decision in front of `omnigent agent add`: whose tools are you willing to run?

## Where it stands, 2026-10-13

**Install stable 0.18.0.** Use [`uv tool install omnigent==0.18.0`](https://pypi.org/project/omnigent/0.18.0/) on [Python 3.12 or newer](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/pyproject.toml#L11). Avoid the [2026-10-13 nightly, which predates the security fixes](https://github.com/omnigent-ai/omnigent/compare/v0.18.0.dev20261013...v0.18.0).

**Patch execution hosts and servers. [Restart affected agents](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-h6vq-3549-mppq) and [helpers](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-v3vj-mch3-x6c2).** Before this fix, [code inside affected Linux bubblewrap sandboxes could compromise the launcher and execute as Omnigent's host OS account](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-v3vj-mch3-x6c2). On multi-user servers, [an authenticated importer who knew another user's host ID could run an agent as that host's OS account if the host was connected and its required harness configured](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-rqfc-q7j9-5v59). Until patched, use the [bubblewrap advisory's disposable VM or container workaround without sensitive host credentials or mounts](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-v3vj-mch3-x6c2).

**Verify the running CLI version and container image.** Homebrew [reached 0.18.0 on 2026-10-13](https://github.com/omnigent-ai/homebrew-tap/commit/c6b6ec571d2a660e5a5106319ef1e212d7650de2), but the desktop app [launches a separately installed CLI](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/web/electron/src/server_manager.js). Docker compose [defaults to latest](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/deploy/docker/docker-compose.yaml#L41-L55). Check the running image digest and its fixed source before declaring the upgrade complete.

**Migrate uploaded source tools before rolling out on shared servers.** On multi-user servers, v0.18.0 [rejects bundles containing server-side Python or TypeScript tools, nested agents included](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/bundles.py#L33-L62), closing [code execution during tool discovery with runner privileges](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-jw77-57v9-jmcm). [Replace those tools with services exposed through the Model Context Protocol (MCP), upload the replacement and start new sessions; re-uploading does not rewrite existing sessions](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/AGENT_YAML_SPEC.md#L570-L588).

**Review a reusable agent as software before installing it.** [Install a GitHub package with `omnigent agent add owner/repo`](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/cli.py#L11742-L11830), then start a new session. [Trusted single-user/local bundles retain Python and TypeScript source tools](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/AGENT_YAML_SPEC.md#L570-L588). Read the tools, policies and MCP services before confirming. Avoid scripting `--yes` for repositories you do not control.

Reuse moves the work from writing an agent to deciding whose code you trust.

**Give Edit only to people you trust to run code through the agent.** Ordinary editors [cannot use the raw environment shell](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/routes/sessions/routes_resources.py#L2876-L2915), but [still answer pending approvals](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/routes/sessions/routes_elicitations.py#L54-L60). v0.18.0's [public Edit opt-in](https://github.com/omnigent-ai/omnigent/pull/9541) can extend that authority to [signed-in users with the link on sessions shared publicly with Edit](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/stores/permission_store/sqlalchemy_store.py#L508-L526). Keep [public_sharing_max_level at its read default](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/sharing_settings.py#L68-L92), especially for workstation sessions.

**Review launch settings before handing over an unfamiliar repository.** Omnigent [sets enableAllProjectMcpServers for Claude Code](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/harnesses/claude_native/bridge.py#L2555-L2572). Read `.mcp.json`: [the maintainer reports pre-approval of previously undeclined servers, with local server processes starting at launch](https://github.com/omnigent-ai/omnigent/pull/7946). It also [persists workspace trust in Claude Code's global configuration](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/harnesses/claude_native/bridge.py#L1850-L1945). For Codex, [a launch without explicit settings selects auto_review](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/harnesses/codex_native/app_server.py#L4219-L4286); set permission, sandbox and reviewer choices explicitly before launch.

Fewer startup dialogs put more weight on setup review.

**Set delegated-work budgets on the [top-level (root) session](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/builder.py#L723-L738) and allow for overshoot before each turn's spend is recorded.** Since [v0.15.0](https://github.com/omnigent-ai/omnigent/releases/tag/v0.15.0), [stored root-session policies reach native children](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/builder.py#L437-L444). For priced usage, [omitted or empty expensive_models stops every model at the cap; a nonempty list blocks only named tiers](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L380-L413). Checks use [spend reconciled at turn boundaries](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L46-L50), so a turn can overshoot the cap.

**Decline missing-price approval when the cap must hold.** [Nonzero reported tokens with no total_cost_usd key trigger an approval request](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L84-L136), [unless already approved](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L502-L509). [One approval covers the spawn tree](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/policies/engine.py#L563-L583) while that condition holds; [checks resume when total_cost_usd is present](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L498-L531). Choose models with catalog prices before delegating budget-sensitive work.

**Measure shell approvals before leaving runs unattended.** v0.18.0 closes bypasses using [Git global options](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-h6vq-3549-mppq) and [other shell forms](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-m3m2-42jg-grrv). With github_policy attached, [heredocs and substitutions](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/tests/policies/builtins/test_github.py#L557-L573) [require approval even for ordinary commands](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/github.py#L1240-L1271); [block_working_dir_changes uses its configured action, blocking by default](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/working_dir.py#L262-L369).

Test representative commands and budget attention for the approval queue. Keep independent filesystem and credential restrictions.

**Put rules that must stop execution before the tool call.** On evaluation timeout, [checks on responses and tool results in the harness scaffold stop blocking after at most 120 seconds](https://github.com/omnigent-ai/omnigent/commit/48c59880726d230f7002d0b9536ff0121d6bb92b). [A check after execution cannot undo a completed side effect](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/types.py#L66-L80).

<details><summary>Integration checks for custom and brokered deployments</summary>

**Test integration compatibility before upgrading.** Test custom cost policies against [user_daily_cost becoming a list](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/schema.py#L195-L201), Python clients against [`list_items()` and `child_sessions()` returning PaginatedList](https://github.com/omnigent-ai/omnigent/commit/85811cb2321cb665b3987187921dbef62e5b20e3), and skills against [directory-name invocation and compatibility fallbacks](https://github.com/omnigent-ai/omnigent/commit/5f226cf72d758d6778b6329d2ed88adadb15c0c1). The [switch-agent endpoint returns 410 from v0.17.0](https://github.com/omnigent-ai/omnigent/releases/tag/v0.17.0). Fork where supported or start another session, since [some managed deployments disable fork controls](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/web/src/lib/sessionCapabilities.ts#L1-L36).

**Configure brokered Databricks Codex before migrating that executor.** This path [requires an active supported sandbox](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/inner/codex_worker.py#L111-L180), [explicit provider/profile, route grant and credential helper](https://github.com/omnigent-ai/omnigent/commit/5fa3bebe38aae7a6c929638f93eaa29fc26c7705), and [stable Codex 0.146.0 or newer, excluding prerelease and postrelease builds](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/inner/codex_executor.py#L635-L658).

</details>

**Try fresh managed sandboxes for recurring work and verify each run's cap.** Scheduled runs can [request a fresh managed sandbox when the server supports it; the default remains connected_host](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/docs/AUTOMATIONS.md#L13-L15). This can move work off a workstation. Check each new session's budget: [cap attachment failures remain nonfatal](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/server/scheduled/fire.py#L886-L910).

## What is unresolved

- **Test outage fallback in your harness before relying on it.** Omnigent's Claude Code and Codex tool-call hooks [request approval when the policy server is unreachable](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/native/native_policy_hook.py#L543-L584). Whether the installed harness honors that answer in bypass or auto mode remains unverified. Run paired outage tests; record versions, permission modes, hook output and whether a harmless tool actually executes.
- **Trace mixed priced/unpriced usage before trusting its budget behavior.** It remains unverified when mixed histories of priced and unpriced usage trigger [the missing-price approval request](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L502-L509). Track token and cost records, aggregate context and approval decisions through the transition to priced usage.
- **Use one budget period until independent accounting is tested.** Correct weekly/monthly totals under [the shared-record evaluator](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L1070-L1093) were not established. Compare each stacked cap's evaluated total with independently calculated spend over its own date range.
- **Wait for a containing stable tag before deploying the new credential brokers.** [Repository-scoped Git SSH grants](https://github.com/omnigent-ai/omnigent/blob/6cf6acf2fde6b80ec929e0b1565ec5e50e6f7306/docs/AGENT_YAML_SPEC.md#L517-L561) and the [managed MCP registry/gateway prototype](https://github.com/omnigent-ai/omnigent/blob/03beb88c01a966b04c6c762e723e8b4463dc16e0/examples/mcp-registry/README.md) were [main-only at this cutoff](https://github.com/omnigent-ai/omnigent/compare/v0.18.0...8278c95fed6d4cfa91176da6c4f4ec0645a61b8d), with no runtime probe. Require configured tests of granted repository operations and MCP credential use. For shared MCP turns, trace the initiating editor, policy actor and credential owner through the queue; [queued-editor attribution remains limited](https://github.com/omnigent-ai/omnigent/blob/03beb88c01a966b04c6c762e723e8b4463dc16e0/designs/MCP_REGISTRY_GATEWAY.md#L175-L244).

## Profile hygiene

### Review scope

Dated, not evergreen. This page covers the 2026-10-13 posture and its source-backed implementation, not an end-to-end deployment test.
See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the evidence contract.
