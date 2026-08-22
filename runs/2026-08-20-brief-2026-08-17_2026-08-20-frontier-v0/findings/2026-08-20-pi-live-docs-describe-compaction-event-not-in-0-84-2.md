---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-pi-live-docs-describe-compaction-event-not-in-0-84-2
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.84.2
    precision: github_release
  - url: https://github.com/earendil-works/pi/commit/a6b1dbceb1af5bf8a21da0b437ef756ce9fe85e6
    precision: git_commit
---
# 2026-08-20-pi-live-docs-describe-compaction-event-not-in-0-84-2

session_compact_failed (a6b1dbce, 2026-08-17) is 22 commits ahead of v0.84.2. compaction.md at the tag does not contain the event. compaction.md at window-close main 5cd93f68 does. Live pi.dev/docs/latest/compaction currently shows the same section. npm latest remains 0.84.2, gitHead 914cf147. This is earendil-works/pi, not can1357/oh-my-pi.

Channel: main-unreleased for the event. Docs.latest is not a release channel. Half: defect.

Operator consequence: do not implement an extension against the live compaction page if you run 0.84.2. The handler will not fire. Stay on the files at the tag.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.84.2
- https://github.com/earendil-works/pi/commit/a6b1dbceb1af5bf8a21da0b437ef756ce9fe85e6
