---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-capacity-enforcement-and-optional-storage-policies-change-unattended-docker-runs
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/e5191f9076268bb6fc8ff599b95f26851b07a7f0
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/6ebd820d10794f1b52bb06ef6c19512888a1401b
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/1561ae055d49c4e4cb961f2de6c2dd68a17b5bca
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/0c0c48810d27583e4f3427ed2c93e0dcb3c1c1ce
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/9e76fe72b43f7be65b48a243486c2e30b5104a22
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/config.py#L329-L418
    precision: tagged_commit_file
---
# 2026-10-13-openhands-capacity-enforcement-and-optional-storage-policies-change-unattended-docker-runs

Capacity enforcement and optional storage policies change unattended Docker runs. Concurrent creation/run capacity is now enforced across async and synchronous paths with HTTP 429; the numeric default remains 10. The event route warns that a message may already be saved when starting its run returns 429, so retry /run rather than resending. Docker idle eviction reaches SDK v1.49.5; the normal idle TTL remains 20 minutes and is not the same as storage archival. In v1.54.0, optional disk-budget reclamation sheds selected gitignored directories of stopped managed workspaces, and optional retention deletes managed runtime state while preserving readable history and preventing resume. Both storage settings default None/off. Configured analyzers now emit SecurityAnalysisEvent even under NeverConfirm; an event does not make approval mandatory.

Channel: tagged-release. Half: both. Date: 2026-09-23 (SDK v1.49.5); 2026-09-30 (v1.50.1); 2026-10-09 (v1.54.0).

Operator consequence: Handle 429 with backoff and the correct run retry, not duplicated input. Set storage retention only if loss of resume is acceptable, and inspect the tagged policy before enabling it. A paused provider may apply retention immediately on resume. Use security events for review evidence while checking the separate confirmation policy; there is no measured attention saving here.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/e5191f9076268bb6fc8ff599b95f26851b07a7f0
- https://github.com/OpenHands/software-agent-sdk/commit/6ebd820d10794f1b52bb06ef6c19512888a1401b
- https://github.com/OpenHands/software-agent-sdk/commit/1561ae055d49c4e4cb961f2de6c2dd68a17b5bca
- https://github.com/OpenHands/software-agent-sdk/commit/0c0c48810d27583e4f3427ed2c93e0dcb3c1c1ce
- https://github.com/OpenHands/software-agent-sdk/commit/9e76fe72b43f7be65b48a243486c2e30b5104a22
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/config.py#L329-L418
