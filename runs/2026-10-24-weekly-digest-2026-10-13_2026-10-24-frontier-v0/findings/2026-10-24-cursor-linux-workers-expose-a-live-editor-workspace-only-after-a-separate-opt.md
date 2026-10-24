---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-linux-workers-expose-a-live-editor-workspace-only-after-a-separate-opt
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/release-notes/agents-window#oct-20-2026
    precision: official_docs
  - url: https://cursor.com/docs/cloud-agent/self-hosted#live-workspace
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
---
# 2026-10-24-cursor-linux-workers-expose-a-live-editor-workspace-only-after-a-separate-opt

Linux workers expose a live editor workspace only after a separate opt-in. `--connect-workspace` lets the desktop app open a self-hosted Linux agent's files, terminal and forwarded ports. The guide requires Cursor 3.25 or later and a signature-verified matching server build downloaded from `cursor.blob.core.windows.net`. It runs on localhost and transports workspace traffic over the worker's outbound connection. This is separate from pixels or input control. Access runs as the worker's OS user, including repository tasks on workspace open and teammates admitted through Allow VM sharing.

Channel: tagged-release. Half: both. Date: 2026-10-20 notes; 2026-10-22 artifact.

Operator consequence: Treat enabling this flag as granting a terminal under the worker identity. Audit VM sharing and workspace tasks before opening an untrusted checkout. The feature can remove separate SSH setup for inspecting an agent's work, but a lack of inbound ports does not make the terminal read-only or restrict it to a reviewer role.

## Receipt
- https://cursor.com/docs/release-notes/agents-window#oct-20-2026
- https://cursor.com/docs/cloud-agent/self-hosted#live-workspace
- https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
