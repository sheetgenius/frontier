# Exemplar-pass ledger -- full-archive sweep, 2026-07-02

Cold-context read of the entire public surface (9 digests, 13 profiles,
rendered frontmatter surfaces, index pages) against the bar in
`.claude/skills/exemplar-pass/SKILL.md`. Ranked worst-first. Each iteration
takes the top open item, rewrites it to the bar, and marks it here.

## Current exemplars (the bar, in specimens)

- "Patched for Whom" (2026-06-24_2026-07-01): lede-as-case, channel-split
  thesis, scoped uncertainty, corrections-move-forward.
- "Protected on Paper" (2026-06-16_2026-06-23): advisory framing ("what your
  build does not contain"), the enforcement-gap section.
- "Governance, Sold Separately" (2026-06-23_2026-06-24): the heypi close read;
  separating a landing page from a docs site.
- Antigravity profile: tagline ("Google retired the coding CLI you could read,
  and shipped one you have to trust"), stance block.

## Ranked defects

### 1. digests/2026-04-22_2026-05-06-frontier-rollup.md -- REWRITTEN 2026-07-02 (v3)

The worst artifact on the surface, and the first thing a reader who scrolls to
the bottom of the archive meets.

- Register: newsletter cadence throughout ("That is useful, but it also raises
  the stakes."); title is a category label, not an argument.
- Internal paths public: every signal ends in a "Supported by:" block of
  relative links into `../../runs/.../findings/*.md` -- pipeline anatomy on the
  reader surface, in place of receipts on claim-bearing words.
- No operator brief; generic advice ("Record which goals, recaps, memories,
  plugins, skills, permission modes, release channels, and transports were
  active") in place of decisions.
- Headers: "The Signals," "What Serious Developers Should Do" -- catalog form.

Pass notes: retitled to an argument ("What Shaped the Run"); lede rebuilt on
the Codex `/goal` case; receipts moved inline from the run's findings (pinned
release/changelog/line links); six signals preserved and linked; compact
operator brief added (3-sentence thesis); revision note appended; claims,
window judgments, and signal set unchanged.

### 2. digests/2026-04-23_2026-05-07-frontier-rollup-expanded.md -- REWRITTEN 2026-07-02 (v4)

- Template refrain: every section ends "Builder question:" + one italic line --
  an unfilled prompt scaffold visible to the reader.
- "## The Week In One Sentence" header; numbered signal headers ("### 1.
  Persistent Agent State Is Becoming A Product Surface").
- Catalog sentences ("gateways, systemd, voice, themes, model providers,
  skills, search, kanban, and memory scoping").
- Receipts are commit links (good) but the prose around them is inventory, not
  argument.

### 3. operator_brief theses -- CLOSED 2026-07-02

The first rendered block on the page, and the densest internal register on the
surface. The 2026-06-16_2026-06-23 thesis is ~250 words of double-dash-spliced
analyst compression ("Channel: a striking share... Enforcement: Claude Code
disclosed..."). The body of the same digest says all of it, better. Bar: <= 3
sentences. (The 2026-05-13 and 2026-05-28 theses are borderline; re-check
after the worst two are cut.)

### 4. not_promoted reasons, all recent digests -- CLOSED 2026-07-02

Editor-room language rendered to readers: "Carry-forward resolved: the
ready-branch backlog tagged as v2.0/v2.1..."; "Recorded as channel motion, not
a shipped change"; "Carried on the profile, not promoted." The transparency is
right; the vocabulary assumes the reader has read RESEARCH_CONTRACT.md.
Rewrite reasons in reader words ("real, but changes no decision this week --
the profile carries it"), or teach the terms once on the About page.

### 5. Provider Notes comma-lists -- PARTIALLY CLOSED 2026-07-02 (accepted debt on the rest)

Ten-link comma-lists of shipped features with no judgment attached ("shipped
goal-mode graduation, remote computer use after Mac lock, Appshots, plugin
marketplace sharing, profile inheritance, managed requirements.toml, codex
doctor diagnostics..."). Release-note paraphrase -- the thing the charter says
this publication is not. Bar: judgment or one line.

### 6. Fourfold redundancy -- ENCODED PROSPECTIVELY 2026-07-02 (accepted debt in archive)

The same fact routinely appears in operator_brief, an advisory section, a
provider note, and What To Try (e.g. the Paperclip multi-tenant fix, 4 places
in one issue). One home per fact; the rest link. Cheapest fix is prospective
(next cycle's digest); retro-trim only when a digest is already open for
another defect.

### 7. House tics across issues -- PARTIALLY CLOSED 2026-07-02 + encoded prospectively

- "Same X, N/three/four different Y" -- at least three issues.
- "Naming the channel every week is now half the job / part of the job / is
  the work" -- closes three consecutive issues.
- Dash-splice density: paragraphs with 4-5 " -- " splices in the June issues.
- Stray mid-sentence bold ("**heypi** had no material in-window change").

### 8. Profile prose clunkers -- CLOSED 2026-07-02 (worst instance); register decision deferred

- claude-code.md: "The bound only fully bound here; do not infer it from the
  2.1.178 announcement." (Garbled.)
- Profile bodies drift between field-correspondent and operator-manual
  register; decide per-section which is intended (reference sections may stay
  manual; ledes and stances hold the voice).

## Saturation tracker

- Sweep 1 (2026-07-02): 8 defect classes open. Iterations 1-6 (same day):
  - Item 1 rewritten (v3, "What Shaped the Run"): D -> exemplar.
  - Item 2 rewritten (v4): D+ -> A-range (kept its title; lede now the Agent
    Zero visible-computer case; refrains gone; method note added).
  - Item 3: all five oversized theses compressed to <= 3 sentences
    (05-28, 06-04/16, 06-16/23, 06-23/24, 07-01), version bumps + notes.
  - Item 4: reasons rewritten reader-facing across four digests; NotPromoted
    chrome retitled "Noted, not headlined" (fixes every page at once).
  - Item 5: two worst blocks (05-27 Codex, OpenClaw) rewritten judgment-first
    as specimens; rule encoded in frontier-cycle step 6. Remaining archive
    comma-lists accepted as debt (informative, linked, just unlovely --
    B-range; retro-rewriting ~18 blocks is past the ROI line).
  - Item 6: one-home-per-fact encoded in frontier-cycle step 6 for future
    issues. Archive redundancy accepted as debt (unwinding it risks claim
    drift for little reader gain).
  - Item 7: the intra-issue "naming the channel" repeat in 07-01 varied, the
    06-23/24 closer varied; template-refrain grep encoded in frontier-cycle.
    One instance per issue tolerated.
  - Item 8: claude-code "bound only fully bound" garble fixed. The
    manual-register of profile reference sections is a deliberate choice,
    recorded as in-bar.
  - Also: site fix for evidence-kind label overlap (SourceTrail); exemplar
    bar cross-referenced from frontier-cycle so new cycles cannot regress.

Post-pass grades (digests, cold read): 04-22 rollup A; 04-23 expanded A-;
05-12 A-; 05-27 B+/A-; 06-03 B+ (density is the ceiling); 06-16 A-; 06-23 A;
06-24 A; 07-01 A. Profiles: antigravity A, claude-code B+ (reference
register, intended). No public artifact below B+ to this reader's eye.

Next sweep should be run by a cold-context session (this one wrote the
rewrites and cannot grade them impartially). Saturation requires two
consecutive clean sweeps; this is sweep 1.
