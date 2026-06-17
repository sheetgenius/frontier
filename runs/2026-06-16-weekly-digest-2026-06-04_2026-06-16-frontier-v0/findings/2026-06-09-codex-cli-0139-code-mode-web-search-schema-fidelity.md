---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-09-codex-cli-0139-code-mode-web-search-schema-fidelity
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-06-04
  end: 2026-06-16
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.139.0
    precision: release_note
---
# 2026-06-09-codex-cli-0139-code-mode-web-search-schema-fidelity

Index stub for the 2026-06-04..2026-06-16 run. Full receipted detail (what
changed, operator implication, accessibility and security consequence, and
release-channel status) lives in harvest/codex.md, with the curated signal in
signals/frontier-signals.yml.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.139.0
