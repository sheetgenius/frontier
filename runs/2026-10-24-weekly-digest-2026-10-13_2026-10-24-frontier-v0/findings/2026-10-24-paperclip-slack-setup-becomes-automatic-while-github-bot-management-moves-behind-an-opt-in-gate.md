---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-slack-setup-becomes-automatic-while-github-bot-management-moves-behind-an-opt-in-gate
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/SLACK-AUTOMATIC-SETUP.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/GITHUB-REVIEW-BOT.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0
    precision: github_release
---
# 2026-10-24-paperclip-slack-setup-becomes-automatic-while-github-bot-management-moves-behind-an-opt-in-gate

Slack setup becomes automatic, while GitHub bot management moves behind an opt-in gate. New Slack drafts default to a temporary app-configuration-token flow that creates the manifest and proceeds through human OAuth consent; existing manual drafts remain manual. Unknown remote creation outcomes require inspection rather than blind repeat creation. GitHub review setup becomes agent selection plus GitHub connection, with App-owned progress and a commit-specific Paperclip Review check. Its passing score is configurable from 1 to 5. Formal GitHub approve/request-changes publication is a separate opt-in; a 5/5 assessment alone is not an approval. Self-hosted managed GitHub setup depends on Cloud enrollment/callback handling. The new GitHub review flag defaults off but existing bots keep delivering while their management UI is hidden.

Channel: tagged-release. Half: both. Date: 2026-10-24.

Operator consequence: Use v2026.1023.0 to remove manual Slack app setup and to make review state consumable by branch protection. Review Cloud dependence, GitHub installation access and formal-review settings before enabling. Treat the flag as UI exposure, not a kill switch for an existing bot. The saved setup steps can reduce attention spent wiring integrations; a status check still supplies evidence for a human or policy decision, not evidence that every review is correct.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/SLACK-AUTOMATIC-SETUP.md
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/GITHUB-REVIEW-BOT.md
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0
