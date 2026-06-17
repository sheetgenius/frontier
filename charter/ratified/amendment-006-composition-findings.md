---
schema_version: bitter.frontier_charter_amendment.v0
amendment_id: 006
title: "Composition findings — when a single observation involves two providers (finding-only, adjacent-tools indexed)"
status: ratified
proposed: 2026-05-27
ratified: 2026-05-27
rejected: null
applied_in_commit: 7cb3ce5
proposed_by: autonomous-loop (claude-opus-4-7, 2026-05-27 weekly digest run audit note doctrine question #2; revised after two-reviewer Claude pressure-test 2026-05-27 and Codex xhigh consult 2026-05-27)
supersedes: []
superseded_by: null
---

# Amendment 006: Composition Findings (`composes: [...]`, finding-level, with `sources/adjacent.yml`)

## Summary

A growing pattern in the watchlist is *cross-product composition*: one
provider's surface deliberately fronts, defers to, or routes through
another product's authority, configuration, or permission file. Examples
in the 2026-05-13 → 2026-05-27 window:

- **OpenHands** ACP agent settings UI fronts Claude Code, Codex, or
  Gemini CLI as the actual agent; LLM/Condenser/MCP settings grey out
  because the back-end agent owns those.
- **Paperclip** ACPX-Claude adapter respects user
  `~/.claude/settings.json` permissions — the control plane defers to
  the agent-owned permission file.
- **Hermes** `hermes proxy` exposes a local OpenAI-compatible endpoint;
  downstream tools (Codex CLI, Aider, Cline, Continue) route through
  Hermes against the operator's OAuth subscription.

The current finding schema's single `source` field cannot represent
this. Filtering by `source: claude-code` misses OpenHands's
ACP-fronts-Claude-Code claim. The publication's operator query — "what
changed in Claude Code's adjacency this fortnight?" — has no schema
answer.

This amendment adds a `composes: [...]` array to **findings only**
(not signals — see §Schema). The integrity check validates against
`sources/index.yml` (the canonical watchlist) **union**
`sources/adjacent.yml` (a low-ceremony index of referent-only tools).
This lets findings reference non-watchlist tools (Aider, Cline, Modal,
Cursor, AWS Secrets Manager, etc.) without forcing the watchlist to
grow into adoption categories it does not intend to occupy.

## Why

Three pressures, one structural addition.

**First — the composition pattern is structural, not incidental.**
Per amendment-004, Bitter Frontier is the perception apparatus for
Bitter (the meta-harness above all watched harnesses). Every
meta-harness wraps a back-end. Every front-end shells a downstream.
Every credential router fronts a provider. The watchlist will keep
gaining providers whose operator consequence is *how they compose with
other watched providers* — not how they stand alone.

**Second — the operator query is currently unanswerable.** A reader
running Claude Code wants to know that OpenHands fronts it via ACP,
that Paperclip respects its settings file, that Hermes proxy can
route a Claude Pro subscription to Codex CLI. None of these
findings appear under `source: claude-code` filtering today. The
adjacency map has to be reconstructed by reading every digest.

**Third — closed-world fails on present data.** The earlier draft
required every `composes:` entry to be in `sources/index.yml`. The
pressure-test reviewer applied this to the corpus and found
**~25–30% of recent findings** contain operator consequences touching
non-watchlist tools: Aider/Cline/Continue (Hermes proxy targets),
Cursor (Paperclip cursor_cloud adapter), E2B/Daytona/Modal/Cloudflare
(Paperclip sandbox adapters), AWS Secrets Manager (Paperclip vault
backend), GitLab/Bitbucket DC/Jira DC/Azure DevOps (OpenHands
enterprise integrations). Watchlist expansion would double the
harvest cost while crossing into adoption categories (sandbox
providers, dev infra) that the watchlist deliberately does not
include. The closed-world rule guarantees re-proposal in the next
cycle.

## The schema change

A new optional array field on findings:

```yaml
composes:
  - <id>
  - <id>
```

Where each `<id>` is an entry in either `sources/index.yml`
(watchlist) **or** `sources/adjacent.yml` (referent-only tools — see
§Adjacent index below).

`composes:` is finding-only. **Signals do not carry their own
`composes:` field.** Rendering computes a signal's composes as the
**union** of its referenced findings' `composes:` arrays, using the
same derived-union pattern the repo already uses elsewhere (e.g.,
`digestsForSource` in `site/src/lib/frontier.ts` computes a derived
view rather than storing it on each digest).

The rationale for finding-only:

- A signal's authoritative source of composition is its finding(s).
  Storing on both creates drift risk.
- Under amendment-005's per-consequence signal decomposition, multiple
  signals share one finding. Storing `composes:` on each derived
  signal would force the editor to keep them in sync or face a
  divergence when one signal's composes diverges from the finding's.
- The derived-union pattern matches the existing
  `digestsForSource` precedent for signal-level data.

### Integrity check semantics

The integrity checker grows three new validations:

1. **Every entry in `composes: [...]` must resolve** against either
   `sources/index.yml` or `sources/adjacent.yml`.
2. **A finding's `composes:` must not contain the finding's own
   `source` id** (a finding does not compose with itself).
3. **No orphan active adjacent entries.** Every entry in
   `sources/adjacent.yml` with `status: active` must be referenced by
   at least one accepted finding's `composes:` array. Archived
   entries are exempt.

The integrity checker does *not* require composition to be
bidirectional. OpenHands shipping ACP UI that fronts Claude Code does
not require a parallel Claude Code finding noting that OpenHands now
fronts it. Composition is one-directional from the originator's
perspective.

The checker code change is minimal (~25 lines): one new
`collectAllSourceIds()` helper that reads both indices and unions
them, plus a validation block modeled exactly on the existing
`signal-missing-finding` check (`site/scripts/check-integrity.mjs`
lines 183–196).

### Adjacent index

New file: `sources/adjacent.yml`. Schema:

```yaml
schema_version: bitter.frontier_adjacent_index.v0
last_revised: <date>
adjacent_tools:
  - id: aider
    label: Aider
    canonical_url: https://aider.chat/
    first_seen_finding_id: 2026-05-27-hermes-v0.14.0-foundation-release
    last_seen: 2026-05-27
    status: active
    notes: "AI coding tool that speaks OpenAI API; appears as `hermes proxy` target."
```

**Required fields per entry**: `id`, `label`, `canonical_url`,
`first_seen_finding_id`, `last_seen` (YYYY-MM-DD), `status`
(`active | archived`). `notes` is optional but encouraged for one-line
context on why the entry exists. The integrity checker enforces
required fields; missing fields fail QA.

**No source contract, no profile, no harvest cadence.** The adjacent
index exists solely as a referent allowlist for `composes:` arrays.
An adjacent entry is a *named existing tool that watched providers
compose with*; it is **not** an editorial subject.

**Constraints**:

- **No orphan entries.** Every entry with `status: active` must be
  referenced by at least one accepted finding's `composes:` array.
  The integrity checker enforces this — adding an entry to
  `sources/adjacent.yml` without referencing it from a real finding
  fails QA.
- **No category placeholders.** Entries name specific existing tools
  ("aider", "cline", "modal"), not abstract categories ("ai-coding-tool",
  "sandbox-provider"). The watchlist source contract grammar already
  forbids this; the adjacent index inherits the discipline.
- **Add only tools named in source-backed claim text.** The
  `first_seen_finding_id` must reference a finding whose evidence
  array cites the tool in a real source URL — a release note, PR
  body, doc, or commit. Speculative or roadmap-only mentions do not
  qualify.
- **Status transitions are explicit.** `active → archived` when a
  tool is no longer referenced by any active finding (e.g., the
  finding is superseded, or the cross-product relationship the tool
  enabled has been removed). Archived entries remain in the file as
  history; their ids continue to resolve for past findings.

Adding an entry to `sources/adjacent.yml` is low-ceremony — one human
edit alongside the finding that introduces the reference, no
follow-on harvest work. Promotion from adjacent to watchlist (if a
tool becomes worth tracking in its own right) is a separate editorial
decision and requires the full source-contract package.

### Rendering semantics (post-ratification)

- **Signal cards** display a small "composes with: claude-code,
  codex, aider, cline" line when the derived-union of finding-level
  `composes:` is non-empty. Watchlist ids link to their profile;
  adjacent ids render as plain labels with no link (or link to
  `canonical_url` if present).
- **Signal pages** render a "Composition" sub-section under Receipts
  that names the watchlist providers and adjacent tools the
  underlying finding declares it composes with.
- **`/signals/` index filter chips** include a "Filter by
  composition" facet listing every id appearing in any signal's
  derived `composes:` union (watchlist + adjacent).
- **Provider profile pages** render an "Inbound composition"
  section listing signals where the profile's source id appears in
  another finding's `composes:` array. **Cap at 8 entries with an
  "earlier" link**; if more than 8 exist, the inbound-composition
  surface needs its own page rather than growing the profile. This
  surface exists for **watchlist provider profiles only**;
  adjacent tools do not have profile pages.
- **Digest `not_promoted` blocks** do not render `composes:`. The
  composition is reachable via the linked signal/finding page; the
  not-promoted block stays compact (its purpose is to name what
  the editor considered and chose not to lead with).

Rendering changes are post-ratification implementation work; the
amendment authorizes them.

### Profile schema

Profile `claims[]` and `posture_basis` do not change. Composition
context is finding-level only; profile prose may reference composition
in narrative form. Profiles are per-provider; structured composition
is per-finding.

## Applied To (ratification work)

When this amendment is ratified:

1. Move this file from `charter/proposed/` to `charter/ratified/`.
2. Update `RESEARCH_CONTRACT.md` Finding section to name
   `composes: [...]` as an optional field on findings; describe the
   adjacent-index resolution and the derived-union signal
   computation.
3. Create `sources/adjacent.yml` with the initial entries
   referenced by retroactive applications (see step 5 below). Cite
   the schema in the file's first lines.
4. Update `site/scripts/check-integrity.mjs` to add the
   `collectAllSourceIds()` helper and the two new validations.
5. Apply `composes: [...]` retroactively to findings in the
   2026-05-27 weekly digest run:
   - **`2026-05-27-openhands-acp-ui-and-org-llm-profiles`** →
     `composes: [claude-code, codex, gemini-cli]`. All three targets
     are watchlist sources; no adjacent entries needed.
   - **`2026-05-27-hermes-v0.14.0-foundation-release`** →
     `composes: [codex, aider, cline, continue]`. The first is
     watchlist; the last three resolve to adjacent entries that
     this commit adds.
   - **`2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets`**
     — **deferred**. This finding contains five distinct vectors
     (scoped permissions, routine env secrets, document locks, Modal
     sandbox, ACPX-Claude × `~/.claude/settings.json`). Only one
     vector (ACPX-Claude) is a composition claim. Under finding-only
     `composes:` with derived signal-level union, applying
     `composes: [claude-code]` to the whole finding would inherit
     onto all five derived signals (or the single composite signal
     pre-decomposition), four of which do not actually compose with
     Claude Code. Both shapes are noisy. The Codex xhigh consult
     (`research/council-dossiers/2026-05-27-amendments-005-006-codex-xhigh.md`)
     surfaced this directly: even with amendment-005 decomposition,
     the finding-level union still over-claims composition.
     Resolution: **leave the Paperclip finding's `composes:` empty
     at ratification**. Add an audit-note flag for the next editorial
     pass; resolution requires either (a) splitting the Paperclip
     finding into per-vector findings so the ACPX vector carries its
     own finding-scoped `composes:`, or (b) a future amendment that
     accepts per-signal `composes:` storage and overrides finding-only.
     Neither is in scope for this ratification.
6. Run integrity checker after the retroactive edits to confirm the
   reference graph is still clean.
7. Site rendering changes follow in a subsequent implementation
   pass; the amendment authorizes them.

## Ordering with amendment-005

Amendment 005 (finding-vs-signal granularity) **should ratify first
or together with this one**. The Paperclip multi-vector case (step 5
above) is cleaner under per-consequence signal decomposition. The
amendment-005 doctrine question and this amendment's composition
question both surfaced in the same audit note; they are siblings, not
sequential.

If amendment-005 fails ratification, amendment-006 should be re-read.
The composition rule still works finding-only, but the operator-query
promise (filter signals by composition) is weaker when signals are
composite — a signal carrying `composes: [claude-code]` from one
vector and unrelated content from three other vectors makes the
filter noisy.

## First structured relational field

This amendment introduces the **first structured relational field**
on findings (`composes:`). Future relational fields are foreseeable:

- `supersedes:` — this finding deprecates or replaces an earlier claim.
- `depends_on:` — this finding only makes sense given an earlier one.
- `deprecates:` — this finding removes a claim from current state.
- `contradicts:` — this finding contests an earlier claim (with editorial follow-up).

Each future relational field should ship as its own amendment, with
the **same rigor this amendment establishes**:

1. A motivating gap from real corpus data.
2. Closed-world / adjacent-tools / external-sentinel decision made
   explicitly.
3. Integrity-check semantics named and sketched against the
   existing checker code.
4. Rendering semantics specified for: signal cards, signal pages,
   `/signals/` index facets, profile pages, digest `not_promoted`
   blocks.
5. A retroactive worked example using existing corpus data.
6. Rejection criteria that are testable against current data, not
   hypothetical.

Adding the first structured relational field is the right time to
codify this discipline. The pattern is: "structured relational
fields are introduced one at a time, each amended into the schema
with the full package."

## Rejection criteria

This amendment should be rejected if any of the following are true at
ratification time:

- The `composes:` field produces more noise than signal. If most
  findings end up with multi-element `composes:` arrays that
  duplicate prose, the rule is wrong — `composes:` is meant to
  carry a deliberate claim, not bureaucracy.
- The adjacent index grows beyond ~30 entries within two cycles
  without a discernible operator query gain. If the adjacent
  index becomes a junk drawer, the rule needs tightening — either a
  promotion path to watchlist or a sunset policy on stale adjacent
  entries.
- Bidirectional composition becomes a frequent operator expectation
  (operators landing on Claude Code's profile and expecting to see
  the OpenHands-fronts-Claude-Code claim there). If so, the field
  needs an explicit bidirectional semantic and this amendment
  should be re-proposed.
- The derived-union signal rendering proves confusing in practice —
  signal pages showing composes targets that don't apply to the
  specific consequence the signal names. If users complain that the
  signal's "composes with X" doesn't match the consequence, the
  rule needs to move composition closer to the signal (per-signal
  storage) and amendment-005's decomposition becomes a hard
  prerequisite.

## Out of scope

- This amendment does not change the meaning of `source:` on findings.
  `source` remains the originator; `composes:` is the relational
  context.
- This amendment does not change `sources/index.yml` semantics for
  the watchlist. Watchlist additions remain a separate editorial
  decision with the full source-contract package.
- This amendment does not propose adding the missing relational
  fields (`supersedes`, `depends_on`, etc.). Each is its own
  amendment under the discipline established above.
- This amendment does not address how composition findings should
  influence section routing. The existing Amendment 004 rules apply:
  route by the originating provider's operator consequence shape;
  composition is contextual, not section-changing.

## Source

- Audit note for the 2026-05-27 weekly digest run
  (`runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/audit.md`),
  doctrine question #2.
- The findings that exemplify the pattern:
  - `2026-05-27-openhands-acp-ui-and-org-llm-profiles` — clean
    watchlist-only example.
  - `2026-05-27-paperclip-scoped-permissions-and-routine-env-secrets` —
    multi-vector granularity case.
  - `2026-05-27-hermes-v0.14.0-foundation-release` — non-watchlist
    targets case that motivated the adjacent-tools mechanism.
- The cross-provider thread on default-on autonomy (Claude Code,
  Codex, Gemini CLI) is *not* composition — it is parallel motion.
  Composition is when one product's change materially depends on or
  defers to another product's surface.
- Two-reviewer pressure-test pass on 2026-05-27:
  - `research/council-dossiers/2026-05-27-amendment-006-schema-fit.md` — drove the finding-only `composes:` decision (signals get a derived union); identified the `not_promoted` rendering gap; recommended the "first structured relational field" discipline. Recommended `ratify-with-revisions` with five specific changes.
  - `research/council-dossiers/2026-05-27-amendment-006-closed-world.md` — quantified the closed-world failure rate (~25–30% of findings touch non-watchlist tools); recommended the `sources/adjacent.yml` mechanism as the lowest-friction solution; recommended blocking on or co-landing with amendment-005. Recommended `ratify-with-revisions`.

## Revisions

- 2026-05-27: initial proposal (closed-world rule against
  `sources/index.yml` only; `composes:` on both findings and signals;
  deferred Hermes case).
- 2026-05-27: pressure-test revision — replaced closed-world with
  `sources/index.yml` ∪ `sources/adjacent.yml` and specified the
  `bitter.frontier_adjacent_index.v0` schema for the new index file;
  moved `composes:` to finding-only with a derived signal-level union;
  resolved the Hermes case via the adjacent-tools mechanism
  (`composes: [codex, aider, cline, continue]`); added Paperclip
  Option A / Option B handling that depends on amendment-005 ordering;
  specified rendering for `not_promoted` blocks (not rendered there)
  and a profile-page "Inbound composition" cap; added the "first
  structured relational field" discipline section; sharpened
  rejection criteria against testable conditions.
- 2026-05-27: Codex xhigh consult revision (see
  `research/council-dossiers/2026-05-27-amendments-005-006-codex-xhigh.md`).
  Strengthened adjacent-index schema: required `canonical_url`,
  `first_seen_finding_id`, `last_seen`, `status: active | archived`;
  added no-orphan rule (every active adjacent entry must be
  referenced by at least one accepted finding); prohibited category
  placeholders; required source-backed claim text for new adjacent
  entries. Added a third integrity-check validation (no-orphan
  active adjacent entries). Removed Paperclip Option B; **deferred
  Paperclip retroactive `composes:` entirely** — under finding-only
  storage, neither Option A (decomposed) nor Option B
  (whole-finding) avoids over-claiming composition on the
  non-ACPX vectors of the Paperclip finding. Resolution requires
  either splitting the Paperclip finding into per-vector findings
  or a future amendment that allows per-signal `composes:`.
