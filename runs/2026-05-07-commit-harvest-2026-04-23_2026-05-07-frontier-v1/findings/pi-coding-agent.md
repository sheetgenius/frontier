---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-07-pi-thin-harness-churn
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-04-23
  end: 2026-05-07
commit_count: 229
status: accepted_signal
confidence: high
accessibility_impact: medium
operator_relevance: high
bitter_relevance: high
factory_relevance: low
actionability: test
evidence:
  - label: "Cached Codex websocket transport"
    url: https://github.com/badlogic/pi-mono/commit/4745a9589883fb8200981ddfecb94a593d6e95a2
    precision: commit
  - label: "Fallback from Codex websocket to SSE"
    url: https://github.com/badlogic/pi-mono/commit/370fdae6fa23881b044efbab571fb7bf6267ed6e
    precision: commit
  - label: "Remove Gemini CLI and Antigravity support"
    url: https://github.com/badlogic/pi-mono/commit/fe66edd943691f8eac295fef68ce36930c35fa05
    precision: commit
  - label: "Add Cloudflare AI Gateway provider"
    url: https://github.com/badlogic/pi-mono/commit/24fb6b833b7263df3d08889cc492b03d46d3779b
    precision: commit
  - label: "Searchable auth provider login flow"
    url: https://github.com/badlogic/pi-mono/commit/010e9acfe959f437613bcba7139b264012ca43a4
    precision: commit
  - label: "Session dir env"
    url: https://github.com/badlogic/pi-mono/commit/8191d59c170c9bb336a82771e1826d25bb7ec1e0
    precision: commit
  - label: "Compact read rendering"
    url: https://github.com/badlogic/pi-mono/commit/588639fa97567a661dac876dc2b1970c8a3497ae
    precision: commit
---

# Pi Coding Agent: The Thin Harness Moves Fast Because It Refuses To Own Everything

## What Changed

Pi's two-week commit stream is a reminder that a small harness can adapt quickly. It added and removed provider support, changed Codex transport behavior, added a cached websocket transport and SSE fallback, improved auth selection, tightened terminal rendering, added session-directory controls, and kept sanding down export, clipboard, config, and TUI behavior.

The removal of Gemini CLI and Antigravity support is as important as the additions. Pi's thesis is not "integrate everything forever." It is "keep the core small enough that integrations can change without defining the product."

## Operator Consequence

Thin harnesses are attractive because they are inspectable and fast-moving. They are also volatile. Operators should not treat a current integration list as durable strategy.

## Bitter Consequence

Pi is a useful Bitter agent candidate precisely because it is a harness, not a doctrine. Bitter should record exact Pi version, provider, transport, session directory, extension state, auth source, and terminal mode.

The lesson for Bitter is not to become Pi. The lesson is to keep agent adapters replaceable while the operator loop stays durable.
