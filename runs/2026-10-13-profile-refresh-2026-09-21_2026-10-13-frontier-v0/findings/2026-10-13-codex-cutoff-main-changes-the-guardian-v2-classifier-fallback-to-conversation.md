---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-cutoff-main-changes-the-guardian-v2-classifier-fallback-to-conversation
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/4d82d36ccf0746b75437d78b874ba4c96ff2cc75
    precision: commit
  - url: https://github.com/openai/codex/compare/rust-v0.162.1...ca2b076fffbc24ad5fa57258ece8a8277b326138
    precision: git_compare
---
# 2026-10-13-codex-cutoff-main-changes-the-guardian-v2-classifier-fallback-to-conversation

Cutoff main changes the Guardian V2 classifier fallback to conversation. Guardian V2 selects conversation classification when neither local async_classifier_mode nor the model default supplies a mode. Explicit snapshot remains available. This is in cutoff main, absent from alpha.10 and stable 0.162.1; V2 itself remains off.

Channel: main-unreleased. Half: capability. Date: 2026-10-13 (commit at 18:08:10Z; no published in-window tag).

Operator consequence: Keep this out of stable and in-window preview recommendations. V2 experiment owners should inspect the next containing release and test fallback and explicit modes. Post-window alpha.11 availability does not change this window.

## Receipt
- https://github.com/openai/codex/commit/4d82d36ccf0746b75437d78b874ba4c96ff2cc75
- https://github.com/openai/codex/compare/rust-v0.162.1...ca2b076fffbc24ad5fa57258ece8a8277b326138
