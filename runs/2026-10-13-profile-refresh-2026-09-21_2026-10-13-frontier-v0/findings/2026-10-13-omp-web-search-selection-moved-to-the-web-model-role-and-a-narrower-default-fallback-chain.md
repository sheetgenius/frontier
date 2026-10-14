---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-web-search-selection-moved-to-the-web-model-role-and-a-narrower-default-fallback-chain
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/cbe9bc206d07c4395ff465623e229d279d0dd437
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/tools/web_search.md
    precision: tagged_commit_file
---
# 2026-10-13-omp-web-search-selection-moved-to-the-web-model-role-and-a-narrower-default-fallback-chain

Web-search selection moved to the web model role and a narrower default fallback chain. The setup search picker was removed; modelRoles.web and retry.fallbackChains.web govern selection. The built-in chain favors keyless engines and web/hosted through the session model instead of automatically trying other providers' paid chat models and paid engines. Those other candidates require explicit selection. The project's free-only label does not guarantee that the existing session credential or a configured engine incurs no charge.

Channel: tagged-release. Half: both. Date: 2026-09-29 (v18.4.3).

Operator consequence: Recheck web-role and fallback settings against provider and billing policy after upgrading. Explicitly select paid alternatives when needed rather than counting on the former automatic chain.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/cbe9bc206d07c4395ff465623e229d279d0dd437
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/tools/web_search.md
