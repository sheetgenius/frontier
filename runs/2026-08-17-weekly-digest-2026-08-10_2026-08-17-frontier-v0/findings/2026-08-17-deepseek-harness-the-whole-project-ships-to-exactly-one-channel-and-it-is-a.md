---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-the-whole-project-ships-to-exactly-one-channel-and-it-is-a
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.7
    precision: github_release
---
# 2026-08-17-deepseek-harness-the-whole-project-ships-to-exactly-one-channel-and-it-is-a

The whole project ships to exactly one channel, and it is a prerelease.

The public repo appeared on 2026-08-13 and cut its first public release on 2026-08-17: dsh-v0.1.0-rc.7, flagged prerelease. It is the only tag in the repository. Because master and the tag are the same commit, there is currently no main-unreleased surface either: everything an operator can read sits inside a release candidate. The README states the position in capitals: "DeepSeek Harness is currently in _developer preview_ and is iterating rapidly. **THERE WILL BE COMPATIBILITY-BREAKING CHANGES.**" The README's own install line, `npx @deepseek-ai/dsh web`, therefore installs that release candidate.

Channel: preview-or-beta. Ancestry: `git ls-remote --tags https://github.com/deepseek-ai/deepseek-harness.git` returns exactly one ref: `99f6f02fecdb7dff40c3fbc9470f5907c29f74ca refs/tags/dsh-v0.1.0-rc.7`. The GitHub release for that tag returns `"prerelease": true, "draft": false, "published_at": "2026-08-17T12:01:58Z"`. `gh api repos/deepseek-ai/deepseek-harness/compare/dsh-v0.1.0-rc.7...master` returns `{"status":"identical","ahead_by":0,"behind_by":0}`, so master carries nothing the prerelease tag does not. There is no non-prerelease tag and there has never been a second tag of any kind.

Operator consequence: Watch. There is no channel here to depend on. Do not pin production work to any dsh package, and do not build a plugin against an API the project has told you in capitals it will break. The one event worth a calendar reminder is the first non-prerelease tag; re-run `git ls-remote --tags` each window, because that is the cheapest true test of whether a stable channel exists.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.7
