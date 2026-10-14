---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-unfinished-responses-tool-calls-fail-instead-of-executing-mixed-commands-from-0-99
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/1b2aa0ca0e3b5bf918c31f4cdc28b3d09b4b5c7a
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v0.99.0/packages/ai/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-unfinished-responses-tool-calls-fail-instead-of-executing-mixed-commands-from-0-99

Unfinished Responses tool calls fail instead of executing mixed commands from 0.99.0. Responses streams could leave unfinished tool calls in the final assistant message, which the agent treated as runnable. A server omitting output_index could mix arguments or duplicate call IDs and execute the wrong assembled command. The stream now fails if a completed response still has an unfinished tool call. No advisory identifier was found for this fix.

Channel: tagged-release. Half: defect. Date: 2026-09-29.

Operator consequence: Upgrade compatible Responses-stream integrations to 0.99.0 or newer; treat the new stream error as a rejected malformed call, not a reason to execute a partial command yourself.

## Receipt
- https://github.com/earendil-works/pi/commit/1b2aa0ca0e3b5bf918c31f4cdc28b3d09b4b5c7a
- https://github.com/earendil-works/pi/blob/v0.99.0/packages/ai/CHANGELOG.md
