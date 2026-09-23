---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omp-v18-2-1-closes-a-cluster-of-approval-bypasses-including-one-where-a-missing-context-resolv
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.2.1
    precision: github_release
  - url: https://github.com/can1357/oh-my-pi/pull/11400
    precision: merged_pr
---
# 2026-09-21-omp-v18-2-1-closes-a-cluster-of-approval-bypasses-including-one-where-a-missing-context-resolv

v18.2.1 closes a cluster of approval bypasses, including one where a missing context resolved to `yolo`. Through v18.2.0, per the v18.2.1 notes: (a) a tool executed without an execute-time context resolved as `yolo` with empty policies instead of prompting; four call paths (`ExtensionToolWrapper.execute`, Cursor `refuseByWritePolicy`, `mcpApprovalPreflight`, eval prelude host calls) had their own copies and now share one helper that fails closed to `always-ask`; (b) advisor tools were built outside the loop that wraps every registry tool, so an advisor granted `write` or `bash` ran them regardless of configured approval; (c) Cursor bridge frames bypassed approval: `pi_grep` with `context`/`limit` skipped `tools.approval.grep`, and the native `delete` frame removed files with no approval wrapper; (d) read-only subagents could be given the process-executing `hub` tool (#11044).

Channel: tagged-release. Half: defect. Date: 2026-09-15 (merged and released).

Operator consequence: If you run OMP with any `tools.approval.*` policy, or use advisors or the Cursor provider, upgrade to 18.2.1 or later and assume policies were partly advisory on earlier 18.x. Re-audit sessions that used advisors with write/bash, or Cursor with a delete deny. This is the release to pin at minimum, not 18.2.0.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v18.2.1
- https://github.com/can1357/oh-my-pi/pull/11400
