---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-canvas-v1-25-0-refuses-agent-servers-older-than-1-51
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json#L8-L10
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.24.0/config/defaults.json#L9
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/agent-server-compatibility.ts#L20-L21
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/docs/DEVELOPMENT.md#L90-L133
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/pull/17516
    precision: merged_pr
---
# 2026-10-13-openhands-canvas-v1-25-0-refuses-agent-servers-older-than-1-51

Canvas v1.25.0 refuses agent servers older than 1.51.0. Canvas checks every connected agent server's version against this floor (`assertAgentServerVersionIsSupported`). v1.25.0 raised it from 1.28.0 to 1.51.0, the first release with the tool catalog, tools as the only tool control, profile persona and the resolve-then-finalize launch, and Canvas deleted its fallbacks for older servers. The repo docs add that meeting the floor does not mean every Canvas feature works on that server; ACP model discovery, for one, needs 1.54.0 and falls back without it. The docs site's v1.25.0 release notes do not mention the floor.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: Before moving Canvas past v1.24.0, upgrade every remote, VM, team or container agent server you connect to 1.51.0 or later (1.54.0 to match v1.27.1). A server below the floor shows as unsupported rather than half-working. `agent-canvas --info` prints the floor. Shared team servers mean someone has to coordinate this upgrade.

## Receipt
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json#L8-L10
- https://github.com/OpenHands/OpenHands/blob/v1.24.0/config/defaults.json#L9
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/agent-server-compatibility.ts#L20-L21
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/docs/DEVELOPMENT.md#L90-L133
- https://github.com/OpenHands/OpenHands/pull/17516
