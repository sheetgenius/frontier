---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-internal-browser-sign-ins-remain-shared-after-the-panel-and-deadline-fixes
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/default_config.yaml#L14-L28
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/helpers/runtime.py#L3192-L3217
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/commit/fc6370b3ee863685fa750eeff1eb0473f307e2c5
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/b68306356c7e450b8b51b287c669f90dfbafdd86
    precision: commit
---
# 2026-10-13-agent-zero-internal-browser-sign-ins-remain-shared-after-the-panel-and-deadline-fixes

Internal browser sign-ins remain shared after the panel and deadline fixes. v2.13 clears stale Browser panel state and rejects empty evaluate requests, but the internal browser still shares cookies/sign-ins across chats at v2.14. browser_tab_scope: per_context filters displayed tabs, not the cookie store. evaluate_timeout_seconds defaults to 30, accepts 0.1..60, and can interrupt or reload a timed-out tab. These are internal-browser observations, not a claim that separately authorized host-browser profiles all share state.

Channel: tagged-release. Half: both. Date: 2026-09-23 (first stable; implementations 2026-09-12..2026-09-17).

Operator consequence: Sign the internal browser only into accounts every chat may use, including admitted messaging users whose chats reach it. Use separate workcells for distinct sign-in trust groups. Restructure scripts exceeding the 30-second default or deliberately set a higher deadline up to 60 seconds. Tab filtering is not account isolation.

## Receipt
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/default_config.yaml#L14-L28
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/helpers/runtime.py#L3192-L3217
- https://github.com/agent0ai/agent-zero/commit/fc6370b3ee863685fa750eeff1eb0473f307e2c5
- https://github.com/agent0ai/agent-zero/commit/b68306356c7e450b8b51b287c669f90dfbafdd86
