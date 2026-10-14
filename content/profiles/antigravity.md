---
schema_version: bitter.frontier_profile.v0
profile_id: antigravity
label: Antigravity CLI
owner: Google
source_contract: sources/antigravity.yml
homepage: https://antigravity.google/product/antigravity-cli
docs: https://antigravity.google/docs
changelog: https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md
repo: https://github.com/google-antigravity/antigravity-cli
tagline: "Delegate routine work to Antigravity inside tested permissions; keep consequential plan approval with a person."
compared_with: []
x:
  project: antigravity
surface_class: closed_source_releases
evidence_floor: official_changelog
status: active_watch
first_published: 2026-07-01
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: sandbox-valueless-flag
    finding_id: 2026-09-21-antigravity-1-1-18-a-valueless-prompt-flag-could-silently-turn-the-sandbox-off
    last_verified: 2026-10-13
    status: retired
    note: "Historical parser fix still holds; retired from the current operator posture."
  - id: gates-loosened
    finding_id: 2026-09-21-antigravity-default-gates-loosened-workspace-reads-auto-granted-1-1-20-always-proceed-now-covers-mcp
    last_verified: 2026-10-13
    status: active
  - id: gates-tightened
    finding_id: 2026-09-21-antigravity-default-gates-tightened-url-fetch-now-asks-1-1-28-allow-always-pins-the-script-1-1-21-head
    last_verified: 2026-10-13
    status: active
  - id: remote-control-permission-mode
    finding_id: 2026-09-21-antigravity-remote-control-grew-into-a-boot-persistent-service-and-remote-triggered-turns-ran-without
    last_verified: 2026-10-13
    status: retired
    note: "The 1.2.6 session repair still holds. The current daemon claim covers the separate saved-settings gap fixed in 1.3.4."
  - id: settings-json-startup-path-1-1-20
    finding_id: 2026-09-21-antigravity-settings-json-the-1-1-16-no-overwrite-fix-was-incomplete-1-1-20-closes-the-startup-path
    last_verified: 2026-10-13
    status: retired
    note: "Historical startup fix still holds; retired from the current operator posture."
  - id: tags-match-notes-from-1-1-18
    finding_id: 2026-09-21-antigravity-the-tag-vs-notes-collision-is-repaired-from-1-1-18-on-every-in-window-tag-now-carries-its
    last_verified: 2026-10-13
    status: retired
    note: "Tag and note agreement still holds; omitted from the current operator posture. The sampled binaries carry the previous release notes, not their own."
  - id: markdown-agents-inherit-by-default
    finding_id: 2026-09-21-antigravity-customization-inheritance-flipped-to-on-for-markdown-agents-plugin-mcp-servers-namespaced
    last_verified: 2026-10-13
    status: retired
    note: "Historical inheritance change still holds; the current posture focuses on plugin admission and inventory."
  - id: unsandboxed-rules-deprecated
    finding_id: 2026-09-21-antigravity-unsandboxed-permission-rules-are-deprecated-in-favor-of-command-rules
    last_verified: 2026-10-13
    status: active
  - id: headless-first-class-driver
    finding_id: 2026-09-21-antigravity-headless-became-a-first-class-driver-unlimited-default-timeout-structured-errors-backgroun
    last_verified: 2026-10-13
    status: retired
    note: "Compound posture superseded. 1.2.9 ends headless daemons; current findings cover lifecycle and failure handling."
  - id: headless-mode-flag-ignored-before-1-1-12
    finding_id: 2026-08-17-antigravity-1-1-12-discloses-that-mode-was-ignored-entirely-in-headless-runs-plan
    last_verified: 2026-10-13
    status: retired
    note: "Historical mode-parsing defect; omitted from the current operator posture."
  - id: malformed-allowlist-matched-everything
    finding_id: 2026-08-10-antigravity-1-1-11-discloses-that-a-malformed-allowlist-entry-auto-approved-every
    last_verified: 2026-10-13
    status: retired
    note: "Historical allowlist defect; omitted from the current operator posture."
  - id: gemini-api-key-auth
    finding_id: 2026-08-17-antigravity-1-1-13-adds-gemini-api-key-auth-and-a-custom-base-url-routing-around
    last_verified: 2026-10-13
    status: retired
    note: "Authentication option still holds; omitted from the current operator posture."
  - id: pattern-approval-lasts-conversation
    finding_id: 2026-08-03-antigravity-permission-scope-widens-in-an-unreadable-product
    last_verified: 2026-10-13
    status: retired
    note: "Conversation-long approval still holds; omitted from the current operator posture."
  - id: settings-json-no-longer-overwritten
    finding_id: 2026-08-20-antigravity-1-1-16-no-longer-overwrites-unreadable-settings-json-with-defaults
    last_verified: 2026-08-20
    status: retired
    note: "Incomplete fix. 1.1.16 through 1.1.19 still truncated settings.json on startup; 1.1.20 closes that path."
  - id: 1-1-17-is-the-1-1-16-tree
    finding_id: 2026-08-20-antigravity-1-1-17-github-release-is-the-1-1-16-tree
    last_verified: 2026-08-20
    status: retired
    note: "Historical. From 1.1.18 every tag carries its own notes and a unique binary; the 1.1.17 notes entered git via 1.1.18."
  - id: consumer-successor-to-gemini-cli
    finding_id: 2026-07-01-antigravity-successor-to-gemini-consumer
    last_verified: 2026-10-13
    status: retired
    note: "Historical claim still holds; omitted from the current body."
  - id: gemini-consumer-service-retired-june-18
    finding_id: 2026-07-01-antigravity-successor-to-gemini-consumer
    last_verified: 2026-10-13
    status: retired
    note: "Historical claim still holds; omitted from the current body."
  - id: closed-source-go-binary
    finding_id: 2026-07-01-antigravity-successor-to-gemini-consumer
    last_verified: 2026-10-13
    status: active
    note: "The body relies on closed-source distribution; it makes no claim about implementation language."
  - id: rapid-stable-release-train
    finding_id: 2026-07-01-antigravity-in-window-release-train
    last_verified: 2026-10-13
    status: retired
    note: "Release cadence rechecked; the current installation decision does not need a release count."
  - id: strict-approve-rule-matching-default
    finding_id: 2026-07-01-antigravity-strict-approve-matching
    last_verified: 2026-10-13
    status: retired
    note: "Documented matching default still holds; omitted from the current operator posture."
  - id: subagent-always-proceeds-auto-approve
    finding_id: 2026-07-01-antigravity-subagent-auto-approve
    last_verified: 2026-07-01
    status: retired
    note: "Not verified at 1.3.4. The documented accept-edits inheritance applies only to subagents spawned in that mode."
  - id: proceed-in-sandbox-mode
    finding_id: 2026-07-01-antigravity-sandbox-model
    last_verified: 2026-10-13
    status: retired
    note: "Documented mode still holds; the current posture leads with enabling and testing the sandbox itself."
  - id: closed-source-verifiability-gap
    finding_id: 2026-07-01-antigravity-sandbox-model
    last_verified: 2026-10-13
    status: open_question
  - id: remote-browser-settings-and-revocation
    finding_id: 2026-10-13-antigravity-remote-control-can-now-edit-the-cli-s-permissions-from-the-browser-and-browser-approved
    last_verified: 2026-10-13
    status: active
  - id: denial-workarounds-stopped
    finding_id: 2026-10-13-antigravity-1-2-15-the-agent-stops-working-around-denied-permission-requests
    last_verified: 2026-10-13
    status: active
  - id: sandbox-opt-in-and-macos-gap
    finding_id: 2026-10-13-antigravity-the-cli-sandbox-is-off-by-default-and-its-boundary-is-now-readable-on-macos-it-let-sandbox
    last_verified: 2026-10-13
    status: active
  - id: plan-review-separated-from-tool-bypass
    finding_id: 2026-10-13-antigravity-dangerously-skip-permissions-stops-auto-approving-plan-plans-in-1-3-2-plan-and-artifact
    last_verified: 2026-10-13
    status: active
  - id: multi-repo-subagent-isolation
    finding_id: 2026-10-13-antigravity-subagents-given-a-branch-or-share-workspace-worked-in-the-real-checkout-of-multi-repositor
    last_verified: 2026-10-13
    status: active
  - id: headless-agent-and-exit-status
    finding_id: 2026-10-13-antigravity-headless-as-a-ci-driver-daemons-now-end-with-the-run-late-errors-exit-3-and-an-unknown-age
    last_verified: 2026-10-13
    status: active
  - id: cli-plugin-marketplace
    finding_id: 2026-10-13-antigravity-the-official-plugin-marketplace-reached-the-cli-in-1-3-2-one-command-installs-skills-mcp
    last_verified: 2026-10-13
    status: active
  - id: current-install-and-auto-update
    finding_id: 2026-10-13-antigravity-install-channel-re-read-the-binary-updates-itself-from-google-s-updater-checking-at-most
    last_verified: 2026-10-13
    status: active
  - id: verbosity-and-sparse-persistence
    finding_id: 2026-10-13-antigravity-default-verbosity-flipped-to-medium-in-1-3-0-and-overrode-users-who-had-picked-high-while
    last_verified: 2026-10-13
    status: active
  - id: tiered-model-retirement
    finding_id: 2026-10-13-antigravity-model-access-changed-by-tier-between-2-and-3-october-the-remaining-claude-4-6-and-gpt-oss
    last_verified: 2026-10-13
    status: active
  - id: enterprise-claude-opt-in
    finding_id: 2026-10-13-antigravity-gemini-enterprise-gained-administrator-enabled-claude-5-5-while-its-linux-sandbox-descript
    last_verified: 2026-10-13
    status: active
  - id: homebrew-self-updating-cask
    finding_id: 2026-10-13-antigravity-homebrew-s-antigravity-cli-cask-tracks-the-vendor-archives-but-leaves-the-self-updater-act
    last_verified: 2026-10-13
    status: active
  - id: plugin-inventory-repairs
    finding_id: 2026-10-13-antigravity-plugin-validation-and-detail-listings-omitted-loaded-skills-and-subagents-until-1-3-3-and
    last_verified: 2026-10-13
    status: active
  - id: subagent-error-status
    finding_id: 2026-10-13-antigravity-failed-subagents-stopped-appearing-as-done-in-1-3
    last_verified: 2026-10-13
    status: active
  - id: builtin-image-check-loop
    finding_id: 2026-10-13-antigravity-image-generation-became-a-built-in-image-generator-subagent-in-1-2
    last_verified: 2026-10-13
    status: active
