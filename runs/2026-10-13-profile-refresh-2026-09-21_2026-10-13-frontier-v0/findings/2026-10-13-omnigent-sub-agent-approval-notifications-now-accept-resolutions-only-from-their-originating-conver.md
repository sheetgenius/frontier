---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-sub-agent-approval-notifications-now-accept-resolutions-only-from-their-originating-conver
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/commit/d2e077a1e3d502748ec0d792dfdede7319ccb968
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/subagent_block_notifier.py#L160-L190
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-sub-agent-approval-notifications-now-accept-resolutions-only-from-their-originating-conver

Sub-agent approval notifications now accept resolutions only from their originating conversation. v0.18.0 binds each armed sub-agent approval notification to its originating conversation. A resolution event from another conversation is ignored instead of clearing the notification and signaling its waiter. This is coordination and approval hardening in the same bundle as the security fixes. It does not change the Edit approval threshold or establish a separately exploitable authorization defect.

Channel: tagged-release. Half: both. Date: 2026-10-13T06:42:07Z merged; stable 2026-10-13.

Operator consequence: Use v0.18.0 for the repaired notification bookkeeping as well as the advisories. In multi-session workflows verify that the intended waiting conversation resumes; do not report a new CVE or permission boundary from this diff alone.

## Receipt
- https://github.com/omnigent-ai/omnigent/commit/d2e077a1e3d502748ec0d792dfdede7319ccb968
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/runtime/subagent_block_notifier.py#L160-L190
