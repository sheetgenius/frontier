---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-pi-coding-agent-user-bash-fails-closed-an-extension-that-routes-commands-into-a-vm-no-longer-falls-back
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/pull/9662
    precision: merged_pr
---
# 2026-09-21-pi-coding-agent-user-bash-fails-closed-an-extension-that-routes-commands-into-a-vm-no-longer-falls-back

`user_bash` fails closed: an extension that routes `!` commands into a VM no longer falls back to the host on error. Through 0.85.1, if a `user_bash` handler that routes user shell commands into an isolated domain (the reporter used a Gondolin VM) threw, Pi ran the command locally on the host. From 0.86.0 an error or invalid result aborts the command and stops later handlers. This is user-initiated `!`/`!!` bash, not the agent's bash tool. It is a breaking change for handlers that relied on fall-through: return `undefined` to continue propagation.

Channel: tagged-release. Half: defect. Date: 2026-09-16 merged; 2026-09-19 tagged (v0.86.0).

Operator consequence: If you sandbox user bash through an extension, upgrade to 0.86.0+ and treat 0.84.x/0.85.x as able to escape your VM on a handler exception. Re-audit handlers that return anything other than `undefined`, `{ operations }`, or `{ result }`; they now abort the command.

## Receipt
- https://github.com/earendil-works/pi/pull/9662
