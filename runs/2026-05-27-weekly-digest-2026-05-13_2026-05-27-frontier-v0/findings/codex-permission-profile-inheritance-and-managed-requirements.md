---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-27-codex-permission-profile-inheritance-and-managed-requirements
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-05-13
  end: 2026-05-27
versions_covered: "CLI 0.133.0..0.134.0"
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: study
evidence:
  - label: "Codex CLI v0.133.0 release: permission profile inheritance + managed requirements.toml (2026-05-21)"
    url: https://github.com/openai/codex/releases/tag/rust-v0.133.0
    precision: github_release
  - label: "Codex CLI v0.134.0 release: --profile canonicalization + legacy profile config rejection (2026-05-26)"
    url: https://github.com/openai/codex/releases/tag/rust-v0.134.0
    precision: github_release
---

# Codex: Permission Profiles Get Inheritance and an Org-Managed Enforcement File

## What Changed

Codex CLI 0.133.0 (2026-05-21) expanded permission profiles substantially:

- **Profile inheritance hierarchies** — a profile can derive from
  another, layering changes on top of a base instead of redeclaring
  every grant.
- **Managed `requirements.toml` integration** — an organization-level
  file the runtime consults; the release notes describe this as
  enforcement, not advice.
- **Runtime profile refresh** — profiles can be updated without
  restarting the agent.
- **Strengthened Windows sandbox compatibility** for permission flows
  that previously diverged from POSIX-shaped expectations.
- **Profile discovery via list APIs** — a real introspection surface.

CLI 0.134.0 (2026-05-26) followed up by making `--profile` the canonical
profile selector across the CLI, TUI permission flows, and sandbox flows,
**rejecting legacy profile configs** with migration guidance. The
direction is unambiguous: profile selection is the canonical way to
talk about permission posture, and stale configs get fail-fast.

## Why It Matters

The current Codex profile names permission profiles and plugin
governance as first-class claims. The novelty here is structural:

- Profile inheritance changes how an enterprise should structure its
  permission policy. The flat-grant list model — fine for an operator
  managing a handful of profiles by hand — does not scale to
  organizations. Inheritance lets a base "developer" profile derive a
  "developer-with-cloud-ops" profile without redeclaring the base.
- Managed `requirements.toml` is the first time Codex has named an
  org-level enforcement surface. Until now, permission was set per
  user, per session, per profile. A managed file at the org layer is
  the control-plane shape that scaling enterprises need.

This pairs directly with Gemini CLI's PolicyEngine-in-ACP change (see
the gemini-auto-modes-merged-and-policy-engine-in-acp finding). Two
providers shipped, in the same window, the same structural move:
policy lives in a versioned, org-managed surface consulted by the
agent runtime, not in per-session flags.

## Operator Implication

For enterprise operators running Codex at scale:

1. **Stop maintaining flat profile lists.** Build a base profile plus
   per-team derivations. The inheritance feature is the right shape.
2. **Decide where `requirements.toml` lives.** Repo-rooted? Org-rooted
   via a central distribution mechanism? Signed? The release notes
   describe the integration but not the distribution model.
3. **Migrate off legacy profile configs.** 0.134.0 will reject them.
   The migration is one-shot, not gradual.
4. **Treat `--profile` as the canonical handle.** Scripts that selected
   permission posture via flag-soup should normalize to `--profile`.

## Open

- The `requirements.toml` distribution and signing model is not
  documented in the release notes. Enterprise adopters need to confirm
  the trust path before depending on enforcement.
- Profile inheritance semantics: does a derived profile only *add* to
  the base, or can it *subtract*? Subtraction is the harder case
  (revoking a base grant) and the safer feature; the release notes do
  not say.
- Runtime refresh is described but the consistency model under
  in-flight tool calls is not. A profile that loosens during a tool
  call presumably continues with the loosened posture; a profile that
  tightens during a tool call is less clear.
