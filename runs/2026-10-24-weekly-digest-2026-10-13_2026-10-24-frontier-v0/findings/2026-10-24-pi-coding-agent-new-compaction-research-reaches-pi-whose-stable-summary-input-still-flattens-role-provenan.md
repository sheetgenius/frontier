---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-new-compaction-research-reaches-pi-whose-stable-summary-input-still-flattens-role-provenan
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://arxiv.org/abs/2610.29869v1
    precision: official_docs
  - url: https://github.com/pixee/compaction-laundering/blob/9ce87b71301c628dfcd9232b01f1ccbdb0e67b16/disclosure/pi.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/utils.ts#L120-L155
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/compaction.ts#L681-L722
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-new-compaction-research-reaches-pi-whose-stable-summary-input-still-flattens-role-provenan

New compaction research reaches Pi, whose stable summary input still flattens role provenance. Pixee published research on untrusted content gaining apparent authority after conversation compaction. The Pi serializer turns typed messages into text labels such as `[User]:` and `[Tool result]:`, with raw content, and sends that flattened conversation in one user message to the summarizer. A tool result can therefore contain role-looking text; the summary no longer carries the original typed provenance. The research reports a small live Pi experiment on **v0.79.0**, with **3/6 poisoned cases versus 0/5 clean controls**. Its disclosure's older affected-version range and the paper's larger cross-harness success rates are not measurements of Pi 1.4.0. Current source retains the relevant flattening mechanism, but no current-version exploit was executed here.

Channel: docs-only. Half: defect. Date: 2026-10-21.

Operator consequence: Treat a compacted assertion of approval as something to verify against the original user instruction before consequential effects. Keep whole-process containment and narrowly scoped credentials. Watch for a tagged provenance-preserving or escaping repair and current-version tests, not a generic claim that better summaries solve injection. The finding cuts against the assumption that a thinner harness automatically reduces security work: context transformation itself can move authority. It does not justify claiming every 1.4 session is exploitable at the paper's historical rate.

## Receipt
- https://arxiv.org/abs/2610.29869v1
- https://github.com/pixee/compaction-laundering/blob/9ce87b71301c628dfcd9232b01f1ccbdb0e67b16/disclosure/pi.md
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/utils.ts#L120-L155
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/compaction.ts#L681-L722
