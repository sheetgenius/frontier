---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-typescript-conversation-limits-now-reach-the-server
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/1fbfd37f6fb21491ed733fc92d409aff1517ff4a
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/clients/typescript/src/conversation/conversation-manager.ts
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/clients/typescript/src/conversation/remote-conversation.ts
    precision: tagged_commit_file
---
# 2026-10-24-openhands-typescript-conversation-limits-now-reach-the-server

TypeScript conversation limits now reach the server. `ConversationManager.createConversation` forwards `maxIterations` and `stuckDetection` into start, and remote conversation creation respects constructor defaults. The comment changes from a claimed 50-iteration default to the actual 500 fallback.

Channel: tagged-release. Half: both. Date: 2026-10-19 (SDK and TypeScript client v1.56.0).

Operator consequence: Retest integrations whose run budgets relied on previously ignored constructor settings. This repairs a control path; it is not a new lower global default or a monetary cap. Record an actual stop before retiring an external iteration guard.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/1fbfd37f6fb21491ed733fc92d409aff1517ff4a
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/clients/typescript/src/conversation/conversation-manager.ts
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/clients/typescript/src/conversation/remote-conversation.ts
