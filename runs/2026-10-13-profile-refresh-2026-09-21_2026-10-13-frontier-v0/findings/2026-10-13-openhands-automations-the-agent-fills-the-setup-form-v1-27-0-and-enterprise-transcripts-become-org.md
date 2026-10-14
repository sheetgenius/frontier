---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-automations-the-agent-fills-the-setup-form-v1-27-0-and-enterprise-transcripts-become-org
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: medium
evidence:
  - url: https://github.com/OpenHands/enterprise/commit/c38646352e2f9bc4ea29d4899bd08726b7551414
    precision: commit
  - url: https://github.com/OpenHands/enterprise/releases/tag/1.66.0
    precision: github_release
  - url: https://github.com/OpenHands/enterprise/blob/1.71.0/server/sharing/sql_shared_conversation_info_service.py#L73-L106
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/enterprise/blob/1.71.0/server/sharing/shared_event_router.py
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/pull/17201
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17242
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17688
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17683
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17216
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.27.0
    precision: github_release
---
# 2026-10-13-openhands-automations-the-agent-fills-the-setup-form-v1-27-0-and-enterprise-transcripts-become-org

Automations: the agent fills the setup form (v1.27.0), and enterprise transcripts become org-readable after the client UI ships. Canvas v1.27.0 puts a conversation beside the automation form; the agent fills fields through automation_form_update, drafts persist, and a draft can be test-run before creation. The read-only run-transcript UI shipped in Canvas v1.24.0 on September 25, before its enterprise server companion first tagged in 1.66.0 on September 28. At enterprise 1.71.0 the selection predicate permits public V1 conversations, or non-deleted automation conversations belonging to an organization of which the authenticated viewer is a member. The shared-event router filters state-update events; messages and tool output have the wider org audience. This is read access, not automation editing or anonymous access to private runs. Hosted Cloud deployment timing is unknown. Canvas v1.22.0 opens Git Sync to Cloud org admins; v1.25.0 adds creator filtering and Cloud templates.

Channel: tagged-release (Canvas and separately released enterprise server); hosted Cloud rollout unverified. Half: both. Date: 2026-09-22 (v1.22.0); 2026-09-25 (v1.24.0 client); 2026-09-28 (enterprise 1.66.0 server); 2026-10-12 (v1.27.0).

Operator consequence: Review the filled schedule, trigger, profile and test run before creating unattended work that executes as its creator. On enterprise deployments running the released transcript server, assume authenticated org members can read a non-deleted automation run's messages and tool output. Check the actual hosted deployment before assigning that date to Cloud. Ordinary members also gained creation permission through automation 1.14.0 (section 21); creation, management, run identity and transcript audience are separate decisions.

## Receipt
- https://github.com/OpenHands/enterprise/commit/c38646352e2f9bc4ea29d4899bd08726b7551414
- https://github.com/OpenHands/enterprise/releases/tag/1.66.0
- https://github.com/OpenHands/enterprise/blob/1.71.0/server/sharing/sql_shared_conversation_info_service.py#L73-L106
- https://github.com/OpenHands/enterprise/blob/1.71.0/server/sharing/shared_event_router.py
- https://github.com/OpenHands/OpenHands/pull/17201
- https://github.com/OpenHands/OpenHands/pull/17242
- https://github.com/OpenHands/OpenHands/pull/17688
- https://github.com/OpenHands/OpenHands/pull/17683
- https://github.com/OpenHands/OpenHands/pull/17216
- https://github.com/OpenHands/OpenHands/releases/tag/v1.27.0
