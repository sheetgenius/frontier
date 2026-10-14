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
tagline: "Sandbox GA earns a trial of authenticated shell work after settings migration and host checks."
compared_with:
  - claude-code
surface_class: closed_source_releases
evidence_floor: official_changelog
status: active_watch
first_published: 2026-08-21
last_updated: 2026-10-13
last_full_review: 2026-10-13
claims:
  - id: allow-all-falsey
    finding_id: 2026-09-21-github-copilot-cli-1-0-85-copilot-allow-all-falsey-values-used-to-enable-auto-approval
    last_verified: 2026-10-13
    status: retired
    note: "Historical 1.0.85 repair still documented; the current install decision is 1.0.97."
  - id: plugin4shell-no-fix
    finding_id: 2026-09-21-github-copilot-cli-plugin4shell-no-changelog-line-names-a-fix-through-1-0-87
    last_verified: 2026-10-13
    status: active
    note: "Rechecked through 1.0.97 as no named checkout-verification repair found, without asserting current exploitability."
  - id: sandbox-localhost-proxy-egress
    finding_id: 2026-09-21-github-copilot-cli-1-0-83-sandbox-cuts-localhost-and-pins-linux-egress-to-the-proxy-breaking-default
    last_verified: 2026-10-13
    status: retired
    note: "Replaced by GA defaults and platform network documentation; enabling local network alone does not restore macOS self-connect with credential proxying."
  - id: sandbox-file-tools-read-dev-config
    finding_id: 2026-09-21-github-copilot-cli-1-0-83-sandbox-grants-file-tools-read-access-to-token-bearing-dev-config-by-default
    last_verified: 2026-10-13
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
    last_verified: 2026-10-13
    status: active
    note: "Retained only for the documented forced-refresh restriction, rechecked against the corrected 2026-10-13 docs. ACP entry-point coverage and sandbox minimums have separate current claims; runtime enforcement is untested."
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
    last_verified: 2026-10-13
    status: active
  - id: repo-is-not-agent-source
    finding_id: 2026-10-13-github-copilot-cli-ten-stable-releases-after-the-baseline-pinning-the-package-does-not-disable-cli-or-plugin
    last_verified: 2026-10-13
    status: active
    note: "The proprietary agent remains outside the public release tree; binary enforcement has not been tested."
  - id: latest-lags-prerelease
    finding_id: 2026-10-13-github-copilot-cli-ten-stable-releases-after-the-baseline-pinning-the-package-does-not-disable-cli-or-plugin
    last_verified: 2026-10-13
    status: retired
    note: "Stable and preview publication are distinct. Exact historical npm dist-tag transitions were not verified."
  - id: stable-runtime-and-update-policy
    finding_id: 2026-10-13-github-copilot-cli-ten-stable-releases-after-the-baseline-pinning-the-package-does-not-disable-cli-or-plugin
    last_verified: 2026-10-13
    status: active
  - id: managed-policy-entry-points
    finding_id: 2026-10-13-github-copilot-cli-1-0-88-managed-settings-now-reach-acp-ahp-host-and-server-sessions-which-previously-ran
    last_verified: 2026-10-13
    status: active
  - id: local-sandbox-ga-and-bypass-policy
    finding_id: 2026-10-13-github-copilot-cli-1-0-93-opens-local-sandboxing-to-every-user-it-stays-off-by-default-and-a-server-managed
    last_verified: 2026-10-13
    status: active
  - id: cloud-sandbox-preview-billing
    finding_id: 2026-10-13-github-copilot-cli-1-0-93-opens-local-sandboxing-to-every-user-it-stays-off-by-default-and-a-server-managed
    last_verified: 2026-10-13
    status: retired
    note: "Documented preview and billing distinction retained in the supporting record; omitted from this local-shell posture."
  - id: platform-network-docs
    finding_id: 2026-10-13-github-copilot-cli-ga-docs-rewrite-the-sandbox-network-rules-local-network-off-macos-and-linux-egress-forced
    last_verified: 2026-10-13
    status: active
  - id: credential-withholding-and-masking
    finding_id: 2026-10-13-github-copilot-cli-sandboxed-commands-now-get-placeholder-credentials-github-token-withheld-1-0-92-and-a-loca
    last_verified: 2026-10-13
    status: active
  - id: managed-domain-boundary
    finding_id: 2026-10-13-github-copilot-cli-1-0-93-adds-permissions-limitto-a-managed-domain-boundary-that-allow-all-cannot-widen
    last_verified: 2026-10-13
    status: active
  - id: assisted-permissions-controls-and-attribution
    finding_id: 2026-10-13-github-copilot-cli-approvals-got-finer-and-assisted-permissions-the-llm-approval-judge-got-an-admin-off-switc
    last_verified: 2026-10-13
    status: active
  - id: settings-location-and-model-default
    finding_id: 2026-10-13-github-copilot-cli-1-0-93-ignores-user-settings-left-in-copilot-config-json-breaking-plus-retired-models-and
    last_verified: 2026-10-13
    status: active
    note: "The current body uses the settings-location break; the docs-only default-model change is left in the supporting record."
  - id: repository-inputs-and-directory-grants
    finding_id: 2026-10-13-github-copilot-cli-repository-controlled-inputs-widened-claude-rules-1-0-89-hot-applied-mcp-config-1-0-93-add
    last_verified: 2026-10-13
    status: active
  - id: computer-use-and-workflow-permissions
    finding_id: 2026-10-13-github-copilot-cli-docs-describe-preview-computer-use-and-dynamic-workflows-with-different-permission-surface
    last_verified: 2026-10-13
    status: active
  - id: stable-resume-and-hook-repairs
    finding_id: 2026-10-13-github-copilot-cli-stable-1-0-97-repairs-resumed-plugin-hooks-and-canceled-writes-and-denies-unattended-hook
    last_verified: 2026-10-13
    status: active
  - id: json-output-secret-redaction
    finding_id: 2026-10-13-github-copilot-cli-stable-1-0-97-repairs-json-secret-redaction-and-mcp-selection-inline-images-now-default
    last_verified: 2026-10-13
    status: active
  - id: telemetry-capture-policy
    finding_id: 2026-10-13-github-copilot-cli-docs-separate-telemetry-identity-from-five-content-capture-classes-all-off-by-default
    last_verified: 2026-10-13
    status: retired
    note: "Documented but omitted from this operating posture to keep the containment and upgrade decisions short."
  - id: managed-sandbox-client-minimum
    finding_id: 2026-10-13-github-copilot-cli-managed-sandbox-docs-require-cli-1-0-93-and-block-older-client-connections
    last_verified: 2026-10-13
    status: active
  - id: fast-routing-fallback
    finding_id: 2026-10-13-github-copilot-cli-1-0-89-removes-fast-routing-saved-preferences-fall-back-to-balance
    last_verified: 2026-10-13
    status: active
  - id: custom-agent-precedence
    finding_id: 2026-10-13-github-copilot-cli-custom-agent-docs-put-personal-definitions-ahead-of-repository-and-organization-definition
    last_verified: 2026-10-13
    status: retired
    note: "Documentary correction retained in the supporting record; omitted from the public body to avoid a configuration catalog."
  - id: workflow-billing-eligibility
    finding_id: 2026-10-13-github-copilot-cli-dynamic-workflow-preview-excludes-annual-pro-plans-still-on-legacy-request-billing
    last_verified: 2026-10-13
    status: active
  - id: fleet-channel-limits
    finding_id: 2026-10-13-github-copilot-cli-ten-stable-releases-after-the-baseline-pinning-the-package-does-not-disable-cli-or-plugin
    last_verified: 2026-10-13
    status: active
