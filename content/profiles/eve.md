---
schema_version: bitter.frontier_profile.v0
profile_id: eve
label: eve
owner: Vercel
source_contract: sources/eve.yml
homepage: https://eve.dev
docs: https://eve.dev/docs
tagline: "Reuse Eve's tools across harnesses, but keep consequential effects off 0.79.0's queued-text approval path."
compared_with: []
repo: https://github.com/vercel/eve
surface_class: open_source_releases
evidence_floor: release_note
status: active_watch
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: queue-auth
    finding_id: 2026-09-21-eve-cross-principal-authority-queued-messages-from-different-users-ran-under-the-last-sender
    last_verified: 2026-10-13
    status: retired
  - id: byok-key
    finding_id: 2026-09-21-eve-credential-exposure-byok-provider-key-served-from-eve-v1-info-chatgpt-login-stored-in-plai
    last_verified: 2026-10-13
    status: retired
  - id: auto-approval
    finding_id: 2026-09-21-eve-auto-a-model-can-now-approve-tool-calls
    last_verified: 2026-10-13
    status: active
  - id: approval-integrity-once-keys
    finding_id: 2026-09-21-eve-approval-integrity-three-ways-an-approval-could-authorize-the-wrong-thing-closed-in-window
    last_verified: 2026-10-13
    status: retired
  - id: queue-binds-at-0-63-0
    finding_id: 2026-09-21-eve-carry-forward-turnpolicy-queue-binds-on-slack-and-custom-channels-at-0-63-0-default-is-sti
    last_verified: 2026-10-13
    status: retired
  - id: trace-content-defaults
    finding_id: 2026-09-21-eve-trace-content-defaults-flipped-four-times-0-55-0-recorded-anonymous-content-for-a-day
    last_verified: 2026-10-13
    status: retired
  - id: deployed-self-modification
    finding_id: 2026-09-21-eve-self-modification-is-no-longer-development-only-a-deployed-mode-edits-a-git-checkout-and
    last_verified: 2026-10-13
    status: active
  - id: chat-channel-approvals
    finding_id: 2026-09-21-eve-chat-channel-approvals-private-slack-dm-routing-telegram-and-chat-sdk-hitl-pending-approva
    last_verified: 2026-10-13
    status: retired
  - id: breaking-execution-model
    finding_id: 2026-09-21-eve-breaking-capability-moves-persistent-subagents-by-default-one-workflow-sessions-workflow
    last_verified: 2026-10-13
    status: retired
  - id: npm-versions-without-tags
    finding_id: 2026-09-21-eve-channel-facts-npm-published-three-versions-with-no-git-tag-latest-is-0-64
    last_verified: 2026-10-13
    status: retired
  - id: turnpolicy-queue-did-not-bind-until-0-39-3
    finding_id: 2026-08-20-eve-0-39-3-restores-turnpolicy-queue-after-silent-steer-fallback
    last_verified: 2026-10-13
    status: retired
  - id: duplicate-pending-approvals-closed-in-0-39-1
    finding_id: 2026-08-20-eve-0-39-1-stops-duplicate-tool-calls-while-approval-pending
    last_verified: 2026-10-13
    status: retired
  - id: channel-hitl-metadata-and-credential-redaction
    finding_id: 2026-08-20-eve-0-40-through-0-42-redact-credentials-and-stop-channel-metadata-leaking-into-approvals
    last_verified: 2026-08-20
    status: retired
  - id: filesystem-first-agent
    finding_id: 2026-06-17-eve-filesystem-first-agent-model
    last_verified: 2026-10-13
    status: active
  - id: initial-public-release
    finding_id: 2026-06-17-eve-initial-public-release
    last_verified: 2026-10-13
    status: retired
  - id: durable-resumable-execution
    finding_id: 2026-06-17-eve-durable-execution-workflow-sdk
    last_verified: 2026-10-13
    status: active
  - id: hitl-approval-gates
    finding_id: 2026-06-17-eve-hitl-approval-gates
    last_verified: 2026-10-13
    status: retired
  - id: multi-backend-sandbox
    finding_id: 2026-06-17-eve-multi-backend-sandbox
    last_verified: 2026-10-13
    status: retired
  - id: subagents-and-mcp-connections
    finding_id: 2026-06-17-eve-subagents-and-mcp-connections
    last_verified: 2026-10-13
    status: retired
  - id: ai-gateway-oidc
    finding_id: 2026-06-17-eve-ai-gateway-oidc
    last_verified: 2026-10-13
    status: retired
  - id: fast-beta-velocity
    finding_id: 2026-06-17-eve-fast-beta-velocity
    last_verified: 2026-10-13
    status: retired
  - id: requester-credentials
    finding_id: 2026-10-13-eve-approved-calls-ran-with-the-approver-s-identity-and-credentials-until-0-78
    last_verified: 2026-10-13
    status: active
  - id: deferred-dispatch-and-withdrawal
    finding_id: 2026-10-13-eve-approval-gated-workflow-tools-could-start-before-approval-until-0-69-0-and-approvals-outli
    last_verified: 2026-10-13
    status: active
  - id: hooks-require-cancel
    finding_id: 2026-10-13-eve-a-hook-that-throws-no-longer-stops-the-turn-from-0-68-0-hooks-fail-open-and-must-call-ctx
    last_verified: 2026-10-13
    status: active
  - id: held-turn-and-anonymous-exception
    finding_id: 2026-10-13-eve-a-pending-approval-holds-the-turn-authenticated-requesters-answer-by-default-with-an-anony
    last_verified: 2026-10-13
    status: active
  - id: development-host-editing
    finding_id: 2026-10-13-eve-local-self-modification-is-mounted-by-default-in-eve-dev-serves-any-admitted-caller-and
    last_verified: 2026-10-13
    status: active
  - id: mcp-tools-and-skills
    finding_id: 2026-10-13-eve-an-agent-s-tools-and-skills-can-be-served-over-mcp-to-other-harnesses-with-no-model-in-the
    last_verified: 2026-10-13
    status: active
  - id: catalog-and-planning-removals
    finding_id: 2026-10-13-eve-eve-deleted-scaffolding-the-todo-tool-default-ask-question-background-tasks-and-per-connec
    last_verified: 2026-10-13
    status: active
  - id: live-state-migration
    finding_id: 2026-10-13-eve-from-0-63-0-to-0-79-0-is-a-migration-run-modes-tasks-stream-and-handoff-formats-all-broke
    last_verified: 2026-10-13
    status: active
  - id: model-and-trace-setup-defaults
    finding_id: 2026-10-13-eve-defaults-that-flipped-an-unconfigured-agent-now-runs-gpt-6-luna-fast-at-high-reasoning-and
    last_verified: 2026-10-13
    status: active
  - id: stable-workflow-build-inputs
    finding_id: 2026-10-13-eve-the-workflow-sdk-under-eve-left-beta-eve-now-pins-the-5-x-stable-line
    last_verified: 2026-10-13
    status: active
  - id: code-extension-benchmark
    finding_id: 2026-10-13-eve-eve-ships-a-coding-agent-extension-and-its-own-benchmark-does-not-separate-it-from-pi-or
    last_verified: 2026-10-13
    status: active
  - id: dated-install-channel
    finding_id: 2026-10-13-eve-channel-facts-32-stables-in-22-days-every-npm-version-tagged-previews-only-as-github-prere
    last_verified: 2026-10-13
    status: active
  - id: approval-prompts-and-eval-scores
    finding_id: 2026-10-13-eve-0-79-0-adds-annotation-aware-approval-policies-readable-prompts-and-scored-eval-reporting
    last_verified: 2026-10-13
    status: active
  - id: pre-prompt-queued-consent
    finding_id: 2026-10-13-eve-queued-approval-text-can-settle-a-prompt-that-did-not-exist-when-it-was-sent-the-fix-is
    last_verified: 2026-10-13
    status: active
  - id: undici-patched-dependency
    finding_id: 2026-10-13-eve-undici-8-10-2-replaces-a-dependency-version-matching-ten-advisories
    last_verified: 2026-10-13
    status: retired
  - id: datadog-eval-export-default
    finding_id: 2026-10-13-eve-configured-datadog-eval-reporters-export-content-by-default
    last_verified: 2026-10-13
    status: active
  - id: local-recovery-opt-in
    finding_id: 2026-10-13-eve-local-development-recovery-becomes-explicit-rather-than-automatic
    last_verified: 2026-10-13
    status: active
  - id: sandbox-agent-and-catalog-defaults
    finding_id: 2026-10-13-eve-unpinned-models-agent-aware-sandbox-commands-and-demand-added-catalogs-change-defaults
    last_verified: 2026-10-13
    status: active
  - id: experimental-schedule-ownership
    finding_id: 2026-10-13-eve-experimental-dynamic-schedules-activate-immediately-and-payload-edits-transfer-creator-ide
    last_verified: 2026-10-13
    status: active
  - id: approval-lifecycle-repairs
    finding_id: 2026-10-13-eve-further-cancellation-and-child-approval-lifecycle-defects-are-repaired
    last_verified: 2026-10-13
    status: active
  - id: sandbox-provider-cleanup
    finding_id: 2026-10-13-eve-durable-session-endings-clean-up-sandbox-resources-and-provider-hooks-are-renamed
    last_verified: 2026-10-13
    status: active
  - id: buzz-adapter-source-removal
    finding_id: 2026-10-13-eve-buzz-acp-adapter-source-disappears-while-its-last-npm-artifact-remains-available
    last_verified: 2026-10-13
    status: active
  - id: attachment-integrity-and-pdf-intake
    finding_id: 2026-10-13-eve-attachment-integrity-checks-and-richer-intake-make-file-workflows-more-reliable
    last_verified: 2026-10-13
    status: active
  - id: native-search-and-stream-retry
    finding_id: 2026-10-13-eve-gateway-native-search-and-silent-stream-retry-extend-unattended-work
    last_verified: 2026-10-13
    status: retired
  - id: same-host-result-identity-main
    finding_id: 2026-10-13-eve-same-host-mcp-and-openapi-connection-result-identities-are-repaired-only-on-main
    last_verified: 2026-10-13
    status: active
