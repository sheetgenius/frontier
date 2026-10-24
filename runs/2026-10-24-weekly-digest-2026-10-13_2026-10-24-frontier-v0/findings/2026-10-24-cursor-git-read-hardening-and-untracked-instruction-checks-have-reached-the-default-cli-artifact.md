---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-git-read-hardening-and-untracked-instruction-checks-have-reached-the-default-cli-artifact
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/ide#oct-14-2026
    precision: official_docs
---
# 2026-10-24-cursor-git-read-hardening-and-untracked-instruction-checks-have-reached-the-default-cli-artifact

Git-read hardening and untracked-instruction checks have reached the default CLI artifact. The current git wrapper inserts `--no-ext-diff --no-textconv` for diff, show, blame, log and whatchanged and removes conflicting flags. Reused checkouts receive extra `ls-files --others` checks for agent configuration, including a second path for selected ignored configuration; leftovers refuse reuse. The IDE 3.25 notes separately report external-diff/textconv hardening, trusted-link wildcard repair and admin repository-blocklist handling. These are specified execution paths, not a blanket statement that opening any repository cannot execute code.

Channel: tagged-release. Half: defect. Date: 2026-10-22 default artifact; IDE notes 2026-10-14.

Operator consequence: Upgrade workers still on the parent default and repeat a dirty-checkout qualification before sharing pools across trust levels. Two previously lab-only profile claims can become current-default observations. Fewer stale instructions should reduce cross-job contamination and manual cleanup, but no cleanup run was executed, and this comparison does not settle the separate git fsmonitor allegation.

## Receipt
- https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
- https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz
- https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
- https://cursor.com/docs/release-notes/ide#oct-14-2026
