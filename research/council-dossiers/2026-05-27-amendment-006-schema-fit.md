# Council Review: Amendment 006 — `composes: [...]` on Findings and Signals

- Reviewer angle: schema fit and integrity-check semantics.
- Reviewer posture: independent council, skeptical, source-grounded.
- Amendment under review: `charter/proposed/amendment-006-composition-findings.md`.
- Repo state: clean main, 2026-05-27.

---

## 1. Does the proposed integrity-check rule scale?

**Verdict: yes, mechanically. The addition is genuinely minimally invasive.**

The integrity checker in `site/scripts/check-integrity.mjs` is already
structured exactly for the kind of validation the amendment proposes:

- It walks runs at `collectFindings()` (lines 47-72) and signals at
  `collectSignalsForFindingRefCheck()` (lines 104-127), reading
  frontmatter via `gray-matter` and YAML respectively.
- It already supports the "every X-id must resolve in registry Y"
  shape — see the `findings.byFindingId.has(fid)` checks at lines 150,
  166, 185, 272.
- It already supports the "field X cannot contain Y" shape — see the
  `claim.finding_id == null` early-continue at line 149 plus the
  posture/claim arity checks.

What is missing today is a **source registry collector**. The script does
not currently read `sources/index.yml`. So the change set is:

1. Add a `collectSourceIds()` helper that reads
   `sources/index.yml` and returns `new Set(yaml.sources.map(s => s.id))`.
2. Add a `composes` walk inside `collectFindings()` so each finding
   record carries a `composes` array (default `[]`).
3. Add a `composes` walk inside `collectSignalsForFindingRefCheck()` so
   each signal record carries one too.
4. Add a validation block after the existing finding/signal walks.

Sketch of the new validation block, modelled on the existing
`signal-missing-finding` block (`check-integrity.mjs:183-196`):

```js
// --- N. Validate composes: [...] arrays ---
const sourceIds = collectSourceIds(); // reads sources/index.yml

for (const record of findings.byRunAndSlug.values()) {
  const fm = readMarkdownFrontmatter(record.file).data;
  const composes = Array.isArray(fm.composes) ? fm.composes : [];
  for (const sid of composes) {
    if (!sourceIds.has(sid)) {
      pushIssue({
        kind: "finding-composes-unknown-source",
        file: record.file,
        context: `finding ${record.slug}`,
        field: "composes[]",
        ref: sid,
        expected: "an id present in sources/index.yml",
        fix: "fix the source id, remove the entry, or add the source to sources/index.yml",
      });
    }
    if (sid === fm.source) {
      pushIssue({
        kind: "finding-composes-self-reference",
        file: record.file,
        context: `finding ${record.slug}`,
        field: "composes[]",
        ref: sid,
        expected: "any source id other than the finding's own source",
        fix: "remove the self-reference; composition is between distinct sources",
      });
    }
  }
}

// signals: same shape, iterating `signals` array, comparing against signal.source
```

This is one new collector + ~20 lines of validation. **No structural
change to how the checker walks records is required.** The existing
two-phase pattern (collect, then validate against collections) absorbs
the new rule cleanly.

There is one mild structural concern: the current `collectFindings()`
returns only `{ runId, slug, file, finding_id }` — it does not return
the full frontmatter. Adding the `composes` check forces either a
re-read of each finding file (cheap; already done in many other places)
or a small refactor to retain the full frontmatter in the record. Both
are fine; prefer the re-read for now to keep the diff small.

The hidden complexity that *does* exist is **not in the integrity
checker but in the closed-world assumption itself**. See section 6.

---

## 2. The `not_promoted` block in digests

**Verdict: the amendment has a gap here. It does not specify behavior
for not-promoted compositions, and the rendering plan does not address
it either.**

Looking at `content/digests/2026-05-12-weekly.md` lines 50-66, a
`not_promoted` entry has shape:

```yaml
not_promoted:
  - source: codex
    finding_id: 2026-05-12-codex-pretooluse-input-rewrite
    link: /signals/.../
    reason: "PreToolUse hooks can now rewrite tool inputs..."
```

The integrity checker validates only `not_promoted[].finding_id` against
the finding index (`check-integrity.mjs:271-283`). It does **not** lift
`composes:` from the referenced finding into the not-promoted entry.

The amendment proposes (lines 116-123):

