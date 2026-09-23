---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-pi-coding-agent-rpc-steer-and-follow-up-no-longer-bypass-extension-input-handlers
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/faa9863cb8b54689f1d0c2df9dbab1ee1fa9de19
    precision: commit
---
# 2026-09-21-pi-coding-agent-rpc-steer-and-follow-up-no-longer-bypass-extension-input-handlers

RPC `steer` and `follow_up` no longer bypass extension `input` handlers. Pi has no built-in approval layer; operators who filter or rewrite input do it in an extension `input` handler. Before 0.86.0, anything driving Pi over RPC could inject steering or follow-up messages that never reached that handler.

Channel: tagged-release. Half: defect. Date: 2026-09-08 fixed; 2026-09-19 tagged (v0.86.0).

Operator consequence: If you embed Pi over RPC and rely on an `input` extension as a gate or a redactor, upgrade to 0.86.0 and assume earlier embedded sessions were ungated on those two commands.

## Receipt
- https://github.com/earendil-works/pi/commit/faa9863cb8b54689f1d0c2df9dbab1ee1fa9de19
