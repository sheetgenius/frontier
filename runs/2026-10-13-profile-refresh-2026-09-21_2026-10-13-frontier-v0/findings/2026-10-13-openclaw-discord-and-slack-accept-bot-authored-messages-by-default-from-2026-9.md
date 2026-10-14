---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-discord-and-slack-accept-bot-authored-messages-by-default-from-2026-9
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/b078de41c413403542f847ac484c42d904b9fbaf
    precision: commit
  - url: https://github.com/openclaw/openclaw/pull/157091
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/slack/access-control.md#L242-L248
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/discord/troubleshooting.md#L103-L108
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/bot-loop-protection.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/audit-checks.md#L140-L147
    precision: tagged_commit_file
---
# 2026-10-13-openclaw-discord-and-slack-accept-bot-authored-messages-by-default-from-2026-9

Discord and Slack accept bot-authored messages by default from 2026.9.7. An omitted allowBots now means true on Discord and Slack, including existing installations after updating to 9.7. Explicit false stays disabled; mentions still requires a mention. Normal channel access and mention rules, self-message filtering and the bot-pair rate guard remain. That rate guard limits fast exchanges, not every sustained conversation. Slack additionally requires the sending bot to be allowed or an explicit owner present in the room; the cited Discord rule has no equivalent Slack owner-presence guard. Extended-stable 8.35 does not inherit this default flip.

Channel: tagged-release. Half: both. Date: 2026-09-24 merge, 2026-09-30 first stable.

Operator consequence: Set allowBots explicitly before upgrading a shared Gateway: false excludes bot-authored turns and mentions requires a mention. Check Discord rooms with requireMention false first. The audit catalog documents no dedicated allowBots check; inspect this setting explicitly. General open-channel or cross-agent checks may still report exposure, so catalog silence is not proof that every runtime audit ignores it.

## Receipt
- https://github.com/openclaw/openclaw/commit/b078de41c413403542f847ac484c42d904b9fbaf
- https://github.com/openclaw/openclaw/pull/157091
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/slack/access-control.md#L242-L248
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/discord/troubleshooting.md#L103-L108
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/channels/bot-loop-protection.md
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/security/audit-checks.md#L140-L147
