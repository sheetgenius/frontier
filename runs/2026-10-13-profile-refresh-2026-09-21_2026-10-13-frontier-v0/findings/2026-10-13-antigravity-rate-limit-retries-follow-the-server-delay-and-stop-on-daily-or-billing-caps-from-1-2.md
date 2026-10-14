---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-rate-limit-retries-follow-the-server-delay-and-stop-on-daily-or-billing-caps-from-1-2
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.13/CHANGELOG.md?plain=1#L9
    precision: tagged_commit_file
---
# 2026-10-13-antigravity-rate-limit-retries-follow-the-server-delay-and-stop-on-daily-or-billing-caps-from-1-2

Rate-limit retries follow the server delay and stop on daily or billing caps from 1.2.13. The CLI replaced a fixed five-second rate-limit retry with the server-requested delay. It stops immediately if that delay exceeds 30 seconds or the quota is a daily or billing cap, rather than repeatedly trying a request the account cannot serve.

Channel: tagged-release. Half: both. Date: 2026-09-29.

Operator consequence: In an unattended job, distinguish a terminal daily or billing cap from a short rate-limit delay and escalate the former instead of wrapping agy in an unbounded retry. This reduces redundant requests, but jobs relying on continued internal retries now end sooner and need an explicit rescheduling policy.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.13/CHANGELOG.md?plain=1#L9
