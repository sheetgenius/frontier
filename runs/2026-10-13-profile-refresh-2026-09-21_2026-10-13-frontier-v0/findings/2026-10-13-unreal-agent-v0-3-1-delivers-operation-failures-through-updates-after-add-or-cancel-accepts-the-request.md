---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-delivers-operation-failures-through-updates-after-add-or-cancel-accepts-the-request
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/commit/e278771b557c5ae0f6ffe4749c087cff284478b4
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/local_manager.go#L75-L165
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/operation.go#L21-L28
    precision: tagged_commit_file
---
# 2026-10-13-unreal-agent-v0-3-1-delivers-operation-failures-through-updates-after-add-or-cancel-accepts-the-request

v0.3.1 delivers operation failures through updates after Add or Cancel accepts the request. The local manager returns nil from Add or Cancel once the request is accepted. Initialization, unsupported-operation and remote-cancellation failures then arrive on Updates. Accepted IDs are recorded before initialization, so submitting the same failed ID again does not simply retry it. StatusUnsupported is an empty string. When remote cancellation fails, the update can explicitly say the remote outcome is unknown. Context closure can still make Add or Cancel return an error; nil means request acceptance, not successful execution or confirmed cancellation.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: Consume Updates and terminal outcomes when embedding the harness. Do not mark work complete or remotely canceled because a method returned nil, and do not discard the empty unsupported status. Reconcile a failed remote cancellation before assuming side effects have stopped. Durable execution still requires a host that understands its error channel.

## Receipt
- https://github.com/unreallabsai/unreal-agent/commit/e278771b557c5ae0f6ffe4749c087cff284478b4
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/local_manager.go#L75-L165
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/operation/operation.go#L21-L28
