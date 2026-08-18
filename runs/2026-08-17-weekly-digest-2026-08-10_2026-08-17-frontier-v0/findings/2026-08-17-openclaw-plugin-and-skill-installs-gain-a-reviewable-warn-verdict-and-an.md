---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openclaw-plugin-and-skill-installs-gain-a-reviewable-warn-verdict-and-an
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/116489
    precision: merged_pr
---
# 2026-08-17-openclaw-plugin-and-skill-installs-gain-a-reviewable-warn-verdict-and-an

Plugin and skill installs gain a reviewable `warn` verdict and an explicit acknowledgement.

An external `security.installPolicy` command can now return `warn` in addition to allow/block, letting an authorized operator review a suspicious plugin or skill before deciding. Interactive CLI installs print the bounded reason and findings and require the operator to type the exact target name; `--acknowledge-install-policy-warning` approves every warning in that invocation; each acknowledged warning is re-evaluated against the staged source before install proceeds. A changed same-stage warning, a `block`, malformed output, timeout, execution failure, oversized review or dependency-boundary failure all stay terminal. Automatic, system-agent and Claw package flows cannot borrow prompt authority from an ambient TTY, and the deprecated `--dangerously-force-unsafe-install` flag remains non-authorizing. The v2026.8.1-beta.2 notes pair this with provenance warnings that require explicit `--force` for arbitrary executable plugin sources while keeping trusted ClawHub, bundled and official-catalog installs frictionless. Security-owner sign-off is recorded in the PR (OpenClaw secops, 2026-08-14).

Channel: preview-or-beta. Ancestry: Merge commit bf40269cb7924a37ed096ac30b7e44cf305af193 (PR #116489, merged 2026-08-14T17:58:46Z, base main). compare/v2026.8.1-beta.2...bf40269cb -> status=behind, ahead_by=0. compare/v2026.7.1-2...bf40269cb -> diverged, ahead_by=14038. The Control UI half (PR #120900, 47442197a100b1b76f0bc8d3538415e3735e394b, merged 2026-08-15T03:07:03Z) is NOT in the beta: compare/v2026.8.1-beta.2...47442197a -> diverged, ahead_by=19, i.e. main-unreleased.

Operator consequence: Adapt any automation that installs plugins non-interactively: a `warn` verdict is now terminal for automatic, system-agent and Claw package flows, so a policy hook that starts returning `warn` will stop those installs rather than prompting. Note the split channel  --  the CLI enforcement is in beta, the Control UI review surface is main-only, so a beta operator gets the block without the place to review it.

## Receipt
- https://github.com/openclaw/openclaw/pull/116489
