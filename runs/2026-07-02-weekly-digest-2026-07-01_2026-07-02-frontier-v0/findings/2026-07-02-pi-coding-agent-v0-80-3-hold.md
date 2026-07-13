---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-pi-coding-agent-v0-80-3-hold
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.80.3
    precision: github_release
---
# Pi Coding Agent v0.80.3 holds with no in-window release

Pi Coding Agent had no new release after `v0.80.3` in the July 1-2 window. Main
had provider/model and reliability fixes, but no new approval, sandbox,
permission, subagent, or MCP governance stance change was found. Channel:
main-unreleased for the in-window work, tagged-release for the held baseline.
Operator consequence: the source remains a harness that exposes primitives rather
than shipping a governance shell.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.80.3
