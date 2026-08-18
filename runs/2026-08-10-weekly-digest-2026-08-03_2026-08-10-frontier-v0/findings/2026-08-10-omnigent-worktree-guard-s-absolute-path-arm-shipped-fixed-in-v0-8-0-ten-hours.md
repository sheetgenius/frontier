---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-omnigent-worktree-guard-s-absolute-path-arm-shipped-fixed-in-v0-8-0-ten-hours
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/3856
    precision: merged_pr
---
# 2026-08-10-omnigent-worktree-guard-s-absolute-path-arm-shipped-fixed-in-v0-8-0-ten-hours

worktree_guard's absolute-path arm shipped fixed in v0.8.0, ten hours after the merge.

PR #3856 replaced `os.path.normpath` with `posixpath.normpath` in the `worktree_guard` policy. The bug (issue #3855, filed 2026-08-01) was that `os.path` is `ntpath` on Windows and rewrites forward slashes to backslashes, so `normalized.startswith("/")` could never be true: `/etc/passwd` passed the backslash guard as a clean forward-slash string, became `\etc\passwd`, and the policy returned ALLOW. The `..` and `~` arms survived by coincidence; the hole was specifically absolute paths, including `C:/Windows/System32/...` and UNC `//server/share`. Merged 2026-08-03T11:31:21Z; v0.8.0 was tagged and published the same day at 21:45:24Z.

Channel: tagged-release. Ancestry: gh api repos/omnigent-ai/omnigent/compare/v0.8.0...1c6dfedce7cb88186775d427f77203870b30483f -> status "behind", ahead_by 0, behind_by 34 (the fix commit is an ancestor of the v0.8.0 tag). The same compare against v0.7.0 returns status "diverged", ahead_by 374 (not in v0.7.0). Confirmed at the file level: https://raw.githubusercontent.com/omnigent-ai/omnigent/v0.8.0/omnigent/policies/builtins/orchestration.py line 589 reads `normalized = posixpath.normpath(path)` with `import posixpath` at line 12, while the same file at v0.7.0 line 586 still reads `normalized = os.path.normpath(path)`.

Operator consequence: Upgrade to v0.8.0 or later and stop tracking this one. Anyone running v0.7.0 or earlier on a Windows runner with `worktree_guard` as the only containment for unsandboxed implementer worker specs has a policy that returns ALLOW for any absolute write target; there is no config workaround, the fix is the upgrade. Note that the sibling defect is still open: issue #3852 and PR #3854 (Claude Code's MultiEdit/NotebookEdit missing from the built-in write policies) were filed the same day and remain unmerged as of this harvest.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/3856