- Signal cards display a "composes with: ..." line.
- The signal page renders a Composition sub-section.
- `/signals/` index filter chips include a composition facet.
- Provider profile pages render an "Inbound composition" section
  listing signals where the profile's source appears in another
  signal's `composes:` array.

Reading `site/src/components/NotPromoted.astro` end-to-end: it renders
only `source`, `finding_id`, `link`, `reason`. It does not pull the
referenced finding's full frontmatter. So a not-promoted finding that
carries `composes:` would render nothing about its composition in the
digest.

This is a real gap, but it is not fatal. Two reasonable resolutions:

- **Option A (recommended):** the amendment should explicitly say
  `composes:` rendering is signal-card / signal-page / signals-index /
  profile-page only. `not_promoted` blocks render as today. The
  composition information is still reachable by clicking through to
  the signal page. Document this and move on.
- **Option B:** extend `NotPromoted.astro` to lift `composes:` from
  the referenced finding/signal and render a small chip. This is
  optional implementation work, not amendment work.

The amendment should pick option A explicitly and name option B as
future work. As written, it does neither.

The "Inbound composition" section on profile pages also has an edge:
should it include signals that are *not promoted* in any digest? The
amendment says "signals where the profile's source appears in another
signal's `composes:` array." That phrasing is signal-scoped, not
digest-scoped, so the answer is "yes, all such signals." That is
probably the right behavior — but the amendment should say so.

---

## 3. Schema redundancy: composes on findings AND signals?

**Verdict: the amendment over-specifies here. Composes belongs on
findings, with signals inheriting it implicitly through `finding_ids`.**

A signal carries `finding_ids: [...]` (see
`runs/.../signals/frontier-signals.yml:11` and the schema at
`RESEARCH_CONTRACT.md:103`). The finding it cites carries `source:`
and (per the amendment) optionally `composes:`. The signal's
`sources:` array in the Astro layer is derived from
`Array.isArray(signal.sources) ? signal.sources : signal.source ? [signal.source] : []`
(`site/src/lib/frontier.ts:279-283`).

So the natural pattern is: a signal *inherits* `composes:` from its
referenced findings, in the same way it inherits source identity.
Putting `composes:` directly on signals adds three failure modes:

1. **Drift.** Finding says `composes: [claude-code]`, signal says
   `composes: [claude-code, codex]`. Which is canonical? The integrity
   checker has no rule for this. Adding one is non-trivial: it requires
   walking `signal.finding_ids -> findings -> compose` and reconciling.
2. **Signal-level composition that has no finding receipt.** Operator
   queries the composition chip, clicks through, the finding doesn't
   carry the composition claim. This violates the house rule "no
   operator consequence without a receipt."
3. **Multi-finding signals.** If a signal cites two findings with
   different `composes:` arrays, what is the signal's compose set —
   union, intersection, or independently declared? Without a rule,
   each agent will guess.

Recommended fix to the amendment:

- `composes:` is a **finding-level** field.
- A signal's effective compose set is the union of `composes:` arrays
  from findings in `signal.finding_ids`, deduplicated. This is a derived
  property, computed in `site/src/lib/frontier.ts`, not a stored one.
- Integrity checker validates `composes:` on findings only.
- Rendering helpers compute the signal-level union at read time.

This drops one validation rule, prevents drift, and keeps the
receipt-anchored discipline. The cost is one helper function in
`frontier.ts` (~5 lines).

The amendment's current "on both" stance reads like belt-and-braces.
The repo has been consistent about derived-vs-stored elsewhere (e.g.,
profiles do not store inbound digest references; they compute them via
`digestsForSource()` in `frontier.ts:367`). Composition should follow
the same discipline.

---

## 4. Rendering scope

**Verdict: rendering scope is reasonably bounded for the signal page
and `/signals/` index. The profile-page "Inbound composition" needs
more thought.**

What the amendment proposes:

- Composes chip on signal cards (touches
  `site/src/components/SignalList.astro`).
- Composition sub-section on signal pages (touches
  `site/src/pages/signals/[id].astro`).
- Filter-by-composition facet on `/signals/` (touches
  `site/src/pages/signals/index.astro` and likely a new
  `site/src/pages/signals/composition/[slug].astro` mirroring
  `signals/source/[slug].astro`).
- Inbound composition on profile pages (touches
  `site/src/pages/profiles/[slug].astro`).

For signal cards and signal pages, the changes are tiny additions to
existing render blocks. The signal page (`signals/[id].astro:105-122`)
already has a Receipts section right where a Composition sub-section
would slot in.

