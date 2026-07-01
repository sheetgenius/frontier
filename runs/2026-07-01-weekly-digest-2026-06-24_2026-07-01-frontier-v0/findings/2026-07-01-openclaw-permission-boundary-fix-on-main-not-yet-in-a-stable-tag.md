---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-openclaw-permission-boundary-fix-on-main-not-yet-in-a-stable-tag
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: medium
evidence:
  - url: https://github.com/openclaw/openclaw/pull/98256
    precision: merged_pr
---
# 2026-07-01-openclaw-permission-boundary-fix-on-main-not-yet-in-a-stable-tag

Permission-boundary fix on main (not yet in a stable tag): only authenticated channel owners can approve Claude Code permission requests via text reply (channel: main-unreleased, 2026-06-30). Operator consequence: Watch for this to reach a tag (v2026.6.12). It closes a real authority gap: previously any channel participant sending 'yes <id>'/'no <id>' could resolve a pending Claude permission prompt; now the reply must come from an authenticated owner (role===user AND senderIsOwner===true), failing closed otherwise. Operators running OpenClaw in shared channels should track this and upgrade once tagged. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/openclaw/openclaw/pull/98256
