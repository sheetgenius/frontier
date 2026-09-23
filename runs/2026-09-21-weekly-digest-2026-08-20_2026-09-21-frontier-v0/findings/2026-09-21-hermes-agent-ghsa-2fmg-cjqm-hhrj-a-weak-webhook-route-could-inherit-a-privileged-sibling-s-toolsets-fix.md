---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-hermes-agent-ghsa-2fmg-cjqm-hhrj-a-weak-webhook-route-could-inherit-a-privileged-sibling-s-toolsets-fix
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/9345c67854f6ef1ef4f68ac4b9c3ae266ecceccf
    precision: commit
---
# 2026-09-21-hermes-agent-ghsa-2fmg-cjqm-hhrj-a-weak-webhook-route-could-inherit-a-privileged-sibling-s-toolsets-fix

GHSA-2fmg-cjqm-hhrj: a weak webhook route could inherit a privileged sibling's toolsets (fixed v2026.9.21). GHSA-2fmg-cjqm-hhrj: a weak webhook route could inherit a privileged sibling's toolsets (fixed v2026.9.21)

Channel: tagged-release. Half: defect. Date: commit 2026-09-18; tagged 2026-09-21.

Operator consequence: If any webhook route name contains ":", upgrade to v2026.9.21 and rotate the secrets of the weaker route. Otherwise, low exposure.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/9345c67854f6ef1ef4f68ac4b9c3ae266ecceccf