posture_basis:
  capability:
    - 2026-06-17-eve-filesystem-first-agent-model
    - 2026-06-17-eve-durable-execution-workflow-sdk
    - 2026-10-13-eve-an-agent-s-tools-and-skills-can-be-served-over-mcp-to-other-harnesses-with-no-model-in-the
    - 2026-10-13-eve-eve-deleted-scaffolding-the-todo-tool-default-ask-question-background-tasks-and-per-connec
    - 2026-10-13-eve-the-workflow-sdk-under-eve-left-beta-eve-now-pins-the-5-x-stable-line
    - 2026-10-13-eve-eve-ships-a-coding-agent-extension-and-its-own-benchmark-does-not-separate-it-from-pi-or
    - 2026-10-13-eve-experimental-dynamic-schedules-activate-immediately-and-payload-edits-transfer-creator-ide
    - 2026-10-13-eve-attachment-integrity-checks-and-richer-intake-make-file-workflows-more-reliable
  accessibility:
    - 2026-06-17-eve-filesystem-first-agent-model
    - 2026-10-13-eve-an-agent-s-tools-and-skills-can-be-served-over-mcp-to-other-harnesses-with-no-model-in-the
    - 2026-10-13-eve-channel-facts-32-stables-in-22-days-every-npm-version-tagged-previews-only-as-github-prere
    - 2026-10-13-eve-0-79-0-adds-annotation-aware-approval-policies-readable-prompts-and-scored-eval-reporting
  governance:
    - 2026-10-13-eve-approved-calls-ran-with-the-approver-s-identity-and-credentials-until-0-78
    - 2026-10-13-eve-approval-gated-workflow-tools-could-start-before-approval-until-0-69-0-and-approvals-outli
    - 2026-10-13-eve-a-hook-that-throws-no-longer-stops-the-turn-from-0-68-0-hooks-fail-open-and-must-call-ctx
    - 2026-10-13-eve-a-pending-approval-holds-the-turn-authenticated-requesters-answer-by-default-with-an-anony
    - 2026-10-13-eve-local-self-modification-is-mounted-by-default-in-eve-dev-serves-any-admitted-caller-and
    - 2026-10-13-eve-from-0-63-0-to-0-79-0-is-a-migration-run-modes-tasks-stream-and-handoff-formats-all-broke
    - 2026-10-13-eve-defaults-that-flipped-an-unconfigured-agent-now-runs-gpt-6-luna-fast-at-high-reasoning-and
    - 2026-10-13-eve-queued-approval-text-can-settle-a-prompt-that-did-not-exist-when-it-was-sent-the-fix-is
    - 2026-10-13-eve-configured-datadog-eval-reporters-export-content-by-default
    - 2026-10-13-eve-local-development-recovery-becomes-explicit-rather-than-automatic
    - 2026-10-13-eve-unpinned-models-agent-aware-sandbox-commands-and-demand-added-catalogs-change-defaults
    - 2026-10-13-eve-experimental-dynamic-schedules-activate-immediately-and-payload-edits-transfer-creator-ide
    - 2026-10-13-eve-further-cancellation-and-child-approval-lifecycle-defects-are-repaired
    - 2026-10-13-eve-durable-session-endings-clean-up-sandbox-resources-and-provider-hooks-are-renamed
    - 2026-10-13-eve-buzz-acp-adapter-source-disappears-while-its-last-npm-artifact-remains-available
    - 2026-10-13-eve-same-host-mcp-and-openapi-connection-result-identities-are-repaired-only-on-main
