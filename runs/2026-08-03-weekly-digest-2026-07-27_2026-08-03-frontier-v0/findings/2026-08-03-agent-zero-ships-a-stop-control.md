---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-agent-zero-ships-a-stop-control
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/releases/tag/v2.8
    precision: github_release
  - url: https://github.com/agent0ai/agent-zero/releases/tag/v2.7
    precision: github_release
---
# 2026-08-03-agent-zero-ships-a-stop-control

Agent Zero v2.8 (2026-08-01, stable) ships a stop button and a /stop API that cancels a running agent context without deleting it, reachable programmatically. Most authority work this publication records constrains an agent before it acts; this is the ability to stop one that already is, in a tagged release and available to a supervising process rather than only a human at a keyboard. v2.7 (2026-07-27) adds project-scoped HTTP and SOCKS proxy settings for the internal Docker browser, with bypass rules and optional authentication, passed through Playwright's native proxy option. Channel: tagged-release. Version note: the line moved from v1.20 to v2.x on 2026-06-26 and has tagged eight times since.

## Receipt
- https://github.com/agent0ai/agent-zero/releases/tag/v2.8
- https://github.com/agent0ai/agent-zero/releases/tag/v2.7
