---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omp-channel-tag-ahead-of-release-recurred-three-times-and-one-release-never-reached-npm
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.1.7
    precision: github_release
---
# 2026-09-21-omp-channel-tag-ahead-of-release-recurred-three-times-and-one-release-never-reached-npm

Channel: tag-ahead-of-release recurred three times, and one release never reached npm. Carry-forward 2: v17.3.6 never gained a release or npm publish. Tag-ahead-of-release recurred (three tags). New shape: a GitHub release with no npm counterpart, so on 2026-09-03 the four install paths gave different versions.

Channel: tagged-release for 45 releases; three tags with no release; one release with no npm version. Half: neither. Date: 2026-08-21 through 2026-09-04.

Operator consequence: Do not report an OMP version from `git tag`. For 17.4.3, 17.4.4, 18.0.2, and 18.1.7 there is no npm artifact. Pin 17.4.2, 18.0.1/18.0.3, or 18.1.8 instead.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v18.1.7
