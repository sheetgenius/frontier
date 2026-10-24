---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-the-diff-side-panel-graduates-from-an-experiment-to-the-default
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/09a075d90c063198a4f08ed78ede86fe4558d639
    precision: commit
---
# 2026-10-24-opencode-the-diff-side-panel-graduates-from-an-experiment-to-the-default

The diff side panel graduates from an experiment to the default. [Commit 09a075d90c063198a4f08ed78ede86fe4558d639](https://github.com/anomalyco/opencode/commit/09a075d90c063198a4f08ed78ede86fe4558d639) removes the experimental diff-panel gate. In a session, /diff opens beside the transcript unless fullscreen is configured; outside a session, it falls back to the full-screen route. First v2.0.30, absent from v2.0.29.

Channel: tagged-release. Half: capability. Date: 2026-10-15.

Operator consequence: Review remains next to the session without an experimental toggle. Existing full-screen preferences and the outside-session exception matter. This is a confirmed default flip, without a measured claim about review speed.

## Receipt
- https://github.com/anomalyco/opencode/commit/09a075d90c063198a4f08ed78ede86fe4558d639
