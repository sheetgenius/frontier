---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-openclaw-approved-exec-fix-still-in-no-release
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/ab5611f0be610380fe48803fe4311896ca85806e
    precision: git_commit
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.2
    precision: github_release
---
# 2026-08-20-openclaw-approved-exec-fix-still-in-no-release

The approved-exec binding (PR #124858, merge ab5611f0be610380fe48803fe4311896ca85806e, 2026-08-17T01:26:42Z) is still in no release at window close. Latest release remains v2026.8.1-beta.2 (2026-08-15, prerelease=true). compare v2026.8.1-beta.2...ab5611f0 reports ahead_by=619. No newer tag in the first 15 tags.

Channel: main-unreleased. Half: defect.

Operator consequence: a tagged OpenClaw install still can run different bytes than the ones you approved.

## Receipt
- https://github.com/openclaw/openclaw/commit/ab5611f0be610380fe48803fe4311896ca85806e
