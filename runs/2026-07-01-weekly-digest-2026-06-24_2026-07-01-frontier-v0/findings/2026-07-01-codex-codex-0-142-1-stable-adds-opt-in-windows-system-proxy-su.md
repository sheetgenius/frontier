---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-codex-codex-0-142-1-stable-adds-opt-in-windows-system-proxy-su
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/pull/26708
    precision: merged_pr
---
# 2026-07-01-codex-codex-0-142-1-stable-adds-opt-in-windows-system-proxy-su

Codex 0.142.1 stable adds opt-in Windows system proxy support for authentication (PAC/WPAD/static/bypass) (channel: tagged-release, 2026-06-25). Operator consequence: Windows operators behind corporate proxies can now authenticate Codex through system proxy settings (PAC, WPAD, static proxies, bypass rules), opt-in. 0.142.2 adds the macOS counterpart via respect_system_proxy (#26709). Relevant if proxy config previously blocked auth; observe/try. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/openai/codex/pull/26708
