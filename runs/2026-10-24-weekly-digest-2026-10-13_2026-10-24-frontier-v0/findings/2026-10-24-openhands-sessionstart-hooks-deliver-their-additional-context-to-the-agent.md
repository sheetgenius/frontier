---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-sessionstart-hooks-deliver-their-additional-context-to-the-agent
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/f8ac42498066b409a41988a3d7ea1486ff0c1347
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/hooks/conversation_hooks.py
    precision: tagged_commit_file
---
# 2026-10-24-openhands-sessionstart-hooks-deliver-their-additional-context-to-the-agent

SessionStart hooks deliver their additional context to the agent. Collected SessionStart `additionalContext` is injected after the system-prompt event as a user-role message sourced from the environment. Previously returned startup context could be lost.

Channel: tagged-release. Half: capability. Date: 2026-10-22 (SDK v1.58.0).

Operator consequence: Retest hooks supplying project context before removing duplicate prompt injection. Delivery restores useful startup information; contextual text remains different from enforced policy.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/f8ac42498066b409a41988a3d7ea1486ff0c1347
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/hooks/conversation_hooks.py
