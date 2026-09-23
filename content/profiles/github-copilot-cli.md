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
tagline: "The most pinnable of the closed terminal agents, whose 1.0.85 notes admit that setting COPILOT_ALLOW_ALL=0 used to turn auto-approval on."
compared_with:
  - claude-code
  - antigravity
  - cursor
  - grok-build
surface_class: closed_source_releases
evidence_floor: official_changelog
status: active_watch
first_published: 2026-08-21
last_updated: 2026-09-21
last_full_review: 2026-09-23
claims:
  - id: allow-all-falsey
    finding_id: 2026-09-21-github-copilot-cli-1-0-85-copilot-allow-all-falsey-values-used-to-enable-auto-approval
    last_verified: 2026-09-23
    status: active
  - id: plugin4shell-no-fix
    finding_id: 2026-09-21-github-copilot-cli-plugin4shell-no-changelog-line-names-a-fix-through-1-0-87
    last_verified: 2026-09-23
    status: active
  - id: sandbox-localhost-proxy-egress
    finding_id: 2026-09-21-github-copilot-cli-1-0-83-sandbox-cuts-localhost-and-pins-linux-egress-to-the-proxy-breaking-default
    last_verified: 2026-09-23
    status: active
  - id: sandbox-file-tools-read-dev-config
    finding_id: 2026-09-21-github-copilot-cli-1-0-83-sandbox-grants-file-tools-read-access-to-token-bearing-dev-config-by-default
    last_verified: 2026-09-23
    status: active
  - id: managed-hooks-bypass
    finding_id: 2026-09-21-github-copilot-cli-1-0-85-allowmanagedhooksonly-was-bypassable-by-extension-callbacks
    last_verified: 2026-09-23
    status: active
  - id: session-sandbox-bypass
    finding_id: 2026-09-21-github-copilot-cli-1-0-85-session-scoped-sandbox-bypass-for-users-when-policy-allows
    last_verified: 2026-09-23
    status: active
  - id: fail-closed-managed-settings-acp-revoke
    finding_id: 2026-09-21-github-copilot-cli-1-0-81-fail-closed-managed-settings-acp-allow-all-revoke-fixed-per-entry-managed-plugins
    last_verified: 2026-09-23
    status: active
  - id: parser-rewrite-breaking
    finding_id: 2026-09-21-github-copilot-cli-1-0-85-cli-parser-rewrite-and-copilot-plugins-flag-removals-breaking
    last_verified: 2026-09-23
    status: active
  - id: login-pinning-mcp-race-marketplaces
    finding_id: 2026-09-21-github-copilot-cli-1-0-83-and-1-0-87-enterprise-login-pinning-mcp-policy-race-closed-marketplace-lockdown
    last_verified: 2026-09-23
    status: active
  - id: worktrees-fleet-custom-agents
    finding_id: 2026-09-21-github-copilot-cli-capability-worktrees-out-of-experimental-fleet-custom-agents-read-repo-instructions
    last_verified: 2026-09-23
    status: active
  - id: content-exclusion-docs
    finding_id: 2026-09-21-github-copilot-cli-content-exclusion-now-documented-as-applying-to-the-cli-docs-only
    last_verified: 2026-09-23
    status: active
  - id: repo-is-not-agent-source
    last_verified: 2026-09-23
    status: open_question
    note: "github/copilot-cli is license, docs, changelog and installer. The agent is not in that tree, so no enforcement line in the notes can be read in code."
  - id: latest-lags-prerelease
    last_verified: 2026-09-23
    status: retired
    note: "Settled: the latest/prerelease split is structural. At every stable from 1.0.81 to 1.0.87 a newer prerelease already existed."
stance:
  use_for: "A GitHub-native terminal agent with a dated, pinnable release train. Pin a GitHub Release or an npm version at 1.0.85 or later. Enterprise admins get managed settings that fail closed and an explicit sandbox-bypass policy, as the notes describe them."
  avoid_for: "Anyone who needs to read the agent; the repo is not it. Installing plugins from sources you do not control while no fix for Plugin4Shell is named. Environments that set COPILOT_ALLOW_ALL=0 on 1.0.84 or earlier."
  watch_next: "A release note or advisory naming a Plugin4Shell fix; a local probe of the 1.0.83 sandbox network rules and the 1.0.85 managed-hooks fix; whether --fleet gets a changelog line and a version."
---

# GitHub Copilot CLI

