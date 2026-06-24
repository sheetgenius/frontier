# Deep Social Research Loop

This workflow turns public X/social material into a richer research layer for
Bitter Frontier without relaxing the evidence floor for product claims.

The loop has three roles:

- Scout: mines public social posts for interesting facts, public exchanges,
  adoption signals, user pain, maintainer intent, benchmark discourse, and
  ecosystem drama.
- Critic: challenges the scout packet for overclaiming, missing counter-posts,
  weak source attribution, and unclear operator relevance.
- Editor: stores only reproducible artifacts in the repo, writes cautious
  summaries, and decides what remains social context versus what deserves a
  later source-contract verification pass.

The role names are generic. Do not record private session identifiers, model
transcripts, raw API payloads, local paths, private prompts, reviewer names, or
credentials in public artifacts.

## Output Shape

A social research run may include:

```text
runs/<run-id>/
  manifest.yml
  editorial.yml
  harvest/*.md
  social-cards/*.yml
  research-journal.md
  verify/*.md
  qa.md
```

`harvest/*.md` keeps structured candidate claims. `social-cards/*.yml` stores
static post artifacts the site can embed inside editorial. `editorial.yml` is
the public reading experience: argument first, evidence woven into the essay,
with traceability pushed into source links or a collapsed source trail.
`research-journal.md` records editorial decisions, open loops, and what the next
scout pass should investigate.

## Publication Rule

The public page should read like a finished editorial, not a research binder.
Use X/social material to sharpen the story, show the public conversation, and
surface questions a release-note-only workflow would miss. Do not lead with raw
receipts, card grids, QA notes, claim tables, or artifact inventories.

Traceability remains mandatory, but it belongs in the background: source links
on the embedded post figure, collapsed evidence notes, repo artifacts, and the
Git history. A reader should be able to audit the piece without having the audit
machinery interrupt the piece.

## Static Social Cards

Social cards simulate the useful parts of an embedded post while keeping runtime
independent from X. They are source material for editorial embeds, not the
primary public artifact:

```yaml
schema_version: bitter.frontier_social_cards.v0
run_id: 2026-06-24-x-social-harvest-2026-06-24-frontier-v0
cards:
  - id:
    title:
    kind: capability_announcement | maintainer_intent | user_pain | adoption_signal | benchmark_discourse | ecosystem_drama | public_exchange | governance_or_affiliation | meme_or_positioning
    status: candidate | social_context | single_source_unconfirmed | needs_primary_crosscheck | verified_secondary | refuted | superseded
    date: YYYY-MM-DD
    date_precision: day | month_only | year_only | unknown
    date_note:
    source_ids: []
    authors: []
    source_urls: []
    excerpt:
    summary:
    why_it_matters:
    verification_needed:
    confidence:
    caveats:
    tags: []
```

Use short excerpts only. Prefer a neutral summary plus a source link over long
quoted text.

## Evidence Boundaries

- A social card can make the journal more grounded and readable.
- A social card is not, by itself, a finding, signal, digest claim, or profile
  claim.
- Product/version/capability claims still need source-contract verification
  before promotion.
- A secondary receipt upgrades only the exact bounded claim it proves. Do not
  let a real release tag or PR validate a different claim from the same project.
- Drama, public exchanges, rankings, benchmark chatter, and user pain may be
  cataloged as ecosystem context when clearly labeled.
- If a claim depends on a thread or reply chain, keep enough public source URLs
  to let a reader reconstruct the exchange.
- Reputational or conduct claims about named people or organizations stay
  journal-only unless supported by direct primary receipts.
- User-pain and drama clusters should include counterweight searches: fixes,
  maintainer replies, disconfirming posts, issue threads, or release notes.

## Loop Cadence

1. Scout one slice: a project, theme, or date window.
2. Critic pass: reject weak items, ask for missing context, and identify
   follow-up searches.
3. Editor pass: write or revise social cards, journal notes, and caveats.
4. Repeat until the remaining open questions are specific verification tasks,
   not broad social discovery gaps.
5. Run `git diff --check`, `node site/scripts/check-integrity.mjs`, and the site
   build before publishing.
