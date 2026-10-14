---
schema_version: bitter.frontier_profile.v0
profile_id: gemini-cli
label: Gemini CLI
owner: Google
source_contract: sources/gemini-cli.yml
homepage: https://github.com/google-gemini/gemini-cli
docs: https://google-gemini.github.io/gemini-cli/docs/
tagline: Headless planning points toward implementation; decide the write boundary before launch.
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
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: autoedit-and-seatbelt
    finding_id: 2026-09-21-gemini-cli-autoedit-path-check-never-loaded-and-seatbelt-reached-docker-socket
    last_verified: 2026-10-13
    status: retired
    note: Verified historical control omitted from this dated body; the current sandbox claim concerns workdirs and runtime state.
  - id: plugin4shell-unpatched
    finding_id: 2026-09-21-gemini-cli-extension-install-still-checks-out-fetch-head-after-plugin4shell-disclosure
    last_verified: 2026-10-13
    status: active
    note: Unchanged installer exposure rechecked at v0.64.0. AIR reports future patch policy; that is not a Google-confirmed product fact.
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
    last_verified: 2026-10-13
    status: open_question
    note: October 13 consumer terms remain unverified; no immutable official notice captured at or before the cutoff was established. The mutable consumer notice does not verify historical availability. The claim identifier is retained for continuity.
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
    last_verified: 2026-10-13
    status: active
    note: Applies when folder trust is enabled; the startup guard returns early when that feature is disabled.
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
    last_verified: 2026-10-14
    status: open_question
    note: Subscription notices were read on 2026-10-14; this records the live-document observation, not verified October 13 terms. No immutable official notice captured at or before the cutoff was established; historical wording and deadlines remain unverified.
  - id: explicit-flash-request-rewrite
    finding_id: 2026-10-13-gemini-cli-stable-v0-61-0-rewrites-explicit-flash-model-ids
    last_verified: 2026-10-13
    status: active
  - id: stable-build-file-tool-gates
    finding_id: 2026-10-13-gemini-cli-build-file-tool-gates-reach-stable-and-override-yolo
    last_verified: 2026-10-13
    status: active
  - id: stable-taint-false-positive-repair
    finding_id: 2026-10-13-gemini-cli-stable-v0-64-0-narrows-untrusted-argument-false-positives
    last_verified: 2026-10-13
    status: active
  - id: headless-plan-autonomous-prompt
    finding_id: 2026-10-13-gemini-cli-headless-plan-mode-now-encourages-autonomous-implementation
    last_verified: 2026-10-13
    status: active
  - id: agent-git-diff-restored
    finding_id: 2026-10-13-gemini-cli-stable-v0-63-0-fixes-agent-git-diff
    last_verified: 2026-10-13
    status: active
  - id: individual-tool-text-cap
    finding_id: 2026-10-13-gemini-cli-tool-text-fields-gain-a-non-configurable-65536-byte-cap
    last_verified: 2026-10-13
    status: active
  - id: mcp-add-settings-loss-preview-fix
    finding_id: 2026-10-13-gemini-cli-mcp-add-can-erase-untrusted-project-settings-until-v0-65-0-preview
    last_verified: 2026-10-13
    status: active
  - id: sandbox-workdir-and-runtime-state
    finding_id: 2026-10-13-gemini-cli-sandboxes-reject-sensitive-workdirs-and-seatbelt-changes-its-state-root
    last_verified: 2026-10-13
    status: active
  - id: oauth-issuer-compatibility-and-synthetic-turns
    finding_id: 2026-10-13-gemini-cli-stable-v0-64-0-relaxes-oauth-iss-requirements-and-normalizes-terminal-turns
    last_verified: 2026-10-13
    status: active
  - id: stable-acp-correlation-and-usage
    finding_id: 2026-10-13-gemini-cli-acp-permissions-correlate-with-tools-and-stable-v0-64-0-reports-usage
    last_verified: 2026-10-13
    status: active
  - id: session-patches-and-local-write-locks
    finding_id: 2026-10-13-gemini-cli-stable-v0-64-0-appends-session-patches-and-serializes-local-writes
    last_verified: 2026-10-13
    status: active
  - id: redirection-and-config-path-hardening
    finding_id: 2026-10-13-gemini-cli-v0-63-0-hardens-redirection-config-paths-reads-and-untrusted-resource-output
    last_verified: 2026-10-13
    status: active
  - id: a2a-nested-settings-migration
    finding_id: 2026-10-13-gemini-cli-a2a-settings-migrate-to-nested-controls-in-memory
    last_verified: 2026-10-13
    status: active
  - id: stable-active-operation-cancellation
    finding_id: 2026-10-13-gemini-cli-ctrl-c-reaches-cancellation-during-active-operations-in-v0-64
    last_verified: 2026-10-13
    status: active
  - id: preview-cancellation-history-repair
    finding_id: 2026-10-13-gemini-cli-rapid-cancellation-history-repair-reaches-v0-65-0-preview
    last_verified: 2026-10-13
    status: active
  - id: diagnostic-file-reference-resolution
    finding_id: 2026-10-13-gemini-cli-file-references-with-line-suffixes-resolve-in-v0-64
    last_verified: 2026-10-13
    status: retired
    note: Verified convenience omitted from this posture; file resolution does not establish line-range-only context.
  - id: preview-companion-shutdown-source
    finding_id: 2026-10-13-gemini-cli-ide-companion-shutdown-repair-is-in-v0-65-0-preview-source
    last_verified: 2026-10-13
    status: active
  - id: stable-and-preview-at-october-close
    finding_id: 2026-10-13-gemini-cli-v0-64-0-stable-and-v0-65-0-preview-ship-before-the-window-closes
    last_verified: 2026-10-13
    status: active
  - id: antigravity-plan-review-scope
    finding_id: 2026-10-13-antigravity-dangerously-skip-permissions-stops-auto-approving-plan-plans-in-1-3-2-plan-and-artifact
    last_verified: 2026-10-13
    status: retired
    note: Comparison omitted from this dated body; no current Antigravity behavior is asserted.
