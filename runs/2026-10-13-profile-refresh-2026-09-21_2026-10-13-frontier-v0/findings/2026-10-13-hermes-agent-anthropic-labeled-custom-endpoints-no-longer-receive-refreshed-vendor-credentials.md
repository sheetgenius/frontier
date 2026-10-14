---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-anthropic-labeled-custom-endpoints-no-longer-receive-refreshed-vendor-credentials
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/a4d8f173a9c4bd287f57ab64c95a9646caede20d
    precision: commit
---
# 2026-10-13-hermes-agent-anthropic-labeled-custom-endpoints-no-longer-receive-refreshed-vendor-credentials

Anthropic-labeled custom endpoints no longer receive refreshed vendor credentials. An alias under the anthropic provider could point at a foreign host with no key, then refresh with ANTHROPIC_API_KEY or an OAuth token before a request or after a 401. The earlier substring check also treated a URL containing anthropic.com outside its hostname as native. The fix checks the parsed hostname before vendor credential refresh. The change explicitly identifies ~/.claude OAuth state as a shared credential source, not a bundled Claude Code agent.

Channel: tagged-release (first stable v2026.9.24). Half: defect. Date: 2026-09-23.

Operator consequence: Review custom model aliases and base URLs on earlier tags; rotate vendor credentials if route or request logs establish exposure. Preserve intentional proxy credentials separately from native Anthropic credentials.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/a4d8f173a9c4bd287f57ab64c95a9646caede20d
