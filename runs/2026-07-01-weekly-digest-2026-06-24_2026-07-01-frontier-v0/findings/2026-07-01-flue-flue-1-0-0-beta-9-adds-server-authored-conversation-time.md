---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-flue-flue-1-0-0-beta-9-adds-server-authored-conversation-time
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: medium
evidence:
  - url: https://github.com/withastro/flue/blob/v1.0.0-beta.9/CHANGELOG.md
    precision: official_changelog
---
# 2026-07-01-flue-flue-1-0-0-beta-9-adds-server-authored-conversation-time

flue 1.0.0-beta.9 adds server-authored conversation timestamps, fixes Cloudflare Durable Object agent-context init, and releases the database adapter packages (@flue/libsql, @flue/mongodb, @flue/mysql, @flue/postgres, @flue/redis) on the beta line. (channel: preview-or-beta, 2026-06-30). Operator consequence: Ecosystem expansion: Flue now ships five first-party persistence adapters (@flue/libsql, @flue/mongodb, @flue/mysql, @flue/postgres, @flue/redis) on the beta line, broadening deployment/persistence targets beyond Cloudflare. Anyone assessing Flue's deployment surface should observe this widening of the storage membrane; the timestamp/DO-context items are reliability fixes riding on the beta.8 rework. Tag commit 607d261. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/withastro/flue/blob/v1.0.0-beta.9/CHANGELOG.md
