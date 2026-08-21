---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-hermes-git-pull-skill-scan-reached-v2026-8-18
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.18
    precision: github_release
  - url: https://github.com/NousResearch/hermes-agent/commit/6e22d265835fe035e648f53b9f28d772037566f0
    precision: git_commit
---
# 2026-08-20-hermes-git-pull-skill-scan-reached-v2026-8-18

Parent merge 6e22d265 (PR #88643) scans project SKILL.md dirs on an already-trusted repo so a git pull cannot inject a skill without the hub scanner. compare 6e22d265...v2026.8.16.2 is behind (not in that tag). compare 6e22d265...v2026.8.18 is ahead, behind_by=0. v2026.8.18 published 2026-08-18T07:26:46Z, prerelease=false. Release body also claims NVIDIA SkillEvaluator Tier 1 scanning on skill installs.

Channel: tagged-release. Half: both.

Operator consequence: upgrade to v2026.8.18 before widening project skill trust. v2026.8.16.2 still has the hole.

## Receipt
- https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.18
