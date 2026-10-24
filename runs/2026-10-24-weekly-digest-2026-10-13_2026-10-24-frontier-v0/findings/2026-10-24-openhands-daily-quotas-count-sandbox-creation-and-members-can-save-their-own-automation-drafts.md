---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-daily-quotas-count-sandbox-creation-and-members-can-save-their-own-automation-drafts
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/enterprise/commit/9ba3626e20cba1ff7184f3a2b2fb56b073c8fef7
    precision: commit
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/sandbox/remote_sandbox_service.py#L428-L453
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/automation/commit/a7c47ca038aa4d44654ce108037c57675ea6b93f
    precision: commit
  - url: https://github.com/OpenHands/automation/commit/cb092d344341f721bef9d24e5e7021c602901578
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/use-automation-permissions.ts
    precision: tagged_commit_file
---
# 2026-10-24-openhands-daily-quotas-count-sandbox-creation-and-members-can-save-their-own-automation-drafts

Daily quotas count sandbox creation, and members can save their own automation drafts. The Enterprise daily limit changes its accounting unit from conversations to attributed new sandboxes in SaaS mode on the remote backend. It does not meter Docker, E2B or process backends, unattributed/system/warm starts, or resuming an existing sandbox. Some asynchronous failed starts retain reservations unless a waiter in the same service instance settles them. Automation recognizes the daily-sandbox limit and skips affected runs rather than treating it as an ordinary provisioning failure. Members who already could create automations can now save drafts and delete their own uploads. This repairs a mismatch in the preparation workflow; it does not grant every member management over everyone else's jobs.

Channel: tagged-release. Half: both. Date: 2026-10-19 (quota); 2026-10-20 (draft permission).

Operator consequence: For SaaS remote-backend deployments, review the metered starts and reservation settlement, and distinguish quota skips from broken jobs. Do not treat this daily counter as an Enterprise-wide capacity boundary. Check sandbox reuse and the separate Compose grouping default (section 20). Members can prepare and test work without an administrator completing the draft for them. That removes clerical attention while preserving creator and management checks. Verify the serving Enterprise/automation versions before applying these rules to Cloud; this harvest establishes released source behavior only.

## Receipt
- https://github.com/OpenHands/enterprise/commit/9ba3626e20cba1ff7184f3a2b2fb56b073c8fef7
- https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/sandbox/remote_sandbox_service.py#L428-L453
- https://github.com/OpenHands/automation/commit/a7c47ca038aa4d44654ce108037c57675ea6b93f
- https://github.com/OpenHands/automation/commit/cb092d344341f721bef9d24e5e7021c602901578
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/use-automation-permissions.ts
