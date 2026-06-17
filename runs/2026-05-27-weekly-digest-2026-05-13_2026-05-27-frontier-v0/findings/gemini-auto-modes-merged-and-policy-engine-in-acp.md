---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-27-gemini-auto-modes-merged-and-policy-engine-in-acp
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-05-13
  end: 2026-05-27
versions_covered: "v0.44.0-preview.0..v0.44.0"
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: test
evidence:
  - label: "v0.44.0-preview.0: merge Auto modes into a single Auto mode (#26714); PolicyEngine in ACP (#27252) — 2026-05-22"
    url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0-preview.0
    precision: github_release
  - label: "v0.44.0 stable release (AUTO_EDIT shell-redirect auto-approval, 2026-05-27)"
    url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.44.0
    precision: github_release
---

# Gemini CLI: Auto Modes Collapse and PolicyEngine Reaches Into ACP

## What Changed

Two governance changes ship in the v0.44.0 line:

- **Auto modes merged into a single Auto mode** (#26714). The prior
  fan of Auto variants collapses to one. The release frames this as
  UX simplification; in practice it also collapses whatever
  differentiation the variants carried, including any
  more-restrictive default.
- **PolicyEngine integrates into ACP sessions** (#27252). The
  enforcement layer reaches into the Agent Communication Protocol
  session lifecycle, framed as a deadlock prevention fix. The
  effect is policy enforcement at the protocol-session layer, not
  just at the shell-tool layer the profile already names.

A third item belongs alongside: v0.44.0 stable adds **shell-redirect
auto-approval in `AUTO_EDIT` mode**. The release describes this as a
quality-of-life change. It is also an attack-surface expansion —
shell redirects (`>`, `>>`, `|`) auto-approved is the kind of
permission expansion that matters when those redirects target
sensitive paths.

## Why It Matters

The current Gemini profile's governance posture rests on
`shell-tools-allowlist` and `subagents-approval-mode-aware`. The
PolicyEngine-in-ACP change extends enforcement into the session
layer — a real shift, framed quietly. The Auto-mode merger and
shell-redirect auto-approval are accessibility wins (one mode is
easier to reason about; shell redirects in `AUTO_EDIT` are common
operator behavior) that come with authority and security costs
(one mode means less differentiation; redirect auto-approval is a
new auto-approved verb on the shell tool).

This sits inside a cross-provider thread: the same window saw
Claude Code's Auto mode become default-on
([finding](./claude-code-auto-mode-default-on.md)) and Codex's
goal mode graduate default-on
([finding](./codex-goal-mode-graduated-and-remote-computer-use.md)).
Three providers, three different surfaces, same direction —
autonomy graduates from opt-in to baseline.

## Operator Implication

- Operators on previous Auto variants must re-audit which behaviors
  the consolidated Auto mode treats as safe. The merger may have
  loosened or tightened constraints; the release notes do not
  enumerate.
- Operators on `AUTO_EDIT` should explicitly decide whether
  shell-redirect auto-approval is acceptable for their environment.
  If the agent writes to disk under `AUTO_EDIT`, redirects are
  another write surface.
- Operators evaluating Gemini's ACP integration should treat
  PolicyEngine-in-ACP as the new enforcement boundary. The
  "deadlock fix" framing understates the structural shift.

## Open

- PolicyEngine-in-ACP: documented as a fix; what's the underlying
  policy posture for ACP sessions? Is policy now enforced
  per-session by default, or only when an operator has configured
  a policy?
- `AUTO_EDIT` shell-redirect auto-approval: is this gated by
  workspace trust? By the existing shell-tools allowlist? Or is it
  a separate decision?
- The PolicyEngine-in-ACP cross-cuts with the OpenHands ACP UI
  finding (OpenHands as ACP client fronting third-party agents).
  Whether Gemini's PolicyEngine applies when Gemini is the ACP
  *server* serving OpenHands is not documented.
