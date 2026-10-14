---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-stable-v0-64-0-appends-session-patches-and-serializes-local-writes
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/29568
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/chatRecordingTypes.ts#L132-L152
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/chatRecordingService.ts#L1494-L1506
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/fileSystemService.ts#L45-L101
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/gitService.ts#L198-L218
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/ui/hooks/useFolderTrust.ts#L82-L85
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/pull/29558
    precision: merged_pr
---
# 2026-10-13-gemini-cli-stable-v0-64-0-appends-session-patches-and-serializes-local-writes

Stable v0.64.0 appends session patches and serializes local writes. Stable 0.64.0 appends $patch records instead of repeatedly rewriting the complete message list. Its recording service limits cachedConversation.messages to the last 50 messages, not every in-memory history copy; full history is reconstructable from disk. Edit/write operations and shadow-repository checkpoint snapshots use in-process path locks, and file writes use a sibling temporary file and rename. This is not cross-process locking. CLI persistent state gains atomic writes/backup recovery, and the headless UI receives the resolved folder-trust state. The PR author's 8.2-million-character/400-MB example is an attributed measurement, not a verifier benchmark.

Channel: tagged-release. Half: both. Date: 2026-10-13.

Operator consequence: Update session readers to apply $patch before adopting 0.64.0; old $set-only readers can miss changed tool results. Prefer its write/checkpoint serialization within one process, but coordinate separate agent processes yourself. Inspect the full on-disk record when a cached history view is insufficient.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/29568
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/chatRecordingTypes.ts#L132-L152
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/chatRecordingService.ts#L1494-L1506
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/fileSystemService.ts#L45-L101
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/services/gitService.ts#L198-L218
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/ui/hooks/useFolderTrust.ts#L82-L85
- https://github.com/google-gemini/gemini-cli/pull/29558
