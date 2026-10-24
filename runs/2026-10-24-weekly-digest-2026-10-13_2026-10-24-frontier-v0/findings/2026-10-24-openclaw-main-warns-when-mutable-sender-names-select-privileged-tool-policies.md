---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-main-warns-when-mutable-sender-names-select-privileged-tool-policies
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/16a3787ba105b71a72843941dcdf1c78634b752c
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/tool-policy.md#L230-L248
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/security/audit-channel.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/src/security/audit-channel.ts
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-main-warns-when-mutable-sender-names-select-privileged-tool-policies

Main warns when mutable sender names select privileged tool policies. A room member can change a display name or handle to match a `name:` or `username:` tool-policy override intended for someone else. Main adds `toolsBySender.mutable_entries` warnings and recommends stable `id:` keys. It keeps mutable keys supported and does not change their matching semantics. This is a sender-key warning, separate from section 14's room-name/channel-ID repair.

Channel: main-unreleased. Half: defect. Date: 2026-10-15.

Operator consequence: Inspect privileged `toolsBySender` keys now and replace mutable name/username selectors with stable IDs. Current stable and beta do not supply the warning, and a future warning will still require an owner to correct configuration.

## Receipt
- https://github.com/openclaw/openclaw/commit/16a3787ba105b71a72843941dcdf1c78634b752c
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/tool-policy.md#L230-L248
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/security/audit-channel.ts
- https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/src/security/audit-channel.ts
