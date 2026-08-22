---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-hermes-steer-stop-and-update-honesty-reached-v2026-8-18
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/b95ec1cb5dd610130eedeb53d7b8f989737f0f35
    precision: git_commit
  - url: https://github.com/NousResearch/hermes-agent/commit/0bb239990045d8427ff593031f2768950d0e2767
    precision: git_commit
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.18
    precision: github_release
---
# 2026-08-20-hermes-steer-stop-and-update-honesty-reached-v2026-8-18

v2026.8.18 (published 2026-08-18T07:26:46Z, prerelease=false) contains two control-plane repairs the first harvest missed. PR #88934 merge b95ec1cb: list/steer/stop keyed on a weakref to the parent AIAgent object, so a mid-session rebuild (/model, credential refresh) returned "No live subagent" while the child kept running. compare v2026.8.18...b95ec1cb status=behind, ahead_by=0. PR #88928 merge 0bb23999: hermes update on a parked feature branch printed "Code updated!" and left the checkout stale. Same compare shape, behind_by=10. Same tag also contains hermes peer (6229683b) and plugin inline widgets (aeabff6a).

Channel: tagged-release. Half: both.

Operator consequence: the skill-scan upgrade is also the cut where steer/stop and hermes update stop lying. Dump git -C ~/.hermes/hermes-agent status if an earlier update claimed success.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/b95ec1cb5dd610130eedeb53d7b8f989737f0f35
- https://github.com/NousResearch/hermes-agent/commit/0bb239990045d8427ff593031f2768950d0e2767
- https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.18