stance:
  use_for: "<a href='#bounded-work'>Teams that want to control a CLI session from a browser or run agy in CI, with permissions tested before launch and results checked afterward.</a>"
  avoid_for: "<a href='#human-approval'>Unattended jobs that depend on a person approving the plan during the run.</a>"
  watch_next: "<a href='#what-is-unresolved'>Whether a restarted 1.3.4 daemon honors saved deny rules and revoked browser grants stay revoked.</a>"

---

# Antigravity CLI

## What changed

On [13 October 2026, stable 1.3.4](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.3.4), Google [made remote-control serve load saved settings.json](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L11) and [fixed browser-approved grants that kept applying after removal](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L20). Remote users can now [change permissions and artifact review from the browser](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L11); before unattended work, restart the daemon with a saved deny rule and try the denied command.

<a id='bounded-work'></a>
## Where it stands, 2026-10-13

**Before remote or unattended work, install [the release above](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.3.4).**
Install the [stable 1.3.4 GitHub release asset for your platform and verify its SHA-256](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.3.4).
[The tagged README provides the platform-specific installation instructions](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/README.md).
For an audited fleet, set [`AGY_CLI_DISABLE_AUTO_UPDATE=true`](https://web.archive.org/web/20260918134151/https://antigravity.google/docs/cli/troubleshooting)
for every interactive and CI account. [Homebrew's cask also leaves the self-updater active](https://github.com/Homebrew/homebrew-cask/blob/1bfd02a192f7ae793522978018d0c1dfdaabe556/Casks/a/antigravity-cli.rb).
Check the running version before relying on the pin.
This profile identifies no listed feature as preview, beta or available only on main.

**Enable and test the sandbox before delegating.** The [CLI sandbox is off by default;
use `--sandbox` or `enableTerminalSandbox: true`](https://web.archive.org/web/20260916032705/https://antigravity.google/docs/cli/sandbox).
[1.3.3 blocked sandboxed macOS commands from reading `~/Library/Application Support`
by default, because desktop apps keep credentials and session tokens there](https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L12).
Try reading a harmless test file outside the workspace through shell commands and file tools, and confirm that denied paths stay denied.

**Before unattended use, test that a refusal ends the requested work.** Google says [1.2.15 stops the
agent working around unapproved requests through other commands, scripts or tools](https://github.com/google-antigravity/antigravity-cli/blob/1.2.15/CHANGELOG.md?plain=1#L13).
Inspect earlier refused runs for workarounds. Keep explicit deny rules and
containment.

**Treat the [signed-in Google account](https://web.archive.org/web/20261010210146/https://www.antigravity.google/docs/remote-control?tab=cli) as a remote permission controller.** Review earlier browser-driven transcripts and inspect [settings.json](https://web.archive.org/web/20261010160504/https://antigravity.google/docs/settings/) and [the shared config.json](https://web.archive.org/web/20261010210146/https://www.antigravity.google/docs/remote-control?tab=cli) for leftover grants.

**Check that your review choices survive saving.** The [CLI writes only settings
that differ from defaults](https://web.archive.org/web/20261010160504/https://antigravity.google/docs/settings/);
choosing today's default does not freeze it. [1.3.0 moved even users who had
selected the old high-verbosity default to medium summaries](https://github.com/google-antigravity/antigravity-cli/blob/1.3.0/CHANGELOG.md?plain=1#L9).
Set high again if individual steps matter. After saving permission and
artifact-review choices, inspect `settings.json`.

## Plugin admission is a permission decision

**Inspect plugin bundles before enabling them.** [1.3.2's marketplace puts
skills, MCP servers, subagents, hooks and runnable `bin/` tools in one install](https://github.com/google-antigravity/antigravity-cli/blob/1.3.2/CHANGELOG.md?plain=1#L9-L10).
Rebuild inventories with [`agy plugin list --json`](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L9),
[the repaired `agy plugin validate`](https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L24)
and [the `/plugin` Agents row that now includes root-declared subagents](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L19).
[Desktop marketplace installs update automatically and appear in the CLI](https://web.archive.org/web/20261010222428/https://antigravity.google/docs/marketplace);
disable those you need to audit. In [always-proceed, MCP tools run without a prompt](https://github.com/google-antigravity/antigravity-cli/blob/1.1.21/CHANGELOG.md?plain=1#L12).
Treat enabling a bundle as approving code to act for you.

## Unattended work needs completion checks

**Inspect real checkouts for unexpected edits from older subagent runs.** [1.3.3 fixed `branch`
or `share` subagents silently using real checkouts in multi-repository
workspaces](https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L19).
[1.3.1 also corrected failed
subagents shown as Done](https://github.com/google-antigravity/antigravity-cli/blob/1.3.1/CHANGELOG.md?plain=1#L14);
verify earlier outputs accepted on that label alone.

**In CI, check completed output and exit status.** [Unknown headless
`--agent` names now exit 1](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L15);
[late model or agent errors in `-p` runs exit 3 with `AGY_ERROR`, while
multi-turn `stream-json` sessions still warn and continue](https://github.com/google-antigravity/antigravity-cli/blob/1.2.10/CHANGELOG.md?plain=1#L17).
Reject [non-empty `denied_actions`](https://github.com/google-antigravity/antigravity-cli/blob/1.1.27/CHANGELOG.md?plain=1#L17)
[even on exit zero](https://web.archive.org/web/20261003090204id_/https://antigravity.google/docs/cli/headless.md).

Set `--print-timeout` explicitly. Since
[1.2.9 ends headless daemons with the run and caps background waits at 30 minutes](https://github.com/google-antigravity/antigravity-cli/blob/1.2.9/CHANGELOG.md?plain=1#L15-L16),
start persistent test servers outside `agy`.

<a id='human-approval'></a>
**Put human plan approval outside headless runs.** [Headless runs pass plan
review automatically](https://github.com/google-antigravity/antigravity-cli/blob/1.1.28/CHANGELOG.md?plain=1#L23).
Interactive `/plan` sessions [regained review under `--dangerously-skip-permissions`
in 1.3.2](https://github.com/google-antigravity/antigravity-cli/blob/1.3.2/CHANGELOG.md?plain=1#L13).
Choose [`artifactReviewPolicy: always-proceed`](https://web.archive.org/web/20261010160504/https://antigravity.google/docs/settings/)
separately if those interactive plans should continue automatically.

## Model access belongs to the job's account

**Replace retiring model pins under the job's account.**
[Ultra has no Claude Sonnet 4.6 or Opus 4.6 access; remaining 4.6 access and
GPT-OSS-120b are scheduled to end on 2 November 2026](https://web.archive.org/web/20261003070147/https://antigravity.google/docs/models).
[Free and AI Plus have no Claude 5.5 access; non-trial Pro
and Ultra do](https://web.archive.org/web/20261007130653id_/https://antigravity.google/docs/models.md).
[Enterprise Claude 5.5 requires administrator opt-in and token billing](https://web.archive.org/web/20261010095514/https://antigravity.google/docs/enterprise/?hl=de).
Run [`agy models`](https://web.archive.org/web/20261003090204id_/https://antigravity.google/docs/cli/headless.md) under the job's account and replace Free and AI Plus pins with an available Gemini model. Check service access
separately from the binary pin.

## Delegate the image loop, keep the visual decision

### Delegate prompt writing and image checks to `image-generator`.

[The 1.2.16
`image-generator` subagent writes prompts, checks results with up to three
attempts and saves conversation artifacts](https://github.com/google-antigravity/antigravity-cli/blob/1.2.16/CHANGELOG.md?plain=1#L14).
Delegate that loop; keep the visual call.

<a id='what-is-unresolved'></a>
## What is unresolved

- Earlier daemon policy: the [1.3.4 saved-settings repair](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L11)
  leaves the permissions used by older `remote-control serve` sessions unspecified.
  A dated explanation from Google naming the permission sources and defaults used before 1.3.4, or a versioned reproduction of an older daemon with a saved deny rule, would settle which policy those sessions used.
- Old browser grants: the [revocation fix](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L20)
  does not promise cleanup of existing copies. Upgrade an old config, revoke a
  grant and try the previously allowed command.
- Sandbox enforcement: the [CLI sandbox description](https://web.archive.org/web/20260916032705/https://antigravity.google/docs/cli/sandbox) and [Enterprise guidance](https://web.archive.org/web/20261010095514/https://antigravity.google/docs/enterprise/?hl=de) do not establish enforcement on your deployment. Test shell and file-tool denied paths, then check mounts and network access. Record the version and platform tested.
- Legacy permissions: [the `unsandboxed` deprecation note gives no removal
  version](https://github.com/google-antigravity/antigravity-cli/blob/1.2.2/CHANGELOG.md?plain=1#L9).
  [The script-approval change does not say whether old broad grants are
  narrowed](https://github.com/google-antigravity/antigravity-cli/blob/1.1.21/CHANGELOG.md?plain=1#L13).
  Explicit removal and migration releases, each tested against an
  old config, would settle both questions.
- Live model access: the [dated tier table](https://web.archive.org/web/20261007130653id_/https://antigravity.google/docs/models.md)
  does not establish which models your account can use. Run [`agy models`](https://web.archive.org/web/20261003090204id_/https://antigravity.google/docs/cli/headless.md) and a bounded
  replacement-model job under the deploying account before 2 November 2026.

## Profile hygiene

Reviewed through 13 October 2026. [The public repository distributes notes
without harness source](https://github.com/google-antigravity/antigravity-cli/tree/1.3.4);
behavior here rests on Google's notes and docs; enforcement remains unprobed.
See [METHOD.md](https://github.com/sheetgenius/frontier/blob/90bb1d1af32606608d2387bcb5d5796b88e00e5a/METHOD.md)
for the evidence contract.

Fact-check revision v4, 2026-10-14: receipts and wording checked; this profile
still describes the product as of 2026-10-13.
