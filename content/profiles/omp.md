---
schema_version: bitter.frontier_profile.v0
profile_id: omp
label: OMP (Oh My Pi)
owner: can1357
source_contract: sources/omp.yml
homepage: https://omp.sh/
docs: https://omp.sh/docs
tagline: "OMP makes plan review programmable; choosing its extensions is part of approving the work."
compared_with:
  - pi-coding-agent
repo: https://github.com/can1357/oh-my-pi
surface_class: open_source_commits
evidence_floor: official_docs
status: active_watch
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: repo-writes-policy
    finding_id: 2026-10-13-omp-project-inputs-still-load-without-trust-approval-and-18-7-0-documented-that-design
    last_verified: 2026-10-13
    status: active
  - id: approval-bypasses-18-2-1
    finding_id: 2026-09-21-omp-v18-2-1-closes-a-cluster-of-approval-bypasses-including-one-where-a-missing-context-resolv
    last_verified: 2026-09-23
    status: retired
  - id: collab-view-link-could-steer
    finding_id: 2026-09-21-omp-collab-relay-sessions-a-view-only-link-could-steer-the-session-after-a-host-reconnect-fixe
    last_verified: 2026-10-13
    status: retired
  - id: eval-orchestration-ungated-by-patterns
    finding_id: 2026-10-13-omp-invalid-approval-flags-and-late-ast-guards-were-fixed-but-eval-still-sits-outside-those
    last_verified: 2026-10-13
    status: active
  - id: tags-without-releases
    finding_id: 2026-09-21-omp-channel-tag-ahead-of-release-recurred-three-times-and-one-release-never-reached-npm
    last_verified: 2026-09-23
    status: retired
  - id: install-paths-agree-18-2-8
    finding_id: 2026-09-21-omp-the-four-install-paths-agree-on-18-2-8-at-window-close-nix-unpinned-builds-9-commits-past
    last_verified: 2026-09-23
    status: retired
  - id: stored-state-fixes-18-2-1
    finding_id: 2026-09-21-omp-stored-state-fixes-cross-project-hindsight-recall-on-move-config-yml-erasure-dotenv-leakag
    last_verified: 2026-09-23
    status: retired
  - id: write-broker-in-unreleased-tags
    finding_id: 2026-08-17-omp-omp-tags-v17-3-6-and-v17-3-7-carry-an-extension-hook-that-brokers
    last_verified: 2026-08-18
    status: retired
  - id: write-broker-on-npm-17-3-7
    finding_id: 2026-08-20-omp-v17-3-7-released-the-write-fallback-hook-v17-3-6-still-has-no-release
    last_verified: 2026-08-20
    status: retired
    note: Channel reading superseded. The write and delete fallback hooks are still in the extension API at v18.2.8; see repo-writes-policy.
  - id: bash-patterns-do-not-gate-eval
    finding_id: 2026-08-20-omp-bash-patterns-do-not-gate-eval
    last_verified: 2026-10-13
    status: retired
  - id: blind-approval-fixed-twice
    finding_id: 2026-08-17-omp-omp-s-always-ask-approval-prompt-opened-before-the-diff-rendered-fixed
    last_verified: 2026-10-13
    status: retired
  - id: stable-channel-18-10-4
    finding_id: 2026-10-13-omp-the-close-is-18-10-4-44-releases-two-tag-only-versions-and-one-package-without-a-tag
    last_verified: 2026-10-13
    status: active
  - id: extension-plan-review
    finding_id: 2026-10-13-omp-18-10-4-lets-extensions-revise-and-execute-the-plan-review-while-tool-approvals-require
    last_verified: 2026-10-13
    status: active
  - id: cfg-grants-across-keys
    finding_id: 2026-10-13-omp-the-agent-can-change-omp-settings-including-approval-policy-session-grants-span-keys-but
    last_verified: 2026-10-13
    status: active
  - id: extension-context-and-reply-text
    finding_id: 2026-10-13-omp-loaded-extensions-can-add-privileged-model-context-and-rewrite-finished-reply-text
    last_verified: 2026-10-13
    status: active
  - id: provider-and-restore-boundaries
    finding_id: 2026-10-13-omp-provider-exclusions-and-saved-model-restoration-stopped-silently-crossing-boundaries-with
    last_verified: 2026-10-13
    status: active
  - id: plugin-token-exception
    finding_id: 2026-10-13-omp-credential-fixes-include-a-github-plugin-token-exception-advisory-searches-found-no-matchi
    last_verified: 2026-10-13
    status: active
  - id: stencil-binary-integrity
    finding_id: 2026-10-13-omp-binary-distribution-moved-to-stencil-in-18-9-0-while-installer-integrity-improved
    last_verified: 2026-10-13
    status: active
  - id: pi-ports-and-idle-warming
    finding_id: 2026-10-13-omp-omp-ported-pi-cache-warming-and-filled-three-pi-1-x-compatibility-gaps-without-adopting
    last_verified: 2026-10-13
    status: active
  - id: process-url-and-model-input-breaks
    finding_id: 2026-10-13-omp-process-control-moved-to-urls-and-per-call-subagent-model-overrides-disappeared-in-a-patch
    last_verified: 2026-10-13
    status: active
  - id: ida-and-windows-daemons
    finding_id: 2026-10-13-omp-ida-pro-became-agent-operable-owner-only-windows-daemons-require-closing-old-sessions
    last_verified: 2026-10-13
    status: active
  - id: opt-in-worktrees-and-git-guard
    finding_id: 2026-10-13-omp-concurrent-sessions-gained-opt-in-worktrees-and-a-limited-git-guard-with-attention-status
    last_verified: 2026-10-13
    status: active
  - id: account-pools-and-reset-credits
    finding_id: 2026-10-13-omp-oauth-account-pools-became-workload-controls-then-needed-a-fix-for-spending-excluded-accou
    last_verified: 2026-10-13
    status: active
  - id: plain-task-results
    finding_id: 2026-10-13-omp-task-subagents-switched-to-plain-text-results-by-default-while-eval-spawns-stayed-structur
    last_verified: 2026-10-13
    status: active
  - id: bounded-saved-output
    finding_id: 2026-10-13-omp-saved-streaming-tool-output-became-a-16-mib-head-and-tail-sample-by-default
    last_verified: 2026-10-13
    status: active
  - id: scaled-compaction-limits
    finding_id: 2026-10-13-omp-per-model-compaction-numbers-became-scaled-bases-instead-of-exact-triggers
    last_verified: 2026-10-13
    status: active
  - id: main-approval-steering
    finding_id: 2026-10-13-omp-after-stable-main-kept-the-composer-open-during-approval-and-denied-waiting-calls-when-ste
    last_verified: 2026-10-13
    status: active
  - id: session-and-auth-transfer
    finding_id: 2026-10-13-omp-session-handoff-became-explicit-but-credential-export-writes-live-secrets-as-plain-json
    last_verified: 2026-10-13
    status: active
  - id: collab-control-and-relay
    finding_id: 2026-10-13-omp-the-agent-can-change-omp-settings-including-approval-policy-session-grants-span-keys-but
    last_verified: 2026-10-13
    status: active
  - id: custom-task-and-edit-inputs
    finding_id: 2026-10-13-omp-additional-task-and-edit-inputs-broke-compatibility-including-complexity-and-sm-headers
    last_verified: 2026-10-13
    status: active
  - id: omp-codex-direct-tools
    finding_id: 2026-10-13-omp-18-10-4-removed-omp-codex-code-mode-and-corrected-cross-model-compaction-and-devin-window
    last_verified: 2026-10-13
    status: active
