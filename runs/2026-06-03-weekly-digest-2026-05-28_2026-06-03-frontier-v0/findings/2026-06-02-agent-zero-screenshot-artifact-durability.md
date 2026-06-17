---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-agent-zero-screenshot-artifact-durability
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v1.19"
status: accepted_signal
change_type: capability
confidence: high
accessibility_impact: medium
actionability: test
evidence:
  - label: "v1.19 release notes: 'Durable screenshot artifacts materialized into chat-scoped storage' under Computer Use & Desktop section."
    url: https://github.com/agent0ai/agent-zero/releases
    precision: release_note
---
# Screenshot artifacts reverted to durable chat-scoped storage

## What Changed

Durable screenshot artifacts materialized into chat-scoped storage, reversing the prior ephemeral-by-default posture for computer-use operations. Screenshots are now preserved within chat contexts.

## Operator Implication

Operators must account for increased storage consumption as screenshots are now retained in chat context rather than ephemeral. This provides better audit trails and context preservation but changes memory/storage characteristics of deployments.

## Receipt

- [v1.19 release notes: 'Durable screenshot artifacts materialized into chat-scoped storage' under Computer Use & Desktop section.](https://github.com/agent0ai/agent-zero/releases)
