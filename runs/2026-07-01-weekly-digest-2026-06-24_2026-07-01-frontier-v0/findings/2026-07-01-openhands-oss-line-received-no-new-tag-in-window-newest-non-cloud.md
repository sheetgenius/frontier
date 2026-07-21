---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-openhands-oss-line-received-no-new-tag-in-window-newest-non-cloud
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/tags
    precision: official_docs
---
# 2026-07-01-openhands-oss-line-received-no-new-tag-in-window-newest-non-cloud

OSS line received NO new tag in-window: newest non-cloud tag is still 1.8.0 (2026-06-10) (channel: main-unreleased, 2026-06-24). Operator consequence: Self-hosted / OSS operators get no security relief this window: the dependency-CVE fixes that landed on main and were cut into cloud-1.39.0/1.40.0 are NOT available in any OSS release tag. Anyone pinning to OSS 1.8.0 remains exposed to the pyjwt/tornado/aiohttp/opentelemetry/protobufjs/ws CVE set unless they build from main. Watch for an OSS 1.9.0. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/OpenHands/OpenHands/tags
