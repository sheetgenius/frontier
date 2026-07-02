---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-hermes-agent-v2026-7-1-security-wave-tagged
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1
    precision: github_release
---
# 2026-07-02-hermes-agent-v2026-7-1-security-wave-tagged

Hermes Agent `v2026.7.1` tags the prior main-only security wave. Release notes
list MCP-config persistence hardening, cron `base_url` credential-exfiltration
blocking, non-reusable prefix-secret sentinels in file reads, Slack `xapp-` token
redaction, browser cloud-metadata guardrails, resume/session scoping, and an
`aiohttp` dependency floor. Channel: tagged-release. Operator consequence:
operators no longer need to track main for this wave; upgrade from `v2026.6.19`
if those boundaries matter.

## Receipt
- https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1
