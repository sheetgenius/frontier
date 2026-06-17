---
schema_version: bitter.frontier_corrections.v0
title: Corrections ledger
description: >
  Every correction merged into the Bitter Frontier record, logged. A
  source-cited publication keeps its own receipts: when a date, version,
  channel, or claim is fixed, the fix is itself part of the record. This page
  is the audit trail of the publication correcting itself.
last_updated: 2026-06-18
---

# Corrections ledger

Bitter Frontier publishes from primary sources, and primary sources move:
a tag slips, a fix that was on `main` ships (or doesn't), a docs page redirects,
a rendered date lies about its year. When we get one wrong and fix it, the fix
is logged here. This is on-brand, not an apology wall. The same discipline
that demands a receipt for every claim demands a receipt for every correction.

Being in this ledger is a credit. Contributors who correct the record are named
(by handle, with consent) next to the fix they made.

## How a correction lands here

A correction enters the ledger when a maintainer merges it. The path:

1. A contributor (or the adversarial-verify stage of a weekly run) reports a
   wrong fact with a primary-source receipt and an in-window date. See
   `CONTRIBUTING.md` and the Correction template.
2. CI re-fetches the changed receipt and posts a verdict; a maintainer reviews.
3. On merge, a row is appended below with the receipt, the before/after, and the
   verdict that cleared it.

Two provenance classes are tracked so the ledger is honest about who caught
what:

- `external`: a correction from an outside contributor (the crowdsourced case
  this ledger exists to surface).
- `internal/adversarial-verify`: caught by the publication's own pre-
  publication verify stage before or just after a digest shipped. Logged too,
  because self-caught error is still error, and the ledger should not flatter
  the machine by hiding the saves it made on itself.

## Ledger entry schema

Each entry is one fixed fact:

```text
- corrected_on:   YYYY-MM-DD (merge date)
  object:         finding / signal / profile / digest id that was wrong
  field:          the exact field corrected
  kind:           wrong-date | wrong-version-or-tag | channel-mismatch
                  | wrong-or-dead-receipt-url | wrong-owner-or-homepage | other-fact
  before:         the published (incorrect) value
  after:          the corrected value
  receipt:        primary-source URL proving the correction
  in_window_date: the full ISO date the correction is anchored to
  verdict:        the CI adversarial verdict that cleared it
  reporter:       handle (external) | adversarial-verify (internal)
  provenance:     external | internal/adversarial-verify
  pr:             #NNN (or the run id, for internal pre-publication catches)
```

## Entries

The two entries below are real pre-publication catches from the
2026-06-04..2026-06-16 weekly run's adversarial-verify stage (see that run's
`qa.md`). They seed the ledger and show the format; they are
`internal/adversarial-verify` provenance. External-contributor corrections
append beneath them as they merge.

```yaml
corrections:
  - corrected_on: 2026-06-16
    object: digest 2026-06-04_2026-06-16-weekly (Gemini Antigravity migration)
    field: channel / scope of "Antigravity migration commands + built-in skill"
    kind: channel-mismatch
    before: "framed as shipping (migration commands and an Antigravity skill present)"
    after: "the transition banner is in stable (v0.45.2, uncapped); the migration commands and Antigravity skill are preview-only (v0.47.0-preview.0)"
    receipt: https://github.com/google-gemini/gemini-cli/commit/452356027
    in_window_date: 2026-06-05
    verdict: channel-mismatch (resolved by git ancestry: commit in v0.47.0-preview.0 only, not in any stable tag)
    reporter: adversarial-verify
    provenance: internal/adversarial-verify
    pr: run 2026-06-16-weekly-digest-2026-06-04_2026-06-16-frontier-v0

  - corrected_on: 2026-06-16
    object: signal 2026-06-10-gemini-flash-ga-routing
    field: scope of the flash-to-3.5 routing change
    kind: other-fact
    before: "framed as an unconditional silent switch of flash workloads to gemini-3.5-flash"
    after: "gated behind an experiment flag plus auth-type access logic; stable v0.46.0 ships a placeholder flag ID (the real-flag-ID commit is not in v0.46.0)"
    receipt: https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0
    in_window_date: 2026-06-10
    verdict: out-of-window-as-stated -> corrected (the change is real and in-window; the overstatement was scope, not date)
    reporter: adversarial-verify
    provenance: internal/adversarial-verify
    pr: run 2026-06-16-weekly-digest-2026-06-04_2026-06-16-frontier-v0
```

<!--
Append new corrections as YAML entries inside the `corrections:` block above on
merge. Keep newest at the bottom (chronological), so the ledger reads as the
record's history. The site can render this block into a table; the integrity
checker can later assert each `object` resolves and each `receipt` is non-empty.
-->
