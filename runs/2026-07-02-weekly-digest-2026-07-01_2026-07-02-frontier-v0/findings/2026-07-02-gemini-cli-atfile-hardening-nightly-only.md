---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-gemini-cli-atfile-hardening-nightly-only
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260701.g7f00c5fe5
    precision: github_release
---
# 2026-07-02-gemini-cli-atfile-hardening-nightly-only

Gemini CLI `@file` hardening reached nightly
`v0.51.0-nightly.20260701.g7f00c5fe5`, but not stable `v0.49.0` or preview
`v0.50.0-preview.1` during this window. Channel: preview-or-beta. Operator
consequence: the carry-forward remains open for stable users.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260701.g7f00c5fe5