stance:
  use_for: "Use 18.10.4 for plan-review automation with extensions you have inspected. <a href=\"#decide-who-can-approve-and-configure-the-work\">Choose who can approve the work.</a>"
  avoid_for: "Avoid unattended first runs in repositories you have not inspected. <a href=\"#decide-who-can-approve-and-configure-the-work\">Review the project inputs first.</a>"
  watch_next: "Watch for a released project-loading trust gate. <a href=\"#what-is-unresolved\">See the tests that would change this advice.</a>"
---

# OMP (Oh My Pi)

## Where it stands, 2026-10-13

In [stable 18.10.4](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4), OMP [lets extensions reopen plan review](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L358-L360), [revise the plan and approve execution](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560). [An extension can answer while the terminal picker remains open; the first answer wins](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560). [An extension can approve execution while a person is still reading the plan.](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560)

**Install [stable 18.10.4](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4) in a repository you inspected.** Use [`bun install -g @oh-my-pi/pi-coding-agent@18.10.4`](https://registry.npmjs.org/@oh-my-pi/pi-coding-agent/18.10.4) or [the Homebrew formula at 18.10.4](https://github.com/can1357/homebrew-tap/blob/22d4f9b973c504af44c1c54907dcc8c5c6729caf/Formula/omp.rb) with `brew install can1357/tap/omp`. Pin Nix with `nix run github:can1357/oh-my-pi/v18.10.4`; [the package takes its version label from the selected source](https://github.com/can1357/oh-my-pi/blob/v18.10.4/nix/package.nix#L114-L117).

**Check a binary against GitHub's matching checksum.** Since [18.9.0, binary installation uses Stencil's build service and checks SHA-256](https://github.com/can1357/oh-my-pi/commit/4585b144ff86b9d3dd6d9d17263cbd541a4ba8aa). Compare with [GitHub's 18.10.4 checksums](https://github.com/can1357/oh-my-pi/releases/download/v18.10.4/SHA256SUMS.txt). A [hash supplied by the same download service](https://github.com/can1357/oh-my-pi/commit/4585b144ff86b9d3dd6d9d17263cbd541a4ba8aa) detects corruption. It cannot independently authenticate that service's bytes.

**Close older Windows sessions after upgrading to 18.10.4.** [18.10.0 made daemon transport owner-only and requires closing older sessions](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.0).

Before rollout, [review who can approve and configure the work](#decide-who-can-approve-and-configure-the-work), [set upgrade contracts](#set-contracts-before-rolling-out-the-upgrade), and [choose how much work to delegate](#choose-how-much-work-the-agent-can-operate).

<h2 id="decide-who-can-approve-and-configure-the-work">Decide who can approve and configure the work</h2>

**Inspect project inputs before first launch.** [OMP loads them without trust approval](https://github.com/can1357/oh-my-pi/blob/v18.10.4/README.md#L593-L602), [project config outranks global policy](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L166), and [approval defaults to `yolo`](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/tools/settings.ts#L311-L315). Read `.omp`, package extension declarations, hooks, commands and project tools. Put approval and provider exclusions in [runtime controls or a `--config` overlay above project config](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L166). For [project MCP exclusion, use nested YAML: `mcp: { enableProjectConfig: false }`](https://github.com/can1357/oh-my-pi/blob/v18.10.4/README.md#L595-L602).

**Restrict which extensions can answer.** Inspect `resolvePlanReview` and `openPlanReview`, then [disable extension discovery or use an exact trusted-extension allowlist](https://github.com/can1357/oh-my-pi/blob/v18.10.4/README.md#L602). An extension can [revise the plan file and approve execution](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560). [Edits in the review overlay take precedence over the extension's revisions](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560). [Downstream tool policy still applies](https://github.com/can1357/oh-my-pi/commit/d40b86cf7d6607fc349545ec67ed321023e53425).

**Audit extensions beyond their tool lists or import names.** Handlers can [add developer/system-priority context without changing displayed tool results](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L642-L655), where the transport supports it, and [rewrite finalized reply text in history without retracting streamed text](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L490). Inspect `additionalContext`, `addAdditionalContext` and `assistant_message`.

Test Pi extensions individually: [Pi imports resolve to OMP's bundled copies](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extension-loading.md#L280), whose [`isProjectTrusted()` returns true](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/runner.ts#L1401-L1404); that check cannot be your OMP trust guard.

**Choose Allow once for settings changes.** The [interactive agent can change approval policy through `cfg://`; yolo alone does not authorize it](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L399-L461). Inspect the key and before/after values. [Session grants span keys; a session-only grant asks on the first save, while a save grant covers later saves](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L120-L148). Since [18.6.1, writable collab guests can answer these prompts, including persistence to global config](https://github.com/can1357/oh-my-pi/commit/548ccb3e9edbeed9e0c543aff98a1fcb28d803c3). Share a control link only with someone allowed to save those settings.

**Gate eval separately from shell commands.** [Bash patterns do not govern commands spawned through eval](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L75-L90); [AST rules add guidance after an eval-bridged call](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/ttsr-coordinator.ts#L294-L306). Set [`tools.approval.eval: prompt` or `deny`](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L81) when those boundaries matter. The [computer API is off by default, and its read-only guard is not a general JavaScript sandbox](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L83-L90).

**Read full tool content in the transcript before approving a compact prompt.** The [18.10.4 dialog makes Enter inert and guards Ctrl+Enter or Ctrl+Q for half a second](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L96-L105).

**Keep credentials out of plugin URLs.** [Non-GitHub Git specs are sanitized, while GitHub specs still reach Bun unchanged](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/plugins/manager.ts#L77-L96). Inspect existing `~/.omp/plugins/package.json` and lockfiles on any version. Rotate any embedded credentials you find.

<h2 id="set-contracts-before-rolling-out-the-upgrade">Set contracts before rolling out the upgrade</h2>

**Restore task validation for machine consumers.** Set `task.structured: true` before upgrading: [18.10.2 changed task results to plain text by default](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.2). [Eval `agent()` and `workpool()` spawns remain structured independently](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/task/settings.ts#L255-L265).

**Update custom callers and stored prompts before rollout.** These inputs were removed:

- [`hub` was removed in 18.3.0; use `wait` and `write proc://<id>/kill`](https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7).
- [Remove per-call model fields from task, eval `agent()` and `workpool()` in 18.8.2 and later](https://github.com/can1357/oh-my-pi/commit/31876ff53eeb81b1624fabdbf1306d31e30f34af); [replace task `complexity` with `solutionSpace`](https://github.com/can1357/oh-my-pi/commit/2b4af27b5124359c538f16fccba6c47d8354bc74).
- [Replace SM edit headers with `*** Edit File:`, `*** Find` and `*** Replace`, and remove `irc.timeoutMs`](https://github.com/can1357/oh-my-pi/releases/tag/v18.3.0).
- [Remove `providers.openai-codex.codeMode` and `providers.openai-codex.codeModeDirectTools`; 18.10.4 uses the full direct tool surface](https://github.com/can1357/oh-my-pi/commit/7b2bd46db7e175abc09b0d37004bf5dc8ccd0962). Recheck direct-tool policy.

**Check provider routing separately from account pools.** [18.4.1 fixed excluded-provider fallback routes](https://github.com/can1357/oh-my-pi/commit/de256ead9f8286bed702833e330e3debdcbae25d); [18.6.3 stopped headless restore silently switching models, while interactive fallback remains possible](https://github.com/can1357/oh-my-pi/commit/8aaf115b8e5f54e6bddeffa969e43e290a1efa01).

[Named-agent OAuth pools restrict identities for listed providers](https://github.com/can1357/oh-my-pi/commit/6aafbc0924366f1d146502955913fd13ab1c4910), and [18.9.0 stopped quota recovery spending excluded accounts' saved reset credits](https://github.com/can1357/oh-my-pi/commit/6e0be09b632c2133c22e9847b3dbfc0373e9f6ee). [Pools do not choose providers; custom SDK `getApiKey` resolvers bypass them](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/task-agent-discovery.md). Inspect model/fallback settings, SDK resolvers and pool membership.

**Check context pricing before reusing numeric compaction limits.** [Per-model numbers are scaled bases; a base above the standard window can enable extended-context pricing even when the scaled trigger falls below it](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L791-L808). Inspect `/models` previews. Use [`f400k` for an exact 400K trigger, subject to the model-window cap](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L791-L808).

**Turn off cache warming if idle provider requests are unwanted.** OMP [added cache warming](https://github.com/can1357/oh-my-pi/commit/5ee7b69ceba873b9566307485ddd8704a4d1b28e), with [`providers.cacheWarming: idle` on by default](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/settings.ts#L1137-L1141). Set it to [`off` to stop those replay requests](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/settings.ts#L1137-L1149).

**Choose whether saved output must be complete.** [Bash, Python and JavaScript eval artifacts default to a 16 MiB cap, keeping the beginning and rolling tail](https://github.com/can1357/oh-my-pi/commit/cbf7898ce150c8a903db24fabe8f111567a3dc97). If they feed an audit or parser, inspect truncation notices. [`tools.artifactMaxBytes: 0` disables the cap](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L615), at the cost of unbounded storage.

<h2 id="choose-how-much-work-the-agent-can-operate">Choose how much work the agent can operate</h2>

**Give parallel sessions separate working trees.** For fresh interactive sessions, [set `worktree.onStart: create` or `ask`; startup defaults off and exit defaults to keep](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/task/settings.ts#L104-L128). [`bash.gitGuard` defaults off and covers only embedded-shell git, with a conflict-resolution exception; path-invoked git, pty, services and other programs bypass it](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L677-L679). Use [default-on status in compatible terminals to find sessions waiting for a decision](https://github.com/can1357/oh-my-pi/releases/tag/v18.8.7), reducing the need to poll panes.

**Decide whether agents should operate your IDA installation.** [Discovery is on when a compatible local installation is found](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/tools/ida.md#L21-L25), exposing [persistent Python execution and project-shared databases](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/tools/ida.md#L60-L68). Disable [`ida.enabled`](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/ida/settings.ts#L7-L11) or set [`tools.approval.ida: prompt`](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L30-L51) if that access is unwanted.

**Transfer credentials separately from session state.** [`omp session pack` and `omp session unpack` transfer artifacts; `omp session moved` makes the source copy fork on resume](https://github.com/can1357/oh-my-pi/commit/3df76b1c6f1a92c9f64196701321be26045f329d). [`omp auth export` writes plain JSON with live refresh tokens, and destination refresh can sign out the source](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/commands/auth.ts#L202-L225). Use a protected transfer path. An ordinary transcript is a poor place for a sign-in.

<h2 id="what-is-unresolved">What is unresolved</h2>

- Project trust: whether a pre-load trust gate will ship. A tagged loading path and tests showing project inputs blocked until trust is decided would change the [first-run advice](#decide-who-can-approve-and-configure-the-work).
- Narrower delegation: whether restricted [plan responders](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560) and key-scoped [`cfg://` grants](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L120-L148) will ship. Tagged controls and tests showing unapproved responders and unrelated keys refused would justify delegating less authority.
- Stable approval steering: [Keeping the input box open during approval and denying pending calls when you redirect the agent is available only on main, not in stable 18.10.4](https://github.com/can1357/oh-my-pi/commit/b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c). A published release containing that commit would confirm availability for stable users.
- GitHub plugin credentials: which release, if any, strips credentials before forwarding GitHub specs. A tagged fix and regression test covering [that branch](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/plugins/manager.ts#L77-L96) would settle that install behavior.
- Production-relay retention: [OMP's documentation says the relay retains only live-connection state and that its Go source and binaries are unpublished](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/collab.md#L168-L174). The hosted service's retention behavior remains unverified here. An independent audit of the deployed service would test that statement; published source would make the intended implementation inspectable.
- Review payoff: whether programmable review improves verified outcomes per unit of human attention on your workload. A bounded trial recording outcomes, review time and exceptions would answer that question for the workload tested.

With [plan review](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560) and [settings changes](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L399-L461) available to software, OMP can automate more of the work around a coding turn. The time-saving bet is to spend fewer minutes on routine approvals and more on choosing the reviewer and its limits. Test that bet with verified outcomes, review time and exceptions.

## Profile hygiene

Dated, not evergreen. This page describes OMP as of 2026-10-13. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md)
for the evidence contract.
