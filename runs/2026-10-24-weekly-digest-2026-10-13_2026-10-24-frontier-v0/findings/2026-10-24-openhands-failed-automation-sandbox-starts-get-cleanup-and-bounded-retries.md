---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-failed-automation-sandbox-starts-get-cleanup-and-bounded-retries
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/automation/commit/567bdbdf3bef1e0866563786d109f986b979a912
    precision: commit
  - url: https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/backends/cloud.py
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/dispatcher.py
    precision: tagged_commit_file
---
# 2026-10-24-openhands-failed-automation-sandbox-starts-get-cleanup-and-bounded-retries

Failed automation sandbox starts get cleanup and bounded retries. Before propagating an unusable-start failure, the Cloud backend attempts to delete the never-used sandbox. The dispatcher classifies and retries provisioning errors within its configured attempt budget; safe status classes replace raw runtime detail in run status. Cleanup is best effort.

Channel: tagged-release. Half: both. Date: 2026-10-20 (automation 1.23.1).

Operator consequence: Check failed-run cleanup and retry records before manually deleting every failed start. Retrying before automation code ran can remove routine intervention without duplicating its work. This is separate from quota skips, and released source does not establish hosted rollout or successful deletion.

## Receipt
- https://github.com/OpenHands/automation/commit/567bdbdf3bef1e0866563786d109f986b979a912
- https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/backends/cloud.py
- https://github.com/OpenHands/automation/blob/1.25.1/openhands/automation/dispatcher.py
