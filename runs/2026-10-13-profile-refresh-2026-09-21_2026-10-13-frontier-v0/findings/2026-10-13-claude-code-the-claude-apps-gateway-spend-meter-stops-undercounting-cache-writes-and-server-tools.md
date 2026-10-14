---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-the-claude-apps-gateway-spend-meter-stops-undercounting-cache-writes-and-server-tools
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L827
    precision: tagged_commit_file
---
# 2026-10-13-claude-code-the-claude-apps-gateway-spend-meter-stops-undercounting-cache-writes-and-server-tools

The Claude apps gateway spend meter stops undercounting cache writes and server tools. The gateway meter understated two types of usage, making meter-based limits looser than intended. It now prices 1-hour cache writes at their own rate and includes later model-call input on streamed turns using a server tool such as web search.

Channel: tagged-release (on stable from 2026-10-08). Half: defect. Date: 2026-09-30 (2.1.286).

Operator consequence: Re-check limit thresholds and reconcile older gateway totals against billing records. A higher reported total can be corrected accounting rather than greater usage. The receipt establishes a meter fix, not a changed API invoice.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L827
