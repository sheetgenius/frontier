---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-undici-8-10-2-replaces-a-dependency-version-matching-ten-advisories
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.69.0
    precision: github_release
  - url: https://github.com/vercel/eve/commit/21e11d0ced7d17f166f943790e2fc4f025a205b6
    precision: commit
  - url: https://github.com/vercel/eve/blob/eve%400.68.0/packages/eve/package.json
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/package.json
    precision: tagged_commit_file
  - url: https://github.com/advisories/GHSA-pmjh-fq2x-6v4x
    precision: official_docs
  - url: https://github.com/advisories/GHSA-r53p-7pc4-xj5r
    precision: official_docs
  - url: https://github.com/advisories/GHSA-rfgv-xxqx-mfg5
    precision: official_docs
  - url: https://github.com/advisories/GHSA-3xpg-4rpp-hhhm
    precision: official_docs
  - url: https://github.com/advisories/GHSA-2jfj-6hjv-fm6j
    precision: official_docs
  - url: https://github.com/advisories/GHSA-2gqq-gqf2-x968
    precision: official_docs
  - url: https://github.com/advisories/GHSA-w293-vg96-wgc3
    precision: official_docs
  - url: https://github.com/advisories/GHSA-8436-99hf-9mmv
    precision: official_docs
  - url: https://github.com/advisories/GHSA-rx4f-c7p8-82vq
    precision: official_docs
  - url: https://github.com/advisories/GHSA-3wwx-pv8p-q78v
    precision: official_docs
---
# 2026-10-13-eve-undici-8-10-2-replaces-a-dependency-version-matching-ten-advisories

Undici 8.10.2 replaces a dependency version matching ten advisories. The dependency update covers ten vulnerable ranges that include 8.9.0 and name 8.10.2 as patched. The required API scopes are retry bodies that hang (CVE-2026-18149), retry response splitting with a forwarder that preserves stale framing (18540), unrequested WebSocket subprotocol crashes (19534), decompression-interceptor memory exhaustion (84890), shared-cache cookie replay to another user (84933), dump-interceptor truncation (84947), BalancedPool dropping custom TLS/connector callbacks (84961), unsafe-method cache replay skipping origin work (85008), locked-writer WebSocketStream close crashes (85014), and malformed compressed WebSocket crashes (85024). Default certificate checks are not all disabled by the BalancedPool bug. These are dependency matches, not ten demonstrated Eve exploits.

Channel: tagged-release. Half: defect. Date: 2026-10-01 (eve@0.69.0); advisories published 2026-09-28 and 2026-09-29 by API timestamps.

Operator consequence: Keep the patched dependency or upgrade Eve, and inspect whether the affected cache, interceptor, pool or WebSocket APIs are actually used. The dependency advisory lane remains useful even though no Eve-specific advisory was found. API dates were checked instead of relying on rendered advisory HTML.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.69.0
- https://github.com/vercel/eve/commit/21e11d0ced7d17f166f943790e2fc4f025a205b6
- https://github.com/vercel/eve/blob/eve%400.68.0/packages/eve/package.json
- https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/package.json
- https://github.com/advisories/GHSA-pmjh-fq2x-6v4x
- https://github.com/advisories/GHSA-r53p-7pc4-xj5r
- https://github.com/advisories/GHSA-rfgv-xxqx-mfg5
- https://github.com/advisories/GHSA-3xpg-4rpp-hhhm
- https://github.com/advisories/GHSA-2jfj-6hjv-fm6j
- https://github.com/advisories/GHSA-2gqq-gqf2-x968
- https://github.com/advisories/GHSA-w293-vg96-wgc3
- https://github.com/advisories/GHSA-8436-99hf-9mmv
- https://github.com/advisories/GHSA-rx4f-c7p8-82vq
- https://github.com/advisories/GHSA-3wwx-pv8p-q78v
