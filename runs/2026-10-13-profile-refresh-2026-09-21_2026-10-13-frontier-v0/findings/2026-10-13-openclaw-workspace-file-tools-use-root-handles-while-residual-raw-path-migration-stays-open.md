---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-workspace-file-tools-use-root-handles-while-residual-raw-path-migration-stays-open
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/sandbox-paths.ts#L139-L210
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.read.ts#L1362-L1495
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/issues/114382
    precision: official_docs
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/src/infra/system-run-approval-binding.ts#L553-L620
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/extensions/codex/src/app-server/sandbox-exec-server/sandbox-child.ts#L126-L180
    precision: tagged_commit_file
---
# 2026-10-13-openclaw-workspace-file-tools-use-root-handles-while-residual-raw-path-migration-stays-open

Workspace file tools use root handles while residual raw-path migration stays open. The previous blanket validation-time-only description was too broad. The path validator still checks before use, but shipped workspace-only reads and edits obtain fs-safe Root handles, and writes use rootHandle.write with within-root parent-symlink handling and a pre-mutation authority guard. Issue #114382 remains open for residual raw-path consumers and the validator, not as proof of a current escape through all shipped file tools. Complete atomic coverage was not established. Current exec approval also recomputes mutable operand digests before spawn and denies drift; the sandbox child owner escalates SIGTERM to SIGKILL, waits for reaping and throws if the tree survives. The inherited August mechanisms are present on extended-stable as well.

Channel: tagged-release, inspected at 2026.10.3. Half: both. Date: 2026-10-13 posture correction and source recheck; no new window introduction date asserted.

Operator consequence: Retire the claim that every workspace file operation is only validation-time hygiene. Preserve a narrower unresolved question: which residual consumers still validate then use a raw path, and whether they adopt operation-time containment. Require an owner-level code audit and replacement of those consumers before asserting complete coverage; an open issue or an old exploit alone does not settle it.

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/sandbox-paths.ts#L139-L210
- https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.read.ts#L1362-L1495
- https://github.com/openclaw/openclaw/issues/114382
- https://github.com/openclaw/openclaw/blob/v2026.10.3/src/infra/system-run-approval-binding.ts#L553-L620
- https://github.com/openclaw/openclaw/blob/v2026.10.3/extensions/codex/src/app-server/sandbox-exec-server/sandbox-child.ts#L126-L180
