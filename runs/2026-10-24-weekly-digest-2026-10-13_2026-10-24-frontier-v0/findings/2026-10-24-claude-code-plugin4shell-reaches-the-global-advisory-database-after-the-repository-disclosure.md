---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-plugin4shell-reaches-the-global-advisory-database-after-the-repository-disclosure
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/advisories/GHSA-pq7j-f95f-qfcv
    precision: official_docs
  - url: https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv
    precision: official_docs
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.179
    precision: github_release
---
# 2026-10-24-claude-code-plugin4shell-reaches-the-global-advisory-database-after-the-repository-disclosure

Plugin4Shell reaches the global advisory database after the repository disclosure. GitHub's global advisory record was published at 2026-10-15T20:22:07Z and updated one second later. Repository disclosure remains 9 October. A malicious plugin upstream could replace a reviewed commit with attacker-controlled code by supplying a branch named like the commit hash; the fixed build remains 2.1.179.

Channel: tagged-release. Half: defect. Date: 2026-10-15.

Operator consequence: Inventory manually pinned older installations and plugin sources against the fixed build. Treat the later database entry as disclosure visibility, not a second vulnerability or October patch. A repository-only advisory scan does not cover later global indexing.

## Receipt
- https://github.com/advisories/GHSA-pq7j-f95f-qfcv
- https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv
- https://github.com/anthropics/claude-code/releases/tag/v2.1.179
