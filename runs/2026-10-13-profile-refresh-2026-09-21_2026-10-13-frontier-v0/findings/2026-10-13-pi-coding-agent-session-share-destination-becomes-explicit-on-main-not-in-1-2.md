---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-session-share-destination-becomes-explicit-on-main-not-in-1-2
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/cea257439d5666ad6a987c065eb3ab0e230a135d
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/cea257439d5666ad6a987c065eb3ab0e230a135d/packages/coding-agent/src/modes/interactive/session-share.ts
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-session-share-destination-becomes-explicit-on-main-not-in-1-2

Session share destination becomes explicit on main, not in 1.2.0. Main adds sessionShareDestination with auto, gist, and radius. Auto keeps the existing choice of authenticated Radius, otherwise GitHub gist. Explicit gist skips Radius; explicit radius requires authentication and does not silently fall back. The added changelog line sits beneath the 1.2.0 heading after the tag; ancestry proves the setting is unreleased.

Channel: main-unreleased. Half: capability. Date: 2026-10-13.

Operator consequence: Do not configure this as an available 1.2.0 destination control. Inspect where existing /share uploads go before using it, and wait for a containing release to pin the destination through this setting.

## Receipt
- https://github.com/earendil-works/pi/commit/cea257439d5666ad6a987c065eb3ab0e230a135d
- https://github.com/earendil-works/pi/blob/cea257439d5666ad6a987c065eb3ab0e230a135d/packages/coding-agent/src/modes/interactive/session-share.ts
