---
schema_version: bitter.frontier_profile.v0
profile_id: cursor
label: Cursor
owner: Anysphere
source_contract: sources/cursor.yml
homepage: https://cursor.com
docs: https://cursor.com/docs/cli/overview
changelog: https://cursor.com/changelog
tagline: "Cursor's Origin lets an agent's decision stand in for code-owner approval."
compared_with: [claude-code]
surface_class: closed_source_release_notes
evidence_floor: official_changelog
status: active_watch
first_published: 2026-08-21
last_updated: 2026-10-24
last_full_review: 2026-10-24
claims:
  - id: github-tracker-is-not-source
    last_verified: 2026-09-23
    status: retired
    note: "github.com/cursor/cursor is a README, a security policy and a bug tracker. Its advisory list is the only vendor security channel; the editor and agent source are not public."
  - id: changelog-mixes-surfaces
    last_verified: 2026-09-23
    status: retired
    note: "Settled for 2026-08-20..2026-09-21: every main-changelog entry was a cloud-agent or Origin change; the CLI has its own changelog."
  - id: cli-build-unnoted-no-digest
    finding_id: 2026-09-21-cursor-cli-install-channel-serves-an-unnoted-build-no-digest-and-the-cli-changelog-stops-at-08
    last_verified: 2026-09-23
    status: retired
  - id: projects-coordinator-beta
    finding_id: 2026-09-21-cursor-projects-a-coordinator-that-spawns-agents-on-its-own-beta-cloud-only
    last_verified: 2026-09-23
    status: retired
  - id: self-hosted-what-leaves
    finding_id: 2026-09-21-cursor-self-hosted-machines-the-headline-says-execution-stays-in-your-network-the-docs-list-what
    last_verified: 2026-10-24
    status: active
  - id: mcp-hook-server-identity
    finding_id: 2026-09-21-cursor-hooks-beforemcpexecution-gains-server-identity-and-the-doc-tells-allowlist-hooks-to-deny
    last_verified: 2026-10-24
    status: active
  - id: start-from-scratch-origin
    finding_id: 2026-09-21-cursor-cloud-agents-without-an-scm-start-from-scratch-writes-to-origin-by-default
    last_verified: 2026-09-23
    status: retired
  - id: no-advisory-sandbox-claim
    finding_id: 2026-09-21-cursor-no-in-window-security-advisory-despite-a-public-sandbox-escape-claim
    last_verified: 2026-09-23
    status: retired
  - id: grok-bot-separate-product
    finding_id: 2026-09-21-cursor-grok-bot-a-separate-teammate-product-now-documented-inside-cursor-s-docs-and-bundled-in
    last_verified: 2026-10-24
    status: retired
  - id: models-pool-openai-cutoff-undated
    finding_id: 2026-09-21-cursor-economics-cursor-models-pool-and-bundling-undated-doc-state
    last_verified: 2026-09-23
    status: retired
  - id: install-snapshot
    finding_id: 2026-10-13-cursor-the-full-dated-install-snapshot-reaches-ide-3-24-18-ios-1-13-0-and-sdk-1-0
    last_verified: 2026-10-24
    status: retired
  - id: agent-cli-updater-aware-pin
    finding_id: 2026-10-13-cursor-agent-cli-snapshot-freezing-the-recorded-build-also-requires-disabling-updates
    last_verified: 2026-10-24
    status: active
  - id: run-everything-and-classifier-reruns
    finding_id: 2026-10-13-cursor-ide-3-24-describes-run-everything-without-a-sandbox-and-classifier-reviewed-escape-from
    last_verified: 2026-10-24
    status: active
  - id: rollouts-deploy-monitoring
    finding_id: 2026-10-13-cursor-rollouts-extends-agent-work-into-deploy-verification-without-autonomous-rollback
    last_verified: 2026-10-24
    status: active
  - id: read-access-and-user-extensions
    finding_id: 2026-10-13-cursor-read-access-needs-a-team-boundary-and-control-over-user-extensions
    last_verified: 2026-10-24
    status: active
  - id: sdk-child-policy-opt-in
    finding_id: 2026-10-13-cursor-sdk-subagent-inheritance-is-opt-in-in-1-0-34-and-remains-so-in-1-0
    last_verified: 2026-10-24
    status: active
  - id: reused-worker-configuration
    finding_id: 2026-10-13-cursor-reused-worker-checkouts-gain-an-untracked-agent-configuration-check-in-the-inspected-lab
    last_verified: 2026-10-24
    status: retired
  - id: remote-control-pairing
    finding_id: 2026-10-13-cursor-remote-control-adds-phone-direction-of-local-agents-while-two-vendor-descriptions-disagree
    last_verified: 2026-10-24
    status: active
  - id: projects-enterprise-docs
    finding_id: 2026-10-13-cursor-projects-reaches-enterprise-in-documentation-but-per-project-controls-remain-unspecified
    last_verified: 2026-10-24
    status: retired
  - id: service-account-budgets
    finding_id: 2026-10-13-cursor-service-account-budgets-and-organization-key-expiry-add-controls-outside-projects
    last_verified: 2026-10-24
    status: active
  - id: bugbot-branch-and-team-budget
    finding_id: 2026-10-13-cursor-bugbot-fixes-new-branch-writes-and-moves-team-billing-to-the-team-limit
    last_verified: 2026-10-24
    status: retired
  - id: cloud-wildcard-parent-domain
    finding_id: 2026-10-13-cursor-cloud-wildcard-network-entries-now-include-the-parent-domain
    last_verified: 2026-10-24
    status: retired
  - id: cloud-mode-removals
    finding_id: 2026-10-13-cursor-cursor-reports-prompt-removal-over-preceding-months-and-removes-two-cloud-choices
    last_verified: 2026-10-24
    status: retired
  - id: windows-hook-false-success
    finding_id: 2026-10-13-cursor-windows-hooks-could-report-success-without-running-until-the-3-23-repair
    last_verified: 2026-10-24
    status: retired
  - id: release-note-security-repairs
    finding_id: 2026-10-13-cursor-release-note-security-repairs-need-surface-specific-upgrades-and-bounded-advisory-claims
    last_verified: 2026-10-24
    status: retired
  - id: per-product-release-notes
    finding_id: 2026-10-13-cursor-per-surface-release-notes-supplement-the-changelog-and-expose-note-backfills
    last_verified: 2026-10-24
    status: retired
  - id: origin-api-migrations
    finding_id: 2026-10-13-cursor-origin-api-clients-need-new-stack-parent-fields-and-public-bypass-user-ids
    last_verified: 2026-10-24
    status: retired
  - id: origin-cli-command-migrations
    finding_id: 2026-10-13-cursor-origin-cli-removes-pr-targeting-syntax-and-documents-expected-head-merges
    last_verified: 2026-10-24
    status: active
  - id: origin-cli-verified-artifacts
    finding_id: 2026-10-13-cursor-origin-cli-has-versioned-channels-and-verifies-vendor-hashes-before-extraction
    last_verified: 2026-10-24
    status: active
  - id: origin-app-marketplace
    finding_id: 2026-10-13-cursor-origin-app-marketplace-opens-public-submissions-on-october
    last_verified: 2026-10-24
    status: active
  - id: origin-gates-and-credentials
    finding_id: 2026-10-13-cursor-origin-tightens-specified-merge-gates-while-widening-app-authority-by-credential-class
    last_verified: 2026-10-24
    status: retired
  - id: grok-bot-meeting-terms
    finding_id: 2026-10-13-cursor-grok-bot-terms-add-meeting-use-obligations-without-establishing-feature-availability
    last_verified: 2026-10-24
    status: retired
  - id: lab-git-read-hardening
    finding_id: 2026-10-13-cursor-lab-git-reads-disable-external-diff-and-text-conversion-programs-in-the-inspected-artifact
    last_verified: 2026-10-24
    status: retired
  - id: model-id-fix-build-unresolved
    finding_id: 2026-10-13-cursor-the-cli-notes-report-a-model-id-fix-without-naming-the-first-fixed-artifact
    last_verified: 2026-10-24
    status: active
  - id: shared-cloud-canvases
    finding_id: 2026-10-24-cursor-cloud-agents-can-deliver-a-shareable-canvas-instead-of-a-transcript-only-result
    last_verified: 2026-10-24
    status: active
  - id: beta-environment-replacement
    finding_id: 2026-10-24-cursor-the-beta-environments-api-makes-cloud-setup-scriptable-with-replacement-semantics-and-conf
    last_verified: 2026-10-24
    status: active
  - id: mac-worker-desktop-opt-in
    finding_id: 2026-10-24-cursor-the-default-cli-has-an-opt-in-mac-desktop-worker-and-a-separate-signed-computer-use-helper
    last_verified: 2026-10-24
    status: active
  - id: linux-live-workspace-opt-in
    finding_id: 2026-10-24-cursor-linux-workers-expose-a-live-editor-workspace-only-after-a-separate-opt
    last_verified: 2026-10-24
    status: active
  - id: project-placement-approval
    finding_id: 2026-10-24-cursor-projects-now-document-first-use-placement-approval-and-expose-allowed-machine-selection
    last_verified: 2026-10-24
    status: active
  - id: default-git-read-and-reuse-checks
    finding_id: 2026-10-24-cursor-git-read-hardening-and-untracked-instruction-checks-have-reached-the-default-cli-artifact
    last_verified: 2026-10-24
    status: active
  - id: nested-claude-hook-denial
    finding_id: 2026-10-24-cursor-sdk-1-0-40-wires-nested-claude-hook-denials-into-the-local-execution-gate
    last_verified: 2026-10-24
    status: active
  - id: explicit-worker-sdk-team
    finding_id: 2026-10-24-cursor-worker-and-sdk-requests-gain-an-explicit-team-identity
    last_verified: 2026-10-24
    status: active
  - id: subagent-fallback-and-billing
    finding_id: 2026-10-24-cursor-subagent-model-restrictions-and-billing-now-survive-more-delegation-paths
    last_verified: 2026-10-24
    status: active
  - id: cli-child-hooks-and-edit-first-rules
    finding_id: 2026-10-24-cursor-cli-hooks-and-nested-rules-cover-work-that-previously-escaped-their-expected-lifecycle
    last_verified: 2026-10-24
    status: active
  - id: personal-always-run-persistence
    finding_id: 2026-10-24-cursor-ide-3-26-makes-a-personal-always-run-approval-persist-in-permissions-json
    last_verified: 2026-10-24
    status: active
  - id: steering-and-process-lifetime
    finding_id: 2026-10-24-cursor-editor-conversations-preserve-background-processes-and-make-steering-the-fresh-install-def
    last_verified: 2026-10-24
    status: active
  - id: stable-sdk-lifecycle-and-zod
    finding_id: 2026-10-24-cursor-stable-sdk-updates-improve-background-work-and-failure-reporting-with-a-new-zod-dependency
    last_verified: 2026-10-24
    status: active
  - id: beta-filesystem-tree
    finding_id: 2026-10-24-cursor-the-npm-next-sdk-can-run-native-file-tools-on-a-supplied-filesystem-tree
    last_verified: 2026-10-24
    status: active
  - id: origin-agentic-code-owner-review
    finding_id: 2026-10-24-cursor-origin-lets-an-agent-s-ownership-decision-or-an-installed-app-s-approval-satisfy-code-owne
    last_verified: 2026-10-24
    status: active
  - id: origin-explicit-credential-bypass
    finding_id: 2026-10-24-cursor-ruleset-bypass-now-stays-with-the-credential-that-holds-it-must-be-requested-explicitly
    last_verified: 2026-10-24
    status: active
  - id: origin-prompt-ci-check-conclusions
    finding_id: 2026-10-24-cursor-agent-prompt-steps-in-origin-ci-can-pass-a-required-check-by-finishing-neutral-or-skipped
    last_verified: 2026-10-24
    status: active
  - id: origin-archive-ip-exception
    finding_id: 2026-10-24-cursor-repository-archives-now-obey-the-namespace-ip-allowlist-for-app-and-service-account-caller
    last_verified: 2026-10-24
    status: active
  - id: origin-reported-enforcement-repairs
    finding_id: 2026-10-24-cursor-origin-s-notes-report-fixed-defects-in-ruleset-enforcement-deleted-repository-refs-app-rev
    last_verified: 2026-10-24
    status: active
  - id: origin-app-create-and-review
    finding_id: 2026-10-24-cursor-apps-can-now-create-repositories-and-request-bot-reviewers
    last_verified: 2026-10-24
    status: active
  - id: origin-group-and-merge-gates
    finding_id: 2026-10-24-cursor-new-merge-gates-and-refusals-group-approvals-maximum-file-size-per-branch-merge-methods
    last_verified: 2026-10-24
    status: active
  - id: origin-beta-api-breaking-changes
    finding_id: 2026-10-24-cursor-the-origin-api-shipped-nine-breaking-changes-in-ten-days-including-a-required-reviewer-sha
    last_verified: 2026-10-24
    status: active
  - id: origin-cli-gated-commands-and-imports
    finding_id: 2026-10-24-cursor-origin-cli-stable-2026-10-23-adds-gates-authorship-takeover-pr-import-identity-mapping-and
    last_verified: 2026-10-24
    status: active
  - id: origin-cli-telemetry-categories
    finding_id: 2026-10-24-cursor-the-origin-cli-now-records-usage-telemetry-by-default-where-cursor-enables-it-and-labels
    last_verified: 2026-10-24
    status: active
  - id: origin-member-token-authority
    finding_id: 2026-10-24-cursor-current-state-an-app-holding-the-user-token-scope-can-act-as-any-namespace-member-with-ord
    last_verified: 2026-10-24
    status: active
  - id: origin-session-review-differences
    finding_id: 2026-10-24-cursor-current-state-cursor-s-hosted-agent-sessions-are-built-to-be-refused-review-approvals-whil
    last_verified: 2026-10-24
    status: active
  - id: outside-workspace-search
    finding_id: 2026-10-24-cursor-cli-grep-and-glob-now-search-the-requested-outside-workspace-directory
    last_verified: 2026-10-24
    status: active
  - id: environment-command-migration
    finding_id: 2026-10-24-cursor-environment-cli-automation-must-drop-the-ref-flag-and-use-public-delete-ids
    last_verified: 2026-10-24
    status: active
  - id: mcp-json-schema-auto-review
    finding_id: 2026-10-24-cursor-cli-mcp-auto-review-now-receives-schemas-encoded-as-json-strings
    last_verified: 2026-10-24
    status: active
  - id: browser-bookmark-removal
    finding_id: 2026-10-24-cursor-agents-window-3-26-removes-browser-bookmark-controls
    last_verified: 2026-10-24
    status: active
  - id: restricted-git-executor
    finding_id: 2026-10-24-cursor-the-default-cli-adds-a-restricted-git-executor-that-can-refuse-repository-configured-progr
    last_verified: 2026-10-24
    status: active
  - id: pause-resume-tool-replay
    finding_id: 2026-10-24-cursor-cli-resume-no-longer-replays-tool-calls-completed-before-a-pause
    last_verified: 2026-10-24
    status: active
  - id: install-snapshot-october-24
    finding_id: 2026-10-24-cursor-the-24-october-installation-snapshot-separates-stable-products-from-moving-previews
    last_verified: 2026-10-24
    status: active
  - id: worker-drain-readiness
    finding_id: 2026-10-24-cursor-workers-report-draining-and-refuse-new-work-during-shutdown
    last_verified: 2026-10-24
    status: active
  - id: claude-review-retains-approval-owner
    finding_id: 2026-10-24-claude-code-hosted-code-review-leaves-preview-and-exposes-review-depth-and-stopping-controls
    last_verified: 2026-10-24
    status: active
