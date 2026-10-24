---
schema_version: bitter.frontier_profile.v0
profile_id: opencode
label: OpenCode
owner: Anomaly / anomalyco
source_contract: sources/opencode.yml
homepage: https://opencode.ai/
docs: https://opencode.ai/v2/docs
tagline: "OpenCode 2.1 keeps old sessions readable while changing the contracts integrations depend on."
compared_with: []
x:
  project: opencode
repo: https://github.com/anomalyco/opencode
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
first_published: 2026-10-24
last_updated: 2026-10-24
last_full_review: 2026-10-24
claims:
  - id: install-and-preview-channels
    finding_id: 2026-10-24-opencode-current-distribution-separates-v2-stable-from-v1-and-independent-previews
    last_verified: 2026-10-24
    status: active
  - id: native-replay-public-api
    finding_id: 2026-10-24-opencode-v2-1-changes-public-replay-and-compaction-fields-while-preserving-legacy-stored-data
    last_verified: 2026-10-24
    status: active
  - id: v1-migration-contract
    finding_id: 2026-10-24-opencode-v2-migration-changes-the-executable-configuration-and-extension-contract
    last_verified: 2026-10-24
    status: active
  - id: configured-instructions-and-skill-flags
    finding_id: 2026-10-24-opencode-configured-instructions-start-loading-and-claude-skill-discovery-disable-flags-are-honored
    last_verified: 2026-10-24
    status: active
  - id: plan-shell-and-child-authority
    finding_id: 2026-10-24-opencode-plan-restricts-edit-tools-but-retains-host-shell-authority
    last_verified: 2026-10-24
    status: active
  - id: saved-approvals-and-managed-policy
    finding_id: 2026-10-24-opencode-project-approvals-persist-while-managed-policy-can-deny-a-configured-tool-or-integration
    last_verified: 2026-10-24
    status: active
  - id: programmable-host-permission-exceptions
    finding_id: 2026-10-24-opencode-plugins-code-mode-and-worktree-tools-expose-the-harness-as-a-programmable-host
    last_verified: 2026-10-24
    status: active
  - id: cli-passwords-and-remote-pairing
    finding_id: 2026-10-24-opencode-v2-cli-server-paths-generate-passwords-while-remote-pairing-exposes-the-same-execution-hos
    last_verified: 2026-10-24
    status: active
  - id: acp-private-server-and-grants
    finding_id: 2026-10-24-opencode-acp-starts-a-private-server-and-persists-directory-grants-on-the-session
    last_verified: 2026-10-24
    status: active
  - id: credential-custody
    finding_id: 2026-10-24-opencode-credentials-follow-the-execution-host-or-the-optional-console-gateway
    last_verified: 2026-10-24
    status: active
  - id: observability-and-retention
    finding_id: 2026-10-24-opencode-local-execution-does-not-imply-zero-telemetry-or-uniform-model-retention
    last_verified: 2026-10-24
    status: active
  - id: free-model-selection
    finding_id: 2026-10-24-opencode-free-model-selection-defaults-and-model-picker-visibility-change
    last_verified: 2026-10-24
    status: active
  - id: background-compaction-cost
    finding_id: 2026-10-24-opencode-compaction-gains-an-opt-in-background-summary-with-real-latency-and-inference-tradeoffs
    last_verified: 2026-10-24
    status: active
  - id: mcp-forms-and-client-endpoint
    finding_id: 2026-10-24-opencode-mcp-human-input-forms-reach-clients-and-client-hosted-mcp-arrives-experimentally
    last_verified: 2026-10-24
    status: active
  - id: export-and-error-redaction
    finding_id: 2026-10-24-opencode-sanitized-exports-and-database-errors-lose-additional-hidden-data
    last_verified: 2026-10-24
    status: active
  - id: v1-sharing-retired
    finding_id: 2026-10-24-opencode-v1-session-sharing-is-discontinued-despite-surviving-sharing-documentation
    last_verified: 2026-10-24
    status: active
  - id: bundled-runtime-and-request-repairs
    finding_id: 2026-10-24-opencode-bundled-bun-and-long-running-request-fixes-require-updating-the-running-application
    last_verified: 2026-10-24
    status: active
  - id: third-party-malware-records
    finding_id: 2026-10-24-opencode-eight-public-malware-advisories-name-third-party-opencode-ecosystem-packages
    last_verified: 2026-10-24
    status: active
  - id: seroval-remediation-limit
    finding_id: 2026-10-24-opencode-dependency-hardening-removes-nested-seroval-1-3-2-but-does-not-establish-complete-remediat
    last_verified: 2026-10-24
    status: active
  - id: historical-v1-deletion-triage
    finding_id: 2026-10-24-opencode-v1-worktree-deletion-remains-unresolved-while-v2-requires-a-stored-worktree
    last_verified: 2026-10-24
    status: active
  - id: go-allowance-promotion-ended
    finding_id: 2026-10-24-opencode-go-documentation-ends-a-fourfold-step-5-preview-allowance-promotion
    last_verified: 2026-10-24
    status: active
