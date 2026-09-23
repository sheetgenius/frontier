---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-eve-trace-content-defaults-flipped-four-times-0-55-0-recorded-anonymous-content-for-a-day
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/pull/3365
    precision: merged_pr
---
# 2026-09-21-eve-trace-content-defaults-flipped-four-times-0-55-0-recorded-anonymous-content-for-a-day

Trace content defaults flipped four times; 0.55.0 recorded anonymous content for a day. Whether conversation content lands in hosted traces
depended on which of five patch/minor versions you ran. eve@0.55.0 (published
2026-09-14T23:57Z, superseded 2026-09-15T21:04Z) recorded anonymous
conversations' content by default.

Channel: tagged-release. Half: defect. Date: 2026-08-21 to 2026-09-15.

Operator consequence: If you ran 0.55.0 in preview or production with
anonymous channels, purge hosted trace content from that interval. If you
register an instrumentation provider with `capture: "content"`, audience
classification does not protect anything for that provider; treat it as a
full-content sink.

## Receipt
- https://github.com/vercel/eve/pull/3365
