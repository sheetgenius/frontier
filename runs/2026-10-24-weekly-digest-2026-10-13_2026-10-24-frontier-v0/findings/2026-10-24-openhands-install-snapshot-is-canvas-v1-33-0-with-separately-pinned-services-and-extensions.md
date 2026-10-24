---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-install-snapshot-is-canvas-v1-33-0-with-separately-pinned-services-and-extensions
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0
    precision: github_release
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/README.md
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/@openhands%2fagent-canvas
    precision: official_docs
  - url: https://github.com/OpenHands/enterprise/releases/tag/1.79.0
    precision: github_release
  - url: https://github.com/OpenHands/enterprise/commit/8b923c3568a8809adbb9b648d2a0ee95d5cc527a
    precision: commit
---
# 2026-10-24-openhands-install-snapshot-is-canvas-v1-33-0-with-separately-pinned-services-and-extensions

Install snapshot is Canvas v1.33.0 with separately pinned services and extensions. As observed on 24 October, npm latest selects Canvas 1.33.0; alpha/beta selectors are older publications. Install `npm install -g @openhands/agent-canvas@1.33.0`, then `agent-canvas`, with Node >=24 and uv, or use the release's desktop assets. The all-in-one image can be pinned to `ghcr.io/openhands/agent-canvas:1.33.0`; its latest and version selectors returned the same digest at their recorded reads. The bundle pins agent-server 1.58.1, automation 1.25.1 and extensions 0.35.0, and rejects remote servers below 1.55.0. Enterprise source 1.79.0 is separate, with Compose selecting Canvas 1.32.0 plus SDK 1.58.1 and automation 1.25.1. The Canvas beta-badge removal is not an operational guarantee.

Channel: tagged-release. Half: capability. Date: 2026-10-24 (pointer observations); 2026-10-23 (Canvas v1.33.0 publication).

Operator consequence: Coordinate separately managed services and pin both outer Canvas and any inner conversation-server image. Keep licensed Enterprise distribution and Cloud serving identity separate from public source releases. Selectable Docker and Enterprise child launching are opt-ins with the exact network/gate qualifications in section 6; the DigitalOcean bridge requires `MARS_WEB=1`. Session-key argv removal, ACP OAuth forwarding and Debian CA repair remain on the inspected main branches, outside the current stable bundle. No install or container was executed.

## Receipt
- https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/README.md
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json
- https://registry.npmjs.org/@openhands%2fagent-canvas
- https://github.com/OpenHands/enterprise/releases/tag/1.79.0
- https://github.com/OpenHands/enterprise/commit/8b923c3568a8809adbb9b648d2a0ee95d5cc527a
