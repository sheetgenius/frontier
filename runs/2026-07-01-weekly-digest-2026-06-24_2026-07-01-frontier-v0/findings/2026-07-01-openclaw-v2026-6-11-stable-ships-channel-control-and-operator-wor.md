---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-openclaw-v2026-6-11-stable-ships-channel-control-and-operator-wor
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.6.11
    precision: github_release
---
# 2026-07-01-openclaw-v2026-6-11-stable-ships-channel-control-and-operator-wor

v2026.6.11 stable ships channel-control and operator-workflow features: Slack relay mode, native Mattermost /oc_queue, per-DM model overrides, and openclaw agent --message-file (channel: tagged-release, 2026-06-30). Operator consequence: Operators on OpenClaw should upgrade to v2026.6.11 (commit e085fa1) to pick up per-DM model overrides, Slack relay mode, and the file-driven agent invocation path (--message-file). These change day-to-day channel routing and how a run is kicked off, so test channel config after upgrade. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.6.11
