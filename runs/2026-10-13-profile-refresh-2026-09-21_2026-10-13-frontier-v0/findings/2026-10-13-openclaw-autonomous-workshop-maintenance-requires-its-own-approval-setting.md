---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-autonomous-workshop-maintenance-requires-its-own-approval-setting
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.5/docs/tools/skill-workshop/configuration.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/skill-workshop/configuration.md#L68-L84
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/self-learning.md#L127-L180
    precision: tagged_commit_file
---
# 2026-10-13-openclaw-autonomous-workshop-maintenance-requires-its-own-approval-setting

Autonomous Workshop maintenance requires its own approval setting. The old profile's approvalPolicy pending recommendation was incomplete. Autonomous Workshop maintenance defaults to auto and uses ordinary agent file tools, without proposals, a post-turn scanner or automatic rollback snapshots. approvalPolicy controls proposal apply/reject/quarantine decisions rather than that direct-maintenance path. The background run inherits the source session's permissions, tool limits and shell policy, and file tools stay rooted in the Workshop directory. This is a correction to the dated posture, not a newly shipped window default; 8.35 predates this setting.

Channel: tagged-release. Half: both. Date: 2026-10-13 posture correction; behavior already present at 2026.9.5 before this window.

Operator consequence: Set skills.workshop.autonomous.mode to propose or off as well as approvalPolicy pending when background proposal review is required. If keeping auto, back up the workshop-skills directory because direct edits have no automatic rollback snapshot. Off stops autonomous maintenance, not every explicit manual learning or skill-edit path.

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.9.5/docs/tools/skill-workshop/configuration.md
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/skill-workshop/configuration.md#L68-L84
- https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/tools/self-learning.md#L127-L180
