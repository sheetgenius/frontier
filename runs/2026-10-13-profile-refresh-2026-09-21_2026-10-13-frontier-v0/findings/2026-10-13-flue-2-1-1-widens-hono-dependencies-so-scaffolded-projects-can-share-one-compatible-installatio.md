---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-1-1-widens-hono-dependencies-so-scaffolded-projects-can-share-one-compatible-installatio
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/commit/7841ff899805dc708d589a8852cb8ad74cf93ba2
    precision: commit
  - url: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L52
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.1
    precision: github_release
---
# 2026-10-13-flue-2-1-1-widens-hono-dependencies-so-scaffolded-projects-can-share-one-compatible-installatio

2.1.1 widens Hono dependencies so scaffolded projects can share one compatible installation. Flue packages and scaffolded apps can resolve a compatible Hono installation through ^4.12.32. The earlier exact runtime pin could coexist with a newer root Hono and cause fresh projects to fail typecheck. This is a dependency compatibility fix, not a new agent capability.

Channel: tagged-release. Half: defect. Date: 2026-09-23 (2.1.1 publication; code committed 2026-09-21).

Operator consequence: For a new app failing typecheck because two Hono versions disagree, move the Flue package set to at least 2.1.1, preferably the current 2.3.0 pin, and inspect the resolved dependency tree. Keep the lockfile; the broadened range does not freeze Hono's future behavior.

## Receipt
- https://github.com/withastro/flue/commit/7841ff899805dc708d589a8852cb8ad74cf93ba2
- https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L52
- https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.1
