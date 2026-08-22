---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-omnigent-deny-tag-push-reaches-v0-10-0
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.10.0/omnigent/policies/builtins/github.py
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.10.0
    precision: github_release
---
# 2026-08-20-omnigent-deny-tag-push-reaches-v0-10-0

Parent-window-but-one (2026-08-03 to 2026-08-10) filed deny_tag_push as nightly-only; it missed v0.9.0. v0.10.0 (2026-08-19T04:34:41Z, prerelease=false) contains it. github.py at v0.9.0 has 0 occurrences of deny_tag_push. At v0.10.0 (blob 23d5197e) there are 5, including deny_tag_push: bool = True at line 949 and the deny at lines 1179-1181. PR #3620 merge 5798d74e: compare v0.10.0...5798d74e status=behind, ahead_by=0. compare v0.9.0...5798d74e status=diverged.

Channel: tagged-release. Half: capability | security-relevant.

Operator consequence: pip install omnigent==0.10.0 now denies git push --tags, --follow-tags, and refs/tags/ refspecs by default. Opt out with deny_tag_push: false. Force-push deny was already in v0.9.0.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.10.0/omnigent/policies/builtins/github.py
- https://github.com/omnigent-ai/omnigent/blob/v0.9.0/omnigent/policies/builtins/github.py
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.10.0
