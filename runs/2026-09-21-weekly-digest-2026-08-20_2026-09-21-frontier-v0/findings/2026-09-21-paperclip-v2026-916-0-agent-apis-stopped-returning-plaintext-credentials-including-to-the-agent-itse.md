---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-paperclip-v2026-916-0-agent-apis-stopped-returning-plaintext-credentials-including-to-the-agent-itse
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/9860
    precision: merged_pr
---
# 2026-09-21-paperclip-v2026-916-0-agent-apis-stopped-returning-plaintext-credentials-including-to-the-agent-itse

v2026.916.0: agent APIs stopped returning plaintext credentials, including to the agent itself. Per the release body, agent detail reads, the company agent list, and create/update/lifecycle routes echoed `adapterConfig.env` as stored, so `plain` bindings (API keys, tokens) came back verbatim to any caller that could read the agent, including the agent via `GET /api/agents/me`. All three response families now go through one redacting presenter.

Channel: tagged-release. Half: defect (closed). Date: 2026-09-16.

Operator consequence: Every stable before v2026.916.0, including all four earlier in-window stables, exposes plain env credentials to any agent that can read agents in its company. Upgrade, and rotate any key stored as a `plain` binding on an instance where agents or less-trusted board users could call the agents API. Move credentials to secret bindings or the new Connections path (item 8). This was fixed as a breaking change with no advisory; do not wait for a GHSA to act.

## Receipt
- https://github.com/paperclipai/paperclip/pull/9860
