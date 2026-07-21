---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-paperclip-canary-operating-state-no-stable-tag
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/releases/tag/canary/v2026.702.0-canary.8
    precision: github_release
---
# Paperclip operating-state work remains canary-only

Paperclip did not cut a stable tag after `v2026.626.0`; July 2 work is canary
only through `canary/v2026.702.0-canary.8`. The canary stream includes actual
authors on agent-authored comments, sandbox bridge credential/review recovery,
instance-scoped custom images, live descendant status inbox rows, and Work
Timeline backend/UI work whose page later left the nav. Channel: preview-or-beta.
Operator consequence: useful operating-state work exists, but not in the stable
line.

## Receipt
- https://github.com/paperclipai/paperclip/releases/tag/canary/v2026.702.0-canary.8
