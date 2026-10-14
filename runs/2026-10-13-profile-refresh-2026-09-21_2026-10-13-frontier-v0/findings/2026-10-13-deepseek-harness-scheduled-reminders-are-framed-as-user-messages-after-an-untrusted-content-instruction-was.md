---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-scheduled-reminders-are-framed-as-user-messages-after-an-untrusted-content-instruction-was
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/af39300572bf4494370a1d0be19ce3c1ff330d36
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/.agents/notes/implemented/architecture/2026-09-24-scheduled-message-framing.md#L15
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/bundle/web-app/presets/standard.patch.yml#L35-L36
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-scheduled-reminders-are-framed-as-user-messages-after-an-untrusted-content-instruction-was

Scheduled reminders are framed as user messages after an untrusted-content instruction was removed. Due reminders now use the framing "This is a scheduled message from the user" instead of the instruction to present reminder text as untrusted content. The model can write reminders after reading web pages, files or command output. The source records the risk of that text arriving under user-origin framing; no successful prompt-injection exploit is claimed.

Channel: preview-or-beta; Schedule optional/off on rc, tools enabled in alpha Web Standard. Half: defect. Date: 2026-09-29 (0.2.0-rc.2).

Operator consequence: Leave Schedule off when that trust conversion is unacceptable. If enabled, inspect reminder text before it fires. Alpha Web Standard enables its tools by default; disable tool-schedule there if needed. The decision note says a demonstrated injection would trigger reconsideration of the removed clause.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/af39300572bf4494370a1d0be19ce3c1ff330d36
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/.agents/notes/implemented/architecture/2026-09-24-scheduled-message-framing.md#L15
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/bundle/web-app/presets/standard.patch.yml#L35-L36
