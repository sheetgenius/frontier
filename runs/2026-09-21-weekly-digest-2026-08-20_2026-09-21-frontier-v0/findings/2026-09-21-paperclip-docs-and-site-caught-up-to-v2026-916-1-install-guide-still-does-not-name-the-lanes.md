---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-paperclip-docs-and-site-caught-up-to-v2026-916-1-install-guide-still-does-not-name-the-lanes
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.916.1/doc/CHANNELS.md
    precision: tagged_commit_file
---
# 2026-09-21-paperclip-docs-and-site-caught-up-to-v2026-916-1-install-guide-still-does-not-name-the-lanes

Docs and site caught up to v2026.916.1; install guide still does not name the lanes. Docs and site caught up to v2026.916.1; install guide still does not name the lanes

Channel: docs-only. Half: neither. Date: observed 2026-09-23.

Operator consequence: npm dist-tags remain the channel source of truth. The install guide's bare `npx paperclipai` is `@latest` = 2026.916.1. Node 24.11.0 is the floor from v2026.831.0 on; npm installs on Node 22/23 only warn.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.916.1/doc/CHANNELS.md
