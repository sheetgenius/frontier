---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-main-stops-rollback-backoff-from-suppressing-repaired-upstream-releases
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/0166c3285ec6e08db3c92bc91fd09aeea7d14520
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/38ec8cda5a9d4ef45ae710eeb7f83b0809926f4c
    precision: commit
---
# 2026-10-13-agent-flywheel-main-stops-rollback-backoff-from-suppressing-repaired-upstream-releases

Main stops rollback backoff from suppressing repaired upstream releases. After smoke-check failures, the updater kept an earlier binary when available and backed off retries for days, including after an upstream fix. One patch lifts backoff when installer bytes change; the second detects a new GitHub release behind an unchanged installer. Holds still win, failed release lookup retains backoff, and old records lacking release metadata can still need an explicit retry. The stranded-host examples are maintainer reports, not independently observed outcomes.

Channel: main-unreleased. Half: both. Date: 2026-10-13.

Operator consequence: A repaired upstream release is not proof an affected host retried it. On stable, inspect backoff state and perform a supervised retry only after confirming the fix; on main, check whether the record contains the metadata needed for the new comparison.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/0166c3285ec6e08db3c92bc91fd09aeea7d14520
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/38ec8cda5a9d4ef45ae710eeb7f83b0809926f4c
