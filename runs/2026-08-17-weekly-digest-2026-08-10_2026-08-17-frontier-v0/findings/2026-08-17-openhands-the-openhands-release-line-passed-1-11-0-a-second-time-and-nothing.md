---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openhands-the-openhands-release-line-passed-1-11-0-a-second-time-and-nothing
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.11.0
    precision: github_release
---
# 2026-08-17-openhands-the-openhands-release-line-passed-1-11-0-a-second-time-and-nothing

The OpenHands release line passed 1.11.0 a second time  --  and nothing broke, because the second one wears a v.

Six stable releases landed in the window on the migrated Agent Canvas number series: v1.9.0 (2026-08-03), v1.10.0 (08-05), v1.11.0 (08-07 18:01 UTC), v1.12.0 (08-07 19:33 UTC), v1.13.0 (08-13), v1.14.0 (08-17). On 2026-08-07 the series reached 1.11.0  --  the exact number the pre-migration OpenHands agent line had already published on 2026-07-09. The release automation did not collide, error, or acknowledge it: v1.11.0 and 1.11.0 are different git refs, so Release Please created the tag and the GitHub release cleanly and npm-publish ran green. Both release bodies title themselves the same way  --  the July release opens '## 1.11.0 (2026-07-09)' and the August release opens '## 1.11.0 (2026-08-07)'. The repo now carries two stable releases numbered 1.11.0 whose only distinguishing mark is a lowercase v. The line then kept climbing past the collision: v1.12.0, v1.13.0, v1.14.0, and GitHub currently marks v1.14.0 as Latest. The old unprefixed series has published nothing since 1.11.0 on 2026-07-09; the cloud-* series has published nothing since cloud-1.47.1 on 2026-07-21.

Channel: tagged-release. Ancestry: git ls-remote --tags returns BOTH refs/tags/1.11.0 -> 11ca68ab2e15dcd85c21e4d7d3409e7a259369ac and refs/tags/v1.11.0 -> 3c562fa694e54741f41ad7acf7210430079495fe. gh api repos/OpenHands/OpenHands/compare/1.11.0...v1.11.0 returns {"status":"ahead","ahead_by":955,"behind_by":0}, so they are one line, 955 commits apart, not a fork. gh api releases/tags/v1.11.0 returns prerelease=false, draft=false. gh api repos/OpenHands/OpenHands/releases/latest returns tag_name v1.14.0, prerelease=false, published_at 2026-08-17T21:41:36Z; compare/1.11.0...v1.14.0 returns status ahead, ahead_by 1001, behind_by 0.

Operator consequence: Re-audit any automation that resolves OpenHands versions by string or semver rather than by exact ref. 'Latest' on the release page is now v1.14.0, but the repo also contains 1.11.0 from July with different content, and a tag matcher written as ^v?1\.11\.0$ will match two different commits 955 apart. Pin container digests and npm versions, not tag patterns. If you were watching the unprefixed release feed for the OpenHands agent, that feed is dead  --  it went silent on 2026-07-09 and the agent now ships from OpenHands/software-agent-sdk, OpenHands/automation, and OpenHands/OpenHands-Cloud.

## Receipt
- https://github.com/OpenHands/OpenHands/releases/tag/v1.11.0