posture_basis:
  capability:
    - 2026-10-24-opencode-plugins-code-mode-and-worktree-tools-expose-the-harness-as-a-programmable-host
    - 2026-10-24-opencode-mcp-human-input-forms-reach-clients-and-client-hosted-mcp-arrives-experimentally
    - 2026-10-24-opencode-compaction-gains-an-opt-in-background-summary-with-real-latency-and-inference-tradeoffs
    - 2026-10-24-opencode-v2-1-changes-public-replay-and-compaction-fields-while-preserving-legacy-stored-data
  accessibility:
    - 2026-10-24-opencode-current-distribution-separates-v2-stable-from-v1-and-independent-previews
    - 2026-10-24-opencode-v2-migration-changes-the-executable-configuration-and-extension-contract
    - 2026-10-24-opencode-bundled-bun-and-long-running-request-fixes-require-updating-the-running-application
    - 2026-10-24-opencode-acp-starts-a-private-server-and-persists-directory-grants-on-the-session
    - 2026-10-24-opencode-go-documentation-ends-a-fourfold-step-5-preview-allowance-promotion
  governance:
    - 2026-10-24-opencode-plan-restricts-edit-tools-but-retains-host-shell-authority
    - 2026-10-24-opencode-project-approvals-persist-while-managed-policy-can-deny-a-configured-tool-or-integration
    - 2026-10-24-opencode-v2-cli-server-paths-generate-passwords-while-remote-pairing-exposes-the-same-execution-hos
    - 2026-10-24-opencode-credentials-follow-the-execution-host-or-the-optional-console-gateway
    - 2026-10-24-opencode-local-execution-does-not-imply-zero-telemetry-or-uniform-model-retention
    - 2026-10-24-opencode-sanitized-exports-and-database-errors-lose-additional-hidden-data
    - 2026-10-24-opencode-eight-public-malware-advisories-name-third-party-opencode-ecosystem-packages
    - 2026-10-24-opencode-dependency-hardening-removes-nested-seroval-1-3-2-but-does-not-establish-complete-remediat
    - 2026-10-24-opencode-v1-worktree-deletion-remains-unresolved-while-v2-requires-a-stored-worktree
stance:
  use_for: "Use <a href='https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/sdk/index.mdx'>the supported server and SDK</a> when they can replace a parallel agent loop and you can own host containment, tool effects and client migration."
  avoid_for: "Avoid treating <a href='https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/plan.ts'>Plan</a> or a worktree as a filesystem, process or network sandbox."
  watch_next: "A recorded saved-session migration on the installed client/server pair against <a href='https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx'>the V1-to-V2 contract</a> before expanding deployment."
---

# OpenCode

