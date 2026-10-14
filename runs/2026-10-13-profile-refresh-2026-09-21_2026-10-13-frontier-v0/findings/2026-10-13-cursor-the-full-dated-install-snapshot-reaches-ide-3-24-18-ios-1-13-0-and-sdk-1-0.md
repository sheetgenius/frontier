---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-the-full-dated-install-snapshot-reaches-ide-3-24-18-ios-1-13-0-and-sdk-1-0
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://downloads.cursor.com/production/be4c9e5350d77747b42cd467cbd3370a753d464b/darwin/arm64/Cursor-darwin-arm64.dmg
    precision: official_docs
  - url: https://github.com/Homebrew/homebrew-cask/commit/1631cd110809dda09cbd4054146f5ca488037879
    precision: commit
  - url: https://itunes.apple.com/lookup?id=6767085653&country=us
    precision: official_docs
  - url: https://apps.apple.com/us/app/cursor/id6767085653
    precision: official_docs
  - url: https://registry.npmjs.org/@cursor%2fsdk/1.0.37
    precision: official_docs
  - url: https://pypi.org/pypi/cursor-sdk/1.0.37/json
    precision: package_registry
  - url: https://github.com/cursor/sdk-bridge/releases/tag/v1.0.37
    precision: github_release
  - url: https://cursor.com/download
    precision: official_docs
---
# 2026-10-13-cursor-the-full-dated-install-snapshot-reaches-ide-3-24-18-ios-1-13-0-and-sdk-1-0

The full dated install snapshot reaches IDE 3.24.18, iOS 1.13.0 and SDK 1.0.37. The original morning IDE snapshot omitted 3.24.18 later that day, and the mobile notes omitted store version 1.13.0. SDK 1.0.37 remains the current registry release; next still resolves to an old beta. Protocol-repository tags and vendor bridge checksums are not evidence of executable enforcement. The inspected 1.0.37 package also carries typed computer-use events not described in the release notes.

Channel: tagged-release (vendor artifacts, App Store and package releases); docs-only (moving download pointers observed October 14). Half: capability. Date: 2026-10-13 (IDE artifact); 2026-10-06 (Apple release); 2026-10-07 (SDK registries).

Operator consequence: Install the IDE from Cursor's download page, iOS from Apple's store, and pin @cursor/sdk@1.0.37 or cursor-sdk==1.0.37 where embedding. Verify the returned version instead of treating the newest note as the newest install. Do not infer that every published safety repair has been runtime tested at these versions.

## Receipt
- https://downloads.cursor.com/production/be4c9e5350d77747b42cd467cbd3370a753d464b/darwin/arm64/Cursor-darwin-arm64.dmg
- https://github.com/Homebrew/homebrew-cask/commit/1631cd110809dda09cbd4054146f5ca488037879
- https://itunes.apple.com/lookup?id=6767085653&country=us
- https://apps.apple.com/us/app/cursor/id6767085653
- https://registry.npmjs.org/@cursor%2fsdk/1.0.37
- https://pypi.org/pypi/cursor-sdk/1.0.37/json
- https://github.com/cursor/sdk-bridge/releases/tag/v1.0.37
- https://cursor.com/download