For the `/signals/` index filter, the existing pattern at
`signals/index.astro:21-34` (filter-by-source chips) is the template.
A `listSignalComposesSlugs()` helper in `frontier.ts` mirrors
`listSignalSourceSlugs()`. Straightforward.

The profile-page "Inbound composition" section is the part that needs
care:

- Profiles are evergreen and per-provider
  (`RESEARCH_CONTRACT.md:201-211`).
- The profile page (`profiles/[slug].astro`) today does not show
  individual signals — it shows claims, posture, prose, and a "Featured
  in" digests list.
- "Inbound composition" would be the first place a profile renders
  individual signals it does not claim ownership of.

Two consequences:

1. **Profile clutter risk.** As composition findings accumulate, a
   Claude Code profile might end up with 20 "inbound" signals from
   OpenHands, Paperclip, Hermes, OpenHands-again, etc. The amendment
   does not bound this. Suggest: render at most the most recent N
   (e.g., 6) and link to a fuller `/profiles/<id>/inbound/` page if
   demand grows.
2. **Conceptual ownership.** A reader on the Claude Code profile sees
   a signal whose `source: openhands` and ends up confused about why
   it is on the Claude Code page. The "Inbound composition" header has
   to do real explanatory work. Recommend the amendment specify the
   prose framing, not just the section title.

The work is scoped reasonably (3-4 small files, one new dynamic
route), but the profile-page treatment needs the bound and the prose.

---

## 5. Retroactive applications and granularity

**Verdict: the OpenHands retro is correct. The Paperclip retro is
wrong granularity — the amendment knows this but ratifies anyway.**

The OpenHands finding
(`runs/.../findings/openhands-acp-ui-and-org-llm-profiles.md`) is
substantially *about* composition. The whole ACP UI feature is a
deliberate cross-product composition surface. `composes: [claude-code,
codex, gemini-cli]` fits the entire finding.

The Paperclip finding
(`runs/.../findings/paperclip-scoped-permissions-and-routine-env-secrets.md`)
contains five distinct vectors:

