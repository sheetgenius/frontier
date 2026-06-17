---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-13-hermes-agent-sensitive-write-and-status-leak-hardening
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-06-04
  end: 2026-06-16
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/da28d5d11
    precision: release_note
---
# 2026-06-13-hermes-agent-sensitive-write-and-status-leak-hardening

Index stub for the 2026-06-04..2026-06-16 run. Full receipted detail (what
changed, operator implication, accessibility and security consequence, and
release-channel status) lives in harvest/hermes-agent.md, with the curated signal in
signals/frontier-signals.yml.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/da28d5d11
