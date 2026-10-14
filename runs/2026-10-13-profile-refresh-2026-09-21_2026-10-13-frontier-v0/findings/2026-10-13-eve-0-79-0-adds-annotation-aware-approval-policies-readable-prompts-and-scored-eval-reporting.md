---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-0-79-0-adds-annotation-aware-approval-policies-readable-prompts-and-scored-eval-reporting
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.79.0
    precision: github_release
  - url: https://github.com/vercel/eve/commit/f5e5183ae40287c9c922b6b4591fb36b53950412
    precision: commit
  - url: https://github.com/vercel/eve/commit/302a4d341059d93cd6de8f5f1744eff4bf21ff6e
    precision: commit
  - url: https://github.com/vercel/eve/commit/bc2be45f02269a3e3d91f02ded40699719006e01
    precision: commit
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/docs/connections/mcp.mdx
    precision: tagged_commit_file
---
# 2026-10-13-eve-0-79-0-adds-annotation-aware-approval-policies-readable-prompts-and-scored-eval-reporting

0.79.0 adds annotation-aware approval policies, readable prompts, and scored eval reporting. Connection approval policies receive toolAnnotations from the MCP server, or undefined when none were declared. Tools can supply an input-aware approval.prompt; Slack retains full input below the summary. t.score records a score separately from a verdict; score, threshold and passed are optional, so custom reporters test passed === false. The six release bullets also consolidate tracing and per-turn durable checkpoints, preserve schema 4, and share tool/approval action fields with non-Eve hosts.

Channel: tagged-release. Half: both. Date: 2026-10-13 (eve@0.79.0).

Operator consequence: Use summaries to make consequential calls reviewable, but treat readOnlyHint as a server assertion rather than enforced safety. Review missing annotations explicitly. Migrate custom reporters to the optional-field contract and inspect trace integrations against schema 4.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.79.0
- https://github.com/vercel/eve/commit/f5e5183ae40287c9c922b6b4591fb36b53950412
- https://github.com/vercel/eve/commit/302a4d341059d93cd6de8f5f1744eff4bf21ff6e
- https://github.com/vercel/eve/commit/bc2be45f02269a3e3d91f02ded40699719006e01
- https://github.com/vercel/eve/blob/eve%400.79.0/docs/connections/mcp.mdx
