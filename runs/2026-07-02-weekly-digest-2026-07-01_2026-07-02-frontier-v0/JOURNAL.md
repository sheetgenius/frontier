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
