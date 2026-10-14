---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-alpha-10-enables-cli-daybreak-and-api-key-cyber-program-gates
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7
    precision: commit
  - url: https://github.com/openai/codex/commit/6cc7d9cc5c702c0ca133f7ea48432166e0b880be
    precision: commit
  - url: https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10
    precision: github_release
---
# 2026-10-13-codex-alpha-10-enables-cli-daybreak-and-api-key-cyber-program-gates

Alpha.10 enables CLI Daybreak and API-key cyber-program gates. cli_daybreak is marked Stable and default-on inside alpha.10; api_key_cyber_access_programs also defaults on. Account, provider and model eligibility and opt-outs remain. Neither flip is in stable 0.162.1; enabling a client control does not grant Daybreak account access.

Channel: preview-or-beta. Half: capability. Date: 2026-10-13 (rust-v0.163.0-alpha.10).

Operator consequence: Preview testers should check eligible background turns and API-key routing. Stable users retain the off-by-default CLI gate. Feature maturity inside an alpha does not turn that preview into a stable release.

## Receipt
- https://github.com/openai/codex/commit/6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7
- https://github.com/openai/codex/commit/6cc7d9cc5c702c0ca133f7ea48432166e0b880be
- https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10
