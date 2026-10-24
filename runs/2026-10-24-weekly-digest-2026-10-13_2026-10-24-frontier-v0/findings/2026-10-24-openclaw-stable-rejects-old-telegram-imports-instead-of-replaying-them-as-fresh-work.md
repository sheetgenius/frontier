---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-stable-rejects-old-telegram-imports-instead-of-replaying-them-as-fresh-work
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/84e5f5d130867647cf4b3677e778084b69f3b989
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/telegram/src/telegram-ingress-spool-migration.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/pull/170068
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.33/extensions/telegram/src/state-migrations.ts
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-stable-rejects-old-telegram-imports-instead-of-replaying-them-as-fresh-work

Stable rejects old Telegram imports instead of replaying them as fresh work. The October importer takes the oldest usable received/message timestamp and marks legacy work older than 24 hours failed with `stale-legacy-import`. It preserves legacy source evidence rather than turning stale owner instructions into a new actionable queue item. The implementation explicitly does not sweep work already imported into the current queue.

Channel: tagged-release. Half: defect. Date: 2026-10-18.

Operator consequence: Use 10.7 before legacy Telegram recovery, then inspect migration warnings and pending work. A genuinely unprocessed old instruction will also be withheld; the owner must decide whether to issue it again. The fix removes automatic replay, not the need to review recovery intent. Do not describe it as a queue cleanup or infer 9.33 behavior merely from a missing October filename.

## Receipt
- https://github.com/openclaw/openclaw/commit/84e5f5d130867647cf4b3677e778084b69f3b989
- https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/telegram/src/telegram-ingress-spool-migration.ts
- https://github.com/openclaw/openclaw/pull/170068
- https://github.com/openclaw/openclaw/blob/v2026.9.33/extensions/telegram/src/state-migrations.ts
