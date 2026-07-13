---
schema_version: bitter.frontier_corrections.v0
title: Corrections ledger
description: >
  Every correction merged into the Bitter Frontier record, logged. A
  source-cited publication keeps its own receipts: when a date, version,
  channel, or claim is fixed, the fix is itself part of the record. This page
  is the audit trail of the publication correcting itself.
last_updated: 2026-07-12
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
   wrong fact with a primary-source receipt and the full ISO date of the event.
   That date may sit outside the artifact's window when the correction proves
   that the original item was ineligible. See
   `CONTRIBUTING.md` and the Correction template.
2. CI checks the changed links and the record's integrity. A maintainer verifies
   the receipt. An adversarial re-fetch may also run when that optional check is
   enabled.
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
  event_date:     full ISO date of the corrected event; may be outside the original window
  artifact_url:   public URL of the corrected or withdrawn artifact
  verdict:        the verification result that cleared it
  reporter:       handle (external) | adversarial-verify (internal)
  provenance:     external | internal/adversarial-verify
  pr:             #NNN (or the run id, for internal pre-publication catches)
```

## Entries

The first two entries below are real pre-publication catches from the
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
    receipt: "https://github.com/google-gemini/gemini-cli/commit/452356027"
    event_date: 2026-06-05
    artifact_url: /digests/2026-06-04_2026-06-16-weekly/
    verdict: "channel-mismatch (resolved by git ancestry: commit in v0.47.0-preview.0 only, not in any stable tag)"
    reporter: adversarial-verify
    provenance: internal/adversarial-verify
    pr: run 2026-06-16-weekly-digest-2026-06-04_2026-06-16-frontier-v0

  - corrected_on: 2026-06-16
    object: signal 2026-06-10-gemini-flash-ga-routing
    field: scope of the flash-to-3.5 routing change
    kind: other-fact
    before: "framed as an unconditional silent switch of flash workloads to gemini-3.5-flash"
    after: "gated behind an experiment flag plus auth-type access logic; stable v0.46.0 ships a placeholder flag ID (the real-flag-ID commit is not in v0.46.0)"
    receipt: "https://github.com/google-gemini/gemini-cli/releases/tag/v0.46.0"
    event_date: 2026-06-10
    artifact_url: /signals/2026-06-10-gemini-flash-ga-routing/
    verdict: out-of-window-as-stated -> corrected (the change is real and in-window; the overstatement was scope, not date)
    reporter: adversarial-verify
    provenance: internal/adversarial-verify
    pr: run 2026-06-16-weekly-digest-2026-06-04_2026-06-16-frontier-v0

  - corrected_on: 2026-07-01
    object: digest 2026-06-16_2026-06-23-weekly (Gemini Antigravity succession)
    field: lifecycle status of consumer Gemini CLI
    kind: other-fact
    before: "framed as prospective -- Gemini CLI 'may be entering a managed succession,' with the Antigravity funnel and banner in stable"
    after: "the consumer service was already discontinued. Per Google's announcement, Gemini CLI stopped serving requests on 2026-06-18 for AI Pro/Ultra, free individual Code Assist, and new GitHub-org installs; enterprise Code Assist retained access and the OSS repo continues. The 06-16..06-23 window called an executed shutdown prospective."
    receipt: "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/"
    event_date: 2026-06-18
    artifact_url: /digests/2026-06-16_2026-06-23-weekly/
    verdict: under-called -> corrected (the shutdown executed inside the 06-16..06-23 window; recorded as accomplished in the 2026-07-01 digest, with Antigravity registered as a separate source)
    reporter: adversarial-verify
    provenance: internal/adversarial-verify
    pr: run 2026-07-01-weekly-digest-2026-06-24_2026-07-01-frontier-v0

  - corrected_on: 2026-07-12
    object: signal 2026-07-02-agent-flywheel-assembly-layer-dangerous-defaults
    field: event date and eligibility for the 2026-07-01..2026-07-02 window
    kind: wrong-date
    before: "counted as a July 2 signal and described as the live-window case"
    after: "withdrawn from the accepted signal count; ACFS v0.7.0 shipped 2026-06-26 and is retained only as a pre-window intake baseline"
    receipt: "https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0"
    event_date: 2026-06-26
    artifact_url: /signals/2026-07-02-agent-flywheel-assembly-layer-dangerous-defaults/
    verdict: out-of-window -> withdrawn (source intake is not an upstream product event)
    reporter: adversarial-verify
    provenance: internal/adversarial-verify
    pr: run 2026-07-12-exemplar-pass-agent-flywheel-frontier-v0

  - corrected_on: 2026-07-12
    object: profile agent-flywheel
    field: v0.7.0 safe-mode passwordless-sudo behavior
    kind: other-fact
    before: "safe mode omits or removes passwordless sudo"
    after: "on a fresh host, safe mode does not create ACFS's own NOPASSWD sudoers file; this branch does not revoke a rule left by an earlier vibe installation or configured elsewhere"
    receipt: "https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/install.sh#L4862-L4874"
    event_date: 2026-06-26
    artifact_url: /profiles/agent-flywheel/
    verdict: overbroad safety claim -> narrowed to the tagged installer's actual branch behavior
    reporter: adversarial-verify
    provenance: internal/adversarial-verify
    pr: run 2026-07-12-exemplar-pass-agent-flywheel-frontier-v0

  - corrected_on: 2026-07-12
    object: profile agent-flywheel
    field: v0.7.0 safe-mode agent-confirmation boundary
    kind: other-fact
    before: "safe mode keeps standard agent confirmations"
    after: "safe mode still installs shared cc, cod, agy, and gmi shortcuts that select dangerous or always-proceed behavior"
    receipt: "https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/acfs/zsh/acfs.zshrc#L526-L532"
    event_date: 2026-06-26
    artifact_url: /profiles/agent-flywheel/
    verdict: implementation mismatch -> corrected against tagged shell config
    reporter: adversarial-verify
    provenance: internal/adversarial-verify
    pr: run 2026-07-12-exemplar-pass-agent-flywheel-frontier-v0

  - corrected_on: 2026-07-12
    object: finding 2026-07-02-agent-flywheel-arxiv-solo-author-velocity and profile agent-flywheel
    field: like-for-like Microsoft comparison
    kind: other-fact
    before: "110 for dicklesworthstone versus 52 for Microsoft, combining counts from different tables"
    after: "110 for dicklesworthstone versus 97 for Microsoft in the same top-35 figure"
    receipt: "https://arxiv.org/src/2606.07448v1"
    event_date: 2026-06-05
    artifact_url: /profiles/agent-flywheel/
    verdict: apples-to-oranges comparison -> corrected to counts from the same figure
    reporter: adversarial-verify
    provenance: internal/adversarial-verify
    pr: run 2026-07-12-exemplar-pass-agent-flywheel-frontier-v0
```

<!--
Append new corrections as YAML entries inside the `corrections:` block above on
merge. Keep newest at the bottom (chronological), so the ledger reads as the
record's history. The site can render this block into a table; the integrity
checker can later assert each `object` resolves and each `receipt` is non-empty.
-->
