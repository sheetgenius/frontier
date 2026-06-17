---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-agent-zero-oauth-unification
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v1.19"
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "v1.19 release notes under Additional Updates: 'OAuth unification'. Commit messages: 'Add provider-aware OAuth accounts to onboarding', 'Unify OAuth account management surfaces'."
    url: https://github.com/agent0ai/agent-zero/releases
    precision: release_note
---
# Unified provider-aware OAuth account management surfaces

## What Changed

Unified OAuth account management surfaces with provider awareness. Added provider-aware OAuth accounts to onboarding. OAuth configuration now integrated across all account management interfaces.

## Operator Implication

Simplified OAuth account management across different identity providers. Operators can now manage multi-provider authentication from unified interface.

## Receipt

- [v1.19 release notes under Additional Updates: 'OAuth unification'. Commit messages: 'Add provider-aware OAuth accounts to onboarding', 'Unify OAuth account mana](https://github.com/agent0ai/agent-zero/releases)
