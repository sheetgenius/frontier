# QA Notes

Run: `2026-05-07-commit-harvest-2026-04-23_2026-05-07-frontier-v1`

## What This Run Proves

- The expanded watchlist changes the editorial center from "coding CLIs are gaining state" to "agent harnesses are becoming operating surfaces."
- The research contract's accessibility lens is necessary. OpenClaw, Agent Zero, Hermes, Pi, Gemini, and OpenHands all show accessibility-related changes that are not secondary to capability.
- The commit-harvest workflow can produce source-backed findings, cross-source signals, and an editorial digest without relying on model memory or social summaries.

## Evidence Coverage

Commit counts harvested:

- Codex: 553
- Gemini CLI: 169
- Hermes Agent: 2061
- Pi Coding Agent: 229
- OpenClaw: 8210
- Paperclip: 125
- Agent Zero: 116
- OpenHands: 127

All source claims in the digest cite primary GitHub commit URLs. Selected high-signal commits were inspected through the GitHub commit API and marked `commit_diff_reviewed` in findings.

## Diff-Reviewed Sample

- Codex `/goal` validation: confirms persistent goal UX, limit handling, paste handling, queued command behavior, and tests.
- Gemini Auto Memory inbox: confirms memory commands, settings, UI, evals, executor, skill extraction, and canonical patch flow.
- Paperclip runtime command spec: confirms adapter-owned install/provisioning contract for sandbox targets.
- Agent Zero native browser: confirms replacement of browser-use core implementation with direct browser plugin, viewer, controls, APIs, configuration, and extension management.
- OpenClaw stale channel plugin recovery: confirms setup recovery for externalized channel plugins while preserving disabled-channel guards.
- OpenHands log redaction: confirms API-key and child-logger redaction hardening.

## Known Weaknesses

- OpenClaw and Hermes are high-volume sources. This run used high-signal regex scans plus selected diff review, not exhaustive per-commit classification.
- Claude Code is not included because this run is commit-focused and the source contract does not define a public commit stream.
- The digest is editorially strong enough for internal review, but should not become public canonical until source links, finding pages, and version provenance are rendered cleanly on the site.
- This run did not run live product probes of the tools. It only reviewed source commits.

## Next Machine Improvements

- Add a deterministic high-signal commit classifier that groups commits by source contract facets.
- Add a "diff review required" gate for any top signal.
- Add release-note/changelog line links when available, especially for sources with noisy commit streams.
- Add a public/source register that clearly distinguishes commit evidence, release evidence, docs evidence, and local probe evidence.
- Add a separate Claude Code changelog run instead of forcing it into commit-harvest mode.
