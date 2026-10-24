---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-main-adds-explicit-extra-writable-roots-and-rejects-redirected-or-unsupported-grants
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/6b71dcad85b11ac6683002b761718e4f1483073c
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/64ece4cac12839d98a9ccb84af879e8e122d2a54
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/sandbox/sandbox-policy/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/sandbox/sandbox-local/README.md
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-main-adds-explicit-extra-writable-roots-and-rejects-redirected-or-unsupported-grants

Main adds explicit extra writable roots and rejects redirected or unsupported grants. Main allows deployment-configured `additionalWritableRoots` under Workspace Write, including an explicitly chosen shared Git administration directory for linked worktrees. It does not discover or grant a parent repository automatically. Enforcing hosts reject invalid or redirected grants. Windows ACL subprocess enforcement refuses extra roots as unsupported before creating grants or a child; filesystem tooling can enforce them separately. The grants apply across sessions in that composition. Startup must receive the configuration again after restart, which can happen through saved YAML without manual re-entry.

Channel: main-unreleased. Half: both. Date: 2026-10-18.

Operator consequence: This could eliminate switching an entire agent to Full access just to operate a linked worktree, but no current tag contains it. Watch for a release and backend-specific tests before changing trial instructions. Choose the exact shared metadata directory and account for the composition-wide scope. This is an additional permission primitive, not a demonstrated repair of the older Linux or spawn CVEs.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/6b71dcad85b11ac6683002b761718e4f1483073c
- https://github.com/deepseek-ai/deepseek-harness/commit/64ece4cac12839d98a9ccb84af879e8e122d2a54
- https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/sandbox/sandbox-policy/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/packages/sandbox/sandbox-local/README.md
