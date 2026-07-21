---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-claude-code-v2-1-193-new-opentelemetry-claude-code-assistant-respons
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.193
    precision: github_release
---
# 2026-07-01-claude-code-v2-1-193-new-opentelemetry-claude-code-assistant-respons

v2.1.193: New OpenTelemetry `claude_code.assistant_response` log event capturing model response text; on upgrade it follows OTEL_LOG_USER_PROMPTS, so deployments already logging prompts will START receiving response content unless OTEL_LOG_ASSISTANT_RESPONSES=0 is set. (channel: tagged-release, 2026-06-25). Operator consequence: Silent telemetry/data-governance expansion on upgrade. Any org that already sets OTEL_LOG_USER_PROMPTS=1 will begin exporting assistant response text to its telemetry pipeline after upgrading - a data-retention/PII surface. Set OTEL_LOG_ASSISTANT_RESPONSES=0 to keep prompts-only before rolling out 2.1.193+. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.193
