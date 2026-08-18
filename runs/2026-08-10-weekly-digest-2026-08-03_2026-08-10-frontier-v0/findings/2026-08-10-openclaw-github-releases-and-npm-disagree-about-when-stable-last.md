---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-openclaw-github-releases-and-npm-disagree-about-when-stable-last
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-2
    precision: github_release
---
# 2026-08-10-openclaw-github-releases-and-npm-disagree-about-when-stable-last

GitHub Releases and npm disagree about when stable last moved.

The GitHub 'Latest' badge sits on v2026.7.1-2 with a publish date of 2026-08-04. The npm registry says those exact bits went out on 2026-07-18. The GitHub release objects created in this window are release-note backfills for packages that were already installable; the same is true of v2026.6.33 (GitHub 2026-08-08, npm 2026-07-21). Reading /releases, an operator concludes stable moved on 2026-08-04 and 2026-08-08. Reading the registry they install from, stable has not moved in 30 days.

Channel: tagged-release. Ancestry: gh api repos/openclaw/openclaw/releases/latest -> tag_name=v2026.7.1-2, prerelease=false, created_at=2026-08-04T00:40:54Z, published_at=2026-08-04T00:41:26Z. registry.npmjs.org/openclaw time map -> "2026.7.1-2": 2026-07-18T03:53:48.967Z, and no `latest`-line version published since. Same pattern on the other line: v2026.6.33 GitHub release published 2026-08-08 but npm-published 2026-07-21.

Operator consequence: Stop dating your fleet from the Releases page. When you need to know whether a fix is in the bytes you are running, resolve the npm publish time for the exact version and then check ancestry against the fix commit  --  the two surfaces here are up to 18 days apart and they are describing the same artifact.

## Receipt
- https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-2
