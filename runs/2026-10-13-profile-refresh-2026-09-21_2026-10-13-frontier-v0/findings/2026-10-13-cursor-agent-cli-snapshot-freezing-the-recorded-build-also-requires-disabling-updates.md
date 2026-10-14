---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-agent-cli-snapshot-freezing-the-recorded-build-also-requires-disabling-updates
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://github.com/Homebrew/homebrew-cask/blob/471099ac3a43daa5b83ed76718493dc8255b6b67/Casks/c/cursor-cli.rb
    precision: tagged_commit_file
  - url: https://cursor.com/docs/cli/changelog#oct-8-2026
    precision: official_docs
  - url: https://cursor.com/docs/cli/installation
    precision: official_docs
---
# 2026-10-13-cursor-agent-cli-snapshot-freezing-the-recorded-build-also-requires-disabling-updates

Agent CLI snapshot: freezing the recorded build also requires disabling updates. Five observed default advances followed the September 18 baseline. The October 13 morning default was e373342 while the lab pointer named d47ca18. Newer dated notes describe some paths absent from e373342. No vendor agent-CLI digest was located; the inspected installer and updater do not verify one. The default bundle's static channel disables background checks and agent update.

Channel: tagged-release (recorded default 2026.10.01-e373342); preview-or-beta (recorded lab 2026.10.12-d47ca18); docs-only (v2026.10.08 notes). Half: both. Date: 2026-10-01 (artifact); 2026-10-13 (morning pointer observations).

Operator consequence: Retain the version-addressed archive, record its digest, set channel to static in ~/.cursor/cli-config.json and compare agent --version to the pin. A versioned download alone does not freeze updates. The inspected lab paths are a reason to test that artifact, not a guarantee that every October 8 fix is present or that it remained nightly-only at the close.

## Receipt
- https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
- https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz
- https://github.com/Homebrew/homebrew-cask/blob/471099ac3a43daa5b83ed76718493dc8255b6b67/Casks/c/cursor-cli.rb
- https://cursor.com/docs/cli/changelog#oct-8-2026
- https://cursor.com/docs/cli/installation
