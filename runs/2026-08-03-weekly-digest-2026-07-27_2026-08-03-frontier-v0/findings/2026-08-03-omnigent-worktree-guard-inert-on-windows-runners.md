---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-omnigent-worktree-guard-inert-on-windows-runners
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/3856
    precision: merged_pr
  - url: https://github.com/omnigent-ai/omnigent/issues/3855
    precision: issue
  - url: https://github.com/omnigent-ai/omnigent/commit/1c6dfedce7
    precision: git_commit
---
# 2026-08-03-omnigent-worktree-guard-inert-on-windows-runners

Omnigent's worktree_guard policy -- in the project's own words 'the only write confinement for the unsandboxed implementer worker specs' -- reasoned in POSIX terms but normalised with os.path, which is ntpath on Windows and rewrites / to backslash. On a Windows runner normalized.startswith('/') was therefore never true and the absolute-path arm of the check was inert: '/etc/passwd' carries no backslash, cleared the backslash guard, became '\etc\passwd' and returned ALLOW. The .. and ~ arms survived by coincidence, so the hole was specifically absolute paths, including another worker's tree. Fixed by normalising with posixpath and rejecting drive-qualified paths; the PR pins four ALLOW-to-DENY cases verified on Windows 11 / CPython 3.11.9. Filed 2026-08-01, merged 2026-08-03. Channel: main-unreleased -- the latest tag v0.7.0 was published 2026-07-27T22:40Z and no newer tag exists, so an operator on the tagged release running Windows still has the inert arm. Scope: this is a defect in Omnigent's own policy layer and is not evidence about any harness it drives.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/3856
- https://github.com/omnigent-ai/omnigent/issues/3855
- https://github.com/omnigent-ai/omnigent/commit/1c6dfedce7
