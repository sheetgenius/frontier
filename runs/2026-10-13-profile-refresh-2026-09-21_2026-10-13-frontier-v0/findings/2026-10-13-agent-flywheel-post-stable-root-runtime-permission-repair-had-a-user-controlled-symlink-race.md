---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-post-stable-root-runtime-permission-repair-had-a-user-controlled-symlink-race
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57921111a17405bc709c2fdc841b5fb3d57785cc
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/lib/update.sh#L3666-L3681
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-post-stable-root-runtime-permission-repair-had-a-user-controlled-symlink-race

Post-stable root runtime permission repair had a user-controlled symlink race. The prior post-stable repair let root chmod entries inside another user's runtime tree. That owner could swap an enumerated path for a symlink before chmod and cause root to change the target's permissions; the commit gives /tmp losing shared write access as an example. The fix skips root repair unless root owns the runtime, leaving user-owned repair to its owner. This is a conditional permission-change/denial-of-service mechanism, not a reproduced exploit or proof of remote code execution.

Channel: main-unreleased. Half: defect. Date: 2026-10-10.

Operator consequence: For main evaluations, inspect the runtime-owner guard before invoking update as root. Do not label stable vulnerable to a regression introduced after it.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57921111a17405bc709c2fdc841b5fb3d57785cc
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/lib/update.sh#L3666-L3681
