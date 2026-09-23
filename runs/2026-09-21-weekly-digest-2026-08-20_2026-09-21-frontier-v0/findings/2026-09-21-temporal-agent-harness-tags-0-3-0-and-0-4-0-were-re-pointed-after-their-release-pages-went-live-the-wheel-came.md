---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-temporal-agent-harness-tags-0-3-0-and-0-4-0-were-re-pointed-after-their-release-pages-went-live-the-wheel-came
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/pull/134
    precision: merged_pr
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/.github/workflows/publish.yml#L13-L19
    precision: tagged_commit_file
---
# 2026-09-21-temporal-agent-harness-tags-0-3-0-and-0-4-0-were-re-pointed-after-their-release-pages-went-live-the-wheel-came

Tags 0.3.0 and 0.4.0 were re-pointed after their release pages went live; the wheel came from a manual dispatch that skips the tag/version check. The README at 0.4.0 tells readers "A release tag marks a commit that is known-good at the moment it was cut: the tests passed" (T/README.md#L183-L187). For both PyPI-published versions that was not true of the commit the tag first named: the suite failed or was never run there, and the tag was moved to a later commit. The first 0.4.0 tag target carried pyproject version 0.3.0, the exact case the workflow's comment warns about. The version check that would catch it runs only on the `release` event; both successful PyPI uploads (0.3.0 and 0.4.0) came from `workflow_dispatch`, where that step is skipped. The versions happened to match at the final commits.

Channel: preview-or-beta (tag) plus PyPI wheel. Half: defect. Date: 2026-09-11 (0.3.0), 2026-09-15/16 (0.4.0).

Operator consequence: "Pin to a release" means the PyPI wheel, not the tag. A `git clone --branch 0.4.0` done between 2026-09-15T23:46Z and 2026-09-16T01:34Z got 16bb1bdf, which is not what PyPI ships; anyone who vendored the examples then should re-fetch and compare SHAs (`git rev-parse 0.4.0` should read e4bde4be). Treat a tag as mutable until its PyPI upload exists. Watch for: a required reviewer on the `pypi` environment, or the version check running on dispatch too.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/pull/134
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/.github/workflows/publish.yml#L13-L19
