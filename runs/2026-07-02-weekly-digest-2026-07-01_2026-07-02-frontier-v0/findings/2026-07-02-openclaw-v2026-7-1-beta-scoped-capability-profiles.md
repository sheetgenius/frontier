---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-openclaw-v2026-7-1-beta-scoped-capability-profiles
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.1
    precision: github_release
---
# OpenClaw beta adds scoped capability profiles

OpenClaw `v2026.7.1-beta.1` ships external harness attach, Telegram Codex pairing
and steering, event-driven cron, usage footers, mobile refresh, scoped
conversation capability profiles, approval-mode rename to `ask`, malformed
response bounding, Windows allowlist binding, and approval-state preservation.
Channel: preview-or-beta. Operator consequence: authority-shaping work is present,
but it is not yet a stable tag.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.1
