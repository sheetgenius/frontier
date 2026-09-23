---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omp-stored-state-fixes-cross-project-hindsight-recall-on-move-config-yml-erasure-dotenv-leakag
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
---
# 2026-09-21-omp-stored-state-fixes-cross-project-hindsight-recall-on-move-config-yml-erasure-dotenv-leakag

Stored-state fixes: cross-project Hindsight recall on `/move`, config.yml erasure, dotenv leakage. Stored state behaves more predictably: memory stays with its project, rules reload on reset instead of on restart, and a bad config no longer wipes credentials. Rules are still read from workspace files (`RULES.md`), which item 3 says load unconditionally.

Channel: tagged-release. Half: defect. Date: 2026-09-15 (v18.2.0, v18.2.1).

Operator consequence: If you `/move` between client projects with Hindsight on, upgrade to 18.2.1. Before that, a prompt after a move could write to or recall from the wrong client's memory bank. Check for `.broken-*` config backups after upgrading.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v18.2.1
