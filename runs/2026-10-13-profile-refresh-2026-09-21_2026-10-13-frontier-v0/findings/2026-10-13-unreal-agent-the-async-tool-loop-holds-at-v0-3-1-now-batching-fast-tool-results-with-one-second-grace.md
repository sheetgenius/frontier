---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-the-async-tool-loop-holds-at-v0-3-1-now-batching-fast-tool-results-with-one-second-grace
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L127-L141
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L200-L258
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/contextbuilder/builder.go#L16
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/commit/d9180011e739035dea09af83ba231304d852e310
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L409-L438
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L163
    precision: tagged_commit_file
---
# 2026-10-13-unreal-agent-the-async-tool-loop-holds-at-v0-3-1-now-batching-fast-tool-results-with-one-second-grace

The async tool loop holds at v0.3.1, now batching fast tool results with one-second grace windows. The core claim holds at v0.3.1. The coordinator calls the model only when tool results or new inputs require it (loop.go L127-L131). While it waits only on tools, it arms a heartbeat instead (L137-L141). The heartbeat defaults to ten minutes in the runner (run.go L163) and is hard-coded to ten minutes in the TUI (TUI run.go L262). New in the v0.3.0 Go tag and v0.3.1 binary release are two one-second grace windows. When a response dispatches tool calls, a run grace (L29, L257) holds back the next model call so quick tools can finish first. When some calls in a turn finish while their siblings still run, a completion grace (L30, L212) waits for the siblings before calling the model. The loop uses one-second run and completion timers to batch tool updates. A completion timer can be rearmed as more siblings finish, so one second is not a maximum cumulative delay per tool round. Incoming external input requests a model call and clears the tool grace (L421-L438). A running call is now an explicit `Running` result, which the final result replaces in the staged context. One correction to the profile's reading: since v0.1.1, what the model sees for a running call is the context builder's text, "Tool call is still running. Its result arrives in a later turn: continue with independent work, or end your turn to wait for it." (builder.go L16). Bash's own "Command is still running." (bash.go L55 at v0.3.1) is replaced before it reaches the model.

Channel: tagged-release. Half: capability. Date: 2026-10-06.

Operator consequence: The grace timers are intended to reduce model calls during bursts of fast commands. Their one-second constants do not bound cumulative delay, and incoming user input clears the grace. Neither fewer calls nor lower cost was measured by this source inspection. The async mechanism remains implemented; its public-release economics require the bounded evaluation in item 9. If you build on the library, key any prompt or parser on the builder's running payload, not Bash's string.

## Receipt
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L127-L141
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L200-L258
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/contextbuilder/builder.go#L16
- https://github.com/unreallabsai/unreal-agent/commit/d9180011e739035dea09af83ba231304d852e310
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L409-L438
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L163
