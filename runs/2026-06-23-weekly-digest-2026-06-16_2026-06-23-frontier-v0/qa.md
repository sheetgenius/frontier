# QA: 2026-06-16 .. 2026-06-23 weekly digest ("Protected on Paper")

## Verdict

**Receipt verification: PASS after remediation.** Five independent Opus
adversarial verifier agents (one dedicated to the lede) re-fetched the
load-bearing claims from live primary sources and were instructed to refute.
~35 load-bearing claims checked. Outcome: the thesis and all section claims
survive on verbatim primary-source receipts + git-ancestry channel proof; six
corrections were applied to the draft before publication, and one claim was
downgraded from asserted-fact to attributed-single-source.

## Corrections applied pre-publication

1. **Hermes "in-the-wild campaign" → attributed, not asserted.** The mitigation
   commits, dates, and main-unreleased channel are verified; the claim that
   exploitation is live in the wild is single-source (the project's own commit
   narrative, citing a Reddit thread + self-named instance). The digest now
   carries an explicit caveat subsection and attributes the claim to the
   maintainer. Verdict class: UNCONFIRMED-SINGLE-SOURCE — published with
   attribution, not cut.
2. **Hermes commit 027cb649e dropped** from the 0day cluster (it is a memory
   fail-closed fix, not a persistence mitigation).
3. **Hermes wall-clock framing tightened** — a heartbeat/inactivity backstop
   remains; what is gone is the wall-clock bound on a *busy* runaway worker.
4. **Flue private-by-default + `flue logs` removal → labeled staged.** Verbatim
   in the CHANGELOG, but only in the `## Unreleased` section; in no in-window
   tag. Reframed as direction, not shipped default (channel = main-unreleased).
5. **OpenHands #14849 merge SHA corrected** to `56034afe10` (harvest first wrote
   `9ab0ddb15`, which is #14852 pyjwt). Non-load-bearing; artifact patched.
6. **Claude Code precision** — the permission-enforcement claim is framed on
   `Agent(type)`/`Agent(x,y)` rules (per the 2.1.186 receipt), not the
   `Tool(param:value)` syntax; the trigger-classification fix is attributed to
   2.1.183, not 2.1.186. **Codex** token-budget abort framed as a hard cap that
   lands at the next usage-accounting boundary (no cross-thread interrupt).

## Recall

Nine of ten providers returned in-window movement. **Agent Zero** was silent on
its default branch (0 in-window commits; latest tag v1.20 pre-window) — declared
as a named silence in the Runtime section per the all-three-sections rule, with
the honest caveat that 23 commits landed on a non-default `ready` branch (none
merged, none tagged). Harvest reached every primary surface. Canonical repos
confirmed (OpenHands/OpenHands; earendil-works/pi; withastro/flue with CHANGELOG
as receipt since /releases is empty).

## Channel honesty (the decisive QA dimension this run)

The dominant editorial risk this window was channel confusion: a fix merged to a
default branch, a preview tag, or a later version is not a fix in the binary an
operator runs. Every channel call in the digest was resolved by **git ancestry**
(`compare <tag>...<commit>`), not date inference:

- **main-unreleased (merged, in no tag as of 2026-06-23):** OpenHands entire
  enterprise/security cluster + the six carry-forward items (proven `diverged`
  from 1.8.0 by exact behind-counts); Hermes June-21/22 MCP-persistence wave (all
  ahead of v2026.6.19); Paperclip #8347/#8339/#8276 (ahead of v2026.618.0); Flue
  private-by-default/`flue logs` removal (Unreleased section on main).
- **preview-or-beta only:** Gemini skill path-traversal fix (diverged from stable
  v0.47.0; in v0.48.0-preview.0); OpenClaw v2026.6.10 series (beta).
- **tagged-release, in-window:** Codex CLI 0.141.0/0.142.0 (0.143.0 alpha-only,
  excluded); Claude Code 2.1.179-2.1.186; Hermes v0.17.0 carry-forward landing;
  Paperclip v2026.618.0 carry-forward landing; OpenClaw WCAG pass in stable
  v2026.6.8 + auto plugin approvals in stable v2026.6.9; Pi v0.79.6-v0.79.10.

## Mandatory QA checks (per RESEARCH_CONTRACT)

1. **Signals rarer than findings.** 86 findings → 23 curated signals (~1 per
   3.7). Discipline honored; no signal-per-commit.
2. **Dates verified to the year, in-window.** Every cited claim confirmed
   YEAR=2026 and day in [06-16, 06-23] against API/changelog ISO timestamps, not
   rendered HTML (Agent Zero's known year-misrender avoided via API
   `published_at`).
3. **Every promoted signal's receipt adversarially verified.** Five refuter
   agents; the failures/overclaims listed above were corrected pre-publication.

## Single-source discipline

Exactly one claim in the digest is UNCONFIRMED-SINGLE-SOURCE (the Hermes
campaign). It is published with explicit attribution and a dedicated caveat
subsection, and the operator action is framed to be correct regardless of whether
the campaign is independently real. No other claim rests on a single
project-controlled narrative.

## Editorial

Written by the coordinator (final editorial authority) through the amendment-009
lens (for the author's cold-context self / a wide frontier-curious reader).
Operator-first; Bitter is not the protagonist (implications routed to the
backstage note). Inline citations sit on the claim-bearing phrase. All three
editorial sections (Control Plane / Runtime / Platform) covered; the Runtime
silence (Agent Zero) is named. See audit.md for doctrine observations.
