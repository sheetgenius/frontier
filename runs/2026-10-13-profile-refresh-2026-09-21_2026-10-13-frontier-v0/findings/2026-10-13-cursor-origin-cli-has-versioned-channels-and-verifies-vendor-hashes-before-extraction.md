---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-origin-cli-has-versioned-channels-and-verifies-vendor-hashes-before-extraction
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://downloads.cursor.com/origin/install.sh
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz
    precision: official_docs
  - url: https://downloads.cursor.com/co/2026.10.13-04-14-45-7ea7628/darwin-arm64/co.tar.gz
    precision: official_docs
---
# 2026-10-13-cursor-origin-cli-has-versioned-channels-and-verifies-vendor-hashes-before-extraction

Origin CLI has versioned channels and verifies vendor hashes before extraction. The corrected Origin install snapshot contains distinct stable and latest version-addressed artifacts with vendor hashes. Its installer verifies the downloaded archive before extraction. The stable artifact is newer than the latest artifact in this observation. Neither the first introduction of checksum verification nor the exact pointer-selection time is established.

Channel: tagged-release (version-addressed Origin artifacts); docs-only (moving channel-pointer observation). Half: capability. Date: 2026-10-13 artifacts; installer pointers independently observed 2026-10-14.

Operator consequence: Keep Origin CLI pinning separate from agent-CLI pinning. Record channel, build and hash; do not rank builds by the latest label. Use the vendor verification mechanism without converting an October 14 pointer read into an October 13 end-of-day guarantee.

## Receipt
- https://downloads.cursor.com/origin/install.sh
- https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz
- https://downloads.cursor.com/co/2026.10.13-04-14-45-7ea7628/darwin-arm64/co.tar.gz
