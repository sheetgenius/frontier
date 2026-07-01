---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-codex-codex-0-142-2-tightens-powershell-safety-commands-with-a
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/pull/24092
    precision: merged_pr
---
# 2026-07-01-codex-codex-0-142-2-tightens-powershell-safety-commands-with-a

Codex 0.142.2 tightens PowerShell safety: commands with AST regions the classifier cannot inspect now require approval (channel: tagged-release, 2026-06-25). Operator consequence: Approval/sandbox behavior change: unlowered/uninspectable PowerShell AST regions no longer auto-run and are gated behind approval. Windows operators running Codex non-interactively or in automation may see new approval prompts (or refusals in unattended mode) where PowerShell previously executed. Re-audit unattended Windows pipelines before upgrading. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/openai/codex/pull/24092
