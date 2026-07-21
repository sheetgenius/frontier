---
name: exemplar-pass
description: >-
  Worst-first editorial improvement loop over Bitter Frontier's public surface.
  Sweep everything a reader can reach, rank it worst-first against the exemplar
  bar, rewrite the single worst artifact until it could serve as the prototype
  of the house standard, and repeat until saturation. Use when asked to "raise
  the editorial bar," "fix the worst parts," "run an exemplar pass," or bring
  archive material up to the current standard. Run from the canonical repo
  (sheetgenius/frontier).
---

# Exemplar pass

One iteration = take the worst artifact on the public surface and rewrite it
until it is one of the best. The archive converges on excellence from the
bottom, and each rewrite sharpens the definition of the top. This is an
editorial-quality loop, not a research cycle: it changes voice, structure,
selection, and packaging. It never changes what was claimed or when.

Before beginning a sweep, read these authorities in order:

1. `THESIS.md` for the publication's two standing questions and its safeguard
   against a predetermined corporate verdict.
2. `METHOD.md` for the evidence contract, object grammar, and synthesis
   standard.
3. `EDITORIAL.md` for the canonical public writing bar.

This skill operationalizes those documents. It does not replace them. If its
checklist conflicts with an authority, the authority wins and this skill should
be corrected in the same change.

## The prime constraint: window truth

A rewritten artifact must stay true to its original window.

- No new facts. Every claim in the rewrite must be supported by the artifact's
  existing receipts (or upgraded to a *more* precise pin of the same evidence).
- No hindsight. Nothing the publication learned after the window closes may
  leak into the rewrite -- not outcomes, not later reversals, not "as we now
  know." If a later digest corrected this artifact, the correction normally
  stays in the later digest; the record moves forward.
- A known factual error is the exception. Window truth is not permission to
  preserve a false claim. Correct the error transparently, attach a primary
  receipt, and label the change as a correction rather than an editorial-only
  pass. Use later evidence only to establish the correction, not to retrofit
  the rest of the argument with hindsight.
- Bump `artifact_version` and append a dated revision note. For an editorial
  pass, state that claims and receipts are unchanged. For a factual correction,
  name the corrected claim and its receipt. Readers get to know what moved.

## The bar

What excellence looks like, extracted from the best published work ("Patched
for Whom," "Protected on Paper," the heypi lede, the Antigravity profile).
Every rewrite must pass all of these; a sweep flags any public artifact that
fails one.

1. **The title is an argument.** "Patched for Whom," not "Coding Agents Are
   Becoming Working Environments." A reader should be able to disagree with it.
2. **The lede is a case.** Open with one concrete, receipted event and the
   reversal or cost inside it. Never open with a category, a definition, or
   "this week saw."
3. **Receipts ride the claim-bearing words.** Inline links on the exact words
   they prove. No "Supported by:" blocks, no visible internal paths
   (`runs/...`, `../../`), no bare-URL dumps.
4. **One home per fact.** A fact lives in exactly one section; other mentions
   link to it. If the operator brief, an advisory, a provider note, and a
   try-list all restate the same fix, three of them are cut.
5. **The operator brief is a standfirst, not an abstract.** Thesis <= 3
   sentences. Each list entry one decision, one link.
6. **Provider notes carry judgment or die.** A provider gets prose only when
   the digest has something to say about it; otherwise one line ("no material
   change; last tag holds at X"). A comma-list of shipped features is a
   changelog wearing a trench coat -- cut it or argue it.
7. **Reader vocabulary.** No pipeline-speak on the public surface: "harvest,"
   "promoted," "carry-forward," "finding_id," "calibration source" either get
   said in plain words or stay in run artifacts. ("Window," "watchlist,"
   "tagged/stable/main" are earned house terms and stay.)
8. **No template refrains.** A formula that has appeared in two prior issues
   ("Same X, N different Y"; "naming the channel is the job") is retired.
   Dash-splices bounded: if a paragraph has three, rewrite one as a sentence.
9. **Uncertainty is scoped, not hedged.** Say exactly what is unverified, whose
   claim it is, and what would settle it.
10. **Severity without sneer.** Skeptical, cutting where the evidence cuts;
    never breathless, never contemptuous.
11. **The lens sharpens the case.** Ask what improving general agents just made
    cheaper or less defensible, which part of the end-to-end system moved, and
    where scarce human attention went next. Define `Bitter Lesson Maxing` and
    `Amdahl Maxing` on first use, but do not force either term into a piece where
    it adds no explanatory value. Evidence that cuts against the thesis stays
    in the story.
12. **Comparison is earned.** Name another provider or project only when its
    precedent or divergence changes the operator's interpretation. Similar
    feature names alone do not establish similar defaults, authority,
    enforcement, release status, or attention cost.
13. **The prose has a pulse.** Use color, wit, analogy, and colloquial language
    when they sharpen a receipted mechanism or consequence. Do not turn a piece
    into institutional paste, and do not force a memorable line that the
    reporting has not earned.

## Steps

### 1. Sweep (cold read)
Read the public surface the way a stranger meets it: rendered site order --
index, latest digest top to bottom (operator brief first, `not_promoted`
last), profiles, archive. Score every artifact against the bar. Write the
ranked worst-first ledger to `runs/<date>-exemplar-pass-<scope>-frontier-v0/ledger.md`,
quoting each defect (the exact sentence, the exact block). Name the current
exemplars too -- the bar is defined by real specimens, not taste in the
abstract.

### 2. Pick the worst
One artifact per iteration. If the worst offender is a *surface* rather than a
document (a frontmatter block every digest renders, a template), the iteration
targets that surface across its instances -- still one defect class at a time.

### 3. Rewrite to the bar
Gather the artifact's receipts (its run's findings carry the pins). Rewrite
under the prime constraint. The rewrite should be the piece you would hold up
as the prototype -- if it is merely "better," keep working.

### 4. Verify
- **Claim fidelity**: diff the rewrite against the prior version claim by
  claim. Every fact is traceable to an existing receipt; nothing post-window
  enters except the narrow evidence required for an explicit correction.
  Adversarially check dates and versions against the pins.
- **Correction check**: if a known factual error was found, confirm that the
  correction is explicit, receipted, narrowly scoped, and not mislabeled as a
  claims-unchanged revision.
- **Lens fidelity**: the thesis chooses the questions, not the answer. Confirm
  that the rewrite preserves contrary evidence and does not turn Bitter into
  the conclusion inside the reporting.
- **Comparison check**: every cross-provider reference changes the analysis or
  next decision. Cut decorative parallels.
- **Bar check**: all thirteen points above, explicitly.
- `node site/scripts/check-integrity.mjs` and `npm --prefix site run build`
  must both pass.

### 5. Record and re-rank
Update the ledger: mark the item raised to the bar and note what the pass
taught. If the rewrite revealed a sharper formulation of the bar, amend the bar
section of this skill in the same commit -- the standard compounds or it
decays.

### 6. Repeat until saturated
Next iteration takes the new worst item. **Saturation**: two consecutive
sweeps produce zero artifacts below the bar and zero bar amendments. Then the
loop stops and the bar becomes maintenance (each new cycle's QA).

## Publishing

Commit each iteration as a stand-alone unit ("exemplar-pass: <artifact> to the
bar (vN)"). Push publishes. Hold the first rewrite of any artifact class for
operator review before pushing; once the operator has ratified one specimen of
the class, subsequent iterations in that class publish on the normal
commit-and-push flow.
