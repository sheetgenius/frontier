---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omp-eval-became-the-orchestration-surface-bash-patterns-still-does-not-gate
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/blob/v18.2.8/docs/approval-mode.md#L72
    precision: tagged_commit_file
---
# 2026-09-21-omp-eval-became-the-orchestration-surface-bash-patterns-still-does-not-gate

`eval` became the orchestration surface; `bash.patterns` still does not gate it. Capability: an operator can now fan work out to pooled subagents, define tools in Python or JS and hand them to subagents, and drive browser and desktop, all from one eval cell. Defect: the tool that now concentrates the most authority is the one the parent flagged as outside `bash.patterns`, and the default approval mode is still `yolo`. The window adds no eval-specific pattern gate. It does add opt-in `bash.allowCompoundCommands` (v18.1.11) for `&&` chains, and removes the bash tool's `env` parameter (v18.2.7).

Channel: tagged-release. Half: both. Date: 2026-08-21 (v17.4.1), 2026-09-03 (v18.1.7), 2026-09-04 (v18.1.9); doc re-read at v18.2.8.

Operator consequence: If you rely on `bash.patterns`, set `tools.approval.eval: prompt` (or `deny`) now; the pattern policy covers even less of the agent's reach than on 2026-08-20. Scripts using eval `parallel()`/`pipeline()`, Ruby/Julia cells, or the old browser/computer tool schemas break on 18.1.7/18.1.9. Pin 18.1.6 if you need them.

## Receipt
- https://github.com/can1357/oh-my-pi/blob/v18.2.8/docs/approval-mode.md#L72
