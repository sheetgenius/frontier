---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-the-mirror-source-adds-additive-module-restore-and-read-only-drift-checks
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/b57f0e3efbec01c055b63dd31ee9298592f3a358
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/685e4863130c4074c3d3e538c068cd13251e3605
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/docs/operations/config-restore.md
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-the-mirror-source-adds-additive-module-restore-and-read-only-drift-checks

The mirror source adds additive module restore and read-only drift checks. Configuration import can capture current destination module selection with --against-current and install only missing modules while preserving extras. --check compares inventories without installer planning or application: exit 0 satisfied, 1 missing and 2 invalid input/export failure. The ordinary import defaults to safe mode and suppresses OS upgrades. Inventory presence can rely on recorded state and does not prove credentials, versions or functional health. No privileged restore was run.

Channel: preview-or-beta. Half: capability. Date: 2026-10-05.

Operator consequence: Use the read-only check to name missing modules before approving a restore. Treat portability here as a module-selection primitive, not a machine image or equivalence of account state and running tools.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/b57f0e3efbec01c055b63dd31ee9298592f3a358
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/685e4863130c4074c3d3e538c068cd13251e3605
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/docs/operations/config-restore.md