stance:
  use_for: "<a href='#where-it-stands-2026-10-24'>Supervised development with a named human responsible for the result.</a>"
  avoid_for: "<a href='#who-can-approve-a-change'>Agentic ownership review on paths that require a person's accountability.</a>"
  watch_next: "<a href='#what-is-unresolved'>Published Agentic decision criteria and inspectable decisions, then a trial measuring human reversals and review minutes.</a>"
---

# Cursor

At the 24 October read, Origin, Cursor's [early-beta code-hosting service](https://web.archive.org/web/20261024092716/https://cursor.com/docs/origin), documented [Agentic code-owner review in which its agent's ownership decision replaces the approval count](https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md). Keep Classic with human-only owners on paths that require a person's approval.

## Where it stands, 2026-10-24

Start with the stable installation below. Origin operators should audit ownership approvals and required-check behavior. SDK users relying on hooks should upgrade to 1.0.40 and test a denial. Before unattended local work, choose containment and test refusal. Further checks below apply to the named products and integrations.

**Channel.** For supervised development, install [IDE and Agents Window 3.27.12](https://downloads.cursor.com/production/df132ffba90dfc15a12e6b8f020ba4e5d026c4be/darwin/arm64/Cursor-darwin-arm64.dmg) from [Cursor downloads](https://cursor.com/download). The [stable selector](https://www.cursor.com/api/download?platform=darwin-arm64&releaseTrack=stable) returned it at 10:17 UTC on 24 October for Apple Silicon macOS. For terminal, embedding or hosting work, choose an installation below.

| Work | Install today | Qualification |
| :- | :- | :- |
| Terminal and workers | [Agent CLI 2026.10.22-27dcf5f](https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz), via the [default installer](https://cursor.com/install) | [Default at 10:17 UTC](https://cursor.com/install); [computer use, desktop sharing and Linux live workspace require opt-in](https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz). |
| Embedding | [`npm install @cursor/sdk@1.0.40`](https://registry.npmjs.org/@cursor%2fsdk/1.0.40) or [`pip install cursor-sdk==1.0.40`](https://pypi.org/pypi/cursor-sdk/1.0.40/json) | Stable packages; the TypeScript package declares [zod `^3.25.0` or `^4.0.0` as a peer dependency](https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz). |
| Origin | [CLI stable 2026.10.23-18-47-36-f52be1e](https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/manifest.json), using [`curl -fsSL https://downloads.cursor.com/origin/install.sh \| sh`](https://web.archive.org/web/20261024093319/https://cursor.com/docs/origin/cli) | A stable client for [early-beta hosting](https://web.archive.org/web/20261024092716/https://cursor.com/docs/origin) and [API](https://web.archive.org/web/20261024094024id_/https://cursor.com/docs/api/origin/changelog.md). |
| Phone supervision | [iOS 1.15.0 from the App Store](https://apps.apple.com/us/app/cursor/id6767085653) | [Apple's 22 October release](https://itunes.apple.com/lookup?id=6767085653&country=us); desktop features cannot be inferred from its generic fix notes. |

Keep previews in separate trials. At 10:17 UTC on 24 October, Agent CLI lab selected [2026.10.24-334b38e](https://downloads.cursor.com/lab/2026.10.24-334b38e/darwin/arm64/agent-cli-package.tar.gz), npm next selected [1.1.0-beta.0](https://registry.npmjs.org/@cursor%2fsdk/1.1.0-beta.0), and Origin latest selected [2026.10.24-09-27-15-1b4d3b5](https://downloads.cursor.com/co/2026.10.24-09-27-15-1b4d3b5/manifest.json). The [Environments API is beta](https://cursor.com/changelog/cloud-agent-canvases-and-environments); Origin's [stack and gate commands are controlled by account-side flags](https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz).

**Try a canvas when another person needs to inspect the result.** The [16 October launch adds cloud-agent canvases](https://cursor.com/changelog/cloud-agent-canvases-and-environments), with [refreshable links for eligible teammates subject to plan, privacy and admin settings](https://cursor.com/docs/agent/tools/canvas#sharing-canvases). Ask for supporting data and check freshness. A canvas can spare you the transcript repackaging. Measure whether it saves review minutes.

## Further checks for the products you run

**Freeze each CLI with its own update controls.** Agent CLI [requires `"channel": "static"` in `~/.cursor/cli-config.json` to stop background and manual updates; its updater still downloads without a digest check](https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz). Keep the versioned archive, record SHA256 and compare `agent --version` before a qualified run. Origin's [installer verifies its baked-in SHA256 values](https://downloads.cursor.com/origin/install.sh), while its [explicit updater verifies the versioned manifest's SHA256; updates do not install automatically](https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz). Preserve its archive and avoid `origin update` when pinning.

## Who can approve a change

**Audit who can satisfy ownership review.** An [app installed in the repository's namespace and named as `app_<id>` in `ORIGIN_CODEOWNERS` can satisfy review for its paths](https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md). That differs from [Claude's hosted reviewer, which posts findings and a check without approving or blocking the PR](https://web.archive.org/web/20261017030656/https://code.claude.com/docs/en/code-review).

In an Origin trial, count owner approvals avoided, human reversals and review minutes. An empty queue is a poor success metric on its own.

**Keep deterministic checks where skipped work must block a merge.** Origin [prompt steps run an agent under the team's CI service account and can conclude neutral or skipped](https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md). Its [required-check rule accepts both conclusions as passing](https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md). You can replace an agent-launching CI script, but making its check required accepts the agent's judgment that the work did not apply. Test that policy in a scratch repository.

**Keep a human merge and rollback owner for Rollouts.** Its [deployment monitor hands repairs to cloud agents but does not merge, revert or roll back on its own](https://cursor.com/docs/rollouts). Try one deployment with read-only telemetry. Count verified regressions against plan-review and triage minutes. Origin's ownership choices do not change this separate service's limits.

## What workers can reach

**Choose containment before unattended local work.** [Run Everything remains unsandboxed by default, and Auto-review can approve an outside-sandbox retry](https://cursor.com/docs/agent/security/run-modes). Choose a sandboxed mode and test a refusal. For sandboxed reads, [System remains the default; Enterprise team Workspace policy with user extensions disabled excludes member and repository additions](https://cursor.com/docs/agent/security/run-modes#read-access). The CLI [now searches requested outside-workspace directories correctly](https://cursor.com/docs/cli/changelog#oct-15-2026); verify [your account's effective read boundary](#what-is-unresolved).

**Approve Project destinations before delegating placement.** Current settings [require approval for a new machine or pool unless an admin enables automatic placement, now documented as off by default for every team](https://cursor.com/docs/cloud-agent/settings#security-settings). Inspect the actual switch and the client's [allowed-machine selection](https://cursor.com/docs/release-notes/agents-window#oct-20-2026). Test that a new destination stops for approval. This grant chooses where later work may run. It sets no spending cap or concurrency ceiling.

**Treat environment updates as full configuration changes.** The [beta API replaces the entire `environmentJson` on PATCH and changes build settings separately](https://cursor.com/docs/cloud-agent/api/endpoints#environments). Read first and retain the complete intended configuration. CLI scripts must [drop `agent env get --ref` and use public IDs for delete](https://cursor.com/docs/cli/changelog#oct-15-2026); [`agent env deploy --env <public-id>` updates an existing environment](https://cursor.com/docs/cli/changelog#oct-22-2026).

Before designing a large deployment, resolve the [launch's 300-repository limit](https://cursor.com/changelog/cloud-agent-canvases-and-environments) against the [endpoint reference's 500](https://cursor.com/docs/cloud-agent/api/endpoints#create-an-environment) with a capacity test.

**Give Mac GUI work a dedicated worker.** Default CLI 27dcf5f [uses `--computer-use` to operate the signed-in desktop through the separate Cursor Computer Use helper](https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz). Grant that helper access, then test a screenshot and harmless click. [Mac desktop sharing defaults to view-only; input control needs `view_and_control`](https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz).

This can bring GUI testing into the worker's job. Test its desktop authority before handing over a personal login session.

**Treat Linux live-workspace access as a terminal grant.** [`--connect-workspace` separately enables files, terminals and forwarded ports under the worker's OS user](https://cursor.com/docs/cloud-agent/self-hosted#live-workspace). Inspect workspace-open tasks and Allow VM sharing before connecting.

**Review egress before choosing self-hosting for residency.** [Self-hosted tool results still leave the network even when both documented artifact hosts are blocked](https://cursor.com/docs/cloud-agent/self-hosted#what-leaves-your-network). Keeping execution on your machine does not keep its outputs there.

**Retest unusual repositories before sharing worker pools.** Default 27dcf5f [now refuses reuse with leftover untracked agent configuration, disables external diff/text conversion on specified reads, and calls a restricted Git executor that can refuse repository-configured programs](https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz). Test custom filters, submodules and unusual worktree options. A read may now return an explicit refusal. Keep trust levels separate until cleanup is tested.

**Let pool orchestration see a worker drain.** Workers [started with `--management-addr` keep readiness alive with HTTP 503 and draining state during shutdown; workers shutting down reject new runs, and pool workers exit after dropping stale claims](https://cursor.com/docs/cli/changelog#oct-17-2026). Test a real drain before replacing your restart or polling glue.

## What Origin integrations must change

**Review app delegation before approving scopes.** Granting [`namespace:user_tokens:write` lets an app act as any active namespace member without requiring that member's confirmation, within intersected user and installation permissions](https://web.archive.org/web/20261024092907/https://cursor.com/docs/api/origin/acting-as-users). Prefer selected repositories and narrow scopes. [Tokens last at most 15 minutes](https://web.archive.org/web/20261024094116id_/https://cursor.com/docs/api/origin/reference/create-installation-user-token.md) and [cannot be revoked individually; uninstalling or deleting the app invalidates them before expiry, while removing `namespace:user_tokens:write` or suspending an installation stops new mints](https://web.archive.org/web/20261024092907/https://cursor.com/docs/api/origin/acting-as-users). Plan revocation for already issued tokens.

**Treat repository creation as a broad app grant.** The new [`namespace:repositories:create` scope requires an all-repository installation](https://web.archive.org/web/20261024094024id_/https://cursor.com/docs/api/origin/changelog.md#oct-22-2026). Read back each new repository's effective protections before allowing writes. [Public apps can be installed through a direct link before marketplace listing review](https://web.archive.org/web/20261024093101/https://cursor.com/docs/origin/apps/publish); review that grant even if the app is listed.

**Test archive fetches at both IP checks.** The [22 and 23 October changes check installation credentials against the installation namespace's list at the archive API request, and service accounts against their owning team's list](https://web.archive.org/web/20261024094024id_/https://cursor.com/docs/api/origin/changelog.md). The [signed download checks the repository namespace's enforced list and, for service accounts, their team's list too](https://web.archive.org/web/20261024093815id_/https://cursor.com/docs/api/origin/reference/get-repo-tarball.md). Check egress addresses at both steps before changing an integration. [Ordinary git and API access with app or service-account credentials remains exempt from the IP allowlist](https://web.archive.org/web/20261024093747id_/https://cursor.com/docs/api/origin/reference/inbound-ip-allowlist.md).

**Migrate Origin integrations before rerunning them.** The API [labels nine changes Breaking from 14 to 23 October: `originRole` bypass actors are gone, `group.id` replaces the team shape, and reviewer requests gain `reviewers` while deprecating `users` and `groups`](https://web.archive.org/web/20261024094024id_/https://cursor.com/docs/api/origin/changelog.md). Update ruleset payloads and stored identities. [A group that stops resolving blocks covered merges](https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md). Budget time for contract checks on this beta API.

**Bind automated merges to the reviewed head and a deliberate bypass decision.** The stable Origin client [sends expected-head preconditions and requests ruleset bypass only with `origin pr merge --bypass-rules`](https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz). Use [`origin pr merge --expect-head <number>=<sha>`](https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz) and test a moved-head refusal: the [API promises 409 and nothing merged](https://web.archive.org/web/20261024093830id_/https://cursor.com/docs/api/origin/reference/merge-pull-request.md). Review [activity entries itemizing skipped rules](https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md) after an intentional bypass.

**Inspect actions affected by Origin's reported enforcement repairs.** Cursor [reports missed active rulesets among many disabled ones, old refs served after repository recreation, delayed webhook revocation and merged-team privacy failures](https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md). Review merges and pushes those rules should have blocked, readers of recreated repositories, paused-app deliveries and merged-team privacy settings. The [notes give no affected period](https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md); bound the inspection by adoption dates.

**Set Origin telemetry policy in shells, CI and agent environments.** The stable client [records usage by default where a server flag enables it, transmitting repository identity and a generic human, Cursor-agent or other-agent category under the caller's authenticated identity](https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz). Set [`ORIGIN_NO_TELEMETRY=1` where policy requires an opt-out, including accounts where the configuration command is hidden](https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz).

## What local and embedded jobs must preserve

**Upgrade hook-dependent embeddings to SDK 1.0.40 and test refusal.** The [local execution gate now honors nested Claude-format `PreToolUse` denials that previously failed to stop tool execution](https://cursor.com/docs/release-notes/sdk#oct-20-2026); the [1.0.40 package enables the compatibility path](https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz).

Test a denied, harmless side effect. Inspect earlier work that relied on that response shape. Loading a portable hook file was never the same as preserving its veto.

**Pass SDK child restrictions explicitly.** Stable 1.0.40 [still requires `local.subagentInherit` to pass selected workspace, executor and tool-limit settings to descendants; unset children omit the parent's tool-allowlist headers](https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz). Test a denied tool in a child and nested child.

**Make billing identity explicit in worker and SDK configuration.** The CLI [uses the team chosen at login or team switch](https://cursor.com/docs/cli/changelog#oct-22-2026). SDK [`teamId` must be a positive safe integer and passed again on resume and later operations; invalid or absent values retain the ambient team](https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz). Validate `teamId` before sending work. [General service-account caps default to no limit and exclude Bugbot accounts](https://cursor.com/docs/account/enterprise/service-accounts#spend-limits); they do not identify a Project's billed principal.

**Check the returned subagent model before accepting its work.** [Blocked or unavailable custom-subagent models can fall back to the parent's model, with the actual choice reported](https://cursor.com/docs/cli/changelog#oct-22-2026). A requested model is not proof of the model used.

**Make CLI hooks prove they run and block.** The CLI [now reports failed Windows hook commands as failures](https://cursor.com/docs/cli/changelog#oct-15-2026) and [fires Task success/failure hooks for child work](https://cursor.com/docs/cli/changelog#oct-17-2026). Test an observable callback and a denial. MCP allowlist hooks should [match server identity plus tool name and use `failClosed` for execution errors](https://cursor.com/docs/hooks). [Cloud `beforeMCPExecution` and `afterMCPExecution` remain deferred; `preToolUse` and `postToolUse` run for HTTP MCP tools with documented limits](https://cursor.com/docs/hooks).

**Retest MCP Auto-review with JSON-string schemas.** [Input schemas in that format now reach the reviewer](https://cursor.com/docs/cli/changelog#oct-22-2026). Run a harmless tool and inspect the schema supplied to review.

**Test pause/resume before non-idempotent work.** Cursor [reports that completed CLI tool calls no longer run again after a pause](https://cursor.com/docs/cli/changelog#oct-17-2026). Pause around a harmless observable write and inspect the result before trusting a resumed job with a consequential side effect.

**Review personal Always Run grants after upgrading.** [When your personal `~/.cursor/permissions.json` manages the allowlist, Always Run now adds the command there; admin-managed allowlists still suppress the button](https://cursor.com/docs/release-notes/ide#oct-20-2026). Inspect the saved command.

**Archive conversations whose background servers should stop.** [Background shells survive turns and workspace changes until archiving](https://cursor.com/docs/release-notes/ide#oct-14-2026). Include those processes in your shutdown procedure.

**Keep the filesystem SDK beta separate from stable policy.** npm next [1.1.0-beta.0 supplies native file tools over a provided tree, omits host shell tools, skips hooks and skill discovery, and needs the tree again on resume](https://registry.npmjs.org/@cursor/sdk/-/sdk-1.1.0-beta.0.tgz). Try it where a controlled tree could replace custom file-tool adapters. Check child writes and external-tool authority; a filesystem interface does not establish OS containment.

## What is unresolved

- **When may Agentic replace a person?** The [ownership note](https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md) specifies neither thresholds nor the audit location. Published criteria and inspectable decisions would let a trial measure human reversals and review minutes.
- **Which automated approvals count toward protected rules?** Test app approval of its own changes and [approvals via Grok Bot](https://web.archive.org/web/20261024094355/https://cursor.com/docs/api/origin/mcp) using the [confirmation-free MCP approval tool](https://web.archive.org/web/20261024094434id_/https://cursor.com/docs/api/origin/mcp/tools.md) against protected rules. The [cloud-agent scoped session is designed to be refused approvals](https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz). Record the credential and effective rules in a scratch-repository test.
- **Does your CLI account enforce Workspace reads?** The [default artifact still consults a server-controlled gate](https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz). A harmless outside-file test with the Enterprise policy above would show the effective boundary for that build and account.
- **What restricts Run Everything?** The [3.24 note names a `permissions.json` exception](https://cursor.com/docs/release-notes/ide#oct-9-2026), but the [reference identifies no field for it](https://cursor.com/docs/reference/permissions). A documented field and a denied-command test would settle what survives that mode.
- **What caps Project spending and parallel work?** Documenting the billed principal and ceiling, then testing the boundary under parallel workers, would establish coverage beyond [destination approval](https://cursor.com/docs/cloud-agent/settings#security-settings).
- **Can Teams disable an already paired phone?** The [mobile guide's cloud-loop/admin gate](https://cursor.com/docs/cloud-agent/mobile#remote-control) differs from the [local-pairing announcement](https://cursor.com/changelog/remote-control-local-agents). A paired-device test on 3.27.12 and iOS 1.15.0 would settle that path.
- **Which artifact fixed model-ID prefix overlap?** The [September repair note](https://cursor.com/docs/cli/changelog#sep-28-2026) names no first-fixed build. A traced comparison and observed-model test would settle that case. Newer child-model fallbacks do not.

## Profile hygiene

The [ownership note is labeled week of 12 October](https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md), but its first publication date is unknown. This profile cites it as documentation read on 24 October, not as a dated launch.

The review cutoff is 24 October 2026. Undated documentation reflects that day's reads, not a pinned snapshot of earlier defaults or availability. See [METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md) for the evidence contract. Hosted behavior and account-specific refusals were not runtime-tested.