This is the `copilot` binary, npm `@github/copilot`. It is not VS Code
Copilot, Copilot Chat, the cloud coding agent, or the older `gh copilot`
extension. Among the large closed coding agents it is the easiest to pin:
every stable is a GitHub Release with a matching npm version and a dated
changelog section. The code is not public.
[github/copilot-cli](https://github.com/github/copilot-cli) holds a
proprietary license, a README, the changelog and an installer. So the
release notes tell you what GitHub says the sandbox does, and only a local
run tells you whether it does.

The short read for 2026-09-21: be on 1.0.85 or later, because earlier
builds turned auto-approval on when told to turn it off and let extension
hooks slip past a managed-only lockdown. Then re-test anything that runs
inside the sandbox, because 1.0.83 changed what it can reach.

## Where it stands, 2026-09-21

**Channel.** Six stables in the window, 1.0.81 (27 August) through
[1.0.87](https://github.com/github/copilot-cli/releases/tag/v1.0.87)
(21 September). At every stable, a newer build was already out on npm's
`prerelease` tag; that split is how the project ships, not a lag. One oddity: npm carries a
plain `1.0.84` (15 September) with no tag, no release and no changelog
section. 1.0.85 followed under four hours later. If you installed in that
gap, you got an unnoted build. Releases carry no checksum file.

**Off meant on.** Before 1.0.85, `COPILOT_ALLOW_ALL=0` or another falsey
value
[enabled automatic tool approval](https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L99).
A CI job that set it to 0 to be safe was running with every tool
auto-approved. No advisory was published. Upgrade, then remove the variable
rather than setting it false.

**Managed controls got teeth, late.** Also in 1.0.85,
[`allowManagedHooksOnly`](https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L127)
now blocks extension-registered tool hooks, which "previously bypassed the
managed-only lockdown." Managed Edit and Write rules now catch shell
redirections and in-place `sed`, so expect new prompts in scripts that
write that way. Since
[1.0.81](https://github.com/github/copilot-cli/releases/tag/v1.0.81),
`forceRemoteSettingsRefresh` fails closed when GitHub is unreachable, and
revoking allow-all from an ACP client actually reaches the permission
engine; before, it could report success and change nothing. A session
launched with `--allow-all-*` keeps that baseline whatever the ACP client
says. Since 1.0.83, denied MCP servers no longer start before the
enterprise policy loads, and `forceLoginOrgs` pins sign-in to approved orgs.

**The sandbox moved in both directions.** In
[1.0.83](https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L181-L185),
sandboxed commands on macOS and Linux lost access to local services,
including a server the command itself starts on 127.0.0.1, and Linux egress
is pinned to the configured proxy. Test suites that bind a port will fail on
macOS until you turn on "Allow local network" in `/sandbox`; Linux hosts
need slirp4netns, nsenter and the iptables tools on PATH. The same release
[let file tools read](https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L168)
the developer-tool paths shell commands already could, "including
token-bearing registry config such as ~/.npmrc." Set
`sandbox.allowDevToolAccess: false` if prompt-injected token theft is in
your threat model, and check that managed policy uses that key name: the
older `allowDevToolCaches` is silently ignored.

**Who can turn the sandbox off.** From 1.0.85, `/sandbox disable` turns it
off for the session when the organisation's `sandbox.allowBypass` permits,
and one approved bypass prompt in a managed session disables it for the
rest of the session, not for one command. Admins should set `allowBypass`
deliberately.

**Plugin4Shell has no named fix.**
[AIR Security reported](https://www.air.security/blog-posts/plugin4shell)
on 17 September that Copilot's plugin install checks out a pinned commit
SHA without verifying the result, so a branch named after that SHA can
serve different code. Through 1.0.87 no changelog line names a fix. Claude
Code fixed the same bug without a changelog line, so silence proves
nothing either way. Until GitHub says otherwise, a pinned SHA is a request,
not a verification. Install plugins from repositories you control and
check the installed tree's HEAD.

**Upgrade costs.** 1.0.85 rewrote argument parsing.
`copilot plugins install --skill` became `copilot skill add`, several
`copilot plugins` flags are gone, and `plugins list --json` now emits a flat
array. Grep provisioning scripts first. Anyone who shared debug logs from
before 1.0.87 should assume they may contain secrets from the launching
shell.

**What you gain.** Worktrees are out of experimental, custom agents can opt
into AGENTS.md and CLAUDE.md, and GitHub's docs now say the CLI honours
content exclusion for Business and Enterprise. The docs also describe
`--fleet` for parallel sub-tasks, with no version named; check
`copilot --help` before building on it.

## What is unresolved

- Whether any of the 1.0.83 and 1.0.85 sandbox and hook changes bind as
  described. Nothing here has been probed locally.
- Whether content exclusion covers files the agent reads through the shell.
  The docs do not say.
- When, or whether, a Plugin4Shell fix ships under a name.

## Profile hygiene

Dated, not evergreen. Every claim above resolves to a finding in
[the run that produced it](/runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/),
and this page says what was true on the date at the top. See
[METHOD.md](https://github.com/sheetgenius/frontier/blob/main/METHOD.md) for
the evidence contract.
