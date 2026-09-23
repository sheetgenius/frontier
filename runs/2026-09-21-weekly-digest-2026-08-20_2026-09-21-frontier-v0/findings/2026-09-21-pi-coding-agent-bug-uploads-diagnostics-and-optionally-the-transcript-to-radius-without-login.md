---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-pi-coding-agent-bug-uploads-diagnostics-and-optionally-the-transcript-to-radius-without-login
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/src/core/bug-report-upload.ts
    precision: tagged_commit_file
---
# 2026-09-21-pi-coding-agent-bug-uploads-diagnostics-and-optionally-the-transcript-to-radius-without-login

`/bug` uploads diagnostics and optionally the transcript to Radius without login. A new user-invoked egress path to the vendor's gateway, off by default (it requires `/bug`), with transcript inclusion optional. On 0.86.x `PI_OFFLINE` did not stop the upload.

Channel: tagged-release. Half: both. Date: 2026-09-19 (v0.86.0); offline-mode guard fixed in v0.87.0.

Operator consequence: In regulated repos, prefer the zip export and read it before sending. If you rely on offline mode as a no-egress guarantee, skip 0.86.0 and 0.86.1.

## Receipt
- https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/src/core/bug-report-upload.ts
