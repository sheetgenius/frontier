---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-late-october-13-v0-22-0-attempts-leave-main-ahead-of-the-last-in-window-stable
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://api.github.com/repos/NousResearch/hermes-agent/git/tags/8b8cf0f47f8aaacb0d01b213d7b46dd607af7b3b
    precision: official_docs
  - url: https://api.github.com/repos/NousResearch/hermes-agent/git/tags/0c3014a34334ab372b18be3e0ccb193e6eac1614
    precision: official_docs
  - url: https://api.github.com/repos/NousResearch/hermes-agent/git/tags/5f7059a40a642486d3096e31774d0fad53f9ca1d
    precision: official_docs
  - url: https://github.com/NousResearch/hermes-agent/commit/e06df9c2eae6901f4c88f464e0ae6e753c0428b8
    precision: commit
  - url: https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.0
    precision: official_docs
---
# 2026-10-13-hermes-agent-late-october-13-v0-22-0-attempts-leave-main-ahead-of-the-last-in-window-stable

Late October 13 v0.22.0 attempts leave main ahead of the last in-window stable. At the full UTC cutoff, rc.1-v0.22.0 was cut at 21:24:15Z, abandoned at 22:33:48Z, and rc.2-v0.22.0 cut at 22:34:10Z. These were attempt locks, not stable or public prereleases. The last in-window main commit was e06df9c2eae6901f4c88f464e0ae6e753c0428b8, committed 22:07:03Z and 756 commits beyond v0.21.7. v0.22.0 publication followed at 2026-10-14T03:21:46Z, outside this UTC window.

Channel: main-unreleased (attempt refs are locks, not published prereleases). Half: both. Date: 2026-10-13.

Operator consequence: Use the explicit UTC cutoff for this profile. v0.21.7 is its stable answer, while the late main commit and attempt locks are source state only. A moving stable command run after the cutoff is not historical reproduction; pin the audited source commit or image digest.

## Receipt
- https://api.github.com/repos/NousResearch/hermes-agent/git/tags/8b8cf0f47f8aaacb0d01b213d7b46dd607af7b3b
- https://api.github.com/repos/NousResearch/hermes-agent/git/tags/0c3014a34334ab372b18be3e0ccb193e6eac1614
- https://api.github.com/repos/NousResearch/hermes-agent/git/tags/5f7059a40a642486d3096e31774d0fad53f9ca1d
- https://github.com/NousResearch/hermes-agent/commit/e06df9c2eae6901f4c88f464e0ae6e753c0428b8
- https://api.github.com/repos/NousResearch/hermes-agent/releases/tags/v0.22.0
