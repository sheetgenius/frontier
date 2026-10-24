---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-tlon-sender-identity-and-hosted-doctor-diagnosis-received-separate-authority-repairs
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/tlon/src/monitor/index.ts#L928-L982
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/tlon/src/monitor/approval.ts#L113-L122
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/doctor.worker.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/commit/6618b391c1c445429b54e1527a3c708782ae49c1
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/cli/openclaw.md
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-tlon-sender-identity-and-hosted-doctor-diagnosis-received-separate-authority-repairs

Tlon sender identity and hosted Doctor diagnosis received separate authority repairs. Tlon group-DM authors are treated as unverified, club-scoped identities rather than trusting an asserted owner name; old pending direct messages without sender provenance require a resend rather than replay. Separately, hosted diagnosis runs Doctor's read-only lint path because ordinary noninteractive Doctor can migrate state. Current chat setup docs keep Doctor repairs outside the hosted setup chat.

Channel: tagged-release. Half: defect. Date: 2026-10-18.

Operator consequence: Update Tlon Gateways and expect some legacy approval requests to need a fresh message. Keep setup diagnosis separate from permission to repair local state. Both changes reduce authority that a familiar chat or diagnostic label could conceal; neither justifies describing all chat setup as read-only or all Tlon traffic as verified.

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/tlon/src/monitor/index.ts#L928-L982
- https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/tlon/src/monitor/approval.ts#L113-L122
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/doctor.worker.ts
- https://github.com/openclaw/openclaw/commit/6618b391c1c445429b54e1527a3c708782ae49c1
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/cli/openclaw.md
