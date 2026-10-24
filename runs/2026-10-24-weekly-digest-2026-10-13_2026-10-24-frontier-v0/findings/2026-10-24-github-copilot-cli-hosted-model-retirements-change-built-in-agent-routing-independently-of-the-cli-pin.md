---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-hosted-model-retirements-change-built-in-agent-routing-independently-of-the-cli-pin
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/docs/commit/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b
    precision: commit
  - url: https://github.com/github/docs/blob/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b/data/tables/copilot/model-deprecation-history.yml#L14-L32
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1383-L1388
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-hosted-model-retirements-change-built-in-agent-routing-independently-of-the-cli-pin

Hosted model retirements change built-in agent routing independently of the CLI pin. GitHub records the 19 October retirement of Gemini 3.7 Flash, GPT-5 mini, GPT-5.4, GPT-5.4 mini, and GPT-5.5, all formerly listed as CLI models. The same docs change moves explore from gpt-5.4-mini to gpt-5.6-luna and removes gpt-5.4-mini from task's fallback chain, leaving gpt-5.6-luna with claude-haiku-4.5 fallback. Raw retirement dates and closing agent defaults were independently read at 2026-10-24T10:16:36Z; the exact diff and removed cli=true rows were also read locally as data.

Channel: docs-only. Half: both. Date: 2026-10-19.

Operator consequence: Review explicit model pins, built-in agent assumptions, and evaluation baselines. Pinning CLI 1.0.103 cannot restore a retired hosted model. Record the actual selected model in a comparison and decide whether fallback is acceptable before unattended work. This documents service availability and routing defaults, not a measured quality gain or account-specific entitlement.

## Receipt
- https://github.com/github/docs/commit/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b
- https://github.com/github/docs/blob/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b/data/tables/copilot/model-deprecation-history.yml#L14-L32
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1383-L1388
