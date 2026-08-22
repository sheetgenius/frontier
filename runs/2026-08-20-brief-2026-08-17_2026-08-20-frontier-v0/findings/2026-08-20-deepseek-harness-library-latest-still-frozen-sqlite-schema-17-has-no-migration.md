---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-deepseek-harness-library-latest-still-frozen-sqlite-schema-17-has-no-migration
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/packages/session/session-persistence-sqlite/src/schema.ts
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.8
    precision: github_release
---
# 2026-08-20-deepseek-harness-library-latest-still-frozen-sqlite-schema-17-has-no-migration

At SHA 141eb6fe (dsh-v0.1.0-rc.8), session-persistence-sqlite SCHEMA_VERSION is 17. At the parent pin 99f6f02 (rc.7) it is 15. A mismatch throws; the tree says the prerelease package supplies no migration. Default compositions still use JSONL; SQLite is opt-in.

npm library `latest` tags on the subagent packages remain 0.0.1-rc.1 (2026-08-10). That version has no `dsh.bundle` field. Window-close `next` was 0.1.0-rc.8. The CLI entry package is the one whose `latest` moved with rc.8. PyPI deepseek-harness-sdk published 0.1.0rc7 on 2026-08-18 and has no 0.1.0rc8.

Channel: preview-or-beta. Half: defect.

Operator consequence: pin `@deepseek-ai/dsh-subagent-claude-code@0.1.0-rc.8` (and the Codex twin). Bare latest is not a Profile Bundle. Do not open an rc.7 SQLite session database with rc.8.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/packages/session/session-persistence-sqlite/src/schema.ts
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.8
