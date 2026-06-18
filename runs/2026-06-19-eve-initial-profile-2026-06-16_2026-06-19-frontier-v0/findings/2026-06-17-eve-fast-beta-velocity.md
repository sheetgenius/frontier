---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-17-eve-fast-beta-velocity
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-16
  end: 2026-06-19
versions_covered: "eve@0.10.0..eve@0.11.5"
status: accepted
confidence: high
accessibility_impact: low
operator_relevance: high
actionability: note
evidence:
  - label: "vercel/eve releases (cadence and version history)"
    url: https://github.com/vercel/eve/releases
    precision: tagged_release
  - label: "eve@0.11.5 (latest release in window, 2026-06-18)"
    url: https://github.com/vercel/eve/releases/tag/eve@0.11.5
    precision: tagged_release
---
# Eve fast beta velocity: a stability calibration note

## What this is

Eve moved fast in its first days. The [releases
surface](https://github.com/vercel/eve/releases) shows the initial public
release eve@0.10.0 advancing to [eve@0.11.5](https://github.com/vercel/eve/releases/tag/eve@0.11.5)
within the window, with multiple releases landing in a short span and breaking
changes arriving on minor versions (for example, the approval-gate stream event
and the connection-tool gate fix both shipped in the 0.11.x line). Eve is a
public beta under Vercel beta terms.

## Why it matters

This is a calibration finding, not a capability one. The velocity is evidence
that the API is still settling: a primitive observed today may move next week.
For the profile, it sets the stability band. Eve is worth watching as category
evidence and an authority-gate reference, but its individual primitives should
not be treated as architectural precedent while the beta churns at this rate.

## Operator consequence

- Plan for API churn: pin versions and read release notes per upgrade rather than
  tracking `latest`.
- Do not adopt Eve where production stability guarantees are required at this
  stage; it is a fast-moving public beta.
