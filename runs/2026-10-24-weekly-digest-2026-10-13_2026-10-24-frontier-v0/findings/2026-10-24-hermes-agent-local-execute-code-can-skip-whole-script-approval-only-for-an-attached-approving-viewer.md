---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-local-execute-code-can-skip-whole-script-approval-only-for-an-attached-approving-viewer
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/91e4f3f9d921069837211cf5939ba044d6a853ee
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/021468f4b30e8b1ace1d30705291d2fb0f95885b
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/4e0806d5dcffe35656fa6ac907b9305802c71d2e
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/approval.py#L1198-L1283
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-local-execute-code-can-skip-whole-script-approval-only-for-an-attached-approving-viewer

Local execute_code can skip whole-script approval only for an attached approving viewer. A local CLI/TUI/Desktop/ACP session's own viewer-submitted foreground turn skips the whole-script execute_code prompt only when an approval-capable viewer is attached, a notifier exists and the context is not a delegated child. Individual `terminal()` guards remain. This exemption does not extend to injected/plugin, automation, delegated or detached/read-only-viewer turns. Separate configured bypass and isolated-backend paths still exist.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Retest policies that assumed every gateway-hosted Python script prompts as a whole. Direct Python file or subprocess effects bypass terminal command guards, so use process confinement for that boundary. This removes a repeated interactive prompt without establishing equivalence between guarded terminal calls and arbitrary Python effects.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/91e4f3f9d921069837211cf5939ba044d6a853ee
- https://github.com/NousResearch/hermes-agent/commit/021468f4b30e8b1ace1d30705291d2fb0f95885b
- https://github.com/NousResearch/hermes-agent/commit/4e0806d5dcffe35656fa6ac907b9305802c71d2e
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/approval.py#L1198-L1283
