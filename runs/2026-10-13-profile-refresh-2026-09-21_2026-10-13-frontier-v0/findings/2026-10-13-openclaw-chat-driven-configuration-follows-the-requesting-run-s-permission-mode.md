---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-chat-driven-configuration-follows-the-requesting-run-s-permission-mode
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/158120
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/pull/157447
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L118-L185
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/permission-modes.md#L39-L62
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/pull/158142#issuecomment-5845640176
    precision: merged_pr
---
# 2026-10-13-openclaw-chat-driven-configuration-follows-the-requesting-run-s-permission-mode

Chat-driven configuration follows the requesting run's permission mode. 9.7 supports owner-requested configuration, credential storage and owned-skill changes through chat and removes prompt refusals for that ordinary requested work. A pasted key gets a fresh secret-store name and never overwrites a prior entry, but the message already reached the model provider and transcript. Delegated operations use the requesting run's effective permission mode: Full Access applies the exact proposal automatically, including when inherited from the configured default. Restricted channel runs get structured approval in the requesting chat; free-text agreement cannot authorize the operation. Full Access's default behavior was already present before this window. A proposal to require a separate human decision for permission changes even under Full Access was closed unmerged; the maintainer argued that shell and file tools already permit the same change.

Channel: tagged-release. Half: both. Date: 2026-09-24 to 2026-09-26 merges, 2026-09-30 first stable; permission-change proposal closed unmerged 2026-09-26.

Operator consequence: Prefer masked setup flows to pasting keys, and delete a superseded secret entry only once nothing uses it. Set channel-facing runs to a deliberate permission mode. The effective permission mode decides the delegated approval prompt; filesystem and sandbox boundaries, tool policy, operation restrictions, live run authority and verified inference-route checks still apply. Use an existing session's live policy preview when inspecting this posture, with the limits in section 8.

## Receipt
- https://github.com/openclaw/openclaw/pull/158120
- https://github.com/openclaw/openclaw/pull/157447
- https://github.com/openclaw/openclaw/blob/v2026.9.7/CHANGELOG/2026.9.7.md
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L118-L185
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/gateway/permission-modes.md#L39-L62
- https://github.com/openclaw/openclaw/pull/158142#issuecomment-5845640176
