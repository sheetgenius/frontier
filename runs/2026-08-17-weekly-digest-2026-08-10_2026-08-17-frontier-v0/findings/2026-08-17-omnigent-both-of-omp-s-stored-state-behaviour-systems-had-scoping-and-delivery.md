---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omnigent-both-of-omp-s-stored-state-behaviour-systems-had-scoping-and-delivery
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: medium
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v17.3.0
    precision: github_release
---
# 2026-08-17-omnigent-both-of-omp-s-stored-state-behaviour-systems-had-scoping-and-delivery

Both of OMP's stored-state behaviour systems had scoping and delivery defects fixed this window.

Hindsight memory, OMP's server-side memory backend, had two defects fixed in this window. v17.2.9 (2026-08-05): `autoRecall` intermittently never reached the model, because two recall paths shared a `hasRecalledForFirstTurn` flag and the `agent_start` path could consume it first, injecting only through an unawaited background prompt rebuild that a fast turn outran; `beforeAgentStartPrompt`, awaited before the turn builds, is now the sole injection path (issue #7568). v17.3.0 (2026-08-13): Hindsight scoping was splitting one repository across multiple scopes on case-sensitive filesystems, now fixed by lowercasing the project label. Separately on the rules side, docs/rulebook-matching-pipeline.md at v17.3.5 documents that TTSR (Time Traveling Stream Rules) and rulebook rules are discovered from in-workspace sources  --  native `.omp` rules, OMP plugin roots, agents, Cursor, Windsurf, Cline and GitHub providers  --  and that rule identity and precedence are name-based only, so two different files sharing a `name` are treated as the same logical rule.

Channel: tagged-release. Ancestry: Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.3.0, published_at 2026-08-13T07:02:57Z, prerelease=false. The earlier of the two fixes is in https://github.com/can1357/oh-my-pi/releases/tag/v17.2.9, published_at 2026-08-05T01:32:09Z. Both changelog sections pinned at https://github.com/can1357/oh-my-pi/blob/v17.3.0/packages/coding-agent/CHANGELOG.md.

Operator consequence: Upgrade, and treat memory-driven behaviour as non-deterministic before v17.3.0. An intermittent autoRecall means two identical sessions could have had different context, and a scope split means recall could be reading a different repository's memories than you expect  --  neither is visible in the transcript. The doc fact is the one to carry forward rather than act on: rules that steer the agent are loaded from files inside the repository being worked on, and precedence is decided by name alone, so a repository under review can present a rule whose name collides with one of yours. I did not probe that, so it is a reading of the documented pipeline, not a demonstrated defect.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v17.3.0
