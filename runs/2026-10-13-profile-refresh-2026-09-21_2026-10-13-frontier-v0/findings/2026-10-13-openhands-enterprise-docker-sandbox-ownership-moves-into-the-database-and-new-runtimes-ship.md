---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-enterprise-docker-sandbox-ownership-moves-into-the-database-and-new-runtimes-ship
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/enterprise/commit/dfdd32f39b63e2b73634df0d731e5925fba79e60
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/25d35264227b29f279742055386f860732db30c2
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/0ff9566f81f83ac9dd472c91aaa09a980ad20e93
    precision: commit
  - url: https://github.com/OpenHands/enterprise/compare/1.65.0...1.66.0
    precision: git_compare
  - url: https://github.com/OpenHands/enterprise/blob/1.71.0/openhands/app_server/sandbox/docker_sandbox_service.py#L362-L445
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/enterprise/releases/tag/1.66.0
    precision: github_release
---
# 2026-10-13-openhands-enterprise-docker-sandbox-ownership-moves-into-the-database-and-new-runtimes-ship

Enterprise Docker sandbox ownership moves into the database and new runtimes ship. Enterprise Docker searches and lookups now decide ownership from stored sandbox rows rather than returning host-wide container enumeration. Previously users could see other users' sandboxes, and absent owner identity broke secret/webhook authorization. Creation requires a user ID, and the sandbox budget is per user. The same enterprise release adds E2B and Kubernetes agent-sandbox backend services. These are separately tagged enterprise changes, not Canvas default runtime changes or proof of a hosted rollout.

Channel: tagged-release. Half: both. Date: 2026-09-28 (enterprise 1.66.0).

Operator consequence: For multi-user self-hosting, use enterprise 1.66.0 or later and reconcile existing unrecorded containers with ownership rows. Test listing, lookup and lifecycle actions with two users. New backend code requires deployment configuration, credentials and provider acceptance; no live E2B/Kubernetes result was obtained.

## Receipt
- https://github.com/OpenHands/enterprise/commit/dfdd32f39b63e2b73634df0d731e5925fba79e60
- https://github.com/OpenHands/enterprise/commit/25d35264227b29f279742055386f860732db30c2
- https://github.com/OpenHands/enterprise/commit/0ff9566f81f83ac9dd472c91aaa09a980ad20e93
- https://github.com/OpenHands/enterprise/compare/1.65.0...1.66.0
- https://github.com/OpenHands/enterprise/blob/1.71.0/openhands/app_server/sandbox/docker_sandbox_service.py#L362-L445
- https://github.com/OpenHands/enterprise/releases/tag/1.66.0
