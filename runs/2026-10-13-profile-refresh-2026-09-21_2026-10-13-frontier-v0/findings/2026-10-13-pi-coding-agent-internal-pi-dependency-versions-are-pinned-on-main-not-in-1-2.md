---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-internal-pi-dependency-versions-are-pinned-on-main-not-in-1-2
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/f13c00fb3a4d77ad3faa815057e31d614d42b3f1
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/package.json
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-internal-pi-dependency-versions-are-pinned-on-main-not-in-1-2

Internal Pi dependency versions are pinned on main, not in 1.2.0. Main changes internal @earendil-works Pi dependency ranges from caret versions to exact release versions, including the coding-agent dependencies and Durable dependencies. The changelog identifies incompatible package combinations on fresh installs as the reason. The v1.2.0 manifest still has caret ranges. This does not pin every external transitive dependency.

Channel: main-unreleased. Half: both. Date: 2026-10-13.

Operator consequence: Keep a lockfile or use the managed installer for reproducibility today. Wait for a containing release before relying on exact internal Pi versions in a bare npm install.

## Receipt
- https://github.com/earendil-works/pi/commit/f13c00fb3a4d77ad3faa815057e31d614d42b3f1
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/package.json
