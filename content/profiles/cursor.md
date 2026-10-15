---
schema_version: bitter.frontier_profile.v0
profile_id: cursor
label: Cursor
owner: Anysphere
source_contract: sources/cursor.yml
homepage: https://cursor.com
docs: https://cursor.com/docs/cli/overview
changelog: https://cursor.com/changelog
tagline: "Cursor offers Rollouts for deployment monitoring and repair handoff to cloud agents."
compared_with: []
surface_class: closed_source_release_notes
evidence_floor: official_changelog
status: active_watch
first_published: 2026-08-21
last_updated: 2026-10-13
last_full_review: 2026-10-13
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
    last_verified: 2026-10-13
    status: active
  - id: mcp-hook-server-identity
    finding_id: 2026-09-21-cursor-hooks-beforemcpexecution-gains-server-identity-and-the-doc-tells-allowlist-hooks-to-deny
    last_verified: 2026-10-13
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
    last_verified: 2026-10-13
    status: active
  - id: models-pool-openai-cutoff-undated
    finding_id: 2026-09-21-cursor-economics-cursor-models-pool-and-bundling-undated-doc-state
    last_verified: 2026-09-23
    status: retired
  - id: install-snapshot
    finding_id: 2026-10-13-cursor-the-full-dated-install-snapshot-reaches-ide-3-24-18-ios-1-13-0-and-sdk-1-0
    last_verified: 2026-10-13
    status: active
  - id: agent-cli-updater-aware-pin
    finding_id: 2026-10-13-cursor-agent-cli-snapshot-freezing-the-recorded-build-also-requires-disabling-updates
    last_verified: 2026-10-13
    status: active
  - id: run-everything-and-classifier-reruns
    finding_id: 2026-10-13-cursor-ide-3-24-describes-run-everything-without-a-sandbox-and-classifier-reviewed-escape-from
    last_verified: 2026-10-13
    status: active
  - id: rollouts-deploy-monitoring
    finding_id: 2026-10-13-cursor-rollouts-extends-agent-work-into-deploy-verification-without-autonomous-rollback
    last_verified: 2026-10-13
    status: active
  - id: read-access-and-user-extensions
    finding_id: 2026-10-13-cursor-read-access-needs-a-team-boundary-and-control-over-user-extensions
    last_verified: 2026-10-13
    status: active
  - id: sdk-child-policy-opt-in
    finding_id: 2026-10-13-cursor-sdk-subagent-inheritance-is-opt-in-in-1-0-34-and-remains-so-in-1-0
    last_verified: 2026-10-13
    status: active
  - id: reused-worker-configuration
    finding_id: 2026-10-13-cursor-reused-worker-checkouts-gain-an-untracked-agent-configuration-check-in-the-inspected-lab
    last_verified: 2026-10-13
    status: active
  - id: remote-control-pairing
    finding_id: 2026-10-13-cursor-remote-control-adds-phone-direction-of-local-agents-while-two-vendor-descriptions-disagree
    last_verified: 2026-10-13
    status: active
  - id: projects-enterprise-docs
    finding_id: 2026-10-13-cursor-projects-reaches-enterprise-in-documentation-but-per-project-controls-remain-unspecified
    last_verified: 2026-10-13
    status: active
  - id: service-account-budgets
    finding_id: 2026-10-13-cursor-service-account-budgets-and-organization-key-expiry-add-controls-outside-projects
    last_verified: 2026-10-13
    status: active
  - id: bugbot-branch-and-team-budget
    finding_id: 2026-10-13-cursor-bugbot-fixes-new-branch-writes-and-moves-team-billing-to-the-team-limit
    last_verified: 2026-10-13
    status: active
  - id: cloud-wildcard-parent-domain
    finding_id: 2026-10-13-cursor-cloud-wildcard-network-entries-now-include-the-parent-domain
    last_verified: 2026-10-13
    status: active
  - id: cloud-mode-removals
    finding_id: 2026-10-13-cursor-cursor-reports-prompt-removal-over-preceding-months-and-removes-two-cloud-choices
    last_verified: 2026-10-13
    status: active
  - id: windows-hook-false-success
    finding_id: 2026-10-13-cursor-windows-hooks-could-report-success-without-running-until-the-3-23-repair
    last_verified: 2026-10-13
    status: active
  - id: release-note-security-repairs
    finding_id: 2026-10-13-cursor-release-note-security-repairs-need-surface-specific-upgrades-and-bounded-advisory-claims
    last_verified: 2026-10-13
    status: active
  - id: per-product-release-notes
    finding_id: 2026-10-13-cursor-per-surface-release-notes-supplement-the-changelog-and-expose-note-backfills
    last_verified: 2026-10-13
    status: active
  - id: origin-api-migrations
    finding_id: 2026-10-13-cursor-origin-api-clients-need-new-stack-parent-fields-and-public-bypass-user-ids
    last_verified: 2026-10-13
    status: active
  - id: origin-cli-command-migrations
    finding_id: 2026-10-13-cursor-origin-cli-removes-pr-targeting-syntax-and-documents-expected-head-merges
    last_verified: 2026-10-13
    status: active
  - id: origin-cli-verified-artifacts
    finding_id: 2026-10-13-cursor-origin-cli-has-versioned-channels-and-verifies-vendor-hashes-before-extraction
    last_verified: 2026-10-13
    status: active
  - id: origin-app-marketplace
    finding_id: 2026-10-13-cursor-origin-app-marketplace-opens-public-submissions-on-october
    last_verified: 2026-10-13
    status: active
  - id: origin-gates-and-credentials
    finding_id: 2026-10-13-cursor-origin-tightens-specified-merge-gates-while-widening-app-authority-by-credential-class
    last_verified: 2026-10-13
    status: active
  - id: grok-bot-meeting-terms
    finding_id: 2026-10-13-cursor-grok-bot-terms-add-meeting-use-obligations-without-establishing-feature-availability
    last_verified: 2026-10-13
    status: active
  - id: lab-git-read-hardening
    finding_id: 2026-10-13-cursor-lab-git-reads-disable-external-diff-and-text-conversion-programs-in-the-inspected-artifact
    last_verified: 2026-10-13
    status: active
  - id: model-id-fix-build-unresolved
    finding_id: 2026-10-13-cursor-the-cli-notes-report-a-model-id-fix-without-naming-the-first-fixed-artifact
    last_verified: 2026-10-13
    status: active
