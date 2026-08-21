---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-pi-new-harness-lives-on-dev-not-on-a-tag
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/tree/a17323e5b1e766433e76a3ed7a129f640924c079
    precision: git_commit
---
# 2026-08-20-pi-new-harness-lives-on-dev-not-on-a-tag

Latest tag remains v0.84.2 (2026-08-14). compare v0.84.2...main ahead_by=83. Branch dev at a17323e5 (2026-08-20T21:09:41Z). compare main...dev ahead_by=264, behind_by=11. compare v0.84.2...dev ahead_by=336. Not a tagged-release and not default-branch.

Channel: none (feature branch). Half: capability.

Operator consequence: ignore. A v0.84.2 install does not contain the new harness. Do not treat main as the preview either.

## Receipt
- https://github.com/earendil-works/pi/tree/a17323e5b1e766433e76a3ed7a129f640924c079
