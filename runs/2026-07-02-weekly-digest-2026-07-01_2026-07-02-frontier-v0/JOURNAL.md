# JOURNAL -- 2026-07-02 weekly digest run

Run id: `2026-07-02-weekly-digest-2026-07-01_2026-07-02-frontier-v0`
Window: 2026-07-01 to 2026-07-02

## 2026-07-02

- Read governing docs in order: `AGENTS.md`, `METHOD.md`,
  `.claude/skills/frontier-cycle/SKILL.md`, and
  `.claude/skills/exemplar-pass/SKILL.md`.
- Read `sources/index.yml` and every active source contract before opening
  source surfaces. Read `sources/agent-flywheel.yml` and
  `sources/agent-flywheel.notes.md` fully for the first harvest.
- Read prior manifest
  `runs/2026-07-01-weekly-digest-2026-06-24_2026-07-01-frontier-v0/manifest.yml`
  and baseline digest `content/digests/2026-06-24_2026-07-01-weekly.md`.
- Scaffolded run directories and placeholder manifest/audit/qa/journal files.

## Harvest

- Ran coordinator-led fan-out over the existing watchlist and a direct tagged
  harvest for new source `agent-flywheel`.
- Resolved carry-forward checks from the prior manifest.
- Re-fetched signal-candidate receipts for Agent Flywheel, Claude Code, Codex,
  Gemini CLI, and Hermes. Antigravity 1.0.15/1.0.16 public tag URLs did not
  resolve; those notes are retained only as pinned-changelog background.
- Recorded harvest in `harvest/watchlist.md`.

## Findings and signals

- Materialized 22 accepted findings across the watched sources.
- Promoted 5 signals: Agent Flywheel dangerous defaults, Claude Code background
  agents committing/pushing/opening draft PRs, Hermes security wave tagged, Codex
  trace-log payload scrub, and Gemini CLI nightly-only memory symlink escape fix.

## Authoring and QA

- Drafted digest `The Installer Is the Control Plane` and added it to the digest
  index.
- Seeded `content/profiles/agent-flywheel.md`.
- Populated manifest, audit, and QA records. Initial build attempt failed while
  manifest was still empty; final validation rerun follows after this record.

## 2026-07-12 correction and exemplar pass

- Re-fetched the ACFS v0.7.0 installer, shared zsh configuration, Antigravity
  wrapper, release page, and arXiv source bundle.
- Found that safe mode omits passwordless sudo but still installs the dangerous
  agent shortcuts. Corrected the profile, digest, signal record, findings, and
  harvest notes.
- Corrected the paper comparison from unlike 110-versus-52 counts to the same
  figure's 110-versus-97 counts.
- Withdrew Agent Flywheel as a July 2 signal because the June 26 release predates
  the declared window. Preserved the URL as a correction record.
- Rebuilt the profile around the tagged plan-to-graph-to-coordination operating
  method and added a separate dated study of the surrounding repo constellation.
- A fresh adversarial pass found that "safe mode omits passwordless sudo" was
  still too broad. The tag only skips ACFS's sudoers write on that run; it does
  not delete a rule from an earlier vibe run or revoke provider-supplied
  passwordless sudo. Updated the research record and operator action accordingly.
- Reframed arXiv:2606.07448v1 as an individual-account repository count. The
  paper does not establish sole authorship, useful outcomes, or that Agent
  Flywheel caused the count.
- Added the tagged non-standard OpenAI/Anthropic license rider as an eighth
  Agent Flywheel intake finding, with neutral guidance to review the text and
  obtain independent legal advice if potentially covered.
- Corrected the ecosystem study to the Rust Agent Mail implementation installed
  by ACFS, refreshed post-window release pins, and narrowed NTM's current main
  work to a guarded claim-reserve-dispatch workflow rather than a cross-system
  atomic assignment transaction.
- Aligned the corrected run manifest with the rebuilt public record: artifact
  version 4, title "Foreground Attention Is No Longer the Control," and
  `frontier-brief` mode for the one-day issue. Historical journal entries remain
  unchanged above.
- Final research-artifact integrity rerun passed with 335 findings and 151 signal
  records (150 accepted, 1 withdrawn). The first post-correction build attempt
  collided with a concurrent site build and failed on a generated `.prerender`
  chunk, so its page/card counts were not recorded as a valid result. The
  coordinator owns the uncontended final build.