1. Scoped agent permissions and protected assignments (PR #6386).
2. Routine env secrets with precedence (PR #6212).
3. Board-managed document locks (PR #6009).
4. Modal as first-party sandbox plugin (PR #6245).
5. ACPX-Claude adapter respects `~/.claude/settings.json` (PR #6590).

Only vector 5 is the composition claim. Putting `composes:
[claude-code]` at the finding level says "this finding composes with
Claude Code." But four of the five vectors don't. A reader filtering
by "composition with Claude Code" will land on a finding that is 80%
about other things.

The amendment acknowledges this exact problem in its retroactive-
work block (lines 152-154): *"the field is finding-level, not
per-vector, so the composition applies to the finding as a whole."*

This is the amendment ratifying its own bug. Two ways out:

- **Path A (cleaner):** decompose multi-vector findings before adding
  `composes:`. The Paperclip finding should arguably already be split.
  This is independent of amendment 006.
- **Path B (resigned):** acknowledge that `composes:` is a noisy
  claim on multi-vector findings and that filtering will sometimes
  drop readers into prose that is mostly about other things. Set the
  expectation explicitly.

The amendment should pick one. As written, the Paperclip example is a
worked example of the field being applied imprecisely, which is
exactly the failure mode named in the amendment's own rejection
criteria (lines 175-178: "If the field is being filled out as
bureaucracy rather than as a deliberate claim, the rule is wrong").

A stronger retroactive list would:

- Apply `composes: [claude-code, codex, gemini-cli]` to the OpenHands
  finding. Solid.
- Defer the Paperclip retroactive application until either the
  finding is decomposed or the amendment commits explicitly to
  whole-finding granularity with the noise cost named.
- Omit Hermes, as the amendment already proposes (lines 156-164).
  Correct call.

---

## 6. Pressure to add other structured relationship fields

**Verdict: this is the strongest pressure-test question against the
amendment. The door this opens is real.**

If `composes:` is justified, the same justification opens these:

- **`succeeded_by` / `supersedes`** — finding X documents a behavior
  that finding Y (later) updates or replaces. Today this is handled
  in profile claim `last_verified` dates and prose. A structured field
  would let a reader see "the claim in finding X is no longer current;
  see finding Y."
- **`depends_on`** — finding X only makes sense in the context of
  finding Y. Example: a hook-related finding presumes the reader knows
  the hook system from an earlier finding.
- **`deprecates`** — finding X marks an earlier surface as
  deprecated. Different from supersedes: the older claim is still
  documented but is no longer recommended.
- **`contradicts`** — rare, but real: two providers ship contradictory
  defaults. A `contradicts: [<other_finding_id>]` would surface the
  cross-provider tension.

Each of these has the same shape: an optional array, validated
against an existing registry (finding-ids in this case), rendered as a
new chip/section.

The pressure is real, but I do **not** think this is an argument
against amendment 006. It is an argument for the amendment to:

- **Name the pattern.** "Structured relational fields on findings"
  is now a category. `composes:` is the first; future fields will
  follow this template.
- **Set a barrier.** A new relational field needs the same package
  amendment 006 provides: closed-world registry, integrity check,
  rendering plan, retroactive application sample, rejection criteria.
- **Avoid pre-emptive scope.** Do not include `supersedes` or
  `depends_on` in this amendment. Each is its own amendment with its
  own evidence.

The amendment as written does not name the pattern. It treats
`composes:` as a one-off addition. Naming the pattern explicitly in
the amendment body costs nothing and prevents the next agent from
either (a) adding new relational fields without the same rigor, or
(b) feeling that adding any relational field requires re-litigating
the whole question.

Suggested addition to the amendment's "Out of scope" section:

> This amendment establishes `composes:` as the first **structured
> relational field** on findings. Future relational fields
> (`supersedes`, `depends_on`, `deprecates`, etc.) are out of scope
> here. Each must be proposed as its own amendment, with the same
> integrity-check / rendering / retroactive-application package.

---

## Closed-world assumption: the underlying tension

One concern threads through several of the questions above and deserves
naming separately: the closed-world assumption (every `composes:` id
must resolve in `sources/index.yml`) is a real constraint that the
amendment's own retro section already trips over (Hermes proxy →
Codex CLI / Aider / Cline / Continue; only Codex is on the watchlist).

The amendment's response is "omit `composes:` on the Hermes finding
pending the watchlist decision." That is the conservative call and is
right for this run. But the underlying tension — that composition
relations naturally point at tools the watchlist does not cover — is
load-bearing. If composition findings accumulate and most of them have
to omit `composes:` because of watchlist coverage gaps, the field will
be under-used and will look like dead schema.

The amendment names this as a rejection criterion (lines 184-189),
which is the right discipline. The next two cycles will tell whether
the closed-world assumption holds.

---

## Summary of recommended revisions

If ratifying, the following revisions tighten the amendment without
changing its intent:

1. **Drop `composes:` from signals.** Make it finding-only; compute
   signal-level composes as a derived union over `finding_ids`.
2. **Specify not-promoted rendering.** Either explicitly state that
   `not_promoted` blocks do not surface `composes:` (and the
   information is reached via the signal link), or scope the lift
   work.
3. **Decide on multi-vector finding granularity.** Either commit to
   decomposing the Paperclip finding before retro, or state
   explicitly that `composes:` applies whole-finding with noise cost
   named.
4. **Bound the profile-page "Inbound composition" section.** Cap at
   N entries with overflow link, and specify the explanatory prose
   framing.
5. **Name the pattern.** Add an "Out of scope" note that
   `composes:` is the first structured relational field on findings,
   and that future relational fields (`supersedes`, `depends_on`,
   etc.) are their own amendments.

Items 1, 2, and 3 are substantive. Items 4 and 5 are clarifying.

---

## Recommendation

`ratify-with-revisions`.

Revisions required:

1. Drop `composes:` from signal frontmatter; make it finding-only with
   a derived union at the rendering layer (section 3).
2. Specify behavior for `composes:` on findings/signals referenced in
   digest `not_promoted` blocks — recommend "not rendered in the
   not-promoted block; reachable via the linked signal page" (section
   2).
3. Resolve the Paperclip retroactive-application granularity question
   before applying: either decompose the multi-vector finding or
   explicitly accept the whole-finding noise cost in the amendment
   body (section 5).
4. Bound the profile-page "Inbound composition" section with a
   render cap and specify the explanatory prose framing (section 4).
5. Add an explicit "first structured relational field" note in the
   Out of scope section so future relational fields follow the same
   rigor (section 6).

The integrity-check change itself is sound and minimally invasive; the
checker's existing collect-then-validate shape absorbs it cleanly
(section 1). The closed-world assumption holds for this run but is a
real source of future re-litigation (rejection-criterion territory),
and the amendment correctly names it.
