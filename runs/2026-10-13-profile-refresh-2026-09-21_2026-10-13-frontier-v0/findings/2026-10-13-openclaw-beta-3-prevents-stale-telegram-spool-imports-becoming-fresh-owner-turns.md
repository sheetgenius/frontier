---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-beta-3-prevents-stale-telegram-spool-imports-becoming-fresh-owner-turns
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/84e5f5d130867647cf4b3677e778084b69f3b989
    precision: commit
  - url: https://github.com/openclaw/openclaw/compare/84e5f5d130867647cf4b3677e778084b69f3b989...v2026.10.5-beta.3
    precision: git_compare
  - url: https://github.com/openclaw/openclaw/compare/84e5f5d130867647cf4b3677e778084b69f3b989...v2026.10.3
    precision: git_compare
  - url: https://github.com/openclaw/openclaw/pull/170068
    precision: merged_pr
---
# 2026-10-13-openclaw-beta-3-prevents-stale-telegram-spool-imports-becoming-fresh-owner-turns

Beta.3 prevents stale Telegram spool imports becoming fresh owner turns. The legacy Telegram importer refreshed the mutation time of old pending spool messages, so months-old owner instructions could become actionable again on first startup after an update. Beta.3 classifies imports older than 24 hours as non-dispatchable stale tombstones, preserves original source bytes and import receipts, and emits one bounded warning. It intentionally forgoes genuinely unprocessed old instructions. The already-imported sweep was dropped: this repair does not clean every existing pending queue.

Channel: preview-or-beta, 2026.10.5-beta.3 only among examined channels. Half: defect. Date: 2026-10-12 merge, 2026-10-13 beta publication.

Operator consequence: Inspect Telegram pending work and the import warning when moving to beta.3. Do not present stable 10.3 as protected by this fix or assume already imported stale rows were retired. Verify inclusion in a stable release before relying on its importer, and review any older queued instructions separately.

## Receipt
- https://github.com/openclaw/openclaw/commit/84e5f5d130867647cf4b3677e778084b69f3b989
- https://github.com/openclaw/openclaw/compare/84e5f5d130867647cf4b3677e778084b69f3b989...v2026.10.5-beta.3
- https://github.com/openclaw/openclaw/compare/84e5f5d130867647cf4b3677e778084b69f3b989...v2026.10.3
- https://github.com/openclaw/openclaw/pull/170068
