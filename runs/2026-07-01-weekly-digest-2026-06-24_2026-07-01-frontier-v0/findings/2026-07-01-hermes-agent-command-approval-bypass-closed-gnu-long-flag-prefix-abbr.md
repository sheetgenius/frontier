---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-hermes-agent-command-approval-bypass-closed-gnu-long-flag-prefix-abbr
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/55959
    precision: merged_pr
---
# 2026-07-01-hermes-agent-command-approval-bypass-closed-gnu-long-flag-prefix-abbr

Command-approval bypass closed: GNU long-flag prefix abbreviations of chown --recursive and git push --force skipped the approval gate (channel: main-unreleased, 2026-07-01). Operator consequence: Approval/permission behavior change. DANGEROUS_PATTERNS used exact-match strings, so GNU prefix abbreviations (chown --recurs, git push --forc) ran WITHOUT triggering approval. Two patterns switched to prefix matching (--recur[a-z]*, --forc[a-z]*). Anyone relying on Hermes's command-approval sandbox as a governance control was under-protected against destructive recursive/force commands; re-audit approval config and upgrade once tagged (merge SHA 0f66995). Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/55959