posture_basis:
  capability:
    - 2026-05-11-gemini-subagent-protocol-and-session-portability
    - 2026-10-13-gemini-cli-headless-plan-mode-now-encourages-autonomous-implementation
    - 2026-10-13-gemini-cli-acp-permissions-correlate-with-tools-and-stable-v0-64-0-reports-usage
    - 2026-10-13-gemini-cli-stable-v0-64-0-appends-session-patches-and-serializes-local-writes
    - 2026-10-13-gemini-cli-stable-v0-63-0-fixes-agent-git-diff
    - 2026-10-13-gemini-cli-ctrl-c-reaches-cancellation-during-active-operations-in-v0-64
  accessibility:
    - 2026-07-01-gemini-cli-consumer-service-retired
    - 2026-10-13-gemini-cli-google-stops-selling-new-code-assist-subscriptions
    - 2026-10-13-gemini-cli-v0-64-0-stable-and-v0-65-0-preview-ship-before-the-window-closes
    - 2026-10-13-gemini-cli-stable-v0-64-0-relaxes-oauth-iss-requirements-and-normalizes-terminal-turns
  governance:
    - 2026-09-21-gemini-cli-extension-install-still-checks-out-fetch-head-after-plugin4shell-disclosure
    - 2026-10-13-gemini-cli-build-file-tool-gates-reach-stable-and-override-yolo
    - 2026-10-13-gemini-cli-stable-v0-64-0-narrows-untrusted-argument-false-positives
    - 2026-10-13-gemini-cli-tool-text-fields-gain-a-non-configurable-65536-byte-cap
    - 2026-10-13-gemini-cli-mcp-add-can-erase-untrusted-project-settings-until-v0-65-0-preview
    - 2026-10-13-gemini-cli-sandboxes-reject-sensitive-workdirs-and-seatbelt-changes-its-state-root
    - 2026-10-13-gemini-cli-v0-63-0-hardens-redirection-config-paths-reads-and-untrusted-resource-output
    - 2026-10-13-gemini-cli-a2a-settings-migrate-to-nested-controls-in-memory
    - 2026-10-13-gemini-cli-rapid-cancellation-history-repair-reaches-v0-65-0-preview
    - 2026-10-13-gemini-cli-stable-v0-61-0-rewrites-explicit-flash-model-ids
  succession:
    - 2026-07-01-gemini-cli-consumer-service-retired
    - 2026-10-13-gemini-cli-google-stops-selling-new-code-assist-subscriptions
stance:
  use_for: Implementation jobs in controlled repositories with working service access; set permitted writes before launch.
  avoid_for: Plan-only jobs without an enforced write boundary.
  watch_next: Resolve delivery and service-support questions before extending use.
---

# Gemini CLI

## What changed

