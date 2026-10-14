---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-docker-uses-normal-bridge-networking-without-a-heypi-egress-selector
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime-docker.ts#L16-L35
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime.ts#L25-L39
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi-runtime-docker/src/index.ts#L274-L275
    precision: tagged_commit_file
  - url: https://github.com/docker/docs/blob/d751b36e43fc991c8810520c74adcd422cc0b959/content/manuals/engine/network/drivers/bridge.md#L19-L44
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L7-L35
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/.env.example#L9-L11
    precision: tagged_commit_file
---
# 2026-10-13-heypi-docker-uses-normal-bridge-networking-without-a-heypi-egress-selector

Docker uses normal bridge networking without a heypi egress selector. This corrects a historical network-off assumption. The current Docker runtime runs a detached container with workspace/shared binds, a read-only skills bind and runtime environment values, but no network selector, user override, capability drops or resource limits. Normal Docker defaults attach it to the bridge and use masquerading for external access. Effective connectivity remains subject to daemon, routing and firewall policy. The template forwards GITHUB_TOKEN into runtime environment only when the operator supplies it.

Channel: preview-or-beta heypi 0.3.0-beta.2. Half: defect. Date: 2026-07-21 (historical beta.0 rewrite); re-verified for the 2026-10-13 profile.

Operator consequence: Do not transfer the old Docker network-none default to the 0.3 beta. Enforce egress policy at the daemon/firewall or in a custom runtime and test the routes that matter. Inspect runtime environment values for credentials visible to model-directed commands. The docker() builder itself exposes only workspace, image and env; neither approvals nor the container label establish a network boundary.

## Receipt
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime-docker.ts#L16-L35
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/runtime.ts#L25-L39
- https://github.com/hunvreus/heypi/blob/19f1062bc0993a620ac5de4f263c0d78086cbeee/packages/heypi-runtime-docker/src/index.ts#L274-L275
- https://github.com/docker/docs/blob/d751b36e43fc991c8810520c74adcd422cc0b959/content/manuals/engine/network/drivers/bridge.md#L19-L44
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/index.ts#L7-L35
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/examples/codex-tag/.env.example#L9-L11
