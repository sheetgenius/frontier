---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-incognito-content-is-excluded-from-four-diagnostic-writers-after-9
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/21aa89f744af426d1c9b1d5d7d40960abf1e7465
    precision: commit
  - url: https://github.com/openclaw/openclaw/compare/21aa89f7...v2026.9.7
    precision: git_compare
  - url: https://github.com/openclaw/openclaw/pull/155595
    precision: merged_pr
---
# 2026-10-13-openclaw-incognito-content-is-excluded-from-four-diagnostic-writers-after-9

Incognito content is excluded from four diagnostic writers after 9.7. Enabled diagnostic writers could record Incognito model content. The 9.7 repair excludes it from cache traces, Anthropic payload logs, raw-stream logs and WebSocket event summaries while keeping live conversation delivery and content-free diagnostics. Existing logs are not deleted. The repair does not restrict ordinary tools, promise privacy from external providers or establish exclusion from every telemetry path.

Channel: tagged-release, first 2026.9.7, retained at 10.3. Half: defect. Date: 2026-09-23 merge, 2026-09-30 first stable.

Operator consequence: If content diagnostics were enabled before 9.7, review their retention and any retained Incognito content rather than assuming an upgrade erased it. Use a fixed version for the four named writers and retain the separate provider-data and tool-write decisions.

## Receipt
- https://github.com/openclaw/openclaw/commit/21aa89f744af426d1c9b1d5d7d40960abf1e7465
- https://github.com/openclaw/openclaw/compare/21aa89f7...v2026.9.7
- https://github.com/openclaw/openclaw/pull/155595
