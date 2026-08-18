---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-claude-code-self-hosted-environments-run-claude-code-cloud-sessions-on
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog#2-1-224
    precision: official_changelog
---
# 2026-08-10-claude-code-self-hosted-environments-run-claude-code-cloud-sessions-on

Self-hosted environments run Claude Code cloud sessions on infrastructure you operate  --  public beta, shipped inside a stable release.

Changelog v2.1.224: "Added self-hosted environments: `claude self-hosted-runner` turns your own machines or containers into a place Claude Code web, mobile, and desktop sessions can run, on Team and Enterprise plans." The digest fills in the control flow: when someone picks your environment from claude.ai, the mobile or desktop apps, or `claude --cloud`, "that session runs inside your network, with access to your internal services", and an Owner or admin must first enable "Allow self-hosted environments" in admin settings. The runner surface was still settling through the window  --  v2.1.224 through v2.1.234 carried a steady stream of runner fixes: sessions failing on every fresh runner when a `checkout` hook fails, registration succeeding then every session failing when `--base-dir` cannot be written, repository preparation hanging on a Git Credential Manager prompt, sessions ending in the gap between a background task finishing and the follow-up turn, and Windows startup now requiring an explicit `--base-dir` because there is no default checkout directory. v2.1.229 added server-supplied hook support for runner sessions, matching managed-environment behaviour.

Channel: tagged-release. Ancestry: The code channel and the feature's maturity label disagree, and the distinction matters. The code shipped in v2.1.224, a plain non-prerelease semver published to npm at 2026-08-07T01:36:32Z under dist-tag `latest` (per-version manifest resolves HTTP 200)  --  so by channel it is a tagged release, not a prerelease. The feature is nonetheless labelled "public beta on Team and Enterprise plans" on the what's-new surface. There is no rc/beta/alpha tag anywhere in the registry `time[]` map for this window; the beta is a product-maturity claim, not a release channel. Backed by a dedicated docs page at /docs/en/self-hosted-environments-quickstart (HTTP 200).

Operator consequence: Watch rather than adopt, unless you have a concrete reason cloud sessions must reach internal services. The capability itself is significant  --  it is the answer for teams who wanted Claude Code's web and mobile surfaces but could not send their source to Anthropic-operated compute. But read the shape of the fix list before scheduling the migration: five separate 'runner fails on every session' defects landed in the eleven days after launch, which is what a surface looks like before its edges are known. If you do pilot it, note that v2.1.229's server-supplied hooks mean the runner accepts hook definitions from the server  --  establish who can set those before you point a runner at anything sensitive.

## Receipt
- https://code.claude.com/docs/en/changelog#2-1-224
