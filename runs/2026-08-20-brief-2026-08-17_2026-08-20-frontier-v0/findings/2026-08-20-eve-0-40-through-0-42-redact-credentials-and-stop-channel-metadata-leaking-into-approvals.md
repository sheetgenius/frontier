---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-eve-0-40-through-0-42-redact-credentials-and-stop-channel-metadata-leaking-into-approvals
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.42.0
    precision: github_release
---
# 2026-08-20-eve-0-40-through-0-42-redact-credentials-and-stop-channel-metadata-leaking-into-approvals

eve@0.40.0 (2026-08-20T04:55:55Z) redacts brokered credential transforms in sandbox bootstrap logs. eve@0.41.0 (2026-08-20T20:33:52Z) adds a Linq iMessage/SMS channel and rebuilds approval policies on durable continuations. eve@0.42.0 (2026-08-20T21:06:06Z) prevents channel HITL responses from carrying channel-local metadata into session-inbox payloads. 0.43 and 0.44 are 2026-08-21, out of window.

Channel: tagged-release. Half: both.

Operator consequence: upgrade to 0.42.0 if humans approve from a channel. Treat the Linq channel as an approval path.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.42.0
- https://github.com/vercel/eve/releases/tag/eve%400.40.0
- https://github.com/vercel/eve/releases/tag/eve%400.41.0
