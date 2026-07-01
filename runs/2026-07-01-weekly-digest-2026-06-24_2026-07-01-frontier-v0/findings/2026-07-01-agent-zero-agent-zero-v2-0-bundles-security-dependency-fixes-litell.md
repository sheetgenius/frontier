---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-agent-zero-agent-zero-v2-0-bundles-security-dependency-fixes-litell
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: medium
evidence:
  - url: https://github.com/agent0ai/agent-zero/releases/tag/v2.0
    precision: github_release
---
# 2026-07-01-agent-zero-agent-zero-v2-0-bundles-security-dependency-fixes-litell

Agent Zero v2.0 bundles security/dependency fixes: LiteLLM upgraded to 1.88.1 above the CVE-2026-42271 patched floor, OpenAI SDK pinned to 1.88.1, and Starlette pinned to patched 1.0.1 for a Host-header advisory. (channel: tagged-release, 2026-06-24). Operator consequence: Upgrade to pick up the security floor. Verbatim from notes: 'LiteLLM upgraded to 1.88.1 (above CVE-2026-42271 patched floor); OpenAI SDK pinned to 1.88.1.' and 'Starlette pinned to patched 1.0.1 release for Host-header advisory.' Anyone pinned to v1.20 or earlier is below these floors. Note: the CVE-2026-42271 identifier and severity should be independently confirmed against the LiteLLM advisory before publishing it as a hard claim -- the receipt only backs that Agent Zero moved above a stated patched floor. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/agent0ai/agent-zero/releases/tag/v2.0
