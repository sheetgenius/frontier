---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-openclaw-v2026-6-10-stable-adds-fast-auto-automatic-fast-mode-and
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.6.10
    precision: github_release
---
# 2026-07-01-openclaw-v2026-6-10-stable-adds-fast-auto-automatic-fast-mode-and

v2026.6.10 stable adds /fast auto (automatic fast mode) and hardens approval-sensitive Gateway/plugin tool policies during hook composition (channel: tagged-release, 2026-06-24). Operator consequence: Upgrade target for the window's first stable. The trusted-policy fix (#94545) closes a permission gap where a hook from a pinned Gateway registry could run while its trusted policy was invisible, so re-audit any custom plugin/hook registries after upgrading. /fast auto changes model-tier behavior mid-conversation, so watch cost/latency. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.6.10
