---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-sdk-session-resume-and-optional-ptc-memory-reduce-restart-work-without-restoring-running
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sdk/client/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/python/sdk/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/ptc-runtime/ptc-runtime-node/README.md
    precision: tagged_commit_file
  - url: https://pypi.org/pypi/deepseek-harness-sdk/0.2.1rc2/json
    precision: package_registry
---
# 2026-10-24-deepseek-harness-sdk-session-resume-and-optional-ptc-memory-reduce-restart-work-without-restoring-running

SDK session resume and optional PTC memory reduce restart work without restoring running processes. SDK callers gain `resumeSession`/`resume_session`, retaining the saved session ID, history and working directory, repairing an interrupted final turn without sending a new prompt. Missing, incompatible or occupied sessions fail instead of silently becoming new sessions. Node PTC adds optional `persistent-in-memory` execution to reuse variables, functions and modules across calls; `per-call` remains the default. Persistent memory is per agent and best effort: restart, disposal, cancellation, timeout and execution failure can clear it, and a resumed or forked session starts without that memory.

Channel: preview-or-beta. Half: capability. Date: 2026-10-14.

Operator consequence: Replace custom conversation-reconstruction glue with the resume API, but retain explicit checkpoints for external side effects and long-running processes. Reusing a session is not crash recovery of a shell, browser or tool call. The tagged [terminal contract](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/api/terminal-controller/README.md) likewise distinguishes reconnecting to a live Host process from restoring one after Host disposal. The durable primitive is session history; the attention bottleneck moves to checking which external actions actually completed.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sdk/client/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/python/sdk/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/ptc-runtime/ptc-runtime-node/README.md
- https://pypi.org/pypi/deepseek-harness-sdk/0.2.1rc2/json
