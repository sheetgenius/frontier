# Run Audit

Run: `2026-05-06-manual-2026-04-22_2026-05-06-frontier-v0`

## Method

This was a manual source-backed research sprint over the initial five Bitter
Frontier source contracts.

The run used official or primary source surfaces:

- OpenAI Codex official changelog RSS and GitHub release
- Claude Code official Week 17 notes and changelog
- Gemini CLI GitHub releases
- Hermes Agent GitHub releases and commits
- Pi Mono / Pi Coding Agent GitHub releases and commits

The run intentionally did not use:

- unsourced social commentary
- third-party summaries without primary links
- benchmark claims without method
- speculation about unreleased behavior

## Artifact Shape

The run emitted:

- `manifest.yml` for run metadata and source surfaces
- one finding file per source
- one accepted signal set
- one weekly digest
- one static content copy of the digest
- JSONL signal export
- QA review
- this audit

## Important Judgment Calls

### Codex

The scan treated `0.128.0` as the main Codex signal because it is the official
stable release inside the window. Alpha releases and follow-on commits were
used only to confirm the direction of travel.

### Claude Code

The scan treated `/ultrareview`, session recaps, plugin/MCP/hook changes, and
permission tooling as one governance-and-verification cluster. Future runs
should split those into more granular findings if the publication cadence needs
daily findings under the weekly digest.

### Gemini CLI

Stable, preview, and nightly releases were intentionally read together because
release-channel behavior itself is an operator signal.

### Hermes Agent

Hermes was evaluated as a broad self-improving personal-agent platform, not
only as a coding CLI, because the source contract says memory, skills,
automations, messaging, runtime portability, and subagents are high-signal.

### Pi Coding Agent

Pi was evaluated as a minimal harness with high provider and extension churn.
The removal of built-in integrations was treated as signal, not merely a
changelog footnote.

## Limitations

This run does not prove crawler recall, prompt robustness, source freshness,
or publication automation. It proves that the source contracts can support a
coherent two-week manual digest and produce structured artifacts that future
runs can compare against.

## Next Run Improvements

- Add raw source snapshots under `raw/`.
- Add per-source `harvested.yml` files with release ids and commit ranges.
- Add a small local probe for at least one source.
- Add a generated-vs-manual comparison once prompt automation exists.
