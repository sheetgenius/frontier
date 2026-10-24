---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-software-factory-guidance-ships-and-becomes-default-enabled
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/extensions/commit/25fab14cac53f1795302a92dc099554c5f46c7d7
    precision: commit
  - url: https://github.com/OpenHands/extensions/commit/5f0bc702a65b2165e4406227d845b87efd5d445a
    precision: commit
  - url: https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/README.md
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.29.0/package.json
    precision: tagged_commit_file
---
# 2026-10-24-openhands-software-factory-guidance-ships-and-becomes-default-enabled

Software-factory guidance ships and becomes default-enabled. The shipped recipe assembles catalog stations for issue-to-PR, review and triage, with checkpoints, credentials and backend-capability requirements. It is default-enabled guidance from extensions v0.32.0. Default-enabled text does not mean unattended jobs start merely by installing Canvas.

Channel: tagged-release. Half: capability. Date: 2026-10-19 (extensions v0.31.0); 2026-10-20 (v0.32.0; Canvas v1.29.0).

Operator consequence: Try a bounded repository setup and review the profiles, credentials and jobs it proposes when invoked. This reduces custom onboarding and automation assembly, while deciding which jobs deserve unattended authority remains human work. The livestream outcome is still unverified; this released recipe is independent evidence of packaged capability.

## Receipt
- https://github.com/OpenHands/extensions/commit/25fab14cac53f1795302a92dc099554c5f46c7d7
- https://github.com/OpenHands/extensions/commit/5f0bc702a65b2165e4406227d845b87efd5d445a
- https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/README.md
- https://github.com/OpenHands/OpenHands/blob/v1.29.0/package.json
