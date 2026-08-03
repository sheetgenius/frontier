---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-claude-code-publishes-nothing-for-ten-days
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: high
evidence:
  - url: https://code.claude.com/docs/en/changelog
    precision: official_docs
  - url: https://registry.npmjs.org/@anthropic-ai/claude-code
    precision: package_registry
---
# 2026-08-03-claude-code-publishes-nothing-for-ten-days

Claude Code published nothing between 2026-07-27 and 2026-08-03. Two independent surfaces agree: the documented changelog's newest entry is 2.1.220 dated July 25 2026, and the npm registry records the last publish of @anthropic-ai/claude-code as 2.1.220 at 2026-07-24T23:11:21Z with dist-tags.latest still resolving to it. The five preceding publishes were 2.1.216 (07-20), 2.1.217 (07-21), 2.1.218 (07-22), 2.1.219 (07-24T16:11) and 2.1.220 (07-24T23:11) -- a near-daily cadence that then stopped for ten days. Recorded as a cadence fact with two receipts; no cause is asserted, because the public record states none. Operator consequence: the newest installable build remains 2.1.220, so 2.1.219's permission and sandbox fixes are the current floor.

## Receipt
- https://code.claude.com/docs/en/changelog
- https://registry.npmjs.org/@anthropic-ai/claude-code
