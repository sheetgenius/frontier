---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-plugin-browsing-and-device-enrollment-remove-setup-steps-while-retaining-explicit-authorit
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/protocol/rpc-system-and-channels.md#L94-L145
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/cli/plugins/install.md#L101-L118
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/cli/connect.md#L24-L44
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/nodes/session-hosting.md#L62-L77
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-plugin-browsing-and-device-enrollment-remove-setup-steps-while-retaining-explicit-authorit

Plugin browsing and device enrollment remove setup steps while retaining explicit authority. The Gateway can browse and search ClawHub with local installed state, inspect a selected release, and install through separate administrative methods. Stable official installs try the running core's version and retain a visible compatibility fallback when that build is unavailable. Generated join commands now include `--service --session-host`, enrolling a persistent host in one step; the underlying node runtime still does not host sessions without consent. Omitting `--session-host` retains a command-only service.

Channel: tagged-release. Half: capability. Date: 2026-10-18.

Operator consequence: Use the UI for discovery and the generated join command for a machine intentionally trusted as Gateway infrastructure. Inspect the selected plugin release and capability consent instead of treating a listing as installability or security proof. A shorter command removes setup work, but the persistent service and session-host permission remain decisions the owner must understand.

## Receipt
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/protocol/rpc-system-and-channels.md#L94-L145
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/cli/plugins/install.md#L101-L118
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/cli/connect.md#L24-L44
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/nodes/session-hosting.md#L62-L77
