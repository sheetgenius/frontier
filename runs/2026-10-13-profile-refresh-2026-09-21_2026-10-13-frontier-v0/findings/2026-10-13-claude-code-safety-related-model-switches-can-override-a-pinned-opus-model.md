---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-safety-related-model-switches-can-override-a-pinned-opus-model
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1116
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L796
    precision: tagged_commit_file
---
# 2026-10-13-claude-code-safety-related-model-switches-can-override-a-pinned-opus-model

Safety-related model switches can override a pinned Opus model. A pinned Opus configuration no longer chooses the replacement model after a safety flag on the Anthropic API; the API selects one for the type of flag. Effort survives the switch from 2.1.287. Pinning protects an evaluation from alias drift, but does not guarantee every request uses the same model.

Channel: tagged-release (on stable via 2.1.285 and 2.1.287). Half: both. Date: 2026-09-28 (2.1.284), 2026-10-01 (2.1.287).

Operator consequence: Keep full IDs for alias stability and record the model actually returned for evaluated turns. Separate flagged switches from ordinary samples before attributing changed results or cost to a pinned model. This is a server-directed exception to model choice, not a general removal of pins.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1116
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L796
