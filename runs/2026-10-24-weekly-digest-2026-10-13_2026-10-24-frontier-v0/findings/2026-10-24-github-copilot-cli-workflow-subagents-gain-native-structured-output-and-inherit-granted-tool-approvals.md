---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-workflow-subagents-gain-native-structured-output-and-inherit-granted-tool-approvals
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.101
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.102
    precision: github_release
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/dynamic-workflows.md#L106-L116
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/dynamic-workflows.md#L71-L73
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-workflow-subagents-gain-native-structured-output-and-inherit-granted-tool-approvals

Workflow subagents gain native structured output and inherit granted tool approvals. Dynamic workflow subagents can use native structured output on supported models. Custom and MCP tool approvals already granted now reach subagents, avoiding duplicate prompts and blocked inherited workflows. The underlying docs still distinguish interactive requests from `copilot workflow run`, which displays no approval prompts, and warn that extension code can execute outside those prompts. The release establishes a versioned workflow capability, not the original introduction version of every workflow entry point.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Try 1.0.103 for schema-bearing handoffs and review existing session grants before parallel work. Native output can reduce custom response-parsing scaffolding; inherited approvals can reduce the human approval queue. Neither proves output correctness or grant confinement. Keep validation at the handoff and test a denied operation in a child. Do not conflate the separate SDK plan-exit tool-loss report with this documented inheritance repair.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.101
- https://github.com/github/copilot-cli/releases/tag/v1.0.102
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/dynamic-workflows.md#L106-L116
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/dynamic-workflows.md#L71-L73
