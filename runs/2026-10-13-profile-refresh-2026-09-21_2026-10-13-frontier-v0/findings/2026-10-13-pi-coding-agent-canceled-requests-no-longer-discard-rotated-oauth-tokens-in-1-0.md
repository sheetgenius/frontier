---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-canceled-requests-no-longer-discard-rotated-oauth-tokens-in-1-0
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/bde882c7471c47dc31af3c622496df66c4fae010
    precision: commit
---
# 2026-10-13-pi-coding-agent-canceled-requests-no-longer-discard-rotated-oauth-tokens-in-1-0

Canceled requests no longer discard rotated OAuth tokens in 1.0.3. Canceling or superseding a request/catalog refresh could discard a newly rotated token after the provider had invalidated the old one, breaking login. Once credential refresh starts it now finishes and persists its result, bounded by a refresh timeout. Cancellation still controls waiting for the credential lock.

Channel: tagged-release. Half: defect. Date: 2026-10-05.

Operator consequence: Use 1.0.3 or newer for subscription credentials that rotate on refresh. This deliberate completion of credential refresh differs from section 19's prohibition on dispatching an abandoned MCP operation.

## Receipt
- https://github.com/earendil-works/pi/commit/bde882c7471c47dc31af3c622496df66c4fae010
