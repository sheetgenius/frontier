---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-digitalocean-managed-agents-becomes-a-canvas-backend-v1-27
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: medium
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/17838
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.27.0
    precision: github_release
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json#L37-L41
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/docs/blob/9daa7e5b5cd49453ce0f571810859a747eab5334/openhands/usage/agent-canvas/backend-setup/digitalocean.mdx
    precision: tagged_commit_file
---
# 2026-10-13-openhands-digitalocean-managed-agents-becomes-a-canvas-backend-v1-27

DigitalOcean Managed Agents becomes a Canvas backend (v1.27.0). Canvas can use DigitalOcean Managed Agents sessions as backends: desktop OAuth uses a loopback callback and state check, a personal access token works in desktop/web, and the bridge lists or creates agents and opens port-forward tunnels. keep_warm:false pauses idle sessions; backend removal distinguishes Disconnect only from Stop session. Tokens stay in Electron main or web-server memory. Stable v1.27.1 requires MARS_WEB=1 for the browser bridge; the agent LLM is configured inside its server. The current #17838 HUMAN paragraph reports a real-account browser test of sign-in, create/connect/chat, pause/resume and both removal choices, while its AGENT paragraph still says a human account test is needed. That report is attributed; its addition time and live behavior were not independently established. Section 24 records the unreleased default change.

Channel: tagged-release. Half: capability. Date: 2026-10-12.

Operator consequence: Try the released backend when you need a hosted session without operating an agent server, and validate your account's connection and stop behavior. Choose Stop session if backend removal should end it. For the all-in-one Docker image, use 1.27.1, whose repair includes the bridge files missing from 1.27.0. A maintainer's reported test does not substitute for acceptance on your deployment.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/17838
- https://github.com/OpenHands/OpenHands/releases/tag/v1.27.0
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/config/defaults.json#L37-L41
- https://github.com/OpenHands/docs/blob/9daa7e5b5cd49453ce0f571810859a747eab5334/openhands/usage/agent-canvas/backend-setup/digitalocean.mdx
