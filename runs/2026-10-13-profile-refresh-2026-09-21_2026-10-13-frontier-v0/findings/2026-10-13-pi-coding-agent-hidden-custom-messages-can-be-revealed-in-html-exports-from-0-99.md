---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-hidden-custom-messages-can-be-revealed-in-html-exports-from-0-99
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/b2bd111f2d46eed1a4689c32f30fde6306498827
    precision: commit
---
# 2026-10-13-pi-coding-agent-hidden-custom-messages-can-be-revealed-in-html-exports-from-0-99

Hidden custom messages can be revealed in HTML exports from 0.99.0. HTML exports add an H toggle and sidebar control that reveal custom messages marked display: false. Messages remain hidden by default in the viewer. This does not establish when the underlying data first became present in export files.

Channel: tagged-release. Half: both. Date: 2026-09-29.

Operator consequence: Treat display flags as presentation, not export redaction. Inspect exported content before sharing, including messages hidden in the terminal or initial viewer state.

## Receipt
- https://github.com/earendil-works/pi/commit/b2bd111f2d46eed1a4689c32f30fde6306498827
