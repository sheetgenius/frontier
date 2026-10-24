---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-drops-filesystem-history-from-workspace-authorization
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/813e808af462b6a6f9db38b6791e3bfe8465b51e
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/agent-access-map/workspaces.md#L59-L104
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/agent-access-map/workspaces.md#L242-L246
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-beta-drops-filesystem-history-from-workspace-authorization

Beta drops filesystem history from workspace authorization. The 2026-10-20 change removes historical source/reader intersections, physical-alias inventories and acquisition classifications from runtime file authorization. Current task and selected-configuration authority plus OS isolation govern bytes. App-record privacy remains, but historical private-task ownership does not prevent a currently authorized task from using the selected checkout. New preparation no longer creates a remote-clone fallback because of historical ownership; existing recovery receipts remain supported.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Before adopting 2026.1023.0-beta.0, inspect shared checkouts, directory bindings and OS isolation separately from private-task API access. This deletes a substantial authorization layer, but is not proof that a model learned to enforce confidentiality. The operator now owns the relationship between readable bytes and private application records. No exploit or live denied/allowed matrix was independently reproduced.

## Receipt
- https://github.com/paperclipai/paperclip/commit/813e808af462b6a6f9db38b6791e3bfe8465b51e
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/agent-access-map/workspaces.md#L59-L104
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/agent-access-map/workspaces.md#L242-L246
