---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-antigravity-1-0-15-1-0-16-changelog-not-tagged
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: medium
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/2939422297ba014da627961f4e387fad0e151f47/CHANGELOG.md
    precision: git_blob_sha
---
# 2026-07-02-antigravity-1-0-15-1-0-16-changelog-not-tagged

The Antigravity CLI changelog at commit `2939422297ba014da627961f4e387fad0e151f47`
lists 1.0.15 and 1.0.16 changes, including live subagent/background-task status,
permissions reload from disk, dynamic subagent-definition fixes, empty pre-tool
hook decision handling, retries, and shutdown leak fixes. Public tag/release URLs
for those versions did not resolve during harvest. Channel: pinned-changelog-only.
Operator consequence: record the motion, but do not promote it as a tagged release
signal.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/2939422297ba014da627961f4e387fad0e151f47/CHANGELOG.md
