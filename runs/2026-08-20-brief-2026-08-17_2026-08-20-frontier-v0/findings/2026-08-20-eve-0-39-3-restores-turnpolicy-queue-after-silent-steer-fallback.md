---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-eve-0-39-3-restores-turnpolicy-queue-after-silent-steer-fallback
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.39.3
    precision: github_release
  - url: https://github.com/vercel/eve/commit/542c380eec6ec713f0e3bce1285de927060db377
    precision: git_commit
  - url: https://github.com/vercel/eve/pull/2173
    precision: github_pr
---
# 2026-08-20-eve-0-39-3-restores-turnpolicy-queue-after-silent-steer-fallback

eve@0.39.3 published 2026-08-19T22:41:34Z, prerelease=false. Body names 542c380: preserve configured turnPolicy on built-in and custom channels, and restore the option for Slack. PR #2173 (merged 2026-08-19T22:23:07Z, merge SHA 542c380eec) states that turnPolicy "queue" silently fell back to "steer" on built-in channels since eve@0.34.0 because defineChannel stopped copying the field onto the compiled channel. compare eve@0.39.3...542c380eec status=behind, ahead_by=0 (the SHA is in the tag). compare eve@0.42.0...542c380eec status=behind, ahead_by=0. Parent finding 2026-08-17-eve-eve-0-33-0-makes-channel-messages-interrupt-the-running-turn-by told operators to set queue for transactional work; that setting did not bind from 0.34.0 through 0.39.2.

Channel: tagged-release. Half: defect.

Operator consequence: if you set turnPolicy queue after 0.33.0, 0.39.3 is the first tag that actually queues. Pin eve@0.42.0 at window close. Unpinned npm latest is already 0.44.0 (2026-08-21, out of window).

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.39.3
- https://github.com/vercel/eve/commit/542c380eec6ec713f0e3bce1285de927060db377
- https://github.com/vercel/eve/pull/2173
