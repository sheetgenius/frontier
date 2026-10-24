---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-cli-resume-no-longer-replays-tool-calls-completed-before-a-pause
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/cli/changelog#oct-17-2026
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
---
# 2026-10-24-cursor-cli-resume-no-longer-replays-tool-calls-completed-before-a-pause

CLI resume no longer replays tool calls completed before a pause. Completed tool calls no longer run a second time when the agent resumes after a pause. A new message during pending approval also no longer falsely reports that the user cancelled or interrupted it.

Channel: tagged-release. Half: defect. Date: 2026-10-17.

Operator consequence: Recheck pause/resume with an observable harmless side effect before relying on it for non-idempotent work. This concerns agent execution; readiness and worker drain checks do not cover it.

## Receipt
- https://cursor.com/docs/cli/changelog#oct-17-2026
- https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
