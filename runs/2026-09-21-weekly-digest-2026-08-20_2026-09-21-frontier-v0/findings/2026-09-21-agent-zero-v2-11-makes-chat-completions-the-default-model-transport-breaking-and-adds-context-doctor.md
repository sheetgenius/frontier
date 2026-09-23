---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-zero-v2-11-makes-chat-completions-the-default-model-transport-breaking-and-adds-context-doctor
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/releases/tag/v2.11
    precision: github_release
---
# 2026-09-21-agent-zero-v2-11-makes-chat-completions-the-default-model-transport-breaking-and-adds-context-doctor

v2.11 makes Chat Completions the default model transport (breaking) and adds Context Doctor, which rewrites model output before dispatch. The release notes call this breaking. A provider that relied on the implicit Responses transport must now opt in. OpenAI, Azure and GitHub Copilot are pinned to Chat Completions. Codex/ChatGPT and xAI Grok OAuth stay on Responses. Context Doctor repairs malformed tool-call JSON before dispatch and handles thoughts-only replies. In v2.12 it leaves native function calls alone (b41f0e53f6). The v2.11 notes say per-chunk security hooks and strict tool validation still run while streaming.

Channel: tagged-release. Half: both. Date: 2026-08-27.

Operator consequence: After upgrading, re-test any custom or gateway provider. It may have changed transport without telling you. Know that the tool call that runs can be a repaired version of what the model emitted. When you audit a tool call, compare the logged repaired output with the raw model output.

## Receipt
- https://github.com/agent0ai/agent-zero/releases/tag/v2.11
