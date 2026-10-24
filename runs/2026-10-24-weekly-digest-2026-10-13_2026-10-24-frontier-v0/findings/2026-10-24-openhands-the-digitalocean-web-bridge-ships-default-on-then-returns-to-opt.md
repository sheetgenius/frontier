---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-the-digitalocean-web-bridge-ships-default-on-then-returns-to-opt
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/commit/1e850162beea360c61b75bee8c0d818b405be184
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/commit/84a5d30a4afef6a9fd805c272b1f88d2f0909569
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/commit/6eb91bb8097d2a2b8da6b3ac5655ee6b6d8912b3
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/commit/801a3c72886f731ffb7c4af130b46d10e1906e4c
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json
    precision: tagged_commit_file
---
# 2026-10-24-openhands-the-digitalocean-web-bridge-ships-default-on-then-returns-to-opt

The DigitalOcean web bridge ships default-on, then returns to opt-in. The integration itself was already released before this window. What changes now is the bridge default: v1.28.0 includes the earlier default-on merge, but v1.30.0 restores `MARS_WEB=1`. Subsequent releases forward the key typed by the user when it was not embedded in the page, preserve signed-in state, and choose the smallest VM for a new agent. The current code still describes the bridge as experimental.

Channel: tagged-release. Half: both. Date: 2026-10-19; 2026-10-22; 2026-10-23.

Operator consequence: Set the flag explicitly on v1.33.0 when using this path; do not carry forward an expectation that an upgrade enables it automatically. Recheck sign-in and selected VM size before creating paid resources. The lifecycle repairs reduce repeated authentication and setup work, while provider selection and resource sizing remain deliberate. DigitalOcean's current [Managed Agents documentation](https://docs.digitalocean.com/products/managed-agents/) describes public preview; a stable Canvas tag does not change the partner service's channel.

## Receipt
- https://github.com/OpenHands/OpenHands/commit/1e850162beea360c61b75bee8c0d818b405be184
- https://github.com/OpenHands/OpenHands/commit/84a5d30a4afef6a9fd805c272b1f88d2f0909569
- https://github.com/OpenHands/OpenHands/commit/6eb91bb8097d2a2b8da6b3ac5655ee6b6d8912b3
- https://github.com/OpenHands/OpenHands/commit/801a3c72886f731ffb7c4af130b46d10e1906e4c
- https://github.com/OpenHands/OpenHands/blob/v1.33.0/config/defaults.json