On 20 October 2026, [OpenCode 2.1.0 removed `session.compacted` from its public events](https://github.com/anomalyco/opencode/commit/acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd). [Older conversations remain readable without a database migration, while SDK and plugin integrations need updating](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes). Before replacing your own agent loop with OpenCode, test the client and server together.

Install today: [stable CLI V2 2.1.4 with `npm install -g @opencode/cli@2.1.4`](https://registry.npmjs.org/@opencode%2fcli). [Desktop remains beta](https://github.com/anomalyco/opencode/blob/v2.1.4/README.md#desktop-app-beta); [CLI beta/dev builds are separate](https://registry.npmjs.org/@opencode%2fcli).

[Client-hosted MCP is experimental](https://github.com/anomalyco/opencode/commit/453514613974ae54cbd6ae0ab878be1b0aff7a1e), [background summaries are opt-in](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/compaction.mdx), and [the newer MCP protocol requires explicit configuration](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/mcp-servers.mdx#protocol-version). Before upgrading an integration, [test its changed SDK/plugin contracts](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes). V1 migrants must [preserve data, move essential `CLAUDE.md` fallback instructions to `AGENTS.md`, and supply their own compiler/lint/type checks](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx). [Restart the application after updating](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/script/build.ts).

Avoid [treating Plan or worktrees as a sandbox](https://github.com/anomalyco/opencode/blob/v2.1.4/SECURITY.md), installing [the malicious third-party packages listed below](#what-to-check-before-admitting-tools), or [using V1 worktree removal pending resolution](https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/worktree/index.ts#L388-L413).

## Where it stands, 2026-10-24

OpenCode is a coding agent you can run directly or embed in another application: its [SDK embeds its server without a network listener](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/sdk/index.mdx), and its [network clients share an execution host](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/web.mdx). You own tool effects, client upgrades and final review.

**Channel.** Install stable [V2 2.1.4, published on 23 October 2026](https://registry.npmjs.org/@opencode%2fcli), with `npm install -g @opencode/cli@2.1.4`. To stay on V1 for compatibility, use [`npm install -g opencode-ai@1.19.4`](https://registry.npmjs.org/opencode-ai/1.19.4). [Both provide `opencode`](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx): check which executable your terminal or editor launches and which server is running. At the 24 October read, [GitHub Latest still selected V1.19.4](https://api.github.com/repos/anomalyco/opencode/releases/latest); choose V2 by its package record and [source tag](https://github.com/anomalyco/opencode/tree/v2.1.4).

**Choose desktop and previews separately.** At the separately timed 24 October reads, desktop [latest advertised 2.1.4](https://update.opencode.ai/api/latest/desktop/opencode), but [the product remains BETA](https://github.com/anomalyco/opencode/blob/v2.1.4/README.md#desktop-app-beta). Its [beta channel advertised `0.0.0-beta-21770`](https://update.opencode.ai/api/beta). [npm selected dev `0.0.0-dev-21769` and beta `0.0.0-beta-19507`](https://registry.npmjs.org/@opencode%2fcli). Choose a build from its own channel's version record.

## What upgrading changes

**Port the integration before upgrading its server.** [Provider replay fields now live under `native`, and credential setup answers under `metadata`](https://github.com/anomalyco/opencode/commit/acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd). Test a saved conversation, tool call/result, compaction and provider switch on the installed client/server pair. [Native compaction replay requires the same provider and model; switching falls back to original messages](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes). Count that extra context when comparing costs.

**Prepare V1 instructions and checks before migrating.** V2 [translates supported V1 configuration in memory, replaces global `tui.json` with `cli.json`, requires plugin ports, drops the `CLAUDE.md` fallback and does not run LSP diagnostics](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx). Preserve V1 data, move essential rules to `AGENTS.md`, and run the project's compiler, lint or typecheck. In 2.0.30, [configured instruction files, globs and URLs began loading](https://github.com/anomalyco/opencode/commit/1e63a3bb73713ccaddd2c527e372ac79f2a72e4c); [`OPENCODE_DISABLE_CLAUDE_CODE_SKILLS` began excluding `.claude` skill roots](https://github.com/anomalyco/opencode/commit/775d1d0d7138fd9b4de455186ff2c1b1e2505a3b). Test one instruction and one excluded skill after migration.

## What to check before admitting tools

**Treat a malicious-package match as a compromised host.** Advisories cover all versions of seven third-party `@beloved-lenora/` packages: [opencode-shared-rpc](https://github.com/advisories/GHSA-8c9g-fwgq-rqq5), [opencode-shell-guard](https://github.com/advisories/GHSA-pm76-w63j-7j29), [opencode-btw](https://github.com/advisories/GHSA-xv54-6gmc-3xph), [opencode-stats](https://github.com/advisories/GHSA-f4h2-68pg-ffhj), [opencode-goal](https://github.com/advisories/GHSA-c78h-wwhq-g6j8), [opencode-todo](https://github.com/advisories/GHSA-9rjq-6mhc-46c5) and [opencode-orchestrator](https://github.com/advisories/GHSA-7wq2-8pc2-wm26). An eighth names [specific `opencode-skills-collection` versions that can expose the machine and its keys](https://github.com/advisories/GHSA-9855-prwc-mfp2). Check exact package names and versions. If they match, follow [host-compromise handling and rotate keys from a separate clean computer](https://github.com/advisories/GHSA-9855-prwc-mfp2). [Removing the package alone may leave other malware behind](https://github.com/advisories/GHSA-9855-prwc-mfp2).

**Set containment before delegating.** [Base permissions broadly allow actions](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/schema/src/agent.ts); [Plan denies edit-tool actions outside its plan directory without denying shell](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/plan.ts). [Custom child agents use their own permissions](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/subagent.ts), so inspect each child's rules. Enforce required filesystem, process and network limits separately through a container, VM or host policy: [OpenCode supplies no sandbox](https://github.com/anomalyco/opencode/blob/v2.1.4/SECURITY.md).

**Audit what scripted tools can change.** [MCP Code Mode is enabled by default](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/tools.mdx). [Nested read/edit/shell and MCP calls retain checks, while plugin tools enforce the permissions they assert](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/tools.mdx). [Session rename/move and worktree create/list request no built-in permission action; removal checks `edit`](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/opencode.ts). Review the destination before moving a session.

**Treat Always allow as project configuration.** [Approvals persist per project and configured denies precede saved allows](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/permission.ts). [Policy can deny the result](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/config/plugin/policy.ts), with [global and connected Console policy following project policy](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/policies.mdx#precedence). Review saved grants and test an intended denial across direct tools, Code Mode, MCP and custom child agents on the installed versions. [Admitted plugins run setup code when they load](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/plugins/index.mdx); decide which code to admit before trusting its permission assertions.

## Who can reach the host and its credentials

**Pair only clients that should control the execution host.** [Managed and foreground CLI servers generate or require passwords](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/server-process.ts); [OpenTunnel pairing reaches that server](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/web.mdx). [Password rotation revokes browser sessions, while lower-level embeddings can omit password configuration](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/server/src/auth.ts). Set authentication explicitly for custom network embeddings.

**Check the editor's executable and directory grants.** [`opencode acp` starts a private server](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/commands/handlers/acp.ts) and [persists additional-directory grants on the session](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/acp.mdx#additional-directories). Pin the launched binary, test resume and approval delivery, and review those grants before reusing the session elsewhere.

**Choose the execution host and who holds credentials together.** V2 [stores saved credentials in server SQLite](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/credential.ts), in a [JSON-valued text column](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/credential/sql.ts). Protect the data directory and credential exports. Optional [Console routing holds upstream keys in its hosted gateway](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/providers.mdx). To invalidate the key, revoke it at its upstream provider.

**Pin the model route when data terms matter.** [Documented retention varies by model and service](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/models.mdx). When only free OpenCode models are available, [default selection has preferred Big Pickle since 2.0.31](https://github.com/anomalyco/opencode/commit/8db638c53ca568028c915e593277b1a14a1e03fe). Use [`OPENCODE_DISABLE_FREE_MODELS=1` to exclude free OpenCode and Go models from defaults and fallbacks](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/model.ts) when those models are unsuitable.

## What to test and maintain

**Retest the human-input form that never arrived.** In 2.1.4, [MCP callbacks retain the context needed to deliver forms](https://github.com/anomalyco/opencode/commit/889abb4657e9a944a6ddcaaf5bc41eab5cd9a4c6), and [desktop/web render them](https://github.com/anomalyco/opencode/commit/8482dbf1e7eba18d6c5d0de6f02f8242112bcf06). Upgrade both ends and test submission and rejection. [An undelivered form can leave an MCP request waiting](https://github.com/anomalyco/opencode/commit/889abb4657e9a944a6ddcaaf5bc41eab5cd9a4c6).

**Keep client-hosted MCP in a pilot.** 2.1.4 adds an [experimental client helper](https://github.com/anomalyco/opencode/commit/453514613974ae54cbd6ae0ab878be1b0aff7a1e) and [WebSocket endpoint](https://github.com/anomalyco/opencode/commit/4a6dacec5e4afb69f211458e08be5233c57dd307). Pin both ends and test disconnect, reconnect and authorization before depending on local tools in a remote session. The [newer MCP protocol remains an explicit configuration choice](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/mcp-servers.mdx#protocol-version).

**Try background summaries with a token budget.** In 2.1.4, [`experimental.background_compaction: true` is opt-in, holds speculative summaries in memory, spends tokens even when they go unused, and loses them on restart](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/compaction.mdx). [Compaction can still wait for unfinished work](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/session/compaction.ts). Compare stalls, total spend, lost constraints and completed work on one long task. This is a latency experiment. Keep a separate plan for recovering the job.

**Restart the running application after updating.** [V2.1.3](https://github.com/anomalyco/opencode/commit/37d973754ba6cc31732f93421c0c18b675841573) and [V1.19.4](https://github.com/anomalyco/opencode/commit/baec69bae8e2c90551dbb8e3c462456870c735cf) bundle Bun 1.4.4, with [runtime security fixes](https://bun.com/blog/bun-v1.4.4#security). [Updating system Bun leaves the compiled application runtime in place](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/script/build.ts). Retest long TUI calls and background jobs after [V2.1.0's TUI request repair](https://github.com/anomalyco/opencode/commit/52a10f573f1da5103c85990da9341e3645a39365) and [V2.1.2's active-location protection](https://github.com/anomalyco/opencode/commit/89d996c2c5b902c9467494d8abe01205830e1d4a).

**Use reviewed files for conversation handoffs.** [V1.19.1 discontinued sharing and existing links](https://github.com/anomalyco/opencode/releases/tag/v1.19.1); [local unshare only clears metadata](https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/share/session.ts). V2.0.31 [removed hidden compaction replay context from sanitized exports](https://github.com/anomalyco/opencode/commit/706a688994c2343243615b0bd38083fc8fe69671). Regenerate support exports on the current version and inspect them before sending.

**Recheck Go limits before budgeting a run.** The [21 October 2026 documentation change reduces Step 5 Preview allowances from $60 to $15 for Go and $240 to $60 for Go Plus](https://github.com/anomalyco/opencode/commit/3a1f9a934fef659d4cfd6bd3964da6340cf0c3e9). Check your workspace's live model entitlement. The documentation does not establish when an account's limits changed.

## What is unresolved

- **The net integration saving.** Record a migration, then run fixed-task trials to see whether [the reusable SDK](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/sdk/index.mdx) saves more work than setup, recovery and review consume. Log exact versions, model, completion tests, human minutes and total inference spend.
- **The reported Console incident.** [OpenCode said on 17 October 2026](https://x.com/opencode/status/2111519637049319818) that a breach tied to a large-scale distillation attack affected 1.4% of Console users, a subset with external providers linked, and that those users were notified by email. Beyond that notice, require a technical postmortem, affected-key criteria and upstream revocation guidance before acting. [Gateway docs establish custody of linked keys](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/providers.mdx); the mechanism and affected keys remain unconfirmed. Keep this inquiry separate from the third-party package advisories above.
- **Remaining dependency exposure.** 2.1.4 [removes nested Seroval 1.3.2](https://github.com/anomalyco/opencode/commit/d93568f3344e1a93297d56bc1dc71892104856d0), but [root 1.5.6 remains](https://github.com/anomalyco/opencode/blob/v2.1.4/bun.lock). [A separate advisory covers CPU/memory exhaustion through malicious JSON in versions through 1.6.2](https://github.com/advisories/GHSA-jp82-f5mq-hwhp). Inventory installed dependencies and audit reachable inputs to determine which deployed services are exposed.
- **V1 destructive removal.** [CVE-2026-88624 describes directory deletion in V1.18.26](https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=CVE-2026-88624); [1.19.4 still recursively cleans an existing directory absent from git's worktree list](https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/worktree/index.ts#L388-L413). Gate removal pending a versioned reproduction and fixed-release mapping. [V2 instead requires a stored worktree with a strategy](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/worktree.ts#L257-L269); the V1 report does not establish an exposed V2 path.

## Profile hygiene

Reviewed for 24 October 2026. This page establishes no later state.