stance:
  use_for: "TypeScript agent services with explicit tool authorization and tested approval policies, including tools and skills served beneath another harness."
  avoid_for: "Consequential effects on 0.79.0's queued-text approval path; shared development hosts with local editing enabled; unchanged 0.63.0 integrations or rollback across live-session checkpoint boundaries; irreversible effects authorized by auto classification or MCP annotation hints alone."
  watch_next: "Wait for <a href='https://github.com/vercel/eve/commit/0dea0ded869be7db30ae90ed8072d29e6e57df61'>the queued-consent repair</a> to ship, then test that approval text sent before a prompt cannot settle it or run the tool."

---

# eve

## Where it stands, 2026-10-13

Eve 0.79.0 can accept an answer before it has asked the question: [queued `approve` text can settle a later approval prompt](https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244). [The repair was main-only on 13 October 2026](https://github.com/vercel/eve/commit/0dea0ded869be7db30ae90ed8072d29e6e57df61). Keep consequential tools off this path until a release includes the repair and your deployment rejects pre-prompt approval text.

Install [`npm install eve@0.79.0`](https://registry.npmjs.org/eve/0.79.0), [released 13 October 2026](https://github.com/vercel/eve/releases/tag/eve%400.79.0), with [Node 24 or later](https://registry.npmjs.org/eve/0.79.0). [Vercel's TypeScript framework defines agents as reviewable files](https://github.com/vercel/eve/blob/eve%400.79.0/README.md). This [non-prerelease package release](https://github.com/vercel/eve/releases/tag/eve%400.79.0) remains [beta, with APIs and behavior subject to change](https://github.com/vercel/eve/blob/eve%400.79.0/README.md#L146-L149).

### [Serve Eve tools over MCP under the caller's identity.](https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx#L216-L277)

Opt in with [`mcpChannel({ tools: true, skills: true })`](https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx#L216-L346). Eligible calls [run as the route-authenticated caller or a trusted forwarded user; conversation-only tools are excluded](https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx#L216-L277). Another harness can use [Eve's tools without an Eve model turn](https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx#L216-L277). Before replacing a private bridge, spend the review on which callers each tool admits: [agent instructions do not govern these calls, and calls needing human approval return `approval_required` without running](https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx#L230-L242).

[Parallel calls and lost-response retries do not supply ordered, exactly-once effects](https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx#L228-L317). Treat [MCP `readOnlyHint` as a server assertion](https://github.com/vercel/eve/commit/f5e5183ae40287c9c922b6b4591fb36b53950412); enforce access in tools or policies.

**Audit approvals that borrowed another person's account.** [0.78.0](https://github.com/vercel/eve/releases/tag/eve%400.78.0) changed [approved execution to the requester's identity, connections and credentials, with a policy recheck](https://github.com/vercel/eve/commit/9559de83b65e89c24172c2b9c1a80382033556aa). For 0.70.0 through 0.77.0, [compare `approval.settled.responderPrincipalId` with the requester and inspect mismatched calls' effects](https://github.com/vercel/eve/commit/9559de83b65e89c24172c2b9c1a80382033556aa); [through 0.71.2, inspect later calls in that turn too](https://github.com/vercel/eve/commit/a8262be2ba5cd4ecb3a944010c890697986e13b7). Redesign workflows that relied on an approver's credentials: [approved calls now use the requester's identity and credentials](https://github.com/vercel/eve/blob/eve%400.79.0/docs/tools/human-in-the-loop.md#L257). [The explicit approver-credential proposal was unmerged on 13 October 2026](https://github.com/vercel/eve/pull/4604).

**Migrate live sessions and clients together.** From 0.63.0, keep older deployments until their sessions end: [0.69.0](https://github.com/vercel/eve/releases/tag/eve%400.69.0), [0.70.0](https://github.com/vercel/eve/releases/tag/eve%400.70.0) and [0.75.0](https://github.com/vercel/eve/releases/tag/eve%400.75.0) changed checkpoints and block backward handoff across their boundaries.

If upgrading from 0.63.0, follow [the migration record](/findings/2026-10-13-eve-from-0-63-0-to-0-79-0-is-a-migration-run-modes-tasks-stream-and-handoff-formats-all-broke/) for configuration, CLI and custom-provider changes before moving clients or extensions.

**Replace guards that throw.** Since [0.68.0](https://github.com/vercel/eve/releases/tag/eve%400.68.0), [hook-handler failures, including metrics failures, are logged while work continues; guards that must stop the turn need `ctx.cancel()`](https://github.com/vercel/eve/commit/2cfcecc3965185c5df31130366de4cb292d85859). Inspect entitlement and credential hooks. Test for `turn.cancelled`.

**Choose who may answer and test the whole wait.** [Approvals hold the same turn](https://github.com/vercel/eve/commit/ddc8e12ff9ef613e0a9428e008a16b79bd77561f). Without an `approval.response` policy, [only an authenticated requester answers; anonymous or unidentified requesters allow any responder](https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/harness/hitl/coordinator.ts#L158-L176). Set a policy for designated approvers. Test [that denying approval prevents the tool from starting](https://github.com/vercel/eve/commit/bb70743186612e13bd0b05c58d37e5b024d17a76). Include [cancelled responses and rejected child responders](https://github.com/vercel/eve/releases/tag/eve%400.75.0) and [cancellation after resume](https://github.com/vercel/eve/releases/tag/eve%400.77.0).

**Disable local editing on shared development hosts.** [`eve dev` mounts local self-modification by default](https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/self-modification.md#L6-L8), and [every admitted caller can use enabled editing tools](https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/runtime/local-dev-capability.ts#L30-L37). Use `eve dev --no-default-extensions` and inspect `agent/extensions/`: [explicit mounts remain enabled](https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/self-modification.md#L79-L87). Check the listener: [explicit host or Nitro hostname takes precedence](https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/internal/nitro/host/start-development-server.ts#L457-L458) over [the 127.0.0.1 fallback](https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/internal/nitro/host/dev-server-url.ts#L1). For deployed editing, use [`eve/self-modification/remote`, which requires authorization and opens draft pull requests](https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/self-modification.md).

**Before sensitive evals, choose what leaves your deployment.** [Configured Datadog reporters export inputs, outputs, expectations, errors and assertion details by default](https://github.com/vercel/eve/blob/eve%400.79.0/docs/evals/reporters.mdx). Set the relevant [`recordInputs`, `recordOutputs`, `recordExpectedOutputs`, `recordErrors` and `recordAssertionDetails` options to false](https://github.com/vercel/eve/blob/eve%400.79.0/docs/evals/reporters.mdx#L66-L68). Review eval exports separately from [runtime audience-based content capture](https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/instrumentation/instrumentation.mdx#L94-L98). [On new Vercel projects, Eve attempts 100% trace sampling but warns if setup fails](https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/setup/vercel-trace-sampling.ts); inspect actual settings. Update custom reporters: [optional `passed` means failure only when `passed === false`](https://github.com/vercel/eve/commit/bc2be45f02269a3e3d91f02ded40699719006e01).

**Review source changes before resuming local work.** [Restarts leave earlier workflows dormant; `eve dev --resume` may perform work before replay fails after source changes](https://github.com/vercel/eve/releases/tag/eve%400.68.0). Choose recovery deliberately. Do not assume durability means automatic restart recovery.

**Test the smaller default tool set before retiring planning code.** [Eve removed `todo` and made `ask_question` opt-in](https://github.com/vercel/eve/commit/60998d606bfceb4ab367de869d73769065eadd04); [catalog tools appear on demand, then stay](https://github.com/vercel/eve/commit/db71190b2c3abce9f375b06fc890d90b035d1fe7). Compare accepted outcomes and human review. Keep planning code where you need the oversight. Deletion alone does not measure model progress.

**Try the coding extension in Eve before considering a harness switch.** Mount [`eve/extensions/code`](https://github.com/vercel/eve/blob/eve%400.79.0/docs/code-extension.mdx) for repository work. The [vendor summary generated on 3 October 2026 reports 24/36 resolved attempts for Eve source `4d1491477a2e4f220131a3eb857a030c9eec0419`, measured on 30 September: 12 tasks, three attempts each, on `anthropic/claude-sonnet-5.5`](https://github.com/vercel/eve/blob/eve%400.79.0/apps/docs/lib/evals/eve-code-benchmark.json). [The same vendor benchmark reports Pi 0.85.1 at 26/36 and opencode 1.18.30 at 18/36, alongside Eve's 24/36; their reported 95% intervals overlap](https://github.com/vercel/eve/blob/eve%400.79.0/apps/docs/lib/evals/eve-code-benchmark.json). [By the vendor's stated method, that establishes no winner](https://github.com/vercel/eve/blob/eve%400.79.0/docs/code-extension.mdx#L6-L27).

Overlap does not establish equivalence. The [tested Eve source is not 0.79.0](https://github.com/vercel/eve/blob/eve%400.79.0/apps/docs/lib/evals/eve-code-benchmark.json). These numbers do not justify a harness switch.

## What is unresolved

- **Keep automatic approval to reversible effects.** [`auto()` is opt-in and sends tool input to its decision-model provider](https://github.com/vercel/eve/blob/eve%400.79.0/docs/tools/human-in-the-loop.md#L37-L50). [The research note does not establish how often automatic approval mistakenly permits a tool call that should be denied](https://github.com/vercel/eve/blob/eve%400.79.0/research/automatic-tool-approval.md). Check that tool calls your policy must forbid never execute in your deployment. Use deterministic entitlement checks for irreversible effects.
- **Wait for a release fixing result matching between connections on the same host.** [The MCP/OpenAPI `toolResultFrom` repair is main-only](https://github.com/vercel/eve/commit/57d4272b7a39c6a179c7b88aff3111bafaf99b2c). A release with the repair and hook/result tests would settle matching for your distinct connections. [Identical URL and description leave fallback matching ambiguous](https://github.com/vercel/eve/blob/57d4272b7a39c6a179c7b88aff3111bafaf99b2c/packages/eve/src/internal/authored-definition/source-identity.ts#L80-L119); [the original definition objects loaded by Eve still distinguish the connections](https://github.com/vercel/eve/blob/57d4272b7a39c6a179c7b88aff3111bafaf99b2c/packages/eve/src/public/tools/result.test.ts#L225-L264); test those separately even after the release.
- **Require maintained source before choosing Buzz ACP.** [The adapter source was removed](https://github.com/vercel/eve/commit/44c8a9bca65d538bc165637246859df7f73f4819) while [the 0.0.46 npm artifact survives](https://registry.npmjs.org/@eve%2fbuzz-acp-adapter/0.0.46). That artifact does not prove ongoing maintenance. A maintained source path and supported release with Eve integration tests would settle the choice.
- **Prove recovery before choosing a non-Vercel host.** [The hosting guide requires an explicit workspace-peer transport for delegation outside Vercel and still names the beta Workflow line](https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/deployment/self-hosting.md), while [Eve's Workflow build inputs use stable 5.x pins](https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/package.json). Neither establishes cross-host recovery. Before choosing another host, require a supported Workflow backend configuration using those stable 5.x dependencies and passing crash and replay tests.

## Evidence and limits

[MCP tools and skills are released but opt-in](https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx#L216-L346); [automatic approval is released but opt-in](https://github.com/vercel/eve/blob/eve%400.79.0/docs/tools/human-in-the-loop.md#L37-L50); [experimental schedules are released but opt-in](https://github.com/vercel/eve/releases/tag/eve%400.74.0).

This 2026-10-13 profile draws on source, documentation and attributed vendor measurements. It asserts no end-to-end deployment or recovery result. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the evidence contract.

## Profile hygiene
