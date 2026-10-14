---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-web-search-hooks-lose-the-ability-to-rewrite-calls-to-restrict-domains
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
    precision: official_docs
---
# 2026-10-13-grok-build-web-search-hooks-lose-the-ability-to-rewrite-calls-to-restrict-domains

Web-search hooks lose the ability to rewrite calls to restrict domains. A policy implemented by rewriting web-search domains no longer has that mechanism. The new per-domain WebFetch approval grants are a different tool surface and do not replace it.

Channel: tagged-release (included in stable 1.0.52 notes). Half: defect. Date: 2026-10-09 (1.0.51 note).

Operator consequence: Inspect hooks that rewrite search-domain inputs before upgrading. Replace the control with a documented applicable boundary, or disable the search route until one exists. Do not treat a web-fetch grant as a search-domain restriction.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
