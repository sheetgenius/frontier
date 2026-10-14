---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-refreshes-harbor-s-multidict-lock-to-fix-an-items-view-reference-leak
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/commit/eda665c123d57979eba8196e5b70e24a23f09c7b
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/benchmarks/harbor/uv.lock
    precision: tagged_commit_file
  - url: https://github.com/aio-libs/multidict/security/advisories/GHSA-54p9-h82j-f925
    precision: official_docs
  - url: https://api.github.com/advisories/GHSA-54p9-h82j-f925
    precision: official_docs
---
# 2026-10-13-unreal-agent-v0-3-1-refreshes-harbor-s-multidict-lock-to-fix-an-items-view-reference-leak

v0.3.1 refreshes Harbor's multidict lock to fix an items-view reference leak. The Harbor lock upgrades multidict 6.8.0 to 6.9.1. CVE-2026-104874 / GHSA-54p9-h82j-f925 affects the C extension in 6.7.0 through 6.9.0. Reflected union and subtraction on items views leak references, so repeated operations on attacker-influenced operands can drive unrecoverable memory growth. Ordinary multidict use or forward union alone does not establish reachability. The advisory identifies 6.9.1 as patched. The dependency adoption and advisory publication are in-window; no remote denial of service in Unreal Agent's Go runtime is established.

Channel: tagged-release. Half: defect. Date: 2026-10-06.

Operator consequence: Refresh the benchmark lock and determine whether its integrations perform the affected items-view operations on remote-influenced operands. The dependency version is the verified scope, not an agent exploit reproduction.

## Receipt
- https://github.com/unreallabsai/unreal-agent/commit/eda665c123d57979eba8196e5b70e24a23f09c7b
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/benchmarks/harbor/uv.lock
- https://github.com/aio-libs/multidict/security/advisories/GHSA-54p9-h82j-f925
- https://api.github.com/advisories/GHSA-54p9-h82j-f925
