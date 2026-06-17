---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-openhands-acp-creds-secrets
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted_signal
change_type: security
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "Commit ce271ad (2026-06-03T14:21:52Z): 'fix(acp): route provider creds via agent_context.secrets, not acp_env (#14620)' - Credentials handling refactoring with SDK gap-fill logic to prevent re-folding"
    url: https://github.com/OpenHands/OpenHands/commit/ce271ad
    precision: commit
---
# Security: Route ACP provider credentials via agent_context.secrets instead of acp_env

## What Changed

Moved ACP agent provider credentials (API keys, base URLs) from deprecated acp_env channel to cipher-protected agent_context.secrets channel. User secrets and git provider tokens continue via agent_context.secrets. Provider credentials override same-named Secrets panel entries per prior priority logic.

## Operator Implication

Operators running ACP agents must understand that provider credentials now route through cipher-protected secrets channel (more secure). Legacy acp_env channel is deprecated for credentials. Addresses security concerns from software-agent-sdk #3464 and agent-canvas #1039 regarding persistence safety.

## Receipt

- [Commit ce271ad (2026-06-03T14:21:52Z): 'fix(acp): route provider creds via agent_context.secrets, not acp_env (#14620)' - Credentials handling refactoring with ](https://github.com/OpenHands/OpenHands/commit/ce271ad)
