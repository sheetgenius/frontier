---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-27-codex-goal-mode-graduated-and-remote-computer-use
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-05-13
  end: 2026-05-27
versions_covered: "26.519; CLI 0.133.0"
status: accepted_signal
confidence: high
accessibility_impact: high
operator_relevance: high
actionability: test
evidence:
  - label: "Codex product changelog: Appshots, goal mode, and more 26.519 (2026-05-21)"
    url: https://developers.openai.com/codex/changelog
    precision: release_note
  - label: "Codex CLI v0.133.0 release notes (goals default-on; permission profile inheritance; managed requirements.toml)"
    url: https://github.com/openai/codex/releases/tag/rust-v0.133.0
    precision: github_release
---

# Codex: Goal Mode Graduates and Remote Computer-Use After Mac Lock Ships

## What Changed

On 2026-05-21, OpenAI shipped the 26.519 product launch ("Appshots, goal
mode, and more") and Codex CLI 0.133.0 simultaneously. Goal mode — the
"point Codex at an objective spanning hours or even days" primitive
that had been a research preview across app, IDE extension, and CLI —
graduates out of experimental. Goals are now enabled by default,
backed by dedicated storage and progress tracking across active turns.

The same launch ships **remote computer use after Mac lock** with
documented safeguards: short-lived authorization, covered displays
during remote operation, automatic relock on local input, and manual
unlock as a fallback. macOS Appshots (double-Cmd capture of the
frontmost app window plus on-screen text) and ChatGPT Business plugin
marketplace sharing also ship in this entry.

The CLI side of 0.133.0 carries the structural change that makes
goal-graduation operable at scale: permission profiles now support
**inheritance hierarchies**, **managed `requirements.toml` integration**
(an org-level enforcement file), runtime profile refresh, and
list APIs for profile discovery. Plugin discovery becomes
marketplace-aware. Extensions gain richer lifecycle events: subagent
start/stop, tool execution phases, asynchronous approval and turn
processing.

## Why It Matters

The current Codex profile already carries
`goal-as-persistent-objective` as an active claim. The novelty here is
default-on across all surfaces — operators who had not enabled goal mode
explicitly will now see it — and the **remote computer use surface
after host lock**, which is new. A locked-Mac computer-use lane is the
shape that has historically been bounded by "the operator's machine is
unattended; explicit gating required." The launch ships it gated, but
the gates are policy choices, not absent capability.

Pair this with the CLI's inheritance + managed-requirements change and
the picture is clear: long-horizon goal-bearing operation has the
runtime substrate to operate without per-session approval — which is
exactly why the policy layer is being formalized.

## Operator Implication

Three concrete operator changes:

1. **Goal-mode-default operators** must decide whether to permit goal
   mode as a baseline or constrain it via permission profiles. The
   profile inheritance + managed `requirements.toml` is the
   right-shaped tool: a base profile + per-team derivations, not a
   flat per-user grant list.
2. **Remote-after-lock evaluators** should treat the locked-host
   computer-use surface as a new authority decision, not a default.
   Short-lived authorization plus relock-on-local-input is a sensible
   default, but the operator still needs to set the policy for which
   tasks are allowed to operate against a locked host at all.
3. **Plugin-marketplace evaluators** (ChatGPT Business; Enterprise
   "coming soon") should treat plugin distribution-by-marketplace as a
   new supply-chain surface. The 0.131.0 marketplace CLI and 0.133.0
   marketplace-aware plugin discovery line up with the product
   launch's sharing announcement.

## Open

- The locked-host remote computer use surface ships with documented
  safeguards but the changelog does not enumerate what tasks operators
  can prevent (e.g. can it be denied per-app, per-tool, per-domain?).
- Managed `requirements.toml` is described as org-level but the
  enforcement model (read at boot, watched at runtime, signed?) is not
  in the release notes.
- Goal default-on across surfaces aligns with Claude Code's `/goal`
  expansion and Hermes's `/subgoal` work — cross-provider thread worth
  tracking in the next digest as a category convergence.
