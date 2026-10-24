---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-the-npm-next-sdk-can-run-native-file-tools-on-a-supplied-filesystem-tree
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/@cursor%2fsdk/1.1.0-beta.0
    precision: official_docs
  - url: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.1.0-beta.0.tgz
    precision: official_docs
  - url: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz
    precision: official_docs
---
# 2026-10-24-cursor-the-npm-next-sdk-can-run-native-file-tools-on-a-supplied-filesystem-tree

The npm next SDK can run native file tools on a supplied filesystem tree. A local embedder can supply a filesystem tree or factory for native read, edit, search and Task tools. The declared mode omits host shell, computer-use and other host-dependent tools, rejects requesting them explicitly, skips hooks and skill discovery, and avoids host git context. Children share the live tree and per-run temporary mount; `childOverlayFs` provides a private writable overlay. The filesystem must be supplied again on resume. Web/MCP/custom tools are not thereby proven to lose their external authority.

Channel: preview-or-beta. Half: capability. Date: 2026-10-22.

Operator consequence: Trial the beta for document or code transformations where mounting a controlled data tree can replace a bespoke tool adapter. Treat removal of hooks as a policy change, and test child writes, unsupported tools and resume. This is a promising general embedding primitive, not a stable release or an OS sandbox guarantee; keep 1.0.40 for a stable-only deployment.

## Receipt
- https://registry.npmjs.org/@cursor%2fsdk/1.1.0-beta.0
- https://registry.npmjs.org/@cursor/sdk/-/sdk-1.1.0-beta.0.tgz
- https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz
