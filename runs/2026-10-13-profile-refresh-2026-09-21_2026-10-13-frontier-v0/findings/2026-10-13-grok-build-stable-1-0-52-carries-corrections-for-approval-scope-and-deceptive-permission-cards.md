---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-stable-1-0-52-carries-corrections-for-approval-scope-and-deceptive-permission-cards
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.48.external.md?generation=1790903532775974
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.49.external.md?generation=1790966793575972
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
    precision: official_docs
---
# 2026-10-13-grok-build-stable-1-0-52-carries-corrections-for-approval-scope-and-deceptive-permission-cards

Stable 1.0.52 carries corrections for approval scope and deceptive permission cards. The vendor documents grants wider than the approval UI advertised and fixes available by stable 1.0.52. A shell Allow once had applied to the session; MCP calls could draw fake option rows; unrelated keystrokes could approve calls; TUI-launched hooks and tools could reach the terminal used for approvals. These notes establish reported defects and fixes, not that any particular server exploited a user.

Channel: tagged-release (1.0.48 and 1.0.49 changes in cumulative 1.0.50 notes; 1.0.51 changes in stable 1.0.52 notes). Half: defect. Date: 2026-10-02..2026-10-12 (build-note dates and current stable availability).

Operator consequence: Run 1.0.52. Review pre-1.0.49 shell Allow once decisions as potentially session-wide grants, and inspect calls approved through affected MCP cards. Re-test the cards and approval modes your policy relies on after upgrading. An upgrade repairs the documented mechanism; it cannot reconstruct a prior user decision.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.48.external.md?generation=1790903532775974
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.49.external.md?generation=1790966793575972
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
