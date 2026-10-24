---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-slack-and-discord-room-policy-binding-is-fixed-in-beta-not-stable-10
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/803744916a8f168a7c82e346bf6d37065a04780f
    precision: commit
  - url: https://github.com/openclaw/openclaw/commit/68c3f3fb660c5dd808231199b0fe265ea26086f2
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/slack/src/group-policy.ts#L81-L95
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/discord/src/group-policy.ts#L44-L62
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/extensions/slack/src/group-policy.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/extensions/discord/src/group-policy.ts
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-slack-and-discord-room-policy-binding-is-fixed-in-beta-not-stable-10

Slack and Discord room-policy binding is fixed in beta, not stable 10.7. The fixes bind startup-resolved name keys to channel IDs. Before them, a renamed Slack channel could match another configured room's tool policy, and a Discord thread could acquire policy through its chosen name. Beta preserves the binding across renames and prevents a different channel or thread from taking the same resolved name. Direct ID entries still take precedence; unresolved-name behavior and Slack's explicit dangerous name-matching option retain documented limits.

Channel: preview-or-beta. Half: defect. Date: 2026-10-15.

Operator consequence: On stable 10.7, use channel IDs for privileged per-room tool and sender policies and review existing name-based entries. Test the beta only on a separate Gateway if evaluating this repair. Human review of a friendly room label is not a durable authorization binding; this is the next stable-channel repair to watch.

## Receipt
- https://github.com/openclaw/openclaw/commit/803744916a8f168a7c82e346bf6d37065a04780f
- https://github.com/openclaw/openclaw/commit/68c3f3fb660c5dd808231199b0fe265ea26086f2
- https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/slack/src/group-policy.ts#L81-L95
- https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/discord/src/group-policy.ts#L44-L62
- https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/extensions/slack/src/group-policy.ts
- https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/extensions/discord/src/group-policy.ts
