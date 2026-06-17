---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-flue-v091-error-handling
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.9.1"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "From CHANGELOG.md v0.9.1 (2026-06-02): 'Cloudflare agent WebSockets now return a correlated error frame when persisted session restoration fails before a prompt.'"
    url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
    precision: release_note
---
# Cloudflare WebSocket error handling for session restoration

## What Changed

Cloudflare agent WebSockets now return a correlated error frame when persisted session restoration fails before a prompt, improving error visibility.

## Operator Implication

Operators can now better diagnose Cloudflare WebSocket session restoration failures through correlated error frames.

## Receipt

- [From CHANGELOG.md v0.9.1 (2026-06-02): 'Cloudflare agent WebSockets now return a correlated error frame when persisted session restoration fails before a prompt](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
