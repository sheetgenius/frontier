---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-otlp-export-defaults-task-content-on-once-enabled
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/ac9459bae3329395f10bc81c638a374eef152baa
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/agent-observability.md#L3-L94
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-otlp-export-defaults-task-content-on-once-enabled

Beta OTLP export defaults task content on once enabled. Company-owned Braintrust/custom OTLP export arrives for supported managed Codex and Claude execution. Export defaults off; once configured and enabled, prompt, response and tool-content capture default on. This is separate from content-free infrastructure tracing. Export credentials remain accessible to the executing harness and potentially its tools. Settings are snapshotted during preparation; a synthetic control-plane connection test does not establish actual agent export or remote reachability.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Before enabling on 2026.1023.0-beta.0, approve the destination and content choices, use ingestion-only credentials or a separate collector, and inspect destination records from a real task on the actual execution host. Central export can reduce manual debugging, but it creates an external content/credential boundary. Do not treat a successful synthetic test as evidence that the production task was observed.

## Receipt
- https://github.com/paperclipai/paperclip/commit/ac9459bae3329395f10bc81c638a374eef152baa
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/agent-observability.md#L3-L94
