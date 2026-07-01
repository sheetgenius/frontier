---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-eve-hitl-approval-resume-contract-repaired-text-replies-like
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve@0.16.1
    precision: github_release
---
# 2026-07-01-eve-hitl-approval-resume-contract-repaired-text-replies-like

HITL approval resume contract repaired: text replies like "approve" now resolve pending tool approvals; unrelated follow-ups no longer synthesize a false denial; rejection results carry explicit approval metadata (channel: tagged-release, 2026-06-27). Operator consequence: Directly changes the behavior operators rely on at the approval gate. Before this, an operator's "approve" text reply could fail to resolve a pending tool call, and an unrelated message mid-pause could be read as a denial. Teams using Eve's human-in-the-loop gate should upgrade to >=0.16.1 and re-audit any approval flows exercised on 0.15.x/0.16.0. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve@0.16.1
