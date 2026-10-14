---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-origin-tightens-specified-merge-gates-while-widening-app-authority-by-credential-class
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/origin#sep-21-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/origin#sep-28-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/bugbot#sep-21-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/agents-window#oct-9-2026
    precision: official_docs
  - url: https://cursor.com/docs/origin
    precision: official_docs
---
# 2026-10-13-cursor-origin-tightens-specified-merge-gates-while-widening-app-authority-by-credential-class

Origin tightens specified merge gates while widening app authority by credential class. Origin reports specific merge gates becoming stricter, not universal fail-closed behavior. Apps can act as named members through User Delegation. The inbound IP rule now follows credential class: user credentials remain covered, app and service-account credentials are excluded. An agent using a person's credential is therefore not automatically exempt. Start from scratch remains an Origin repository path when enabled; 3.24 documents a repository-free cloud-project fallback when the team disables Origin.

Channel: docs-only (hosted forge notes); tagged-release (documented 3.24 repository-free project fallback). Half: both. Date: weeks of 2026-09-21 and 2026-09-28; Agents Window 3.24 notes 2026-10-09.

Operator consequence: Review earlier merge-when-ready outcomes and required Bugbot checks satisfied by cancelled runs. Audit app delegation and credentials rather than treating the IP allowlist as an agent-wide block. Person clone/fetch audit events omit machine actors and background fetches. Check the team's Origin setting if the destination for new code matters.

## Receipt
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://cursor.com/docs/release-notes/origin#sep-21-2026
- https://cursor.com/docs/release-notes/origin#sep-28-2026
- https://cursor.com/docs/release-notes/bugbot#sep-21-2026
- https://cursor.com/docs/release-notes/agents-window#oct-9-2026
- https://cursor.com/docs/origin
