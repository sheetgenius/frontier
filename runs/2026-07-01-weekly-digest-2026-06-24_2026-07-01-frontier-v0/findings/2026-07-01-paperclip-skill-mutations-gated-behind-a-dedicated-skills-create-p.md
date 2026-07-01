---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-paperclip-skill-mutations-gated-behind-a-dedicated-skills-create-p
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/8616
    precision: merged_pr
---
# 2026-07-01-paperclip-skill-mutations-gated-behind-a-dedicated-skills-create-p

Skill mutations gated behind a dedicated skills:create permission, split from agents:create authority (channel: tagged-release, 2026-06-27). Operator consequence: Re-audit role/permission grants: install/import/create/update/delete/scan of company skills now requires the narrower skills:create capability. Lower-privileged users can browse but no longer mutate skills. Confirm intended actors still hold the new permission after upgrade. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/paperclipai/paperclip/pull/8616
