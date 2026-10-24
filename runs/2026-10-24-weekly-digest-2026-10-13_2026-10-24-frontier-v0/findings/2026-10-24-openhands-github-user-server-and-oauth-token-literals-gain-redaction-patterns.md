---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-github-user-server-and-oauth-token-literals-gain-redaction-patterns
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/6ae64079cfd30cfe2f01a060c59168a4d650d883
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/redact.py
    precision: tagged_commit_file
---
# 2026-10-24-openhands-github-user-server-and-oauth-token-literals-gain-redaction-patterns

GitHub user server and OAuth token literals gain redaction patterns. The API-key literal redactor adds `ghu_`, `ghs_` and `gho_` token patterns, covering GitHub user-to-server, server-to-server and OAuth token forms. This is distinct from the earlier completion-log fix in section 3.

Channel: tagged-release. Half: defect. Date: 2026-10-19 (SDK v1.56.0).

Operator consequence: Upgrade redaction consumers and review retained output for these forms where needed. More literal coverage reduces accidental disclosure, but does not prove every output path invokes this redactor.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/6ae64079cfd30cfe2f01a060c59168a4d650d883
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/utils/redact.py
