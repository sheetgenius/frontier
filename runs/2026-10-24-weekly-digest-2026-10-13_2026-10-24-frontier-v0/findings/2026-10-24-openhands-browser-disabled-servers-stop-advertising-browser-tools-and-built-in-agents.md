---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-browser-disabled-servers-stop-advertising-browser-tools-and-built-in-agents
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/8efff8d3cf1a5a3fcf7ce5e3b97c7f00684d9547
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/4804aa0be06f3a90e88037a3a580e7c069a2195b
    precision: commit
---
# 2026-10-24-openhands-browser-disabled-servers-stop-advertising-browser-tools-and-built-in-agents

Browser-disabled servers stop advertising browser tools and built-in agents. The server's usable-tool list and browser-only built-in sub-agent discovery now follow the configured browser availability, instead of advertising choices disabled by server configuration.

Channel: tagged-release. Half: both. Date: 2026-10-15 (SDK v1.55.0).

Operator consequence: Inspect advertised tools and built-in agents on browser-disabled deployments and remove custom catalog filtering only after checking the result. This aligns discovery with configuration; it does not establish an OS-level prohibition on browser execution.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/8efff8d3cf1a5a3fcf7ce5e3b97c7f00684d9547
- https://github.com/OpenHands/software-agent-sdk/commit/4804aa0be06f3a90e88037a3a580e7c069a2195b
