---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-custom-stream-functions-must-return-assistantmessageeventstream-from-1-1
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/36a686ee8dd73afe8242011db387040890e24093
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.1.0/packages/ai/CHANGELOG.md#L5-L12
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-custom-stream-functions-must-return-assistantmessageeventstream-from-1-1

Custom stream functions must return AssistantMessageEventStream from 1.1.0. Custom stream functions must return AssistantMessageEventStream; a handwritten generic EventStream subclass no longer type-checks in its place. The change also records response durationMs and optional tool-result durationMs. Deferred results fetched later remain untimed.

Channel: tagged-release. Half: both. Date: 2026-10-07.

Operator consequence: Use createAssistantMessageEventStream or the concrete AssistantMessageEventStream contract in custom adapters. Keep measured response/tool durations distinct from deferred work with no recorded duration.

## Receipt
- https://github.com/earendil-works/pi/commit/36a686ee8dd73afe8242011db387040890e24093
- https://github.com/earendil-works/pi/blob/v1.1.0/packages/ai/CHANGELOG.md#L5-L12
