---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-pi-coding-agent-v0-80-3-adds-read-only-rpc-session-inspection-get-entrie
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/pull/6078
    precision: merged_pr
---
# 2026-07-01-pi-coding-agent-v0-80-3-adds-read-only-rpc-session-inspection-get-entrie

v0.80.3 adds read-only RPC session inspection: get_entries and get_tree let external orchestrators read session entries and the session tree over RPC (channel: tagged-release, 2026-06-30). Operator consequence: Watch/try: teams embedding Pi via RPC (adapters, external orchestrators) can now recover full session state after a restart and read branch structure before compaction without scraping the TUI. This is the operator-facing extension of Pi's SDK/RPC surface and stays true to the harness's no-built-in-governance posture — Pi exposes state so YOUR orchestrator can own recovery, rather than owning it internally. Ships in stable tag v0.80.3; also newly exports ./rpc-entry to launch Pi directly in RPC mode. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/earendil-works/pi/pull/6078
