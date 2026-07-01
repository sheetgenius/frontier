---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-openhands-cloud-1-39-0-tagged-2026-06-24-with-a-large-16-item-cve
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/releases/tag/cloud-1.39.0
    precision: github_release
---
# 2026-07-01-openhands-cloud-1-39-0-tagged-2026-06-24-with-a-large-16-item-cve

cloud-1.39.0 tagged (2026-06-24) with a large (~16-item) CVE/dependency-security batch plus multi-model LLM discovery, Jira Data Center OAuth, and conversation limits (channel: tagged-release, 2026-06-24). Operator consequence: Cloud operators should upgrade and re-audit dependency posture: batch closes CVE-2026-48526 (pyjwt 2.13.0), CVE-2026-49855 (tornado 6.5.7), CVE-2026-54278 (aiohttp 3.14.1), CVE-2026-53539 (python-multipart >=0.0.30), CVE-2026-45409 (idna 3.15), CVE-2026-49458/GHSA-cmwh-pvxp-8882 (dompurify), CVE-2026-44727 (jupyter-server 2.20.0), CVE-2026-54283 (starlette 1.3.1), and ~8 more. New per-user Jira Data Center OAuth token persistence/injection and BYOK gating change how identity and model access are governed — study before enabling. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/OpenHands/OpenHands/releases/tag/cloud-1.39.0
