---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-eve-0-17-2-to-0-19-0-governance-and-channels
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.17.2
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.18.1
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.19.0
    precision: github_release
---
# Eve 0.17.2 through 0.19.0 add governance and channels

eve shipped three tagged releases in-window. `0.17.2` adds a default recursive
subagent depth cap, per-session input/output token caps, and Sonnet 5 scaffolding;
`0.18.1` makes Slack human-in-the-loop prompts show approval tool inputs and split
large approval batches; `0.19.0` adds generic Chat SDK channel support and fixes
subagent/tool failure propagation. Channel: tagged-release. Operator consequence:
eve keeps treating delegation and approval as product surfaces, not background
implementation details.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.17.2
- https://github.com/vercel/eve/releases/tag/eve%400.18.1
- https://github.com/vercel/eve/releases/tag/eve%400.19.0
