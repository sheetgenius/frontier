---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-stable-repairs-resumed-session-deletion-duplicate-tool-responses-and-rapid-exit-history
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/486ae2cd3edd45cfe00ae0f138e9c62916370ab3
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/d3c70e73cb731e5d6945f9fd8eb449253567c84f
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/commit/204db94ae2a33f70afec7400ebf6b78f1b5e2575
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/utils/sessionUtils.ts#L108-L320
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/services/chatRecordingService.ts#L1327-L1370
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-stable-repairs-resumed-session-deletion-duplicate-tool-responses-and-rapid-exit-history

Stable repairs resumed-session deletion, duplicate tool responses and rapid-exit history. Resume reconstruction scans subsequent user/function-response turns up to the next model turn, deduplicates responses by call ID and only synthesizes missing responses. Empty-session cleanup waits for initialization, preserves resumed sessions and checks resumable content before deletion. Rapid-exit handling waits up to one second for cancellation bookkeeping, and cancelled calls receive terminal records. These are distinct history repairs, not proof that every external child process has stopped.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: Use 0.65.0 for jobs that must survive cancellation and resume. Retest a resumed session followed immediately by exit, a tool call followed by repeated Ctrl+C, and a resumed multi-call turn. Receipt readers still must distinguish cancellation records and synthetic responses from completed work. Less repair work falls to the operator; the remaining judgment is whether the interrupted action actually finished outside the transcript.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/486ae2cd3edd45cfe00ae0f138e9c62916370ab3
- https://github.com/google-gemini/gemini-cli/commit/d3c70e73cb731e5d6945f9fd8eb449253567c84f
- https://github.com/google-gemini/gemini-cli/commit/204db94ae2a33f70afec7400ebf6b78f1b5e2575
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/utils/sessionUtils.ts#L108-L320
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/core/src/services/chatRecordingService.ts#L1327-L1370
