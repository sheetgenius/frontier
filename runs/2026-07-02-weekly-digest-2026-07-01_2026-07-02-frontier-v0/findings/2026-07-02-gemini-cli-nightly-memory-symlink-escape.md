---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-gemini-cli-nightly-memory-symlink-escape
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260702.gff00dacd9
    precision: github_release
---
# Gemini CLI nightly fixes a memory-import symlink escape

Gemini CLI nightly `v0.51.0-nightly.20260702.gff00dacd9` fixes a symbolic-link
directory escape in the memory import processor. Channel: preview-or-beta.
Operator consequence: until the fix reaches preview or stable, treat untrusted
`GEMINI.md` memory imports as a possible host-file read path through symlinked
directories.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260702.gff00dacd9
