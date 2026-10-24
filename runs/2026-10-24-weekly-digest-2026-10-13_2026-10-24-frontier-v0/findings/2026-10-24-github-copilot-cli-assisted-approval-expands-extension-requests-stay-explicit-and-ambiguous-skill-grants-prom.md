---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-assisted-approval-expands-extension-requests-stay-explicit-and-ambiguous-skill-grants-prom
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.98
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.100
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.101
    precision: github_release
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L253-L261
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1283-L1290
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-assisted-approval-expands-extension-requests-stay-explicit-and-ambiguous-skill-grants-prom

Assisted approval expands, extension requests stay explicit, and ambiguous skill grants prompt. Assisted Permissions can judge more nested shell forms, and 1.0.101 adds `assistedApprovalInstructions`. Extension capability requests instead require explicit approval. A skill's `allowed-tools` parser preserves commas inside arguments and prompts on ambiguous unscoped rules. Resuming abandoned pending permission work is repaired in 1.0.98, which also repairs command-hook completion when child-exit signals are lost. 1.0.100 repairs managed-account policy and bypass warnings after account switches with cache misses. 1.0.101 requests path approval for commands that create then enter a directory, instead of denying them early, and adds request-specific escalation diagnosis. Crucially, 1.0.100 says managed `ask` requests in Assisted mode can allow safe actions without unnecessary confirmation. The current enterprise docs still require fresh one-time approval and exclude automatic shortcuts for managed `ask`. Those statements are not reconciled.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: On 1.0.103, test an operation matching a managed `ask` rule in Manual and Assisted modes and inspect the recorded decision maker. Include an account switch if the same installation serves multiple accounts. Do not promise a human-per-request gate from that key until the conflict is settled. Audit skill argument lists and extension capability requests separately. The judge may remove repetitive work, but explicit extension approval remains a deliberate accountability boundary; guidance to the judge is not a deterministic deny rule.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.98
- https://github.com/github/copilot-cli/releases/tag/v1.0.100
- https://github.com/github/copilot-cli/releases/tag/v1.0.101
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L253-L261
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1283-L1290
