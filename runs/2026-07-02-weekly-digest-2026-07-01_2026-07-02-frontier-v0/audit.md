# Audit -- 2026-07-02 weekly ("The Installer Is the Control Plane")

> **Correction, 2026-07-12:** The original audit below recorded Agent Flywheel
> as one of five promoted signals. That decision was withdrawn. ACFS v0.7.0
> shipped June 26, so its July 2 addition to Frontier was a pre-window intake
> baseline, not an in-window product event. A second receipt pass also found that
> v0.7.0 safe mode still installs dangerous agent shortcuts and does not revoke
> an existing or provider-supplied passwordless-sudo rule. The paper comparison
> paired unlike 110 and 52 counts; the corrected like-for-like figure is 110
> versus 97 and describes an individual account, not sole authorship or Flywheel
> causality. The tagged non-standard OpenAI/Anthropic license rider is now also
> recorded. Four in-window signals remain accepted; the original signal URL is
> preserved as a withdrawal record.

## What was read

- `AGENTS.md`, `METHOD.md`, `.claude/skills/frontier-cycle/SKILL.md`, and
  `.claude/skills/exemplar-pass/SKILL.md` in the requested order.
- `sources/index.yml` and every active source contract before harvesting source
  surfaces.
- `sources/agent-flywheel.yml` and `sources/agent-flywheel.notes.md` fully before
  any Agent Flywheel probing.
- Prior manifest carry-forward checks from
  `runs/2026-07-01-weekly-digest-2026-06-24_2026-07-01-frontier-v0/manifest.yml`.
- Baseline digest `content/digests/2026-06-24_2026-07-01-weekly.md` plus
  calibration reads of `content/digests/2026-06-23_2026-06-24-weekly.md`,
  `content/profiles/heypi.md`, and `content/profiles/antigravity.md`.
- Agent Flywheel tag `v0.7.0` source files: README, `install.sh` family through
  installer libraries, `acfs/zsh/acfs.zshrc`, `scripts/lib/user.sh`,
  `scripts/lib/agy_locked.py`, `acfs.manifest.yaml`, tagged provider examples,
  tagged web app source, and LICENSE.
- arXiv:2606.07448v1 abstract page and source bundle for the scoped
  individual-account repository-count claim.

## Key decisions

- New source: Agent Flywheel. The organizing thesis is the assembly layer: a third
  party choosing an operator's defaults for Claude Code, Codex, and Antigravity on
  one VPS.
- Scope fence honored. The author's other repositories were not harvested. The
  paper receipt was used only for the scoped velocity claim.
- Installer probe was read-only. The ACFS installer was never executed.
- Cost claims were pinned to the `v0.7.0` web app source rather than the live
  `agent-flywheel.com` page.
- Antigravity 1.0.15/1.0.16 were demoted. Public tag/release URLs did not resolve;
  only a pinned changelog blob at commit `2939422297ba014da627961f4e387fad0e151f47`
  was available.
- Signal curation promoted 5 of 22 findings. The promoted set was Agent Flywheel,
  Claude Code, Hermes, Codex, and Gemini CLI.

## Channel resolutions

- Tagged-release: Agent Flywheel `v0.7.0`; Claude Code `v2.1.198`; Codex
  `rust-v0.142.5`; Hermes Agent `v2026.7.1`; Agent Zero `v2.2`; eve
  `0.17.2`/`0.18.1`/`0.19.0`.
- Preview-or-beta: Gemini CLI `v0.51.0-nightly.20260701.g7f00c5fe5` and
  `v0.51.0-nightly.20260702.gff00dacd9`; OpenClaw `v2026.7.1-beta.1`;
  Paperclip `canary/v2026.702.0-canary.8`; Codex `0.143.0-alpha.*`.
- Main-unreleased: OpenHands Authlib CVE carry-forward; Flue contract rewrite;
  Pi provider/model reliability fixes.
- Pinned-changelog-only: Antigravity 1.0.15/1.0.16.

## Open questions and uncertainties

- Agent Flywheel was read at tag, but the installer was not executed. Runtime
  effects on a live VPS remain unprobed.
- Safe mode was verified as a skipped ACFS sudoers write, not a cleanup operation.
  It does not remove the ACFS file left by vibe mode or another provider rule.
- Antigravity is closed source. The run verifies what ACFS writes and how the
  wrapper invokes `agy`, not the closed runtime's internal enforcement.
- The arXiv v1 source bundle verified the macros and prose behind the
  `Dicklesworthstone`/Microsoft comparison. It does not attribute the repository
  count to Agent Flywheel or establish sole authorship.
- The license rider is quoted and scoped from the tagged LICENSE. Frontier does
  not offer a view on its interpretation or enforceability.
- Antigravity public version tags for 1.0.15 and 1.0.16 were unreachable; only the
  pinned changelog blob was available.
- `docs/distribution-strategy.md` was present as an unrelated untracked user file
  and was intentionally left untouched.
