---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-paperclip-v2026-916-0-x-forwarded-host-is-honored-only-from-a-trusted-proxy
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/12832
    precision: merged_pr
---
# 2026-09-21-paperclip-v2026-916-0-x-forwarded-host-is-honored-only-from-a-trusted-proxy

v2026.916.0: X-Forwarded-Host is honored only from a trusted proxy. The same-origin guard used to accept a forwarded host from any direct client, letting a caller add its own header value to the trusted-origin set. It now requires the immediate peer to pass `TRUST_PROXY`.

Channel: tagged-release. Half: defect (closed). Date: 2026-09-16.

Operator consequence: Behind a reverse proxy, confirm `TRUST_PROXY` is set before upgrading or origin checks fall back to the raw Host header. Directly exposed pre-916.0 instances had a spoofable origin check.

## Receipt
- https://github.com/paperclipai/paperclip/pull/12832