In Gemini CLI [0.63.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0), [headless Plan Mode tells the model to finish planning and begin implementation without waiting](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/prompts/snippets.ts#L602-L615); [headless means running without interactive approval prompts](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policy-engine.ts#L1010-L1012). The [automatic switch to YOLO already existed](https://github.com/google-gemini/gemini-cli/blob/v0.62.0/packages/core/src/tools/exit-plan-mode.ts#L210-L268); the new prompt encourages that route into the post-plan approval mode, which [permits shell redirection](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policies/yolo.toml#L50-L56) but [still gates some dependency edits](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policy-engine.ts#L903-L956). For authorized implementation, this removes an instruction to wait and moves the human decision before launch, to permitted writes, tools and exit conditions.

## Where it stands, 2026-10-13

**Pin 0.64.0 after checking your service access.** Install [0.64.0 stable, released 13 October 2026](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0) with `npm install -g @google/gemini-cli@0.64.0`; it requires [Node 20 or later](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/package.json). Use it in controlled repositories whose policy and sandbox setup you own. Follow [the launch checks below](#launch-boundary) before rollout. For preview tradeoffs, see [project settings](#mcp-settings) and [cancellation](#cancellation). Check [IDE companion delivery](#ide-delivery) separately. The other changes discussed below are in [stable 0.64.0 or earlier](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0). Flash model rewrites [depend on feature gates](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/models.ts#L68-L164): [enabled for API-key, Vertex and Gateway authentication, with separate experiment flags for Google login](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/config.ts#L3585-L3644).

**Confirm service access before rollout.** The [0.64.0 authentication guide recommends consumer Google sign-in](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/get-started/authentication.mdx#L17-L34); that recommendation does not establish availability. Check access and contractual support for the authentication route you intend to run. Consumer and subscription terms at the October 13 cutoff remain unverified.

<a id="launch-boundary"></a>

**Keep plan-only jobs read-only.** Deny `exit_plan_mode` and verify effective policy, or enforce a read-only filesystem.

**YOLO still stops some dependency edits.** [Build-file gates reached stable in 0.61.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0). They cover [recognized edit tools with an extractable target, even in YOLO](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policy-engine.ts#L903-L956) for files such as [package.json and Makefile](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/buildFileUtils.ts#L14-L71). From [0.63.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0), [final ASK decisions become DENY in headless runs](https://github.com/google-gemini/gemini-cli/commit/2fe7c2d3f065dc40ad573d50b2091116f8a4aa18); [tracked edits also require approval for later recognized build/test commands](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/tools/shell.ts#L272-L325). Run your dependency job with its actual edit tools and build commands to find where it stops for approval. The [YOLO shell rule permits redirection](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/policy/policies/yolo.toml#L50-L56), so an edit-tool gate does not make the file unwritable. Narrow command-prefix rules [need explicit `allowRedirection` from 0.63.0](https://github.com/google-gemini/gemini-cli/commit/2fe7c2d3f065dc40ad573d50b2091116f8a4aa18).

**Verify extension checkouts before use.** The [0.64.0 installer checks out FETCH_HEAD without comparing the resulting HEAD to the requested commit](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/extensions/github.ts#L32-L80). [Git's local-branch precedence can select a different object](https://github.com/git/git/blob/v2.51.1/builtin/checkout.c#L1266-L1280). Install from repositories you control and compare `git rev-parse HEAD` in the extension directory with your pinned commit.

<a id="mcp-settings"></a>

**Back up project settings before adding a [Model Context Protocol (MCP) server](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/tools/mcp-server.md#L1-L4).** Stable 0.64.0 [keeps an empty, writable project-settings object in an untrusted folder](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settings.ts#L315-L480); [project-scoped `gemini mcp add` can overwrite existing keys](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/commands/mcp/add.ts#L117-L129). Back up `.gemini/settings.json`, use `--scope user`, or deliberately trust the folder first, then inspect the file. Try [0.65.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0) if you need its [refusal to write project settings in an untrusted workspace](https://github.com/google-gemini/gemini-cli/blob/v0.65.0-preview.0/packages/cli/src/commands/mcp/add.ts#L45-L66).

**Check the sandbox's effective settings and state paths.** [Sandboxed launches reject sensitive workdirs](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts), [including home](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandboxUtils.ts#L182-L224); start from a project directory. Docker/Podman/runsc [create a sanitized settings copy](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandbox.ts#L535-L571) that [strips hooks, custom tool commands and API keys](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/sandboxUtils.ts#L245-L267). Recheck integrations that depend on them.

Seatbelt (`SANDBOX=sandbox-exec`) [moves runtime state, including sessions and tokens, to `~/.cache/.gemini`](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/storage.ts#L70-L135). Enable folder trust if headless startup must reject untrusted workspaces: [that guard returns early when folder trust is disabled](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/utils/userStartupWarnings.ts#L84-L102).

**Retest routine shell jobs on 0.64.0.** It [narrows ordinary-command false alarms from untrusted-output matching](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/untrustedContextTracker.ts). It includes the [0.63.0 repair for broken content diffs](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0), which [removes the empty external-diff override](https://github.com/google-gemini/gemini-cli/commit/562f0361fe63952fcf2db793e3e9fc0ae69ec506). After output accumulates, try `ls -la`, `grep -rn` and `git diff` before assigning someone to approve routine commands.

<a id="cancellation"></a>

**Test cancellation and resumed history together.** [0.64.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0) [routes Ctrl+C past input clearing to active-operation cancellation](https://github.com/google-gemini/gemini-cli/commit/5b71659d58eab63f5f249524f157c195be420427). Test whether running work stops in your terminal setup. For quick repeated interrupts and exits, try [0.65.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0)'s [separate history repair](https://github.com/google-gemini/gemini-cli/commit/204db94ae2a33f70afec7400ebf6b78f1b5e2575), then inspect cancelled-call records and resumed history.

**Update session readers before adopting 0.64.0.** It [appends `$patch` records](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/chatRecordingService.ts#L1494-L1506); apply them to reconstruct amended tool results. It [inserts synthetic continuation and missing-response turns after interruptions](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/core/geminiChat.ts#L848-L898). Treat synthetic turns as harness bookkeeping, not human authorization or successful execution.

**Coordinate separate writer processes yourself.** The 0.64.0 [file-write locks](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/tools/write-file.ts#L381-L418) and [checkpoint locks](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/gitService.ts#L198-L218) serialize work within one process. [They do not coordinate separate agents writing the same repository](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/pathMutex.ts#L7-L22).

**Save complete outputs outside model history.** From [0.63.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0), the truncation path [caps individual handled text fields and saves originals only best-effort](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/scheduler/tool-executor.ts#L320-L405), using a [fixed 65,536-byte limit](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/constants.ts#L18). The [suffix fits inside that budget](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/tool-utils.ts#L153-L179); [separate fields are capped individually, not as an aggregate result](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/tool-utils.ts#L185-L278). Paginate large results; verify any saved path before using it as an audit record.

**Match each editor approval to its pending tool in your adapter.** The [Agent Client Protocol (ACP), used by editor integrations](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/cli/acp-mode.md#L3-L6), provides [tool-linked permission requests and denial completion](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L736-L804); stable 0.64.0 adds [token counts](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L379-L390) and [turn/context usage notifications](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L483-L489). Verify request IDs, denial completion and session identity after resume.

**Retry MCP OAuth servers affected by missing-issuer refusal.** In 0.64.0, [with a discovered or configured issuer, callback `iss` is required by default when metadata declares support or no metadata was discovered; any supplied `iss` must match that issuer](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/tools/mcp-server.md#L325-L347). [The `oauth.authorizationResponseIssParameterSupported` setting overrides whether `iss` is required](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/mcp/oauth-provider.ts#L411-L421). Set it to true where you require that response.

**If you run the [Agent-to-Agent (A2A)](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/docs/core/remote-agents.md#L3-L5) server, inspect its effective controls after upgrading.** The [0.64.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0) server [migrates flat settings to nested fields in memory without rewriting the file](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/a2a-server/src/config/settings.ts#L828-L871). Check `security.folderTrust`, `general.checkpointing`, `tools` and `context.fileFiltering` with your deployment wrapper.

**Re-baseline Flash evaluations against the outgoing request.** Since [0.61.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0), with the respective latest-Flash and latest-Flash-Lite gates enabled, [outgoing `gemini-3.5-flash` and `gemini-3-flash` become `gemini-3.8-flash`; `gemini-3.1-flash-lite` becomes `gemini-3.5-flash-lite`](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/models.ts#L68-L164). The [client gates are true for API-key, Vertex and Gateway auth; Google login uses separate experiment flags](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/config.ts#L3585-L3644). Record configured ID, outgoing request and returned model identifier separately. The mapping [changes outgoing requests](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/core/modelMappingContentGenerator.ts#L44-L81); it does not establish the served model.

## What is unresolved

- Stable delivery of the MCP project-write refusal and rapid-exit history repair above. A non-prerelease release whose source contains both implementations settles delivery.
- Which consumer and subscription terms applied on October 13, and what support Google commits to API-key, Vertex and Gateway access. An immutable official notice captured at or before the cutoff would settle the historical terms. Explicit Google notices naming each authentication route and its support terms would settle continued support.
- Whether hosted Git accepts the branch name involved in the extension checkout defect above. A hosted reproduction settles exploit reach; a tagged installer that checks resulting HEAD against the requested commit settles the pin defect.
- <a id="ide-delivery"></a> Marketplace delivery of the [IDE companion shutdown repair in preview source](https://github.com/google-gemini/gemini-cli/blob/v0.65.0-preview.0/packages/vscode-ide-companion/src/ide-server.ts#L423-L475). A Marketplace version mapped to source containing the repair settles delivery; an npm CLI upgrade does not.

## Profile date and evidence limits

This profile is dated 2026-10-13 and covers 2026-09-21 through 2026-10-13. It does not establish behavior or availability after that date. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md) for the evidence contract.

## Profile hygiene
