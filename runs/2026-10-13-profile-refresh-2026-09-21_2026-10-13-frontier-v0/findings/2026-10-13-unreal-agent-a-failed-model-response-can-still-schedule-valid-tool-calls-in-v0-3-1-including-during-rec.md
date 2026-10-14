---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-a-failed-model-response-can-still-schedule-valid-tool-calls-in-v0-3-1-including-during-rec
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/issues/13#issuecomment-5822471686
    precision: official_docs
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L231-L251
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L475-L494
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L633-L688
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L552-L563
    precision: tagged_commit_file
---
# 2026-10-13-unreal-agent-a-failed-model-response-can-still-schedule-valid-tool-calls-in-v0-3-1-including-during-rec

A failed model response can still schedule valid tool calls in v0.3.1, including during recovery. The coordinator rejects a Go error but does not reject Response.Failure before ingesting output, recording history and scheduling tools. If a failed model response contains a valid tool call, the source path can dispatch it. Restoration uses the same ingestion path, so recovery can recover unfinished calls from that failed response. This adds a possible side effect to item 10's misleading success status. It is a conditional source finding, not a live-provider exploit reproduction; no repository CVE was found.

Channel: tagged-release. Half: defect. Date: 2026-09-23.

Operator consequence: An embedding host that needs failed responses to be inert must enforce that before tool dispatch, including recovery. Inspecting JSONL after the run can identify false success but cannot prevent an already dispatched command. Budget and retry logic must account for this distinction between failure reporting and authority to act.

## Receipt
- https://github.com/unreallabsai/unreal-agent/issues/13#issuecomment-5822471686
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L231-L251
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L475-L494
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L633-L688
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L552-L563
