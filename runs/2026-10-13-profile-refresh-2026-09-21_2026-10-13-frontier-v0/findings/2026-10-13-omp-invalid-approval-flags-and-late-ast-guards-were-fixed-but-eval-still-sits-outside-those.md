---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-invalid-approval-flags-and-late-ast-guards-were-fixed-but-eval-still-sits-outside-those
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/blob/v18.4.2/packages/coding-agent/src/cli/flag-tables.ts#L229-L238
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/commit/30f0e6806f02f41a83839664769ef36d4e1326ef
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/231fb4f9ebfab0d80604743ced743cb9408e1edf
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/876af5084f1bdfc11410c2ad4426a0e5cab0ac20
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/ttsr-coordinator.ts#L294-L306
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L75-L90
    precision: tagged_commit_file
---
# 2026-10-13-omp-invalid-approval-flags-and-late-ast-guards-were-fixed-but-eval-still-sits-outside-those

Invalid approval flags and late AST guards were fixed, but eval still sits outside those barriers. Since v18.4.3 an invalid --approval-mode exits 2 before ordinary or ACP operation instead of quietly using configured policy, normally yolo. Since v18.4.1 directly dispatched AST-conditioned TTSR guards are awaited before execution. Previously the late check deterministically allowed writes on chat-completions end-of-stream paths; other transports were timing-dependent. Eval-bridged calls still receive only a reminder after execution. bash.patterns deny rules do not apply to commands spawned through eval, which keeps ambient filesystem, network and subprocess access. The eval computer API is disabled by default; its read_only guard is not a general JavaScript sandbox.

Channel: tagged-release. Half: defect. Date: 2026-09-28 (v18.4.1); 2026-09-29 (v18.4.3).

Operator consequence: Re-run launch scripts to find invalid approval flags. Gate eval with tools.approval.eval: prompt or deny when bash patterns or AST rules matter. Prompting removes unattended eval autonomy; a deny removes that execution surface entirely.

## Receipt
- https://github.com/can1357/oh-my-pi/blob/v18.4.2/packages/coding-agent/src/cli/flag-tables.ts#L229-L238
- https://github.com/can1357/oh-my-pi/commit/30f0e6806f02f41a83839664769ef36d4e1326ef
- https://github.com/can1357/oh-my-pi/commit/231fb4f9ebfab0d80604743ced743cb9408e1edf
- https://github.com/can1357/oh-my-pi/commit/876af5084f1bdfc11410c2ad4426a0e5cab0ac20
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/ttsr-coordinator.ts#L294-L306
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L75-L90
