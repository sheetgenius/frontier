---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-22-hermes-execute-code-yolo-bot-cards-reached-v2026-8-19
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-08-22
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19
    precision: github_release
  - url: https://github.com/NousResearch/hermes-agent/pull/90224
    precision: merged_pr
---
# 2026-08-22-hermes-execute-code-yolo-bot-cards-reached-v2026-8-19

v2026.8.19 published 2026-08-21T12:16:39Z, prerelease=false, peeled commit fcbd1076. compare f0ffcbc7...v2026.8.19 behind_by=0 (PR #90224). compare b0350365...v2026.8.19 behind_by=0 (PR #90391). compare 1179f148...v2026.8.19 behind_by=0 (PR #90765). Last brief's three main-unreleased approval holes are ancestors of this tag.

Channel: tagged-release. Half: defect.

Operator consequence: v2026.8.18 is no longer the install if those three were the reason you waited.

## Receipt
- https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19
- https://github.com/NousResearch/hermes-agent/pull/90224
