---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-paperclip-agents-can-hand-credentials-to-paperclip-as-inert-proposals-that-only-a
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/9934
    precision: merged_pr
---
# 2026-08-10-paperclip-agents-can-hand-credentials-to-paperclip-as-inert-proposals-that-only-a

Agents can hand credentials to Paperclip as inert proposals that only a human can activate.

A propose/review/approve/reject lifecycle for secrets. Agent-authored proposals are stored outside the live secret tables, each proposed value is encrypted and exact-value redaction is registered the moment Paperclip receives it, and nothing becomes a live secret or an env binding until an authorised human approves -- at which point the write executes through the normal secret-create and protected agent-config paths as the human approver. Binding proposals can target only the proposer or its downward reporting chain under the V1 policy. The PR explicitly rejected the obvious alternative of live secrets with a 'proposed' status because that would put untrusted rows in resolver, list and sync paths and allow uniqueness squatting.

Channel: tagged-release. Ancestry: PR #9934 merge commit e43f187cad3b05c9f00d1b9d4e924f43f7ab125e, merged 2026-08-06T02:49:40Z, base master. gh api repos/paperclipai/paperclip/compare/e43f187c...v2026.817.0 -> ahead, ahead_by=51, behind_by=0. Credited in the v2026.817.0 release body under 'Human-approved secret proposals'.

Operator consequence: Try it if you have been letting agents paste credentials into work artifacts. This closes the loop opened by run-bound secret access in v2026.722.0: the agent can now hand a credential in without ever holding authority to make it live, and the approval is attributable to a named human.

## Receipt
- https://github.com/paperclipai/paperclip/pull/9934
