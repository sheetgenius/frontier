---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-docs-now-cover-v2026-1012-0-but-the-vps-node-command-violates-the-engine-floor
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/reference/changelog.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/guides/getting-started/installation.md#L197-L217
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/paperclipai/2026.1012.0
    precision: official_docs
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/CHANNELS.md#L7-L18
    precision: tagged_commit_file
---
# 2026-10-13-paperclip-docs-now-cover-v2026-1012-0-but-the-vps-node-command-violates-the-engine-floor

Docs now cover v2026.1012.0 but the VPS Node command violates the engine floor. By window close, versioned docs cover v2026.1012.0, including assistant MCP, locks, grants and shorter default instructions. Their displayed October 12 date is not their October 13 publication timestamp. The installation guide still requires Node >=24.11.0 while its VPS command requests NodeSource setup_20.x; its basic install uses unqualified paperclipai without explaining all four channels. Updated budget screenshots include an additional UI patch absent from stable (section 24). The homepage quotes have no contemporaneous capture or versioned October 13 receipt and are excluded from historical publication facts.

Channel: docs-only. Half: defect. Date: 2026-10-13.

Operator consequence: Install Node 24.11.0 or newer explicitly and use the tagged README plus exact package version, rather than copying the contradictory VPS line. Use tagged permission and hire defaults for access decisions. Public documentation did catch up during this window; the remaining defect is the command and channel guidance, not an absence of current documentation.

## Receipt
- https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/reference/changelog.md
- https://github.com/paperclipai/paperclip-docs/blob/d811a89622809a04001af07e84e427a86162a3bb/docs/guides/getting-started/installation.md#L197-L217
- https://registry.npmjs.org/paperclipai/2026.1012.0
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/CHANNELS.md#L7-L18
