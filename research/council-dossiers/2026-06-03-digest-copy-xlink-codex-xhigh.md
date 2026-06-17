# Council Dossier: macro_08d0376a-12b5-4a80-8dd4-9fe3055de71d

## Context
- question_source: file
- question_file: /tmp/council-digest-review.md
- cwd: /Users/c3po/co/bitterfrontier
- model_policy: {"codex_model":null,"codex_config":["model_reasoning_effort=xhigh"],"synthesis_codex_model":null,"synthesis_codex_config":["model_reasoning_effort=xhigh"],"claude_model":null,"gemini_model":null,"reviewers":["codex"],"synthesizer":"codex","child_timeout_ms":900000,"name":"digest-copy-xlink-2026-06-03"}

## Question
# Bitter Frontier — Weekly digest copy + cross-linking review

## Context

Bitter Frontier (https://frontier.bitter.sh) publishes weekly cross-provider
digests of the agentic-coding-harness frontier. House rule:

> No frontier claim without an operator consequence.
> No operator consequence without a receipt.
> Every claim cites a primary source on the claim-bearing words.

The digest just published for the 2026-05-28..2026-06-03 window is at:

    content/digests/2026-05-28_2026-06-03-weekly.md

You are running in the repo root and may read any file. Supporting context:

    runs/2026-06-03-weekly-digest-2026-05-28_2026-06-03-frontier-v0/signals/frontier-signals.yml
    runs/2026-06-03-weekly-digest-2026-05-28_2026-06-03-frontier-v0/findings/   (per-finding receipts)
    content/digests/2026-05-13_2026-05-27-weekly.md   (prior digest, for house-voice comparison)
    RESEARCH_CONTRACT.md   (see Editorial Voice and Citation Doctrine sections)
    content/profiles/*.md   (per-provider profiles the digest should be consistent with)

## The ask — copy quality and cross-linking quality ONLY

You are reviewing PROSE and LINKS, not the underlying facts (those were
separately receipt-verified by an adversarial pass). Pressure-test with
concrete, line-level fixes. Sustain what is strong; do not invent problems.

1. **Copy quality.** Is the prose tight, operator-facing, skeptical, free of
   hype and padding? Does the cross-provider thesis earn its length? Flag awkward
   sentences, mixed metaphors, hedging, redundancy between the operator_brief and
   the body, and any house-voice violations (RESEARCH_CONTRACT "Editorial Voice").
   Is the title strong and accurate?

2. **Cross-linking quality.** Per the Citation Doctrine: does every claim-bearing
   phrase carry an inline receipt on the SHARP semantic tag (1-3 words), not a
   whole clause or a generic "Signal"/"changelog" anchor? Are any material claims
   uncited? Any anchor whose text overclaims relative to its receipt? Is the
   operator_brief link style consistent with the body? Are there internal
   cross-links the digest SHOULD carry (digest -> per-signal, digest -> profile,
   section pages) that are missing — and is that a real defect or acceptable for a
   file-first v0 with no generated signal pages yet?

3. **Structure.** Does the digest cover all three editorial sections (Control
   Plane, Runtime, Platform) and carry the required cross-provider synthesis
   thesis? Is the operator_brief (upgrade_check / try / watch / uncertain)
   well-formed and non-redundant with the body sections?

## Output

Return a PRIORITIZED list of concrete, line-level issues, each with: location
(quote the phrase or name the section), the problem, and a proposed fix. Rank by
whether a serious operator reader would actually be helped. Separately, name the
two or three things the digest does genuinely well so the next cycle keeps them.

## Research Outputs
- research_codex: ok -> child_runs/research_codex/output.jsonl

## Review Outputs
- review_codex: ok -> child_runs/review_codex/output.jsonl

## Synthesis
I’m using the `charterwright` skill because this is a doctrine-bound evidence-product review, and I’ll keep the pass read-only: prose, anchors, structure, and conceptual source fit only.I’m pulling the doctrine sections and line-numbered digest text now. I’ll use the run signal file as a style/link consistency check, not as a fresh adversarial fact audit.The digest has a strong central thesis and the body does include the required three axes, but the first pass already shows a citation-style split: front matter uses generic source labels while the body often uses sharper semantic anchors. I’m reading the remaining sections before ranking defects.I’m checking whether internal signal/profile pages actually exist in the file-backed publication surface. That determines whether missing digest-to-signal links are a real cross-linking defect or just a v0 limitation.One material implementation detail surfaced: the renderer appears to support dedicated `/signals/<id>/`, `/profiles/<slug>/`, and section pages. I’m checking how the Operator Brief is rendered because YAML link syntax may behave differently there than Markdown body links.The rendered page already adds “Top signals” and “Providers covered” link blocks from frontmatter, so missing profile/signal links in the body is not automatically a publication bug. The higher-value issue is that the Operator Brief is the scan surface, and its current link syntax/source targets do not match the signal-page architecture.Read-only synthesis: the digest is strong conceptually. I reject the weak critique that it lacks a cross-provider thesis; it has one, and the title is accurate enough to keep. The real defects are link rendering, semantic anchor precision, and formal section structure.

**Prioritized Issues**
1. [Operator brief lines 46-68](/Users/c3po/co/bitterfrontier/content/digests/2026-05-28_2026-06-03-weekly.md:46): Markdown links in frontmatter will not render as links because `OperatorBrief.astro` injects items with `set:html`. They also bypass `/signals/<id>/`, unlike the prior digest.
Problem: the scan surface likely shows literal `[changelog](...)` text and loses internal signal cross-linking.
Fix: convert to HTML signal links on sharp anchors, e.g. `closes <a href="/signals/2026-06-03-gemini-cli-v0-45-0-stable-release/">MCP blacklist bypass</a>`.

2. [Intro lines 86-91](/Users/c3po/co/bitterfrontier/content/digests/2026-05-28_2026-06-03-weekly.md:86): `OpenHands` links to an axios CVE commit while the surrounding claim is “same class of fix... restore enforcement.”
Problem: receipt overclaims; frontend dependency CVE does not support the enforcement-gap thesis.
Fix: either remove OpenHands from that provider list, or replace the receipt with the ACP credentials-to-secrets change and name that specific enforcement consequence.

3. [Section heading line 296](/Users/c3po/co/bitterfrontier/content/digests/2026-05-28_2026-06-03-weekly.md:296): `## Control Plane, Runtime, Platform` covers the three lanes, but does not follow the ratified fixed-section shape.
Problem: not a content gap, but a structure gap. The digest covers all three; it just compresses them into one heading.
Fix: split into `## Control Plane`, `## Runtime`, and `## Platform`, preserving the existing paragraphs.

4. [Heading line 105](/Users/c3po/co/bitterfrontier/content/digests/2026-05-28_2026-06-03-weekly.md:105): “Breaking Changes” is too broad.
Problem: many items are advisory-grade security/hardening checks, not breaking changes.
Fix: rename to `## Security and Upgrade Checks` or add a distinct `## Security Advisories` section before the broader upgrade checks.

5. [Body anchors around lines 261-289](/Users/c3po/co/bitterfrontier/content/digests/2026-05-28_2026-06-03-weekly.md:261): several links sit on provider names rather than claim-bearing tags.
Problem: violates the sharp-anchor doctrine.
Fix examples: link `skills CLI`, `Skill Workshop`, `activate_skill`, and `plugin-state API`, not `Paperclip`, `OpenClaw`, `Flue`, and `Agent Zero`.

6. [Line 425](/Users/c3po/co/bitterfrontier/content/digests/2026-05-28_2026-06-03-weekly.md:425): `three-CVE remediation cluster` links only one OpenHands commit.
Problem: anchor overclaims relative to receipt.
Fix: link each CVE separately, or link to the internal OpenHands frontend CVE signal.

7. [Line 256](/Users/c3po/co/bitterfrontier/content/digests/2026-05-28_2026-06-03-weekly.md:256): “Running against the gap-close current is a constructive one” is awkward.
Fix: “The countertrend is constructive: four providers made agent capability reviewable operating state.”

**Keep**
- The title is strong. It captures the dominant operator consequence without hype.
- The digest preserves two real patterns instead of averaging them: enforcement gaps closing, and skills/plugins becoming governed state.
- The uncertainty section is especially good: it names unknowns that change operator behavior, not vague caveats.

## Smallest Implementation Target
Patch only the `operator_brief` block in `content/digests/2026-05-28_2026-06-03-weekly.md`: replace every Markdown external receipt link with a rendered HTML `/signals/<id>/` link on a sharp 1-3 word claim anchor, leaving body prose untouched.

## Use
- Treat this dossier as research input, not authority by itself.
- Source-check accepted and rejected claims before launching a worker.
