---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openclaw-seven-stables-in-20-days-with-release-gates-visibly-waived
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.4
    precision: github_release
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.9.5
    precision: github_release
---
# 2026-09-21-openclaw-seven-stables-in-20-days-with-release-gates-visibly-waived

Seven stables in 20 days, with release gates visibly waived. The parent window was zero releases. This window shipped a stable roughly every three days. The v2026.9.4 and v2026.9.5 release pages no longer carry notes; they link docs.openclaw.ai and a `CHANGELOG/<version>.md` at raw main. That file 404s at v2026.9.4, and `CHANGELOG/2026.9.5.md` exists at v2026.9.5.

Channel: tagged-release. Half: defect. Date: 2026-08-31 to 2026-09-19.

Operator consequence: For 9.4 and 9.5, the release page states which qualification lanes were skipped. Read that before auto-updating a production Gateway. The beta channel currently gives you nothing ahead of stable.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.4
- https://github.com/openclaw/openclaw/releases/tag/v2026.9.5
