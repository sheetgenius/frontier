---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-1-1-fixes-quadratic-trace-truncation-that-could-reset-cloudflare-durable-objects
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L44-L53
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/commit/756db7668b57dfa97076bbad92d5c26b2d81dc0d
    precision: commit
  - url: https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.1
    precision: github_release
  - url: https://github.com/withastro/flue/issues/742
    precision: official_docs
---
# 2026-10-13-flue-2-1-1-fixes-quadratic-trace-truncation-that-could-reset-cloudflare-durable-objects

2.1.1 fixes quadratic trace truncation that could reset Cloudflare Durable Objects. Fitting a long conversation to the trace attribute budget repeatedly serialized the remaining history, a quadratic path that the tagged changelog identifies as causing latency and Cloudflare Durable Object CPU-limit resets. 2.1.1 replaces that path with linear truncation for ordinary message arrays. The outside report's 27-30 seconds of CPU is a reported measurement, not an independently repeated benchmark; the mechanism and shipped fix are established by the diff and release note.

Channel: tagged-release. Half: defect. Date: 2026-09-23 (2.1.1 publication; code committed 2026-09-21).

Operator consequence: Stop using the old 2.1.0 profile pin for long traced conversations, especially on Cloudflare. The fix begins in 2.1.1 and remains in 2.3.0. Verify that trace truncation stays within the CPU budget on your own large histories; keep content-policy decisions separate, since this fix does not turn content capture off.

## Receipt
- https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L44-L53
- https://github.com/withastro/flue/commit/756db7668b57dfa97076bbad92d5c26b2d81dc0d
- https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.1.1
- https://github.com/withastro/flue/issues/742
