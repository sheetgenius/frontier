---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-per-surface-release-notes-supplement-the-changelog-and-expose-note-backfills
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20260924032107/https://cursor.com/docs/cli/changelog
    precision: official_docs
  - url: https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
    precision: official_docs
  - url: https://web.archive.org/web/20261013185441/https://cursor.com/changelog/origin-app-marketplace
    precision: official_docs
  - url: https://cursor.com/docs/release-notes
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/rss.xml
    precision: official_docs
  - url: https://github.com/cursor/cursor/tree/654b1b4775ca67aef473bd31a14c8c04a1abde2d
    precision: official_docs
---
# 2026-10-13-cursor-per-surface-release-notes-supplement-the-changelog-and-expose-note-backfills

Per-surface release notes supplement the changelog and expose note backfills. Versioned per-product notes and an index feed supplement the existing changelogs. CLI headings were relabeled and at least two earlier-dated entries were backfilled after September 24. The full window has three main entries, including Origin App Marketplace on October 13. Product implementation remains closed; the public tracker is not its source, and release notes are now a material security surface alongside advisories.

Channel: docs-only. Half: capability. Date: restructuring established between 2026-09-24T03:21Z and 2026-10-07T02:09Z; third main entry 2026-10-13.

Operator consequence: Follow the per-surface feed rather than only the main changelog. Treat a note's displayed date as a vendor label unless independently pinned. October 5 cloud and Bugbot weeks observed later cannot be treated as known pre-close omissions without a publication snapshot. Versioned CLI bytes can establish inspected behavior but do not supply whole-product source ancestry.

## Receipt
- https://web.archive.org/web/20260924032107/https://cursor.com/docs/cli/changelog
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://web.archive.org/web/20261013185441/https://cursor.com/changelog/origin-app-marketplace
- https://cursor.com/docs/release-notes
- https://cursor.com/docs/release-notes/rss.xml
- https://github.com/cursor/cursor/tree/654b1b4775ca67aef473bd31a14c8c04a1abde2d
