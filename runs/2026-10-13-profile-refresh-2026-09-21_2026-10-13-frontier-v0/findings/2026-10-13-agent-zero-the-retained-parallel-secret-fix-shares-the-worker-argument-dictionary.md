---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-the-retained-parallel-secret-fix-shares-the-worker-argument-dictionary
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/4d94c3b173ee42ceb64f99eb8ef493254417bde9
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/parallel_tools.py#L643
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/pull/1901
    precision: merged_pr
  - url: https://github.com/agent0ai/agent-zero/issues/1838
    precision: official_docs
---
# 2026-10-13-agent-zero-the-retained-parallel-secret-fix-shares-the-worker-argument-dictionary

The retained parallel secret fix shares the worker argument dictionary. Parallel workers previously held a shallow copy before pre-execution hooks replaced secret placeholders in the original dictionary. Tools reading self.args could therefore send literal aliases and fail authentication. The retained fix assigns tool.args = tool_args. aa8e1c042a is an ancestor of stable, but its recursive implementation is not retained. Issue #1838 is still open; this record does not establish why. The confirmed failure mechanism leaves placeholders unresolved; this record does not demonstrate secret-value disclosure.

Channel: tagged-release. Half: defect. Date: 2026-09-23 (first stable; PR merged 2026-09-18).

Operator consequence: Use v2.13 or later for this parallel-call path, with v2.14 the current recommendation. Re-test an authenticated parallel operation without logging credentials. Inspect the file at the tag when tracking a fix: ancestry can survive a revert. Do not carry forward the earlier profile's unresolved leak direction or treat the reverted recursive patch as proof that arbitrary nested substitutions now work.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/4d94c3b173ee42ceb64f99eb8ef493254417bde9
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/parallel_tools.py#L643
- https://github.com/agent0ai/agent-zero/pull/1901
- https://github.com/agent0ai/agent-zero/issues/1838
