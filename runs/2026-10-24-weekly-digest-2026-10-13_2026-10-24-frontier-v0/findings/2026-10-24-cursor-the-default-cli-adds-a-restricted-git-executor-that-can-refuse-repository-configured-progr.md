---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-the-default-cli-adds-a-restricted-git-executor-that-can-refuse-repository-configured-progr
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
  - url: https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
---
# 2026-10-24-cursor-the-default-cli-adds-a-restricted-git-executor-that-can-refuse-repository-configured-progr

The default CLI adds a restricted Git executor that can refuse repository-configured programs. The called no-repo-programs executor permits a fixed set of Git verbs, rejects help and unsafe submodule/worktree flags, pins configuration, disables lazy fetch and interactive helpers, and reads filter configuration where necessary to disable repository filters or refuse the operation. Local-exec and generated-file detection call it; this is additional to section 6.

Channel: tagged-release. Half: both. Date: 2026-10-22 artifact.

Operator consequence: Qualify custom-filter, submodule and unusual-worktree repositories: a read can now return an explicit refusal. Existing fsmonitor overrides predate this executor, so this is neither an fsmonitor affected/fixed pair nor a blanket Git-execution guarantee.

## Receipt
- https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
- https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
- https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz
