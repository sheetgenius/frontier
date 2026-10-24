---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-plugin-manifests-can-carry-executable-automations-and-azure-devops-joins-the-event-path
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/automation/commit/2a6a77936257de43d312690f942211f1999ef1b4
    precision: commit
  - url: https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/plugin_specs.py
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/automation/commit/576b6e548a1f0d0a2b0c207b3cc255a90dc92231
    precision: commit
  - url: https://github.com/OpenHands/automation/commit/e97d865e4b1e640b39162c74d36a4e9c6b602160
    precision: commit
  - url: https://github.com/OpenHands/automation/commit/8416846361474c811be7b21f7997d7399692b4c0
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/commit/ee80223e76501c61177d0857670ad108e7d008ca
    precision: commit
---
# 2026-10-24-openhands-plugin-manifests-can-carry-executable-automations-and-azure-devops-joins-the-event-path

Plugin manifests can carry executable automations, and Azure DevOps joins the event path. A plugin can supply an `openhands.automation.plugin.v1` specification through its manifest, with script or conversation entrypoints. Conversation entrypoints require a profile; declared runtime requirements cover tools, MCP references and secret references. The schema calls for an exact required profile match, not a loose extra-permissions allowance. Source validation rejects credential-bearing URLs and limits Cloud plugin sources to the supported GitHub forms. Automation 1.24.0 adds Azure DevOps as an event source, advertises which Git providers runs can clone from, and permits changing a preset's repository selection. Canvas 1.32.0 consumes the advertised clone capabilities instead of presenting only GitHub repositories.

Channel: tagged-release. Half: capability. Date: 2026-10-19 (automation 1.21.0); 2026-10-22 (automation 1.24.0).

Operator consequence: On automation 1.25.1 and Canvas v1.33.0, evaluate packaging repeatable work as a reviewed plugin instead of maintaining separate form-filling and trigger glue. Review executable entrypoints, source revision, and the required profile together; a manifest is code-distribution metadata, not a safety certificate. The new provider path broadens the work an automation can own, while the serial human decision remains what code and credentials deserve unattended execution. No plugin was fetched for execution or run here.

## Receipt
- https://github.com/OpenHands/automation/commit/2a6a77936257de43d312690f942211f1999ef1b4
- https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/plugin_specs.py
- https://github.com/OpenHands/automation/commit/576b6e548a1f0d0a2b0c207b3cc255a90dc92231
- https://github.com/OpenHands/automation/commit/e97d865e4b1e640b39162c74d36a4e9c6b602160
- https://github.com/OpenHands/automation/commit/8416846361474c811be7b21f7997d7399692b4c0
- https://github.com/OpenHands/OpenHands/commit/ee80223e76501c61177d0857670ad108e7d008ca
