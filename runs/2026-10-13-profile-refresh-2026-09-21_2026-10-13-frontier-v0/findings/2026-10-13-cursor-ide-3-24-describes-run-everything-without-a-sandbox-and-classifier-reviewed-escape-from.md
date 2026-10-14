---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-ide-3-24-describes-run-everything-without-a-sandbox-and-classifier-reviewed-escape-from
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/release-notes/ide#oct-9-2026
    precision: official_docs
  - url: https://web.archive.org/web/20260921222031/https://cursor.com/docs/agent/security/run-modes
    precision: official_docs
  - url: https://cursor.com/docs/agent/security/run-modes
    precision: official_docs
  - url: https://cursor.com/docs/reference/permissions
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
---
# 2026-10-13-cursor-ide-3-24-describes-run-everything-without-a-sandbox-and-classifier-reviewed-escape-from

IDE 3.24 describes Run Everything without a sandbox and classifier-reviewed escape from sandbox restrictions. The IDE 3.24 release note says Run Everything now runs without the sandbox unless permissions.json restricts the mode. It also reports approval cards for matching block instructions and risky deletes. Current docs permit the backend classifier to review a sandbox-refused command for rerun outside the sandbox and to read local files for that review. They name Gemini by default and Haiku fallback, and say Auto-review is not a security boundary.

Channel: tagged-release (IDE 3.24 family); docs-only (current run-mode and classifier documentation). Half: both. Date: 2026-10-09 (IDE 3.24 notes); independent archived-to-live doc comparison 2026-09-21..2026-10-14.

Operator consequence: At the dated close, use IDE 3.24.18 and choose a sandboxed run mode when containment matters. Auto-review can approve an unsandboxed retry without a human, so it does not replace containment. Blocking Haiku can disable Auto-review. Verify the documented exception before relying on permissions.json; no field or runtime test here establishes it.

## Receipt
- https://cursor.com/docs/release-notes/ide#oct-9-2026
- https://web.archive.org/web/20260921222031/https://cursor.com/docs/agent/security/run-modes
- https://cursor.com/docs/agent/security/run-modes
- https://cursor.com/docs/reference/permissions
- https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
