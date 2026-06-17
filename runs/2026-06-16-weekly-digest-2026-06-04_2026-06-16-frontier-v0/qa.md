# QA: 2026-06-16 weekly digest (window 2026-06-04 .. 2026-06-16)

## Verdict

**Receipt verification: PASS after remediation.** Four independent adversarial
verifier agents re-fetched ~38 load-bearing claims from live primary sources and
were instructed to refute. Result: ~36 supported_in_window with exact verbatim
matches; **2 overstated** (both Gemini CLI), both corrected in the draft before
publication. No claim was refuted as unsupported or out-of-window.

## Recall

All ten providers returned in-window movement (`tool_access_ok=true`,
`nothing_in_window=false` for each). No section had to be declared silent.
Harvest reached every primary surface; one provider's repo (OpenHands) was
confirmed canonical (`OpenHands/OpenHands`, not `All-Hands-AI/OpenHands`).

## Adversarial verification result

The verify stage did real work. Two overstatements caught and fixed:

1. **Gemini Antigravity migration commands / built-in skill (commit 452356027)
   was framed as shipping.** Ancestry check: it is in `v0.47.0-preview.0` only,
   NOT in any stable release as of 2026-06-16. *Fix:* the digest now states the
   transition *banner* is in stable (v0.45.2, uncapped) while the migration
   commands and Antigravity skill are preview-only. The succession read is
   unchanged and arguably sharper.

2. **Gemini Flash GA was framed as an unconditional silent switch.** It is
   gated behind an experiment flag plus auth-type access logic, and stable
   v0.46.0 ships a placeholder flag ID (the real-flag-ID commit is not in
   v0.46.0). *Fix:* the digest now scopes it to "behind an experiment flag and
   auth-type access logic, so the same binary can route different users to
   different models."

Channel status was resolved by **git ancestry** (`compare base...head`), not by
date inference. This proved the load-bearing distinction the run depends on:

- **Main-unreleased (merged to default branch, NOT in a tagged release):**
  Hermes security wave (cp/.ssh gate da28d5d11, status-leak 3380563d9, fail-open
  adapters fc4635458; async subagents c66ecf0bc) — all descendants of the
  v0.16.0 tag; Paperclip per-company JWT (#5864), cloud_tenant deprivileging
  (#7525), approval atomicity (#5839) — all ahead of v2026.609.0; OpenHands
  default-org (#14752), BYOK (#14773), concurrency (#14168), PluginSpec redact
  (#14795), postcss CVE (#14770) — all ahead of 1.8.0; Gemini skill
  path-traversal (#27767) — ahead of every tag (stable, preview, nightly).
- **Tagged release, in-window:** Paperclip low-trust review (#7530) + Company
  Artifacts in v2026.609.0; OpenHands react-router CVE (#14684) in 1.8.0 (shipped
  uncredited; release notes say only "Many UI bug fixes"); Codex app/iOS/CLI
  releases; Claude Code 2.1.163-2.1.178; Pi v0.78.1-v0.79.5; OpenClaw stable
  v2026.6.6 and v2026.6.8.
- **Beta/preview only:** OpenClaw WCAG pass (#89822) in v2026.6.7-beta.1;
  Gemini Antigravity migration in v0.47.0-preview.0.

Date traps cleared: Agent Zero v1.20 confirmed published 2026-06-04 (the release
HTML renders "2024"; the API date is authoritative). Hermes v0.16.0 body
self-dates "June 5" but `published_at` is 2026-06-06T00:55Z (both in-window).
Flue 0.10.2 is CHANGELOG-documented but has no git tag (changelog-only); Flue
ships no GitHub Releases, so CHANGELOG.md is the canonical receipt throughout.

## Mandatory QA checks (per RESEARCH_CONTRACT)

1. **Signals rarer than findings.** 112 findings -> 33 curated signals (~1 signal
   per 3.4 findings). Honors the discipline; the harvest deliberately did not
   promote a signal per commit.
2. **Dates verified to the year, in-window.** Every cited claim confirmed
   YEAR=2026 and day in [06-04, 06-16] by the verifiers, against API/changelog
   ISO timestamps rather than rendered HTML.
3. **Every promoted signal's receipt adversarially verified.** Done by four
   independent refuter agents; the two failures were corrected pre-publication.

## Cross-provider synthesis (amendment 009)

Named and earned: "authority, not capability" — nine of ten providers shipped
work that decides and structurally enforces who may do what, as agents gained
depth (recursion, multi-tenancy, untrusted-input review, computer use), and
repeatedly closed the gap between a documented control and the enforced one. The
secondary thesis (a market reshuffle: Gemini->Antigravity succession, Codex
import-from-Claude, Paperclip positioning pivot, Fable 5 cross-harness adoption)
is also cross-provider and source-backed.

## Channel honesty (new QA dimension this run)

The largest editorial risk this window was channel confusion: a security fix
merged to a default branch is not a fix in the binary an operator runs. The
digest flags every unreleased fix explicitly (advisories section and the closing
uncertain bullet), because telling an operator they are protected when they are
not violates the house rule as badly as a missing receipt.

## Editorial

Reviewed by Codex (xhigh) and an independent editorial pass; humanizer applied.
Operator-first, no Bitter-as-protagonist. See audit.md for doctrine notes.
