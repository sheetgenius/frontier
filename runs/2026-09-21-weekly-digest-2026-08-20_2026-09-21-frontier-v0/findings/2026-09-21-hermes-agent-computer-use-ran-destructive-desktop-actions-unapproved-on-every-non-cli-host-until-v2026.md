---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-hermes-agent-computer-use-ran-destructive-desktop-actions-unapproved-on-every-non-cli-host-until-v2026
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/3e066dfedd2e3dbbf39607b32f760417b51c0ec3
    precision: commit
---
# 2026-09-21-hermes-agent-computer-use-ran-destructive-desktop-actions-unapproved-on-every-non-cli-host-until-v2026

computer_use ran destructive desktop actions unapproved on every non-CLI host until v2026.9.14. computer_use ran destructive desktop actions unapproved on every non-CLI host until v2026.9.14

Channel: tagged-release. Half: defect. Date: commits 2026-09-12 and 2026-09-13; tagged 2026-09-14.

Operator consequence: If you enabled computer_use on a gateway or cron host before v2026.9.14, audit what it did: it was running without a gate. Upgrade, then expect approval cards where there were none. On cloud VMs, the IMDS prompt is the new signal to watch for.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/3e066dfedd2e3dbbf39607b32f760417b51c0ec3
