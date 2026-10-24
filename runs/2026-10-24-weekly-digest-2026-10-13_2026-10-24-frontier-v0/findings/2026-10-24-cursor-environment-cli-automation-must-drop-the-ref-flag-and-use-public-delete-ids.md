---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-environment-cli-automation-must-drop-the-ref-flag-and-use-public-delete-ids
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/cli/changelog#oct-15-2026
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
---
# 2026-10-24-cursor-environment-cli-automation-must-drop-the-ref-flag-and-use-public-delete-ids

Environment CLI automation must drop the ref flag and use public delete IDs. `agent env get` no longer accepts `--ref`; `agent env delete` requires the public ID shown by list instead of the old numeric ID. Get also lists personal saved environments.

Channel: tagged-release. Half: both. Date: 2026-10-15.

Operator consequence: Update saved identifiers and scripts before rerunning destructive automation. The redeploy command in section 2 is an addition; it does not preserve this removed flag or the numeric-ID contract.

## Receipt
- https://cursor.com/docs/cli/changelog#oct-15-2026
- https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