stance:
  use_for: "<a href='#delegate-deployment-watching-keep-a-human-merge-owner'>A bounded Rollouts trial.</a>"
  avoid_for: "<a href='#contain-local-work-before-granting-unattended-access'>Unattended local work without tested containment.</a>"
  watch_next: "<a href='#what-is-unresolved'>Verify that Enterprise team Workspace policy requires approval for CLI reads outside your workspace and team allowlist on your account, with user extensions disabled.</a>"

---

# Cursor

On 23 September 2026, Cursor [launched Rollouts for Teams and Enterprise to
monitor deployments and hand repairs to cloud agents, without autonomous merge
or rollback](https://cursor.com/changelog/rollouts-and-security-reviewer).
The operator's trial is whether fewer dashboard checks outweigh monitoring-plan
review and regression triage.

As of 13 October, start with [IDE 3.24.18](https://downloads.cursor.com/production/be4c9e5350d77747b42cd467cbd3370a753d464b/darwin/arm64/Cursor-darwin-arm64.dmg)
from [Cursor downloads](https://cursor.com/download) for supervised development.
Before unattended work, test containment: [Run Everything defaults to no sandbox](https://cursor.com/docs/release-notes/ide#oct-9-2026),
and [Auto-review can approve retries outside it](https://cursor.com/docs/agent/security/run-modes).

## Where it stands, 2026-10-13

**If you use Origin apps, review their credentials after the [13 October marketplace launch](https://web.archive.org/web/20261013185441/https://cursor.com/changelog/origin-app-marketplace).** The [13 October 2026
marketplace launch lets apps authenticate with installation tokens and write
checks, comments and reviews](https://web.archive.org/web/20261013185441/https://cursor.com/changelog/origin-app-marketplace).
Inspect permissions and delegation. [Origin's IP allowlist covers user
credentials while excluding app and service-account credentials](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes).
Classify an agent by the credential it uses.

**Choose and verify each Cursor installation separately.** Choose the IDE for
supervised development, the agent CLI for terminal work or the SDK for
embedding. Check the returned version against this snapshot.
The direct IDE and CLI archive links below are for Apple Silicon macOS.

| Surface | Version and installation | Channel and limit |
| :- | :- | :- |
| IDE and Agents Window | [3.24.18](https://downloads.cursor.com/production/be4c9e5350d77747b42cd467cbd3370a753d464b/darwin/arm64/Cursor-darwin-arm64.dmg) from [Cursor downloads](https://cursor.com/download) | Available on 13 October 2026, corroborated by [that evening's cask update](https://github.com/Homebrew/homebrew-cask/commit/1631cd110809dda09cbd4054146f5ca488037879). |
| Agent CLI | [2026.10.01-e373342](https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz), via the [CLI installer](https://cursor.com/docs/cli/installation) | [Homebrew records this build](https://github.com/Homebrew/homebrew-cask/blob/471099ac3a43daa5b83ed76718493dc8255b6b67/Casks/c/cursor-cli.rb); Cursor's default installer selection at the 13 October 2026 cutoff is unverified. A timestamped vendor installer capture would settle it; select this build with the versioned archive. |
| Agent CLI lab | [2026.10.12-d47ca18](https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz), versioned archive | [Archive dated 12 October 2026](https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz); default-versus-lab membership at the 13 October cutoff is unverified. Timestamped captures of both vendor installer selectors would settle it. |
| SDK | [`@cursor/sdk@1.0.37`](https://registry.npmjs.org/@cursor%2fsdk/1.0.37) or [`cursor-sdk==1.0.37`](https://pypi.org/pypi/cursor-sdk/1.0.37/json) | Stable registry releases. |
| iOS | [1.13.0](https://itunes.apple.com/lookup?id=6767085653&country=us) from the [App Store](https://apps.apple.com/us/app/cursor/id6767085653) | Release dated 6 October 2026; store metadata read on 14 October 2026. |
| Origin CLI | [2026.10.13-14-06-43-ea1dfe5](https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz) via its [SHA256-checking installer](https://downloads.cursor.com/origin/install.sh) | Stable selector read on 14 October 2026; the artifact dates to 13 October 2026. |

**Pin the agent CLI archive and stop its updater.** Record the archive's
SHA256 and [set `"channel": "static"` in `~/.cursor/cli-config.json` to stop
background and manual updates](https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz).
The inspected bundle's [updater downloads without a digest check; a versioned
URL alone does not disable updates](https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz).
Compare `agent --version` with your pin.

The CLI's [Workspace-read control also depends on a server-controlled switch](https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz);
verify it on your account before relying on it. Grok Bot's [meeting terms do not
establish that meetings are available](https://web.archive.org/web/20261013185637/https://cursor.com/en-US/terms/grok-bot).

## Delegate deployment watching, keep a human merge owner

**Try Rollouts on one deploy with a named merge and rollback owner.**
Review its monitoring plan and use read-only telemetry. The proposed agent
loop reaches beyond code production into deploy verification.

Measure verified regressions and triage minutes, including plan review and
exceptions, before deciding whether Rollouts saves attention.

**Test the billed identity before letting Projects run unattended.**
[Projects can start parallel agents; its docs include
Enterprise on 3.21.9 or later without a GA declaration](https://cursor.com/docs/agent/projects).
Check [Team Settings > Chat > Enable Projects](https://cursor.com/docs/release-notes/web#sep-14-2026)
and confirm availability. [Service-account billing-period limits exist](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes).
Test what your limit caps; the [per-Project limit remains unresolved](#what-is-unresolved).

**Set Bugbot's team budget before token-billed team runs.** The hosted notes
[put those runs under the team's spend limit rather than the installer's
personal limit](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes).

## Contain local work before granting unattended access

**Choose a sandboxed IDE mode when containment matters.** The [IDE 3.24 note
says Run Everything runs without a sandbox by default](https://cursor.com/docs/release-notes/ide#oct-9-2026).
Auto-review can [approve a sandbox-refused command to retry outside the sandbox](https://cursor.com/docs/agent/security/run-modes).
Narrow access and test a refused command before delegating consequential
work.

**Make outside-workspace reads an admin decision.** [Read Access requires
IDE 3.23 and defaults to System](https://cursor.com/docs/agent/security/run-modes#read-access).
A repository's [`sandbox.json` can replace the user's read boundary and
allowlist](https://cursor.com/docs/reference/sandbox).
[On Enterprise, set team Workspace policy](https://cursor.com/docs/agent/security/run-modes#team-read-policy)
and [disable Read Control User Extensions](https://cursor.com/docs/agent/security/run-modes#read-access)
to exclude member and repository additions. Plan for more approval prompts; this
[control does not constrain Run Everything](https://cursor.com/docs/agent/security/run-modes#read-access).

**Recheck earlier commits and approvals after upgrading.** Cursor reports
[crafted branch names enabling shell injection before the IDE 3.24 repair](https://cursor.com/docs/release-notes/ide#oct-9-2026),
[the 3.22 repair for Source Control commits skipping repository hooks](https://cursor.com/docs/release-notes/ide#sep-24-2026)
and [the 3.23 repair for Auto-review approving confirmation-required MCP
calls](https://cursor.com/docs/release-notes/agents-window#oct-1-2026).
[Run Everything and allowlisted tools still skip that approval card](https://cursor.com/docs/release-notes/agents-window#oct-1-2026).
Inspect earlier commits that relied on secret-scanning hooks and MCP actions
that required approval. For Bugbot, inspect earlier Autofix commits where
branch separation mattered: [New Branch mode could write to
the PR branch before the hosted repair](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes).
Follow the [per-product repair notes](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes)
alongside advisories.

**Make a hook prove it ran before trusting it.** The [IDE and Agents
Window 3.23 notes repair extensionless Windows hooks that reported success
without executing](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes).
Inspect those commands, test an observable effect and recheck pre-3.23
approval or audit coverage. For MCP allowlist hooks, [match `mcp_server_name`
plus `tool_name`, deny missing identity and set `failClosed: true`](https://cursor.com/docs/hooks#beforeshellexecution-beforemcpexecution).
Test an actual denial.

**Review phone pairing before leaving local work unattended.** The [6 October 2026
announcement keeps Remote Control execution local, requires desktop pairing
approval and defaults on outside Enterprise](https://cursor.com/changelog/remote-control-local-agents).
Check paired devices and the computer's run mode.

## Qualify workers and integrations separately

**Pass SDK restrictions to children explicitly.** The TypeScript local SDK's
declarations say
[`local.subagentInherit` opts Task descendants into selected executor,
workspace and tool-limit settings; leaving it unset omits the parent's
tool-allowlist headers](https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.37.tgz).
Before delegating sensitive work, test runtime enforcement by trying a denied
tool in a child and a nested child.

**Clear shared worker checkouts between jobs until cleanup is verified.**
The [inspected lab artifact refuses reuse when untracked agent configuration
remains](https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz);
the [October 1 artifact checks tracked dirt without that extra check](https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz).
Until you verify cleanup in your worker build, clear directories or keep one
trust level per pool.

**Review what leaves before buying self-hosting for residency.** The [worker
docs list file contents, terminal output, diffs, screenshots and local MCP
results leaving the machine; blocking the artifact bucket does not stop
tool-result transmission](https://cursor.com/docs/cloud-agent/self-hosted#what-leaves-your-network).

**Replace cloud wildcards when the parent domain should stay out.** The
[Cloud Agents notes make `*.example.com` include `example.com`](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes).
Use explicit destinations if the parent belongs to another trust level.

**Update cloud jobs that depended on removed choices.** The [cloud notes
remove Long-running mode from the web and make builds automatic for non-draft
environments](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes).
Adjust job setup and account for automatic builds and recurring failures.

**Migrate Origin automation before rerunning it.** The [Early Beta API
replaces `parentPullNumber` with `parentPullRequest.number`](https://cursor.com/docs/api/origin/changelog#sep-22-2026)
and [rejects numeric ruleset bypass-user IDs in favor of public user IDs](https://cursor.com/docs/api/origin/changelog#oct-3-2026).
The [CLI notes remove `origin pr stack` and PR-targeting `--branch`](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes).
Update schemas, stored identities and scripts. Check your binary for
the documented [`origin pr requirements` and
`origin pr merge --expect-head <number>=<sha>`](https://cursor.com/docs/release-notes/origin-cli#oct-6-2026)
before relying on them to bind a merge to the reviewed head. Their inclusion
and runtime behavior were not tested.

## What is unresolved

- **Verify Run Everything's configuration exception before relying on it.**
  The [3.24 note names a `permissions.json` exception](https://cursor.com/docs/release-notes/ide#oct-9-2026),
  but the [reference names no field for it](https://cursor.com/docs/reference/permissions).
  A documented restriction and a denied-command test on the chosen IDE build
  would show what survives Run Everything.
- **Verify Workspace reads on your CLI account.** The [October 1 CLI code
  contains a Workspace-read switch controlled by Cursor's servers](https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz).
  Its presence does not show whether your account has it enabled. A harmless
  outside-workspace read with [Enterprise team Workspace policy](https://cursor.com/docs/agent/security/run-modes#team-read-policy)
  and user extensions disabled would settle that account's effective boundary
  on that build.
- **Test the Teams switch against a paired phone.** The [mobile docs describe
  a cloud-loop opt-in and admin gate](https://cursor.com/docs/cloud-agent/mobile#remote-control).
  That does not establish control of the announced local path.
  Client-version documentation and a paired-device test of the admin switch
  would settle whether Teams can turn that path off.
- **Require a tested ceiling before calling a Project budgeted.** The
  [Projects docs name no per-Project spend, approval or concurrency setting](https://cursor.com/docs/agent/projects).
  Documentation of a ceiling, its billed identity and a boundary test would
  show which Project work it caps. General account controls do not settle it.
- **Verify the actual model before accepting the CLI selection repair.** The
  [v2026.09.28 note reports a model-ID prefix-overlap fix
  without naming the first fixed artifact](https://cursor.com/docs/cli/changelog#sep-28-2026).
  A build-addressed note or traced artifact comparison, plus an observed-model
  test, would identify which binary selects the requested model in the affected
  case.
- **Require artifact-bound evidence for git fsmonitor execution.**
  The [inspected lab wrapper disables external diffs and text conversion for
  five git read operations](https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz).
  Evaluate fsmonitor separately: require an advisory naming affected and fixed
  CLI artifacts or a reproduction tied to an artifact.
- **Require a meeting release and controls before enabling Grok Bot meetings.**
  For [Grok Bot, a computer-use product](https://cursor.com/docs/grok-bot), the
  [12 October 2026 terms assign required meeting
  notices and consents to the customer](https://web.archive.org/web/20261013185637/https://cursor.com/en-US/terms/grok-bot).
  They do not establish availability or administrative controls. A feature
  release and administrative documentation would settle those questions.
  Decide meeting-use policy before allowing it.

## Profile hygiene

The release cutoff is 2026-10-13. Undated documentation reflects reads on
2026-10-14, not a pinned snapshot of the prior day's defaults or availability.
See [METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md)
for the evidence contract.