stance:
  use_for: '<a href="#try-authenticated-git-before-broad-delegation">Run a bounded authenticated Git trial before expanding delegation.</a>'
  avoid_for: 'Avoid relying on Windows proxy host rules as your sole egress boundary.'
  watch_next: '<a href="#what-is-unresolved">Target-host boundary test results before wider delegation.</a>'
---

# GitHub Copilot CLI

## Where it stands, 2026-10-13

On 7 October 2026, [1.0.93 made command sandboxing available to every user](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L42), but [left it off by default](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md?plain=1#L42). The same release [stopped reading user settings from `~/.copilot/config.json`](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L45). An upgrade can therefore leave old containment settings behind.

Stable [1.0.97 was released on 13 October 2026](https://github.com/github/copilot-cli/releases/tag/v1.0.97) and is available as [`npm install -g @github/copilot@1.0.97`](https://registry.npmjs.org/@github/copilot/1.0.97). The [runtime updater defaults to on](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L452-L453); set [`COPILOT_AUTO_UPDATE=false` for CI pins](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L144) and check `copilot --version`. At the 2026-10-13 UTC cutoff, the newest published preview was [1.0.98-0](https://github.com/github/copilot-cli/releases/tag/v1.0.98-0).

**Check the 1.0.97 repairs before unattended work.** [Disabled plugin hooks no longer return on resume, and canceled writes are not replayed when suspended sessions resume](https://github.com/github/copilot-cli/blob/76c3172eb38f5e7537b90b9800a7023d81156438/changelog.md?plain=1#L17-L22). Inspect the hook list and interrupted calls in an existing session. [The release also repairs `--output-format json` secret redaction](https://github.com/github/copilot-cli/blob/76c3172eb38f5e7537b90b9800a7023d81156438/changelog.md?plain=1#L16); inspect saved output because the note does not bound earlier exposure. [Autopilot denies a `preToolUse` hook's `ask` decision](https://github.com/github/copilot-cli/blob/76c3172eb38f5e7537b90b9800a7023d81156438/changelog.md?plain=1#L8), so review hooks that expect a human answer.

For preview capabilities and unversioned entry points, see [workflow permissions](#shared-configuration-can-widen-authority) and [the open questions](#what-is-unresolved).

**Migrate settings before enabling the sandbox.** Move the affected keys to [`~/.copilot/settings.json`](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L45), starting with sandbox controls and URL rules.

Before expanding the trial, complete the [host, credential and network checks](#try-authenticated-git-before-broad-delegation), then review [shared configuration and unattended work](#shared-configuration-can-widen-authority).

Use [`/sandbox enable`, or `copilot --sandbox -p 'TASK'` per CI job](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md), then inspect [`/sandbox status` and `/sandbox policy`](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L131-L140).

<h2 id="try-authenticated-git-before-broad-delegation">Try authenticated Git before broad delegation</h2>

[1.0.92 withholds ambient `GITHUB_TOKEN` from sandboxed shells unless configured](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L60). GitHub documents [placeholder Git/gh credentials replaced by a proxy at restricted destinations](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L151-L156), and [`sandbox.credentials.envVars.<NAME>.injectHosts` for other masked variables](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L502). Keep destination lists narrow. With sandboxing enabled, try a read-only authenticated Git operation on an authorized repository. Record completion and exceptions before expanding the workload.

That is the bargain to test: less credential checking command by command, more care over destinations and exceptions. Count both before expanding the workload.

**Require sandbox policy on capable hosts.** Check [Windows 11 prerequisites: 25H2 with KB5124010 or later, or 26H1 with KB5124006 or later, plus BaseContainer support; on Linux, `bwrap` 0.5.0+ and `slirp4netns` on PATH](https://github.com/github/docs/blob/602021b0ba16/data/reusables/cli/local-sandboxing-prereqs.md). For mandatory containment, apply [`sandbox.enabled: true`, `sandbox.failIfUnavailable: true` and `sandbox.allowBypass: false`](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L351-L363) through device policy.

The docs say [server-managed enablement alone can be declined on unsupported hosts](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md?plain=1#L116-L118), and [managed sandbox settings block clients below 1.0.93](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L463-L471). If bypass is permitted, distinguish [one-attempt approval from a session-wide opt-out](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L136-L147).

**Restrict token-file access before widening grants.** Masking [does not hide credential files or unmasked variables](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L182). Disable [developer-tool access, which is on by default](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L215) with [`sandbox.allowDevToolAccess: false` to remove grants to token-bearing files such as `~/.npmrc`](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L353). Grant only the paths you need. Built-in file tools [apply policy in software on a best-effort basis](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md?plain=1#L64). A [full bypass also skips masking and the proxy](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L103).

**Test egress and localhost on each target OS.** The GA docs describe [proxy-enforced egress on macOS/Linux, while Windows programs can ignore the proxy and bypass host rules](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L291). Keep an OS firewall where Windows egress restrictions must hold.

Windows [masking requires Allow local network, which also permits private-network access](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L39). On macOS, [default Git/gh masking activates a proxy that blocks a command connecting directly to its own listener even with local network enabled](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L264-L266). Test a blocked destination and localhost suites before requiring sandboxing.

**Pair domain permissions with network containment.** [1.0.93 adds `permissions.limitTo`](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L33). The docs say [saved approvals and allow-all cannot widen it, but it checks domain requests rather than restricting shell, read or write operations themselves](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L712-L726).

**Check denials through every integration you run.** [1.0.88 repairs managed MCP, permission and plugin policy coverage for integration sessions launched through ACP, Agent Host or the SDK server](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L172). Test the same denied operation through each entry point.

<h2 id="shared-configuration-can-widen-authority">Shared configuration can widen authority</h2>

Copilot [reads Claude Code's `.claude/rules` from 1.0.89](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L123), and [MCP configuration changes apply between turns from 1.0.93](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L43). [One repository's rules can steer both agents](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1084). Review those files. Treat [`/add-dir` as a session read/write sandbox grant subject to managed policy](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L142).

**Pin a supported model for comparisons.** [1.0.89 sends saved, exported or resumed Fast preferences to Balance](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L139). Choose a model explicitly before comparing behavior or cost across the upgrade.

**Sample the approval judge's decisions.** [Assisted Permissions lets a model judge requests for auto-approval](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md?plain=1#L769-L775). Inspect the [1.0.96 timeline's attribution to you, the judge, policy or unattended fallback](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L11). Review disputed decisions; [managed policy can require Manual Approval from 1.0.94](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L29). Use the attribution to decide which exceptions still need your attention.

**Review workflow code before pre-granting tools.** [Dynamic workflows remain public preview](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/agents/dynamic-workflows.md?plain=1#L14); [existing annual Pro/Pro+ subscribers still on legacy premium request billing are excluded](https://github.com/github/docs/commit/1230337ad5f6292d236569791a6fe5d79777c76f). [`copilot workflow run` shows no approval prompts, subagents inherit session grants, and extension code can run outside those prompts](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/agents/dynamic-workflows.md?plain=1#L104-L114). Approve the code before granting tools narrowly.

<h2 id="what-is-unresolved">What is unresolved</h2>

The [public repository contains notes and an installer, not the agent implementation](https://github.com/github/copilot-cli/tree/v1.0.97).

- **Get boundary test results before broadening delegation.** Test the documented masking and file-tool rules in 1.0.97. Controlled allowed and denied credential-destination requests and token-file reads would settle those cases. Use the platform network checks and integration denial checks for those paths.
- **Test failed refresh before requiring fresh policy.** GitHub [documents restrictions when a required policy refresh fails](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L241-L249). Check effective permission decisions under failure, separately at unmanaged startup, known-managed startup, cached-policy startup and forced fresh fetch.
- **Specify the judge's exceptions before standardizing it.** The [1.0.94 policy note does not name the managed disable key](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L29); the [1.0.96 attribution note does not define unattended fallback](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md?plain=1#L11). Docs naming the key and defining fallback decisions would settle deployment and exception handling.
- **Test shell reads and constructed destinations before relying on exclusions.** [For Business and Enterprise users, content exclusion promises context-use exclusion](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/copilot-surfaces/copilot-cli.md?plain=1#L214-L216), without establishing a shell-read boundary. An excluded-file shell read and a runtime-constructed destination against `limitTo` would settle these two untested paths.
- **Keep computer use a separate containment trial.** It is [public preview and off by default; actions follow tool permissions](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/agents/computer-use.md?plain=1#L13-L55), and [managed `features.computerUse: false` prevents users from enabling it](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L132-L134). Test desktop actions against command sandbox restrictions before expanding access.
- **Check plugin checkout results before loading code.** [AIR Security's 17 September 2026 Plugin4Shell report describes substitution through 40-hex default branches on hosts that permit them, and says GitHub rejects those names](https://www.air.security/blog-posts/plugin4shell). We found no named checkout-verification repair in [notes through 1.0.97](https://github.com/github/copilot-cli/blob/76c3172eb38f5e7537b90b9800a7023d81156438/changelog.md). Use controlled repositories and compare installed plugin files with the corresponding files at the expected pinned commit; [installed plugins omit the source repository's `.git` directory](https://github.com/github/copilot-cli/blob/76c3172eb38f5e7537b90b9800a7023d81156438/changelog.md?plain=1#L1412). A named, released repair or controlled install result would settle the mechanism for its stated version and host. Silence proves neither a patch nor current exploitability.
- **Require release versions before reproducible multi-agent rollout.** [The multi-agent `--fleet` mode](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L46) and [workflow commands](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L54-L70) are documented, but their introduction versions are unverified. This profile does not establish whether those entry points are available in 1.0.97. The programmatic reference [excludes `--fleet` in ACP server mode](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L46). Release notes naming those entry points would settle which deployment can reproduce them.

## Profile hygiene

Dated, not evergreen. Scope: through 2026-10-13.
See [METHOD.md](https://github.com/sheetgenius/frontier/blob/3d3ecfdbcf2e690470a2d00c218e52b50566e402/METHOD.md)
for how this profile uses sources.
