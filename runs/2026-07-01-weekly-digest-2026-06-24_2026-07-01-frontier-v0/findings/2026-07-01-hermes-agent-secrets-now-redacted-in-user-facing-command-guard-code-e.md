---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-hermes-agent-secrets-now-redacted-in-user-facing-command-guard-code-e
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/55955
    precision: merged_pr
---
# 2026-07-01-hermes-agent-secrets-now-redacted-in-user-facing-command-guard-code-e

Secrets now redacted in user-facing command/guard/code-execution approval prompts (channel: main-unreleased, 2026-07-01). Operator consequence: P2 type/security fix. Credentials embedded in commands leaked verbatim into approval prompts shown on stdout and forwarded to Discord/Slack gateways (screenshottable/forwardable). redact_sensitive_text() now applied across prompt_dangerous_approval(), check_all_command_guards(), and check_execute_code_guard(). Redaction is display-only (raw command still executes; allowlist keys off pattern_key, unaffected). Teams running Hermes with messaging gateways in shared channels should re-audit exposure and upgrade (merge SHA 4a7a6fd). Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/55955
