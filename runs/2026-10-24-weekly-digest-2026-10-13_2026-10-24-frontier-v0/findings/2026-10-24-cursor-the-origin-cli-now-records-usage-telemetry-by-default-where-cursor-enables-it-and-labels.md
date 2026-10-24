---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-the-origin-cli-now-records-usage-telemetry-by-default-where-cursor-enables-it-and-labels
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz
    precision: official_docs
  - url: https://web.archive.org/web/20261024093319/https://cursor.com/docs/origin/cli
    precision: official_docs
---
# 2026-10-24-cursor-the-origin-cli-now-records-usage-telemetry-by-default-where-cursor-enables-it-and-labels

The Origin CLI now records usage telemetry by default where Cursor enables it, and labels each run as human, Cursor agent or other agent. The Origin CLI gained opt-out usage telemetry. Its own message says it records which commands run and how they end, never their arguments; the record also carries the repository slug and whether a human, a Cursor agent or another agent ran the command. The local spool carries an account hash; transmitted events carry the generic author category and repository, under the caller's authenticated identity. Whether any account currently has the server flag on is not visible from outside.

Channel: tagged-release (present in Origin CLI stable artifact 2026.10.23-18-47-36-f52be1e and latest 2026.10.24-05-09-43-624e85d; absent from 2026.10.13-14-06-43-ea1dfe5). Half: both. Date: 2026-10-23.

Operator consequence: Where policy limits telemetry from developer tools, set `ORIGIN_NO_TELEMETRY=1` (or `DO_NOT_TRACK=1`) in shells, CI and agent environments; the variable works even where the `set-telemetry` command is hidden. The client recognizes environment markers from other harnesses, but sends only human, cursor_agent or other_agent rather than naming a rival harness. Review the authenticated repository-level usage disclosure in your tool policy.

## Receipt
- https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz
- https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz
- https://web.archive.org/web/20261024093319/https://cursor.com/docs/origin/cli
