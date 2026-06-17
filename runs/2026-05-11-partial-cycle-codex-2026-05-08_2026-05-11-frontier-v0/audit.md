# Codex Partial Cycle Audit: 2026-05-08 → 2026-05-11

This run tested whether the Profile durable object generalizes to a
source with `surface_class: mixed_official_docs` rather than the
pure-commits case Gemini exercised. It also folded the prior
2026-05-07 codex finding's seven claims into the new profile as the
established baseline.

## Format Generalization Assessment

The format generalized cleanly. Specifically:

- `surface_class: mixed_official_docs` slotted in without schema
  changes.
- The seven prior claims from the 2026-05-07 finding migrated into the
  new profile as YAML entries with no restructuring.
- Three new claims from this window (TUI permissions/approval
  surfacing, role-aware plugin share, skills watcher in app-server)
  joined existing prose sections (UI Surfacing, Plugins, Skills) by
  adding a section or extending one.
- The "What To Watch Next" mechanism handled the
  before-window-but-material **Codex for Chrome** announcement
  appropriately — flagged for next-cycle harvest, not promoted into a
  claim under unrelated evidence.

Conclusion: the format does not need structural changes to handle
mixed-surface providers. The remaining issues are precision-enum
clarifications.

## Doctrine Gaps (continuing from gemini cycle's 1-6)

### Gap 7: `commit` precision missing from the evidence_floor enum

The 2026-05-07 codex finding uses `precision: commit` for six of seven
receipts. The current Profile schema's `evidence_floor` enum is
`commit_diff_reviewed | release_note | official_docs |
observed_behavior`. `commit` (commit URL but full diff not reviewed) is
in active use in findings but absent from the profile schema.

This cycle worked around it by setting `evidence_floor: release_note`
for Codex, which admits commit URLs since they are at least as good as
release notes. But that means the floor is doing little work — it
admits almost any official artifact.

**Proposed addition** to the method's profile rules:

> The evidence_floor enum should be
> `commit_diff_reviewed | commit | release_note | official_docs |
> observed_behavior`. `commit` denotes a commit URL whose diff has not
> been individually reviewed; it ranks between `commit_diff_reviewed`
> (a commit URL whose diff has been reviewed for the claim) and
> `release_note` (a release/changelog entry).

### Gap 8: mixed-surface profiles tend toward loose floors

Codex's source contract has three priority-1 primary surfaces
(changelog, docs, commits). Setting `evidence_floor` to admit
changelog evidence requires `release_note` or lower; setting it to
require commit-diff review would exclude legitimate changelog claims.

This is not a doctrine bug; it is a property of mixed-surface
providers. Worth noting in the schema documentation so future profile
authors do not over-tighten:

**Proposed clarifying note** in the method's profile rules:

> Profiles with `surface_class: mixed_official_docs` typically set
> `evidence_floor: release_note` because the source's primary surfaces
> include the changelog. Profiles with `surface_class:
> open_source_commits` typically set `evidence_floor:
> commit_diff_reviewed` because the source's primary surface is the
> commit stream. This is correlation, not requirement; the floor
> should match the strictest precision the source can be reasonably
> harvested at.

### Gap 9: handling material announcements just before the window

The Codex changelog has two highly material entries on 2026-05-07: CLI
0.129.0 (Vim, workflow resumption, plugin management) and the launch
of **Codex for Chrome** (a browser-based work surface). Both sit one
day before this window's start (2026-05-08) per the merge-to-default
anchoring rule (gap 2 fix).

This cycle handled it by listing them under "What To Watch Next" with
explicit out-of-window flagging. The next regular cycle will harvest
them properly.

The doctrine works as intended. No change proposed; the partial cycle
honored the in-window anchoring without losing track of important
material.

## Citation Precision Inheritance

A practical observation worth recording: the new Codex profile
contains seven claims inherited from the 2026-05-07 finding where the
underlying evidence was marked `precision: commit` rather than
`commit_diff_reviewed`. Under `evidence_floor: release_note` these are
admissible, but the profile would be stronger if a future cycle
diff-reviewed those commits and upgraded their precision in the
finding records. This is editorial work, not a doctrine fix; flagging
here so a future cycle can plan it.

## Mechanics That Worked

- Folding seven prior-finding claims into a new profile was a
  straightforward translation: copy claim IDs, attach finding ID,
  attach `last_verified`, set status.
- The four new prose sections (Goals, Sessions And Threads, Memory,
  Plugins, Sandboxing, UI Surfacing, Skills) reflect Codex's higher
  feature density vs Gemini's three sections. The format scales by
  adding sections.
- Inline source links plus the claims block read cleanly even at 10
  claims. The format is not getting cluttered yet.
- The end-of-section *Findings: ...* attribution line for posture
  sections (gap 3 fix) was easy to apply consistently.

## Productivity Check

The Codex partial cycle took roughly 30 minutes. Two providers now
have profiles. The next move is either:

- A third partial cycle on a closed-source provider (Claude Code) to
  exercise `surface_class: closed_source_release_notes`, or
- Apply the gap-7 and gap-8 doctrine clarifications to
  the method before more profiles inherit the looseness.

Recommendation: apply gap-7 first (the missing `commit` precision is
a real enum hole), then proceed to the closed-source test.
