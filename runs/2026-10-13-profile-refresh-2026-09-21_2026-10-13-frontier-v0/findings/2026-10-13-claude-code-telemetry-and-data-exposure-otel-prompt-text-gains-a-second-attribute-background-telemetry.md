---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-telemetry-and-data-exposure-otel-prompt-text-gains-a-second-attribute-background-telemetry
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L715
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L506
    precision: tagged_commit_file
  - url: https://code.claude.com/docs/en/monitoring-usage
    precision: official_docs
---
# 2026-10-13-claude-code-telemetry-and-data-exposure-otel-prompt-text-gains-a-second-attribute-background-telemetry

Telemetry and data exposure: OTel prompt text gains a second attribute; background telemetry escaped a gateway. The `user_prompt` OTel event now carries the prompt twice, as `prompt` and `prompt_text`, so a collector rule that masks `prompt` by name leaks it through the new attribute. Content capture widened to MCP, WebFetch and WebSearch outputs under `OTEL_LOG_TOOL_CONTENT=1`. Behind a Claude apps gateway, background commands, the agents view and daemon workers still sent telemetry and flag requests to Anthropic until 2.1.290. The `/ultrareview` upload filter missed colon-named and renamed key files until 2.1.285 and 2.1.280, and its staged copies were readable from the sandbox until 2.1.292. `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` stopped covering user-installed mods' network calls at 2.1.288, with no changelog line.

Channel: tagged-release (2.1.280 to 2.1.287 on stable; 2.1.290 and 2.1.292 latest only); docs-only for the 2.1.288 mods network change. Half: defect. Date: 2026-09-22 (2.1.280), 2026-09-25 (2.1.283), 2026-09-29 (2.1.285), 2026-10-01 (2.1.287), 2026-10-02 (2.1.288), 2026-10-05 (2.1.290), 2026-10-06 (2.1.292).

Operator consequence: Add `prompt_text` to every OTel masking or drop rule before rolling 2.1.287, which stable now serves. Gateway-only deployments that promise no direct Anthropic traffic need 2.1.290 or a managed `forceLoginMethod: gateway`. Do not treat `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` as a network control over mods; use `allowManagedModsOnly` or an egress proxy.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L715
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L506
- https://code.claude.com/docs/en/monitoring-usage
