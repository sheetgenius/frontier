---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-flue-v091-websocket-security
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.9.1"
status: accepted_signal
change_type: security
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "From CHANGELOG.md v0.9.1 (2026-06-02): 'Cloudflare WebSocket attachments strip query strings and fragments before persistence so URL-carried handshake credentials are not retained.' and 'Agent and wor"
    url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
    precision: release_note
---
# WebSocket security hardening: query string stripping and requestId validation

## What Changed

Two security fixes: (1) Cloudflare WebSocket attachments strip query strings and fragments before persistence, preventing URL-carried handshake credentials from being retained. (2) Agent and workflow WebSocket frames reject blank or whitespace-only `requestId` values, including optional agent ping IDs.

## Operator Implication

Operators should no longer pass sensitive credentials in WebSocket URLs as query parameters, relying instead on secure header-based auth.

## Receipt

- [From CHANGELOG.md v0.9.1 (2026-06-02): 'Cloudflare WebSocket attachments strip query strings and fragments before persistence so URL-carried handshake credentia](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
